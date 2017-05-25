webpackJsonp([0,31],{

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(292),
  /* template */
  __webpack_require__(374),
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

/***/ 212:
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

/***/ 221:
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

/***/ 224:
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

/***/ 242:
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

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UuidUtil = __webpack_require__(254);

var _UuidUtil2 = _interopRequireDefault(_UuidUtil);

var _SecondsUtil = __webpack_require__(253);

var _SecondsUtil2 = _interopRequireDefault(_SecondsUtil);

var _TimeConverter = __webpack_require__(221);

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

/***/ 251:
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

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UuidUtil = __webpack_require__(254);

var _UuidUtil2 = _interopRequireDefault(_UuidUtil);

var _SecondsUtil = __webpack_require__(253);

var _SecondsUtil2 = _interopRequireDefault(_SecondsUtil);

var _TimeConverter = __webpack_require__(221);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _Action = __webpack_require__(249);

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

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeConverter = __webpack_require__(221);

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

/***/ 254:
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

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {!function(e,o){ true?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.VueColor=o():e.VueColor=o()}(this,function(){return function(e){function o(r){if(t[r])return t[r].exports;var a=t[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}var t={};return o.m=e,o.c=t,o.p="",o(0)}([function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=t(37),i=r(a),n=t(38),s=r(n),l=t(41),c=r(l),u=t(42),d=r(u),h=t(39),f=r(h),_=t(40),p=r(_),v=t(36),g=r(v),b=t(6),m=r(b),x=t(8),w=r(x),C=t(4),y=r(C),k=t(5),F=r(k),A=t(7),R=r(A),S=t(3),M=r(S),N={version:"1.0.26",Compact:i["default"],Material:s["default"],Slider:c["default"],Swatches:d["default"],Photoshop:f["default"],Sketch:p["default"],Chrome:g["default"],Alpha:m["default"],Checkboard:w["default"],EditableInput:y["default"],Hue:F["default"],Saturation:R["default"],ColorMixin:M["default"]};e.exports=N},function(e,o){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],o=0;o<this.length;o++){var t=this[o];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(o,t){"string"==typeof o&&(o=[[null,o,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<o.length;a++){var n=o[a];"number"==typeof n[0]&&r[n[0]]||(t&&!n[2]?n[2]=t:t&&(n[2]="("+n[2]+") and ("+t+")"),e.push(n))}},e}},function(e,o,t){function r(e,o){for(var t=0;t<e.length;t++){var r=e[t],a=d[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(l(r.parts[i],o))}else{for(var n=[],i=0;i<r.parts.length;i++)n.push(l(r.parts[i],o));d[r.id]={id:r.id,refs:1,parts:n}}}}function a(e){for(var o=[],t={},r=0;r<e.length;r++){var a=e[r],i=a[0],n=a[1],s=a[2],l=a[3],c={css:n,media:s,sourceMap:l};t[i]?t[i].parts.push(c):o.push(t[i]={id:i,parts:[c]})}return o}function i(e,o){var t=_(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(o,r.nextSibling):t.appendChild(o):t.insertBefore(o,t.firstChild),g.push(o);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(o)}}function n(e){e.parentNode.removeChild(e);var o=g.indexOf(e);o>=0&&g.splice(o,1)}function s(e){var o=document.createElement("style");return o.type="text/css",i(e,o),o}function l(e,o){var t,r,a;if(o.singleton){var i=v++;t=p||(p=s(o)),r=c.bind(null,t,i,!1),a=c.bind(null,t,i,!0)}else t=s(o),r=u.bind(null,t),a=function(){n(t)};return r(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;r(e=o)}else a()}}function c(e,o,t,r){var a=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(o,a);else{var i=document.createTextNode(a),n=e.childNodes;n[o]&&e.removeChild(n[o]),n.length?e.insertBefore(i,n[o]):e.appendChild(i)}}function u(e,o){var t=o.css,r=o.media,a=o.sourceMap;if(r&&e.setAttribute("media",r),a&&(t+="\n/*# sourceURL="+a.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var d={},h=function(e){var o;return function(){return"undefined"==typeof o&&(o=e.apply(this,arguments)),o}},f=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),_=h(function(){return document.head||document.getElementsByTagName("head")[0]}),p=null,v=0,g=[];e.exports=function(e,o){o=o||{},"undefined"==typeof o.singleton&&(o.singleton=f()),"undefined"==typeof o.insertAt&&(o.insertAt="bottom");var t=a(e);return r(t,o),function(e){for(var i=[],n=0;n<t.length;n++){var s=t[n],l=d[s.id];l.refs--,i.push(l)}if(e){var c=a(e);r(c,o)}for(var n=0;n<i.length;n++){var l=i[n];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete d[l.id]}}}};var b=function(){var e=[];return function(o,t){return e[o]=t,e.filter(Boolean).join("\n")}}()},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,o){e.a&&e.a>1&&(e.a=1);var t=e.hex?(0,n["default"])(e.hex):(0,n["default"])(e),r=t.toHsl(),a=t.toHsv();return 0===r.s&&(r.h=e.h||o||0,a.h=e.h||o||0),{hsl:r,hex:t.toHexString().toUpperCase(),rgba:t.toRgb(),hsv:a,oldHue:e.h||o||r.h,source:e.source,a:e.a}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(35),n=r(i);o["default"]={props:["value"],data:function(){return{val:a(this.value)}},computed:{colors:{get:function(){return this.val},set:function(e){this.val=e,this.$emit("change-color",e)}}},watch:{value:function(e){this.val=a(e)}},created:function(){},methods:{colorChange:function(e,o){this.colors=a(e,o||this.oldHue),this.oldHue=this.colors.hsl.h},isValidHex:function(e){return(0,n["default"])(e).isValid()},simpleCheckForValidColor:function(e){for(var o=["r","g","b","a","h","s","a","v"],t=0,r=0,a=0;a<o.length;a++){var i=o[a];e[i]&&(t++,isNaN(e[i])||r++)}if(t===r)return e}}}},function(e,o,t){var r,a;t(56),r=t(18);var i=t(44);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(57),r=t(19);var i=t(45);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(65),r=t(16);var i=t(53);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(58),r=t(20);var i=t(46);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(66),r=t(17);var i=t(54);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),i=r(a),n=t(4),s=r(n),l=t(7),c=r(l),u=t(5),d=r(u),h=t(6),f=r(h);o["default"]={name:"Chrome",mixins:[i["default"]],props:{},components:{saturation:c["default"],hue:d["default"],alpha:f["default"],"ed-in":s["default"]},data:function(){return{fields:["hex","rgba","hsla"],fieldsIndex:0,highlight:!1}},computed:{activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))},toggleViews:function(){return this.fieldsIndex>=2?void(this.fieldsIndex=0):void this.fieldsIndex++},showHighlight:function(){this.highlight=!0},hideHighlight:function(){this.highlight=!1}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),i=r(a),n=t(4),s=r(n),l=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];o["default"]={name:"Compact",mixins:[i["default"]],props:{},components:{"ed-in":s["default"]},computed:{pick:function(){return this.colors.hex}},data:function(){return{defaultColors:l}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})},onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(4),i=r(a),n=t(3),s=r(n);o["default"]={name:"Material",mixins:[s["default"]],components:{"ed-in":i["default"]},methods:{onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),i=r(a),n=t(4),s=r(n),l=t(7),c=r(l),u=t(5),d=r(u),h=t(6),f=r(h);o["default"]={name:"Photoshop",mixins:[i["default"]],props:{head:{type:String,"default":"Color Picker"}},components:{saturation:c["default"],hue:d["default"],alpha:f["default"],"ed-in":s["default"]},data:function(){return{currentColor:"#FFF"}},created:function(){this.currentColor=this.colors.hex},methods:{childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e["#"]?this.isValidHex(e["#"])&&this.colorChange({hex:e["#"],source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))},handleAccept:function(){this.$emit("ok")},handleCancel:function(){this.$emit("cancel")}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),i=r(a),n=t(4),s=r(n),l=t(7),c=r(l),u=t(5),d=r(u),h=t(6),f=r(h),_=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"];o["default"]={name:"Sketch",mixins:[i["default"]],components:{saturation:c["default"],hue:d["default"],alpha:f["default"],"ed-in":s["default"]},data:function(){return{presetColors:_}},computed:{activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),i=r(a),n=t(5),s=r(n);o["default"]={name:"Slider",mixins:[i["default"]],props:{direction:String},components:{hue:s["default"]},computed:{activeOffset:function(){return Math.round(100*this.colors.hsl.s)/100===.5?Math.round(100*this.colors.hsl.l)/100:0}},data:function(){return{swatches:[".80",".65",".50",".35",".20"]}},methods:{hueChange:function(e){this.colorChange(e)},handleSwClick:function(e,o){this.colorChange({h:this.colors.hsl.h,s:.5,l:o,source:"hsl"})}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(34),i=r(a),n=t(3),s=r(n),l=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","blueGrey"],c=["900","700","500","300","100"],u=function(){var e=[];return l.forEach(function(o){var t=[];c.forEach(function(e){t.push(i["default"][o][e].toUpperCase())}),e.push(t)}),e}();o["default"]={name:"Swatches",mixins:[s["default"]],computed:{pick:function(){return this.colors.hex}},data:function(){return{defaultColors:u}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(8),i=r(a);o["default"]={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:i["default"]},computed:{colors:function(){return this.value},gradientColor:function(){var e=this.colors.rgba,o=[e.r,e.g,e.b].join(",");return"linear-gradient(to right, rgba("+o+", 0) 0%, rgba("+o+", 1) 100%)"}},methods:{handleChange:function(e,o){!o&&e.preventDefault();var t,r=this.$refs.container,a=r.clientWidth,i=(e.pageX||e.touches[0].pageX)-(r.getBoundingClientRect().left+window.pageXOffset);t=i<0?0:i>a?1:Math.round(100*i/a)/100,this.colors.a!==t&&this.$emit("on-change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:t,source:"rgba"})},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o){"use strict";function t(e,o,t){if("undefined"==typeof document)return null;var r=document.createElement("canvas");r.width=r.height=2*t;var a=r.getContext("2d");return a?(a.fillStyle=e,a.fillRect(0,0,r.width,r.height),a.fillStyle=o,a.fillRect(0,0,t,t),a.translate(t,t),a.fillRect(0,0,t,t),r.toDataURL()):null}function r(e,o,r){var i=e+","+o+","+r;if(a[i])return a[i];var n=t(e,o,r);return a[i]=n,n}Object.defineProperty(o,"__esModule",{value:!0});var a={};o["default"]={name:"Checkboard",props:{size:{type:[Number,String],"default":8},white:{type:String,"default":"#fff"},grey:{type:String,"default":"#e6e6e6"}},computed:{bgStyle:function(){return"url("+r(this.white,this.grey,this.size)+") center left"}}}},function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={name:"editableInput",props:{label:String,value:[String,Number],max:Number,arrowOffset:{type:Number,"default":1}},computed:{val:function(){return this.value}},filters:{maxFilter:{read:function(e){return this.max&&e>this.max?this.max:e},write:function(e,o){return e}}},methods:{update:function(e){this.handleChange(e.target.value)},handleChange:function(e){var o={};o[this.label]=e,this.$emit("on-change",o)},handleBlur:function(e){console.log(e)},handleKeyDown:function(e){var o=this.val,t=Number(o);if(t){var r=this.arrowOffset||1;38===e.keyCode&&(o=t+r,this.handleChange(o),e.preventDefault()),40===e.keyCode&&(o=t-r,this.handleChange(o),e.preventDefault())}},handleDrag:function(e){console.log(e)},handleMouseDown:function(e){console.log(e)}}}},function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={name:"Hue",props:{value:Object,direction:{type:String,"default":"horizontal"}},computed:{colors:function(){return this.value},directionClass:function(){return{"vue-color__c-hue--horizontal":"horizontal"===this.direction,"vue-color__c-hue--vertical":"vertical"===this.direction}},pointerTop:function(){return"vertical"===this.direction?-(100*this.colors.hsl.h/360)+100+"%":0},pointerLeft:function(){return"vertical"===this.direction?0:100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(e,o){!o&&e.preventDefault();var t,r,a=this.$refs.container,i=a.clientWidth,n=a.clientHeight,s=(e.pageX||e.touches[0].pageX)-(a.getBoundingClientRect().left+window.pageXOffset),l=(e.pageY||e.touches[0].pageY)-(a.getBoundingClientRect().top+window.pageYOffset);"vertical"===this.direction?(l<0?t=359:l>n?t=0:(r=-(100*l/n)+100,t=360*r/100),this.colors.hsl.h!==t&&this.$emit("on-change",{h:t,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(s<0?t=0:s>i?t=359:(r=100*s/i,t=360*r/100),this.colors.hsl.h!==t&&this.$emit("on-change",{h:t,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(33),i=r(a);o["default"]={name:"Saturation",props:{value:Object},computed:{colors:function(){return this.value},bgColor:function(){return"hsl("+this.colors.hsl.h+",100%, 50%)"},pointerTop:function(){return-(100*this.colors.hsv.v)+100+"%"},pointerLeft:function(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:(0,i["default"])(function(e,o){e(o)},50),handleChange:function(e,o){!o&&e.preventDefault();var t=this.$refs.container,r=t.clientWidth,a=t.clientHeight,i=(e.pageX||e.touches[0].pageX)-(t.getBoundingClientRect().left+window.pageXOffset),n=(e.pageY||e.touches[0].pageY)-(t.getBoundingClientRect().top+window.pageYOffset);i<0?i=0:i>r?i=r:n<0?n=0:n>a&&(n=a);var s=100*i/r,l=-(100*n/a)+100;this.throttle(this.onChange,{h:this.colors.hsl.h,s:s,v:l,a:this.colors.hsl.a,source:"rgb"})},onChange:function(e){this.$emit("on-change",e)},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__compact{padding-top:5px;padding-left:5px;width:240px;border-radius:2px;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16);background-color:#fff}.vue-color__compact__colors{overflow:hidden;padding:0;margin:0}.vue-color__compact__color-item{list-style:none;width:15px;height:15px;float:left;margin-right:5px;margin-bottom:5px;position:relative;cursor:pointer}.vue-color__compact__color-item--white{box-shadow:inset 0 0 0 1px #ddd}.vue-color__compact__color-item--white .vue-color__compact__dot{background:#000}.vue-color__compact__dot{position:absolute;top:5px;right:5px;bottom:5px;left:5px;border-radius:50%;opacity:1;background:#fff}.vue-color__compact__fields{display:flex;padding-bottom:6px;padding-right:5px;position:relative}.vue-color__compact__fields .vue-color__editable-input__input{width:70%;padding-left:30%;background:none;font-size:12px;color:#333;height:16px}.vue-color__compact__fields .vue-color__editable-input__label{position:absolute;top:3px;left:0;line-height:16px;text-transform:uppercase;font-size:12px;color:#999}.vue-color__compact__pick-color{position:absolute;top:6px;left:5px;height:9px;width:9px}.vue-color__compact__col-3{flex:1}.vue_color__compact__col-hex{flex:2}.vue_color__compact__col-hex .vue-color__editable-input__input{width:80%;padding-left:20%}.vue_color__compact__col-hex .vue-color__editable-input__label{display:none}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__editable-input{position:relative}.vue-color__editable-input__input{padding:0;border:0;outline:none}.vue-color__editable-input__label{text-transform:capitalize}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__c-hue{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:2px}.vue-color__c-hue--horizontal{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vue-color__c-hue--vertical{background:linear-gradient(0deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vue-color__c-hue__container{cursor:pointer;margin:0 2px;position:relative;height:100%}.vue-color__c-hue__pointer{z-index:2;position:absolute}.vue-color__c-hue__picker{cursor:pointer;margin-top:1px;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px rgba(0,0,0,.6);background:#fff;transform:translateX(-2px)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__saturation,.vue-color__saturation--black,.vue-color__saturation--white{cursor:pointer;position:absolute;top:0;left:0;right:0;bottom:0}.vue-color__saturation--white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.vue-color__saturation--black{background:linear-gradient(0deg,#000,transparent)}.vue-color__saturation--pointer{cursor:pointer;position:absolute}.vue-color__saturation--circle{cursor:head;width:4px;height:4px;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);border-radius:50%;transform:translate(-2px,-2px)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__material{width:98px;height:98px;padding:16px;font-family:Roboto;position:relative;border-radius:2px;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16);background-color:#fff}.vue-color__material .vue-color__editable-input__input{width:100%;margin-top:12px;font-size:15px;color:#333;height:30px}.vue-color__material .vue-color__editable-input__label{position:absolute;top:0;left:0;font-size:11px;color:#999;text-transform:capitalize}.vue-color__material__hex{border-bottom-width:2px;border-bottom-style:solid}.vue-color__material__split{display:flex;margin-right:-10px;padding-top:11px}.vue-color__material__third{flex:1;padding-right:10px}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__slider{position:relative;width:410px}.vue-color__slider__hue-warp{height:12px;position:relative}.vue-color__slider__hue-warp .vue-color__c-hue__picker{width:14px;height:14px;border-radius:6px;transform:translate(-7px,-2px);background-color:#f8f8f8;box-shadow:0 1px 4px 0 rgba(0,0,0,.37)}.vue-color__slider__swatches{display:flex;margin-top:20px}.vue-color__slider__swatch{margin-right:1px;flex:1;width:20%}.vue-color__slider__swatch:first-child{margin-right:1px}.vue-color__slider__swatch:first-child .vue-color__slider__swatch-picker{border-radius:2px 0 0 2px}.vue-color__slider__swatch:last-child{margin-right:0}.vue-color__slider__swatch:last-child .vue-color__slider__swatch-picker{border-radius:0 2px 2px 0}.vue-color__slider__swatch-picker{cursor:pointer;height:12px}.vue-color__slider__swatch-picker--active{transform:scaleY(1.8);border-radius:3.6px/2px}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__swatches{width:320px;height:240px;overflow-y:scroll;background-color:#fff;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16)}.vue-color__swatches__box{padding:16px 0 6px 16px;overflow:hidden}.vue-color__swatches__color-group{padding-bottom:10px;width:40px;float:left;margin-right:10px}.vue-color__swatches__color-it{width:40px;height:24px;cursor:pointer;background:#880e4f;margin-bottom:1px;overflow:hidden;border-radius:2px 2px 0 0}.vue-color__swatches__pick{fill:#fff;margin-left:8px;display:block}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,'.vue-colors__photoshop{background:#dcdcdc;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.25),0 8px 16px rgba(0,0,0,.15);box-sizing:initial;width:513px;font-family:Roboto}.vue-colors__photoshop__head{background-image:linear-gradient(-180deg,#f0f0f0,#d4d4d4);border-bottom:1px solid #b1b1b1;box-shadow:inset 0 1px 0 0 hsla(0,0%,100%,.2),inset 0 -1px 0 0 rgba(0,0,0,.02);height:23px;line-height:24px;border-radius:4px 4px 0 0;font-size:13px;color:#4d4d4d;text-align:center}.vue-colors__photoshop__body{padding:15px;display:flex}.vue-colors__photoshop__saturation-wrap{width:256px;height:256px;position:relative;border:2px solid #b3b3b3;border-bottom:2px solid #f0f0f0;overflow:hidden}.vue-colors__photoshop__saturation-wrap .vue-color__saturation--circle{width:12px;height:12px}.vue-colors__photoshop__hue-wrap{position:relative;height:256px;width:19px;margin-left:10px;border:2px solid #b3b3b3;border-bottom:2px solid #f0f0f0}.vue-colors__photoshop__hue-pointer{position:relative}.vue-colors__photoshop__hue-pointer--left,.vue-colors__photoshop__hue-pointer--right{position:absolute;width:0;height:0;border-style:solid;border-width:5px 0 5px 8px;border-color:transparent transparent transparent #555}.vue-colors__photoshop__hue-pointer--left:after,.vue-colors__photoshop__hue-pointer--right:after{content:"";width:0;height:0;border-style:solid;border-width:4px 0 4px 6px;border-color:transparent transparent transparent #fff;position:absolute;top:1px;left:1px;transform:translate(-8px,-5px)}.vue-colors__photoshop__hue-pointer--left{transform:translate(-13px,-4px)}.vue-colors__photoshop__hue-pointer--right{transform:translate(20px,-4px) rotate(180deg)}.vue-colors__photoshop__controls{width:180px;margin-left:10px;display:flex}.vue-colors__photoshop__actions{margin-left:20px;flex:1}.vue-colors__photoshop__ac-btn{cursor:pointer;background-image:linear-gradient(-180deg,#fff,#e6e6e6);border:1px solid #878787;border-radius:2px;height:20px;box-shadow:0 1px 0 0 #eaeaea;font-size:14px;color:#000;line-height:20px;text-align:center;margin-bottom:10px}.vue-colors__photoshop__previews{width:60px}.vue-colors__photoshop__previews__swatches{border:1px solid #b3b3b3;border-bottom:1px solid #f0f0f0;margin-bottom:2px;margin-top:1px}.vue-colors__photoshop__previews__pr-color{height:34px;box-shadow:inset 1px 0 0 #000,inset -1px 0 0 #000,inset 0 1px 0 #000}.vue-colors__photoshop__previews__label{font-size:14px;color:#000;text-align:center}.vue-colors__photoshop__fields{padding-top:5px;padding-bottom:9px;width:80px;position:relative}.vue-colors__photoshop__fields .vue-color__editable-input__input{margin-left:40%;width:40%;height:18px;border:1px solid #888;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 1px 0 0 #ececec;margin-bottom:5px;font-size:13px;padding-left:3px;margin-right:10px}.vue-colors__photoshop__fields .vue-color__editable-input__label{top:0;left:0;width:34px;text-transform:uppercase;font-size:13px;height:18px;line-height:22px;position:absolute}.vue-colors__photoshop__fields__divider{height:5px}.vue-colors__photoshop__fields__hex .vue-color__editable-input__input{margin-left:20%;width:80%;height:18px;border:1px solid #888;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 1px 0 0 #ececec;margin-bottom:6px;font-size:13px;padding-left:3px}.vue-colors__photoshop__fields__hex .vue-color__editable-input__label{position:absolute;top:0;left:0;width:14px;text-transform:uppercase;font-size:13px;height:18px;line-height:22px}',""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__sketch{position:relative;width:200px;padding:10px 10px 0;box-sizing:initial;background:#fff;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.15),0 8px 16px rgba(0,0,0,.15)}.vue-color__sketch__saturation-wrap{width:100%;padding-bottom:75%;position:relative;overflow:hidden}.vue-color__sketch__controls{display:flex}.vue-color__sketch__sliders{padding:4px 0;flex:1}.vue-color__sketch__sliders .vue-color__c-alpha__gradient,.vue-color__sketch__sliders .vue-color__c-hue{border-radius:2px}.vue-color__sketch__hue-wrap{position:relative;height:10px}.vue-color__sketch__alpha-wrap{position:relative;height:10px;margin-top:4px;overflow:hidden}.vue-color__sketch__color-wrap{width:24px;height:24px;position:relative;margin-top:4px;margin-left:4px;border-radius:3px}.vue-color__sketch__active-color{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:2px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15),inset 0 0 4px rgba(0,0,0,.25);z-index:2}.vue-color__sketch__field{display:flex;padding-top:4px}.vue-color__sketch__field .vue-color__editable-input__input{width:80%;padding:4px 10% 3px;border:none;box-shadow:inset 0 0 0 1px #ccc;font-size:11px}.vue-color__sketch__field .vue-color__editable-input__label{display:block;text-align:center;font-size:11px;color:#222;padding-top:3px;padding-bottom:4px;text-transform:capitalize}.vue-color__sketch__field--single{flex:1;padding-left:6px}.vue-color__sketch__field--double{flex:2}.vue-color__sketch__presets{margin-right:-10px;margin-left:-10px;padding-left:10px;padding-top:10px;border-top:1px solid #eee}.vue-color__sketch__presets-color{border-radius:3px;overflow:hidden;position:relative;display:inline-block;margin:0 10px 10px 0;vertical-align:top;cursor:pointer;width:16px;height:16px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__chrome{background:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);box-sizing:initial;width:225px;font-family:Menlo;background-color:#fff}.vue-color__chrome__controls{display:flex}.vue-color__chrome__color-wrap{width:32px}.vue-color__chrome__active-color{margin-top:6px;width:16px;height:16px;border-radius:8px;position:relative;overflow:hidden}.vue-color__chrome__sliders{flex:1}.vue-color__chrome__sliders .vue-color__c-alpha__gradient,.vue-color__chrome__sliders .vue-color__c-hue{border-radius:2px}.vue-color__chrome__sliders .vue-color__c-alpha__picker,.vue-color__chrome__sliders .vue-color__c-hue__picker{width:12px;height:12px;border-radius:6px;transform:translate(-6px,-2px);background-color:#f8f8f8;box-shadow:0 1px 4px 0 rgba(0,0,0,.37)}.vue-color__chrome__fields-wrap{padding-top:16px;display:flex}.vue-color__chrome__fields{display:flex;margin-left:-6px;flex:1}.vue-color__chrome__field{padding-left:6px;width:100%}.vue-color__chrome__toggle-btn{width:32px;text-align:right;position:relative}.vue-color__chrome__icon{margin-right:-4px;margin-top:12px;cursor:pointer;position:relative;z-index:2}.vue-color__chrome__icon-highlight{position:absolute;width:24px;height:28px;background:#eee;border-radius:4px;top:10px;left:12px}.vue-color__chrome__hue-wrap{margin-bottom:8px}.vue-color__chrome__alpha-wrap,.vue-color__chrome__hue-wrap{position:relative;height:10px}.vue-color__chrome__chrome-body{padding:16px 16px 12px;background-color:#fff}.vue-color__chrome__saturation-wrap{width:100%;padding-bottom:55%;position:relative;border-radius:2px 2px 0 0;overflow:hidden}.vue-color__chrome__saturation-wrap .vue-color__saturation--circle{width:12px;height:12px}.vue-color__chrome__fields .vue-color__editable-input__input{font-size:11px;color:#333;width:100%;border-rradius:2px;border:none;box-shadow:inset 0 0 0 1px #dadada;height:21px;text-align:center}.vue-color__chrome__fields .vue-color__editable-input__label{text-transform:uppercase;font-size:11px;line-height:11px;color:#969696;text-align:center;display:block;margin-top:12px}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__c-alpha,.vue-color__c-alpha__checkboard-wrap{position:absolute;top:0;right:0;bottom:0;left:0}.vue-color__c-alpha__checkboard-wrap{overflow:hidden}.vue-color__c-alpha__gradient{position:absolute;top:0;right:0;bottom:0;left:0}.vue-color__c-alpha__container{cursor:pointer;position:relative;z-index:2;height:100%;margin:0 3px}.vue-color__c-alpha__pointer{z-index:2;position:absolute}.vue-color__c-alpha__picker{cursor:pointer;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px rgba(0,0,0,.6);background:#fff;margin-top:1px;transform:translateX(-2px)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__c-checkerboard{position:absolute;top:0;right:0;bottom:0;left:0}",""])},function(e,o){(function(o){function t(e,o,t){function r(o){var t=p,r=v;return p=v=void 0,k=o,b=e.apply(r,t)}function i(e){return k=e,m=setTimeout(u,o),F?r(e):b}function n(e){var t=e-x,r=e-k,a=o-t;return A?C(a,g-r):a}function c(e){var t=e-x,r=e-k;return void 0===x||t>=o||t<0||A&&r>=g}function u(){var e=y();return c(e)?d(e):void(m=setTimeout(u,n(e)))}function d(e){return m=void 0,R&&p?r(e):(p=v=void 0,b)}function h(){void 0!==m&&clearTimeout(m),k=0,p=x=v=m=void 0}function f(){return void 0===m?b:d(y())}function _(){var e=y(),t=c(e);if(p=arguments,v=this,x=e,t){if(void 0===m)return i(x);if(A)return m=setTimeout(u,o),
r(x)}return void 0===m&&(m=setTimeout(u,o)),b}var p,v,g,b,m,x,k=0,F=!1,A=!1,R=!0;if("function"!=typeof e)throw new TypeError(l);return o=s(o)||0,a(t)&&(F=!!t.leading,A="maxWait"in t,g=A?w(s(t.maxWait)||0,o):g,R="trailing"in t?!!t.trailing:R),_.cancel=h,_.flush=f,_}function r(e,o,r){var i=!0,n=!0;if("function"!=typeof e)throw new TypeError(l);return a(r)&&(i="leading"in r?!!r.leading:i,n="trailing"in r?!!r.trailing:n),t(e,o,{leading:i,maxWait:o,trailing:n})}function a(e){var o=typeof e;return!!e&&("object"==o||"function"==o)}function i(e){return!!e&&"object"==typeof e}function n(e){return"symbol"==typeof e||i(e)&&x.call(e)==u}function s(e){if("number"==typeof e)return e;if(n(e))return c;if(a(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=a(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var t=f.test(e);return t||_.test(e)?p(e.slice(2),t?2:8):h.test(e)?c:+e}var l="Expected a function",c=NaN,u="[object Symbol]",d=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,_=/^0o[0-7]+$/i,p=parseInt,v="object"==typeof o&&o&&o.Object===Object&&o,g="object"==typeof self&&self&&self.Object===Object&&self,b=v||g||Function("return this")(),m=Object.prototype,x=m.toString,w=Math.max,C=Math.min,y=function(){return b.Date.now()};e.exports=r}).call(o,function(){return this}())},function(e,o,t){var r,a,i;!function(t,n){a=[],r=n,i="function"==typeof r?r.apply(o,a):r,!(void 0!==i&&(e.exports=i))}(this,function(){return{red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",a100:"#ff8a80",a200:"#ff5252",a400:"#ff1744",a700:"#d50000"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},deepPurple:{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",a100:"#82b1ff",a200:"#448aff",a400:"#2979ff",a700:"#2962ff"},lightBlue:{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",a100:"#b9f6ca",a200:"#69f0ae",a400:"#00e676",a700:"#00c853"},lightGreen:{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},deepOrange:{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121"},blueGrey:{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238"},darkText:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",dividers:"rgba(0, 0, 0, 0.12)"},lightText:{primary:"rgba(255, 255, 255, 1)",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",dividers:"rgba(255, 255, 255, 0.12)"},darkIcons:{active:"rgba(0, 0, 0, 0.54)",inactive:"rgba(0, 0, 0, 0.38)"},lightIcons:{active:"rgba(255, 255, 255, 1)",inactive:"rgba(255, 255, 255, 0.5)"},white:"#ffffff",black:"#000000"}})},function(e,o,t){var r;!function(a){function i(e,o){if(e=e?e:"",o=o||{},e instanceof i)return e;if(!(this instanceof i))return new i(e,o);var t=n(e);this._originalInput=e,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=X(100*this._a)/100,this._format=o.format||t.format,this._gradientType=o.gradientType,this._r<1&&(this._r=X(this._r)),this._g<1&&(this._g=X(this._g)),this._b<1&&(this._b=X(this._b)),this._ok=t.ok,this._tc_id=V++}function n(e){var o={r:0,g:0,b:0},t=1,r=null,a=null,i=null,n=!1,l=!1;return"string"==typeof e&&(e=I(e)),"object"==typeof e&&(D(e.r)&&D(e.g)&&D(e.b)?(o=s(e.r,e.g,e.b),n=!0,l="%"===String(e.r).substr(-1)?"prgb":"rgb"):D(e.h)&&D(e.s)&&D(e.v)?(r=O(e.s),a=O(e.v),o=d(e.h,r,a),n=!0,l="hsv"):D(e.h)&&D(e.s)&&D(e.l)&&(r=O(e.s),i=O(e.l),o=c(e.h,r,i),n=!0,l="hsl"),e.hasOwnProperty("a")&&(t=e.a)),t=M(t),{ok:n,format:e.format||l,r:q(255,Y(o.r,0)),g:q(255,Y(o.g,0)),b:q(255,Y(o.b,0)),a:t}}function s(e,o,t){return{r:255*N(e,255),g:255*N(o,255),b:255*N(t,255)}}function l(e,o,t){e=N(e,255),o=N(o,255),t=N(t,255);var r,a,i=Y(e,o,t),n=q(e,o,t),s=(i+n)/2;if(i==n)r=a=0;else{var l=i-n;switch(a=s>.5?l/(2-i-n):l/(i+n),i){case e:r=(o-t)/l+(o<t?6:0);break;case o:r=(t-e)/l+2;break;case t:r=(e-o)/l+4}r/=6}return{h:r,s:a,l:s}}function c(e,o,t){function r(e,o,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(o-e)*t:t<.5?o:t<2/3?e+(o-e)*(2/3-t)*6:e}var a,i,n;if(e=N(e,360),o=N(o,100),t=N(t,100),0===o)a=i=n=t;else{var s=t<.5?t*(1+o):t+o-t*o,l=2*t-s;a=r(l,s,e+1/3),i=r(l,s,e),n=r(l,s,e-1/3)}return{r:255*a,g:255*i,b:255*n}}function u(e,o,t){e=N(e,255),o=N(o,255),t=N(t,255);var r,a,i=Y(e,o,t),n=q(e,o,t),s=i,l=i-n;if(a=0===i?0:l/i,i==n)r=0;else{switch(i){case e:r=(o-t)/l+(o<t?6:0);break;case o:r=(t-e)/l+2;break;case t:r=(e-o)/l+4}r/=6}return{h:r,s:a,v:s}}function d(e,o,t){e=6*N(e,360),o=N(o,100),t=N(t,100);var r=a.floor(e),i=e-r,n=t*(1-o),s=t*(1-i*o),l=t*(1-(1-i)*o),c=r%6,u=[t,s,n,n,l,t][c],d=[l,t,t,s,n,n][c],h=[n,n,l,t,t,s][c];return{r:255*u,g:255*d,b:255*h}}function h(e,o,t,r){var a=[H(X(e).toString(16)),H(X(o).toString(16)),H(X(t).toString(16))];return r&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function f(e,o,t,r,a){var i=[H(X(e).toString(16)),H(X(o).toString(16)),H(X(t).toString(16)),H(z(r))];return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function _(e,o,t,r){var a=[H(z(r)),H(X(e).toString(16)),H(X(o).toString(16)),H(X(t).toString(16))];return a.join("")}function p(e,o){o=0===o?0:o||10;var t=i(e).toHsl();return t.s-=o/100,t.s=P(t.s),i(t)}function v(e,o){o=0===o?0:o||10;var t=i(e).toHsl();return t.s+=o/100,t.s=P(t.s),i(t)}function g(e){return i(e).desaturate(100)}function b(e,o){o=0===o?0:o||10;var t=i(e).toHsl();return t.l+=o/100,t.l=P(t.l),i(t)}function m(e,o){o=0===o?0:o||10;var t=i(e).toRgb();return t.r=Y(0,q(255,t.r-X(255*-(o/100)))),t.g=Y(0,q(255,t.g-X(255*-(o/100)))),t.b=Y(0,q(255,t.b-X(255*-(o/100)))),i(t)}function x(e,o){o=0===o?0:o||10;var t=i(e).toHsl();return t.l-=o/100,t.l=P(t.l),i(t)}function w(e,o){var t=i(e).toHsl(),r=(t.h+o)%360;return t.h=r<0?360+r:r,i(t)}function C(e){var o=i(e).toHsl();return o.h=(o.h+180)%360,i(o)}function y(e){var o=i(e).toHsl(),t=o.h;return[i(e),i({h:(t+120)%360,s:o.s,l:o.l}),i({h:(t+240)%360,s:o.s,l:o.l})]}function k(e){var o=i(e).toHsl(),t=o.h;return[i(e),i({h:(t+90)%360,s:o.s,l:o.l}),i({h:(t+180)%360,s:o.s,l:o.l}),i({h:(t+270)%360,s:o.s,l:o.l})]}function F(e){var o=i(e).toHsl(),t=o.h;return[i(e),i({h:(t+72)%360,s:o.s,l:o.l}),i({h:(t+216)%360,s:o.s,l:o.l})]}function A(e,o,t){o=o||6,t=t||30;var r=i(e).toHsl(),a=360/t,n=[i(e)];for(r.h=(r.h-(a*o>>1)+720)%360;--o;)r.h=(r.h+a)%360,n.push(i(r));return n}function R(e,o){o=o||6;for(var t=i(e).toHsv(),r=t.h,a=t.s,n=t.v,s=[],l=1/o;o--;)s.push(i({h:r,s:a,v:n})),n=(n+l)%1;return s}function S(e){var o={};for(var t in e)e.hasOwnProperty(t)&&(o[e[t]]=t);return o}function M(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function N(e,o){L(e)&&(e="100%");var t=E(e);return e=q(o,Y(0,parseFloat(e))),t&&(e=parseInt(e*o,10)/100),a.abs(e-o)<1e-6?1:e%o/parseFloat(o)}function P(e){return q(1,Y(0,e))}function j(e){return parseInt(e,16)}function L(e){return"string"==typeof e&&e.indexOf(".")!=-1&&1===parseFloat(e)}function E(e){return"string"==typeof e&&e.indexOf("%")!=-1}function H(e){return 1==e.length?"0"+e:""+e}function O(e){return e<=1&&(e=100*e+"%"),e}function z(e){return a.round(255*parseFloat(e)).toString(16)}function B(e){return j(e)/255}function D(e){return!!Z.CSS_UNIT.exec(e)}function I(e){e=e.replace($,"").replace(U,"").toLowerCase();var o=!1;if(G[e])e=G[e],o=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=Z.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=Z.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Z.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=Z.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Z.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=Z.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Z.hex8.exec(e))?{r:j(t[1]),g:j(t[2]),b:j(t[3]),a:B(t[4]),format:o?"name":"hex8"}:(t=Z.hex6.exec(e))?{r:j(t[1]),g:j(t[2]),b:j(t[3]),format:o?"name":"hex"}:(t=Z.hex4.exec(e))?{r:j(t[1]+""+t[1]),g:j(t[2]+""+t[2]),b:j(t[3]+""+t[3]),a:B(t[4]+""+t[4]),format:o?"name":"hex8"}:!!(t=Z.hex3.exec(e))&&{r:j(t[1]+""+t[1]),g:j(t[2]+""+t[2]),b:j(t[3]+""+t[3]),format:o?"name":"hex"}}function T(e){var o,t;return e=e||{level:"AA",size:"small"},o=(e.level||"AA").toUpperCase(),t=(e.size||"small").toLowerCase(),"AA"!==o&&"AAA"!==o&&(o="AA"),"small"!==t&&"large"!==t&&(t="small"),{level:o,size:t}}var $=/^\s+/,U=/\s+$/,V=0,X=a.round,q=a.min,Y=a.max,W=a.random;i.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,o,t,r,i,n,s=this.toRgb();return e=s.r/255,o=s.g/255,t=s.b/255,r=e<=.03928?e/12.92:a.pow((e+.055)/1.055,2.4),i=o<=.03928?o/12.92:a.pow((o+.055)/1.055,2.4),n=t<=.03928?t/12.92:a.pow((t+.055)/1.055,2.4),.2126*r+.7152*i+.0722*n},setAlpha:function(e){return this._a=M(e),this._roundA=X(100*this._a)/100,this},toHsv:function(){var e=u(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=u(this._r,this._g,this._b),o=X(360*e.h),t=X(100*e.s),r=X(100*e.v);return 1==this._a?"hsv("+o+", "+t+"%, "+r+"%)":"hsva("+o+", "+t+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=l(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=l(this._r,this._g,this._b),o=X(360*e.h),t=X(100*e.s),r=X(100*e.l);return 1==this._a?"hsl("+o+", "+t+"%, "+r+"%)":"hsla("+o+", "+t+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return h(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return f(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:X(this._r),g:X(this._g),b:X(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+X(this._r)+", "+X(this._g)+", "+X(this._b)+")":"rgba("+X(this._r)+", "+X(this._g)+", "+X(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:X(100*N(this._r,255))+"%",g:X(100*N(this._g,255))+"%",b:X(100*N(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+X(100*N(this._r,255))+"%, "+X(100*N(this._g,255))+"%, "+X(100*N(this._b,255))+"%)":"rgba("+X(100*N(this._r,255))+"%, "+X(100*N(this._g,255))+"%, "+X(100*N(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(K[h(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var o="#"+_(this._r,this._g,this._b,this._a),t=o,r=this._gradientType?"GradientType = 1, ":"";if(e){var a=i(e);t="#"+_(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+o+",endColorstr="+t+")"},toString:function(e){var o=!!e;e=e||this._format;var t=!1,r=this._a<1&&this._a>=0,a=!o&&r&&("hex"===e||"hex6"===e||"hex3"===e||"hex4"===e||"hex8"===e||"name"===e);return a?"name"===e&&0===this._a?this.toName():this.toRgbString():("rgb"===e&&(t=this.toRgbString()),"prgb"===e&&(t=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(t=this.toHexString()),"hex3"===e&&(t=this.toHexString(!0)),"hex4"===e&&(t=this.toHex8String(!0)),"hex8"===e&&(t=this.toHex8String()),"name"===e&&(t=this.toName()),"hsl"===e&&(t=this.toHslString()),"hsv"===e&&(t=this.toHsvString()),t||this.toHexString())},clone:function(){return i(this.toString())},_applyModification:function(e,o){var t=e.apply(null,[this].concat([].slice.call(o)));return this._r=t._r,this._g=t._g,this._b=t._b,this.setAlpha(t._a),this},lighten:function(){return this._applyModification(b,arguments)},brighten:function(){return this._applyModification(m,arguments)},darken:function(){return this._applyModification(x,arguments)},desaturate:function(){return this._applyModification(p,arguments)},saturate:function(){return this._applyModification(v,arguments)},greyscale:function(){return this._applyModification(g,arguments)},spin:function(){return this._applyModification(w,arguments)},_applyCombination:function(e,o){return e.apply(null,[this].concat([].slice.call(o)))},analogous:function(){return this._applyCombination(A,arguments)},complement:function(){return this._applyCombination(C,arguments)},monochromatic:function(){return this._applyCombination(R,arguments)},splitcomplement:function(){return this._applyCombination(F,arguments)},triad:function(){return this._applyCombination(y,arguments)},tetrad:function(){return this._applyCombination(k,arguments)}},i.fromRatio=function(e,o){if("object"==typeof e){var t={};for(var r in e)e.hasOwnProperty(r)&&("a"===r?t[r]=e[r]:t[r]=O(e[r]));e=t}return i(e,o)},i.equals=function(e,o){return!(!e||!o)&&i(e).toRgbString()==i(o).toRgbString()},i.random=function(){return i.fromRatio({r:W(),g:W(),b:W()})},i.mix=function(e,o,t){t=0===t?0:t||50;var r=i(e).toRgb(),a=i(o).toRgb(),n=t/100,s={r:(a.r-r.r)*n+r.r,g:(a.g-r.g)*n+r.g,b:(a.b-r.b)*n+r.b,a:(a.a-r.a)*n+r.a};return i(s)},i.readability=function(e,o){var t=i(e),r=i(o);return(a.max(t.getLuminance(),r.getLuminance())+.05)/(a.min(t.getLuminance(),r.getLuminance())+.05)},i.isReadable=function(e,o,t){var r,a,n=i.readability(e,o);switch(a=!1,r=T(t),r.level+r.size){case"AAsmall":case"AAAlarge":a=n>=4.5;break;case"AAlarge":a=n>=3;break;case"AAAsmall":a=n>=7}return a},i.mostReadable=function(e,o,t){var r,a,n,s,l=null,c=0;t=t||{},a=t.includeFallbackColors,n=t.level,s=t.size;for(var u=0;u<o.length;u++)r=i.readability(e,o[u]),r>c&&(c=r,l=i(o[u]));return i.isReadable(e,l,{level:n,size:s})||!a?l:(t.includeFallbackColors=!1,i.mostReadable(e,["#fff","#000"],t))};var G=i.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},K=i.hexNames=S(G),Z=function(){var e="[-\\+]?\\d+%?",o="[-\\+]?\\d*\\.\\d+%?",t="(?:"+o+")|(?:"+e+")",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",a="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+a),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+a),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+a),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();"undefined"!=typeof e&&e.exports?e.exports=i:(r=function(){return i}.call(o,t,o,e),!(void 0!==r&&(e.exports=r)))}(Math)},function(e,o,t){var r,a;t(64),r=t(9);var i=t(52);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(55),r=t(10);var i=t(43);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(59),r=t(11);var i=t(47);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(62),r=t(12);var i=t(50);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(63),r=t(13);var i=t(51);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(60),r=t(14);var i=t(48);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(61),r=t(15);var i=t(49);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__compact"},[_c("ul",{staticClass:"vue-color__compact__colors"},_l(defaultColors,function(e){return _c("li",{staticClass:"vue-color__compact__color-item","class":{"vue-color__compact__color-item--white":"#FFFFFF"===e},style:{background:e},on:{click:function(o){handlerClick(e)}}},[_c("div",{directives:[{name:"show",rawName:"v-show",value:e===pick,expression:"c === pick"}],staticClass:"vue-color__compact__dot"})])})),_v(" ")])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__editable-input"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:val,expression:"val"}],staticClass:"vue-color__editable-input__input",domProps:{value:_s(val)},on:{keydown:handleKeyDown,input:[function(e){e.target.composing||(val=e.target.value)},update]}}),_v(" "),_c("span",{staticClass:"vue-color__editable-input__label"},[_v(_s(label))])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{"class":["vue-color__c-hue",directionClass]},[_c("div",{ref:"container",staticClass:"vue-color__c-hue__container",on:{mousedown:handleMouseDown,touchmove:handleChange,touchstart:handleChange}},[_c("div",{staticClass:"vue-color__c-hue__pointer",style:{top:pointerTop,left:pointerLeft}},[_c("div",{staticClass:"vue-color__c-hue__picker"})])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{ref:"container",staticClass:"vue-color__saturation",style:{background:bgColor},on:{mousedown:handleMouseDown}},[_c("div",{staticClass:"vue-color__saturation--white"}),_v(" "),_c("div",{staticClass:"vue-color__saturation--black"}),_v(" "),_c("div",{staticClass:"vue-color__saturation--pointer",style:{top:pointerTop,left:pointerLeft}},[_c("div",{staticClass:"vue-color__saturation--circle"})])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__material"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hex,expression:"colors.hex"}],staticClass:"vue-color__material__hex",style:{borderColor:colors.hex},attrs:{label:"hex"},domProps:{value:colors.hex},on:{"on-change":onChange,input:function(e){colors.hex=e}}}),_v(" "),_c("div",{staticClass:"vue-color__material__split"},[_c("div",{staticClass:"vue-color__material__third"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.r,expression:"colors.rgba.r"}],attrs:{label:"r"},domProps:{value:colors.rgba.r},on:{"on-change":onChange,input:function(e){colors.rgba.r=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__material__third"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.g,expression:"colors.rgba.g"}],attrs:{label:"g"},domProps:{value:colors.rgba.g},on:{"on-change":onChange,input:function(e){colors.rgba.g=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__material__third"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.b,expression:"colors.rgba.b"}],attrs:{label:"b"},domProps:{value:colors.rgba.b},on:{"on-change":onChange,input:function(e){colors.rgba.b=e}}})])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__slider"},[_c("div",{staticClass:"vue-color__slider__hue-warp"},[_c("hue",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":hueChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__slider__swatches"},_l(swatches,function(e,o){return _c("div",{staticClass:"vue-color__slider__swatch",attrs:{"data-index":o},on:{click:function(t){handleSwClick(o,e)}}},[_c("div",{staticClass:"vue-color__slider__swatch-picker","class":{"vue-color__slider__swatch-picker--active":e==activeOffset},style:{background:"hsl("+colors.hsl.h+", 50%, "+100*e+"%)"}})])}))])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__swatches",attrs:{"data-pick":pick}},[_c("div",{staticClass:"vue-color__swatches__box"},_l(defaultColors,function(e){return _c("div",{staticClass:"vue-color__swatches__color-group"},_l(e,function(e){return _c("div",{staticClass:"vue-color__swatches__color-it",style:{background:e},attrs:{"data-color":e},on:{click:function(o){handlerClick(e)}}},[_c("div",{directives:[{name:"show",rawName:"v-show",value:e==pick,expression:"c == pick"}],staticClass:"vue-color__swatches__pick"},[_c("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[_c("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})])])])}))}))])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-colors__photoshop"},[_c("div",{staticClass:"vue-colors__photoshop__head"},[_v(_s(head))]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__body"},[_c("div",{staticClass:"vue-colors__photoshop__saturation-wrap"},[_c("saturation",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__hue-wrap"},[_c("hue",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],attrs:{direction:"vertical"},domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}},[_c("div",{staticClass:"vue-colors__photoshop__hue-pointer"},[_c("i",{staticClass:"vue-colors__photoshop__hue-pointer--left"}),_c("i",{staticClass:"vue-colors__photoshop__hue-pointer--right"})])])]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__controls"},[_c("div",{staticClass:"vue-colors__photoshop__previews"},[_c("div",{staticClass:"vue-colors__photoshop__previews__label"},[_v("new")]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__previews__swatches"},[_c("div",{staticClass:"vue-colors__photoshop__previews__pr-color",style:{background:colors.hex}}),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__previews__pr-color",style:{background:currentColor}})]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__previews__label"},[_v("current")])]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__actions"},[_c("div",{staticClass:"vue-colors__photoshop__ac-btn",on:{click:handleAccept}},[_v("OK")]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__ac-btn",on:{click:handleCancel}},[_v("Cancel")]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__fields"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.h,expression:"colors.hsl.h"}],attrs:{label:"h"},domProps:{value:colors.hsl.h},on:{"on-change":inputChange,input:function(e){colors.hsl.h=e}}}),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.s,expression:"colors.hsl.s"}],attrs:{label:"s"},domProps:{value:colors.hsl.s},on:{"on-change":inputChange,input:function(e){colors.hsl.s=e}}}),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.l,expression:"colors.hsl.l"}],attrs:{label:"v"},domProps:{value:colors.hsl.l},on:{"on-change":inputChange,input:function(e){colors.hsl.l=e}}}),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__fields__divider"}),_v(" "),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.r,expression:"colors.rgba.r"}],attrs:{label:"r"},domProps:{value:colors.rgba.r},on:{"on-change":inputChange,input:function(e){colors.rgba.r=e}}}),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.g,expression:"colors.rgba.g"}],attrs:{label:"g"},domProps:{value:colors.rgba.g},on:{"on-change":inputChange,input:function(e){colors.rgba.g=e}}}),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.b,expression:"colors.rgba.b"}],attrs:{label:"b"},domProps:{value:colors.rgba.b},on:{"on-change":inputChange,input:function(e){colors.rgba.b=e}}}),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__fields__divider"}),_v(" "),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hex,expression:"colors.hex"}],staticClass:"vue-colors__photoshop__fields__hex",attrs:{label:"#"},domProps:{value:colors.hex},on:{"on-change":inputChange,input:function(e){colors.hex=e}}})])])])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__sketch"},[_c("div",{staticClass:"vue-color__sketch__saturation-wrap"},[_c("saturation",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__controls"},[_c("div",{staticClass:"vue-color__sketch__sliders"},[_c("div",{staticClass:"vue-color__sketch__hue-wrap"},[_c("hue",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__alpha-wrap"},[_c("alpha",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})])]),_v(" "),_c("div",{staticClass:"vue-color__sketch__color-wrap"},[_c("div",{staticClass:"vue-color__sketch__active-color",style:{background:activeColor}})])]),_v(" "),_c("div",{staticClass:"vue-color__sketch__field"},[_c("div",{staticClass:"vue-color__sketch__field--double"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hex,expression:"colors.hex"}],attrs:{label:"hex"},domProps:{value:colors.hex
},on:{"on-change":inputChange,input:function(e){colors.hex=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__field--single"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.r,expression:"colors.rgba.r"}],attrs:{label:"r"},domProps:{value:colors.rgba.r},on:{"on-change":inputChange,input:function(e){colors.rgba.r=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__field--single"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.g,expression:"colors.rgba.g"}],attrs:{label:"g"},domProps:{value:colors.rgba.g},on:{"on-change":inputChange,input:function(e){colors.rgba.g=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__field--single"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.b,expression:"colors.rgba.b"}],attrs:{label:"b"},domProps:{value:colors.rgba.b},on:{"on-change":inputChange,input:function(e){colors.rgba.b=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__field--single"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.a,expression:"colors.a"}],attrs:{label:"a","arrow-offset":.01,max:1},domProps:{value:colors.a},on:{"on-change":inputChange,input:function(e){colors.a=e}}})])]),_v(" "),_c("div",{staticClass:"vue-color__sketch__presets"},_l(presetColors,function(e){return _c("div",{staticClass:"vue-color__sketch__presets-color",style:{background:e},on:{click:function(o){handlePreset(e)}}})}))])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__chrome"},[_c("div",{staticClass:"vue-color__chrome__saturation-wrap"},[_c("saturation",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__chrome-body"},[_c("div",{staticClass:"vue-color__chrome__controls"},[_c("div",{staticClass:"vue-color__chrome__color-wrap"},[_c("div",{staticClass:"vue-color__chrome__active-color",style:{background:activeColor}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__sliders"},[_c("div",{staticClass:"vue-color__chrome__hue-wrap"},[_c("hue",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__alpha-wrap"},[_c("alpha",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})])])]),_v(" "),_c("div",{staticClass:"vue-color__chrome__fields-wrap"},[_c("div",{directives:[{name:"show",rawName:"v-show",value:0===fieldsIndex,expression:"fieldsIndex === 0"}],staticClass:"vue-color__chrome__fields"},[_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hex,expression:"colors.hex"}],attrs:{label:"hex"},domProps:{value:colors.hex},on:{"on-change":inputChange,input:function(e){colors.hex=e}}})])]),_v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:1===fieldsIndex,expression:"fieldsIndex === 1"}],staticClass:"vue-color__chrome__fields"},[_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.r,expression:"colors.rgba.r"}],attrs:{label:"r"},domProps:{value:colors.rgba.r},on:{"on-change":inputChange,input:function(e){colors.rgba.r=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.g,expression:"colors.rgba.g"}],attrs:{label:"g"},domProps:{value:colors.rgba.g},on:{"on-change":inputChange,input:function(e){colors.rgba.g=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.b,expression:"colors.rgba.b"}],attrs:{label:"b"},domProps:{value:colors.rgba.b},on:{"on-change":inputChange,input:function(e){colors.rgba.b=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.a,expression:"colors.a"}],attrs:{label:"a","arrow-offset":.01,max:1},domProps:{value:colors.a},on:{"on-change":inputChange,input:function(e){colors.a=e}}})])]),_v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:2===fieldsIndex,expression:"fieldsIndex === 2"}],staticClass:"vue-color__chrome__fields"},[_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.h,expression:"colors.hsl.h"}],attrs:{label:"h"},domProps:{value:colors.hsl.h},on:{"on-change":inputChange,input:function(e){colors.hsl.h=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.s,expression:"colors.hsl.s"}],attrs:{label:"s"},domProps:{value:colors.hsl.s},on:{"on-change":inputChange,input:function(e){colors.hsl.s=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.l,expression:"colors.hsl.l"}],attrs:{label:"l"},domProps:{value:colors.hsl.l},on:{"on-change":inputChange,input:function(e){colors.hsl.l=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.a,expression:"colors.a"}],attrs:{label:"a","arrow-offset":.01,max:1},domProps:{value:colors.a},on:{"on-change":inputChange,input:function(e){colors.a=e}}})])]),_v(" "),_v(" "),_c("div",{staticClass:"vue-color__chrome__toggle-btn",on:{click:toggleViews}},[_c("div",{staticClass:"vue-color__chrome__icon"},[_c("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"},on:{mouseover:showHighlight,mouseenter:showHighlight,mouseout:hideHighlight}},[_c("path",{attrs:{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}})])]),_v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:highlight,expression:"highlight"}],staticClass:"vue-color__chrome__icon-highlight"})]),_v(" ")])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__c-alpha"},[_c("div",{staticClass:"vue-color__c-alpha__checkboard-wrap"},[_c("checkboard")]),_v(" "),_c("div",{staticClass:"vue-color__c-alpha__gradient",style:{background:gradientColor}}),_v(" "),_c("div",{ref:"container",staticClass:"vue-color__c-alpha__container",on:{mousedown:handleMouseDown,touchmove:handleChange,touchstart:handleChange}},[_c("div",{staticClass:"vue-color__c-alpha__pointer",style:{left:100*colors.a+"%"}},[_c("div",{staticClass:"vue-color__c-alpha__picker"})])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__c-checkerboard",style:{background:bgStyle}})},staticRenderFns:[]}},function(e,o,t){var r=t(21);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(22);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(23);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(24);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(25);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(26);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(27);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(28);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(29);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(30);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(31);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(32);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)}])});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 257:
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

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(137);

var _inspectorSketch = __webpack_require__(311);

var _inspectorSketch2 = _interopRequireDefault(_inspectorSketch);

var _TimeConverter = __webpack_require__(221);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _collide = __webpack_require__(251);

var _collide2 = _interopRequireDefault(_collide);

var _uuid = __webpack_require__(242);

var _uuid2 = _interopRequireDefault(_uuid);

var _Action = __webpack_require__(249);

var _Action2 = _interopRequireDefault(_Action);

var _tags = __webpack_require__(370);

var _tags2 = _interopRequireDefault(_tags);

var _commonService = __webpack_require__(138);

var _commonService2 = _interopRequireDefault(_commonService);

var _scoutings = __webpack_require__(212);

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

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(137);

var _timelineSketch = __webpack_require__(313);

var _timelineSketch2 = _interopRequireDefault(_timelineSketch);

var _scoutings = __webpack_require__(212);

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

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _player = __webpack_require__(358);

var _player2 = _interopRequireDefault(_player);

var _Touch = __webpack_require__(252);

var _Touch2 = _interopRequireDefault(_Touch);

var _mockstate = __webpack_require__(137);

var _actions = __webpack_require__(314);

var _store = __webpack_require__(317);

var _veeValidate = __webpack_require__(7);

var _veeValidate2 = _interopRequireDefault(_veeValidate);

var _newTouchForm = __webpack_require__(366);

var _newTouchForm2 = _interopRequireDefault(_newTouchForm);

var _editTouchForm = __webpack_require__(365);

var _editTouchForm2 = _interopRequireDefault(_editTouchForm);

var _touchesList = __webpack_require__(367);

var _touchesList2 = _interopRequireDefault(_touchesList);

var _timeline = __webpack_require__(364);

var _timeline2 = _interopRequireDefault(_timeline);

var _inspector = __webpack_require__(363);

var _inspector2 = _interopRequireDefault(_inspector);

var _globalTimeline = __webpack_require__(533);

var _globalTimeline2 = _interopRequireDefault(_globalTimeline);

var _collide = __webpack_require__(251);

var _collide2 = _interopRequireDefault(_collide);

var _pageHeader = __webpack_require__(198);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _scoutingService = __webpack_require__(224);

var _scoutingService2 = _interopRequireDefault(_scoutingService);

var _scoutingTouchService = __webpack_require__(320);

var _scoutingTouchService2 = _interopRequireDefault(_scoutingTouchService);

var _Action = __webpack_require__(249);

var _Action2 = _interopRequireDefault(_Action);

var _uuid = __webpack_require__(242);

var _uuid2 = _interopRequireDefault(_uuid);

var _errorPresenter = __webpack_require__(324);

var _errorPresenter2 = _interopRequireDefault(_errorPresenter);

var _scoutings = __webpack_require__(212);

var _scoutings2 = _interopRequireDefault(_scoutings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: {
        dncPlayer: _player2.default,
        newTouchForm: _newTouchForm2.default,
        editTouchForm: _editTouchForm2.default,
        touchesList: _touchesList2.default,
        timeline: _timeline2.default,
        inspector: _inspector2.default,
        adminHeader: _pageHeader2.default,
        globalTimeline: _globalTimeline2.default
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
                    'src': response.data.video_src
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
};

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(137);

var _vueColor = __webpack_require__(255);

var _TimeConverter = __webpack_require__(221);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _collide = __webpack_require__(251);

var _collide2 = _interopRequireDefault(_collide);

var _scoutings = __webpack_require__(212);

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

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(137);

var _vueColor = __webpack_require__(255);

var _TimeConverter = __webpack_require__(221);

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

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(137);

var _TimeConverter = __webpack_require__(221);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _scoutings = __webpack_require__(212);

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

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tagDropdown = __webpack_require__(369);

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

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uuid = __webpack_require__(242);

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

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tag = __webpack_require__(368);

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

/***/ 304:
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

/***/ 305:
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

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeConverter = __webpack_require__(221);

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

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeConverter = __webpack_require__(221);

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

/***/ 308:
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

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeConverter = __webpack_require__(221);

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

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeConverter = __webpack_require__(221);

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

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sketch;

var _mockstate = __webpack_require__(137);

var _InspectorStage = __webpack_require__(308);

var _InspectorStage2 = _interopRequireDefault(_InspectorStage);

var _InspectorTimeline = __webpack_require__(309);

var _InspectorTimeline2 = _interopRequireDefault(_InspectorTimeline);

var _InspectorVideoTimeMarker = __webpack_require__(310);

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

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Touch = __webpack_require__(252);

var _Touch2 = _interopRequireDefault(_Touch);

var _Action = __webpack_require__(249);

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

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sketch;

var _Stage = __webpack_require__(305);

var _Stage2 = _interopRequireDefault(_Stage);

var _Timeline = __webpack_require__(306);

var _Timeline2 = _interopRequireDefault(_Timeline);

var _TouchManager = __webpack_require__(304);

var _TouchManager2 = _interopRequireDefault(_TouchManager);

var _VideoTimeMarker = __webpack_require__(307);

var _VideoTimeMarker2 = _interopRequireDefault(_VideoTimeMarker);

var _touchesSpec = __webpack_require__(312);

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

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.actions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mockstate = __webpack_require__(137);

var _globalTimelineActions = __webpack_require__(527);

var _inspectorActions = __webpack_require__(528);

var actions = exports.actions = _extends({
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
    }
}, _inspectorActions.inspectorActions, _globalTimelineActions.globalTimelineActions);

/***/ }),

/***/ 317:
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
    globalTimeline: {
        instance: null,
        initialized: false,
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
        zoomFactorChange: false,
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
        }
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

/***/ 320:
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

/***/ 324:
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

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.inspector-info {\n  margin-left: 10px;\n}\n.inspector-info .inspector-info--title {\n    margin: 0 10px;\n}\n.athlete-menu .dropdown {\n  display: inline-block !important;\n}\n.athlete-menu .athlete-menu-title {\n  border-top: 1px solid #d3e0e9;\n  border-left: 1px solid #d3e0e9;\n  border-right: 1px solid #d3e0e9;\n  padding: 0 10px;\n}\n.athlete-menu .athlete-menu-left {\n  border-left: 1px solid #d3e0e9;\n  border-right: 1px solid #d3e0e9;\n  padding-bottom: 5px;\n}\n.athlete-menu .athlete-menu-right {\n  border-right: 1px solid #d3e0e9;\n  padding-bottom: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.tags a {\n  border-radius: 0 !important;\n  margin: 0 !important;\n}\n.close {\n  color: #ffffff !important;\n  opacity: 0.8 !important;\n}\n.tags-list {\n  display: block;\n  width: 100%;\n}\n.tags-list .label {\n  padding: 10px;\n  font-size: 12px;\n  margin-left: 5px;\n  margin-top: 5px;\n}\n.tags-list .label .close {\n    font-size: 16px;\n    margin-left: 5px;\n}\n.tags-list div,\n.gu-mirror {\n  -webkit-transition: opacity 0.4s ease-in-out;\n  transition: opacity 0.4s ease-in-out;\n}\n.tags-list div .label,\n  .gu-mirror .label {\n    padding: 10px;\n    line-height: 1.4;\n    font-size: 12px;\n    margin-left: 5px;\n    margin-top: 5px;\n}\n.tags-list div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab;\n  display: inline-block;\n}\n.tags-list div:last-child {\n  margin-bottom: 0;\n}\n.gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n.gu-mirror .label .close {\n    display: none;\n}\n.gu-hide {\n  display: none !important;\n}\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\n.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20);\n}\n.gu-transit .close {\n    display: none;\n}\n.tags-list .ex-moved {\n  background-color: #e74c3c;\n}\n.tags-list.ex-over {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move;\n}\n", ""]);

// exports


/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n#video-canvas {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    padding-right: 15px;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/global/video/player.vue?392657a0"],"names":[],"mappings":";AAWA;IACA,YAAA;IACA,aAAA;IACA,mBAAA;IACA,OAAA;IACA,oBAAA;CACA","file":"player.vue","sourcesContent":["<template>\n    <div>\n        <video ref=\"player\"\n               class=\"video-js vjs-default-skin\"\n               controls preload=\"auto\"\n               :poster=\"poster\"\n               :data-setup=\"strSource\"\n        ></video>\n    </div>\n</template>\n<style>\n    #video-canvas {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        padding-right: 15px;\n    }\n</style>\n<script>\n    import {dispatch, getState} from 'mockstate';\n\n    export default{\n        data(){\n            return {\n                player: {}\n            }\n        },\n        props: {\n            source: {\n                type: Object\n            },\n            poster: {\n                type: String\n            },\n            offset: {\n                type: Object,\n                default: function () {\n                    return {\n                        start: false,\n                        end: false\n                    }\n                }\n            }\n        },\n        components: {},\n        computed: {\n            strSource(){\n                return JSON.stringify(this.source)\n            }\n        },\n        mounted(){\n            this.initPlayer(this.source);\n        },\n        methods: {\n            api(){\n                return this.player\n            },\n            initPlayer(source){\n                var self = this;\n                console.log(self.source);\n                let config = {\n                    fluid: true,\n                    source: source.sources[0],\n                    techOrder: ['youtube'],\n                    playbackRates: [0.25, 0.5, 1, 1.5, 2],\n                    plugins: {\n                        disableProgress: {},\n                        abLoopPlugin: {\n                            enabled: false,\n                            loopIfBeforeStart: false, //allow video to play normally before the loop section? defaults to true\n                            looopIfAfterEnd: true, // defaults to true\n                            pauseAfterLooping: false,       //if true, after looping video will pause. Defaults to false\n                            pauseBeforeLooping: false,      //if true, before looping video will pause. Defaults to false\n                            createButtons: false,  //defaults to true\n                        }\n                    }\n                };\n                if (this.offset.start) {\n                    config.plugins.dncoffset = {\n                        startOffset: this.offset.start,\n                        endOffset: this.offset.end\n                    }\n                }\n                this.player = videojs(this.$refs.player, config);\n                dispatch('setPlayer', this.player);\n                this.player.play();\n                this.player.on('timeupdate', function durationSetter(event) {\n                    var state = getState('*');\n                    if (!state.player.duration) {\n                        dispatch('setDuration', state.player.instance.duration());\n                        dispatch('setZoom', 1);\n                        if (state.player.duration) {\n                            dispatch('playerReady', true);\n                            state.player.instance.off('timeupdate', durationSetter)\n                        }\n                    } else {\n                        dispatch('playerReady', true);\n                        state.player.instance.off('timeupdate', durationSetter)\n                    }\n                });\n                this.player.playbackRate(1);\n                this.player.on('timeupdate', ()=> {\n                    dispatch('setCurrentTime', this.player.currentTime());\n                });\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.tag {\n    display: inline-block;\n    color: #717171;\n    background: #FFF;\n    box-shadow: 0 1px 1px 0 rgba(180, 180, 180, 0.1);\n    -webkit-transition: all .1s ease-in-out;\n    transition: all .1s ease-in-out;\n    border-radius: 2px;\n    margin: 0 3px 6px 0;\n    padding: 5px 10px;\n    text-decoration: none;\n    cursor: pointer;\n}\n.tags .tag:hover {\n    border-color: #08C;\n}\n.tags .tag.primary {\n    color: #FFF;\n    background-color: #428BCA;\n    border-color: #357EBD\n}\n.tags .tag.success {\n    color: #FFF;\n    background-color: #5CB85C;\n    border-color: #4CAE4C\n}\n.tags .tag.info {\n    color: #FFF;\n    background-color: #5BC0DE;\n    border-color: #46B8DA\n}\n.tags .tag.warning {\n    color: #FFF;\n    background-color: #F0AD4E;\n    border-color: #EEA236\n}\n.tags .tag.danger {\n    color: #FFF;\n    background-color: #D9534F;\n    border-color: #D43F3A\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/scouting/touches/tags/tag.vue?024a0920"],"names":[],"mappings":";AAOA;IACA,sBAAA;IACA,eAAA;IACA,iBAAA;IAEA,iDAAA;IACA,wCAAA;IAIA,gCAAA;IACA,mBAAA;IACA,oBAAA;IACA,kBAAA;IACA,sBAAA;IACA,gBAAA;CACA;AAEA;IACA,mBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA","file":"tag.vue","sourcesContent":["<template>\n    <tag-dropdown v-if=\"tag.dropdown\" v-on:option-clicked=\"dropdownOptionClicked\" :tag=\"tag\"></tag-dropdown>\n    <div v-else class=\"tag-dropdown\">\n        <a class=\" btn tag\" v-on:click.prevent=\"tagClicked\" :class=\"'bg-'+tag.color\">{{tag.name}}</a>\n    </div>\n</template>\n<style>\n    .tag {\n        display: inline-block;\n        color: #717171;\n        background: #FFF;\n        -webkit-box-shadow: 0 1px 1px 0 rgba(180, 180, 180, 0.1);\n        box-shadow: 0 1px 1px 0 rgba(180, 180, 180, 0.1);\n        -webkit-transition: all .1s ease-in-out;\n        -moz-transition: all .1s ease-in-out;\n        -o-transition: all .1s ease-in-out;\n        -ms-transition: all .1s ease-in-out;\n        transition: all .1s ease-in-out;\n        border-radius: 2px;\n        margin: 0 3px 6px 0;\n        padding: 5px 10px;\n        text-decoration: none;\n        cursor: pointer;\n    }\n\n    .tags .tag:hover {\n        border-color: #08C;\n    }\n\n    .tags .tag.primary {\n        color: #FFF;\n        background-color: #428BCA;\n        border-color: #357EBD\n    }\n\n    .tags .tag.success {\n        color: #FFF;\n        background-color: #5CB85C;\n        border-color: #4CAE4C\n    }\n\n    .tags .tag.info {\n        color: #FFF;\n        background-color: #5BC0DE;\n        border-color: #46B8DA\n    }\n\n    .tags .tag.warning {\n        color: #FFF;\n        background-color: #F0AD4E;\n        border-color: #EEA236\n    }\n\n    .tags .tag.danger {\n        color: #FFF;\n        background-color: #D9534F;\n        border-color: #D43F3A\n    }\n</style>\n<script>\n    import tagDropdown from './tagDropdown.vue'\n\n    export default{\n        props: {\n            tag: {}\n        },\n        components: {\n            tagDropdown\n        },\n        methods: {\n            dropdownOptionClicked(tag){\n                let tagDropdown = _.cloneDeep(tag);\n                this.$emit('tag-clicked', tagDropdown)\n            },\n            tagClicked(){\n                let tag = _.cloneDeep(this.tag);\n                this.$emit('tag-clicked', tag)\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"touchesList.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"newTouchForm.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.vue-color__compact {\n    width: 100% !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/scouting/touches/forms/newTouchForm.vue?3cf04dd9"],"names":[],"mappings":";AA6SA;IACA,uBAAA;CACA","file":"newTouchForm.vue","sourcesContent":["<template>\n    <div>\n        <form action=\"\" v-on:submit.prevent=\"onSubmit\" class=\"form-horizontal form-touch\" v-if=\"open\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.text') }\">\n                        <label for=\"new-title\" class=\"control-label col-xs-2\">\n                            Title\n                        </label>\n                        <div class=\"col-xs-10\">\n\n                            <input id=\"new-title\" name=\"new-title\" type=\"text\"\n                                   v-validate.initial=\"touch.text\"\n                                   data-rules=\"required\"\n                                   data-as=\"Title\"\n                                   class=\"form-control\"\n                                   placeholder=\"Title\"\n                                   v-model=\"touch.text\">\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touch.text')\">{{ errors.first('touch.text') }}</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label for=\"new-title\" class=\"control-label col-xs-2\">\n                            Color\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <compact-picker v-model=\"touch.color\" @change-color=\"onChangeColor\"></compact-picker>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.start') }\">\n                        <label for=\"new-start\" class=\"control-label col-xs-2\">\n                            Start (sec)\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-start\" name=\"new-start\" type=\"text\"\n                                           v-validate.initial=\"touch.start\"\n                                           data-rules=\"required|numeric\"\n                                           data-as=\"Start\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           v-model=\"touch.start\">\n                                </div>\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-start-fmt\" name=\"new-start-fmt\" type=\"text\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           disabled\n                                           v-model=\"startFmt\">\n                                </div>\n                            </div>\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touch.start')\">{{ errors.first('touch.start') }}</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.end') }\">\n                        <label for=\"new-end\" class=\"control-label col-xs-2\">\n                            End(sec)\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-end\" name=\"new-end\" type=\"text\"\n                                           v-validate.initial=\"touch.end\"\n                                           data-rules=\"required|numeric\"\n                                           data-as=\"End\"\n                                           class=\"form-control\"\n                                           placeholder=\"End\"\n                                           v-model=\"touch.end\">\n                                </div>\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-end-fmt\" name=\"new-end-fmt\" type=\"text\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           disabled\n                                           v-model=\"endFmt\">\n                                </div>\n                            </div>\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touch.end')\">{{ errors.first('touch.end') }}</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" v-if=\"collide\">\n                <div class=\"col-xs-12\">\n                    <div class=\"alert alert-danger\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n                        <h4><i class=\"icon fa fa-ban\"></i> Touches cant overlap!</h4>\n                        The touch that you want to add overlap with:\n                        <ul>\n                            <li v-for=\"touch in collideTouches\">\n                                <strong v-if=\"touch.previous.hasOwnProperty('id')\">{{touch.previous.text}}: that\n                                    starts\n                                    on {{toHHMMSS(touch.previous.start)}} an\n                                    ends on\n                                    {{toHHMMSS(touch.previous.end)}}</strong>\n                                <strong v-if=\"touch.current.hasOwnProperty('id')\">{{touch.current.text}}: that\n                                    starts on\n                                    {{toHHMMSS(touch.current.start)}} an\n                                    ends on\n                                    {{toHHMMSS(touch.current.end)}}</strong>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" v-if=\"endInvalid\">\n                <div class=\"col-xs-12\">\n                    <div class=\"alert alert-danger\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n                        <h4><i class=\"icon fa fa-ban\"></i> Validation Error!</h4>\n                        The end of the touch must be greater than the start\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 text-right\">\n                    <button type=\"submit\" class=\"btn btn-success\">Add Touch</button>\n                    <button class=\"btn btn-danger\" v-on:click.prevent=\"close\">Cancel</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</template>\n<style>\n\n</style>\n<script>\n    import {getState} from 'mockstate';\n    import {Compact} from 'vue-color';\n    import TimeConverter from '../sketch/components/utils/TimeConverter'\n    export default{\n        props: {\n            open: {},\n            initTouch: {\n                default: function () {\n                    return {\n                        initialized: false,\n                        text: null,\n                        start: 0,\n                        end: 100,\n                        color: {\n                            \"hsl\": {\"h\": 61.0762331838565, \"s\": 1, \"l\": 0.4372549019607843, \"a\": 1},\n                            \"hex\": \"#DBDF00\",\n                            \"rgba\": {\"r\": 219, \"g\": 223, \"b\": 0, \"a\": 1, \"alpha\": 50},\n                            \"hsv\": {\"h\": 61.0762331838565, \"s\": 1, \"v\": 0.8745098039215686, \"a\": 1},\n                        }\n                    }\n                }\n            },\n            duration: {},\n            start: {},\n            end: {}\n        },\n        watch: {\n            open(val){\n                this.touch = Object.assign({}, this.initTouch);\n            },\n            start(val){\n                this.touch.start = val;\n            },\n            end(val){\n                this.touch.end = val\n            },\n            'touch.start': function () {\n                this.checkCollide()\n            },\n            'touch.end': function () {\n                this.checkCollide();\n                this.endInvalid = !!(parseInt(this.touch.start) >= parseInt(this.touch.end) || parseInt(this.touch.end) > parseInt(this.duration));\n            }\n        },\n        data(){\n            return {\n                collide: false,\n                collideTouches: [],\n                endInvalid: false,\n                touch: {\n                    text: null,\n                    start: 0,\n                    end: 0,\n                    color: {\n                        rgba: {\n                            r: 25,\n                            g: 77,\n                            b: 51,\n                            a: 1\n                        },\n                    }\n                }\n            }\n        },\n        computed: {\n            startFmt(){\n                return TimeConverter.toHHMMSS(this.touch.start)\n            },\n            endFmt(){\n                return TimeConverter.toHHMMSS(this.touch.end)\n            },\n            validationEnd(){\n                return parseInt(this.touch.start) + 1;\n            }\n        },\n        components: {\n            'compact-picker': Compact,\n        },\n        methods: {\n            close(){\n                this.$emit('cancel-new-touch');\n            },\n            toHHMMSS(secs) {\n                return TimeConverter.toHHMMSS(secs)\n            },\n            onChangeColor(val){\n                this.touch.color = val\n            },\n            checkCollide(){\n                var touchs = getState('touchManager').touches.slice(0);\n                touchs.push(this.touch);\n                var overlap = this.overlap(touchs);\n                this.collide = overlap.overlap;\n                this.collideTouches = overlap.ranges;\n            },\n            overlap(touchs){\n                var sortedRanges = touchs.sort((previous, current) => {\n\n                    var previousTime = parseInt(previous.start);\n                    var currentTime = parseInt(current.start);\n\n                    // if the previous is earlier than the current\n                    if (previousTime < currentTime) {\n                        return -1;\n                    }\n\n                    // if the previous time is the same as the current time\n                    if (previousTime === currentTime) {\n                        return 0;\n                    }\n\n                    // if the previous time is later than the current time\n                    return 1;\n                });\n\n                // return the final results\n                return sortedRanges.reduce((result, current, idx, arr) => {\n                    // get the previous range\n                    if (idx === 0) {\n                        return result;\n                    }\n                    var previous = arr[idx - 1];\n\n                    // check for any overlap\n                    var previousEnd = parseInt(previous.end);\n                    var currentStart = parseInt(current.start);\n                    var overlap = (previousEnd >= currentStart);\n\n                    // store the result\n                    if (overlap) {\n                        // yes, there is overlap\n                        result.overlap = true;\n                        // store the specific ranges that overlap\n                        result.ranges.push({\n                            previous: previous,\n                            current: current\n                        })\n                    }\n\n                    return result;\n\n                    // seed the reduce\n                }, {overlap: false, ranges: []});\n            },\n            onSubmit(){\n                this.$validator.validateAll();\n                if (this.errors.any()) {\n\n                } else {\n                    this.endInvalid = !!(parseInt(this.touch.start) >= parseInt(this.touch.end) || parseInt(this.touch.end) > parseInt(Math.floor(this.$parent.$refs.player.api().duration())));\n                    if (!this.endInvalid) {\n                        if (!this.collide) {\n                            this.endInvalid = false;\n                            this.$emit('add-new-touch', this.touch);\n                        }\n                    }\n                }\n            }\n        }\n    }\n</script>\n<style>\n    .vue-color__compact {\n        width: 100% !important;\n    }\n</style>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.tag-dropdown {\n    display: inline-block !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/scouting/touches/tags/tagDropdown.vue?f44c862c"],"names":[],"mappings":";AAcA;IACA,iCAAA;CACA","file":"tagDropdown.vue","sourcesContent":["<template>\n    <div class=\"dropdown tag-dropdown\">\n        <a class=\"dropdown-toggle btn tag\" :class=\"'bg-'+tag.color\"\n           data-toggle=\"dropdown\" aria-expanded=\"false\" :id=\"id\">{{tag.name}}\n            <span class=\"fa fa-caret-down\"></span>\n        </a>\n        <ul class=\"dropdown-menu\" :aria-labelledby=\"id\">\n            <li v-for=\"opt in tag.options\">\n                <a href=\"#\" v-on:click.prevent=\"clickOpt(opt)\">{{opt.name}}</a>\n            </li>\n        </ul>\n    </div>\n</template>\n<style>\n    .tag-dropdown {\n        display: inline-block !important;\n    }\n</style>\n<script>\n    import uuid from 'base/mixins/uuid'\n    export default{\n        props: {\n            tag: {},\n        },\n        data(){\n            return {\n                id: ''\n            }\n        },\n        mixins: [uuid],\n        mounted(){\n            this.id = this.generateUUID();\n        },\n        methods: {\n            clickOpt(opt){\n                this.tag.option = opt;\n                this.$emit('option-clicked', this.tag)\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"editTouchForm.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.vue-color__compact {\n    width: 100% !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/scouting/touches/forms/editTouchForm.vue?f756ffb0"],"names":[],"mappings":";AAqQA;IACA,uBAAA;CACA","file":"editTouchForm.vue","sourcesContent":["<template>\n    <div>\n        <form action=\"\" v-on:submit.prevent=\"onSubmit\" class=\"form-horizontal form-touch\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touchtext') }\">\n                        <label for=\"new-title\" class=\"control-label col-xs-2\">\n                            {{$t('scoutings.title')}}\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <input id=\"new-title\"\n                                   name=\"touchtext\"\n                                   type=\"text\"\n                                   v-validate.initial\n                                   data-vv-rules=\"required\"\n                                   data-vv-as=\"Title\"\n                                   class=\"form-control\"\n                                   placeholder=\"Title\"\n                                   v-model=\"touch.text\">\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touchtext')\">{{ errors.first('touchtext') }}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label for=\"new-title\" class=\"control-label col-xs-2\">\n                            {{$t('scoutings.color')}}\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <compact-picker v-model=\"touch.color\" @change-color=\"onChangeColor\"></compact-picker>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touchstart') }\">\n                        <label for=\"new-start\" class=\"control-label col-xs-2\">\n                            {{$t('scoutings.start')}}\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-start\"\n                                           name=\"touchstart\"\n                                           type=\"text\"\n                                           v-validate.initial\n                                           data-vv-rules=\"required|numeric\"\n                                           data-vv-as=\"Start\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           v-model=\"touch.start\">\n                                </div>\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-start-fmt\" name=\"new-start-fmt\" type=\"text\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           disabled\n                                           v-model=\"startFmt\">\n                                </div>\n                            </div>\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touchstart')\">{{ errors.first('touchstart') }}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touchend') }\">\n                        <label for=\"new-end\" class=\"control-label col-xs-2\">\n                            {{$t('scoutings.end')}}\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-end\"\n                                           name=\"touchend\"\n                                           type=\"text\"\n                                           v-validate.initial\n                                           data-vv-rules=\"required|numeric\"\n                                           data-vv-as=\"End\"\n                                           class=\"form-control\"\n                                           placeholder=\"End\"\n                                           v-model=\"touch.end\">\n                                </div>\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-end-fmt\" name=\"new-end-fmt\" type=\"text\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           disabled\n                                           v-model=\"endFmt\">\n                                </div>\n                            </div>\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touchend')\">{{ errors.first('touchend') }}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" v-if=\"collide\">\n                <div class=\"col-xs-12\">\n                    <div class=\"alert alert-danger\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n                        <h4>\n                            <i class=\"icon fa fa-ban\"></i>\n                            {{$t('scoutings.touches_cant_overlap')}}\n                        </h4>\n                        {{$t('scoutings.touch_overlap_with')}}:\n                        <ul>\n                            <li v-for=\"collideTouch in collideTouches\">\n                                <strong v-if=\"collideTouch.previous.id != touch.id\">\n                                    {{$t('scoutings.touch_overlap_msg',{ title:\n                                    collideTouch.previous.text,start:toHHMMSS(collideTouch.previous.start),end:\n                                    toHHMMSS(collideTouch.previous.end)})}}\n                                </strong>\n                                <strong v-if=\"collideTouch.current.id != touch.id\">\n                                    {{$t('scoutings.touch_overlap_msg',{ title:\n                                    collideTouch.current.text,start:toHHMMSS(collideTouch.current.start),end:\n                                    toHHMMSS(collideTouch.current.end)})}}\n                                </strong>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" v-if=\"endInvalid\">\n                <div class=\"col-xs-12\">\n                    <div class=\"alert alert-danger\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n                        <h4>\n                            <i class=\"icon fa fa-ban\"></i>\n                            {{$t('scoutings.validation_error')}}\n                        </h4>\n                        {{$t('scoutings.validation_end_greater')}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 text-right\">\n                    <button type=\"submit\" class=\"btn btn-success\">{{$t('scoutings.save')}}</button>\n                    <button class=\"btn btn-danger\" v-on:click.prevent=\"close\">{{$t('scoutings.cancel')}}</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</template>\n<style>\n\n</style>\n<script>\n    import {getState} from 'mockstate';\n    import {Compact} from 'vue-color';\n    import TimeConverter from '../sketch/components/utils/TimeConverter'\n    import collideMixin from 'base/mixins/collide'\n    import scoutingsLocales from 'base/lang/admin/scoutings/scoutings.js';\n\n    export default{\n        locales: scoutingsLocales,\n        props: {\n            initTouch: {\n                default: function () {\n                    return {\n                        initialized: false,\n                        text: null,\n                        start: 0,\n                        end: 100,\n                        color: {\n                            rgba: {\n                                r: 25,\n                                g: 77,\n                                b: 51,\n                                a: 1\n                            },\n                        }\n                    }\n                }\n            },\n            duration: {},\n        },\n        mixins: [collideMixin],\n        created(){\n            this.touch = Object.assign({}, this.initTouch);\n        },\n        watch: {\n            'touch.start': function () {\n                var collideResult = this.checkCollide(this.touch);\n                this.collide = collideResult.collide;\n                this.collideTouches = collideResult.collideTouches;\n            },\n            'touch.end': function () {\n                var collideResult = this.checkCollide(this.touch);\n                this.collide = collideResult.collide;\n                this.collideTouches = collideResult.collideTouches;\n                this.endInvalid = parseInt(this.touch.start) >= parseInt(this.touch.end);\n            }\n        },\n        data(){\n            return {\n                collide: false,\n                collideTouches: [],\n                endInvalid: false,\n                touch: {\n                    text: null,\n                    start: 0,\n                    end: 0,\n                    color: {\n                        rgba: {\n                            r: 25,\n                            g: 77,\n                            b: 51,\n                            a: 1\n                        },\n                    }\n                }\n            }\n        },\n        computed: {\n            startFmt(){\n                return TimeConverter.toHHMMSS(this.touch.start)\n            },\n            endFmt(){\n                return TimeConverter.toHHMMSS(this.touch.end)\n            },\n            validationEnd(){\n                return parseInt(this.touch.start) + 1;\n            }\n        },\n        components: {\n            'compact-picker': Compact,\n        },\n        methods: {\n            close(){\n                this.$emit('cancel-new-touch', this.touch);\n            },\n            toHHMMSS(secs) {\n                return TimeConverter.toHHMMSS(secs)\n            },\n            onChangeColor(val){\n                this.touch.color = val\n            },\n            onSubmit(){\n                this.$validator.validateAll().then(()=> {\n                    if (this.touch.start >= this.touch.end) {\n                        this.endInvalid = true;\n                    } else {\n                        this.endInvalid = false;\n                        if (!this.collide) {\n                            this.$emit('add-new-touch', this.touch);\n                        }\n                    }\n                }).catch(bag => {\n                    this.$root.errorToast(this.$t('admin.validation_error'));\n                });\n            }\n        }\n    }\n</script>\n<style>\n    .vue-color__compact {\n        width: 100% !important;\n    }\n</style>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"timeline.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(422)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(257),
  /* template */
  __webpack_require__(376),
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

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(415)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(290),
  /* template */
  __webpack_require__(396),
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

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(444)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(291),
  /* template */
  __webpack_require__(411),
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

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(439)
__webpack_require__(440)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(293),
  /* template */
  __webpack_require__(407),
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

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(434)
__webpack_require__(435)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(294),
  /* template */
  __webpack_require__(399),
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

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(431)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(295),
  /* template */
  __webpack_require__(395),
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

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(427)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(296),
  /* template */
  __webpack_require__(389),
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

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(437)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(297),
  /* template */
  __webpack_require__(402),
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

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(416)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(298),
  /* template */
  __webpack_require__(400),
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

/***/ 374:
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
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [(_vm.playerReady) ? _c('global-timeline') : _vm._e()], 1)]), _vm._v(" "), _c('div', {
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

/***/ 376:
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

/***/ 389:
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

/***/ 395:
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

/***/ 396:
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

/***/ 399:
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

/***/ 400:
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

/***/ 402:
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

/***/ 407:
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
     require("vue-hot-reload-api").rerender("data-v-a749d602", module.exports)
  }
}

/***/ }),

/***/ 411:
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

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(326);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("67dc73f9", content, false);
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

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(327);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("7471721a", content, false);
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

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(333);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("06a2d542", content, false);
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

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(338);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("65cb71f2", content, false);
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

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(342);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("16aafe9c", content, false);
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

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(345);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("38b19a8c", content, false);
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

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(346);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("454a900d", content, false);
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

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(348);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("303c1cd4", content, false);
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

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(350);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("c7f9de34", content, false);
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

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(351);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("2288cb85", content, false);
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

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(355);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("35190154", content, false);
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

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.globalTimelineActions = undefined;

var _mockstate = __webpack_require__(137);

var globalTimelineActions = exports.globalTimelineActions = {
    setGlobalTimeline: function setGlobalTimeline(state, instance) {
        state.globalTimeline.instance = instance;
        return instance;
    },
    setGlobalTimelineWidth: function setGlobalTimelineWidth(state, width) {
        state.globalTimeline.width = width;
        return width;
    },
    setGlobalTimelineHeight: function setGlobalTimelineHeight(state, height) {
        state.globalTimeline.height = height;
        (0, _mockstate.dispatch)('setGlobalTimelineEndY', state.touchManager.globalTimeline.startY + height);

        return height;
    },
    setGlobalTimelineCanvas: function setGlobalTimelineCanvas(state, canvas) {
        state.globalTimeline.canvas.instance = canvas;
        return canvas;
    },
    setGlobalTimelineVideoMarker: function setGlobalTimelineVideoMarker(state, videoMarker) {
        state.globalTimeline.videoMarker.instance = videoMarker;
        return videoMarker;
    },
    setGlobalTimelineCanvasWidth: function setGlobalTimelineCanvasWidth(state, width) {
        state.globalTimeline.canvas.width = width;
        return width;
    },
    setGlobalTimelineCanvasHeight: function setGlobalTimelineCanvasHeight(state, height) {
        state.globalTimeline.canvas.height = height;
        return height;
    },
    setGlobalTimelineStage: function setGlobalTimelineStage(state, stage) {
        state.globalTimeline.stage.instance = stage;
        return stage;
    },
    setGlobalTimelineTimeline: function setGlobalTimelineTimeline(state, timeline) {
        state.globalTimeline.instance = timeline;
        return timeline;
    },
    setGlobalTimelineStartTime: function setGlobalTimelineStartTime(state, startTime) {
        state.globalTimeline.startTime = startTime;
        return startTime;
    },
    setGlobalTimelineStartY: function setGlobalTimelineStartY(state, startY) {
        state.globalTimeline.startY = startY;
        (0, _mockstate.dispatch)('setGlobalTimelineMinutesY', startY + 5);
        (0, _mockstate.dispatch)('setGlobalTimelineSecondsY', startY + 55);
        (0, _mockstate.dispatch)('setGlobalTimelineAxisY', startY + 60);
        return startY;
    },
    setGlobalTimelineAxisY: function setGlobalTimelineAxisY(state, axisY) {
        state.globalTimeline.axisY = axisY;
        return axisY;
    },
    setGlobalTimelineEndY: function setGlobalTimelineEndY(state, endY) {
        state.globalTimeline.endY = endY;
        return endY;
    },
    setGlobalTimelineStartX: function setGlobalTimelineStartX(state, startX) {
        state.globalTimeline.startX = startX;
        return startX;
    },
    setGlobalTimelineEndX: function setGlobalTimelineEndX(state, endX) {
        state.globalTimeline.endX = endX;
        return endX;
    },
    setGlobalTimelineMinutesY: function setGlobalTimelineMinutesY(state, minutesY) {
        state.globalTimeline.minutesY = minutesY;
        return minutesY;
    },
    setGlobalTimelineSecondsY: function setGlobalTimelineSecondsY(state, secondsY) {
        state.globalTimeline.secondsY = secondsY;
        return secondsY;
    },
    setGlobalTimelineSecondWidth: function setGlobalTimelineSecondWidth(state, secondWidth) {
        state.globalTimeline.secondWidth = secondWidth;
        return secondWidth;
    },
    setGlobalTimelineColWidth: function setGlobalTimelineColWidth(state, colWidth) {
        state.globalTimeline.colWidth = colWidth;
        (0, _mockstate.dispatch)('setGlobalTimelineSecondWidth', colWidth / 10);
        return colWidth;
    },
    setGlobalTimelineZoom: function setGlobalTimelineZoom(state, zoom) {
        if (state.player.duration > 420) {
            state.globalTimeline.initialZoomFactor = Math.floor(state.player.duration / 420);
        }
        if (state.globalTimeline.zoomFactor != zoom) {
            state.globalTimeline.zoomFactorChange = true;
        }
        if (zoom < state.globalTimeline.initialZoomFactor) {
            state.globalTimeline.zoomFactor = state.globalTimeline.initialZoomFactor;
        } else {
            state.globalTimeline.zoomFactor = zoom;
        }
        return zoom;
    },
    setGlobalTimelineInitialized: function setGlobalTimelineInitialized(state, initialized) {
        state.globalTimeline.initialized = initialized;
        return initialized;
    }
};

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.inspectorActions = undefined;

var _mockstate = __webpack_require__(137);

var inspectorActions = exports.inspectorActions = {
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

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(137);

var _globalTimelineSketch = __webpack_require__(531);

var _globalTimelineSketch2 = _interopRequireDefault(_globalTimelineSketch);

var _scoutings = __webpack_require__(212);

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
    created: function created() {},
    mounted: function mounted() {
        window.p = new p5(_globalTimelineSketch2.default);
    },

    methods: {
        globalZoomIn: function globalZoomIn() {
            var state = (0, _mockstate.getState)('*');
            (0, _mockstate.dispatch)('setGlobalTimelineZoom', state.timeline.zoomFactor + 1);
            (0, _mockstate.dispatch)('setGlobalTimelineInitialized', false);
        },
        globalZoomOut: function globalZoomOut() {
            var state = (0, _mockstate.getState)('*');
            if (state.globalTimeline.zoomFactor > state.globalTimeline.initialZoomFactor) {
                (0, _mockstate.dispatch)('setGlobalTimelineZoom', state.timeline.zoomFactor - 1);
                (0, _mockstate.dispatch)('setGlobalTimelineInitialized', false);
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

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sketch;

var _Stage = __webpack_require__(305);

var _Stage2 = _interopRequireDefault(_Stage);

var _Timeline = __webpack_require__(306);

var _Timeline2 = _interopRequireDefault(_Timeline);

var _TouchManager = __webpack_require__(304);

var _TouchManager2 = _interopRequireDefault(_TouchManager);

var _VideoTimeMarker = __webpack_require__(307);

var _VideoTimeMarker2 = _interopRequireDefault(_VideoTimeMarker);

var _touchesSpec = __webpack_require__(312);

var _touchesSpec2 = _interopRequireDefault(_touchesSpec);

var _mockstate = __webpack_require__(137);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sketch(p) {
    var state = null;
    window.p = p;
    p.setup = function () {
        var width = document.getElementById('globalTimeline').offsetWidth;
        var canvas = p.createCanvas(width - 20, 130);
        canvas.mouseMoved(mouseMoved);
        canvas.mousePressed(mousePressed);
        p.colorMode(p.RGB, 255, 255, 255, 100);
        p.frameRate(10);
    };

    p.draw = function () {};

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

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"globalTimeline.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(535)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(530),
  /* template */
  __webpack_require__(534),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/scouting/touches/canvas/globalTimeline.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] globalTimeline.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ddf5b41", Component.options)
  } else {
    hotAPI.reload("data-v-3ddf5b41", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box box-solid",
    attrs: {
      "id": "globalTimelineBox"
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
        _vm.globalZoomIn($event)
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
        _vm.globalZoomOut($event)
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-search-minus"
  })])]), _vm._v(" "), _c('i', {
    staticClass: "fa fa-calendar"
  }), _vm._v(" "), _c('h3', {
    staticClass: "box-title"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('scoutings.globaltimeline')) + "\n        ")])]), _vm._v(" "), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box-body"
  }, [_c('div', {
    attrs: {
      "id": "globalTimeline"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3ddf5b41", module.exports)
  }
}

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(532);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("2cc55982", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3ddf5b41!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./globalTimeline.vue", function() {
     var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3ddf5b41!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./globalTimeline.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZWRpdC52dWUiLCJ3ZWJwYWNrOi8vL3BhZ2VIZWFkZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/YTU2ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/MzhhMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlPzQ0MTIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYW5nL2FkbWluL3Njb3V0aW5ncy9zY291dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3V0aWxzL1RpbWVDb252ZXJ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvc2NvdXRpbmdzL3Njb3V0aW5nU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy91dWlkLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy90b3VjaGVzL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9jb2xsaWRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy90b3VjaGVzL1RvdWNoLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91dGlscy9TZWNvbmRzVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVXVpZFV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtY29sb3IvZGlzdC92dWUtY29sb3IubWluLmpzIiwid2VicGFjazovLy9wbGF5ZXIudnVlIiwid2VicGFjazovLy9pbnNwZWN0b3IudnVlIiwid2VicGFjazovLy90aW1lbGluZS52dWUiLCJ3ZWJwYWNrOi8vL2VkaXQudnVlIiwid2VicGFjazovLy9lZGl0VG91Y2hGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vbmV3VG91Y2hGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vdG91Y2hlc0xpc3QudnVlIiwid2VicGFjazovLy90YWcudnVlIiwid2VicGFjazovLy90YWdEcm9wZG93bi52dWUiLCJ3ZWJwYWNrOi8vL3RhZ3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy90b3VjaGVzL1RvdWNoTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvU3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3VpL1RpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91aS9WaWRlb1RpbWVNYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3VpL2luc3BlY3Rvci9JbnNwZWN0b3JTdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvaW5zcGVjdG9yL0luc3BlY3RvclRpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91aS9pbnNwZWN0b3IvSW5zcGVjdG9yVmlkZW9UaW1lTWFya2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvaW5zcGVjdG9yU2tldGNoLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvc3BlY3MvdG91Y2hlc1NwZWMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC90aW1lbGluZVNrZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc3RvcmVzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3N0b3Jlcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9zY291dGluZ3Mvc2NvdXRpbmdUb3VjaFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYWpheC9lcnJvclByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2luc3BlY3Rvci52dWU/NjNlYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdzLnZ1ZT80OGJhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9nbG9iYWwvdmlkZW8vcGxheWVyLnZ1ZT9iZDQ3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZy52dWU/MDE3MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvbGlzdHMvdG91Y2hlc0xpc3QudnVlPzcwNjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWU/MzMxYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZT9hNjdlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ0Ryb3Bkb3duLnZ1ZT9kOTMwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZT8zNWU0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZT9hNTg1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvdGltZWxpbmUudnVlPzdlZmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvaW5zcGVjdG9yLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL3RpbWVsaW5lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvZWRpdFRvdWNoRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWcudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ0Ryb3Bkb3duLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZWRpdC52dWU/NjMwMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZ2xvYmFsL3ZpZGVvL3BsYXllci52dWU/MDE2MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWcudnVlP2RhYjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZT9lMDI0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvaW5zcGVjdG9yLnZ1ZT9jNTI4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlPzA4NGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFncy52dWU/YWEyZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWU/MmVkYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvZWRpdFRvdWNoRm9ybS52dWU/MGQ2YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL3RpbWVsaW5lLnZ1ZT8yNjAyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvaW5zcGVjdG9yLnZ1ZT8yZmMyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ3MudnVlPzIyY2IiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlPzkwZWMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnLnZ1ZT82NmE2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9saXN0cy90b3VjaGVzTGlzdC52dWU/NmIyZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZT82NDc2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlP2JhNTIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnRHJvcGRvd24udnVlPzI0YWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlPzBjYzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlPzI5MDYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy90aW1lbGluZS52dWU/NDNhMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc3RvcmVzL2FjdGlvbnMvZ2xvYmFsVGltZWxpbmVBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9zdG9yZXMvYWN0aW9ucy9pbnNwZWN0b3JBY3Rpb25zLmpzIiwid2VicGFjazovLy9nbG9iYWxUaW1lbGluZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9nbG9iYWxUaW1lbGluZVNrZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2dsb2JhbFRpbWVsaW5lLnZ1ZT82MmJkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvZ2xvYmFsVGltZWxpbmUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvZ2xvYmFsVGltZWxpbmUudnVlPzNkNTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy9nbG9iYWxUaW1lbGluZS52dWU/ZGU5MiJdLCJuYW1lcyI6WyJUaW1lQ29udmVydGVyIiwic2VjcyIsInNlY19udW0iLCJwYXJzZUludCIsImhvdXJzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJzaG93IiwiaWQiLCJzdWNjZXNzQ2FsYmFjayIsImVycm9yQ2FsbGJhY2siLCJodHRwIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiYm9keSIsImNhdGNoIiwiZXJyb3IiLCJjcmVhdGUiLCJzY291dGluZyIsInBvc3QiLCJ1cGRhdGUiLCJwdXQiLCJlbXVsYXRlSFRUUCIsInJlbW92ZSIsImRlbGV0ZSIsInJlcG9ydCIsImxhdGVzdCIsIm1ldGhvZHMiLCJnZW5lcmF0ZVVVSUQiLCJkIiwiRGF0ZSIsImdldFRpbWUiLCJ3aW5kb3ciLCJwZXJmb3JtYW5jZSIsIm5vdyIsInV1aWQiLCJyZXBsYWNlIiwiYyIsInIiLCJyYW5kb20iLCJ0b1N0cmluZyIsIkFjdGlvbiIsInN0YXJ0IiwiZW5kIiwiY29sb3IiLCJzdGF0ZSIsIm1vdXNlSXNPdmVyIiwiaXNTZWxlY3RlZCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJsaW1pdFRleHRZIiwidG91Y2hNYW5hZ2VyIiwiaW5zcGVjdG9yIiwidGltZWxpbmUiLCJzdGFydFkiLCJzZWNvbmRzVXRpbCIsImNhbnZhQ29udGFpbmVyIiwibGVmdFRhZ3MiLCJyaWdodFRhZ3MiLCJjYWxjdWxhdGVYIiwiY2FsY3VsYXRlWSIsImNhbGN1bGF0ZVdpZHRoIiwiY2FsY3VsYXRlSGVpZ2h0Iiwic2VsZWN0ZWRBY3Rpb24iLCJyZ2JhIiwiYWxwaGEiLCJub1N0cm9rZSIsInRleHRTaXplIiwidGV4dFN0eWxlIiwiTk9STUFMIiwiZmlsbCIsImciLCJiIiwicmVjdCIsIkJPTEQiLCJ0ZXh0IiwidG9ISE1NU1MiLCJ0ZXh0QWxpZ24iLCJDRU5URVIiLCJzdHJva2UiLCJzdHJva2VXZWlnaHQiLCJsaW5lIiwiZW5kWSIsInN0YXJ0VGltZSIsImFjdGlvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2bSIsImVkaXRUb3VjaCIsInJlY29yZGluZ0FjdGlvbiIsInJlY29yZGluZ1RvdWNoIiwiJHJlZnMiLCJwbGF5ZXIiLCJhcGkiLCJhYkxvb3BQbHVnaW4iLCJzZXRTdGFydCIsInNldEVuZCIsImVuYWJsZSIsImdvVG9TdGFydCIsInNlY29uZFdpZHRoIiwic3RhcnRYIiwiY2hlY2tDb2xsaWRlIiwidG91Y2giLCJ0b3VjaGVzIiwiXyIsInJlamVjdCIsIm8iLCJwdXNoIiwib3ZlcmxhcCIsImNvbGxpZGUiLCJjb2xsaWRlVG91Y2hlcyIsInJhbmdlcyIsImNoZWNrQ29sbGlkZUFjdGlvbnMiLCJzZWxlY3RlZFRvdWNoIiwiYWN0aW9ucyIsImNvbGxpZGVBY3Rpb25zIiwic29ydGVkUmFuZ2VzIiwic29ydCIsInByZXZpb3VzIiwiY3VycmVudCIsInByZXZpb3VzVGltZSIsImN1cnJlbnRUaW1lIiwicmVkdWNlIiwicmVzdWx0IiwiaWR4IiwiYXJyIiwicHJldmlvdXNFbmQiLCJjdXJyZW50U3RhcnQiLCJUb3VjaCIsInAiLCJqIiwibGVuZ3RoIiwiZHJhdyIsInN0YXJ0ZWQiLCJwbGF5IiwiU2Vjb25kc1V0aWwiLCJVdWlkVXRpbCIsIlRvdWNoTWFuYWdlciIsImlzTW91c2VPdmVyIiwiY29uc29sZSIsImxvZyIsImFUb3VjaElzU2VsZWN0ZWQiLCJpc01vdXNlUHJlc3NzZWRPdmVyIiwiZGlzYWJsZSIsImFuQWN0aW9uSXNTZWxlY3RlZCIsIlN0YWdlIiwiYmFja2dyb3VuZCIsIm5vRmlsbCIsIlRpbWVsaW5lIiwic3RhcnREZWx0YSIsImhpZGUiLCJjYWxjdWxhdGVDb2xXaWR0aCIsImR1cmF0aW9uIiwiZW5kWCIsImF4aXNZIiwiaSIsImNvbFdpZHRoIiwibmV3WCIsImRyYXdTdGFydE1pbnV0ZUxhYmVsIiwiZHJhd01pbnV0ZUxpbmUiLCJkcmF3TWludXRlTGFiZWwiLCJzaG93U2Vjb25kc0ludGVydmFsIiwiZHJhd01pZGRsZVNlY29uZExhYmVsIiwiZHJhd01pZGRsZVNlY29uZExpbmUiLCJzaG93U2Vjb25kcyIsImRyYXdTZWNvbmRMaW5lIiwibW91c2VYIiwiY2FudmFzIiwibW91c2VZIiwiY3Vyc29yIiwiSEFORCIsIkFSUk9XIiwicG1vdXNlWCIsInNlY29uZHNZIiwidG9TUyIsInJvdW5kIiwibWludXRlc1kiLCJ6b29tRmFjdG9yIiwiVmlkZW9UaW1lTWFya2VyIiwiY3VycmVudFgiLCJJbnNwZWN0b3JTdGFnZSIsInRyYW5zbGF0ZSIsInBvcCIsIkluc3BlY3RvclRpbWVsaW5lIiwiZHJhd1N0YXJ0TGFiZWwiLCJJbnNwZWN0b3JWaWRlb1RpbWVNYXJrZXIiLCJza2V0Y2giLCJzZXR1cCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRXaWR0aCIsImNyZWF0ZUNhbnZhcyIsIm1vdXNlTW92ZWQiLCJtb3VzZVByZXNzZWQiLCJpbnN0YW5jZSIsInBhcmVudCIsInN0YWdlIiwidmlkZW9UaW1lTWFya2VyIiwiY29sb3JNb2RlIiwiUkdCIiwiZnJhbWVSYXRlIiwibm9Mb29wIiwiZHJhd0FjdGlvbnMiLCJ2aWRlb01hcmtlciIsIm1vdXNlT3ZlckFjdGlvbiIsIm1vdXNlUHJlc3NlZEFjdGlvbiIsInN0b3AiLCJsb29wIiwiY29uZmlnQnV0dG9ucyIsInpvb21JbiIsInpvb21PdXQiLCJpbml0aWFsWm9vbUZhY3RvciIsIm1vdXNlT3ZlclRvdWNoIiwibW91c2VPdmVyIiwibW91c2VEcmFnZ2VkIiwiZHJhZyIsIm1vdXNlUHJlc3NlZFRvdWNoIiwicGxheWVyUmVhZHkiLCJyZWFkeSIsInNldENhbnZhcyIsInNldFRpbWVsaW5lIiwic2V0VG91Y2hNYW5hZ2VyIiwic2V0U3RhZ2UiLCJzZXRQbGF5ZXIiLCJzZXRWaWRlb01hcmtlciIsInNldFdpZHRoIiwic2V0SGVpZ2h0Iiwic2V0VGltZWxpbmVXaWR0aCIsInNldFRpbWVsaW5lSGlkZSIsInNldFRpbWVsaW5lSGVpZ2h0Iiwic2V0VGltZWxpbmVNb3VzZU92ZXIiLCJzZXRUaW1lbGluZVN0YXJ0VGltZSIsInNldFRpbWVsaW5lU3RhcnRZIiwic2V0VGltZWxpbmVBeGlzWSIsInNldFRpbWVsaW5lRW5kWSIsInNldFRpbWVsaW5lU3RhcnRYIiwic2V0VGltZWxpbmVFbmRYIiwic2V0VGltZWxpbmVNaW51dGVzWSIsInNldFRpbWVsaW5lU2Vjb25kc1kiLCJzZXRTaG93U2Vjb25kcyIsInNldFNob3dTZWNvbmRzSW50ZXJ2YWwiLCJzZXRab29tIiwiem9vbSIsInpvb21GYWN0b3JDaGFuZ2UiLCJzZXRTZWNvbmRXaWR0aCIsInNldENvbFdpZHRoIiwic2V0RHVyYXRpb24iLCJzZXRDdXJyZW50VGltZSIsInNldEluaXRpYWxpemVkIiwiaW5pdGlhbGl6ZWQiLCJzZXRUb3VjaGVzIiwic2V0U2VsZWN0ZWRUb3VjaCIsImFkZFRvdWNoIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJjbG9uZURlZXAiLCJyZW1vdmVUb3VjaCIsInNwbGljZSIsImdsb2JhbFRpbWVsaW5lIiwic2hvd0Vycm9yIiwidmFsaWRhdGlvbiIsImVycm9ycyIsImhhc093blByb3BlcnR5IiwiZm9yRWFjaCIsInZhbGlkYXRpb25FcnJvciIsInNlbGYiLCIkcm9vdCIsImVycm9yVG9hc3QiLCJnbG9iYWxUaW1lbGluZUFjdGlvbnMiLCJzZXRHbG9iYWxUaW1lbGluZSIsInNldEdsb2JhbFRpbWVsaW5lV2lkdGgiLCJzZXRHbG9iYWxUaW1lbGluZUhlaWdodCIsInNldEdsb2JhbFRpbWVsaW5lQ2FudmFzIiwic2V0R2xvYmFsVGltZWxpbmVWaWRlb01hcmtlciIsInNldEdsb2JhbFRpbWVsaW5lQ2FudmFzV2lkdGgiLCJzZXRHbG9iYWxUaW1lbGluZUNhbnZhc0hlaWdodCIsInNldEdsb2JhbFRpbWVsaW5lU3RhZ2UiLCJzZXRHbG9iYWxUaW1lbGluZVRpbWVsaW5lIiwic2V0R2xvYmFsVGltZWxpbmVTdGFydFRpbWUiLCJzZXRHbG9iYWxUaW1lbGluZVN0YXJ0WSIsInNldEdsb2JhbFRpbWVsaW5lQXhpc1kiLCJzZXRHbG9iYWxUaW1lbGluZUVuZFkiLCJzZXRHbG9iYWxUaW1lbGluZVN0YXJ0WCIsInNldEdsb2JhbFRpbWVsaW5lRW5kWCIsInNldEdsb2JhbFRpbWVsaW5lTWludXRlc1kiLCJzZXRHbG9iYWxUaW1lbGluZVNlY29uZHNZIiwic2V0R2xvYmFsVGltZWxpbmVTZWNvbmRXaWR0aCIsInNldEdsb2JhbFRpbWVsaW5lQ29sV2lkdGgiLCJzZXRHbG9iYWxUaW1lbGluZVpvb20iLCJzZXRHbG9iYWxUaW1lbGluZUluaXRpYWxpemVkIiwiaW5zcGVjdG9yQWN0aW9ucyIsInNldEluc3BlY3RvciIsInNldEluc3BlY3RvcldpZHRoIiwic2V0SW5zcGVjdG9ySGVpZ2h0Iiwic2V0SW5zcGVjdG9yQ2FudmFzIiwic2V0SW5zcGVjdG9yVmlkZW9NYXJrZXIiLCJzZXRJbnNwZWN0b3JDYW52YXNXaWR0aCIsInNldEluc3BlY3RvckNhbnZhc0hlaWdodCIsInNldEluc3BlY3RvclN0YWdlIiwic2V0SW5zcGVjdG9yVGltZWxpbmUiLCJzZXRJbnNwZWN0b3JTdGFydFRpbWUiLCJzZXRJbnNwZWN0b3JTdGFydFkiLCJzZXRJbnNwZWN0b3JBeGlzWSIsInNldEluc3BlY3RvckVuZFkiLCJzZXRJbnNwZWN0b3JTdGFydFgiLCJzZXRJbnNwZWN0b3JFbmRYIiwic2V0SW5zcGVjdG9yTWludXRlc1kiLCJzZXRJbnNwZWN0b3JTZWNvbmRzWSIsInNldEluc3BlY3RvclNlY29uZFdpZHRoIiwic2V0SW5zcGVjdG9yQ29sV2lkdGgiLCJzZXRTZWxlY3RlZEFjdGlvbiIsInJlY29yZGluZyIsImFkZEFjdGlvbiIsImFkZExlZnRUYWciLCJ0YWciLCJhZGRSaWdodFRhZyIsImVkaXRBY3Rpb24iLCJyZW1vdmVBY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7Ozs7O2tCQUlBO3NCQUVBO0FBSEE7O2tCQUtBO3lDQUNBO3VCQUNBO0FBR0E7QUFOQTtBQUxBO0FBREEsRTs7Ozs7OztBQ3ZCQTtBQUNBOzs7QUFHQTtBQUNBLDBDQUEyQyxpQkFBaUIsd0JBQXdCLEdBQUcsc0JBQXNCLHVCQUF1QixHQUFHOztBQUV2STs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDL0JBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDckJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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R0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM5SUEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNsQkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUMzQkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxrREFBa0QsYUFBYSxZQUFZLGdCQUFnQjtBQUMzRixLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUMxREEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsK0NBQStDLGFBQWEsWUFBWSxnQkFBZ0I7QUFDeEYsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNyT0EsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztB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O0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDdlVBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzNFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVB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QTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDNURBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJqcy8wLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9lZGl0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTI0Nzc5YjU4IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2VkaXQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZWRpdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBlZGl0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yNDc3OWI1OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTI0Nzc5YjU4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9lZGl0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICAgIHt7dGl0bGV9fVxuICAgICAgICA8L2gxPlxuICAgICAgICA8b2wgY2xhc3M9XCJicmVhZGNydW1iXCI+XG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiYnJlYWRjcnVtYi5ocmVmXCIgYWN0aXZlLWNsYXNzPVwiYWN0aXZlXCIgdGFnPVwibGlcIiB2LWZvcj1cImJyZWFkY3J1bWIgaW4gYnJlYWRjcnVtYnNcIj5cbiAgICAgICAgICAgICAgICB7eyR0KGJyZWFkY3J1bWIudGl0bGUpfX1cbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIDwvb2w+XG4gICAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHJlbD1cInN0eWxlc2hlZXQvc2Nzc1wiPlxuICAgIC5hZG1pbi1oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDk3cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBicmVhZGNydW1iczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcGFnZUhlYWRlci52dWU/NTM3OWY1Y2IiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5hZG1pbi1oZWFkZXIge1xcbiAgaGVpZ2h0OiA5N3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmFkbWluLWhlYWRlciAucm93IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtN2ZjZDA5NTYhc2Fzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcGFnZUhlYWRlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2ZjZDA5NTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03ZmNkMDk1NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtaGVhZGVyXCJcbiAgfSwgW19jKCdoMScsIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS50aXRsZSkgKyBcIlxcbiAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWJcIlxuICB9LCBfdm0uX2woKF92bS5icmVhZGNydW1icyksIGZ1bmN0aW9uKGJyZWFkY3J1bWIpIHtcbiAgICByZXR1cm4gX2MoJ3JvdXRlci1saW5rJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0b1wiOiBicmVhZGNydW1iLmhyZWYsXG4gICAgICAgIFwiYWN0aXZlLWNsYXNzXCI6IFwiYWN0aXZlXCIsXG4gICAgICAgIFwidGFnXCI6IFwibGlcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoYnJlYWRjcnVtYi50aXRsZSkpICsgXCJcXG4gICAgICAgIFwiKV0pXG4gIH0pKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTdmY2QwOTU2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiZTlmZWMxYzJcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIFwiZW5cIjoge1xuICAgICAgICBcInNjb3V0aW5nc1wiOiB7XG4gICAgICAgICAgICBcImNyZWF0ZWRfc3VjY2Vzc2Z1bGx5XCI6IFwiVGhlIFNjb3V0aW5nIHdhcyBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIlRoZSBTY291dGluZyB3YXMgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgICAgIFwiZGVsZXRlZF9zdWNjZXNmdWxseVwiOiBcIlRoZSBTY291dGluZyB3YXMgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgICAgIFwibm90X2ZvdW5kXCI6IFwiVGhlIFNjb3V0aW5nIGRvZXNuJ3QgZXhpc3RcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5hbWVcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgXCJjaGFtcGlvbnNoaXBcIjogXCJDaGFtcGlvbnNoaXBcIixcbiAgICAgICAgICAgIFwiZXZlbnRcIjogXCJFdmVudFwiLFxuICAgICAgICAgICAgXCJsZWZ0X2F0aGxldGVcIjogXCJMZWZ0IEF0aGxldGVcIixcbiAgICAgICAgICAgIFwicmlnaHRfYXRobGV0ZVwiOiBcIlJpZ2h0IEF0aGxldGVcIixcbiAgICAgICAgICAgIFwidmlkZW9fc3JjXCI6IFwiVmlkZW8gU291cmNlXCIsXG4gICAgICAgICAgICBcImFjdGlvbnNcIjogXCJBY3Rpb25zXCIsXG4gICAgICAgICAgICBcInNlbGVjdF9vcHRpb25cIjogXCJTZWxlY3QgYW4gb3B0aW9uXCIsXG4gICAgICAgICAgICBcInVwZGF0ZVwiOiBcIlVwZGF0ZVwiLFxuICAgICAgICAgICAgXCJuZXdcIjogXCJOZXcgU2NvdXRpbmdcIixcbiAgICAgICAgICAgIFwiZGVsZXRlX21lc3NhZ2VcIjogXCJBcmUgeW91IHN1cmU/IHRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmVcIixcbiAgICAgICAgICAgIFwiZGVsZXRlX3Njb3V0aW5nXCI6IFwiRGVsZXRlIFNjb3V0aW5nXCIsXG4gICAgICAgICAgICBcInNjb3V0aW5nX2luZm9cIjogXCJTY291dGluZyBJbmZvcm1hdGlvblwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVfc2NvdXRpbmdcIjogXCJVcGRhdGUgU2NvdXRpbmdcIixcbiAgICAgICAgICAgIFwibWFrZVwiOiBcIk1ha2UgU2NvdXRpbmdcIixcbiAgICAgICAgICAgIFwic3RhcnRfdG91Y2hcIjogXCJTdGFydCBUb3VjaFwiLFxuICAgICAgICAgICAgXCJlbmRfdG91Y2hcIjogXCJFbmQgVG91Y2hcIixcbiAgICAgICAgICAgIFwidG9vZ2xlX3RpbWVsaW5lXCI6IFwiVG9vZ2xlIFRpbWVsaW5lXCIsXG4gICAgICAgICAgICBcInRvb2dsZV9pbnNwZWN0b3JcIjogXCJUb29nbGUgSW5zcGVjdG9yXCIsXG4gICAgICAgICAgICBcImluc3BlY3RvclwiOiBcIkluc3BlY3RvclwiLFxuICAgICAgICAgICAgXCJ0aW1lbGluZVwiOiBcIlRpbWVsaW5lXCIsXG4gICAgICAgICAgICBcImdsb2JhbHRpbWVsaW5lXCI6IFwiR2xvYmFsIFRpbWVsaW5lXCIsXG4gICAgICAgICAgICBcImVuZF9hY3Rpb25cIjogXCJFbmQgQWNjacOzblwiLFxuICAgICAgICAgICAgXCJwYXVzZVwiOiBcIlBhdXNlXCIsXG4gICAgICAgICAgICBcInBsYXlcIjogXCJQbGF5XCIsXG4gICAgICAgICAgICBcImxlZnRfYWN0aW9uc1wiOiBcIkxlZnQgQXRobGV0ZSBBY3Rpb25zXCIsXG4gICAgICAgICAgICBcInJpZ2h0X2FjdGlvbnNcIjogXCJSaWdodCBBdGhsZXRlIEFjdGlvbnNcIixcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUaXRsZVwiLFxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIkNvbG9yXCIsXG4gICAgICAgICAgICBcInN0YXJ0XCI6IFwiU3RhcnQgKHNlZylcIixcbiAgICAgICAgICAgIFwiZW5kXCI6IFwiRW5kIChzZWcpXCIsXG4gICAgICAgICAgICBcInNhdmVcIjogXCJTYXZlIENoYW5nZXNcIixcbiAgICAgICAgICAgIFwiY2FuY2VsXCI6IFwiQ2FuY2VsIENoYW5nZXNcIixcbiAgICAgICAgICAgIFwidG91Y2hlc19jYW50X292ZXJsYXBcIjogXCJUb3VjaGVzIGNhbnQgb3ZlcmxhcFwiLFxuICAgICAgICAgICAgXCJ0b3VjaF9vdmVybGFwX3dpdGhcIjogXCJUaGUgdG91Y2ggdGhhdCB5b3UgYXJlIHRyeWluZyB0byBhZGQgb3ZlcmxhcCB3aXRoXCIsXG4gICAgICAgICAgICBcInZhbGlkYXRpb25fZXJyb3JcIjogXCJFVmFsaWRhdGlvbiBFcnJvclwiLFxuICAgICAgICAgICAgXCJ2YWxpZGF0aW9uX2VuZF9ncmVhdGVyXCI6IFwiVGhlIGVuZCBvZiB0aGUgdG91Y2ggbXVzdCBiZSBncmVhdGVyIHRoYW4gdGhlIHN0YXJ0XCIsXG4gICAgICAgICAgICBcInRvdWNoX292ZXJsYXBfbXNnXCI6IFwie3RpdGxlfSB0aGF0IHN0YXJ0cyBvbiB7c3RhcnR9IGFuZCBlbmRzIG9uIHtlbmR9XCIsXG4gICAgICAgICAgICBcInRvdWNoZXNcIjogXCJUb3VjaGVzXCIsXG4gICAgICAgICAgICBcInN0YXJ0X2F0XCI6IFwiU3RhcnQgYXQge3N0YXJ0fVwiLFxuICAgICAgICAgICAgXCJlbmRfYXRcIjogXCJFbmQgYXQge2VuZH1cIixcbiAgICAgICAgICAgIFwibm9fdG91Y2hlc1wiOiBcIlRoZXJlIGFyZSBubyByZWdpc3RlcmVkIHRvY3VoZXNcIixcbiAgICAgICAgICAgIFwic2VsZWN0XCI6IFwiU2VsZWN0IFNjb3V0aW5nc1wiLFxuICAgICAgICAgICAgXCJjcmVhdGVcIjogXCJDcmVhdGUgU2NvdXRpbmdcIixcbiAgICAgICAgICAgIFwic2NvdXRpbmdzXCI6IFwiU2NvdXRpbmdzXCIsXG4gICAgICAgICAgICBcIm1ha2luZ19yZXBvcnRcIjogXCJQcm9jZXNzaW5nIFJlcG9ydCBwbGVhc2Ugd2FpdFwiLFxuICAgICAgICAgICAgXCJyZXBvcnRcIjogXCJTZWUgUmVwb3J0XCIsXG4gICAgICAgICAgICBcImVycm9yX3JlcG9ydFwiOiBcIkFuIGVycm9yIG9jdXJyZWQgd2hpbGUgY3JlYXRpbmcgdGhlIHJlcG9ydFwiLFxuICAgICAgICAgICAgXCJsaXN0XCI6IFwiRGF0YSBMaXN0XCIsXG4gICAgICAgICAgICBcInJlc3VsdHNcIjogXCJSZXN1bHRzXCIsXG4gICAgICAgICAgICBcImFwcF9tb2JpbGVcIjogXCJNb2JpbGUgQXBwXCIsXG4gICAgICAgICAgICBcIm90aGVyX3NvdXJjZXNcIjogXCJPdGhlciBTb3VyY2VzXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJlc1wiOiB7XG4gICAgICAgIFwic2NvdXRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJFbCBzY291dGluZyBmdWUgY3JlYWRvIHNhdGlzZmFjdG9yaWFtZW50ZVwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIkVsIHNjb3V0aW5nIGZ1ZSBhY3R1YWxpemFkbyBzYXRpc2ZhY3RvcmlhbWVudGVcIixcbiAgICAgICAgICAgIFwiZGVsZXRlZF9zdWNjZXNmdWxseVwiOiBcIkVsIHNjb3V0aW5nIGZ1ZSBlbGltaW5hZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXG4gICAgICAgICAgICBcIm5vdF9mb3VuZFwiOiBcIkVsIHNjb3V0aW5nIG5vIGV4aXN0ZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTm9tYnJlXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcGNpw7NuXCIsXG4gICAgICAgICAgICBcImNoYW1waW9uc2hpcFwiOiBcIkNhbXBlb25hdG9cIixcbiAgICAgICAgICAgIFwiZXZlbnRcIjogXCJFdmVudG9cIixcbiAgICAgICAgICAgIFwibGVmdF9hdGhsZXRlXCI6IFwiQXRsZXRhIGRlIGxhIGl6cXVpZXJkYVwiLFxuICAgICAgICAgICAgXCJyaWdodF9hdGhsZXRlXCI6IFwiQXRsZXRhIGRlIGxhIGRlcmVjaGFcIixcbiAgICAgICAgICAgIFwidmlkZW9fc3JjXCI6IFwiRnVlbnRlIGRlbCB2aWRlb1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25zXCI6IFwiQWNjaW9uZXNcIixcbiAgICAgICAgICAgIFwic2VsZWN0X29wdGlvblwiOiBcIlNlbGVjY2lvbmEgdW5hIG9wY2nDs25cIixcbiAgICAgICAgICAgIFwidXBkYXRlXCI6IFwiQWN0dWFsaXphclwiLFxuICAgICAgICAgICAgXCJuZXdcIjogXCJOdWV2byBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJkZWxldGVfbWVzc2FnZVwiOiBcIsK/RXN0YXMgU2VndXJvPyBlc3RhIGFjY2nDs24gbm8gc2UgcHVlZGUgZGVzaGFjZXJcIixcbiAgICAgICAgICAgIFwiZGVsZXRlX3Njb3V0aW5nXCI6IFwiRWxpbWluYXIgU2NvdXRpbmdcIixcbiAgICAgICAgICAgIFwic2NvdXRpbmdfaW5mb1wiOiBcIkluZm9ybWFjacOzbiBkZWwgU2NvdXRpbmdcIixcbiAgICAgICAgICAgIFwidXBkYXRlX3Njb3V0aW5nXCI6IFwiQWN0dWFsaXphciBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJtYWtlXCI6IFwiSGFjZXIgU2NvdXRpbmdcIixcbiAgICAgICAgICAgIFwic3RhcnRfdG91Y2hcIjogXCJJbmljaWFyIFRvcXVlXCIsXG4gICAgICAgICAgICBcImVuZF90b3VjaFwiOiBcIkZpbmFsaXphciBUb3F1ZVwiLFxuICAgICAgICAgICAgXCJ0b29nbGVfdGltZWxpbmVcIjogXCJUb29nbGUgVGltZWxpbmVcIixcbiAgICAgICAgICAgIFwidG9vZ2xlX2luc3BlY3RvclwiOiBcIlRvb2dsZSBJbnNwZWN0b3JcIixcbiAgICAgICAgICAgIFwiaW5zcGVjdG9yXCI6IFwiSW5zcGVjdG9yXCIsXG4gICAgICAgICAgICBcInRpbWVsaW5lXCI6IFwiVGltZWxpbmVcIixcbiAgICAgICAgICAgIFwiZW5kX2FjdGlvblwiOiBcIkZpbmFsaXphciBBY2Npw7NuXCIsXG4gICAgICAgICAgICBcInBhdXNlXCI6IFwiUGF1c2FyXCIsXG4gICAgICAgICAgICBcInBsYXlcIjogXCJSZXByb2R1Y2lyXCIsXG4gICAgICAgICAgICBcImxlZnRfYWN0aW9uc1wiOiBcIkFjY2lvbmVzIGRlbCBBdGxldGEgZGUgbGEgaXpxdWllcmRhXCIsXG4gICAgICAgICAgICBcInJpZ2h0X2FjdGlvbnNcIjogXCJBY2Npb25lcyBkZWwgQXRsZXRhIGRlIGxhIGRlcmVjaGFcIixcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUaXR1bG9cIixcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCJDb2xvclwiLFxuICAgICAgICAgICAgXCJzdGFydFwiOiBcIkluaWNpbyAoc2VnKVwiLFxuICAgICAgICAgICAgXCJlbmRcIjogXCJGaW4gKHNlZylcIixcbiAgICAgICAgICAgIFwic2F2ZVwiOiBcIkd1YXJkYXIgQ2FtYmlvc1wiLFxuICAgICAgICAgICAgXCJjYW5jZWxcIjogXCJDYW5jZWxhciBDYW1iaW9zXCIsXG4gICAgICAgICAgICBcInRvdWNoZXNfY2FudF9vdmVybGFwXCI6IFwiTG9zIHRvcXVlcyBubyBwdWVkZW4gc29icmVwb25lcnNlXCIsXG4gICAgICAgICAgICBcInRvdWNoX292ZXJsYXBfd2l0aFwiOiBcIkVsIHRvcXVlIHF1ZSB0cmF0YXMgZGUgYcOxYWRpciBzZSBzdXBlcnBvbmUgY29uXCIsXG4gICAgICAgICAgICBcInZhbGlkYXRpb25fZXJyb3JcIjogXCJFcnJvciBkZSBWYWxpZGFjacOzblwiLFxuICAgICAgICAgICAgXCJ2YWxpZGF0aW9uX2VuZF9ncmVhdGVyXCI6IFwiRWwgZmluYWwgZGVsIHRvcXVlIGRlYmUgc2VyIG1heW9yIGFsIGluaWNpb1wiLFxuICAgICAgICAgICAgXCJ0b3VjaF9vdmVybGFwX21zZ1wiOiBcInt0aXRsZX0gcXVlIGVtcGllemEgZW4ge3N0YXJ0fSB5IHRlcm1pbmEgZW4ge2VuZH1cIixcbiAgICAgICAgICAgIFwidG91Y2hlc1wiOiBcIlRvcXVlc1wiLFxuICAgICAgICAgICAgXCJzdGFydF9hdFwiOiBcIkluaWNpYSBlbiB7c3RhcnR9XCIsXG4gICAgICAgICAgICBcImVuZF9hdFwiOiBcIkZpbmFsaXphIGVuIHtlbmR9XCIsXG4gICAgICAgICAgICBcIm5vX3RvdWNoZXNcIjogXCJObyBoYXkgdG9xdWVzIHJlZ2lzdHJhZG9zXCIsXG4gICAgICAgICAgICBcInNlbGVjdFwiOiBcIlNlbGVjY2lvbmFyIFNjb3V0aW5nc1wiLFxuICAgICAgICAgICAgXCJjcmVhdGVcIjogXCJDcmVhciBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJzY291dGluZ3NcIjogXCJTY291dGluZ3NcIixcbiAgICAgICAgICAgIFwibWFraW5nX3JlcG9ydFwiOiBcIlByb2Nlc2FuZG8gUmVwb3J0ZSBwb3IgZmF2b3IgZXNwZXJhXCIsXG4gICAgICAgICAgICBcInJlcG9ydFwiOiBcIlZlciBSZXBvcnRlXCIsXG4gICAgICAgICAgICBcImVycm9yX3JlcG9ydFwiOiBcIk9jdXJyaW8gdW4gZXJyb3IgaW5lc3BlcmFkbyBhbCBwcm9jZXNhciBlbCByZXBvcnRlXCIsXG4gICAgICAgICAgICBcImxpc3RcIjogXCJMaXN0YSBkZSBEYXRvc1wiLFxuICAgICAgICAgICAgXCJyZXN1bHRzXCI6IFwiUmVzdWx0YWRvc1wiLFxuICAgICAgICAgICAgXCJhcHBfbW9iaWxlXCI6IFwiQXBwIE3Ds3ZpbFwiLFxuICAgICAgICAgICAgXCJvdGhlcl9zb3VyY2VzXCI6IFwiT3RyYXMgRnVlbnRlc1wiXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xhbmcvYWRtaW4vc2NvdXRpbmdzL3Njb3V0aW5ncy5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVDb252ZXJ0ZXIge1xuICAgIHN0YXRpYyB0b0hITU1TUyhzZWNzKSB7XG4gICAgICAgIHZhciBzZWNfbnVtID0gcGFyc2VJbnQoc2VjcywgMTApOyAvLyBkb24ndCBmb3JnZXQgdGhlIHNlY29uZCBwYXJhbVxuICAgICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKHNlY19udW0gLyAzNjAwKTtcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChzZWNfbnVtIC0gKGhvdXJzICogMzYwMCkpIC8gNjApO1xuICAgICAgICB2YXIgc2Vjb25kcyA9IHNlY19udW0gLSAoaG91cnMgKiAzNjAwKSAtIChtaW51dGVzICogNjApO1xuXG4gICAgICAgIGlmIChob3VycyA8IDEwKSB7XG4gICAgICAgICAgICBob3VycyA9IFwiMFwiICsgaG91cnM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pbnV0ZXMgPCAxMCkge1xuICAgICAgICAgICAgbWludXRlcyA9IFwiMFwiICsgbWludXRlcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgICAgICAgICBzZWNvbmRzID0gXCIwXCIgKyBzZWNvbmRzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBob3VycyArICc6JyArIG1pbnV0ZXMgKyAnOicgKyBzZWNvbmRzO1xuICAgIH1cblxuICAgIHN0YXRpYyB0b1NTKHNlY3MpIHtcbiAgICAgICAgdmFyIHNlY19udW0gPSBwYXJzZUludChzZWNzLCAxMCk7IC8vIGRvbid0IGZvcmdldCB0aGUgc2Vjb25kIHBhcmFtXG4gICAgICAgIHZhciBob3VycyA9IE1hdGguZmxvb3Ioc2VjX251bSAvIDM2MDApO1xuICAgICAgICB2YXIgbWludXRlcyA9IE1hdGguZmxvb3IoKHNlY19udW0gLSAoaG91cnMgKiAzNjAwKSkgLyA2MCk7XG4gICAgICAgIHZhciBzZWNvbmRzID0gc2VjX251bSAtIChob3VycyAqIDM2MDApIC0gKG1pbnV0ZXMgKiA2MCk7XG5cbiAgICAgICAgaWYgKHNlY29uZHMgPCAxMCkge1xuICAgICAgICAgICAgc2Vjb25kcyA9IFwiMFwiICsgc2Vjb25kcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2Vjb25kcztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVGltZUNvbnZlcnRlci5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc2hvdyhpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3Njb3V0aW5ncy8nICsgaWQgKyAnP2luY2x1ZGU9Y2hhbXBpb25zaGlwLnNwb3J0LGV2ZW50LGxlZnRBdGhsZXRlLHJpZ2h0QXRobGV0ZSx0b3VjaGVzLmFjdGlvbnMubGVmdFRhZ3MsdG91Y2hlcy5hY3Rpb25zLnJpZ2h0VGFncycpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG4gICAgY3JlYXRlKHNjb3V0aW5nLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5wb3N0KCcvYXBpL3Njb3V0aW5ncycsIHNjb3V0aW5nKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcbiAgICB9LFxuICAgIHVwZGF0ZShpZCwgc2NvdXRpbmcsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnB1dCgnL2FwaS9zY291dGluZ3MvJyArIGlkLCBzY291dGluZywge2VtdWxhdGVIVFRQOiB0cnVlfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yLmJvZHkpKTtcbiAgICB9LFxuICAgIHJlbW92ZShpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZGVsZXRlKCcvYXBpL3Njb3V0aW5ncy8nICsgaWQpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvci5ib2R5KSk7XG4gICAgfSxcbiAgICByZXBvcnQoaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9zY291dGluZ3MvJyArIGlkICsgJy9yZXBvcnQnKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcbiAgICB9LFxuICAgIGxhdGVzdChzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvc2NvdXRpbmdzL2xhdGVzdCcpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvc2NvdXRpbmdzL3Njb3V0aW5nU2VydmljZS5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdlbmVyYXRlVVVJRCgpIHtcbiAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuICAgICAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQgLyAxNik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCkpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3V1aWQuanMiLCJpbXBvcnQgVXVpZFV0aWwgZnJvbSAnLi4vdXRpbHMvVXVpZFV0aWwnXG5pbXBvcnQgU2Vjb25kc1V0aWwgZnJvbSAnLi4vdXRpbHMvU2Vjb25kc1V0aWwnXG5pbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi91dGlscy9UaW1lQ29udmVydGVyJ1xuaW1wb3J0IHtnZXRTdGF0ZSwgZGlzcGF0Y2h9IGZyb20gJ21vY2tzdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3Ioc3RhcnQsIGVuZCwgY29sb3IpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGdldFN0YXRlKCcqJyk7XG4gICAgICAgIHZhciB1dWlkID0gbmV3IFV1aWRVdGlsKCk7XG4gICAgICAgIHRoaXMuaWQgPSB1dWlkLmdlbmVyYXRlVVVJRCgpO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMubW91c2VJc092ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMueCA9IG51bGw7XG4gICAgICAgIHRoaXMueSA9IG51bGw7XG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMubGltaXRUZXh0WSA9IDMwICsgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WTtcbiAgICAgICAgdGhpcy5zZWNvbmRzVXRpbCA9IG5ldyBTZWNvbmRzVXRpbCgpO1xuICAgICAgICB0aGlzLmNhbnZhQ29udGFpbmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5sZWZ0VGFncyA9IFtdXG4gICAgICAgIHRoaXMucmlnaHRUYWdzID0gW11cbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLnggPSB0aGlzLmNhbGN1bGF0ZVgoKTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy55ID8gdGhpcy55IDogdGhpcy5jYWxjdWxhdGVZKCk7XG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNhbGN1bGF0ZVdpZHRoKCk7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jYWxjdWxhdGVIZWlnaHQoKTtcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZEFjdGlvbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkQWN0aW9uLmlkID09IHRoaXMuaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5jb2xvci5yZ2JhLmFscGhhID0gMTAwO1xuICAgICAgICAgICAgaW5zcGVjdG9yLm5vU3Ryb2tlKCk7XG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dFNpemUoMTIpO1xuICAgICAgICAgICAgaW5zcGVjdG9yLnRleHRTdHlsZShpbnNwZWN0b3IuTk9STUFMKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5maWxsKHRoaXMuY29sb3IucmdiYS5yLCB0aGlzLmNvbG9yLnJnYmEuZywgdGhpcy5jb2xvci5yZ2JhLmIsIDEwMCk7XG4gICAgICAgICAgICBpbnNwZWN0b3IucmVjdCh0aGlzLnggKyB0aGlzLndpZHRoIC0gMzAsIHRoaXMubGltaXRUZXh0WSwgNjAsIDE1KTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5yZWN0KHRoaXMueCAtIDMwLCB0aGlzLmxpbWl0VGV4dFksIDYwLCAxNSk7XG4gICAgICAgICAgICBpbnNwZWN0b3IuZmlsbCgyNTUsIDI1NSwgMjU1LCAxMDApO1xuICAgICAgICAgICAgaW5zcGVjdG9yLnRleHRTdHlsZShpbnNwZWN0b3IuQk9MRCk7XG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMuc3RhcnQpLCB0aGlzLnggLSAzMCwgdGhpcy5saW1pdFRleHRZLCA2MCwgMjApO1xuICAgICAgICAgICAgaW5zcGVjdG9yLnRleHQoVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLmVuZCksIHRoaXMueCAtIDMwICsgdGhpcy53aWR0aCwgdGhpcy5saW1pdFRleHRZLCA2MCwgMjApO1xuICAgICAgICAgICAgaW5zcGVjdG9yLnRleHRBbGlnbihpbnNwZWN0b3IuQ0VOVEVSKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2UoaW5zcGVjdG9yLmNvbG9yKHRoaXMuY29sb3IucmdiYS5yLCB0aGlzLmNvbG9yLnJnYmEuZywgdGhpcy5jb2xvci5yZ2JhLmIpKVxuICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgyKVxuICAgICAgICAgICAgaW5zcGVjdG9yLmxpbmUodGhpcy54LCB0aGlzLmxpbWl0VGV4dFkgKyAyMCwgdGhpcy54LCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWSk7XG4gICAgICAgICAgICBpbnNwZWN0b3IubGluZSh0aGlzLnggKyB0aGlzLndpZHRoLCB0aGlzLmxpbWl0VGV4dFkgKyAyMCwgdGhpcy54ICsgdGhpcy53aWR0aCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZW5kIC0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0VGltZSA+IDApIHtcbiAgICAgICAgICAgIGluc3BlY3Rvci5maWxsKDI1NSk7XG4gICAgICAgICAgICBpbnNwZWN0b3IuZmlsbCh0aGlzLmNvbG9yLnJnYmEuciwgdGhpcy5jb2xvci5yZ2JhLmcsIHRoaXMuY29sb3IucmdiYS5iLCB0aGlzLmNvbG9yLnJnYmEuYWxwaGEpOyAgLy8gVXNlIGNvbG9yIHZhcmlhYmxlICdjJyBhcyBmaWxsIGNvbG9yXG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDEpO1xuICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSg1MSk7XG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKHRoaXMuY29sb3IucmdiYS5yICogMC43NSwgdGhpcy5jb2xvci5yZ2JhLmcgKiAwLjc1LCB0aGlzLmNvbG9yLnJnYmEuYiAqIDAuNzUpO1xuICAgICAgICAgICAgaW5zcGVjdG9yLnJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgIC8vIERyYXcgcmVjdGFuZ2xlXG4gICAgICAgICAgICBpbnNwZWN0b3IucmVjdCh0aGlzLngsIHRoaXMueSArIDYwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7ICAvLyBEcmF3IHJlY3RhbmdsZVxuXG4gICAgICAgICAgICBpbnNwZWN0b3IuZmlsbCgwLCAwLCAwLCAxMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWRpdFByZXNzZWQoYWN0aW9uLCBldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRBY3Rpb24nLCBhY3Rpb24pO1xuICAgICAgICB2bS5lZGl0VG91Y2goZXZlbnQsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgaXNNb3VzZU92ZXIoeCwgeSkge1xuICAgICAgICBpZiAoeCA+PSB0aGlzLnggJiYgeCA8PSAodGhpcy54ICsgdGhpcy53aWR0aCkgJiYgeSA+PSB0aGlzLnkgJiYgeSA8PSAodGhpcy55ICsgdGhpcy5oZWlnaHQgKiAyKSkge1xuICAgICAgICAgICAgdGhpcy5jb2xvci5yZ2JhLmFscGhhID0gMTAwO1xuICAgICAgICAgICAgdGhpcy5tb3VzZUlzT3ZlciA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9yLnJnYmEuYWxwaGEgPSA1MDtcbiAgICAgICAgICAgIHRoaXMubW91c2VJc092ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZUlzT3ZlcjtcbiAgICB9XG5cbiAgICBpc01vdXNlUHJlc3NzZWRPdmVyKHgsIHkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5yZWNvcmRpbmdBY3Rpb24gJiYgIXRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnJlY29yZGluZ1RvdWNoKSB7XG4gICAgICAgICAgICBpZiAoeSA+PSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZKSB7XG4gICAgICAgICAgICAgICAgaWYgKHggPj0gdGhpcy54ICYmIHggPD0gKHRoaXMueCArIHRoaXMud2lkdGgpICYmIHkgPj0gdGhpcy55ICYmIHkgPD0gKHRoaXMueSArIHRoaXMuaGVpZ2h0ICogMikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdm0uJHJlZnMucGxheWVyLmFwaSgpLmFiTG9vcFBsdWdpbi5zZXRTdGFydCh0aGlzLnN0YXJ0KS5zZXRFbmQodGhpcy5lbmQpLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB2bS4kcmVmcy5wbGF5ZXIuYXBpKCkuYWJMb29wUGx1Z2luLmdvVG9TdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRBY3Rpb24nLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY2FsY3VsYXRlWCgpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gKHRoaXMuc3RhcnQgLSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRUaW1lKSAqIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRXaWR0aDtcbiAgICAgICAgcmV0dXJuIHN0YXJ0ICsgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WDtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVZKCkge1xuICAgICAgICByZXR1cm4gNjEgKyB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVdpZHRoKCkge1xuICAgICAgICB2YXIgc3RhcnQgPSAodGhpcy5zdGFydCAtIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFRpbWUpICogdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuZW5kIC0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0VGltZSkgKiB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICh0aGlzLmVuZCAtIHRoaXMuc3RhcnQpICogdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZUhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIDYwO1xuICAgIH1cbn1cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdG91Y2hlcy9BY3Rpb24uanMiLCIvLyBkZWZpbmUgYSBtaXhpbiBvYmplY3RcbmltcG9ydCB7Z2V0U3RhdGV9IGZyb20gJ21vY2tzdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0ICB7XG4gICAgbWV0aG9kczoge1xuICAgICAgICBjaGVja0NvbGxpZGUodG91Y2gpe1xuICAgICAgICAgICAgdmFyIHRvdWNoZXMgPSBfLnJlamVjdChnZXRTdGF0ZSgndG91Y2hNYW5hZ2VyJykudG91Y2hlcywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG91Y2guaWQgPT0gby5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdG91Y2hlcy5wdXNoKHRvdWNoKTtcbiAgICAgICAgICAgIHZhciBvdmVybGFwID0gdGhpcy5vdmVybGFwKHRvdWNoZXMpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2xsaWRlOiBvdmVybGFwLm92ZXJsYXAsXG4gICAgICAgICAgICAgICAgY29sbGlkZVRvdWNoZXM6IG92ZXJsYXAucmFuZ2VzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrQ29sbGlkZUFjdGlvbnMoYWN0aW9uKXtcbiAgICAgICAgICAgIGlmIChnZXRTdGF0ZSgndG91Y2hNYW5hZ2VyJykuc2VsZWN0ZWRUb3VjaCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZFRvdWNoID0gZ2V0U3RhdGUoJ3RvdWNoTWFuYWdlcicpLnNlbGVjdGVkVG91Y2g7XG4gICAgICAgICAgICAgICAgdmFyIG92ZXJsYXAgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3Rpb25zID0gXy5yZWplY3Qoc2VsZWN0ZWRUb3VjaC5hY3Rpb25zLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5pZCA9PSBvLmlkO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXAgPSB0aGlzLm92ZXJsYXAoYWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxhcCA9IHtvdmVybGFwOiBmYWxzZSwgcmFuZ2VzOiBbXX1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG92ZXJsYXAgPSB7b3ZlcmxhcDogZmFsc2UsIHJhbmdlczogW119XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29sbGlkZTogb3ZlcmxhcC5vdmVybGFwLFxuICAgICAgICAgICAgICAgIGNvbGxpZGVBY3Rpb25zOiBvdmVybGFwLnJhbmdlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvdmVybGFwKHRvdWNoZXMpe1xuICAgICAgICAgICAgdmFyIHNvcnRlZFJhbmdlcyA9IHRvdWNoZXMuc29ydCgocHJldmlvdXMsIGN1cnJlbnQpID0+IHtcblxuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c1RpbWUgPSBwYXJzZUludChwcmV2aW91cy5zdGFydCk7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gcGFyc2VJbnQoY3VycmVudC5zdGFydCk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJldmlvdXMgaXMgZWFybGllciB0aGFuIHRoZSBjdXJyZW50XG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzVGltZSA8IGN1cnJlbnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKiBpZiB0aGUgcHJldmlvdXMgdGltZSBpcyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCB0aW1lXG4gICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1RpbWUgPT09IGN1cnJlbnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICB9Ki9cblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwcmV2aW91cyB0aW1lIGlzIGxhdGVyIHRoYW4gdGhlIGN1cnJlbnQgdGltZVxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHJldHVybiB0aGUgZmluYWwgcmVzdWx0c1xuICAgICAgICAgICAgcmV0dXJuIHNvcnRlZFJhbmdlcy5yZWR1Y2UoKHJlc3VsdCwgY3VycmVudCwgaWR4LCBhcnIpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIHByZXZpb3VzIHJhbmdlXG4gICAgICAgICAgICAgICAgaWYgKGlkeCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXMgPSBhcnJbaWR4IC0gMV07XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgYW55IG92ZXJsYXBcbiAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNFbmQgPSBwYXJzZUludChwcmV2aW91cy5lbmQpO1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50U3RhcnQgPSBwYXJzZUludChjdXJyZW50LnN0YXJ0KTtcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcCA9IChwcmV2aW91c0VuZCA+IGN1cnJlbnRTdGFydCk7XG5cbiAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUgcmVzdWx0XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJsYXApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8geWVzLCB0aGVyZSBpcyBvdmVybGFwXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5vdmVybGFwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHNwZWNpZmljIHJhbmdlcyB0aGF0IG92ZXJsYXBcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnJhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzOiBwcmV2aW91cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgLy8gc2VlZCB0aGUgcmVkdWNlXG4gICAgICAgICAgICB9LCB7b3ZlcmxhcDogZmFsc2UsIHJhbmdlczogW119KTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvY29sbGlkZS5qcyIsImltcG9ydCBVdWlkVXRpbCBmcm9tICcuLi91dGlscy9VdWlkVXRpbCdcbmltcG9ydCBTZWNvbmRzVXRpbCBmcm9tICcuLi91dGlscy9TZWNvbmRzVXRpbCdcbmltcG9ydCBUaW1lQ29udmVydGVyIGZyb20gJy4uL3V0aWxzL1RpbWVDb252ZXJ0ZXInXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJ1xuaW1wb3J0IHtnZXRTdGF0ZSwgZGlzcGF0Y2h9IGZyb20gJ21vY2tzdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoIHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydCwgZW5kLCB0ZXh0LCBjb2xvciwgYWN0aW9ucykge1xuICAgICAgICB0aGlzLnN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgdmFyIHV1aWQgPSBuZXcgVXVpZFV0aWwoKTtcbiAgICAgICAgdGhpcy5pZCA9IHV1aWQuZ2VuZXJhdGVVVUlEKCk7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5tb3VzZUlzT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy54ID0gbnVsbDtcbiAgICAgICAgdGhpcy55ID0gbnVsbDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5saW1pdFRleHRZID0gMzAgKyB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucyA/IGFjdGlvbnMgOiBbXVxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuY2FsY3VsYXRlWCgpO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgPyB0aGlzLnkgOiB0aGlzLmNhbGN1bGF0ZVkoKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY2FsY3VsYXRlV2lkdGgoKTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbGN1bGF0ZUhlaWdodCgpO1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmlkID09IHRoaXMuaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3IucmdiYS5hbHBoYSA9IDEwMDtcbiAgICAgICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgICAgIHAudGV4dFNpemUoMTIpO1xuICAgICAgICAgICAgcC50ZXh0U3R5bGUocC5OT1JNQUwpO1xuICAgICAgICAgICAgcC5maWxsKHRoaXMuY29sb3IucmdiYS5yLCB0aGlzLmNvbG9yLnJnYmEuZywgdGhpcy5jb2xvci5yZ2JhLmIsIDEwMCk7XG4gICAgICAgICAgICBwLnJlY3QodGhpcy54ICsgdGhpcy53aWR0aCAtIDMwLCB0aGlzLmxpbWl0VGV4dFksIDYwLCAxNSk7XG4gICAgICAgICAgICBwLnJlY3QodGhpcy54IC0gMzAsIHRoaXMubGltaXRUZXh0WSwgNjAsIDE1KTtcbiAgICAgICAgICAgIHAuZmlsbCgyNTUsIDI1NSwgMjU1LCAxMDApO1xuICAgICAgICAgICAgcC50ZXh0U3R5bGUocC5CT0xEKTtcbiAgICAgICAgICAgIHAudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMuc3RhcnQpLCB0aGlzLnggLSAzMCwgdGhpcy5saW1pdFRleHRZLCA2MCwgMjApO1xuICAgICAgICAgICAgcC50ZXh0KFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy5lbmQpLCB0aGlzLnggLSAzMCArIHRoaXMud2lkdGgsIHRoaXMubGltaXRUZXh0WSwgNjAsIDIwKTtcbiAgICAgICAgICAgIHAudGV4dEFsaWduKHAuQ0VOVEVSKTtcbiAgICAgICAgICAgIHAuc3Ryb2tlKHAuY29sb3IodGhpcy5jb2xvci5yZ2JhLnIsIHRoaXMuY29sb3IucmdiYS5nLCB0aGlzLmNvbG9yLnJnYmEuYikpXG4gICAgICAgICAgICBwLnN0cm9rZVdlaWdodCgyKVxuICAgICAgICAgICAgcC5saW5lKHRoaXMueCwgdGhpcy5saW1pdFRleHRZICsgMjAsIHRoaXMueCwgdGhpcy5zdGF0ZS50aW1lbGluZS5lbmRZKTtcbiAgICAgICAgICAgIHAubGluZSh0aGlzLnggKyB0aGlzLndpZHRoLCB0aGlzLmxpbWl0VGV4dFkgKyAyMCwgdGhpcy54ICsgdGhpcy53aWR0aCwgdGhpcy5zdGF0ZS50aW1lbGluZS5lbmRZKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmVuZCAtIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRUaW1lID4gMCkge1xuICAgICAgICAgICAgcC5maWxsKDI1NSk7XG4gICAgICAgICAgICBwLmZpbGwodGhpcy5jb2xvci5yZ2JhLnIsIHRoaXMuY29sb3IucmdiYS5nLCB0aGlzLmNvbG9yLnJnYmEuYiwgdGhpcy5jb2xvci5yZ2JhLmFscGhhKTsgIC8vIFVzZSBjb2xvciB2YXJpYWJsZSAnYycgYXMgZmlsbCBjb2xvclxuICAgICAgICAgICAgcC5ub1N0cm9rZSgpOyAgLy8gRG9uJ3QgZHJhdyBhIHN0cm9rZSBhcm91bmQgc2hhcGVzXG4gICAgICAgICAgICBwLnJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgIC8vIERyYXcgcmVjdGFuZ2xlXG4gICAgICAgICAgICBwLnN0cm9rZVdlaWdodCgwKTtcbiAgICAgICAgICAgIHAudGV4dFNpemUoMTIpO1xuICAgICAgICAgICAgcC50ZXh0U3R5bGUocC5OT1JNQUwpO1xuICAgICAgICAgICAgcC5maWxsKDI1NSwgMjU1LCAyNTUsIHRoaXMuY29sb3IucmdiYS5hbHBoYSk7ICAvLyBVc2UgY29sb3IgdmFyaWFibGUgJ2MnIGFzIGZpbGwgY29sb3JcbiAgICAgICAgICAgIHAucmVjdCh0aGlzLnggKyAyLCB0aGlzLnkgKyAxLCB0aGlzLndpZHRoIC0gNCwgMjApOyAgLy8gRHJhdyByZWN0YW5nbGVcbiAgICAgICAgICAgIHAuZmlsbCgwLCAwLCAwLCB0aGlzLmNvbG9yLnJnYmEuYWxwaGEpO1xuICAgICAgICAgICAgcC50ZXh0KHRoaXMudGV4dCwgdGhpcy54ICsgMiwgdGhpcy55ICsgMSwgdGhpcy53aWR0aCAtIDQsIDIwKTtcbiAgICAgICAgICAgIHAudGV4dEFsaWduKHAuQ0VOVEVSKTtcbiAgICAgICAgICAgIHAuZmlsbCgwLCAwLCAwLCAxMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0FjdGlvbnMoKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5hY3Rpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnNbal0uZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWRpdFByZXNzZWQodG91Y2gsIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZFRvdWNoJywgdG91Y2gpO1xuICAgICAgICB2bS5lZGl0VG91Y2goZXZlbnQsIHRvdWNoKTtcbiAgICB9XG5cbiAgICBpc01vdXNlT3Zlcih4LCB5KSB7XG4gICAgICAgIGlmICh4ID49IHRoaXMueCAmJiB4IDw9ICh0aGlzLnggKyB0aGlzLndpZHRoKSAmJiB5ID49IHRoaXMueSAmJiB5IDw9ICh0aGlzLnkgKyB0aGlzLmhlaWdodCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3IucmdiYS5hbHBoYSA9IDEwMDtcbiAgICAgICAgICAgIHRoaXMubW91c2VJc092ZXIgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xvci5yZ2JhLmFscGhhID0gNTA7XG4gICAgICAgICAgICB0aGlzLm1vdXNlSXNPdmVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2VJc092ZXI7XG4gICAgfVxuXG4gICAgaXNNb3VzZVByZXNzc2VkT3Zlcih4LCB5KSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIucmVjb3JkaW5nQWN0aW9uICYmICF0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5yZWNvcmRpbmdUb3VjaCkge1xuICAgICAgICAgICAgaWYgKHkgPj0gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFkpIHtcbiAgICAgICAgICAgICAgICBpZiAoeCA+PSB0aGlzLnggJiYgeCA8PSAodGhpcy54ICsgdGhpcy53aWR0aCkgJiYgeSA+PSB0aGlzLnkgJiYgeSA8PSAodGhpcy55ICsgdGhpcy5oZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdm0uc3RhcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJHJlZnMucGxheWVyLmFwaSgpLmFiTG9vcFBsdWdpbi5zZXRTdGFydCh0aGlzLnN0YXJ0KS5zZXRFbmQodGhpcy5lbmQpLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJHJlZnMucGxheWVyLmFwaSgpLmFiTG9vcFBsdWdpbi5nb1RvU3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRyZWZzLnBsYXllci5hcGkoKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRUb3VjaCcsIHRoaXMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNhbGN1bGF0ZVgoKSB7XG4gICAgICAgIHZhciBzdGFydCA9ICh0aGlzLnN0YXJ0IC0gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWUpICogdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aDtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIDMwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXJ0ICsgMzBcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVZKCkge1xuICAgICAgICByZXR1cm4gNjEgKyB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVXaWR0aCgpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gKHRoaXMuc3RhcnQgLSB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSkgKiB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuZW5kIC0gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWUpICogdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMuZW5kIC0gdGhpcy5zdGFydCkgKiB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZUhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIDYwO1xuICAgIH1cblxuICAgIGdldEZvcm1hdGVkU3RhcnQoKSB7XG4gICAgICAgIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy5zdGFydClcbiAgICB9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3RvdWNoZXMvVG91Y2guanMiLCJpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuL1RpbWVDb252ZXJ0ZXInXG5pbXBvcnQge2dldFN0YXRlLCBkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vjb25kc1V0aWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICB9XG5cbiAgICBnZXRGb3JtYXR0ZWRUaW1lKHgpIHtcbiAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1MoTWF0aC5mbG9vcih4IC8gdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aCkpO1xuICAgIH1cblxuICAgIGdldFNlY29uZHMoeCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih4IC8gdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aCk7XG4gICAgfVxufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91dGlscy9TZWNvbmRzVXRpbC5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV1aWRVdGlsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZVVVSUQoKSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSAqIDE2KSAlIDE2IHwgMDtcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQgLyAxNik7XG4gICAgICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVXVpZFV0aWwuanMiLCIhZnVuY3Rpb24oZSxvKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1vKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxvKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlZ1ZUNvbG9yPW8oKTplLlZ1ZUNvbG9yPW8oKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiBvKHIpe2lmKHRbcl0pcmV0dXJuIHRbcl0uZXhwb3J0czt2YXIgYT10W3JdPXtleHBvcnRzOnt9LGlkOnIsbG9hZGVkOiExfTtyZXR1cm4gZVtyXS5jYWxsKGEuZXhwb3J0cyxhLGEuZXhwb3J0cyxvKSxhLmxvYWRlZD0hMCxhLmV4cG9ydHN9dmFyIHQ9e307cmV0dXJuIG8ubT1lLG8uYz10LG8ucD1cIlwiLG8oMCl9KFtmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fXZhciBhPXQoMzcpLGk9cihhKSxuPXQoMzgpLHM9cihuKSxsPXQoNDEpLGM9cihsKSx1PXQoNDIpLGQ9cih1KSxoPXQoMzkpLGY9cihoKSxfPXQoNDApLHA9cihfKSx2PXQoMzYpLGc9cih2KSxiPXQoNiksbT1yKGIpLHg9dCg4KSx3PXIoeCksQz10KDQpLHk9cihDKSxrPXQoNSksRj1yKGspLEE9dCg3KSxSPXIoQSksUz10KDMpLE09cihTKSxOPXt2ZXJzaW9uOlwiMS4wLjI2XCIsQ29tcGFjdDppW1wiZGVmYXVsdFwiXSxNYXRlcmlhbDpzW1wiZGVmYXVsdFwiXSxTbGlkZXI6Y1tcImRlZmF1bHRcIl0sU3dhdGNoZXM6ZFtcImRlZmF1bHRcIl0sUGhvdG9zaG9wOmZbXCJkZWZhdWx0XCJdLFNrZXRjaDpwW1wiZGVmYXVsdFwiXSxDaHJvbWU6Z1tcImRlZmF1bHRcIl0sQWxwaGE6bVtcImRlZmF1bHRcIl0sQ2hlY2tib2FyZDp3W1wiZGVmYXVsdFwiXSxFZGl0YWJsZUlucHV0OnlbXCJkZWZhdWx0XCJdLEh1ZTpGW1wiZGVmYXVsdFwiXSxTYXR1cmF0aW9uOlJbXCJkZWZhdWx0XCJdLENvbG9yTWl4aW46TVtcImRlZmF1bHRcIl19O2UuZXhwb3J0cz1OfSxmdW5jdGlvbihlLG8pe2UuZXhwb3J0cz1mdW5jdGlvbigpe3ZhciBlPVtdO3JldHVybiBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPVtdLG89MDtvPHRoaXMubGVuZ3RoO28rKyl7dmFyIHQ9dGhpc1tvXTt0WzJdP2UucHVzaChcIkBtZWRpYSBcIit0WzJdK1wie1wiK3RbMV0rXCJ9XCIpOmUucHVzaCh0WzFdKX1yZXR1cm4gZS5qb2luKFwiXCIpfSxlLmk9ZnVuY3Rpb24obyx0KXtcInN0cmluZ1wiPT10eXBlb2YgbyYmKG89W1tudWxsLG8sXCJcIl1dKTtmb3IodmFyIHI9e30sYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgaT10aGlzW2FdWzBdO1wibnVtYmVyXCI9PXR5cGVvZiBpJiYocltpXT0hMCl9Zm9yKGE9MDthPG8ubGVuZ3RoO2ErKyl7dmFyIG49b1thXTtcIm51bWJlclwiPT10eXBlb2YgblswXSYmcltuWzBdXXx8KHQmJiFuWzJdP25bMl09dDp0JiYoblsyXT1cIihcIituWzJdK1wiKSBhbmQgKFwiK3QrXCIpXCIpLGUucHVzaChuKSl9fSxlfX0sZnVuY3Rpb24oZSxvLHQpe2Z1bmN0aW9uIHIoZSxvKXtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7dmFyIHI9ZVt0XSxhPWRbci5pZF07aWYoYSl7YS5yZWZzKys7Zm9yKHZhciBpPTA7aTxhLnBhcnRzLmxlbmd0aDtpKyspYS5wYXJ0c1tpXShyLnBhcnRzW2ldKTtmb3IoO2k8ci5wYXJ0cy5sZW5ndGg7aSsrKWEucGFydHMucHVzaChsKHIucGFydHNbaV0sbykpfWVsc2V7Zm9yKHZhciBuPVtdLGk9MDtpPHIucGFydHMubGVuZ3RoO2krKyluLnB1c2gobChyLnBhcnRzW2ldLG8pKTtkW3IuaWRdPXtpZDpyLmlkLHJlZnM6MSxwYXJ0czpufX19fWZ1bmN0aW9uIGEoZSl7Zm9yKHZhciBvPVtdLHQ9e30scj0wO3I8ZS5sZW5ndGg7cisrKXt2YXIgYT1lW3JdLGk9YVswXSxuPWFbMV0scz1hWzJdLGw9YVszXSxjPXtjc3M6bixtZWRpYTpzLHNvdXJjZU1hcDpsfTt0W2ldP3RbaV0ucGFydHMucHVzaChjKTpvLnB1c2godFtpXT17aWQ6aSxwYXJ0czpbY119KX1yZXR1cm4gb31mdW5jdGlvbiBpKGUsbyl7dmFyIHQ9XygpLHI9Z1tnLmxlbmd0aC0xXTtpZihcInRvcFwiPT09ZS5pbnNlcnRBdClyP3IubmV4dFNpYmxpbmc/dC5pbnNlcnRCZWZvcmUobyxyLm5leHRTaWJsaW5nKTp0LmFwcGVuZENoaWxkKG8pOnQuaW5zZXJ0QmVmb3JlKG8sdC5maXJzdENoaWxkKSxnLnB1c2gobyk7ZWxzZXtpZihcImJvdHRvbVwiIT09ZS5pbnNlcnRBdCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7dC5hcHBlbmRDaGlsZChvKX19ZnVuY3Rpb24gbihlKXtlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSk7dmFyIG89Zy5pbmRleE9mKGUpO28+PTAmJmcuc3BsaWNlKG8sMSl9ZnVuY3Rpb24gcyhlKXt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7cmV0dXJuIG8udHlwZT1cInRleHQvY3NzXCIsaShlLG8pLG99ZnVuY3Rpb24gbChlLG8pe3ZhciB0LHIsYTtpZihvLnNpbmdsZXRvbil7dmFyIGk9disrO3Q9cHx8KHA9cyhvKSkscj1jLmJpbmQobnVsbCx0LGksITEpLGE9Yy5iaW5kKG51bGwsdCxpLCEwKX1lbHNlIHQ9cyhvKSxyPXUuYmluZChudWxsLHQpLGE9ZnVuY3Rpb24oKXtuKHQpfTtyZXR1cm4gcihlKSxmdW5jdGlvbihvKXtpZihvKXtpZihvLmNzcz09PWUuY3NzJiZvLm1lZGlhPT09ZS5tZWRpYSYmby5zb3VyY2VNYXA9PT1lLnNvdXJjZU1hcClyZXR1cm47cihlPW8pfWVsc2UgYSgpfX1mdW5jdGlvbiBjKGUsbyx0LHIpe3ZhciBhPXQ/XCJcIjpyLmNzcztpZihlLnN0eWxlU2hlZXQpZS5zdHlsZVNoZWV0LmNzc1RleHQ9YihvLGEpO2Vsc2V7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYSksbj1lLmNoaWxkTm9kZXM7bltvXSYmZS5yZW1vdmVDaGlsZChuW29dKSxuLmxlbmd0aD9lLmluc2VydEJlZm9yZShpLG5bb10pOmUuYXBwZW5kQ2hpbGQoaSl9fWZ1bmN0aW9uIHUoZSxvKXt2YXIgdD1vLmNzcyxyPW8ubWVkaWEsYT1vLnNvdXJjZU1hcDtpZihyJiZlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsciksYSYmKHQrPVwiXFxuLyojIHNvdXJjZVVSTD1cIithLnNvdXJjZXNbMF0rXCIgKi9cIix0Kz1cIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoYSkpKSkrXCIgKi9cIiksZS5zdHlsZVNoZWV0KWUuc3R5bGVTaGVldC5jc3NUZXh0PXQ7ZWxzZXtmb3IoO2UuZmlyc3RDaGlsZDspZS5yZW1vdmVDaGlsZChlLmZpcnN0Q2hpbGQpO2UuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCkpfX12YXIgZD17fSxoPWZ1bmN0aW9uKGUpe3ZhciBvO3JldHVybiBmdW5jdGlvbigpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBvJiYobz1lLmFwcGx5KHRoaXMsYXJndW1lbnRzKSksb319LGY9aChmdW5jdGlvbigpe3JldHVybi9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpfSksXz1oKGZ1bmN0aW9uKCl7cmV0dXJuIGRvY3VtZW50LmhlYWR8fGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXX0pLHA9bnVsbCx2PTAsZz1bXTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSxvKXtvPW98fHt9LFwidW5kZWZpbmVkXCI9PXR5cGVvZiBvLnNpbmdsZXRvbiYmKG8uc2luZ2xldG9uPWYoKSksXCJ1bmRlZmluZWRcIj09dHlwZW9mIG8uaW5zZXJ0QXQmJihvLmluc2VydEF0PVwiYm90dG9tXCIpO3ZhciB0PWEoZSk7cmV0dXJuIHIodCxvKSxmdW5jdGlvbihlKXtmb3IodmFyIGk9W10sbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcz10W25dLGw9ZFtzLmlkXTtsLnJlZnMtLSxpLnB1c2gobCl9aWYoZSl7dmFyIGM9YShlKTtyKGMsbyl9Zm9yKHZhciBuPTA7bjxpLmxlbmd0aDtuKyspe3ZhciBsPWlbbl07aWYoMD09PWwucmVmcyl7Zm9yKHZhciB1PTA7dTxsLnBhcnRzLmxlbmd0aDt1KyspbC5wYXJ0c1t1XSgpO2RlbGV0ZSBkW2wuaWRdfX19fTt2YXIgYj1mdW5jdGlvbigpe3ZhciBlPVtdO3JldHVybiBmdW5jdGlvbihvLHQpe3JldHVybiBlW29dPXQsZS5maWx0ZXIoQm9vbGVhbikuam9pbihcIlxcblwiKX19KCl9LGZ1bmN0aW9uKGUsbyx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19ZnVuY3Rpb24gYShlLG8pe2UuYSYmZS5hPjEmJihlLmE9MSk7dmFyIHQ9ZS5oZXg/KDAsbltcImRlZmF1bHRcIl0pKGUuaGV4KTooMCxuW1wiZGVmYXVsdFwiXSkoZSkscj10LnRvSHNsKCksYT10LnRvSHN2KCk7cmV0dXJuIDA9PT1yLnMmJihyLmg9ZS5ofHxvfHwwLGEuaD1lLmh8fG98fDApLHtoc2w6cixoZXg6dC50b0hleFN0cmluZygpLnRvVXBwZXJDYXNlKCkscmdiYTp0LnRvUmdiKCksaHN2OmEsb2xkSHVlOmUuaHx8b3x8ci5oLHNvdXJjZTplLnNvdXJjZSxhOmUuYX19T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9dCgzNSksbj1yKGkpO29bXCJkZWZhdWx0XCJdPXtwcm9wczpbXCJ2YWx1ZVwiXSxkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue3ZhbDphKHRoaXMudmFsdWUpfX0sY29tcHV0ZWQ6e2NvbG9yczp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsfSxzZXQ6ZnVuY3Rpb24oZSl7dGhpcy52YWw9ZSx0aGlzLiRlbWl0KFwiY2hhbmdlLWNvbG9yXCIsZSl9fX0sd2F0Y2g6e3ZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMudmFsPWEoZSl9fSxjcmVhdGVkOmZ1bmN0aW9uKCl7fSxtZXRob2RzOntjb2xvckNoYW5nZTpmdW5jdGlvbihlLG8pe3RoaXMuY29sb3JzPWEoZSxvfHx0aGlzLm9sZEh1ZSksdGhpcy5vbGRIdWU9dGhpcy5jb2xvcnMuaHNsLmh9LGlzVmFsaWRIZXg6ZnVuY3Rpb24oZSl7cmV0dXJuKDAsbltcImRlZmF1bHRcIl0pKGUpLmlzVmFsaWQoKX0sc2ltcGxlQ2hlY2tGb3JWYWxpZENvbG9yOmZ1bmN0aW9uKGUpe2Zvcih2YXIgbz1bXCJyXCIsXCJnXCIsXCJiXCIsXCJhXCIsXCJoXCIsXCJzXCIsXCJhXCIsXCJ2XCJdLHQ9MCxyPTAsYT0wO2E8by5sZW5ndGg7YSsrKXt2YXIgaT1vW2FdO2VbaV0mJih0KyssaXNOYU4oZVtpXSl8fHIrKyl9aWYodD09PXIpcmV0dXJuIGV9fX19LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhO3QoNTYpLHI9dCgxOCk7dmFyIGk9dCg0NCk7YT1yPXJ8fHt9LFwib2JqZWN0XCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXSYmXCJmdW5jdGlvblwiIT10eXBlb2YgcltcImRlZmF1bHRcIl18fChhPXI9cltcImRlZmF1bHRcIl0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJihhPWEub3B0aW9ucyksYS5yZW5kZXI9aS5yZW5kZXIsYS5zdGF0aWNSZW5kZXJGbnM9aS5zdGF0aWNSZW5kZXJGbnMsZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhO3QoNTcpLHI9dCgxOSk7dmFyIGk9dCg0NSk7YT1yPXJ8fHt9LFwib2JqZWN0XCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXSYmXCJmdW5jdGlvblwiIT10eXBlb2YgcltcImRlZmF1bHRcIl18fChhPXI9cltcImRlZmF1bHRcIl0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJihhPWEub3B0aW9ucyksYS5yZW5kZXI9aS5yZW5kZXIsYS5zdGF0aWNSZW5kZXJGbnM9aS5zdGF0aWNSZW5kZXJGbnMsZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhO3QoNjUpLHI9dCgxNik7dmFyIGk9dCg1Myk7YT1yPXJ8fHt9LFwib2JqZWN0XCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXSYmXCJmdW5jdGlvblwiIT10eXBlb2YgcltcImRlZmF1bHRcIl18fChhPXI9cltcImRlZmF1bHRcIl0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJihhPWEub3B0aW9ucyksYS5yZW5kZXI9aS5yZW5kZXIsYS5zdGF0aWNSZW5kZXJGbnM9aS5zdGF0aWNSZW5kZXJGbnMsZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhO3QoNTgpLHI9dCgyMCk7dmFyIGk9dCg0Nik7YT1yPXJ8fHt9LFwib2JqZWN0XCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXSYmXCJmdW5jdGlvblwiIT10eXBlb2YgcltcImRlZmF1bHRcIl18fChhPXI9cltcImRlZmF1bHRcIl0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJihhPWEub3B0aW9ucyksYS5yZW5kZXI9aS5yZW5kZXIsYS5zdGF0aWNSZW5kZXJGbnM9aS5zdGF0aWNSZW5kZXJGbnMsZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhO3QoNjYpLHI9dCgxNyk7dmFyIGk9dCg1NCk7YT1yPXJ8fHt9LFwib2JqZWN0XCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXSYmXCJmdW5jdGlvblwiIT10eXBlb2YgcltcImRlZmF1bHRcIl18fChhPXI9cltcImRlZmF1bHRcIl0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJihhPWEub3B0aW9ucyksYS5yZW5kZXI9aS5yZW5kZXIsYS5zdGF0aWNSZW5kZXJGbnM9aS5zdGF0aWNSZW5kZXJGbnMsZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsbyx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGE9dCgzKSxpPXIoYSksbj10KDQpLHM9cihuKSxsPXQoNyksYz1yKGwpLHU9dCg1KSxkPXIodSksaD10KDYpLGY9cihoKTtvW1wiZGVmYXVsdFwiXT17bmFtZTpcIkNocm9tZVwiLG1peGluczpbaVtcImRlZmF1bHRcIl1dLHByb3BzOnt9LGNvbXBvbmVudHM6e3NhdHVyYXRpb246Y1tcImRlZmF1bHRcIl0saHVlOmRbXCJkZWZhdWx0XCJdLGFscGhhOmZbXCJkZWZhdWx0XCJdLFwiZWQtaW5cIjpzW1wiZGVmYXVsdFwiXX0sZGF0YTpmdW5jdGlvbigpe3JldHVybntmaWVsZHM6W1wiaGV4XCIsXCJyZ2JhXCIsXCJoc2xhXCJdLGZpZWxkc0luZGV4OjAsaGlnaGxpZ2h0OiExfX0sY29tcHV0ZWQ6e2FjdGl2ZUNvbG9yOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5jb2xvcnMucmdiYTtyZXR1cm5cInJnYmEoXCIrW2UucixlLmcsZS5iLGUuYV0uam9pbihcIixcIikrXCIpXCJ9fSxtZXRob2RzOntoYW5kbGVQcmVzZXQ6ZnVuY3Rpb24oZSl7dGhpcy5jb2xvckNoYW5nZSh7aGV4OmUsc291cmNlOlwiaGV4XCJ9KX0sY2hpbGRDaGFuZ2U6ZnVuY3Rpb24oZSl7dGhpcy5jb2xvckNoYW5nZShlKX0saW5wdXRDaGFuZ2U6ZnVuY3Rpb24oZSl7ZSYmKGUuaGV4P3RoaXMuaXNWYWxpZEhleChlLmhleCkmJnRoaXMuY29sb3JDaGFuZ2Uoe2hleDplLmhleCxzb3VyY2U6XCJoZXhcIn0pOihlLnJ8fGUuZ3x8ZS5ifHxlLmEpJiZ0aGlzLmNvbG9yQ2hhbmdlKHtyOmUucnx8dGhpcy5jb2xvcnMucmdiYS5yLGc6ZS5nfHx0aGlzLmNvbG9ycy5yZ2JhLmcsYjplLmJ8fHRoaXMuY29sb3JzLnJnYmEuYixhOmUuYXx8dGhpcy5jb2xvcnMucmdiYS5hLHNvdXJjZTpcInJnYmFcIn0pKX0sdG9nZ2xlVmlld3M6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5maWVsZHNJbmRleD49Mj92b2lkKHRoaXMuZmllbGRzSW5kZXg9MCk6dm9pZCB0aGlzLmZpZWxkc0luZGV4Kyt9LHNob3dIaWdobGlnaHQ6ZnVuY3Rpb24oKXt0aGlzLmhpZ2hsaWdodD0hMH0saGlkZUhpZ2hsaWdodDpmdW5jdGlvbigpe3RoaXMuaGlnaGxpZ2h0PSExfX19fSxmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPXQoMyksaT1yKGEpLG49dCg0KSxzPXIobiksbD1bXCIjNEQ0RDREXCIsXCIjOTk5OTk5XCIsXCIjRkZGRkZGXCIsXCIjRjQ0RTNCXCIsXCIjRkU5MjAwXCIsXCIjRkNEQzAwXCIsXCIjREJERjAwXCIsXCIjQTRERDAwXCIsXCIjNjhDQ0NBXCIsXCIjNzNEOEZGXCIsXCIjQUVBMUZGXCIsXCIjRkRBMUZGXCIsXCIjMzMzMzMzXCIsXCIjODA4MDgwXCIsXCIjQ0NDQ0NDXCIsXCIjRDMzMTE1XCIsXCIjRTI3MzAwXCIsXCIjRkNDNDAwXCIsXCIjQjBCQzAwXCIsXCIjNjhCQzAwXCIsXCIjMTZBNUE1XCIsXCIjMDA5Q0UwXCIsXCIjN0I2NEZGXCIsXCIjRkEyOEZGXCIsXCIjMDAwMDAwXCIsXCIjNjY2NjY2XCIsXCIjQjNCM0IzXCIsXCIjOUYwNTAwXCIsXCIjQzQ1MTAwXCIsXCIjRkI5RTAwXCIsXCIjODA4OTAwXCIsXCIjMTk0RDMzXCIsXCIjMEM3OTdEXCIsXCIjMDA2MkIxXCIsXCIjNjUzMjk0XCIsXCIjQUIxNDlFXCJdO29bXCJkZWZhdWx0XCJdPXtuYW1lOlwiQ29tcGFjdFwiLG1peGluczpbaVtcImRlZmF1bHRcIl1dLHByb3BzOnt9LGNvbXBvbmVudHM6e1wiZWQtaW5cIjpzW1wiZGVmYXVsdFwiXX0sY29tcHV0ZWQ6e3BpY2s6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb2xvcnMuaGV4fX0sZGF0YTpmdW5jdGlvbigpe3JldHVybntkZWZhdWx0Q29sb3JzOmx9fSxtZXRob2RzOntoYW5kbGVyQ2xpY2s6ZnVuY3Rpb24oZSl7dGhpcy5jb2xvckNoYW5nZSh7aGV4OmUsc291cmNlOlwiaGV4XCJ9KX0sb25DaGFuZ2U6ZnVuY3Rpb24oZSl7ZSYmKGUuaGV4P3RoaXMuaXNWYWxpZEhleChlLmhleCkmJnRoaXMuY29sb3JDaGFuZ2Uoe2hleDplLmhleCxzb3VyY2U6XCJoZXhcIn0pOihlLnJ8fGUuZ3x8ZS5iKSYmdGhpcy5jb2xvckNoYW5nZSh7cjplLnJ8fHRoaXMuY29sb3JzLnJnYmEucixnOmUuZ3x8dGhpcy5jb2xvcnMucmdiYS5nLGI6ZS5ifHx0aGlzLmNvbG9ycy5yZ2JhLmIsYTplLmF8fHRoaXMuY29sb3JzLnJnYmEuYSxzb3VyY2U6XCJyZ2JhXCJ9KSl9fX19LGZ1bmN0aW9uKGUsbyx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGE9dCg0KSxpPXIoYSksbj10KDMpLHM9cihuKTtvW1wiZGVmYXVsdFwiXT17bmFtZTpcIk1hdGVyaWFsXCIsbWl4aW5zOltzW1wiZGVmYXVsdFwiXV0sY29tcG9uZW50czp7XCJlZC1pblwiOmlbXCJkZWZhdWx0XCJdfSxtZXRob2RzOntvbkNoYW5nZTpmdW5jdGlvbihlKXtlJiYoZS5oZXg/dGhpcy5pc1ZhbGlkSGV4KGUuaGV4KSYmdGhpcy5jb2xvckNoYW5nZSh7aGV4OmUuaGV4LHNvdXJjZTpcImhleFwifSk6KGUucnx8ZS5nfHxlLmIpJiZ0aGlzLmNvbG9yQ2hhbmdlKHtyOmUucnx8dGhpcy5jb2xvcnMucmdiYS5yLGc6ZS5nfHx0aGlzLmNvbG9ycy5yZ2JhLmcsYjplLmJ8fHRoaXMuY29sb3JzLnJnYmEuYixhOmUuYXx8dGhpcy5jb2xvcnMucmdiYS5hLHNvdXJjZTpcInJnYmFcIn0pKX19fX0sZnVuY3Rpb24oZSxvLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYT10KDMpLGk9cihhKSxuPXQoNCkscz1yKG4pLGw9dCg3KSxjPXIobCksdT10KDUpLGQ9cih1KSxoPXQoNiksZj1yKGgpO29bXCJkZWZhdWx0XCJdPXtuYW1lOlwiUGhvdG9zaG9wXCIsbWl4aW5zOltpW1wiZGVmYXVsdFwiXV0scHJvcHM6e2hlYWQ6e3R5cGU6U3RyaW5nLFwiZGVmYXVsdFwiOlwiQ29sb3IgUGlja2VyXCJ9fSxjb21wb25lbnRzOntzYXR1cmF0aW9uOmNbXCJkZWZhdWx0XCJdLGh1ZTpkW1wiZGVmYXVsdFwiXSxhbHBoYTpmW1wiZGVmYXVsdFwiXSxcImVkLWluXCI6c1tcImRlZmF1bHRcIl19LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudENvbG9yOlwiI0ZGRlwifX0sY3JlYXRlZDpmdW5jdGlvbigpe3RoaXMuY3VycmVudENvbG9yPXRoaXMuY29sb3JzLmhleH0sbWV0aG9kczp7Y2hpbGRDaGFuZ2U6ZnVuY3Rpb24oZSl7dGhpcy5jb2xvckNoYW5nZShlKX0saW5wdXRDaGFuZ2U6ZnVuY3Rpb24oZSl7ZSYmKGVbXCIjXCJdP3RoaXMuaXNWYWxpZEhleChlW1wiI1wiXSkmJnRoaXMuY29sb3JDaGFuZ2Uoe2hleDplW1wiI1wiXSxzb3VyY2U6XCJoZXhcIn0pOihlLnJ8fGUuZ3x8ZS5ifHxlLmEpJiZ0aGlzLmNvbG9yQ2hhbmdlKHtyOmUucnx8dGhpcy5jb2xvcnMucmdiYS5yLGc6ZS5nfHx0aGlzLmNvbG9ycy5yZ2JhLmcsYjplLmJ8fHRoaXMuY29sb3JzLnJnYmEuYixhOmUuYXx8dGhpcy5jb2xvcnMucmdiYS5hLHNvdXJjZTpcInJnYmFcIn0pKX0saGFuZGxlQWNjZXB0OmZ1bmN0aW9uKCl7dGhpcy4kZW1pdChcIm9rXCIpfSxoYW5kbGVDYW5jZWw6ZnVuY3Rpb24oKXt0aGlzLiRlbWl0KFwiY2FuY2VsXCIpfX19fSxmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPXQoMyksaT1yKGEpLG49dCg0KSxzPXIobiksbD10KDcpLGM9cihsKSx1PXQoNSksZD1yKHUpLGg9dCg2KSxmPXIoaCksXz1bXCIjRDAwMjFCXCIsXCIjRjVBNjIzXCIsXCIjRjhFNzFDXCIsXCIjOEI1NzJBXCIsXCIjN0VEMzIxXCIsXCIjNDE3NTA1XCIsXCIjQkQxMEUwXCIsXCIjOTAxM0ZFXCIsXCIjNEE5MEUyXCIsXCIjNTBFM0MyXCIsXCIjQjhFOTg2XCIsXCIjMDAwMDAwXCIsXCIjNEE0QTRBXCIsXCIjOUI5QjlCXCIsXCIjRkZGRkZGXCJdO29bXCJkZWZhdWx0XCJdPXtuYW1lOlwiU2tldGNoXCIsbWl4aW5zOltpW1wiZGVmYXVsdFwiXV0sY29tcG9uZW50czp7c2F0dXJhdGlvbjpjW1wiZGVmYXVsdFwiXSxodWU6ZFtcImRlZmF1bHRcIl0sYWxwaGE6ZltcImRlZmF1bHRcIl0sXCJlZC1pblwiOnNbXCJkZWZhdWx0XCJdfSxkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue3ByZXNldENvbG9yczpffX0sY29tcHV0ZWQ6e2FjdGl2ZUNvbG9yOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5jb2xvcnMucmdiYTtyZXR1cm5cInJnYmEoXCIrW2UucixlLmcsZS5iLGUuYV0uam9pbihcIixcIikrXCIpXCJ9fSxtZXRob2RzOntoYW5kbGVQcmVzZXQ6ZnVuY3Rpb24oZSl7dGhpcy5jb2xvckNoYW5nZSh7aGV4OmUsc291cmNlOlwiaGV4XCJ9KX0sY2hpbGRDaGFuZ2U6ZnVuY3Rpb24oZSl7dGhpcy5jb2xvckNoYW5nZShlKX0saW5wdXRDaGFuZ2U6ZnVuY3Rpb24oZSl7ZSYmKGUuaGV4P3RoaXMuaXNWYWxpZEhleChlLmhleCkmJnRoaXMuY29sb3JDaGFuZ2Uoe2hleDplLmhleCxzb3VyY2U6XCJoZXhcIn0pOihlLnJ8fGUuZ3x8ZS5ifHxlLmEpJiZ0aGlzLmNvbG9yQ2hhbmdlKHtyOmUucnx8dGhpcy5jb2xvcnMucmdiYS5yLGc6ZS5nfHx0aGlzLmNvbG9ycy5yZ2JhLmcsYjplLmJ8fHRoaXMuY29sb3JzLnJnYmEuYixhOmUuYXx8dGhpcy5jb2xvcnMucmdiYS5hLHNvdXJjZTpcInJnYmFcIn0pKX19fX0sZnVuY3Rpb24oZSxvLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYT10KDMpLGk9cihhKSxuPXQoNSkscz1yKG4pO29bXCJkZWZhdWx0XCJdPXtuYW1lOlwiU2xpZGVyXCIsbWl4aW5zOltpW1wiZGVmYXVsdFwiXV0scHJvcHM6e2RpcmVjdGlvbjpTdHJpbmd9LGNvbXBvbmVudHM6e2h1ZTpzW1wiZGVmYXVsdFwiXX0sY29tcHV0ZWQ6e2FjdGl2ZU9mZnNldDpmdW5jdGlvbigpe3JldHVybiBNYXRoLnJvdW5kKDEwMCp0aGlzLmNvbG9ycy5oc2wucykvMTAwPT09LjU/TWF0aC5yb3VuZCgxMDAqdGhpcy5jb2xvcnMuaHNsLmwpLzEwMDowfX0sZGF0YTpmdW5jdGlvbigpe3JldHVybntzd2F0Y2hlczpbXCIuODBcIixcIi42NVwiLFwiLjUwXCIsXCIuMzVcIixcIi4yMFwiXX19LG1ldGhvZHM6e2h1ZUNoYW5nZTpmdW5jdGlvbihlKXt0aGlzLmNvbG9yQ2hhbmdlKGUpfSxoYW5kbGVTd0NsaWNrOmZ1bmN0aW9uKGUsbyl7dGhpcy5jb2xvckNoYW5nZSh7aDp0aGlzLmNvbG9ycy5oc2wuaCxzOi41LGw6byxzb3VyY2U6XCJoc2xcIn0pfX19fSxmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPXQoMzQpLGk9cihhKSxuPXQoMykscz1yKG4pLGw9W1wicmVkXCIsXCJwaW5rXCIsXCJwdXJwbGVcIixcImRlZXBQdXJwbGVcIixcImluZGlnb1wiLFwiYmx1ZVwiLFwibGlnaHRCbHVlXCIsXCJjeWFuXCIsXCJ0ZWFsXCIsXCJncmVlblwiLFwibGlnaHRHcmVlblwiLFwibGltZVwiLFwieWVsbG93XCIsXCJhbWJlclwiLFwib3JhbmdlXCIsXCJkZWVwT3JhbmdlXCIsXCJicm93blwiLFwiYmx1ZUdyZXlcIl0sYz1bXCI5MDBcIixcIjcwMFwiLFwiNTAwXCIsXCIzMDBcIixcIjEwMFwiXSx1PWZ1bmN0aW9uKCl7dmFyIGU9W107cmV0dXJuIGwuZm9yRWFjaChmdW5jdGlvbihvKXt2YXIgdD1bXTtjLmZvckVhY2goZnVuY3Rpb24oZSl7dC5wdXNoKGlbXCJkZWZhdWx0XCJdW29dW2VdLnRvVXBwZXJDYXNlKCkpfSksZS5wdXNoKHQpfSksZX0oKTtvW1wiZGVmYXVsdFwiXT17bmFtZTpcIlN3YXRjaGVzXCIsbWl4aW5zOltzW1wiZGVmYXVsdFwiXV0sY29tcHV0ZWQ6e3BpY2s6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb2xvcnMuaGV4fX0sZGF0YTpmdW5jdGlvbigpe3JldHVybntkZWZhdWx0Q29sb3JzOnV9fSxtZXRob2RzOntoYW5kbGVyQ2xpY2s6ZnVuY3Rpb24oZSl7dGhpcy5jb2xvckNoYW5nZSh7aGV4OmUsc291cmNlOlwiaGV4XCJ9KX19fX0sZnVuY3Rpb24oZSxvLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYT10KDgpLGk9cihhKTtvW1wiZGVmYXVsdFwiXT17bmFtZTpcIkFscGhhXCIscHJvcHM6e3ZhbHVlOk9iamVjdCxvbkNoYW5nZTpGdW5jdGlvbn0sY29tcG9uZW50czp7Y2hlY2tib2FyZDppW1wiZGVmYXVsdFwiXX0sY29tcHV0ZWQ6e2NvbG9yczpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlfSxncmFkaWVudENvbG9yOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5jb2xvcnMucmdiYSxvPVtlLnIsZS5nLGUuYl0uam9pbihcIixcIik7cmV0dXJuXCJsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoXCIrbytcIiwgMCkgMCUsIHJnYmEoXCIrbytcIiwgMSkgMTAwJSlcIn19LG1ldGhvZHM6e2hhbmRsZUNoYW5nZTpmdW5jdGlvbihlLG8peyFvJiZlLnByZXZlbnREZWZhdWx0KCk7dmFyIHQscj10aGlzLiRyZWZzLmNvbnRhaW5lcixhPXIuY2xpZW50V2lkdGgsaT0oZS5wYWdlWHx8ZS50b3VjaGVzWzBdLnBhZ2VYKS0oci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0K3dpbmRvdy5wYWdlWE9mZnNldCk7dD1pPDA/MDppPmE/MTpNYXRoLnJvdW5kKDEwMCppL2EpLzEwMCx0aGlzLmNvbG9ycy5hIT09dCYmdGhpcy4kZW1pdChcIm9uLWNoYW5nZVwiLHtoOnRoaXMuY29sb3JzLmhzbC5oLHM6dGhpcy5jb2xvcnMuaHNsLnMsbDp0aGlzLmNvbG9ycy5oc2wubCxhOnQsc291cmNlOlwicmdiYVwifSl9LGhhbmRsZU1vdXNlRG93bjpmdW5jdGlvbihlKXt0aGlzLmhhbmRsZUNoYW5nZShlLCEwKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMuaGFuZGxlQ2hhbmdlKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLmhhbmRsZU1vdXNlVXApfSxoYW5kbGVNb3VzZVVwOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmRFdmVudExpc3RlbmVycygpfSx1bmJpbmRFdmVudExpc3RlbmVyczpmdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5oYW5kbGVDaGFuZ2UpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMuaGFuZGxlTW91c2VVcCl9fX19LGZ1bmN0aW9uKGUsbyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdChlLG8sdCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGRvY3VtZW50KXJldHVybiBudWxsO3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7ci53aWR0aD1yLmhlaWdodD0yKnQ7dmFyIGE9ci5nZXRDb250ZXh0KFwiMmRcIik7cmV0dXJuIGE/KGEuZmlsbFN0eWxlPWUsYS5maWxsUmVjdCgwLDAsci53aWR0aCxyLmhlaWdodCksYS5maWxsU3R5bGU9byxhLmZpbGxSZWN0KDAsMCx0LHQpLGEudHJhbnNsYXRlKHQsdCksYS5maWxsUmVjdCgwLDAsdCx0KSxyLnRvRGF0YVVSTCgpKTpudWxsfWZ1bmN0aW9uIHIoZSxvLHIpe3ZhciBpPWUrXCIsXCIrbytcIixcIityO2lmKGFbaV0pcmV0dXJuIGFbaV07dmFyIG49dChlLG8scik7cmV0dXJuIGFbaV09bixufU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPXt9O29bXCJkZWZhdWx0XCJdPXtuYW1lOlwiQ2hlY2tib2FyZFwiLHByb3BzOntzaXplOnt0eXBlOltOdW1iZXIsU3RyaW5nXSxcImRlZmF1bHRcIjo4fSx3aGl0ZTp7dHlwZTpTdHJpbmcsXCJkZWZhdWx0XCI6XCIjZmZmXCJ9LGdyZXk6e3R5cGU6U3RyaW5nLFwiZGVmYXVsdFwiOlwiI2U2ZTZlNlwifX0sY29tcHV0ZWQ6e2JnU3R5bGU6ZnVuY3Rpb24oKXtyZXR1cm5cInVybChcIityKHRoaXMud2hpdGUsdGhpcy5ncmV5LHRoaXMuc2l6ZSkrXCIpIGNlbnRlciBsZWZ0XCJ9fX19LGZ1bmN0aW9uKGUsbyl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksb1tcImRlZmF1bHRcIl09e25hbWU6XCJlZGl0YWJsZUlucHV0XCIscHJvcHM6e2xhYmVsOlN0cmluZyx2YWx1ZTpbU3RyaW5nLE51bWJlcl0sbWF4Ok51bWJlcixhcnJvd09mZnNldDp7dHlwZTpOdW1iZXIsXCJkZWZhdWx0XCI6MX19LGNvbXB1dGVkOnt2YWw6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZX19LGZpbHRlcnM6e21heEZpbHRlcjp7cmVhZDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5tYXgmJmU+dGhpcy5tYXg/dGhpcy5tYXg6ZX0sd3JpdGU6ZnVuY3Rpb24oZSxvKXtyZXR1cm4gZX19fSxtZXRob2RzOnt1cGRhdGU6ZnVuY3Rpb24oZSl7dGhpcy5oYW5kbGVDaGFuZ2UoZS50YXJnZXQudmFsdWUpfSxoYW5kbGVDaGFuZ2U6ZnVuY3Rpb24oZSl7dmFyIG89e307b1t0aGlzLmxhYmVsXT1lLHRoaXMuJGVtaXQoXCJvbi1jaGFuZ2VcIixvKX0saGFuZGxlQmx1cjpmdW5jdGlvbihlKXtjb25zb2xlLmxvZyhlKX0saGFuZGxlS2V5RG93bjpmdW5jdGlvbihlKXt2YXIgbz10aGlzLnZhbCx0PU51bWJlcihvKTtpZih0KXt2YXIgcj10aGlzLmFycm93T2Zmc2V0fHwxOzM4PT09ZS5rZXlDb2RlJiYobz10K3IsdGhpcy5oYW5kbGVDaGFuZ2UobyksZS5wcmV2ZW50RGVmYXVsdCgpKSw0MD09PWUua2V5Q29kZSYmKG89dC1yLHRoaXMuaGFuZGxlQ2hhbmdlKG8pLGUucHJldmVudERlZmF1bHQoKSl9fSxoYW5kbGVEcmFnOmZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKGUpfSxoYW5kbGVNb3VzZURvd246ZnVuY3Rpb24oZSl7Y29uc29sZS5sb2coZSl9fX19LGZ1bmN0aW9uKGUsbyl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksb1tcImRlZmF1bHRcIl09e25hbWU6XCJIdWVcIixwcm9wczp7dmFsdWU6T2JqZWN0LGRpcmVjdGlvbjp7dHlwZTpTdHJpbmcsXCJkZWZhdWx0XCI6XCJob3Jpem9udGFsXCJ9fSxjb21wdXRlZDp7Y29sb3JzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWV9LGRpcmVjdGlvbkNsYXNzOmZ1bmN0aW9uKCl7cmV0dXJue1widnVlLWNvbG9yX19jLWh1ZS0taG9yaXpvbnRhbFwiOlwiaG9yaXpvbnRhbFwiPT09dGhpcy5kaXJlY3Rpb24sXCJ2dWUtY29sb3JfX2MtaHVlLS12ZXJ0aWNhbFwiOlwidmVydGljYWxcIj09PXRoaXMuZGlyZWN0aW9ufX0scG9pbnRlclRvcDpmdW5jdGlvbigpe3JldHVyblwidmVydGljYWxcIj09PXRoaXMuZGlyZWN0aW9uPy0oMTAwKnRoaXMuY29sb3JzLmhzbC5oLzM2MCkrMTAwK1wiJVwiOjB9LHBvaW50ZXJMZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuXCJ2ZXJ0aWNhbFwiPT09dGhpcy5kaXJlY3Rpb24/MDoxMDAqdGhpcy5jb2xvcnMuaHNsLmgvMzYwK1wiJVwifX0sbWV0aG9kczp7aGFuZGxlQ2hhbmdlOmZ1bmN0aW9uKGUsbyl7IW8mJmUucHJldmVudERlZmF1bHQoKTt2YXIgdCxyLGE9dGhpcy4kcmVmcy5jb250YWluZXIsaT1hLmNsaWVudFdpZHRoLG49YS5jbGllbnRIZWlnaHQscz0oZS5wYWdlWHx8ZS50b3VjaGVzWzBdLnBhZ2VYKS0oYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0K3dpbmRvdy5wYWdlWE9mZnNldCksbD0oZS5wYWdlWXx8ZS50b3VjaGVzWzBdLnBhZ2VZKS0oYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3Ard2luZG93LnBhZ2VZT2Zmc2V0KTtcInZlcnRpY2FsXCI9PT10aGlzLmRpcmVjdGlvbj8obDwwP3Q9MzU5Omw+bj90PTA6KHI9LSgxMDAqbC9uKSsxMDAsdD0zNjAqci8xMDApLHRoaXMuY29sb3JzLmhzbC5oIT09dCYmdGhpcy4kZW1pdChcIm9uLWNoYW5nZVwiLHtoOnQsczp0aGlzLmNvbG9ycy5oc2wucyxsOnRoaXMuY29sb3JzLmhzbC5sLGE6dGhpcy5jb2xvcnMuaHNsLmEsc291cmNlOlwiaHNsXCJ9KSk6KHM8MD90PTA6cz5pP3Q9MzU5OihyPTEwMCpzL2ksdD0zNjAqci8xMDApLHRoaXMuY29sb3JzLmhzbC5oIT09dCYmdGhpcy4kZW1pdChcIm9uLWNoYW5nZVwiLHtoOnQsczp0aGlzLmNvbG9ycy5oc2wucyxsOnRoaXMuY29sb3JzLmhzbC5sLGE6dGhpcy5jb2xvcnMuaHNsLmEsc291cmNlOlwiaHNsXCJ9KSl9LGhhbmRsZU1vdXNlRG93bjpmdW5jdGlvbihlKXt0aGlzLmhhbmRsZUNoYW5nZShlLCEwKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMuaGFuZGxlQ2hhbmdlKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLmhhbmRsZU1vdXNlVXApfSxoYW5kbGVNb3VzZVVwOmZ1bmN0aW9uKGUpe3RoaXMudW5iaW5kRXZlbnRMaXN0ZW5lcnMoKX0sdW5iaW5kRXZlbnRMaXN0ZW5lcnM6ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMuaGFuZGxlQ2hhbmdlKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLmhhbmRsZU1vdXNlVXApfX19fSxmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPXQoMzMpLGk9cihhKTtvW1wiZGVmYXVsdFwiXT17bmFtZTpcIlNhdHVyYXRpb25cIixwcm9wczp7dmFsdWU6T2JqZWN0fSxjb21wdXRlZDp7Y29sb3JzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWV9LGJnQ29sb3I6ZnVuY3Rpb24oKXtyZXR1cm5cImhzbChcIit0aGlzLmNvbG9ycy5oc2wuaCtcIiwxMDAlLCA1MCUpXCJ9LHBvaW50ZXJUb3A6ZnVuY3Rpb24oKXtyZXR1cm4tKDEwMCp0aGlzLmNvbG9ycy5oc3YudikrMTAwK1wiJVwifSxwb2ludGVyTGVmdDpmdW5jdGlvbigpe3JldHVybiAxMDAqdGhpcy5jb2xvcnMuaHN2LnMrXCIlXCJ9fSxtZXRob2RzOnt0aHJvdHRsZTooMCxpW1wiZGVmYXVsdFwiXSkoZnVuY3Rpb24oZSxvKXtlKG8pfSw1MCksaGFuZGxlQ2hhbmdlOmZ1bmN0aW9uKGUsbyl7IW8mJmUucHJldmVudERlZmF1bHQoKTt2YXIgdD10aGlzLiRyZWZzLmNvbnRhaW5lcixyPXQuY2xpZW50V2lkdGgsYT10LmNsaWVudEhlaWdodCxpPShlLnBhZ2VYfHxlLnRvdWNoZXNbMF0ucGFnZVgpLSh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQrd2luZG93LnBhZ2VYT2Zmc2V0KSxuPShlLnBhZ2VZfHxlLnRvdWNoZXNbMF0ucGFnZVkpLSh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCt3aW5kb3cucGFnZVlPZmZzZXQpO2k8MD9pPTA6aT5yP2k9cjpuPDA/bj0wOm4+YSYmKG49YSk7dmFyIHM9MTAwKmkvcixsPS0oMTAwKm4vYSkrMTAwO3RoaXMudGhyb3R0bGUodGhpcy5vbkNoYW5nZSx7aDp0aGlzLmNvbG9ycy5oc2wuaCxzOnMsdjpsLGE6dGhpcy5jb2xvcnMuaHNsLmEsc291cmNlOlwicmdiXCJ9KX0sb25DaGFuZ2U6ZnVuY3Rpb24oZSl7dGhpcy4kZW1pdChcIm9uLWNoYW5nZVwiLGUpfSxoYW5kbGVNb3VzZURvd246ZnVuY3Rpb24oZSl7dGhpcy5oYW5kbGVDaGFuZ2UoZSwhMCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLmhhbmRsZUNoYW5nZSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5oYW5kbGVNb3VzZVVwKX0saGFuZGxlTW91c2VVcDpmdW5jdGlvbihlKXt0aGlzLnVuYmluZEV2ZW50TGlzdGVuZXJzKCl9LHVuYmluZEV2ZW50TGlzdGVuZXJzOmZ1bmN0aW9uKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLmhhbmRsZUNoYW5nZSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5oYW5kbGVNb3VzZVVwKX19fX0sZnVuY3Rpb24oZSxvLHQpe289ZS5leHBvcnRzPXQoMSkoKSxvLnB1c2goW2UuaWQsXCIudnVlLWNvbG9yX19jb21wYWN0e3BhZGRpbmctdG9wOjVweDtwYWRkaW5nLWxlZnQ6NXB4O3dpZHRoOjI0MHB4O2JvcmRlci1yYWRpdXM6MnB4O2JveC1zaGFkb3c6MCAycHggMTBweCByZ2JhKDAsMCwwLC4xMiksMCAycHggNXB4IHJnYmEoMCwwLDAsLjE2KTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnZ1ZS1jb2xvcl9fY29tcGFjdF9fY29sb3Jze292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjA7bWFyZ2luOjB9LnZ1ZS1jb2xvcl9fY29tcGFjdF9fY29sb3ItaXRlbXtsaXN0LXN0eWxlOm5vbmU7d2lkdGg6MTVweDtoZWlnaHQ6MTVweDtmbG9hdDpsZWZ0O21hcmdpbi1yaWdodDo1cHg7bWFyZ2luLWJvdHRvbTo1cHg7cG9zaXRpb246cmVsYXRpdmU7Y3Vyc29yOnBvaW50ZXJ9LnZ1ZS1jb2xvcl9fY29tcGFjdF9fY29sb3ItaXRlbS0td2hpdGV7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggI2RkZH0udnVlLWNvbG9yX19jb21wYWN0X19jb2xvci1pdGVtLS13aGl0ZSAudnVlLWNvbG9yX19jb21wYWN0X19kb3R7YmFja2dyb3VuZDojMDAwfS52dWUtY29sb3JfX2NvbXBhY3RfX2RvdHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NXB4O3JpZ2h0OjVweDtib3R0b206NXB4O2xlZnQ6NXB4O2JvcmRlci1yYWRpdXM6NTAlO29wYWNpdHk6MTtiYWNrZ3JvdW5kOiNmZmZ9LnZ1ZS1jb2xvcl9fY29tcGFjdF9fZmllbGRze2Rpc3BsYXk6ZmxleDtwYWRkaW5nLWJvdHRvbTo2cHg7cGFkZGluZy1yaWdodDo1cHg7cG9zaXRpb246cmVsYXRpdmV9LnZ1ZS1jb2xvcl9fY29tcGFjdF9fZmllbGRzIC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19pbnB1dHt3aWR0aDo3MCU7cGFkZGluZy1sZWZ0OjMwJTtiYWNrZ3JvdW5kOm5vbmU7Zm9udC1zaXplOjEycHg7Y29sb3I6IzMzMztoZWlnaHQ6MTZweH0udnVlLWNvbG9yX19jb21wYWN0X19maWVsZHMgLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2xhYmVse3Bvc2l0aW9uOmFic29sdXRlO3RvcDozcHg7bGVmdDowO2xpbmUtaGVpZ2h0OjE2cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiM5OTl9LnZ1ZS1jb2xvcl9fY29tcGFjdF9fcGljay1jb2xvcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NnB4O2xlZnQ6NXB4O2hlaWdodDo5cHg7d2lkdGg6OXB4fS52dWUtY29sb3JfX2NvbXBhY3RfX2NvbC0ze2ZsZXg6MX0udnVlX2NvbG9yX19jb21wYWN0X19jb2wtaGV4e2ZsZXg6Mn0udnVlX2NvbG9yX19jb21wYWN0X19jb2wtaGV4IC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19pbnB1dHt3aWR0aDo4MCU7cGFkZGluZy1sZWZ0OjIwJX0udnVlX2NvbG9yX19jb21wYWN0X19jb2wtaGV4IC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19sYWJlbHtkaXNwbGF5Om5vbmV9XCIsXCJcIl0pfSxmdW5jdGlvbihlLG8sdCl7bz1lLmV4cG9ydHM9dCgxKSgpLG8ucHVzaChbZS5pZCxcIi52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0e3Bvc2l0aW9uOnJlbGF0aXZlfS52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19pbnB1dHtwYWRkaW5nOjA7Ym9yZGVyOjA7b3V0bGluZTpub25lfS52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19sYWJlbHt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplfVwiLFwiXCJdKX0sZnVuY3Rpb24oZSxvLHQpe289ZS5leHBvcnRzPXQoMSkoKSxvLnB1c2goW2UuaWQsXCIudnVlLWNvbG9yX19jLWh1ZXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtib3JkZXItcmFkaXVzOjJweH0udnVlLWNvbG9yX19jLWh1ZS0taG9yaXpvbnRhbHtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZyxyZWQgMCwjZmYwIDE3JSwjMGYwIDMzJSwjMGZmIDUwJSwjMDBmIDY3JSwjZjBmIDgzJSxyZWQpfS52dWUtY29sb3JfX2MtaHVlLS12ZXJ0aWNhbHtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgwZGVnLHJlZCAwLCNmZjAgMTclLCMwZjAgMzMlLCMwZmYgNTAlLCMwMGYgNjclLCNmMGYgODMlLHJlZCl9LnZ1ZS1jb2xvcl9fYy1odWVfX2NvbnRhaW5lcntjdXJzb3I6cG9pbnRlcjttYXJnaW46MCAycHg7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjEwMCV9LnZ1ZS1jb2xvcl9fYy1odWVfX3BvaW50ZXJ7ei1pbmRleDoyO3Bvc2l0aW9uOmFic29sdXRlfS52dWUtY29sb3JfX2MtaHVlX19waWNrZXJ7Y3Vyc29yOnBvaW50ZXI7bWFyZ2luLXRvcDoxcHg7d2lkdGg6NHB4O2JvcmRlci1yYWRpdXM6MXB4O2hlaWdodDo4cHg7Ym94LXNoYWRvdzowIDAgMnB4IHJnYmEoMCwwLDAsLjYpO2JhY2tncm91bmQ6I2ZmZjt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMnB4KX1cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fc2F0dXJhdGlvbiwudnVlLWNvbG9yX19zYXR1cmF0aW9uLS1ibGFjaywudnVlLWNvbG9yX19zYXR1cmF0aW9uLS13aGl0ZXtjdXJzb3I6cG9pbnRlcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MH0udnVlLWNvbG9yX19zYXR1cmF0aW9uLS13aGl0ZXtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZywjZmZmLGhzbGEoMCwwJSwxMDAlLDApKX0udnVlLWNvbG9yX19zYXR1cmF0aW9uLS1ibGFja3tiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgwZGVnLCMwMDAsdHJhbnNwYXJlbnQpfS52dWUtY29sb3JfX3NhdHVyYXRpb24tLXBvaW50ZXJ7Y3Vyc29yOnBvaW50ZXI7cG9zaXRpb246YWJzb2x1dGV9LnZ1ZS1jb2xvcl9fc2F0dXJhdGlvbi0tY2lyY2xle2N1cnNvcjpoZWFkO3dpZHRoOjRweDtoZWlnaHQ6NHB4O2JveC1zaGFkb3c6MCAwIDAgMS41cHggI2ZmZixpbnNldCAwIDAgMXB4IDFweCByZ2JhKDAsMCwwLC4zKSwwIDAgMXB4IDJweCByZ2JhKDAsMCwwLC40KTtib3JkZXItcmFkaXVzOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC0ycHgsLTJweCl9XCIsXCJcIl0pfSxmdW5jdGlvbihlLG8sdCl7bz1lLmV4cG9ydHM9dCgxKSgpLG8ucHVzaChbZS5pZCxcIi52dWUtY29sb3JfX21hdGVyaWFse3dpZHRoOjk4cHg7aGVpZ2h0Ojk4cHg7cGFkZGluZzoxNnB4O2ZvbnQtZmFtaWx5OlJvYm90bztwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXItcmFkaXVzOjJweDtib3gtc2hhZG93OjAgMnB4IDEwcHggcmdiYSgwLDAsMCwuMTIpLDAgMnB4IDVweCByZ2JhKDAsMCwwLC4xNik7YmFja2dyb3VuZC1jb2xvcjojZmZmfS52dWUtY29sb3JfX21hdGVyaWFsIC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19pbnB1dHt3aWR0aDoxMDAlO21hcmdpbi10b3A6MTJweDtmb250LXNpemU6MTVweDtjb2xvcjojMzMzO2hlaWdodDozMHB4fS52dWUtY29sb3JfX21hdGVyaWFsIC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19sYWJlbHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7Zm9udC1zaXplOjExcHg7Y29sb3I6Izk5OTt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplfS52dWUtY29sb3JfX21hdGVyaWFsX19oZXh7Ym9yZGVyLWJvdHRvbS13aWR0aDoycHg7Ym9yZGVyLWJvdHRvbS1zdHlsZTpzb2xpZH0udnVlLWNvbG9yX19tYXRlcmlhbF9fc3BsaXR7ZGlzcGxheTpmbGV4O21hcmdpbi1yaWdodDotMTBweDtwYWRkaW5nLXRvcDoxMXB4fS52dWUtY29sb3JfX21hdGVyaWFsX190aGlyZHtmbGV4OjE7cGFkZGluZy1yaWdodDoxMHB4fVwiLFwiXCJdKX0sZnVuY3Rpb24oZSxvLHQpe289ZS5leHBvcnRzPXQoMSkoKSxvLnB1c2goW2UuaWQsXCIudnVlLWNvbG9yX19zbGlkZXJ7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6NDEwcHh9LnZ1ZS1jb2xvcl9fc2xpZGVyX19odWUtd2FycHtoZWlnaHQ6MTJweDtwb3NpdGlvbjpyZWxhdGl2ZX0udnVlLWNvbG9yX19zbGlkZXJfX2h1ZS13YXJwIC52dWUtY29sb3JfX2MtaHVlX19waWNrZXJ7d2lkdGg6MTRweDtoZWlnaHQ6MTRweDtib3JkZXItcmFkaXVzOjZweDt0cmFuc2Zvcm06dHJhbnNsYXRlKC03cHgsLTJweCk7YmFja2dyb3VuZC1jb2xvcjojZjhmOGY4O2JveC1zaGFkb3c6MCAxcHggNHB4IDAgcmdiYSgwLDAsMCwuMzcpfS52dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoZXN7ZGlzcGxheTpmbGV4O21hcmdpbi10b3A6MjBweH0udnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaHttYXJnaW4tcmlnaHQ6MXB4O2ZsZXg6MTt3aWR0aDoyMCV9LnZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2g6Zmlyc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjFweH0udnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaDpmaXJzdC1jaGlsZCAudnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaC1waWNrZXJ7Ym9yZGVyLXJhZGl1czoycHggMCAwIDJweH0udnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaDpsYXN0LWNoaWxke21hcmdpbi1yaWdodDowfS52dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoOmxhc3QtY2hpbGQgLnZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2gtcGlja2Vye2JvcmRlci1yYWRpdXM6MCAycHggMnB4IDB9LnZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2gtcGlja2Vye2N1cnNvcjpwb2ludGVyO2hlaWdodDoxMnB4fS52dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoLXBpY2tlci0tYWN0aXZle3RyYW5zZm9ybTpzY2FsZVkoMS44KTtib3JkZXItcmFkaXVzOjMuNnB4LzJweH1cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fc3dhdGNoZXN7d2lkdGg6MzIwcHg7aGVpZ2h0OjI0MHB4O292ZXJmbG93LXk6c2Nyb2xsO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3gtc2hhZG93OjAgMnB4IDEwcHggcmdiYSgwLDAsMCwuMTIpLDAgMnB4IDVweCByZ2JhKDAsMCwwLC4xNil9LnZ1ZS1jb2xvcl9fc3dhdGNoZXNfX2JveHtwYWRkaW5nOjE2cHggMCA2cHggMTZweDtvdmVyZmxvdzpoaWRkZW59LnZ1ZS1jb2xvcl9fc3dhdGNoZXNfX2NvbG9yLWdyb3Vwe3BhZGRpbmctYm90dG9tOjEwcHg7d2lkdGg6NDBweDtmbG9hdDpsZWZ0O21hcmdpbi1yaWdodDoxMHB4fS52dWUtY29sb3JfX3N3YXRjaGVzX19jb2xvci1pdHt3aWR0aDo0MHB4O2hlaWdodDoyNHB4O2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQ6Izg4MGU0ZjttYXJnaW4tYm90dG9tOjFweDtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLXJhZGl1czoycHggMnB4IDAgMH0udnVlLWNvbG9yX19zd2F0Y2hlc19fcGlja3tmaWxsOiNmZmY7bWFyZ2luLWxlZnQ6OHB4O2Rpc3BsYXk6YmxvY2t9XCIsXCJcIl0pfSxmdW5jdGlvbihlLG8sdCl7bz1lLmV4cG9ydHM9dCgxKSgpLG8ucHVzaChbZS5pZCwnLnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcHtiYWNrZ3JvdW5kOiNkY2RjZGM7Ym9yZGVyLXJhZGl1czo0cHg7Ym94LXNoYWRvdzowIDAgMCAxcHggcmdiYSgwLDAsMCwuMjUpLDAgOHB4IDE2cHggcmdiYSgwLDAsMCwuMTUpO2JveC1zaXppbmc6aW5pdGlhbDt3aWR0aDo1MTNweDtmb250LWZhbWlseTpSb2JvdG99LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9faGVhZHtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYwZjAsI2Q0ZDRkNCk7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2IxYjFiMTtib3gtc2hhZG93Omluc2V0IDAgMXB4IDAgMCBoc2xhKDAsMCUsMTAwJSwuMiksaW5zZXQgMCAtMXB4IDAgMCByZ2JhKDAsMCwwLC4wMik7aGVpZ2h0OjIzcHg7bGluZS1oZWlnaHQ6MjRweDtib3JkZXItcmFkaXVzOjRweCA0cHggMCAwO2ZvbnQtc2l6ZToxM3B4O2NvbG9yOiM0ZDRkNGQ7dGV4dC1hbGlnbjpjZW50ZXJ9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fYm9keXtwYWRkaW5nOjE1cHg7ZGlzcGxheTpmbGV4fS52dWUtY29sb3JzX19waG90b3Nob3BfX3NhdHVyYXRpb24td3JhcHt3aWR0aDoyNTZweDtoZWlnaHQ6MjU2cHg7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyOjJweCBzb2xpZCAjYjNiM2IzO2JvcmRlci1ib3R0b206MnB4IHNvbGlkICNmMGYwZjA7b3ZlcmZsb3c6aGlkZGVufS52dWUtY29sb3JzX19waG90b3Nob3BfX3NhdHVyYXRpb24td3JhcCAudnVlLWNvbG9yX19zYXR1cmF0aW9uLS1jaXJjbGV7d2lkdGg6MTJweDtoZWlnaHQ6MTJweH0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtd3JhcHtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MjU2cHg7d2lkdGg6MTlweDttYXJnaW4tbGVmdDoxMHB4O2JvcmRlcjoycHggc29saWQgI2IzYjNiMztib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZjBmMGYwfS52dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS1wb2ludGVye3Bvc2l0aW9uOnJlbGF0aXZlfS52dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS1wb2ludGVyLS1sZWZ0LC52dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS1wb2ludGVyLS1yaWdodHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDowO2hlaWdodDowO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6NXB4IDAgNXB4IDhweDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzU1NX0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtcG9pbnRlci0tbGVmdDphZnRlciwudnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtcG9pbnRlci0tcmlnaHQ6YWZ0ZXJ7Y29udGVudDpcIlwiO3dpZHRoOjA7aGVpZ2h0OjA7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDo0cHggMCA0cHggNnB4O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxcHg7bGVmdDoxcHg7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtOHB4LC01cHgpfS52dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS1wb2ludGVyLS1sZWZ0e3RyYW5zZm9ybTp0cmFuc2xhdGUoLTEzcHgsLTRweCl9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9faHVlLXBvaW50ZXItLXJpZ2h0e3RyYW5zZm9ybTp0cmFuc2xhdGUoMjBweCwtNHB4KSByb3RhdGUoMTgwZGVnKX0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19jb250cm9sc3t3aWR0aDoxODBweDttYXJnaW4tbGVmdDoxMHB4O2Rpc3BsYXk6ZmxleH0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19hY3Rpb25ze21hcmdpbi1sZWZ0OjIwcHg7ZmxleDoxfS52dWUtY29sb3JzX19waG90b3Nob3BfX2FjLWJ0bntjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmZmYsI2U2ZTZlNik7Ym9yZGVyOjFweCBzb2xpZCAjODc4Nzg3O2JvcmRlci1yYWRpdXM6MnB4O2hlaWdodDoyMHB4O2JveC1zaGFkb3c6MCAxcHggMCAwICNlYWVhZWE7Zm9udC1zaXplOjE0cHg7Y29sb3I6IzAwMDtsaW5lLWhlaWdodDoyMHB4O3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi1ib3R0b206MTBweH0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19wcmV2aWV3c3t3aWR0aDo2MHB4fS52dWUtY29sb3JzX19waG90b3Nob3BfX3ByZXZpZXdzX19zd2F0Y2hlc3tib3JkZXI6MXB4IHNvbGlkICNiM2IzYjM7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2YwZjBmMDttYXJnaW4tYm90dG9tOjJweDttYXJnaW4tdG9wOjFweH0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19wcmV2aWV3c19fcHItY29sb3J7aGVpZ2h0OjM0cHg7Ym94LXNoYWRvdzppbnNldCAxcHggMCAwICMwMDAsaW5zZXQgLTFweCAwIDAgIzAwMCxpbnNldCAwIDFweCAwICMwMDB9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3NfX2xhYmVse2ZvbnQtc2l6ZToxNHB4O2NvbG9yOiMwMDA7dGV4dC1hbGlnbjpjZW50ZXJ9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fZmllbGRze3BhZGRpbmctdG9wOjVweDtwYWRkaW5nLWJvdHRvbTo5cHg7d2lkdGg6ODBweDtwb3NpdGlvbjpyZWxhdGl2ZX0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19maWVsZHMgLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2lucHV0e21hcmdpbi1sZWZ0OjQwJTt3aWR0aDo0MCU7aGVpZ2h0OjE4cHg7Ym9yZGVyOjFweCBzb2xpZCAjODg4O2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjEpLDAgMXB4IDAgMCAjZWNlY2VjO21hcmdpbi1ib3R0b206NXB4O2ZvbnQtc2l6ZToxM3B4O3BhZGRpbmctbGVmdDozcHg7bWFyZ2luLXJpZ2h0OjEwcHh9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fZmllbGRzIC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19sYWJlbHt0b3A6MDtsZWZ0OjA7d2lkdGg6MzRweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Zm9udC1zaXplOjEzcHg7aGVpZ2h0OjE4cHg7bGluZS1oZWlnaHQ6MjJweDtwb3NpdGlvbjphYnNvbHV0ZX0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19maWVsZHNfX2RpdmlkZXJ7aGVpZ2h0OjVweH0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19maWVsZHNfX2hleCAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9faW5wdXR7bWFyZ2luLWxlZnQ6MjAlO3dpZHRoOjgwJTtoZWlnaHQ6MThweDtib3JkZXI6MXB4IHNvbGlkICM4ODg7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMSksMCAxcHggMCAwICNlY2VjZWM7bWFyZ2luLWJvdHRvbTo2cHg7Zm9udC1zaXplOjEzcHg7cGFkZGluZy1sZWZ0OjNweH0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19maWVsZHNfX2hleCAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9fbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjE0cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2ZvbnQtc2l6ZToxM3B4O2hlaWdodDoxOHB4O2xpbmUtaGVpZ2h0OjIycHh9JyxcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fc2tldGNoe3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjIwMHB4O3BhZGRpbmc6MTBweCAxMHB4IDA7Ym94LXNpemluZzppbml0aWFsO2JhY2tncm91bmQ6I2ZmZjtib3JkZXItcmFkaXVzOjRweDtib3gtc2hhZG93OjAgMCAwIDFweCByZ2JhKDAsMCwwLC4xNSksMCA4cHggMTZweCByZ2JhKDAsMCwwLC4xNSl9LnZ1ZS1jb2xvcl9fc2tldGNoX19zYXR1cmF0aW9uLXdyYXB7d2lkdGg6MTAwJTtwYWRkaW5nLWJvdHRvbTo3NSU7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVufS52dWUtY29sb3JfX3NrZXRjaF9fY29udHJvbHN7ZGlzcGxheTpmbGV4fS52dWUtY29sb3JfX3NrZXRjaF9fc2xpZGVyc3twYWRkaW5nOjRweCAwO2ZsZXg6MX0udnVlLWNvbG9yX19za2V0Y2hfX3NsaWRlcnMgLnZ1ZS1jb2xvcl9fYy1hbHBoYV9fZ3JhZGllbnQsLnZ1ZS1jb2xvcl9fc2tldGNoX19zbGlkZXJzIC52dWUtY29sb3JfX2MtaHVle2JvcmRlci1yYWRpdXM6MnB4fS52dWUtY29sb3JfX3NrZXRjaF9faHVlLXdyYXB7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjEwcHh9LnZ1ZS1jb2xvcl9fc2tldGNoX19hbHBoYS13cmFwe3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMHB4O21hcmdpbi10b3A6NHB4O292ZXJmbG93OmhpZGRlbn0udnVlLWNvbG9yX19za2V0Y2hfX2NvbG9yLXdyYXB7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4tdG9wOjRweDttYXJnaW4tbGVmdDo0cHg7Ym9yZGVyLXJhZGl1czozcHh9LnZ1ZS1jb2xvcl9fc2tldGNoX19hY3RpdmUtY29sb3J7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7Ym9yZGVyLXJhZGl1czoycHg7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggcmdiYSgwLDAsMCwuMTUpLGluc2V0IDAgMCA0cHggcmdiYSgwLDAsMCwuMjUpO3otaW5kZXg6Mn0udnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxke2Rpc3BsYXk6ZmxleDtwYWRkaW5nLXRvcDo0cHh9LnZ1ZS1jb2xvcl9fc2tldGNoX19maWVsZCAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9faW5wdXR7d2lkdGg6ODAlO3BhZGRpbmc6NHB4IDEwJSAzcHg7Ym9yZGVyOm5vbmU7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggI2NjYztmb250LXNpemU6MTFweH0udnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxkIC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19sYWJlbHtkaXNwbGF5OmJsb2NrO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZToxMXB4O2NvbG9yOiMyMjI7cGFkZGluZy10b3A6M3B4O3BhZGRpbmctYm90dG9tOjRweDt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplfS52dWUtY29sb3JfX3NrZXRjaF9fZmllbGQtLXNpbmdsZXtmbGV4OjE7cGFkZGluZy1sZWZ0OjZweH0udnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxkLS1kb3VibGV7ZmxleDoyfS52dWUtY29sb3JfX3NrZXRjaF9fcHJlc2V0c3ttYXJnaW4tcmlnaHQ6LTEwcHg7bWFyZ2luLWxlZnQ6LTEwcHg7cGFkZGluZy1sZWZ0OjEwcHg7cGFkZGluZy10b3A6MTBweDtib3JkZXItdG9wOjFweCBzb2xpZCAjZWVlfS52dWUtY29sb3JfX3NrZXRjaF9fcHJlc2V0cy1jb2xvcntib3JkZXItcmFkaXVzOjNweDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luOjAgMTBweCAxMHB4IDA7dmVydGljYWwtYWxpZ246dG9wO2N1cnNvcjpwb2ludGVyO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggcmdiYSgwLDAsMCwuMTUpfVwiLFwiXCJdKX0sZnVuY3Rpb24oZSxvLHQpe289ZS5leHBvcnRzPXQoMSkoKSxvLnB1c2goW2UuaWQsXCIudnVlLWNvbG9yX19jaHJvbWV7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6MnB4O2JveC1zaGFkb3c6MCAwIDJweCByZ2JhKDAsMCwwLC4zKSwwIDRweCA4cHggcmdiYSgwLDAsMCwuMyk7Ym94LXNpemluZzppbml0aWFsO3dpZHRoOjIyNXB4O2ZvbnQtZmFtaWx5Ok1lbmxvO2JhY2tncm91bmQtY29sb3I6I2ZmZn0udnVlLWNvbG9yX19jaHJvbWVfX2NvbnRyb2xze2Rpc3BsYXk6ZmxleH0udnVlLWNvbG9yX19jaHJvbWVfX2NvbG9yLXdyYXB7d2lkdGg6MzJweH0udnVlLWNvbG9yX19jaHJvbWVfX2FjdGl2ZS1jb2xvcnttYXJnaW4tdG9wOjZweDt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JvcmRlci1yYWRpdXM6OHB4O3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbn0udnVlLWNvbG9yX19jaHJvbWVfX3NsaWRlcnN7ZmxleDoxfS52dWUtY29sb3JfX2Nocm9tZV9fc2xpZGVycyAudnVlLWNvbG9yX19jLWFscGhhX19ncmFkaWVudCwudnVlLWNvbG9yX19jaHJvbWVfX3NsaWRlcnMgLnZ1ZS1jb2xvcl9fYy1odWV7Ym9yZGVyLXJhZGl1czoycHh9LnZ1ZS1jb2xvcl9fY2hyb21lX19zbGlkZXJzIC52dWUtY29sb3JfX2MtYWxwaGFfX3BpY2tlciwudnVlLWNvbG9yX19jaHJvbWVfX3NsaWRlcnMgLnZ1ZS1jb2xvcl9fYy1odWVfX3BpY2tlcnt3aWR0aDoxMnB4O2hlaWdodDoxMnB4O2JvcmRlci1yYWRpdXM6NnB4O3RyYW5zZm9ybTp0cmFuc2xhdGUoLTZweCwtMnB4KTtiYWNrZ3JvdW5kLWNvbG9yOiNmOGY4Zjg7Ym94LXNoYWRvdzowIDFweCA0cHggMCByZ2JhKDAsMCwwLC4zNyl9LnZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZHMtd3JhcHtwYWRkaW5nLXRvcDoxNnB4O2Rpc3BsYXk6ZmxleH0udnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkc3tkaXNwbGF5OmZsZXg7bWFyZ2luLWxlZnQ6LTZweDtmbGV4OjF9LnZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZHtwYWRkaW5nLWxlZnQ6NnB4O3dpZHRoOjEwMCV9LnZ1ZS1jb2xvcl9fY2hyb21lX190b2dnbGUtYnRue3dpZHRoOjMycHg7dGV4dC1hbGlnbjpyaWdodDtwb3NpdGlvbjpyZWxhdGl2ZX0udnVlLWNvbG9yX19jaHJvbWVfX2ljb257bWFyZ2luLXJpZ2h0Oi00cHg7bWFyZ2luLXRvcDoxMnB4O2N1cnNvcjpwb2ludGVyO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6Mn0udnVlLWNvbG9yX19jaHJvbWVfX2ljb24taGlnaGxpZ2h0e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjI0cHg7aGVpZ2h0OjI4cHg7YmFja2dyb3VuZDojZWVlO2JvcmRlci1yYWRpdXM6NHB4O3RvcDoxMHB4O2xlZnQ6MTJweH0udnVlLWNvbG9yX19jaHJvbWVfX2h1ZS13cmFwe21hcmdpbi1ib3R0b206OHB4fS52dWUtY29sb3JfX2Nocm9tZV9fYWxwaGEtd3JhcCwudnVlLWNvbG9yX19jaHJvbWVfX2h1ZS13cmFwe3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMHB4fS52dWUtY29sb3JfX2Nocm9tZV9fY2hyb21lLWJvZHl7cGFkZGluZzoxNnB4IDE2cHggMTJweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnZ1ZS1jb2xvcl9fY2hyb21lX19zYXR1cmF0aW9uLXdyYXB7d2lkdGg6MTAwJTtwYWRkaW5nLWJvdHRvbTo1NSU7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJhZGl1czoycHggMnB4IDAgMDtvdmVyZmxvdzpoaWRkZW59LnZ1ZS1jb2xvcl9fY2hyb21lX19zYXR1cmF0aW9uLXdyYXAgLnZ1ZS1jb2xvcl9fc2F0dXJhdGlvbi0tY2lyY2xle3dpZHRoOjEycHg7aGVpZ2h0OjEycHh9LnZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZHMgLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2lucHV0e2ZvbnQtc2l6ZToxMXB4O2NvbG9yOiMzMzM7d2lkdGg6MTAwJTtib3JkZXItcnJhZGl1czoycHg7Ym9yZGVyOm5vbmU7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggI2RhZGFkYTtoZWlnaHQ6MjFweDt0ZXh0LWFsaWduOmNlbnRlcn0udnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkcyAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9fbGFiZWx7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2ZvbnQtc2l6ZToxMXB4O2xpbmUtaGVpZ2h0OjExcHg7Y29sb3I6Izk2OTY5Njt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6MTJweH1cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fYy1hbHBoYSwudnVlLWNvbG9yX19jLWFscGhhX19jaGVja2JvYXJkLXdyYXB7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjB9LnZ1ZS1jb2xvcl9fYy1hbHBoYV9fY2hlY2tib2FyZC13cmFwe292ZXJmbG93OmhpZGRlbn0udnVlLWNvbG9yX19jLWFscGhhX19ncmFkaWVudHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MH0udnVlLWNvbG9yX19jLWFscGhhX19jb250YWluZXJ7Y3Vyc29yOnBvaW50ZXI7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyO2hlaWdodDoxMDAlO21hcmdpbjowIDNweH0udnVlLWNvbG9yX19jLWFscGhhX19wb2ludGVye3otaW5kZXg6Mjtwb3NpdGlvbjphYnNvbHV0ZX0udnVlLWNvbG9yX19jLWFscGhhX19waWNrZXJ7Y3Vyc29yOnBvaW50ZXI7d2lkdGg6NHB4O2JvcmRlci1yYWRpdXM6MXB4O2hlaWdodDo4cHg7Ym94LXNoYWRvdzowIDAgMnB4IHJnYmEoMCwwLDAsLjYpO2JhY2tncm91bmQ6I2ZmZjttYXJnaW4tdG9wOjFweDt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMnB4KX1cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fYy1jaGVja2VyYm9hcmR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjB9XCIsXCJcIl0pfSxmdW5jdGlvbihlLG8peyhmdW5jdGlvbihvKXtmdW5jdGlvbiB0KGUsbyx0KXtmdW5jdGlvbiByKG8pe3ZhciB0PXAscj12O3JldHVybiBwPXY9dm9pZCAwLGs9byxiPWUuYXBwbHkocix0KX1mdW5jdGlvbiBpKGUpe3JldHVybiBrPWUsbT1zZXRUaW1lb3V0KHUsbyksRj9yKGUpOmJ9ZnVuY3Rpb24gbihlKXt2YXIgdD1lLXgscj1lLWssYT1vLXQ7cmV0dXJuIEE/QyhhLGctcik6YX1mdW5jdGlvbiBjKGUpe3ZhciB0PWUteCxyPWUtaztyZXR1cm4gdm9pZCAwPT09eHx8dD49b3x8dDwwfHxBJiZyPj1nfWZ1bmN0aW9uIHUoKXt2YXIgZT15KCk7cmV0dXJuIGMoZSk/ZChlKTp2b2lkKG09c2V0VGltZW91dCh1LG4oZSkpKX1mdW5jdGlvbiBkKGUpe3JldHVybiBtPXZvaWQgMCxSJiZwP3IoZSk6KHA9dj12b2lkIDAsYil9ZnVuY3Rpb24gaCgpe3ZvaWQgMCE9PW0mJmNsZWFyVGltZW91dChtKSxrPTAscD14PXY9bT12b2lkIDB9ZnVuY3Rpb24gZigpe3JldHVybiB2b2lkIDA9PT1tP2I6ZCh5KCkpfWZ1bmN0aW9uIF8oKXt2YXIgZT15KCksdD1jKGUpO2lmKHA9YXJndW1lbnRzLHY9dGhpcyx4PWUsdCl7aWYodm9pZCAwPT09bSlyZXR1cm4gaSh4KTtpZihBKXJldHVybiBtPXNldFRpbWVvdXQodSxvKSxcbnIoeCl9cmV0dXJuIHZvaWQgMD09PW0mJihtPXNldFRpbWVvdXQodSxvKSksYn12YXIgcCx2LGcsYixtLHgsaz0wLEY9ITEsQT0hMSxSPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihsKTtyZXR1cm4gbz1zKG8pfHwwLGEodCkmJihGPSEhdC5sZWFkaW5nLEE9XCJtYXhXYWl0XCJpbiB0LGc9QT93KHModC5tYXhXYWl0KXx8MCxvKTpnLFI9XCJ0cmFpbGluZ1wiaW4gdD8hIXQudHJhaWxpbmc6UiksXy5jYW5jZWw9aCxfLmZsdXNoPWYsX31mdW5jdGlvbiByKGUsbyxyKXt2YXIgaT0hMCxuPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihsKTtyZXR1cm4gYShyKSYmKGk9XCJsZWFkaW5nXCJpbiByPyEhci5sZWFkaW5nOmksbj1cInRyYWlsaW5nXCJpbiByPyEhci50cmFpbGluZzpuKSx0KGUsbyx7bGVhZGluZzppLG1heFdhaXQ6byx0cmFpbGluZzpufSl9ZnVuY3Rpb24gYShlKXt2YXIgbz10eXBlb2YgZTtyZXR1cm4hIWUmJihcIm9iamVjdFwiPT1vfHxcImZ1bmN0aW9uXCI9PW8pfWZ1bmN0aW9uIGkoZSl7cmV0dXJuISFlJiZcIm9iamVjdFwiPT10eXBlb2YgZX1mdW5jdGlvbiBuKGUpe3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiBlfHxpKGUpJiZ4LmNhbGwoZSk9PXV9ZnVuY3Rpb24gcyhlKXtpZihcIm51bWJlclwiPT10eXBlb2YgZSlyZXR1cm4gZTtpZihuKGUpKXJldHVybiBjO2lmKGEoZSkpe3ZhciBvPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUudmFsdWVPZj9lLnZhbHVlT2YoKTplO2U9YShvKT9vK1wiXCI6b31pZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gMD09PWU/ZTorZTtlPWUucmVwbGFjZShkLFwiXCIpO3ZhciB0PWYudGVzdChlKTtyZXR1cm4gdHx8Xy50ZXN0KGUpP3AoZS5zbGljZSgyKSx0PzI6OCk6aC50ZXN0KGUpP2M6K2V9dmFyIGw9XCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIsYz1OYU4sdT1cIltvYmplY3QgU3ltYm9sXVwiLGQ9L15cXHMrfFxccyskL2csaD0vXlstK10weFswLTlhLWZdKyQvaSxmPS9eMGJbMDFdKyQvaSxfPS9eMG9bMC03XSskL2kscD1wYXJzZUludCx2PVwib2JqZWN0XCI9PXR5cGVvZiBvJiZvJiZvLk9iamVjdD09PU9iamVjdCYmbyxnPVwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixiPXZ8fGd8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSxtPU9iamVjdC5wcm90b3R5cGUseD1tLnRvU3RyaW5nLHc9TWF0aC5tYXgsQz1NYXRoLm1pbix5PWZ1bmN0aW9uKCl7cmV0dXJuIGIuRGF0ZS5ub3coKX07ZS5leHBvcnRzPXJ9KS5jYWxsKG8sZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKSl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhLGk7IWZ1bmN0aW9uKHQsbil7YT1bXSxyPW4saT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByP3IuYXBwbHkobyxhKTpyLCEodm9pZCAwIT09aSYmKGUuZXhwb3J0cz1pKSl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm57cmVkOns1MDpcIiNmZmViZWVcIiwxMDA6XCIjZmZjZGQyXCIsMjAwOlwiI2VmOWE5YVwiLDMwMDpcIiNlNTczNzNcIiw0MDA6XCIjZWY1MzUwXCIsNTAwOlwiI2Y0NDMzNlwiLDYwMDpcIiNlNTM5MzVcIiw3MDA6XCIjZDMyZjJmXCIsODAwOlwiI2M2MjgyOFwiLDkwMDpcIiNiNzFjMWNcIixhMTAwOlwiI2ZmOGE4MFwiLGEyMDA6XCIjZmY1MjUyXCIsYTQwMDpcIiNmZjE3NDRcIixhNzAwOlwiI2Q1MDAwMFwifSxwaW5rOns1MDpcIiNmY2U0ZWNcIiwxMDA6XCIjZjhiYmQwXCIsMjAwOlwiI2Y0OGZiMVwiLDMwMDpcIiNmMDYyOTJcIiw0MDA6XCIjZWM0MDdhXCIsNTAwOlwiI2U5MWU2M1wiLDYwMDpcIiNkODFiNjBcIiw3MDA6XCIjYzIxODViXCIsODAwOlwiI2FkMTQ1N1wiLDkwMDpcIiM4ODBlNGZcIixhMTAwOlwiI2ZmODBhYlwiLGEyMDA6XCIjZmY0MDgxXCIsYTQwMDpcIiNmNTAwNTdcIixhNzAwOlwiI2M1MTE2MlwifSxwdXJwbGU6ezUwOlwiI2YzZTVmNVwiLDEwMDpcIiNlMWJlZTdcIiwyMDA6XCIjY2U5M2Q4XCIsMzAwOlwiI2JhNjhjOFwiLDQwMDpcIiNhYjQ3YmNcIiw1MDA6XCIjOWMyN2IwXCIsNjAwOlwiIzhlMjRhYVwiLDcwMDpcIiM3YjFmYTJcIiw4MDA6XCIjNmExYjlhXCIsOTAwOlwiIzRhMTQ4Y1wiLGExMDA6XCIjZWE4MGZjXCIsYTIwMDpcIiNlMDQwZmJcIixhNDAwOlwiI2Q1MDBmOVwiLGE3MDA6XCIjYWEwMGZmXCJ9LGRlZXBQdXJwbGU6ezUwOlwiI2VkZTdmNlwiLDEwMDpcIiNkMWM0ZTlcIiwyMDA6XCIjYjM5ZGRiXCIsMzAwOlwiIzk1NzVjZFwiLDQwMDpcIiM3ZTU3YzJcIiw1MDA6XCIjNjczYWI3XCIsNjAwOlwiIzVlMzViMVwiLDcwMDpcIiM1MTJkYThcIiw4MDA6XCIjNDUyN2EwXCIsOTAwOlwiIzMxMWI5MlwiLGExMDA6XCIjYjM4OGZmXCIsYTIwMDpcIiM3YzRkZmZcIixhNDAwOlwiIzY1MWZmZlwiLGE3MDA6XCIjNjIwMGVhXCJ9LGluZGlnbzp7NTA6XCIjZThlYWY2XCIsMTAwOlwiI2M1Y2FlOVwiLDIwMDpcIiM5ZmE4ZGFcIiwzMDA6XCIjNzk4NmNiXCIsNDAwOlwiIzVjNmJjMFwiLDUwMDpcIiMzZjUxYjVcIiw2MDA6XCIjMzk0OWFiXCIsNzAwOlwiIzMwM2Y5ZlwiLDgwMDpcIiMyODM1OTNcIiw5MDA6XCIjMWEyMzdlXCIsYTEwMDpcIiM4YzllZmZcIixhMjAwOlwiIzUzNmRmZVwiLGE0MDA6XCIjM2Q1YWZlXCIsYTcwMDpcIiMzMDRmZmVcIn0sYmx1ZTp7NTA6XCIjZTNmMmZkXCIsMTAwOlwiI2JiZGVmYlwiLDIwMDpcIiM5MGNhZjlcIiwzMDA6XCIjNjRiNWY2XCIsNDAwOlwiIzQyYTVmNVwiLDUwMDpcIiMyMTk2ZjNcIiw2MDA6XCIjMWU4OGU1XCIsNzAwOlwiIzE5NzZkMlwiLDgwMDpcIiMxNTY1YzBcIiw5MDA6XCIjMGQ0N2ExXCIsYTEwMDpcIiM4MmIxZmZcIixhMjAwOlwiIzQ0OGFmZlwiLGE0MDA6XCIjMjk3OWZmXCIsYTcwMDpcIiMyOTYyZmZcIn0sbGlnaHRCbHVlOns1MDpcIiNlMWY1ZmVcIiwxMDA6XCIjYjNlNWZjXCIsMjAwOlwiIzgxZDRmYVwiLDMwMDpcIiM0ZmMzZjdcIiw0MDA6XCIjMjliNmY2XCIsNTAwOlwiIzAzYTlmNFwiLDYwMDpcIiMwMzliZTVcIiw3MDA6XCIjMDI4OGQxXCIsODAwOlwiIzAyNzdiZFwiLDkwMDpcIiMwMTU3OWJcIixhMTAwOlwiIzgwZDhmZlwiLGEyMDA6XCIjNDBjNGZmXCIsYTQwMDpcIiMwMGIwZmZcIixhNzAwOlwiIzAwOTFlYVwifSxjeWFuOns1MDpcIiNlMGY3ZmFcIiwxMDA6XCIjYjJlYmYyXCIsMjAwOlwiIzgwZGVlYVwiLDMwMDpcIiM0ZGQwZTFcIiw0MDA6XCIjMjZjNmRhXCIsNTAwOlwiIzAwYmNkNFwiLDYwMDpcIiMwMGFjYzFcIiw3MDA6XCIjMDA5N2E3XCIsODAwOlwiIzAwODM4ZlwiLDkwMDpcIiMwMDYwNjRcIixhMTAwOlwiIzg0ZmZmZlwiLGEyMDA6XCIjMThmZmZmXCIsYTQwMDpcIiMwMGU1ZmZcIixhNzAwOlwiIzAwYjhkNFwifSx0ZWFsOns1MDpcIiNlMGYyZjFcIiwxMDA6XCIjYjJkZmRiXCIsMjAwOlwiIzgwY2JjNFwiLDMwMDpcIiM0ZGI2YWNcIiw0MDA6XCIjMjZhNjlhXCIsNTAwOlwiIzAwOTY4OFwiLDYwMDpcIiMwMDg5N2JcIiw3MDA6XCIjMDA3OTZiXCIsODAwOlwiIzAwNjk1Y1wiLDkwMDpcIiMwMDRkNDBcIixhMTAwOlwiI2E3ZmZlYlwiLGEyMDA6XCIjNjRmZmRhXCIsYTQwMDpcIiMxZGU5YjZcIixhNzAwOlwiIzAwYmZhNVwifSxncmVlbjp7NTA6XCIjZThmNWU5XCIsMTAwOlwiI2M4ZTZjOVwiLDIwMDpcIiNhNWQ2YTdcIiwzMDA6XCIjODFjNzg0XCIsNDAwOlwiIzY2YmI2YVwiLDUwMDpcIiM0Y2FmNTBcIiw2MDA6XCIjNDNhMDQ3XCIsNzAwOlwiIzM4OGUzY1wiLDgwMDpcIiMyZTdkMzJcIiw5MDA6XCIjMWI1ZTIwXCIsYTEwMDpcIiNiOWY2Y2FcIixhMjAwOlwiIzY5ZjBhZVwiLGE0MDA6XCIjMDBlNjc2XCIsYTcwMDpcIiMwMGM4NTNcIn0sbGlnaHRHcmVlbjp7NTA6XCIjZjFmOGU5XCIsMTAwOlwiI2RjZWRjOFwiLDIwMDpcIiNjNWUxYTVcIiwzMDA6XCIjYWVkNTgxXCIsNDAwOlwiIzljY2M2NVwiLDUwMDpcIiM4YmMzNGFcIiw2MDA6XCIjN2NiMzQyXCIsNzAwOlwiIzY4OWYzOFwiLDgwMDpcIiM1NThiMmZcIiw5MDA6XCIjMzM2OTFlXCIsYTEwMDpcIiNjY2ZmOTBcIixhMjAwOlwiI2IyZmY1OVwiLGE0MDA6XCIjNzZmZjAzXCIsYTcwMDpcIiM2NGRkMTdcIn0sbGltZTp7NTA6XCIjZjlmYmU3XCIsMTAwOlwiI2YwZjRjM1wiLDIwMDpcIiNlNmVlOWNcIiwzMDA6XCIjZGNlNzc1XCIsNDAwOlwiI2Q0ZTE1N1wiLDUwMDpcIiNjZGRjMzlcIiw2MDA6XCIjYzBjYTMzXCIsNzAwOlwiI2FmYjQyYlwiLDgwMDpcIiM5ZTlkMjRcIiw5MDA6XCIjODI3NzE3XCIsYTEwMDpcIiNmNGZmODFcIixhMjAwOlwiI2VlZmY0MVwiLGE0MDA6XCIjYzZmZjAwXCIsYTcwMDpcIiNhZWVhMDBcIn0seWVsbG93Ons1MDpcIiNmZmZkZTdcIiwxMDA6XCIjZmZmOWM0XCIsMjAwOlwiI2ZmZjU5ZFwiLDMwMDpcIiNmZmYxNzZcIiw0MDA6XCIjZmZlZTU4XCIsNTAwOlwiI2ZmZWIzYlwiLDYwMDpcIiNmZGQ4MzVcIiw3MDA6XCIjZmJjMDJkXCIsODAwOlwiI2Y5YTgyNVwiLDkwMDpcIiNmNTdmMTdcIixhMTAwOlwiI2ZmZmY4ZFwiLGEyMDA6XCIjZmZmZjAwXCIsYTQwMDpcIiNmZmVhMDBcIixhNzAwOlwiI2ZmZDYwMFwifSxhbWJlcjp7NTA6XCIjZmZmOGUxXCIsMTAwOlwiI2ZmZWNiM1wiLDIwMDpcIiNmZmUwODJcIiwzMDA6XCIjZmZkNTRmXCIsNDAwOlwiI2ZmY2EyOFwiLDUwMDpcIiNmZmMxMDdcIiw2MDA6XCIjZmZiMzAwXCIsNzAwOlwiI2ZmYTAwMFwiLDgwMDpcIiNmZjhmMDBcIiw5MDA6XCIjZmY2ZjAwXCIsYTEwMDpcIiNmZmU1N2ZcIixhMjAwOlwiI2ZmZDc0MFwiLGE0MDA6XCIjZmZjNDAwXCIsYTcwMDpcIiNmZmFiMDBcIn0sb3JhbmdlOns1MDpcIiNmZmYzZTBcIiwxMDA6XCIjZmZlMGIyXCIsMjAwOlwiI2ZmY2M4MFwiLDMwMDpcIiNmZmI3NGRcIiw0MDA6XCIjZmZhNzI2XCIsNTAwOlwiI2ZmOTgwMFwiLDYwMDpcIiNmYjhjMDBcIiw3MDA6XCIjZjU3YzAwXCIsODAwOlwiI2VmNmMwMFwiLDkwMDpcIiNlNjUxMDBcIixhMTAwOlwiI2ZmZDE4MFwiLGEyMDA6XCIjZmZhYjQwXCIsYTQwMDpcIiNmZjkxMDBcIixhNzAwOlwiI2ZmNmQwMFwifSxkZWVwT3JhbmdlOns1MDpcIiNmYmU5ZTdcIiwxMDA6XCIjZmZjY2JjXCIsMjAwOlwiI2ZmYWI5MVwiLDMwMDpcIiNmZjhhNjVcIiw0MDA6XCIjZmY3MDQzXCIsNTAwOlwiI2ZmNTcyMlwiLDYwMDpcIiNmNDUxMWVcIiw3MDA6XCIjZTY0YTE5XCIsODAwOlwiI2Q4NDMxNVwiLDkwMDpcIiNiZjM2MGNcIixhMTAwOlwiI2ZmOWU4MFwiLGEyMDA6XCIjZmY2ZTQwXCIsYTQwMDpcIiNmZjNkMDBcIixhNzAwOlwiI2RkMmMwMFwifSxicm93bjp7NTA6XCIjZWZlYmU5XCIsMTAwOlwiI2Q3Y2NjOFwiLDIwMDpcIiNiY2FhYTRcIiwzMDA6XCIjYTE4ODdmXCIsNDAwOlwiIzhkNmU2M1wiLDUwMDpcIiM3OTU1NDhcIiw2MDA6XCIjNmQ0YzQxXCIsNzAwOlwiIzVkNDAzN1wiLDgwMDpcIiM0ZTM0MmVcIiw5MDA6XCIjM2UyNzIzXCJ9LGdyZXk6ezUwOlwiI2ZhZmFmYVwiLDEwMDpcIiNmNWY1ZjVcIiwyMDA6XCIjZWVlZWVlXCIsMzAwOlwiI2UwZTBlMFwiLDQwMDpcIiNiZGJkYmRcIiw1MDA6XCIjOWU5ZTllXCIsNjAwOlwiIzc1NzU3NVwiLDcwMDpcIiM2MTYxNjFcIiw4MDA6XCIjNDI0MjQyXCIsOTAwOlwiIzIxMjEyMVwifSxibHVlR3JleTp7NTA6XCIjZWNlZmYxXCIsMTAwOlwiI2NmZDhkY1wiLDIwMDpcIiNiMGJlYzVcIiwzMDA6XCIjOTBhNGFlXCIsNDAwOlwiIzc4OTA5Y1wiLDUwMDpcIiM2MDdkOGJcIiw2MDA6XCIjNTQ2ZTdhXCIsNzAwOlwiIzQ1NWE2NFwiLDgwMDpcIiMzNzQ3NGZcIiw5MDA6XCIjMjYzMjM4XCJ9LGRhcmtUZXh0OntwcmltYXJ5OlwicmdiYSgwLCAwLCAwLCAwLjg3KVwiLHNlY29uZGFyeTpcInJnYmEoMCwgMCwgMCwgMC41NClcIixkaXNhYmxlZDpcInJnYmEoMCwgMCwgMCwgMC4zOClcIixkaXZpZGVyczpcInJnYmEoMCwgMCwgMCwgMC4xMilcIn0sbGlnaHRUZXh0OntwcmltYXJ5OlwicmdiYSgyNTUsIDI1NSwgMjU1LCAxKVwiLHNlY29uZGFyeTpcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KVwiLGRpc2FibGVkOlwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXCIsZGl2aWRlcnM6XCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpXCJ9LGRhcmtJY29uczp7YWN0aXZlOlwicmdiYSgwLCAwLCAwLCAwLjU0KVwiLGluYWN0aXZlOlwicmdiYSgwLCAwLCAwLCAwLjM4KVwifSxsaWdodEljb25zOnthY3RpdmU6XCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpXCIsaW5hY3RpdmU6XCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcIn0sd2hpdGU6XCIjZmZmZmZmXCIsYmxhY2s6XCIjMDAwMDAwXCJ9fSl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcjshZnVuY3Rpb24oYSl7ZnVuY3Rpb24gaShlLG8pe2lmKGU9ZT9lOlwiXCIsbz1vfHx7fSxlIGluc3RhbmNlb2YgaSlyZXR1cm4gZTtpZighKHRoaXMgaW5zdGFuY2VvZiBpKSlyZXR1cm4gbmV3IGkoZSxvKTt2YXIgdD1uKGUpO3RoaXMuX29yaWdpbmFsSW5wdXQ9ZSx0aGlzLl9yPXQucix0aGlzLl9nPXQuZyx0aGlzLl9iPXQuYix0aGlzLl9hPXQuYSx0aGlzLl9yb3VuZEE9WCgxMDAqdGhpcy5fYSkvMTAwLHRoaXMuX2Zvcm1hdD1vLmZvcm1hdHx8dC5mb3JtYXQsdGhpcy5fZ3JhZGllbnRUeXBlPW8uZ3JhZGllbnRUeXBlLHRoaXMuX3I8MSYmKHRoaXMuX3I9WCh0aGlzLl9yKSksdGhpcy5fZzwxJiYodGhpcy5fZz1YKHRoaXMuX2cpKSx0aGlzLl9iPDEmJih0aGlzLl9iPVgodGhpcy5fYikpLHRoaXMuX29rPXQub2ssdGhpcy5fdGNfaWQ9VisrfWZ1bmN0aW9uIG4oZSl7dmFyIG89e3I6MCxnOjAsYjowfSx0PTEscj1udWxsLGE9bnVsbCxpPW51bGwsbj0hMSxsPSExO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1JKGUpKSxcIm9iamVjdFwiPT10eXBlb2YgZSYmKEQoZS5yKSYmRChlLmcpJiZEKGUuYik/KG89cyhlLnIsZS5nLGUuYiksbj0hMCxsPVwiJVwiPT09U3RyaW5nKGUucikuc3Vic3RyKC0xKT9cInByZ2JcIjpcInJnYlwiKTpEKGUuaCkmJkQoZS5zKSYmRChlLnYpPyhyPU8oZS5zKSxhPU8oZS52KSxvPWQoZS5oLHIsYSksbj0hMCxsPVwiaHN2XCIpOkQoZS5oKSYmRChlLnMpJiZEKGUubCkmJihyPU8oZS5zKSxpPU8oZS5sKSxvPWMoZS5oLHIsaSksbj0hMCxsPVwiaHNsXCIpLGUuaGFzT3duUHJvcGVydHkoXCJhXCIpJiYodD1lLmEpKSx0PU0odCkse29rOm4sZm9ybWF0OmUuZm9ybWF0fHxsLHI6cSgyNTUsWShvLnIsMCkpLGc6cSgyNTUsWShvLmcsMCkpLGI6cSgyNTUsWShvLmIsMCkpLGE6dH19ZnVuY3Rpb24gcyhlLG8sdCl7cmV0dXJue3I6MjU1Kk4oZSwyNTUpLGc6MjU1Kk4obywyNTUpLGI6MjU1Kk4odCwyNTUpfX1mdW5jdGlvbiBsKGUsbyx0KXtlPU4oZSwyNTUpLG89TihvLDI1NSksdD1OKHQsMjU1KTt2YXIgcixhLGk9WShlLG8sdCksbj1xKGUsbyx0KSxzPShpK24pLzI7aWYoaT09bilyPWE9MDtlbHNle3ZhciBsPWktbjtzd2l0Y2goYT1zPi41P2wvKDItaS1uKTpsLyhpK24pLGkpe2Nhc2UgZTpyPShvLXQpL2wrKG88dD82OjApO2JyZWFrO2Nhc2UgbzpyPSh0LWUpL2wrMjticmVhaztjYXNlIHQ6cj0oZS1vKS9sKzR9ci89Nn1yZXR1cm57aDpyLHM6YSxsOnN9fWZ1bmN0aW9uIGMoZSxvLHQpe2Z1bmN0aW9uIHIoZSxvLHQpe3JldHVybiB0PDAmJih0Kz0xKSx0PjEmJih0LT0xKSx0PDEvNj9lKzYqKG8tZSkqdDp0PC41P286dDwyLzM/ZSsoby1lKSooMi8zLXQpKjY6ZX12YXIgYSxpLG47aWYoZT1OKGUsMzYwKSxvPU4obywxMDApLHQ9Tih0LDEwMCksMD09PW8pYT1pPW49dDtlbHNle3ZhciBzPXQ8LjU/dCooMStvKTp0K28tdCpvLGw9Mip0LXM7YT1yKGwscyxlKzEvMyksaT1yKGwscyxlKSxuPXIobCxzLGUtMS8zKX1yZXR1cm57cjoyNTUqYSxnOjI1NSppLGI6MjU1Km59fWZ1bmN0aW9uIHUoZSxvLHQpe2U9TihlLDI1NSksbz1OKG8sMjU1KSx0PU4odCwyNTUpO3ZhciByLGEsaT1ZKGUsbyx0KSxuPXEoZSxvLHQpLHM9aSxsPWktbjtpZihhPTA9PT1pPzA6bC9pLGk9PW4pcj0wO2Vsc2V7c3dpdGNoKGkpe2Nhc2UgZTpyPShvLXQpL2wrKG88dD82OjApO2JyZWFrO2Nhc2UgbzpyPSh0LWUpL2wrMjticmVhaztjYXNlIHQ6cj0oZS1vKS9sKzR9ci89Nn1yZXR1cm57aDpyLHM6YSx2OnN9fWZ1bmN0aW9uIGQoZSxvLHQpe2U9NipOKGUsMzYwKSxvPU4obywxMDApLHQ9Tih0LDEwMCk7dmFyIHI9YS5mbG9vcihlKSxpPWUtcixuPXQqKDEtbykscz10KigxLWkqbyksbD10KigxLSgxLWkpKm8pLGM9ciU2LHU9W3QscyxuLG4sbCx0XVtjXSxkPVtsLHQsdCxzLG4sbl1bY10saD1bbixuLGwsdCx0LHNdW2NdO3JldHVybntyOjI1NSp1LGc6MjU1KmQsYjoyNTUqaH19ZnVuY3Rpb24gaChlLG8sdCxyKXt2YXIgYT1bSChYKGUpLnRvU3RyaW5nKDE2KSksSChYKG8pLnRvU3RyaW5nKDE2KSksSChYKHQpLnRvU3RyaW5nKDE2KSldO3JldHVybiByJiZhWzBdLmNoYXJBdCgwKT09YVswXS5jaGFyQXQoMSkmJmFbMV0uY2hhckF0KDApPT1hWzFdLmNoYXJBdCgxKSYmYVsyXS5jaGFyQXQoMCk9PWFbMl0uY2hhckF0KDEpP2FbMF0uY2hhckF0KDApK2FbMV0uY2hhckF0KDApK2FbMl0uY2hhckF0KDApOmEuam9pbihcIlwiKX1mdW5jdGlvbiBmKGUsbyx0LHIsYSl7dmFyIGk9W0goWChlKS50b1N0cmluZygxNikpLEgoWChvKS50b1N0cmluZygxNikpLEgoWCh0KS50b1N0cmluZygxNikpLEgoeihyKSldO3JldHVybiBhJiZpWzBdLmNoYXJBdCgwKT09aVswXS5jaGFyQXQoMSkmJmlbMV0uY2hhckF0KDApPT1pWzFdLmNoYXJBdCgxKSYmaVsyXS5jaGFyQXQoMCk9PWlbMl0uY2hhckF0KDEpJiZpWzNdLmNoYXJBdCgwKT09aVszXS5jaGFyQXQoMSk/aVswXS5jaGFyQXQoMCkraVsxXS5jaGFyQXQoMCkraVsyXS5jaGFyQXQoMCkraVszXS5jaGFyQXQoMCk6aS5qb2luKFwiXCIpfWZ1bmN0aW9uIF8oZSxvLHQscil7dmFyIGE9W0goeihyKSksSChYKGUpLnRvU3RyaW5nKDE2KSksSChYKG8pLnRvU3RyaW5nKDE2KSksSChYKHQpLnRvU3RyaW5nKDE2KSldO3JldHVybiBhLmpvaW4oXCJcIil9ZnVuY3Rpb24gcChlLG8pe289MD09PW8/MDpvfHwxMDt2YXIgdD1pKGUpLnRvSHNsKCk7cmV0dXJuIHQucy09by8xMDAsdC5zPVAodC5zKSxpKHQpfWZ1bmN0aW9uIHYoZSxvKXtvPTA9PT1vPzA6b3x8MTA7dmFyIHQ9aShlKS50b0hzbCgpO3JldHVybiB0LnMrPW8vMTAwLHQucz1QKHQucyksaSh0KX1mdW5jdGlvbiBnKGUpe3JldHVybiBpKGUpLmRlc2F0dXJhdGUoMTAwKX1mdW5jdGlvbiBiKGUsbyl7bz0wPT09bz8wOm98fDEwO3ZhciB0PWkoZSkudG9Ic2woKTtyZXR1cm4gdC5sKz1vLzEwMCx0Lmw9UCh0LmwpLGkodCl9ZnVuY3Rpb24gbShlLG8pe289MD09PW8/MDpvfHwxMDt2YXIgdD1pKGUpLnRvUmdiKCk7cmV0dXJuIHQucj1ZKDAscSgyNTUsdC5yLVgoMjU1Ki0oby8xMDApKSkpLHQuZz1ZKDAscSgyNTUsdC5nLVgoMjU1Ki0oby8xMDApKSkpLHQuYj1ZKDAscSgyNTUsdC5iLVgoMjU1Ki0oby8xMDApKSkpLGkodCl9ZnVuY3Rpb24geChlLG8pe289MD09PW8/MDpvfHwxMDt2YXIgdD1pKGUpLnRvSHNsKCk7cmV0dXJuIHQubC09by8xMDAsdC5sPVAodC5sKSxpKHQpfWZ1bmN0aW9uIHcoZSxvKXt2YXIgdD1pKGUpLnRvSHNsKCkscj0odC5oK28pJTM2MDtyZXR1cm4gdC5oPXI8MD8zNjArcjpyLGkodCl9ZnVuY3Rpb24gQyhlKXt2YXIgbz1pKGUpLnRvSHNsKCk7cmV0dXJuIG8uaD0oby5oKzE4MCklMzYwLGkobyl9ZnVuY3Rpb24geShlKXt2YXIgbz1pKGUpLnRvSHNsKCksdD1vLmg7cmV0dXJuW2koZSksaSh7aDoodCsxMjApJTM2MCxzOm8ucyxsOm8ubH0pLGkoe2g6KHQrMjQwKSUzNjAsczpvLnMsbDpvLmx9KV19ZnVuY3Rpb24gayhlKXt2YXIgbz1pKGUpLnRvSHNsKCksdD1vLmg7cmV0dXJuW2koZSksaSh7aDoodCs5MCklMzYwLHM6by5zLGw6by5sfSksaSh7aDoodCsxODApJTM2MCxzOm8ucyxsOm8ubH0pLGkoe2g6KHQrMjcwKSUzNjAsczpvLnMsbDpvLmx9KV19ZnVuY3Rpb24gRihlKXt2YXIgbz1pKGUpLnRvSHNsKCksdD1vLmg7cmV0dXJuW2koZSksaSh7aDoodCs3MiklMzYwLHM6by5zLGw6by5sfSksaSh7aDoodCsyMTYpJTM2MCxzOm8ucyxsOm8ubH0pXX1mdW5jdGlvbiBBKGUsbyx0KXtvPW98fDYsdD10fHwzMDt2YXIgcj1pKGUpLnRvSHNsKCksYT0zNjAvdCxuPVtpKGUpXTtmb3Ioci5oPShyLmgtKGEqbz4+MSkrNzIwKSUzNjA7LS1vOylyLmg9KHIuaCthKSUzNjAsbi5wdXNoKGkocikpO3JldHVybiBufWZ1bmN0aW9uIFIoZSxvKXtvPW98fDY7Zm9yKHZhciB0PWkoZSkudG9Ic3YoKSxyPXQuaCxhPXQucyxuPXQudixzPVtdLGw9MS9vO28tLTspcy5wdXNoKGkoe2g6cixzOmEsdjpufSkpLG49KG4rbCklMTtyZXR1cm4gc31mdW5jdGlvbiBTKGUpe3ZhciBvPXt9O2Zvcih2YXIgdCBpbiBlKWUuaGFzT3duUHJvcGVydHkodCkmJihvW2VbdF1dPXQpO3JldHVybiBvfWZ1bmN0aW9uIE0oZSl7cmV0dXJuIGU9cGFyc2VGbG9hdChlKSwoaXNOYU4oZSl8fGU8MHx8ZT4xKSYmKGU9MSksZX1mdW5jdGlvbiBOKGUsbyl7TChlKSYmKGU9XCIxMDAlXCIpO3ZhciB0PUUoZSk7cmV0dXJuIGU9cShvLFkoMCxwYXJzZUZsb2F0KGUpKSksdCYmKGU9cGFyc2VJbnQoZSpvLDEwKS8xMDApLGEuYWJzKGUtbyk8MWUtNj8xOmUlby9wYXJzZUZsb2F0KG8pfWZ1bmN0aW9uIFAoZSl7cmV0dXJuIHEoMSxZKDAsZSkpfWZ1bmN0aW9uIGooZSl7cmV0dXJuIHBhcnNlSW50KGUsMTYpfWZ1bmN0aW9uIEwoZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJmUuaW5kZXhPZihcIi5cIikhPS0xJiYxPT09cGFyc2VGbG9hdChlKX1mdW5jdGlvbiBFKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiZlLmluZGV4T2YoXCIlXCIpIT0tMX1mdW5jdGlvbiBIKGUpe3JldHVybiAxPT1lLmxlbmd0aD9cIjBcIitlOlwiXCIrZX1mdW5jdGlvbiBPKGUpe3JldHVybiBlPD0xJiYoZT0xMDAqZStcIiVcIiksZX1mdW5jdGlvbiB6KGUpe3JldHVybiBhLnJvdW5kKDI1NSpwYXJzZUZsb2F0KGUpKS50b1N0cmluZygxNil9ZnVuY3Rpb24gQihlKXtyZXR1cm4gaihlKS8yNTV9ZnVuY3Rpb24gRChlKXtyZXR1cm4hIVouQ1NTX1VOSVQuZXhlYyhlKX1mdW5jdGlvbiBJKGUpe2U9ZS5yZXBsYWNlKCQsXCJcIikucmVwbGFjZShVLFwiXCIpLnRvTG93ZXJDYXNlKCk7dmFyIG89ITE7aWYoR1tlXSllPUdbZV0sbz0hMDtlbHNlIGlmKFwidHJhbnNwYXJlbnRcIj09ZSlyZXR1cm57cjowLGc6MCxiOjAsYTowLGZvcm1hdDpcIm5hbWVcIn07dmFyIHQ7cmV0dXJuKHQ9Wi5yZ2IuZXhlYyhlKSk/e3I6dFsxXSxnOnRbMl0sYjp0WzNdfToodD1aLnJnYmEuZXhlYyhlKSk/e3I6dFsxXSxnOnRbMl0sYjp0WzNdLGE6dFs0XX06KHQ9Wi5oc2wuZXhlYyhlKSk/e2g6dFsxXSxzOnRbMl0sbDp0WzNdfToodD1aLmhzbGEuZXhlYyhlKSk/e2g6dFsxXSxzOnRbMl0sbDp0WzNdLGE6dFs0XX06KHQ9Wi5oc3YuZXhlYyhlKSk/e2g6dFsxXSxzOnRbMl0sdjp0WzNdfToodD1aLmhzdmEuZXhlYyhlKSk/e2g6dFsxXSxzOnRbMl0sdjp0WzNdLGE6dFs0XX06KHQ9Wi5oZXg4LmV4ZWMoZSkpP3tyOmoodFsxXSksZzpqKHRbMl0pLGI6aih0WzNdKSxhOkIodFs0XSksZm9ybWF0Om8/XCJuYW1lXCI6XCJoZXg4XCJ9Oih0PVouaGV4Ni5leGVjKGUpKT97cjpqKHRbMV0pLGc6aih0WzJdKSxiOmoodFszXSksZm9ybWF0Om8/XCJuYW1lXCI6XCJoZXhcIn06KHQ9Wi5oZXg0LmV4ZWMoZSkpP3tyOmoodFsxXStcIlwiK3RbMV0pLGc6aih0WzJdK1wiXCIrdFsyXSksYjpqKHRbM10rXCJcIit0WzNdKSxhOkIodFs0XStcIlwiK3RbNF0pLGZvcm1hdDpvP1wibmFtZVwiOlwiaGV4OFwifTohISh0PVouaGV4My5leGVjKGUpKSYme3I6aih0WzFdK1wiXCIrdFsxXSksZzpqKHRbMl0rXCJcIit0WzJdKSxiOmoodFszXStcIlwiK3RbM10pLGZvcm1hdDpvP1wibmFtZVwiOlwiaGV4XCJ9fWZ1bmN0aW9uIFQoZSl7dmFyIG8sdDtyZXR1cm4gZT1lfHx7bGV2ZWw6XCJBQVwiLHNpemU6XCJzbWFsbFwifSxvPShlLmxldmVsfHxcIkFBXCIpLnRvVXBwZXJDYXNlKCksdD0oZS5zaXplfHxcInNtYWxsXCIpLnRvTG93ZXJDYXNlKCksXCJBQVwiIT09byYmXCJBQUFcIiE9PW8mJihvPVwiQUFcIiksXCJzbWFsbFwiIT09dCYmXCJsYXJnZVwiIT09dCYmKHQ9XCJzbWFsbFwiKSx7bGV2ZWw6byxzaXplOnR9fXZhciAkPS9eXFxzKy8sVT0vXFxzKyQvLFY9MCxYPWEucm91bmQscT1hLm1pbixZPWEubWF4LFc9YS5yYW5kb207aS5wcm90b3R5cGU9e2lzRGFyazpmdW5jdGlvbigpe3JldHVybiB0aGlzLmdldEJyaWdodG5lc3MoKTwxMjh9LGlzTGlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5pc0RhcmsoKX0saXNWYWxpZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9va30sZ2V0T3JpZ2luYWxJbnB1dDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9vcmlnaW5hbElucHV0fSxnZXRGb3JtYXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZm9ybWF0fSxnZXRBbHBoYTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hfSxnZXRCcmlnaHRuZXNzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy50b1JnYigpO3JldHVybigyOTkqZS5yKzU4NyplLmcrMTE0KmUuYikvMWUzfSxnZXRMdW1pbmFuY2U6ZnVuY3Rpb24oKXt2YXIgZSxvLHQscixpLG4scz10aGlzLnRvUmdiKCk7cmV0dXJuIGU9cy5yLzI1NSxvPXMuZy8yNTUsdD1zLmIvMjU1LHI9ZTw9LjAzOTI4P2UvMTIuOTI6YS5wb3coKGUrLjA1NSkvMS4wNTUsMi40KSxpPW88PS4wMzkyOD9vLzEyLjkyOmEucG93KChvKy4wNTUpLzEuMDU1LDIuNCksbj10PD0uMDM5Mjg/dC8xMi45MjphLnBvdygodCsuMDU1KS8xLjA1NSwyLjQpLC4yMTI2KnIrLjcxNTIqaSsuMDcyMipufSxzZXRBbHBoYTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fYT1NKGUpLHRoaXMuX3JvdW5kQT1YKDEwMCp0aGlzLl9hKS8xMDAsdGhpc30sdG9Ic3Y6ZnVuY3Rpb24oKXt2YXIgZT11KHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iKTtyZXR1cm57aDozNjAqZS5oLHM6ZS5zLHY6ZS52LGE6dGhpcy5fYX19LHRvSHN2U3RyaW5nOmZ1bmN0aW9uKCl7dmFyIGU9dSh0aGlzLl9yLHRoaXMuX2csdGhpcy5fYiksbz1YKDM2MCplLmgpLHQ9WCgxMDAqZS5zKSxyPVgoMTAwKmUudik7cmV0dXJuIDE9PXRoaXMuX2E/XCJoc3YoXCIrbytcIiwgXCIrdCtcIiUsIFwiK3IrXCIlKVwiOlwiaHN2YShcIitvK1wiLCBcIit0K1wiJSwgXCIrcitcIiUsIFwiK3RoaXMuX3JvdW5kQStcIilcIn0sdG9Ic2w6ZnVuY3Rpb24oKXt2YXIgZT1sKHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iKTtyZXR1cm57aDozNjAqZS5oLHM6ZS5zLGw6ZS5sLGE6dGhpcy5fYX19LHRvSHNsU3RyaW5nOmZ1bmN0aW9uKCl7dmFyIGU9bCh0aGlzLl9yLHRoaXMuX2csdGhpcy5fYiksbz1YKDM2MCplLmgpLHQ9WCgxMDAqZS5zKSxyPVgoMTAwKmUubCk7cmV0dXJuIDE9PXRoaXMuX2E/XCJoc2woXCIrbytcIiwgXCIrdCtcIiUsIFwiK3IrXCIlKVwiOlwiaHNsYShcIitvK1wiLCBcIit0K1wiJSwgXCIrcitcIiUsIFwiK3RoaXMuX3JvdW5kQStcIilcIn0sdG9IZXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGgodGhpcy5fcix0aGlzLl9nLHRoaXMuX2IsZSl9LHRvSGV4U3RyaW5nOmZ1bmN0aW9uKGUpe3JldHVyblwiI1wiK3RoaXMudG9IZXgoZSl9LHRvSGV4ODpmdW5jdGlvbihlKXtyZXR1cm4gZih0aGlzLl9yLHRoaXMuX2csdGhpcy5fYix0aGlzLl9hLGUpfSx0b0hleDhTdHJpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuXCIjXCIrdGhpcy50b0hleDgoZSl9LHRvUmdiOmZ1bmN0aW9uKCl7cmV0dXJue3I6WCh0aGlzLl9yKSxnOlgodGhpcy5fZyksYjpYKHRoaXMuX2IpLGE6dGhpcy5fYX19LHRvUmdiU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIDE9PXRoaXMuX2E/XCJyZ2IoXCIrWCh0aGlzLl9yKStcIiwgXCIrWCh0aGlzLl9nKStcIiwgXCIrWCh0aGlzLl9iKStcIilcIjpcInJnYmEoXCIrWCh0aGlzLl9yKStcIiwgXCIrWCh0aGlzLl9nKStcIiwgXCIrWCh0aGlzLl9iKStcIiwgXCIrdGhpcy5fcm91bmRBK1wiKVwifSx0b1BlcmNlbnRhZ2VSZ2I6ZnVuY3Rpb24oKXtyZXR1cm57cjpYKDEwMCpOKHRoaXMuX3IsMjU1KSkrXCIlXCIsZzpYKDEwMCpOKHRoaXMuX2csMjU1KSkrXCIlXCIsYjpYKDEwMCpOKHRoaXMuX2IsMjU1KSkrXCIlXCIsYTp0aGlzLl9hfX0sdG9QZXJjZW50YWdlUmdiU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIDE9PXRoaXMuX2E/XCJyZ2IoXCIrWCgxMDAqTih0aGlzLl9yLDI1NSkpK1wiJSwgXCIrWCgxMDAqTih0aGlzLl9nLDI1NSkpK1wiJSwgXCIrWCgxMDAqTih0aGlzLl9iLDI1NSkpK1wiJSlcIjpcInJnYmEoXCIrWCgxMDAqTih0aGlzLl9yLDI1NSkpK1wiJSwgXCIrWCgxMDAqTih0aGlzLl9nLDI1NSkpK1wiJSwgXCIrWCgxMDAqTih0aGlzLl9iLDI1NSkpK1wiJSwgXCIrdGhpcy5fcm91bmRBK1wiKVwifSx0b05hbWU6ZnVuY3Rpb24oKXtyZXR1cm4gMD09PXRoaXMuX2E/XCJ0cmFuc3BhcmVudFwiOiEodGhpcy5fYTwxKSYmKEtbaCh0aGlzLl9yLHRoaXMuX2csdGhpcy5fYiwhMCldfHwhMSl9LHRvRmlsdGVyOmZ1bmN0aW9uKGUpe3ZhciBvPVwiI1wiK18odGhpcy5fcix0aGlzLl9nLHRoaXMuX2IsdGhpcy5fYSksdD1vLHI9dGhpcy5fZ3JhZGllbnRUeXBlP1wiR3JhZGllbnRUeXBlID0gMSwgXCI6XCJcIjtpZihlKXt2YXIgYT1pKGUpO3Q9XCIjXCIrXyhhLl9yLGEuX2csYS5fYixhLl9hKX1yZXR1cm5cInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChcIityK1wic3RhcnRDb2xvcnN0cj1cIitvK1wiLGVuZENvbG9yc3RyPVwiK3QrXCIpXCJ9LHRvU3RyaW5nOmZ1bmN0aW9uKGUpe3ZhciBvPSEhZTtlPWV8fHRoaXMuX2Zvcm1hdDt2YXIgdD0hMSxyPXRoaXMuX2E8MSYmdGhpcy5fYT49MCxhPSFvJiZyJiYoXCJoZXhcIj09PWV8fFwiaGV4NlwiPT09ZXx8XCJoZXgzXCI9PT1lfHxcImhleDRcIj09PWV8fFwiaGV4OFwiPT09ZXx8XCJuYW1lXCI9PT1lKTtyZXR1cm4gYT9cIm5hbWVcIj09PWUmJjA9PT10aGlzLl9hP3RoaXMudG9OYW1lKCk6dGhpcy50b1JnYlN0cmluZygpOihcInJnYlwiPT09ZSYmKHQ9dGhpcy50b1JnYlN0cmluZygpKSxcInByZ2JcIj09PWUmJih0PXRoaXMudG9QZXJjZW50YWdlUmdiU3RyaW5nKCkpLFwiaGV4XCIhPT1lJiZcImhleDZcIiE9PWV8fCh0PXRoaXMudG9IZXhTdHJpbmcoKSksXCJoZXgzXCI9PT1lJiYodD10aGlzLnRvSGV4U3RyaW5nKCEwKSksXCJoZXg0XCI9PT1lJiYodD10aGlzLnRvSGV4OFN0cmluZyghMCkpLFwiaGV4OFwiPT09ZSYmKHQ9dGhpcy50b0hleDhTdHJpbmcoKSksXCJuYW1lXCI9PT1lJiYodD10aGlzLnRvTmFtZSgpKSxcImhzbFwiPT09ZSYmKHQ9dGhpcy50b0hzbFN0cmluZygpKSxcImhzdlwiPT09ZSYmKHQ9dGhpcy50b0hzdlN0cmluZygpKSx0fHx0aGlzLnRvSGV4U3RyaW5nKCkpfSxjbG9uZTpmdW5jdGlvbigpe3JldHVybiBpKHRoaXMudG9TdHJpbmcoKSl9LF9hcHBseU1vZGlmaWNhdGlvbjpmdW5jdGlvbihlLG8pe3ZhciB0PWUuYXBwbHkobnVsbCxbdGhpc10uY29uY2F0KFtdLnNsaWNlLmNhbGwobykpKTtyZXR1cm4gdGhpcy5fcj10Ll9yLHRoaXMuX2c9dC5fZyx0aGlzLl9iPXQuX2IsdGhpcy5zZXRBbHBoYSh0Ll9hKSx0aGlzfSxsaWdodGVuOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKGIsYXJndW1lbnRzKX0sYnJpZ2h0ZW46ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24obSxhcmd1bWVudHMpfSxkYXJrZW46ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oeCxhcmd1bWVudHMpfSxkZXNhdHVyYXRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKHAsYXJndW1lbnRzKX0sc2F0dXJhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24odixhcmd1bWVudHMpfSxncmV5c2NhbGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oZyxhcmd1bWVudHMpfSxzcGluOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKHcsYXJndW1lbnRzKX0sX2FwcGx5Q29tYmluYXRpb246ZnVuY3Rpb24oZSxvKXtyZXR1cm4gZS5hcHBseShudWxsLFt0aGlzXS5jb25jYXQoW10uc2xpY2UuY2FsbChvKSkpfSxhbmFsb2dvdXM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihBLGFyZ3VtZW50cyl9LGNvbXBsZW1lbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihDLGFyZ3VtZW50cyl9LG1vbm9jaHJvbWF0aWM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihSLGFyZ3VtZW50cyl9LHNwbGl0Y29tcGxlbWVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKEYsYXJndW1lbnRzKX0sdHJpYWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbih5LGFyZ3VtZW50cyl9LHRldHJhZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKGssYXJndW1lbnRzKX19LGkuZnJvbVJhdGlvPWZ1bmN0aW9uKGUsbyl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe3ZhciB0PXt9O2Zvcih2YXIgciBpbiBlKWUuaGFzT3duUHJvcGVydHkocikmJihcImFcIj09PXI/dFtyXT1lW3JdOnRbcl09TyhlW3JdKSk7ZT10fXJldHVybiBpKGUsbyl9LGkuZXF1YWxzPWZ1bmN0aW9uKGUsbyl7cmV0dXJuISghZXx8IW8pJiZpKGUpLnRvUmdiU3RyaW5nKCk9PWkobykudG9SZ2JTdHJpbmcoKX0saS5yYW5kb209ZnVuY3Rpb24oKXtyZXR1cm4gaS5mcm9tUmF0aW8oe3I6VygpLGc6VygpLGI6VygpfSl9LGkubWl4PWZ1bmN0aW9uKGUsbyx0KXt0PTA9PT10PzA6dHx8NTA7dmFyIHI9aShlKS50b1JnYigpLGE9aShvKS50b1JnYigpLG49dC8xMDAscz17cjooYS5yLXIucikqbityLnIsZzooYS5nLXIuZykqbityLmcsYjooYS5iLXIuYikqbityLmIsYTooYS5hLXIuYSkqbityLmF9O3JldHVybiBpKHMpfSxpLnJlYWRhYmlsaXR5PWZ1bmN0aW9uKGUsbyl7dmFyIHQ9aShlKSxyPWkobyk7cmV0dXJuKGEubWF4KHQuZ2V0THVtaW5hbmNlKCksci5nZXRMdW1pbmFuY2UoKSkrLjA1KS8oYS5taW4odC5nZXRMdW1pbmFuY2UoKSxyLmdldEx1bWluYW5jZSgpKSsuMDUpfSxpLmlzUmVhZGFibGU9ZnVuY3Rpb24oZSxvLHQpe3ZhciByLGEsbj1pLnJlYWRhYmlsaXR5KGUsbyk7c3dpdGNoKGE9ITEscj1UKHQpLHIubGV2ZWwrci5zaXplKXtjYXNlXCJBQXNtYWxsXCI6Y2FzZVwiQUFBbGFyZ2VcIjphPW4+PTQuNTticmVhaztjYXNlXCJBQWxhcmdlXCI6YT1uPj0zO2JyZWFrO2Nhc2VcIkFBQXNtYWxsXCI6YT1uPj03fXJldHVybiBhfSxpLm1vc3RSZWFkYWJsZT1mdW5jdGlvbihlLG8sdCl7dmFyIHIsYSxuLHMsbD1udWxsLGM9MDt0PXR8fHt9LGE9dC5pbmNsdWRlRmFsbGJhY2tDb2xvcnMsbj10LmxldmVsLHM9dC5zaXplO2Zvcih2YXIgdT0wO3U8by5sZW5ndGg7dSsrKXI9aS5yZWFkYWJpbGl0eShlLG9bdV0pLHI+YyYmKGM9cixsPWkob1t1XSkpO3JldHVybiBpLmlzUmVhZGFibGUoZSxsLHtsZXZlbDpuLHNpemU6c30pfHwhYT9sOih0LmluY2x1ZGVGYWxsYmFja0NvbG9ycz0hMSxpLm1vc3RSZWFkYWJsZShlLFtcIiNmZmZcIixcIiMwMDBcIl0sdCkpfTt2YXIgRz1pLm5hbWVzPXthbGljZWJsdWU6XCJmMGY4ZmZcIixhbnRpcXVld2hpdGU6XCJmYWViZDdcIixhcXVhOlwiMGZmXCIsYXF1YW1hcmluZTpcIjdmZmZkNFwiLGF6dXJlOlwiZjBmZmZmXCIsYmVpZ2U6XCJmNWY1ZGNcIixiaXNxdWU6XCJmZmU0YzRcIixibGFjazpcIjAwMFwiLGJsYW5jaGVkYWxtb25kOlwiZmZlYmNkXCIsYmx1ZTpcIjAwZlwiLGJsdWV2aW9sZXQ6XCI4YTJiZTJcIixicm93bjpcImE1MmEyYVwiLGJ1cmx5d29vZDpcImRlYjg4N1wiLGJ1cm50c2llbm5hOlwiZWE3ZTVkXCIsY2FkZXRibHVlOlwiNWY5ZWEwXCIsY2hhcnRyZXVzZTpcIjdmZmYwMFwiLGNob2NvbGF0ZTpcImQyNjkxZVwiLGNvcmFsOlwiZmY3ZjUwXCIsY29ybmZsb3dlcmJsdWU6XCI2NDk1ZWRcIixjb3Juc2lsazpcImZmZjhkY1wiLGNyaW1zb246XCJkYzE0M2NcIixjeWFuOlwiMGZmXCIsZGFya2JsdWU6XCIwMDAwOGJcIixkYXJrY3lhbjpcIjAwOGI4YlwiLGRhcmtnb2xkZW5yb2Q6XCJiODg2MGJcIixkYXJrZ3JheTpcImE5YTlhOVwiLGRhcmtncmVlbjpcIjAwNjQwMFwiLGRhcmtncmV5OlwiYTlhOWE5XCIsZGFya2toYWtpOlwiYmRiNzZiXCIsZGFya21hZ2VudGE6XCI4YjAwOGJcIixkYXJrb2xpdmVncmVlbjpcIjU1NmIyZlwiLGRhcmtvcmFuZ2U6XCJmZjhjMDBcIixkYXJrb3JjaGlkOlwiOTkzMmNjXCIsZGFya3JlZDpcIjhiMDAwMFwiLGRhcmtzYWxtb246XCJlOTk2N2FcIixkYXJrc2VhZ3JlZW46XCI4ZmJjOGZcIixkYXJrc2xhdGVibHVlOlwiNDgzZDhiXCIsZGFya3NsYXRlZ3JheTpcIjJmNGY0ZlwiLGRhcmtzbGF0ZWdyZXk6XCIyZjRmNGZcIixkYXJrdHVycXVvaXNlOlwiMDBjZWQxXCIsZGFya3Zpb2xldDpcIjk0MDBkM1wiLGRlZXBwaW5rOlwiZmYxNDkzXCIsZGVlcHNreWJsdWU6XCIwMGJmZmZcIixkaW1ncmF5OlwiNjk2OTY5XCIsZGltZ3JleTpcIjY5Njk2OVwiLGRvZGdlcmJsdWU6XCIxZTkwZmZcIixmaXJlYnJpY2s6XCJiMjIyMjJcIixmbG9yYWx3aGl0ZTpcImZmZmFmMFwiLGZvcmVzdGdyZWVuOlwiMjI4YjIyXCIsZnVjaHNpYTpcImYwZlwiLGdhaW5zYm9ybzpcImRjZGNkY1wiLGdob3N0d2hpdGU6XCJmOGY4ZmZcIixnb2xkOlwiZmZkNzAwXCIsZ29sZGVucm9kOlwiZGFhNTIwXCIsZ3JheTpcIjgwODA4MFwiLGdyZWVuOlwiMDA4MDAwXCIsZ3JlZW55ZWxsb3c6XCJhZGZmMmZcIixncmV5OlwiODA4MDgwXCIsaG9uZXlkZXc6XCJmMGZmZjBcIixob3RwaW5rOlwiZmY2OWI0XCIsaW5kaWFucmVkOlwiY2Q1YzVjXCIsaW5kaWdvOlwiNGIwMDgyXCIsaXZvcnk6XCJmZmZmZjBcIixraGFraTpcImYwZTY4Y1wiLGxhdmVuZGVyOlwiZTZlNmZhXCIsbGF2ZW5kZXJibHVzaDpcImZmZjBmNVwiLGxhd25ncmVlbjpcIjdjZmMwMFwiLGxlbW9uY2hpZmZvbjpcImZmZmFjZFwiLGxpZ2h0Ymx1ZTpcImFkZDhlNlwiLGxpZ2h0Y29yYWw6XCJmMDgwODBcIixsaWdodGN5YW46XCJlMGZmZmZcIixsaWdodGdvbGRlbnJvZHllbGxvdzpcImZhZmFkMlwiLGxpZ2h0Z3JheTpcImQzZDNkM1wiLGxpZ2h0Z3JlZW46XCI5MGVlOTBcIixsaWdodGdyZXk6XCJkM2QzZDNcIixsaWdodHBpbms6XCJmZmI2YzFcIixsaWdodHNhbG1vbjpcImZmYTA3YVwiLGxpZ2h0c2VhZ3JlZW46XCIyMGIyYWFcIixsaWdodHNreWJsdWU6XCI4N2NlZmFcIixsaWdodHNsYXRlZ3JheTpcIjc4OVwiLGxpZ2h0c2xhdGVncmV5OlwiNzg5XCIsbGlnaHRzdGVlbGJsdWU6XCJiMGM0ZGVcIixsaWdodHllbGxvdzpcImZmZmZlMFwiLGxpbWU6XCIwZjBcIixsaW1lZ3JlZW46XCIzMmNkMzJcIixsaW5lbjpcImZhZjBlNlwiLG1hZ2VudGE6XCJmMGZcIixtYXJvb246XCI4MDAwMDBcIixtZWRpdW1hcXVhbWFyaW5lOlwiNjZjZGFhXCIsbWVkaXVtYmx1ZTpcIjAwMDBjZFwiLG1lZGl1bW9yY2hpZDpcImJhNTVkM1wiLG1lZGl1bXB1cnBsZTpcIjkzNzBkYlwiLG1lZGl1bXNlYWdyZWVuOlwiM2NiMzcxXCIsbWVkaXVtc2xhdGVibHVlOlwiN2I2OGVlXCIsbWVkaXVtc3ByaW5nZ3JlZW46XCIwMGZhOWFcIixtZWRpdW10dXJxdW9pc2U6XCI0OGQxY2NcIixtZWRpdW12aW9sZXRyZWQ6XCJjNzE1ODVcIixtaWRuaWdodGJsdWU6XCIxOTE5NzBcIixtaW50Y3JlYW06XCJmNWZmZmFcIixtaXN0eXJvc2U6XCJmZmU0ZTFcIixtb2NjYXNpbjpcImZmZTRiNVwiLG5hdmFqb3doaXRlOlwiZmZkZWFkXCIsbmF2eTpcIjAwMDA4MFwiLG9sZGxhY2U6XCJmZGY1ZTZcIixvbGl2ZTpcIjgwODAwMFwiLG9saXZlZHJhYjpcIjZiOGUyM1wiLG9yYW5nZTpcImZmYTUwMFwiLG9yYW5nZXJlZDpcImZmNDUwMFwiLG9yY2hpZDpcImRhNzBkNlwiLHBhbGVnb2xkZW5yb2Q6XCJlZWU4YWFcIixwYWxlZ3JlZW46XCI5OGZiOThcIixwYWxldHVycXVvaXNlOlwiYWZlZWVlXCIscGFsZXZpb2xldHJlZDpcImRiNzA5M1wiLHBhcGF5YXdoaXA6XCJmZmVmZDVcIixwZWFjaHB1ZmY6XCJmZmRhYjlcIixwZXJ1OlwiY2Q4NTNmXCIscGluazpcImZmYzBjYlwiLHBsdW06XCJkZGEwZGRcIixwb3dkZXJibHVlOlwiYjBlMGU2XCIscHVycGxlOlwiODAwMDgwXCIscmViZWNjYXB1cnBsZTpcIjY2MzM5OVwiLHJlZDpcImYwMFwiLHJvc3licm93bjpcImJjOGY4ZlwiLHJveWFsYmx1ZTpcIjQxNjllMVwiLHNhZGRsZWJyb3duOlwiOGI0NTEzXCIsc2FsbW9uOlwiZmE4MDcyXCIsc2FuZHlicm93bjpcImY0YTQ2MFwiLHNlYWdyZWVuOlwiMmU4YjU3XCIsc2Vhc2hlbGw6XCJmZmY1ZWVcIixzaWVubmE6XCJhMDUyMmRcIixzaWx2ZXI6XCJjMGMwYzBcIixza3libHVlOlwiODdjZWViXCIsc2xhdGVibHVlOlwiNmE1YWNkXCIsc2xhdGVncmF5OlwiNzA4MDkwXCIsc2xhdGVncmV5OlwiNzA4MDkwXCIsc25vdzpcImZmZmFmYVwiLHNwcmluZ2dyZWVuOlwiMDBmZjdmXCIsc3RlZWxibHVlOlwiNDY4MmI0XCIsdGFuOlwiZDJiNDhjXCIsdGVhbDpcIjAwODA4MFwiLHRoaXN0bGU6XCJkOGJmZDhcIix0b21hdG86XCJmZjYzNDdcIix0dXJxdW9pc2U6XCI0MGUwZDBcIix2aW9sZXQ6XCJlZTgyZWVcIix3aGVhdDpcImY1ZGViM1wiLHdoaXRlOlwiZmZmXCIsd2hpdGVzbW9rZTpcImY1ZjVmNVwiLHllbGxvdzpcImZmMFwiLHllbGxvd2dyZWVuOlwiOWFjZDMyXCJ9LEs9aS5oZXhOYW1lcz1TKEcpLFo9ZnVuY3Rpb24oKXt2YXIgZT1cIlstXFxcXCtdP1xcXFxkKyU/XCIsbz1cIlstXFxcXCtdP1xcXFxkKlxcXFwuXFxcXGQrJT9cIix0PVwiKD86XCIrbytcIil8KD86XCIrZStcIilcIixyPVwiW1xcXFxzfFxcXFwoXSsoXCIrdCtcIilbLHxcXFxcc10rKFwiK3QrXCIpWyx8XFxcXHNdKyhcIit0K1wiKVxcXFxzKlxcXFwpP1wiLGE9XCJbXFxcXHN8XFxcXChdKyhcIit0K1wiKVssfFxcXFxzXSsoXCIrdCtcIilbLHxcXFxcc10rKFwiK3QrXCIpWyx8XFxcXHNdKyhcIit0K1wiKVxcXFxzKlxcXFwpP1wiO3JldHVybntDU1NfVU5JVDpuZXcgUmVnRXhwKHQpLHJnYjpuZXcgUmVnRXhwKFwicmdiXCIrcikscmdiYTpuZXcgUmVnRXhwKFwicmdiYVwiK2EpLGhzbDpuZXcgUmVnRXhwKFwiaHNsXCIrciksaHNsYTpuZXcgUmVnRXhwKFwiaHNsYVwiK2EpLGhzdjpuZXcgUmVnRXhwKFwiaHN2XCIrciksaHN2YTpuZXcgUmVnRXhwKFwiaHN2YVwiK2EpLGhleDM6L14jPyhbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KSQvLGhleDY6L14jPyhbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvLGhleDQ6L14jPyhbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLyxoZXg4Oi9eIz8oWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pJC99fSgpO1widW5kZWZpbmVkXCIhPXR5cGVvZiBlJiZlLmV4cG9ydHM/ZS5leHBvcnRzPWk6KHI9ZnVuY3Rpb24oKXtyZXR1cm4gaX0uY2FsbChvLHQsbyxlKSwhKHZvaWQgMCE9PXImJihlLmV4cG9ydHM9cikpKX0oTWF0aCl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhO3QoNjQpLHI9dCg5KTt2YXIgaT10KDUyKTthPXI9cnx8e30sXCJvYmplY3RcIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXXx8KGE9cj1yW1wiZGVmYXVsdFwiXSksXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YS5vcHRpb25zKSxhLnJlbmRlcj1pLnJlbmRlcixhLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyxlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSxvLHQpe3ZhciByLGE7dCg1NSkscj10KDEwKTt2YXIgaT10KDQzKTthPXI9cnx8e30sXCJvYmplY3RcIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXXx8KGE9cj1yW1wiZGVmYXVsdFwiXSksXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YS5vcHRpb25zKSxhLnJlbmRlcj1pLnJlbmRlcixhLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyxlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSxvLHQpe3ZhciByLGE7dCg1OSkscj10KDExKTt2YXIgaT10KDQ3KTthPXI9cnx8e30sXCJvYmplY3RcIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXXx8KGE9cj1yW1wiZGVmYXVsdFwiXSksXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YS5vcHRpb25zKSxhLnJlbmRlcj1pLnJlbmRlcixhLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyxlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSxvLHQpe3ZhciByLGE7dCg2Mikscj10KDEyKTt2YXIgaT10KDUwKTthPXI9cnx8e30sXCJvYmplY3RcIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXXx8KGE9cj1yW1wiZGVmYXVsdFwiXSksXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YS5vcHRpb25zKSxhLnJlbmRlcj1pLnJlbmRlcixhLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyxlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSxvLHQpe3ZhciByLGE7dCg2Mykscj10KDEzKTt2YXIgaT10KDUxKTthPXI9cnx8e30sXCJvYmplY3RcIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXXx8KGE9cj1yW1wiZGVmYXVsdFwiXSksXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YS5vcHRpb25zKSxhLnJlbmRlcj1pLnJlbmRlcixhLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyxlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSxvLHQpe3ZhciByLGE7dCg2MCkscj10KDE0KTt2YXIgaT10KDQ4KTthPXI9cnx8e30sXCJvYmplY3RcIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXXx8KGE9cj1yW1wiZGVmYXVsdFwiXSksXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YS5vcHRpb25zKSxhLnJlbmRlcj1pLnJlbmRlcixhLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyxlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSxvLHQpe3ZhciByLGE7dCg2MSkscj10KDE1KTt2YXIgaT10KDQ5KTthPXI9cnx8e30sXCJvYmplY3RcIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXXx8KGE9cj1yW1wiZGVmYXVsdFwiXSksXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YS5vcHRpb25zKSxhLnJlbmRlcj1pLnJlbmRlcixhLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyxlLmV4cG9ydHM9cn0sZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jb21wYWN0XCJ9LFtfYyhcInVsXCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jb21wYWN0X19jb2xvcnNcIn0sX2woZGVmYXVsdENvbG9ycyxmdW5jdGlvbihlKXtyZXR1cm4gX2MoXCJsaVwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY29tcGFjdF9fY29sb3ItaXRlbVwiLFwiY2xhc3NcIjp7XCJ2dWUtY29sb3JfX2NvbXBhY3RfX2NvbG9yLWl0ZW0tLXdoaXRlXCI6XCIjRkZGRkZGXCI9PT1lfSxzdHlsZTp7YmFja2dyb3VuZDplfSxvbjp7Y2xpY2s6ZnVuY3Rpb24obyl7aGFuZGxlckNsaWNrKGUpfX19LFtfYyhcImRpdlwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6ZT09PXBpY2ssZXhwcmVzc2lvbjpcImMgPT09IHBpY2tcIn1dLHN0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jb21wYWN0X19kb3RcIn0pXSl9KSksX3YoXCIgXCIpXSl9LHN0YXRpY1JlbmRlckZuczpbXX19LGZ1bmN0aW9uKG1vZHVsZSxleHBvcnRzKXttb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRcIn0sW19jKFwiaW5wdXRcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6dmFsLGV4cHJlc3Npb246XCJ2YWxcIn1dLHN0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9faW5wdXRcIixkb21Qcm9wczp7dmFsdWU6X3ModmFsKX0sb246e2tleWRvd246aGFuZGxlS2V5RG93bixpbnB1dDpbZnVuY3Rpb24oZSl7ZS50YXJnZXQuY29tcG9zaW5nfHwodmFsPWUudGFyZ2V0LnZhbHVlKX0sdXBkYXRlXX19KSxfdihcIiBcIiksX2MoXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9fbGFiZWxcIn0sW192KF9zKGxhYmVsKSldKV0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2MoXCJkaXZcIix7XCJjbGFzc1wiOltcInZ1ZS1jb2xvcl9fYy1odWVcIixkaXJlY3Rpb25DbGFzc119LFtfYyhcImRpdlwiLHtyZWY6XCJjb250YWluZXJcIixzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fYy1odWVfX2NvbnRhaW5lclwiLG9uOnttb3VzZWRvd246aGFuZGxlTW91c2VEb3duLHRvdWNobW92ZTpoYW5kbGVDaGFuZ2UsdG91Y2hzdGFydDpoYW5kbGVDaGFuZ2V9fSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2MtaHVlX19wb2ludGVyXCIsc3R5bGU6e3RvcDpwb2ludGVyVG9wLGxlZnQ6cG9pbnRlckxlZnR9fSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2MtaHVlX19waWNrZXJcIn0pXSldKV0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2MoXCJkaXZcIix7cmVmOlwiY29udGFpbmVyXCIsc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NhdHVyYXRpb25cIixzdHlsZTp7YmFja2dyb3VuZDpiZ0NvbG9yfSxvbjp7bW91c2Vkb3duOmhhbmRsZU1vdXNlRG93bn19LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2F0dXJhdGlvbi0td2hpdGVcIn0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2F0dXJhdGlvbi0tYmxhY2tcIn0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2F0dXJhdGlvbi0tcG9pbnRlclwiLHN0eWxlOnt0b3A6cG9pbnRlclRvcCxsZWZ0OnBvaW50ZXJMZWZ0fX0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zYXR1cmF0aW9uLS1jaXJjbGVcIn0pXSldKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19tYXRlcmlhbFwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuaGV4LGV4cHJlc3Npb246XCJjb2xvcnMuaGV4XCJ9XSxzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fbWF0ZXJpYWxfX2hleFwiLHN0eWxlOntib3JkZXJDb2xvcjpjb2xvcnMuaGV4fSxhdHRyczp7bGFiZWw6XCJoZXhcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5oZXh9LG9uOntcIm9uLWNoYW5nZVwiOm9uQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5oZXg9ZX19fSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19tYXRlcmlhbF9fc3BsaXRcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19tYXRlcmlhbF9fdGhpcmRcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLnJnYmEucixleHByZXNzaW9uOlwiY29sb3JzLnJnYmEuclwifV0sYXR0cnM6e2xhYmVsOlwiclwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLnJnYmEucn0sb246e1wib24tY2hhbmdlXCI6b25DaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEucj1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fbWF0ZXJpYWxfX3RoaXJkXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLmcsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLmdcIn1dLGF0dHJzOntsYWJlbDpcImdcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLmd9LG9uOntcIm9uLWNoYW5nZVwiOm9uQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLmc9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX21hdGVyaWFsX190aGlyZFwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMucmdiYS5iLGV4cHJlc3Npb246XCJjb2xvcnMucmdiYS5iXCJ9XSxhdHRyczp7bGFiZWw6XCJiXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMucmdiYS5ifSxvbjp7XCJvbi1jaGFuZ2VcIjpvbkNoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMucmdiYS5iPWV9fX0pXSldKV0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NsaWRlclwifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NsaWRlcl9faHVlLXdhcnBcIn0sW19jKFwiaHVlXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycyxleHByZXNzaW9uOlwiY29sb3JzXCJ9XSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzfSxvbjp7XCJvbi1jaGFuZ2VcIjpodWVDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaGVzXCJ9LF9sKHN3YXRjaGVzLGZ1bmN0aW9uKGUsbyl7cmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaFwiLGF0dHJzOntcImRhdGEtaW5kZXhcIjpvfSxvbjp7Y2xpY2s6ZnVuY3Rpb24odCl7aGFuZGxlU3dDbGljayhvLGUpfX19LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2gtcGlja2VyXCIsXCJjbGFzc1wiOntcInZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2gtcGlja2VyLS1hY3RpdmVcIjplPT1hY3RpdmVPZmZzZXR9LHN0eWxlOntiYWNrZ3JvdW5kOlwiaHNsKFwiK2NvbG9ycy5oc2wuaCtcIiwgNTAlLCBcIisxMDAqZStcIiUpXCJ9fSldKX0pKV0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3N3YXRjaGVzXCIsYXR0cnM6e1wiZGF0YS1waWNrXCI6cGlja319LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc3dhdGNoZXNfX2JveFwifSxfbChkZWZhdWx0Q29sb3JzLGZ1bmN0aW9uKGUpe3JldHVybiBfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc3dhdGNoZXNfX2NvbG9yLWdyb3VwXCJ9LF9sKGUsZnVuY3Rpb24oZSl7cmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zd2F0Y2hlc19fY29sb3ItaXRcIixzdHlsZTp7YmFja2dyb3VuZDplfSxhdHRyczp7XCJkYXRhLWNvbG9yXCI6ZX0sb246e2NsaWNrOmZ1bmN0aW9uKG8pe2hhbmRsZXJDbGljayhlKX19fSxbX2MoXCJkaXZcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOmU9PXBpY2ssZXhwcmVzc2lvbjpcImMgPT0gcGlja1wifV0sc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3N3YXRjaGVzX19waWNrXCJ9LFtfYyhcInN2Z1wiLHtzdGF0aWNTdHlsZTp7d2lkdGg6XCIyNHB4XCIsaGVpZ2h0OlwiMjRweFwifSxhdHRyczp7dmlld0JveDpcIjAgMCAyNCAyNFwifX0sW19jKFwicGF0aFwiLHthdHRyczp7ZDpcIk0yMSw3TDksMTlMMy41LDEzLjVMNC45MSwxMi4wOUw5LDE2LjE3TDE5LjU5LDUuNTlMMjEsN1pcIn19KV0pXSldKX0pKX0pKV0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19oZWFkXCJ9LFtfdihfcyhoZWFkKSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2JvZHlcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19zYXR1cmF0aW9uLXdyYXBcIn0sW19jKFwic2F0dXJhdGlvblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMsZXhwcmVzc2lvbjpcImNvbG9yc1wifV0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9yc30sb246e1wib24tY2hhbmdlXCI6Y2hpbGRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtd3JhcFwifSxbX2MoXCJodWVcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLGV4cHJlc3Npb246XCJjb2xvcnNcIn1dLGF0dHJzOntkaXJlY3Rpb246XCJ2ZXJ0aWNhbFwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzfSxvbjp7XCJvbi1jaGFuZ2VcIjpjaGlsZENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnM9ZX19fSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS1wb2ludGVyXCJ9LFtfYyhcImlcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS1wb2ludGVyLS1sZWZ0XCJ9KSxfYyhcImlcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS1wb2ludGVyLS1yaWdodFwifSldKV0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19jb250cm9sc1wifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX3ByZXZpZXdzXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3NfX2xhYmVsXCJ9LFtfdihcIm5ld1wiKV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3NfX3N3YXRjaGVzXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3NfX3ByLWNvbG9yXCIsc3R5bGU6e2JhY2tncm91bmQ6Y29sb3JzLmhleH19KSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX3ByZXZpZXdzX19wci1jb2xvclwiLHN0eWxlOntiYWNrZ3JvdW5kOmN1cnJlbnRDb2xvcn19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3NfX2xhYmVsXCJ9LFtfdihcImN1cnJlbnRcIildKV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fYWN0aW9uc1wifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2FjLWJ0blwiLG9uOntjbGljazpoYW5kbGVBY2NlcHR9fSxbX3YoXCJPS1wiKV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fYWMtYnRuXCIsb246e2NsaWNrOmhhbmRsZUNhbmNlbH19LFtfdihcIkNhbmNlbFwiKV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fZmllbGRzXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5oc2wuaCxleHByZXNzaW9uOlwiY29sb3JzLmhzbC5oXCJ9XSxhdHRyczp7bGFiZWw6XCJoXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuaHNsLmh9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5oc2wuaD1lfX19KSxfdihcIiBcIiksX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuaHNsLnMsZXhwcmVzc2lvbjpcImNvbG9ycy5oc2wuc1wifV0sYXR0cnM6e2xhYmVsOlwic1wifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLmhzbC5zfSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMuaHNsLnM9ZX19fSksX3YoXCIgXCIpLF9jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmhzbC5sLGV4cHJlc3Npb246XCJjb2xvcnMuaHNsLmxcIn1dLGF0dHJzOntsYWJlbDpcInZcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5oc2wubH0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmhzbC5sPWV9fX0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fZmllbGRzX19kaXZpZGVyXCJ9KSxfdihcIiBcIiksX3YoXCIgXCIpLF9jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLnJnYmEucixleHByZXNzaW9uOlwiY29sb3JzLnJnYmEuclwifV0sYXR0cnM6e2xhYmVsOlwiclwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLnJnYmEucn0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEucj1lfX19KSxfdihcIiBcIiksX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMucmdiYS5nLGV4cHJlc3Npb246XCJjb2xvcnMucmdiYS5nXCJ9XSxhdHRyczp7bGFiZWw6XCJnXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMucmdiYS5nfSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMucmdiYS5nPWV9fX0pLF92KFwiIFwiKSxfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLmIsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLmJcIn1dLGF0dHJzOntsYWJlbDpcImJcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLmJ9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLmI9ZX19fSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19maWVsZHNfX2RpdmlkZXJcIn0pLF92KFwiIFwiKSxfdihcIiBcIiksX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuaGV4LGV4cHJlc3Npb246XCJjb2xvcnMuaGV4XCJ9XSxzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fZmllbGRzX19oZXhcIixhdHRyczp7bGFiZWw6XCIjXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuaGV4fSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMuaGV4PWV9fX0pXSldKV0pXSldKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX3NhdHVyYXRpb24td3JhcFwifSxbX2MoXCJzYXR1cmF0aW9uXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycyxleHByZXNzaW9uOlwiY29sb3JzXCJ9XSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzfSxvbjp7XCJvbi1jaGFuZ2VcIjpjaGlsZENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnM9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fY29udHJvbHNcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX3NsaWRlcnNcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2h1ZS13cmFwXCJ9LFtfYyhcImh1ZVwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMsZXhwcmVzc2lvbjpcImNvbG9yc1wifV0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9yc30sb246e1wib24tY2hhbmdlXCI6Y2hpbGRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2FscGhhLXdyYXBcIn0sW19jKFwiYWxwaGFcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLGV4cHJlc3Npb246XCJjb2xvcnNcIn1dLGRvbVByb3BzOnt2YWx1ZTpjb2xvcnN9LG9uOntcIm9uLWNoYW5nZVwiOmNoaWxkQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycz1lfX19KV0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2NvbG9yLXdyYXBcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2FjdGl2ZS1jb2xvclwiLHN0eWxlOntiYWNrZ3JvdW5kOmFjdGl2ZUNvbG9yfX0pXSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fZmllbGRcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxkLS1kb3VibGVcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmhleCxleHByZXNzaW9uOlwiY29sb3JzLmhleFwifV0sYXR0cnM6e2xhYmVsOlwiaGV4XCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuaGV4XG59LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5oZXg9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fZmllbGQtLXNpbmdsZVwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMucmdiYS5yLGV4cHJlc3Npb246XCJjb2xvcnMucmdiYS5yXCJ9XSxhdHRyczp7bGFiZWw6XCJyXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMucmdiYS5yfSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMucmdiYS5yPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxkLS1zaW5nbGVcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLnJnYmEuZyxleHByZXNzaW9uOlwiY29sb3JzLnJnYmEuZ1wifV0sYXR0cnM6e2xhYmVsOlwiZ1wifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLnJnYmEuZ30sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEuZz1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoX19maWVsZC0tc2luZ2xlXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLmIsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLmJcIn1dLGF0dHJzOntsYWJlbDpcImJcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLmJ9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLmI9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fZmllbGQtLXNpbmdsZVwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuYSxleHByZXNzaW9uOlwiY29sb3JzLmFcIn1dLGF0dHJzOntsYWJlbDpcImFcIixcImFycm93LW9mZnNldFwiOi4wMSxtYXg6MX0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5hfSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMuYT1lfX19KV0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX3ByZXNldHNcIn0sX2wocHJlc2V0Q29sb3JzLGZ1bmN0aW9uKGUpe3JldHVybiBfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoX19wcmVzZXRzLWNvbG9yXCIsc3R5bGU6e2JhY2tncm91bmQ6ZX0sb246e2NsaWNrOmZ1bmN0aW9uKG8pe2hhbmRsZVByZXNldChlKX19fSl9KSldKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX3NhdHVyYXRpb24td3JhcFwifSxbX2MoXCJzYXR1cmF0aW9uXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycyxleHByZXNzaW9uOlwiY29sb3JzXCJ9XSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzfSxvbjp7XCJvbi1jaGFuZ2VcIjpjaGlsZENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnM9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fY2hyb21lLWJvZHlcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2NvbnRyb2xzXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19jb2xvci13cmFwXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19hY3RpdmUtY29sb3JcIixzdHlsZTp7YmFja2dyb3VuZDphY3RpdmVDb2xvcn19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19zbGlkZXJzXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19odWUtd3JhcFwifSxbX2MoXCJodWVcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLGV4cHJlc3Npb246XCJjb2xvcnNcIn1dLGRvbVByb3BzOnt2YWx1ZTpjb2xvcnN9LG9uOntcIm9uLWNoYW5nZVwiOmNoaWxkQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycz1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19hbHBoYS13cmFwXCJ9LFtfYyhcImFscGhhXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycyxleHByZXNzaW9uOlwiY29sb3JzXCJ9XSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzfSxvbjp7XCJvbi1jaGFuZ2VcIjpjaGlsZENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnM9ZX19fSldKV0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkcy13cmFwXCJ9LFtfYyhcImRpdlwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6MD09PWZpZWxkc0luZGV4LGV4cHJlc3Npb246XCJmaWVsZHNJbmRleCA9PT0gMFwifV0sc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fZmllbGRzXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZFwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuaGV4LGV4cHJlc3Npb246XCJjb2xvcnMuaGV4XCJ9XSxhdHRyczp7bGFiZWw6XCJoZXhcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5oZXh9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5oZXg9ZX19fSldKV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6MT09PWZpZWxkc0luZGV4LGV4cHJlc3Npb246XCJmaWVsZHNJbmRleCA9PT0gMVwifV0sc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fZmllbGRzXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZFwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMucmdiYS5yLGV4cHJlc3Npb246XCJjb2xvcnMucmdiYS5yXCJ9XSxhdHRyczp7bGFiZWw6XCJyXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMucmdiYS5yfSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMucmdiYS5yPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLmcsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLmdcIn1dLGF0dHJzOntsYWJlbDpcImdcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLmd9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLmc9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fZmllbGRcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLnJnYmEuYixleHByZXNzaW9uOlwiY29sb3JzLnJnYmEuYlwifV0sYXR0cnM6e2xhYmVsOlwiYlwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLnJnYmEuYn0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEuYj1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZFwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuYSxleHByZXNzaW9uOlwiY29sb3JzLmFcIn1dLGF0dHJzOntsYWJlbDpcImFcIixcImFycm93LW9mZnNldFwiOi4wMSxtYXg6MX0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5hfSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMuYT1lfX19KV0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZToyPT09ZmllbGRzSW5kZXgsZXhwcmVzc2lvbjpcImZpZWxkc0luZGV4ID09PSAyXCJ9XSxzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZHNcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5oc2wuaCxleHByZXNzaW9uOlwiY29sb3JzLmhzbC5oXCJ9XSxhdHRyczp7bGFiZWw6XCJoXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuaHNsLmh9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5oc2wuaD1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZFwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuaHNsLnMsZXhwcmVzc2lvbjpcImNvbG9ycy5oc2wuc1wifV0sYXR0cnM6e2xhYmVsOlwic1wifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLmhzbC5zfSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMuaHNsLnM9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fZmllbGRcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmhzbC5sLGV4cHJlc3Npb246XCJjb2xvcnMuaHNsLmxcIn1dLGF0dHJzOntsYWJlbDpcImxcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5oc2wubH0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmhzbC5sPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5hLGV4cHJlc3Npb246XCJjb2xvcnMuYVwifV0sYXR0cnM6e2xhYmVsOlwiYVwiLFwiYXJyb3ctb2Zmc2V0XCI6LjAxLG1heDoxfSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLmF9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5hPWV9fX0pXSldKSxfdihcIiBcIiksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX3RvZ2dsZS1idG5cIixvbjp7Y2xpY2s6dG9nZ2xlVmlld3N9fSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9faWNvblwifSxbX2MoXCJzdmdcIix7c3RhdGljU3R5bGU6e3dpZHRoOlwiMjRweFwiLGhlaWdodDpcIjI0cHhcIn0sYXR0cnM6e3ZpZXdCb3g6XCIwIDAgMjQgMjRcIn0sb246e21vdXNlb3ZlcjpzaG93SGlnaGxpZ2h0LG1vdXNlZW50ZXI6c2hvd0hpZ2hsaWdodCxtb3VzZW91dDpoaWRlSGlnaGxpZ2h0fX0sW19jKFwicGF0aFwiLHthdHRyczp7ZmlsbDpcIiMzMzNcIixkOlwiTTEyLDE4LjE3TDguODMsMTVMNy40MiwxNi40MUwxMiwyMUwxNi41OSwxNi40MUwxNS4xNywxNU0xMiw1LjgzTDE1LjE3LDlMMTYuNTgsNy41OUwxMiwzTDcuNDEsNy41OUw4LjgzLDlMMTIsNS44M1pcIn19KV0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTpoaWdobGlnaHQsZXhwcmVzc2lvbjpcImhpZ2hsaWdodFwifV0sc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9faWNvbi1oaWdobGlnaHRcIn0pXSksX3YoXCIgXCIpXSldKV0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2MtYWxwaGFcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jLWFscGhhX19jaGVja2JvYXJkLXdyYXBcIn0sW19jKFwiY2hlY2tib2FyZFwiKV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fYy1hbHBoYV9fZ3JhZGllbnRcIixzdHlsZTp7YmFja2dyb3VuZDpncmFkaWVudENvbG9yfX0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtyZWY6XCJjb250YWluZXJcIixzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fYy1hbHBoYV9fY29udGFpbmVyXCIsb246e21vdXNlZG93bjpoYW5kbGVNb3VzZURvd24sdG91Y2htb3ZlOmhhbmRsZUNoYW5nZSx0b3VjaHN0YXJ0OmhhbmRsZUNoYW5nZX19LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fYy1hbHBoYV9fcG9pbnRlclwiLHN0eWxlOntsZWZ0OjEwMCpjb2xvcnMuYStcIiVcIn19LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fYy1hbHBoYV9fcGlja2VyXCJ9KV0pXSldKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jLWNoZWNrZXJib2FyZFwiLHN0eWxlOntiYWNrZ3JvdW5kOmJnU3R5bGV9fSl9LHN0YXRpY1JlbmRlckZuczpbXX19LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcj10KDIxKTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1tlLmlkLHIsXCJcIl1dKTt0KDIpKHIse30pO3IubG9jYWxzJiYoZS5leHBvcnRzPXIubG9jYWxzKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByPXQoMjIpO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaWQscixcIlwiXV0pO3QoMikocix7fSk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHI9dCgyMyk7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbZS5pZCxyLFwiXCJdXSk7dCgyKShyLHt9KTtyLmxvY2FscyYmKGUuZXhwb3J0cz1yLmxvY2Fscyl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcj10KDI0KTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1tlLmlkLHIsXCJcIl1dKTt0KDIpKHIse30pO3IubG9jYWxzJiYoZS5leHBvcnRzPXIubG9jYWxzKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByPXQoMjUpO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaWQscixcIlwiXV0pO3QoMikocix7fSk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHI9dCgyNik7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbZS5pZCxyLFwiXCJdXSk7dCgyKShyLHt9KTtyLmxvY2FscyYmKGUuZXhwb3J0cz1yLmxvY2Fscyl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcj10KDI3KTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1tlLmlkLHIsXCJcIl1dKTt0KDIpKHIse30pO3IubG9jYWxzJiYoZS5leHBvcnRzPXIubG9jYWxzKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByPXQoMjgpO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaWQscixcIlwiXV0pO3QoMikocix7fSk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHI9dCgyOSk7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbZS5pZCxyLFwiXCJdXSk7dCgyKShyLHt9KTtyLmxvY2FscyYmKGUuZXhwb3J0cz1yLmxvY2Fscyl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcj10KDMwKTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1tlLmlkLHIsXCJcIl1dKTt0KDIpKHIse30pO3IubG9jYWxzJiYoZS5leHBvcnRzPXIubG9jYWxzKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByPXQoMzEpO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaWQscixcIlwiXV0pO3QoMikocix7fSk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHI9dCgzMik7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbZS5pZCxyLFwiXCJdXSk7dCgyKShyLHt9KTtyLmxvY2FscyYmKGUuZXhwb3J0cz1yLmxvY2Fscyl9XSl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWNvbG9yL2Rpc3QvdnVlLWNvbG9yLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gMjU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8dmlkZW8gcmVmPVwicGxheWVyXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwidmlkZW8tanMgdmpzLWRlZmF1bHQtc2tpblwiXG4gICAgICAgICAgICAgICBjb250cm9scyBwcmVsb2FkPVwiYXV0b1wiXG4gICAgICAgICAgICAgICA6cG9zdGVyPVwicG9zdGVyXCJcbiAgICAgICAgICAgICAgIDpkYXRhLXNldHVwPVwic3RyU291cmNlXCJcbiAgICAgICAgPjwvdmlkZW8+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlPlxuICAgICN2aWRlby1jYW52YXMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQge2Rpc3BhdGNoLCBnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBsYXllcjoge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHNvdXJjZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBvc3Rlcjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgc3RyU291cmNlKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuc291cmNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICB0aGlzLmluaXRQbGF5ZXIodGhpcy5zb3VyY2UpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBhcGkoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbml0UGxheWVyKHNvdXJjZSl7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYuc291cmNlKTtcbiAgICAgICAgICAgICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICBmbHVpZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2Uuc291cmNlc1swXSxcbiAgICAgICAgICAgICAgICAgICAgdGVjaE9yZGVyOiBbJ3lvdXR1YmUnXSxcbiAgICAgICAgICAgICAgICAgICAgcGxheWJhY2tSYXRlczogWzAuMjUsIDAuNSwgMSwgMS41LCAyXSxcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVByb2dyZXNzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFiTG9vcFBsdWdpbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BJZkJlZm9yZVN0YXJ0OiBmYWxzZSwgLy9hbGxvdyB2aWRlbyB0byBwbGF5IG5vcm1hbGx5IGJlZm9yZSB0aGUgbG9vcCBzZWN0aW9uPyBkZWZhdWx0cyB0byB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9vb3BJZkFmdGVyRW5kOiB0cnVlLCAvLyBkZWZhdWx0cyB0byB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF1c2VBZnRlckxvb3Bpbmc6IGZhbHNlLCAgICAgICAvL2lmIHRydWUsIGFmdGVyIGxvb3BpbmcgdmlkZW8gd2lsbCBwYXVzZS4gRGVmYXVsdHMgdG8gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXVzZUJlZm9yZUxvb3Bpbmc6IGZhbHNlLCAgICAgIC8vaWYgdHJ1ZSwgYmVmb3JlIGxvb3BpbmcgdmlkZW8gd2lsbCBwYXVzZS4gRGVmYXVsdHMgdG8gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b25zOiBmYWxzZSwgIC8vZGVmYXVsdHMgdG8gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vZmZzZXQuc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLnBsdWdpbnMuZG5jb2Zmc2V0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRPZmZzZXQ6IHRoaXMub2Zmc2V0LnN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kT2Zmc2V0OiB0aGlzLm9mZnNldC5lbmRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllciA9IHZpZGVvanModGhpcy4kcmVmcy5wbGF5ZXIsIGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFBsYXllcicsIHRoaXMucGxheWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCBmdW5jdGlvbiBkdXJhdGlvblNldHRlcihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZSgnKicpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXRlLnBsYXllci5kdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldER1cmF0aW9uJywgc3RhdGUucGxheWVyLmluc3RhbmNlLmR1cmF0aW9uKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFpvb20nLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5wbGF5ZXIuZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgncGxheWVyUmVhZHknLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5wbGF5ZXIuaW5zdGFuY2Uub2ZmKCd0aW1ldXBkYXRlJywgZHVyYXRpb25TZXR0ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgncGxheWVyUmVhZHknLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnBsYXllci5pbnN0YW5jZS5vZmYoJ3RpbWV1cGRhdGUnLCBkdXJhdGlvblNldHRlcilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXliYWNrUmF0ZSgxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsICgpPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0Q3VycmVudFRpbWUnLCB0aGlzLnBsYXllci5jdXJyZW50VGltZSgpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHBsYXllci52dWU/MzkyNjU3YTAiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBpZD1cImluc3BlY3RvckJveFwiIGNsYXNzPVwiYm94IGJveC1zb2xpZCBjb2xsYXBzZWQtYm94XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XG4gICAgICAgICAgICA8IS0tIHRvb2xzIGJveCAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLXJpZ2h0IGJveC10b29sc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIGlkPVwiaW5zcGVjdG9yVG9vZ2xlclwiIHYtb246Y2xpY2s9XCJ0b29nbGVPcGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0PVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1vcmlnaW5hbC10aXRsZT1cIkNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLSAvLiB0b29scyAtLT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5pbnNwZWN0b3InKX19XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0IGluc3BlY3Rvci1pbmZvXCIgdi1pZj1cInRvdWNoXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCInYmFja2dyb3VuZDonK2JhY2tncm91bmQrJzsgaGVpZ2h0OjIwcHg7IHdpZHRoOjIwcHg7bWFyZ2luLXRvcDogMXB4OyBtYXJnaW4tcmlnaHQ6NXB4J1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnQgaW5zcGVjdG9yLWluZm8tLXRpdGxlXCI+e3t0aXRsZX19PC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1zdWNjZXNzXCI+e3tzdGFydH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwgbGFiZWwtZGFuZ2VyXCI+e3tlbmR9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cInRvdWNoXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbGJveC1jb250cm9scyBjb250cm9sLWluc3BlY3Rvci1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIiB2LW9uOmNsaWNrPVwiY3JlYXRlQWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJyZWNvcmRpbmdUb3VjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MuZW5kX2FjdGlvbicpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tc21cIiB2LW9uOmNsaWNrPVwicGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmFcIiA6Y2xhc3M9XCJ7J2ZhLXBsYXknOiFwbGF5aW5nLCdmYS1wYXVzZSB0ZXh0LWRhbmdlcic6cGxheWluZ31cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cGxheWluZz8kdCgnc2NvdXRpbmdzLnBhdXNlJyk6JHQoJ3Njb3V0aW5ncy5wbGF5Jyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgdi1vbjpjbGljaz1cImJhY2t3YXJkKDEwKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtZmFzdC1iYWNrd2FyZFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAgc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJiYWNrd2FyZCg1KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtYmFja3dhcmRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUgc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJmb3J3YXJkKDUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1mb3J3YXJkXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1IHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiB2LW9uOmNsaWNrPVwiZm9yd2FyZCgxMClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWZhc3QtZm9yd2FyZFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAgc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgdi1vbjpjbGljaz1cInBsYXliYWNrUmF0ZSgwLjI1KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjI1IHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiB2LW9uOmNsaWNrPVwicGxheWJhY2tSYXRlKDAuNSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC41IHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiB2LW9uOmNsaWNrPVwicGxheWJhY2tSYXRlKDEpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEgeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJwbGF5YmFja1JhdGUoMS41KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjUgeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJwbGF5YmFja1JhdGUoMilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMiB4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdGhsZXRlLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cInRvdWNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiBuby1wYWRkaW5nLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXRobGV0ZS1tZW51LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLmxlZnRfYWN0aW9ucycpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IG5vLXBhZGRpbmctbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0aGxldGUtbWVudS10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5yaWdodF9hY3Rpb25zJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtaWY9XCJ0b3VjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgbm8tcGFkZGluZy1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0aGxldGUtbWVudS1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhZ3MgOnRhZ3M9XCJ0YWdzTGVmdFwiIDpzZWxlY3RlZD1cImFjdGlvbi5sZWZ0VGFnc1wiIHR5cGU9XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uOnRhZy1kZWxldGVkPVwidGFnRGVsZXRlZExlZnRcIiB2LW9uOnRhZy1zZWxlY3RlZD1cInRhZ1NlbGVjdGVkTGVmdFwiPjwvdGFncz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IG5vLXBhZGRpbmctbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0aGxldGUtbWVudS1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhZ3MgOnRhZ3M9XCJ0YWdzUmlnaHRcIiA6c2VsZWN0ZWQ9XCJhY3Rpb24ucmlnaHRUYWdzXCIgdHlwZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uOnRhZy1kZWxldGVkPVwidGFnRGVsZXRlZFJpZ2h0XCIgdi1vbjp0YWctc2VsZWN0ZWQ9XCJ0YWdTZWxlY3RlZFJpZ2h0XCI+PC90YWdzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBpZD0naW5zcGVjdG9yJz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgcmVsPVwic3R5bGVzaGVldC9zY3NzXCI+XG4gICAgLmluc3BlY3Rvci1pbmZvIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIC5pbnNwZWN0b3ItaW5mby0tdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYXRobGV0ZS1tZW51IHtcblxuICAgICAgICAuZHJvcGRvd24ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmF0aGxldGUtbWVudS10aXRsZSB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2QzZTBlOTtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2QzZTBlOTtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkM2UwZTk7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXRobGV0ZS1tZW51LWxlZnQge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDNlMGU5O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QzZTBlOTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXRobGV0ZS1tZW51LXJpZ2h0IHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkM2UwZTk7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHtkaXNwYXRjaCwgZ2V0U3RhdGUsIHN1YnNjcmliZX0gZnJvbSAnbW9ja3N0YXRlJztcbiAgICBpbXBvcnQgaW5zcGVjdG9yU2tldGNoIGZyb20gJy4uL3NrZXRjaC9pbnNwZWN0b3JTa2V0Y2gnXG4gICAgaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVGltZUNvbnZlcnRlcidcbiAgICBpbXBvcnQgY29sbGlkZU1peGluIGZyb20gJ2Jhc2UvbWl4aW5zL2NvbGxpZGUnXG4gICAgaW1wb3J0IHV1aWRNaXhpbiBmcm9tICdiYXNlL21peGlucy91dWlkJ1xuICAgIGltcG9ydCBBY3Rpb24gZnJvbSAnLi4vc2tldGNoL2NvbXBvbmVudHMvdG91Y2hlcy9BY3Rpb24nXG4gICAgaW1wb3J0IHRhZ3MgZnJvbSAnLi4vdGFncy90YWdzLnZ1ZSc7XG4gICAgaW1wb3J0IGNvbW1vblNlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvY29tbW9uL2NvbW1vblNlcnZpY2UnXG4gICAgaW1wb3J0IHNjb3V0aW5nc0xvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL3Njb3V0aW5ncy9zY291dGluZ3MuanMnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGxvY2FsZXM6IHNjb3V0aW5nc0xvY2FsZXMsXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2g6IG51bGwsXG4gICAgICAgICAgICAgICAgYWN0aW9uczogW10sXG4gICAgICAgICAgICAgICAgcmVjb3JkaW5nVG91Y2g6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN0YXJ0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVkaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGVkaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0VGFnczogW10sXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0VGFnczogW10sXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhzbFwiOiB7XCJoXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFwic1wiOiAxLCBcImxcIjogMC40MzcyNTQ5MDE5NjA3ODQzLCBcImFcIjogMX0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhleFwiOiBcIiNEQkRGMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmdiYVwiOiB7XCJyXCI6IDIxOSwgXCJnXCI6IDIyMywgXCJiXCI6IDAsIFwiYVwiOiAxLCBcImFscGhhXCI6IDUwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHN2XCI6IHtcImhcIjogNjEuMDc2MjMzMTgzODU2NSwgXCJzXCI6IDEsIFwidlwiOiAwLjg3NDUwOTgwMzkyMTU2ODYsIFwiYVwiOiAxfSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGFnc0xlZnQ6IFtdLFxuICAgICAgICAgICAgICAgIHRhZ3NSaWdodDogW10sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwbGF5aW5nOiB7fSxcbiAgICAgICAgfSxcbiAgICAgICAgbWl4aW5zOiBbY29sbGlkZU1peGluLCB1dWlkTWl4aW5dLFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgJ29wZW4nOiBmdW5jdGlvbiAob3Blbiwgb2xkT3Blbikge1xuICAgICAgICAgICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3BlY3Rvci5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3BlY3Rvci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICB0YWdzXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKXtcbiAgICAgICAgICAgIHN1YnNjcmliZSh0aGlzLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFjdGlvbiA9PSAnc2V0U2VsZWN0ZWRUb3VjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaCA9IGdldFN0YXRlKCcqJykudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2g7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMgPSB0aGlzLnRvdWNoLmFjdGlvbnMuc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMgPSBbXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFjdGlvbiA9PSAnc2V0U2VsZWN0ZWRBY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBnZXRTdGF0ZSgnKicpLnRvdWNoTWFuYWdlci5zZWxlY3RlZEFjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWN0aW9uID09ICdyZWNvcmRpbmdUb3VjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRpbmdUb3VjaCA9IGdldFN0YXRlKCcqJykudG91Y2hNYW5hZ2VyLnJlY29yZGluZ1RvdWNoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb21tb25TZXJ2aWNlLmdldFRhZ3MoKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3NMZWZ0ID0gXy5jbG9uZURlZXAocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YWdzUmlnaHQgPSBfLmNsb25lRGVlcChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH0sIChlcnJvcik9PiB7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBidXMuJG9uKCd0b29nbGUtaW5zcGVjdG9yJywgKGlzT3Blbik9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlzT3BlbiA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgICAgICAgICAgICAgICAgICAgJC5BZG1pbkxURS5ib3hXaWRnZXQuY29sbGFwc2UoJCgnI2luc3BlY3RvclRvb2dsZXInKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3BlbiAhPSBpc09wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQuQWRtaW5MVEUuYm94V2lkZ2V0LmNvbGxhcHNlKCQoJyNpbnNwZWN0b3JUb29nbGVyJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9IGlzT3BlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgdGl0bGUoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b3VjaCA/IHRoaXMudG91Y2gudGV4dCA6ICcnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXJ0KCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG91Y2ggPyBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMudG91Y2guc3RhcnQpIDogbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b3VjaCA/IFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy50b3VjaC5lbmQpIDogbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYWNrZ3JvdW5kKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG91Y2ggPyB0aGlzLnRvdWNoLmNvbG9yLmhleCA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIG5ldyBwNShpbnNwZWN0b3JTa2V0Y2gpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB0b29nbGVPcGVuKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGF5KCl7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWluZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXJ0QWN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVSZXN1bHQgPSB0aGlzLmNoZWNrQ29sbGlkZUFjdGlvbnMoe1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogTWF0aC5mbG9vcih0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IE1hdGguZmxvb3IodGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSArIDFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoY29sbGlkZVJlc3VsdC5jb2xsaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb2xsaWRlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoID0gZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5kaXNhYmxlUHJvZ3Jlc3MuZGlzYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3VjaC5hY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSB0aGlzLnRvdWNoLmFjdGlvbnNbdGhpcy50b3VjaC5hY3Rpb25zLmxlbmd0aCAtIDFdLmVuZFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSB0aGlzLnRvdWNoLnN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3QgPSBuZXcgQWN0aW9uKE1hdGguZmxvb3Ioc3RhcnQpLCBNYXRoLmZsb29yKHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSksIF8uY2xvbmVEZWVwKHRoaXMudG91Y2guY29sb3IpKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2FkZEFjdGlvbicsIGFjdCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdyZWNvcmRpbmdBY3Rpb24nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkQWN0aW9uJywgYWN0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Q7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkub24oJ3RpbWV1cGRhdGUnLCB0aGlzLm9uU3RhcnRBY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnU2VsZWN0ZWRMZWZ0KHRhZyl7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IGdldFN0YXRlKCcqJykudG91Y2hNYW5hZ2VyLnNlbGVjdGVkQWN0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnLnV1aWQgPSB0aGlzLmdlbmVyYXRlVVVJRCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbi5sZWZ0VGFncy5wdXNoKHRhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ1NlbGVjdGVkUmlnaHQodGFnKXtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRBY3Rpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0YWcudXVpZCA9IHRoaXMuZ2VuZXJhdGVVVUlEKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLnJpZ2h0VGFncy5wdXNoKHRhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ0RlbGV0ZWRSaWdodCh0YWcpe1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBnZXRTdGF0ZSgnKicpLnRvdWNoTWFuYWdlci5zZWxlY3RlZEFjdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWdJbmRleCA9IF8uZmluZEluZGV4KHRoaXMuYWN0aW9uLnJpZ2h0VGFncywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnV1aWQgPT0gdGFnLnV1aWQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbi5yaWdodFRhZ3Muc3BsaWNlKHRhZ0luZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnRGVsZXRlZExlZnQodGFnKXtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRBY3Rpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFnSW5kZXggPSBfLmZpbmRJbmRleCh0aGlzLmFjdGlvbi5sZWZ0VGFncywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnV1aWQgPT0gdGFnLnV1aWQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbi5sZWZ0VGFncy5zcGxpY2UodGFnSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblN0YXJ0QWN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24uZW5kID0gTWF0aC5mbG9vcih0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIHZhciBjb2xsaWRlUmVzdWx0ID0gdGhpcy5jaGVja0NvbGxpZGVBY3Rpb25zKHRoaXMuYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sbGlkZVJlc3VsdC5jb2xsaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgncmVjb3JkaW5nQWN0aW9uJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLm9mZigndGltZXVwZGF0ZScsIHRoaXMub25TdGFydEFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLmVuZCA9IE1hdGguZmxvb3IodGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuZGlzYWJsZVByb2dyZXNzLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qIGVsc2UgaWYgKE1hdGguZmxvb3IodGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSA+IHRoaXMudG91Y2guZW5kKSB7XG4gICAgICAgICAgICAgICAgIHRoaXMuZWRpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLm9mZigndGltZXVwZGF0ZScsIHRoaXMub25TdGFydEFjdGlvbik7XG4gICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdyZWNvcmRpbmdBY3Rpb24nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLmVuZCA9IE1hdGguZmxvb3IodGhpcy50b3VjaC5lbmQpO1xuICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmRpc2FibGVQcm9ncmVzcy5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmRBY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdyZWNvcmRpbmdBY3Rpb24nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5vZmYoJ3RpbWV1cGRhdGUnLCB0aGlzLm9uU3RhcnRBY3Rpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkucGF1c2UoKVxuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuZGlzYWJsZVByb2dyZXNzLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkucGF1c2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVBY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QWN0aW9uKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxheWJhY2tSYXRlKHJhdGUpe1xuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkucGxheWJhY2tSYXRlKHJhdGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcndhcmQocyl7XG4gICAgICAgICAgICAgICAgdmFyIGZvcndhcmQgPSB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkgKyBzO1xuICAgICAgICAgICAgICAgIGlmIChmb3J3YXJkIDw9IHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuZHVyYXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKGZvcndhcmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUodGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5kdXJhdGlvbigpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFja3dhcmQocyl7XG4gICAgICAgICAgICAgICAgdmFyIGJhY2t3YXJkID0gdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpIC0gcztcbiAgICAgICAgICAgICAgICBpZiAoYmFja3dhcmQgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKGJhY2t3YXJkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBpbnNwZWN0b3IudnVlPzIyZDQxZTg0IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgaWQ9XCJ0aW1lbGluZUJveFwiIGNsYXNzPVwiYm94IGJveC1zb2xpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlclwiPlxuICAgICAgICAgICAgPCEtLSB0b29scyBib3ggLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodCBib3gtdG9vbHNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHYtb246Y2xpY2sucHJldmVudD1cInpvb21JblwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWm9vbSBJblwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNlYXJjaC1wbHVzXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdi1vbjpjbGljay5wcmV2ZW50PVwiem9vbU91dFwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJab29tIE91dFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNlYXJjaC1taW51c1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBpZD1cInRpbWVsaW5lVG9vZ2xlclwiIHYtb246Y2xpY2s9XCJ0b29nbGVPcGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0PVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1vcmlnaW5hbC10aXRsZT1cIkNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbWludXNcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gLy4gdG9vbHMgLS0+XG5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+XG5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50aW1lbGluZScpfX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J3RpbWVsaW5lJz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlPlxuXG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQge2Rpc3BhdGNoLCBnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcbiAgICBpbXBvcnQgdGltZWxpbmVTa2V0Y2ggZnJvbSAnLi4vc2tldGNoL3RpbWVsaW5lU2tldGNoJ1xuICAgIGltcG9ydCBzY291dGluZ3NMb2NhbGVzIGZyb20gJ2Jhc2UvbGFuZy9hZG1pbi9zY291dGluZ3Mvc2NvdXRpbmdzLmpzJztcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBsb2NhbGVzOiBzY291dGluZ3NMb2NhbGVzLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9wZW46IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgICdvcGVuJzogZnVuY3Rpb24gKG9wZW4sIG9sZE9wZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgICAgICAgICBwLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcC5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkKCl7XG4gICAgICAgICAgICBidXMuJG9uKCd0b29nbGUtdGltZWxpbmUnLCAoKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgICAgICAgICAgICAgICQuQWRtaW5MVEUuYm94V2lkZ2V0LmNvbGxhcHNlKCQoJyN0aW1lbGluZVRvb2dsZXInKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICB3aW5kb3cucCA9IG5ldyBwNSh0aW1lbGluZVNrZXRjaCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHRvb2dsZU9wZW4oKXtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHpvb21JbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0Wm9vbScsIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3IgKyAxKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0SW5pdGlhbGl6ZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgem9vbU91dCgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUudGltZWxpbmUuem9vbUZhY3RvciA+IHN0YXRlLnRpbWVsaW5lLmluaXRpYWxab29tRmFjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRab29tJywgc3RhdGUudGltZWxpbmUuem9vbUZhY3RvciAtIDEpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0SW5pdGlhbGl6ZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRpbWVsaW5lLnZ1ZT80NjcyYjBiOSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8YWRtaW4taGVhZGVyIDp0aXRsZT1cInRpdGxlXCIgOmJyZWFkY3J1bWJzPVwiYnJlYWRjcnVtYnNcIj48L2FkbWluLWhlYWRlcj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50IG92ZXJsYXktd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpcy1mbGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNiBwbGF5ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkbmMtcGxheWVyIHYtaWY9XCJpbml0aWFsaXplZFwiIDpzb3VyY2U9XCJzb3VyY2VcIiByZWY9XCJwbGF5ZXJcIj48L2RuYy1wbGF5ZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNiB0b3VjaGVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8dG91Y2hlcy1saXN0PjwvdG91Y2hlcy1saXN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1zaG93PVwicGxheWVyUmVhZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWlsYm94LWNvbnRyb2xzIGNvbnRyb2wtbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJzdGFydFRvdWNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cInN0YXJ0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhXCIgOmNsYXNzPVwieydmYS1wbGF5Jzohc3RhcnRlZCwnZmEtY2lyY2xlIHRleHQtZGFuZ2VyJzpzdGFydGVkfVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tzdGFydGVkPyR0KCdzY291dGluZ3MucmVjb3JkaW5nJyk6JHQoJ3Njb3V0aW5ncy5zdGFydF90b3VjaCcpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiIDpkaXNhYmxlZD1cIiFzdGFydGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb246Y2xpY2s9XCJlbmRUb3VjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtc3RvcFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLmVuZF90b3VjaCcpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgdi1vbjpjbGljaz1cInRvb2dsZVRpbWVsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnRvb2dsZV90aW1lbGluZScpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJ0b29nbGVJbnNwZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtZXllXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnRvb2dsZV9pbnNwZWN0b3InKX19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmJ0bi1ncm91cCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGVkaXQtdG91Y2gtZm9ybSB2LWlmPVwiZWRpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb246Y2FuY2VsLW5ldy10b3VjaD1cImNhbmNlbEVkaXRUb3VjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppbml0LXRvdWNoPVwidG91Y2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uOmFkZC1uZXctdG91Y2g9XCJzYXZlRWRpdFRvdWNoXCIgOmR1cmF0aW9uPVwiZHVyYXRpb25cIj48L2VkaXQtdG91Y2gtZm9ybT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnNwZWN0b3Igdi1pZj1cInBsYXllclJlYWR5XCIgcmVmPVwiaW5zcGVjdG9yXCIgOnBsYXlpbmc9XCJwbGF5aW5nXCI+PC9pbnNwZWN0b3I+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRpbWVsaW5lIHYtaWY9XCJwbGF5ZXJSZWFkeVwiPjwvdGltZWxpbmU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxnbG9iYWwtdGltZWxpbmUgdi1pZj1cInBsYXllclJlYWR5XCI+PC9nbG9iYWwtdGltZWxpbmU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiB2LXNob3c9XCJwbGF5ZXJSZWFkeVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtb246Y2xpY2s9XCJzYXZlXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+IHt7JHQoJ2Zvcm1zLnNhdmUnKX19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1vbjpjbGljaz1cImNhbmNlbFwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLWJsb2NrXCI+e3skdCgnZm9ybXMuYmFjaycpfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIiB2LWlmPVwiIXBsYXllclJlYWR5XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1yZWZyZXNoIGZhLXNwaW5cIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgZG5jUGxheWVyIGZyb20gJ2Jhc2UvY29tcG9uZW50cy9nbG9iYWwvdmlkZW8vcGxheWVyLnZ1ZSc7XG4gICAgaW1wb3J0IFRvdWNoIGZyb20gJy4vc2tldGNoL2NvbXBvbmVudHMvdG91Y2hlcy9Ub3VjaCc7XG4gICAgaW1wb3J0IHtzZXRTdGF0ZSwgc2V0QWN0aW9ucywgZ2V0U3RhdGUsIGRpc3BhdGNoLCBzdWJzY3JpYmV9IGZyb20gJ21vY2tzdGF0ZSc7XG4gICAgaW1wb3J0IHthY3Rpb25zfSBmcm9tICcuL3N0b3Jlcy9hY3Rpb25zJ1xuICAgIGltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RvcmVzL3N0b3JlJ1xuICAgIGltcG9ydCBWZWVWYWxpZGF0ZSwge1ZhbGlkYXRvcn0gZnJvbSAndmVlLXZhbGlkYXRlJztcbiAgICBpbXBvcnQgbmV3VG91Y2hGb3JtIGZyb20gJy4vZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZSc7XG4gICAgaW1wb3J0IGVkaXRUb3VjaEZvcm0gZnJvbSAnLi9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZSc7XG4gICAgaW1wb3J0IHRvdWNoZXNMaXN0IGZyb20gJy4vbGlzdHMvdG91Y2hlc0xpc3QudnVlJztcbiAgICBpbXBvcnQgdGltZWxpbmUgZnJvbSAnLi9jYW52YXMvdGltZWxpbmUudnVlJztcbiAgICBpbXBvcnQgaW5zcGVjdG9yIGZyb20gJy4vY2FudmFzL2luc3BlY3Rvci52dWUnO1xuICAgIGltcG9ydCBnbG9iYWxUaW1lbGluZSBmcm9tICcuL2NhbnZhcy9nbG9iYWxUaW1lbGluZS52dWUnO1xuICAgIGltcG9ydCBjb2xsaWRlTWl4aW4gZnJvbSAnYmFzZS9taXhpbnMvY29sbGlkZSc7XG4gICAgaW1wb3J0IGFkbWluSGVhZGVyIGZyb20gJ2Jhc2UvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWUnXG4gICAgaW1wb3J0IHNjb3V0aW5nU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9zY291dGluZ3Mvc2NvdXRpbmdTZXJ2aWNlJ1xuICAgIGltcG9ydCBzY291dGluZ1RvdWNoU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9zY291dGluZ3Mvc2NvdXRpbmdUb3VjaFNlcnZpY2UnXG4gICAgaW1wb3J0IEFjdGlvbiBmcm9tICcuL3NrZXRjaC9jb21wb25lbnRzL3RvdWNoZXMvQWN0aW9uJ1xuICAgIGltcG9ydCB1dWlkTWl4aW4gZnJvbSAnYmFzZS9taXhpbnMvdXVpZCdcbiAgICBpbXBvcnQgZXJyb3JQcmVzZW50ZXIgZnJvbSAnYmFzZS9taXhpbnMvYWpheC9lcnJvclByZXNlbnRlcidcbiAgICBpbXBvcnQgc2NvdXRpbmdzTG9jYWxlcyBmcm9tICdiYXNlL2xhbmcvYWRtaW4vc2NvdXRpbmdzL3Njb3V0aW5ncy5qcyc7XG5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgZG5jUGxheWVyLFxuICAgICAgICAgICAgbmV3VG91Y2hGb3JtLFxuICAgICAgICAgICAgZWRpdFRvdWNoRm9ybSxcbiAgICAgICAgICAgIHRvdWNoZXNMaXN0LFxuICAgICAgICAgICAgdGltZWxpbmUsXG4gICAgICAgICAgICBpbnNwZWN0b3IsXG4gICAgICAgICAgICBhZG1pbkhlYWRlcixcbiAgICAgICAgICAgIGdsb2JhbFRpbWVsaW5lXG4gICAgICAgIH0sXG4gICAgICAgIG1peGluczogW2NvbGxpZGVNaXhpbiwgdXVpZE1peGluLCBlcnJvclByZXNlbnRlcl0sXG4gICAgICAgIGxvY2FsZXM6IHNjb3V0aW5nc0xvY2FsZXMsXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNjb3V0aW5nOiB7fSxcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHt9LFxuICAgICAgICAgICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICBlZGl0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwbGF5aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzdGFydGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwbGF5ZXJSZWFkeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2g6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlZGl0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHNsXCI6IHtcImhcIjogNjEuMDc2MjMzMTgzODU2NSwgXCJzXCI6IDEsIFwibFwiOiAwLjQzNzI1NDkwMTk2MDc4NDMsIFwiYVwiOiAxfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGV4XCI6IFwiI0RCREYwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZ2JhXCI6IHtcInJcIjogMjE5LCBcImdcIjogMjIzLCBcImJcIjogMCwgXCJhXCI6IDEsIFwiYWxwaGFcIjogNTB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoc3ZcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJ2XCI6IDAuODc0NTA5ODAzOTIxNTY4NiwgXCJhXCI6IDF9LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgYnJlYWRjcnVtYnMoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL2Rhc2hib2FyZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2FkbWluLmhvbWUnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvc2NvdXRpbmdzL2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdhZG1pbi5zY291dGluZ3MnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvc2NvdXRpbmdzLycgKyB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQgKyAnL3RvdWNoZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdhZG1pbi50b3VjaGVzJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHQoJ2FkbWluLnNjb3V0aW5ncycpICsgJyAnICsgdGhpcy5zY291dGluZy5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKVxuICAgICAgICB7XG4gICAgICAgICAgICB3aW5kb3cudm0gPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSB3aW5kb3dbJ3NvdXJjZSddO1xuICAgICAgICAgICAgc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgc2V0QWN0aW9ucyhhY3Rpb25zKTtcbiAgICAgICAgICAgIHdpbmRvdy5nZXRTdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzdWJzY3JpYmUodGhpcywgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3Rpb24gPT0gJ3BsYXllclJlYWR5Jykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxheWVyUmVhZHkgc3Vic2NyaXB0JywgdGhpcy5wbGF5ZXJSZWFkeSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChnZXRTdGF0ZSgnKicpLnBsYXllclJlYWR5ICYmICF0aGlzLnBsYXllclJlYWR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclJlYWR5ID0gZ2V0U3RhdGUoJyonKS5wbGF5ZXJSZWFkeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRTY291dGluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2NvdXRpbmdTZXJ2aWNlLnNob3codGhpcy4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY291dGluZyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGVjaE9yZGVyJzogWyd5b3V0dWJlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NvdXJjZXMnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogXCJ2aWRlby95b3V0dWJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogcmVzcG9uc2UuZGF0YS52aWRlb19zcmNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgYnVzLiRvbignZWRpdC10b3VjaCcsICh0b3VjaCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFRvdWNoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0VG91Y2gobnVsbCwgdG91Y2gpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJ1cy4kb24oJ3JlbW92ZS10b3VjaCcsICh0b3VjaCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVUb3VjaCh0b3VjaClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKXtcblxuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVEZXN0cm95KCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVzdHJveSBob29rJyk7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5vZmYoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgbG9hZFNjb3V0aW5nKCl7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIF8uZWFjaCh0aGlzLnNjb3V0aW5nLnRvdWNoZXMsIGZ1bmN0aW9uICh0b3VjaCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0ID0gbmV3IFRvdWNoKHRvdWNoLnN0YXJ0LCB0b3VjaC5lbmQsIHRvdWNoLnRpdGxlLCB0b3VjaC5jb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdhZGRUb3VjaCcsIGFjdCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZFRvdWNoJywgYWN0KTtcbiAgICAgICAgICAgICAgICAgICAgXy5lYWNoKHRvdWNoLmFjdGlvbnMsIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3QgPSBuZXcgQWN0aW9uKGFjdGlvbi5zdGFydCwgYWN0aW9uLmVuZCwgYWN0aW9uLmNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdhZGRBY3Rpb24nLCBhY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkQWN0aW9uJywgYWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChhY3Rpb24ubGVmdFRhZ3MsIGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWcudXVpZCA9IHNlbGYuZ2VuZXJhdGVVVUlEKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2FkZExlZnRUYWcnLCB0YWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKGFjdGlvbi5yaWdodFRhZ3MsIGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWcudXVpZCA9IHNlbGYuZ2VuZXJhdGVVVUlEKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2FkZFJpZ2h0VGFnJywgdGFnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRBY3Rpb24nLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRUb3VjaCcsIG51bGwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluaXQoKXtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5vbigncGxheScsICgpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkub24oJ3BhdXNlJywgKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5vbigndGltZXVwZGF0ZScsICgpPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVSZXN1bHQgPSB0aGlzLmNoZWNrQ29sbGlkZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IE1hdGguZmxvb3IodGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBNYXRoLmZsb29yKHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlkZVJlc3VsdC5jb2xsaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpZGVSZXN1bHQuY29sbGlkZVRvdWNoZXNbMF0ucHJldmlvdXMgaW5zdGFuY2VvZiBUb3VjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG91Y2ggPSBjb2xsaWRlUmVzdWx0LmNvbGxpZGVUb3VjaGVzWzBdLnByZXZpb3VzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRUb3VjaCcsIHRvdWNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbGxpZGVSZXN1bHQuY29sbGlkZVRvdWNoZXNbMF0uY3VycmVudCBpbnN0YW5jZW9mIFRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b3VjaCA9IGNvbGxpZGVSZXN1bHQuY29sbGlkZVRvdWNoZXNbMF0uY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkVG91Y2gnLCB0b3VjaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkVG91Y2gnLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVBY3Rpb25SZXN1bHQgPSB0aGlzLmNoZWNrQ29sbGlkZUFjdGlvbnMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBNYXRoLmZsb29yKHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogTWF0aC5mbG9vcih0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpZGVBY3Rpb25SZXN1bHQuY29sbGlkZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlQWN0aW9uUmVzdWx0LmNvbGxpZGVBY3Rpb25zWzBdLnByZXZpb3VzIGluc3RhbmNlb2YgQWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBjb2xsaWRlQWN0aW9uUmVzdWx0LmNvbGxpZGVBY3Rpb25zWzBdLnByZXZpb3VzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRBY3Rpb24nLCBhY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29sbGlkZUFjdGlvblJlc3VsdC5jb2xsaWRlQWN0aW9uc1swXS5jdXJyZW50IGluc3RhbmNlb2YgQWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBjb2xsaWRlQWN0aW9uUmVzdWx0LmNvbGxpZGVBY3Rpb25zWzBdLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZEFjdGlvbicsIGFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkQWN0aW9uJywgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNoYW5nZUNvbG9yKHZhbCl7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaC5jb2xvciA9IHZhbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXJ0VG91Y2goKXtcbiAgICAgICAgICAgICAgICB2YXIgY29sbGlkZVJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IE1hdGguZmxvb3IodGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSksXG4gICAgICAgICAgICAgICAgICAgIGVuZDogTWF0aC5mbG9vcih0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSArIDFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoY29sbGlkZVJlc3VsdC5jb2xsaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuZXJyb3JUb2FzdCh0aGlzLiR0KCdzY291dGluZ3MudG91Y2hlc19jYW50X292ZXJsYXAnKSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmRpc2FibGVQcm9ncmVzcy5kaXNhYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3QgPSBuZXcgVG91Y2goTWF0aC5mbG9vcih0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSwgTWF0aC5mbG9vcih0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSwgdGhpcy50b3VjaC50ZXh0LCB0aGlzLnRvdWNoLmNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2FkZFRvdWNoJywgYWN0KTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3JlY29yZGluZ1RvdWNoJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9vZ2xlSW5zcGVjdG9yKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRUb3VjaCcsIGFjdCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuaW5zcGVjdG9yLnN0YXJ0QWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSBNYXRoLmZsb29yKHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmR1cmF0aW9uKCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaCA9IGFjdDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkub24oJ3RpbWV1cGRhdGUnLCBzZWxmLm9uU3RhcnRUb3VjaCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblN0YXJ0VG91Y2goKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoLmVuZCA9IE1hdGguZmxvb3IodGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVSZXN1bHQgPSB0aGlzLmNoZWNrQ29sbGlkZSh0aGlzLnRvdWNoKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sbGlkZVJlc3VsdC5jb2xsaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgncmVjb3JkaW5nVG91Y2gnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLm9mZigndGltZXVwZGF0ZScsIHRoaXMub25TdGFydFRvdWNoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaC5lbmQgPSBNYXRoLmZsb29yKHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkucGF1c2UoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LmVycm9yVG9hc3QodGhpcy4kdCgnc2NvdXRpbmdzLnRvdWNoZXNfY2FudF9vdmVybGFwJykpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmRpc2FibGVQcm9ncmVzcy5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5kVG91Y2goKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdyZWNvcmRpbmdUb3VjaCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5vZmYoJ3RpbWV1cGRhdGUnLCB0aGlzLm9uU3RhcnRUb3VjaCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkucGF1c2UoKVxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmRpc2FibGVQcm9ncmVzcy5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuaW5zcGVjdG9yLmVuZEFjdGlvbigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVkaXRUb3VjaChldmVudCwgdG91Y2gpe1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2ggPSB0b3VjaDtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXQgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhdmVOZXdUb3VjaCh0b3VjaCl7XG4gICAgICAgICAgICAgICAgdmFyIGFjdCA9IG5ldyBUb3VjaCh0b3VjaC5zdGFydCwgdG91Y2guZW5kLCB0b3VjaC50ZXh0LCB0b3VjaC5jb2xvcik7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2FkZFRvdWNoJywgYWN0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0VG91Y2goKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYW5jZWxOZXdUb3VjaCgpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRUb3VjaCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhdmVFZGl0VG91Y2godG91Y2gpe1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdlZGl0VG91Y2gnLCB0b3VjaCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFRvdWNoKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FuY2VsRWRpdFRvdWNoKHRvdWNoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXNldFRvdWNoKCl7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaCA9IHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlZGl0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHNsXCI6IHtcImhcIjogNjEuMDc2MjMzMTgzODU2NSwgXCJzXCI6IDEsIFwibFwiOiAwLjQzNzI1NDkwMTk2MDc4NDMsIFwiYVwiOiAxfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGV4XCI6IFwiI0RCREYwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZ2JhXCI6IHtcInJcIjogMjE5LCBcImdcIjogMjIzLCBcImJcIjogMCwgXCJhXCI6IDEsIFwiYWxwaGFcIjogNTB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoc3ZcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJ2XCI6IDAuODc0NTA5ODAzOTIxNTY4NiwgXCJhXCI6IDF9LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29nbGVUaW1lbGluZSgpe1xuICAgICAgICAgICAgICAgIGJ1cy4kZW1pdCgndG9vZ2xlLXRpbWVsaW5lJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vZ2xlSW5zcGVjdG9yKGlzT3Blbil7XG4gICAgICAgICAgICAgICAgYnVzLiRlbWl0KCd0b29nbGUtaW5zcGVjdG9yJywgaXNPcGVuKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmVUb3VjaCh0b3VjaClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAodG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3JlbW92ZVRvdWNoJywgdG91Y2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNhdmUoKXtcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hlcyA9IGdldFN0YXRlKCcqJykudG91Y2hNYW5hZ2VyLnRvdWNoZXM7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRvdWNoZXMgPSB0aGlzLmZvcm1hdFNvY3V0aW5nKHRvdWNoZXMpO1xuICAgICAgICAgICAgICAgIHNjb3V0aW5nVG91Y2hTZXJ2aWNlLnVwZGF0ZSh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsIHt0b3VjaGVzOiB0b3VjaGVzfSwgKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5zdWNjZXNzVG9hc3QocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzY291dGluZ3MubGlzdCdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcihyZXNwb25zZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbmNlbCgpe1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Njb3V0aW5ncy5saXN0J1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9ybWF0U29jdXRpbmcodG91Y2hlcyl7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICBfLmVhY2godG91Y2hlcywgKHRvdWNoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFUb3VjaCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7J2VzJzogdG91Y2gudGV4dCwgJ2VuJzogdG91Y2gudGV4dH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogdG91Y2guc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHRvdWNoLmVuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0b3VjaC5jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0b3VjaC5lbmQgLSB0b3VjaC5zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFtdXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfLmVhY2godG91Y2guYWN0aW9ucywgKGFjdGlvbik9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YUFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogYWN0aW9uLnN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogYWN0aW9uLmVuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYWN0aW9uLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBhY3Rpb24uZW5kIC0gYWN0aW9uLnN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRUYWdzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFRhZ3M6IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goYWN0aW9uLmxlZnRUYWdzLCAodGFnKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YVRhZyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUYWcuaWQgPSB0YWcuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVRhZy5kcm9wZG93biA9IHRhZy5kcm9wZG93bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnLmRyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUYWcub3B0aW9uID0ge2lkOiB0YWcub3B0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQWN0aW9uLmxlZnRUYWdzLnB1c2goZGF0YVRhZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKGFjdGlvbi5yaWdodFRhZ3MsICh0YWcpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhVGFnID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVRhZy5pZCA9IHRhZy5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVGFnLmRyb3Bkb3duID0gdGFnLmRyb3Bkb3duO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWcuZHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVRhZy5vcHRpb24gPSB7aWQ6IHRhZy5vcHRpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFBY3Rpb24ucmlnaHRUYWdzLnB1c2goZGF0YVRhZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUb3VjaC5hY3Rpb25zLnB1c2goZGF0YUFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goZGF0YVRvdWNoKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBlZGl0LnZ1ZT8wMWY3ZjZmOCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiB2LW9uOnN1Ym1pdC5wcmV2ZW50PVwib25TdWJtaXRcIiBjbGFzcz1cImZvcm0taG9yaXpvbnRhbCBmb3JtLXRvdWNoXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaHRleHQnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmV3LXRpdGxlXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnRpdGxlJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuZXctdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG91Y2h0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInRvdWNoLnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJlcnJvcnMuaGFzKCd0b3VjaHRleHQnKVwiPnt7IGVycm9ycy5maXJzdCgndG91Y2h0ZXh0JykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmV3LXRpdGxlXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLmNvbG9yJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29tcGFjdC1waWNrZXIgdi1tb2RlbD1cInRvdWNoLmNvbG9yXCIgQGNoYW5nZS1jb2xvcj1cIm9uQ2hhbmdlQ29sb3JcIj48L2NvbXBhY3QtcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaHN0YXJ0JykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5ldy1zdGFydFwiIGNsYXNzPVwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5zdGFydCcpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5ldy1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvdWNoc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWR8bnVtZXJpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cIlN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInRvdWNoLnN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5ldy1zdGFydC1mbXRcIiBuYW1lPVwibmV3LXN0YXJ0LWZtdFwiIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic3RhcnRGbXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygndG91Y2hzdGFydCcpXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaHN0YXJ0JykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaGVuZCcpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuZXctZW5kXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLmVuZCcpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5ldy1lbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3VjaGVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XCJyZXF1aXJlZHxudW1lcmljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVwiRW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0b3VjaC5lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LWVuZC1mbXRcIiBuYW1lPVwibmV3LWVuZC1mbXRcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImVuZEZtdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJlcnJvcnMuaGFzKCd0b3VjaGVuZCcpXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaGVuZCcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cImNvbGxpZGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsOXPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uIGZhIGZhLWJhblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hlc19jYW50X292ZXJsYXAnKX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnRvdWNoX292ZXJsYXBfd2l0aCcpfX06XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiY29sbGlkZVRvdWNoIGluIGNvbGxpZGVUb3VjaGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgdi1pZj1cImNvbGxpZGVUb3VjaC5wcmV2aW91cy5pZCAhPSB0b3VjaC5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnRvdWNoX292ZXJsYXBfbXNnJyx7IHRpdGxlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZVRvdWNoLnByZXZpb3VzLnRleHQsc3RhcnQ6dG9ISE1NU1MoY29sbGlkZVRvdWNoLnByZXZpb3VzLnN0YXJ0KSxlbmQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0hITU1TUyhjb2xsaWRlVG91Y2gucHJldmlvdXMuZW5kKX0pfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgdi1pZj1cImNvbGxpZGVUb3VjaC5jdXJyZW50LmlkICE9IHRvdWNoLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hfb3ZlcmxhcF9tc2cnLHsgdGl0bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaWRlVG91Y2guY3VycmVudC50ZXh0LHN0YXJ0OnRvSEhNTVNTKGNvbGxpZGVUb3VjaC5jdXJyZW50LnN0YXJ0KSxlbmQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0hITU1TUyhjb2xsaWRlVG91Y2guY3VycmVudC5lbmQpfSl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiB2LWlmPVwiZW5kSW52YWxpZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24gZmEgZmEtYmFuXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy52YWxpZGF0aW9uX2Vycm9yJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy52YWxpZGF0aW9uX2VuZF9ncmVhdGVyJyl9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPnt7JHQoJ3Njb3V0aW5ncy5zYXZlJyl9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XCJjbG9zZVwiPnt7JHQoJ3Njb3V0aW5ncy5jYW5jZWwnKX19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZT5cblxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHtnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcbiAgICBpbXBvcnQge0NvbXBhY3R9IGZyb20gJ3Z1ZS1jb2xvcic7XG4gICAgaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVGltZUNvbnZlcnRlcidcbiAgICBpbXBvcnQgY29sbGlkZU1peGluIGZyb20gJ2Jhc2UvbWl4aW5zL2NvbGxpZGUnXG4gICAgaW1wb3J0IHNjb3V0aW5nc0xvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL3Njb3V0aW5ncy9zY291dGluZ3MuanMnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGxvY2FsZXM6IHNjb3V0aW5nc0xvY2FsZXMsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBpbml0VG91Y2g6IHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZzogNzcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGI6IDUxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkdXJhdGlvbjoge30sXG4gICAgICAgIH0sXG4gICAgICAgIG1peGluczogW2NvbGxpZGVNaXhpbl0sXG4gICAgICAgIGNyZWF0ZWQoKXtcbiAgICAgICAgICAgIHRoaXMudG91Y2ggPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmluaXRUb3VjaCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICAndG91Y2guc3RhcnQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVSZXN1bHQgPSB0aGlzLmNoZWNrQ29sbGlkZSh0aGlzLnRvdWNoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGUgPSBjb2xsaWRlUmVzdWx0LmNvbGxpZGU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlVG91Y2hlcyA9IGNvbGxpZGVSZXN1bHQuY29sbGlkZVRvdWNoZXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3RvdWNoLmVuZCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29sbGlkZVJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlKHRoaXMudG91Y2gpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZSA9IGNvbGxpZGVSZXN1bHQuY29sbGlkZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGVUb3VjaGVzID0gY29sbGlkZVJlc3VsdC5jb2xsaWRlVG91Y2hlcztcbiAgICAgICAgICAgICAgICB0aGlzLmVuZEludmFsaWQgPSBwYXJzZUludCh0aGlzLnRvdWNoLnN0YXJ0KSA+PSBwYXJzZUludCh0aGlzLnRvdWNoLmVuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29sbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29sbGlkZVRvdWNoZXM6IFtdLFxuICAgICAgICAgICAgICAgIGVuZEludmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRvdWNoOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZ2JhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcjogMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZzogNzcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYjogNTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYTogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHN0YXJ0Rm10KCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy50b3VjaC5zdGFydClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmRGbXQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnRvdWNoLmVuZClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWxpZGF0aW9uRW5kKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ2NvbXBhY3QtcGlja2VyJzogQ29tcGFjdCxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgY2xvc2UoKXtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjYW5jZWwtbmV3LXRvdWNoJywgdGhpcy50b3VjaCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9ISE1NU1Moc2Vjcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHNlY3MpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DaGFuZ2VDb2xvcih2YWwpe1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2guY29sb3IgPSB2YWxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblN1Ym1pdCgpe1xuICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpLnRoZW4oKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvdWNoLnN0YXJ0ID49IHRoaXMudG91Y2guZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZEludmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRJbnZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29sbGlkZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2FkZC1uZXctdG91Y2gnLCB0aGlzLnRvdWNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGJhZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuZXJyb3JUb2FzdCh0aGlzLiR0KCdhZG1pbi52YWxpZGF0aW9uX2Vycm9yJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG48c3R5bGU+XG4gICAgLnZ1ZS1jb2xvcl9fY29tcGFjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZWRpdFRvdWNoRm9ybS52dWU/Zjc1NmZmYjAiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgdi1vbjpzdWJtaXQucHJldmVudD1cIm9uU3VibWl0XCIgY2xhc3M9XCJmb3JtLWhvcml6b250YWwgZm9ybS10b3VjaFwiIHYtaWY9XCJvcGVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaC50ZXh0JykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5ldy10aXRsZVwiIGNsYXNzPVwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LXRpdGxlXCIgbmFtZT1cIm5ldy10aXRsZVwiIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsPVwidG91Y2gudGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcnVsZXM9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYXM9XCJUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0b3VjaC50ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygndG91Y2gudGV4dCcpXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaC50ZXh0JykgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmV3LXRpdGxlXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvbXBhY3QtcGlja2VyIHYtbW9kZWw9XCJ0b3VjaC5jb2xvclwiIEBjaGFuZ2UtY29sb3I9XCJvbkNoYW5nZUNvbG9yXCI+PC9jb21wYWN0LXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygndG91Y2guc3RhcnQnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmV3LXN0YXJ0XCIgY2xhc3M9XCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnQgKHNlYylcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5ldy1zdGFydFwiIG5hbWU9XCJuZXctc3RhcnRcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsPVwidG91Y2guc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcnVsZXM9XCJyZXF1aXJlZHxudW1lcmljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFzPVwiU3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidG91Y2guc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LXN0YXJ0LWZtdFwiIG5hbWU9XCJuZXctc3RhcnQtZm10XCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzdGFydEZtdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJlcnJvcnMuaGFzKCd0b3VjaC5zdGFydCcpXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaC5zdGFydCcpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygndG91Y2guZW5kJykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5ldy1lbmRcIiBjbGFzcz1cImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmQoc2VjKVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LWVuZFwiIG5hbWU9XCJuZXctZW5kXCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbD1cInRvdWNoLmVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1ydWxlcz1cInJlcXVpcmVkfG51bWVyaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYXM9XCJFbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInRvdWNoLmVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuZXctZW5kLWZtdFwiIG5hbWU9XCJuZXctZW5kLWZtdFwiIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZW5kRm10XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ3RvdWNoLmVuZCcpXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaC5lbmQnKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtaWY9XCJjb2xsaWRlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj7DlzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpIGNsYXNzPVwiaWNvbiBmYSBmYS1iYW5cIj48L2k+IFRvdWNoZXMgY2FudCBvdmVybGFwITwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgdG91Y2ggdGhhdCB5b3Ugd2FudCB0byBhZGQgb3ZlcmxhcCB3aXRoOlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cInRvdWNoIGluIGNvbGxpZGVUb3VjaGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgdi1pZj1cInRvdWNoLnByZXZpb3VzLmhhc093blByb3BlcnR5KCdpZCcpXCI+e3t0b3VjaC5wcmV2aW91cy50ZXh0fX06IHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24ge3t0b0hITU1TUyh0b3VjaC5wcmV2aW91cy5zdGFydCl9fSBhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcyBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0b0hITU1TUyh0b3VjaC5wcmV2aW91cy5lbmQpfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyB2LWlmPVwidG91Y2guY3VycmVudC5oYXNPd25Qcm9wZXJ0eSgnaWQnKVwiPnt7dG91Y2guY3VycmVudC50ZXh0fX06IHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0cyBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0b0hITU1TUyh0b3VjaC5jdXJyZW50LnN0YXJ0KX19IGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRzIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RvSEhNTVNTKHRvdWNoLmN1cnJlbnQuZW5kKX19PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cImVuZEludmFsaWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsOXPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PGkgY2xhc3M9XCJpY29uIGZhIGZhLWJhblwiPjwvaT4gVmFsaWRhdGlvbiBFcnJvciE8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGVuZCBvZiB0aGUgdG91Y2ggbXVzdCBiZSBncmVhdGVyIHRoYW4gdGhlIHN0YXJ0XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+QWRkIFRvdWNoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIHYtb246Y2xpY2sucHJldmVudD1cImNsb3NlXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZT5cblxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHtnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcbiAgICBpbXBvcnQge0NvbXBhY3R9IGZyb20gJ3Z1ZS1jb2xvcic7XG4gICAgaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVGltZUNvbnZlcnRlcidcbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIG9wZW46IHt9LFxuICAgICAgICAgICAgaW5pdFRvdWNoOiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHNsXCI6IHtcImhcIjogNjEuMDc2MjMzMTgzODU2NSwgXCJzXCI6IDEsIFwibFwiOiAwLjQzNzI1NDkwMTk2MDc4NDMsIFwiYVwiOiAxfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhleFwiOiBcIiNEQkRGMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJnYmFcIjoge1wiclwiOiAyMTksIFwiZ1wiOiAyMjMsIFwiYlwiOiAwLCBcImFcIjogMSwgXCJhbHBoYVwiOiA1MH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoc3ZcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJ2XCI6IDAuODc0NTA5ODAzOTIxNTY4NiwgXCJhXCI6IDF9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiB7fSxcbiAgICAgICAgICAgIHN0YXJ0OiB7fSxcbiAgICAgICAgICAgIGVuZDoge31cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIG9wZW4odmFsKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pbml0VG91Y2gpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXJ0KHZhbCl7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaC5zdGFydCA9IHZhbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmQodmFsKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoLmVuZCA9IHZhbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd0b3VjaC5zdGFydCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQ29sbGlkZSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3RvdWNoLmVuZCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQ29sbGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9ICEhKHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpID49IHBhcnNlSW50KHRoaXMudG91Y2guZW5kKSB8fCBwYXJzZUludCh0aGlzLnRvdWNoLmVuZCkgPiBwYXJzZUludCh0aGlzLmR1cmF0aW9uKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29sbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29sbGlkZVRvdWNoZXM6IFtdLFxuICAgICAgICAgICAgICAgIGVuZEludmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRvdWNoOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZ2JhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcjogMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZzogNzcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYjogNTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYTogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHN0YXJ0Rm10KCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy50b3VjaC5zdGFydClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmRGbXQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnRvdWNoLmVuZClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWxpZGF0aW9uRW5kKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ2NvbXBhY3QtcGlja2VyJzogQ29tcGFjdCxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgY2xvc2UoKXtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjYW5jZWwtbmV3LXRvdWNoJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9ISE1NU1Moc2Vjcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHNlY3MpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DaGFuZ2VDb2xvcih2YWwpe1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2guY29sb3IgPSB2YWxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja0NvbGxpZGUoKXtcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hzID0gZ2V0U3RhdGUoJ3RvdWNoTWFuYWdlcicpLnRvdWNoZXMuc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgdG91Y2hzLnB1c2godGhpcy50b3VjaCk7XG4gICAgICAgICAgICAgICAgdmFyIG92ZXJsYXAgPSB0aGlzLm92ZXJsYXAodG91Y2hzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGUgPSBvdmVybGFwLm92ZXJsYXA7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlVG91Y2hlcyA9IG92ZXJsYXAucmFuZ2VzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG92ZXJsYXAodG91Y2hzKXtcbiAgICAgICAgICAgICAgICB2YXIgc29ydGVkUmFuZ2VzID0gdG91Y2hzLnNvcnQoKHByZXZpb3VzLCBjdXJyZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzVGltZSA9IHBhcnNlSW50KHByZXZpb3VzLnN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gcGFyc2VJbnQoY3VycmVudC5zdGFydCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIGlzIGVhcmxpZXIgdGhhbiB0aGUgY3VycmVudFxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNUaW1lIDwgY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwcmV2aW91cyB0aW1lIGlzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IHRpbWVcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzVGltZSA9PT0gY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIHRpbWUgaXMgbGF0ZXIgdGhhbiB0aGUgY3VycmVudCB0aW1lXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBmaW5hbCByZXN1bHRzXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvcnRlZFJhbmdlcy5yZWR1Y2UoKHJlc3VsdCwgY3VycmVudCwgaWR4LCBhcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBwcmV2aW91cyByYW5nZVxuICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2aW91cyA9IGFycltpZHggLSAxXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgYW55IG92ZXJsYXBcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzRW5kID0gcGFyc2VJbnQocHJldmlvdXMuZW5kKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGFydCA9IHBhcnNlSW50KGN1cnJlbnQuc3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcCA9IChwcmV2aW91c0VuZCA+PSBjdXJyZW50U3RhcnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHRoZSByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJsYXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHllcywgdGhlcmUgaXMgb3ZlcmxhcFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm92ZXJsYXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHNwZWNpZmljIHJhbmdlcyB0aGF0IG92ZXJsYXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5yYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6IHByZXZpb3VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlZWQgdGhlIHJlZHVjZVxuICAgICAgICAgICAgICAgIH0sIHtvdmVybGFwOiBmYWxzZSwgcmFuZ2VzOiBbXX0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU3VibWl0KCl7XG4gICAgICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JzLmFueSgpKSB7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZEludmFsaWQgPSAhIShwYXJzZUludCh0aGlzLnRvdWNoLnN0YXJ0KSA+PSBwYXJzZUludCh0aGlzLnRvdWNoLmVuZCkgfHwgcGFyc2VJbnQodGhpcy50b3VjaC5lbmQpID4gcGFyc2VJbnQoTWF0aC5mbG9vcih0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmR1cmF0aW9uKCkpKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5lbmRJbnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29sbGlkZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2FkZC1uZXctdG91Y2gnLCB0aGlzLnRvdWNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuPHN0eWxlPlxuICAgIC52dWUtY29sb3JfX2NvbXBhY3Qge1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5ld1RvdWNoRm9ybS52dWU/M2NmMDRkZDkiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImJveCBib3gtc29saWQgXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLW1hcC1tYXJrZXJcIj48L2k+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hlcycpfX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInRvZG8tbGlzdCB1aS1zb3J0YWJsZVwiIHYtaWY9XCJ0b3VjaGVzLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cInRvdWNoIGluIHRvdWNoZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwiJ2JhY2tncm91bmQ6Jyt0b3VjaC5jb2xvci5oZXgrJzsgaGVpZ2h0OjIwcHg7IHdpZHRoOjIwcHg7bWFyZ2luLXRvcDogMXB4OydcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+e3t0b3VjaC50ZXh0fX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRW1waGFzaXMgbGFiZWwgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImxhYmVsIGxhYmVsLXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2xvY2stb1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5zdGFydF9hdCcse3N0YXJ0OnRvSEhNTVNTKHRvdWNoLnN0YXJ0KX0pfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwibGFiZWwgbGFiZWwtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNsb2NrLW9cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MuZW5kX2F0Jyx7ZW5kOnRvSEhNTVNTKHRvdWNoLmVuZCl9KX19XG4gICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gR2VuZXJhbCB0b29scyBzdWNoIGFzIGVkaXQgb3IgZGVsZXRlLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1lZGl0XCIgdi1vbjpjbGljaz1cImVkaXRUb3VjaCh0b3VjaClcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIiB2LW9uOmNsaWNrPVwicmVtb3ZlVG91Y2godG91Y2gpXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxoMyB2LWlmPVwiIXRvdWNoZXMubGVuZ3RoXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7JHQoJ3Njb3V0aW5ncy5ub190b3VjaGVzJyl9fTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZT5cblxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHtnZXRTdGF0ZSwgc3Vic2NyaWJlfSBmcm9tICdtb2Nrc3RhdGUnO1xuICAgIGltcG9ydCBUaW1lQ29udmVydGVyIGZyb20gJy4uL3NrZXRjaC9jb21wb25lbnRzL3V0aWxzL1RpbWVDb252ZXJ0ZXInXG4gICAgaW1wb3J0IHNjb3V0aW5nc0xvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL3Njb3V0aW5ncy9zY291dGluZ3MuanMnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGxvY2FsZXM6IHNjb3V0aW5nc0xvY2FsZXMsXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdG91Y2hlczogZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIudG91Y2hlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkKCl7XG4gICAgICAgICAgICBzdWJzY3JpYmUodGhpcywgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3Rpb24gPT0gJ2FkZFRvdWNoJyB8fCBkYXRhLmFjdGlvbiA9PSAncmVtb3ZlVG91Y2gnIHx8IGRhdGEuYWN0aW9uID09ICdlZGl0VG91Y2gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2hlcyA9IGdldFN0YXRlKCcqJykudG91Y2hNYW5hZ2VyLnRvdWNoZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBlZGl0VG91Y2godG91Y2gpe1xuICAgICAgICAgICAgICAgIGJ1cy4kZW1pdCgnZWRpdC10b3VjaCcsIHRvdWNoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZVRvdWNoKHRvdWNoKXtcbiAgICAgICAgICAgICAgICBidXMuJGVtaXQoJ3JlbW92ZS10b3VjaCcsIHRvdWNoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvSEhNTVNTKHNlY3Mpe1xuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHNlY3MpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0b3VjaGVzTGlzdC52dWU/OGE3YzQ2YmEiLCI8dGVtcGxhdGU+XG4gICAgPHRhZy1kcm9wZG93biB2LWlmPVwidGFnLmRyb3Bkb3duXCIgdi1vbjpvcHRpb24tY2xpY2tlZD1cImRyb3Bkb3duT3B0aW9uQ2xpY2tlZFwiIDp0YWc9XCJ0YWdcIj48L3RhZy1kcm9wZG93bj5cbiAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cInRhZy1kcm9wZG93blwiPlxuICAgICAgICA8YSBjbGFzcz1cIiBidG4gdGFnXCIgdi1vbjpjbGljay5wcmV2ZW50PVwidGFnQ2xpY2tlZFwiIDpjbGFzcz1cIidiZy0nK3RhZy5jb2xvclwiPnt7dGFnLm5hbWV9fTwvYT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGU+XG4gICAgLnRhZyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY29sb3I6ICM3MTcxNzE7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgxODAsIDE4MCwgMTgwLCAwLjEpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMSk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xuICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBtYXJnaW46IDAgM3B4IDZweCAwO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLnRhZ3MgLnRhZzpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzA4QztcbiAgICB9XG5cbiAgICAudGFncyAudGFnLnByaW1hcnkge1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyOEJDQTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzU3RUJEXG4gICAgfVxuXG4gICAgLnRhZ3MgLnRhZy5zdWNjZXNzIHtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1Q0I4NUM7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzRDQUU0Q1xuICAgIH1cblxuICAgIC50YWdzIC50YWcuaW5mbyB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUJDMERFO1xuICAgICAgICBib3JkZXItY29sb3I6ICM0NkI4REFcbiAgICB9XG5cbiAgICAudGFncyAudGFnLndhcm5pbmcge1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwQUQ0RTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRUVBMjM2XG4gICAgfVxuXG4gICAgLnRhZ3MgLnRhZy5kYW5nZXIge1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q5NTM0RjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRDQzRjNBXG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHRhZ0Ryb3Bkb3duIGZyb20gJy4vdGFnRHJvcGRvd24udnVlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB0YWc6IHt9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIHRhZ0Ryb3Bkb3duXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9uQ2xpY2tlZCh0YWcpe1xuICAgICAgICAgICAgICAgIGxldCB0YWdEcm9wZG93biA9IF8uY2xvbmVEZWVwKHRhZyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndGFnLWNsaWNrZWQnLCB0YWdEcm9wZG93bilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWdDbGlja2VkKCl7XG4gICAgICAgICAgICAgICAgbGV0IHRhZyA9IF8uY2xvbmVEZWVwKHRoaXMudGFnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0YWctY2xpY2tlZCcsIHRhZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRhZy52dWU/MDI0YTA5MjAiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duIHRhZy1kcm9wZG93blwiPlxuICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZSBidG4gdGFnXCIgOmNsYXNzPVwiJ2JnLScrdGFnLmNvbG9yXCJcbiAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIDppZD1cImlkXCI+e3t0YWcubmFtZX19XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNhcmV0LWRvd25cIj48L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIDphcmlhLWxhYmVsbGVkYnk9XCJpZFwiPlxuICAgICAgICAgICAgPGxpIHYtZm9yPVwib3B0IGluIHRhZy5vcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XCJjbGlja09wdChvcHQpXCI+e3tvcHQubmFtZX19PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGU+XG4gICAgLnRhZy1kcm9wZG93biB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCB1dWlkIGZyb20gJ2Jhc2UvbWl4aW5zL3V1aWQnXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB0YWc6IHt9LFxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtaXhpbnM6IFt1dWlkXSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMuZ2VuZXJhdGVVVUlEKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGNsaWNrT3B0KG9wdCl7XG4gICAgICAgICAgICAgICAgdGhpcy50YWcub3B0aW9uID0gb3B0O1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29wdGlvbi1jbGlja2VkJywgdGhpcy50YWcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0YWdEcm9wZG93bi52dWU/ZjQ0Yzg2MmMiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhZ3NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiLi4uXCI+XG4gICAgICAgICAgICAgICAgPHRhZyA6dGFnPVwidGFnXCIgdi1mb3I9XCJ0YWcgaW4gdGFnc1wiIHYtb246dGFnLWNsaWNrZWQ9XCJ0YWdTZWxlY3RlZFwiPjwvdGFnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFncy1zZWxlY3RlZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ3MtbGlzdFwiIHYtZHJhZ3VsYT1cInNlbGVjdGVkXCIgYmFnPVwiZmlyc3QtYmFnXCI+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cInRhZyBpbiBzZWxlY3RlZFwiIDprZXk9XCJ0YWcuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCIgOmNsYXNzPVwiJ2JnLScrdGFnLmNvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3RhZy5uYW1lfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwidGFnLm9wdGlvblwiPiB7e3RhZy5vcHRpb24ubmFtZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwiZGVsZXRlVGFnKHRhZylcIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuICAgIGltcG9ydCB0YWcgZnJvbSAnLi90YWcudnVlJ1xuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgdGFnXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHRhZ1NlbGVjdGVkKHRhZyl7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndGFnLXNlbGVjdGVkJywgdGFnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVUYWcodGFnKXtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0YWctZGVsZXRlZCcsIHRhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHJlbD1cInN0eWxlc2hlZXQvc2Nzc1wiPlxuICAgIC50YWdzIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50YWdzLXNlbGVjdGVkIHtcbiAgICB9XG5cbiAgICAuY2xvc2Uge1xuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgICBvcGFjaXR5OiAwLjggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAudGFncy1saXN0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC50YWdzLWxpc3Qge1xuICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRhZ3MtbGlzdCBkaXYsXG4gICAgLmd1LW1pcnJvciB7XG4gICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuICAgIC50YWdzLWxpc3QgZGl2IHtcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xuICAgICAgICBjdXJzb3I6IGdyYWI7XG4gICAgICAgIGN1cnNvcjogLW1vei1ncmFiO1xuICAgICAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC50YWdzLWxpc3QgZGl2Omxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5ndS1taXJyb3Ige1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTgwKVwiO1xuICAgICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODApO1xuICAgICAgICBjdXJzb3I6IGdyYWJiaW5nO1xuICAgICAgICBjdXJzb3I6IC1tb3otZ3JhYmJpbmc7XG4gICAgICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbiAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ndS1oaWRlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5ndS11bnNlbGVjdGFibGUge1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmd1LXRyYW5zaXQge1xuICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MjApXCI7XG4gICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0yMCk7XG4gICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRhZ3MtbGlzdCAuZXgtbW92ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICAgIH1cblxuICAgIC50YWdzLWxpc3QuZXgtb3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICB9XG5cbiAgICAuaGFuZGxlIHtcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcbiAgICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0YWdzLnZ1ZT8wMDZkYjg1MCIsImltcG9ydCB7Z2V0U3RhdGUsIGRpc3BhdGNofSBmcm9tICdtb2Nrc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3VjaE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKHRvdWNoZXMpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGdldFN0YXRlKCcqJyk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRUb3VjaGVzJywgdG91Y2hlcyA/IHRvdWNoZXMgOiBbXSk7XG4gICAgfVxuXG4gICAgYWRkKHRvdWNoKSB7XG4gICAgICAgIGRpc3BhdGNoKCdhZGRUb3VjaCcsIHRvdWNoKTtcbiAgICB9XG5cbiAgICByZW1vdmUodG91Y2gpIHtcbiAgICAgICAgZGlzcGF0Y2goJ3JlbW92ZVRvdWNoJywgdG91Y2gpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlc1tqXS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3VzZU92ZXJUb3VjaCh4LCB5KSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlc1tqXS5pc01vdXNlT3Zlcih4LCB5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdXNlT3ZlckFjdGlvbih4LCB5KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoKSB7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zW2pdLmlzTW91c2VPdmVyKHgsIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW91c2VQcmVzc2VkVG91Y2goeCwgeSkge1xuICAgICAgICBjb25zb2xlLmxvZyh4LCB5KTtcbiAgICAgICAgdmFyIGFUb3VjaElzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzW2pdLmlzTW91c2VQcmVzc3NlZE92ZXIoeCwgeSk7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlc1tqXS5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgYVRvdWNoSXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFUb3VjaElzU2VsZWN0ZWQgJiYgIXZtLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZFRvdWNoJywgbnVsbClcbiAgICAgICAgICAgIGlmICh2bS4kcmVmcy5wbGF5ZXIpXG4gICAgICAgICAgICAgICAgdm0uJHJlZnMucGxheWVyLmFwaSgpLmFiTG9vcFBsdWdpbi5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3VzZVByZXNzZWRBY3Rpb24oeCwgeSkge1xuICAgICAgICB2YXIgYW5BY3Rpb25Jc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guYWN0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guYWN0aW9uc1tqXS5pc01vdXNlUHJlc3NzZWRPdmVyKHgsIHkpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnNbal0uaXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBhbkFjdGlvbklzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFhbkFjdGlvbklzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRBY3Rpb24nLCBudWxsKVxuICAgICAgICAgICAgICAgIGlmICh2bS4kcmVmcy5wbGF5ZXIpXG4gICAgICAgICAgICAgICAgICAgIHZtLiRyZWZzLnBsYXllci5hcGkoKS5hYkxvb3BQbHVnaW4uZGlzYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy90b3VjaGVzL1RvdWNoTWFuYWdlci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWdlIHtcbiAgICBzZXR1cCgpIHtcblxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHAuYmFja2dyb3VuZCgyNTUpO1xuICAgICAgICBwLnN0cm9rZVdlaWdodCg0KTtcbiAgICAgICAgcC5zdHJva2UoJyNkM2UwZTknKTtcbiAgICAgICAgcC5maWxsKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICBwLnJlY3QoMCwgMCwgcC53aWR0aCAtIDEsIHAuaGVpZ2h0IC0gMSlcbiAgICAgICAgcC5ub1N0cm9rZSgpXG4gICAgICAgIHAubm9GaWxsKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91aS9TdGFnZS5qcyIsImltcG9ydCBUaW1lQ29udmVydGVyIGZyb20gJy4uL3V0aWxzL1RpbWVDb252ZXJ0ZXInXG5pbXBvcnQge2dldFN0YXRlLCBkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZWxpbmUge1xuICAgIGNvbnN0cnVjdG9yKHN0YXJ0WSwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBnZXRTdGF0ZSgnKicpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVTdGFydFknLCBzdGFydFkpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVTdGFydFgnLCAzMCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZUhlaWdodCcsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuc3RhcnREZWx0YSA9IDA7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnRpbWVsaW5lLmhpZGUpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRDb2xXaWR0aCcsIHRoaXMuY2FsY3VsYXRlQ29sV2lkdGgoKSk7XG4gICAgICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVFbmRYJywgMCk7XG4gICAgICAgICAgICBwLnN0cm9rZVdlaWdodCgwKTtcbiAgICAgICAgICAgIHAuc3Ryb2tlKDEpO1xuICAgICAgICAgICAgcC5maWxsKDAsIDAsIDApO1xuICAgICAgICAgICAgcC50ZXh0U2l6ZSgxMik7XG4gICAgICAgICAgICBwLnRleHRTdHlsZShwLk5PUk1BTCk7XG4gICAgICAgICAgICBwLnRleHQoVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnN0YXRlLnBsYXllci5kdXJhdGlvbiksIHRoaXMuc3RhdGUudGltZWxpbmUuZW5kWCAtIDIwLCB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WSArIDMwLCA0MCwgMjApO1xuICAgICAgICAgICAgcC50ZXh0QWxpZ24ocC5DRU5URVIpO1xuXG4gICAgICAgICAgICBwLnN0cm9rZSgwKTtcbiAgICAgICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDEpO1xuICAgICAgICAgICAgcC5saW5lKHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRYLCB0aGlzLnN0YXRlLnRpbWVsaW5lLmF4aXNZLCB0aGlzLnN0YXRlLnRpbWVsaW5lLndpZHRoLCB0aGlzLnN0YXRlLnRpbWVsaW5lLmF4aXNZKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IHRoaXMuc3RhdGUudGltZWxpbmUud2lkdGggKyB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSAqIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kV2lkdGggLSAzMDsgaSArPSB0aGlzLnN0YXRlLnRpbWVsaW5lLmNvbFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHggPSBpICsgdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFg7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1ggPSB4IC0gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWUgKiB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xuXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTdGFydE1pbnV0ZUxhYmVsKHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRUaW1lLCB4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TWludXRlTGluZSh4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgJSAodGhpcy5zdGF0ZS50aW1lbGluZS5jb2xXaWR0aCAqIDYpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ggPj0gMzApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pbnV0ZUxhYmVsKGksIG5ld1gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TWludXRlTGluZShuZXdYKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdYID49IDMwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50aW1lbGluZS5zaG93U2Vjb25kc0ludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TWlkZGxlU2Vjb25kTGFiZWwoaSwgbmV3WCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdNaWRkbGVTZWNvbmRMaW5lKG5ld1gpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50aW1lbGluZS5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdNaWRkbGVTZWNvbmRMYWJlbChpLCBuZXdYKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3U2Vjb25kTGluZSh4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwLnN0cm9rZSgncmVkJyk7XG4gICAgICAgICAgICBwLnN0cm9rZVdlaWdodCgyKVxuICAgICAgICAgICAgcC5saW5lKHRoaXMuc3RhdGUudGltZWxpbmUuZW5kWCwgdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFkgKyA0NSwgdGhpcy5zdGF0ZS50aW1lbGluZS5lbmRYLCB0aGlzLnN0YXRlLnRpbWVsaW5lLmF4aXNZKTtcbiAgICAgICAgICAgIHAubGluZSh0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFgsIHRoaXMuc3RhdGUudGltZWxpbmUuYXhpc1ksIHRoaXMuc3RhdGUudGltZWxpbmUuZW5kWCwgdGhpcy5zdGF0ZS50aW1lbGluZS5lbmRZKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdXNlT3ZlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnRpbWVsaW5lLmhpZGUpIHtcbiAgICAgICAgICAgIGlmIChwLm1vdXNlWCA+PSAzMCAmJiBwLm1vdXNlWCA8PSB0aGlzLnN0YXRlLmNhbnZhcy53aWR0aCAtIDMwICYmIHAubW91c2VZID49IHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRZICYmIHAubW91c2VZIDw9IHRoaXMuc3RhdGUudGltZWxpbmUuZW5kWSkge1xuICAgICAgICAgICAgICAgIHAuY3Vyc29yKHAuSEFORCk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lTW91c2VPdmVyJywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHAuY3Vyc29yKHAuQVJST1cpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZU1vdXNlT3ZlcicsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYWcoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS50aW1lbGluZS5oaWRlKSB7XG5cbiAgICAgICAgICAgIHZhciBzdGFydERlbHRhID0gKHAucG1vdXNlWCAtIHAubW91c2VYKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXJ0RGVsdGEgIT0gc3RhcnREZWx0YSkge1xuICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRUaW1lICsgKHN0YXJ0RGVsdGEpIC8gdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aDtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZVN0YXJ0VGltZScsIDApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lU3RhcnRUaW1lJywgTWF0aC5mbG9vcihzdGFydCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREZWx0YSA9IHN0YXJ0RGVsdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3U2Vjb25kTGluZSh4KSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zdGF0ZS50aW1lbGluZS5jb2xXaWR0aDsgaiArPSB0aGlzLnN0YXRlLnRpbWVsaW5lLmNvbFdpZHRoIC8gMTApIHtcbiAgICAgICAgICAgIGlmICgoeCArIGopIDwgdGhpcy5zdGF0ZS50aW1lbGluZS53aWR0aCAmJiBqKSB7XG4gICAgICAgICAgICAgICAgcC5zdHJva2UoMCk7XG4gICAgICAgICAgICAgICAgcC5zdHJva2VXZWlnaHQoMSk7XG4gICAgICAgICAgICAgICAgcC5saW5lKHggKyBqLCB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZHNZICsgNSwgeCArIGosIHRoaXMuc3RhdGUudGltZWxpbmUuYXhpc1kpO1xuICAgICAgICAgICAgICAgIHAuc3Ryb2tlKDIzMCk7XG4gICAgICAgICAgICAgICAgcC5zdHJva2VXZWlnaHQoMSk7XG4gICAgICAgICAgICAgICAgcC5saW5lKHggKyBqLCB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZHNZLCB4ICsgaiwgdGhpcy5zdGF0ZS50aW1lbGluZS5lbmRZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gajtcbiAgICB9XG5cbiAgICBkcmF3TWlkZGxlU2Vjb25kTGluZSh4KSB7XG4gICAgICAgIHAuc3Ryb2tlKDApO1xuICAgICAgICBwLnN0cm9rZVdlaWdodCgxKVxuICAgICAgICBwLmxpbmUoeCwgdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRzWSwgeCwgdGhpcy5zdGF0ZS50aW1lbGluZS5heGlzWSk7XG4gICAgICAgIHAuc3Ryb2tlKDIzMCk7XG4gICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDEpXG4gICAgICAgIHAubGluZSh4LCB0aGlzLnN0YXRlLnRpbWVsaW5lLmF4aXNZLCB4LCB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFkpO1xuICAgIH1cblxuICAgIGRyYXdNaWRkbGVTZWNvbmRMYWJlbChpLCB4KSB7XG4gICAgICAgIHAuc3Ryb2tlKDIzMCk7XG4gICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDApO1xuICAgICAgICBwLnRleHRTaXplKDEwKTtcbiAgICAgICAgcC50ZXh0U3R5bGUocC5OT1JNQUwpO1xuICAgICAgICBwLnRleHQoVGltZUNvbnZlcnRlci50b1NTKGkgLyB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoKSArICcgcycsIHggLSAyMCwgdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRzWSAtIDEwLCA0MCwgMjApO1xuICAgICAgICBwLnRleHRBbGlnbihwLkNFTlRFUik7XG4gICAgfVxuXG4gICAgZHJhd01pbnV0ZUxpbmUoeCkge1xuICAgICAgICBwLnN0cm9rZSgwKTtcbiAgICAgICAgcC5zdHJva2VXZWlnaHQoMilcbiAgICAgICAgcC5saW5lKHgsIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRZICsgMjAsIHgsIHRoaXMuc3RhdGUudGltZWxpbmUuYXhpc1kpO1xuICAgICAgICBwLnN0cm9rZSgyMzApO1xuICAgICAgICBwLnN0cm9rZVdlaWdodCgyKVxuICAgICAgICBwLmxpbmUoeCwgdGhpcy5zdGF0ZS50aW1lbGluZS5heGlzWSwgeCwgdGhpcy5zdGF0ZS50aW1lbGluZS5lbmRZKTtcbiAgICB9XG5cbiAgICBkcmF3TWludXRlTGFiZWwoaSwgeCkge1xuICAgICAgICBwLnN0cm9rZVdlaWdodCgwKTtcbiAgICAgICAgcC50ZXh0U2l6ZSgxMik7XG4gICAgICAgIHAudGV4dFN0eWxlKHAuTk9STUFMKTtcbiAgICAgICAgcC50ZXh0KFRpbWVDb252ZXJ0ZXIudG9ISE1NU1MoTWF0aC5yb3VuZChpIC8gdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aCkpLCB4IC0gMjAsIHRoaXMuc3RhdGUudGltZWxpbmUubWludXRlc1ksIDQwLCAyMCk7XG4gICAgICAgIHAudGV4dEFsaWduKHAuQ0VOVEVSKTtcbiAgICB9XG5cbiAgICBkcmF3U3RhcnRNaW51dGVMYWJlbChpLCB4KSB7XG4gICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDApO1xuICAgICAgICBwLnRleHRTaXplKDEyKTtcbiAgICAgICAgcC50ZXh0U3R5bGUocC5OT1JNQUwpO1xuICAgICAgICBwLnRleHQoVGltZUNvbnZlcnRlci50b0hITU1TUyhpKSwgeCAtIDIwLCB0aGlzLnN0YXRlLnRpbWVsaW5lLm1pbnV0ZXNZLCA0MCwgMjApO1xuICAgICAgICBwLnRleHRBbGlnbihwLkNFTlRFUik7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlQ29sV2lkdGgoKSB7XG4gICAgICAgIHZhciBtaW51dGVzID0gKCB0aGlzLnN0YXRlLnBsYXllci5kdXJhdGlvbiArIDMwKSAvIDYwO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigodGhpcy5zdGF0ZS5jYW52YXMud2lkdGggLyBtaW51dGVzKSAvIDYpICogdGhpcy5zdGF0ZS50aW1lbGluZS56b29tRmFjdG9yO1xuICAgIH1cblxuICAgIGdldFN0YXJ0VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRUaW1lO1xuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3VpL1RpbWVsaW5lLmpzIiwiaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vdXRpbHMvVGltZUNvbnZlcnRlcidcbmltcG9ydCB7Z2V0U3RhdGV9IGZyb20gJ21vY2tzdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvVGltZU1hcmtlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBnZXRTdGF0ZSgnKicpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHZhciBjdXJyZW50WCA9ICh0aGlzLnN0YXRlLnBsYXllci5jdXJyZW50VGltZSAtIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRUaW1lKSAqIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kV2lkdGggKyAzMDtcbiAgICAgICAgY3VycmVudFggPSBjdXJyZW50WCA+PSAzMCA/IGN1cnJlbnRYIDogMzA7XG4gICAgICAgIGlmICgodGhpcy5zdGF0ZS5wbGF5ZXIuY3VycmVudFRpbWUgLSB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSkgPiAwKSB7XG4gICAgICAgICAgICBwLnN0cm9rZSgnYmx1ZScpO1xuICAgICAgICAgICAgcC5zdHJva2VXZWlnaHQoMilcbiAgICAgICAgICAgIHAubGluZShjdXJyZW50WCwgdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFkgKyAzMCwgY3VycmVudFgsIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRZICsgNjApO1xuICAgICAgICAgICAgcC5saW5lKGN1cnJlbnRYLCB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WSArIDYwLCBjdXJyZW50WCwgdGhpcy5zdGF0ZS50aW1lbGluZS5lbmRZKTtcbiAgICAgICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDApO1xuICAgICAgICAgICAgcC50ZXh0U2l6ZSgxMik7XG4gICAgICAgICAgICBwLnRleHRTdHlsZShwLk5PUk1BTCk7XG4gICAgICAgICAgICBwLnRleHQoVGltZUNvbnZlcnRlci50b0hITU1TUyhNYXRoLmZsb29yKHRoaXMuc3RhdGUucGxheWVyLmN1cnJlbnRUaW1lKSksIGN1cnJlbnRYIC0gMjAsIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRZICsgMTUsIDQwLCAyMCk7XG4gICAgICAgICAgICBwLnRleHRBbGlnbihwLkNFTlRFUik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmFnKHgsIHkpIHtcblxuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3VpL1ZpZGVvVGltZU1hcmtlci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3BlY3RvclN0YWdlIHtcbiAgICBzZXR1cCgpIHtcblxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGluc3BlY3Rvci5iYWNrZ3JvdW5kKDI1NSk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoNCk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2UoJyNkM2UwZTknKTtcbiAgICAgICAgaW5zcGVjdG9yLmZpbGwoMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgIGluc3BlY3Rvci5yZWN0KDAsIDAsIGluc3BlY3Rvci53aWR0aCAtIDEsIGluc3BlY3Rvci5oZWlnaHQgLSAxKVxuICAgICAgICBpbnNwZWN0b3Iubm9TdHJva2UoKVxuICAgICAgICBpbnNwZWN0b3Iubm9GaWxsKCk7XG5cbiAgICAgICAgaW5zcGVjdG9yLnB1c2goKVxuICAgICAgICBpbnNwZWN0b3IudHJhbnNsYXRlKDAsIDYwKTtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSgnI2QzZTBlOScpO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDEpO1xuICAgICAgICBpbnNwZWN0b3IucmVjdCgwLCAwLCAxMjAsIDYwKVxuICAgICAgICBpbnNwZWN0b3IubGluZSgwLCAwLCBpbnNwZWN0b3Iud2lkdGgsIDApO1xuICAgICAgICBpbnNwZWN0b3IubGluZSgwLCA2MCwgaW5zcGVjdG9yLndpZHRoLCA2MCk7XG4gICAgICAgIGluc3BlY3Rvci5maWxsKCdibGFjaycpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dFNpemUoMTIpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dFN0eWxlKGluc3BlY3Rvci5OT1JNQUwpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dEFsaWduKGluc3BlY3Rvci5DRU5URVIpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dCgnTGVmdCBBdGhsZXRlJywgNSwgMjQsIDExMCwgMTIpO1xuICAgICAgICBpbnNwZWN0b3IucG9wKClcblxuICAgICAgICBpbnNwZWN0b3IucHVzaCgpXG4gICAgICAgIGluc3BlY3Rvci50cmFuc2xhdGUoMCwgMTIwKTtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSgnI2QzZTBlOScpO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDEpO1xuICAgICAgICBpbnNwZWN0b3IucmVjdCgwLCAwLCAxMjAsIDYwKTtcbiAgICAgICAgaW5zcGVjdG9yLmxpbmUoMCwgNjAsIGluc3BlY3Rvci53aWR0aCwgNjApO1xuICAgICAgICBpbnNwZWN0b3IuZmlsbCgnYmxhY2snKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHRTaXplKDEyKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHRTdHlsZShpbnNwZWN0b3IuTk9STUFMKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHRBbGlnbihpbnNwZWN0b3IuQ0VOVEVSKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHQoJ1JpZ2h0IEF0aGxldGUnLCA1LCAyNCwgMTEwLCAxMik7XG4gICAgICAgIGluc3BlY3Rvci5wb3AoKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvaW5zcGVjdG9yL0luc3BlY3RvclN0YWdlLmpzIiwiaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vLi4vdXRpbHMvVGltZUNvbnZlcnRlcidcbmltcG9ydCB7Z2V0U3RhdGUsIGRpc3BhdGNofSBmcm9tICdtb2Nrc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnNwZWN0b3JUaW1lbGluZSB7XG4gICAgY29uc3RydWN0b3Ioc3RhcnRZLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGdldFN0YXRlKCcqJyk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JTdGFydFknLCBzdGFydFkpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yU3RhcnRYJywgMTIwKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvckhlaWdodCcsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuc3RhcnREZWx0YSA9IDA7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdmFyIGNvbFdpZHRoID0gdGhpcy5jYWxjdWxhdGVDb2xXaWR0aCgpO1xuICAgICAgICBpZiAoY29sV2lkdGggPiAwKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yQ29sV2lkdGgnLCBjb2xXaWR0aCk7XG4gICAgICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yRW5kWCcsICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmVuZCAtIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guc3RhcnQpICogdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZFdpZHRoICsgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WCk7XG4gICAgICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yU3RhcnRUaW1lJywgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5zdGFydClcbiAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMCk7XG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKDEpO1xuICAgICAgICAgICAgaW5zcGVjdG9yLmZpbGwoMCwgMCwgMCk7XG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dFNpemUoMTIpO1xuICAgICAgICAgICAgaW5zcGVjdG9yLnRleHRTdHlsZShwLk5PUk1BTCk7XG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guZW5kKSwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFggLSAyMCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WSArIDMwLCA0MCwgMjApO1xuICAgICAgICAgICAgaW5zcGVjdG9yLnRleHRBbGlnbihwLkNFTlRFUik7XG5cbiAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2UoMCk7XG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDEpO1xuICAgICAgICAgICAgaW5zcGVjdG9yLmxpbmUodGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmF4aXNZLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUud2lkdGgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5heGlzWSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUud2lkdGggKyB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLnN0YXJ0ICogdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZFdpZHRoIC0gMzA7IGkgKz0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmNvbFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHggPSBpICsgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WDtcbiAgICAgICAgICAgICAgICB2YXIgbmV3WCA9IHggLSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRUaW1lICogdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xuXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTdGFydExhYmVsKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFRpbWUsIHgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdNaW51dGVMaW5lKHgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSAlICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuY29sV2lkdGggKiA2KSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdYID49IDEyMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TWludXRlTGFiZWwoaSwgbmV3WCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdNaW51dGVMaW5lKG5ld1gpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ggPj0gMTIwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNob3dTZWNvbmRzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdNaWRkbGVTZWNvbmRMYWJlbChpLCBuZXdYKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pZGRsZVNlY29uZExpbmUobmV3WCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TWlkZGxlU2Vjb25kTGFiZWwoaSwgbmV3WCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1NlY29uZExpbmUoeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSgncmVkJyk7XG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDIpXG4gICAgICAgICAgICBpbnNwZWN0b3IubGluZSh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WSArIDQ1LCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmF4aXNZKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5saW5lKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuYXhpc1ksIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdXNlT3ZlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuaGlkZSkge1xuICAgICAgICAgICAgaWYgKGluc3BlY3Rvci5tb3VzZVggPj0gMzAgJiYgaW5zcGVjdG9yLm1vdXNlWCA8PSB0aGlzLnN0YXRlLmNhbnZhcy53aWR0aCAtIDMwICYmIGluc3BlY3Rvci5tb3VzZVkgPj0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WSAmJiBpbnNwZWN0b3IubW91c2VZIDw9IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRZKSB7XG4gICAgICAgICAgICAgICAgaW5zcGVjdG9yLmN1cnNvcihpbnNwZWN0b3IuSEFORCk7XG4gICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2goJ3NldFRpbWVsaW5lTW91c2VPdmVyJywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGluc3BlY3Rvci5jdXJzb3IoaW5zcGVjdG9yLkFSUk9XKTtcbiAgICAgICAgICAgICAgICAvLyAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lTW91c2VPdmVyJywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhZygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuaGlkZSkge1xuXG4gICAgICAgICAgICB2YXIgc3RhcnREZWx0YSA9IChpbnNwZWN0b3IucG1vdXNlWCAtIGluc3BlY3Rvci5tb3VzZVgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnREZWx0YSAhPSBzdGFydERlbHRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5zdGFydCArIChzdGFydERlbHRhKSAvIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRXaWR0aDtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lU3RhcnRUaW1lJywgMClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZVN0YXJ0VGltZScsIE1hdGguZmxvb3Ioc3RhcnQpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RGVsdGEgPSBzdGFydERlbHRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd1NlY29uZExpbmUoeCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5jb2xXaWR0aDsgaiArPSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuY29sV2lkdGggLyAxMCkge1xuICAgICAgICAgICAgaWYgKCh4ICsgaikgPCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUud2lkdGggJiYgaikge1xuICAgICAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2UoMCk7XG4gICAgICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgxKTtcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3IubGluZSh4ICsgaiwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZHNZICsgNSwgeCArIGosIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5heGlzWSk7XG4gICAgICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSgyMzApO1xuICAgICAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMSk7XG4gICAgICAgICAgICAgICAgaW5zcGVjdG9yLmxpbmUoeCArIGosIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRzWSwgeCArIGosIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gajtcbiAgICB9XG5cbiAgICBkcmF3TWlkZGxlU2Vjb25kTGluZSh4KSB7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2UoMCk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMSlcbiAgICAgICAgaW5zcGVjdG9yLmxpbmUoeCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZHNZLCB4LCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuYXhpc1kpO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKDIzMCk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMSlcbiAgICAgICAgaW5zcGVjdG9yLmxpbmUoeCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmF4aXNZLCB4LCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWSk7XG4gICAgfVxuXG4gICAgZHJhd01pZGRsZVNlY29uZExhYmVsKGksIHgpIHtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSgyMzApO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDApO1xuICAgICAgICBpbnNwZWN0b3IudGV4dFNpemUoMTApO1xuICAgICAgICBpbnNwZWN0b3IudGV4dFN0eWxlKGluc3BlY3Rvci5OT1JNQUwpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dChUaW1lQ29udmVydGVyLnRvU1MoaSAvIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRXaWR0aCkgKyAnIHMnLCB4IC0gMjAsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRzWSAtIDEwLCA0MCwgMjApO1xuICAgICAgICBpbnNwZWN0b3IudGV4dEFsaWduKGluc3BlY3Rvci5DRU5URVIpO1xuICAgIH1cblxuICAgIGRyYXdNaW51dGVMaW5lKHgpIHtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSgwKTtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgyKVxuICAgICAgICBpbnNwZWN0b3IubGluZSh4LCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZICsgMjAsIHgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5heGlzWSk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2UoMjMwKTtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgyKVxuICAgICAgICBpbnNwZWN0b3IubGluZSh4LCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuYXhpc1ksIHgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRZKTtcbiAgICB9XG5cbiAgICBkcmF3TWludXRlTGFiZWwoaSwgeCkge1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDApO1xuICAgICAgICBpbnNwZWN0b3IudGV4dFNpemUoMTIpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dFN0eWxlKGluc3BlY3Rvci5OT1JNQUwpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKE1hdGgucm91bmQoaSAvIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRXaWR0aCkpLCB4IC0gMjAsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5taW51dGVzWSwgNDAsIDIwKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHRBbGlnbihpbnNwZWN0b3IuQ0VOVEVSKTtcbiAgICB9XG5cbiAgICBkcmF3U3RhcnRMYWJlbChzdGFydFRpbWUsIHgpIHtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgwKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHRTaXplKDEyKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHRTdHlsZShpbnNwZWN0b3IuTk9STUFMKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHQoVGltZUNvbnZlcnRlci50b0hITU1TUyhzdGFydFRpbWUpLCB4IC0gMjAsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5taW51dGVzWSwgNDAsIDIwKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHRBbGlnbihpbnNwZWN0b3IuQ0VOVEVSKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVDb2xXaWR0aCgpIHtcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSAoIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guZW5kIC0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5zdGFydCkgLyA2MDtcbiAgICAgICAgaWYgKG1pbnV0ZXMgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoKHRoaXMuc3RhdGUuY2FudmFzLndpZHRoIC0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WCAtIDMwKSAvIG1pbnV0ZXMpIC8gNik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBnZXRTdGFydFRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLnN0YXJ0O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvaW5zcGVjdG9yL0luc3BlY3RvclRpbWVsaW5lLmpzIiwiaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vLi4vdXRpbHMvVGltZUNvbnZlcnRlcidcbmltcG9ydCB7Z2V0U3RhdGV9IGZyb20gJ21vY2tzdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3BlY3RvclZpZGVvVGltZU1hcmtlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBnZXRTdGF0ZSgnKicpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IE1hdGguZmxvb3IodGhpcy5zdGF0ZS5wbGF5ZXIuY3VycmVudFRpbWUpXG4gICAgICAgIHZhciBjdXJyZW50WCA9IChjdXJyZW50VGltZSAtIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guc3RhcnQpICogdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZFdpZHRoICsgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WDtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSgnYmx1ZScpO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDIpXG4gICAgICAgIGluc3BlY3Rvci5saW5lKGN1cnJlbnRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZICsgMzAsIGN1cnJlbnRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZICsgNjApO1xuICAgICAgICBpbnNwZWN0b3IubGluZShjdXJyZW50WCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WSArIDYwLCBjdXJyZW50WCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFkpO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDApO1xuICAgICAgICBpbnNwZWN0b3IudGV4dFNpemUoMTIpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dFN0eWxlKGluc3BlY3Rvci5OT1JNQUwpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKGN1cnJlbnRUaW1lKSwgY3VycmVudFggLSAyMCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WSArIDE1LCA0MCwgMjApO1xuICAgICAgICBpbnNwZWN0b3IudGV4dEFsaWduKGluc3BlY3Rvci5DRU5URVIpO1xuICAgIH1cblxuICAgIGRyYWcoeCwgeSkge1xuXG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvaW5zcGVjdG9yL0luc3BlY3RvclZpZGVvVGltZU1hcmtlci5qcyIsImltcG9ydCB7Z2V0U3RhdGUsIGRpc3BhdGNofSBmcm9tICdtb2Nrc3RhdGUnO1xuaW1wb3J0IEluc3BlY3RvclN0YWdlIGZyb20gJy4vY29tcG9uZW50cy91aS9pbnNwZWN0b3IvSW5zcGVjdG9yU3RhZ2UnXG5pbXBvcnQgSW5zcGVjdG9yVGltZWxpbmUgZnJvbSAnLi9jb21wb25lbnRzL3VpL2luc3BlY3Rvci9JbnNwZWN0b3JUaW1lbGluZSdcbmltcG9ydCBJbnNwZWN0b3JWaWRlb1RpbWVNYXJrZXIgZnJvbSAnLi9jb21wb25lbnRzL3VpL2luc3BlY3Rvci9JbnNwZWN0b3JWaWRlb1RpbWVNYXJrZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNrZXRjaChpbnNwZWN0b3IpIHtcbiAgICBsZXQgc3RhdGUgPSBudWxsO1xuICAgIHdpbmRvdy5pbnNwZWN0b3IgPSBpbnNwZWN0b3I7XG4gICAgaW5zcGVjdG9yLnNldHVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zcGVjdG9yQm94Jykub2Zmc2V0V2lkdGg7XG4gICAgICAgIHZhciBjYW52YXMgPSBpbnNwZWN0b3IuY3JlYXRlQ2FudmFzKHdpZHRoIC0gMjAsIDE5MCk7XG4gICAgICAgIGNhbnZhcy5tb3VzZU1vdmVkKG1vdXNlTW92ZWQpO1xuICAgICAgICBjYW52YXMubW91c2VQcmVzc2VkKG1vdXNlUHJlc3NlZCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JDYW52YXMnLCBjYW52YXMpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yQ2FudmFzSGVpZ2h0JywgaW5zcGVjdG9yLmhlaWdodCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JDYW52YXNXaWR0aCcsIGluc3BlY3Rvci53aWR0aCk7XG4gICAgICAgIHN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci5jYW52YXMuaW5zdGFuY2UucGFyZW50KCdpbnNwZWN0b3InKTtcbiAgICAgICAgdmFyIHN0YWdlID0gbmV3IEluc3BlY3RvclN0YWdlKCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JTdGFnZScsIHN0YWdlKTtcbiAgICAgICAgdmFyIHRpbWVsaW5lID0gbmV3IEluc3BlY3RvclRpbWVsaW5lKDAsIDE4MCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JUaW1lbGluZScsIHRpbWVsaW5lKTtcbiAgICAgICAgdmFyIHZpZGVvVGltZU1hcmtlciA9IG5ldyBJbnNwZWN0b3JWaWRlb1RpbWVNYXJrZXIoKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvclZpZGVvTWFya2VyJywgdmlkZW9UaW1lTWFya2VyKTtcblxuICAgICAgICBpbnNwZWN0b3IuY29sb3JNb2RlKGluc3BlY3Rvci5SR0IsIDI1NSwgMjU1LCAyNTUsIDEwMCk7XG5cbiAgICAgICAgaW5zcGVjdG9yLmZyYW1lUmF0ZSgxMCk7XG4gICAgICAgIGluc3BlY3Rvci5ub0xvb3AoKTtcbiAgICB9O1xuXG4gICAgaW5zcGVjdG9yLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3Iuc3RhZ2UuaW5zdGFuY2UuZHJhdygpO1xuICAgICAgICBpZiAoc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2gpIHtcbiAgICAgICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuaW5zdGFuY2UuZHJhdygpO1xuICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guZHJhd0FjdGlvbnMoKTtcbiAgICAgICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudmlkZW9NYXJrZXIuaW5zdGFuY2UuZHJhdygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG1vdXNlTW92ZWQoKSB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnRvdWNoTWFuYWdlci5pbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnN0YW5jZS5tb3VzZU92ZXJBY3Rpb24oaW5zcGVjdG9yLm1vdXNlWCwgaW5zcGVjdG9yLm1vdXNlWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3VzZVByZXNzZWQoKSB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnRvdWNoTWFuYWdlci5pbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnN0YW5jZS5tb3VzZVByZXNzZWRBY3Rpb24oaW5zcGVjdG9yLm1vdXNlWCwgaW5zcGVjdG9yLm1vdXNlWSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluc3BlY3Rvci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbnNwZWN0b3Iubm9Mb29wKCk7XG4gICAgfVxuXG4gICAgaW5zcGVjdG9yLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbnNwZWN0b3IubG9vcCgpO1xuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9pbnNwZWN0b3JTa2V0Y2guanMiLCJpbXBvcnQgVG91Y2ggZnJvbSAnLi4vY29tcG9uZW50cy90b3VjaGVzL1RvdWNoJ1xuaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL3RvdWNoZXMvQWN0aW9uJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHNldHVwKCl7XG5cbiAgICAgICAgdmFyIGFjdGlvbiA9IG5ldyBBY3Rpb24oMCwgNjAsIHtcbiAgICAgICAgICAgIFwiaHNsXCI6IHtcImhcIjogNjEuMDc2MjMzMTgzODU2NSwgXCJzXCI6IDEsIFwibFwiOiAwLjQzNzI1NDkwMTk2MDc4NDMsIFwiYVwiOiAxfSxcbiAgICAgICAgICAgIFwiaGV4XCI6IFwiI0RCREYwMFwiLFxuICAgICAgICAgICAgXCJyZ2JhXCI6IHtcInJcIjogMjE5LCBcImdcIjogMjIzLCBcImJcIjogMCwgXCJhXCI6IDEsIFwiYWxwaGFcIjogNTB9LFxuICAgICAgICAgICAgXCJoc3ZcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJ2XCI6IDAuODc0NTA5ODAzOTIxNTY4NiwgXCJhXCI6IDF9LFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbmV3IFRvdWNoKDAsIDEyMCwgJ1RvdWNoIEV4YW1wbGUnLCB7XG4gICAgICAgICAgICBcImhzbFwiOiB7XCJoXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFwic1wiOiAxLCBcImxcIjogMC40MzcyNTQ5MDE5NjA3ODQzLCBcImFcIjogMX0sXG4gICAgICAgICAgICBcImhleFwiOiBcIiNEQkRGMDBcIixcbiAgICAgICAgICAgIFwicmdiYVwiOiB7XCJyXCI6IDIxOSwgXCJnXCI6IDIyMywgXCJiXCI6IDAsIFwiYVwiOiAxLCBcImFscGhhXCI6IDUwfSxcbiAgICAgICAgICAgIFwiaHN2XCI6IHtcImhcIjogNjEuMDc2MjMzMTgzODU2NSwgXCJzXCI6IDEsIFwidlwiOiAwLjg3NDUwOTgwMzkyMTU2ODYsIFwiYVwiOiAxfSxcbiAgICAgICAgfSwgW2FjdGlvbl0pO1xuXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvc3BlY3MvdG91Y2hlc1NwZWMuanMiLCJpbXBvcnQgU3RhZ2UgZnJvbSAnLi9jb21wb25lbnRzL3VpL1N0YWdlJ1xuaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4vY29tcG9uZW50cy91aS9UaW1lbGluZSdcbmltcG9ydCBUb3VjaE1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRzL3RvdWNoZXMvVG91Y2hNYW5hZ2VyJ1xuaW1wb3J0IFZpZGVvVGltZU1hcmtlciBmcm9tICcuL2NvbXBvbmVudHMvdWkvVmlkZW9UaW1lTWFya2VyJ1xuaW1wb3J0IFRvdWNoU3BlYyBmcm9tICcuL3NwZWNzL3RvdWNoZXNTcGVjJ1xuaW1wb3J0IHtnZXRTdGF0ZSwgZGlzcGF0Y2h9IGZyb20gJ21vY2tzdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNrZXRjaChwKSB7XG4gICAgbGV0IHN0YXRlID0gbnVsbDtcbiAgICB3aW5kb3cucCA9IHA7XG4gICAgcC5zZXR1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVsaW5lQm94Jykub2Zmc2V0V2lkdGg7XG4gICAgICAgIHZhciBjYW52YXMgPSBwLmNyZWF0ZUNhbnZhcyh3aWR0aCAtIDIwLCAxMzApO1xuICAgICAgICBjYW52YXMubW91c2VNb3ZlZChtb3VzZU1vdmVkKTtcbiAgICAgICAgY2FudmFzLm1vdXNlUHJlc3NlZChtb3VzZVByZXNzZWQpO1xuICAgICAgICBzdGF0ZSA9IGdldFN0YXRlKCcqJyk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRDYW52YXMnLCBjYW52YXMpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SGVpZ2h0JywgcC5oZWlnaHQpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0V2lkdGgnLCBwLndpZHRoKTtcbiAgICAgICAgc3RhdGUuY2FudmFzLmluc3RhbmNlLnBhcmVudCgndGltZWxpbmUnKTtcbiAgICAgICAgdmFyIHN0YWdlID0gbmV3IFN0YWdlKCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRTdGFnZScsIHN0YWdlKTtcbiAgICAgICAgdmFyIHRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKDAsIDEyMCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZScsIHRpbWVsaW5lKTtcbiAgICAgICAgdmFyIHRvdWNoTWFuYWdlciA9IG5ldyBUb3VjaE1hbmFnZXIoWy8qVG91Y2hTcGVjLnNldHVwKCkqL10pO1xuICAgICAgICBkaXNwYXRjaCgnc2V0VG91Y2hNYW5hZ2VyJywgdG91Y2hNYW5hZ2VyKTtcbiAgICAgICAgdmFyIHZpZGVvVGltZU1hcmtlciA9IG5ldyBWaWRlb1RpbWVNYXJrZXIoKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFZpZGVvTWFya2VyJywgdmlkZW9UaW1lTWFya2VyKTtcblxuICAgICAgICBzdGF0ZS5zdGFnZS5pbnN0YW5jZS5zZXR1cCgpO1xuICAgICAgICBwLmNvbG9yTW9kZShwLlJHQiwgMjU1LCAyNTUsIDI1NSwgMTAwKVxuXG4gICAgICAgIGNvbmZpZ0J1dHRvbnMoKTtcbiAgICAgICAgcC5mcmFtZVJhdGUoMTApO1xuICAgIH07XG5cbiAgICBwLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0YXRlLnN0YWdlLmluc3RhbmNlLmRyYXcoKTtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuaW5zdGFuY2UuZHJhdygpO1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zdGFuY2UuZHJhdygpO1xuICAgICAgICBzdGF0ZS52aWRlb01hcmtlci5pbnN0YW5jZS5kcmF3KCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNvbmZpZ0J1dHRvbnMoKSB7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tSW4oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFpvb20nLCBzdGF0ZS50aW1lbGluZS56b29tRmFjdG9yICsgMSk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbml0aWFsaXplZCcsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tT3V0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChzdGF0ZS50aW1lbGluZS56b29tRmFjdG9yID4gc3RhdGUudGltZWxpbmUuaW5pdGlhbFpvb21GYWN0b3IpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRab29tJywgc3RhdGUudGltZWxpbmUuem9vbUZhY3RvciAtIDEpO1xuICAgICAgICAgICAgZGlzcGF0Y2goJ3NldEluaXRpYWxpemVkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW91c2VNb3ZlZCgpIHtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlLm1vdXNlT3ZlclRvdWNoKHAubW91c2VYLCBwLm1vdXNlWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGF0ZS50aW1lbGluZS5pbnN0YW5jZS5tb3VzZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwLm1vdXNlRHJhZ2dlZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLnRpbWVsaW5lLmluc3RhbmNlLmRyYWcoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBtb3VzZVByZXNzZWQoKSB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnRvdWNoTWFuYWdlci5pbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnN0YW5jZS5tb3VzZVByZXNzZWRUb3VjaChwLm1vdXNlWCwgcC5tb3VzZVkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdub2xvb3AnKTtcbiAgICAgICAgcC5ub0xvb3AoKTtcbiAgICB9XG5cbiAgICBwLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbG9vcCcpO1xuICAgICAgICBwLmxvb3AoKTtcbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvdGltZWxpbmVTa2V0Y2guanMiLCJpbXBvcnQge2Rpc3BhdGNofSBmcm9tICdtb2Nrc3RhdGUnO1xuaW1wb3J0IHtnbG9iYWxUaW1lbGluZUFjdGlvbnN9IGZyb20gJy4vYWN0aW9ucy9nbG9iYWxUaW1lbGluZUFjdGlvbnMnXG5pbXBvcnQge2luc3BlY3RvckFjdGlvbnN9IGZyb20gJy4vYWN0aW9ucy9pbnNwZWN0b3JBY3Rpb25zJ1xuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSB7XG4gICAgcGxheWVyUmVhZHkoc3RhdGUsIHJlYWR5KXtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYXllclJlYWR5Jyk7XG4gICAgICAgIHN0YXRlLnBsYXllclJlYWR5ID0gcmVhZHk7XG4gICAgICAgIHJldHVybiByZWFkeTtcbiAgICB9LFxuICAgIHNldENhbnZhcyhzdGF0ZSwgaW5zdGFuY2Upe1xuICAgICAgICBzdGF0ZS5jYW52YXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH0sXG4gICAgc2V0VGltZWxpbmUoc3RhdGUsIGluc3RhbmNlKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH0sXG4gICAgc2V0VG91Y2hNYW5hZ2VyKHN0YXRlLCBpbnN0YW5jZSl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSxcbiAgICBzZXRTdGFnZShzdGF0ZSwgaW5zdGFuY2Upe1xuICAgICAgICBzdGF0ZS5zdGFnZS5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSxcbiAgICBzZXRQbGF5ZXIoc3RhdGUsIGluc3RhbmNlKXtcbiAgICAgICAgc3RhdGUucGxheWVyLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuICAgIHNldFZpZGVvTWFya2VyKHN0YXRlLCBpbnN0YW5jZSl7XG4gICAgICAgIHN0YXRlLnZpZGVvTWFya2VyLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuICAgIHNldFdpZHRoKHN0YXRlLCB3aWR0aCl7XG4gICAgICAgIHN0YXRlLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVXaWR0aCcsIHdpZHRoKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvcldpZHRoJywgd2lkdGgpO1xuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfSxcbiAgICBzZXRIZWlnaHQoc3RhdGUsIGhlaWdodCl7XG4gICAgICAgIHN0YXRlLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfSxcbiAgICBzZXRUaW1lbGluZVdpZHRoKHN0YXRlLCB3aWR0aCl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9LFxuICAgIHNldFRpbWVsaW5lSGlkZShzdGF0ZSwgaGlkZSl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLmhpZGUgPSBoaWRlO1xuICAgICAgICByZXR1cm4gaGlkZTtcbiAgICB9LFxuICAgIHNldFRpbWVsaW5lSGVpZ2h0KHN0YXRlLCBoZWlnaHQpe1xuICAgICAgICBzdGF0ZS50aW1lbGluZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZUVuZFknLCBzdGF0ZS50aW1lbGluZS5zdGFydFkgKyBoZWlnaHQpO1xuICAgICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH0sXG4gICAgc2V0VGltZWxpbmVNb3VzZU92ZXIoc3RhdGUsIG1vdXNlT3Zlcil7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLmlzTW91c2VPdmVyID0gbW91c2VPdmVyO1xuICAgICAgICByZXR1cm4gbW91c2VPdmVyO1xuICAgIH0sXG4gICAgc2V0VGltZWxpbmVTdGFydFRpbWUoc3RhdGUsIHN0YXJ0VGltZSl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0VGltZTtcbiAgICB9LFxuICAgIHNldFRpbWVsaW5lU3RhcnRZKHN0YXRlLCBzdGFydFkpe1xuICAgICAgICBzdGF0ZS50aW1lbGluZS5zdGFydFkgPSBzdGFydFk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZU1pbnV0ZXNZJywgc3RhcnRZICsgNSk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZVNlY29uZHNZJywgc3RhcnRZICsgNTUpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVBeGlzWScsIHN0YXJ0WSArIDYwKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lRW5kWScsIHN0YXJ0WSArIHN0YXRlLnRpbWVsaW5lLmhlaWdodCk7XG4gICAgICAgIHJldHVybiBzdGFydFk7XG4gICAgfSxcbiAgICBzZXRUaW1lbGluZUF4aXNZKHN0YXRlLCBheGlzWSl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLmF4aXNZID0gYXhpc1k7XG4gICAgICAgIHJldHVybiBheGlzWTtcbiAgICB9LFxuICAgIHNldFRpbWVsaW5lRW5kWShzdGF0ZSwgZW5kWSl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLmVuZFkgPSBlbmRZO1xuICAgICAgICByZXR1cm4gZW5kWTtcbiAgICB9LFxuICAgIHNldFRpbWVsaW5lU3RhcnRYKHN0YXRlLCBzdGFydFgpe1xuICAgICAgICBzdGF0ZS50aW1lbGluZS5zdGFydFggPSBzdGFydFg7XG4gICAgICAgIHJldHVybiBzdGFydFg7XG4gICAgfSxcbiAgICBzZXRUaW1lbGluZUVuZFgoc3RhdGUsIGVuZFgpe1xuICAgICAgICBlbmRYID0gKHN0YXRlLnBsYXllci5kdXJhdGlvbiAtIHN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSkgKiBzdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aCArIDMwO1xuICAgICAgICBzdGF0ZS50aW1lbGluZS5lbmRYID0gZW5kWDtcbiAgICAgICAgcmV0dXJuIGVuZFg7XG4gICAgfSxcbiAgICBzZXRUaW1lbGluZU1pbnV0ZXNZKHN0YXRlLCBtaW51dGVzWSl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLm1pbnV0ZXNZID0gbWludXRlc1k7XG4gICAgICAgIHJldHVybiBtaW51dGVzWTtcbiAgICB9LFxuICAgIHNldFRpbWVsaW5lU2Vjb25kc1koc3RhdGUsIHNlY29uZHNZKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuc2Vjb25kc1kgPSBzZWNvbmRzWTtcbiAgICAgICAgcmV0dXJuIHNlY29uZHNZO1xuICAgIH0sXG4gICAgc2V0U2hvd1NlY29uZHMoc3RhdGUsIHNob3dTZWNvbmRzKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuc2hvd1NlY29uZHMgPSBzaG93U2Vjb25kcztcbiAgICAgICAgcmV0dXJuIHNob3dTZWNvbmRzO1xuICAgIH0sXG4gICAgc2V0U2hvd1NlY29uZHNJbnRlcnZhbChzdGF0ZSwgc2hvd1NlY29uZHNJbnRlcnZhbCl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLnNob3dTZWNvbmRzSW50ZXJ2YWwgPSBzaG93U2Vjb25kc0ludGVydmFsO1xuICAgICAgICByZXR1cm4gc2hvd1NlY29uZHNJbnRlcnZhbDtcbiAgICB9LFxuICAgIHNldFpvb20oc3RhdGUsIHpvb20pe1xuICAgICAgICBpZiAoc3RhdGUucGxheWVyLmR1cmF0aW9uID4gNDIwKSB7XG4gICAgICAgICAgICBzdGF0ZS50aW1lbGluZS5pbml0aWFsWm9vbUZhY3RvciA9IE1hdGguZmxvb3Ioc3RhdGUucGxheWVyLmR1cmF0aW9uIC8gNDIwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUudGltZWxpbmUuem9vbUZhY3RvciAhPSB6b29tKSB7XG4gICAgICAgICAgICBzdGF0ZS50aW1lbGluZS56b29tRmFjdG9yQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoem9vbSA8IHN0YXRlLnRpbWVsaW5lLmluaXRpYWxab29tRmFjdG9yKSB7XG4gICAgICAgICAgICBzdGF0ZS50aW1lbGluZS56b29tRmFjdG9yID0gc3RhdGUudGltZWxpbmUuaW5pdGlhbFpvb21GYWN0b3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZS50aW1lbGluZS56b29tRmFjdG9yID0gem9vbTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gem9vbTtcbiAgICB9LFxuICAgIHNldFNlY29uZFdpZHRoKHN0YXRlLCBzZWNvbmRXaWR0aCl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoID0gc2Vjb25kV2lkdGg7XG4gICAgICAgIHJldHVybiBzZWNvbmRXaWR0aDtcbiAgICB9LFxuICAgIHNldENvbFdpZHRoKHN0YXRlLCBjb2xXaWR0aCl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLmNvbFdpZHRoID0gY29sV2lkdGg7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRTaG93U2Vjb25kc0ludGVydmFsJywgY29sV2lkdGggPiA2MCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRTaG93U2Vjb25kcycsIGNvbFdpZHRoID4gOTApO1xuICAgICAgICBkaXNwYXRjaCgnc2V0U2Vjb25kV2lkdGgnLCBjb2xXaWR0aCAvIDEwKVxuICAgICAgICByZXR1cm4gY29sV2lkdGg7XG4gICAgfSxcbiAgICBzZXREdXJhdGlvbihzdGF0ZSwgZHVyYXRpb24pe1xuICAgICAgICBzdGF0ZS5wbGF5ZXIuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lRW5kWCcsIDApO1xuICAgICAgICByZXR1cm4gZHVyYXRpb247XG4gICAgfSxcbiAgICBzZXRDdXJyZW50VGltZShzdGF0ZSwgY3VycmVudFRpbWUpe1xuICAgICAgICBzdGF0ZS5wbGF5ZXIuY3VycmVudFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUaW1lO1xuICAgIH0sXG5cbiAgICBzZXRJbml0aWFsaXplZChzdGF0ZSwgaW5pdGlhbGl6ZWQpe1xuICAgICAgICBzdGF0ZS5pbml0aWFsaXplZCA9IGluaXRpYWxpemVkO1xuICAgICAgICByZXR1cm4gaW5pdGlhbGl6ZWQ7XG4gICAgfSxcbiAgICBzZXRUb3VjaGVzKHN0YXRlLCB0b3VjaGVzKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXMgPSB0b3VjaGVzO1xuICAgICAgICByZXR1cm4gdG91Y2hlcztcbiAgICB9LFxuICAgIHNldFNlbGVjdGVkVG91Y2goc3RhdGUsIHRvdWNoKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2ggPSB0b3VjaDtcbiAgICAgICAgcmV0dXJuIHRvdWNoO1xuICAgIH0sXG4gICAgYWRkVG91Y2goc3RhdGUsIHRvdWNoKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXMucHVzaCh0b3VjaCk7XG4gICAgICAgIHJldHVybiB0b3VjaDtcbiAgICB9LFxuICAgIGVkaXRUb3VjaChzdGF0ZSwgdG91Y2gpe1xuICAgICAgICB2YXIgaW5kZXggPSBfLmZpbmRJbmRleChzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlcywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHJldHVybiBvLmlkID09IHRvdWNoLmlkXG4gICAgICAgIH0pO1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlc1tpbmRleF0uc3RhcnQgPSB0b3VjaC5zdGFydDtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXNbaW5kZXhdLmVuZCA9IHRvdWNoLmVuZDtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXNbaW5kZXhdLmNvbG9yID0gdG91Y2guY29sb3I7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzW2luZGV4XS50ZXh0ID0gdG91Y2gudGV4dDtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlc1tpbmRleF0uYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXNbaW5kZXhdLmFjdGlvbnNbaV0uY29sb3IgPSBfLmNsb25lRGVlcCh0b3VjaC5jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvdWNoO1xuICAgIH0sXG4gICAgcmVtb3ZlVG91Y2goc3RhdGUsIHRvdWNoKXtcbiAgICAgICAgdmFyIGluZGV4ID0gXy5maW5kSW5kZXgoc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICByZXR1cm4gby5pZCA9PSB0b3VjaC5pZFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvdWNoO1xuICAgIH0sXG4gICAgLi4uaW5zcGVjdG9yQWN0aW9ucyxcbiAgICAuLi5nbG9iYWxUaW1lbGluZUFjdGlvbnNcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9zdG9yZXMvYWN0aW9ucy5qcyIsImV4cG9ydCBjb25zdCBzdGF0ZSA9IHtcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgcGxheWVyUmVhZHk6IGZhbHNlLFxuICAgIHRvdWNoTWFuYWdlcjoge1xuICAgICAgICBpbnN0YW5jZTogbnVsbCxcbiAgICAgICAgdG91Y2hlczogW10sXG4gICAgICAgIHNlbGVjdGVkVG91Y2g6IG51bGwsXG4gICAgICAgIHJlY29yZGluZ0FjdGlvbjogZmFsc2UsXG4gICAgICAgIHJlY29yZGluZ1RvdWNoOiBmYWxzZSxcbiAgICAgICAgaW5zcGVjdG9yOiB7XG4gICAgICAgICAgICBpbnN0YW5jZTogbnVsbCxcbiAgICAgICAgICAgIGNhbnZhczoge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlOiBudWxsLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aWRlb01hcmtlcjoge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhZ2U6IHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpbWVsaW5lOiB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2U6IG51bGwsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgICAgICAgICBzZWNvbmRXaWR0aDogMCxcbiAgICAgICAgICAgICAgICBjb2xXaWR0aDogMCxcbiAgICAgICAgICAgICAgICBlbmRZOiAwLFxuICAgICAgICAgICAgICAgIG1pbnV0ZXNZOiAwLFxuICAgICAgICAgICAgICAgIHNlY29uZHNZOiAwLFxuICAgICAgICAgICAgICAgIGF4aXNZOiAwLFxuICAgICAgICAgICAgICAgIGVuZFg6IDAsXG4gICAgICAgICAgICAgICAgc3RhcnRYOiAzMCxcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6IDAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRpbWVsaW5lOiB7XG4gICAgICAgIGluc3RhbmNlOiBudWxsLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgICAgc3RhcnRUaW1lOiAwLFxuICAgICAgICBzaG93U2Vjb25kczogZmFsc2UsXG4gICAgICAgIHNob3dTZWNvbmRzSW50ZXJ2YWw6IGZhbHNlLFxuICAgICAgICB6b29tRmFjdG9yOiAxLFxuICAgICAgICBpbml0aWFsWm9vbUZhY3RvcjogMSxcbiAgICAgICAgc2Vjb25kV2lkdGg6IDAsXG4gICAgICAgIGNvbFdpZHRoOiAwLFxuICAgICAgICBzdGFydFk6IDAsXG4gICAgICAgIGVuZFk6IDAsXG4gICAgICAgIG1pbnV0ZXNZOiAwLFxuICAgICAgICBzZWNvbmRzWTogMCxcbiAgICAgICAgYXhpc1k6IDAsXG4gICAgICAgIGVuZFg6IDAsXG4gICAgICAgIHN0YXJ0WDogMCxcbiAgICAgICAgaXNNb3VzZU92ZXI6IGZhbHNlLFxuICAgICAgICB6b29tRmFjdG9yQ2hhbmdlOiBmYWxzZVxuICAgIH0sXG4gICAgZ2xvYmFsVGltZWxpbmU6IHtcbiAgICAgICAgaW5zdGFuY2U6IG51bGwsXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICAgIHN0YXJ0VGltZTogMCxcbiAgICAgICAgc2hvd1NlY29uZHM6IGZhbHNlLFxuICAgICAgICBzaG93U2Vjb25kc0ludGVydmFsOiBmYWxzZSxcbiAgICAgICAgem9vbUZhY3RvcjogMSxcbiAgICAgICAgaW5pdGlhbFpvb21GYWN0b3I6IDEsXG4gICAgICAgIHNlY29uZFdpZHRoOiAwLFxuICAgICAgICBjb2xXaWR0aDogMCxcbiAgICAgICAgc3RhcnRZOiAwLFxuICAgICAgICBlbmRZOiAwLFxuICAgICAgICBtaW51dGVzWTogMCxcbiAgICAgICAgc2Vjb25kc1k6IDAsXG4gICAgICAgIGF4aXNZOiAwLFxuICAgICAgICBlbmRYOiAwLFxuICAgICAgICBzdGFydFg6IDAsXG4gICAgICAgIGlzTW91c2VPdmVyOiBmYWxzZSxcbiAgICAgICAgem9vbUZhY3RvckNoYW5nZTogZmFsc2UsXG4gICAgICAgIGNhbnZhczoge1xuICAgICAgICAgICAgaW5zdGFuY2U6IG51bGwsXG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgdmlkZW9NYXJrZXI6IHtcbiAgICAgICAgICAgIGluc3RhbmNlOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHN0YWdlOiB7XG4gICAgICAgICAgICBpbnN0YW5jZTogbnVsbFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgc3RhZ2U6IHtcbiAgICAgICAgaW5zdGFuY2U6IG51bGxcbiAgICB9LFxuICAgIHBsYXllcjoge1xuICAgICAgICBpbnN0YW5jZTogbnVsbCxcbiAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgIGN1cnJlbnRUaW1lOiAwXG4gICAgfSxcbiAgICB2aWRlb01hcmtlcjoge1xuICAgICAgICBpbnN0YW5jZTogbnVsbFxuICAgIH0sXG4gICAgY2FudmFzOiB7XG4gICAgICAgIGluc3RhbmNlOiBudWxsLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3N0b3Jlcy9zdG9yZS5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdXBkYXRlKGlkLCBzY291dGluZywgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAucHV0KCcvYXBpL3Njb3V0aW5ncy8nICsgaWQgKyAnL3RvdWNoZXMvJywgc2NvdXRpbmcpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvci5ib2R5KSk7XG4gICAgfSxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9zY291dGluZ3Mvc2NvdXRpbmdUb3VjaFNlcnZpY2UuanMiLCJleHBvcnQgZGVmYXVsdHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNob3dFcnJvcihyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBlcnJvciBpbiByZXNwb25zZS5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVycm9yc1tlcnJvcl0uZm9yRWFjaCgodmFsaWRhdGlvbkVycm9yKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb290LmVycm9yVG9hc3QodmFsaWRhdGlvbkVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5lcnJvclRvYXN0KHJlc3BvbnNlLmVycm9ycylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9hamF4L2Vycm9yUHJlc2VudGVyLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaW5zcGVjdG9yLWluZm8ge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5pbnNwZWN0b3ItaW5mbyAuaW5zcGVjdG9yLWluZm8tLXRpdGxlIHtcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxufVxcbi5hdGhsZXRlLW1lbnUgLmRyb3Bkb3duIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xcbn1cXG4uYXRobGV0ZS1tZW51IC5hdGhsZXRlLW1lbnUtdGl0bGUge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkM2UwZTk7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkM2UwZTk7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDNlMGU5O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG4uYXRobGV0ZS1tZW51IC5hdGhsZXRlLW1lbnUtbGVmdCB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkM2UwZTk7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDNlMGU5O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuLmF0aGxldGUtbWVudSAuYXRobGV0ZS1tZW51LXJpZ2h0IHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkM2UwZTk7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU3OTJmNTZjIS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvaW5zcGVjdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRhZ3MgYSB7XFxuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG59XFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XFxuICBvcGFjaXR5OiAwLjggIWltcG9ydGFudDtcXG59XFxuLnRhZ3MtbGlzdCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGFncy1saXN0IC5sYWJlbCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuLnRhZ3MtbGlzdCAubGFiZWwgLmNsb3NlIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG4udGFncy1saXN0IGRpdixcXG4uZ3UtbWlycm9yIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG4udGFncy1saXN0IGRpdiAubGFiZWwsXFxuICAuZ3UtbWlycm9yIC5sYWJlbCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4udGFncy1saXN0IGRpdiB7XFxuICBjdXJzb3I6IG1vdmU7XFxuICBjdXJzb3I6IGdyYWI7XFxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLnRhZ3MtbGlzdCBkaXY6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uZ3UtbWlycm9yIHtcXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICB6LWluZGV4OiA5OTk5ICFpbXBvcnRhbnQ7XFxuICBvcGFjaXR5OiAwLjg7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9ODApXFxcIjtcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT04MCk7XFxuICBjdXJzb3I6IGdyYWJiaW5nO1xcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xcbn1cXG4uZ3UtbWlycm9yIC5sYWJlbCAuY2xvc2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZ3UtaGlkZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5ndS11bnNlbGVjdGFibGUge1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XFxuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uZ3UtdHJhbnNpdCB7XFxuICBvcGFjaXR5OiAwLjI7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MjApXFxcIjtcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0yMCk7XFxufVxcbi5ndS10cmFuc2l0IC5jbG9zZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50YWdzLWxpc3QgLmV4LW1vdmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XFxufVxcbi50YWdzLWxpc3QuZXgtb3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcbi5oYW5kbGUge1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01ZjQyMjNmNSEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI3ZpZGVvLWNhbnZhcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4uLy4uLy4uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9nbG9iYWwvdmlkZW8vcGxheWVyLnZ1ZT8zOTI2NTdhMFwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBV0E7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsT0FBQTtJQUNBLG9CQUFBO0NBQ0FcIixcImZpbGVcIjpcInBsYXllci52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPHZpZGVvIHJlZj1cXFwicGxheWVyXFxcIlxcbiAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ2aWRlby1qcyB2anMtZGVmYXVsdC1za2luXFxcIlxcbiAgICAgICAgICAgICAgIGNvbnRyb2xzIHByZWxvYWQ9XFxcImF1dG9cXFwiXFxuICAgICAgICAgICAgICAgOnBvc3Rlcj1cXFwicG9zdGVyXFxcIlxcbiAgICAgICAgICAgICAgIDpkYXRhLXNldHVwPVxcXCJzdHJTb3VyY2VcXFwiXFxuICAgICAgICA+PC92aWRlbz5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG48c3R5bGU+XFxuICAgICN2aWRlby1jYW52YXMge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgICB9XFxuPC9zdHlsZT5cXG48c2NyaXB0PlxcbiAgICBpbXBvcnQge2Rpc3BhdGNoLCBnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcXG5cXG4gICAgZXhwb3J0IGRlZmF1bHR7XFxuICAgICAgICBkYXRhKCl7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgcGxheWVyOiB7fVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBwcm9wczoge1xcbiAgICAgICAgICAgIHNvdXJjZToge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3RcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHBvc3Rlcjoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmdcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG9mZnNldDoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogZmFsc2VcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBjb21wb25lbnRzOiB7fSxcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICAgICAgc3RyU291cmNlKCl7XFxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnNvdXJjZSlcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgbW91bnRlZCgpe1xcbiAgICAgICAgICAgIHRoaXMuaW5pdFBsYXllcih0aGlzLnNvdXJjZSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGFwaSgpe1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGluaXRQbGF5ZXIoc291cmNlKXtcXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnNvdXJjZSk7XFxuICAgICAgICAgICAgICAgIGxldCBjb25maWcgPSB7XFxuICAgICAgICAgICAgICAgICAgICBmbHVpZDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogc291cmNlLnNvdXJjZXNbMF0sXFxuICAgICAgICAgICAgICAgICAgICB0ZWNoT3JkZXI6IFsneW91dHViZSddLFxcbiAgICAgICAgICAgICAgICAgICAgcGxheWJhY2tSYXRlczogWzAuMjUsIDAuNSwgMSwgMS41LCAyXSxcXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUHJvZ3Jlc3M6IHt9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFiTG9vcFBsdWdpbjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9vcElmQmVmb3JlU3RhcnQ6IGZhbHNlLCAvL2FsbG93IHZpZGVvIHRvIHBsYXkgbm9ybWFsbHkgYmVmb3JlIHRoZSBsb29wIHNlY3Rpb24/IGRlZmF1bHRzIHRvIHRydWVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9vb3BJZkFmdGVyRW5kOiB0cnVlLCAvLyBkZWZhdWx0cyB0byB0cnVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdXNlQWZ0ZXJMb29waW5nOiBmYWxzZSwgICAgICAgLy9pZiB0cnVlLCBhZnRlciBsb29waW5nIHZpZGVvIHdpbGwgcGF1c2UuIERlZmF1bHRzIHRvIGZhbHNlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdXNlQmVmb3JlTG9vcGluZzogZmFsc2UsICAgICAgLy9pZiB0cnVlLCBiZWZvcmUgbG9vcGluZyB2aWRlbyB3aWxsIHBhdXNlLiBEZWZhdWx0cyB0byBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b25zOiBmYWxzZSwgIC8vZGVmYXVsdHMgdG8gdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfTtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2Zmc2V0LnN0YXJ0KSB7XFxuICAgICAgICAgICAgICAgICAgICBjb25maWcucGx1Z2lucy5kbmNvZmZzZXQgPSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRPZmZzZXQ6IHRoaXMub2Zmc2V0LnN0YXJ0LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZE9mZnNldDogdGhpcy5vZmZzZXQuZW5kXFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSB2aWRlb2pzKHRoaXMuJHJlZnMucGxheWVyLCBjb25maWcpO1xcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0UGxheWVyJywgdGhpcy5wbGF5ZXIpO1xcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wbGF5KCk7XFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgZnVuY3Rpb24gZHVyYXRpb25TZXR0ZXIoZXZlbnQpIHtcXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKCcqJyk7XFxuICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXRlLnBsYXllci5kdXJhdGlvbikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXREdXJhdGlvbicsIHN0YXRlLnBsYXllci5pbnN0YW5jZS5kdXJhdGlvbigpKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0Wm9vbScsIDEpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5wbGF5ZXIuZHVyYXRpb24pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3BsYXllclJlYWR5JywgdHJ1ZSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnBsYXllci5pbnN0YW5jZS5vZmYoJ3RpbWV1cGRhdGUnLCBkdXJhdGlvblNldHRlcilcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdwbGF5ZXJSZWFkeScsIHRydWUpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnBsYXllci5pbnN0YW5jZS5vZmYoJ3RpbWV1cGRhdGUnLCBkdXJhdGlvblNldHRlcilcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXliYWNrUmF0ZSgxKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCAoKT0+IHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRDdXJyZW50VGltZScsIHRoaXMucGxheWVyLmN1cnJlbnRUaW1lKCkpO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTI5NDU3NTkwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAzMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udGFnIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjb2xvcjogIzcxNzE3MTtcXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgxODAsIDE4MCwgMTgwLCAwLjEpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgbWFyZ2luOiAwIDNweCA2cHggMDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFncyAudGFnOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDhDO1xcbn1cXG4udGFncyAudGFnLnByaW1hcnkge1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyOEJDQTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzU3RUJEXFxufVxcbi50YWdzIC50YWcuc3VjY2VzcyB7XFxuICAgIGNvbG9yOiAjRkZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUNCODVDO1xcbiAgICBib3JkZXItY29sb3I6ICM0Q0FFNENcXG59XFxuLnRhZ3MgLnRhZy5pbmZvIHtcXG4gICAgY29sb3I6ICNGRkY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1QkMwREU7XFxuICAgIGJvcmRlci1jb2xvcjogIzQ2QjhEQVxcbn1cXG4udGFncyAudGFnLndhcm5pbmcge1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwQUQ0RTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjRUVBMjM2XFxufVxcbi50YWdzIC50YWcuZGFuZ2VyIHtcXG4gICAgY29sb3I6ICNGRkY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEOTUzNEY7XFxuICAgIGJvcmRlci1jb2xvcjogI0Q0M0YzQVxcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4uLy4uLy4uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZy52dWU/MDI0YTA5MjBcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQU9BO0lBQ0Esc0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFFQSxpREFBQTtJQUNBLHdDQUFBO0lBSUEsZ0NBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0NBQ0E7QUFFQTtJQUNBLG1CQUFBO0NBQ0E7QUFFQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtJQUNBLHFCQUFBO0NBQ0E7QUFFQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtJQUNBLHFCQUFBO0NBQ0E7QUFFQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtJQUNBLHFCQUFBO0NBQ0E7QUFFQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtJQUNBLHFCQUFBO0NBQ0E7QUFFQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtJQUNBLHFCQUFBO0NBQ0FcIixcImZpbGVcIjpcInRhZy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8dGFnLWRyb3Bkb3duIHYtaWY9XFxcInRhZy5kcm9wZG93blxcXCIgdi1vbjpvcHRpb24tY2xpY2tlZD1cXFwiZHJvcGRvd25PcHRpb25DbGlja2VkXFxcIiA6dGFnPVxcXCJ0YWdcXFwiPjwvdGFnLWRyb3Bkb3duPlxcbiAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cXFwidGFnLWRyb3Bkb3duXFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCIgYnRuIHRhZ1xcXCIgdi1vbjpjbGljay5wcmV2ZW50PVxcXCJ0YWdDbGlja2VkXFxcIiA6Y2xhc3M9XFxcIidiZy0nK3RhZy5jb2xvclxcXCI+e3t0YWcubmFtZX19PC9hPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcbjxzdHlsZT5cXG4gICAgLnRhZyB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBjb2xvcjogIzcxNzE3MTtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XFxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMTgwLCAxODAsIDE4MCwgMC4xKTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMTgwLCAxODAsIDE4MCwgMC4xKTtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcXG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICBtYXJnaW46IDAgM3B4IDZweCAwO1xcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnRhZ3MgLnRhZzpob3ZlciB7XFxuICAgICAgICBib3JkZXItY29sb3I6ICMwOEM7XFxuICAgIH1cXG5cXG4gICAgLnRhZ3MgLnRhZy5wcmltYXJ5IHtcXG4gICAgICAgIGNvbG9yOiAjRkZGO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyOEJDQTtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzM1N0VCRFxcbiAgICB9XFxuXFxuICAgIC50YWdzIC50YWcuc3VjY2VzcyB7XFxuICAgICAgICBjb2xvcjogI0ZGRjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1Q0I4NUM7XFxuICAgICAgICBib3JkZXItY29sb3I6ICM0Q0FFNENcXG4gICAgfVxcblxcbiAgICAudGFncyAudGFnLmluZm8ge1xcbiAgICAgICAgY29sb3I6ICNGRkY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUJDMERFO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNDZCOERBXFxuICAgIH1cXG5cXG4gICAgLnRhZ3MgLnRhZy53YXJuaW5nIHtcXG4gICAgICAgIGNvbG9yOiAjRkZGO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwQUQ0RTtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0VFQTIzNlxcbiAgICB9XFxuXFxuICAgIC50YWdzIC50YWcuZGFuZ2VyIHtcXG4gICAgICAgIGNvbG9yOiAjRkZGO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q5NTM0RjtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Q0M0YzQVxcbiAgICB9XFxuPC9zdHlsZT5cXG48c2NyaXB0PlxcbiAgICBpbXBvcnQgdGFnRHJvcGRvd24gZnJvbSAnLi90YWdEcm9wZG93bi52dWUnXFxuXFxuICAgIGV4cG9ydCBkZWZhdWx0e1xcbiAgICAgICAgcHJvcHM6IHtcXG4gICAgICAgICAgICB0YWc6IHt9XFxuICAgICAgICB9LFxcbiAgICAgICAgY29tcG9uZW50czoge1xcbiAgICAgICAgICAgIHRhZ0Ryb3Bkb3duXFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9uQ2xpY2tlZCh0YWcpe1xcbiAgICAgICAgICAgICAgICBsZXQgdGFnRHJvcGRvd24gPSBfLmNsb25lRGVlcCh0YWcpO1xcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0YWctY2xpY2tlZCcsIHRhZ0Ryb3Bkb3duKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdGFnQ2xpY2tlZCgpe1xcbiAgICAgICAgICAgICAgICBsZXQgdGFnID0gXy5jbG9uZURlZXAodGhpcy50YWcpO1xcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0YWctY2xpY2tlZCcsIHRhZylcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ1MDRkYWVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcInRvdWNoZXNMaXN0LnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01NTM5MDM5NyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9saXN0cy90b3VjaGVzTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDM0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJuZXdUb3VjaEZvcm0udnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDM0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52dWUtY29sb3JfX2NvbXBhY3Qge1xcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4uLy4uLy4uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlPzNjZjA0ZGQ5XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE2U0E7SUFDQSx1QkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJuZXdUb3VjaEZvcm0udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cXFwiXFxcIiB2LW9uOnN1Ym1pdC5wcmV2ZW50PVxcXCJvblN1Ym1pdFxcXCIgY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbCBmb3JtLXRvdWNoXFxcIiB2LWlmPVxcXCJvcGVuXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiA6Y2xhc3M9XFxcInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygndG91Y2gudGV4dCcpIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ldy10aXRsZVxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaXRsZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXctdGl0bGVcXFwiIG5hbWU9XFxcIm5ldy10aXRsZVxcXCIgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbD1cXFwidG91Y2gudGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcnVsZXM9XFxcInJlcXVpcmVkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hcz1cXFwiVGl0bGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlRpdGxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwidG91Y2gudGV4dFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVxcXCJlcnJvcnMuaGFzKCd0b3VjaC50ZXh0JylcXFwiPnt7IGVycm9ycy5maXJzdCgndG91Y2gudGV4dCcpIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuZXctdGl0bGVcXFwiIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3JcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb21wYWN0LXBpY2tlciB2LW1vZGVsPVxcXCJ0b3VjaC5jb2xvclxcXCIgQGNoYW5nZS1jb2xvcj1cXFwib25DaGFuZ2VDb2xvclxcXCI+PC9jb21wYWN0LXBpY2tlcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiA6Y2xhc3M9XFxcInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygndG91Y2guc3RhcnQnKSB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuZXctc3RhcnRcXFwiIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnQgKHNlYylcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXctc3RhcnRcXFwiIG5hbWU9XFxcIm5ldy1zdGFydFxcXCIgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsPVxcXCJ0b3VjaC5zdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1ydWxlcz1cXFwicmVxdWlyZWR8bnVtZXJpY1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hcz1cXFwiU3RhcnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwidG91Y2guc3RhcnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXctc3RhcnQtZm10XFxcIiBuYW1lPVxcXCJuZXctc3RhcnQtZm10XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiU3RhcnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInN0YXJ0Rm10XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XFxcImVycm9ycy5oYXMoJ3RvdWNoLnN0YXJ0JylcXFwiPnt7IGVycm9ycy5maXJzdCgndG91Y2guc3RhcnQnKSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgOmNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3RvdWNoLmVuZCcpIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ldy1lbmRcXFwiIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5kKHNlYylcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXctZW5kXFxcIiBuYW1lPVxcXCJuZXctZW5kXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWw9XFxcInRvdWNoLmVuZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1ydWxlcz1cXFwicmVxdWlyZWR8bnVtZXJpY1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hcz1cXFwiRW5kXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW5kXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJ0b3VjaC5lbmRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXctZW5kLWZtdFxcXCIgbmFtZT1cXFwibmV3LWVuZC1mbXRcXFwiIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZW5kRm10XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XFxcImVycm9ycy5oYXMoJ3RvdWNoLmVuZCcpXFxcIj57eyBlcnJvcnMuZmlyc3QoJ3RvdWNoLmVuZCcpIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgdi1pZj1cXFwiY29sbGlkZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwiYWxlcnRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj7DlzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND48aSBjbGFzcz1cXFwiaWNvbiBmYSBmYS1iYW5cXFwiPjwvaT4gVG91Y2hlcyBjYW50IG92ZXJsYXAhPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgdG91Y2ggdGhhdCB5b3Ugd2FudCB0byBhZGQgb3ZlcmxhcCB3aXRoOlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVxcXCJ0b3VjaCBpbiBjb2xsaWRlVG91Y2hlc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIHYtaWY9XFxcInRvdWNoLnByZXZpb3VzLmhhc093blByb3BlcnR5KCdpZCcpXFxcIj57e3RvdWNoLnByZXZpb3VzLnRleHR9fTogdGhhdFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0c1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uIHt7dG9ISE1NU1ModG91Y2gucHJldmlvdXMuc3RhcnQpfX0gYW5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRzIG9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0b0hITU1TUyh0b3VjaC5wcmV2aW91cy5lbmQpfX08L3N0cm9uZz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgdi1pZj1cXFwidG91Y2guY3VycmVudC5oYXNPd25Qcm9wZXJ0eSgnaWQnKVxcXCI+e3t0b3VjaC5jdXJyZW50LnRleHR9fTogdGhhdFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0cyBvblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dG9ISE1NU1ModG91Y2guY3VycmVudC5zdGFydCl9fSBhblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHMgb25cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RvSEhNTVNTKHRvdWNoLmN1cnJlbnQuZW5kKX19PC9zdHJvbmc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIHYtaWY9XFxcImVuZEludmFsaWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcImFsZXJ0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+w5c8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PGkgY2xhc3M9XFxcImljb24gZmEgZmEtYmFuXFxcIj48L2k+IFZhbGlkYXRpb24gRXJyb3IhPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgZW5kIG9mIHRoZSB0b3VjaCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB0aGUgc3RhcnRcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgdGV4dC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+QWRkIFRvdWNoPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgdi1vbjpjbGljay5wcmV2ZW50PVxcXCJjbG9zZVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9mb3JtPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcbjxzdHlsZT5cXG5cXG48L3N0eWxlPlxcbjxzY3JpcHQ+XFxuICAgIGltcG9ydCB7Z2V0U3RhdGV9IGZyb20gJ21vY2tzdGF0ZSc7XFxuICAgIGltcG9ydCB7Q29tcGFjdH0gZnJvbSAndnVlLWNvbG9yJztcXG4gICAgaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVGltZUNvbnZlcnRlcidcXG4gICAgZXhwb3J0IGRlZmF1bHR7XFxuICAgICAgICBwcm9wczoge1xcbiAgICAgICAgICAgIG9wZW46IHt9LFxcbiAgICAgICAgICAgIGluaXRUb3VjaDoge1xcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogMTAwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJoc2xcXFwiOiB7XFxcImhcXFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcXFwic1xcXCI6IDEsIFxcXCJsXFxcIjogMC40MzcyNTQ5MDE5NjA3ODQzLCBcXFwiYVxcXCI6IDF9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiaGV4XFxcIjogXFxcIiNEQkRGMDBcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwicmdiYVxcXCI6IHtcXFwiclxcXCI6IDIxOSwgXFxcImdcXFwiOiAyMjMsIFxcXCJiXFxcIjogMCwgXFxcImFcXFwiOiAxLCBcXFwiYWxwaGFcXFwiOiA1MH0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJoc3ZcXFwiOiB7XFxcImhcXFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcXFwic1xcXCI6IDEsIFxcXCJ2XFxcIjogMC44NzQ1MDk4MDM5MjE1Njg2LCBcXFwiYVxcXCI6IDF9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZHVyYXRpb246IHt9LFxcbiAgICAgICAgICAgIHN0YXJ0OiB7fSxcXG4gICAgICAgICAgICBlbmQ6IHt9XFxuICAgICAgICB9LFxcbiAgICAgICAgd2F0Y2g6IHtcXG4gICAgICAgICAgICBvcGVuKHZhbCl7XFxuICAgICAgICAgICAgICAgIHRoaXMudG91Y2ggPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmluaXRUb3VjaCk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBzdGFydCh2YWwpe1xcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoLnN0YXJ0ID0gdmFsO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZW5kKHZhbCl7XFxuICAgICAgICAgICAgICAgIHRoaXMudG91Y2guZW5kID0gdmFsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAndG91Y2guc3RhcnQnOiBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb2xsaWRlKClcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICd0b3VjaC5lbmQnOiBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb2xsaWRlKCk7XFxuICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9ICEhKHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpID49IHBhcnNlSW50KHRoaXMudG91Y2guZW5kKSB8fCBwYXJzZUludCh0aGlzLnRvdWNoLmVuZCkgPiBwYXJzZUludCh0aGlzLmR1cmF0aW9uKSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGRhdGEoKXtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICBjb2xsaWRlOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgY29sbGlkZVRvdWNoZXM6IFtdLFxcbiAgICAgICAgICAgICAgICBlbmRJbnZhbGlkOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgdG91Y2g6IHtcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGwsXFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogMCxcXG4gICAgICAgICAgICAgICAgICAgIGVuZDogMCxcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcmdiYToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiAyNSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZzogNzcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGI6IDUxLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhOiAxXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBjb21wdXRlZDoge1xcbiAgICAgICAgICAgIHN0YXJ0Rm10KCl7XFxuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMudG91Y2guc3RhcnQpXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBlbmRGbXQoKXtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy50b3VjaC5lbmQpXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB2YWxpZGF0aW9uRW5kKCl7XFxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLnRvdWNoLnN0YXJ0KSArIDE7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbXBvbmVudHM6IHtcXG4gICAgICAgICAgICAnY29tcGFjdC1waWNrZXInOiBDb21wYWN0LFxcbiAgICAgICAgfSxcXG4gICAgICAgIG1ldGhvZHM6IHtcXG4gICAgICAgICAgICBjbG9zZSgpe1xcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjYW5jZWwtbmV3LXRvdWNoJyk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB0b0hITU1TUyhzZWNzKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHNlY3MpXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBvbkNoYW5nZUNvbG9yKHZhbCl7XFxuICAgICAgICAgICAgICAgIHRoaXMudG91Y2guY29sb3IgPSB2YWxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGNoZWNrQ29sbGlkZSgpe1xcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hzID0gZ2V0U3RhdGUoJ3RvdWNoTWFuYWdlcicpLnRvdWNoZXMuc2xpY2UoMCk7XFxuICAgICAgICAgICAgICAgIHRvdWNocy5wdXNoKHRoaXMudG91Y2gpO1xcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcCA9IHRoaXMub3ZlcmxhcCh0b3VjaHMpO1xcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGUgPSBvdmVybGFwLm92ZXJsYXA7XFxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZVRvdWNoZXMgPSBvdmVybGFwLnJhbmdlcztcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG92ZXJsYXAodG91Y2hzKXtcXG4gICAgICAgICAgICAgICAgdmFyIHNvcnRlZFJhbmdlcyA9IHRvdWNocy5zb3J0KChwcmV2aW91cywgY3VycmVudCkgPT4ge1xcblxcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzVGltZSA9IHBhcnNlSW50KHByZXZpb3VzLnN0YXJ0KTtcXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VGltZSA9IHBhcnNlSW50KGN1cnJlbnQuc3RhcnQpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIGlzIGVhcmxpZXIgdGhhbiB0aGUgY3VycmVudFxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzVGltZSA8IGN1cnJlbnRUaW1lKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIHRpbWUgaXMgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgdGltZVxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzVGltZSA9PT0gY3VycmVudFRpbWUpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwcmV2aW91cyB0aW1lIGlzIGxhdGVyIHRoYW4gdGhlIGN1cnJlbnQgdGltZVxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XFxuICAgICAgICAgICAgICAgIH0pO1xcblxcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhlIGZpbmFsIHJlc3VsdHNcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvcnRlZFJhbmdlcy5yZWR1Y2UoKHJlc3VsdCwgY3VycmVudCwgaWR4LCBhcnIpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgcHJldmlvdXMgcmFuZ2VcXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHggPT09IDApIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzID0gYXJyW2lkeCAtIDFdO1xcblxcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGFueSBvdmVybGFwXFxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNFbmQgPSBwYXJzZUludChwcmV2aW91cy5lbmQpO1xcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGFydCA9IHBhcnNlSW50KGN1cnJlbnQuc3RhcnQpO1xcbiAgICAgICAgICAgICAgICAgICAgdmFyIG92ZXJsYXAgPSAocHJldmlvdXNFbmQgPj0gY3VycmVudFN0YXJ0KTtcXG5cXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHRoZSByZXN1bHRcXG4gICAgICAgICAgICAgICAgICAgIGlmIChvdmVybGFwKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8geWVzLCB0aGVyZSBpcyBvdmVybGFwXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm92ZXJsYXAgPSB0cnVlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHRoZSBzcGVjaWZpYyByYW5nZXMgdGhhdCBvdmVybGFwXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnJhbmdlcy5wdXNoKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6IHByZXZpb3VzLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50OiBjdXJyZW50XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XFxuXFxuICAgICAgICAgICAgICAgICAgICAvLyBzZWVkIHRoZSByZWR1Y2VcXG4gICAgICAgICAgICAgICAgfSwge292ZXJsYXA6IGZhbHNlLCByYW5nZXM6IFtdfSk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBvblN1Ym1pdCgpe1xcbiAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKTtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JzLmFueSgpKSB7XFxuXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZEludmFsaWQgPSAhIShwYXJzZUludCh0aGlzLnRvdWNoLnN0YXJ0KSA+PSBwYXJzZUludCh0aGlzLnRvdWNoLmVuZCkgfHwgcGFyc2VJbnQodGhpcy50b3VjaC5lbmQpID4gcGFyc2VJbnQoTWF0aC5mbG9vcih0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmR1cmF0aW9uKCkpKSk7XFxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZW5kSW52YWxpZCkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb2xsaWRlKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9IGZhbHNlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdhZGQtbmV3LXRvdWNoJywgdGhpcy50b3VjaCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuPHN0eWxlPlxcbiAgICAudnVlLWNvbG9yX19jb21wYWN0IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgIH1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNiODNkMGQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRhZy1kcm9wZG93biB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4uLy4uLy4uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ0Ryb3Bkb3duLnZ1ZT9mNDRjODYyY1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBY0E7SUFDQSxpQ0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJ0YWdEcm9wZG93bi52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biB0YWctZHJvcGRvd25cXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZSBidG4gdGFnXFxcIiA6Y2xhc3M9XFxcIidiZy0nK3RhZy5jb2xvclxcXCJcXG4gICAgICAgICAgIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIDppZD1cXFwiaWRcXFwiPnt7dGFnLm5hbWV9fVxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1jYXJldC1kb3duXFxcIj48L3NwYW4+XFxuICAgICAgICA8L2E+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIDphcmlhLWxhYmVsbGVkYnk9XFxcImlkXFxcIj5cXG4gICAgICAgICAgICA8bGkgdi1mb3I9XFxcIm9wdCBpbiB0YWcub3B0aW9uc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIHYtb246Y2xpY2sucHJldmVudD1cXFwiY2xpY2tPcHQob3B0KVxcXCI+e3tvcHQubmFtZX19PC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcbjxzdHlsZT5cXG4gICAgLnRhZy1kcm9wZG93biB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcXG4gICAgfVxcbjwvc3R5bGU+XFxuPHNjcmlwdD5cXG4gICAgaW1wb3J0IHV1aWQgZnJvbSAnYmFzZS9taXhpbnMvdXVpZCdcXG4gICAgZXhwb3J0IGRlZmF1bHR7XFxuICAgICAgICBwcm9wczoge1xcbiAgICAgICAgICAgIHRhZzoge30sXFxuICAgICAgICB9LFxcbiAgICAgICAgZGF0YSgpe1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGlkOiAnJ1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBtaXhpbnM6IFt1dWlkXSxcXG4gICAgICAgIG1vdW50ZWQoKXtcXG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5nZW5lcmF0ZVVVSUQoKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgY2xpY2tPcHQob3B0KXtcXG4gICAgICAgICAgICAgICAgdGhpcy50YWcub3B0aW9uID0gb3B0O1xcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvcHRpb24tY2xpY2tlZCcsIHRoaXMudGFnKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmYxMjRjOWYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWVcbi8vIG1vZHVsZSBpZCA9IDM0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJlZGl0VG91Y2hGb3JtLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnZ1ZS1jb2xvcl9fY29tcGFjdCB7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlP2Y3NTZmZmIwXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFxUUE7SUFDQSx1QkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJlZGl0VG91Y2hGb3JtLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8Zm9ybSBhY3Rpb249XFxcIlxcXCIgdi1vbjpzdWJtaXQucHJldmVudD1cXFwib25TdWJtaXRcXFwiIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWwgZm9ybS10b3VjaFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgOmNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3RvdWNodGV4dCcpIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ldy10aXRsZVxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudGl0bGUnKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy10aXRsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInRvdWNodGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XFxcInJlcXVpcmVkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cXFwiVGl0bGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlRpdGxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwidG91Y2gudGV4dFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVxcXCJlcnJvcnMuaGFzKCd0b3VjaHRleHQnKVxcXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaHRleHQnKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ldy10aXRsZVxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MuY29sb3InKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29tcGFjdC1waWNrZXIgdi1tb2RlbD1cXFwidG91Y2guY29sb3JcXFwiIEBjaGFuZ2UtY29sb3I9XFxcIm9uQ2hhbmdlQ29sb3JcXFwiPjwvY29tcGFjdC1waWNrZXI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgOmNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3RvdWNoc3RhcnQnKSB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuZXctc3RhcnRcXFwiIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnN0YXJ0Jyl9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy1zdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwidG91Y2hzdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XFxcInJlcXVpcmVkfG51bWVyaWNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtYXM9XFxcIlN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiU3RhcnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInRvdWNoLnN0YXJ0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibmV3LXN0YXJ0LWZtdFxcXCIgbmFtZT1cXFwibmV3LXN0YXJ0LWZtdFxcXCIgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJzdGFydEZtdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVxcXCJlcnJvcnMuaGFzKCd0b3VjaHN0YXJ0JylcXFwiPnt7IGVycm9ycy5maXJzdCgndG91Y2hzdGFydCcpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgOmNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3RvdWNoZW5kJykgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmV3LWVuZFxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MuZW5kJyl9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy1lbmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInRvdWNoZW5kXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cXFwicmVxdWlyZWR8bnVtZXJpY1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cXFwiRW5kXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW5kXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJ0b3VjaC5lbmRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXctZW5kLWZtdFxcXCIgbmFtZT1cXFwibmV3LWVuZC1mbXRcXFwiIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZW5kRm10XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XFxcImVycm9ycy5oYXMoJ3RvdWNoZW5kJylcXFwiPnt7IGVycm9ycy5maXJzdCgndG91Y2hlbmQnKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiB2LWlmPVxcXCJjb2xsaWRlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJhbGVydFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPsOXPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiaWNvbiBmYSBmYS1iYW5cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnRvdWNoZXNfY2FudF9vdmVybGFwJyl9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnRvdWNoX292ZXJsYXBfd2l0aCcpfX06XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XFxcImNvbGxpZGVUb3VjaCBpbiBjb2xsaWRlVG91Y2hlc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIHYtaWY9XFxcImNvbGxpZGVUb3VjaC5wcmV2aW91cy5pZCAhPSB0b3VjaC5pZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnRvdWNoX292ZXJsYXBfbXNnJyx7IHRpdGxlOlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpZGVUb3VjaC5wcmV2aW91cy50ZXh0LHN0YXJ0OnRvSEhNTVNTKGNvbGxpZGVUb3VjaC5wcmV2aW91cy5zdGFydCksZW5kOlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvSEhNTVNTKGNvbGxpZGVUb3VjaC5wcmV2aW91cy5lbmQpfSl9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIHYtaWY9XFxcImNvbGxpZGVUb3VjaC5jdXJyZW50LmlkICE9IHRvdWNoLmlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hfb3ZlcmxhcF9tc2cnLHsgdGl0bGU6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZVRvdWNoLmN1cnJlbnQudGV4dCxzdGFydDp0b0hITU1TUyhjb2xsaWRlVG91Y2guY3VycmVudC5zdGFydCksZW5kOlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvSEhNTVNTKGNvbGxpZGVUb3VjaC5jdXJyZW50LmVuZCl9KX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgdi1pZj1cXFwiZW5kSW52YWxpZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwiYWxlcnRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj7DlzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImljb24gZmEgZmEtYmFuXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy52YWxpZGF0aW9uX2Vycm9yJyl9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnZhbGlkYXRpb25fZW5kX2dyZWF0ZXInKX19XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIHRleHQtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPnt7JHQoJ3Njb3V0aW5ncy5zYXZlJyl9fTwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIHYtb246Y2xpY2sucHJldmVudD1cXFwiY2xvc2VcXFwiPnt7JHQoJ3Njb3V0aW5ncy5jYW5jZWwnKX19PC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9mb3JtPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcbjxzdHlsZT5cXG5cXG48L3N0eWxlPlxcbjxzY3JpcHQ+XFxuICAgIGltcG9ydCB7Z2V0U3RhdGV9IGZyb20gJ21vY2tzdGF0ZSc7XFxuICAgIGltcG9ydCB7Q29tcGFjdH0gZnJvbSAndnVlLWNvbG9yJztcXG4gICAgaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVGltZUNvbnZlcnRlcidcXG4gICAgaW1wb3J0IGNvbGxpZGVNaXhpbiBmcm9tICdiYXNlL21peGlucy9jb2xsaWRlJ1xcbiAgICBpbXBvcnQgc2NvdXRpbmdzTG9jYWxlcyBmcm9tICdiYXNlL2xhbmcvYWRtaW4vc2NvdXRpbmdzL3Njb3V0aW5ncy5qcyc7XFxuXFxuICAgIGV4cG9ydCBkZWZhdWx0e1xcbiAgICAgICAgbG9jYWxlczogc2NvdXRpbmdzTG9jYWxlcyxcXG4gICAgICAgIHByb3BzOiB7XFxuICAgICAgICAgICAgaW5pdFRvdWNoOiB7XFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGwsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiAxMDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcjogMjUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnOiA3NyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGI6IDUxLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYTogMVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZHVyYXRpb246IHt9LFxcbiAgICAgICAgfSxcXG4gICAgICAgIG1peGluczogW2NvbGxpZGVNaXhpbl0sXFxuICAgICAgICBjcmVhdGVkKCl7XFxuICAgICAgICAgICAgdGhpcy50b3VjaCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaW5pdFRvdWNoKTtcXG4gICAgICAgIH0sXFxuICAgICAgICB3YXRjaDoge1xcbiAgICAgICAgICAgICd0b3VjaC5zdGFydCc6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVSZXN1bHQgPSB0aGlzLmNoZWNrQ29sbGlkZSh0aGlzLnRvdWNoKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlID0gY29sbGlkZVJlc3VsdC5jb2xsaWRlO1xcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGVUb3VjaGVzID0gY29sbGlkZVJlc3VsdC5jb2xsaWRlVG91Y2hlcztcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICd0b3VjaC5lbmQnOiBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgICAgICAgIHZhciBjb2xsaWRlUmVzdWx0ID0gdGhpcy5jaGVja0NvbGxpZGUodGhpcy50b3VjaCk7XFxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZSA9IGNvbGxpZGVSZXN1bHQuY29sbGlkZTtcXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlVG91Y2hlcyA9IGNvbGxpZGVSZXN1bHQuY29sbGlkZVRvdWNoZXM7XFxuICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9IHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpID49IHBhcnNlSW50KHRoaXMudG91Y2guZW5kKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgZGF0YSgpe1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGNvbGxpZGU6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICBjb2xsaWRlVG91Y2hlczogW10sXFxuICAgICAgICAgICAgICAgIGVuZEludmFsaWQ6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICB0b3VjaDoge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbCxcXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICByZ2JhOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI6IDI1LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnOiA3NyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYjogNTEsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGE6IDFcXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICAgICAgc3RhcnRGbXQoKXtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy50b3VjaC5zdGFydClcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGVuZEZtdCgpe1xcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnRvdWNoLmVuZClcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHZhbGlkYXRpb25FbmQoKXtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpICsgMTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgY29tcG9uZW50czoge1xcbiAgICAgICAgICAgICdjb21wYWN0LXBpY2tlcic6IENvbXBhY3QsXFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGNsb3NlKCl7XFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NhbmNlbC1uZXctdG91Y2gnLCB0aGlzLnRvdWNoKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHRvSEhNTVNTKHNlY3MpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1Moc2VjcylcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG9uQ2hhbmdlQ29sb3IodmFsKXtcXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaC5jb2xvciA9IHZhbFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgb25TdWJtaXQoKXtcXG4gICAgICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCkudGhlbigoKT0+IHtcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvdWNoLnN0YXJ0ID49IHRoaXMudG91Y2guZW5kKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRJbnZhbGlkID0gdHJ1ZTtcXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRJbnZhbGlkID0gZmFsc2U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbGxpZGUpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnYWRkLW5ldy10b3VjaCcsIHRoaXMudG91Y2gpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goYmFnID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuZXJyb3JUb2FzdCh0aGlzLiR0KCdhZG1pbi52YWxpZGF0aW9uX2Vycm9yJykpO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cXG48c3R5bGU+XFxuICAgIC52dWUtY29sb3JfX2NvbXBhY3Qge1xcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gICAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcInRpbWVsaW5lLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1lNTZjODA4NCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvdGltZWxpbmUudnVlXG4vLyBtb2R1bGUgaWQgPSAzNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTI5NDU3NTkwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wbGF5ZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wbGF5ZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjk0NTc1OTAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGxheWVyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcGxheWVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yOTQ1NzU5MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTI5NDU3NTkwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9nbG9iYWwvdmlkZW8vcGxheWVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTU3OTJmNTZjIXNhc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbnNwZWN0b3IudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbnNwZWN0b3IudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNTc5MmY1NmMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW5zcGVjdG9yLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy9pbnNwZWN0b3IudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gaW5zcGVjdG9yLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01NzkyZjU2Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU3OTJmNTZjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvaW5zcGVjdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1lNTZjODA4NCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGltZWxpbmUudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90aW1lbGluZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1lNTZjODA4NCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90aW1lbGluZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvdGltZWxpbmUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdGltZWxpbmUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWU1NmM4MDg0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZTU2YzgwODRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy90aW1lbGluZS52dWVcbi8vIG1vZHVsZSBpZCA9IDM2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtYTc0OWQ2MDIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2VkaXRUb3VjaEZvcm0udnVlXCIpXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0xIS4vZWRpdFRvdWNoRm9ybS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2VkaXRUb3VjaEZvcm0udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYTc0OWQ2MDIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZWRpdFRvdWNoRm9ybS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGVkaXRUb3VjaEZvcm0udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWE3NDlkNjAyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYTc0OWQ2MDJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAzNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9uZXdUb3VjaEZvcm0udnVlXCIpXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi01Y2I4M2QwZCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0xIS4vbmV3VG91Y2hGb3JtLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbmV3VG91Y2hGb3JtLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL25ld1RvdWNoRm9ybS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbmV3VG91Y2hGb3JtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01Y2I4M2QwZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVjYjgzZDBkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAzNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTU1MzkwMzk3IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90b3VjaGVzTGlzdC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RvdWNoZXNMaXN0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTU1MzkwMzk3IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RvdWNoZXNMaXN0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRvdWNoZXNMaXN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01NTM5MDM5N1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU1MzkwMzk3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9saXN0cy90b3VjaGVzTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDM2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNDUwNGRhZWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RhZy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi00NTA0ZGFlZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90YWcudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWcudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdGFnLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00NTA0ZGFlZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ1MDRkYWVlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZy52dWVcbi8vIG1vZHVsZSBpZCA9IDM2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNmYxMjRjOWYhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZ0Ryb3Bkb3duLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGFnRHJvcGRvd24udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNmYxMjRjOWYhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdGFnRHJvcGRvd24udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0YWdEcm9wZG93bi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmYxMjRjOWZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ZjEyNGM5ZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWVcbi8vIG1vZHVsZSBpZCA9IDM2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi01ZjQyMjNmNSFzYXNzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFncy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RhZ3MudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNWY0MjIzZjUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdGFncy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ3MudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdGFncy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWY0MjIzZjVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01ZjQyMjNmNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdhZG1pbi1oZWFkZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogX3ZtLnRpdGxlLFxuICAgICAgXCJicmVhZGNydW1ic1wiOiBfdm0uYnJlYWRjcnVtYnNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc2VjdGlvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50IG92ZXJsYXktd3JhcHBlclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvdyBpcy1mbGV4XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02IHBsYXllci1jb250YWluZXJcIlxuICB9LCBbKF92bS5pbml0aWFsaXplZCkgPyBfYygnZG5jLXBsYXllcicsIHtcbiAgICByZWY6IFwicGxheWVyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic291cmNlXCI6IF92bS5zb3VyY2VcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTYgdG91Y2hlcy1jb250YWluZXJcIlxuICB9LCBbX2MoJ3RvdWNoZXMtbGlzdCcpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0ucGxheWVyUmVhZHkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJwbGF5ZXJSZWFkeVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWFpbGJveC1jb250cm9scyBjb250cm9sLW1lbnVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4tZ3JvdXBcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0uc3RhcnRlZFxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnN0YXJ0VG91Y2hcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYVwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnZmEtcGxheSc6ICFfdm0uc3RhcnRlZCwgJ2ZhLWNpcmNsZSB0ZXh0LWRhbmdlcic6IF92bS5zdGFydGVkXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5zdGFydGVkID8gX3ZtLiR0KCdzY291dGluZ3MucmVjb3JkaW5nJykgOiBfdm0uJHQoJ3Njb3V0aW5ncy5zdGFydF90b3VjaCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiAhX3ZtLnN0YXJ0ZWRcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5lbmRUb3VjaFxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXN0b3BcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLmVuZF90b3VjaCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLXJpZ2h0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuLWdyb3VwXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnRvb2dsZVRpbWVsaW5lXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2FsZW5kYXJcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy50b29nbGVfdGltZWxpbmUnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udG9vZ2xlSW5zcGVjdG9yXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZXllXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MudG9vZ2xlX2luc3BlY3RvcicpKSArIFwiXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5lZGl0KSA/IF9jKCdlZGl0LXRvdWNoLWZvcm0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaW5pdC10b3VjaFwiOiBfdm0udG91Y2gsXG4gICAgICBcImR1cmF0aW9uXCI6IF92bS5kdXJhdGlvblxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2FuY2VsLW5ldy10b3VjaFwiOiBfdm0uY2FuY2VsRWRpdFRvdWNoLFxuICAgICAgXCJhZGQtbmV3LXRvdWNoXCI6IF92bS5zYXZlRWRpdFRvdWNoXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFsoX3ZtLnBsYXllclJlYWR5KSA/IF9jKCdpbnNwZWN0b3InLCB7XG4gICAgcmVmOiBcImluc3BlY3RvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYXlpbmdcIjogX3ZtLnBsYXlpbmdcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFsoX3ZtLnBsYXllclJlYWR5KSA/IF9jKCd0aW1lbGluZScpIDogX3ZtLl9lKCldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFsoX3ZtLnBsYXllclJlYWR5KSA/IF9jKCdnbG9iYWwtdGltZWxpbmUnKSA6IF92bS5fZSgpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0ucGxheWVyUmVhZHkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJwbGF5ZXJSZWFkeVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTZcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnNhdmVcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLiR0KCdmb3Jtcy5zYXZlJykpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTZcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2FuY2VsXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2Zvcm1zLmJhY2snKSkpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoIV92bS5wbGF5ZXJSZWFkeSkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm92ZXJsYXlcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcmVmcmVzaCBmYS1zcGluXCJcbiAgfSldKSA6IF92bS5fZSgpXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yNDc3OWI1OFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMjQ3NzliNTghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9lZGl0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCd2aWRlbycsIHtcbiAgICByZWY6IFwicGxheWVyXCIsXG4gICAgc3RhdGljQ2xhc3M6IFwidmlkZW8tanMgdmpzLWRlZmF1bHQtc2tpblwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbnRyb2xzXCI6IFwiXCIsXG4gICAgICBcInByZWxvYWRcIjogXCJhdXRvXCIsXG4gICAgICBcInBvc3RlclwiOiBfdm0ucG9zdGVyLFxuICAgICAgXCJkYXRhLXNldHVwXCI6IF92bS5zdHJTb3VyY2VcbiAgICB9XG4gIH0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMjk0NTc1OTBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTI5NDU3NTkwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZ2xvYmFsL3ZpZGVvL3BsYXllci52dWVcbi8vIG1vZHVsZSBpZCA9IDM3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gKF92bS50YWcuZHJvcGRvd24pID8gX2MoJ3RhZy1kcm9wZG93bicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWdcIjogX3ZtLnRhZ1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwib3B0aW9uLWNsaWNrZWRcIjogX3ZtLmRyb3Bkb3duT3B0aW9uQ2xpY2tlZFxuICAgIH1cbiAgfSkgOiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhZy1kcm9wZG93blwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCIgYnRuIHRhZ1wiLFxuICAgIGNsYXNzOiAnYmctJyArIF92bS50YWcuY29sb3IsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udGFnQ2xpY2tlZCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGFnLm5hbWUpKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDUwNGRhZWVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTQ1MDRkYWVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWcudnVlXG4vLyBtb2R1bGUgaWQgPSAzODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94IGJveC1zb2xpZCBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLW1hcC1tYXJrZXJcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy50b3VjaGVzJykpICsgXCJcXG4gICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIlxuICB9LCBbKF92bS50b3VjaGVzLmxlbmd0aCkgPyBfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9kby1saXN0IHVpLXNvcnRhYmxlXCJcbiAgfSwgX3ZtLl9sKChfdm0udG91Y2hlcyksIGZ1bmN0aW9uKHRvdWNoKSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0XCIsXG4gICAgICBzdHlsZTogKCdiYWNrZ3JvdW5kOicgKyB0b3VjaC5jb2xvci5oZXggKyAnOyBoZWlnaHQ6MjBweDsgd2lkdGg6MjBweDttYXJnaW4tdG9wOiAxcHg7JylcbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0XCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyh0b3VjaC50ZXh0KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NtYWxsJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiXG4gICAgfSwgW19jKCdpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2xvY2stb1wiXG4gICAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3Muc3RhcnRfYXQnLCB7XG4gICAgICBzdGFydDogX3ZtLnRvSEhNTVNTKHRvdWNoLnN0YXJ0KVxuICAgIH0pKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc21hbGwnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJsYWJlbCBsYWJlbC1kYW5nZXJcIlxuICAgIH0sIFtfYygnaScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNsb2NrLW9cIlxuICAgIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLmVuZF9hdCcsIHtcbiAgICAgIGVuZDogX3ZtLnRvSEhNTVNTKHRvdWNoLmVuZClcbiAgICB9KSkgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRvb2xzXCJcbiAgICB9LCBbX2MoJ2knLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1lZGl0XCIsXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5lZGl0VG91Y2godG91Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2knLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS10cmFzaC1vXCIsXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5yZW1vdmVUb3VjaCh0b3VjaClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXSldKVxuICB9KSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0udG91Y2hlcy5sZW5ndGgpID8gX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3Mubm9fdG91Y2hlcycpKSldKSA6IF92bS5fZSgpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01NTM5MDM5N1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNTUzOTAzOTchLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9saXN0cy90b3VjaGVzTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDM5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3ggYm94LXNvbGlkIGNvbGxhcHNlZC1ib3hcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImluc3BlY3RvckJveFwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHVsbC1yaWdodCBib3gtdG9vbHNcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJpZFwiOiBcImluc3BlY3RvclRvb2dsZXJcIixcbiAgICAgIFwiZGF0YS13aWRnZXRcIjogXCJjb2xsYXBzZVwiLFxuICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRvb2x0aXBcIixcbiAgICAgIFwidGl0bGVcIjogXCJcIixcbiAgICAgIFwiZGF0YS1vcmlnaW5hbC10aXRsZVwiOiBcIkNvbGxhcHNlXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS50b29nbGVPcGVuXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcGx1c1wiXG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnRcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2FsZW5kYXJcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MuaW5zcGVjdG9yJykpICsgXCJcXG4gICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnRvdWNoKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0IGluc3BlY3Rvci1pbmZvXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0XCIsXG4gICAgc3R5bGU6ICgnYmFja2dyb3VuZDonICsgX3ZtLmJhY2tncm91bmQgKyAnOyBoZWlnaHQ6MjBweDsgd2lkdGg6MjBweDttYXJnaW4tdG9wOiAxcHg7IG1hcmdpbi1yaWdodDo1cHgnKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnQgaW5zcGVjdG9yLWluZm8tLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5zdGFydCkpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsIGxhYmVsLWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lbmQpKV0pXSkgOiBfdm0uX2UoKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCJcbiAgfSwgWyhfdm0udG91Y2gpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYWlsYm94LWNvbnRyb2xzIGNvbnRyb2wtaW5zcGVjdG9yLW1lbnVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4tZ3JvdXBcIlxuICB9LCBbKF92bS5yZWNvcmRpbmdUb3VjaCkgPyBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNyZWF0ZUFjdGlvblxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy5lbmRfYWN0aW9uJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5wbGF5XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmFcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2ZhLXBsYXknOiAhX3ZtLnBsYXlpbmcsICdmYS1wYXVzZSB0ZXh0LWRhbmdlcic6IF92bS5wbGF5aW5nXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5wbGF5aW5nID8gX3ZtLiR0KCdzY291dGluZ3MucGF1c2UnKSA6IF92bS4kdCgnc2NvdXRpbmdzLnBsYXknKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuLWdyb3VwXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5iYWNrd2FyZCgxMClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1mYXN0LWJhY2t3YXJkXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMCBzXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5iYWNrd2FyZCg1KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWJhY2t3YXJkXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA1IHNcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmZvcndhcmQoNSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1mb3J3YXJkXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA1IHNcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmZvcndhcmQoMTApXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZmFzdC1mb3J3YXJkXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMCBzXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4tZ3JvdXBcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnBsYXliYWNrUmF0ZSgwLjI1KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjI1IHhcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnBsYXliYWNrUmF0ZSgwLjUpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNSB4XFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5wbGF5YmFja1JhdGUoMSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMSB4XFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5wbGF5YmFja1JhdGUoMS41KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjUgeFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucGxheWJhY2tSYXRlKDIpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIgeFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhdGhsZXRlLW1lbnVcIlxuICB9LCBbKF92bS50b3VjaCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IG5vLXBhZGRpbmctcmlnaHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhdGhsZXRlLW1lbnUtdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MubGVmdF9hY3Rpb25zJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgbm8tcGFkZGluZy1sZWZ0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXRobGV0ZS1tZW51LXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnJpZ2h0X2FjdGlvbnMnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0udG91Y2gpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiBuby1wYWRkaW5nLXJpZ2h0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXRobGV0ZS1tZW51LWxlZnRcIlxuICB9LCBbX2MoJ3RhZ3MnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFnc1wiOiBfdm0udGFnc0xlZnQsXG4gICAgICBcInNlbGVjdGVkXCI6IF92bS5hY3Rpb24ubGVmdFRhZ3MsXG4gICAgICBcInR5cGVcIjogXCJsZWZ0XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInRhZy1kZWxldGVkXCI6IF92bS50YWdEZWxldGVkTGVmdCxcbiAgICAgIFwidGFnLXNlbGVjdGVkXCI6IF92bS50YWdTZWxlY3RlZExlZnRcbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiBuby1wYWRkaW5nLWxlZnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhdGhsZXRlLW1lbnUtbGVmdFwiXG4gIH0sIFtfYygndGFncycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWdzXCI6IF92bS50YWdzUmlnaHQsXG4gICAgICBcInNlbGVjdGVkXCI6IF92bS5hY3Rpb24ucmlnaHRUYWdzLFxuICAgICAgXCJ0eXBlXCI6IFwicmlnaHRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwidGFnLWRlbGV0ZWRcIjogX3ZtLnRhZ0RlbGV0ZWRSaWdodCxcbiAgICAgIFwidGFnLXNlbGVjdGVkXCI6IF92bS50YWdTZWxlY3RlZFJpZ2h0XG4gICAgfVxuICB9KV0sIDEpXSldKSA6IF92bS5fZSgpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJpbnNwZWN0b3JcIlxuICAgIH1cbiAgfSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTU3OTJmNTZjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01NzkyZjU2YyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy9pbnNwZWN0b3IudnVlXG4vLyBtb2R1bGUgaWQgPSAzOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbKF92bS5vcGVuKSA/IF9jKCdmb3JtJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0taG9yaXpvbnRhbCBmb3JtLXRvdWNoXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYWN0aW9uXCI6IFwiXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInN1Ym1pdFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5vblN1Ym1pdCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCd0b3VjaC50ZXh0JylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm5ldy10aXRsZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgVGl0bGVcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMFwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3VjaC50ZXh0KSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2gudGV4dFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3VjaC50ZXh0KSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2gudGV4dFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJuZXctdGl0bGVcIixcbiAgICAgIFwibmFtZVwiOiBcIm5ldy10aXRsZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJkYXRhLXJ1bGVzXCI6IFwicmVxdWlyZWRcIixcbiAgICAgIFwiZGF0YS1hc1wiOiBcIlRpdGxlXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiVGl0bGVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS50b3VjaC50ZXh0KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRvdWNoLnRleHQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ3RvdWNoLnRleHQnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ3RvdWNoLnRleHQnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCd0b3VjaC50ZXh0JykpKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm5ldy10aXRsZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3JcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMFwiXG4gIH0sIFtfYygnY29tcGFjdC1waWNrZXInLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udG91Y2guY29sb3IpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3VjaC5jb2xvclwiXG4gICAgfV0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS50b3VjaC5jb2xvcilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZS1jb2xvclwiOiBfdm0ub25DaGFuZ2VDb2xvcixcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50b3VjaC5jb2xvciA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCd0b3VjaC5zdGFydCcpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJuZXctc3RhcnRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IChzZWMpXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNlwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3VjaC5zdGFydCksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLnN0YXJ0XCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLnN0YXJ0KSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2guc3RhcnRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmV3LXN0YXJ0XCIsXG4gICAgICBcIm5hbWVcIjogXCJuZXctc3RhcnRcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiZGF0YS1ydWxlc1wiOiBcInJlcXVpcmVkfG51bWVyaWNcIixcbiAgICAgIFwiZGF0YS1hc1wiOiBcIlN0YXJ0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiU3RhcnRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS50b3VjaC5zdGFydClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS50b3VjaC5zdGFydCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTZcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnN0YXJ0Rm10KSxcbiAgICAgIGV4cHJlc3Npb246IFwic3RhcnRGbXRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmV3LXN0YXJ0LWZtdFwiLFxuICAgICAgXCJuYW1lXCI6IFwibmV3LXN0YXJ0LWZtdFwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlN0YXJ0XCIsXG4gICAgICBcImRpc2FibGVkXCI6IFwiXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uc3RhcnRGbXQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uc3RhcnRGbXQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCd0b3VjaC5zdGFydCcpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygndG91Y2guc3RhcnQnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCd0b3VjaC5zdGFydCcpKSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCd0b3VjaC5lbmQnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmV3LWVuZFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgRW5kKHNlYylcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLmVuZCksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLmVuZFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3VjaC5lbmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3VjaC5lbmRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmV3LWVuZFwiLFxuICAgICAgXCJuYW1lXCI6IFwibmV3LWVuZFwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJkYXRhLXJ1bGVzXCI6IFwicmVxdWlyZWR8bnVtZXJpY1wiLFxuICAgICAgXCJkYXRhLWFzXCI6IFwiRW5kXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiRW5kXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0udG91Y2guZW5kKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRvdWNoLmVuZCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTZcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVuZEZtdCksXG4gICAgICBleHByZXNzaW9uOiBcImVuZEZtdFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJuZXctZW5kLWZtdFwiLFxuICAgICAgXCJuYW1lXCI6IFwibmV3LWVuZC1mbXRcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJTdGFydFwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBcIlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmVuZEZtdClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5lbmRGbXQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCd0b3VjaC5lbmQnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ3RvdWNoLmVuZCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ3RvdWNoLmVuZCcpKSldKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmNvbGxpZGUpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1kYW5nZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiZGF0YS1kaXNtaXNzXCI6IFwiYWxlcnRcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCLDl1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgVGhlIHRvdWNoIHRoYXQgeW91IHdhbnQgdG8gYWRkIG92ZXJsYXAgd2l0aDpcXG4gICAgICAgICAgICAgICAgICAgIFwiKSwgX2MoJ3VsJywgX3ZtLl9sKChfdm0uY29sbGlkZVRvdWNoZXMpLCBmdW5jdGlvbih0b3VjaCkge1xuICAgIHJldHVybiBfYygnbGknLCBbKHRvdWNoLnByZXZpb3VzLmhhc093blByb3BlcnR5KCdpZCcpKSA/IF9jKCdzdHJvbmcnLCBbX3ZtLl92KF92bS5fcyh0b3VjaC5wcmV2aW91cy50ZXh0KSArIFwiOiB0aGF0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydHNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uIFwiICsgX3ZtLl9zKF92bS50b0hITU1TUyh0b3VjaC5wcmV2aW91cy5zdGFydCkpICsgXCIgYW5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHMgb25cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50b0hITU1TUyh0b3VjaC5wcmV2aW91cy5lbmQpKSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAodG91Y2guY3VycmVudC5oYXNPd25Qcm9wZXJ0eSgnaWQnKSkgPyBfYygnc3Ryb25nJywgW192bS5fdihfdm0uX3ModG91Y2guY3VycmVudC50ZXh0KSArIFwiOiB0aGF0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydHMgb25cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50b0hITU1TUyh0b3VjaC5jdXJyZW50LnN0YXJ0KSkgKyBcIiBhblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcyBvblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRvSEhNTVNTKHRvdWNoLmN1cnJlbnQuZW5kKSkpXSkgOiBfdm0uX2UoKV0pXG4gIH0pKV0pXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmVuZEludmFsaWQpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX3ZtLl9tKDEpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgdGV4dC1yaWdodFwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkFkZCBUb3VjaFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0uY2xvc2UoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkNhbmNlbFwiKV0pXSldKV0pIDogX3ZtLl9lKCldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdoNCcsIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpY29uIGZhIGZhLWJhblwiXG4gIH0pLCBfdm0uX3YoXCIgVG91Y2hlcyBjYW50IG92ZXJsYXAhXCIpXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJhbGVydFwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIsOXXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoNCcsIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpY29uIGZhIGZhLWJhblwiXG4gIH0pLCBfdm0uX3YoXCIgVmFsaWRhdGlvbiBFcnJvciFcIildKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBUaGUgZW5kIG9mIHRoZSB0b3VjaCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB0aGUgc3RhcnRcXG4gICAgICAgICAgICAgICAgXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVjYjgzZDBkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01Y2I4M2QwZCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDM5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhZ3NcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4tZ3JvdXBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJyb2xlXCI6IFwiZ3JvdXBcIixcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIi4uLlwiXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS50YWdzKSwgZnVuY3Rpb24odGFnKSB7XG4gICAgcmV0dXJuIF9jKCd0YWcnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInRhZ1wiOiB0YWdcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcInRhZy1jbGlja2VkXCI6IF92bS50YWdTZWxlY3RlZFxuICAgICAgfVxuICAgIH0pXG4gIH0pKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhZ3Mtc2VsZWN0ZWRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJkcmFndWxhXCIsXG4gICAgICByYXdOYW1lOiBcInYtZHJhZ3VsYVwiLFxuICAgICAgdmFsdWU6IChfdm0uc2VsZWN0ZWQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGFncy1saXN0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYmFnXCI6IFwiZmlyc3QtYmFnXCJcbiAgICB9XG4gIH0sIF92bS5fbCgoX3ZtLnNlbGVjdGVkKSwgZnVuY3Rpb24odGFnKSB7XG4gICAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgICBrZXk6IHRhZy5pZFxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibGFiZWxcIixcbiAgICAgIGNsYXNzOiAnYmctJyArIHRhZy5jb2xvclxuICAgIH0sIFtfYygnc3BhbicsIFtfdm0uX3YoX3ZtLl9zKHRhZy5uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgKHRhZy5vcHRpb24pID8gX2MoJ3NwYW4nLCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKHRhZy5vcHRpb24ubmFtZSkpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uZGVsZXRlVGFnKHRhZylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnc3BhbicsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiw5dcIildKV0pXSldKVxuICB9KSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVmNDIyM2Y1XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01ZjQyMjNmNSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFncy52dWVcbi8vIG1vZHVsZSBpZCA9IDQwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93biB0YWctZHJvcGRvd25cIlxuICB9LCBbX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tdG9nZ2xlIGJ0biB0YWdcIixcbiAgICBjbGFzczogJ2JnLScgKyBfdm0udGFnLmNvbG9yLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGEtdG9nZ2xlXCI6IFwiZHJvcGRvd25cIixcbiAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiBcImZhbHNlXCIsXG4gICAgICBcImlkXCI6IF92bS5pZFxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRhZy5uYW1lKSArIFwiXFxuICAgICAgICBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNhcmV0LWRvd25cIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tbWVudVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBfdm0uaWRcbiAgICB9XG4gIH0sIF92bS5fbCgoX3ZtLnRhZy5vcHRpb25zKSwgZnVuY3Rpb24ob3B0KSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIFtfYygnYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgX3ZtLmNsaWNrT3B0KG9wdClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKG9wdC5uYW1lKSldKV0pXG4gIH0pKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZmMTI0YzlmXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02ZjEyNGM5ZiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnRHJvcGRvd24udnVlXG4vLyBtb2R1bGUgaWQgPSA0MDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2Zvcm0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ob3Jpem9udGFsIGZvcm0tdG91Y2hcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJhY3Rpb25cIjogXCJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLm9uU3VibWl0KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ3RvdWNodGV4dCcpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJuZXctdGl0bGVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnRpdGxlJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMFwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLnRleHQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3VjaC50ZXh0XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm5ldy10aXRsZVwiLFxuICAgICAgXCJuYW1lXCI6IFwidG91Y2h0ZXh0XCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiVGl0bGVcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJUaXRsZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnRvdWNoLnRleHQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udG91Y2gudGV4dCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygndG91Y2h0ZXh0JykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCd0b3VjaHRleHQnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCd0b3VjaHRleHQnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm5ldy10aXRsZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MuY29sb3InKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEwXCJcbiAgfSwgW19jKCdjb21wYWN0LXBpY2tlcicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3VjaC5jb2xvciksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLmNvbG9yXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRvdWNoLmNvbG9yKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlLWNvbG9yXCI6IF92bS5vbkNoYW5nZUNvbG9yLFxuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRvdWNoLmNvbG9yID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ3RvdWNoc3RhcnQnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmV3LXN0YXJ0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy5zdGFydCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNlwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLnN0YXJ0KSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2guc3RhcnRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmV3LXN0YXJ0XCIsXG4gICAgICBcIm5hbWVcIjogXCJ0b3VjaHN0YXJ0XCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZHxudW1lcmljXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogXCJTdGFydFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlN0YXJ0XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0udG91Y2guc3RhcnQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udG91Y2guc3RhcnQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5zdGFydEZtdCksXG4gICAgICBleHByZXNzaW9uOiBcInN0YXJ0Rm10XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm5ldy1zdGFydC1mbXRcIixcbiAgICAgIFwibmFtZVwiOiBcIm5ldy1zdGFydC1mbXRcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJTdGFydFwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBcIlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnN0YXJ0Rm10KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnN0YXJ0Rm10ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygndG91Y2hzdGFydCcpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygndG91Y2hzdGFydCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ3RvdWNoc3RhcnQnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ3RvdWNoZW5kJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm5ldy1lbmRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLmVuZCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNlwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLmVuZCksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLmVuZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJuZXctZW5kXCIsXG4gICAgICBcIm5hbWVcIjogXCJ0b3VjaGVuZFwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWR8bnVtZXJpY1wiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiRW5kXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiRW5kXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0udG91Y2guZW5kKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRvdWNoLmVuZCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTZcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVuZEZtdCksXG4gICAgICBleHByZXNzaW9uOiBcImVuZEZtdFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJuZXctZW5kLWZtdFwiLFxuICAgICAgXCJuYW1lXCI6IFwibmV3LWVuZC1mbXRcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJTdGFydFwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBcIlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmVuZEZtdClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5lbmRGbXQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCd0b3VjaGVuZCcpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygndG91Y2hlbmQnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCd0b3VjaGVuZCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5jb2xsaWRlKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRhdGEtZGlzbWlzc1wiOiBcImFsZXJ0XCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiw5dcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g0JywgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImljb24gZmEgZmEtYmFuXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnRvdWNoZXNfY2FudF9vdmVybGFwJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnRvdWNoX292ZXJsYXBfd2l0aCcpKSArIFwiOlxcbiAgICAgICAgICAgICAgICAgICAgXCIpLCBfYygndWwnLCBfdm0uX2woKF92bS5jb2xsaWRlVG91Y2hlcyksIGZ1bmN0aW9uKGNvbGxpZGVUb3VjaCkge1xuICAgIHJldHVybiBfYygnbGknLCBbKGNvbGxpZGVUb3VjaC5wcmV2aW91cy5pZCAhPSBfdm0udG91Y2guaWQpID8gX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnRvdWNoX292ZXJsYXBfbXNnJywge1xuICAgICAgdGl0bGU6IGNvbGxpZGVUb3VjaC5wcmV2aW91cy50ZXh0LFxuICAgICAgc3RhcnQ6IF92bS50b0hITU1TUyhjb2xsaWRlVG91Y2gucHJldmlvdXMuc3RhcnQpLFxuICAgICAgZW5kOiBfdm0udG9ISE1NU1MoY29sbGlkZVRvdWNoLnByZXZpb3VzLmVuZClcbiAgICB9KSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoY29sbGlkZVRvdWNoLmN1cnJlbnQuaWQgIT0gX3ZtLnRvdWNoLmlkKSA/IF9jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy50b3VjaF9vdmVybGFwX21zZycsIHtcbiAgICAgIHRpdGxlOiBjb2xsaWRlVG91Y2guY3VycmVudC50ZXh0LFxuICAgICAgc3RhcnQ6IF92bS50b0hITU1TUyhjb2xsaWRlVG91Y2guY3VycmVudC5zdGFydCksXG4gICAgICBlbmQ6IF92bS50b0hITU1TUyhjb2xsaWRlVG91Y2guY3VycmVudC5lbmQpXG4gICAgfSkpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSkgOiBfdm0uX2UoKV0pXG4gIH0pKV0pXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmVuZEludmFsaWQpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1kYW5nZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiZGF0YS1kaXNtaXNzXCI6IFwiYWxlcnRcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCLDl1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDQnLCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaWNvbiBmYSBmYS1iYW5cIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MudmFsaWRhdGlvbl9lcnJvcicpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy52YWxpZGF0aW9uX2VuZF9ncmVhdGVyJykpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSldKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIHRleHQtcmlnaHRcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnNhdmUnKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXJcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5jbG9zZSgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy5jYW5jZWwnKSkpXSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1hNzQ5ZDYwMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYTc0OWQ2MDIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveCBib3gtc29saWRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInRpbWVsaW5lQm94XCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLXJpZ2h0IGJveC10b29sc1wiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidG9vbHRpcFwiLFxuICAgICAgXCJ0aXRsZVwiOiBcIlpvb20gSW5cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0uem9vbUluKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1zZWFyY2gtcGx1c1wiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRvb2x0aXBcIixcbiAgICAgIFwidGl0bGVcIjogXCJab29tIE91dFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS56b29tT3V0KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1zZWFyY2gtbWludXNcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImlkXCI6IFwidGltZWxpbmVUb29nbGVyXCIsXG4gICAgICBcImRhdGEtd2lkZ2V0XCI6IFwiY29sbGFwc2VcIixcbiAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICBcInRpdGxlXCI6IFwiXCIsXG4gICAgICBcImRhdGEtb3JpZ2luYWwtdGl0bGVcIjogXCJDb2xsYXBzZVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udG9vZ2xlT3BlblxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLW1pbnVzXCJcbiAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jYWxlbmRhclwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnRpbWVsaW5lJykpICsgXCJcXG4gICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidGltZWxpbmVcIlxuICAgIH1cbiAgfSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWU1NmM4MDg0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1lNTZjODA4NCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy90aW1lbGluZS52dWVcbi8vIG1vZHVsZSBpZCA9IDQxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNTc5MmY1NmMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luc3BlY3Rvci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNjdkYzczZjlcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNTc5MmY1NmMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luc3BlY3Rvci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNTc5MmY1NmMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luc3BlY3Rvci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNTc5MmY1NmMhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy9pbnNwZWN0b3IudnVlXG4vLyBtb2R1bGUgaWQgPSA0MTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVmNDIyM2Y1IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YWdzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI3NDcxNzIxYVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01ZjQyMjNmNSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFncy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWY0MjIzZjUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZ3MudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVmNDIyM2Y1IS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ3MudnVlXG4vLyBtb2R1bGUgaWQgPSA0MTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yOTQ1NzU5MCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGxheWVyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIwNmEyZDU0MlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjk0NTc1OTAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BsYXllci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTI5NDU3NTkwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wbGF5ZXIudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yOTQ1NzU5MCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9nbG9iYWwvdmlkZW8vcGxheWVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDUwNGRhZWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNjVjYjcxZjJcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ1MDRkYWVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YWcudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00NTA0ZGFlZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFnLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDUwNGRhZWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWcudnVlXG4vLyBtb2R1bGUgaWQgPSA0Mjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01NTM5MDM5NyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdG91Y2hlc0xpc3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjE2YWFmZTljXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01NTM5MDM5NyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdG91Y2hlc0xpc3QudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01NTM5MDM5NyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdG91Y2hlc0xpc3QudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01NTM5MDM5NyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9saXN0cy90b3VjaGVzTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDQzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9uZXdUb3VjaEZvcm0udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjM4YjE5YThjXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2I4M2QwZCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbmV3VG91Y2hGb3JtLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNiODNkMGQhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL25ld1RvdWNoRm9ybS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDQzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9uZXdUb3VjaEZvcm0udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjQ1NGE5MDBkXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2I4M2QwZCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vbmV3VG91Y2hGb3JtLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNiODNkMGQhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL25ld1RvdWNoRm9ybS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDQzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZmMTI0YzlmIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YWdEcm9wZG93bi52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMzAzYzFjZDRcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZmMTI0YzlmIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YWdEcm9wZG93bi52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZmMTI0YzlmIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YWdEcm9wZG93bi52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZmMTI0YzlmIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnRHJvcGRvd24udnVlXG4vLyBtb2R1bGUgaWQgPSA0Mzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZWRpdFRvdWNoRm9ybS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiYzdmOWRlMzRcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWE3NDlkNjAyIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9lZGl0VG91Y2hGb3JtLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTc0OWQ2MDIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2VkaXRUb3VjaEZvcm0udnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTc0OWQ2MDIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL2VkaXRUb3VjaEZvcm0udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjIyODhjYjg1XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vZWRpdFRvdWNoRm9ybS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWE3NDlkNjAyIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9lZGl0VG91Y2hGb3JtLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTc0OWQ2MDIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvZWRpdFRvdWNoRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDQ0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWU1NmM4MDg0IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90aW1lbGluZS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMzUxOTAxNTRcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWU1NmM4MDg0IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90aW1lbGluZS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWU1NmM4MDg0IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90aW1lbGluZS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWU1NmM4MDg0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy90aW1lbGluZS52dWVcbi8vIG1vZHVsZSBpZCA9IDQ0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2Rpc3BhdGNofSBmcm9tICdtb2Nrc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgZ2xvYmFsVGltZWxpbmVBY3Rpb25zID0ge1xuICAgIHNldEdsb2JhbFRpbWVsaW5lKHN0YXRlLCBpbnN0YW5jZSl7XG4gICAgICAgIHN0YXRlLmdsb2JhbFRpbWVsaW5lLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuICAgIHNldEdsb2JhbFRpbWVsaW5lV2lkdGgoc3RhdGUsIHdpZHRoKXtcbiAgICAgICAgc3RhdGUuZ2xvYmFsVGltZWxpbmUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH0sXG4gICAgc2V0R2xvYmFsVGltZWxpbmVIZWlnaHQoc3RhdGUsIGhlaWdodCl7XG4gICAgICAgIHN0YXRlLmdsb2JhbFRpbWVsaW5lLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEdsb2JhbFRpbWVsaW5lRW5kWScsIHN0YXRlLnRvdWNoTWFuYWdlci5nbG9iYWxUaW1lbGluZS5zdGFydFkgKyBoZWlnaHQpO1xuXG4gICAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfSxcbiAgICBzZXRHbG9iYWxUaW1lbGluZUNhbnZhcyhzdGF0ZSwgY2FudmFzKXtcbiAgICAgICAgc3RhdGUuZ2xvYmFsVGltZWxpbmUuY2FudmFzLmluc3RhbmNlID0gY2FudmFzO1xuICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgIH0sXG4gICAgc2V0R2xvYmFsVGltZWxpbmVWaWRlb01hcmtlcihzdGF0ZSwgdmlkZW9NYXJrZXIpe1xuICAgICAgICBzdGF0ZS5nbG9iYWxUaW1lbGluZS52aWRlb01hcmtlci5pbnN0YW5jZSA9IHZpZGVvTWFya2VyO1xuICAgICAgICByZXR1cm4gdmlkZW9NYXJrZXI7XG4gICAgfSxcbiAgICBzZXRHbG9iYWxUaW1lbGluZUNhbnZhc1dpZHRoKHN0YXRlLCB3aWR0aCl7XG4gICAgICAgIHN0YXRlLmdsb2JhbFRpbWVsaW5lLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfSxcbiAgICBzZXRHbG9iYWxUaW1lbGluZUNhbnZhc0hlaWdodChzdGF0ZSwgaGVpZ2h0KXtcbiAgICAgICAgc3RhdGUuZ2xvYmFsVGltZWxpbmUuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICB9LFxuICAgIHNldEdsb2JhbFRpbWVsaW5lU3RhZ2Uoc3RhdGUsIHN0YWdlKXtcbiAgICAgICAgc3RhdGUuZ2xvYmFsVGltZWxpbmUuc3RhZ2UuaW5zdGFuY2UgPSBzdGFnZTtcbiAgICAgICAgcmV0dXJuIHN0YWdlO1xuICAgIH0sXG4gICAgc2V0R2xvYmFsVGltZWxpbmVUaW1lbGluZShzdGF0ZSwgdGltZWxpbmUpe1xuICAgICAgICBzdGF0ZS5nbG9iYWxUaW1lbGluZS5pbnN0YW5jZSA9IHRpbWVsaW5lO1xuICAgICAgICByZXR1cm4gdGltZWxpbmU7XG4gICAgfSxcbiAgICBzZXRHbG9iYWxUaW1lbGluZVN0YXJ0VGltZShzdGF0ZSwgc3RhcnRUaW1lKXtcbiAgICAgICAgc3RhdGUuZ2xvYmFsVGltZWxpbmUuc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICAgICAgICByZXR1cm4gc3RhcnRUaW1lO1xuICAgIH0sXG4gICAgc2V0R2xvYmFsVGltZWxpbmVTdGFydFkoc3RhdGUsIHN0YXJ0WSl7XG4gICAgICAgIHN0YXRlLmdsb2JhbFRpbWVsaW5lLnN0YXJ0WSA9IHN0YXJ0WTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEdsb2JhbFRpbWVsaW5lTWludXRlc1knLCBzdGFydFkgKyA1KTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEdsb2JhbFRpbWVsaW5lU2Vjb25kc1knLCBzdGFydFkgKyA1NSk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRHbG9iYWxUaW1lbGluZUF4aXNZJywgc3RhcnRZICsgNjApO1xuICAgICAgICByZXR1cm4gc3RhcnRZO1xuICAgIH0sXG4gICAgc2V0R2xvYmFsVGltZWxpbmVBeGlzWShzdGF0ZSwgYXhpc1kpe1xuICAgICAgICBzdGF0ZS5nbG9iYWxUaW1lbGluZS5heGlzWSA9IGF4aXNZO1xuICAgICAgICByZXR1cm4gYXhpc1k7XG4gICAgfSxcbiAgICBzZXRHbG9iYWxUaW1lbGluZUVuZFkoc3RhdGUsIGVuZFkpe1xuICAgICAgICBzdGF0ZS5nbG9iYWxUaW1lbGluZS5lbmRZID0gZW5kWTtcbiAgICAgICAgcmV0dXJuIGVuZFk7XG4gICAgfSxcbiAgICBzZXRHbG9iYWxUaW1lbGluZVN0YXJ0WChzdGF0ZSwgc3RhcnRYKXtcbiAgICAgICAgc3RhdGUuZ2xvYmFsVGltZWxpbmUuc3RhcnRYID0gc3RhcnRYO1xuICAgICAgICByZXR1cm4gc3RhcnRYO1xuICAgIH0sXG4gICAgc2V0R2xvYmFsVGltZWxpbmVFbmRYKHN0YXRlLCBlbmRYKXtcbiAgICAgICAgc3RhdGUuZ2xvYmFsVGltZWxpbmUuZW5kWCA9IGVuZFg7XG4gICAgICAgIHJldHVybiBlbmRYO1xuICAgIH0sXG4gICAgc2V0R2xvYmFsVGltZWxpbmVNaW51dGVzWShzdGF0ZSwgbWludXRlc1kpe1xuICAgICAgICBzdGF0ZS5nbG9iYWxUaW1lbGluZS5taW51dGVzWSA9IG1pbnV0ZXNZO1xuICAgICAgICByZXR1cm4gbWludXRlc1k7XG4gICAgfSxcbiAgICBzZXRHbG9iYWxUaW1lbGluZVNlY29uZHNZKHN0YXRlLCBzZWNvbmRzWSl7XG4gICAgICAgIHN0YXRlLmdsb2JhbFRpbWVsaW5lLnNlY29uZHNZID0gc2Vjb25kc1k7XG4gICAgICAgIHJldHVybiBzZWNvbmRzWTtcbiAgICB9LFxuICAgIHNldEdsb2JhbFRpbWVsaW5lU2Vjb25kV2lkdGgoc3RhdGUsIHNlY29uZFdpZHRoKXtcbiAgICAgICAgc3RhdGUuZ2xvYmFsVGltZWxpbmUuc2Vjb25kV2lkdGggPSBzZWNvbmRXaWR0aDtcbiAgICAgICAgcmV0dXJuIHNlY29uZFdpZHRoO1xuICAgIH0sXG4gICAgc2V0R2xvYmFsVGltZWxpbmVDb2xXaWR0aChzdGF0ZSwgY29sV2lkdGgpe1xuICAgICAgICBzdGF0ZS5nbG9iYWxUaW1lbGluZS5jb2xXaWR0aCA9IGNvbFdpZHRoO1xuICAgICAgICBkaXNwYXRjaCgnc2V0R2xvYmFsVGltZWxpbmVTZWNvbmRXaWR0aCcsIGNvbFdpZHRoIC8gMTApO1xuICAgICAgICByZXR1cm4gY29sV2lkdGg7XG4gICAgfSxcbiAgICBzZXRHbG9iYWxUaW1lbGluZVpvb20oc3RhdGUsIHpvb20pe1xuICAgICAgICBpZiAoc3RhdGUucGxheWVyLmR1cmF0aW9uID4gNDIwKSB7XG4gICAgICAgICAgICBzdGF0ZS5nbG9iYWxUaW1lbGluZS5pbml0aWFsWm9vbUZhY3RvciA9IE1hdGguZmxvb3Ioc3RhdGUucGxheWVyLmR1cmF0aW9uIC8gNDIwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuZ2xvYmFsVGltZWxpbmUuem9vbUZhY3RvciAhPSB6b29tKSB7XG4gICAgICAgICAgICBzdGF0ZS5nbG9iYWxUaW1lbGluZS56b29tRmFjdG9yQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoem9vbSA8IHN0YXRlLmdsb2JhbFRpbWVsaW5lLmluaXRpYWxab29tRmFjdG9yKSB7XG4gICAgICAgICAgICBzdGF0ZS5nbG9iYWxUaW1lbGluZS56b29tRmFjdG9yID0gc3RhdGUuZ2xvYmFsVGltZWxpbmUuaW5pdGlhbFpvb21GYWN0b3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZS5nbG9iYWxUaW1lbGluZS56b29tRmFjdG9yID0gem9vbTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gem9vbTtcbiAgICB9LFxuICAgIHNldEdsb2JhbFRpbWVsaW5lSW5pdGlhbGl6ZWQoc3RhdGUsIGluaXRpYWxpemVkKXtcbiAgICAgICAgc3RhdGUuZ2xvYmFsVGltZWxpbmUuaW5pdGlhbGl6ZWQgPSBpbml0aWFsaXplZDtcbiAgICAgICAgcmV0dXJuIGluaXRpYWxpemVkO1xuICAgIH0sXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3N0b3Jlcy9hY3Rpb25zL2dsb2JhbFRpbWVsaW5lQWN0aW9ucy5qcyIsImltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gJ21vY2tzdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbnNwZWN0b3JBY3Rpb25zID0ge1xuICAgIHNldEluc3BlY3RvcihzdGF0ZSwgaW5zcGVjdG9yKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci5pbnN0YW5jZSA9IGluc3BlY3RvcjtcbiAgICAgICAgcmV0dXJuIGluc3BlY3RvcjtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvcldpZHRoKHN0YXRlLCB3aWR0aCl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9ySGVpZ2h0KHN0YXRlLCBoZWlnaHQpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvckVuZFknLCBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WSArIGhlaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvckNhbnZhcyhzdGF0ZSwgY2FudmFzKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci5jYW52YXMuaW5zdGFuY2UgPSBjYW52YXM7XG4gICAgICAgIHJldHVybiBjYW52YXM7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JWaWRlb01hcmtlcihzdGF0ZSwgdmlkZW9NYXJrZXIpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnZpZGVvTWFya2VyLmluc3RhbmNlID0gdmlkZW9NYXJrZXI7XG4gICAgICAgIHJldHVybiB2aWRlb01hcmtlcjtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvckNhbnZhc1dpZHRoKHN0YXRlLCB3aWR0aCl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvckNhbnZhc0hlaWdodChzdGF0ZSwgaGVpZ2h0KXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9yU3RhZ2Uoc3RhdGUsIHN0YWdlKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci5zdGFnZS5pbnN0YW5jZSA9IHN0YWdlO1xuICAgICAgICByZXR1cm4gc3RhZ2U7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JUaW1lbGluZShzdGF0ZSwgdGltZWxpbmUpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmluc3RhbmNlID0gdGltZWxpbmU7XG4gICAgICAgIHJldHVybiB0aW1lbGluZTtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvclN0YXJ0VGltZShzdGF0ZSwgc3RhcnRUaW1lKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gICAgICAgIHJldHVybiBzdGFydFRpbWU7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JTdGFydFkoc3RhdGUsIHN0YXJ0WSl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZID0gc3RhcnRZO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yTWludXRlc1knLCBzdGFydFkgKyA1KTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvclNlY29uZHNZJywgc3RhcnRZICsgNTUpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yQXhpc1knLCBzdGFydFkgKyA2MCk7XG4gICAgICAgIHJldHVybiBzdGFydFk7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JBeGlzWShzdGF0ZSwgYXhpc1kpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmF4aXNZID0gYXhpc1k7XG4gICAgICAgIHJldHVybiBheGlzWTtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvckVuZFkoc3RhdGUsIGVuZFkpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFkgPSBlbmRZO1xuICAgICAgICByZXR1cm4gZW5kWTtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvclN0YXJ0WChzdGF0ZSwgc3RhcnRYKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFggPSBzdGFydFg7XG4gICAgICAgIHJldHVybiBzdGFydFg7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JFbmRYKHN0YXRlLCBlbmRYKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRYID0gZW5kWDtcbiAgICAgICAgcmV0dXJuIGVuZFg7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JNaW51dGVzWShzdGF0ZSwgbWludXRlc1kpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLm1pbnV0ZXNZID0gbWludXRlc1k7XG4gICAgICAgIHJldHVybiBtaW51dGVzWTtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvclNlY29uZHNZKHN0YXRlLCBzZWNvbmRzWSl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kc1kgPSBzZWNvbmRzWTtcbiAgICAgICAgcmV0dXJuIHNlY29uZHNZO1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9yU2Vjb25kV2lkdGgoc3RhdGUsIHNlY29uZFdpZHRoKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRXaWR0aCA9IHNlY29uZFdpZHRoO1xuICAgICAgICByZXR1cm4gc2Vjb25kV2lkdGg7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JDb2xXaWR0aChzdGF0ZSwgY29sV2lkdGgpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmNvbFdpZHRoID0gY29sV2lkdGg7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JTZWNvbmRXaWR0aCcsIGNvbFdpZHRoIC8gMTApO1xuICAgICAgICByZXR1cm4gY29sV2lkdGg7XG4gICAgfSxcbiAgICBzZXRTZWxlY3RlZEFjdGlvbihzdGF0ZSwgYWN0aW9uKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkQWN0aW9uID0gYWN0aW9uO1xuICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH0sXG4gICAgcmVjb3JkaW5nVG91Y2goc3RhdGUsIHJlY29yZGluZyl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5yZWNvcmRpbmdUb3VjaCA9IHJlY29yZGluZztcbiAgICAgICAgcmV0dXJuIHJlY29yZGluZztcbiAgICB9LFxuICAgIHJlY29yZGluZ0FjdGlvbihzdGF0ZSwgcmVjb3JkaW5nKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnJlY29yZGluZ0FjdGlvbiA9IHJlY29yZGluZztcbiAgICAgICAgcmV0dXJuIHJlY29yZGluZztcbiAgICB9LFxuICAgIGFkZEFjdGlvbihzdGF0ZSwgYWN0aW9uKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfSxcbiAgICBhZGRMZWZ0VGFnKHN0YXRlLCB0YWcpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRBY3Rpb24ubGVmdFRhZ3MucHVzaCh0YWcpO1xuICAgICAgICByZXR1cm4gdGFnO1xuICAgIH0sXG4gICAgYWRkUmlnaHRUYWcoc3RhdGUsIHRhZyl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZEFjdGlvbi5yaWdodFRhZ3MucHVzaCh0YWcpO1xuICAgICAgICByZXR1cm4gdGFnO1xuICAgIH0sXG4gICAgZWRpdEFjdGlvbihzdGF0ZSwgYWN0aW9uKXtcbiAgICAgICAgdmFyIGluZGV4ID0gXy5maW5kSW5kZXgoc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guYWN0aW9ucywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHJldHVybiBvLmlkID09IGFjdGlvbi5pZFxuICAgICAgICB9KTtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guYWN0aW9uc1tpbmRleF0uc3RhcnQgPSBhY3Rpb24uc3RhcnQ7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnNbaW5kZXhdLmVuZCA9IGFjdGlvbi5lbmQ7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnNbaW5kZXhdLmNvbG9yID0gYWN0aW9uLmNvbG9yO1xuICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH0sXG4gICAgcmVtb3ZlQWN0aW9uKHN0YXRlLCBhY3Rpb24pe1xuICAgICAgICB2YXIgaW5kZXggPSBfLmZpbmRJbmRleChzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgcmV0dXJuIG8uaWQgPT0gYWN0aW9uLmlkXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guYWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfSxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc3RvcmVzL2FjdGlvbnMvaW5zcGVjdG9yQWN0aW9ucy5qcyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGlkPVwiZ2xvYmFsVGltZWxpbmVCb3hcIiBjbGFzcz1cImJveCBib3gtc29saWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDwhLS0gdG9vbHMgYm94IC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtcmlnaHQgYm94LXRvb2xzXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB2LW9uOmNsaWNrLnByZXZlbnQ9XCJnbG9iYWxab29tSW5cIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlpvb20gSW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zZWFyY2gtcGx1c1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHYtb246Y2xpY2sucHJldmVudD1cImdsb2JhbFpvb21PdXRcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiWm9vbSBPdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zZWFyY2gtbWludXNcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gLy4gdG9vbHMgLS0+XG5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+XG5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5nbG9iYWx0aW1lbGluZScpfX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2dsb2JhbFRpbWVsaW5lJz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlPlxuXG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQge2Rpc3BhdGNoLCBnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcbiAgICBpbXBvcnQgZ2xvYmFsVGltZWxpbmVTa2V0Y2ggZnJvbSAnLi4vc2tldGNoL2dsb2JhbFRpbWVsaW5lU2tldGNoJ1xuICAgIGltcG9ydCBzY291dGluZ3NMb2NhbGVzIGZyb20gJ2Jhc2UvbGFuZy9hZG1pbi9zY291dGluZ3Mvc2NvdXRpbmdzLmpzJztcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBsb2NhbGVzOiBzY291dGluZ3NMb2NhbGVzLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9wZW46IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgICdvcGVuJzogZnVuY3Rpb24gKG9wZW4sIG9sZE9wZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgICAgICAgICBwLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcC5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkKCl7XG5cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgd2luZG93LnAgPSBuZXcgcDUoZ2xvYmFsVGltZWxpbmVTa2V0Y2gpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnbG9iYWxab29tSW4oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKCcqJyk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldEdsb2JhbFRpbWVsaW5lWm9vbScsIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3IgKyAxKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0R2xvYmFsVGltZWxpbmVJbml0aWFsaXplZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnbG9iYWxab29tT3V0KClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZSgnKicpO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5nbG9iYWxUaW1lbGluZS56b29tRmFjdG9yID4gc3RhdGUuZ2xvYmFsVGltZWxpbmUuaW5pdGlhbFpvb21GYWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldEdsb2JhbFRpbWVsaW5lWm9vbScsIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3IgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldEdsb2JhbFRpbWVsaW5lSW5pdGlhbGl6ZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGdsb2JhbFRpbWVsaW5lLnZ1ZT81YjE1ODBkYSIsImltcG9ydCBTdGFnZSBmcm9tICcuL2NvbXBvbmVudHMvdWkvU3RhZ2UnXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9jb21wb25lbnRzL3VpL1RpbWVsaW5lJ1xuaW1wb3J0IFRvdWNoTWFuYWdlciBmcm9tICcuL2NvbXBvbmVudHMvdG91Y2hlcy9Ub3VjaE1hbmFnZXInXG5pbXBvcnQgVmlkZW9UaW1lTWFya2VyIGZyb20gJy4vY29tcG9uZW50cy91aS9WaWRlb1RpbWVNYXJrZXInXG5pbXBvcnQgVG91Y2hTcGVjIGZyb20gJy4vc3BlY3MvdG91Y2hlc1NwZWMnXG5pbXBvcnQge2dldFN0YXRlLCBkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2tldGNoKHApIHtcbiAgICBsZXQgc3RhdGUgPSBudWxsO1xuICAgIHdpbmRvdy5wID0gcDtcbiAgICBwLnNldHVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2xvYmFsVGltZWxpbmUnKS5vZmZzZXRXaWR0aDtcbiAgICAgICAgdmFyIGNhbnZhcyA9IHAuY3JlYXRlQ2FudmFzKHdpZHRoIC0gMjAsIDEzMCk7XG4gICAgICAgIGNhbnZhcy5tb3VzZU1vdmVkKG1vdXNlTW92ZWQpO1xuICAgICAgICBjYW52YXMubW91c2VQcmVzc2VkKG1vdXNlUHJlc3NlZCk7XG4gICAgICAgIHAuY29sb3JNb2RlKHAuUkdCLCAyNTUsIDI1NSwgMjU1LCAxMDApXG4gICAgICAgIHAuZnJhbWVSYXRlKDEwKTtcbiAgICB9O1xuXG4gICAgcC5kcmF3ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNvbmZpZ0J1dHRvbnMoKSB7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tSW4oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFpvb20nLCBzdGF0ZS50aW1lbGluZS56b29tRmFjdG9yICsgMSk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbml0aWFsaXplZCcsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tT3V0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChzdGF0ZS50aW1lbGluZS56b29tRmFjdG9yID4gc3RhdGUudGltZWxpbmUuaW5pdGlhbFpvb21GYWN0b3IpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRab29tJywgc3RhdGUudGltZWxpbmUuem9vbUZhY3RvciAtIDEpO1xuICAgICAgICAgICAgZGlzcGF0Y2goJ3NldEluaXRpYWxpemVkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW91c2VNb3ZlZCgpIHtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlLm1vdXNlT3ZlclRvdWNoKHAubW91c2VYLCBwLm1vdXNlWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGF0ZS50aW1lbGluZS5pbnN0YW5jZS5tb3VzZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwLm1vdXNlRHJhZ2dlZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLnRpbWVsaW5lLmluc3RhbmNlLmRyYWcoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBtb3VzZVByZXNzZWQoKSB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnRvdWNoTWFuYWdlci5pbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnN0YW5jZS5tb3VzZVByZXNzZWRUb3VjaChwLm1vdXNlWCwgcC5tb3VzZVkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdub2xvb3AnKTtcbiAgICAgICAgcC5ub0xvb3AoKTtcbiAgICB9XG5cbiAgICBwLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbG9vcCcpO1xuICAgICAgICBwLmxvb3AoKTtcbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvZ2xvYmFsVGltZWxpbmVTa2V0Y2guanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJnbG9iYWxUaW1lbGluZS52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtM2RkZjViNDEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2dsb2JhbFRpbWVsaW5lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0zZGRmNWI0MSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vZ2xvYmFsVGltZWxpbmUudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9nbG9iYWxUaW1lbGluZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zZGRmNWI0MSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9nbG9iYWxUaW1lbGluZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvZ2xvYmFsVGltZWxpbmUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZ2xvYmFsVGltZWxpbmUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTNkZGY1YjQxXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtM2RkZjViNDFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy9nbG9iYWxUaW1lbGluZS52dWVcbi8vIG1vZHVsZSBpZCA9IDUzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3ggYm94LXNvbGlkXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJnbG9iYWxUaW1lbGluZUJveFwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHVsbC1yaWdodCBib3gtdG9vbHNcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRvb2x0aXBcIixcbiAgICAgIFwidGl0bGVcIjogXCJab29tIEluXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLmdsb2JhbFpvb21JbigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtc2VhcmNoLXBsdXNcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICBcInRpdGxlXCI6IFwiWm9vbSBPdXRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0uZ2xvYmFsWm9vbU91dCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtc2VhcmNoLW1pbnVzXCJcbiAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jYWxlbmRhclwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLmdsb2JhbHRpbWVsaW5lJykpICsgXCJcXG4gICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiZ2xvYmFsVGltZWxpbmVcIlxuICAgIH1cbiAgfSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTNkZGY1YjQxXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zZGRmNWI0MSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy9nbG9iYWxUaW1lbGluZS52dWVcbi8vIG1vZHVsZSBpZCA9IDUzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTNkZGY1YjQxIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9nbG9iYWxUaW1lbGluZS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMmNjNTU5ODJcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTNkZGY1YjQxIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9nbG9iYWxUaW1lbGluZS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTNkZGY1YjQxIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9nbG9iYWxUaW1lbGluZS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTNkZGY1YjQxIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy9nbG9iYWxUaW1lbGluZS52dWVcbi8vIG1vZHVsZSBpZCA9IDUzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9