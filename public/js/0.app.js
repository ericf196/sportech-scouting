webpackJsonp([0,31],{

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(318),
  /* template */
  __webpack_require__(398),
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

/***/ 234:
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

/***/ 244:
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

var _UuidUtil = __webpack_require__(280);

var _UuidUtil2 = _interopRequireDefault(_UuidUtil);

var _SecondsUtil = __webpack_require__(279);

var _SecondsUtil2 = _interopRequireDefault(_SecondsUtil);

var _TimeConverter = __webpack_require__(234);

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

/***/ 257:
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

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UuidUtil = __webpack_require__(280);

var _UuidUtil2 = _interopRequireDefault(_UuidUtil);

var _SecondsUtil = __webpack_require__(279);

var _SecondsUtil2 = _interopRequireDefault(_SecondsUtil);

var _TimeConverter = __webpack_require__(234);

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

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeConverter = __webpack_require__(234);

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

/***/ 280:
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

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {!function(e,o){ true?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.VueColor=o():e.VueColor=o()}(this,function(){return function(e){function o(r){if(t[r])return t[r].exports;var a=t[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}var t={};return o.m=e,o.c=t,o.p="",o(0)}([function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=t(37),i=r(a),n=t(38),s=r(n),l=t(41),c=r(l),u=t(42),d=r(u),h=t(39),f=r(h),_=t(40),p=r(_),v=t(36),g=r(v),b=t(6),m=r(b),x=t(8),w=r(x),C=t(4),y=r(C),k=t(5),F=r(k),A=t(7),R=r(A),S=t(3),M=r(S),N={version:"1.0.26",Compact:i["default"],Material:s["default"],Slider:c["default"],Swatches:d["default"],Photoshop:f["default"],Sketch:p["default"],Chrome:g["default"],Alpha:m["default"],Checkboard:w["default"],EditableInput:y["default"],Hue:F["default"],Saturation:R["default"],ColorMixin:M["default"]};e.exports=N},function(e,o){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],o=0;o<this.length;o++){var t=this[o];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(o,t){"string"==typeof o&&(o=[[null,o,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<o.length;a++){var n=o[a];"number"==typeof n[0]&&r[n[0]]||(t&&!n[2]?n[2]=t:t&&(n[2]="("+n[2]+") and ("+t+")"),e.push(n))}},e}},function(e,o,t){function r(e,o){for(var t=0;t<e.length;t++){var r=e[t],a=d[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(l(r.parts[i],o))}else{for(var n=[],i=0;i<r.parts.length;i++)n.push(l(r.parts[i],o));d[r.id]={id:r.id,refs:1,parts:n}}}}function a(e){for(var o=[],t={},r=0;r<e.length;r++){var a=e[r],i=a[0],n=a[1],s=a[2],l=a[3],c={css:n,media:s,sourceMap:l};t[i]?t[i].parts.push(c):o.push(t[i]={id:i,parts:[c]})}return o}function i(e,o){var t=_(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(o,r.nextSibling):t.appendChild(o):t.insertBefore(o,t.firstChild),g.push(o);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(o)}}function n(e){e.parentNode.removeChild(e);var o=g.indexOf(e);o>=0&&g.splice(o,1)}function s(e){var o=document.createElement("style");return o.type="text/css",i(e,o),o}function l(e,o){var t,r,a;if(o.singleton){var i=v++;t=p||(p=s(o)),r=c.bind(null,t,i,!1),a=c.bind(null,t,i,!0)}else t=s(o),r=u.bind(null,t),a=function(){n(t)};return r(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;r(e=o)}else a()}}function c(e,o,t,r){var a=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(o,a);else{var i=document.createTextNode(a),n=e.childNodes;n[o]&&e.removeChild(n[o]),n.length?e.insertBefore(i,n[o]):e.appendChild(i)}}function u(e,o){var t=o.css,r=o.media,a=o.sourceMap;if(r&&e.setAttribute("media",r),a&&(t+="\n/*# sourceURL="+a.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var d={},h=function(e){var o;return function(){return"undefined"==typeof o&&(o=e.apply(this,arguments)),o}},f=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),_=h(function(){return document.head||document.getElementsByTagName("head")[0]}),p=null,v=0,g=[];e.exports=function(e,o){o=o||{},"undefined"==typeof o.singleton&&(o.singleton=f()),"undefined"==typeof o.insertAt&&(o.insertAt="bottom");var t=a(e);return r(t,o),function(e){for(var i=[],n=0;n<t.length;n++){var s=t[n],l=d[s.id];l.refs--,i.push(l)}if(e){var c=a(e);r(c,o)}for(var n=0;n<i.length;n++){var l=i[n];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete d[l.id]}}}};var b=function(){var e=[];return function(o,t){return e[o]=t,e.filter(Boolean).join("\n")}}()},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,o){e.a&&e.a>1&&(e.a=1);var t=e.hex?(0,n["default"])(e.hex):(0,n["default"])(e),r=t.toHsl(),a=t.toHsv();return 0===r.s&&(r.h=e.h||o||0,a.h=e.h||o||0),{hsl:r,hex:t.toHexString().toUpperCase(),rgba:t.toRgb(),hsv:a,oldHue:e.h||o||r.h,source:e.source,a:e.a}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(35),n=r(i);o["default"]={props:["value"],data:function(){return{val:a(this.value)}},computed:{colors:{get:function(){return this.val},set:function(e){this.val=e,this.$emit("change-color",e)}}},watch:{value:function(e){this.val=a(e)}},created:function(){},methods:{colorChange:function(e,o){this.colors=a(e,o||this.oldHue),this.oldHue=this.colors.hsl.h},isValidHex:function(e){return(0,n["default"])(e).isValid()},simpleCheckForValidColor:function(e){for(var o=["r","g","b","a","h","s","a","v"],t=0,r=0,a=0;a<o.length;a++){var i=o[a];e[i]&&(t++,isNaN(e[i])||r++)}if(t===r)return e}}}},function(e,o,t){var r,a;t(56),r=t(18);var i=t(44);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(57),r=t(19);var i=t(45);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(65),r=t(16);var i=t(53);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(58),r=t(20);var i=t(46);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(66),r=t(17);var i=t(54);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),i=r(a),n=t(4),s=r(n),l=t(7),c=r(l),u=t(5),d=r(u),h=t(6),f=r(h);o["default"]={name:"Chrome",mixins:[i["default"]],props:{},components:{saturation:c["default"],hue:d["default"],alpha:f["default"],"ed-in":s["default"]},data:function(){return{fields:["hex","rgba","hsla"],fieldsIndex:0,highlight:!1}},computed:{activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))},toggleViews:function(){return this.fieldsIndex>=2?void(this.fieldsIndex=0):void this.fieldsIndex++},showHighlight:function(){this.highlight=!0},hideHighlight:function(){this.highlight=!1}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),i=r(a),n=t(4),s=r(n),l=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];o["default"]={name:"Compact",mixins:[i["default"]],props:{},components:{"ed-in":s["default"]},computed:{pick:function(){return this.colors.hex}},data:function(){return{defaultColors:l}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})},onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(4),i=r(a),n=t(3),s=r(n);o["default"]={name:"Material",mixins:[s["default"]],components:{"ed-in":i["default"]},methods:{onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),i=r(a),n=t(4),s=r(n),l=t(7),c=r(l),u=t(5),d=r(u),h=t(6),f=r(h);o["default"]={name:"Photoshop",mixins:[i["default"]],props:{head:{type:String,"default":"Color Picker"}},components:{saturation:c["default"],hue:d["default"],alpha:f["default"],"ed-in":s["default"]},data:function(){return{currentColor:"#FFF"}},created:function(){this.currentColor=this.colors.hex},methods:{childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e["#"]?this.isValidHex(e["#"])&&this.colorChange({hex:e["#"],source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))},handleAccept:function(){this.$emit("ok")},handleCancel:function(){this.$emit("cancel")}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),i=r(a),n=t(4),s=r(n),l=t(7),c=r(l),u=t(5),d=r(u),h=t(6),f=r(h),_=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"];o["default"]={name:"Sketch",mixins:[i["default"]],components:{saturation:c["default"],hue:d["default"],alpha:f["default"],"ed-in":s["default"]},data:function(){return{presetColors:_}},computed:{activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),i=r(a),n=t(5),s=r(n);o["default"]={name:"Slider",mixins:[i["default"]],props:{direction:String},components:{hue:s["default"]},computed:{activeOffset:function(){return Math.round(100*this.colors.hsl.s)/100===.5?Math.round(100*this.colors.hsl.l)/100:0}},data:function(){return{swatches:[".80",".65",".50",".35",".20"]}},methods:{hueChange:function(e){this.colorChange(e)},handleSwClick:function(e,o){this.colorChange({h:this.colors.hsl.h,s:.5,l:o,source:"hsl"})}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(34),i=r(a),n=t(3),s=r(n),l=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","blueGrey"],c=["900","700","500","300","100"],u=function(){var e=[];return l.forEach(function(o){var t=[];c.forEach(function(e){t.push(i["default"][o][e].toUpperCase())}),e.push(t)}),e}();o["default"]={name:"Swatches",mixins:[s["default"]],computed:{pick:function(){return this.colors.hex}},data:function(){return{defaultColors:u}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(8),i=r(a);o["default"]={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:i["default"]},computed:{colors:function(){return this.value},gradientColor:function(){var e=this.colors.rgba,o=[e.r,e.g,e.b].join(",");return"linear-gradient(to right, rgba("+o+", 0) 0%, rgba("+o+", 1) 100%)"}},methods:{handleChange:function(e,o){!o&&e.preventDefault();var t,r=this.$refs.container,a=r.clientWidth,i=(e.pageX||e.touches[0].pageX)-(r.getBoundingClientRect().left+window.pageXOffset);t=i<0?0:i>a?1:Math.round(100*i/a)/100,this.colors.a!==t&&this.$emit("on-change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:t,source:"rgba"})},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o){"use strict";function t(e,o,t){if("undefined"==typeof document)return null;var r=document.createElement("canvas");r.width=r.height=2*t;var a=r.getContext("2d");return a?(a.fillStyle=e,a.fillRect(0,0,r.width,r.height),a.fillStyle=o,a.fillRect(0,0,t,t),a.translate(t,t),a.fillRect(0,0,t,t),r.toDataURL()):null}function r(e,o,r){var i=e+","+o+","+r;if(a[i])return a[i];var n=t(e,o,r);return a[i]=n,n}Object.defineProperty(o,"__esModule",{value:!0});var a={};o["default"]={name:"Checkboard",props:{size:{type:[Number,String],"default":8},white:{type:String,"default":"#fff"},grey:{type:String,"default":"#e6e6e6"}},computed:{bgStyle:function(){return"url("+r(this.white,this.grey,this.size)+") center left"}}}},function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={name:"editableInput",props:{label:String,value:[String,Number],max:Number,arrowOffset:{type:Number,"default":1}},computed:{val:function(){return this.value}},filters:{maxFilter:{read:function(e){return this.max&&e>this.max?this.max:e},write:function(e,o){return e}}},methods:{update:function(e){this.handleChange(e.target.value)},handleChange:function(e){var o={};o[this.label]=e,this.$emit("on-change",o)},handleBlur:function(e){console.log(e)},handleKeyDown:function(e){var o=this.val,t=Number(o);if(t){var r=this.arrowOffset||1;38===e.keyCode&&(o=t+r,this.handleChange(o),e.preventDefault()),40===e.keyCode&&(o=t-r,this.handleChange(o),e.preventDefault())}},handleDrag:function(e){console.log(e)},handleMouseDown:function(e){console.log(e)}}}},function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={name:"Hue",props:{value:Object,direction:{type:String,"default":"horizontal"}},computed:{colors:function(){return this.value},directionClass:function(){return{"vue-color__c-hue--horizontal":"horizontal"===this.direction,"vue-color__c-hue--vertical":"vertical"===this.direction}},pointerTop:function(){return"vertical"===this.direction?-(100*this.colors.hsl.h/360)+100+"%":0},pointerLeft:function(){return"vertical"===this.direction?0:100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(e,o){!o&&e.preventDefault();var t,r,a=this.$refs.container,i=a.clientWidth,n=a.clientHeight,s=(e.pageX||e.touches[0].pageX)-(a.getBoundingClientRect().left+window.pageXOffset),l=(e.pageY||e.touches[0].pageY)-(a.getBoundingClientRect().top+window.pageYOffset);"vertical"===this.direction?(l<0?t=359:l>n?t=0:(r=-(100*l/n)+100,t=360*r/100),this.colors.hsl.h!==t&&this.$emit("on-change",{h:t,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(s<0?t=0:s>i?t=359:(r=100*s/i,t=360*r/100),this.colors.hsl.h!==t&&this.$emit("on-change",{h:t,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(33),i=r(a);o["default"]={name:"Saturation",props:{value:Object},computed:{colors:function(){return this.value},bgColor:function(){return"hsl("+this.colors.hsl.h+",100%, 50%)"},pointerTop:function(){return-(100*this.colors.hsv.v)+100+"%"},pointerLeft:function(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:(0,i["default"])(function(e,o){e(o)},50),handleChange:function(e,o){!o&&e.preventDefault();var t=this.$refs.container,r=t.clientWidth,a=t.clientHeight,i=(e.pageX||e.touches[0].pageX)-(t.getBoundingClientRect().left+window.pageXOffset),n=(e.pageY||e.touches[0].pageY)-(t.getBoundingClientRect().top+window.pageYOffset);i<0?i=0:i>r?i=r:n<0?n=0:n>a&&(n=a);var s=100*i/r,l=-(100*n/a)+100;this.throttle(this.onChange,{h:this.colors.hsl.h,s:s,v:l,a:this.colors.hsl.a,source:"rgb"})},onChange:function(e){this.$emit("on-change",e)},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__compact{padding-top:5px;padding-left:5px;width:240px;border-radius:2px;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16);background-color:#fff}.vue-color__compact__colors{overflow:hidden;padding:0;margin:0}.vue-color__compact__color-item{list-style:none;width:15px;height:15px;float:left;margin-right:5px;margin-bottom:5px;position:relative;cursor:pointer}.vue-color__compact__color-item--white{box-shadow:inset 0 0 0 1px #ddd}.vue-color__compact__color-item--white .vue-color__compact__dot{background:#000}.vue-color__compact__dot{position:absolute;top:5px;right:5px;bottom:5px;left:5px;border-radius:50%;opacity:1;background:#fff}.vue-color__compact__fields{display:flex;padding-bottom:6px;padding-right:5px;position:relative}.vue-color__compact__fields .vue-color__editable-input__input{width:70%;padding-left:30%;background:none;font-size:12px;color:#333;height:16px}.vue-color__compact__fields .vue-color__editable-input__label{position:absolute;top:3px;left:0;line-height:16px;text-transform:uppercase;font-size:12px;color:#999}.vue-color__compact__pick-color{position:absolute;top:6px;left:5px;height:9px;width:9px}.vue-color__compact__col-3{flex:1}.vue_color__compact__col-hex{flex:2}.vue_color__compact__col-hex .vue-color__editable-input__input{width:80%;padding-left:20%}.vue_color__compact__col-hex .vue-color__editable-input__label{display:none}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__editable-input{position:relative}.vue-color__editable-input__input{padding:0;border:0;outline:none}.vue-color__editable-input__label{text-transform:capitalize}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__c-hue{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:2px}.vue-color__c-hue--horizontal{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vue-color__c-hue--vertical{background:linear-gradient(0deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vue-color__c-hue__container{cursor:pointer;margin:0 2px;position:relative;height:100%}.vue-color__c-hue__pointer{z-index:2;position:absolute}.vue-color__c-hue__picker{cursor:pointer;margin-top:1px;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px rgba(0,0,0,.6);background:#fff;transform:translateX(-2px)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__saturation,.vue-color__saturation--black,.vue-color__saturation--white{cursor:pointer;position:absolute;top:0;left:0;right:0;bottom:0}.vue-color__saturation--white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.vue-color__saturation--black{background:linear-gradient(0deg,#000,transparent)}.vue-color__saturation--pointer{cursor:pointer;position:absolute}.vue-color__saturation--circle{cursor:head;width:4px;height:4px;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);border-radius:50%;transform:translate(-2px,-2px)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__material{width:98px;height:98px;padding:16px;font-family:Roboto;position:relative;border-radius:2px;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16);background-color:#fff}.vue-color__material .vue-color__editable-input__input{width:100%;margin-top:12px;font-size:15px;color:#333;height:30px}.vue-color__material .vue-color__editable-input__label{position:absolute;top:0;left:0;font-size:11px;color:#999;text-transform:capitalize}.vue-color__material__hex{border-bottom-width:2px;border-bottom-style:solid}.vue-color__material__split{display:flex;margin-right:-10px;padding-top:11px}.vue-color__material__third{flex:1;padding-right:10px}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__slider{position:relative;width:410px}.vue-color__slider__hue-warp{height:12px;position:relative}.vue-color__slider__hue-warp .vue-color__c-hue__picker{width:14px;height:14px;border-radius:6px;transform:translate(-7px,-2px);background-color:#f8f8f8;box-shadow:0 1px 4px 0 rgba(0,0,0,.37)}.vue-color__slider__swatches{display:flex;margin-top:20px}.vue-color__slider__swatch{margin-right:1px;flex:1;width:20%}.vue-color__slider__swatch:first-child{margin-right:1px}.vue-color__slider__swatch:first-child .vue-color__slider__swatch-picker{border-radius:2px 0 0 2px}.vue-color__slider__swatch:last-child{margin-right:0}.vue-color__slider__swatch:last-child .vue-color__slider__swatch-picker{border-radius:0 2px 2px 0}.vue-color__slider__swatch-picker{cursor:pointer;height:12px}.vue-color__slider__swatch-picker--active{transform:scaleY(1.8);border-radius:3.6px/2px}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__swatches{width:320px;height:240px;overflow-y:scroll;background-color:#fff;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16)}.vue-color__swatches__box{padding:16px 0 6px 16px;overflow:hidden}.vue-color__swatches__color-group{padding-bottom:10px;width:40px;float:left;margin-right:10px}.vue-color__swatches__color-it{width:40px;height:24px;cursor:pointer;background:#880e4f;margin-bottom:1px;overflow:hidden;border-radius:2px 2px 0 0}.vue-color__swatches__pick{fill:#fff;margin-left:8px;display:block}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,'.vue-colors__photoshop{background:#dcdcdc;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.25),0 8px 16px rgba(0,0,0,.15);box-sizing:initial;width:513px;font-family:Roboto}.vue-colors__photoshop__head{background-image:linear-gradient(-180deg,#f0f0f0,#d4d4d4);border-bottom:1px solid #b1b1b1;box-shadow:inset 0 1px 0 0 hsla(0,0%,100%,.2),inset 0 -1px 0 0 rgba(0,0,0,.02);height:23px;line-height:24px;border-radius:4px 4px 0 0;font-size:13px;color:#4d4d4d;text-align:center}.vue-colors__photoshop__body{padding:15px;display:flex}.vue-colors__photoshop__saturation-wrap{width:256px;height:256px;position:relative;border:2px solid #b3b3b3;border-bottom:2px solid #f0f0f0;overflow:hidden}.vue-colors__photoshop__saturation-wrap .vue-color__saturation--circle{width:12px;height:12px}.vue-colors__photoshop__hue-wrap{position:relative;height:256px;width:19px;margin-left:10px;border:2px solid #b3b3b3;border-bottom:2px solid #f0f0f0}.vue-colors__photoshop__hue-pointer{position:relative}.vue-colors__photoshop__hue-pointer--left,.vue-colors__photoshop__hue-pointer--right{position:absolute;width:0;height:0;border-style:solid;border-width:5px 0 5px 8px;border-color:transparent transparent transparent #555}.vue-colors__photoshop__hue-pointer--left:after,.vue-colors__photoshop__hue-pointer--right:after{content:"";width:0;height:0;border-style:solid;border-width:4px 0 4px 6px;border-color:transparent transparent transparent #fff;position:absolute;top:1px;left:1px;transform:translate(-8px,-5px)}.vue-colors__photoshop__hue-pointer--left{transform:translate(-13px,-4px)}.vue-colors__photoshop__hue-pointer--right{transform:translate(20px,-4px) rotate(180deg)}.vue-colors__photoshop__controls{width:180px;margin-left:10px;display:flex}.vue-colors__photoshop__actions{margin-left:20px;flex:1}.vue-colors__photoshop__ac-btn{cursor:pointer;background-image:linear-gradient(-180deg,#fff,#e6e6e6);border:1px solid #878787;border-radius:2px;height:20px;box-shadow:0 1px 0 0 #eaeaea;font-size:14px;color:#000;line-height:20px;text-align:center;margin-bottom:10px}.vue-colors__photoshop__previews{width:60px}.vue-colors__photoshop__previews__swatches{border:1px solid #b3b3b3;border-bottom:1px solid #f0f0f0;margin-bottom:2px;margin-top:1px}.vue-colors__photoshop__previews__pr-color{height:34px;box-shadow:inset 1px 0 0 #000,inset -1px 0 0 #000,inset 0 1px 0 #000}.vue-colors__photoshop__previews__label{font-size:14px;color:#000;text-align:center}.vue-colors__photoshop__fields{padding-top:5px;padding-bottom:9px;width:80px;position:relative}.vue-colors__photoshop__fields .vue-color__editable-input__input{margin-left:40%;width:40%;height:18px;border:1px solid #888;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 1px 0 0 #ececec;margin-bottom:5px;font-size:13px;padding-left:3px;margin-right:10px}.vue-colors__photoshop__fields .vue-color__editable-input__label{top:0;left:0;width:34px;text-transform:uppercase;font-size:13px;height:18px;line-height:22px;position:absolute}.vue-colors__photoshop__fields__divider{height:5px}.vue-colors__photoshop__fields__hex .vue-color__editable-input__input{margin-left:20%;width:80%;height:18px;border:1px solid #888;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 1px 0 0 #ececec;margin-bottom:6px;font-size:13px;padding-left:3px}.vue-colors__photoshop__fields__hex .vue-color__editable-input__label{position:absolute;top:0;left:0;width:14px;text-transform:uppercase;font-size:13px;height:18px;line-height:22px}',""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__sketch{position:relative;width:200px;padding:10px 10px 0;box-sizing:initial;background:#fff;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.15),0 8px 16px rgba(0,0,0,.15)}.vue-color__sketch__saturation-wrap{width:100%;padding-bottom:75%;position:relative;overflow:hidden}.vue-color__sketch__controls{display:flex}.vue-color__sketch__sliders{padding:4px 0;flex:1}.vue-color__sketch__sliders .vue-color__c-alpha__gradient,.vue-color__sketch__sliders .vue-color__c-hue{border-radius:2px}.vue-color__sketch__hue-wrap{position:relative;height:10px}.vue-color__sketch__alpha-wrap{position:relative;height:10px;margin-top:4px;overflow:hidden}.vue-color__sketch__color-wrap{width:24px;height:24px;position:relative;margin-top:4px;margin-left:4px;border-radius:3px}.vue-color__sketch__active-color{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:2px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15),inset 0 0 4px rgba(0,0,0,.25);z-index:2}.vue-color__sketch__field{display:flex;padding-top:4px}.vue-color__sketch__field .vue-color__editable-input__input{width:80%;padding:4px 10% 3px;border:none;box-shadow:inset 0 0 0 1px #ccc;font-size:11px}.vue-color__sketch__field .vue-color__editable-input__label{display:block;text-align:center;font-size:11px;color:#222;padding-top:3px;padding-bottom:4px;text-transform:capitalize}.vue-color__sketch__field--single{flex:1;padding-left:6px}.vue-color__sketch__field--double{flex:2}.vue-color__sketch__presets{margin-right:-10px;margin-left:-10px;padding-left:10px;padding-top:10px;border-top:1px solid #eee}.vue-color__sketch__presets-color{border-radius:3px;overflow:hidden;position:relative;display:inline-block;margin:0 10px 10px 0;vertical-align:top;cursor:pointer;width:16px;height:16px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__chrome{background:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);box-sizing:initial;width:225px;font-family:Menlo;background-color:#fff}.vue-color__chrome__controls{display:flex}.vue-color__chrome__color-wrap{width:32px}.vue-color__chrome__active-color{margin-top:6px;width:16px;height:16px;border-radius:8px;position:relative;overflow:hidden}.vue-color__chrome__sliders{flex:1}.vue-color__chrome__sliders .vue-color__c-alpha__gradient,.vue-color__chrome__sliders .vue-color__c-hue{border-radius:2px}.vue-color__chrome__sliders .vue-color__c-alpha__picker,.vue-color__chrome__sliders .vue-color__c-hue__picker{width:12px;height:12px;border-radius:6px;transform:translate(-6px,-2px);background-color:#f8f8f8;box-shadow:0 1px 4px 0 rgba(0,0,0,.37)}.vue-color__chrome__fields-wrap{padding-top:16px;display:flex}.vue-color__chrome__fields{display:flex;margin-left:-6px;flex:1}.vue-color__chrome__field{padding-left:6px;width:100%}.vue-color__chrome__toggle-btn{width:32px;text-align:right;position:relative}.vue-color__chrome__icon{margin-right:-4px;margin-top:12px;cursor:pointer;position:relative;z-index:2}.vue-color__chrome__icon-highlight{position:absolute;width:24px;height:28px;background:#eee;border-radius:4px;top:10px;left:12px}.vue-color__chrome__hue-wrap{margin-bottom:8px}.vue-color__chrome__alpha-wrap,.vue-color__chrome__hue-wrap{position:relative;height:10px}.vue-color__chrome__chrome-body{padding:16px 16px 12px;background-color:#fff}.vue-color__chrome__saturation-wrap{width:100%;padding-bottom:55%;position:relative;border-radius:2px 2px 0 0;overflow:hidden}.vue-color__chrome__saturation-wrap .vue-color__saturation--circle{width:12px;height:12px}.vue-color__chrome__fields .vue-color__editable-input__input{font-size:11px;color:#333;width:100%;border-rradius:2px;border:none;box-shadow:inset 0 0 0 1px #dadada;height:21px;text-align:center}.vue-color__chrome__fields .vue-color__editable-input__label{text-transform:uppercase;font-size:11px;line-height:11px;color:#969696;text-align:center;display:block;margin-top:12px}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__c-alpha,.vue-color__c-alpha__checkboard-wrap{position:absolute;top:0;right:0;bottom:0;left:0}.vue-color__c-alpha__checkboard-wrap{overflow:hidden}.vue-color__c-alpha__gradient{position:absolute;top:0;right:0;bottom:0;left:0}.vue-color__c-alpha__container{cursor:pointer;position:relative;z-index:2;height:100%;margin:0 3px}.vue-color__c-alpha__pointer{z-index:2;position:absolute}.vue-color__c-alpha__picker{cursor:pointer;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px rgba(0,0,0,.6);background:#fff;margin-top:1px;transform:translateX(-2px)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__c-checkerboard{position:absolute;top:0;right:0;bottom:0;left:0}",""])},function(e,o){(function(o){function t(e,o,t){function r(o){var t=p,r=v;return p=v=void 0,k=o,b=e.apply(r,t)}function i(e){return k=e,m=setTimeout(u,o),F?r(e):b}function n(e){var t=e-x,r=e-k,a=o-t;return A?C(a,g-r):a}function c(e){var t=e-x,r=e-k;return void 0===x||t>=o||t<0||A&&r>=g}function u(){var e=y();return c(e)?d(e):void(m=setTimeout(u,n(e)))}function d(e){return m=void 0,R&&p?r(e):(p=v=void 0,b)}function h(){void 0!==m&&clearTimeout(m),k=0,p=x=v=m=void 0}function f(){return void 0===m?b:d(y())}function _(){var e=y(),t=c(e);if(p=arguments,v=this,x=e,t){if(void 0===m)return i(x);if(A)return m=setTimeout(u,o),
r(x)}return void 0===m&&(m=setTimeout(u,o)),b}var p,v,g,b,m,x,k=0,F=!1,A=!1,R=!0;if("function"!=typeof e)throw new TypeError(l);return o=s(o)||0,a(t)&&(F=!!t.leading,A="maxWait"in t,g=A?w(s(t.maxWait)||0,o):g,R="trailing"in t?!!t.trailing:R),_.cancel=h,_.flush=f,_}function r(e,o,r){var i=!0,n=!0;if("function"!=typeof e)throw new TypeError(l);return a(r)&&(i="leading"in r?!!r.leading:i,n="trailing"in r?!!r.trailing:n),t(e,o,{leading:i,maxWait:o,trailing:n})}function a(e){var o=typeof e;return!!e&&("object"==o||"function"==o)}function i(e){return!!e&&"object"==typeof e}function n(e){return"symbol"==typeof e||i(e)&&x.call(e)==u}function s(e){if("number"==typeof e)return e;if(n(e))return c;if(a(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=a(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var t=f.test(e);return t||_.test(e)?p(e.slice(2),t?2:8):h.test(e)?c:+e}var l="Expected a function",c=NaN,u="[object Symbol]",d=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,_=/^0o[0-7]+$/i,p=parseInt,v="object"==typeof o&&o&&o.Object===Object&&o,g="object"==typeof self&&self&&self.Object===Object&&self,b=v||g||Function("return this")(),m=Object.prototype,x=m.toString,w=Math.max,C=Math.min,y=function(){return b.Date.now()};e.exports=r}).call(o,function(){return this}())},function(e,o,t){var r,a,i;!function(t,n){a=[],r=n,i="function"==typeof r?r.apply(o,a):r,!(void 0!==i&&(e.exports=i))}(this,function(){return{red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",a100:"#ff8a80",a200:"#ff5252",a400:"#ff1744",a700:"#d50000"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},deepPurple:{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",a100:"#82b1ff",a200:"#448aff",a400:"#2979ff",a700:"#2962ff"},lightBlue:{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",a100:"#b9f6ca",a200:"#69f0ae",a400:"#00e676",a700:"#00c853"},lightGreen:{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},deepOrange:{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121"},blueGrey:{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238"},darkText:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",dividers:"rgba(0, 0, 0, 0.12)"},lightText:{primary:"rgba(255, 255, 255, 1)",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",dividers:"rgba(255, 255, 255, 0.12)"},darkIcons:{active:"rgba(0, 0, 0, 0.54)",inactive:"rgba(0, 0, 0, 0.38)"},lightIcons:{active:"rgba(255, 255, 255, 1)",inactive:"rgba(255, 255, 255, 0.5)"},white:"#ffffff",black:"#000000"}})},function(e,o,t){var r;!function(a){function i(e,o){if(e=e?e:"",o=o||{},e instanceof i)return e;if(!(this instanceof i))return new i(e,o);var t=n(e);this._originalInput=e,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=X(100*this._a)/100,this._format=o.format||t.format,this._gradientType=o.gradientType,this._r<1&&(this._r=X(this._r)),this._g<1&&(this._g=X(this._g)),this._b<1&&(this._b=X(this._b)),this._ok=t.ok,this._tc_id=V++}function n(e){var o={r:0,g:0,b:0},t=1,r=null,a=null,i=null,n=!1,l=!1;return"string"==typeof e&&(e=I(e)),"object"==typeof e&&(D(e.r)&&D(e.g)&&D(e.b)?(o=s(e.r,e.g,e.b),n=!0,l="%"===String(e.r).substr(-1)?"prgb":"rgb"):D(e.h)&&D(e.s)&&D(e.v)?(r=O(e.s),a=O(e.v),o=d(e.h,r,a),n=!0,l="hsv"):D(e.h)&&D(e.s)&&D(e.l)&&(r=O(e.s),i=O(e.l),o=c(e.h,r,i),n=!0,l="hsl"),e.hasOwnProperty("a")&&(t=e.a)),t=M(t),{ok:n,format:e.format||l,r:q(255,Y(o.r,0)),g:q(255,Y(o.g,0)),b:q(255,Y(o.b,0)),a:t}}function s(e,o,t){return{r:255*N(e,255),g:255*N(o,255),b:255*N(t,255)}}function l(e,o,t){e=N(e,255),o=N(o,255),t=N(t,255);var r,a,i=Y(e,o,t),n=q(e,o,t),s=(i+n)/2;if(i==n)r=a=0;else{var l=i-n;switch(a=s>.5?l/(2-i-n):l/(i+n),i){case e:r=(o-t)/l+(o<t?6:0);break;case o:r=(t-e)/l+2;break;case t:r=(e-o)/l+4}r/=6}return{h:r,s:a,l:s}}function c(e,o,t){function r(e,o,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(o-e)*t:t<.5?o:t<2/3?e+(o-e)*(2/3-t)*6:e}var a,i,n;if(e=N(e,360),o=N(o,100),t=N(t,100),0===o)a=i=n=t;else{var s=t<.5?t*(1+o):t+o-t*o,l=2*t-s;a=r(l,s,e+1/3),i=r(l,s,e),n=r(l,s,e-1/3)}return{r:255*a,g:255*i,b:255*n}}function u(e,o,t){e=N(e,255),o=N(o,255),t=N(t,255);var r,a,i=Y(e,o,t),n=q(e,o,t),s=i,l=i-n;if(a=0===i?0:l/i,i==n)r=0;else{switch(i){case e:r=(o-t)/l+(o<t?6:0);break;case o:r=(t-e)/l+2;break;case t:r=(e-o)/l+4}r/=6}return{h:r,s:a,v:s}}function d(e,o,t){e=6*N(e,360),o=N(o,100),t=N(t,100);var r=a.floor(e),i=e-r,n=t*(1-o),s=t*(1-i*o),l=t*(1-(1-i)*o),c=r%6,u=[t,s,n,n,l,t][c],d=[l,t,t,s,n,n][c],h=[n,n,l,t,t,s][c];return{r:255*u,g:255*d,b:255*h}}function h(e,o,t,r){var a=[H(X(e).toString(16)),H(X(o).toString(16)),H(X(t).toString(16))];return r&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function f(e,o,t,r,a){var i=[H(X(e).toString(16)),H(X(o).toString(16)),H(X(t).toString(16)),H(z(r))];return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function _(e,o,t,r){var a=[H(z(r)),H(X(e).toString(16)),H(X(o).toString(16)),H(X(t).toString(16))];return a.join("")}function p(e,o){o=0===o?0:o||10;var t=i(e).toHsl();return t.s-=o/100,t.s=P(t.s),i(t)}function v(e,o){o=0===o?0:o||10;var t=i(e).toHsl();return t.s+=o/100,t.s=P(t.s),i(t)}function g(e){return i(e).desaturate(100)}function b(e,o){o=0===o?0:o||10;var t=i(e).toHsl();return t.l+=o/100,t.l=P(t.l),i(t)}function m(e,o){o=0===o?0:o||10;var t=i(e).toRgb();return t.r=Y(0,q(255,t.r-X(255*-(o/100)))),t.g=Y(0,q(255,t.g-X(255*-(o/100)))),t.b=Y(0,q(255,t.b-X(255*-(o/100)))),i(t)}function x(e,o){o=0===o?0:o||10;var t=i(e).toHsl();return t.l-=o/100,t.l=P(t.l),i(t)}function w(e,o){var t=i(e).toHsl(),r=(t.h+o)%360;return t.h=r<0?360+r:r,i(t)}function C(e){var o=i(e).toHsl();return o.h=(o.h+180)%360,i(o)}function y(e){var o=i(e).toHsl(),t=o.h;return[i(e),i({h:(t+120)%360,s:o.s,l:o.l}),i({h:(t+240)%360,s:o.s,l:o.l})]}function k(e){var o=i(e).toHsl(),t=o.h;return[i(e),i({h:(t+90)%360,s:o.s,l:o.l}),i({h:(t+180)%360,s:o.s,l:o.l}),i({h:(t+270)%360,s:o.s,l:o.l})]}function F(e){var o=i(e).toHsl(),t=o.h;return[i(e),i({h:(t+72)%360,s:o.s,l:o.l}),i({h:(t+216)%360,s:o.s,l:o.l})]}function A(e,o,t){o=o||6,t=t||30;var r=i(e).toHsl(),a=360/t,n=[i(e)];for(r.h=(r.h-(a*o>>1)+720)%360;--o;)r.h=(r.h+a)%360,n.push(i(r));return n}function R(e,o){o=o||6;for(var t=i(e).toHsv(),r=t.h,a=t.s,n=t.v,s=[],l=1/o;o--;)s.push(i({h:r,s:a,v:n})),n=(n+l)%1;return s}function S(e){var o={};for(var t in e)e.hasOwnProperty(t)&&(o[e[t]]=t);return o}function M(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function N(e,o){L(e)&&(e="100%");var t=E(e);return e=q(o,Y(0,parseFloat(e))),t&&(e=parseInt(e*o,10)/100),a.abs(e-o)<1e-6?1:e%o/parseFloat(o)}function P(e){return q(1,Y(0,e))}function j(e){return parseInt(e,16)}function L(e){return"string"==typeof e&&e.indexOf(".")!=-1&&1===parseFloat(e)}function E(e){return"string"==typeof e&&e.indexOf("%")!=-1}function H(e){return 1==e.length?"0"+e:""+e}function O(e){return e<=1&&(e=100*e+"%"),e}function z(e){return a.round(255*parseFloat(e)).toString(16)}function B(e){return j(e)/255}function D(e){return!!Z.CSS_UNIT.exec(e)}function I(e){e=e.replace($,"").replace(U,"").toLowerCase();var o=!1;if(G[e])e=G[e],o=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=Z.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=Z.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Z.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=Z.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Z.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=Z.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Z.hex8.exec(e))?{r:j(t[1]),g:j(t[2]),b:j(t[3]),a:B(t[4]),format:o?"name":"hex8"}:(t=Z.hex6.exec(e))?{r:j(t[1]),g:j(t[2]),b:j(t[3]),format:o?"name":"hex"}:(t=Z.hex4.exec(e))?{r:j(t[1]+""+t[1]),g:j(t[2]+""+t[2]),b:j(t[3]+""+t[3]),a:B(t[4]+""+t[4]),format:o?"name":"hex8"}:!!(t=Z.hex3.exec(e))&&{r:j(t[1]+""+t[1]),g:j(t[2]+""+t[2]),b:j(t[3]+""+t[3]),format:o?"name":"hex"}}function T(e){var o,t;return e=e||{level:"AA",size:"small"},o=(e.level||"AA").toUpperCase(),t=(e.size||"small").toLowerCase(),"AA"!==o&&"AAA"!==o&&(o="AA"),"small"!==t&&"large"!==t&&(t="small"),{level:o,size:t}}var $=/^\s+/,U=/\s+$/,V=0,X=a.round,q=a.min,Y=a.max,W=a.random;i.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,o,t,r,i,n,s=this.toRgb();return e=s.r/255,o=s.g/255,t=s.b/255,r=e<=.03928?e/12.92:a.pow((e+.055)/1.055,2.4),i=o<=.03928?o/12.92:a.pow((o+.055)/1.055,2.4),n=t<=.03928?t/12.92:a.pow((t+.055)/1.055,2.4),.2126*r+.7152*i+.0722*n},setAlpha:function(e){return this._a=M(e),this._roundA=X(100*this._a)/100,this},toHsv:function(){var e=u(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=u(this._r,this._g,this._b),o=X(360*e.h),t=X(100*e.s),r=X(100*e.v);return 1==this._a?"hsv("+o+", "+t+"%, "+r+"%)":"hsva("+o+", "+t+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=l(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=l(this._r,this._g,this._b),o=X(360*e.h),t=X(100*e.s),r=X(100*e.l);return 1==this._a?"hsl("+o+", "+t+"%, "+r+"%)":"hsla("+o+", "+t+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return h(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return f(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:X(this._r),g:X(this._g),b:X(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+X(this._r)+", "+X(this._g)+", "+X(this._b)+")":"rgba("+X(this._r)+", "+X(this._g)+", "+X(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:X(100*N(this._r,255))+"%",g:X(100*N(this._g,255))+"%",b:X(100*N(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+X(100*N(this._r,255))+"%, "+X(100*N(this._g,255))+"%, "+X(100*N(this._b,255))+"%)":"rgba("+X(100*N(this._r,255))+"%, "+X(100*N(this._g,255))+"%, "+X(100*N(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(K[h(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var o="#"+_(this._r,this._g,this._b,this._a),t=o,r=this._gradientType?"GradientType = 1, ":"";if(e){var a=i(e);t="#"+_(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+o+",endColorstr="+t+")"},toString:function(e){var o=!!e;e=e||this._format;var t=!1,r=this._a<1&&this._a>=0,a=!o&&r&&("hex"===e||"hex6"===e||"hex3"===e||"hex4"===e||"hex8"===e||"name"===e);return a?"name"===e&&0===this._a?this.toName():this.toRgbString():("rgb"===e&&(t=this.toRgbString()),"prgb"===e&&(t=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(t=this.toHexString()),"hex3"===e&&(t=this.toHexString(!0)),"hex4"===e&&(t=this.toHex8String(!0)),"hex8"===e&&(t=this.toHex8String()),"name"===e&&(t=this.toName()),"hsl"===e&&(t=this.toHslString()),"hsv"===e&&(t=this.toHsvString()),t||this.toHexString())},clone:function(){return i(this.toString())},_applyModification:function(e,o){var t=e.apply(null,[this].concat([].slice.call(o)));return this._r=t._r,this._g=t._g,this._b=t._b,this.setAlpha(t._a),this},lighten:function(){return this._applyModification(b,arguments)},brighten:function(){return this._applyModification(m,arguments)},darken:function(){return this._applyModification(x,arguments)},desaturate:function(){return this._applyModification(p,arguments)},saturate:function(){return this._applyModification(v,arguments)},greyscale:function(){return this._applyModification(g,arguments)},spin:function(){return this._applyModification(w,arguments)},_applyCombination:function(e,o){return e.apply(null,[this].concat([].slice.call(o)))},analogous:function(){return this._applyCombination(A,arguments)},complement:function(){return this._applyCombination(C,arguments)},monochromatic:function(){return this._applyCombination(R,arguments)},splitcomplement:function(){return this._applyCombination(F,arguments)},triad:function(){return this._applyCombination(y,arguments)},tetrad:function(){return this._applyCombination(k,arguments)}},i.fromRatio=function(e,o){if("object"==typeof e){var t={};for(var r in e)e.hasOwnProperty(r)&&("a"===r?t[r]=e[r]:t[r]=O(e[r]));e=t}return i(e,o)},i.equals=function(e,o){return!(!e||!o)&&i(e).toRgbString()==i(o).toRgbString()},i.random=function(){return i.fromRatio({r:W(),g:W(),b:W()})},i.mix=function(e,o,t){t=0===t?0:t||50;var r=i(e).toRgb(),a=i(o).toRgb(),n=t/100,s={r:(a.r-r.r)*n+r.r,g:(a.g-r.g)*n+r.g,b:(a.b-r.b)*n+r.b,a:(a.a-r.a)*n+r.a};return i(s)},i.readability=function(e,o){var t=i(e),r=i(o);return(a.max(t.getLuminance(),r.getLuminance())+.05)/(a.min(t.getLuminance(),r.getLuminance())+.05)},i.isReadable=function(e,o,t){var r,a,n=i.readability(e,o);switch(a=!1,r=T(t),r.level+r.size){case"AAsmall":case"AAAlarge":a=n>=4.5;break;case"AAlarge":a=n>=3;break;case"AAAsmall":a=n>=7}return a},i.mostReadable=function(e,o,t){var r,a,n,s,l=null,c=0;t=t||{},a=t.includeFallbackColors,n=t.level,s=t.size;for(var u=0;u<o.length;u++)r=i.readability(e,o[u]),r>c&&(c=r,l=i(o[u]));return i.isReadable(e,l,{level:n,size:s})||!a?l:(t.includeFallbackColors=!1,i.mostReadable(e,["#fff","#000"],t))};var G=i.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},K=i.hexNames=S(G),Z=function(){var e="[-\\+]?\\d+%?",o="[-\\+]?\\d*\\.\\d+%?",t="(?:"+o+")|(?:"+e+")",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",a="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+a),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+a),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+a),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();"undefined"!=typeof e&&e.exports?e.exports=i:(r=function(){return i}.call(o,t,o,e),!(void 0!==r&&(e.exports=r)))}(Math)},function(e,o,t){var r,a;t(64),r=t(9);var i=t(52);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(55),r=t(10);var i=t(43);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(59),r=t(11);var i=t(47);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(62),r=t(12);var i=t(50);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(63),r=t(13);var i=t(51);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(60),r=t(14);var i=t(48);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(61),r=t(15);var i=t(49);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__compact"},[_c("ul",{staticClass:"vue-color__compact__colors"},_l(defaultColors,function(e){return _c("li",{staticClass:"vue-color__compact__color-item","class":{"vue-color__compact__color-item--white":"#FFFFFF"===e},style:{background:e},on:{click:function(o){handlerClick(e)}}},[_c("div",{directives:[{name:"show",rawName:"v-show",value:e===pick,expression:"c === pick"}],staticClass:"vue-color__compact__dot"})])})),_v(" ")])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__editable-input"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:val,expression:"val"}],staticClass:"vue-color__editable-input__input",domProps:{value:_s(val)},on:{keydown:handleKeyDown,input:[function(e){e.target.composing||(val=e.target.value)},update]}}),_v(" "),_c("span",{staticClass:"vue-color__editable-input__label"},[_v(_s(label))])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{"class":["vue-color__c-hue",directionClass]},[_c("div",{ref:"container",staticClass:"vue-color__c-hue__container",on:{mousedown:handleMouseDown,touchmove:handleChange,touchstart:handleChange}},[_c("div",{staticClass:"vue-color__c-hue__pointer",style:{top:pointerTop,left:pointerLeft}},[_c("div",{staticClass:"vue-color__c-hue__picker"})])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{ref:"container",staticClass:"vue-color__saturation",style:{background:bgColor},on:{mousedown:handleMouseDown}},[_c("div",{staticClass:"vue-color__saturation--white"}),_v(" "),_c("div",{staticClass:"vue-color__saturation--black"}),_v(" "),_c("div",{staticClass:"vue-color__saturation--pointer",style:{top:pointerTop,left:pointerLeft}},[_c("div",{staticClass:"vue-color__saturation--circle"})])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__material"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hex,expression:"colors.hex"}],staticClass:"vue-color__material__hex",style:{borderColor:colors.hex},attrs:{label:"hex"},domProps:{value:colors.hex},on:{"on-change":onChange,input:function(e){colors.hex=e}}}),_v(" "),_c("div",{staticClass:"vue-color__material__split"},[_c("div",{staticClass:"vue-color__material__third"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.r,expression:"colors.rgba.r"}],attrs:{label:"r"},domProps:{value:colors.rgba.r},on:{"on-change":onChange,input:function(e){colors.rgba.r=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__material__third"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.g,expression:"colors.rgba.g"}],attrs:{label:"g"},domProps:{value:colors.rgba.g},on:{"on-change":onChange,input:function(e){colors.rgba.g=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__material__third"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.b,expression:"colors.rgba.b"}],attrs:{label:"b"},domProps:{value:colors.rgba.b},on:{"on-change":onChange,input:function(e){colors.rgba.b=e}}})])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__slider"},[_c("div",{staticClass:"vue-color__slider__hue-warp"},[_c("hue",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":hueChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__slider__swatches"},_l(swatches,function(e,o){return _c("div",{staticClass:"vue-color__slider__swatch",attrs:{"data-index":o},on:{click:function(t){handleSwClick(o,e)}}},[_c("div",{staticClass:"vue-color__slider__swatch-picker","class":{"vue-color__slider__swatch-picker--active":e==activeOffset},style:{background:"hsl("+colors.hsl.h+", 50%, "+100*e+"%)"}})])}))])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__swatches",attrs:{"data-pick":pick}},[_c("div",{staticClass:"vue-color__swatches__box"},_l(defaultColors,function(e){return _c("div",{staticClass:"vue-color__swatches__color-group"},_l(e,function(e){return _c("div",{staticClass:"vue-color__swatches__color-it",style:{background:e},attrs:{"data-color":e},on:{click:function(o){handlerClick(e)}}},[_c("div",{directives:[{name:"show",rawName:"v-show",value:e==pick,expression:"c == pick"}],staticClass:"vue-color__swatches__pick"},[_c("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[_c("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})])])])}))}))])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-colors__photoshop"},[_c("div",{staticClass:"vue-colors__photoshop__head"},[_v(_s(head))]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__body"},[_c("div",{staticClass:"vue-colors__photoshop__saturation-wrap"},[_c("saturation",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__hue-wrap"},[_c("hue",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],attrs:{direction:"vertical"},domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}},[_c("div",{staticClass:"vue-colors__photoshop__hue-pointer"},[_c("i",{staticClass:"vue-colors__photoshop__hue-pointer--left"}),_c("i",{staticClass:"vue-colors__photoshop__hue-pointer--right"})])])]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__controls"},[_c("div",{staticClass:"vue-colors__photoshop__previews"},[_c("div",{staticClass:"vue-colors__photoshop__previews__label"},[_v("new")]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__previews__swatches"},[_c("div",{staticClass:"vue-colors__photoshop__previews__pr-color",style:{background:colors.hex}}),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__previews__pr-color",style:{background:currentColor}})]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__previews__label"},[_v("current")])]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__actions"},[_c("div",{staticClass:"vue-colors__photoshop__ac-btn",on:{click:handleAccept}},[_v("OK")]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__ac-btn",on:{click:handleCancel}},[_v("Cancel")]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__fields"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.h,expression:"colors.hsl.h"}],attrs:{label:"h"},domProps:{value:colors.hsl.h},on:{"on-change":inputChange,input:function(e){colors.hsl.h=e}}}),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.s,expression:"colors.hsl.s"}],attrs:{label:"s"},domProps:{value:colors.hsl.s},on:{"on-change":inputChange,input:function(e){colors.hsl.s=e}}}),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.l,expression:"colors.hsl.l"}],attrs:{label:"v"},domProps:{value:colors.hsl.l},on:{"on-change":inputChange,input:function(e){colors.hsl.l=e}}}),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__fields__divider"}),_v(" "),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.r,expression:"colors.rgba.r"}],attrs:{label:"r"},domProps:{value:colors.rgba.r},on:{"on-change":inputChange,input:function(e){colors.rgba.r=e}}}),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.g,expression:"colors.rgba.g"}],attrs:{label:"g"},domProps:{value:colors.rgba.g},on:{"on-change":inputChange,input:function(e){colors.rgba.g=e}}}),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.b,expression:"colors.rgba.b"}],attrs:{label:"b"},domProps:{value:colors.rgba.b},on:{"on-change":inputChange,input:function(e){colors.rgba.b=e}}}),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__fields__divider"}),_v(" "),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hex,expression:"colors.hex"}],staticClass:"vue-colors__photoshop__fields__hex",attrs:{label:"#"},domProps:{value:colors.hex},on:{"on-change":inputChange,input:function(e){colors.hex=e}}})])])])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__sketch"},[_c("div",{staticClass:"vue-color__sketch__saturation-wrap"},[_c("saturation",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__controls"},[_c("div",{staticClass:"vue-color__sketch__sliders"},[_c("div",{staticClass:"vue-color__sketch__hue-wrap"},[_c("hue",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__alpha-wrap"},[_c("alpha",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})])]),_v(" "),_c("div",{staticClass:"vue-color__sketch__color-wrap"},[_c("div",{staticClass:"vue-color__sketch__active-color",style:{background:activeColor}})])]),_v(" "),_c("div",{staticClass:"vue-color__sketch__field"},[_c("div",{staticClass:"vue-color__sketch__field--double"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hex,expression:"colors.hex"}],attrs:{label:"hex"},domProps:{value:colors.hex
},on:{"on-change":inputChange,input:function(e){colors.hex=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__field--single"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.r,expression:"colors.rgba.r"}],attrs:{label:"r"},domProps:{value:colors.rgba.r},on:{"on-change":inputChange,input:function(e){colors.rgba.r=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__field--single"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.g,expression:"colors.rgba.g"}],attrs:{label:"g"},domProps:{value:colors.rgba.g},on:{"on-change":inputChange,input:function(e){colors.rgba.g=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__field--single"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.b,expression:"colors.rgba.b"}],attrs:{label:"b"},domProps:{value:colors.rgba.b},on:{"on-change":inputChange,input:function(e){colors.rgba.b=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__field--single"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.a,expression:"colors.a"}],attrs:{label:"a","arrow-offset":.01,max:1},domProps:{value:colors.a},on:{"on-change":inputChange,input:function(e){colors.a=e}}})])]),_v(" "),_c("div",{staticClass:"vue-color__sketch__presets"},_l(presetColors,function(e){return _c("div",{staticClass:"vue-color__sketch__presets-color",style:{background:e},on:{click:function(o){handlePreset(e)}}})}))])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__chrome"},[_c("div",{staticClass:"vue-color__chrome__saturation-wrap"},[_c("saturation",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__chrome-body"},[_c("div",{staticClass:"vue-color__chrome__controls"},[_c("div",{staticClass:"vue-color__chrome__color-wrap"},[_c("div",{staticClass:"vue-color__chrome__active-color",style:{background:activeColor}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__sliders"},[_c("div",{staticClass:"vue-color__chrome__hue-wrap"},[_c("hue",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__alpha-wrap"},[_c("alpha",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})])])]),_v(" "),_c("div",{staticClass:"vue-color__chrome__fields-wrap"},[_c("div",{directives:[{name:"show",rawName:"v-show",value:0===fieldsIndex,expression:"fieldsIndex === 0"}],staticClass:"vue-color__chrome__fields"},[_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hex,expression:"colors.hex"}],attrs:{label:"hex"},domProps:{value:colors.hex},on:{"on-change":inputChange,input:function(e){colors.hex=e}}})])]),_v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:1===fieldsIndex,expression:"fieldsIndex === 1"}],staticClass:"vue-color__chrome__fields"},[_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.r,expression:"colors.rgba.r"}],attrs:{label:"r"},domProps:{value:colors.rgba.r},on:{"on-change":inputChange,input:function(e){colors.rgba.r=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.g,expression:"colors.rgba.g"}],attrs:{label:"g"},domProps:{value:colors.rgba.g},on:{"on-change":inputChange,input:function(e){colors.rgba.g=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.b,expression:"colors.rgba.b"}],attrs:{label:"b"},domProps:{value:colors.rgba.b},on:{"on-change":inputChange,input:function(e){colors.rgba.b=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.a,expression:"colors.a"}],attrs:{label:"a","arrow-offset":.01,max:1},domProps:{value:colors.a},on:{"on-change":inputChange,input:function(e){colors.a=e}}})])]),_v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:2===fieldsIndex,expression:"fieldsIndex === 2"}],staticClass:"vue-color__chrome__fields"},[_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.h,expression:"colors.hsl.h"}],attrs:{label:"h"},domProps:{value:colors.hsl.h},on:{"on-change":inputChange,input:function(e){colors.hsl.h=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.s,expression:"colors.hsl.s"}],attrs:{label:"s"},domProps:{value:colors.hsl.s},on:{"on-change":inputChange,input:function(e){colors.hsl.s=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.l,expression:"colors.hsl.l"}],attrs:{label:"l"},domProps:{value:colors.hsl.l},on:{"on-change":inputChange,input:function(e){colors.hsl.l=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.a,expression:"colors.a"}],attrs:{label:"a","arrow-offset":.01,max:1},domProps:{value:colors.a},on:{"on-change":inputChange,input:function(e){colors.a=e}}})])]),_v(" "),_v(" "),_c("div",{staticClass:"vue-color__chrome__toggle-btn",on:{click:toggleViews}},[_c("div",{staticClass:"vue-color__chrome__icon"},[_c("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"},on:{mouseover:showHighlight,mouseenter:showHighlight,mouseout:hideHighlight}},[_c("path",{attrs:{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}})])]),_v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:highlight,expression:"highlight"}],staticClass:"vue-color__chrome__icon-highlight"})]),_v(" ")])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__c-alpha"},[_c("div",{staticClass:"vue-color__c-alpha__checkboard-wrap"},[_c("checkboard")]),_v(" "),_c("div",{staticClass:"vue-color__c-alpha__gradient",style:{background:gradientColor}}),_v(" "),_c("div",{ref:"container",staticClass:"vue-color__c-alpha__container",on:{mousedown:handleMouseDown,touchmove:handleChange,touchstart:handleChange}},[_c("div",{staticClass:"vue-color__c-alpha__pointer",style:{left:100*colors.a+"%"}},[_c("div",{staticClass:"vue-color__c-alpha__picker"})])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__c-checkerboard",style:{background:bgStyle}})},staticRenderFns:[]}},function(e,o,t){var r=t(21);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(22);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(23);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(24);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(25);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(26);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(27);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(28);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(29);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(30);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(31);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(32);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)}])});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 283:
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

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(137);

var _inspectorSketch = __webpack_require__(337);

var _inspectorSketch2 = _interopRequireDefault(_inspectorSketch);

var _TimeConverter = __webpack_require__(234);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _collide = __webpack_require__(257);

var _collide2 = _interopRequireDefault(_collide);

var _uuid = __webpack_require__(244);

var _uuid2 = _interopRequireDefault(_uuid);

var _Action = __webpack_require__(249);

var _Action2 = _interopRequireDefault(_Action);

var _tags = __webpack_require__(394);

var _tags2 = _interopRequireDefault(_tags);

var _commonService = __webpack_require__(138);

var _commonService2 = _interopRequireDefault(_commonService);

var _scoutings = __webpack_require__(227);

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

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(137);

var _timelineSketch = __webpack_require__(339);

var _timelineSketch2 = _interopRequireDefault(_timelineSketch);

var _scoutings = __webpack_require__(227);

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

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _player = __webpack_require__(382);

var _player2 = _interopRequireDefault(_player);

var _Touch = __webpack_require__(278);

var _Touch2 = _interopRequireDefault(_Touch);

var _mockstate = __webpack_require__(137);

var _actions = __webpack_require__(340);

var _store = __webpack_require__(341);

var _veeValidate = __webpack_require__(7);

var _veeValidate2 = _interopRequireDefault(_veeValidate);

var _newTouchForm = __webpack_require__(390);

var _newTouchForm2 = _interopRequireDefault(_newTouchForm);

var _editTouchForm = __webpack_require__(389);

var _editTouchForm2 = _interopRequireDefault(_editTouchForm);

var _touchesList = __webpack_require__(391);

var _touchesList2 = _interopRequireDefault(_touchesList);

var _timeline = __webpack_require__(388);

var _timeline2 = _interopRequireDefault(_timeline);

var _inspector = __webpack_require__(387);

var _inspector2 = _interopRequireDefault(_inspector);

var _globalTimeline = __webpack_require__(556);

var _globalTimeline2 = _interopRequireDefault(_globalTimeline);

var _collide = __webpack_require__(257);

var _collide2 = _interopRequireDefault(_collide);

var _pageHeader = __webpack_require__(196);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _scoutingService = __webpack_require__(243);

var _scoutingService2 = _interopRequireDefault(_scoutingService);

var _scoutingTouchService = __webpack_require__(344);

var _scoutingTouchService2 = _interopRequireDefault(_scoutingTouchService);

var _Action = __webpack_require__(249);

var _Action2 = _interopRequireDefault(_Action);

var _uuid = __webpack_require__(244);

var _uuid2 = _interopRequireDefault(_uuid);

var _errorPresenter = __webpack_require__(348);

var _errorPresenter2 = _interopRequireDefault(_errorPresenter);

var _scoutings = __webpack_require__(227);

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

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(137);

var _vueColor = __webpack_require__(281);

var _TimeConverter = __webpack_require__(234);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _collide = __webpack_require__(257);

var _collide2 = _interopRequireDefault(_collide);

var _scoutings = __webpack_require__(227);

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

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(137);

var _vueColor = __webpack_require__(281);

var _TimeConverter = __webpack_require__(234);

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

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(137);

var _TimeConverter = __webpack_require__(234);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _scoutings = __webpack_require__(227);

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

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tagDropdown = __webpack_require__(393);

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

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uuid = __webpack_require__(244);

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

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tag = __webpack_require__(392);

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

/***/ 330:
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

/***/ 331:
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

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeConverter = __webpack_require__(234);

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

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeConverter = __webpack_require__(234);

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

/***/ 334:
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

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeConverter = __webpack_require__(234);

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

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeConverter = __webpack_require__(234);

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

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sketch;

var _mockstate = __webpack_require__(137);

var _InspectorStage = __webpack_require__(334);

var _InspectorStage2 = _interopRequireDefault(_InspectorStage);

var _InspectorTimeline = __webpack_require__(335);

var _InspectorTimeline2 = _interopRequireDefault(_InspectorTimeline);

var _InspectorVideoTimeMarker = __webpack_require__(336);

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

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Touch = __webpack_require__(278);

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

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sketch;

var _Stage = __webpack_require__(331);

var _Stage2 = _interopRequireDefault(_Stage);

var _Timeline = __webpack_require__(332);

var _Timeline2 = _interopRequireDefault(_Timeline);

var _TouchManager = __webpack_require__(330);

var _TouchManager2 = _interopRequireDefault(_TouchManager);

var _VideoTimeMarker = __webpack_require__(333);

var _VideoTimeMarker2 = _interopRequireDefault(_VideoTimeMarker);

var _touchesSpec = __webpack_require__(338);

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

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.actions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mockstate = __webpack_require__(137);

var _globalTimelineActions = __webpack_require__(553);

var _inspectorActions = __webpack_require__(554);

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

/***/ 341:
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

/***/ 344:
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

/***/ 348:
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

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.inspector-info {\n  margin-left: 10px;\n}\n.inspector-info .inspector-info--title {\n    margin: 0 10px;\n}\n.athlete-menu .dropdown {\n  display: inline-block !important;\n}\n.athlete-menu .athlete-menu-title {\n  border-top: 1px solid #d3e0e9;\n  border-left: 1px solid #d3e0e9;\n  border-right: 1px solid #d3e0e9;\n  padding: 0 10px;\n}\n.athlete-menu .athlete-menu-left {\n  border-left: 1px solid #d3e0e9;\n  border-right: 1px solid #d3e0e9;\n  padding-bottom: 5px;\n}\n.athlete-menu .athlete-menu-right {\n  border-right: 1px solid #d3e0e9;\n  padding-bottom: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.tags a {\n  border-radius: 0 !important;\n  margin: 0 !important;\n}\n.close {\n  color: #ffffff !important;\n  opacity: 0.8 !important;\n}\n.tags-list {\n  display: block;\n  width: 100%;\n}\n.tags-list .label {\n  padding: 10px;\n  font-size: 12px;\n  margin-left: 5px;\n  margin-top: 5px;\n}\n.tags-list .label .close {\n    font-size: 16px;\n    margin-left: 5px;\n}\n.tags-list div,\n.gu-mirror {\n  -webkit-transition: opacity 0.4s ease-in-out;\n  transition: opacity 0.4s ease-in-out;\n}\n.tags-list div .label,\n  .gu-mirror .label {\n    padding: 10px;\n    line-height: 1.4;\n    font-size: 12px;\n    margin-left: 5px;\n    margin-top: 5px;\n}\n.tags-list div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab;\n  display: inline-block;\n}\n.tags-list div:last-child {\n  margin-bottom: 0;\n}\n.gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n.gu-mirror .label .close {\n    display: none;\n}\n.gu-hide {\n  display: none !important;\n}\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\n.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20);\n}\n.gu-transit .close {\n    display: none;\n}\n.tags-list .ex-moved {\n  background-color: #e74c3c;\n}\n.tags-list.ex-over {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move;\n}\n", ""]);

// exports


/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n#video-canvas {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    padding-right: 15px;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/global/video/player.vue?392657a0"],"names":[],"mappings":";AAWA;IACA,YAAA;IACA,aAAA;IACA,mBAAA;IACA,OAAA;IACA,oBAAA;CACA","file":"player.vue","sourcesContent":["<template>\n    <div>\n        <video ref=\"player\"\n               class=\"video-js vjs-default-skin\"\n               controls preload=\"auto\"\n               :poster=\"poster\"\n               :data-setup=\"strSource\"\n        ></video>\n    </div>\n</template>\n<style>\n    #video-canvas {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        padding-right: 15px;\n    }\n</style>\n<script>\n    import {dispatch, getState} from 'mockstate';\n\n    export default{\n        data(){\n            return {\n                player: {}\n            }\n        },\n        props: {\n            source: {\n                type: Object\n            },\n            poster: {\n                type: String\n            },\n            offset: {\n                type: Object,\n                default: function () {\n                    return {\n                        start: false,\n                        end: false\n                    }\n                }\n            }\n        },\n        components: {},\n        computed: {\n            strSource(){\n                return JSON.stringify(this.source)\n            }\n        },\n        mounted(){\n            this.initPlayer(this.source);\n        },\n        methods: {\n            api(){\n                return this.player\n            },\n            initPlayer(source){\n                var self = this;\n                console.log(self.source);\n                let config = {\n                    fluid: true,\n                    source: source.sources[0],\n                    techOrder: ['youtube'],\n                    playbackRates: [0.25, 0.5, 1, 1.5, 2],\n                    plugins: {\n                        disableProgress: {},\n                        abLoopPlugin: {\n                            enabled: false,\n                            loopIfBeforeStart: false, //allow video to play normally before the loop section? defaults to true\n                            looopIfAfterEnd: true, // defaults to true\n                            pauseAfterLooping: false,       //if true, after looping video will pause. Defaults to false\n                            pauseBeforeLooping: false,      //if true, before looping video will pause. Defaults to false\n                            createButtons: false,  //defaults to true\n                        }\n                    }\n                };\n                if (this.offset.start) {\n                    config.plugins.dncoffset = {\n                        startOffset: this.offset.start,\n                        endOffset: this.offset.end\n                    }\n                }\n                this.player = videojs(this.$refs.player, config);\n                dispatch('setPlayer', this.player);\n                this.player.play();\n                this.player.on('timeupdate', function durationSetter(event) {\n                    var state = getState('*');\n                    if (!state.player.duration) {\n                        dispatch('setDuration', state.player.instance.duration());\n                        dispatch('setZoom', 1);\n                        if (state.player.duration) {\n                            dispatch('playerReady', true);\n                            state.player.instance.off('timeupdate', durationSetter)\n                        }\n                    } else {\n                        dispatch('playerReady', true);\n                        state.player.instance.off('timeupdate', durationSetter)\n                    }\n                });\n                this.player.playbackRate(1);\n                this.player.on('timeupdate', ()=> {\n                    dispatch('setCurrentTime', this.player.currentTime());\n                });\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.tag {\n    display: inline-block;\n    color: #717171;\n    background: #FFF;\n    box-shadow: 0 1px 1px 0 rgba(180, 180, 180, 0.1);\n    -webkit-transition: all .1s ease-in-out;\n    transition: all .1s ease-in-out;\n    border-radius: 2px;\n    margin: 0 3px 6px 0;\n    padding: 5px 10px;\n    text-decoration: none;\n    cursor: pointer;\n}\n.tags .tag:hover {\n    border-color: #08C;\n}\n.tags .tag.primary {\n    color: #FFF;\n    background-color: #428BCA;\n    border-color: #357EBD\n}\n.tags .tag.success {\n    color: #FFF;\n    background-color: #5CB85C;\n    border-color: #4CAE4C\n}\n.tags .tag.info {\n    color: #FFF;\n    background-color: #5BC0DE;\n    border-color: #46B8DA\n}\n.tags .tag.warning {\n    color: #FFF;\n    background-color: #F0AD4E;\n    border-color: #EEA236\n}\n.tags .tag.danger {\n    color: #FFF;\n    background-color: #D9534F;\n    border-color: #D43F3A\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/scouting/touches/tags/tag.vue?024a0920"],"names":[],"mappings":";AAOA;IACA,sBAAA;IACA,eAAA;IACA,iBAAA;IAEA,iDAAA;IACA,wCAAA;IAIA,gCAAA;IACA,mBAAA;IACA,oBAAA;IACA,kBAAA;IACA,sBAAA;IACA,gBAAA;CACA;AAEA;IACA,mBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA","file":"tag.vue","sourcesContent":["<template>\n    <tag-dropdown v-if=\"tag.dropdown\" v-on:option-clicked=\"dropdownOptionClicked\" :tag=\"tag\"></tag-dropdown>\n    <div v-else class=\"tag-dropdown\">\n        <a class=\" btn tag\" v-on:click.prevent=\"tagClicked\" :class=\"'bg-'+tag.color\">{{tag.name}}</a>\n    </div>\n</template>\n<style>\n    .tag {\n        display: inline-block;\n        color: #717171;\n        background: #FFF;\n        -webkit-box-shadow: 0 1px 1px 0 rgba(180, 180, 180, 0.1);\n        box-shadow: 0 1px 1px 0 rgba(180, 180, 180, 0.1);\n        -webkit-transition: all .1s ease-in-out;\n        -moz-transition: all .1s ease-in-out;\n        -o-transition: all .1s ease-in-out;\n        -ms-transition: all .1s ease-in-out;\n        transition: all .1s ease-in-out;\n        border-radius: 2px;\n        margin: 0 3px 6px 0;\n        padding: 5px 10px;\n        text-decoration: none;\n        cursor: pointer;\n    }\n\n    .tags .tag:hover {\n        border-color: #08C;\n    }\n\n    .tags .tag.primary {\n        color: #FFF;\n        background-color: #428BCA;\n        border-color: #357EBD\n    }\n\n    .tags .tag.success {\n        color: #FFF;\n        background-color: #5CB85C;\n        border-color: #4CAE4C\n    }\n\n    .tags .tag.info {\n        color: #FFF;\n        background-color: #5BC0DE;\n        border-color: #46B8DA\n    }\n\n    .tags .tag.warning {\n        color: #FFF;\n        background-color: #F0AD4E;\n        border-color: #EEA236\n    }\n\n    .tags .tag.danger {\n        color: #FFF;\n        background-color: #D9534F;\n        border-color: #D43F3A\n    }\n</style>\n<script>\n    import tagDropdown from './tagDropdown.vue'\n\n    export default{\n        props: {\n            tag: {}\n        },\n        components: {\n            tagDropdown\n        },\n        methods: {\n            dropdownOptionClicked(tag){\n                let tagDropdown = _.cloneDeep(tag);\n                this.$emit('tag-clicked', tagDropdown)\n            },\n            tagClicked(){\n                let tag = _.cloneDeep(this.tag);\n                this.$emit('tag-clicked', tag)\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"touchesList.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"newTouchForm.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.vue-color__compact {\n    width: 100% !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/scouting/touches/forms/newTouchForm.vue?3cf04dd9"],"names":[],"mappings":";AA6SA;IACA,uBAAA;CACA","file":"newTouchForm.vue","sourcesContent":["<template>\n    <div>\n        <form action=\"\" v-on:submit.prevent=\"onSubmit\" class=\"form-horizontal form-touch\" v-if=\"open\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.text') }\">\n                        <label for=\"new-title\" class=\"control-label col-xs-2\">\n                            Title\n                        </label>\n                        <div class=\"col-xs-10\">\n\n                            <input id=\"new-title\" name=\"new-title\" type=\"text\"\n                                   v-validate.initial=\"touch.text\"\n                                   data-rules=\"required\"\n                                   data-as=\"Title\"\n                                   class=\"form-control\"\n                                   placeholder=\"Title\"\n                                   v-model=\"touch.text\">\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touch.text')\">{{ errors.first('touch.text') }}</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label for=\"new-title\" class=\"control-label col-xs-2\">\n                            Color\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <compact-picker v-model=\"touch.color\" @change-color=\"onChangeColor\"></compact-picker>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.start') }\">\n                        <label for=\"new-start\" class=\"control-label col-xs-2\">\n                            Start (sec)\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-start\" name=\"new-start\" type=\"text\"\n                                           v-validate.initial=\"touch.start\"\n                                           data-rules=\"required|numeric\"\n                                           data-as=\"Start\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           v-model=\"touch.start\">\n                                </div>\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-start-fmt\" name=\"new-start-fmt\" type=\"text\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           disabled\n                                           v-model=\"startFmt\">\n                                </div>\n                            </div>\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touch.start')\">{{ errors.first('touch.start') }}</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.end') }\">\n                        <label for=\"new-end\" class=\"control-label col-xs-2\">\n                            End(sec)\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-end\" name=\"new-end\" type=\"text\"\n                                           v-validate.initial=\"touch.end\"\n                                           data-rules=\"required|numeric\"\n                                           data-as=\"End\"\n                                           class=\"form-control\"\n                                           placeholder=\"End\"\n                                           v-model=\"touch.end\">\n                                </div>\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-end-fmt\" name=\"new-end-fmt\" type=\"text\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           disabled\n                                           v-model=\"endFmt\">\n                                </div>\n                            </div>\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touch.end')\">{{ errors.first('touch.end') }}</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" v-if=\"collide\">\n                <div class=\"col-xs-12\">\n                    <div class=\"alert alert-danger\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n                        <h4><i class=\"icon fa fa-ban\"></i> Touches cant overlap!</h4>\n                        The touch that you want to add overlap with:\n                        <ul>\n                            <li v-for=\"touch in collideTouches\">\n                                <strong v-if=\"touch.previous.hasOwnProperty('id')\">{{touch.previous.text}}: that\n                                    starts\n                                    on {{toHHMMSS(touch.previous.start)}} an\n                                    ends on\n                                    {{toHHMMSS(touch.previous.end)}}</strong>\n                                <strong v-if=\"touch.current.hasOwnProperty('id')\">{{touch.current.text}}: that\n                                    starts on\n                                    {{toHHMMSS(touch.current.start)}} an\n                                    ends on\n                                    {{toHHMMSS(touch.current.end)}}</strong>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" v-if=\"endInvalid\">\n                <div class=\"col-xs-12\">\n                    <div class=\"alert alert-danger\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n                        <h4><i class=\"icon fa fa-ban\"></i> Validation Error!</h4>\n                        The end of the touch must be greater than the start\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 text-right\">\n                    <button type=\"submit\" class=\"btn btn-success\">Add Touch</button>\n                    <button class=\"btn btn-danger\" v-on:click.prevent=\"close\">Cancel</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</template>\n<style>\n\n</style>\n<script>\n    import {getState} from 'mockstate';\n    import {Compact} from 'vue-color';\n    import TimeConverter from '../sketch/components/utils/TimeConverter'\n    export default{\n        props: {\n            open: {},\n            initTouch: {\n                default: function () {\n                    return {\n                        initialized: false,\n                        text: null,\n                        start: 0,\n                        end: 100,\n                        color: {\n                            \"hsl\": {\"h\": 61.0762331838565, \"s\": 1, \"l\": 0.4372549019607843, \"a\": 1},\n                            \"hex\": \"#DBDF00\",\n                            \"rgba\": {\"r\": 219, \"g\": 223, \"b\": 0, \"a\": 1, \"alpha\": 50},\n                            \"hsv\": {\"h\": 61.0762331838565, \"s\": 1, \"v\": 0.8745098039215686, \"a\": 1},\n                        }\n                    }\n                }\n            },\n            duration: {},\n            start: {},\n            end: {}\n        },\n        watch: {\n            open(val){\n                this.touch = Object.assign({}, this.initTouch);\n            },\n            start(val){\n                this.touch.start = val;\n            },\n            end(val){\n                this.touch.end = val\n            },\n            'touch.start': function () {\n                this.checkCollide()\n            },\n            'touch.end': function () {\n                this.checkCollide();\n                this.endInvalid = !!(parseInt(this.touch.start) >= parseInt(this.touch.end) || parseInt(this.touch.end) > parseInt(this.duration));\n            }\n        },\n        data(){\n            return {\n                collide: false,\n                collideTouches: [],\n                endInvalid: false,\n                touch: {\n                    text: null,\n                    start: 0,\n                    end: 0,\n                    color: {\n                        rgba: {\n                            r: 25,\n                            g: 77,\n                            b: 51,\n                            a: 1\n                        },\n                    }\n                }\n            }\n        },\n        computed: {\n            startFmt(){\n                return TimeConverter.toHHMMSS(this.touch.start)\n            },\n            endFmt(){\n                return TimeConverter.toHHMMSS(this.touch.end)\n            },\n            validationEnd(){\n                return parseInt(this.touch.start) + 1;\n            }\n        },\n        components: {\n            'compact-picker': Compact,\n        },\n        methods: {\n            close(){\n                this.$emit('cancel-new-touch');\n            },\n            toHHMMSS(secs) {\n                return TimeConverter.toHHMMSS(secs)\n            },\n            onChangeColor(val){\n                this.touch.color = val\n            },\n            checkCollide(){\n                var touchs = getState('touchManager').touches.slice(0);\n                touchs.push(this.touch);\n                var overlap = this.overlap(touchs);\n                this.collide = overlap.overlap;\n                this.collideTouches = overlap.ranges;\n            },\n            overlap(touchs){\n                var sortedRanges = touchs.sort((previous, current) => {\n\n                    var previousTime = parseInt(previous.start);\n                    var currentTime = parseInt(current.start);\n\n                    // if the previous is earlier than the current\n                    if (previousTime < currentTime) {\n                        return -1;\n                    }\n\n                    // if the previous time is the same as the current time\n                    if (previousTime === currentTime) {\n                        return 0;\n                    }\n\n                    // if the previous time is later than the current time\n                    return 1;\n                });\n\n                // return the final results\n                return sortedRanges.reduce((result, current, idx, arr) => {\n                    // get the previous range\n                    if (idx === 0) {\n                        return result;\n                    }\n                    var previous = arr[idx - 1];\n\n                    // check for any overlap\n                    var previousEnd = parseInt(previous.end);\n                    var currentStart = parseInt(current.start);\n                    var overlap = (previousEnd >= currentStart);\n\n                    // store the result\n                    if (overlap) {\n                        // yes, there is overlap\n                        result.overlap = true;\n                        // store the specific ranges that overlap\n                        result.ranges.push({\n                            previous: previous,\n                            current: current\n                        })\n                    }\n\n                    return result;\n\n                    // seed the reduce\n                }, {overlap: false, ranges: []});\n            },\n            onSubmit(){\n                this.$validator.validateAll();\n                if (this.errors.any()) {\n\n                } else {\n                    this.endInvalid = !!(parseInt(this.touch.start) >= parseInt(this.touch.end) || parseInt(this.touch.end) > parseInt(Math.floor(this.$parent.$refs.player.api().duration())));\n                    if (!this.endInvalid) {\n                        if (!this.collide) {\n                            this.endInvalid = false;\n                            this.$emit('add-new-touch', this.touch);\n                        }\n                    }\n                }\n            }\n        }\n    }\n</script>\n<style>\n    .vue-color__compact {\n        width: 100% !important;\n    }\n</style>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.tag-dropdown {\n    display: inline-block !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/scouting/touches/tags/tagDropdown.vue?f44c862c"],"names":[],"mappings":";AAcA;IACA,iCAAA;CACA","file":"tagDropdown.vue","sourcesContent":["<template>\n    <div class=\"dropdown tag-dropdown\">\n        <a class=\"dropdown-toggle btn tag\" :class=\"'bg-'+tag.color\"\n           data-toggle=\"dropdown\" aria-expanded=\"false\" :id=\"id\">{{tag.name}}\n            <span class=\"fa fa-caret-down\"></span>\n        </a>\n        <ul class=\"dropdown-menu\" :aria-labelledby=\"id\">\n            <li v-for=\"opt in tag.options\">\n                <a href=\"#\" v-on:click.prevent=\"clickOpt(opt)\">{{opt.name}}</a>\n            </li>\n        </ul>\n    </div>\n</template>\n<style>\n    .tag-dropdown {\n        display: inline-block !important;\n    }\n</style>\n<script>\n    import uuid from 'base/mixins/uuid'\n    export default{\n        props: {\n            tag: {},\n        },\n        data(){\n            return {\n                id: ''\n            }\n        },\n        mixins: [uuid],\n        mounted(){\n            this.id = this.generateUUID();\n        },\n        methods: {\n            clickOpt(opt){\n                this.tag.option = opt;\n                this.$emit('option-clicked', this.tag)\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"editTouchForm.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.vue-color__compact {\n    width: 100% !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/scouting/touches/forms/editTouchForm.vue?f756ffb0"],"names":[],"mappings":";AAqQA;IACA,uBAAA;CACA","file":"editTouchForm.vue","sourcesContent":["<template>\n    <div>\n        <form action=\"\" v-on:submit.prevent=\"onSubmit\" class=\"form-horizontal form-touch\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touchtext') }\">\n                        <label for=\"new-title\" class=\"control-label col-xs-2\">\n                            {{$t('scoutings.title')}}\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <input id=\"new-title\"\n                                   name=\"touchtext\"\n                                   type=\"text\"\n                                   v-validate.initial\n                                   data-vv-rules=\"required\"\n                                   data-vv-as=\"Title\"\n                                   class=\"form-control\"\n                                   placeholder=\"Title\"\n                                   v-model=\"touch.text\">\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touchtext')\">{{ errors.first('touchtext') }}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label for=\"new-title\" class=\"control-label col-xs-2\">\n                            {{$t('scoutings.color')}}\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <compact-picker v-model=\"touch.color\" @change-color=\"onChangeColor\"></compact-picker>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touchstart') }\">\n                        <label for=\"new-start\" class=\"control-label col-xs-2\">\n                            {{$t('scoutings.start')}}\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-start\"\n                                           name=\"touchstart\"\n                                           type=\"text\"\n                                           v-validate.initial\n                                           data-vv-rules=\"required|numeric\"\n                                           data-vv-as=\"Start\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           v-model=\"touch.start\">\n                                </div>\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-start-fmt\" name=\"new-start-fmt\" type=\"text\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           disabled\n                                           v-model=\"startFmt\">\n                                </div>\n                            </div>\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touchstart')\">{{ errors.first('touchstart') }}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touchend') }\">\n                        <label for=\"new-end\" class=\"control-label col-xs-2\">\n                            {{$t('scoutings.end')}}\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-end\"\n                                           name=\"touchend\"\n                                           type=\"text\"\n                                           v-validate.initial\n                                           data-vv-rules=\"required|numeric\"\n                                           data-vv-as=\"End\"\n                                           class=\"form-control\"\n                                           placeholder=\"End\"\n                                           v-model=\"touch.end\">\n                                </div>\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-end-fmt\" name=\"new-end-fmt\" type=\"text\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           disabled\n                                           v-model=\"endFmt\">\n                                </div>\n                            </div>\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touchend')\">{{ errors.first('touchend') }}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" v-if=\"collide\">\n                <div class=\"col-xs-12\">\n                    <div class=\"alert alert-danger\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n                        <h4>\n                            <i class=\"icon fa fa-ban\"></i>\n                            {{$t('scoutings.touches_cant_overlap')}}\n                        </h4>\n                        {{$t('scoutings.touch_overlap_with')}}:\n                        <ul>\n                            <li v-for=\"collideTouch in collideTouches\">\n                                <strong v-if=\"collideTouch.previous.id != touch.id\">\n                                    {{$t('scoutings.touch_overlap_msg',{ title:\n                                    collideTouch.previous.text,start:toHHMMSS(collideTouch.previous.start),end:\n                                    toHHMMSS(collideTouch.previous.end)})}}\n                                </strong>\n                                <strong v-if=\"collideTouch.current.id != touch.id\">\n                                    {{$t('scoutings.touch_overlap_msg',{ title:\n                                    collideTouch.current.text,start:toHHMMSS(collideTouch.current.start),end:\n                                    toHHMMSS(collideTouch.current.end)})}}\n                                </strong>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" v-if=\"endInvalid\">\n                <div class=\"col-xs-12\">\n                    <div class=\"alert alert-danger\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n                        <h4>\n                            <i class=\"icon fa fa-ban\"></i>\n                            {{$t('scoutings.validation_error')}}\n                        </h4>\n                        {{$t('scoutings.validation_end_greater')}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 text-right\">\n                    <button type=\"submit\" class=\"btn btn-success\">{{$t('scoutings.save')}}</button>\n                    <button class=\"btn btn-danger\" v-on:click.prevent=\"close\">{{$t('scoutings.cancel')}}</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</template>\n<style>\n\n</style>\n<script>\n    import {getState} from 'mockstate';\n    import {Compact} from 'vue-color';\n    import TimeConverter from '../sketch/components/utils/TimeConverter'\n    import collideMixin from 'base/mixins/collide'\n    import scoutingsLocales from 'base/lang/admin/scoutings/scoutings.js';\n\n    export default{\n        locales: scoutingsLocales,\n        props: {\n            initTouch: {\n                default: function () {\n                    return {\n                        initialized: false,\n                        text: null,\n                        start: 0,\n                        end: 100,\n                        color: {\n                            rgba: {\n                                r: 25,\n                                g: 77,\n                                b: 51,\n                                a: 1\n                            },\n                        }\n                    }\n                }\n            },\n            duration: {},\n        },\n        mixins: [collideMixin],\n        created(){\n            this.touch = Object.assign({}, this.initTouch);\n        },\n        watch: {\n            'touch.start': function () {\n                var collideResult = this.checkCollide(this.touch);\n                this.collide = collideResult.collide;\n                this.collideTouches = collideResult.collideTouches;\n            },\n            'touch.end': function () {\n                var collideResult = this.checkCollide(this.touch);\n                this.collide = collideResult.collide;\n                this.collideTouches = collideResult.collideTouches;\n                this.endInvalid = parseInt(this.touch.start) >= parseInt(this.touch.end);\n            }\n        },\n        data(){\n            return {\n                collide: false,\n                collideTouches: [],\n                endInvalid: false,\n                touch: {\n                    text: null,\n                    start: 0,\n                    end: 0,\n                    color: {\n                        rgba: {\n                            r: 25,\n                            g: 77,\n                            b: 51,\n                            a: 1\n                        },\n                    }\n                }\n            }\n        },\n        computed: {\n            startFmt(){\n                return TimeConverter.toHHMMSS(this.touch.start)\n            },\n            endFmt(){\n                return TimeConverter.toHHMMSS(this.touch.end)\n            },\n            validationEnd(){\n                return parseInt(this.touch.start) + 1;\n            }\n        },\n        components: {\n            'compact-picker': Compact,\n        },\n        methods: {\n            close(){\n                this.$emit('cancel-new-touch', this.touch);\n            },\n            toHHMMSS(secs) {\n                return TimeConverter.toHHMMSS(secs)\n            },\n            onChangeColor(val){\n                this.touch.color = val\n            },\n            onSubmit(){\n                this.$validator.validateAll().then(()=> {\n                    if (this.touch.start >= this.touch.end) {\n                        this.endInvalid = true;\n                    } else {\n                        this.endInvalid = false;\n                        if (!this.collide) {\n                            this.$emit('add-new-touch', this.touch);\n                        }\n                    }\n                }).catch(bag => {\n                    this.$root.errorToast(this.$t('admin.validation_error'));\n                });\n            }\n        }\n    }\n</script>\n<style>\n    .vue-color__compact {\n        width: 100% !important;\n    }\n</style>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"timeline.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(446)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(283),
  /* template */
  __webpack_require__(400),
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

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(439)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(316),
  /* template */
  __webpack_require__(420),
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

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(468)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(317),
  /* template */
  __webpack_require__(435),
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

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(463)
__webpack_require__(464)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(319),
  /* template */
  __webpack_require__(431),
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

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(458)
__webpack_require__(459)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(320),
  /* template */
  __webpack_require__(423),
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

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(455)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(321),
  /* template */
  __webpack_require__(419),
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

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(451)

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

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(461)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(323),
  /* template */
  __webpack_require__(426),
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

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(440)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(324),
  /* template */
  __webpack_require__(424),
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

/***/ 398:
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

/***/ 400:
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

/***/ 413:
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

/***/ 419:
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

/***/ 420:
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

/***/ 423:
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

/***/ 424:
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

/***/ 426:
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

/***/ 431:
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

/***/ 435:
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

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(350);
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

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(351);
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

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(357);
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

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(362);
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

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(366);
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

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(369);
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

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(370);
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

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(372);
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

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(374);
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

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(375);
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

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(379);
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

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(137);

var _globalTimelineSketch = __webpack_require__(552);

var _globalTimelineSketch2 = _interopRequireDefault(_globalTimelineSketch);

var _scoutings = __webpack_require__(227);

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

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sketch;

var _Stage = __webpack_require__(331);

var _Stage2 = _interopRequireDefault(_Stage);

var _Timeline = __webpack_require__(332);

var _Timeline2 = _interopRequireDefault(_Timeline);

var _TouchManager = __webpack_require__(330);

var _TouchManager2 = _interopRequireDefault(_TouchManager);

var _VideoTimeMarker = __webpack_require__(333);

var _VideoTimeMarker2 = _interopRequireDefault(_VideoTimeMarker);

var _touchesSpec = __webpack_require__(338);

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

/***/ 553:
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

/***/ 554:
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

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"globalTimeline.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(558)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(551),
  /* template */
  __webpack_require__(557),
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

/***/ 557:
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

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(555);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vcGFnZUhlYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT9hNTZmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/MzhhMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlPzQ0MTIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYW5nL2FkbWluL3Njb3V0aW5ncy9zY291dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3V0aWxzL1RpbWVDb252ZXJ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvc2NvdXRpbmdzL3Njb3V0aW5nU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy91dWlkLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy90b3VjaGVzL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9jb2xsaWRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy90b3VjaGVzL1RvdWNoLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91dGlscy9TZWNvbmRzVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVXVpZFV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtY29sb3IvZGlzdC92dWUtY29sb3IubWluLmpzIiwid2VicGFjazovLy9wbGF5ZXIudnVlIiwid2VicGFjazovLy9pbnNwZWN0b3IudnVlIiwid2VicGFjazovLy90aW1lbGluZS52dWUiLCJ3ZWJwYWNrOi8vL2VkaXQudnVlIiwid2VicGFjazovLy9lZGl0VG91Y2hGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vbmV3VG91Y2hGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vdG91Y2hlc0xpc3QudnVlIiwid2VicGFjazovLy90YWcudnVlIiwid2VicGFjazovLy90YWdEcm9wZG93bi52dWUiLCJ3ZWJwYWNrOi8vL3RhZ3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy90b3VjaGVzL1RvdWNoTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvU3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3VpL1RpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91aS9WaWRlb1RpbWVNYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3VpL2luc3BlY3Rvci9JbnNwZWN0b3JTdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvaW5zcGVjdG9yL0luc3BlY3RvclRpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91aS9pbnNwZWN0b3IvSW5zcGVjdG9yVmlkZW9UaW1lTWFya2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvaW5zcGVjdG9yU2tldGNoLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvc3BlY3MvdG91Y2hlc1NwZWMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC90aW1lbGluZVNrZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc3RvcmVzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3N0b3Jlcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9zY291dGluZ3Mvc2NvdXRpbmdUb3VjaFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYWpheC9lcnJvclByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2luc3BlY3Rvci52dWU/NjNlYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdzLnZ1ZT80OGJhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9nbG9iYWwvdmlkZW8vcGxheWVyLnZ1ZT9iZDQ3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZy52dWU/MDE3MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvbGlzdHMvdG91Y2hlc0xpc3QudnVlPzcwNjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWU/MzMxYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZT9hNjdlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ0Ryb3Bkb3duLnZ1ZT9kOTMwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZT8zNWU0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZT9hNTg1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvdGltZWxpbmUudnVlPzdlZmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvaW5zcGVjdG9yLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL3RpbWVsaW5lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvZWRpdFRvdWNoRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWcudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ0Ryb3Bkb3duLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZWRpdC52dWU/NjMwMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZ2xvYmFsL3ZpZGVvL3BsYXllci52dWU/MDE2MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWcudnVlP2RhYjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZT9lMDI0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvaW5zcGVjdG9yLnZ1ZT9jNTI4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlPzA4NGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFncy52dWU/YWEyZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWU/MmVkYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvZWRpdFRvdWNoRm9ybS52dWU/MGQ2YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL3RpbWVsaW5lLnZ1ZT8yNjAyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvaW5zcGVjdG9yLnZ1ZT8yZmMyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ3MudnVlPzIyY2IiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlPzkwZWMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnLnZ1ZT82NmE2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9saXN0cy90b3VjaGVzTGlzdC52dWU/NmIyZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZT82NDc2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlP2JhNTIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnRHJvcGRvd24udnVlPzI0YWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlPzBjYzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlPzI5MDYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy90aW1lbGluZS52dWU/NDNhMCIsIndlYnBhY2s6Ly8vZ2xvYmFsVGltZWxpbmUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvZ2xvYmFsVGltZWxpbmVTa2V0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3N0b3Jlcy9hY3Rpb25zL2dsb2JhbFRpbWVsaW5lQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc3RvcmVzL2FjdGlvbnMvaW5zcGVjdG9yQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2dsb2JhbFRpbWVsaW5lLnZ1ZT82MmJkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvZ2xvYmFsVGltZWxpbmUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvZ2xvYmFsVGltZWxpbmUudnVlPzNkNTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy9nbG9iYWxUaW1lbGluZS52dWU/ZGU5MiJdLCJuYW1lcyI6WyJUaW1lQ29udmVydGVyIiwic2VjcyIsInNlY19udW0iLCJwYXJzZUludCIsImhvdXJzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJzaG93IiwiaWQiLCJzdWNjZXNzQ2FsYmFjayIsImVycm9yQ2FsbGJhY2siLCJodHRwIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiYm9keSIsImNhdGNoIiwiZXJyb3IiLCJjcmVhdGUiLCJzY291dGluZyIsInBvc3QiLCJ1cGRhdGUiLCJwdXQiLCJlbXVsYXRlSFRUUCIsInJlbW92ZSIsImRlbGV0ZSIsInJlcG9ydCIsImxhdGVzdCIsIm1ldGhvZHMiLCJnZW5lcmF0ZVVVSUQiLCJkIiwiRGF0ZSIsImdldFRpbWUiLCJ3aW5kb3ciLCJwZXJmb3JtYW5jZSIsIm5vdyIsInV1aWQiLCJyZXBsYWNlIiwiYyIsInIiLCJyYW5kb20iLCJ0b1N0cmluZyIsIkFjdGlvbiIsInN0YXJ0IiwiZW5kIiwiY29sb3IiLCJzdGF0ZSIsIm1vdXNlSXNPdmVyIiwiaXNTZWxlY3RlZCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJsaW1pdFRleHRZIiwidG91Y2hNYW5hZ2VyIiwiaW5zcGVjdG9yIiwidGltZWxpbmUiLCJzdGFydFkiLCJzZWNvbmRzVXRpbCIsImNhbnZhQ29udGFpbmVyIiwibGVmdFRhZ3MiLCJyaWdodFRhZ3MiLCJjYWxjdWxhdGVYIiwiY2FsY3VsYXRlWSIsImNhbGN1bGF0ZVdpZHRoIiwiY2FsY3VsYXRlSGVpZ2h0Iiwic2VsZWN0ZWRBY3Rpb24iLCJyZ2JhIiwiYWxwaGEiLCJub1N0cm9rZSIsInRleHRTaXplIiwidGV4dFN0eWxlIiwiTk9STUFMIiwiZmlsbCIsImciLCJiIiwicmVjdCIsIkJPTEQiLCJ0ZXh0IiwidG9ISE1NU1MiLCJ0ZXh0QWxpZ24iLCJDRU5URVIiLCJzdHJva2UiLCJzdHJva2VXZWlnaHQiLCJsaW5lIiwiZW5kWSIsInN0YXJ0VGltZSIsImFjdGlvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2bSIsImVkaXRUb3VjaCIsInJlY29yZGluZ0FjdGlvbiIsInJlY29yZGluZ1RvdWNoIiwiJHJlZnMiLCJwbGF5ZXIiLCJhcGkiLCJhYkxvb3BQbHVnaW4iLCJzZXRTdGFydCIsInNldEVuZCIsImVuYWJsZSIsImdvVG9TdGFydCIsInNlY29uZFdpZHRoIiwic3RhcnRYIiwiY2hlY2tDb2xsaWRlIiwidG91Y2giLCJ0b3VjaGVzIiwiXyIsInJlamVjdCIsIm8iLCJwdXNoIiwib3ZlcmxhcCIsImNvbGxpZGUiLCJjb2xsaWRlVG91Y2hlcyIsInJhbmdlcyIsImNoZWNrQ29sbGlkZUFjdGlvbnMiLCJzZWxlY3RlZFRvdWNoIiwiYWN0aW9ucyIsImNvbGxpZGVBY3Rpb25zIiwic29ydGVkUmFuZ2VzIiwic29ydCIsInByZXZpb3VzIiwiY3VycmVudCIsInByZXZpb3VzVGltZSIsImN1cnJlbnRUaW1lIiwicmVkdWNlIiwicmVzdWx0IiwiaWR4IiwiYXJyIiwicHJldmlvdXNFbmQiLCJjdXJyZW50U3RhcnQiLCJUb3VjaCIsInAiLCJqIiwibGVuZ3RoIiwiZHJhdyIsInN0YXJ0ZWQiLCJwbGF5IiwiU2Vjb25kc1V0aWwiLCJVdWlkVXRpbCIsIlRvdWNoTWFuYWdlciIsImlzTW91c2VPdmVyIiwiY29uc29sZSIsImxvZyIsImFUb3VjaElzU2VsZWN0ZWQiLCJpc01vdXNlUHJlc3NzZWRPdmVyIiwiZGlzYWJsZSIsImFuQWN0aW9uSXNTZWxlY3RlZCIsIlN0YWdlIiwiYmFja2dyb3VuZCIsIm5vRmlsbCIsIlRpbWVsaW5lIiwic3RhcnREZWx0YSIsImhpZGUiLCJjYWxjdWxhdGVDb2xXaWR0aCIsImR1cmF0aW9uIiwiZW5kWCIsImF4aXNZIiwiaSIsImNvbFdpZHRoIiwibmV3WCIsImRyYXdTdGFydE1pbnV0ZUxhYmVsIiwiZHJhd01pbnV0ZUxpbmUiLCJkcmF3TWludXRlTGFiZWwiLCJzaG93U2Vjb25kc0ludGVydmFsIiwiZHJhd01pZGRsZVNlY29uZExhYmVsIiwiZHJhd01pZGRsZVNlY29uZExpbmUiLCJzaG93U2Vjb25kcyIsImRyYXdTZWNvbmRMaW5lIiwibW91c2VYIiwiY2FudmFzIiwibW91c2VZIiwiY3Vyc29yIiwiSEFORCIsIkFSUk9XIiwicG1vdXNlWCIsInNlY29uZHNZIiwidG9TUyIsInJvdW5kIiwibWludXRlc1kiLCJ6b29tRmFjdG9yIiwiVmlkZW9UaW1lTWFya2VyIiwiY3VycmVudFgiLCJJbnNwZWN0b3JTdGFnZSIsInRyYW5zbGF0ZSIsInBvcCIsIkluc3BlY3RvclRpbWVsaW5lIiwiZHJhd1N0YXJ0TGFiZWwiLCJJbnNwZWN0b3JWaWRlb1RpbWVNYXJrZXIiLCJza2V0Y2giLCJzZXR1cCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRXaWR0aCIsImNyZWF0ZUNhbnZhcyIsIm1vdXNlTW92ZWQiLCJtb3VzZVByZXNzZWQiLCJpbnN0YW5jZSIsInBhcmVudCIsInN0YWdlIiwidmlkZW9UaW1lTWFya2VyIiwiY29sb3JNb2RlIiwiUkdCIiwiZnJhbWVSYXRlIiwibm9Mb29wIiwiZHJhd0FjdGlvbnMiLCJ2aWRlb01hcmtlciIsIm1vdXNlT3ZlckFjdGlvbiIsIm1vdXNlUHJlc3NlZEFjdGlvbiIsInN0b3AiLCJsb29wIiwiY29uZmlnQnV0dG9ucyIsInpvb21JbiIsInpvb21PdXQiLCJpbml0aWFsWm9vbUZhY3RvciIsIm1vdXNlT3ZlclRvdWNoIiwibW91c2VPdmVyIiwibW91c2VEcmFnZ2VkIiwiZHJhZyIsIm1vdXNlUHJlc3NlZFRvdWNoIiwicGxheWVyUmVhZHkiLCJyZWFkeSIsInNldENhbnZhcyIsInNldFRpbWVsaW5lIiwic2V0VG91Y2hNYW5hZ2VyIiwic2V0U3RhZ2UiLCJzZXRQbGF5ZXIiLCJzZXRWaWRlb01hcmtlciIsInNldFdpZHRoIiwic2V0SGVpZ2h0Iiwic2V0VGltZWxpbmVXaWR0aCIsInNldFRpbWVsaW5lSGlkZSIsInNldFRpbWVsaW5lSGVpZ2h0Iiwic2V0VGltZWxpbmVNb3VzZU92ZXIiLCJzZXRUaW1lbGluZVN0YXJ0VGltZSIsInNldFRpbWVsaW5lU3RhcnRZIiwic2V0VGltZWxpbmVBeGlzWSIsInNldFRpbWVsaW5lRW5kWSIsInNldFRpbWVsaW5lU3RhcnRYIiwic2V0VGltZWxpbmVFbmRYIiwic2V0VGltZWxpbmVNaW51dGVzWSIsInNldFRpbWVsaW5lU2Vjb25kc1kiLCJzZXRTaG93U2Vjb25kcyIsInNldFNob3dTZWNvbmRzSW50ZXJ2YWwiLCJzZXRab29tIiwiem9vbSIsInpvb21GYWN0b3JDaGFuZ2UiLCJzZXRTZWNvbmRXaWR0aCIsInNldENvbFdpZHRoIiwic2V0RHVyYXRpb24iLCJzZXRDdXJyZW50VGltZSIsInNldEluaXRpYWxpemVkIiwiaW5pdGlhbGl6ZWQiLCJzZXRUb3VjaGVzIiwic2V0U2VsZWN0ZWRUb3VjaCIsImFkZFRvdWNoIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJjbG9uZURlZXAiLCJyZW1vdmVUb3VjaCIsInNwbGljZSIsImdsb2JhbFRpbWVsaW5lIiwic2hvd0Vycm9yIiwidmFsaWRhdGlvbiIsImVycm9ycyIsImhhc093blByb3BlcnR5IiwiZm9yRWFjaCIsInZhbGlkYXRpb25FcnJvciIsInNlbGYiLCIkcm9vdCIsImVycm9yVG9hc3QiLCJnbG9iYWxUaW1lbGluZUFjdGlvbnMiLCJzZXRHbG9iYWxUaW1lbGluZSIsInNldEdsb2JhbFRpbWVsaW5lV2lkdGgiLCJzZXRHbG9iYWxUaW1lbGluZUhlaWdodCIsInNldEdsb2JhbFRpbWVsaW5lQ2FudmFzIiwic2V0R2xvYmFsVGltZWxpbmVWaWRlb01hcmtlciIsInNldEdsb2JhbFRpbWVsaW5lQ2FudmFzV2lkdGgiLCJzZXRHbG9iYWxUaW1lbGluZUNhbnZhc0hlaWdodCIsInNldEdsb2JhbFRpbWVsaW5lU3RhZ2UiLCJzZXRHbG9iYWxUaW1lbGluZVRpbWVsaW5lIiwic2V0R2xvYmFsVGltZWxpbmVTdGFydFRpbWUiLCJzZXRHbG9iYWxUaW1lbGluZVN0YXJ0WSIsInNldEdsb2JhbFRpbWVsaW5lQXhpc1kiLCJzZXRHbG9iYWxUaW1lbGluZUVuZFkiLCJzZXRHbG9iYWxUaW1lbGluZVN0YXJ0WCIsInNldEdsb2JhbFRpbWVsaW5lRW5kWCIsInNldEdsb2JhbFRpbWVsaW5lTWludXRlc1kiLCJzZXRHbG9iYWxUaW1lbGluZVNlY29uZHNZIiwic2V0R2xvYmFsVGltZWxpbmVTZWNvbmRXaWR0aCIsInNldEdsb2JhbFRpbWVsaW5lQ29sV2lkdGgiLCJzZXRHbG9iYWxUaW1lbGluZVpvb20iLCJzZXRHbG9iYWxUaW1lbGluZUluaXRpYWxpemVkIiwiaW5zcGVjdG9yQWN0aW9ucyIsInNldEluc3BlY3RvciIsInNldEluc3BlY3RvcldpZHRoIiwic2V0SW5zcGVjdG9ySGVpZ2h0Iiwic2V0SW5zcGVjdG9yQ2FudmFzIiwic2V0SW5zcGVjdG9yVmlkZW9NYXJrZXIiLCJzZXRJbnNwZWN0b3JDYW52YXNXaWR0aCIsInNldEluc3BlY3RvckNhbnZhc0hlaWdodCIsInNldEluc3BlY3RvclN0YWdlIiwic2V0SW5zcGVjdG9yVGltZWxpbmUiLCJzZXRJbnNwZWN0b3JTdGFydFRpbWUiLCJzZXRJbnNwZWN0b3JTdGFydFkiLCJzZXRJbnNwZWN0b3JBeGlzWSIsInNldEluc3BlY3RvckVuZFkiLCJzZXRJbnNwZWN0b3JTdGFydFgiLCJzZXRJbnNwZWN0b3JFbmRYIiwic2V0SW5zcGVjdG9yTWludXRlc1kiLCJzZXRJbnNwZWN0b3JTZWNvbmRzWSIsInNldEluc3BlY3RvclNlY29uZFdpZHRoIiwic2V0SW5zcGVjdG9yQ29sV2lkdGgiLCJzZXRTZWxlY3RlZEFjdGlvbiIsInJlY29yZGluZyIsImFkZEFjdGlvbiIsImFkZExlZnRUYWciLCJ0YWciLCJhZGRSaWdodFRhZyIsImVkaXRBY3Rpb24iLCJyZW1vdmVBY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7QUMxQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTs7Ozs7a0JBSUE7c0JBRUE7QUFIQTs7a0JBS0E7eUNBQ0E7dUJBQ0E7QUFHQTtBQU5BO0FBTEE7QUFEQSxFOzs7Ozs7O0FDdkJBO0FBQ0E7OztBQUdBO0FBQ0EsMENBQTJDLGlCQUFpQix3QkFBd0IsR0FBRyxzQkFBc0IsdUJBQXVCLEdBQUc7O0FBRXZJOzs7Ozs7OztBQ1BBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDckJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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R0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM5SUEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNsQkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUMzQkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxrREFBa0QsYUFBYSxZQUFZLGdCQUFnQjtBQUMzRixLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUMxREEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsK0NBQStDLGFBQWEsWUFBWSxnQkFBZ0I7QUFDeEYsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNyT0EsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztB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O0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDdlVBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzNFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVB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O0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQywrQkFBK0IsYUFBYSwwQkFBMEI7QUFDdkU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM1REE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6ImpzLzAuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2VkaXQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjQ3NzliNTghLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZWRpdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9lZGl0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGVkaXQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTI0Nzc5YjU4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjQ3NzliNThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2VkaXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtN2ZjZDA5NTYhc2Fzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcGFnZUhlYWRlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2ZjZDA5NTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03ZmNkMDk1NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE4IDE5IiwiPHRlbXBsYXRlPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgICAge3t0aXRsZX19XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxvbCBjbGFzcz1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJicmVhZGNydW1iLmhyZWZcIiBhY3RpdmUtY2xhc3M9XCJhY3RpdmVcIiB0YWc9XCJsaVwiIHYtZm9yPVwiYnJlYWRjcnVtYiBpbiBicmVhZGNydW1ic1wiPlxuICAgICAgICAgICAgICAgIHt7JHQoYnJlYWRjcnVtYi50aXRsZSl9fVxuICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgPC9vbD5cbiAgICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgcmVsPVwic3R5bGVzaGVldC9zY3NzXCI+XG4gICAgLmFkbWluLWhlYWRlciB7XG4gICAgICAgIGhlaWdodDogOTdweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwYWdlSGVhZGVyLnZ1ZT81Mzc5ZjVjYiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmFkbWluLWhlYWRlciB7XFxuICBoZWlnaHQ6IDk3cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uYWRtaW4taGVhZGVyIC5yb3cge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTggMTkiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGVudC1oZWFkZXJcIlxuICB9LCBbX2MoJ2gxJywgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYlwiXG4gIH0sIF92bS5fbCgoX3ZtLmJyZWFkY3J1bWJzKSwgZnVuY3Rpb24oYnJlYWRjcnVtYikge1xuICAgIHJldHVybiBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInRvXCI6IGJyZWFkY3J1bWIuaHJlZixcbiAgICAgICAgXCJhY3RpdmUtY2xhc3NcIjogXCJhY3RpdmVcIixcbiAgICAgICAgXCJ0YWdcIjogXCJsaVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChicmVhZGNydW1iLnRpdGxlKSkgKyBcIlxcbiAgICAgICAgXCIpXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtN2ZjZDA5NTZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE4IDE5IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJlOWZlYzFjMlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTggMTkiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgXCJlblwiOiB7XG4gICAgICAgIFwic2NvdXRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJUaGUgU2NvdXRpbmcgd2FzIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICAgICAgICBcInVwZGF0ZWRfc3VjY2Vzc2Z1bGx5XCI6IFwiVGhlIFNjb3V0aW5nIHdhcyB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgICAgICAgXCJkZWxldGVkX3N1Y2Nlc2Z1bGx5XCI6IFwiVGhlIFNjb3V0aW5nIHdhcyBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgICAgICAgXCJub3RfZm91bmRcIjogXCJUaGUgU2NvdXRpbmcgZG9lc24ndCBleGlzdFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmFtZVwiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICBcImNoYW1waW9uc2hpcFwiOiBcIkNoYW1waW9uc2hpcFwiLFxuICAgICAgICAgICAgXCJldmVudFwiOiBcIkV2ZW50XCIsXG4gICAgICAgICAgICBcImxlZnRfYXRobGV0ZVwiOiBcIkxlZnQgQXRobGV0ZVwiLFxuICAgICAgICAgICAgXCJyaWdodF9hdGhsZXRlXCI6IFwiUmlnaHQgQXRobGV0ZVwiLFxuICAgICAgICAgICAgXCJ2aWRlb19zcmNcIjogXCJWaWRlbyBTb3VyY2VcIixcbiAgICAgICAgICAgIFwiYWN0aW9uc1wiOiBcIkFjdGlvbnNcIixcbiAgICAgICAgICAgIFwic2VsZWN0X29wdGlvblwiOiBcIlNlbGVjdCBhbiBvcHRpb25cIixcbiAgICAgICAgICAgIFwidXBkYXRlXCI6IFwiVXBkYXRlXCIsXG4gICAgICAgICAgICBcIm5ld1wiOiBcIk5ldyBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJkZWxldGVfbWVzc2FnZVwiOiBcIkFyZSB5b3Ugc3VyZT8gdGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZVwiLFxuICAgICAgICAgICAgXCJkZWxldGVfc2NvdXRpbmdcIjogXCJEZWxldGUgU2NvdXRpbmdcIixcbiAgICAgICAgICAgIFwic2NvdXRpbmdfaW5mb1wiOiBcIlNjb3V0aW5nIEluZm9ybWF0aW9uXCIsXG4gICAgICAgICAgICBcInVwZGF0ZV9zY291dGluZ1wiOiBcIlVwZGF0ZSBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJtYWtlXCI6IFwiTWFrZSBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJzdGFydF90b3VjaFwiOiBcIlN0YXJ0IFRvdWNoXCIsXG4gICAgICAgICAgICBcImVuZF90b3VjaFwiOiBcIkVuZCBUb3VjaFwiLFxuICAgICAgICAgICAgXCJ0b29nbGVfdGltZWxpbmVcIjogXCJUb29nbGUgVGltZWxpbmVcIixcbiAgICAgICAgICAgIFwidG9vZ2xlX2luc3BlY3RvclwiOiBcIlRvb2dsZSBJbnNwZWN0b3JcIixcbiAgICAgICAgICAgIFwiaW5zcGVjdG9yXCI6IFwiSW5zcGVjdG9yXCIsXG4gICAgICAgICAgICBcInRpbWVsaW5lXCI6IFwiVGltZWxpbmVcIixcbiAgICAgICAgICAgIFwiZ2xvYmFsdGltZWxpbmVcIjogXCJHbG9iYWwgVGltZWxpbmVcIixcbiAgICAgICAgICAgIFwiZW5kX2FjdGlvblwiOiBcIkVuZCBBY2Npw7NuXCIsXG4gICAgICAgICAgICBcInBhdXNlXCI6IFwiUGF1c2VcIixcbiAgICAgICAgICAgIFwicGxheVwiOiBcIlBsYXlcIixcbiAgICAgICAgICAgIFwibGVmdF9hY3Rpb25zXCI6IFwiTGVmdCBBdGhsZXRlIEFjdGlvbnNcIixcbiAgICAgICAgICAgIFwicmlnaHRfYWN0aW9uc1wiOiBcIlJpZ2h0IEF0aGxldGUgQWN0aW9uc1wiLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRpdGxlXCIsXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiQ29sb3JcIixcbiAgICAgICAgICAgIFwic3RhcnRcIjogXCJTdGFydCAoc2VnKVwiLFxuICAgICAgICAgICAgXCJlbmRcIjogXCJFbmQgKHNlZylcIixcbiAgICAgICAgICAgIFwic2F2ZVwiOiBcIlNhdmUgQ2hhbmdlc1wiLFxuICAgICAgICAgICAgXCJjYW5jZWxcIjogXCJDYW5jZWwgQ2hhbmdlc1wiLFxuICAgICAgICAgICAgXCJ0b3VjaGVzX2NhbnRfb3ZlcmxhcFwiOiBcIlRvdWNoZXMgY2FudCBvdmVybGFwXCIsXG4gICAgICAgICAgICBcInRvdWNoX292ZXJsYXBfd2l0aFwiOiBcIlRoZSB0b3VjaCB0aGF0IHlvdSBhcmUgdHJ5aW5nIHRvIGFkZCBvdmVybGFwIHdpdGhcIixcbiAgICAgICAgICAgIFwidmFsaWRhdGlvbl9lcnJvclwiOiBcIkVWYWxpZGF0aW9uIEVycm9yXCIsXG4gICAgICAgICAgICBcInZhbGlkYXRpb25fZW5kX2dyZWF0ZXJcIjogXCJUaGUgZW5kIG9mIHRoZSB0b3VjaCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB0aGUgc3RhcnRcIixcbiAgICAgICAgICAgIFwidG91Y2hfb3ZlcmxhcF9tc2dcIjogXCJ7dGl0bGV9IHRoYXQgc3RhcnRzIG9uIHtzdGFydH0gYW5kIGVuZHMgb24ge2VuZH1cIixcbiAgICAgICAgICAgIFwidG91Y2hlc1wiOiBcIlRvdWNoZXNcIixcbiAgICAgICAgICAgIFwic3RhcnRfYXRcIjogXCJTdGFydCBhdCB7c3RhcnR9XCIsXG4gICAgICAgICAgICBcImVuZF9hdFwiOiBcIkVuZCBhdCB7ZW5kfVwiLFxuICAgICAgICAgICAgXCJub190b3VjaGVzXCI6IFwiVGhlcmUgYXJlIG5vIHJlZ2lzdGVyZWQgdG9jdWhlc1wiLFxuICAgICAgICAgICAgXCJzZWxlY3RcIjogXCJTZWxlY3QgU2NvdXRpbmdzXCIsXG4gICAgICAgICAgICBcImNyZWF0ZVwiOiBcIkNyZWF0ZSBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJzY291dGluZ3NcIjogXCJTY291dGluZ3NcIixcbiAgICAgICAgICAgIFwibWFraW5nX3JlcG9ydFwiOiBcIlByb2Nlc3NpbmcgUmVwb3J0IHBsZWFzZSB3YWl0XCIsXG4gICAgICAgICAgICBcInJlcG9ydFwiOiBcIlNlZSBSZXBvcnRcIixcbiAgICAgICAgICAgIFwiZXJyb3JfcmVwb3J0XCI6IFwiQW4gZXJyb3Igb2N1cnJlZCB3aGlsZSBjcmVhdGluZyB0aGUgcmVwb3J0XCIsXG4gICAgICAgICAgICBcImxpc3RcIjogXCJEYXRhIExpc3RcIixcbiAgICAgICAgICAgIFwicmVzdWx0c1wiOiBcIlJlc3VsdHNcIixcbiAgICAgICAgICAgIFwiYXBwX21vYmlsZVwiOiBcIk1vYmlsZSBBcHBcIixcbiAgICAgICAgICAgIFwib3RoZXJfc291cmNlc1wiOiBcIk90aGVyIFNvdXJjZXNcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJzY291dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJjcmVhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIkVsIHNjb3V0aW5nIGZ1ZSBjcmVhZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXG4gICAgICAgICAgICBcInVwZGF0ZWRfc3VjY2Vzc2Z1bGx5XCI6IFwiRWwgc2NvdXRpbmcgZnVlIGFjdHVhbGl6YWRvIHNhdGlzZmFjdG9yaWFtZW50ZVwiLFxuICAgICAgICAgICAgXCJkZWxldGVkX3N1Y2Nlc2Z1bGx5XCI6IFwiRWwgc2NvdXRpbmcgZnVlIGVsaW1pbmFkbyBzYXRpc2ZhY3RvcmlhbWVudGVcIixcbiAgICAgICAgICAgIFwibm90X2ZvdW5kXCI6IFwiRWwgc2NvdXRpbmcgbm8gZXhpc3RlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOb21icmVcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmlwY2nDs25cIixcbiAgICAgICAgICAgIFwiY2hhbXBpb25zaGlwXCI6IFwiQ2FtcGVvbmF0b1wiLFxuICAgICAgICAgICAgXCJldmVudFwiOiBcIkV2ZW50b1wiLFxuICAgICAgICAgICAgXCJsZWZ0X2F0aGxldGVcIjogXCJBdGxldGEgZGUgbGEgaXpxdWllcmRhXCIsXG4gICAgICAgICAgICBcInJpZ2h0X2F0aGxldGVcIjogXCJBdGxldGEgZGUgbGEgZGVyZWNoYVwiLFxuICAgICAgICAgICAgXCJ2aWRlb19zcmNcIjogXCJGdWVudGUgZGVsIHZpZGVvXCIsXG4gICAgICAgICAgICBcImFjdGlvbnNcIjogXCJBY2Npb25lc1wiLFxuICAgICAgICAgICAgXCJzZWxlY3Rfb3B0aW9uXCI6IFwiU2VsZWNjaW9uYSB1bmEgb3BjacOzblwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVcIjogXCJBY3R1YWxpemFyXCIsXG4gICAgICAgICAgICBcIm5ld1wiOiBcIk51ZXZvIFNjb3V0aW5nXCIsXG4gICAgICAgICAgICBcImRlbGV0ZV9tZXNzYWdlXCI6IFwiwr9Fc3RhcyBTZWd1cm8/IGVzdGEgYWNjacOzbiBubyBzZSBwdWVkZSBkZXNoYWNlclwiLFxuICAgICAgICAgICAgXCJkZWxldGVfc2NvdXRpbmdcIjogXCJFbGltaW5hciBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJzY291dGluZ19pbmZvXCI6IFwiSW5mb3JtYWNpw7NuIGRlbCBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJ1cGRhdGVfc2NvdXRpbmdcIjogXCJBY3R1YWxpemFyIFNjb3V0aW5nXCIsXG4gICAgICAgICAgICBcIm1ha2VcIjogXCJIYWNlciBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJzdGFydF90b3VjaFwiOiBcIkluaWNpYXIgVG9xdWVcIixcbiAgICAgICAgICAgIFwiZW5kX3RvdWNoXCI6IFwiRmluYWxpemFyIFRvcXVlXCIsXG4gICAgICAgICAgICBcInRvb2dsZV90aW1lbGluZVwiOiBcIlRvb2dsZSBUaW1lbGluZVwiLFxuICAgICAgICAgICAgXCJ0b29nbGVfaW5zcGVjdG9yXCI6IFwiVG9vZ2xlIEluc3BlY3RvclwiLFxuICAgICAgICAgICAgXCJpbnNwZWN0b3JcIjogXCJJbnNwZWN0b3JcIixcbiAgICAgICAgICAgIFwidGltZWxpbmVcIjogXCJUaW1lbGluZVwiLFxuICAgICAgICAgICAgXCJlbmRfYWN0aW9uXCI6IFwiRmluYWxpemFyIEFjY2nDs25cIixcbiAgICAgICAgICAgIFwicGF1c2VcIjogXCJQYXVzYXJcIixcbiAgICAgICAgICAgIFwicGxheVwiOiBcIlJlcHJvZHVjaXJcIixcbiAgICAgICAgICAgIFwibGVmdF9hY3Rpb25zXCI6IFwiQWNjaW9uZXMgZGVsIEF0bGV0YSBkZSBsYSBpenF1aWVyZGFcIixcbiAgICAgICAgICAgIFwicmlnaHRfYWN0aW9uc1wiOiBcIkFjY2lvbmVzIGRlbCBBdGxldGEgZGUgbGEgZGVyZWNoYVwiLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRpdHVsb1wiLFxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIkNvbG9yXCIsXG4gICAgICAgICAgICBcInN0YXJ0XCI6IFwiSW5pY2lvIChzZWcpXCIsXG4gICAgICAgICAgICBcImVuZFwiOiBcIkZpbiAoc2VnKVwiLFxuICAgICAgICAgICAgXCJzYXZlXCI6IFwiR3VhcmRhciBDYW1iaW9zXCIsXG4gICAgICAgICAgICBcImNhbmNlbFwiOiBcIkNhbmNlbGFyIENhbWJpb3NcIixcbiAgICAgICAgICAgIFwidG91Y2hlc19jYW50X292ZXJsYXBcIjogXCJMb3MgdG9xdWVzIG5vIHB1ZWRlbiBzb2JyZXBvbmVyc2VcIixcbiAgICAgICAgICAgIFwidG91Y2hfb3ZlcmxhcF93aXRoXCI6IFwiRWwgdG9xdWUgcXVlIHRyYXRhcyBkZSBhw7FhZGlyIHNlIHN1cGVycG9uZSBjb25cIixcbiAgICAgICAgICAgIFwidmFsaWRhdGlvbl9lcnJvclwiOiBcIkVycm9yIGRlIFZhbGlkYWNpw7NuXCIsXG4gICAgICAgICAgICBcInZhbGlkYXRpb25fZW5kX2dyZWF0ZXJcIjogXCJFbCBmaW5hbCBkZWwgdG9xdWUgZGViZSBzZXIgbWF5b3IgYWwgaW5pY2lvXCIsXG4gICAgICAgICAgICBcInRvdWNoX292ZXJsYXBfbXNnXCI6IFwie3RpdGxlfSBxdWUgZW1waWV6YSBlbiB7c3RhcnR9IHkgdGVybWluYSBlbiB7ZW5kfVwiLFxuICAgICAgICAgICAgXCJ0b3VjaGVzXCI6IFwiVG9xdWVzXCIsXG4gICAgICAgICAgICBcInN0YXJ0X2F0XCI6IFwiSW5pY2lhIGVuIHtzdGFydH1cIixcbiAgICAgICAgICAgIFwiZW5kX2F0XCI6IFwiRmluYWxpemEgZW4ge2VuZH1cIixcbiAgICAgICAgICAgIFwibm9fdG91Y2hlc1wiOiBcIk5vIGhheSB0b3F1ZXMgcmVnaXN0cmFkb3NcIixcbiAgICAgICAgICAgIFwic2VsZWN0XCI6IFwiU2VsZWNjaW9uYXIgU2NvdXRpbmdzXCIsXG4gICAgICAgICAgICBcImNyZWF0ZVwiOiBcIkNyZWFyIFNjb3V0aW5nXCIsXG4gICAgICAgICAgICBcInNjb3V0aW5nc1wiOiBcIlNjb3V0aW5nc1wiLFxuICAgICAgICAgICAgXCJtYWtpbmdfcmVwb3J0XCI6IFwiUHJvY2VzYW5kbyBSZXBvcnRlIHBvciBmYXZvciBlc3BlcmFcIixcbiAgICAgICAgICAgIFwicmVwb3J0XCI6IFwiVmVyIFJlcG9ydGVcIixcbiAgICAgICAgICAgIFwiZXJyb3JfcmVwb3J0XCI6IFwiT2N1cnJpbyB1biBlcnJvciBpbmVzcGVyYWRvIGFsIHByb2Nlc2FyIGVsIHJlcG9ydGVcIixcbiAgICAgICAgICAgIFwibGlzdFwiOiBcIkxpc3RhIGRlIERhdG9zXCIsXG4gICAgICAgICAgICBcInJlc3VsdHNcIjogXCJSZXN1bHRhZG9zXCIsXG4gICAgICAgICAgICBcImFwcF9tb2JpbGVcIjogXCJBcHAgTcOzdmlsXCIsXG4gICAgICAgICAgICBcIm90aGVyX3NvdXJjZXNcIjogXCJPdHJhcyBGdWVudGVzXCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9zY291dGluZ3Mvc2NvdXRpbmdzLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZUNvbnZlcnRlciB7XG4gICAgc3RhdGljIHRvSEhNTVNTKHNlY3MpIHtcbiAgICAgICAgdmFyIHNlY19udW0gPSBwYXJzZUludChzZWNzLCAxMCk7IC8vIGRvbid0IGZvcmdldCB0aGUgc2Vjb25kIHBhcmFtXG4gICAgICAgIHZhciBob3VycyA9IE1hdGguZmxvb3Ioc2VjX251bSAvIDM2MDApO1xuICAgICAgICB2YXIgbWludXRlcyA9IE1hdGguZmxvb3IoKHNlY19udW0gLSAoaG91cnMgKiAzNjAwKSkgLyA2MCk7XG4gICAgICAgIHZhciBzZWNvbmRzID0gc2VjX251bSAtIChob3VycyAqIDM2MDApIC0gKG1pbnV0ZXMgKiA2MCk7XG5cbiAgICAgICAgaWYgKGhvdXJzIDwgMTApIHtcbiAgICAgICAgICAgIGhvdXJzID0gXCIwXCIgKyBob3VycztcbiAgICAgICAgfVxuICAgICAgICBpZiAobWludXRlcyA8IDEwKSB7XG4gICAgICAgICAgICBtaW51dGVzID0gXCIwXCIgKyBtaW51dGVzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgICAgIHNlY29uZHMgPSBcIjBcIiArIHNlY29uZHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhvdXJzICsgJzonICsgbWludXRlcyArICc6JyArIHNlY29uZHM7XG4gICAgfVxuXG4gICAgc3RhdGljIHRvU1Moc2Vjcykge1xuICAgICAgICB2YXIgc2VjX251bSA9IHBhcnNlSW50KHNlY3MsIDEwKTsgLy8gZG9uJ3QgZm9yZ2V0IHRoZSBzZWNvbmQgcGFyYW1cbiAgICAgICAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihzZWNfbnVtIC8gMzYwMCk7XG4gICAgICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcigoc2VjX251bSAtIChob3VycyAqIDM2MDApKSAvIDYwKTtcbiAgICAgICAgdmFyIHNlY29uZHMgPSBzZWNfbnVtIC0gKGhvdXJzICogMzYwMCkgLSAobWludXRlcyAqIDYwKTtcblxuICAgICAgICBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgICAgICAgICBzZWNvbmRzID0gXCIwXCIgKyBzZWNvbmRzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWNvbmRzO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91dGlscy9UaW1lQ29udmVydGVyLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzaG93KGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvc2NvdXRpbmdzLycgKyBpZCArICc/aW5jbHVkZT1jaGFtcGlvbnNoaXAuc3BvcnQsZXZlbnQsbGVmdEF0aGxldGUscmlnaHRBdGhsZXRlLHRvdWNoZXMuYWN0aW9ucy5sZWZ0VGFncyx0b3VjaGVzLmFjdGlvbnMucmlnaHRUYWdzJylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbiAgICBjcmVhdGUoc2NvdXRpbmcsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnBvc3QoJy9hcGkvc2NvdXRpbmdzJywgc2NvdXRpbmcpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG4gICAgdXBkYXRlKGlkLCBzY291dGluZywgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAucHV0KCcvYXBpL3Njb3V0aW5ncy8nICsgaWQsIHNjb3V0aW5nLCB7ZW11bGF0ZUhUVFA6IHRydWV9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IuYm9keSkpO1xuICAgIH0sXG4gICAgcmVtb3ZlKGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5kZWxldGUoJy9hcGkvc2NvdXRpbmdzLycgKyBpZClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yLmJvZHkpKTtcbiAgICB9LFxuICAgIHJlcG9ydChpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3Njb3V0aW5ncy8nICsgaWQgKyAnL3JlcG9ydCcpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG4gICAgbGF0ZXN0KHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9zY291dGluZ3MvbGF0ZXN0JylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9zY291dGluZ3Mvc2NvdXRpbmdTZXJ2aWNlLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2VuZXJhdGVVVUlEKCkge1xuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XG4gICAgICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZCAvIDE2KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdXVpZDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdXVpZC5qcyIsImltcG9ydCBVdWlkVXRpbCBmcm9tICcuLi91dGlscy9VdWlkVXRpbCdcbmltcG9ydCBTZWNvbmRzVXRpbCBmcm9tICcuLi91dGlscy9TZWNvbmRzVXRpbCdcbmltcG9ydCBUaW1lQ29udmVydGVyIGZyb20gJy4uL3V0aWxzL1RpbWVDb252ZXJ0ZXInXG5pbXBvcnQge2dldFN0YXRlLCBkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydCwgZW5kLCBjb2xvcikge1xuICAgICAgICB0aGlzLnN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgdmFyIHV1aWQgPSBuZXcgVXVpZFV0aWwoKTtcbiAgICAgICAgdGhpcy5pZCA9IHV1aWQuZ2VuZXJhdGVVVUlEKCk7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5tb3VzZUlzT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy54ID0gbnVsbDtcbiAgICAgICAgdGhpcy55ID0gbnVsbDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5saW1pdFRleHRZID0gMzAgKyB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZO1xuICAgICAgICB0aGlzLnNlY29uZHNVdGlsID0gbmV3IFNlY29uZHNVdGlsKCk7XG4gICAgICAgIHRoaXMuY2FudmFDb250YWluZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmxlZnRUYWdzID0gW11cbiAgICAgICAgdGhpcy5yaWdodFRhZ3MgPSBbXVxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuY2FsY3VsYXRlWCgpO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgPyB0aGlzLnkgOiB0aGlzLmNhbGN1bGF0ZVkoKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY2FsY3VsYXRlV2lkdGgoKTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbGN1bGF0ZUhlaWdodCgpO1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkQWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRBY3Rpb24uaWQgPT0gdGhpcy5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9yLnJnYmEuYWxwaGEgPSAxMDA7XG4gICAgICAgICAgICBpbnNwZWN0b3Iubm9TdHJva2UoKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci50ZXh0U2l6ZSgxMik7XG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dFN0eWxlKGluc3BlY3Rvci5OT1JNQUwpO1xuICAgICAgICAgICAgaW5zcGVjdG9yLmZpbGwodGhpcy5jb2xvci5yZ2JhLnIsIHRoaXMuY29sb3IucmdiYS5nLCB0aGlzLmNvbG9yLnJnYmEuYiwgMTAwKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5yZWN0KHRoaXMueCArIHRoaXMud2lkdGggLSAzMCwgdGhpcy5saW1pdFRleHRZLCA2MCwgMTUpO1xuICAgICAgICAgICAgaW5zcGVjdG9yLnJlY3QodGhpcy54IC0gMzAsIHRoaXMubGltaXRUZXh0WSwgNjAsIDE1KTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5maWxsKDI1NSwgMjU1LCAyNTUsIDEwMCk7XG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dFN0eWxlKGluc3BlY3Rvci5CT0xEKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci50ZXh0KFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy5zdGFydCksIHRoaXMueCAtIDMwLCB0aGlzLmxpbWl0VGV4dFksIDYwLCAyMCk7XG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMuZW5kKSwgdGhpcy54IC0gMzAgKyB0aGlzLndpZHRoLCB0aGlzLmxpbWl0VGV4dFksIDYwLCAyMCk7XG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dEFsaWduKGluc3BlY3Rvci5DRU5URVIpO1xuICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZShpbnNwZWN0b3IuY29sb3IodGhpcy5jb2xvci5yZ2JhLnIsIHRoaXMuY29sb3IucmdiYS5nLCB0aGlzLmNvbG9yLnJnYmEuYikpXG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDIpXG4gICAgICAgICAgICBpbnNwZWN0b3IubGluZSh0aGlzLngsIHRoaXMubGltaXRUZXh0WSArIDIwLCB0aGlzLngsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRZKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5saW5lKHRoaXMueCArIHRoaXMud2lkdGgsIHRoaXMubGltaXRUZXh0WSArIDIwLCB0aGlzLnggKyB0aGlzLndpZHRoLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5lbmQgLSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRUaW1lID4gMCkge1xuICAgICAgICAgICAgaW5zcGVjdG9yLmZpbGwoMjU1KTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5maWxsKHRoaXMuY29sb3IucmdiYS5yLCB0aGlzLmNvbG9yLnJnYmEuZywgdGhpcy5jb2xvci5yZ2JhLmIsIHRoaXMuY29sb3IucmdiYS5hbHBoYSk7ICAvLyBVc2UgY29sb3IgdmFyaWFibGUgJ2MnIGFzIGZpbGwgY29sb3JcbiAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMSk7XG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKDUxKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2UodGhpcy5jb2xvci5yZ2JhLnIgKiAwLjc1LCB0aGlzLmNvbG9yLnJnYmEuZyAqIDAuNzUsIHRoaXMuY29sb3IucmdiYS5iICogMC43NSk7XG4gICAgICAgICAgICBpbnNwZWN0b3IucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpOyAgLy8gRHJhdyByZWN0YW5nbGVcbiAgICAgICAgICAgIGluc3BlY3Rvci5yZWN0KHRoaXMueCwgdGhpcy55ICsgNjAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgIC8vIERyYXcgcmVjdGFuZ2xlXG5cbiAgICAgICAgICAgIGluc3BlY3Rvci5maWxsKDAsIDAsIDAsIDEwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlZGl0UHJlc3NlZChhY3Rpb24sIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZEFjdGlvbicsIGFjdGlvbik7XG4gICAgICAgIHZtLmVkaXRUb3VjaChldmVudCwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICBpc01vdXNlT3Zlcih4LCB5KSB7XG4gICAgICAgIGlmICh4ID49IHRoaXMueCAmJiB4IDw9ICh0aGlzLnggKyB0aGlzLndpZHRoKSAmJiB5ID49IHRoaXMueSAmJiB5IDw9ICh0aGlzLnkgKyB0aGlzLmhlaWdodCAqIDIpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9yLnJnYmEuYWxwaGEgPSAxMDA7XG4gICAgICAgICAgICB0aGlzLm1vdXNlSXNPdmVyID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3IucmdiYS5hbHBoYSA9IDUwO1xuICAgICAgICAgICAgdGhpcy5tb3VzZUlzT3ZlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlSXNPdmVyO1xuICAgIH1cblxuICAgIGlzTW91c2VQcmVzc3NlZE92ZXIoeCwgeSkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnJlY29yZGluZ0FjdGlvbiAmJiAhdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIucmVjb3JkaW5nVG91Y2gpIHtcbiAgICAgICAgICAgIGlmICh5ID49IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFkpIHtcbiAgICAgICAgICAgICAgICBpZiAoeCA+PSB0aGlzLnggJiYgeCA8PSAodGhpcy54ICsgdGhpcy53aWR0aCkgJiYgeSA+PSB0aGlzLnkgJiYgeSA8PSAodGhpcy55ICsgdGhpcy5oZWlnaHQgKiAyKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB2bS4kcmVmcy5wbGF5ZXIuYXBpKCkuYWJMb29wUGx1Z2luLnNldFN0YXJ0KHRoaXMuc3RhcnQpLnNldEVuZCh0aGlzLmVuZCkuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZtLiRyZWZzLnBsYXllci5hcGkoKS5hYkxvb3BQbHVnaW4uZ29Ub1N0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZEFjdGlvbicsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjYWxjdWxhdGVYKCkge1xuICAgICAgICB2YXIgc3RhcnQgPSAodGhpcy5zdGFydCAtIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFRpbWUpICogdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xuICAgICAgICByZXR1cm4gc3RhcnQgKyB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRYO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVkoKSB7XG4gICAgICAgIHJldHVybiA2MSArIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlV2lkdGgoKSB7XG4gICAgICAgIHZhciBzdGFydCA9ICh0aGlzLnN0YXJ0IC0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0VGltZSkgKiB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGg7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5lbmQgLSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRUaW1lKSAqIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMuZW5kIC0gdGhpcy5zdGFydCkgKiB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGg7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlSGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gNjA7XG4gICAgfVxufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy90b3VjaGVzL0FjdGlvbi5qcyIsIi8vIGRlZmluZSBhIG1peGluIG9iamVjdFxuaW1wb3J0IHtnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgIHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNoZWNrQ29sbGlkZSh0b3VjaCl7XG4gICAgICAgICAgICB2YXIgdG91Y2hlcyA9IF8ucmVqZWN0KGdldFN0YXRlKCd0b3VjaE1hbmFnZXInKS50b3VjaGVzLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b3VjaC5pZCA9PSBvLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0b3VjaGVzLnB1c2godG91Y2gpO1xuICAgICAgICAgICAgdmFyIG92ZXJsYXAgPSB0aGlzLm92ZXJsYXAodG91Y2hlcyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbGxpZGU6IG92ZXJsYXAub3ZlcmxhcCxcbiAgICAgICAgICAgICAgICBjb2xsaWRlVG91Y2hlczogb3ZlcmxhcC5yYW5nZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tDb2xsaWRlQWN0aW9ucyhhY3Rpb24pe1xuICAgICAgICAgICAgaWYgKGdldFN0YXRlKCd0b3VjaE1hbmFnZXInKS5zZWxlY3RlZFRvdWNoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkVG91Y2ggPSBnZXRTdGF0ZSgndG91Y2hNYW5hZ2VyJykuc2VsZWN0ZWRUb3VjaDtcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkVG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbnMgPSBfLnJlamVjdChzZWxlY3RlZFRvdWNoLmFjdGlvbnMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uLmlkID09IG8uaWQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxhcCA9IHRoaXMub3ZlcmxhcChhY3Rpb25zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdmVybGFwID0ge292ZXJsYXA6IGZhbHNlLCByYW5nZXM6IFtdfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxhcCA9IHtvdmVybGFwOiBmYWxzZSwgcmFuZ2VzOiBbXX1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2xsaWRlOiBvdmVybGFwLm92ZXJsYXAsXG4gICAgICAgICAgICAgICAgY29sbGlkZUFjdGlvbnM6IG92ZXJsYXAucmFuZ2VzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJsYXAodG91Y2hlcyl7XG4gICAgICAgICAgICB2YXIgc29ydGVkUmFuZ2VzID0gdG91Y2hlcy5zb3J0KChwcmV2aW91cywgY3VycmVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzVGltZSA9IHBhcnNlSW50KHByZXZpb3VzLnN0YXJ0KTtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBwYXJzZUludChjdXJyZW50LnN0YXJ0KTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwcmV2aW91cyBpcyBlYXJsaWVyIHRoYW4gdGhlIGN1cnJlbnRcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNUaW1lIDwgY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qIGlmIHRoZSBwcmV2aW91cyB0aW1lIGlzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IHRpbWVcbiAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzVGltZSA9PT0gY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgIH0qL1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIHRpbWUgaXMgbGF0ZXIgdGhhbiB0aGUgY3VycmVudCB0aW1lXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBmaW5hbCByZXN1bHRzXG4gICAgICAgICAgICByZXR1cm4gc29ydGVkUmFuZ2VzLnJlZHVjZSgocmVzdWx0LCBjdXJyZW50LCBpZHgsIGFycikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgcHJldmlvdXMgcmFuZ2VcbiAgICAgICAgICAgICAgICBpZiAoaWR4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91cyA9IGFycltpZHggLSAxXTtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBhbnkgb3ZlcmxhcFxuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c0VuZCA9IHBhcnNlSW50KHByZXZpb3VzLmVuZCk7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGFydCA9IHBhcnNlSW50KGN1cnJlbnQuc3RhcnQpO1xuICAgICAgICAgICAgICAgIHZhciBvdmVybGFwID0gKHByZXZpb3VzRW5kID4gY3VycmVudFN0YXJ0KTtcblxuICAgICAgICAgICAgICAgIC8vIHN0b3JlIHRoZSByZXN1bHRcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmxhcCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB5ZXMsIHRoZXJlIGlzIG92ZXJsYXBcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm92ZXJsYXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUgc3BlY2lmaWMgcmFuZ2VzIHRoYXQgb3ZlcmxhcFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucmFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6IHByZXZpb3VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudDogY3VycmVudFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAvLyBzZWVkIHRoZSByZWR1Y2VcbiAgICAgICAgICAgIH0sIHtvdmVybGFwOiBmYWxzZSwgcmFuZ2VzOiBbXX0pO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9jb2xsaWRlLmpzIiwiaW1wb3J0IFV1aWRVdGlsIGZyb20gJy4uL3V0aWxzL1V1aWRVdGlsJ1xuaW1wb3J0IFNlY29uZHNVdGlsIGZyb20gJy4uL3V0aWxzL1NlY29uZHNVdGlsJ1xuaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vdXRpbHMvVGltZUNvbnZlcnRlcidcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nXG5pbXBvcnQge2dldFN0YXRlLCBkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG91Y2gge1xuICAgIGNvbnN0cnVjdG9yKHN0YXJ0LCBlbmQsIHRleHQsIGNvbG9yLCBhY3Rpb25zKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBnZXRTdGF0ZSgnKicpO1xuICAgICAgICB2YXIgdXVpZCA9IG5ldyBVdWlkVXRpbCgpO1xuICAgICAgICB0aGlzLmlkID0gdXVpZC5nZW5lcmF0ZVVVSUQoKTtcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLm1vdXNlSXNPdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnggPSBudWxsO1xuICAgICAgICB0aGlzLnkgPSBudWxsO1xuICAgICAgICB0aGlzLndpZHRoID0gMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLmxpbWl0VGV4dFkgPSAzMCArIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRZO1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zID8gYWN0aW9ucyA6IFtdXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5jYWxjdWxhdGVYKCk7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueSA/IHRoaXMueSA6IHRoaXMuY2FsY3VsYXRlWSgpO1xuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5jYWxjdWxhdGVXaWR0aCgpO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuY2FsY3VsYXRlSGVpZ2h0KCk7XG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guaWQgPT0gdGhpcy5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5jb2xvci5yZ2JhLmFscGhhID0gMTAwO1xuICAgICAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgICAgICAgcC50ZXh0U2l6ZSgxMik7XG4gICAgICAgICAgICBwLnRleHRTdHlsZShwLk5PUk1BTCk7XG4gICAgICAgICAgICBwLmZpbGwodGhpcy5jb2xvci5yZ2JhLnIsIHRoaXMuY29sb3IucmdiYS5nLCB0aGlzLmNvbG9yLnJnYmEuYiwgMTAwKTtcbiAgICAgICAgICAgIHAucmVjdCh0aGlzLnggKyB0aGlzLndpZHRoIC0gMzAsIHRoaXMubGltaXRUZXh0WSwgNjAsIDE1KTtcbiAgICAgICAgICAgIHAucmVjdCh0aGlzLnggLSAzMCwgdGhpcy5saW1pdFRleHRZLCA2MCwgMTUpO1xuICAgICAgICAgICAgcC5maWxsKDI1NSwgMjU1LCAyNTUsIDEwMCk7XG4gICAgICAgICAgICBwLnRleHRTdHlsZShwLkJPTEQpO1xuICAgICAgICAgICAgcC50ZXh0KFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy5zdGFydCksIHRoaXMueCAtIDMwLCB0aGlzLmxpbWl0VGV4dFksIDYwLCAyMCk7XG4gICAgICAgICAgICBwLnRleHQoVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLmVuZCksIHRoaXMueCAtIDMwICsgdGhpcy53aWR0aCwgdGhpcy5saW1pdFRleHRZLCA2MCwgMjApO1xuICAgICAgICAgICAgcC50ZXh0QWxpZ24ocC5DRU5URVIpO1xuICAgICAgICAgICAgcC5zdHJva2UocC5jb2xvcih0aGlzLmNvbG9yLnJnYmEuciwgdGhpcy5jb2xvci5yZ2JhLmcsIHRoaXMuY29sb3IucmdiYS5iKSlcbiAgICAgICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDIpXG4gICAgICAgICAgICBwLmxpbmUodGhpcy54LCB0aGlzLmxpbWl0VGV4dFkgKyAyMCwgdGhpcy54LCB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFkpO1xuICAgICAgICAgICAgcC5saW5lKHRoaXMueCArIHRoaXMud2lkdGgsIHRoaXMubGltaXRUZXh0WSArIDIwLCB0aGlzLnggKyB0aGlzLndpZHRoLCB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZW5kIC0gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWUgPiAwKSB7XG4gICAgICAgICAgICBwLmZpbGwoMjU1KTtcbiAgICAgICAgICAgIHAuZmlsbCh0aGlzLmNvbG9yLnJnYmEuciwgdGhpcy5jb2xvci5yZ2JhLmcsIHRoaXMuY29sb3IucmdiYS5iLCB0aGlzLmNvbG9yLnJnYmEuYWxwaGEpOyAgLy8gVXNlIGNvbG9yIHZhcmlhYmxlICdjJyBhcyBmaWxsIGNvbG9yXG4gICAgICAgICAgICBwLm5vU3Ryb2tlKCk7ICAvLyBEb24ndCBkcmF3IGEgc3Ryb2tlIGFyb3VuZCBzaGFwZXNcbiAgICAgICAgICAgIHAucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpOyAgLy8gRHJhdyByZWN0YW5nbGVcbiAgICAgICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDApO1xuICAgICAgICAgICAgcC50ZXh0U2l6ZSgxMik7XG4gICAgICAgICAgICBwLnRleHRTdHlsZShwLk5PUk1BTCk7XG4gICAgICAgICAgICBwLmZpbGwoMjU1LCAyNTUsIDI1NSwgdGhpcy5jb2xvci5yZ2JhLmFscGhhKTsgIC8vIFVzZSBjb2xvciB2YXJpYWJsZSAnYycgYXMgZmlsbCBjb2xvclxuICAgICAgICAgICAgcC5yZWN0KHRoaXMueCArIDIsIHRoaXMueSArIDEsIHRoaXMud2lkdGggLSA0LCAyMCk7ICAvLyBEcmF3IHJlY3RhbmdsZVxuICAgICAgICAgICAgcC5maWxsKDAsIDAsIDAsIHRoaXMuY29sb3IucmdiYS5hbHBoYSk7XG4gICAgICAgICAgICBwLnRleHQodGhpcy50ZXh0LCB0aGlzLnggKyAyLCB0aGlzLnkgKyAxLCB0aGlzLndpZHRoIC0gNCwgMjApO1xuICAgICAgICAgICAgcC50ZXh0QWxpZ24ocC5DRU5URVIpO1xuICAgICAgICAgICAgcC5maWxsKDAsIDAsIDAsIDEwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3QWN0aW9ucygpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmFjdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uc1tqXS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlZGl0UHJlc3NlZCh0b3VjaCwgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkVG91Y2gnLCB0b3VjaCk7XG4gICAgICAgIHZtLmVkaXRUb3VjaChldmVudCwgdG91Y2gpO1xuICAgIH1cblxuICAgIGlzTW91c2VPdmVyKHgsIHkpIHtcbiAgICAgICAgaWYgKHggPj0gdGhpcy54ICYmIHggPD0gKHRoaXMueCArIHRoaXMud2lkdGgpICYmIHkgPj0gdGhpcy55ICYmIHkgPD0gKHRoaXMueSArIHRoaXMuaGVpZ2h0KSkge1xuICAgICAgICAgICAgdGhpcy5jb2xvci5yZ2JhLmFscGhhID0gMTAwO1xuICAgICAgICAgICAgdGhpcy5tb3VzZUlzT3ZlciA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9yLnJnYmEuYWxwaGEgPSA1MDtcbiAgICAgICAgICAgIHRoaXMubW91c2VJc092ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZUlzT3ZlcjtcbiAgICB9XG5cbiAgICBpc01vdXNlUHJlc3NzZWRPdmVyKHgsIHkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5yZWNvcmRpbmdBY3Rpb24gJiYgIXRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnJlY29yZGluZ1RvdWNoKSB7XG4gICAgICAgICAgICBpZiAoeSA+PSB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WSkge1xuICAgICAgICAgICAgICAgIGlmICh4ID49IHRoaXMueCAmJiB4IDw9ICh0aGlzLnggKyB0aGlzLndpZHRoKSAmJiB5ID49IHRoaXMueSAmJiB5IDw9ICh0aGlzLnkgKyB0aGlzLmhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2bS5zdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kcmVmcy5wbGF5ZXIuYXBpKCkuYWJMb29wUGx1Z2luLnNldFN0YXJ0KHRoaXMuc3RhcnQpLnNldEVuZCh0aGlzLmVuZCkuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kcmVmcy5wbGF5ZXIuYXBpKCkuYWJMb29wUGx1Z2luLmdvVG9TdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJHJlZnMucGxheWVyLmFwaSgpLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZFRvdWNoJywgdGhpcylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY2FsY3VsYXRlWCgpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gKHRoaXMuc3RhcnQgLSB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSkgKiB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMzA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhcnQgKyAzMFxuICAgIH1cblxuICAgIGNhbGN1bGF0ZVkoKSB7XG4gICAgICAgIHJldHVybiA2MSArIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRZO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVdpZHRoKCkge1xuICAgICAgICB2YXIgc3RhcnQgPSAodGhpcy5zdGFydCAtIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRUaW1lKSAqIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kV2lkdGg7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5lbmQgLSB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSkgKiB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodGhpcy5lbmQgLSB0aGlzLnN0YXJ0KSAqIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kV2lkdGg7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlSGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gNjA7XG4gICAgfVxuXG4gICAgZ2V0Rm9ybWF0ZWRTdGFydCgpIHtcbiAgICAgICAgVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnN0YXJ0KVxuICAgIH1cbn1cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdG91Y2hlcy9Ub3VjaC5qcyIsImltcG9ydCBUaW1lQ29udmVydGVyIGZyb20gJy4vVGltZUNvbnZlcnRlcidcbmltcG9ydCB7Z2V0U3RhdGUsIGRpc3BhdGNofSBmcm9tICdtb2Nrc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWNvbmRzVXRpbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBnZXRTdGF0ZSgnKicpO1xuICAgIH1cblxuICAgIGdldEZvcm1hdHRlZFRpbWUoeCkge1xuICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyhNYXRoLmZsb29yKHggLyB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoKSk7XG4gICAgfVxuXG4gICAgZ2V0U2Vjb25kcyh4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHggLyB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoKTtcbiAgICB9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3V0aWxzL1NlY29uZHNVdGlsLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXVpZFV0aWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIGdlbmVyYXRlVVVJRCgpIHtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZCAvIDE2KTtcbiAgICAgICAgICAgIHJldHVybiAoYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpKS50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXVpZDtcbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91dGlscy9VdWlkVXRpbC5qcyIsIiFmdW5jdGlvbihlLG8pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPW8oKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLG8pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuVnVlQ29sb3I9bygpOmUuVnVlQ29sb3I9bygpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIG8ocil7aWYodFtyXSlyZXR1cm4gdFtyXS5leHBvcnRzO3ZhciBhPXRbcl09e2V4cG9ydHM6e30saWQ6cixsb2FkZWQ6ITF9O3JldHVybiBlW3JdLmNhbGwoYS5leHBvcnRzLGEsYS5leHBvcnRzLG8pLGEubG9hZGVkPSEwLGEuZXhwb3J0c312YXIgdD17fTtyZXR1cm4gby5tPWUsby5jPXQsby5wPVwiXCIsbygwKX0oW2Z1bmN0aW9uKGUsbyx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19dmFyIGE9dCgzNyksaT1yKGEpLG49dCgzOCkscz1yKG4pLGw9dCg0MSksYz1yKGwpLHU9dCg0MiksZD1yKHUpLGg9dCgzOSksZj1yKGgpLF89dCg0MCkscD1yKF8pLHY9dCgzNiksZz1yKHYpLGI9dCg2KSxtPXIoYikseD10KDgpLHc9cih4KSxDPXQoNCkseT1yKEMpLGs9dCg1KSxGPXIoayksQT10KDcpLFI9cihBKSxTPXQoMyksTT1yKFMpLE49e3ZlcnNpb246XCIxLjAuMjZcIixDb21wYWN0OmlbXCJkZWZhdWx0XCJdLE1hdGVyaWFsOnNbXCJkZWZhdWx0XCJdLFNsaWRlcjpjW1wiZGVmYXVsdFwiXSxTd2F0Y2hlczpkW1wiZGVmYXVsdFwiXSxQaG90b3Nob3A6ZltcImRlZmF1bHRcIl0sU2tldGNoOnBbXCJkZWZhdWx0XCJdLENocm9tZTpnW1wiZGVmYXVsdFwiXSxBbHBoYTptW1wiZGVmYXVsdFwiXSxDaGVja2JvYXJkOndbXCJkZWZhdWx0XCJdLEVkaXRhYmxlSW5wdXQ6eVtcImRlZmF1bHRcIl0sSHVlOkZbXCJkZWZhdWx0XCJdLFNhdHVyYXRpb246UltcImRlZmF1bHRcIl0sQ29sb3JNaXhpbjpNW1wiZGVmYXVsdFwiXX07ZS5leHBvcnRzPU59LGZ1bmN0aW9uKGUsbyl7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7dmFyIGU9W107cmV0dXJuIGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtmb3IodmFyIGU9W10sbz0wO288dGhpcy5sZW5ndGg7bysrKXt2YXIgdD10aGlzW29dO3RbMl0/ZS5wdXNoKFwiQG1lZGlhIFwiK3RbMl0rXCJ7XCIrdFsxXStcIn1cIik6ZS5wdXNoKHRbMV0pfXJldHVybiBlLmpvaW4oXCJcIil9LGUuaT1mdW5jdGlvbihvLHQpe1wic3RyaW5nXCI9PXR5cGVvZiBvJiYobz1bW251bGwsbyxcIlwiXV0pO2Zvcih2YXIgcj17fSxhPTA7YTx0aGlzLmxlbmd0aDthKyspe3ZhciBpPXRoaXNbYV1bMF07XCJudW1iZXJcIj09dHlwZW9mIGkmJihyW2ldPSEwKX1mb3IoYT0wO2E8by5sZW5ndGg7YSsrKXt2YXIgbj1vW2FdO1wibnVtYmVyXCI9PXR5cGVvZiBuWzBdJiZyW25bMF1dfHwodCYmIW5bMl0/blsyXT10OnQmJihuWzJdPVwiKFwiK25bMl0rXCIpIGFuZCAoXCIrdCtcIilcIiksZS5wdXNoKG4pKX19LGV9fSxmdW5jdGlvbihlLG8sdCl7ZnVuY3Rpb24gcihlLG8pe2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXt2YXIgcj1lW3RdLGE9ZFtyLmlkXTtpZihhKXthLnJlZnMrKztmb3IodmFyIGk9MDtpPGEucGFydHMubGVuZ3RoO2krKylhLnBhcnRzW2ldKHIucGFydHNbaV0pO2Zvcig7aTxyLnBhcnRzLmxlbmd0aDtpKyspYS5wYXJ0cy5wdXNoKGwoci5wYXJ0c1tpXSxvKSl9ZWxzZXtmb3IodmFyIG49W10saT0wO2k8ci5wYXJ0cy5sZW5ndGg7aSsrKW4ucHVzaChsKHIucGFydHNbaV0sbykpO2Rbci5pZF09e2lkOnIuaWQscmVmczoxLHBhcnRzOm59fX19ZnVuY3Rpb24gYShlKXtmb3IodmFyIG89W10sdD17fSxyPTA7cjxlLmxlbmd0aDtyKyspe3ZhciBhPWVbcl0saT1hWzBdLG49YVsxXSxzPWFbMl0sbD1hWzNdLGM9e2NzczpuLG1lZGlhOnMsc291cmNlTWFwOmx9O3RbaV0/dFtpXS5wYXJ0cy5wdXNoKGMpOm8ucHVzaCh0W2ldPXtpZDppLHBhcnRzOltjXX0pfXJldHVybiBvfWZ1bmN0aW9uIGkoZSxvKXt2YXIgdD1fKCkscj1nW2cubGVuZ3RoLTFdO2lmKFwidG9wXCI9PT1lLmluc2VydEF0KXI/ci5uZXh0U2libGluZz90Lmluc2VydEJlZm9yZShvLHIubmV4dFNpYmxpbmcpOnQuYXBwZW5kQ2hpbGQobyk6dC5pbnNlcnRCZWZvcmUobyx0LmZpcnN0Q2hpbGQpLGcucHVzaChvKTtlbHNle2lmKFwiYm90dG9tXCIhPT1lLmluc2VydEF0KXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTt0LmFwcGVuZENoaWxkKG8pfX1mdW5jdGlvbiBuKGUpe2UucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKTt2YXIgbz1nLmluZGV4T2YoZSk7bz49MCYmZy5zcGxpY2UobywxKX1mdW5jdGlvbiBzKGUpe3ZhciBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtyZXR1cm4gby50eXBlPVwidGV4dC9jc3NcIixpKGUsbyksb31mdW5jdGlvbiBsKGUsbyl7dmFyIHQscixhO2lmKG8uc2luZ2xldG9uKXt2YXIgaT12Kys7dD1wfHwocD1zKG8pKSxyPWMuYmluZChudWxsLHQsaSwhMSksYT1jLmJpbmQobnVsbCx0LGksITApfWVsc2UgdD1zKG8pLHI9dS5iaW5kKG51bGwsdCksYT1mdW5jdGlvbigpe24odCl9O3JldHVybiByKGUpLGZ1bmN0aW9uKG8pe2lmKG8pe2lmKG8uY3NzPT09ZS5jc3MmJm8ubWVkaWE9PT1lLm1lZGlhJiZvLnNvdXJjZU1hcD09PWUuc291cmNlTWFwKXJldHVybjtyKGU9byl9ZWxzZSBhKCl9fWZ1bmN0aW9uIGMoZSxvLHQscil7dmFyIGE9dD9cIlwiOnIuY3NzO2lmKGUuc3R5bGVTaGVldCllLnN0eWxlU2hlZXQuY3NzVGV4dD1iKG8sYSk7ZWxzZXt2YXIgaT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhKSxuPWUuY2hpbGROb2RlcztuW29dJiZlLnJlbW92ZUNoaWxkKG5bb10pLG4ubGVuZ3RoP2UuaW5zZXJ0QmVmb3JlKGksbltvXSk6ZS5hcHBlbmRDaGlsZChpKX19ZnVuY3Rpb24gdShlLG8pe3ZhciB0PW8uY3NzLHI9by5tZWRpYSxhPW8uc291cmNlTWFwO2lmKHImJmUuc2V0QXR0cmlidXRlKFwibWVkaWFcIixyKSxhJiYodCs9XCJcXG4vKiMgc291cmNlVVJMPVwiK2Euc291cmNlc1swXStcIiAqL1wiLHQrPVwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIitidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShhKSkpKStcIiAqL1wiKSxlLnN0eWxlU2hlZXQpZS5zdHlsZVNoZWV0LmNzc1RleHQ9dDtlbHNle2Zvcig7ZS5maXJzdENoaWxkOyllLnJlbW92ZUNoaWxkKGUuZmlyc3RDaGlsZCk7ZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KSl9fXZhciBkPXt9LGg9ZnVuY3Rpb24oZSl7dmFyIG87cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIG8mJihvPWUuYXBwbHkodGhpcyxhcmd1bWVudHMpKSxvfX0sZj1oKGZ1bmN0aW9uKCl7cmV0dXJuL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSl9KSxfPWgoZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuaGVhZHx8ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdfSkscD1udWxsLHY9MCxnPVtdO2UuZXhwb3J0cz1mdW5jdGlvbihlLG8pe289b3x8e30sXCJ1bmRlZmluZWRcIj09dHlwZW9mIG8uc2luZ2xldG9uJiYoby5zaW5nbGV0b249ZigpKSxcInVuZGVmaW5lZFwiPT10eXBlb2Ygby5pbnNlcnRBdCYmKG8uaW5zZXJ0QXQ9XCJib3R0b21cIik7dmFyIHQ9YShlKTtyZXR1cm4gcih0LG8pLGZ1bmN0aW9uKGUpe2Zvcih2YXIgaT1bXSxuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBzPXRbbl0sbD1kW3MuaWRdO2wucmVmcy0tLGkucHVzaChsKX1pZihlKXt2YXIgYz1hKGUpO3IoYyxvKX1mb3IodmFyIG49MDtuPGkubGVuZ3RoO24rKyl7dmFyIGw9aVtuXTtpZigwPT09bC5yZWZzKXtmb3IodmFyIHU9MDt1PGwucGFydHMubGVuZ3RoO3UrKylsLnBhcnRzW3VdKCk7ZGVsZXRlIGRbbC5pZF19fX19O3ZhciBiPWZ1bmN0aW9uKCl7dmFyIGU9W107cmV0dXJuIGZ1bmN0aW9uKG8sdCl7cmV0dXJuIGVbb109dCxlLmZpbHRlcihCb29sZWFuKS5qb2luKFwiXFxuXCIpfX0oKX0sZnVuY3Rpb24oZSxvLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1mdW5jdGlvbiBhKGUsbyl7ZS5hJiZlLmE+MSYmKGUuYT0xKTt2YXIgdD1lLmhleD8oMCxuW1wiZGVmYXVsdFwiXSkoZS5oZXgpOigwLG5bXCJkZWZhdWx0XCJdKShlKSxyPXQudG9Ic2woKSxhPXQudG9Ic3YoKTtyZXR1cm4gMD09PXIucyYmKHIuaD1lLmh8fG98fDAsYS5oPWUuaHx8b3x8MCkse2hzbDpyLGhleDp0LnRvSGV4U3RyaW5nKCkudG9VcHBlckNhc2UoKSxyZ2JhOnQudG9SZ2IoKSxoc3Y6YSxvbGRIdWU6ZS5ofHxvfHxyLmgsc291cmNlOmUuc291cmNlLGE6ZS5hfX1PYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT10KDM1KSxuPXIoaSk7b1tcImRlZmF1bHRcIl09e3Byb3BzOltcInZhbHVlXCJdLGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57dmFsOmEodGhpcy52YWx1ZSl9fSxjb21wdXRlZDp7Y29sb3JzOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx9LHNldDpmdW5jdGlvbihlKXt0aGlzLnZhbD1lLHRoaXMuJGVtaXQoXCJjaGFuZ2UtY29sb3JcIixlKX19fSx3YXRjaDp7dmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy52YWw9YShlKX19LGNyZWF0ZWQ6ZnVuY3Rpb24oKXt9LG1ldGhvZHM6e2NvbG9yQ2hhbmdlOmZ1bmN0aW9uKGUsbyl7dGhpcy5jb2xvcnM9YShlLG98fHRoaXMub2xkSHVlKSx0aGlzLm9sZEh1ZT10aGlzLmNvbG9ycy5oc2wuaH0saXNWYWxpZEhleDpmdW5jdGlvbihlKXtyZXR1cm4oMCxuW1wiZGVmYXVsdFwiXSkoZSkuaXNWYWxpZCgpfSxzaW1wbGVDaGVja0ZvclZhbGlkQ29sb3I6ZnVuY3Rpb24oZSl7Zm9yKHZhciBvPVtcInJcIixcImdcIixcImJcIixcImFcIixcImhcIixcInNcIixcImFcIixcInZcIl0sdD0wLHI9MCxhPTA7YTxvLmxlbmd0aDthKyspe3ZhciBpPW9bYV07ZVtpXSYmKHQrKyxpc05hTihlW2ldKXx8cisrKX1pZih0PT09cilyZXR1cm4gZX19fX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByLGE7dCg1Nikscj10KDE4KTt2YXIgaT10KDQ0KTthPXI9cnx8e30sXCJvYmplY3RcIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXXx8KGE9cj1yW1wiZGVmYXVsdFwiXSksXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YS5vcHRpb25zKSxhLnJlbmRlcj1pLnJlbmRlcixhLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyxlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSxvLHQpe3ZhciByLGE7dCg1Nykscj10KDE5KTt2YXIgaT10KDQ1KTthPXI9cnx8e30sXCJvYmplY3RcIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXXx8KGE9cj1yW1wiZGVmYXVsdFwiXSksXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YS5vcHRpb25zKSxhLnJlbmRlcj1pLnJlbmRlcixhLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyxlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSxvLHQpe3ZhciByLGE7dCg2NSkscj10KDE2KTt2YXIgaT10KDUzKTthPXI9cnx8e30sXCJvYmplY3RcIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXXx8KGE9cj1yW1wiZGVmYXVsdFwiXSksXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YS5vcHRpb25zKSxhLnJlbmRlcj1pLnJlbmRlcixhLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyxlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSxvLHQpe3ZhciByLGE7dCg1OCkscj10KDIwKTt2YXIgaT10KDQ2KTthPXI9cnx8e30sXCJvYmplY3RcIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXXx8KGE9cj1yW1wiZGVmYXVsdFwiXSksXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YS5vcHRpb25zKSxhLnJlbmRlcj1pLnJlbmRlcixhLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyxlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSxvLHQpe3ZhciByLGE7dCg2Nikscj10KDE3KTt2YXIgaT10KDU0KTthPXI9cnx8e30sXCJvYmplY3RcIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXXx8KGE9cj1yW1wiZGVmYXVsdFwiXSksXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YS5vcHRpb25zKSxhLnJlbmRlcj1pLnJlbmRlcixhLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyxlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSxvLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYT10KDMpLGk9cihhKSxuPXQoNCkscz1yKG4pLGw9dCg3KSxjPXIobCksdT10KDUpLGQ9cih1KSxoPXQoNiksZj1yKGgpO29bXCJkZWZhdWx0XCJdPXtuYW1lOlwiQ2hyb21lXCIsbWl4aW5zOltpW1wiZGVmYXVsdFwiXV0scHJvcHM6e30sY29tcG9uZW50czp7c2F0dXJhdGlvbjpjW1wiZGVmYXVsdFwiXSxodWU6ZFtcImRlZmF1bHRcIl0sYWxwaGE6ZltcImRlZmF1bHRcIl0sXCJlZC1pblwiOnNbXCJkZWZhdWx0XCJdfSxkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue2ZpZWxkczpbXCJoZXhcIixcInJnYmFcIixcImhzbGFcIl0sZmllbGRzSW5kZXg6MCxoaWdobGlnaHQ6ITF9fSxjb21wdXRlZDp7YWN0aXZlQ29sb3I6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmNvbG9ycy5yZ2JhO3JldHVyblwicmdiYShcIitbZS5yLGUuZyxlLmIsZS5hXS5qb2luKFwiLFwiKStcIilcIn19LG1ldGhvZHM6e2hhbmRsZVByZXNldDpmdW5jdGlvbihlKXt0aGlzLmNvbG9yQ2hhbmdlKHtoZXg6ZSxzb3VyY2U6XCJoZXhcIn0pfSxjaGlsZENoYW5nZTpmdW5jdGlvbihlKXt0aGlzLmNvbG9yQ2hhbmdlKGUpfSxpbnB1dENoYW5nZTpmdW5jdGlvbihlKXtlJiYoZS5oZXg/dGhpcy5pc1ZhbGlkSGV4KGUuaGV4KSYmdGhpcy5jb2xvckNoYW5nZSh7aGV4OmUuaGV4LHNvdXJjZTpcImhleFwifSk6KGUucnx8ZS5nfHxlLmJ8fGUuYSkmJnRoaXMuY29sb3JDaGFuZ2Uoe3I6ZS5yfHx0aGlzLmNvbG9ycy5yZ2JhLnIsZzplLmd8fHRoaXMuY29sb3JzLnJnYmEuZyxiOmUuYnx8dGhpcy5jb2xvcnMucmdiYS5iLGE6ZS5hfHx0aGlzLmNvbG9ycy5yZ2JhLmEsc291cmNlOlwicmdiYVwifSkpfSx0b2dnbGVWaWV3czpmdW5jdGlvbigpe3JldHVybiB0aGlzLmZpZWxkc0luZGV4Pj0yP3ZvaWQodGhpcy5maWVsZHNJbmRleD0wKTp2b2lkIHRoaXMuZmllbGRzSW5kZXgrK30sc2hvd0hpZ2hsaWdodDpmdW5jdGlvbigpe3RoaXMuaGlnaGxpZ2h0PSEwfSxoaWRlSGlnaGxpZ2h0OmZ1bmN0aW9uKCl7dGhpcy5oaWdobGlnaHQ9ITF9fX19LGZ1bmN0aW9uKGUsbyx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGE9dCgzKSxpPXIoYSksbj10KDQpLHM9cihuKSxsPVtcIiM0RDRENERcIixcIiM5OTk5OTlcIixcIiNGRkZGRkZcIixcIiNGNDRFM0JcIixcIiNGRTkyMDBcIixcIiNGQ0RDMDBcIixcIiNEQkRGMDBcIixcIiNBNEREMDBcIixcIiM2OENDQ0FcIixcIiM3M0Q4RkZcIixcIiNBRUExRkZcIixcIiNGREExRkZcIixcIiMzMzMzMzNcIixcIiM4MDgwODBcIixcIiNDQ0NDQ0NcIixcIiNEMzMxMTVcIixcIiNFMjczMDBcIixcIiNGQ0M0MDBcIixcIiNCMEJDMDBcIixcIiM2OEJDMDBcIixcIiMxNkE1QTVcIixcIiMwMDlDRTBcIixcIiM3QjY0RkZcIixcIiNGQTI4RkZcIixcIiMwMDAwMDBcIixcIiM2NjY2NjZcIixcIiNCM0IzQjNcIixcIiM5RjA1MDBcIixcIiNDNDUxMDBcIixcIiNGQjlFMDBcIixcIiM4MDg5MDBcIixcIiMxOTREMzNcIixcIiMwQzc5N0RcIixcIiMwMDYyQjFcIixcIiM2NTMyOTRcIixcIiNBQjE0OUVcIl07b1tcImRlZmF1bHRcIl09e25hbWU6XCJDb21wYWN0XCIsbWl4aW5zOltpW1wiZGVmYXVsdFwiXV0scHJvcHM6e30sY29tcG9uZW50czp7XCJlZC1pblwiOnNbXCJkZWZhdWx0XCJdfSxjb21wdXRlZDp7cGljazpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbG9ycy5oZXh9fSxkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue2RlZmF1bHRDb2xvcnM6bH19LG1ldGhvZHM6e2hhbmRsZXJDbGljazpmdW5jdGlvbihlKXt0aGlzLmNvbG9yQ2hhbmdlKHtoZXg6ZSxzb3VyY2U6XCJoZXhcIn0pfSxvbkNoYW5nZTpmdW5jdGlvbihlKXtlJiYoZS5oZXg/dGhpcy5pc1ZhbGlkSGV4KGUuaGV4KSYmdGhpcy5jb2xvckNoYW5nZSh7aGV4OmUuaGV4LHNvdXJjZTpcImhleFwifSk6KGUucnx8ZS5nfHxlLmIpJiZ0aGlzLmNvbG9yQ2hhbmdlKHtyOmUucnx8dGhpcy5jb2xvcnMucmdiYS5yLGc6ZS5nfHx0aGlzLmNvbG9ycy5yZ2JhLmcsYjplLmJ8fHRoaXMuY29sb3JzLnJnYmEuYixhOmUuYXx8dGhpcy5jb2xvcnMucmdiYS5hLHNvdXJjZTpcInJnYmFcIn0pKX19fX0sZnVuY3Rpb24oZSxvLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYT10KDQpLGk9cihhKSxuPXQoMykscz1yKG4pO29bXCJkZWZhdWx0XCJdPXtuYW1lOlwiTWF0ZXJpYWxcIixtaXhpbnM6W3NbXCJkZWZhdWx0XCJdXSxjb21wb25lbnRzOntcImVkLWluXCI6aVtcImRlZmF1bHRcIl19LG1ldGhvZHM6e29uQ2hhbmdlOmZ1bmN0aW9uKGUpe2UmJihlLmhleD90aGlzLmlzVmFsaWRIZXgoZS5oZXgpJiZ0aGlzLmNvbG9yQ2hhbmdlKHtoZXg6ZS5oZXgsc291cmNlOlwiaGV4XCJ9KTooZS5yfHxlLmd8fGUuYikmJnRoaXMuY29sb3JDaGFuZ2Uoe3I6ZS5yfHx0aGlzLmNvbG9ycy5yZ2JhLnIsZzplLmd8fHRoaXMuY29sb3JzLnJnYmEuZyxiOmUuYnx8dGhpcy5jb2xvcnMucmdiYS5iLGE6ZS5hfHx0aGlzLmNvbG9ycy5yZ2JhLmEsc291cmNlOlwicmdiYVwifSkpfX19fSxmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPXQoMyksaT1yKGEpLG49dCg0KSxzPXIobiksbD10KDcpLGM9cihsKSx1PXQoNSksZD1yKHUpLGg9dCg2KSxmPXIoaCk7b1tcImRlZmF1bHRcIl09e25hbWU6XCJQaG90b3Nob3BcIixtaXhpbnM6W2lbXCJkZWZhdWx0XCJdXSxwcm9wczp7aGVhZDp7dHlwZTpTdHJpbmcsXCJkZWZhdWx0XCI6XCJDb2xvciBQaWNrZXJcIn19LGNvbXBvbmVudHM6e3NhdHVyYXRpb246Y1tcImRlZmF1bHRcIl0saHVlOmRbXCJkZWZhdWx0XCJdLGFscGhhOmZbXCJkZWZhdWx0XCJdLFwiZWQtaW5cIjpzW1wiZGVmYXVsdFwiXX0sZGF0YTpmdW5jdGlvbigpe3JldHVybntjdXJyZW50Q29sb3I6XCIjRkZGXCJ9fSxjcmVhdGVkOmZ1bmN0aW9uKCl7dGhpcy5jdXJyZW50Q29sb3I9dGhpcy5jb2xvcnMuaGV4fSxtZXRob2RzOntjaGlsZENoYW5nZTpmdW5jdGlvbihlKXt0aGlzLmNvbG9yQ2hhbmdlKGUpfSxpbnB1dENoYW5nZTpmdW5jdGlvbihlKXtlJiYoZVtcIiNcIl0/dGhpcy5pc1ZhbGlkSGV4KGVbXCIjXCJdKSYmdGhpcy5jb2xvckNoYW5nZSh7aGV4OmVbXCIjXCJdLHNvdXJjZTpcImhleFwifSk6KGUucnx8ZS5nfHxlLmJ8fGUuYSkmJnRoaXMuY29sb3JDaGFuZ2Uoe3I6ZS5yfHx0aGlzLmNvbG9ycy5yZ2JhLnIsZzplLmd8fHRoaXMuY29sb3JzLnJnYmEuZyxiOmUuYnx8dGhpcy5jb2xvcnMucmdiYS5iLGE6ZS5hfHx0aGlzLmNvbG9ycy5yZ2JhLmEsc291cmNlOlwicmdiYVwifSkpfSxoYW5kbGVBY2NlcHQ6ZnVuY3Rpb24oKXt0aGlzLiRlbWl0KFwib2tcIil9LGhhbmRsZUNhbmNlbDpmdW5jdGlvbigpe3RoaXMuJGVtaXQoXCJjYW5jZWxcIil9fX19LGZ1bmN0aW9uKGUsbyx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGE9dCgzKSxpPXIoYSksbj10KDQpLHM9cihuKSxsPXQoNyksYz1yKGwpLHU9dCg1KSxkPXIodSksaD10KDYpLGY9cihoKSxfPVtcIiNEMDAyMUJcIixcIiNGNUE2MjNcIixcIiNGOEU3MUNcIixcIiM4QjU3MkFcIixcIiM3RUQzMjFcIixcIiM0MTc1MDVcIixcIiNCRDEwRTBcIixcIiM5MDEzRkVcIixcIiM0QTkwRTJcIixcIiM1MEUzQzJcIixcIiNCOEU5ODZcIixcIiMwMDAwMDBcIixcIiM0QTRBNEFcIixcIiM5QjlCOUJcIixcIiNGRkZGRkZcIl07b1tcImRlZmF1bHRcIl09e25hbWU6XCJTa2V0Y2hcIixtaXhpbnM6W2lbXCJkZWZhdWx0XCJdXSxjb21wb25lbnRzOntzYXR1cmF0aW9uOmNbXCJkZWZhdWx0XCJdLGh1ZTpkW1wiZGVmYXVsdFwiXSxhbHBoYTpmW1wiZGVmYXVsdFwiXSxcImVkLWluXCI6c1tcImRlZmF1bHRcIl19LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57cHJlc2V0Q29sb3JzOl99fSxjb21wdXRlZDp7YWN0aXZlQ29sb3I6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmNvbG9ycy5yZ2JhO3JldHVyblwicmdiYShcIitbZS5yLGUuZyxlLmIsZS5hXS5qb2luKFwiLFwiKStcIilcIn19LG1ldGhvZHM6e2hhbmRsZVByZXNldDpmdW5jdGlvbihlKXt0aGlzLmNvbG9yQ2hhbmdlKHtoZXg6ZSxzb3VyY2U6XCJoZXhcIn0pfSxjaGlsZENoYW5nZTpmdW5jdGlvbihlKXt0aGlzLmNvbG9yQ2hhbmdlKGUpfSxpbnB1dENoYW5nZTpmdW5jdGlvbihlKXtlJiYoZS5oZXg/dGhpcy5pc1ZhbGlkSGV4KGUuaGV4KSYmdGhpcy5jb2xvckNoYW5nZSh7aGV4OmUuaGV4LHNvdXJjZTpcImhleFwifSk6KGUucnx8ZS5nfHxlLmJ8fGUuYSkmJnRoaXMuY29sb3JDaGFuZ2Uoe3I6ZS5yfHx0aGlzLmNvbG9ycy5yZ2JhLnIsZzplLmd8fHRoaXMuY29sb3JzLnJnYmEuZyxiOmUuYnx8dGhpcy5jb2xvcnMucmdiYS5iLGE6ZS5hfHx0aGlzLmNvbG9ycy5yZ2JhLmEsc291cmNlOlwicmdiYVwifSkpfX19fSxmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPXQoMyksaT1yKGEpLG49dCg1KSxzPXIobik7b1tcImRlZmF1bHRcIl09e25hbWU6XCJTbGlkZXJcIixtaXhpbnM6W2lbXCJkZWZhdWx0XCJdXSxwcm9wczp7ZGlyZWN0aW9uOlN0cmluZ30sY29tcG9uZW50czp7aHVlOnNbXCJkZWZhdWx0XCJdfSxjb21wdXRlZDp7YWN0aXZlT2Zmc2V0OmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgucm91bmQoMTAwKnRoaXMuY29sb3JzLmhzbC5zKS8xMDA9PT0uNT9NYXRoLnJvdW5kKDEwMCp0aGlzLmNvbG9ycy5oc2wubCkvMTAwOjB9fSxkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue3N3YXRjaGVzOltcIi44MFwiLFwiLjY1XCIsXCIuNTBcIixcIi4zNVwiLFwiLjIwXCJdfX0sbWV0aG9kczp7aHVlQ2hhbmdlOmZ1bmN0aW9uKGUpe3RoaXMuY29sb3JDaGFuZ2UoZSl9LGhhbmRsZVN3Q2xpY2s6ZnVuY3Rpb24oZSxvKXt0aGlzLmNvbG9yQ2hhbmdlKHtoOnRoaXMuY29sb3JzLmhzbC5oLHM6LjUsbDpvLHNvdXJjZTpcImhzbFwifSl9fX19LGZ1bmN0aW9uKGUsbyx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGE9dCgzNCksaT1yKGEpLG49dCgzKSxzPXIobiksbD1bXCJyZWRcIixcInBpbmtcIixcInB1cnBsZVwiLFwiZGVlcFB1cnBsZVwiLFwiaW5kaWdvXCIsXCJibHVlXCIsXCJsaWdodEJsdWVcIixcImN5YW5cIixcInRlYWxcIixcImdyZWVuXCIsXCJsaWdodEdyZWVuXCIsXCJsaW1lXCIsXCJ5ZWxsb3dcIixcImFtYmVyXCIsXCJvcmFuZ2VcIixcImRlZXBPcmFuZ2VcIixcImJyb3duXCIsXCJibHVlR3JleVwiXSxjPVtcIjkwMFwiLFwiNzAwXCIsXCI1MDBcIixcIjMwMFwiLFwiMTAwXCJdLHU9ZnVuY3Rpb24oKXt2YXIgZT1bXTtyZXR1cm4gbC5mb3JFYWNoKGZ1bmN0aW9uKG8pe3ZhciB0PVtdO2MuZm9yRWFjaChmdW5jdGlvbihlKXt0LnB1c2goaVtcImRlZmF1bHRcIl1bb11bZV0udG9VcHBlckNhc2UoKSl9KSxlLnB1c2godCl9KSxlfSgpO29bXCJkZWZhdWx0XCJdPXtuYW1lOlwiU3dhdGNoZXNcIixtaXhpbnM6W3NbXCJkZWZhdWx0XCJdXSxjb21wdXRlZDp7cGljazpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbG9ycy5oZXh9fSxkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue2RlZmF1bHRDb2xvcnM6dX19LG1ldGhvZHM6e2hhbmRsZXJDbGljazpmdW5jdGlvbihlKXt0aGlzLmNvbG9yQ2hhbmdlKHtoZXg6ZSxzb3VyY2U6XCJoZXhcIn0pfX19fSxmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPXQoOCksaT1yKGEpO29bXCJkZWZhdWx0XCJdPXtuYW1lOlwiQWxwaGFcIixwcm9wczp7dmFsdWU6T2JqZWN0LG9uQ2hhbmdlOkZ1bmN0aW9ufSxjb21wb25lbnRzOntjaGVja2JvYXJkOmlbXCJkZWZhdWx0XCJdfSxjb21wdXRlZDp7Y29sb3JzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWV9LGdyYWRpZW50Q29sb3I6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmNvbG9ycy5yZ2JhLG89W2UucixlLmcsZS5iXS5qb2luKFwiLFwiKTtyZXR1cm5cImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYShcIitvK1wiLCAwKSAwJSwgcmdiYShcIitvK1wiLCAxKSAxMDAlKVwifX0sbWV0aG9kczp7aGFuZGxlQ2hhbmdlOmZ1bmN0aW9uKGUsbyl7IW8mJmUucHJldmVudERlZmF1bHQoKTt2YXIgdCxyPXRoaXMuJHJlZnMuY29udGFpbmVyLGE9ci5jbGllbnRXaWR0aCxpPShlLnBhZ2VYfHxlLnRvdWNoZXNbMF0ucGFnZVgpLShyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQrd2luZG93LnBhZ2VYT2Zmc2V0KTt0PWk8MD8wOmk+YT8xOk1hdGgucm91bmQoMTAwKmkvYSkvMTAwLHRoaXMuY29sb3JzLmEhPT10JiZ0aGlzLiRlbWl0KFwib24tY2hhbmdlXCIse2g6dGhpcy5jb2xvcnMuaHNsLmgsczp0aGlzLmNvbG9ycy5oc2wucyxsOnRoaXMuY29sb3JzLmhzbC5sLGE6dCxzb3VyY2U6XCJyZ2JhXCJ9KX0saGFuZGxlTW91c2VEb3duOmZ1bmN0aW9uKGUpe3RoaXMuaGFuZGxlQ2hhbmdlKGUsITApLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5oYW5kbGVDaGFuZ2UpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMuaGFuZGxlTW91c2VVcCl9LGhhbmRsZU1vdXNlVXA6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZEV2ZW50TGlzdGVuZXJzKCl9LHVuYmluZEV2ZW50TGlzdGVuZXJzOmZ1bmN0aW9uKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLmhhbmRsZUNoYW5nZSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5oYW5kbGVNb3VzZVVwKX19fX0sZnVuY3Rpb24oZSxvKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KGUsbyx0KXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnQpcmV0dXJuIG51bGw7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtyLndpZHRoPXIuaGVpZ2h0PTIqdDt2YXIgYT1yLmdldENvbnRleHQoXCIyZFwiKTtyZXR1cm4gYT8oYS5maWxsU3R5bGU9ZSxhLmZpbGxSZWN0KDAsMCxyLndpZHRoLHIuaGVpZ2h0KSxhLmZpbGxTdHlsZT1vLGEuZmlsbFJlY3QoMCwwLHQsdCksYS50cmFuc2xhdGUodCx0KSxhLmZpbGxSZWN0KDAsMCx0LHQpLHIudG9EYXRhVVJMKCkpOm51bGx9ZnVuY3Rpb24gcihlLG8scil7dmFyIGk9ZStcIixcIitvK1wiLFwiK3I7aWYoYVtpXSlyZXR1cm4gYVtpXTt2YXIgbj10KGUsbyxyKTtyZXR1cm4gYVtpXT1uLG59T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGE9e307b1tcImRlZmF1bHRcIl09e25hbWU6XCJDaGVja2JvYXJkXCIscHJvcHM6e3NpemU6e3R5cGU6W051bWJlcixTdHJpbmddLFwiZGVmYXVsdFwiOjh9LHdoaXRlOnt0eXBlOlN0cmluZyxcImRlZmF1bHRcIjpcIiNmZmZcIn0sZ3JleTp7dHlwZTpTdHJpbmcsXCJkZWZhdWx0XCI6XCIjZTZlNmU2XCJ9fSxjb21wdXRlZDp7YmdTdHlsZTpmdW5jdGlvbigpe3JldHVyblwidXJsKFwiK3IodGhpcy53aGl0ZSx0aGlzLmdyZXksdGhpcy5zaXplKStcIikgY2VudGVyIGxlZnRcIn19fX0sZnVuY3Rpb24oZSxvKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvW1wiZGVmYXVsdFwiXT17bmFtZTpcImVkaXRhYmxlSW5wdXRcIixwcm9wczp7bGFiZWw6U3RyaW5nLHZhbHVlOltTdHJpbmcsTnVtYmVyXSxtYXg6TnVtYmVyLGFycm93T2Zmc2V0Ont0eXBlOk51bWJlcixcImRlZmF1bHRcIjoxfX0sY29tcHV0ZWQ6e3ZhbDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlfX0sZmlsdGVyczp7bWF4RmlsdGVyOntyZWFkOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLm1heCYmZT50aGlzLm1heD90aGlzLm1heDplfSx3cml0ZTpmdW5jdGlvbihlLG8pe3JldHVybiBlfX19LG1ldGhvZHM6e3VwZGF0ZTpmdW5jdGlvbihlKXt0aGlzLmhhbmRsZUNoYW5nZShlLnRhcmdldC52YWx1ZSl9LGhhbmRsZUNoYW5nZTpmdW5jdGlvbihlKXt2YXIgbz17fTtvW3RoaXMubGFiZWxdPWUsdGhpcy4kZW1pdChcIm9uLWNoYW5nZVwiLG8pfSxoYW5kbGVCbHVyOmZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKGUpfSxoYW5kbGVLZXlEb3duOmZ1bmN0aW9uKGUpe3ZhciBvPXRoaXMudmFsLHQ9TnVtYmVyKG8pO2lmKHQpe3ZhciByPXRoaXMuYXJyb3dPZmZzZXR8fDE7Mzg9PT1lLmtleUNvZGUmJihvPXQrcix0aGlzLmhhbmRsZUNoYW5nZShvKSxlLnByZXZlbnREZWZhdWx0KCkpLDQwPT09ZS5rZXlDb2RlJiYobz10LXIsdGhpcy5oYW5kbGVDaGFuZ2UobyksZS5wcmV2ZW50RGVmYXVsdCgpKX19LGhhbmRsZURyYWc6ZnVuY3Rpb24oZSl7Y29uc29sZS5sb2coZSl9LGhhbmRsZU1vdXNlRG93bjpmdW5jdGlvbihlKXtjb25zb2xlLmxvZyhlKX19fX0sZnVuY3Rpb24oZSxvKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvW1wiZGVmYXVsdFwiXT17bmFtZTpcIkh1ZVwiLHByb3BzOnt2YWx1ZTpPYmplY3QsZGlyZWN0aW9uOnt0eXBlOlN0cmluZyxcImRlZmF1bHRcIjpcImhvcml6b250YWxcIn19LGNvbXB1dGVkOntjb2xvcnM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZX0sZGlyZWN0aW9uQ2xhc3M6ZnVuY3Rpb24oKXtyZXR1cm57XCJ2dWUtY29sb3JfX2MtaHVlLS1ob3Jpem9udGFsXCI6XCJob3Jpem9udGFsXCI9PT10aGlzLmRpcmVjdGlvbixcInZ1ZS1jb2xvcl9fYy1odWUtLXZlcnRpY2FsXCI6XCJ2ZXJ0aWNhbFwiPT09dGhpcy5kaXJlY3Rpb259fSxwb2ludGVyVG9wOmZ1bmN0aW9uKCl7cmV0dXJuXCJ2ZXJ0aWNhbFwiPT09dGhpcy5kaXJlY3Rpb24/LSgxMDAqdGhpcy5jb2xvcnMuaHNsLmgvMzYwKSsxMDArXCIlXCI6MH0scG9pbnRlckxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm5cInZlcnRpY2FsXCI9PT10aGlzLmRpcmVjdGlvbj8wOjEwMCp0aGlzLmNvbG9ycy5oc2wuaC8zNjArXCIlXCJ9fSxtZXRob2RzOntoYW5kbGVDaGFuZ2U6ZnVuY3Rpb24oZSxvKXshbyYmZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciB0LHIsYT10aGlzLiRyZWZzLmNvbnRhaW5lcixpPWEuY2xpZW50V2lkdGgsbj1hLmNsaWVudEhlaWdodCxzPShlLnBhZ2VYfHxlLnRvdWNoZXNbMF0ucGFnZVgpLShhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQrd2luZG93LnBhZ2VYT2Zmc2V0KSxsPShlLnBhZ2VZfHxlLnRvdWNoZXNbMF0ucGFnZVkpLShhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCt3aW5kb3cucGFnZVlPZmZzZXQpO1widmVydGljYWxcIj09PXRoaXMuZGlyZWN0aW9uPyhsPDA/dD0zNTk6bD5uP3Q9MDoocj0tKDEwMCpsL24pKzEwMCx0PTM2MCpyLzEwMCksdGhpcy5jb2xvcnMuaHNsLmghPT10JiZ0aGlzLiRlbWl0KFwib24tY2hhbmdlXCIse2g6dCxzOnRoaXMuY29sb3JzLmhzbC5zLGw6dGhpcy5jb2xvcnMuaHNsLmwsYTp0aGlzLmNvbG9ycy5oc2wuYSxzb3VyY2U6XCJoc2xcIn0pKTooczwwP3Q9MDpzPmk/dD0zNTk6KHI9MTAwKnMvaSx0PTM2MCpyLzEwMCksdGhpcy5jb2xvcnMuaHNsLmghPT10JiZ0aGlzLiRlbWl0KFwib24tY2hhbmdlXCIse2g6dCxzOnRoaXMuY29sb3JzLmhzbC5zLGw6dGhpcy5jb2xvcnMuaHNsLmwsYTp0aGlzLmNvbG9ycy5oc2wuYSxzb3VyY2U6XCJoc2xcIn0pKX0saGFuZGxlTW91c2VEb3duOmZ1bmN0aW9uKGUpe3RoaXMuaGFuZGxlQ2hhbmdlKGUsITApLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5oYW5kbGVDaGFuZ2UpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMuaGFuZGxlTW91c2VVcCl9LGhhbmRsZU1vdXNlVXA6ZnVuY3Rpb24oZSl7dGhpcy51bmJpbmRFdmVudExpc3RlbmVycygpfSx1bmJpbmRFdmVudExpc3RlbmVyczpmdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5oYW5kbGVDaGFuZ2UpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMuaGFuZGxlTW91c2VVcCl9fX19LGZ1bmN0aW9uKGUsbyx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGE9dCgzMyksaT1yKGEpO29bXCJkZWZhdWx0XCJdPXtuYW1lOlwiU2F0dXJhdGlvblwiLHByb3BzOnt2YWx1ZTpPYmplY3R9LGNvbXB1dGVkOntjb2xvcnM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZX0sYmdDb2xvcjpmdW5jdGlvbigpe3JldHVyblwiaHNsKFwiK3RoaXMuY29sb3JzLmhzbC5oK1wiLDEwMCUsIDUwJSlcIn0scG9pbnRlclRvcDpmdW5jdGlvbigpe3JldHVybi0oMTAwKnRoaXMuY29sb3JzLmhzdi52KSsxMDArXCIlXCJ9LHBvaW50ZXJMZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuIDEwMCp0aGlzLmNvbG9ycy5oc3YucytcIiVcIn19LG1ldGhvZHM6e3Rocm90dGxlOigwLGlbXCJkZWZhdWx0XCJdKShmdW5jdGlvbihlLG8pe2Uobyl9LDUwKSxoYW5kbGVDaGFuZ2U6ZnVuY3Rpb24oZSxvKXshbyYmZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciB0PXRoaXMuJHJlZnMuY29udGFpbmVyLHI9dC5jbGllbnRXaWR0aCxhPXQuY2xpZW50SGVpZ2h0LGk9KGUucGFnZVh8fGUudG91Y2hlc1swXS5wYWdlWCktKHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCt3aW5kb3cucGFnZVhPZmZzZXQpLG49KGUucGFnZVl8fGUudG91Y2hlc1swXS5wYWdlWSktKHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wK3dpbmRvdy5wYWdlWU9mZnNldCk7aTwwP2k9MDppPnI/aT1yOm48MD9uPTA6bj5hJiYobj1hKTt2YXIgcz0xMDAqaS9yLGw9LSgxMDAqbi9hKSsxMDA7dGhpcy50aHJvdHRsZSh0aGlzLm9uQ2hhbmdlLHtoOnRoaXMuY29sb3JzLmhzbC5oLHM6cyx2OmwsYTp0aGlzLmNvbG9ycy5oc2wuYSxzb3VyY2U6XCJyZ2JcIn0pfSxvbkNoYW5nZTpmdW5jdGlvbihlKXt0aGlzLiRlbWl0KFwib24tY2hhbmdlXCIsZSl9LGhhbmRsZU1vdXNlRG93bjpmdW5jdGlvbihlKXt0aGlzLmhhbmRsZUNoYW5nZShlLCEwKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMuaGFuZGxlQ2hhbmdlKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLmhhbmRsZU1vdXNlVXApfSxoYW5kbGVNb3VzZVVwOmZ1bmN0aW9uKGUpe3RoaXMudW5iaW5kRXZlbnRMaXN0ZW5lcnMoKX0sdW5iaW5kRXZlbnRMaXN0ZW5lcnM6ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMuaGFuZGxlQ2hhbmdlKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLmhhbmRsZU1vdXNlVXApfX19fSxmdW5jdGlvbihlLG8sdCl7bz1lLmV4cG9ydHM9dCgxKSgpLG8ucHVzaChbZS5pZCxcIi52dWUtY29sb3JfX2NvbXBhY3R7cGFkZGluZy10b3A6NXB4O3BhZGRpbmctbGVmdDo1cHg7d2lkdGg6MjQwcHg7Ym9yZGVyLXJhZGl1czoycHg7Ym94LXNoYWRvdzowIDJweCAxMHB4IHJnYmEoMCwwLDAsLjEyKSwwIDJweCA1cHggcmdiYSgwLDAsMCwuMTYpO2JhY2tncm91bmQtY29sb3I6I2ZmZn0udnVlLWNvbG9yX19jb21wYWN0X19jb2xvcnN7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MDttYXJnaW46MH0udnVlLWNvbG9yX19jb21wYWN0X19jb2xvci1pdGVte2xpc3Qtc3R5bGU6bm9uZTt3aWR0aDoxNXB4O2hlaWdodDoxNXB4O2Zsb2F0OmxlZnQ7bWFyZ2luLXJpZ2h0OjVweDttYXJnaW4tYm90dG9tOjVweDtwb3NpdGlvbjpyZWxhdGl2ZTtjdXJzb3I6cG9pbnRlcn0udnVlLWNvbG9yX19jb21wYWN0X19jb2xvci1pdGVtLS13aGl0ZXtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZGRkfS52dWUtY29sb3JfX2NvbXBhY3RfX2NvbG9yLWl0ZW0tLXdoaXRlIC52dWUtY29sb3JfX2NvbXBhY3RfX2RvdHtiYWNrZ3JvdW5kOiMwMDB9LnZ1ZS1jb2xvcl9fY29tcGFjdF9fZG90e3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1cHg7cmlnaHQ6NXB4O2JvdHRvbTo1cHg7bGVmdDo1cHg7Ym9yZGVyLXJhZGl1czo1MCU7b3BhY2l0eToxO2JhY2tncm91bmQ6I2ZmZn0udnVlLWNvbG9yX19jb21wYWN0X19maWVsZHN7ZGlzcGxheTpmbGV4O3BhZGRpbmctYm90dG9tOjZweDtwYWRkaW5nLXJpZ2h0OjVweDtwb3NpdGlvbjpyZWxhdGl2ZX0udnVlLWNvbG9yX19jb21wYWN0X19maWVsZHMgLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2lucHV0e3dpZHRoOjcwJTtwYWRkaW5nLWxlZnQ6MzAlO2JhY2tncm91bmQ6bm9uZTtmb250LXNpemU6MTJweDtjb2xvcjojMzMzO2hlaWdodDoxNnB4fS52dWUtY29sb3JfX2NvbXBhY3RfX2ZpZWxkcyAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9fbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7dG9wOjNweDtsZWZ0OjA7bGluZS1oZWlnaHQ6MTZweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Zm9udC1zaXplOjEycHg7Y29sb3I6Izk5OX0udnVlLWNvbG9yX19jb21wYWN0X19waWNrLWNvbG9ye3Bvc2l0aW9uOmFic29sdXRlO3RvcDo2cHg7bGVmdDo1cHg7aGVpZ2h0OjlweDt3aWR0aDo5cHh9LnZ1ZS1jb2xvcl9fY29tcGFjdF9fY29sLTN7ZmxleDoxfS52dWVfY29sb3JfX2NvbXBhY3RfX2NvbC1oZXh7ZmxleDoyfS52dWVfY29sb3JfX2NvbXBhY3RfX2NvbC1oZXggLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2lucHV0e3dpZHRoOjgwJTtwYWRkaW5nLWxlZnQ6MjAlfS52dWVfY29sb3JfX2NvbXBhY3RfX2NvbC1oZXggLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2xhYmVse2Rpc3BsYXk6bm9uZX1cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXR7cG9zaXRpb246cmVsYXRpdmV9LnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2lucHV0e3BhZGRpbmc6MDtib3JkZXI6MDtvdXRsaW5lOm5vbmV9LnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2xhYmVse3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemV9XCIsXCJcIl0pfSxmdW5jdGlvbihlLG8sdCl7bz1lLmV4cG9ydHM9dCgxKSgpLG8ucHVzaChbZS5pZCxcIi52dWUtY29sb3JfX2MtaHVle3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JvcmRlci1yYWRpdXM6MnB4fS52dWUtY29sb3JfX2MtaHVlLS1ob3Jpem9udGFse2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLHJlZCAwLCNmZjAgMTclLCMwZjAgMzMlLCMwZmYgNTAlLCMwMGYgNjclLCNmMGYgODMlLHJlZCl9LnZ1ZS1jb2xvcl9fYy1odWUtLXZlcnRpY2Fse2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDBkZWcscmVkIDAsI2ZmMCAxNyUsIzBmMCAzMyUsIzBmZiA1MCUsIzAwZiA2NyUsI2YwZiA4MyUscmVkKX0udnVlLWNvbG9yX19jLWh1ZV9fY29udGFpbmVye2N1cnNvcjpwb2ludGVyO21hcmdpbjowIDJweDtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MTAwJX0udnVlLWNvbG9yX19jLWh1ZV9fcG9pbnRlcnt6LWluZGV4OjI7cG9zaXRpb246YWJzb2x1dGV9LnZ1ZS1jb2xvcl9fYy1odWVfX3BpY2tlcntjdXJzb3I6cG9pbnRlcjttYXJnaW4tdG9wOjFweDt3aWR0aDo0cHg7Ym9yZGVyLXJhZGl1czoxcHg7aGVpZ2h0OjhweDtib3gtc2hhZG93OjAgMCAycHggcmdiYSgwLDAsMCwuNik7YmFja2dyb3VuZDojZmZmO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0ycHgpfVwiLFwiXCJdKX0sZnVuY3Rpb24oZSxvLHQpe289ZS5leHBvcnRzPXQoMSkoKSxvLnB1c2goW2UuaWQsXCIudnVlLWNvbG9yX19zYXR1cmF0aW9uLC52dWUtY29sb3JfX3NhdHVyYXRpb24tLWJsYWNrLC52dWUtY29sb3JfX3NhdHVyYXRpb24tLXdoaXRle2N1cnNvcjpwb2ludGVyO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowfS52dWUtY29sb3JfX3NhdHVyYXRpb24tLXdoaXRle2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLCNmZmYsaHNsYSgwLDAlLDEwMCUsMCkpfS52dWUtY29sb3JfX3NhdHVyYXRpb24tLWJsYWNre2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDBkZWcsIzAwMCx0cmFuc3BhcmVudCl9LnZ1ZS1jb2xvcl9fc2F0dXJhdGlvbi0tcG9pbnRlcntjdXJzb3I6cG9pbnRlcjtwb3NpdGlvbjphYnNvbHV0ZX0udnVlLWNvbG9yX19zYXR1cmF0aW9uLS1jaXJjbGV7Y3Vyc29yOmhlYWQ7d2lkdGg6NHB4O2hlaWdodDo0cHg7Ym94LXNoYWRvdzowIDAgMCAxLjVweCAjZmZmLGluc2V0IDAgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjMpLDAgMCAxcHggMnB4IHJnYmEoMCwwLDAsLjQpO2JvcmRlci1yYWRpdXM6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTJweCwtMnB4KX1cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fbWF0ZXJpYWx7d2lkdGg6OThweDtoZWlnaHQ6OThweDtwYWRkaW5nOjE2cHg7Zm9udC1mYW1pbHk6Um9ib3RvO3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6MnB4O2JveC1zaGFkb3c6MCAycHggMTBweCByZ2JhKDAsMCwwLC4xMiksMCAycHggNXB4IHJnYmEoMCwwLDAsLjE2KTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnZ1ZS1jb2xvcl9fbWF0ZXJpYWwgLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2lucHV0e3dpZHRoOjEwMCU7bWFyZ2luLXRvcDoxMnB4O2ZvbnQtc2l6ZToxNXB4O2NvbG9yOiMzMzM7aGVpZ2h0OjMwcHh9LnZ1ZS1jb2xvcl9fbWF0ZXJpYWwgLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2xhYmVse3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtmb250LXNpemU6MTFweDtjb2xvcjojOTk5O3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemV9LnZ1ZS1jb2xvcl9fbWF0ZXJpYWxfX2hleHtib3JkZXItYm90dG9tLXdpZHRoOjJweDtib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkfS52dWUtY29sb3JfX21hdGVyaWFsX19zcGxpdHtkaXNwbGF5OmZsZXg7bWFyZ2luLXJpZ2h0Oi0xMHB4O3BhZGRpbmctdG9wOjExcHh9LnZ1ZS1jb2xvcl9fbWF0ZXJpYWxfX3RoaXJke2ZsZXg6MTtwYWRkaW5nLXJpZ2h0OjEwcHh9XCIsXCJcIl0pfSxmdW5jdGlvbihlLG8sdCl7bz1lLmV4cG9ydHM9dCgxKSgpLG8ucHVzaChbZS5pZCxcIi52dWUtY29sb3JfX3NsaWRlcntwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDo0MTBweH0udnVlLWNvbG9yX19zbGlkZXJfX2h1ZS13YXJwe2hlaWdodDoxMnB4O3Bvc2l0aW9uOnJlbGF0aXZlfS52dWUtY29sb3JfX3NsaWRlcl9faHVlLXdhcnAgLnZ1ZS1jb2xvcl9fYy1odWVfX3BpY2tlcnt3aWR0aDoxNHB4O2hlaWdodDoxNHB4O2JvcmRlci1yYWRpdXM6NnB4O3RyYW5zZm9ybTp0cmFuc2xhdGUoLTdweCwtMnB4KTtiYWNrZ3JvdW5kLWNvbG9yOiNmOGY4Zjg7Ym94LXNoYWRvdzowIDFweCA0cHggMCByZ2JhKDAsMCwwLC4zNyl9LnZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2hlc3tkaXNwbGF5OmZsZXg7bWFyZ2luLXRvcDoyMHB4fS52dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoe21hcmdpbi1yaWdodDoxcHg7ZmxleDoxO3dpZHRoOjIwJX0udnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaDpmaXJzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MXB4fS52dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoOmZpcnN0LWNoaWxkIC52dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoLXBpY2tlcntib3JkZXItcmFkaXVzOjJweCAwIDAgMnB4fS52dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoOmxhc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjB9LnZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2g6bGFzdC1jaGlsZCAudnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaC1waWNrZXJ7Ym9yZGVyLXJhZGl1czowIDJweCAycHggMH0udnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaC1waWNrZXJ7Y3Vyc29yOnBvaW50ZXI7aGVpZ2h0OjEycHh9LnZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2gtcGlja2VyLS1hY3RpdmV7dHJhbnNmb3JtOnNjYWxlWSgxLjgpO2JvcmRlci1yYWRpdXM6My42cHgvMnB4fVwiLFwiXCJdKX0sZnVuY3Rpb24oZSxvLHQpe289ZS5leHBvcnRzPXQoMSkoKSxvLnB1c2goW2UuaWQsXCIudnVlLWNvbG9yX19zd2F0Y2hlc3t3aWR0aDozMjBweDtoZWlnaHQ6MjQwcHg7b3ZlcmZsb3cteTpzY3JvbGw7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JveC1zaGFkb3c6MCAycHggMTBweCByZ2JhKDAsMCwwLC4xMiksMCAycHggNXB4IHJnYmEoMCwwLDAsLjE2KX0udnVlLWNvbG9yX19zd2F0Y2hlc19fYm94e3BhZGRpbmc6MTZweCAwIDZweCAxNnB4O292ZXJmbG93OmhpZGRlbn0udnVlLWNvbG9yX19zd2F0Y2hlc19fY29sb3ItZ3JvdXB7cGFkZGluZy1ib3R0b206MTBweDt3aWR0aDo0MHB4O2Zsb2F0OmxlZnQ7bWFyZ2luLXJpZ2h0OjEwcHh9LnZ1ZS1jb2xvcl9fc3dhdGNoZXNfX2NvbG9yLWl0e3dpZHRoOjQwcHg7aGVpZ2h0OjI0cHg7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZDojODgwZTRmO21hcmdpbi1ib3R0b206MXB4O292ZXJmbG93OmhpZGRlbjtib3JkZXItcmFkaXVzOjJweCAycHggMCAwfS52dWUtY29sb3JfX3N3YXRjaGVzX19waWNre2ZpbGw6I2ZmZjttYXJnaW4tbGVmdDo4cHg7ZGlzcGxheTpibG9ja31cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLCcudnVlLWNvbG9yc19fcGhvdG9zaG9we2JhY2tncm91bmQ6I2RjZGNkYztib3JkZXItcmFkaXVzOjRweDtib3gtc2hhZG93OjAgMCAwIDFweCByZ2JhKDAsMCwwLC4yNSksMCA4cHggMTZweCByZ2JhKDAsMCwwLC4xNSk7Ym94LXNpemluZzppbml0aWFsO3dpZHRoOjUxM3B4O2ZvbnQtZmFtaWx5OlJvYm90b30udnVlLWNvbG9yc19fcGhvdG9zaG9wX19oZWFke2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2YwZjBmMCwjZDRkNGQ0KTtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjYjFiMWIxO2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMCAwIGhzbGEoMCwwJSwxMDAlLC4yKSxpbnNldCAwIC0xcHggMCAwIHJnYmEoMCwwLDAsLjAyKTtoZWlnaHQ6MjNweDtsaW5lLWhlaWdodDoyNHB4O2JvcmRlci1yYWRpdXM6NHB4IDRweCAwIDA7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzRkNGQ0ZDt0ZXh0LWFsaWduOmNlbnRlcn0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19ib2R5e3BhZGRpbmc6MTVweDtkaXNwbGF5OmZsZXh9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fc2F0dXJhdGlvbi13cmFwe3dpZHRoOjI1NnB4O2hlaWdodDoyNTZweDtwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXI6MnB4IHNvbGlkICNiM2IzYjM7Ym9yZGVyLWJvdHRvbToycHggc29saWQgI2YwZjBmMDtvdmVyZmxvdzpoaWRkZW59LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fc2F0dXJhdGlvbi13cmFwIC52dWUtY29sb3JfX3NhdHVyYXRpb24tLWNpcmNsZXt3aWR0aDoxMnB4O2hlaWdodDoxMnB4fS52dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS13cmFwe3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoyNTZweDt3aWR0aDoxOXB4O21hcmdpbi1sZWZ0OjEwcHg7Ym9yZGVyOjJweCBzb2xpZCAjYjNiM2IzO2JvcmRlci1ib3R0b206MnB4IHNvbGlkICNmMGYwZjB9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9faHVlLXBvaW50ZXJ7cG9zaXRpb246cmVsYXRpdmV9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9faHVlLXBvaW50ZXItLWxlZnQsLnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9faHVlLXBvaW50ZXItLXJpZ2h0e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjA7aGVpZ2h0OjA7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDo1cHggMCA1cHggOHB4O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjNTU1fS52dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS1wb2ludGVyLS1sZWZ0OmFmdGVyLC52dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS1wb2ludGVyLS1yaWdodDphZnRlcntjb250ZW50OlwiXCI7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjRweCAwIDRweCA2cHg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmY7cG9zaXRpb246YWJzb2x1dGU7dG9wOjFweDtsZWZ0OjFweDt0cmFuc2Zvcm06dHJhbnNsYXRlKC04cHgsLTVweCl9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9faHVlLXBvaW50ZXItLWxlZnR7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMTNweCwtNHB4KX0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtcG9pbnRlci0tcmlnaHR7dHJhbnNmb3JtOnRyYW5zbGF0ZSgyMHB4LC00cHgpIHJvdGF0ZSgxODBkZWcpfS52dWUtY29sb3JzX19waG90b3Nob3BfX2NvbnRyb2xze3dpZHRoOjE4MHB4O21hcmdpbi1sZWZ0OjEwcHg7ZGlzcGxheTpmbGV4fS52dWUtY29sb3JzX19waG90b3Nob3BfX2FjdGlvbnN7bWFyZ2luLWxlZnQ6MjBweDtmbGV4OjF9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fYWMtYnRue2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2ZmZiwjZTZlNmU2KTtib3JkZXI6MXB4IHNvbGlkICM4Nzg3ODc7Ym9yZGVyLXJhZGl1czoycHg7aGVpZ2h0OjIwcHg7Ym94LXNoYWRvdzowIDFweCAwIDAgI2VhZWFlYTtmb250LXNpemU6MTRweDtjb2xvcjojMDAwO2xpbmUtaGVpZ2h0OjIwcHg7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLWJvdHRvbToxMHB4fS52dWUtY29sb3JzX19waG90b3Nob3BfX3ByZXZpZXdze3dpZHRoOjYwcHh9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3NfX3N3YXRjaGVze2JvcmRlcjoxcHggc29saWQgI2IzYjNiMztib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZjBmMGYwO21hcmdpbi1ib3R0b206MnB4O21hcmdpbi10b3A6MXB4fS52dWUtY29sb3JzX19waG90b3Nob3BfX3ByZXZpZXdzX19wci1jb2xvcntoZWlnaHQ6MzRweDtib3gtc2hhZG93Omluc2V0IDFweCAwIDAgIzAwMCxpbnNldCAtMXB4IDAgMCAjMDAwLGluc2V0IDAgMXB4IDAgIzAwMH0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19wcmV2aWV3c19fbGFiZWx7Zm9udC1zaXplOjE0cHg7Y29sb3I6IzAwMDt0ZXh0LWFsaWduOmNlbnRlcn0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19maWVsZHN7cGFkZGluZy10b3A6NXB4O3BhZGRpbmctYm90dG9tOjlweDt3aWR0aDo4MHB4O3Bvc2l0aW9uOnJlbGF0aXZlfS52dWUtY29sb3JzX19waG90b3Nob3BfX2ZpZWxkcyAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9faW5wdXR7bWFyZ2luLWxlZnQ6NDAlO3dpZHRoOjQwJTtoZWlnaHQ6MThweDtib3JkZXI6MXB4IHNvbGlkICM4ODg7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMSksMCAxcHggMCAwICNlY2VjZWM7bWFyZ2luLWJvdHRvbTo1cHg7Zm9udC1zaXplOjEzcHg7cGFkZGluZy1sZWZ0OjNweDttYXJnaW4tcmlnaHQ6MTBweH0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19maWVsZHMgLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2xhYmVse3RvcDowO2xlZnQ6MDt3aWR0aDozNHB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtmb250LXNpemU6MTNweDtoZWlnaHQ6MThweDtsaW5lLWhlaWdodDoyMnB4O3Bvc2l0aW9uOmFic29sdXRlfS52dWUtY29sb3JzX19waG90b3Nob3BfX2ZpZWxkc19fZGl2aWRlcntoZWlnaHQ6NXB4fS52dWUtY29sb3JzX19waG90b3Nob3BfX2ZpZWxkc19faGV4IC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19pbnB1dHttYXJnaW4tbGVmdDoyMCU7d2lkdGg6ODAlO2hlaWdodDoxOHB4O2JvcmRlcjoxcHggc29saWQgIzg4ODtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4xKSwwIDFweCAwIDAgI2VjZWNlYzttYXJnaW4tYm90dG9tOjZweDtmb250LXNpemU6MTNweDtwYWRkaW5nLWxlZnQ6M3B4fS52dWUtY29sb3JzX19waG90b3Nob3BfX2ZpZWxkc19faGV4IC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19sYWJlbHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTRweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Zm9udC1zaXplOjEzcHg7aGVpZ2h0OjE4cHg7bGluZS1oZWlnaHQ6MjJweH0nLFwiXCJdKX0sZnVuY3Rpb24oZSxvLHQpe289ZS5leHBvcnRzPXQoMSkoKSxvLnB1c2goW2UuaWQsXCIudnVlLWNvbG9yX19za2V0Y2h7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MjAwcHg7cGFkZGluZzoxMHB4IDEwcHggMDtib3gtc2l6aW5nOmluaXRpYWw7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6NHB4O2JveC1zaGFkb3c6MCAwIDAgMXB4IHJnYmEoMCwwLDAsLjE1KSwwIDhweCAxNnB4IHJnYmEoMCwwLDAsLjE1KX0udnVlLWNvbG9yX19za2V0Y2hfX3NhdHVyYXRpb24td3JhcHt3aWR0aDoxMDAlO3BhZGRpbmctYm90dG9tOjc1JTtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW59LnZ1ZS1jb2xvcl9fc2tldGNoX19jb250cm9sc3tkaXNwbGF5OmZsZXh9LnZ1ZS1jb2xvcl9fc2tldGNoX19zbGlkZXJze3BhZGRpbmc6NHB4IDA7ZmxleDoxfS52dWUtY29sb3JfX3NrZXRjaF9fc2xpZGVycyAudnVlLWNvbG9yX19jLWFscGhhX19ncmFkaWVudCwudnVlLWNvbG9yX19za2V0Y2hfX3NsaWRlcnMgLnZ1ZS1jb2xvcl9fYy1odWV7Ym9yZGVyLXJhZGl1czoycHh9LnZ1ZS1jb2xvcl9fc2tldGNoX19odWUtd3JhcHtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MTBweH0udnVlLWNvbG9yX19za2V0Y2hfX2FscGhhLXdyYXB7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjEwcHg7bWFyZ2luLXRvcDo0cHg7b3ZlcmZsb3c6aGlkZGVufS52dWUtY29sb3JfX3NrZXRjaF9fY29sb3Itd3JhcHt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbi10b3A6NHB4O21hcmdpbi1sZWZ0OjRweDtib3JkZXItcmFkaXVzOjNweH0udnVlLWNvbG9yX19za2V0Y2hfX2FjdGl2ZS1jb2xvcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDtib3JkZXItcmFkaXVzOjJweDtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCByZ2JhKDAsMCwwLC4xNSksaW5zZXQgMCAwIDRweCByZ2JhKDAsMCwwLC4yNSk7ei1pbmRleDoyfS52dWUtY29sb3JfX3NrZXRjaF9fZmllbGR7ZGlzcGxheTpmbGV4O3BhZGRpbmctdG9wOjRweH0udnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxkIC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19pbnB1dHt3aWR0aDo4MCU7cGFkZGluZzo0cHggMTAlIDNweDtib3JkZXI6bm9uZTtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjY2NjO2ZvbnQtc2l6ZToxMXB4fS52dWUtY29sb3JfX3NrZXRjaF9fZmllbGQgLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2xhYmVse2Rpc3BsYXk6YmxvY2s7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjExcHg7Y29sb3I6IzIyMjtwYWRkaW5nLXRvcDozcHg7cGFkZGluZy1ib3R0b206NHB4O3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemV9LnZ1ZS1jb2xvcl9fc2tldGNoX19maWVsZC0tc2luZ2xle2ZsZXg6MTtwYWRkaW5nLWxlZnQ6NnB4fS52dWUtY29sb3JfX3NrZXRjaF9fZmllbGQtLWRvdWJsZXtmbGV4OjJ9LnZ1ZS1jb2xvcl9fc2tldGNoX19wcmVzZXRze21hcmdpbi1yaWdodDotMTBweDttYXJnaW4tbGVmdDotMTBweDtwYWRkaW5nLWxlZnQ6MTBweDtwYWRkaW5nLXRvcDoxMHB4O2JvcmRlci10b3A6MXB4IHNvbGlkICNlZWV9LnZ1ZS1jb2xvcl9fc2tldGNoX19wcmVzZXRzLWNvbG9ye2JvcmRlci1yYWRpdXM6M3B4O292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW46MCAxMHB4IDEwcHggMDt2ZXJ0aWNhbC1hbGlnbjp0b3A7Y3Vyc29yOnBvaW50ZXI7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCByZ2JhKDAsMCwwLC4xNSl9XCIsXCJcIl0pfSxmdW5jdGlvbihlLG8sdCl7bz1lLmV4cG9ydHM9dCgxKSgpLG8ucHVzaChbZS5pZCxcIi52dWUtY29sb3JfX2Nocm9tZXtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXJhZGl1czoycHg7Ym94LXNoYWRvdzowIDAgMnB4IHJnYmEoMCwwLDAsLjMpLDAgNHB4IDhweCByZ2JhKDAsMCwwLC4zKTtib3gtc2l6aW5nOmluaXRpYWw7d2lkdGg6MjI1cHg7Zm9udC1mYW1pbHk6TWVubG87YmFja2dyb3VuZC1jb2xvcjojZmZmfS52dWUtY29sb3JfX2Nocm9tZV9fY29udHJvbHN7ZGlzcGxheTpmbGV4fS52dWUtY29sb3JfX2Nocm9tZV9fY29sb3Itd3JhcHt3aWR0aDozMnB4fS52dWUtY29sb3JfX2Nocm9tZV9fYWN0aXZlLWNvbG9ye21hcmdpbi10b3A6NnB4O3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7Ym9yZGVyLXJhZGl1czo4cHg7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVufS52dWUtY29sb3JfX2Nocm9tZV9fc2xpZGVyc3tmbGV4OjF9LnZ1ZS1jb2xvcl9fY2hyb21lX19zbGlkZXJzIC52dWUtY29sb3JfX2MtYWxwaGFfX2dyYWRpZW50LC52dWUtY29sb3JfX2Nocm9tZV9fc2xpZGVycyAudnVlLWNvbG9yX19jLWh1ZXtib3JkZXItcmFkaXVzOjJweH0udnVlLWNvbG9yX19jaHJvbWVfX3NsaWRlcnMgLnZ1ZS1jb2xvcl9fYy1hbHBoYV9fcGlja2VyLC52dWUtY29sb3JfX2Nocm9tZV9fc2xpZGVycyAudnVlLWNvbG9yX19jLWh1ZV9fcGlja2Vye3dpZHRoOjEycHg7aGVpZ2h0OjEycHg7Ym9yZGVyLXJhZGl1czo2cHg7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNnB4LC0ycHgpO2JhY2tncm91bmQtY29sb3I6I2Y4ZjhmODtib3gtc2hhZG93OjAgMXB4IDRweCAwIHJnYmEoMCwwLDAsLjM3KX0udnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkcy13cmFwe3BhZGRpbmctdG9wOjE2cHg7ZGlzcGxheTpmbGV4fS52dWUtY29sb3JfX2Nocm9tZV9fZmllbGRze2Rpc3BsYXk6ZmxleDttYXJnaW4tbGVmdDotNnB4O2ZsZXg6MX0udnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxke3BhZGRpbmctbGVmdDo2cHg7d2lkdGg6MTAwJX0udnVlLWNvbG9yX19jaHJvbWVfX3RvZ2dsZS1idG57d2lkdGg6MzJweDt0ZXh0LWFsaWduOnJpZ2h0O3Bvc2l0aW9uOnJlbGF0aXZlfS52dWUtY29sb3JfX2Nocm9tZV9faWNvbnttYXJnaW4tcmlnaHQ6LTRweDttYXJnaW4tdG9wOjEycHg7Y3Vyc29yOnBvaW50ZXI7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyfS52dWUtY29sb3JfX2Nocm9tZV9faWNvbi1oaWdobGlnaHR7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MjRweDtoZWlnaHQ6MjhweDtiYWNrZ3JvdW5kOiNlZWU7Ym9yZGVyLXJhZGl1czo0cHg7dG9wOjEwcHg7bGVmdDoxMnB4fS52dWUtY29sb3JfX2Nocm9tZV9faHVlLXdyYXB7bWFyZ2luLWJvdHRvbTo4cHh9LnZ1ZS1jb2xvcl9fY2hyb21lX19hbHBoYS13cmFwLC52dWUtY29sb3JfX2Nocm9tZV9faHVlLXdyYXB7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjEwcHh9LnZ1ZS1jb2xvcl9fY2hyb21lX19jaHJvbWUtYm9keXtwYWRkaW5nOjE2cHggMTZweCAxMnB4O2JhY2tncm91bmQtY29sb3I6I2ZmZn0udnVlLWNvbG9yX19jaHJvbWVfX3NhdHVyYXRpb24td3JhcHt3aWR0aDoxMDAlO3BhZGRpbmctYm90dG9tOjU1JTtwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXItcmFkaXVzOjJweCAycHggMCAwO292ZXJmbG93OmhpZGRlbn0udnVlLWNvbG9yX19jaHJvbWVfX3NhdHVyYXRpb24td3JhcCAudnVlLWNvbG9yX19zYXR1cmF0aW9uLS1jaXJjbGV7d2lkdGg6MTJweDtoZWlnaHQ6MTJweH0udnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkcyAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9faW5wdXR7Zm9udC1zaXplOjExcHg7Y29sb3I6IzMzMzt3aWR0aDoxMDAlO2JvcmRlci1ycmFkaXVzOjJweDtib3JkZXI6bm9uZTtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZGFkYWRhO2hlaWdodDoyMXB4O3RleHQtYWxpZ246Y2VudGVyfS52dWUtY29sb3JfX2Nocm9tZV9fZmllbGRzIC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19sYWJlbHt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Zm9udC1zaXplOjExcHg7bGluZS1oZWlnaHQ6MTFweDtjb2xvcjojOTY5Njk2O3RleHQtYWxpZ246Y2VudGVyO2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDoxMnB4fVwiLFwiXCJdKX0sZnVuY3Rpb24oZSxvLHQpe289ZS5leHBvcnRzPXQoMSkoKSxvLnB1c2goW2UuaWQsXCIudnVlLWNvbG9yX19jLWFscGhhLC52dWUtY29sb3JfX2MtYWxwaGFfX2NoZWNrYm9hcmQtd3JhcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MH0udnVlLWNvbG9yX19jLWFscGhhX19jaGVja2JvYXJkLXdyYXB7b3ZlcmZsb3c6aGlkZGVufS52dWUtY29sb3JfX2MtYWxwaGFfX2dyYWRpZW50e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowfS52dWUtY29sb3JfX2MtYWxwaGFfX2NvbnRhaW5lcntjdXJzb3I6cG9pbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjI7aGVpZ2h0OjEwMCU7bWFyZ2luOjAgM3B4fS52dWUtY29sb3JfX2MtYWxwaGFfX3BvaW50ZXJ7ei1pbmRleDoyO3Bvc2l0aW9uOmFic29sdXRlfS52dWUtY29sb3JfX2MtYWxwaGFfX3BpY2tlcntjdXJzb3I6cG9pbnRlcjt3aWR0aDo0cHg7Ym9yZGVyLXJhZGl1czoxcHg7aGVpZ2h0OjhweDtib3gtc2hhZG93OjAgMCAycHggcmdiYSgwLDAsMCwuNik7YmFja2dyb3VuZDojZmZmO21hcmdpbi10b3A6MXB4O3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0ycHgpfVwiLFwiXCJdKX0sZnVuY3Rpb24oZSxvLHQpe289ZS5leHBvcnRzPXQoMSkoKSxvLnB1c2goW2UuaWQsXCIudnVlLWNvbG9yX19jLWNoZWNrZXJib2FyZHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MH1cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyl7KGZ1bmN0aW9uKG8pe2Z1bmN0aW9uIHQoZSxvLHQpe2Z1bmN0aW9uIHIobyl7dmFyIHQ9cCxyPXY7cmV0dXJuIHA9dj12b2lkIDAsaz1vLGI9ZS5hcHBseShyLHQpfWZ1bmN0aW9uIGkoZSl7cmV0dXJuIGs9ZSxtPXNldFRpbWVvdXQodSxvKSxGP3IoZSk6Yn1mdW5jdGlvbiBuKGUpe3ZhciB0PWUteCxyPWUtayxhPW8tdDtyZXR1cm4gQT9DKGEsZy1yKTphfWZ1bmN0aW9uIGMoZSl7dmFyIHQ9ZS14LHI9ZS1rO3JldHVybiB2b2lkIDA9PT14fHx0Pj1vfHx0PDB8fEEmJnI+PWd9ZnVuY3Rpb24gdSgpe3ZhciBlPXkoKTtyZXR1cm4gYyhlKT9kKGUpOnZvaWQobT1zZXRUaW1lb3V0KHUsbihlKSkpfWZ1bmN0aW9uIGQoZSl7cmV0dXJuIG09dm9pZCAwLFImJnA/cihlKToocD12PXZvaWQgMCxiKX1mdW5jdGlvbiBoKCl7dm9pZCAwIT09bSYmY2xlYXJUaW1lb3V0KG0pLGs9MCxwPXg9dj1tPXZvaWQgMH1mdW5jdGlvbiBmKCl7cmV0dXJuIHZvaWQgMD09PW0/YjpkKHkoKSl9ZnVuY3Rpb24gXygpe3ZhciBlPXkoKSx0PWMoZSk7aWYocD1hcmd1bWVudHMsdj10aGlzLHg9ZSx0KXtpZih2b2lkIDA9PT1tKXJldHVybiBpKHgpO2lmKEEpcmV0dXJuIG09c2V0VGltZW91dCh1LG8pLFxucih4KX1yZXR1cm4gdm9pZCAwPT09bSYmKG09c2V0VGltZW91dCh1LG8pKSxifXZhciBwLHYsZyxiLG0seCxrPTAsRj0hMSxBPSExLFI9ITA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKGwpO3JldHVybiBvPXMobyl8fDAsYSh0KSYmKEY9ISF0LmxlYWRpbmcsQT1cIm1heFdhaXRcImluIHQsZz1BP3cocyh0Lm1heFdhaXQpfHwwLG8pOmcsUj1cInRyYWlsaW5nXCJpbiB0PyEhdC50cmFpbGluZzpSKSxfLmNhbmNlbD1oLF8uZmx1c2g9ZixffWZ1bmN0aW9uIHIoZSxvLHIpe3ZhciBpPSEwLG49ITA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKGwpO3JldHVybiBhKHIpJiYoaT1cImxlYWRpbmdcImluIHI/ISFyLmxlYWRpbmc6aSxuPVwidHJhaWxpbmdcImluIHI/ISFyLnRyYWlsaW5nOm4pLHQoZSxvLHtsZWFkaW5nOmksbWF4V2FpdDpvLHRyYWlsaW5nOm59KX1mdW5jdGlvbiBhKGUpe3ZhciBvPXR5cGVvZiBlO3JldHVybiEhZSYmKFwib2JqZWN0XCI9PW98fFwiZnVuY3Rpb25cIj09byl9ZnVuY3Rpb24gaShlKXtyZXR1cm4hIWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlfWZ1bmN0aW9uIG4oZSl7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIGV8fGkoZSkmJnguY2FsbChlKT09dX1mdW5jdGlvbiBzKGUpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKG4oZSkpcmV0dXJuIGM7aWYoYShlKSl7dmFyIG89XCJmdW5jdGlvblwiPT10eXBlb2YgZS52YWx1ZU9mP2UudmFsdWVPZigpOmU7ZT1hKG8pP28rXCJcIjpvfWlmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiAwPT09ZT9lOitlO2U9ZS5yZXBsYWNlKGQsXCJcIik7dmFyIHQ9Zi50ZXN0KGUpO3JldHVybiB0fHxfLnRlc3QoZSk/cChlLnNsaWNlKDIpLHQ/Mjo4KTpoLnRlc3QoZSk/YzorZX12YXIgbD1cIkV4cGVjdGVkIGEgZnVuY3Rpb25cIixjPU5hTix1PVwiW29iamVjdCBTeW1ib2xdXCIsZD0vXlxccyt8XFxzKyQvZyxoPS9eWy0rXTB4WzAtOWEtZl0rJC9pLGY9L14wYlswMV0rJC9pLF89L14wb1swLTddKyQvaSxwPXBhcnNlSW50LHY9XCJvYmplY3RcIj09dHlwZW9mIG8mJm8mJm8uT2JqZWN0PT09T2JqZWN0JiZvLGc9XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLGI9dnx8Z3x8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLG09T2JqZWN0LnByb3RvdHlwZSx4PW0udG9TdHJpbmcsdz1NYXRoLm1heCxDPU1hdGgubWluLHk9ZnVuY3Rpb24oKXtyZXR1cm4gYi5EYXRlLm5vdygpfTtlLmV4cG9ydHM9cn0pLmNhbGwobyxmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByLGEsaTshZnVuY3Rpb24odCxuKXthPVtdLHI9bixpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHI/ci5hcHBseShvLGEpOnIsISh2b2lkIDAhPT1pJiYoZS5leHBvcnRzPWkpKX0odGhpcyxmdW5jdGlvbigpe3JldHVybntyZWQ6ezUwOlwiI2ZmZWJlZVwiLDEwMDpcIiNmZmNkZDJcIiwyMDA6XCIjZWY5YTlhXCIsMzAwOlwiI2U1NzM3M1wiLDQwMDpcIiNlZjUzNTBcIiw1MDA6XCIjZjQ0MzM2XCIsNjAwOlwiI2U1MzkzNVwiLDcwMDpcIiNkMzJmMmZcIiw4MDA6XCIjYzYyODI4XCIsOTAwOlwiI2I3MWMxY1wiLGExMDA6XCIjZmY4YTgwXCIsYTIwMDpcIiNmZjUyNTJcIixhNDAwOlwiI2ZmMTc0NFwiLGE3MDA6XCIjZDUwMDAwXCJ9LHBpbms6ezUwOlwiI2ZjZTRlY1wiLDEwMDpcIiNmOGJiZDBcIiwyMDA6XCIjZjQ4ZmIxXCIsMzAwOlwiI2YwNjI5MlwiLDQwMDpcIiNlYzQwN2FcIiw1MDA6XCIjZTkxZTYzXCIsNjAwOlwiI2Q4MWI2MFwiLDcwMDpcIiNjMjE4NWJcIiw4MDA6XCIjYWQxNDU3XCIsOTAwOlwiIzg4MGU0ZlwiLGExMDA6XCIjZmY4MGFiXCIsYTIwMDpcIiNmZjQwODFcIixhNDAwOlwiI2Y1MDA1N1wiLGE3MDA6XCIjYzUxMTYyXCJ9LHB1cnBsZTp7NTA6XCIjZjNlNWY1XCIsMTAwOlwiI2UxYmVlN1wiLDIwMDpcIiNjZTkzZDhcIiwzMDA6XCIjYmE2OGM4XCIsNDAwOlwiI2FiNDdiY1wiLDUwMDpcIiM5YzI3YjBcIiw2MDA6XCIjOGUyNGFhXCIsNzAwOlwiIzdiMWZhMlwiLDgwMDpcIiM2YTFiOWFcIiw5MDA6XCIjNGExNDhjXCIsYTEwMDpcIiNlYTgwZmNcIixhMjAwOlwiI2UwNDBmYlwiLGE0MDA6XCIjZDUwMGY5XCIsYTcwMDpcIiNhYTAwZmZcIn0sZGVlcFB1cnBsZTp7NTA6XCIjZWRlN2Y2XCIsMTAwOlwiI2QxYzRlOVwiLDIwMDpcIiNiMzlkZGJcIiwzMDA6XCIjOTU3NWNkXCIsNDAwOlwiIzdlNTdjMlwiLDUwMDpcIiM2NzNhYjdcIiw2MDA6XCIjNWUzNWIxXCIsNzAwOlwiIzUxMmRhOFwiLDgwMDpcIiM0NTI3YTBcIiw5MDA6XCIjMzExYjkyXCIsYTEwMDpcIiNiMzg4ZmZcIixhMjAwOlwiIzdjNGRmZlwiLGE0MDA6XCIjNjUxZmZmXCIsYTcwMDpcIiM2MjAwZWFcIn0saW5kaWdvOns1MDpcIiNlOGVhZjZcIiwxMDA6XCIjYzVjYWU5XCIsMjAwOlwiIzlmYThkYVwiLDMwMDpcIiM3OTg2Y2JcIiw0MDA6XCIjNWM2YmMwXCIsNTAwOlwiIzNmNTFiNVwiLDYwMDpcIiMzOTQ5YWJcIiw3MDA6XCIjMzAzZjlmXCIsODAwOlwiIzI4MzU5M1wiLDkwMDpcIiMxYTIzN2VcIixhMTAwOlwiIzhjOWVmZlwiLGEyMDA6XCIjNTM2ZGZlXCIsYTQwMDpcIiMzZDVhZmVcIixhNzAwOlwiIzMwNGZmZVwifSxibHVlOns1MDpcIiNlM2YyZmRcIiwxMDA6XCIjYmJkZWZiXCIsMjAwOlwiIzkwY2FmOVwiLDMwMDpcIiM2NGI1ZjZcIiw0MDA6XCIjNDJhNWY1XCIsNTAwOlwiIzIxOTZmM1wiLDYwMDpcIiMxZTg4ZTVcIiw3MDA6XCIjMTk3NmQyXCIsODAwOlwiIzE1NjVjMFwiLDkwMDpcIiMwZDQ3YTFcIixhMTAwOlwiIzgyYjFmZlwiLGEyMDA6XCIjNDQ4YWZmXCIsYTQwMDpcIiMyOTc5ZmZcIixhNzAwOlwiIzI5NjJmZlwifSxsaWdodEJsdWU6ezUwOlwiI2UxZjVmZVwiLDEwMDpcIiNiM2U1ZmNcIiwyMDA6XCIjODFkNGZhXCIsMzAwOlwiIzRmYzNmN1wiLDQwMDpcIiMyOWI2ZjZcIiw1MDA6XCIjMDNhOWY0XCIsNjAwOlwiIzAzOWJlNVwiLDcwMDpcIiMwMjg4ZDFcIiw4MDA6XCIjMDI3N2JkXCIsOTAwOlwiIzAxNTc5YlwiLGExMDA6XCIjODBkOGZmXCIsYTIwMDpcIiM0MGM0ZmZcIixhNDAwOlwiIzAwYjBmZlwiLGE3MDA6XCIjMDA5MWVhXCJ9LGN5YW46ezUwOlwiI2UwZjdmYVwiLDEwMDpcIiNiMmViZjJcIiwyMDA6XCIjODBkZWVhXCIsMzAwOlwiIzRkZDBlMVwiLDQwMDpcIiMyNmM2ZGFcIiw1MDA6XCIjMDBiY2Q0XCIsNjAwOlwiIzAwYWNjMVwiLDcwMDpcIiMwMDk3YTdcIiw4MDA6XCIjMDA4MzhmXCIsOTAwOlwiIzAwNjA2NFwiLGExMDA6XCIjODRmZmZmXCIsYTIwMDpcIiMxOGZmZmZcIixhNDAwOlwiIzAwZTVmZlwiLGE3MDA6XCIjMDBiOGQ0XCJ9LHRlYWw6ezUwOlwiI2UwZjJmMVwiLDEwMDpcIiNiMmRmZGJcIiwyMDA6XCIjODBjYmM0XCIsMzAwOlwiIzRkYjZhY1wiLDQwMDpcIiMyNmE2OWFcIiw1MDA6XCIjMDA5Njg4XCIsNjAwOlwiIzAwODk3YlwiLDcwMDpcIiMwMDc5NmJcIiw4MDA6XCIjMDA2OTVjXCIsOTAwOlwiIzAwNGQ0MFwiLGExMDA6XCIjYTdmZmViXCIsYTIwMDpcIiM2NGZmZGFcIixhNDAwOlwiIzFkZTliNlwiLGE3MDA6XCIjMDBiZmE1XCJ9LGdyZWVuOns1MDpcIiNlOGY1ZTlcIiwxMDA6XCIjYzhlNmM5XCIsMjAwOlwiI2E1ZDZhN1wiLDMwMDpcIiM4MWM3ODRcIiw0MDA6XCIjNjZiYjZhXCIsNTAwOlwiIzRjYWY1MFwiLDYwMDpcIiM0M2EwNDdcIiw3MDA6XCIjMzg4ZTNjXCIsODAwOlwiIzJlN2QzMlwiLDkwMDpcIiMxYjVlMjBcIixhMTAwOlwiI2I5ZjZjYVwiLGEyMDA6XCIjNjlmMGFlXCIsYTQwMDpcIiMwMGU2NzZcIixhNzAwOlwiIzAwYzg1M1wifSxsaWdodEdyZWVuOns1MDpcIiNmMWY4ZTlcIiwxMDA6XCIjZGNlZGM4XCIsMjAwOlwiI2M1ZTFhNVwiLDMwMDpcIiNhZWQ1ODFcIiw0MDA6XCIjOWNjYzY1XCIsNTAwOlwiIzhiYzM0YVwiLDYwMDpcIiM3Y2IzNDJcIiw3MDA6XCIjNjg5ZjM4XCIsODAwOlwiIzU1OGIyZlwiLDkwMDpcIiMzMzY5MWVcIixhMTAwOlwiI2NjZmY5MFwiLGEyMDA6XCIjYjJmZjU5XCIsYTQwMDpcIiM3NmZmMDNcIixhNzAwOlwiIzY0ZGQxN1wifSxsaW1lOns1MDpcIiNmOWZiZTdcIiwxMDA6XCIjZjBmNGMzXCIsMjAwOlwiI2U2ZWU5Y1wiLDMwMDpcIiNkY2U3NzVcIiw0MDA6XCIjZDRlMTU3XCIsNTAwOlwiI2NkZGMzOVwiLDYwMDpcIiNjMGNhMzNcIiw3MDA6XCIjYWZiNDJiXCIsODAwOlwiIzllOWQyNFwiLDkwMDpcIiM4Mjc3MTdcIixhMTAwOlwiI2Y0ZmY4MVwiLGEyMDA6XCIjZWVmZjQxXCIsYTQwMDpcIiNjNmZmMDBcIixhNzAwOlwiI2FlZWEwMFwifSx5ZWxsb3c6ezUwOlwiI2ZmZmRlN1wiLDEwMDpcIiNmZmY5YzRcIiwyMDA6XCIjZmZmNTlkXCIsMzAwOlwiI2ZmZjE3NlwiLDQwMDpcIiNmZmVlNThcIiw1MDA6XCIjZmZlYjNiXCIsNjAwOlwiI2ZkZDgzNVwiLDcwMDpcIiNmYmMwMmRcIiw4MDA6XCIjZjlhODI1XCIsOTAwOlwiI2Y1N2YxN1wiLGExMDA6XCIjZmZmZjhkXCIsYTIwMDpcIiNmZmZmMDBcIixhNDAwOlwiI2ZmZWEwMFwiLGE3MDA6XCIjZmZkNjAwXCJ9LGFtYmVyOns1MDpcIiNmZmY4ZTFcIiwxMDA6XCIjZmZlY2IzXCIsMjAwOlwiI2ZmZTA4MlwiLDMwMDpcIiNmZmQ1NGZcIiw0MDA6XCIjZmZjYTI4XCIsNTAwOlwiI2ZmYzEwN1wiLDYwMDpcIiNmZmIzMDBcIiw3MDA6XCIjZmZhMDAwXCIsODAwOlwiI2ZmOGYwMFwiLDkwMDpcIiNmZjZmMDBcIixhMTAwOlwiI2ZmZTU3ZlwiLGEyMDA6XCIjZmZkNzQwXCIsYTQwMDpcIiNmZmM0MDBcIixhNzAwOlwiI2ZmYWIwMFwifSxvcmFuZ2U6ezUwOlwiI2ZmZjNlMFwiLDEwMDpcIiNmZmUwYjJcIiwyMDA6XCIjZmZjYzgwXCIsMzAwOlwiI2ZmYjc0ZFwiLDQwMDpcIiNmZmE3MjZcIiw1MDA6XCIjZmY5ODAwXCIsNjAwOlwiI2ZiOGMwMFwiLDcwMDpcIiNmNTdjMDBcIiw4MDA6XCIjZWY2YzAwXCIsOTAwOlwiI2U2NTEwMFwiLGExMDA6XCIjZmZkMTgwXCIsYTIwMDpcIiNmZmFiNDBcIixhNDAwOlwiI2ZmOTEwMFwiLGE3MDA6XCIjZmY2ZDAwXCJ9LGRlZXBPcmFuZ2U6ezUwOlwiI2ZiZTllN1wiLDEwMDpcIiNmZmNjYmNcIiwyMDA6XCIjZmZhYjkxXCIsMzAwOlwiI2ZmOGE2NVwiLDQwMDpcIiNmZjcwNDNcIiw1MDA6XCIjZmY1NzIyXCIsNjAwOlwiI2Y0NTExZVwiLDcwMDpcIiNlNjRhMTlcIiw4MDA6XCIjZDg0MzE1XCIsOTAwOlwiI2JmMzYwY1wiLGExMDA6XCIjZmY5ZTgwXCIsYTIwMDpcIiNmZjZlNDBcIixhNDAwOlwiI2ZmM2QwMFwiLGE3MDA6XCIjZGQyYzAwXCJ9LGJyb3duOns1MDpcIiNlZmViZTlcIiwxMDA6XCIjZDdjY2M4XCIsMjAwOlwiI2JjYWFhNFwiLDMwMDpcIiNhMTg4N2ZcIiw0MDA6XCIjOGQ2ZTYzXCIsNTAwOlwiIzc5NTU0OFwiLDYwMDpcIiM2ZDRjNDFcIiw3MDA6XCIjNWQ0MDM3XCIsODAwOlwiIzRlMzQyZVwiLDkwMDpcIiMzZTI3MjNcIn0sZ3JleTp7NTA6XCIjZmFmYWZhXCIsMTAwOlwiI2Y1ZjVmNVwiLDIwMDpcIiNlZWVlZWVcIiwzMDA6XCIjZTBlMGUwXCIsNDAwOlwiI2JkYmRiZFwiLDUwMDpcIiM5ZTllOWVcIiw2MDA6XCIjNzU3NTc1XCIsNzAwOlwiIzYxNjE2MVwiLDgwMDpcIiM0MjQyNDJcIiw5MDA6XCIjMjEyMTIxXCJ9LGJsdWVHcmV5Ons1MDpcIiNlY2VmZjFcIiwxMDA6XCIjY2ZkOGRjXCIsMjAwOlwiI2IwYmVjNVwiLDMwMDpcIiM5MGE0YWVcIiw0MDA6XCIjNzg5MDljXCIsNTAwOlwiIzYwN2Q4YlwiLDYwMDpcIiM1NDZlN2FcIiw3MDA6XCIjNDU1YTY0XCIsODAwOlwiIzM3NDc0ZlwiLDkwMDpcIiMyNjMyMzhcIn0sZGFya1RleHQ6e3ByaW1hcnk6XCJyZ2JhKDAsIDAsIDAsIDAuODcpXCIsc2Vjb25kYXJ5OlwicmdiYSgwLCAwLCAwLCAwLjU0KVwiLGRpc2FibGVkOlwicmdiYSgwLCAwLCAwLCAwLjM4KVwiLGRpdmlkZXJzOlwicmdiYSgwLCAwLCAwLCAwLjEyKVwifSxsaWdodFRleHQ6e3ByaW1hcnk6XCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpXCIsc2Vjb25kYXJ5OlwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpXCIsZGlzYWJsZWQ6XCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcIixkaXZpZGVyczpcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMilcIn0sZGFya0ljb25zOnthY3RpdmU6XCJyZ2JhKDAsIDAsIDAsIDAuNTQpXCIsaW5hY3RpdmU6XCJyZ2JhKDAsIDAsIDAsIDAuMzgpXCJ9LGxpZ2h0SWNvbnM6e2FjdGl2ZTpcInJnYmEoMjU1LCAyNTUsIDI1NSwgMSlcIixpbmFjdGl2ZTpcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVwifSx3aGl0ZTpcIiNmZmZmZmZcIixibGFjazpcIiMwMDAwMDBcIn19KX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByOyFmdW5jdGlvbihhKXtmdW5jdGlvbiBpKGUsbyl7aWYoZT1lP2U6XCJcIixvPW98fHt9LGUgaW5zdGFuY2VvZiBpKXJldHVybiBlO2lmKCEodGhpcyBpbnN0YW5jZW9mIGkpKXJldHVybiBuZXcgaShlLG8pO3ZhciB0PW4oZSk7dGhpcy5fb3JpZ2luYWxJbnB1dD1lLHRoaXMuX3I9dC5yLHRoaXMuX2c9dC5nLHRoaXMuX2I9dC5iLHRoaXMuX2E9dC5hLHRoaXMuX3JvdW5kQT1YKDEwMCp0aGlzLl9hKS8xMDAsdGhpcy5fZm9ybWF0PW8uZm9ybWF0fHx0LmZvcm1hdCx0aGlzLl9ncmFkaWVudFR5cGU9by5ncmFkaWVudFR5cGUsdGhpcy5fcjwxJiYodGhpcy5fcj1YKHRoaXMuX3IpKSx0aGlzLl9nPDEmJih0aGlzLl9nPVgodGhpcy5fZykpLHRoaXMuX2I8MSYmKHRoaXMuX2I9WCh0aGlzLl9iKSksdGhpcy5fb2s9dC5vayx0aGlzLl90Y19pZD1WKyt9ZnVuY3Rpb24gbihlKXt2YXIgbz17cjowLGc6MCxiOjB9LHQ9MSxyPW51bGwsYT1udWxsLGk9bnVsbCxuPSExLGw9ITE7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPUkoZSkpLFwib2JqZWN0XCI9PXR5cGVvZiBlJiYoRChlLnIpJiZEKGUuZykmJkQoZS5iKT8obz1zKGUucixlLmcsZS5iKSxuPSEwLGw9XCIlXCI9PT1TdHJpbmcoZS5yKS5zdWJzdHIoLTEpP1wicHJnYlwiOlwicmdiXCIpOkQoZS5oKSYmRChlLnMpJiZEKGUudik/KHI9TyhlLnMpLGE9TyhlLnYpLG89ZChlLmgscixhKSxuPSEwLGw9XCJoc3ZcIik6RChlLmgpJiZEKGUucykmJkQoZS5sKSYmKHI9TyhlLnMpLGk9TyhlLmwpLG89YyhlLmgscixpKSxuPSEwLGw9XCJoc2xcIiksZS5oYXNPd25Qcm9wZXJ0eShcImFcIikmJih0PWUuYSkpLHQ9TSh0KSx7b2s6bixmb3JtYXQ6ZS5mb3JtYXR8fGwscjpxKDI1NSxZKG8uciwwKSksZzpxKDI1NSxZKG8uZywwKSksYjpxKDI1NSxZKG8uYiwwKSksYTp0fX1mdW5jdGlvbiBzKGUsbyx0KXtyZXR1cm57cjoyNTUqTihlLDI1NSksZzoyNTUqTihvLDI1NSksYjoyNTUqTih0LDI1NSl9fWZ1bmN0aW9uIGwoZSxvLHQpe2U9TihlLDI1NSksbz1OKG8sMjU1KSx0PU4odCwyNTUpO3ZhciByLGEsaT1ZKGUsbyx0KSxuPXEoZSxvLHQpLHM9KGkrbikvMjtpZihpPT1uKXI9YT0wO2Vsc2V7dmFyIGw9aS1uO3N3aXRjaChhPXM+LjU/bC8oMi1pLW4pOmwvKGkrbiksaSl7Y2FzZSBlOnI9KG8tdCkvbCsobzx0PzY6MCk7YnJlYWs7Y2FzZSBvOnI9KHQtZSkvbCsyO2JyZWFrO2Nhc2UgdDpyPShlLW8pL2wrNH1yLz02fXJldHVybntoOnIsczphLGw6c319ZnVuY3Rpb24gYyhlLG8sdCl7ZnVuY3Rpb24gcihlLG8sdCl7cmV0dXJuIHQ8MCYmKHQrPTEpLHQ+MSYmKHQtPTEpLHQ8MS82P2UrNiooby1lKSp0OnQ8LjU/bzp0PDIvMz9lKyhvLWUpKigyLzMtdCkqNjplfXZhciBhLGksbjtpZihlPU4oZSwzNjApLG89TihvLDEwMCksdD1OKHQsMTAwKSwwPT09bylhPWk9bj10O2Vsc2V7dmFyIHM9dDwuNT90KigxK28pOnQrby10Km8sbD0yKnQtczthPXIobCxzLGUrMS8zKSxpPXIobCxzLGUpLG49cihsLHMsZS0xLzMpfXJldHVybntyOjI1NSphLGc6MjU1KmksYjoyNTUqbn19ZnVuY3Rpb24gdShlLG8sdCl7ZT1OKGUsMjU1KSxvPU4obywyNTUpLHQ9Tih0LDI1NSk7dmFyIHIsYSxpPVkoZSxvLHQpLG49cShlLG8sdCkscz1pLGw9aS1uO2lmKGE9MD09PWk/MDpsL2ksaT09bilyPTA7ZWxzZXtzd2l0Y2goaSl7Y2FzZSBlOnI9KG8tdCkvbCsobzx0PzY6MCk7YnJlYWs7Y2FzZSBvOnI9KHQtZSkvbCsyO2JyZWFrO2Nhc2UgdDpyPShlLW8pL2wrNH1yLz02fXJldHVybntoOnIsczphLHY6c319ZnVuY3Rpb24gZChlLG8sdCl7ZT02Kk4oZSwzNjApLG89TihvLDEwMCksdD1OKHQsMTAwKTt2YXIgcj1hLmZsb29yKGUpLGk9ZS1yLG49dCooMS1vKSxzPXQqKDEtaSpvKSxsPXQqKDEtKDEtaSkqbyksYz1yJTYsdT1bdCxzLG4sbixsLHRdW2NdLGQ9W2wsdCx0LHMsbixuXVtjXSxoPVtuLG4sbCx0LHQsc11bY107cmV0dXJue3I6MjU1KnUsZzoyNTUqZCxiOjI1NSpofX1mdW5jdGlvbiBoKGUsbyx0LHIpe3ZhciBhPVtIKFgoZSkudG9TdHJpbmcoMTYpKSxIKFgobykudG9TdHJpbmcoMTYpKSxIKFgodCkudG9TdHJpbmcoMTYpKV07cmV0dXJuIHImJmFbMF0uY2hhckF0KDApPT1hWzBdLmNoYXJBdCgxKSYmYVsxXS5jaGFyQXQoMCk9PWFbMV0uY2hhckF0KDEpJiZhWzJdLmNoYXJBdCgwKT09YVsyXS5jaGFyQXQoMSk/YVswXS5jaGFyQXQoMCkrYVsxXS5jaGFyQXQoMCkrYVsyXS5jaGFyQXQoMCk6YS5qb2luKFwiXCIpfWZ1bmN0aW9uIGYoZSxvLHQscixhKXt2YXIgaT1bSChYKGUpLnRvU3RyaW5nKDE2KSksSChYKG8pLnRvU3RyaW5nKDE2KSksSChYKHQpLnRvU3RyaW5nKDE2KSksSCh6KHIpKV07cmV0dXJuIGEmJmlbMF0uY2hhckF0KDApPT1pWzBdLmNoYXJBdCgxKSYmaVsxXS5jaGFyQXQoMCk9PWlbMV0uY2hhckF0KDEpJiZpWzJdLmNoYXJBdCgwKT09aVsyXS5jaGFyQXQoMSkmJmlbM10uY2hhckF0KDApPT1pWzNdLmNoYXJBdCgxKT9pWzBdLmNoYXJBdCgwKStpWzFdLmNoYXJBdCgwKStpWzJdLmNoYXJBdCgwKStpWzNdLmNoYXJBdCgwKTppLmpvaW4oXCJcIil9ZnVuY3Rpb24gXyhlLG8sdCxyKXt2YXIgYT1bSCh6KHIpKSxIKFgoZSkudG9TdHJpbmcoMTYpKSxIKFgobykudG9TdHJpbmcoMTYpKSxIKFgodCkudG9TdHJpbmcoMTYpKV07cmV0dXJuIGEuam9pbihcIlwiKX1mdW5jdGlvbiBwKGUsbyl7bz0wPT09bz8wOm98fDEwO3ZhciB0PWkoZSkudG9Ic2woKTtyZXR1cm4gdC5zLT1vLzEwMCx0LnM9UCh0LnMpLGkodCl9ZnVuY3Rpb24gdihlLG8pe289MD09PW8/MDpvfHwxMDt2YXIgdD1pKGUpLnRvSHNsKCk7cmV0dXJuIHQucys9by8xMDAsdC5zPVAodC5zKSxpKHQpfWZ1bmN0aW9uIGcoZSl7cmV0dXJuIGkoZSkuZGVzYXR1cmF0ZSgxMDApfWZ1bmN0aW9uIGIoZSxvKXtvPTA9PT1vPzA6b3x8MTA7dmFyIHQ9aShlKS50b0hzbCgpO3JldHVybiB0LmwrPW8vMTAwLHQubD1QKHQubCksaSh0KX1mdW5jdGlvbiBtKGUsbyl7bz0wPT09bz8wOm98fDEwO3ZhciB0PWkoZSkudG9SZ2IoKTtyZXR1cm4gdC5yPVkoMCxxKDI1NSx0LnItWCgyNTUqLShvLzEwMCkpKSksdC5nPVkoMCxxKDI1NSx0LmctWCgyNTUqLShvLzEwMCkpKSksdC5iPVkoMCxxKDI1NSx0LmItWCgyNTUqLShvLzEwMCkpKSksaSh0KX1mdW5jdGlvbiB4KGUsbyl7bz0wPT09bz8wOm98fDEwO3ZhciB0PWkoZSkudG9Ic2woKTtyZXR1cm4gdC5sLT1vLzEwMCx0Lmw9UCh0LmwpLGkodCl9ZnVuY3Rpb24gdyhlLG8pe3ZhciB0PWkoZSkudG9Ic2woKSxyPSh0LmgrbyklMzYwO3JldHVybiB0Lmg9cjwwPzM2MCtyOnIsaSh0KX1mdW5jdGlvbiBDKGUpe3ZhciBvPWkoZSkudG9Ic2woKTtyZXR1cm4gby5oPShvLmgrMTgwKSUzNjAsaShvKX1mdW5jdGlvbiB5KGUpe3ZhciBvPWkoZSkudG9Ic2woKSx0PW8uaDtyZXR1cm5baShlKSxpKHtoOih0KzEyMCklMzYwLHM6by5zLGw6by5sfSksaSh7aDoodCsyNDApJTM2MCxzOm8ucyxsOm8ubH0pXX1mdW5jdGlvbiBrKGUpe3ZhciBvPWkoZSkudG9Ic2woKSx0PW8uaDtyZXR1cm5baShlKSxpKHtoOih0KzkwKSUzNjAsczpvLnMsbDpvLmx9KSxpKHtoOih0KzE4MCklMzYwLHM6by5zLGw6by5sfSksaSh7aDoodCsyNzApJTM2MCxzOm8ucyxsOm8ubH0pXX1mdW5jdGlvbiBGKGUpe3ZhciBvPWkoZSkudG9Ic2woKSx0PW8uaDtyZXR1cm5baShlKSxpKHtoOih0KzcyKSUzNjAsczpvLnMsbDpvLmx9KSxpKHtoOih0KzIxNiklMzYwLHM6by5zLGw6by5sfSldfWZ1bmN0aW9uIEEoZSxvLHQpe289b3x8Nix0PXR8fDMwO3ZhciByPWkoZSkudG9Ic2woKSxhPTM2MC90LG49W2koZSldO2ZvcihyLmg9KHIuaC0oYSpvPj4xKSs3MjApJTM2MDstLW87KXIuaD0oci5oK2EpJTM2MCxuLnB1c2goaShyKSk7cmV0dXJuIG59ZnVuY3Rpb24gUihlLG8pe289b3x8Njtmb3IodmFyIHQ9aShlKS50b0hzdigpLHI9dC5oLGE9dC5zLG49dC52LHM9W10sbD0xL287by0tOylzLnB1c2goaSh7aDpyLHM6YSx2Om59KSksbj0obitsKSUxO3JldHVybiBzfWZ1bmN0aW9uIFMoZSl7dmFyIG89e307Zm9yKHZhciB0IGluIGUpZS5oYXNPd25Qcm9wZXJ0eSh0KSYmKG9bZVt0XV09dCk7cmV0dXJuIG99ZnVuY3Rpb24gTShlKXtyZXR1cm4gZT1wYXJzZUZsb2F0KGUpLChpc05hTihlKXx8ZTwwfHxlPjEpJiYoZT0xKSxlfWZ1bmN0aW9uIE4oZSxvKXtMKGUpJiYoZT1cIjEwMCVcIik7dmFyIHQ9RShlKTtyZXR1cm4gZT1xKG8sWSgwLHBhcnNlRmxvYXQoZSkpKSx0JiYoZT1wYXJzZUludChlKm8sMTApLzEwMCksYS5hYnMoZS1vKTwxZS02PzE6ZSVvL3BhcnNlRmxvYXQobyl9ZnVuY3Rpb24gUChlKXtyZXR1cm4gcSgxLFkoMCxlKSl9ZnVuY3Rpb24gaihlKXtyZXR1cm4gcGFyc2VJbnQoZSwxNil9ZnVuY3Rpb24gTChlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmZS5pbmRleE9mKFwiLlwiKSE9LTEmJjE9PT1wYXJzZUZsb2F0KGUpfWZ1bmN0aW9uIEUoZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJmUuaW5kZXhPZihcIiVcIikhPS0xfWZ1bmN0aW9uIEgoZSl7cmV0dXJuIDE9PWUubGVuZ3RoP1wiMFwiK2U6XCJcIitlfWZ1bmN0aW9uIE8oZSl7cmV0dXJuIGU8PTEmJihlPTEwMCplK1wiJVwiKSxlfWZ1bmN0aW9uIHooZSl7cmV0dXJuIGEucm91bmQoMjU1KnBhcnNlRmxvYXQoZSkpLnRvU3RyaW5nKDE2KX1mdW5jdGlvbiBCKGUpe3JldHVybiBqKGUpLzI1NX1mdW5jdGlvbiBEKGUpe3JldHVybiEhWi5DU1NfVU5JVC5leGVjKGUpfWZ1bmN0aW9uIEkoZSl7ZT1lLnJlcGxhY2UoJCxcIlwiKS5yZXBsYWNlKFUsXCJcIikudG9Mb3dlckNhc2UoKTt2YXIgbz0hMTtpZihHW2VdKWU9R1tlXSxvPSEwO2Vsc2UgaWYoXCJ0cmFuc3BhcmVudFwiPT1lKXJldHVybntyOjAsZzowLGI6MCxhOjAsZm9ybWF0OlwibmFtZVwifTt2YXIgdDtyZXR1cm4odD1aLnJnYi5leGVjKGUpKT97cjp0WzFdLGc6dFsyXSxiOnRbM119Oih0PVoucmdiYS5leGVjKGUpKT97cjp0WzFdLGc6dFsyXSxiOnRbM10sYTp0WzRdfToodD1aLmhzbC5leGVjKGUpKT97aDp0WzFdLHM6dFsyXSxsOnRbM119Oih0PVouaHNsYS5leGVjKGUpKT97aDp0WzFdLHM6dFsyXSxsOnRbM10sYTp0WzRdfToodD1aLmhzdi5leGVjKGUpKT97aDp0WzFdLHM6dFsyXSx2OnRbM119Oih0PVouaHN2YS5leGVjKGUpKT97aDp0WzFdLHM6dFsyXSx2OnRbM10sYTp0WzRdfToodD1aLmhleDguZXhlYyhlKSk/e3I6aih0WzFdKSxnOmoodFsyXSksYjpqKHRbM10pLGE6Qih0WzRdKSxmb3JtYXQ6bz9cIm5hbWVcIjpcImhleDhcIn06KHQ9Wi5oZXg2LmV4ZWMoZSkpP3tyOmoodFsxXSksZzpqKHRbMl0pLGI6aih0WzNdKSxmb3JtYXQ6bz9cIm5hbWVcIjpcImhleFwifToodD1aLmhleDQuZXhlYyhlKSk/e3I6aih0WzFdK1wiXCIrdFsxXSksZzpqKHRbMl0rXCJcIit0WzJdKSxiOmoodFszXStcIlwiK3RbM10pLGE6Qih0WzRdK1wiXCIrdFs0XSksZm9ybWF0Om8/XCJuYW1lXCI6XCJoZXg4XCJ9OiEhKHQ9Wi5oZXgzLmV4ZWMoZSkpJiZ7cjpqKHRbMV0rXCJcIit0WzFdKSxnOmoodFsyXStcIlwiK3RbMl0pLGI6aih0WzNdK1wiXCIrdFszXSksZm9ybWF0Om8/XCJuYW1lXCI6XCJoZXhcIn19ZnVuY3Rpb24gVChlKXt2YXIgbyx0O3JldHVybiBlPWV8fHtsZXZlbDpcIkFBXCIsc2l6ZTpcInNtYWxsXCJ9LG89KGUubGV2ZWx8fFwiQUFcIikudG9VcHBlckNhc2UoKSx0PShlLnNpemV8fFwic21hbGxcIikudG9Mb3dlckNhc2UoKSxcIkFBXCIhPT1vJiZcIkFBQVwiIT09byYmKG89XCJBQVwiKSxcInNtYWxsXCIhPT10JiZcImxhcmdlXCIhPT10JiYodD1cInNtYWxsXCIpLHtsZXZlbDpvLHNpemU6dH19dmFyICQ9L15cXHMrLyxVPS9cXHMrJC8sVj0wLFg9YS5yb3VuZCxxPWEubWluLFk9YS5tYXgsVz1hLnJhbmRvbTtpLnByb3RvdHlwZT17aXNEYXJrOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0QnJpZ2h0bmVzcygpPDEyOH0saXNMaWdodDpmdW5jdGlvbigpe3JldHVybiF0aGlzLmlzRGFyaygpfSxpc1ZhbGlkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX29rfSxnZXRPcmlnaW5hbElucHV0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX29yaWdpbmFsSW5wdXR9LGdldEZvcm1hdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9mb3JtYXR9LGdldEFscGhhOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2F9LGdldEJyaWdodG5lc3M6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnRvUmdiKCk7cmV0dXJuKDI5OSplLnIrNTg3KmUuZysxMTQqZS5iKS8xZTN9LGdldEx1bWluYW5jZTpmdW5jdGlvbigpe3ZhciBlLG8sdCxyLGksbixzPXRoaXMudG9SZ2IoKTtyZXR1cm4gZT1zLnIvMjU1LG89cy5nLzI1NSx0PXMuYi8yNTUscj1lPD0uMDM5Mjg/ZS8xMi45MjphLnBvdygoZSsuMDU1KS8xLjA1NSwyLjQpLGk9bzw9LjAzOTI4P28vMTIuOTI6YS5wb3coKG8rLjA1NSkvMS4wNTUsMi40KSxuPXQ8PS4wMzkyOD90LzEyLjkyOmEucG93KCh0Ky4wNTUpLzEuMDU1LDIuNCksLjIxMjYqcisuNzE1MippKy4wNzIyKm59LHNldEFscGhhOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9hPU0oZSksdGhpcy5fcm91bmRBPVgoMTAwKnRoaXMuX2EpLzEwMCx0aGlzfSx0b0hzdjpmdW5jdGlvbigpe3ZhciBlPXUodGhpcy5fcix0aGlzLl9nLHRoaXMuX2IpO3JldHVybntoOjM2MCplLmgsczplLnMsdjplLnYsYTp0aGlzLl9hfX0sdG9Ic3ZTdHJpbmc6ZnVuY3Rpb24oKXt2YXIgZT11KHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iKSxvPVgoMzYwKmUuaCksdD1YKDEwMCplLnMpLHI9WCgxMDAqZS52KTtyZXR1cm4gMT09dGhpcy5fYT9cImhzdihcIitvK1wiLCBcIit0K1wiJSwgXCIrcitcIiUpXCI6XCJoc3ZhKFwiK28rXCIsIFwiK3QrXCIlLCBcIityK1wiJSwgXCIrdGhpcy5fcm91bmRBK1wiKVwifSx0b0hzbDpmdW5jdGlvbigpe3ZhciBlPWwodGhpcy5fcix0aGlzLl9nLHRoaXMuX2IpO3JldHVybntoOjM2MCplLmgsczplLnMsbDplLmwsYTp0aGlzLl9hfX0sdG9Ic2xTdHJpbmc6ZnVuY3Rpb24oKXt2YXIgZT1sKHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iKSxvPVgoMzYwKmUuaCksdD1YKDEwMCplLnMpLHI9WCgxMDAqZS5sKTtyZXR1cm4gMT09dGhpcy5fYT9cImhzbChcIitvK1wiLCBcIit0K1wiJSwgXCIrcitcIiUpXCI6XCJoc2xhKFwiK28rXCIsIFwiK3QrXCIlLCBcIityK1wiJSwgXCIrdGhpcy5fcm91bmRBK1wiKVwifSx0b0hleDpmdW5jdGlvbihlKXtyZXR1cm4gaCh0aGlzLl9yLHRoaXMuX2csdGhpcy5fYixlKX0sdG9IZXhTdHJpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuXCIjXCIrdGhpcy50b0hleChlKX0sdG9IZXg4OmZ1bmN0aW9uKGUpe3JldHVybiBmKHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iLHRoaXMuX2EsZSl9LHRvSGV4OFN0cmluZzpmdW5jdGlvbihlKXtyZXR1cm5cIiNcIit0aGlzLnRvSGV4OChlKX0sdG9SZ2I6ZnVuY3Rpb24oKXtyZXR1cm57cjpYKHRoaXMuX3IpLGc6WCh0aGlzLl9nKSxiOlgodGhpcy5fYiksYTp0aGlzLl9hfX0sdG9SZ2JTdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gMT09dGhpcy5fYT9cInJnYihcIitYKHRoaXMuX3IpK1wiLCBcIitYKHRoaXMuX2cpK1wiLCBcIitYKHRoaXMuX2IpK1wiKVwiOlwicmdiYShcIitYKHRoaXMuX3IpK1wiLCBcIitYKHRoaXMuX2cpK1wiLCBcIitYKHRoaXMuX2IpK1wiLCBcIit0aGlzLl9yb3VuZEErXCIpXCJ9LHRvUGVyY2VudGFnZVJnYjpmdW5jdGlvbigpe3JldHVybntyOlgoMTAwKk4odGhpcy5fciwyNTUpKStcIiVcIixnOlgoMTAwKk4odGhpcy5fZywyNTUpKStcIiVcIixiOlgoMTAwKk4odGhpcy5fYiwyNTUpKStcIiVcIixhOnRoaXMuX2F9fSx0b1BlcmNlbnRhZ2VSZ2JTdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gMT09dGhpcy5fYT9cInJnYihcIitYKDEwMCpOKHRoaXMuX3IsMjU1KSkrXCIlLCBcIitYKDEwMCpOKHRoaXMuX2csMjU1KSkrXCIlLCBcIitYKDEwMCpOKHRoaXMuX2IsMjU1KSkrXCIlKVwiOlwicmdiYShcIitYKDEwMCpOKHRoaXMuX3IsMjU1KSkrXCIlLCBcIitYKDEwMCpOKHRoaXMuX2csMjU1KSkrXCIlLCBcIitYKDEwMCpOKHRoaXMuX2IsMjU1KSkrXCIlLCBcIit0aGlzLl9yb3VuZEErXCIpXCJ9LHRvTmFtZTpmdW5jdGlvbigpe3JldHVybiAwPT09dGhpcy5fYT9cInRyYW5zcGFyZW50XCI6ISh0aGlzLl9hPDEpJiYoS1toKHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iLCEwKV18fCExKX0sdG9GaWx0ZXI6ZnVuY3Rpb24oZSl7dmFyIG89XCIjXCIrXyh0aGlzLl9yLHRoaXMuX2csdGhpcy5fYix0aGlzLl9hKSx0PW8scj10aGlzLl9ncmFkaWVudFR5cGU/XCJHcmFkaWVudFR5cGUgPSAxLCBcIjpcIlwiO2lmKGUpe3ZhciBhPWkoZSk7dD1cIiNcIitfKGEuX3IsYS5fZyxhLl9iLGEuX2EpfXJldHVyblwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KFwiK3IrXCJzdGFydENvbG9yc3RyPVwiK28rXCIsZW5kQ29sb3JzdHI9XCIrdCtcIilcIn0sdG9TdHJpbmc6ZnVuY3Rpb24oZSl7dmFyIG89ISFlO2U9ZXx8dGhpcy5fZm9ybWF0O3ZhciB0PSExLHI9dGhpcy5fYTwxJiZ0aGlzLl9hPj0wLGE9IW8mJnImJihcImhleFwiPT09ZXx8XCJoZXg2XCI9PT1lfHxcImhleDNcIj09PWV8fFwiaGV4NFwiPT09ZXx8XCJoZXg4XCI9PT1lfHxcIm5hbWVcIj09PWUpO3JldHVybiBhP1wibmFtZVwiPT09ZSYmMD09PXRoaXMuX2E/dGhpcy50b05hbWUoKTp0aGlzLnRvUmdiU3RyaW5nKCk6KFwicmdiXCI9PT1lJiYodD10aGlzLnRvUmdiU3RyaW5nKCkpLFwicHJnYlwiPT09ZSYmKHQ9dGhpcy50b1BlcmNlbnRhZ2VSZ2JTdHJpbmcoKSksXCJoZXhcIiE9PWUmJlwiaGV4NlwiIT09ZXx8KHQ9dGhpcy50b0hleFN0cmluZygpKSxcImhleDNcIj09PWUmJih0PXRoaXMudG9IZXhTdHJpbmcoITApKSxcImhleDRcIj09PWUmJih0PXRoaXMudG9IZXg4U3RyaW5nKCEwKSksXCJoZXg4XCI9PT1lJiYodD10aGlzLnRvSGV4OFN0cmluZygpKSxcIm5hbWVcIj09PWUmJih0PXRoaXMudG9OYW1lKCkpLFwiaHNsXCI9PT1lJiYodD10aGlzLnRvSHNsU3RyaW5nKCkpLFwiaHN2XCI9PT1lJiYodD10aGlzLnRvSHN2U3RyaW5nKCkpLHR8fHRoaXMudG9IZXhTdHJpbmcoKSl9LGNsb25lOmZ1bmN0aW9uKCl7cmV0dXJuIGkodGhpcy50b1N0cmluZygpKX0sX2FwcGx5TW9kaWZpY2F0aW9uOmZ1bmN0aW9uKGUsbyl7dmFyIHQ9ZS5hcHBseShudWxsLFt0aGlzXS5jb25jYXQoW10uc2xpY2UuY2FsbChvKSkpO3JldHVybiB0aGlzLl9yPXQuX3IsdGhpcy5fZz10Ll9nLHRoaXMuX2I9dC5fYix0aGlzLnNldEFscGhhKHQuX2EpLHRoaXN9LGxpZ2h0ZW46ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oYixhcmd1bWVudHMpfSxicmlnaHRlbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihtLGFyZ3VtZW50cyl9LGRhcmtlbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbih4LGFyZ3VtZW50cyl9LGRlc2F0dXJhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24ocCxhcmd1bWVudHMpfSxzYXR1cmF0ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbih2LGFyZ3VtZW50cyl9LGdyZXlzY2FsZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihnLGFyZ3VtZW50cyl9LHNwaW46ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24odyxhcmd1bWVudHMpfSxfYXBwbHlDb21iaW5hdGlvbjpmdW5jdGlvbihlLG8pe3JldHVybiBlLmFwcGx5KG51bGwsW3RoaXNdLmNvbmNhdChbXS5zbGljZS5jYWxsKG8pKSl9LGFuYWxvZ291czpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKEEsYXJndW1lbnRzKX0sY29tcGxlbWVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKEMsYXJndW1lbnRzKX0sbW9ub2Nocm9tYXRpYzpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKFIsYXJndW1lbnRzKX0sc3BsaXRjb21wbGVtZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24oRixhcmd1bWVudHMpfSx0cmlhZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKHksYXJndW1lbnRzKX0sdGV0cmFkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24oayxhcmd1bWVudHMpfX0saS5mcm9tUmF0aW89ZnVuY3Rpb24oZSxvKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZSl7dmFyIHQ9e307Zm9yKHZhciByIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShyKSYmKFwiYVwiPT09cj90W3JdPWVbcl06dFtyXT1PKGVbcl0pKTtlPXR9cmV0dXJuIGkoZSxvKX0saS5lcXVhbHM9ZnVuY3Rpb24oZSxvKXtyZXR1cm4hKCFlfHwhbykmJmkoZSkudG9SZ2JTdHJpbmcoKT09aShvKS50b1JnYlN0cmluZygpfSxpLnJhbmRvbT1mdW5jdGlvbigpe3JldHVybiBpLmZyb21SYXRpbyh7cjpXKCksZzpXKCksYjpXKCl9KX0saS5taXg9ZnVuY3Rpb24oZSxvLHQpe3Q9MD09PXQ/MDp0fHw1MDt2YXIgcj1pKGUpLnRvUmdiKCksYT1pKG8pLnRvUmdiKCksbj10LzEwMCxzPXtyOihhLnItci5yKSpuK3IucixnOihhLmctci5nKSpuK3IuZyxiOihhLmItci5iKSpuK3IuYixhOihhLmEtci5hKSpuK3IuYX07cmV0dXJuIGkocyl9LGkucmVhZGFiaWxpdHk9ZnVuY3Rpb24oZSxvKXt2YXIgdD1pKGUpLHI9aShvKTtyZXR1cm4oYS5tYXgodC5nZXRMdW1pbmFuY2UoKSxyLmdldEx1bWluYW5jZSgpKSsuMDUpLyhhLm1pbih0LmdldEx1bWluYW5jZSgpLHIuZ2V0THVtaW5hbmNlKCkpKy4wNSl9LGkuaXNSZWFkYWJsZT1mdW5jdGlvbihlLG8sdCl7dmFyIHIsYSxuPWkucmVhZGFiaWxpdHkoZSxvKTtzd2l0Y2goYT0hMSxyPVQodCksci5sZXZlbCtyLnNpemUpe2Nhc2VcIkFBc21hbGxcIjpjYXNlXCJBQUFsYXJnZVwiOmE9bj49NC41O2JyZWFrO2Nhc2VcIkFBbGFyZ2VcIjphPW4+PTM7YnJlYWs7Y2FzZVwiQUFBc21hbGxcIjphPW4+PTd9cmV0dXJuIGF9LGkubW9zdFJlYWRhYmxlPWZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhLG4scyxsPW51bGwsYz0wO3Q9dHx8e30sYT10LmluY2x1ZGVGYWxsYmFja0NvbG9ycyxuPXQubGV2ZWwscz10LnNpemU7Zm9yKHZhciB1PTA7dTxvLmxlbmd0aDt1Kyspcj1pLnJlYWRhYmlsaXR5KGUsb1t1XSkscj5jJiYoYz1yLGw9aShvW3VdKSk7cmV0dXJuIGkuaXNSZWFkYWJsZShlLGwse2xldmVsOm4sc2l6ZTpzfSl8fCFhP2w6KHQuaW5jbHVkZUZhbGxiYWNrQ29sb3JzPSExLGkubW9zdFJlYWRhYmxlKGUsW1wiI2ZmZlwiLFwiIzAwMFwiXSx0KSl9O3ZhciBHPWkubmFtZXM9e2FsaWNlYmx1ZTpcImYwZjhmZlwiLGFudGlxdWV3aGl0ZTpcImZhZWJkN1wiLGFxdWE6XCIwZmZcIixhcXVhbWFyaW5lOlwiN2ZmZmQ0XCIsYXp1cmU6XCJmMGZmZmZcIixiZWlnZTpcImY1ZjVkY1wiLGJpc3F1ZTpcImZmZTRjNFwiLGJsYWNrOlwiMDAwXCIsYmxhbmNoZWRhbG1vbmQ6XCJmZmViY2RcIixibHVlOlwiMDBmXCIsYmx1ZXZpb2xldDpcIjhhMmJlMlwiLGJyb3duOlwiYTUyYTJhXCIsYnVybHl3b29kOlwiZGViODg3XCIsYnVybnRzaWVubmE6XCJlYTdlNWRcIixjYWRldGJsdWU6XCI1ZjllYTBcIixjaGFydHJldXNlOlwiN2ZmZjAwXCIsY2hvY29sYXRlOlwiZDI2OTFlXCIsY29yYWw6XCJmZjdmNTBcIixjb3JuZmxvd2VyYmx1ZTpcIjY0OTVlZFwiLGNvcm5zaWxrOlwiZmZmOGRjXCIsY3JpbXNvbjpcImRjMTQzY1wiLGN5YW46XCIwZmZcIixkYXJrYmx1ZTpcIjAwMDA4YlwiLGRhcmtjeWFuOlwiMDA4YjhiXCIsZGFya2dvbGRlbnJvZDpcImI4ODYwYlwiLGRhcmtncmF5OlwiYTlhOWE5XCIsZGFya2dyZWVuOlwiMDA2NDAwXCIsZGFya2dyZXk6XCJhOWE5YTlcIixkYXJra2hha2k6XCJiZGI3NmJcIixkYXJrbWFnZW50YTpcIjhiMDA4YlwiLGRhcmtvbGl2ZWdyZWVuOlwiNTU2YjJmXCIsZGFya29yYW5nZTpcImZmOGMwMFwiLGRhcmtvcmNoaWQ6XCI5OTMyY2NcIixkYXJrcmVkOlwiOGIwMDAwXCIsZGFya3NhbG1vbjpcImU5OTY3YVwiLGRhcmtzZWFncmVlbjpcIjhmYmM4ZlwiLGRhcmtzbGF0ZWJsdWU6XCI0ODNkOGJcIixkYXJrc2xhdGVncmF5OlwiMmY0ZjRmXCIsZGFya3NsYXRlZ3JleTpcIjJmNGY0ZlwiLGRhcmt0dXJxdW9pc2U6XCIwMGNlZDFcIixkYXJrdmlvbGV0OlwiOTQwMGQzXCIsZGVlcHBpbms6XCJmZjE0OTNcIixkZWVwc2t5Ymx1ZTpcIjAwYmZmZlwiLGRpbWdyYXk6XCI2OTY5NjlcIixkaW1ncmV5OlwiNjk2OTY5XCIsZG9kZ2VyYmx1ZTpcIjFlOTBmZlwiLGZpcmVicmljazpcImIyMjIyMlwiLGZsb3JhbHdoaXRlOlwiZmZmYWYwXCIsZm9yZXN0Z3JlZW46XCIyMjhiMjJcIixmdWNoc2lhOlwiZjBmXCIsZ2FpbnNib3JvOlwiZGNkY2RjXCIsZ2hvc3R3aGl0ZTpcImY4ZjhmZlwiLGdvbGQ6XCJmZmQ3MDBcIixnb2xkZW5yb2Q6XCJkYWE1MjBcIixncmF5OlwiODA4MDgwXCIsZ3JlZW46XCIwMDgwMDBcIixncmVlbnllbGxvdzpcImFkZmYyZlwiLGdyZXk6XCI4MDgwODBcIixob25leWRldzpcImYwZmZmMFwiLGhvdHBpbms6XCJmZjY5YjRcIixpbmRpYW5yZWQ6XCJjZDVjNWNcIixpbmRpZ286XCI0YjAwODJcIixpdm9yeTpcImZmZmZmMFwiLGtoYWtpOlwiZjBlNjhjXCIsbGF2ZW5kZXI6XCJlNmU2ZmFcIixsYXZlbmRlcmJsdXNoOlwiZmZmMGY1XCIsbGF3bmdyZWVuOlwiN2NmYzAwXCIsbGVtb25jaGlmZm9uOlwiZmZmYWNkXCIsbGlnaHRibHVlOlwiYWRkOGU2XCIsbGlnaHRjb3JhbDpcImYwODA4MFwiLGxpZ2h0Y3lhbjpcImUwZmZmZlwiLGxpZ2h0Z29sZGVucm9keWVsbG93OlwiZmFmYWQyXCIsbGlnaHRncmF5OlwiZDNkM2QzXCIsbGlnaHRncmVlbjpcIjkwZWU5MFwiLGxpZ2h0Z3JleTpcImQzZDNkM1wiLGxpZ2h0cGluazpcImZmYjZjMVwiLGxpZ2h0c2FsbW9uOlwiZmZhMDdhXCIsbGlnaHRzZWFncmVlbjpcIjIwYjJhYVwiLGxpZ2h0c2t5Ymx1ZTpcIjg3Y2VmYVwiLGxpZ2h0c2xhdGVncmF5OlwiNzg5XCIsbGlnaHRzbGF0ZWdyZXk6XCI3ODlcIixsaWdodHN0ZWVsYmx1ZTpcImIwYzRkZVwiLGxpZ2h0eWVsbG93OlwiZmZmZmUwXCIsbGltZTpcIjBmMFwiLGxpbWVncmVlbjpcIjMyY2QzMlwiLGxpbmVuOlwiZmFmMGU2XCIsbWFnZW50YTpcImYwZlwiLG1hcm9vbjpcIjgwMDAwMFwiLG1lZGl1bWFxdWFtYXJpbmU6XCI2NmNkYWFcIixtZWRpdW1ibHVlOlwiMDAwMGNkXCIsbWVkaXVtb3JjaGlkOlwiYmE1NWQzXCIsbWVkaXVtcHVycGxlOlwiOTM3MGRiXCIsbWVkaXVtc2VhZ3JlZW46XCIzY2IzNzFcIixtZWRpdW1zbGF0ZWJsdWU6XCI3YjY4ZWVcIixtZWRpdW1zcHJpbmdncmVlbjpcIjAwZmE5YVwiLG1lZGl1bXR1cnF1b2lzZTpcIjQ4ZDFjY1wiLG1lZGl1bXZpb2xldHJlZDpcImM3MTU4NVwiLG1pZG5pZ2h0Ymx1ZTpcIjE5MTk3MFwiLG1pbnRjcmVhbTpcImY1ZmZmYVwiLG1pc3R5cm9zZTpcImZmZTRlMVwiLG1vY2Nhc2luOlwiZmZlNGI1XCIsbmF2YWpvd2hpdGU6XCJmZmRlYWRcIixuYXZ5OlwiMDAwMDgwXCIsb2xkbGFjZTpcImZkZjVlNlwiLG9saXZlOlwiODA4MDAwXCIsb2xpdmVkcmFiOlwiNmI4ZTIzXCIsb3JhbmdlOlwiZmZhNTAwXCIsb3JhbmdlcmVkOlwiZmY0NTAwXCIsb3JjaGlkOlwiZGE3MGQ2XCIscGFsZWdvbGRlbnJvZDpcImVlZThhYVwiLHBhbGVncmVlbjpcIjk4ZmI5OFwiLHBhbGV0dXJxdW9pc2U6XCJhZmVlZWVcIixwYWxldmlvbGV0cmVkOlwiZGI3MDkzXCIscGFwYXlhd2hpcDpcImZmZWZkNVwiLHBlYWNocHVmZjpcImZmZGFiOVwiLHBlcnU6XCJjZDg1M2ZcIixwaW5rOlwiZmZjMGNiXCIscGx1bTpcImRkYTBkZFwiLHBvd2RlcmJsdWU6XCJiMGUwZTZcIixwdXJwbGU6XCI4MDAwODBcIixyZWJlY2NhcHVycGxlOlwiNjYzMzk5XCIscmVkOlwiZjAwXCIscm9zeWJyb3duOlwiYmM4ZjhmXCIscm95YWxibHVlOlwiNDE2OWUxXCIsc2FkZGxlYnJvd246XCI4YjQ1MTNcIixzYWxtb246XCJmYTgwNzJcIixzYW5keWJyb3duOlwiZjRhNDYwXCIsc2VhZ3JlZW46XCIyZThiNTdcIixzZWFzaGVsbDpcImZmZjVlZVwiLHNpZW5uYTpcImEwNTIyZFwiLHNpbHZlcjpcImMwYzBjMFwiLHNreWJsdWU6XCI4N2NlZWJcIixzbGF0ZWJsdWU6XCI2YTVhY2RcIixzbGF0ZWdyYXk6XCI3MDgwOTBcIixzbGF0ZWdyZXk6XCI3MDgwOTBcIixzbm93OlwiZmZmYWZhXCIsc3ByaW5nZ3JlZW46XCIwMGZmN2ZcIixzdGVlbGJsdWU6XCI0NjgyYjRcIix0YW46XCJkMmI0OGNcIix0ZWFsOlwiMDA4MDgwXCIsdGhpc3RsZTpcImQ4YmZkOFwiLHRvbWF0bzpcImZmNjM0N1wiLHR1cnF1b2lzZTpcIjQwZTBkMFwiLHZpb2xldDpcImVlODJlZVwiLHdoZWF0OlwiZjVkZWIzXCIsd2hpdGU6XCJmZmZcIix3aGl0ZXNtb2tlOlwiZjVmNWY1XCIseWVsbG93OlwiZmYwXCIseWVsbG93Z3JlZW46XCI5YWNkMzJcIn0sSz1pLmhleE5hbWVzPVMoRyksWj1mdW5jdGlvbigpe3ZhciBlPVwiWy1cXFxcK10/XFxcXGQrJT9cIixvPVwiWy1cXFxcK10/XFxcXGQqXFxcXC5cXFxcZCslP1wiLHQ9XCIoPzpcIitvK1wiKXwoPzpcIitlK1wiKVwiLHI9XCJbXFxcXHN8XFxcXChdKyhcIit0K1wiKVssfFxcXFxzXSsoXCIrdCtcIilbLHxcXFxcc10rKFwiK3QrXCIpXFxcXHMqXFxcXCk/XCIsYT1cIltcXFxcc3xcXFxcKF0rKFwiK3QrXCIpWyx8XFxcXHNdKyhcIit0K1wiKVssfFxcXFxzXSsoXCIrdCtcIilbLHxcXFxcc10rKFwiK3QrXCIpXFxcXHMqXFxcXCk/XCI7cmV0dXJue0NTU19VTklUOm5ldyBSZWdFeHAodCkscmdiOm5ldyBSZWdFeHAoXCJyZ2JcIityKSxyZ2JhOm5ldyBSZWdFeHAoXCJyZ2JhXCIrYSksaHNsOm5ldyBSZWdFeHAoXCJoc2xcIityKSxoc2xhOm5ldyBSZWdFeHAoXCJoc2xhXCIrYSksaHN2Om5ldyBSZWdFeHAoXCJoc3ZcIityKSxoc3ZhOm5ldyBSZWdFeHAoXCJoc3ZhXCIrYSksaGV4MzovXiM/KFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pJC8saGV4NjovXiM/KFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pJC8saGV4NDovXiM/KFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KSQvLGhleDg6L14jPyhbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkkL319KCk7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUmJmUuZXhwb3J0cz9lLmV4cG9ydHM9aToocj1mdW5jdGlvbigpe3JldHVybiBpfS5jYWxsKG8sdCxvLGUpLCEodm9pZCAwIT09ciYmKGUuZXhwb3J0cz1yKSkpfShNYXRoKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByLGE7dCg2NCkscj10KDkpO3ZhciBpPXQoNTIpO2E9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoYT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiYoYT1hLm9wdGlvbnMpLGEucmVuZGVyPWkucmVuZGVyLGEuc3RhdGljUmVuZGVyRm5zPWkuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsYTt0KDU1KSxyPXQoMTApO3ZhciBpPXQoNDMpO2E9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoYT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiYoYT1hLm9wdGlvbnMpLGEucmVuZGVyPWkucmVuZGVyLGEuc3RhdGljUmVuZGVyRm5zPWkuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsYTt0KDU5KSxyPXQoMTEpO3ZhciBpPXQoNDcpO2E9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoYT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiYoYT1hLm9wdGlvbnMpLGEucmVuZGVyPWkucmVuZGVyLGEuc3RhdGljUmVuZGVyRm5zPWkuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsYTt0KDYyKSxyPXQoMTIpO3ZhciBpPXQoNTApO2E9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoYT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiYoYT1hLm9wdGlvbnMpLGEucmVuZGVyPWkucmVuZGVyLGEuc3RhdGljUmVuZGVyRm5zPWkuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsYTt0KDYzKSxyPXQoMTMpO3ZhciBpPXQoNTEpO2E9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoYT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiYoYT1hLm9wdGlvbnMpLGEucmVuZGVyPWkucmVuZGVyLGEuc3RhdGljUmVuZGVyRm5zPWkuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsYTt0KDYwKSxyPXQoMTQpO3ZhciBpPXQoNDgpO2E9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoYT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiYoYT1hLm9wdGlvbnMpLGEucmVuZGVyPWkucmVuZGVyLGEuc3RhdGljUmVuZGVyRm5zPWkuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsYTt0KDYxKSxyPXQoMTUpO3ZhciBpPXQoNDkpO2E9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoYT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiYoYT1hLm9wdGlvbnMpLGEucmVuZGVyPWkucmVuZGVyLGEuc3RhdGljUmVuZGVyRm5zPWkuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2NvbXBhY3RcIn0sW19jKFwidWxcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2NvbXBhY3RfX2NvbG9yc1wifSxfbChkZWZhdWx0Q29sb3JzLGZ1bmN0aW9uKGUpe3JldHVybiBfYyhcImxpXCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jb21wYWN0X19jb2xvci1pdGVtXCIsXCJjbGFzc1wiOntcInZ1ZS1jb2xvcl9fY29tcGFjdF9fY29sb3ItaXRlbS0td2hpdGVcIjpcIiNGRkZGRkZcIj09PWV9LHN0eWxlOntiYWNrZ3JvdW5kOmV9LG9uOntjbGljazpmdW5jdGlvbihvKXtoYW5kbGVyQ2xpY2soZSl9fX0sW19jKFwiZGl2XCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTplPT09cGljayxleHByZXNzaW9uOlwiYyA9PT0gcGlja1wifV0sc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2NvbXBhY3RfX2RvdFwifSldKX0pKSxfdihcIiBcIildKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dFwifSxbX2MoXCJpbnB1dFwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTp2YWwsZXhwcmVzc2lvbjpcInZhbFwifV0sc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19pbnB1dFwiLGRvbVByb3BzOnt2YWx1ZTpfcyh2YWwpfSxvbjp7a2V5ZG93bjpoYW5kbGVLZXlEb3duLGlucHV0OltmdW5jdGlvbihlKXtlLnRhcmdldC5jb21wb3Npbmd8fCh2YWw9ZS50YXJnZXQudmFsdWUpfSx1cGRhdGVdfX0pLF92KFwiIFwiKSxfYyhcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19sYWJlbFwifSxbX3YoX3MobGFiZWwpKV0pXSl9LHN0YXRpY1JlbmRlckZuczpbXX19LGZ1bmN0aW9uKG1vZHVsZSxleHBvcnRzKXttb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfYyhcImRpdlwiLHtcImNsYXNzXCI6W1widnVlLWNvbG9yX19jLWh1ZVwiLGRpcmVjdGlvbkNsYXNzXX0sW19jKFwiZGl2XCIse3JlZjpcImNvbnRhaW5lclwiLHN0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jLWh1ZV9fY29udGFpbmVyXCIsb246e21vdXNlZG93bjpoYW5kbGVNb3VzZURvd24sdG91Y2htb3ZlOmhhbmRsZUNoYW5nZSx0b3VjaHN0YXJ0OmhhbmRsZUNoYW5nZX19LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fYy1odWVfX3BvaW50ZXJcIixzdHlsZTp7dG9wOnBvaW50ZXJUb3AsbGVmdDpwb2ludGVyTGVmdH19LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fYy1odWVfX3BpY2tlclwifSldKV0pXSl9LHN0YXRpY1JlbmRlckZuczpbXX19LGZ1bmN0aW9uKG1vZHVsZSxleHBvcnRzKXttb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfYyhcImRpdlwiLHtyZWY6XCJjb250YWluZXJcIixzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2F0dXJhdGlvblwiLHN0eWxlOntiYWNrZ3JvdW5kOmJnQ29sb3J9LG9uOnttb3VzZWRvd246aGFuZGxlTW91c2VEb3dufX0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zYXR1cmF0aW9uLS13aGl0ZVwifSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zYXR1cmF0aW9uLS1ibGFja1wifSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zYXR1cmF0aW9uLS1wb2ludGVyXCIsc3R5bGU6e3RvcDpwb2ludGVyVG9wLGxlZnQ6cG9pbnRlckxlZnR9fSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NhdHVyYXRpb24tLWNpcmNsZVwifSldKV0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX21hdGVyaWFsXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5oZXgsZXhwcmVzc2lvbjpcImNvbG9ycy5oZXhcIn1dLHN0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19tYXRlcmlhbF9faGV4XCIsc3R5bGU6e2JvcmRlckNvbG9yOmNvbG9ycy5oZXh9LGF0dHJzOntsYWJlbDpcImhleFwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLmhleH0sb246e1wib24tY2hhbmdlXCI6b25DaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmhleD1lfX19KSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX21hdGVyaWFsX19zcGxpdFwifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX21hdGVyaWFsX190aGlyZFwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMucmdiYS5yLGV4cHJlc3Npb246XCJjb2xvcnMucmdiYS5yXCJ9XSxhdHRyczp7bGFiZWw6XCJyXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMucmdiYS5yfSxvbjp7XCJvbi1jaGFuZ2VcIjpvbkNoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMucmdiYS5yPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19tYXRlcmlhbF9fdGhpcmRcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLnJnYmEuZyxleHByZXNzaW9uOlwiY29sb3JzLnJnYmEuZ1wifV0sYXR0cnM6e2xhYmVsOlwiZ1wifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLnJnYmEuZ30sb246e1wib24tY2hhbmdlXCI6b25DaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEuZz1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fbWF0ZXJpYWxfX3RoaXJkXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLmIsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLmJcIn1dLGF0dHJzOntsYWJlbDpcImJcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLmJ9LG9uOntcIm9uLWNoYW5nZVwiOm9uQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLmI9ZX19fSldKV0pXSl9LHN0YXRpY1JlbmRlckZuczpbXX19LGZ1bmN0aW9uKG1vZHVsZSxleHBvcnRzKXttb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2xpZGVyXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2xpZGVyX19odWUtd2FycFwifSxbX2MoXCJodWVcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLGV4cHJlc3Npb246XCJjb2xvcnNcIn1dLGRvbVByb3BzOnt2YWx1ZTpjb2xvcnN9LG9uOntcIm9uLWNoYW5nZVwiOmh1ZUNoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnM9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoZXNcIn0sX2woc3dhdGNoZXMsZnVuY3Rpb24oZSxvKXtyZXR1cm4gX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoXCIsYXR0cnM6e1wiZGF0YS1pbmRleFwiOm99LG9uOntjbGljazpmdW5jdGlvbih0KXtoYW5kbGVTd0NsaWNrKG8sZSl9fX0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaC1waWNrZXJcIixcImNsYXNzXCI6e1widnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaC1waWNrZXItLWFjdGl2ZVwiOmU9PWFjdGl2ZU9mZnNldH0sc3R5bGU6e2JhY2tncm91bmQ6XCJoc2woXCIrY29sb3JzLmhzbC5oK1wiLCA1MCUsIFwiKzEwMCplK1wiJSlcIn19KV0pfSkpXSl9LHN0YXRpY1JlbmRlckZuczpbXX19LGZ1bmN0aW9uKG1vZHVsZSxleHBvcnRzKXttb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc3dhdGNoZXNcIixhdHRyczp7XCJkYXRhLXBpY2tcIjpwaWNrfX0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zd2F0Y2hlc19fYm94XCJ9LF9sKGRlZmF1bHRDb2xvcnMsZnVuY3Rpb24oZSl7cmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zd2F0Y2hlc19fY29sb3ItZ3JvdXBcIn0sX2woZSxmdW5jdGlvbihlKXtyZXR1cm4gX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3N3YXRjaGVzX19jb2xvci1pdFwiLHN0eWxlOntiYWNrZ3JvdW5kOmV9LGF0dHJzOntcImRhdGEtY29sb3JcIjplfSxvbjp7Y2xpY2s6ZnVuY3Rpb24obyl7aGFuZGxlckNsaWNrKGUpfX19LFtfYyhcImRpdlwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6ZT09cGljayxleHByZXNzaW9uOlwiYyA9PSBwaWNrXCJ9XSxzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc3dhdGNoZXNfX3BpY2tcIn0sW19jKFwic3ZnXCIse3N0YXRpY1N0eWxlOnt3aWR0aDpcIjI0cHhcIixoZWlnaHQ6XCIyNHB4XCJ9LGF0dHJzOnt2aWV3Qm94OlwiMCAwIDI0IDI0XCJ9fSxbX2MoXCJwYXRoXCIse2F0dHJzOntkOlwiTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WlwifX0pXSldKV0pfSkpfSkpXSl9LHN0YXRpY1JlbmRlckZuczpbXX19LGZ1bmN0aW9uKG1vZHVsZSxleHBvcnRzKXttb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcFwifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2hlYWRcIn0sW192KF9zKGhlYWQpKV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fYm9keVwifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX3NhdHVyYXRpb24td3JhcFwifSxbX2MoXCJzYXR1cmF0aW9uXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycyxleHByZXNzaW9uOlwiY29sb3JzXCJ9XSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzfSxvbjp7XCJvbi1jaGFuZ2VcIjpjaGlsZENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnM9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS13cmFwXCJ9LFtfYyhcImh1ZVwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMsZXhwcmVzc2lvbjpcImNvbG9yc1wifV0sYXR0cnM6e2RpcmVjdGlvbjpcInZlcnRpY2FsXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnN9LG9uOntcIm9uLWNoYW5nZVwiOmNoaWxkQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycz1lfX19LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9faHVlLXBvaW50ZXJcIn0sW19jKFwiaVwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9faHVlLXBvaW50ZXItLWxlZnRcIn0pLF9jKFwiaVwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9faHVlLXBvaW50ZXItLXJpZ2h0XCJ9KV0pXSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2NvbnRyb2xzXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3NcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19wcmV2aWV3c19fbGFiZWxcIn0sW192KFwibmV3XCIpXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19wcmV2aWV3c19fc3dhdGNoZXNcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19wcmV2aWV3c19fcHItY29sb3JcIixzdHlsZTp7YmFja2dyb3VuZDpjb2xvcnMuaGV4fX0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3NfX3ByLWNvbG9yXCIsc3R5bGU6e2JhY2tncm91bmQ6Y3VycmVudENvbG9yfX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19wcmV2aWV3c19fbGFiZWxcIn0sW192KFwiY3VycmVudFwiKV0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19hY3Rpb25zXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fYWMtYnRuXCIsb246e2NsaWNrOmhhbmRsZUFjY2VwdH19LFtfdihcIk9LXCIpXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19hYy1idG5cIixvbjp7Y2xpY2s6aGFuZGxlQ2FuY2VsfX0sW192KFwiQ2FuY2VsXCIpXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19maWVsZHNcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmhzbC5oLGV4cHJlc3Npb246XCJjb2xvcnMuaHNsLmhcIn1dLGF0dHJzOntsYWJlbDpcImhcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5oc2wuaH0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmhzbC5oPWV9fX0pLF92KFwiIFwiKSxfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5oc2wucyxleHByZXNzaW9uOlwiY29sb3JzLmhzbC5zXCJ9XSxhdHRyczp7bGFiZWw6XCJzXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuaHNsLnN9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5oc2wucz1lfX19KSxfdihcIiBcIiksX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuaHNsLmwsZXhwcmVzc2lvbjpcImNvbG9ycy5oc2wubFwifV0sYXR0cnM6e2xhYmVsOlwidlwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLmhzbC5sfSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMuaHNsLmw9ZX19fSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19maWVsZHNfX2RpdmlkZXJcIn0pLF92KFwiIFwiKSxfdihcIiBcIiksX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMucmdiYS5yLGV4cHJlc3Npb246XCJjb2xvcnMucmdiYS5yXCJ9XSxhdHRyczp7bGFiZWw6XCJyXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMucmdiYS5yfSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMucmdiYS5yPWV9fX0pLF92KFwiIFwiKSxfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLmcsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLmdcIn1dLGF0dHJzOntsYWJlbDpcImdcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLmd9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLmc9ZX19fSksX3YoXCIgXCIpLF9jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLnJnYmEuYixleHByZXNzaW9uOlwiY29sb3JzLnJnYmEuYlwifV0sYXR0cnM6e2xhYmVsOlwiYlwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLnJnYmEuYn0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEuYj1lfX19KSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2ZpZWxkc19fZGl2aWRlclwifSksX3YoXCIgXCIpLF92KFwiIFwiKSxfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5oZXgsZXhwcmVzc2lvbjpcImNvbG9ycy5oZXhcIn1dLHN0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19maWVsZHNfX2hleFwiLGF0dHJzOntsYWJlbDpcIiNcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5oZXh9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5oZXg9ZX19fSldKV0pXSldKV0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaFwifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fc2F0dXJhdGlvbi13cmFwXCJ9LFtfYyhcInNhdHVyYXRpb25cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLGV4cHJlc3Npb246XCJjb2xvcnNcIn1dLGRvbVByb3BzOnt2YWx1ZTpjb2xvcnN9LG9uOntcIm9uLWNoYW5nZVwiOmNoaWxkQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycz1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoX19jb250cm9sc1wifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fc2xpZGVyc1wifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9faHVlLXdyYXBcIn0sW19jKFwiaHVlXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycyxleHByZXNzaW9uOlwiY29sb3JzXCJ9XSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzfSxvbjp7XCJvbi1jaGFuZ2VcIjpjaGlsZENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnM9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fYWxwaGEtd3JhcFwifSxbX2MoXCJhbHBoYVwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMsZXhwcmVzc2lvbjpcImNvbG9yc1wifV0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9yc30sb246e1wib24tY2hhbmdlXCI6Y2hpbGRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzPWV9fX0pXSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fY29sb3Itd3JhcFwifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fYWN0aXZlLWNvbG9yXCIsc3R5bGU6e2JhY2tncm91bmQ6YWN0aXZlQ29sb3J9fSldKV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoX19maWVsZFwifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fZmllbGQtLWRvdWJsZVwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuaGV4LGV4cHJlc3Npb246XCJjb2xvcnMuaGV4XCJ9XSxhdHRyczp7bGFiZWw6XCJoZXhcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5oZXhcbn0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmhleD1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoX19maWVsZC0tc2luZ2xlXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLnIsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLnJcIn1dLGF0dHJzOntsYWJlbDpcInJcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLnJ9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLnI9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fZmllbGQtLXNpbmdsZVwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMucmdiYS5nLGV4cHJlc3Npb246XCJjb2xvcnMucmdiYS5nXCJ9XSxhdHRyczp7bGFiZWw6XCJnXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMucmdiYS5nfSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMucmdiYS5nPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxkLS1zaW5nbGVcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLnJnYmEuYixleHByZXNzaW9uOlwiY29sb3JzLnJnYmEuYlwifV0sYXR0cnM6e2xhYmVsOlwiYlwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLnJnYmEuYn0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEuYj1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoX19maWVsZC0tc2luZ2xlXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5hLGV4cHJlc3Npb246XCJjb2xvcnMuYVwifV0sYXR0cnM6e2xhYmVsOlwiYVwiLFwiYXJyb3ctb2Zmc2V0XCI6LjAxLG1heDoxfSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLmF9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5hPWV9fX0pXSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fcHJlc2V0c1wifSxfbChwcmVzZXRDb2xvcnMsZnVuY3Rpb24oZSl7cmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX3ByZXNldHMtY29sb3JcIixzdHlsZTp7YmFja2dyb3VuZDplfSxvbjp7Y2xpY2s6ZnVuY3Rpb24obyl7aGFuZGxlUHJlc2V0KGUpfX19KX0pKV0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZVwifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fc2F0dXJhdGlvbi13cmFwXCJ9LFtfYyhcInNhdHVyYXRpb25cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLGV4cHJlc3Npb246XCJjb2xvcnNcIn1dLGRvbVByb3BzOnt2YWx1ZTpjb2xvcnN9LG9uOntcIm9uLWNoYW5nZVwiOmNoaWxkQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycz1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19jaHJvbWUtYm9keVwifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fY29udHJvbHNcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2NvbG9yLXdyYXBcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2FjdGl2ZS1jb2xvclwiLHN0eWxlOntiYWNrZ3JvdW5kOmFjdGl2ZUNvbG9yfX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX3NsaWRlcnNcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2h1ZS13cmFwXCJ9LFtfYyhcImh1ZVwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMsZXhwcmVzc2lvbjpcImNvbG9yc1wifV0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9yc30sb246e1wib24tY2hhbmdlXCI6Y2hpbGRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2FscGhhLXdyYXBcIn0sW19jKFwiYWxwaGFcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLGV4cHJlc3Npb246XCJjb2xvcnNcIn1dLGRvbVByb3BzOnt2YWx1ZTpjb2xvcnN9LG9uOntcIm9uLWNoYW5nZVwiOmNoaWxkQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycz1lfX19KV0pXSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fZmllbGRzLXdyYXBcIn0sW19jKFwiZGl2XCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTowPT09ZmllbGRzSW5kZXgsZXhwcmVzc2lvbjpcImZpZWxkc0luZGV4ID09PSAwXCJ9XSxzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZHNcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5oZXgsZXhwcmVzc2lvbjpcImNvbG9ycy5oZXhcIn1dLGF0dHJzOntsYWJlbDpcImhleFwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLmhleH0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmhleD1lfX19KV0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZToxPT09ZmllbGRzSW5kZXgsZXhwcmVzc2lvbjpcImZpZWxkc0luZGV4ID09PSAxXCJ9XSxzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZHNcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLnIsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLnJcIn1dLGF0dHJzOntsYWJlbDpcInJcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLnJ9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLnI9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fZmllbGRcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLnJnYmEuZyxleHByZXNzaW9uOlwiY29sb3JzLnJnYmEuZ1wifV0sYXR0cnM6e2xhYmVsOlwiZ1wifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLnJnYmEuZ30sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEuZz1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZFwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMucmdiYS5iLGV4cHJlc3Npb246XCJjb2xvcnMucmdiYS5iXCJ9XSxhdHRyczp7bGFiZWw6XCJiXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMucmdiYS5ifSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMucmdiYS5iPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5hLGV4cHJlc3Npb246XCJjb2xvcnMuYVwifV0sYXR0cnM6e2xhYmVsOlwiYVwiLFwiYXJyb3ctb2Zmc2V0XCI6LjAxLG1heDoxfSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLmF9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5hPWV9fX0pXSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOjI9PT1maWVsZHNJbmRleCxleHByZXNzaW9uOlwiZmllbGRzSW5kZXggPT09IDJcIn1dLHN0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkc1wifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fZmllbGRcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmhzbC5oLGV4cHJlc3Npb246XCJjb2xvcnMuaHNsLmhcIn1dLGF0dHJzOntsYWJlbDpcImhcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5oc2wuaH0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmhzbC5oPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5oc2wucyxleHByZXNzaW9uOlwiY29sb3JzLmhzbC5zXCJ9XSxhdHRyczp7bGFiZWw6XCJzXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuaHNsLnN9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5oc2wucz1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZFwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuaHNsLmwsZXhwcmVzc2lvbjpcImNvbG9ycy5oc2wubFwifV0sYXR0cnM6e2xhYmVsOlwibFwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLmhzbC5sfSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMuaHNsLmw9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fZmllbGRcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmEsZXhwcmVzc2lvbjpcImNvbG9ycy5hXCJ9XSxhdHRyczp7bGFiZWw6XCJhXCIsXCJhcnJvdy1vZmZzZXRcIjouMDEsbWF4OjF9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuYX0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmE9ZX19fSldKV0pLF92KFwiIFwiKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fdG9nZ2xlLWJ0blwiLG9uOntjbGljazp0b2dnbGVWaWV3c319LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19pY29uXCJ9LFtfYyhcInN2Z1wiLHtzdGF0aWNTdHlsZTp7d2lkdGg6XCIyNHB4XCIsaGVpZ2h0OlwiMjRweFwifSxhdHRyczp7dmlld0JveDpcIjAgMCAyNCAyNFwifSxvbjp7bW91c2VvdmVyOnNob3dIaWdobGlnaHQsbW91c2VlbnRlcjpzaG93SGlnaGxpZ2h0LG1vdXNlb3V0OmhpZGVIaWdobGlnaHR9fSxbX2MoXCJwYXRoXCIse2F0dHJzOntmaWxsOlwiIzMzM1wiLGQ6XCJNMTIsMTguMTdMOC44MywxNUw3LjQyLDE2LjQxTDEyLDIxTDE2LjU5LDE2LjQxTDE1LjE3LDE1TTEyLDUuODNMMTUuMTcsOUwxNi41OCw3LjU5TDEyLDNMNy40MSw3LjU5TDguODMsOUwxMiw1LjgzWlwifX0pXSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOmhpZ2hsaWdodCxleHByZXNzaW9uOlwiaGlnaGxpZ2h0XCJ9XSxzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19pY29uLWhpZ2hsaWdodFwifSldKSxfdihcIiBcIildKV0pXSl9LHN0YXRpY1JlbmRlckZuczpbXX19LGZ1bmN0aW9uKG1vZHVsZSxleHBvcnRzKXttb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fYy1hbHBoYVwifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2MtYWxwaGFfX2NoZWNrYm9hcmQtd3JhcFwifSxbX2MoXCJjaGVja2JvYXJkXCIpXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jLWFscGhhX19ncmFkaWVudFwiLHN0eWxlOntiYWNrZ3JvdW5kOmdyYWRpZW50Q29sb3J9fSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3JlZjpcImNvbnRhaW5lclwiLHN0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jLWFscGhhX19jb250YWluZXJcIixvbjp7bW91c2Vkb3duOmhhbmRsZU1vdXNlRG93bix0b3VjaG1vdmU6aGFuZGxlQ2hhbmdlLHRvdWNoc3RhcnQ6aGFuZGxlQ2hhbmdlfX0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jLWFscGhhX19wb2ludGVyXCIsc3R5bGU6e2xlZnQ6MTAwKmNvbG9ycy5hK1wiJVwifX0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jLWFscGhhX19waWNrZXJcIn0pXSldKV0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2MtY2hlY2tlcmJvYXJkXCIsc3R5bGU6e2JhY2tncm91bmQ6YmdTdHlsZX19KX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByPXQoMjEpO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaWQscixcIlwiXV0pO3QoMikocix7fSk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHI9dCgyMik7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbZS5pZCxyLFwiXCJdXSk7dCgyKShyLHt9KTtyLmxvY2FscyYmKGUuZXhwb3J0cz1yLmxvY2Fscyl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcj10KDIzKTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1tlLmlkLHIsXCJcIl1dKTt0KDIpKHIse30pO3IubG9jYWxzJiYoZS5leHBvcnRzPXIubG9jYWxzKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByPXQoMjQpO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaWQscixcIlwiXV0pO3QoMikocix7fSk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHI9dCgyNSk7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbZS5pZCxyLFwiXCJdXSk7dCgyKShyLHt9KTtyLmxvY2FscyYmKGUuZXhwb3J0cz1yLmxvY2Fscyl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcj10KDI2KTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1tlLmlkLHIsXCJcIl1dKTt0KDIpKHIse30pO3IubG9jYWxzJiYoZS5leHBvcnRzPXIubG9jYWxzKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByPXQoMjcpO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaWQscixcIlwiXV0pO3QoMikocix7fSk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHI9dCgyOCk7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbZS5pZCxyLFwiXCJdXSk7dCgyKShyLHt9KTtyLmxvY2FscyYmKGUuZXhwb3J0cz1yLmxvY2Fscyl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcj10KDI5KTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1tlLmlkLHIsXCJcIl1dKTt0KDIpKHIse30pO3IubG9jYWxzJiYoZS5leHBvcnRzPXIubG9jYWxzKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByPXQoMzApO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaWQscixcIlwiXV0pO3QoMikocix7fSk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHI9dCgzMSk7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbZS5pZCxyLFwiXCJdXSk7dCgyKShyLHt9KTtyLmxvY2FscyYmKGUuZXhwb3J0cz1yLmxvY2Fscyl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcj10KDMyKTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1tlLmlkLHIsXCJcIl1dKTt0KDIpKHIse30pO3IubG9jYWxzJiYoZS5leHBvcnRzPXIubG9jYWxzKX1dKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtY29sb3IvZGlzdC92dWUtY29sb3IubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAyODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDx2aWRlbyByZWY9XCJwbGF5ZXJcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJ2aWRlby1qcyB2anMtZGVmYXVsdC1za2luXCJcbiAgICAgICAgICAgICAgIGNvbnRyb2xzIHByZWxvYWQ9XCJhdXRvXCJcbiAgICAgICAgICAgICAgIDpwb3N0ZXI9XCJwb3N0ZXJcIlxuICAgICAgICAgICAgICAgOmRhdGEtc2V0dXA9XCJzdHJTb3VyY2VcIlxuICAgICAgICA+PC92aWRlbz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGU+XG4gICAgI3ZpZGVvLWNhbnZhcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCB7ZGlzcGF0Y2gsIGdldFN0YXRlfSBmcm9tICdtb2Nrc3RhdGUnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGxheWVyOiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcG9zdGVyOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge30sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBzdHJTb3VyY2UoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5zb3VyY2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIHRoaXMuaW5pdFBsYXllcih0aGlzLnNvdXJjZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGFwaSgpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluaXRQbGF5ZXIoc291cmNlKXtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZi5zb3VyY2UpO1xuICAgICAgICAgICAgICAgIGxldCBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHNvdXJjZS5zb3VyY2VzWzBdLFxuICAgICAgICAgICAgICAgICAgICB0ZWNoT3JkZXI6IFsneW91dHViZSddLFxuICAgICAgICAgICAgICAgICAgICBwbGF5YmFja1JhdGVzOiBbMC4yNSwgMC41LCAxLCAxLjUsIDJdLFxuICAgICAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUHJvZ3Jlc3M6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYWJMb29wUGx1Z2luOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9vcElmQmVmb3JlU3RhcnQ6IGZhbHNlLCAvL2FsbG93IHZpZGVvIHRvIHBsYXkgbm9ybWFsbHkgYmVmb3JlIHRoZSBsb29wIHNlY3Rpb24/IGRlZmF1bHRzIHRvIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29vcElmQWZ0ZXJFbmQ6IHRydWUsIC8vIGRlZmF1bHRzIHRvIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXVzZUFmdGVyTG9vcGluZzogZmFsc2UsICAgICAgIC8vaWYgdHJ1ZSwgYWZ0ZXIgbG9vcGluZyB2aWRlbyB3aWxsIHBhdXNlLiBEZWZhdWx0cyB0byBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdXNlQmVmb3JlTG9vcGluZzogZmFsc2UsICAgICAgLy9pZiB0cnVlLCBiZWZvcmUgbG9vcGluZyB2aWRlbyB3aWxsIHBhdXNlLiBEZWZhdWx0cyB0byBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbnM6IGZhbHNlLCAgLy9kZWZhdWx0cyB0byB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9mZnNldC5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcucGx1Z2lucy5kbmNvZmZzZXQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydE9mZnNldDogdGhpcy5vZmZzZXQuc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRPZmZzZXQ6IHRoaXMub2Zmc2V0LmVuZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gdmlkZW9qcyh0aGlzLiRyZWZzLnBsYXllciwgY29uZmlnKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0UGxheWVyJywgdGhpcy5wbGF5ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsIGZ1bmN0aW9uIGR1cmF0aW9uU2V0dGVyKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKCcqJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc3RhdGUucGxheWVyLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0RHVyYXRpb24nLCBzdGF0ZS5wbGF5ZXIuaW5zdGFuY2UuZHVyYXRpb24oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0Wm9vbScsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLnBsYXllci5kdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdwbGF5ZXJSZWFkeScsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnBsYXllci5pbnN0YW5jZS5vZmYoJ3RpbWV1cGRhdGUnLCBkdXJhdGlvblNldHRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdwbGF5ZXJSZWFkeScsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUucGxheWVyLmluc3RhbmNlLm9mZigndGltZXVwZGF0ZScsIGR1cmF0aW9uU2V0dGVyKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGxheWJhY2tSYXRlKDEpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRDdXJyZW50VGltZScsIHRoaXMucGxheWVyLmN1cnJlbnRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcGxheWVyLnZ1ZT8zOTI2NTdhMCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGlkPVwiaW5zcGVjdG9yQm94XCIgY2xhc3M9XCJib3ggYm94LXNvbGlkIGNvbGxhcHNlZC1ib3hcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDwhLS0gdG9vbHMgYm94IC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtcmlnaHQgYm94LXRvb2xzXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCIgaWQ9XCJpbnNwZWN0b3JUb29nbGVyXCIgdi1vbjpjbGljaz1cInRvb2dsZU9wZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13aWRnZXQ9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLW9yaWdpbmFsLXRpdGxlPVwiQ29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8IS0tIC8uIHRvb2xzIC0tPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhclwiPjwvaT5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLmluc3BlY3RvcicpfX1cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnQgaW5zcGVjdG9yLWluZm9cIiB2LWlmPVwidG91Y2hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cIidiYWNrZ3JvdW5kOicrYmFja2dyb3VuZCsnOyBoZWlnaHQ6MjBweDsgd2lkdGg6MjBweDttYXJnaW4tdG9wOiAxcHg7IG1hcmdpbi1yaWdodDo1cHgnXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtbGVmdCBpbnNwZWN0b3ItaW5mby0tdGl0bGVcIj57e3RpdGxlfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsIGxhYmVsLXN1Y2Nlc3NcIj57e3N0YXJ0fX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1kYW5nZXJcIj57e2VuZH19PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiB2LWlmPVwidG91Y2hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWlsYm94LWNvbnRyb2xzIGNvbnRyb2wtaW5zcGVjdG9yLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJjcmVhdGVBY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInJlY29yZGluZ1RvdWNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5lbmRfYWN0aW9uJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYVwiIDpjbGFzcz1cInsnZmEtcGxheSc6IXBsYXlpbmcsJ2ZhLXBhdXNlIHRleHQtZGFuZ2VyJzpwbGF5aW5nfVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twbGF5aW5nPyR0KCdzY291dGluZ3MucGF1c2UnKTokdCgnc2NvdXRpbmdzLnBsYXknKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiB2LW9uOmNsaWNrPVwiYmFja3dhcmQoMTApXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1mYXN0LWJhY2t3YXJkXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMCBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgdi1vbjpjbGljaz1cImJhY2t3YXJkKDUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1iYWNrd2FyZFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNSBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgdi1vbjpjbGljaz1cImZvcndhcmQoNSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWZvcndhcmRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUgc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJmb3J3YXJkKDEwKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtZmFzdC1mb3J3YXJkXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMCBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiB2LW9uOmNsaWNrPVwicGxheWJhY2tSYXRlKDAuMjUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMjUgeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJwbGF5YmFja1JhdGUoMC41KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjUgeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJwbGF5YmFja1JhdGUoMSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSB4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgdi1vbjpjbGljaz1cInBsYXliYWNrUmF0ZSgxLjUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuNSB4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgdi1vbjpjbGljaz1cInBsYXliYWNrUmF0ZSgyKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyIHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0aGxldGUtbWVudVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiB2LWlmPVwidG91Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IG5vLXBhZGRpbmctcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdGhsZXRlLW1lbnUtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MubGVmdF9hY3Rpb25zJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgbm8tcGFkZGluZy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXRobGV0ZS1tZW51LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnJpZ2h0X2FjdGlvbnMnKX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cInRvdWNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiBuby1wYWRkaW5nLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXRobGV0ZS1tZW51LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFncyA6dGFncz1cInRhZ3NMZWZ0XCIgOnNlbGVjdGVkPVwiYWN0aW9uLmxlZnRUYWdzXCIgdHlwZT1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb246dGFnLWRlbGV0ZWQ9XCJ0YWdEZWxldGVkTGVmdFwiIHYtb246dGFnLXNlbGVjdGVkPVwidGFnU2VsZWN0ZWRMZWZ0XCI+PC90YWdzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgbm8tcGFkZGluZy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXRobGV0ZS1tZW51LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFncyA6dGFncz1cInRhZ3NSaWdodFwiIDpzZWxlY3RlZD1cImFjdGlvbi5yaWdodFRhZ3NcIiB0eXBlPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb246dGFnLWRlbGV0ZWQ9XCJ0YWdEZWxldGVkUmlnaHRcIiB2LW9uOnRhZy1zZWxlY3RlZD1cInRhZ1NlbGVjdGVkUmlnaHRcIj48L3RhZ3M+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGlkPSdpbnNwZWN0b3InPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cInNjc3NcIiByZWw9XCJzdHlsZXNoZWV0L3Njc3NcIj5cbiAgICAuaW5zcGVjdG9yLWluZm8ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgLmluc3BlY3Rvci1pbmZvLS10aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hdGhsZXRlLW1lbnUge1xuXG4gICAgICAgIC5kcm9wZG93biB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuYXRobGV0ZS1tZW51LXRpdGxlIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDNlMGU5O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDNlMGU5O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QzZTBlOTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdGhsZXRlLW1lbnUtbGVmdCB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkM2UwZTk7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDNlMGU5O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdGhsZXRlLW1lbnUtcmlnaHQge1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QzZTBlOTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQge2Rpc3BhdGNoLCBnZXRTdGF0ZSwgc3Vic2NyaWJlfSBmcm9tICdtb2Nrc3RhdGUnO1xuICAgIGltcG9ydCBpbnNwZWN0b3JTa2V0Y2ggZnJvbSAnLi4vc2tldGNoL2luc3BlY3RvclNrZXRjaCdcbiAgICBpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi9za2V0Y2gvY29tcG9uZW50cy91dGlscy9UaW1lQ29udmVydGVyJ1xuICAgIGltcG9ydCBjb2xsaWRlTWl4aW4gZnJvbSAnYmFzZS9taXhpbnMvY29sbGlkZSdcbiAgICBpbXBvcnQgdXVpZE1peGluIGZyb20gJ2Jhc2UvbWl4aW5zL3V1aWQnXG4gICAgaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9za2V0Y2gvY29tcG9uZW50cy90b3VjaGVzL0FjdGlvbidcbiAgICBpbXBvcnQgdGFncyBmcm9tICcuLi90YWdzL3RhZ3MudnVlJztcbiAgICBpbXBvcnQgY29tbW9uU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9jb21tb24vY29tbW9uU2VydmljZSdcbiAgICBpbXBvcnQgc2NvdXRpbmdzTG9jYWxlcyBmcm9tICdiYXNlL2xhbmcvYWRtaW4vc2NvdXRpbmdzL3Njb3V0aW5ncy5qcyc7XG5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgbG9jYWxlczogc2NvdXRpbmdzTG9jYWxlcyxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0b3VjaDogbnVsbCxcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiBbXSxcbiAgICAgICAgICAgICAgICByZWNvcmRpbmdUb3VjaDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3RhcnRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZWRpdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZWRpdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGxlZnRUYWdzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRUYWdzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHNsXCI6IHtcImhcIjogNjEuMDc2MjMzMTgzODU2NSwgXCJzXCI6IDEsIFwibFwiOiAwLjQzNzI1NDkwMTk2MDc4NDMsIFwiYVwiOiAxfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGV4XCI6IFwiI0RCREYwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZ2JhXCI6IHtcInJcIjogMjE5LCBcImdcIjogMjIzLCBcImJcIjogMCwgXCJhXCI6IDEsIFwiYWxwaGFcIjogNTB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoc3ZcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJ2XCI6IDAuODc0NTA5ODAzOTIxNTY4NiwgXCJhXCI6IDF9LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0YWdzTGVmdDogW10sXG4gICAgICAgICAgICAgICAgdGFnc1JpZ2h0OiBbXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHBsYXlpbmc6IHt9LFxuICAgICAgICB9LFxuICAgICAgICBtaXhpbnM6IFtjb2xsaWRlTWl4aW4sIHV1aWRNaXhpbl0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICAnb3Blbic6IGZ1bmN0aW9uIChvcGVuLCBvbGRPcGVuKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zcGVjdG9yLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zcGVjdG9yLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIHRhZ3NcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZCgpe1xuICAgICAgICAgICAgc3Vic2NyaWJlKHRoaXMsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWN0aW9uID09ICdzZXRTZWxlY3RlZFRvdWNoJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoID0gZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucyA9IHRoaXMudG91Y2guYWN0aW9ucy5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucyA9IFtdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWN0aW9uID09ICdzZXRTZWxlY3RlZEFjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGdldFN0YXRlKCcqJykudG91Y2hNYW5hZ2VyLnNlbGVjdGVkQWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3Rpb24gPT0gJ3JlY29yZGluZ1RvdWNoJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZGluZ1RvdWNoID0gZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIucmVjb3JkaW5nVG91Y2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbW1vblNlcnZpY2UuZ2V0VGFncygocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGFnc0xlZnQgPSBfLmNsb25lRGVlcChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3NSaWdodCA9IF8uY2xvbmVEZWVwKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfSwgKGVycm9yKT0+IHtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJ1cy4kb24oJ3Rvb2dsZS1pbnNwZWN0b3InLCAoaXNPcGVuKT0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXNPcGVuID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgICAgICAgICAgICAgICAgICAkLkFkbWluTFRFLmJveFdpZGdldC5jb2xsYXBzZSgkKCcjaW5zcGVjdG9yVG9vZ2xlcicpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcGVuICE9IGlzT3Blbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5BZG1pbkxURS5ib3hXaWRnZXQuY29sbGFwc2UoJCgnI2luc3BlY3RvclRvb2dsZXInKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gaXNPcGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICB0aXRsZSgpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvdWNoID8gdGhpcy50b3VjaC50ZXh0IDogJyc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhcnQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b3VjaCA/IFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy50b3VjaC5zdGFydCkgOiBudWxsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuZCgpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvdWNoID8gVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnRvdWNoLmVuZCkgOiBudWxsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhY2tncm91bmQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b3VjaCA/IHRoaXMudG91Y2guY29sb3IuaGV4IDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgbmV3IHA1KGluc3BlY3RvclNrZXRjaCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHRvb2dsZU9wZW4oKXtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYXkoKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhcnRBY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB2YXIgY29sbGlkZVJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlQWN0aW9ucyh7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBNYXRoLmZsb29yKHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSksXG4gICAgICAgICAgICAgICAgICAgIGVuZDogTWF0aC5mbG9vcih0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpICsgMVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlUmVzdWx0LmNvbGxpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbGxpZGUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2ggPSBnZXRTdGF0ZSgnKicpLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmRpc2FibGVQcm9ncmVzcy5kaXNhYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvdWNoLmFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IHRoaXMudG91Y2guYWN0aW9uc1t0aGlzLnRvdWNoLmFjdGlvbnMubGVuZ3RoIC0gMV0uZW5kXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IHRoaXMudG91Y2guc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdCA9IG5ldyBBY3Rpb24oTWF0aC5mbG9vcihzdGFydCksIE1hdGguZmxvb3IodGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSwgXy5jbG9uZURlZXAodGhpcy50b3VjaC5jb2xvcikpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnYWRkQWN0aW9uJywgYWN0KTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3JlY29yZGluZ0FjdGlvbicsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRBY3Rpb24nLCBhY3QpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5vbigndGltZXVwZGF0ZScsIHRoaXMub25TdGFydEFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWdTZWxlY3RlZExlZnQodGFnKXtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRBY3Rpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0YWcudXVpZCA9IHRoaXMuZ2VuZXJhdGVVVUlEKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLmxlZnRUYWdzLnB1c2godGFnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnU2VsZWN0ZWRSaWdodCh0YWcpe1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBnZXRTdGF0ZSgnKicpLnRvdWNoTWFuYWdlci5zZWxlY3RlZEFjdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhZy51dWlkID0gdGhpcy5nZW5lcmF0ZVVVSUQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24ucmlnaHRUYWdzLnB1c2godGFnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnRGVsZXRlZFJpZ2h0KHRhZyl7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IGdldFN0YXRlKCcqJykudG91Y2hNYW5hZ2VyLnNlbGVjdGVkQWN0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhZ0luZGV4ID0gXy5maW5kSW5kZXgodGhpcy5hY3Rpb24ucmlnaHRUYWdzLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8udXVpZCA9PSB0YWcudXVpZDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLnJpZ2h0VGFncy5zcGxpY2UodGFnSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWdEZWxldGVkTGVmdCh0YWcpe1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBnZXRTdGF0ZSgnKicpLnRvdWNoTWFuYWdlci5zZWxlY3RlZEFjdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWdJbmRleCA9IF8uZmluZEluZGV4KHRoaXMuYWN0aW9uLmxlZnRUYWdzLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8udXVpZCA9PSB0YWcudXVpZDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLmxlZnRUYWdzLnNwbGljZSh0YWdJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU3RhcnRBY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbi5lbmQgPSBNYXRoLmZsb29yKHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVSZXN1bHQgPSB0aGlzLmNoZWNrQ29sbGlkZUFjdGlvbnModGhpcy5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlUmVzdWx0LmNvbGxpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdyZWNvcmRpbmdBY3Rpb24nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkub2ZmKCd0aW1ldXBkYXRlJywgdGhpcy5vblN0YXJ0QWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24uZW5kID0gTWF0aC5mbG9vcih0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5kaXNhYmxlUHJvZ3Jlc3MuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyogZWxzZSBpZiAoTWF0aC5mbG9vcih0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpID4gdGhpcy50b3VjaC5lbmQpIHtcbiAgICAgICAgICAgICAgICAgdGhpcy5lZGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkub2ZmKCd0aW1ldXBkYXRlJywgdGhpcy5vblN0YXJ0QWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3JlY29yZGluZ0FjdGlvbicsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24uZW5kID0gTWF0aC5mbG9vcih0aGlzLnRvdWNoLmVuZCk7XG4gICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuZGlzYWJsZVByb2dyZXNzLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuZEFjdGlvbigpe1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3JlY29yZGluZ0FjdGlvbicsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLm9mZigndGltZXVwZGF0ZScsIHRoaXMub25TdGFydEFjdGlvbik7XG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5wYXVzZSgpXG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5kaXNhYmxlUHJvZ3Jlc3MuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5wYXVzZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZUFjdGlvbigpe1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRBY3Rpb24oKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGF5YmFja1JhdGUocmF0ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5wbGF5YmFja1JhdGUocmF0ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9yd2FyZChzKXtcbiAgICAgICAgICAgICAgICB2YXIgZm9yd2FyZCA9IHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSArIHM7XG4gICAgICAgICAgICAgICAgaWYgKGZvcndhcmQgPD0gdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5kdXJhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoZm9yd2FyZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSh0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmR1cmF0aW9uKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYWNrd2FyZChzKXtcbiAgICAgICAgICAgICAgICB2YXIgYmFja3dhcmQgPSB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkgLSBzO1xuICAgICAgICAgICAgICAgIGlmIChiYWNrd2FyZCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoYmFja3dhcmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGluc3BlY3Rvci52dWU/MjJkNDFlODQiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBpZD1cInRpbWVsaW5lQm94XCIgY2xhc3M9XCJib3ggYm94LXNvbGlkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XG4gICAgICAgICAgICA8IS0tIHRvb2xzIGJveCAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLXJpZ2h0IGJveC10b29sc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdi1vbjpjbGljay5wcmV2ZW50PVwiem9vbUluXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tc21cIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJab29tIEluXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoLXBsdXNcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB2LW9uOmNsaWNrLnByZXZlbnQ9XCJ6b29tT3V0XCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlpvb20gT3V0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoLW1pbnVzXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIGlkPVwidGltZWxpbmVUb29nbGVyXCIgdi1vbjpjbGljaz1cInRvb2dsZU9wZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13aWRnZXQ9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLW9yaWdpbmFsLXRpdGxlPVwiQ29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1taW51c1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLSAvLiB0b29scyAtLT5cblxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhclwiPjwvaT5cblxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnRpbWVsaW5lJyl9fVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxuICAgICAgICAgICAgPGRpdiBpZD0ndGltZWxpbmUnPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGU+XG5cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCB7ZGlzcGF0Y2gsIGdldFN0YXRlfSBmcm9tICdtb2Nrc3RhdGUnO1xuICAgIGltcG9ydCB0aW1lbGluZVNrZXRjaCBmcm9tICcuLi9za2V0Y2gvdGltZWxpbmVTa2V0Y2gnXG4gICAgaW1wb3J0IHNjb3V0aW5nc0xvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL3Njb3V0aW5ncy9zY291dGluZ3MuanMnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGxvY2FsZXM6IHNjb3V0aW5nc0xvY2FsZXMsXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3BlbjogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgJ29wZW4nOiBmdW5jdGlvbiAob3Blbiwgb2xkT3Blbikge1xuICAgICAgICAgICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKXtcbiAgICAgICAgICAgIGJ1cy4kb24oJ3Rvb2dsZS10aW1lbGluZScsICgpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gICAgICAgICAgICAgICAgJC5BZG1pbkxURS5ib3hXaWRnZXQuY29sbGFwc2UoJCgnI3RpbWVsaW5lVG9vZ2xlcicpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIHdpbmRvdy5wID0gbmV3IHA1KHRpbWVsaW5lU2tldGNoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgdG9vZ2xlT3Blbigpe1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgem9vbUluKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZSgnKicpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRab29tJywgc3RhdGUudGltZWxpbmUuem9vbUZhY3RvciArIDEpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRJbml0aWFsaXplZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB6b29tT3V0KClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZSgnKicpO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS50aW1lbGluZS56b29tRmFjdG9yID4gc3RhdGUudGltZWxpbmUuaW5pdGlhbFpvb21GYWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFpvb20nLCBzdGF0ZS50aW1lbGluZS56b29tRmFjdG9yIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRJbml0aWFsaXplZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGltZWxpbmUudnVlPzQ2NzJiMGI5IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxhZG1pbi1oZWFkZXIgOnRpdGxlPVwidGl0bGVcIiA6YnJlYWRjcnVtYnM9XCJicmVhZGNydW1ic1wiPjwvYWRtaW4taGVhZGVyPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQgb3ZlcmxheS13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGlzLWZsZXhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC02IHBsYXllci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRuYy1wbGF5ZXIgdi1pZj1cImluaXRpYWxpemVkXCIgOnNvdXJjZT1cInNvdXJjZVwiIHJlZj1cInBsYXllclwiPjwvZG5jLXBsYXllcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC02IHRvdWNoZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0b3VjaGVzLWxpc3Q+PC90b3VjaGVzLWxpc3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiB2LXNob3c9XCJwbGF5ZXJSZWFkeVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haWxib3gtY29udHJvbHMgY29udHJvbC1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgdi1vbjpjbGljaz1cInN0YXJ0VG91Y2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwic3RhcnRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmFcIiA6Y2xhc3M9XCJ7J2ZhLXBsYXknOiFzdGFydGVkLCdmYS1jaXJjbGUgdGV4dC1kYW5nZXInOnN0YXJ0ZWR9XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3N0YXJ0ZWQ/JHQoJ3Njb3V0aW5ncy5yZWNvcmRpbmcnKTokdCgnc2NvdXRpbmdzLnN0YXJ0X3RvdWNoJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIgOmRpc2FibGVkPVwiIXN0YXJ0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1vbjpjbGljaz1cImVuZFRvdWNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1zdG9wXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MuZW5kX3RvdWNoJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiB2LW9uOmNsaWNrPVwidG9vZ2xlVGltZWxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG9vZ2xlX3RpbWVsaW5lJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgdi1vbjpjbGljaz1cInRvb2dsZUluc3BlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1leWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG9vZ2xlX2luc3BlY3RvcicpfX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uYnRuLWdyb3VwIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZWRpdC10b3VjaC1mb3JtIHYtaWY9XCJlZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1vbjpjYW5jZWwtbmV3LXRvdWNoPVwiY2FuY2VsRWRpdFRvdWNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmluaXQtdG91Y2g9XCJ0b3VjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb246YWRkLW5ldy10b3VjaD1cInNhdmVFZGl0VG91Y2hcIiA6ZHVyYXRpb249XCJkdXJhdGlvblwiPjwvZWRpdC10b3VjaC1mb3JtPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGluc3BlY3RvciB2LWlmPVwicGxheWVyUmVhZHlcIiByZWY9XCJpbnNwZWN0b3JcIiA6cGxheWluZz1cInBsYXlpbmdcIj48L2luc3BlY3Rvcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8dGltZWxpbmUgdi1pZj1cInBsYXllclJlYWR5XCI+PC90aW1lbGluZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGdsb2JhbC10aW1lbGluZSB2LWlmPVwicGxheWVyUmVhZHlcIj48L2dsb2JhbC10aW1lbGluZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtc2hvdz1cInBsYXllclJlYWR5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1vbjpjbGljaz1cInNhdmVcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIj4ge3skdCgnZm9ybXMuc2F2ZScpfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LW9uOmNsaWNrPVwiY2FuY2VsXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcIj57eyR0KCdmb3Jtcy5iYWNrJyl9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiIHYtaWY9XCIhcGxheWVyUmVhZHlcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXJlZnJlc2ggZmEtc3BpblwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCBkbmNQbGF5ZXIgZnJvbSAnYmFzZS9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlJztcbiAgICBpbXBvcnQgVG91Y2ggZnJvbSAnLi9za2V0Y2gvY29tcG9uZW50cy90b3VjaGVzL1RvdWNoJztcbiAgICBpbXBvcnQge3NldFN0YXRlLCBzZXRBY3Rpb25zLCBnZXRTdGF0ZSwgZGlzcGF0Y2gsIHN1YnNjcmliZX0gZnJvbSAnbW9ja3N0YXRlJztcbiAgICBpbXBvcnQge2FjdGlvbnN9IGZyb20gJy4vc3RvcmVzL2FjdGlvbnMnXG4gICAgaW1wb3J0IHtzdGF0ZX0gZnJvbSAnLi9zdG9yZXMvc3RvcmUnXG4gICAgaW1wb3J0IFZlZVZhbGlkYXRlLCB7VmFsaWRhdG9yfSBmcm9tICd2ZWUtdmFsaWRhdGUnO1xuICAgIGltcG9ydCBuZXdUb3VjaEZvcm0gZnJvbSAnLi9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlJztcbiAgICBpbXBvcnQgZWRpdFRvdWNoRm9ybSBmcm9tICcuL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlJztcbiAgICBpbXBvcnQgdG91Y2hlc0xpc3QgZnJvbSAnLi9saXN0cy90b3VjaGVzTGlzdC52dWUnO1xuICAgIGltcG9ydCB0aW1lbGluZSBmcm9tICcuL2NhbnZhcy90aW1lbGluZS52dWUnO1xuICAgIGltcG9ydCBpbnNwZWN0b3IgZnJvbSAnLi9jYW52YXMvaW5zcGVjdG9yLnZ1ZSc7XG4gICAgaW1wb3J0IGdsb2JhbFRpbWVsaW5lIGZyb20gJy4vY2FudmFzL2dsb2JhbFRpbWVsaW5lLnZ1ZSc7XG4gICAgaW1wb3J0IGNvbGxpZGVNaXhpbiBmcm9tICdiYXNlL21peGlucy9jb2xsaWRlJztcbiAgICBpbXBvcnQgYWRtaW5IZWFkZXIgZnJvbSAnYmFzZS9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZSdcbiAgICBpbXBvcnQgc2NvdXRpbmdTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3Njb3V0aW5ncy9zY291dGluZ1NlcnZpY2UnXG4gICAgaW1wb3J0IHNjb3V0aW5nVG91Y2hTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3Njb3V0aW5ncy9zY291dGluZ1RvdWNoU2VydmljZSdcbiAgICBpbXBvcnQgQWN0aW9uIGZyb20gJy4vc2tldGNoL2NvbXBvbmVudHMvdG91Y2hlcy9BY3Rpb24nXG4gICAgaW1wb3J0IHV1aWRNaXhpbiBmcm9tICdiYXNlL21peGlucy91dWlkJ1xuICAgIGltcG9ydCBlcnJvclByZXNlbnRlciBmcm9tICdiYXNlL21peGlucy9hamF4L2Vycm9yUHJlc2VudGVyJ1xuICAgIGltcG9ydCBzY291dGluZ3NMb2NhbGVzIGZyb20gJ2Jhc2UvbGFuZy9hZG1pbi9zY291dGluZ3Mvc2NvdXRpbmdzLmpzJztcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBkbmNQbGF5ZXIsXG4gICAgICAgICAgICBuZXdUb3VjaEZvcm0sXG4gICAgICAgICAgICBlZGl0VG91Y2hGb3JtLFxuICAgICAgICAgICAgdG91Y2hlc0xpc3QsXG4gICAgICAgICAgICB0aW1lbGluZSxcbiAgICAgICAgICAgIGluc3BlY3RvcixcbiAgICAgICAgICAgIGFkbWluSGVhZGVyLFxuICAgICAgICAgICAgZ2xvYmFsVGltZWxpbmVcbiAgICAgICAgfSxcbiAgICAgICAgbWl4aW5zOiBbY29sbGlkZU1peGluLCB1dWlkTWl4aW4sIGVycm9yUHJlc2VudGVyXSxcbiAgICAgICAgbG9jYWxlczogc2NvdXRpbmdzTG9jYWxlcyxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2NvdXRpbmc6IHt9LFxuICAgICAgICAgICAgICAgIHNvdXJjZToge30sXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgICAgIGVkaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBsYXlpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN0YXJ0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBsYXllclJlYWR5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0b3VjaDoge1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGVkaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJoc2xcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJsXCI6IDAuNDM3MjU0OTAxOTYwNzg0MywgXCJhXCI6IDF9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZXhcIjogXCIjREJERjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJnYmFcIjoge1wiclwiOiAyMTksIFwiZ1wiOiAyMjMsIFwiYlwiOiAwLCBcImFcIjogMSwgXCJhbHBoYVwiOiA1MH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhzdlwiOiB7XCJoXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFwic1wiOiAxLCBcInZcIjogMC44NzQ1MDk4MDM5MjE1Njg2LCBcImFcIjogMX0sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBicmVhZGNydW1icygpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvZGFzaGJvYXJkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnYWRtaW4uaG9tZSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9zY291dGluZ3MvbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2FkbWluLnNjb3V0aW5ncydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9zY291dGluZ3MvJyArIHRoaXMuJHJvdXRlLnBhcmFtcy5pZCArICcvdG91Y2hlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2FkbWluLnRvdWNoZXMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGUoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kdCgnYWRtaW4uc2NvdXRpbmdzJykgKyAnICcgKyB0aGlzLnNjb3V0aW5nLm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZCgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpbmRvdy52bSA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IHdpbmRvd1snc291cmNlJ107XG4gICAgICAgICAgICBzZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICBzZXRBY3Rpb25zKGFjdGlvbnMpO1xuICAgICAgICAgICAgd2luZG93LmdldFN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRTdGF0ZSgnKicpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHN1YnNjcmliZSh0aGlzLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFjdGlvbiA9PSAncGxheWVyUmVhZHknKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXJSZWFkeSBzdWJzY3JpcHQnLCB0aGlzLnBsYXllclJlYWR5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldFN0YXRlKCcqJykucGxheWVyUmVhZHkgJiYgIXRoaXMucGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUmVhZHkgPSBnZXRTdGF0ZSgnKicpLnBsYXllclJlYWR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFNjb3V0aW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY291dGluZ1NlcnZpY2Uuc2hvdyh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3V0aW5nID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc291cmNlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZWNoT3JkZXInOiBbJ3lvdXR1YmUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc291cmNlcyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiBcInZpZGVvL3lvdXR1YmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcmMnOiByZXNwb25zZS5kYXRhLnZpZGVvX3NyY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBidXMuJG9uKCdlZGl0LXRvdWNoJywgKHRvdWNoKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0VG91Y2goKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRUb3VjaChudWxsLCB0b3VjaClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnVzLiRvbigncmVtb3ZlLXRvdWNoJywgKHRvdWNoKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVRvdWNoKHRvdWNoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpe1xuXG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZURlc3Ryb3koKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZXN0cm95IGhvb2snKTtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLm9mZigpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBsb2FkU2NvdXRpbmcoKXtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgXy5lYWNoKHRoaXMuc2NvdXRpbmcudG91Y2hlcywgZnVuY3Rpb24gKHRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3QgPSBuZXcgVG91Y2godG91Y2guc3RhcnQsIHRvdWNoLmVuZCwgdG91Y2gudGl0bGUsIHRvdWNoLmNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2FkZFRvdWNoJywgYWN0KTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkVG91Y2gnLCBhY3QpO1xuICAgICAgICAgICAgICAgICAgICBfLmVhY2godG91Y2guYWN0aW9ucywgZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdCA9IG5ldyBBY3Rpb24oYWN0aW9uLnN0YXJ0LCBhY3Rpb24uZW5kLCBhY3Rpb24uY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2FkZEFjdGlvbicsIGFjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRBY3Rpb24nLCBhY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKGFjdGlvbi5sZWZ0VGFncywgZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZy51dWlkID0gc2VsZi5nZW5lcmF0ZVVVSUQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnYWRkTGVmdFRhZycsIHRhZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goYWN0aW9uLnJpZ2h0VGFncywgZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZy51dWlkID0gc2VsZi5nZW5lcmF0ZVVVSUQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnYWRkUmlnaHRUYWcnLCB0YWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZEFjdGlvbicsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZFRvdWNoJywgbnVsbCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5pdCgpe1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLm9uKCdwbGF5JywgKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5vbigncGF1c2UnLCAoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkucGxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLm9uKCd0aW1ldXBkYXRlJywgKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGlkZVJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogTWF0aC5mbG9vcih0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IE1hdGguZmxvb3IodGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSkgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlUmVzdWx0LmNvbGxpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlkZVJlc3VsdC5jb2xsaWRlVG91Y2hlc1swXS5wcmV2aW91cyBpbnN0YW5jZW9mIFRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b3VjaCA9IGNvbGxpZGVSZXN1bHQuY29sbGlkZVRvdWNoZXNbMF0ucHJldmlvdXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZFRvdWNoJywgdG91Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29sbGlkZVJlc3VsdC5jb2xsaWRlVG91Y2hlc1swXS5jdXJyZW50IGluc3RhbmNlb2YgVG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvdWNoID0gY29sbGlkZVJlc3VsdC5jb2xsaWRlVG91Y2hlc1swXS5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRUb3VjaCcsIHRvdWNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRUb3VjaCcsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGlkZUFjdGlvblJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlQWN0aW9ucyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IE1hdGguZmxvb3IodGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBNYXRoLmZsb29yKHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlkZUFjdGlvblJlc3VsdC5jb2xsaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpZGVBY3Rpb25SZXN1bHQuY29sbGlkZUFjdGlvbnNbMF0ucHJldmlvdXMgaW5zdGFuY2VvZiBBY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGNvbGxpZGVBY3Rpb25SZXN1bHQuY29sbGlkZUFjdGlvbnNbMF0ucHJldmlvdXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZEFjdGlvbicsIGFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2xsaWRlQWN0aW9uUmVzdWx0LmNvbGxpZGVBY3Rpb25zWzBdLmN1cnJlbnQgaW5zdGFuY2VvZiBBY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGNvbGxpZGVBY3Rpb25SZXN1bHQuY29sbGlkZUFjdGlvbnNbMF0uY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkQWN0aW9uJywgYWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRBY3Rpb24nLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2hhbmdlQ29sb3IodmFsKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoLmNvbG9yID0gdmFsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhcnRUb3VjaCgpe1xuICAgICAgICAgICAgICAgIHZhciBjb2xsaWRlUmVzdWx0ID0gdGhpcy5jaGVja0NvbGxpZGUoe1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogTWF0aC5mbG9vcih0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBNYXRoLmZsb29yKHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpICsgMVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlUmVzdWx0LmNvbGxpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC5lcnJvclRvYXN0KHRoaXMuJHQoJ3Njb3V0aW5ncy50b3VjaGVzX2NhbnRfb3ZlcmxhcCcpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuZGlzYWJsZVByb2dyZXNzLmRpc2FibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdCA9IG5ldyBUb3VjaChNYXRoLmZsb29yKHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpLCBNYXRoLmZsb29yKHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpLCB0aGlzLnRvdWNoLnRleHQsIHRoaXMudG91Y2guY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnYWRkVG91Y2gnLCBhY3QpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgncmVjb3JkaW5nVG91Y2gnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b29nbGVJbnNwZWN0b3IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZFRvdWNoJywgYWN0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5pbnNwZWN0b3Iuc3RhcnRBY3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IE1hdGguZmxvb3IodGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuZHVyYXRpb24oKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoID0gYWN0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5vbigndGltZXVwZGF0ZScsIHNlbGYub25TdGFydFRvdWNoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU3RhcnRUb3VjaCgpe1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2guZW5kID0gTWF0aC5mbG9vcih0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKTtcbiAgICAgICAgICAgICAgICB2YXIgY29sbGlkZVJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlKHRoaXMudG91Y2gpO1xuICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlUmVzdWx0LmNvbGxpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdyZWNvcmRpbmdUb3VjaCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkub2ZmKCd0aW1ldXBkYXRlJywgdGhpcy5vblN0YXJ0VG91Y2gpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoLmVuZCA9IE1hdGguZmxvb3IodGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSAtIDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5wYXVzZSgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuZXJyb3JUb2FzdCh0aGlzLiR0KCdzY291dGluZ3MudG91Y2hlc19jYW50X292ZXJsYXAnKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuZGlzYWJsZVByb2dyZXNzLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmRUb3VjaCgpe1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3JlY29yZGluZ1RvdWNoJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLm9mZigndGltZXVwZGF0ZScsIHRoaXMub25TdGFydFRvdWNoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5wYXVzZSgpXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuZGlzYWJsZVByb2dyZXNzLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5pbnNwZWN0b3IuZW5kQWN0aW9uKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWRpdFRvdWNoKGV2ZW50LCB0b3VjaCl7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaCA9IHRvdWNoO1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdCA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2F2ZU5ld1RvdWNoKHRvdWNoKXtcbiAgICAgICAgICAgICAgICB2YXIgYWN0ID0gbmV3IFRvdWNoKHRvdWNoLnN0YXJ0LCB0b3VjaC5lbmQsIHRvdWNoLnRleHQsIHRvdWNoLmNvbG9yKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnYWRkVG91Y2gnLCBhY3QpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRUb3VjaCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbmNlbE5ld1RvdWNoKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFRvdWNoKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2F2ZUVkaXRUb3VjaCh0b3VjaCl7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2VkaXRUb3VjaCcsIHRvdWNoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0VG91Y2goKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYW5jZWxFZGl0VG91Y2godG91Y2gpe1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdCA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc2V0VG91Y2goKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoID0ge1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGVkaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJoc2xcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJsXCI6IDAuNDM3MjU0OTAxOTYwNzg0MywgXCJhXCI6IDF9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZXhcIjogXCIjREJERjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJnYmFcIjoge1wiclwiOiAyMTksIFwiZ1wiOiAyMjMsIFwiYlwiOiAwLCBcImFcIjogMSwgXCJhbHBoYVwiOiA1MH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhzdlwiOiB7XCJoXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFwic1wiOiAxLCBcInZcIjogMC44NzQ1MDk4MDM5MjE1Njg2LCBcImFcIjogMX0sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2dsZVRpbWVsaW5lKCl7XG4gICAgICAgICAgICAgICAgYnVzLiRlbWl0KCd0b29nbGUtdGltZWxpbmUnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29nbGVJbnNwZWN0b3IoaXNPcGVuKXtcbiAgICAgICAgICAgICAgICBidXMuJGVtaXQoJ3Rvb2dsZS1pbnNwZWN0b3InLCBpc09wZW4pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZVRvdWNoKHRvdWNoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICh0b3VjaCkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgncmVtb3ZlVG91Y2gnLCB0b3VjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2F2ZSgpe1xuICAgICAgICAgICAgICAgIHZhciB0b3VjaGVzID0gZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIudG91Y2hlcztcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdG91Y2hlcyA9IHRoaXMuZm9ybWF0U29jdXRpbmcodG91Y2hlcyk7XG4gICAgICAgICAgICAgICAgc2NvdXRpbmdUb3VjaFNlcnZpY2UudXBkYXRlKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCwge3RvdWNoZXM6IHRvdWNoZXN9LCAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb290LnN1Y2Nlc3NUb2FzdChyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Njb3V0aW5ncy5saXN0J1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sIChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FuY2VsKCl7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2NvdXRpbmdzLmxpc3QnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JtYXRTb2N1dGluZyh0b3VjaGVzKXtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIF8uZWFjaCh0b3VjaGVzLCAodG91Y2gpPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YVRvdWNoID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHsnZXMnOiB0b3VjaC50ZXh0LCAnZW4nOiB0b3VjaC50ZXh0fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiB0b3VjaC5zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogdG91Y2guZW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRvdWNoLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IHRvdWNoLmVuZCAtIHRvdWNoLnN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogW11cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8uZWFjaCh0b3VjaC5hY3Rpb25zLCAoYWN0aW9uKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhQWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBhY3Rpb24uc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBhY3Rpb24uZW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhY3Rpb24uY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IGFjdGlvbi5lbmQgLSBhY3Rpb24uc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFRhZ3M6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0VGFnczogW11cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChhY3Rpb24ubGVmdFRhZ3MsICh0YWcpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhVGFnID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVRhZy5pZCA9IHRhZy5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVGFnLmRyb3Bkb3duID0gdGFnLmRyb3Bkb3duO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWcuZHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVRhZy5vcHRpb24gPSB7aWQ6IHRhZy5vcHRpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFBY3Rpb24ubGVmdFRhZ3MucHVzaChkYXRhVGFnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goYWN0aW9uLnJpZ2h0VGFncywgKHRhZyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFUYWcgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVGFnLmlkID0gdGFnLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUYWcuZHJvcGRvd24gPSB0YWcuZHJvcGRvd247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhZy5kcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVGFnLm9wdGlvbiA9IHtpZDogdGFnLm9wdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUFjdGlvbi5yaWdodFRhZ3MucHVzaChkYXRhVGFnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVRvdWNoLmFjdGlvbnMucHVzaChkYXRhQWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChkYXRhVG91Y2gpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGVkaXQudnVlPzAxZjdmNmY4IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIHYtb246c3VibWl0LnByZXZlbnQ9XCJvblN1Ym1pdFwiIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsIGZvcm0tdG91Y2hcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3RvdWNodGV4dCcpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuZXctdGl0bGVcIiBjbGFzcz1cImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudGl0bGUnKX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5ldy10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3VjaHRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVwiVGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidG91Y2gudGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ3RvdWNodGV4dCcpXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaHRleHQnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuZXctdGl0bGVcIiBjbGFzcz1cImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MuY29sb3InKX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb21wYWN0LXBpY2tlciB2LW1vZGVsPVwidG91Y2guY29sb3JcIiBAY2hhbmdlLWNvbG9yPVwib25DaGFuZ2VDb2xvclwiPjwvY29tcGFjdC1waWNrZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3RvdWNoc3RhcnQnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmV3LXN0YXJ0XCIgY2xhc3M9XCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnN0YXJ0Jyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG91Y2hzdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XCJyZXF1aXJlZHxudW1lcmljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVwiU3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidG91Y2guc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LXN0YXJ0LWZtdFwiIG5hbWU9XCJuZXctc3RhcnQtZm10XCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzdGFydEZtdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJlcnJvcnMuaGFzKCd0b3VjaHN0YXJ0JylcIj57eyBlcnJvcnMuZmlyc3QoJ3RvdWNoc3RhcnQnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3RvdWNoZW5kJykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5ldy1lbmRcIiBjbGFzcz1cImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MuZW5kJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LWVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvdWNoZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkfG51bWVyaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtYXM9XCJFbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInRvdWNoLmVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuZXctZW5kLWZtdFwiIG5hbWU9XCJuZXctZW5kLWZtdFwiIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZW5kRm10XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ3RvdWNoZW5kJylcIj57eyBlcnJvcnMuZmlyc3QoJ3RvdWNoZW5kJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiB2LWlmPVwiY29sbGlkZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24gZmEgZmEtYmFuXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50b3VjaGVzX2NhbnRfb3ZlcmxhcCcpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hfb3ZlcmxhcF93aXRoJyl9fTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCJjb2xsaWRlVG91Y2ggaW4gY29sbGlkZVRvdWNoZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyB2LWlmPVwiY29sbGlkZVRvdWNoLnByZXZpb3VzLmlkICE9IHRvdWNoLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hfb3ZlcmxhcF9tc2cnLHsgdGl0bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaWRlVG91Y2gucHJldmlvdXMudGV4dCxzdGFydDp0b0hITU1TUyhjb2xsaWRlVG91Y2gucHJldmlvdXMuc3RhcnQpLGVuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvSEhNTVNTKGNvbGxpZGVUb3VjaC5wcmV2aW91cy5lbmQpfSl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyB2LWlmPVwiY29sbGlkZVRvdWNoLmN1cnJlbnQuaWQgIT0gdG91Y2guaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50b3VjaF9vdmVybGFwX21zZycseyB0aXRsZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpZGVUb3VjaC5jdXJyZW50LnRleHQsc3RhcnQ6dG9ISE1NU1MoY29sbGlkZVRvdWNoLmN1cnJlbnQuc3RhcnQpLGVuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvSEhNTVNTKGNvbGxpZGVUb3VjaC5jdXJyZW50LmVuZCl9KX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtaWY9XCJlbmRJbnZhbGlkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj7DlzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbiBmYSBmYS1iYW5cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnZhbGlkYXRpb25fZXJyb3InKX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnZhbGlkYXRpb25fZW5kX2dyZWF0ZXInKX19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+e3skdCgnc2NvdXRpbmdzLnNhdmUnKX19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIHYtb246Y2xpY2sucHJldmVudD1cImNsb3NlXCI+e3skdCgnc2NvdXRpbmdzLmNhbmNlbCcpfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlPlxuXG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQge2dldFN0YXRlfSBmcm9tICdtb2Nrc3RhdGUnO1xuICAgIGltcG9ydCB7Q29tcGFjdH0gZnJvbSAndnVlLWNvbG9yJztcbiAgICBpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi9za2V0Y2gvY29tcG9uZW50cy91dGlscy9UaW1lQ29udmVydGVyJ1xuICAgIGltcG9ydCBjb2xsaWRlTWl4aW4gZnJvbSAnYmFzZS9taXhpbnMvY29sbGlkZSdcbiAgICBpbXBvcnQgc2NvdXRpbmdzTG9jYWxlcyBmcm9tICdiYXNlL2xhbmcvYWRtaW4vc2NvdXRpbmdzL3Njb3V0aW5ncy5qcyc7XG5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgbG9jYWxlczogc2NvdXRpbmdzTG9jYWxlcyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGluaXRUb3VjaDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI6IDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnOiA3NyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYjogNTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGE6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiB7fSxcbiAgICAgICAgfSxcbiAgICAgICAgbWl4aW5zOiBbY29sbGlkZU1peGluXSxcbiAgICAgICAgY3JlYXRlZCgpe1xuICAgICAgICAgICAgdGhpcy50b3VjaCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaW5pdFRvdWNoKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgICd0b3VjaC5zdGFydCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29sbGlkZVJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlKHRoaXMudG91Y2gpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZSA9IGNvbGxpZGVSZXN1bHQuY29sbGlkZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGVUb3VjaGVzID0gY29sbGlkZVJlc3VsdC5jb2xsaWRlVG91Y2hlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndG91Y2guZW5kJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2xsaWRlUmVzdWx0ID0gdGhpcy5jaGVja0NvbGxpZGUodGhpcy50b3VjaCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlID0gY29sbGlkZVJlc3VsdC5jb2xsaWRlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZVRvdWNoZXMgPSBjb2xsaWRlUmVzdWx0LmNvbGxpZGVUb3VjaGVzO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9IHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpID49IHBhcnNlSW50KHRoaXMudG91Y2guZW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2xsaWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb2xsaWRlVG91Y2hlczogW10sXG4gICAgICAgICAgICAgICAgZW5kSW52YWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2g6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogMCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJnYmE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnOiA3NyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiOiA1MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgc3RhcnRGbXQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnRvdWNoLnN0YXJ0KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuZEZtdCgpe1xuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMudG91Y2guZW5kKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhbGlkYXRpb25FbmQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy50b3VjaC5zdGFydCkgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnY29tcGFjdC1waWNrZXInOiBDb21wYWN0LFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBjbG9zZSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NhbmNlbC1uZXctdG91Y2gnLCB0aGlzLnRvdWNoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b0hITU1TUyhzZWNzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1Moc2VjcylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNoYW5nZUNvbG9yKHZhbCl7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaC5jb2xvciA9IHZhbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU3VibWl0KCl7XG4gICAgICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCkudGhlbigoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG91Y2guc3RhcnQgPj0gdGhpcy50b3VjaC5lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZEludmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb2xsaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnYWRkLW5ldy10b3VjaCcsIHRoaXMudG91Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goYmFnID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC5lcnJvclRvYXN0KHRoaXMuJHQoJ2FkbWluLnZhbGlkYXRpb25fZXJyb3InKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbjxzdHlsZT5cbiAgICAudnVlLWNvbG9yX19jb21wYWN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBlZGl0VG91Y2hGb3JtLnZ1ZT9mNzU2ZmZiMCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiB2LW9uOnN1Ym1pdC5wcmV2ZW50PVwib25TdWJtaXRcIiBjbGFzcz1cImZvcm0taG9yaXpvbnRhbCBmb3JtLXRvdWNoXCIgdi1pZj1cIm9wZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3RvdWNoLnRleHQnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmV3LXRpdGxlXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEwXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuZXctdGl0bGVcIiBuYW1lPVwibmV3LXRpdGxlXCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWw9XCJ0b3VjaC50ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1ydWxlcz1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hcz1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInRvdWNoLnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJlcnJvcnMuaGFzKCd0b3VjaC50ZXh0JylcIj57eyBlcnJvcnMuZmlyc3QoJ3RvdWNoLnRleHQnKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuZXctdGl0bGVcIiBjbGFzcz1cImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29tcGFjdC1waWNrZXIgdi1tb2RlbD1cInRvdWNoLmNvbG9yXCIgQGNoYW5nZS1jb2xvcj1cIm9uQ2hhbmdlQ29sb3JcIj48L2NvbXBhY3QtcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaC5zdGFydCcpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuZXctc3RhcnRcIiBjbGFzcz1cImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCAoc2VjKVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LXN0YXJ0XCIgbmFtZT1cIm5ldy1zdGFydFwiIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWw9XCJ0b3VjaC5zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1ydWxlcz1cInJlcXVpcmVkfG51bWVyaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYXM9XCJTdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0b3VjaC5zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuZXctc3RhcnQtZm10XCIgbmFtZT1cIm5ldy1zdGFydC1mbXRcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInN0YXJ0Rm10XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ3RvdWNoLnN0YXJ0JylcIj57eyBlcnJvcnMuZmlyc3QoJ3RvdWNoLnN0YXJ0JykgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaC5lbmQnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmV3LWVuZFwiIGNsYXNzPVwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZChzZWMpXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuZXctZW5kXCIgbmFtZT1cIm5ldy1lbmRcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsPVwidG91Y2guZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXJ1bGVzPVwicmVxdWlyZWR8bnVtZXJpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hcz1cIkVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidG91Y2guZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5ldy1lbmQtZm10XCIgbmFtZT1cIm5ldy1lbmQtZm10XCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJlbmRGbXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygndG91Y2guZW5kJylcIj57eyBlcnJvcnMuZmlyc3QoJ3RvdWNoLmVuZCcpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cImNvbGxpZGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsOXPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PGkgY2xhc3M9XCJpY29uIGZhIGZhLWJhblwiPjwvaT4gVG91Y2hlcyBjYW50IG92ZXJsYXAhPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSB0b3VjaCB0aGF0IHlvdSB3YW50IHRvIGFkZCBvdmVybGFwIHdpdGg6XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwidG91Y2ggaW4gY29sbGlkZVRvdWNoZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyB2LWlmPVwidG91Y2gucHJldmlvdXMuaGFzT3duUHJvcGVydHkoJ2lkJylcIj57e3RvdWNoLnByZXZpb3VzLnRleHR9fTogdGhhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbiB7e3RvSEhNTVNTKHRvdWNoLnByZXZpb3VzLnN0YXJ0KX19IGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRzIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RvSEhNTVNTKHRvdWNoLnByZXZpb3VzLmVuZCl9fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIHYtaWY9XCJ0b3VjaC5jdXJyZW50Lmhhc093blByb3BlcnR5KCdpZCcpXCI+e3t0b3VjaC5jdXJyZW50LnRleHR9fTogdGhhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRzIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RvSEhNTVNTKHRvdWNoLmN1cnJlbnQuc3RhcnQpfX0gYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHMgb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dG9ISE1NU1ModG91Y2guY3VycmVudC5lbmQpfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiB2LWlmPVwiZW5kSW52YWxpZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND48aSBjbGFzcz1cImljb24gZmEgZmEtYmFuXCI+PC9pPiBWYWxpZGF0aW9uIEVycm9yITwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgZW5kIG9mIHRoZSB0b3VjaCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB0aGUgc3RhcnRcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj5BZGQgVG91Y2g8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgdi1vbjpjbGljay5wcmV2ZW50PVwiY2xvc2VcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlPlxuXG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQge2dldFN0YXRlfSBmcm9tICdtb2Nrc3RhdGUnO1xuICAgIGltcG9ydCB7Q29tcGFjdH0gZnJvbSAndnVlLWNvbG9yJztcbiAgICBpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi9za2V0Y2gvY29tcG9uZW50cy91dGlscy9UaW1lQ29udmVydGVyJ1xuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgb3Blbjoge30sXG4gICAgICAgICAgICBpbml0VG91Y2g6IHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoc2xcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJsXCI6IDAuNDM3MjU0OTAxOTYwNzg0MywgXCJhXCI6IDF9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGV4XCI6IFwiI0RCREYwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmdiYVwiOiB7XCJyXCI6IDIxOSwgXCJnXCI6IDIyMywgXCJiXCI6IDAsIFwiYVwiOiAxLCBcImFscGhhXCI6IDUwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhzdlwiOiB7XCJoXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFwic1wiOiAxLCBcInZcIjogMC44NzQ1MDk4MDM5MjE1Njg2LCBcImFcIjogMX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHVyYXRpb246IHt9LFxuICAgICAgICAgICAgc3RhcnQ6IHt9LFxuICAgICAgICAgICAgZW5kOiB7fVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgb3Blbih2YWwpe1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2ggPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmluaXRUb3VjaCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhcnQodmFsKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoLnN0YXJ0ID0gdmFsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuZCh2YWwpe1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2guZW5kID0gdmFsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3RvdWNoLnN0YXJ0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb2xsaWRlKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndG91Y2guZW5kJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb2xsaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRJbnZhbGlkID0gISEocGFyc2VJbnQodGhpcy50b3VjaC5zdGFydCkgPj0gcGFyc2VJbnQodGhpcy50b3VjaC5lbmQpIHx8IHBhcnNlSW50KHRoaXMudG91Y2guZW5kKSA+IHBhcnNlSW50KHRoaXMuZHVyYXRpb24pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2xsaWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb2xsaWRlVG91Y2hlczogW10sXG4gICAgICAgICAgICAgICAgZW5kSW52YWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2g6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogMCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJnYmE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnOiA3NyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiOiA1MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgc3RhcnRGbXQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnRvdWNoLnN0YXJ0KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuZEZtdCgpe1xuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMudG91Y2guZW5kKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhbGlkYXRpb25FbmQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy50b3VjaC5zdGFydCkgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnY29tcGFjdC1waWNrZXInOiBDb21wYWN0LFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBjbG9zZSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NhbmNlbC1uZXctdG91Y2gnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b0hITU1TUyhzZWNzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1Moc2VjcylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNoYW5nZUNvbG9yKHZhbCl7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaC5jb2xvciA9IHZhbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrQ29sbGlkZSgpe1xuICAgICAgICAgICAgICAgIHZhciB0b3VjaHMgPSBnZXRTdGF0ZSgndG91Y2hNYW5hZ2VyJykudG91Y2hlcy5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICB0b3VjaHMucHVzaCh0aGlzLnRvdWNoKTtcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcCA9IHRoaXMub3ZlcmxhcCh0b3VjaHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZSA9IG92ZXJsYXAub3ZlcmxhcDtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGVUb3VjaGVzID0gb3ZlcmxhcC5yYW5nZXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3ZlcmxhcCh0b3VjaHMpe1xuICAgICAgICAgICAgICAgIHZhciBzb3J0ZWRSYW5nZXMgPSB0b3VjaHMuc29ydCgocHJldmlvdXMsIGN1cnJlbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNUaW1lID0gcGFyc2VJbnQocHJldmlvdXMuc3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBwYXJzZUludChjdXJyZW50LnN0YXJ0KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJldmlvdXMgaXMgZWFybGllciB0aGFuIHRoZSBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1RpbWUgPCBjdXJyZW50VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIHRpbWUgaXMgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgdGltZVxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNUaW1lID09PSBjdXJyZW50VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJldmlvdXMgdGltZSBpcyBsYXRlciB0aGFuIHRoZSBjdXJyZW50IHRpbWVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhlIGZpbmFsIHJlc3VsdHNcbiAgICAgICAgICAgICAgICByZXR1cm4gc29ydGVkUmFuZ2VzLnJlZHVjZSgocmVzdWx0LCBjdXJyZW50LCBpZHgsIGFycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIHByZXZpb3VzIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzID0gYXJyW2lkeCAtIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBhbnkgb3ZlcmxhcFxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNFbmQgPSBwYXJzZUludChwcmV2aW91cy5lbmQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFN0YXJ0ID0gcGFyc2VJbnQoY3VycmVudC5zdGFydCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvdmVybGFwID0gKHByZXZpb3VzRW5kID49IGN1cnJlbnRTdGFydCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICBpZiAob3ZlcmxhcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8geWVzLCB0aGVyZSBpcyBvdmVybGFwXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQub3ZlcmxhcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUgc3BlY2lmaWMgcmFuZ2VzIHRoYXQgb3ZlcmxhcFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnJhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91czogcHJldmlvdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudDogY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2VlZCB0aGUgcmVkdWNlXG4gICAgICAgICAgICAgICAgfSwge292ZXJsYXA6IGZhbHNlLCByYW5nZXM6IFtdfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25TdWJtaXQoKXtcbiAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lcnJvcnMuYW55KCkpIHtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9ICEhKHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpID49IHBhcnNlSW50KHRoaXMudG91Y2guZW5kKSB8fCBwYXJzZUludCh0aGlzLnRvdWNoLmVuZCkgPiBwYXJzZUludChNYXRoLmZsb29yKHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuZHVyYXRpb24oKSkpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmVuZEludmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb2xsaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRJbnZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnYWRkLW5ldy10b3VjaCcsIHRoaXMudG91Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG48c3R5bGU+XG4gICAgLnZ1ZS1jb2xvcl9fY29tcGFjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbmV3VG91Y2hGb3JtLnZ1ZT8zY2YwNGRkOSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYm94IGJveC1zb2xpZCBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbWFwLW1hcmtlclwiPjwvaT5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50b3VjaGVzJyl9fVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwidG9kby1saXN0IHVpLXNvcnRhYmxlXCIgdi1pZj1cInRvdWNoZXMubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwidG91Y2ggaW4gdG91Y2hlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCInYmFja2dyb3VuZDonK3RvdWNoLmNvbG9yLmhleCsnOyBoZWlnaHQ6MjBweDsgd2lkdGg6MjBweDttYXJnaW4tdG9wOiAxcHg7J1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj57e3RvdWNoLnRleHR9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBFbXBoYXNpcyBsYWJlbCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9jay1vXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnN0YXJ0X2F0Jyx7c3RhcnQ6dG9ISE1NU1ModG91Y2guc3RhcnQpfSl9fVxuICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJsYWJlbCBsYWJlbC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2xvY2stb1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5lbmRfYXQnLHtlbmQ6dG9ISE1NU1ModG91Y2guZW5kKX0pfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBHZW5lcmFsIHRvb2xzIHN1Y2ggYXMgZWRpdCBvciBkZWxldGUtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWVkaXRcIiB2LW9uOmNsaWNrPVwiZWRpdFRvdWNoKHRvdWNoKVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2gtb1wiIHYtb246Y2xpY2s9XCJyZW1vdmVUb3VjaCh0b3VjaClcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGgzIHYtaWY9XCIhdG91Y2hlcy5sZW5ndGhcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+e3skdCgnc2NvdXRpbmdzLm5vX3RvdWNoZXMnKX19PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlPlxuXG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQge2dldFN0YXRlLCBzdWJzY3JpYmV9IGZyb20gJ21vY2tzdGF0ZSc7XG4gICAgaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVGltZUNvbnZlcnRlcidcbiAgICBpbXBvcnQgc2NvdXRpbmdzTG9jYWxlcyBmcm9tICdiYXNlL2xhbmcvYWRtaW4vc2NvdXRpbmdzL3Njb3V0aW5ncy5qcyc7XG5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgbG9jYWxlczogc2NvdXRpbmdzTG9jYWxlcyxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0b3VjaGVzOiBnZXRTdGF0ZSgnKicpLnRvdWNoTWFuYWdlci50b3VjaGVzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKXtcbiAgICAgICAgICAgIHN1YnNjcmliZSh0aGlzLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFjdGlvbiA9PSAnYWRkVG91Y2gnIHx8IGRhdGEuYWN0aW9uID09ICdyZW1vdmVUb3VjaCcgfHwgZGF0YS5hY3Rpb24gPT0gJ2VkaXRUb3VjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaGVzID0gZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIudG91Y2hlc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGVkaXRUb3VjaCh0b3VjaCl7XG4gICAgICAgICAgICAgICAgYnVzLiRlbWl0KCdlZGl0LXRvdWNoJywgdG91Y2gpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlVG91Y2godG91Y2gpe1xuICAgICAgICAgICAgICAgIGJ1cy4kZW1pdCgncmVtb3ZlLXRvdWNoJywgdG91Y2gpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9ISE1NU1Moc2Vjcyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1Moc2VjcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRvdWNoZXNMaXN0LnZ1ZT84YTdjNDZiYSIsIjx0ZW1wbGF0ZT5cbiAgICA8dGFnLWRyb3Bkb3duIHYtaWY9XCJ0YWcuZHJvcGRvd25cIiB2LW9uOm9wdGlvbi1jbGlja2VkPVwiZHJvcGRvd25PcHRpb25DbGlja2VkXCIgOnRhZz1cInRhZ1wiPjwvdGFnLWRyb3Bkb3duPlxuICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwidGFnLWRyb3Bkb3duXCI+XG4gICAgICAgIDxhIGNsYXNzPVwiIGJ0biB0YWdcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XCJ0YWdDbGlja2VkXCIgOmNsYXNzPVwiJ2JnLScrdGFnLmNvbG9yXCI+e3t0YWcubmFtZX19PC9hPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZT5cbiAgICAudGFnIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjb2xvcjogIzcxNzE3MTtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMTgwLCAxODAsIDE4MCwgMC4xKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIG1hcmdpbjogMCAzcHggNnB4IDA7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAudGFncyAudGFnOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDhDO1xuICAgIH1cblxuICAgIC50YWdzIC50YWcucHJpbWFyeSB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4QkNBO1xuICAgICAgICBib3JkZXItY29sb3I6ICMzNTdFQkRcbiAgICB9XG5cbiAgICAudGFncyAudGFnLnN1Y2Nlc3Mge1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVDQjg1QztcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNENBRTRDXG4gICAgfVxuXG4gICAgLnRhZ3MgLnRhZy5pbmZvIHtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1QkMwREU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzQ2QjhEQVxuICAgIH1cblxuICAgIC50YWdzIC50YWcud2FybmluZyB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBBRDRFO1xuICAgICAgICBib3JkZXItY29sb3I6ICNFRUEyMzZcbiAgICB9XG5cbiAgICAudGFncyAudGFnLmRhbmdlciB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDk1MzRGO1xuICAgICAgICBib3JkZXItY29sb3I6ICNENDNGM0FcbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgdGFnRHJvcGRvd24gZnJvbSAnLi90YWdEcm9wZG93bi52dWUnXG5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHRhZzoge31cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgdGFnRHJvcGRvd25cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZHJvcGRvd25PcHRpb25DbGlja2VkKHRhZyl7XG4gICAgICAgICAgICAgICAgbGV0IHRhZ0Ryb3Bkb3duID0gXy5jbG9uZURlZXAodGFnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0YWctY2xpY2tlZCcsIHRhZ0Ryb3Bkb3duKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ0NsaWNrZWQoKXtcbiAgICAgICAgICAgICAgICBsZXQgdGFnID0gXy5jbG9uZURlZXAodGhpcy50YWcpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RhZy1jbGlja2VkJywgdGFnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGFnLnZ1ZT8wMjRhMDkyMCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24gdGFnLWRyb3Bkb3duXCI+XG4gICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlIGJ0biB0YWdcIiA6Y2xhc3M9XCInYmctJyt0YWcuY29sb3JcIlxuICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgOmlkPVwiaWRcIj57e3RhZy5uYW1lfX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY2FyZXQtZG93blwiPjwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgOmFyaWEtbGFiZWxsZWRieT1cImlkXCI+XG4gICAgICAgICAgICA8bGkgdi1mb3I9XCJvcHQgaW4gdGFnLm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIHYtb246Y2xpY2sucHJldmVudD1cImNsaWNrT3B0KG9wdClcIj57e29wdC5uYW1lfX08L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZT5cbiAgICAudGFnLWRyb3Bkb3duIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHV1aWQgZnJvbSAnYmFzZS9taXhpbnMvdXVpZCdcbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHRhZzoge30sXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1peGluczogW3V1aWRdLFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5nZW5lcmF0ZVVVSUQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgY2xpY2tPcHQob3B0KXtcbiAgICAgICAgICAgICAgICB0aGlzLnRhZy5vcHRpb24gPSBvcHQ7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb3B0aW9uLWNsaWNrZWQnLCB0aGlzLnRhZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRhZ0Ryb3Bkb3duLnZ1ZT9mNDRjODYyYyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFnc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCIuLi5cIj5cbiAgICAgICAgICAgICAgICA8dGFnIDp0YWc9XCJ0YWdcIiB2LWZvcj1cInRhZyBpbiB0YWdzXCIgdi1vbjp0YWctY2xpY2tlZD1cInRhZ1NlbGVjdGVkXCI+PC90YWc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWdzLXNlbGVjdGVkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFncy1saXN0XCIgdi1kcmFndWxhPVwic2VsZWN0ZWRcIiBiYWc9XCJmaXJzdC1iYWdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwidGFnIGluIHNlbGVjdGVkXCIgOmtleT1cInRhZy5pZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIiA6Y2xhc3M9XCInYmctJyt0YWcuY29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dGFnLm5hbWV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJ0YWcub3B0aW9uXCI+IHt7dGFnLm9wdGlvbi5uYW1lfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJkZWxldGVUYWcodGFnKVwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG4gICAgaW1wb3J0IHRhZyBmcm9tICcuL3RhZy52dWUnXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBzZWxlY3RlZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWdzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICB0YWdcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgdGFnU2VsZWN0ZWQodGFnKXtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0YWctc2VsZWN0ZWQnLCB0YWcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZVRhZyh0YWcpe1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RhZy1kZWxldGVkJywgdGFnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgcmVsPVwic3R5bGVzaGVldC9zY3NzXCI+XG4gICAgLnRhZ3Mge1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRhZ3Mtc2VsZWN0ZWQge1xuICAgIH1cblxuICAgIC5jbG9zZSB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgIG9wYWNpdHk6IDAuOCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC50YWdzLWxpc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnRhZ3MtbGlzdCB7XG4gICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGFncy1saXN0IGRpdixcbiAgICAuZ3UtbWlycm9yIHtcbiAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgLnRhZ3MtbGlzdCBkaXYge1xuICAgICAgICBjdXJzb3I6IG1vdmU7XG4gICAgICAgIGN1cnNvcjogZ3JhYjtcbiAgICAgICAgY3Vyc29yOiAtbW96LWdyYWI7XG4gICAgICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuXG4gICAgLnRhZ3MtbGlzdCBkaXY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgLmd1LW1pcnJvciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9ODApXCI7XG4gICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT04MCk7XG4gICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XG4gICAgICAgIGN1cnNvcjogLW1vei1ncmFiYmluZztcbiAgICAgICAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xuICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmd1LWhpZGUge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmd1LXVuc2VsZWN0YWJsZSB7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZ3UtdHJhbnNpdCB7XG4gICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0yMClcIjtcbiAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTIwKTtcbiAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGFncy1saXN0IC5leC1tb3ZlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG4gICAgfVxuXG4gICAgLnRhZ3MtbGlzdC5leC1vdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgIH1cblxuICAgIC5oYW5kbGUge1xuICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xuICAgIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRhZ3MudnVlPzAwNmRiODUwIiwiaW1wb3J0IHtnZXRTdGF0ZSwgZGlzcGF0Y2h9IGZyb20gJ21vY2tzdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IodG91Y2hlcykge1xuICAgICAgICB0aGlzLnN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRvdWNoZXMnLCB0b3VjaGVzID8gdG91Y2hlcyA6IFtdKTtcbiAgICB9XG5cbiAgICBhZGQodG91Y2gpIHtcbiAgICAgICAgZGlzcGF0Y2goJ2FkZFRvdWNoJywgdG91Y2gpO1xuICAgIH1cblxuICAgIHJlbW92ZSh0b3VjaCkge1xuICAgICAgICBkaXNwYXRjaCgncmVtb3ZlVG91Y2gnLCB0b3VjaCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzW2pdLmRyYXcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdXNlT3ZlclRvdWNoKHgsIHkpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzW2pdLmlzTW91c2VPdmVyKHgsIHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW91c2VPdmVyQWN0aW9uKHgsIHkpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2gpIHtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnNbal0uaXNNb3VzZU92ZXIoeCwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3VzZVByZXNzZWRUb3VjaCh4LCB5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHgsIHkpO1xuICAgICAgICB2YXIgYVRvdWNoSXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXNbal0uaXNNb3VzZVByZXNzc2VkT3Zlcih4LCB5KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzW2pdLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBhVG91Y2hJc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYVRvdWNoSXNTZWxlY3RlZCAmJiAhdm0uc3RhcnRlZCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkVG91Y2gnLCBudWxsKVxuICAgICAgICAgICAgaWYgKHZtLiRyZWZzLnBsYXllcilcbiAgICAgICAgICAgICAgICB2bS4kcmVmcy5wbGF5ZXIuYXBpKCkuYWJMb29wUGx1Z2luLmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdXNlUHJlc3NlZEFjdGlvbih4LCB5KSB7XG4gICAgICAgIHZhciBhbkFjdGlvbklzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2gpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zW2pdLmlzTW91c2VQcmVzc3NlZE92ZXIoeCwgeSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guYWN0aW9uc1tqXS5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuQWN0aW9uSXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWFuQWN0aW9uSXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZEFjdGlvbicsIG51bGwpXG4gICAgICAgICAgICAgICAgaWYgKHZtLiRyZWZzLnBsYXllcilcbiAgICAgICAgICAgICAgICAgICAgdm0uJHJlZnMucGxheWVyLmFwaSgpLmFiTG9vcFBsdWdpbi5kaXNhYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3RvdWNoZXMvVG91Y2hNYW5hZ2VyLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZ2Uge1xuICAgIHNldHVwKCkge1xuXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgcC5iYWNrZ3JvdW5kKDI1NSk7XG4gICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDQpO1xuICAgICAgICBwLnN0cm9rZSgnI2QzZTBlOScpO1xuICAgICAgICBwLmZpbGwoMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgIHAucmVjdCgwLCAwLCBwLndpZHRoIC0gMSwgcC5oZWlnaHQgLSAxKVxuICAgICAgICBwLm5vU3Ryb2tlKClcbiAgICAgICAgcC5ub0ZpbGwoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3VpL1N0YWdlLmpzIiwiaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vdXRpbHMvVGltZUNvbnZlcnRlcidcbmltcG9ydCB7Z2V0U3RhdGUsIGRpc3BhdGNofSBmcm9tICdtb2Nrc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lbGluZSB7XG4gICAgY29uc3RydWN0b3Ioc3RhcnRZLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGdldFN0YXRlKCcqJyk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZVN0YXJ0WScsIHN0YXJ0WSk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZVN0YXJ0WCcsIDMwKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lSGVpZ2h0JywgaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5zdGFydERlbHRhID0gMDtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUudGltZWxpbmUuaGlkZSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goJ3NldENvbFdpZHRoJywgdGhpcy5jYWxjdWxhdGVDb2xXaWR0aCgpKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZUVuZFgnLCAwKTtcbiAgICAgICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDApO1xuICAgICAgICAgICAgcC5zdHJva2UoMSk7XG4gICAgICAgICAgICBwLmZpbGwoMCwgMCwgMCk7XG4gICAgICAgICAgICBwLnRleHRTaXplKDEyKTtcbiAgICAgICAgICAgIHAudGV4dFN0eWxlKHAuTk9STUFMKTtcbiAgICAgICAgICAgIHAudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMuc3RhdGUucGxheWVyLmR1cmF0aW9uKSwgdGhpcy5zdGF0ZS50aW1lbGluZS5lbmRYIC0gMjAsIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRZICsgMzAsIDQwLCAyMCk7XG4gICAgICAgICAgICBwLnRleHRBbGlnbihwLkNFTlRFUik7XG5cbiAgICAgICAgICAgIHAuc3Ryb2tlKDApO1xuICAgICAgICAgICAgcC5zdHJva2VXZWlnaHQoMSk7XG4gICAgICAgICAgICBwLmxpbmUodGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFgsIHRoaXMuc3RhdGUudGltZWxpbmUuYXhpc1ksIHRoaXMuc3RhdGUudGltZWxpbmUud2lkdGgsIHRoaXMuc3RhdGUudGltZWxpbmUuYXhpc1kpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gdGhpcy5zdGF0ZS50aW1lbGluZS53aWR0aCArIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRUaW1lICogdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aCAtIDMwOyBpICs9IHRoaXMuc3RhdGUudGltZWxpbmUuY29sV2lkdGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgeCA9IGkgKyB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WDtcbiAgICAgICAgICAgICAgICB2YXIgbmV3WCA9IHggLSB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSAqIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kV2lkdGg7XG5cbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1N0YXJ0TWludXRlTGFiZWwodGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWUsIHgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdNaW51dGVMaW5lKHgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSAlICh0aGlzLnN0YXRlLnRpbWVsaW5lLmNvbFdpZHRoICogNikgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3WCA+PSAzMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TWludXRlTGFiZWwoaSwgbmV3WCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdNaW51dGVMaW5lKG5ld1gpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ggPj0gMzApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRpbWVsaW5lLnNob3dTZWNvbmRzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdNaWRkbGVTZWNvbmRMYWJlbChpLCBuZXdYKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pZGRsZVNlY29uZExpbmUobmV3WCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRpbWVsaW5lLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pZGRsZVNlY29uZExhYmVsKGksIG5ld1gpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTZWNvbmRMaW5lKHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAuc3Ryb2tlKCdyZWQnKTtcbiAgICAgICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDIpXG4gICAgICAgICAgICBwLmxpbmUodGhpcy5zdGF0ZS50aW1lbGluZS5lbmRYLCB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WSArIDQ1LCB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFgsIHRoaXMuc3RhdGUudGltZWxpbmUuYXhpc1kpO1xuICAgICAgICAgICAgcC5saW5lKHRoaXMuc3RhdGUudGltZWxpbmUuZW5kWCwgdGhpcy5zdGF0ZS50aW1lbGluZS5heGlzWSwgdGhpcy5zdGF0ZS50aW1lbGluZS5lbmRYLCB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW91c2VPdmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUudGltZWxpbmUuaGlkZSkge1xuICAgICAgICAgICAgaWYgKHAubW91c2VYID49IDMwICYmIHAubW91c2VYIDw9IHRoaXMuc3RhdGUuY2FudmFzLndpZHRoIC0gMzAgJiYgcC5tb3VzZVkgPj0gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFkgJiYgcC5tb3VzZVkgPD0gdGhpcy5zdGF0ZS50aW1lbGluZS5lbmRZKSB7XG4gICAgICAgICAgICAgICAgcC5jdXJzb3IocC5IQU5EKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVNb3VzZU92ZXInLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcC5jdXJzb3IocC5BUlJPVyk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lTW91c2VPdmVyJywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhZygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnRpbWVsaW5lLmhpZGUpIHtcblxuICAgICAgICAgICAgdmFyIHN0YXJ0RGVsdGEgPSAocC5wbW91c2VYIC0gcC5tb3VzZVgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnREZWx0YSAhPSBzdGFydERlbHRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWUgKyAoc3RhcnREZWx0YSkgLyB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xuICAgICAgICAgICAgICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lU3RhcnRUaW1lJywgMClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVTdGFydFRpbWUnLCBNYXRoLmZsb29yKHN0YXJ0KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERlbHRhID0gc3RhcnREZWx0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdTZWNvbmRMaW5lKHgpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnN0YXRlLnRpbWVsaW5lLmNvbFdpZHRoOyBqICs9IHRoaXMuc3RhdGUudGltZWxpbmUuY29sV2lkdGggLyAxMCkge1xuICAgICAgICAgICAgaWYgKCh4ICsgaikgPCB0aGlzLnN0YXRlLnRpbWVsaW5lLndpZHRoICYmIGopIHtcbiAgICAgICAgICAgICAgICBwLnN0cm9rZSgwKTtcbiAgICAgICAgICAgICAgICBwLnN0cm9rZVdlaWdodCgxKTtcbiAgICAgICAgICAgICAgICBwLmxpbmUoeCArIGosIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kc1kgKyA1LCB4ICsgaiwgdGhpcy5zdGF0ZS50aW1lbGluZS5heGlzWSk7XG4gICAgICAgICAgICAgICAgcC5zdHJva2UoMjMwKTtcbiAgICAgICAgICAgICAgICBwLnN0cm9rZVdlaWdodCgxKTtcbiAgICAgICAgICAgICAgICBwLmxpbmUoeCArIGosIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kc1ksIHggKyBqLCB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBqO1xuICAgIH1cblxuICAgIGRyYXdNaWRkbGVTZWNvbmRMaW5lKHgpIHtcbiAgICAgICAgcC5zdHJva2UoMCk7XG4gICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDEpXG4gICAgICAgIHAubGluZSh4LCB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZHNZLCB4LCB0aGlzLnN0YXRlLnRpbWVsaW5lLmF4aXNZKTtcbiAgICAgICAgcC5zdHJva2UoMjMwKTtcbiAgICAgICAgcC5zdHJva2VXZWlnaHQoMSlcbiAgICAgICAgcC5saW5lKHgsIHRoaXMuc3RhdGUudGltZWxpbmUuYXhpc1ksIHgsIHRoaXMuc3RhdGUudGltZWxpbmUuZW5kWSk7XG4gICAgfVxuXG4gICAgZHJhd01pZGRsZVNlY29uZExhYmVsKGksIHgpIHtcbiAgICAgICAgcC5zdHJva2UoMjMwKTtcbiAgICAgICAgcC5zdHJva2VXZWlnaHQoMCk7XG4gICAgICAgIHAudGV4dFNpemUoMTApO1xuICAgICAgICBwLnRleHRTdHlsZShwLk5PUk1BTCk7XG4gICAgICAgIHAudGV4dChUaW1lQ29udmVydGVyLnRvU1MoaSAvIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kV2lkdGgpICsgJyBzJywgeCAtIDIwLCB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZHNZIC0gMTAsIDQwLCAyMCk7XG4gICAgICAgIHAudGV4dEFsaWduKHAuQ0VOVEVSKTtcbiAgICB9XG5cbiAgICBkcmF3TWludXRlTGluZSh4KSB7XG4gICAgICAgIHAuc3Ryb2tlKDApO1xuICAgICAgICBwLnN0cm9rZVdlaWdodCgyKVxuICAgICAgICBwLmxpbmUoeCwgdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFkgKyAyMCwgeCwgdGhpcy5zdGF0ZS50aW1lbGluZS5heGlzWSk7XG4gICAgICAgIHAuc3Ryb2tlKDIzMCk7XG4gICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDIpXG4gICAgICAgIHAubGluZSh4LCB0aGlzLnN0YXRlLnRpbWVsaW5lLmF4aXNZLCB4LCB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFkpO1xuICAgIH1cblxuICAgIGRyYXdNaW51dGVMYWJlbChpLCB4KSB7XG4gICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDApO1xuICAgICAgICBwLnRleHRTaXplKDEyKTtcbiAgICAgICAgcC50ZXh0U3R5bGUocC5OT1JNQUwpO1xuICAgICAgICBwLnRleHQoVGltZUNvbnZlcnRlci50b0hITU1TUyhNYXRoLnJvdW5kKGkgLyB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoKSksIHggLSAyMCwgdGhpcy5zdGF0ZS50aW1lbGluZS5taW51dGVzWSwgNDAsIDIwKTtcbiAgICAgICAgcC50ZXh0QWxpZ24ocC5DRU5URVIpO1xuICAgIH1cblxuICAgIGRyYXdTdGFydE1pbnV0ZUxhYmVsKGksIHgpIHtcbiAgICAgICAgcC5zdHJva2VXZWlnaHQoMCk7XG4gICAgICAgIHAudGV4dFNpemUoMTIpO1xuICAgICAgICBwLnRleHRTdHlsZShwLk5PUk1BTCk7XG4gICAgICAgIHAudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKGkpLCB4IC0gMjAsIHRoaXMuc3RhdGUudGltZWxpbmUubWludXRlc1ksIDQwLCAyMCk7XG4gICAgICAgIHAudGV4dEFsaWduKHAuQ0VOVEVSKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVDb2xXaWR0aCgpIHtcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSAoIHRoaXMuc3RhdGUucGxheWVyLmR1cmF0aW9uICsgMzApIC8gNjA7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKCh0aGlzLnN0YXRlLmNhbnZhcy53aWR0aCAvIG1pbnV0ZXMpIC8gNikgKiB0aGlzLnN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3I7XG4gICAgfVxuXG4gICAgZ2V0U3RhcnRUaW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWU7XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvVGltZWxpbmUuanMiLCJpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi91dGlscy9UaW1lQ29udmVydGVyJ1xuaW1wb3J0IHtnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW9UaW1lTWFya2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGdldFN0YXRlKCcqJyk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRYID0gKHRoaXMuc3RhdGUucGxheWVyLmN1cnJlbnRUaW1lIC0gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWUpICogdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aCArIDMwO1xuICAgICAgICBjdXJyZW50WCA9IGN1cnJlbnRYID49IDMwID8gY3VycmVudFggOiAzMDtcbiAgICAgICAgaWYgKCh0aGlzLnN0YXRlLnBsYXllci5jdXJyZW50VGltZSAtIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRUaW1lKSA+IDApIHtcbiAgICAgICAgICAgIHAuc3Ryb2tlKCdibHVlJyk7XG4gICAgICAgICAgICBwLnN0cm9rZVdlaWdodCgyKVxuICAgICAgICAgICAgcC5saW5lKGN1cnJlbnRYLCB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WSArIDMwLCBjdXJyZW50WCwgdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFkgKyA2MCk7XG4gICAgICAgICAgICBwLmxpbmUoY3VycmVudFgsIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRZICsgNjAsIGN1cnJlbnRYLCB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFkpO1xuICAgICAgICAgICAgcC5zdHJva2VXZWlnaHQoMCk7XG4gICAgICAgICAgICBwLnRleHRTaXplKDEyKTtcbiAgICAgICAgICAgIHAudGV4dFN0eWxlKHAuTk9STUFMKTtcbiAgICAgICAgICAgIHAudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKE1hdGguZmxvb3IodGhpcy5zdGF0ZS5wbGF5ZXIuY3VycmVudFRpbWUpKSwgY3VycmVudFggLSAyMCwgdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFkgKyAxNSwgNDAsIDIwKTtcbiAgICAgICAgICAgIHAudGV4dEFsaWduKHAuQ0VOVEVSKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYWcoeCwgeSkge1xuXG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvVmlkZW9UaW1lTWFya2VyLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zcGVjdG9yU3RhZ2Uge1xuICAgIHNldHVwKCkge1xuXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgaW5zcGVjdG9yLmJhY2tncm91bmQoMjU1KTtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCg0KTtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSgnI2QzZTBlOScpO1xuICAgICAgICBpbnNwZWN0b3IuZmlsbCgyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgaW5zcGVjdG9yLnJlY3QoMCwgMCwgaW5zcGVjdG9yLndpZHRoIC0gMSwgaW5zcGVjdG9yLmhlaWdodCAtIDEpXG4gICAgICAgIGluc3BlY3Rvci5ub1N0cm9rZSgpXG4gICAgICAgIGluc3BlY3Rvci5ub0ZpbGwoKTtcblxuICAgICAgICBpbnNwZWN0b3IucHVzaCgpXG4gICAgICAgIGluc3BlY3Rvci50cmFuc2xhdGUoMCwgNjApO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKCcjZDNlMGU5Jyk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMSk7XG4gICAgICAgIGluc3BlY3Rvci5yZWN0KDAsIDAsIDEyMCwgNjApXG4gICAgICAgIGluc3BlY3Rvci5saW5lKDAsIDAsIGluc3BlY3Rvci53aWR0aCwgMCk7XG4gICAgICAgIGluc3BlY3Rvci5saW5lKDAsIDYwLCBpbnNwZWN0b3Iud2lkdGgsIDYwKTtcbiAgICAgICAgaW5zcGVjdG9yLmZpbGwoJ2JsYWNrJyk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0U2l6ZSgxMik7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0U3R5bGUoaW5zcGVjdG9yLk5PUk1BTCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0QWxpZ24oaW5zcGVjdG9yLkNFTlRFUik7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0KCdMZWZ0IEF0aGxldGUnLCA1LCAyNCwgMTEwLCAxMik7XG4gICAgICAgIGluc3BlY3Rvci5wb3AoKVxuXG4gICAgICAgIGluc3BlY3Rvci5wdXNoKClcbiAgICAgICAgaW5zcGVjdG9yLnRyYW5zbGF0ZSgwLCAxMjApO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKCcjZDNlMGU5Jyk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMSk7XG4gICAgICAgIGluc3BlY3Rvci5yZWN0KDAsIDAsIDEyMCwgNjApO1xuICAgICAgICBpbnNwZWN0b3IubGluZSgwLCA2MCwgaW5zcGVjdG9yLndpZHRoLCA2MCk7XG4gICAgICAgIGluc3BlY3Rvci5maWxsKCdibGFjaycpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dFNpemUoMTIpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dFN0eWxlKGluc3BlY3Rvci5OT1JNQUwpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dEFsaWduKGluc3BlY3Rvci5DRU5URVIpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dCgnUmlnaHQgQXRobGV0ZScsIDUsIDI0LCAxMTAsIDEyKTtcbiAgICAgICAgaW5zcGVjdG9yLnBvcCgpXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91aS9pbnNwZWN0b3IvSW5zcGVjdG9yU3RhZ2UuanMiLCJpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi8uLi91dGlscy9UaW1lQ29udmVydGVyJ1xuaW1wb3J0IHtnZXRTdGF0ZSwgZGlzcGF0Y2h9IGZyb20gJ21vY2tzdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3BlY3RvclRpbWVsaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydFksIGhlaWdodCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvclN0YXJ0WScsIHN0YXJ0WSk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JTdGFydFgnLCAxMjApO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9ySGVpZ2h0JywgaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5zdGFydERlbHRhID0gMDtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB2YXIgY29sV2lkdGggPSB0aGlzLmNhbGN1bGF0ZUNvbFdpZHRoKCk7XG4gICAgICAgIGlmIChjb2xXaWR0aCA+IDApIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JDb2xXaWR0aCcsIGNvbFdpZHRoKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JFbmRYJywgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guZW5kIC0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5zdGFydCkgKiB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGggKyB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRYKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JTdGFydFRpbWUnLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLnN0YXJ0KVxuICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgwKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2UoMSk7XG4gICAgICAgICAgICBpbnNwZWN0b3IuZmlsbCgwLCAwLCAwKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci50ZXh0U2l6ZSgxMik7XG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dFN0eWxlKHAuTk9STUFMKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci50ZXh0KFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5lbmQpLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWCAtIDIwLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZICsgMzAsIDQwLCAyMCk7XG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dEFsaWduKHAuQ0VOVEVSKTtcblxuICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSgwKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMSk7XG4gICAgICAgICAgICBpbnNwZWN0b3IubGluZSh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuYXhpc1ksIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS53aWR0aCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmF4aXNZKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS53aWR0aCArIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guc3RhcnQgKiB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGggLSAzMDsgaSArPSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuY29sV2lkdGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgeCA9IGkgKyB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRYO1xuICAgICAgICAgICAgICAgIHZhciBuZXdYID0geCAtIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFRpbWUgKiB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGg7XG5cbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1N0YXJ0TGFiZWwodGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0VGltZSwgeCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pbnV0ZUxpbmUoeCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpICUgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5jb2xXaWR0aCAqIDYpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ggPj0gMTIwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdNaW51dGVMYWJlbChpLCBuZXdYKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pbnV0ZUxpbmUobmV3WCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3WCA+PSAxMjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2hvd1NlY29uZHNJbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pZGRsZVNlY29uZExhYmVsKGksIG5ld1gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TWlkZGxlU2Vjb25kTGluZShuZXdYKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdNaWRkbGVTZWNvbmRMYWJlbChpLCBuZXdYKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3U2Vjb25kTGluZSh4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKCdyZWQnKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMilcbiAgICAgICAgICAgIGluc3BlY3Rvci5saW5lKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZICsgNDUsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuYXhpc1kpO1xuICAgICAgICAgICAgaW5zcGVjdG9yLmxpbmUodGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5heGlzWSwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRZKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW91c2VPdmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5oaWRlKSB7XG4gICAgICAgICAgICBpZiAoaW5zcGVjdG9yLm1vdXNlWCA+PSAzMCAmJiBpbnNwZWN0b3IubW91c2VYIDw9IHRoaXMuc3RhdGUuY2FudmFzLndpZHRoIC0gMzAgJiYgaW5zcGVjdG9yLm1vdXNlWSA+PSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZICYmIGluc3BlY3Rvci5tb3VzZVkgPD0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFkpIHtcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3IuY3Vyc29yKGluc3BlY3Rvci5IQU5EKTtcbiAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaCgnc2V0VGltZWxpbmVNb3VzZU92ZXInLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5zcGVjdG9yLmN1cnNvcihpbnNwZWN0b3IuQVJST1cpO1xuICAgICAgICAgICAgICAgIC8vICBkaXNwYXRjaCgnc2V0VGltZWxpbmVNb3VzZU92ZXInLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmFnKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5oaWRlKSB7XG5cbiAgICAgICAgICAgIHZhciBzdGFydERlbHRhID0gKGluc3BlY3Rvci5wbW91c2VYIC0gaW5zcGVjdG9yLm1vdXNlWCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGFydERlbHRhICE9IHN0YXJ0RGVsdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLnN0YXJ0ICsgKHN0YXJ0RGVsdGEpIC8gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xuICAgICAgICAgICAgICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVTdGFydFRpbWUnLCAwKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lU3RhcnRUaW1lJywgTWF0aC5mbG9vcihzdGFydCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREZWx0YSA9IHN0YXJ0RGVsdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3U2Vjb25kTGluZSh4KSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmNvbFdpZHRoOyBqICs9IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5jb2xXaWR0aCAvIDEwKSB7XG4gICAgICAgICAgICBpZiAoKHggKyBqKSA8IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS53aWR0aCAmJiBqKSB7XG4gICAgICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSgwKTtcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDEpO1xuICAgICAgICAgICAgICAgIGluc3BlY3Rvci5saW5lKHggKyBqLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kc1kgKyA1LCB4ICsgaiwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmF4aXNZKTtcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKDIzMCk7XG4gICAgICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgxKTtcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3IubGluZSh4ICsgaiwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZHNZLCB4ICsgaiwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBqO1xuICAgIH1cblxuICAgIGRyYXdNaWRkbGVTZWNvbmRMaW5lKHgpIHtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSgwKTtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgxKVxuICAgICAgICBpbnNwZWN0b3IubGluZSh4LCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kc1ksIHgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5heGlzWSk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2UoMjMwKTtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgxKVxuICAgICAgICBpbnNwZWN0b3IubGluZSh4LCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuYXhpc1ksIHgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRZKTtcbiAgICB9XG5cbiAgICBkcmF3TWlkZGxlU2Vjb25kTGFiZWwoaSwgeCkge1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKDIzMCk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0U2l6ZSgxMCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0U3R5bGUoaW5zcGVjdG9yLk5PUk1BTCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0KFRpbWVDb252ZXJ0ZXIudG9TUyhpIC8gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZFdpZHRoKSArICcgcycsIHggLSAyMCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZHNZIC0gMTAsIDQwLCAyMCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0QWxpZ24oaW5zcGVjdG9yLkNFTlRFUik7XG4gICAgfVxuXG4gICAgZHJhd01pbnV0ZUxpbmUoeCkge1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKDApO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDIpXG4gICAgICAgIGluc3BlY3Rvci5saW5lKHgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFkgKyAyMCwgeCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmF4aXNZKTtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSgyMzApO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDIpXG4gICAgICAgIGluc3BlY3Rvci5saW5lKHgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5heGlzWSwgeCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFkpO1xuICAgIH1cblxuICAgIGRyYXdNaW51dGVMYWJlbChpLCB4KSB7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0U2l6ZSgxMik7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0U3R5bGUoaW5zcGVjdG9yLk5PUk1BTCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0KFRpbWVDb252ZXJ0ZXIudG9ISE1NU1MoTWF0aC5yb3VuZChpIC8gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZFdpZHRoKSksIHggLSAyMCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLm1pbnV0ZXNZLCA0MCwgMjApO1xuICAgICAgICBpbnNwZWN0b3IudGV4dEFsaWduKGluc3BlY3Rvci5DRU5URVIpO1xuICAgIH1cblxuICAgIGRyYXdTdGFydExhYmVsKHN0YXJ0VGltZSwgeCkge1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDApO1xuICAgICAgICBpbnNwZWN0b3IudGV4dFNpemUoMTIpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dFN0eWxlKGluc3BlY3Rvci5OT1JNQUwpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKHN0YXJ0VGltZSksIHggLSAyMCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLm1pbnV0ZXNZLCA0MCwgMjApO1xuICAgICAgICBpbnNwZWN0b3IudGV4dEFsaWduKGluc3BlY3Rvci5DRU5URVIpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZUNvbFdpZHRoKCkge1xuICAgICAgICB2YXIgbWludXRlcyA9ICggdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5lbmQgLSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLnN0YXJ0KSAvIDYwO1xuICAgICAgICBpZiAobWludXRlcyA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgodGhpcy5zdGF0ZS5jYW52YXMud2lkdGggLSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRYIC0gMzApIC8gbWludXRlcykgLyA2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGdldFN0YXJ0VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guc3RhcnQ7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91aS9pbnNwZWN0b3IvSW5zcGVjdG9yVGltZWxpbmUuanMiLCJpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi8uLi91dGlscy9UaW1lQ29udmVydGVyJ1xuaW1wb3J0IHtnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zcGVjdG9yVmlkZW9UaW1lTWFya2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGdldFN0YXRlKCcqJyk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gTWF0aC5mbG9vcih0aGlzLnN0YXRlLnBsYXllci5jdXJyZW50VGltZSlcbiAgICAgICAgdmFyIGN1cnJlbnRYID0gKGN1cnJlbnRUaW1lIC0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5zdGFydCkgKiB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGggKyB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRYO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKCdibHVlJyk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMilcbiAgICAgICAgaW5zcGVjdG9yLmxpbmUoY3VycmVudFgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFkgKyAzMCwgY3VycmVudFgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFkgKyA2MCk7XG4gICAgICAgIGluc3BlY3Rvci5saW5lKGN1cnJlbnRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZICsgNjAsIGN1cnJlbnRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWSk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0U2l6ZSgxMik7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0U3R5bGUoaW5zcGVjdG9yLk5PUk1BTCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0KFRpbWVDb252ZXJ0ZXIudG9ISE1NU1MoY3VycmVudFRpbWUpLCBjdXJyZW50WCAtIDIwLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZICsgMTUsIDQwLCAyMCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0QWxpZ24oaW5zcGVjdG9yLkNFTlRFUik7XG4gICAgfVxuXG4gICAgZHJhZyh4LCB5KSB7XG5cbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91aS9pbnNwZWN0b3IvSW5zcGVjdG9yVmlkZW9UaW1lTWFya2VyLmpzIiwiaW1wb3J0IHtnZXRTdGF0ZSwgZGlzcGF0Y2h9IGZyb20gJ21vY2tzdGF0ZSc7XG5pbXBvcnQgSW5zcGVjdG9yU3RhZ2UgZnJvbSAnLi9jb21wb25lbnRzL3VpL2luc3BlY3Rvci9JbnNwZWN0b3JTdGFnZSdcbmltcG9ydCBJbnNwZWN0b3JUaW1lbGluZSBmcm9tICcuL2NvbXBvbmVudHMvdWkvaW5zcGVjdG9yL0luc3BlY3RvclRpbWVsaW5lJ1xuaW1wb3J0IEluc3BlY3RvclZpZGVvVGltZU1hcmtlciBmcm9tICcuL2NvbXBvbmVudHMvdWkvaW5zcGVjdG9yL0luc3BlY3RvclZpZGVvVGltZU1hcmtlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2tldGNoKGluc3BlY3Rvcikge1xuICAgIGxldCBzdGF0ZSA9IG51bGw7XG4gICAgd2luZG93Lmluc3BlY3RvciA9IGluc3BlY3RvcjtcbiAgICBpbnNwZWN0b3Iuc2V0dXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3aWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnNwZWN0b3JCb3gnKS5vZmZzZXRXaWR0aDtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGluc3BlY3Rvci5jcmVhdGVDYW52YXMod2lkdGggLSAyMCwgMTkwKTtcbiAgICAgICAgY2FudmFzLm1vdXNlTW92ZWQobW91c2VNb3ZlZCk7XG4gICAgICAgIGNhbnZhcy5tb3VzZVByZXNzZWQobW91c2VQcmVzc2VkKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvckNhbnZhcycsIGNhbnZhcyk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JDYW52YXNIZWlnaHQnLCBpbnNwZWN0b3IuaGVpZ2h0KTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvckNhbnZhc1dpZHRoJywgaW5zcGVjdG9yLndpZHRoKTtcbiAgICAgICAgc3RhdGUgPSBnZXRTdGF0ZSgnKicpO1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLmNhbnZhcy5pbnN0YW5jZS5wYXJlbnQoJ2luc3BlY3RvcicpO1xuICAgICAgICB2YXIgc3RhZ2UgPSBuZXcgSW5zcGVjdG9yU3RhZ2UoKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvclN0YWdlJywgc3RhZ2UpO1xuICAgICAgICB2YXIgdGltZWxpbmUgPSBuZXcgSW5zcGVjdG9yVGltZWxpbmUoMCwgMTgwKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvclRpbWVsaW5lJywgdGltZWxpbmUpO1xuICAgICAgICB2YXIgdmlkZW9UaW1lTWFya2VyID0gbmV3IEluc3BlY3RvclZpZGVvVGltZU1hcmtlcigpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yVmlkZW9NYXJrZXInLCB2aWRlb1RpbWVNYXJrZXIpO1xuXG4gICAgICAgIGluc3BlY3Rvci5jb2xvck1vZGUoaW5zcGVjdG9yLlJHQiwgMjU1LCAyNTUsIDI1NSwgMTAwKTtcblxuICAgICAgICBpbnNwZWN0b3IuZnJhbWVSYXRlKDEwKTtcbiAgICAgICAgaW5zcGVjdG9yLm5vTG9vcCgpO1xuICAgIH07XG5cbiAgICBpbnNwZWN0b3IuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci5zdGFnZS5pbnN0YW5jZS5kcmF3KCk7XG4gICAgICAgIGlmIChzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaCkge1xuICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5pbnN0YW5jZS5kcmF3KCk7XG4gICAgICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5kcmF3QWN0aW9ucygpO1xuICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci52aWRlb01hcmtlci5pbnN0YW5jZS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbW91c2VNb3ZlZCgpIHtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlLm1vdXNlT3ZlckFjdGlvbihpbnNwZWN0b3IubW91c2VYLCBpbnNwZWN0b3IubW91c2VZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdXNlUHJlc3NlZCgpIHtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlLm1vdXNlUHJlc3NlZEFjdGlvbihpbnNwZWN0b3IubW91c2VYLCBpbnNwZWN0b3IubW91c2VZKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5zcGVjdG9yLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluc3BlY3Rvci5ub0xvb3AoKTtcbiAgICB9XG5cbiAgICBpbnNwZWN0b3Iuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluc3BlY3Rvci5sb29wKCk7XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2luc3BlY3RvclNrZXRjaC5qcyIsImltcG9ydCBUb3VjaCBmcm9tICcuLi9jb21wb25lbnRzL3RvdWNoZXMvVG91Y2gnXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvdG91Y2hlcy9BY3Rpb24nXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc2V0dXAoKXtcblxuICAgICAgICB2YXIgYWN0aW9uID0gbmV3IEFjdGlvbigwLCA2MCwge1xuICAgICAgICAgICAgXCJoc2xcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJsXCI6IDAuNDM3MjU0OTAxOTYwNzg0MywgXCJhXCI6IDF9LFxuICAgICAgICAgICAgXCJoZXhcIjogXCIjREJERjAwXCIsXG4gICAgICAgICAgICBcInJnYmFcIjoge1wiclwiOiAyMTksIFwiZ1wiOiAyMjMsIFwiYlwiOiAwLCBcImFcIjogMSwgXCJhbHBoYVwiOiA1MH0sXG4gICAgICAgICAgICBcImhzdlwiOiB7XCJoXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFwic1wiOiAxLCBcInZcIjogMC44NzQ1MDk4MDM5MjE1Njg2LCBcImFcIjogMX0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXcgVG91Y2goMCwgMTIwLCAnVG91Y2ggRXhhbXBsZScsIHtcbiAgICAgICAgICAgIFwiaHNsXCI6IHtcImhcIjogNjEuMDc2MjMzMTgzODU2NSwgXCJzXCI6IDEsIFwibFwiOiAwLjQzNzI1NDkwMTk2MDc4NDMsIFwiYVwiOiAxfSxcbiAgICAgICAgICAgIFwiaGV4XCI6IFwiI0RCREYwMFwiLFxuICAgICAgICAgICAgXCJyZ2JhXCI6IHtcInJcIjogMjE5LCBcImdcIjogMjIzLCBcImJcIjogMCwgXCJhXCI6IDEsIFwiYWxwaGFcIjogNTB9LFxuICAgICAgICAgICAgXCJoc3ZcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJ2XCI6IDAuODc0NTA5ODAzOTIxNTY4NiwgXCJhXCI6IDF9LFxuICAgICAgICB9LCBbYWN0aW9uXSk7XG5cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9zcGVjcy90b3VjaGVzU3BlYy5qcyIsImltcG9ydCBTdGFnZSBmcm9tICcuL2NvbXBvbmVudHMvdWkvU3RhZ2UnXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9jb21wb25lbnRzL3VpL1RpbWVsaW5lJ1xuaW1wb3J0IFRvdWNoTWFuYWdlciBmcm9tICcuL2NvbXBvbmVudHMvdG91Y2hlcy9Ub3VjaE1hbmFnZXInXG5pbXBvcnQgVmlkZW9UaW1lTWFya2VyIGZyb20gJy4vY29tcG9uZW50cy91aS9WaWRlb1RpbWVNYXJrZXInXG5pbXBvcnQgVG91Y2hTcGVjIGZyb20gJy4vc3BlY3MvdG91Y2hlc1NwZWMnXG5pbXBvcnQge2dldFN0YXRlLCBkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2tldGNoKHApIHtcbiAgICBsZXQgc3RhdGUgPSBudWxsO1xuICAgIHdpbmRvdy5wID0gcDtcbiAgICBwLnNldHVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZWxpbmVCb3gnKS5vZmZzZXRXaWR0aDtcbiAgICAgICAgdmFyIGNhbnZhcyA9IHAuY3JlYXRlQ2FudmFzKHdpZHRoIC0gMjAsIDEzMCk7XG4gICAgICAgIGNhbnZhcy5tb3VzZU1vdmVkKG1vdXNlTW92ZWQpO1xuICAgICAgICBjYW52YXMubW91c2VQcmVzc2VkKG1vdXNlUHJlc3NlZCk7XG4gICAgICAgIHN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldENhbnZhcycsIGNhbnZhcyk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRIZWlnaHQnLCBwLmhlaWdodCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRXaWR0aCcsIHAud2lkdGgpO1xuICAgICAgICBzdGF0ZS5jYW52YXMuaW5zdGFuY2UucGFyZW50KCd0aW1lbGluZScpO1xuICAgICAgICB2YXIgc3RhZ2UgPSBuZXcgU3RhZ2UoKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFN0YWdlJywgc3RhZ2UpO1xuICAgICAgICB2YXIgdGltZWxpbmUgPSBuZXcgVGltZWxpbmUoMCwgMTIwKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lJywgdGltZWxpbmUpO1xuICAgICAgICB2YXIgdG91Y2hNYW5hZ2VyID0gbmV3IFRvdWNoTWFuYWdlcihbLypUb3VjaFNwZWMuc2V0dXAoKSovXSk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRUb3VjaE1hbmFnZXInLCB0b3VjaE1hbmFnZXIpO1xuICAgICAgICB2YXIgdmlkZW9UaW1lTWFya2VyID0gbmV3IFZpZGVvVGltZU1hcmtlcigpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0VmlkZW9NYXJrZXInLCB2aWRlb1RpbWVNYXJrZXIpO1xuXG4gICAgICAgIHN0YXRlLnN0YWdlLmluc3RhbmNlLnNldHVwKCk7XG4gICAgICAgIHAuY29sb3JNb2RlKHAuUkdCLCAyNTUsIDI1NSwgMjU1LCAxMDApXG5cbiAgICAgICAgY29uZmlnQnV0dG9ucygpO1xuICAgICAgICBwLmZyYW1lUmF0ZSgxMCk7XG4gICAgfTtcblxuICAgIHAuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RhdGUuc3RhZ2UuaW5zdGFuY2UuZHJhdygpO1xuICAgICAgICBzdGF0ZS50aW1lbGluZS5pbnN0YW5jZS5kcmF3KCk7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnN0YW5jZS5kcmF3KCk7XG4gICAgICAgIHN0YXRlLnZpZGVvTWFya2VyLmluc3RhbmNlLmRyYXcoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY29uZmlnQnV0dG9ucygpIHtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHpvb21JbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0Wm9vbScsIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3IgKyAxKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluaXRpYWxpemVkJywgZmFsc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHpvb21PdXQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3IgPiBzdGF0ZS50aW1lbGluZS5pbml0aWFsWm9vbUZhY3Rvcikge1xuICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFpvb20nLCBzdGF0ZS50aW1lbGluZS56b29tRmFjdG9yIC0gMSk7XG4gICAgICAgICAgICBkaXNwYXRjaCgnc2V0SW5pdGlhbGl6ZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3VzZU1vdmVkKCkge1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS50b3VjaE1hbmFnZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zdGFuY2UubW91c2VPdmVyVG91Y2gocC5tb3VzZVgsIHAubW91c2VZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXRlLnRpbWVsaW5lLmluc3RhbmNlLm1vdXNlT3ZlcigpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHAubW91c2VEcmFnZ2VkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUudGltZWxpbmUuaW5zdGFuY2UuZHJhZygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG1vdXNlUHJlc3NlZCgpIHtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlLm1vdXNlUHJlc3NlZFRvdWNoKHAubW91c2VYLCBwLm1vdXNlWSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHAuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25vbG9vcCcpO1xuICAgICAgICBwLm5vTG9vcCgpO1xuICAgIH1cblxuICAgIHAuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb29wJyk7XG4gICAgICAgIHAubG9vcCgpO1xuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC90aW1lbGluZVNrZXRjaC5qcyIsImltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gJ21vY2tzdGF0ZSc7XG5pbXBvcnQge2dsb2JhbFRpbWVsaW5lQWN0aW9uc30gZnJvbSAnLi9hY3Rpb25zL2dsb2JhbFRpbWVsaW5lQWN0aW9ucydcbmltcG9ydCB7aW5zcGVjdG9yQWN0aW9uc30gZnJvbSAnLi9hY3Rpb25zL2luc3BlY3RvckFjdGlvbnMnXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcbiAgICBwbGF5ZXJSZWFkeShzdGF0ZSwgcmVhZHkpe1xuICAgICAgICBjb25zb2xlLmxvZygncGxheWVyUmVhZHknKTtcbiAgICAgICAgc3RhdGUucGxheWVyUmVhZHkgPSByZWFkeTtcbiAgICAgICAgcmV0dXJuIHJlYWR5O1xuICAgIH0sXG4gICAgc2V0Q2FudmFzKHN0YXRlLCBpbnN0YW5jZSl7XG4gICAgICAgIHN0YXRlLmNhbnZhcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSxcbiAgICBzZXRUaW1lbGluZShzdGF0ZSwgaW5zdGFuY2Upe1xuICAgICAgICBzdGF0ZS50aW1lbGluZS5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSxcbiAgICBzZXRUb3VjaE1hbmFnZXIoc3RhdGUsIGluc3RhbmNlKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuICAgIHNldFN0YWdlKHN0YXRlLCBpbnN0YW5jZSl7XG4gICAgICAgIHN0YXRlLnN0YWdlLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuICAgIHNldFBsYXllcihzdGF0ZSwgaW5zdGFuY2Upe1xuICAgICAgICBzdGF0ZS5wbGF5ZXIuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH0sXG4gICAgc2V0VmlkZW9NYXJrZXIoc3RhdGUsIGluc3RhbmNlKXtcbiAgICAgICAgc3RhdGUudmlkZW9NYXJrZXIuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH0sXG4gICAgc2V0V2lkdGgoc3RhdGUsIHdpZHRoKXtcbiAgICAgICAgc3RhdGUuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZVdpZHRoJywgd2lkdGgpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yV2lkdGgnLCB3aWR0aCk7XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9LFxuICAgIHNldEhlaWdodChzdGF0ZSwgaGVpZ2h0KXtcbiAgICAgICAgc3RhdGUuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICB9LFxuICAgIHNldFRpbWVsaW5lV2lkdGgoc3RhdGUsIHdpZHRoKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH0sXG4gICAgc2V0VGltZWxpbmVIaWRlKHN0YXRlLCBoaWRlKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuaGlkZSA9IGhpZGU7XG4gICAgICAgIHJldHVybiBoaWRlO1xuICAgIH0sXG4gICAgc2V0VGltZWxpbmVIZWlnaHQoc3RhdGUsIGhlaWdodCl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lRW5kWScsIHN0YXRlLnRpbWVsaW5lLnN0YXJ0WSArIGhlaWdodCk7XG4gICAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfSxcbiAgICBzZXRUaW1lbGluZU1vdXNlT3ZlcihzdGF0ZSwgbW91c2VPdmVyKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuaXNNb3VzZU92ZXIgPSBtb3VzZU92ZXI7XG4gICAgICAgIHJldHVybiBtb3VzZU92ZXI7XG4gICAgfSxcbiAgICBzZXRUaW1lbGluZVN0YXJ0VGltZShzdGF0ZSwgc3RhcnRUaW1lKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICAgICAgICByZXR1cm4gc3RhcnRUaW1lO1xuICAgIH0sXG4gICAgc2V0VGltZWxpbmVTdGFydFkoc3RhdGUsIHN0YXJ0WSl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLnN0YXJ0WSA9IHN0YXJ0WTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lTWludXRlc1knLCBzdGFydFkgKyA1KTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lU2Vjb25kc1knLCBzdGFydFkgKyA1NSk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZUF4aXNZJywgc3RhcnRZICsgNjApO1xuICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVFbmRZJywgc3RhcnRZICsgc3RhdGUudGltZWxpbmUuaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0WTtcbiAgICB9LFxuICAgIHNldFRpbWVsaW5lQXhpc1koc3RhdGUsIGF4aXNZKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuYXhpc1kgPSBheGlzWTtcbiAgICAgICAgcmV0dXJuIGF4aXNZO1xuICAgIH0sXG4gICAgc2V0VGltZWxpbmVFbmRZKHN0YXRlLCBlbmRZKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuZW5kWSA9IGVuZFk7XG4gICAgICAgIHJldHVybiBlbmRZO1xuICAgIH0sXG4gICAgc2V0VGltZWxpbmVTdGFydFgoc3RhdGUsIHN0YXJ0WCl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLnN0YXJ0WCA9IHN0YXJ0WDtcbiAgICAgICAgcmV0dXJuIHN0YXJ0WDtcbiAgICB9LFxuICAgIHNldFRpbWVsaW5lRW5kWChzdGF0ZSwgZW5kWCl7XG4gICAgICAgIGVuZFggPSAoc3RhdGUucGxheWVyLmR1cmF0aW9uIC0gc3RhdGUudGltZWxpbmUuc3RhcnRUaW1lKSAqIHN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoICsgMzA7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLmVuZFggPSBlbmRYO1xuICAgICAgICByZXR1cm4gZW5kWDtcbiAgICB9LFxuICAgIHNldFRpbWVsaW5lTWludXRlc1koc3RhdGUsIG1pbnV0ZXNZKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUubWludXRlc1kgPSBtaW51dGVzWTtcbiAgICAgICAgcmV0dXJuIG1pbnV0ZXNZO1xuICAgIH0sXG4gICAgc2V0VGltZWxpbmVTZWNvbmRzWShzdGF0ZSwgc2Vjb25kc1kpe1xuICAgICAgICBzdGF0ZS50aW1lbGluZS5zZWNvbmRzWSA9IHNlY29uZHNZO1xuICAgICAgICByZXR1cm4gc2Vjb25kc1k7XG4gICAgfSxcbiAgICBzZXRTaG93U2Vjb25kcyhzdGF0ZSwgc2hvd1NlY29uZHMpe1xuICAgICAgICBzdGF0ZS50aW1lbGluZS5zaG93U2Vjb25kcyA9IHNob3dTZWNvbmRzO1xuICAgICAgICByZXR1cm4gc2hvd1NlY29uZHM7XG4gICAgfSxcbiAgICBzZXRTaG93U2Vjb25kc0ludGVydmFsKHN0YXRlLCBzaG93U2Vjb25kc0ludGVydmFsKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuc2hvd1NlY29uZHNJbnRlcnZhbCA9IHNob3dTZWNvbmRzSW50ZXJ2YWw7XG4gICAgICAgIHJldHVybiBzaG93U2Vjb25kc0ludGVydmFsO1xuICAgIH0sXG4gICAgc2V0Wm9vbShzdGF0ZSwgem9vbSl7XG4gICAgICAgIGlmIChzdGF0ZS5wbGF5ZXIuZHVyYXRpb24gPiA0MjApIHtcbiAgICAgICAgICAgIHN0YXRlLnRpbWVsaW5lLmluaXRpYWxab29tRmFjdG9yID0gTWF0aC5mbG9vcihzdGF0ZS5wbGF5ZXIuZHVyYXRpb24gLyA0MjApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS50aW1lbGluZS56b29tRmFjdG9yICE9IHpvb20pIHtcbiAgICAgICAgICAgIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3JDaGFuZ2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh6b29tIDwgc3RhdGUudGltZWxpbmUuaW5pdGlhbFpvb21GYWN0b3IpIHtcbiAgICAgICAgICAgIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3IgPSBzdGF0ZS50aW1lbGluZS5pbml0aWFsWm9vbUZhY3RvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3IgPSB6b29tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB6b29tO1xuICAgIH0sXG4gICAgc2V0U2Vjb25kV2lkdGgoc3RhdGUsIHNlY29uZFdpZHRoKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuc2Vjb25kV2lkdGggPSBzZWNvbmRXaWR0aDtcbiAgICAgICAgcmV0dXJuIHNlY29uZFdpZHRoO1xuICAgIH0sXG4gICAgc2V0Q29sV2lkdGgoc3RhdGUsIGNvbFdpZHRoKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuY29sV2lkdGggPSBjb2xXaWR0aDtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFNob3dTZWNvbmRzSW50ZXJ2YWwnLCBjb2xXaWR0aCA+IDYwKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFNob3dTZWNvbmRzJywgY29sV2lkdGggPiA5MCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRTZWNvbmRXaWR0aCcsIGNvbFdpZHRoIC8gMTApXG4gICAgICAgIHJldHVybiBjb2xXaWR0aDtcbiAgICB9LFxuICAgIHNldER1cmF0aW9uKHN0YXRlLCBkdXJhdGlvbil7XG4gICAgICAgIHN0YXRlLnBsYXllci5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVFbmRYJywgMCk7XG4gICAgICAgIHJldHVybiBkdXJhdGlvbjtcbiAgICB9LFxuICAgIHNldEN1cnJlbnRUaW1lKHN0YXRlLCBjdXJyZW50VGltZSl7XG4gICAgICAgIHN0YXRlLnBsYXllci5jdXJyZW50VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICByZXR1cm4gY3VycmVudFRpbWU7XG4gICAgfSxcblxuICAgIHNldEluaXRpYWxpemVkKHN0YXRlLCBpbml0aWFsaXplZCl7XG4gICAgICAgIHN0YXRlLmluaXRpYWxpemVkID0gaW5pdGlhbGl6ZWQ7XG4gICAgICAgIHJldHVybiBpbml0aWFsaXplZDtcbiAgICB9LFxuICAgIHNldFRvdWNoZXMoc3RhdGUsIHRvdWNoZXMpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlcyA9IHRvdWNoZXM7XG4gICAgICAgIHJldHVybiB0b3VjaGVzO1xuICAgIH0sXG4gICAgc2V0U2VsZWN0ZWRUb3VjaChzdGF0ZSwgdG91Y2gpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaCA9IHRvdWNoO1xuICAgICAgICByZXR1cm4gdG91Y2g7XG4gICAgfSxcbiAgICBhZGRUb3VjaChzdGF0ZSwgdG91Y2gpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlcy5wdXNoKHRvdWNoKTtcbiAgICAgICAgcmV0dXJuIHRvdWNoO1xuICAgIH0sXG4gICAgZWRpdFRvdWNoKHN0YXRlLCB0b3VjaCl7XG4gICAgICAgIHZhciBpbmRleCA9IF8uZmluZEluZGV4KHN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgcmV0dXJuIG8uaWQgPT0gdG91Y2guaWRcbiAgICAgICAgfSk7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzW2luZGV4XS5zdGFydCA9IHRvdWNoLnN0YXJ0O1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlc1tpbmRleF0uZW5kID0gdG91Y2guZW5kO1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlc1tpbmRleF0uY29sb3IgPSB0b3VjaC5jb2xvcjtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXNbaW5kZXhdLnRleHQgPSB0b3VjaC50ZXh0O1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzW2luZGV4XS5hY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlc1tpbmRleF0uYWN0aW9uc1tpXS5jb2xvciA9IF8uY2xvbmVEZWVwKHRvdWNoLmNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG91Y2g7XG4gICAgfSxcbiAgICByZW1vdmVUb3VjaChzdGF0ZSwgdG91Y2gpe1xuICAgICAgICB2YXIgaW5kZXggPSBfLmZpbmRJbmRleChzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlcywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHJldHVybiBvLmlkID09IHRvdWNoLmlkXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG91Y2g7XG4gICAgfSxcbiAgICAuLi5pbnNwZWN0b3JBY3Rpb25zLFxuICAgIC4uLmdsb2JhbFRpbWVsaW5lQWN0aW9uc1xufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3N0b3Jlcy9hY3Rpb25zLmpzIiwiZXhwb3J0IGNvbnN0IHN0YXRlID0ge1xuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICBwbGF5ZXJSZWFkeTogZmFsc2UsXG4gICAgdG91Y2hNYW5hZ2VyOiB7XG4gICAgICAgIGluc3RhbmNlOiBudWxsLFxuICAgICAgICB0b3VjaGVzOiBbXSxcbiAgICAgICAgc2VsZWN0ZWRUb3VjaDogbnVsbCxcbiAgICAgICAgcmVjb3JkaW5nQWN0aW9uOiBmYWxzZSxcbiAgICAgICAgcmVjb3JkaW5nVG91Y2g6IGZhbHNlLFxuICAgICAgICBpbnNwZWN0b3I6IHtcbiAgICAgICAgICAgIGluc3RhbmNlOiBudWxsLFxuICAgICAgICAgICAgY2FudmFzOiB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2U6IG51bGwsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpZGVvTWFya2VyOiB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2U6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFnZToge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGltZWxpbmU6IHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTogbnVsbCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgc3RhcnRZOiAwLFxuICAgICAgICAgICAgICAgIHNlY29uZFdpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGNvbFdpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGVuZFk6IDAsXG4gICAgICAgICAgICAgICAgbWludXRlc1k6IDAsXG4gICAgICAgICAgICAgICAgc2Vjb25kc1k6IDAsXG4gICAgICAgICAgICAgICAgYXhpc1k6IDAsXG4gICAgICAgICAgICAgICAgZW5kWDogMCxcbiAgICAgICAgICAgICAgICBzdGFydFg6IDMwLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogMCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGltZWxpbmU6IHtcbiAgICAgICAgaW5zdGFuY2U6IG51bGwsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgICBzdGFydFRpbWU6IDAsXG4gICAgICAgIHNob3dTZWNvbmRzOiBmYWxzZSxcbiAgICAgICAgc2hvd1NlY29uZHNJbnRlcnZhbDogZmFsc2UsXG4gICAgICAgIHpvb21GYWN0b3I6IDEsXG4gICAgICAgIGluaXRpYWxab29tRmFjdG9yOiAxLFxuICAgICAgICBzZWNvbmRXaWR0aDogMCxcbiAgICAgICAgY29sV2lkdGg6IDAsXG4gICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgZW5kWTogMCxcbiAgICAgICAgbWludXRlc1k6IDAsXG4gICAgICAgIHNlY29uZHNZOiAwLFxuICAgICAgICBheGlzWTogMCxcbiAgICAgICAgZW5kWDogMCxcbiAgICAgICAgc3RhcnRYOiAwLFxuICAgICAgICBpc01vdXNlT3ZlcjogZmFsc2UsXG4gICAgICAgIHpvb21GYWN0b3JDaGFuZ2U6IGZhbHNlXG4gICAgfSxcbiAgICBnbG9iYWxUaW1lbGluZToge1xuICAgICAgICBpbnN0YW5jZTogbnVsbCxcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgICAgc3RhcnRUaW1lOiAwLFxuICAgICAgICBzaG93U2Vjb25kczogZmFsc2UsXG4gICAgICAgIHNob3dTZWNvbmRzSW50ZXJ2YWw6IGZhbHNlLFxuICAgICAgICB6b29tRmFjdG9yOiAxLFxuICAgICAgICBpbml0aWFsWm9vbUZhY3RvcjogMSxcbiAgICAgICAgc2Vjb25kV2lkdGg6IDAsXG4gICAgICAgIGNvbFdpZHRoOiAwLFxuICAgICAgICBzdGFydFk6IDAsXG4gICAgICAgIGVuZFk6IDAsXG4gICAgICAgIG1pbnV0ZXNZOiAwLFxuICAgICAgICBzZWNvbmRzWTogMCxcbiAgICAgICAgYXhpc1k6IDAsXG4gICAgICAgIGVuZFg6IDAsXG4gICAgICAgIHN0YXJ0WDogMCxcbiAgICAgICAgaXNNb3VzZU92ZXI6IGZhbHNlLFxuICAgICAgICB6b29tRmFjdG9yQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgY2FudmFzOiB7XG4gICAgICAgICAgICBpbnN0YW5jZTogbnVsbCxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB9LFxuICAgICAgICB2aWRlb01hcmtlcjoge1xuICAgICAgICAgICAgaW5zdGFuY2U6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhZ2U6IHtcbiAgICAgICAgICAgIGluc3RhbmNlOiBudWxsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBzdGFnZToge1xuICAgICAgICBpbnN0YW5jZTogbnVsbFxuICAgIH0sXG4gICAgcGxheWVyOiB7XG4gICAgICAgIGluc3RhbmNlOiBudWxsLFxuICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgY3VycmVudFRpbWU6IDBcbiAgICB9LFxuICAgIHZpZGVvTWFya2VyOiB7XG4gICAgICAgIGluc3RhbmNlOiBudWxsXG4gICAgfSxcbiAgICBjYW52YXM6IHtcbiAgICAgICAgaW5zdGFuY2U6IG51bGwsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc3RvcmVzL3N0b3JlLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB1cGRhdGUoaWQsIHNjb3V0aW5nLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5wdXQoJy9hcGkvc2NvdXRpbmdzLycgKyBpZCArICcvdG91Y2hlcy8nLCBzY291dGluZylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yLmJvZHkpKTtcbiAgICB9LFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3Njb3V0aW5ncy9zY291dGluZ1RvdWNoU2VydmljZS5qcyIsImV4cG9ydCBkZWZhdWx0e1xuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2hvd0Vycm9yKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UudmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGVycm9yIGluIHJlc3BvbnNlLmVycm9ycykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3JzLmhhc093blByb3BlcnR5KGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3JzW2Vycm9yXS5mb3JFYWNoKCh2YWxpZGF0aW9uRXJyb3IpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvb3QuZXJyb3JUb2FzdCh2YWxpZGF0aW9uRXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLiRyb290LmVycm9yVG9hc3QocmVzcG9uc2UuZXJyb3JzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2FqYXgvZXJyb3JQcmVzZW50ZXIuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5pbnNwZWN0b3ItaW5mbyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmluc3BlY3Rvci1pbmZvIC5pbnNwZWN0b3ItaW5mby0tdGl0bGUge1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG59XFxuLmF0aGxldGUtbWVudSAuZHJvcGRvd24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XFxufVxcbi5hdGhsZXRlLW1lbnUgLmF0aGxldGUtbWVudS10aXRsZSB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2QzZTBlOTtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2QzZTBlOTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkM2UwZTk7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcbi5hdGhsZXRlLW1lbnUgLmF0aGxldGUtbWVudS1sZWZ0IHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2QzZTBlOTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkM2UwZTk7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG4uYXRobGV0ZS1tZW51IC5hdGhsZXRlLW1lbnUtcmlnaHQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QzZTBlOTtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNTc5MmY1NmMhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy9pbnNwZWN0b3IudnVlXG4vLyBtb2R1bGUgaWQgPSAzNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udGFncyBhIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbn1cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcXG4gIG9wYWNpdHk6IDAuOCAhaW1wb3J0YW50O1xcbn1cXG4udGFncy1saXN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50YWdzLWxpc3QgLmxhYmVsIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4udGFncy1saXN0IC5sYWJlbCAuY2xvc2Uge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcbi50YWdzLWxpc3QgZGl2LFxcbi5ndS1taXJyb3Ige1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcbi50YWdzLWxpc3QgZGl2IC5sYWJlbCxcXG4gIC5ndS1taXJyb3IgLmxhYmVsIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi50YWdzLWxpc3QgZGl2IHtcXG4gIGN1cnNvcjogbW92ZTtcXG4gIGN1cnNvcjogZ3JhYjtcXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4udGFncy1saXN0IGRpdjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5ndS1taXJyb3Ige1xcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT04MClcXFwiO1xcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTgwKTtcXG4gIGN1cnNvcjogZ3JhYmJpbmc7XFxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XFxufVxcbi5ndS1taXJyb3IgLmxhYmVsIC5jbG9zZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5ndS1oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLmd1LXVuc2VsZWN0YWJsZSB7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcXG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5ndS10cmFuc2l0IHtcXG4gIG9wYWNpdHk6IDAuMjtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0yMClcXFwiO1xcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTIwKTtcXG59XFxuLmd1LXRyYW5zaXQgLmNsb3NlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRhZ3MtbGlzdCAuZXgtbW92ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcXG59XFxuLnRhZ3MtbGlzdC5leC1vdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuLmhhbmRsZSB7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVmNDIyM2Y1IS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ3MudnVlXG4vLyBtb2R1bGUgaWQgPSAzNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jdmlkZW8tY2FudmFzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlPzM5MjY1N2EwXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFXQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxPQUFBO0lBQ0Esb0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwicGxheWVyLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8dmlkZW8gcmVmPVxcXCJwbGF5ZXJcXFwiXFxuICAgICAgICAgICAgICAgY2xhc3M9XFxcInZpZGVvLWpzIHZqcy1kZWZhdWx0LXNraW5cXFwiXFxuICAgICAgICAgICAgICAgY29udHJvbHMgcHJlbG9hZD1cXFwiYXV0b1xcXCJcXG4gICAgICAgICAgICAgICA6cG9zdGVyPVxcXCJwb3N0ZXJcXFwiXFxuICAgICAgICAgICAgICAgOmRhdGEtc2V0dXA9XFxcInN0clNvdXJjZVxcXCJcXG4gICAgICAgID48L3ZpZGVvPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcbjxzdHlsZT5cXG4gICAgI3ZpZGVvLWNhbnZhcyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICAgIH1cXG48L3N0eWxlPlxcbjxzY3JpcHQ+XFxuICAgIGltcG9ydCB7ZGlzcGF0Y2gsIGdldFN0YXRlfSBmcm9tICdtb2Nrc3RhdGUnO1xcblxcbiAgICBleHBvcnQgZGVmYXVsdHtcXG4gICAgICAgIGRhdGEoKXtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICBwbGF5ZXI6IHt9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIHByb3BzOiB7XFxuICAgICAgICAgICAgc291cmNlOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgcG9zdGVyOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgb2Zmc2V0OiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogZmFsc2UsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgICAgICBzdHJTb3VyY2UoKXtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuc291cmNlKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBtb3VudGVkKCl7XFxuICAgICAgICAgICAgdGhpcy5pbml0UGxheWVyKHRoaXMuc291cmNlKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgYXBpKCl7XFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllclxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgaW5pdFBsYXllcihzb3VyY2Upe1xcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYuc291cmNlKTtcXG4gICAgICAgICAgICAgICAgbGV0IGNvbmZpZyA9IHtcXG4gICAgICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2Uuc291cmNlc1swXSxcXG4gICAgICAgICAgICAgICAgICAgIHRlY2hPcmRlcjogWyd5b3V0dWJlJ10sXFxuICAgICAgICAgICAgICAgICAgICBwbGF5YmFja1JhdGVzOiBbMC4yNSwgMC41LCAxLCAxLjUsIDJdLFxcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVQcm9ncmVzczoge30sXFxuICAgICAgICAgICAgICAgICAgICAgICAgYWJMb29wUGx1Z2luOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29wSWZCZWZvcmVTdGFydDogZmFsc2UsIC8vYWxsb3cgdmlkZW8gdG8gcGxheSBub3JtYWxseSBiZWZvcmUgdGhlIGxvb3Agc2VjdGlvbj8gZGVmYXVsdHMgdG8gdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29vcElmQWZ0ZXJFbmQ6IHRydWUsIC8vIGRlZmF1bHRzIHRvIHRydWVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF1c2VBZnRlckxvb3Bpbmc6IGZhbHNlLCAgICAgICAvL2lmIHRydWUsIGFmdGVyIGxvb3BpbmcgdmlkZW8gd2lsbCBwYXVzZS4gRGVmYXVsdHMgdG8gZmFsc2VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF1c2VCZWZvcmVMb29waW5nOiBmYWxzZSwgICAgICAvL2lmIHRydWUsIGJlZm9yZSBsb29waW5nIHZpZGVvIHdpbGwgcGF1c2UuIERlZmF1bHRzIHRvIGZhbHNlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbnM6IGZhbHNlLCAgLy9kZWZhdWx0cyB0byB0cnVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9O1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vZmZzZXQuc3RhcnQpIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5wbHVnaW5zLmRuY29mZnNldCA9IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydE9mZnNldDogdGhpcy5vZmZzZXQuc3RhcnQsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kT2Zmc2V0OiB0aGlzLm9mZnNldC5lbmRcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllciA9IHZpZGVvanModGhpcy4kcmVmcy5wbGF5ZXIsIGNvbmZpZyk7XFxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRQbGF5ZXInLCB0aGlzLnBsYXllcik7XFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXkoKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCBmdW5jdGlvbiBkdXJhdGlvblNldHRlcihldmVudCkge1xcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoJyonKTtcXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3RhdGUucGxheWVyLmR1cmF0aW9uKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldER1cmF0aW9uJywgc3RhdGUucGxheWVyLmluc3RhbmNlLmR1cmF0aW9uKCkpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRab29tJywgMSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLnBsYXllci5kdXJhdGlvbikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgncGxheWVyUmVhZHknLCB0cnVlKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUucGxheWVyLmluc3RhbmNlLm9mZigndGltZXVwZGF0ZScsIGR1cmF0aW9uU2V0dGVyKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3BsYXllclJlYWR5JywgdHJ1ZSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUucGxheWVyLmluc3RhbmNlLm9mZigndGltZXVwZGF0ZScsIGR1cmF0aW9uU2V0dGVyKVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGxheWJhY2tSYXRlKDEpO1xcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsICgpPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldEN1cnJlbnRUaW1lJywgdGhpcy5wbGF5ZXIuY3VycmVudFRpbWUoKSk7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjk0NTc1OTAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZ2xvYmFsL3ZpZGVvL3BsYXllci52dWVcbi8vIG1vZHVsZSBpZCA9IDM1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50YWcge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGNvbG9yOiAjNzE3MTcxO1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMSk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBtYXJnaW46IDAgM3B4IDZweCAwO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YWdzIC50YWc6aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6ICMwOEM7XFxufVxcbi50YWdzIC50YWcucHJpbWFyeSB7XFxuICAgIGNvbG9yOiAjRkZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4QkNBO1xcbiAgICBib3JkZXItY29sb3I6ICMzNTdFQkRcXG59XFxuLnRhZ3MgLnRhZy5zdWNjZXNzIHtcXG4gICAgY29sb3I6ICNGRkY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Q0I4NUM7XFxuICAgIGJvcmRlci1jb2xvcjogIzRDQUU0Q1xcbn1cXG4udGFncyAudGFnLmluZm8ge1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVCQzBERTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNDZCOERBXFxufVxcbi50YWdzIC50YWcud2FybmluZyB7XFxuICAgIGNvbG9yOiAjRkZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBBRDRFO1xcbiAgICBib3JkZXItY29sb3I6ICNFRUEyMzZcXG59XFxuLnRhZ3MgLnRhZy5kYW5nZXIge1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q5NTM0RjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjRDQzRjNBXFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnLnZ1ZT8wMjRhMDkyMFwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBT0E7SUFDQSxzQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUVBLGlEQUFBO0lBQ0Esd0NBQUE7SUFJQSxnQ0FBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0lBQ0EscUJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0lBQ0EscUJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0lBQ0EscUJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0lBQ0EscUJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0lBQ0EscUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwidGFnLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDx0YWctZHJvcGRvd24gdi1pZj1cXFwidGFnLmRyb3Bkb3duXFxcIiB2LW9uOm9wdGlvbi1jbGlja2VkPVxcXCJkcm9wZG93bk9wdGlvbkNsaWNrZWRcXFwiIDp0YWc9XFxcInRhZ1xcXCI+PC90YWctZHJvcGRvd24+XFxuICAgIDxkaXYgdi1lbHNlIGNsYXNzPVxcXCJ0YWctZHJvcGRvd25cXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIiBidG4gdGFnXFxcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XFxcInRhZ0NsaWNrZWRcXFwiIDpjbGFzcz1cXFwiJ2JnLScrdGFnLmNvbG9yXFxcIj57e3RhZy5uYW1lfX08L2E+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHN0eWxlPlxcbiAgICAudGFnIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIGNvbG9yOiAjNzE3MTcxO1xcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgxODAsIDE4MCwgMTgwLCAwLjEpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgxODAsIDE4MCwgMTgwLCAwLjEpO1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcXG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICAgIG1hcmdpbjogMCAzcHggNnB4IDA7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAudGFncyAudGFnOmhvdmVyIHtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzA4QztcXG4gICAgfVxcblxcbiAgICAudGFncyAudGFnLnByaW1hcnkge1xcbiAgICAgICAgY29sb3I6ICNGRkY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4QkNBO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzU3RUJEXFxuICAgIH1cXG5cXG4gICAgLnRhZ3MgLnRhZy5zdWNjZXNzIHtcXG4gICAgICAgIGNvbG9yOiAjRkZGO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVDQjg1QztcXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzRDQUU0Q1xcbiAgICB9XFxuXFxuICAgIC50YWdzIC50YWcuaW5mbyB7XFxuICAgICAgICBjb2xvcjogI0ZGRjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1QkMwREU7XFxuICAgICAgICBib3JkZXItY29sb3I6ICM0NkI4REFcXG4gICAgfVxcblxcbiAgICAudGFncyAudGFnLndhcm5pbmcge1xcbiAgICAgICAgY29sb3I6ICNGRkY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBBRDRFO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRUVBMjM2XFxuICAgIH1cXG5cXG4gICAgLnRhZ3MgLnRhZy5kYW5nZXIge1xcbiAgICAgICAgY29sb3I6ICNGRkY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDk1MzRGO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRDQzRjNBXFxuICAgIH1cXG48L3N0eWxlPlxcbjxzY3JpcHQ+XFxuICAgIGltcG9ydCB0YWdEcm9wZG93biBmcm9tICcuL3RhZ0Ryb3Bkb3duLnZ1ZSdcXG5cXG4gICAgZXhwb3J0IGRlZmF1bHR7XFxuICAgICAgICBwcm9wczoge1xcbiAgICAgICAgICAgIHRhZzoge31cXG4gICAgICAgIH0sXFxuICAgICAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICAgICAgdGFnRHJvcGRvd25cXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgZHJvcGRvd25PcHRpb25DbGlja2VkKHRhZyl7XFxuICAgICAgICAgICAgICAgIGxldCB0YWdEcm9wZG93biA9IF8uY2xvbmVEZWVwKHRhZyk7XFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RhZy1jbGlja2VkJywgdGFnRHJvcGRvd24pXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB0YWdDbGlja2VkKCl7XFxuICAgICAgICAgICAgICAgIGxldCB0YWcgPSBfLmNsb25lRGVlcCh0aGlzLnRhZyk7XFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RhZy1jbGlja2VkJywgdGFnKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDUwNGRhZWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWcudnVlXG4vLyBtb2R1bGUgaWQgPSAzNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwidG91Y2hlc0xpc3QudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU1MzkwMzk3IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIm5ld1RvdWNoRm9ybS52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNiODNkMGQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnZ1ZS1jb2xvcl9fY29tcGFjdCB7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWU/M2NmMDRkZDlcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTZTQTtJQUNBLHVCQUFBO0NBQ0FcIixcImZpbGVcIjpcIm5ld1RvdWNoRm9ybS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGZvcm0gYWN0aW9uPVxcXCJcXFwiIHYtb246c3VibWl0LnByZXZlbnQ9XFxcIm9uU3VibWl0XFxcIiBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsIGZvcm0tdG91Y2hcXFwiIHYtaWY9XFxcIm9wZW5cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIDpjbGFzcz1cXFwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaC50ZXh0JykgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmV3LXRpdGxlXFxcIiBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpdGxlXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTBcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy10aXRsZVxcXCIgbmFtZT1cXFwibmV3LXRpdGxlXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsPVxcXCJ0b3VjaC50ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1ydWxlcz1cXFwicmVxdWlyZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFzPVxcXCJUaXRsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiVGl0bGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJ0b3VjaC50ZXh0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XFxcImVycm9ycy5oYXMoJ3RvdWNoLnRleHQnKVxcXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaC50ZXh0JykgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ldy10aXRsZVxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2xvclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvbXBhY3QtcGlja2VyIHYtbW9kZWw9XFxcInRvdWNoLmNvbG9yXFxcIiBAY2hhbmdlLWNvbG9yPVxcXCJvbkNoYW5nZUNvbG9yXFxcIj48L2NvbXBhY3QtcGlja2VyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIDpjbGFzcz1cXFwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaC5zdGFydCcpIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ldy1zdGFydFxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCAoc2VjKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy1zdGFydFxcXCIgbmFtZT1cXFwibmV3LXN0YXJ0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWw9XFxcInRvdWNoLnN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXJ1bGVzPVxcXCJyZXF1aXJlZHxudW1lcmljXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFzPVxcXCJTdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJ0b3VjaC5zdGFydFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy1zdGFydC1mbXRcXFwiIG5hbWU9XFxcIm5ldy1zdGFydC1mbXRcXFwiIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwic3RhcnRGbXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cXFwiZXJyb3JzLmhhcygndG91Y2guc3RhcnQnKVxcXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaC5zdGFydCcpIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiA6Y2xhc3M9XFxcInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygndG91Y2guZW5kJykgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmV3LWVuZFxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmQoc2VjKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy1lbmRcXFwiIG5hbWU9XFxcIm5ldy1lbmRcXFwiIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbD1cXFwidG91Y2guZW5kXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXJ1bGVzPVxcXCJyZXF1aXJlZHxudW1lcmljXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFzPVxcXCJFbmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJFbmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInRvdWNoLmVuZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy1lbmQtZm10XFxcIiBuYW1lPVxcXCJuZXctZW5kLWZtdFxcXCIgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJlbmRGbXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cXFwiZXJyb3JzLmhhcygndG91Y2guZW5kJylcXFwiPnt7IGVycm9ycy5maXJzdCgndG91Y2guZW5kJykgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiB2LWlmPVxcXCJjb2xsaWRlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJhbGVydFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPsOXPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpIGNsYXNzPVxcXCJpY29uIGZhIGZhLWJhblxcXCI+PC9pPiBUb3VjaGVzIGNhbnQgb3ZlcmxhcCE8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSB0b3VjaCB0aGF0IHlvdSB3YW50IHRvIGFkZCBvdmVybGFwIHdpdGg6XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XFxcInRvdWNoIGluIGNvbGxpZGVUb3VjaGVzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgdi1pZj1cXFwidG91Y2gucHJldmlvdXMuaGFzT3duUHJvcGVydHkoJ2lkJylcXFwiPnt7dG91Y2gucHJldmlvdXMudGV4dH19OiB0aGF0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24ge3t0b0hITU1TUyh0b3VjaC5wcmV2aW91cy5zdGFydCl9fSBhblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHMgb25cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RvSEhNTVNTKHRvdWNoLnByZXZpb3VzLmVuZCl9fTwvc3Ryb25nPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyB2LWlmPVxcXCJ0b3VjaC5jdXJyZW50Lmhhc093blByb3BlcnR5KCdpZCcpXFxcIj57e3RvdWNoLmN1cnJlbnQudGV4dH19OiB0aGF0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRzIG9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0b0hITU1TUyh0b3VjaC5jdXJyZW50LnN0YXJ0KX19IGFuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcyBvblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dG9ISE1NU1ModG91Y2guY3VycmVudC5lbmQpfX08L3N0cm9uZz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgdi1pZj1cXFwiZW5kSW52YWxpZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwiYWxlcnRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj7DlzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND48aSBjbGFzcz1cXFwiaWNvbiBmYSBmYS1iYW5cXFwiPjwvaT4gVmFsaWRhdGlvbiBFcnJvciE8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBlbmQgb2YgdGhlIHRvdWNoIG11c3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBzdGFydFxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiB0ZXh0LXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj5BZGQgVG91Y2g8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XFxcImNsb3NlXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Zvcm0+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHN0eWxlPlxcblxcbjwvc3R5bGU+XFxuPHNjcmlwdD5cXG4gICAgaW1wb3J0IHtnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcXG4gICAgaW1wb3J0IHtDb21wYWN0fSBmcm9tICd2dWUtY29sb3InO1xcbiAgICBpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi9za2V0Y2gvY29tcG9uZW50cy91dGlscy9UaW1lQ29udmVydGVyJ1xcbiAgICBleHBvcnQgZGVmYXVsdHtcXG4gICAgICAgIHByb3BzOiB7XFxuICAgICAgICAgICAgb3Blbjoge30sXFxuICAgICAgICAgICAgaW5pdFRvdWNoOiB7XFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGwsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiAxMDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcImhzbFxcXCI6IHtcXFwiaFxcXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFxcXCJzXFxcIjogMSwgXFxcImxcXFwiOiAwLjQzNzI1NDkwMTk2MDc4NDMsIFxcXCJhXFxcIjogMX0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJoZXhcXFwiOiBcXFwiI0RCREYwMFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJyZ2JhXFxcIjoge1xcXCJyXFxcIjogMjE5LCBcXFwiZ1xcXCI6IDIyMywgXFxcImJcXFwiOiAwLCBcXFwiYVxcXCI6IDEsIFxcXCJhbHBoYVxcXCI6IDUwfSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcImhzdlxcXCI6IHtcXFwiaFxcXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFxcXCJzXFxcIjogMSwgXFxcInZcXFwiOiAwLjg3NDUwOTgwMzkyMTU2ODYsIFxcXCJhXFxcIjogMX0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkdXJhdGlvbjoge30sXFxuICAgICAgICAgICAgc3RhcnQ6IHt9LFxcbiAgICAgICAgICAgIGVuZDoge31cXG4gICAgICAgIH0sXFxuICAgICAgICB3YXRjaDoge1xcbiAgICAgICAgICAgIG9wZW4odmFsKXtcXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaW5pdFRvdWNoKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHN0YXJ0KHZhbCl7XFxuICAgICAgICAgICAgICAgIHRoaXMudG91Y2guc3RhcnQgPSB2YWw7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBlbmQodmFsKXtcXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaC5lbmQgPSB2YWxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICd0b3VjaC5zdGFydCc6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0NvbGxpZGUoKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgJ3RvdWNoLmVuZCc6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0NvbGxpZGUoKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRJbnZhbGlkID0gISEocGFyc2VJbnQodGhpcy50b3VjaC5zdGFydCkgPj0gcGFyc2VJbnQodGhpcy50b3VjaC5lbmQpIHx8IHBhcnNlSW50KHRoaXMudG91Y2guZW5kKSA+IHBhcnNlSW50KHRoaXMuZHVyYXRpb24pKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgZGF0YSgpe1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGNvbGxpZGU6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICBjb2xsaWRlVG91Y2hlczogW10sXFxuICAgICAgICAgICAgICAgIGVuZEludmFsaWQ6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICB0b3VjaDoge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbCxcXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICByZ2JhOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI6IDI1LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnOiA3NyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYjogNTEsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGE6IDFcXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICAgICAgc3RhcnRGbXQoKXtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy50b3VjaC5zdGFydClcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGVuZEZtdCgpe1xcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnRvdWNoLmVuZClcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHZhbGlkYXRpb25FbmQoKXtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpICsgMTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgY29tcG9uZW50czoge1xcbiAgICAgICAgICAgICdjb21wYWN0LXBpY2tlcic6IENvbXBhY3QsXFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGNsb3NlKCl7XFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NhbmNlbC1uZXctdG91Y2gnKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHRvSEhNTVNTKHNlY3MpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1Moc2VjcylcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG9uQ2hhbmdlQ29sb3IodmFsKXtcXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaC5jb2xvciA9IHZhbFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgY2hlY2tDb2xsaWRlKCl7XFxuICAgICAgICAgICAgICAgIHZhciB0b3VjaHMgPSBnZXRTdGF0ZSgndG91Y2hNYW5hZ2VyJykudG91Y2hlcy5zbGljZSgwKTtcXG4gICAgICAgICAgICAgICAgdG91Y2hzLnB1c2godGhpcy50b3VjaCk7XFxuICAgICAgICAgICAgICAgIHZhciBvdmVybGFwID0gdGhpcy5vdmVybGFwKHRvdWNocyk7XFxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZSA9IG92ZXJsYXAub3ZlcmxhcDtcXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlVG91Y2hlcyA9IG92ZXJsYXAucmFuZ2VzO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgb3ZlcmxhcCh0b3VjaHMpe1xcbiAgICAgICAgICAgICAgICB2YXIgc29ydGVkUmFuZ2VzID0gdG91Y2hzLnNvcnQoKHByZXZpb3VzLCBjdXJyZW50KSA9PiB7XFxuXFxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNUaW1lID0gcGFyc2VJbnQocHJldmlvdXMuc3RhcnQpO1xcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gcGFyc2VJbnQoY3VycmVudC5zdGFydCk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJldmlvdXMgaXMgZWFybGllciB0aGFuIHRoZSBjdXJyZW50XFxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNUaW1lIDwgY3VycmVudFRpbWUpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJldmlvdXMgdGltZSBpcyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCB0aW1lXFxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNUaW1lID09PSBjdXJyZW50VGltZSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIHRpbWUgaXMgbGF0ZXIgdGhhbiB0aGUgY3VycmVudCB0aW1lXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGUgZmluYWwgcmVzdWx0c1xcbiAgICAgICAgICAgICAgICByZXR1cm4gc29ydGVkUmFuZ2VzLnJlZHVjZSgocmVzdWx0LCBjdXJyZW50LCBpZHgsIGFycikgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBwcmV2aW91cyByYW5nZVxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkeCA9PT0gMCkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXMgPSBhcnJbaWR4IC0gMV07XFxuXFxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgYW55IG92ZXJsYXBcXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c0VuZCA9IHBhcnNlSW50KHByZXZpb3VzLmVuZCk7XFxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFN0YXJ0ID0gcGFyc2VJbnQoY3VycmVudC5zdGFydCk7XFxuICAgICAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcCA9IChwcmV2aW91c0VuZCA+PSBjdXJyZW50U3RhcnQpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHJlc3VsdFxcbiAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJsYXApIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB5ZXMsIHRoZXJlIGlzIG92ZXJsYXBcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQub3ZlcmxhcCA9IHRydWU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHNwZWNpZmljIHJhbmdlcyB0aGF0IG92ZXJsYXBcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucmFuZ2VzLnB1c2goe1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91czogcHJldmlvdXMsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGN1cnJlbnRcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcXG5cXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlZWQgdGhlIHJlZHVjZVxcbiAgICAgICAgICAgICAgICB9LCB7b3ZlcmxhcDogZmFsc2UsIHJhbmdlczogW119KTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG9uU3VibWl0KCl7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpO1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lcnJvcnMuYW55KCkpIHtcXG5cXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9ICEhKHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpID49IHBhcnNlSW50KHRoaXMudG91Y2guZW5kKSB8fCBwYXJzZUludCh0aGlzLnRvdWNoLmVuZCkgPiBwYXJzZUludChNYXRoLmZsb29yKHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuZHVyYXRpb24oKSkpKTtcXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5lbmRJbnZhbGlkKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbGxpZGUpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRJbnZhbGlkID0gZmFsc2U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2FkZC1uZXctdG91Y2gnLCB0aGlzLnRvdWNoKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cXG48c3R5bGU+XFxuICAgIC52dWUtY29sb3JfX2NvbXBhY3Qge1xcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gICAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2I4M2QwZCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAzNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udGFnLWRyb3Bkb3duIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnRHJvcGRvd24udnVlP2Y0NGM4NjJjXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFjQTtJQUNBLGlDQUFBO0NBQ0FcIixcImZpbGVcIjpcInRhZ0Ryb3Bkb3duLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIHRhZy1kcm9wZG93blxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlIGJ0biB0YWdcXFwiIDpjbGFzcz1cXFwiJ2JnLScrdGFnLmNvbG9yXFxcIlxcbiAgICAgICAgICAgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgOmlkPVxcXCJpZFxcXCI+e3t0YWcubmFtZX19XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLWNhcmV0LWRvd25cXFwiPjwvc3Bhbj5cXG4gICAgICAgIDwvYT5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgOmFyaWEtbGFiZWxsZWRieT1cXFwiaWRcXFwiPlxcbiAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwib3B0IGluIHRhZy5vcHRpb25zXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgdi1vbjpjbGljay5wcmV2ZW50PVxcXCJjbGlja09wdChvcHQpXFxcIj57e29wdC5uYW1lfX08L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHN0eWxlPlxcbiAgICAudGFnLWRyb3Bkb3duIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xcbiAgICB9XFxuPC9zdHlsZT5cXG48c2NyaXB0PlxcbiAgICBpbXBvcnQgdXVpZCBmcm9tICdiYXNlL21peGlucy91dWlkJ1xcbiAgICBleHBvcnQgZGVmYXVsdHtcXG4gICAgICAgIHByb3BzOiB7XFxuICAgICAgICAgICAgdGFnOiB7fSxcXG4gICAgICAgIH0sXFxuICAgICAgICBkYXRhKCl7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgaWQ6ICcnXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIG1peGluczogW3V1aWRdLFxcbiAgICAgICAgbW91bnRlZCgpe1xcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLmdlbmVyYXRlVVVJRCgpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIG1ldGhvZHM6IHtcXG4gICAgICAgICAgICBjbGlja09wdChvcHQpe1xcbiAgICAgICAgICAgICAgICB0aGlzLnRhZy5vcHRpb24gPSBvcHQ7XFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29wdGlvbi1jbGlja2VkJywgdGhpcy50YWcpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02ZjEyNGM5ZiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ0Ryb3Bkb3duLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcImVkaXRUb3VjaEZvcm0udnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWE3NDlkNjAyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAzNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udnVlLWNvbG9yX19jb21wYWN0IHtcXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvZWRpdFRvdWNoRm9ybS52dWU/Zjc1NmZmYjBcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXFRQTtJQUNBLHVCQUFBO0NBQ0FcIixcImZpbGVcIjpcImVkaXRUb3VjaEZvcm0udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cXFwiXFxcIiB2LW9uOnN1Ym1pdC5wcmV2ZW50PVxcXCJvblN1Ym1pdFxcXCIgY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbCBmb3JtLXRvdWNoXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiA6Y2xhc3M9XFxcInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygndG91Y2h0ZXh0JykgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmV3LXRpdGxlXFxcIiBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50aXRsZScpfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibmV3LXRpdGxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwidG91Y2h0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cXFwicmVxdWlyZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVxcXCJUaXRsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiVGl0bGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJ0b3VjaC50ZXh0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XFxcImVycm9ycy5oYXMoJ3RvdWNodGV4dCcpXFxcIj57eyBlcnJvcnMuZmlyc3QoJ3RvdWNodGV4dCcpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmV3LXRpdGxlXFxcIiBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5jb2xvcicpfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb21wYWN0LXBpY2tlciB2LW1vZGVsPVxcXCJ0b3VjaC5jb2xvclxcXCIgQGNoYW5nZS1jb2xvcj1cXFwib25DaGFuZ2VDb2xvclxcXCI+PC9jb21wYWN0LXBpY2tlcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiA6Y2xhc3M9XFxcInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygndG91Y2hzdGFydCcpIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ldy1zdGFydFxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3Muc3RhcnQnKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibmV3LXN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJ0b3VjaHN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cXFwicmVxdWlyZWR8bnVtZXJpY1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cXFwiU3RhcnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwidG91Y2guc3RhcnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXctc3RhcnQtZm10XFxcIiBuYW1lPVxcXCJuZXctc3RhcnQtZm10XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiU3RhcnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInN0YXJ0Rm10XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XFxcImVycm9ycy5oYXMoJ3RvdWNoc3RhcnQnKVxcXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaHN0YXJ0JykgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiA6Y2xhc3M9XFxcInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygndG91Y2hlbmQnKSB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuZXctZW5kXFxcIiBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5lbmQnKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibmV3LWVuZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwidG91Y2hlbmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVxcXCJyZXF1aXJlZHxudW1lcmljXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVxcXCJFbmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJFbmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInRvdWNoLmVuZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy1lbmQtZm10XFxcIiBuYW1lPVxcXCJuZXctZW5kLWZtdFxcXCIgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJlbmRGbXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cXFwiZXJyb3JzLmhhcygndG91Y2hlbmQnKVxcXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaGVuZCcpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIHYtaWY9XFxcImNvbGxpZGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcImFsZXJ0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+w5c8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJpY29uIGZhIGZhLWJhblxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hlc19jYW50X292ZXJsYXAnKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hfb3ZlcmxhcF93aXRoJyl9fTpcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwiY29sbGlkZVRvdWNoIGluIGNvbGxpZGVUb3VjaGVzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgdi1pZj1cXFwiY29sbGlkZVRvdWNoLnByZXZpb3VzLmlkICE9IHRvdWNoLmlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hfb3ZlcmxhcF9tc2cnLHsgdGl0bGU6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZVRvdWNoLnByZXZpb3VzLnRleHQsc3RhcnQ6dG9ISE1NU1MoY29sbGlkZVRvdWNoLnByZXZpb3VzLnN0YXJ0KSxlbmQ6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9ISE1NU1MoY29sbGlkZVRvdWNoLnByZXZpb3VzLmVuZCl9KX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgdi1pZj1cXFwiY29sbGlkZVRvdWNoLmN1cnJlbnQuaWQgIT0gdG91Y2guaWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50b3VjaF9vdmVybGFwX21zZycseyB0aXRsZTpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaWRlVG91Y2guY3VycmVudC50ZXh0LHN0YXJ0OnRvSEhNTVNTKGNvbGxpZGVUb3VjaC5jdXJyZW50LnN0YXJ0KSxlbmQ6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9ISE1NU1MoY29sbGlkZVRvdWNoLmN1cnJlbnQuZW5kKX0pfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiB2LWlmPVxcXCJlbmRJbnZhbGlkXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJhbGVydFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPsOXPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiaWNvbiBmYSBmYS1iYW5cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnZhbGlkYXRpb25fZXJyb3InKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudmFsaWRhdGlvbl9lbmRfZ3JlYXRlcicpfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgdGV4dC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+e3skdCgnc2NvdXRpbmdzLnNhdmUnKX19PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgdi1vbjpjbGljay5wcmV2ZW50PVxcXCJjbG9zZVxcXCI+e3skdCgnc2NvdXRpbmdzLmNhbmNlbCcpfX08L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Zvcm0+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHN0eWxlPlxcblxcbjwvc3R5bGU+XFxuPHNjcmlwdD5cXG4gICAgaW1wb3J0IHtnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcXG4gICAgaW1wb3J0IHtDb21wYWN0fSBmcm9tICd2dWUtY29sb3InO1xcbiAgICBpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi9za2V0Y2gvY29tcG9uZW50cy91dGlscy9UaW1lQ29udmVydGVyJ1xcbiAgICBpbXBvcnQgY29sbGlkZU1peGluIGZyb20gJ2Jhc2UvbWl4aW5zL2NvbGxpZGUnXFxuICAgIGltcG9ydCBzY291dGluZ3NMb2NhbGVzIGZyb20gJ2Jhc2UvbGFuZy9hZG1pbi9zY291dGluZ3Mvc2NvdXRpbmdzLmpzJztcXG5cXG4gICAgZXhwb3J0IGRlZmF1bHR7XFxuICAgICAgICBsb2NhbGVzOiBzY291dGluZ3NMb2NhbGVzLFxcbiAgICAgICAgcHJvcHM6IHtcXG4gICAgICAgICAgICBpbml0VG91Y2g6IHtcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IDEwMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiAyNSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGc6IDc3LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYjogNTEsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhOiAxXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkdXJhdGlvbjoge30sXFxuICAgICAgICB9LFxcbiAgICAgICAgbWl4aW5zOiBbY29sbGlkZU1peGluXSxcXG4gICAgICAgIGNyZWF0ZWQoKXtcXG4gICAgICAgICAgICB0aGlzLnRvdWNoID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pbml0VG91Y2gpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHdhdGNoOiB7XFxuICAgICAgICAgICAgJ3RvdWNoLnN0YXJ0JzogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgICAgICB2YXIgY29sbGlkZVJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlKHRoaXMudG91Y2gpO1xcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGUgPSBjb2xsaWRlUmVzdWx0LmNvbGxpZGU7XFxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZVRvdWNoZXMgPSBjb2xsaWRlUmVzdWx0LmNvbGxpZGVUb3VjaGVzO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgJ3RvdWNoLmVuZCc6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVSZXN1bHQgPSB0aGlzLmNoZWNrQ29sbGlkZSh0aGlzLnRvdWNoKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlID0gY29sbGlkZVJlc3VsdC5jb2xsaWRlO1xcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGVUb3VjaGVzID0gY29sbGlkZVJlc3VsdC5jb2xsaWRlVG91Y2hlcztcXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRJbnZhbGlkID0gcGFyc2VJbnQodGhpcy50b3VjaC5zdGFydCkgPj0gcGFyc2VJbnQodGhpcy50b3VjaC5lbmQpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBkYXRhKCl7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgY29sbGlkZTogZmFsc2UsXFxuICAgICAgICAgICAgICAgIGNvbGxpZGVUb3VjaGVzOiBbXSxcXG4gICAgICAgICAgICAgICAgZW5kSW52YWxpZDogZmFsc2UsXFxuICAgICAgICAgICAgICAgIHRvdWNoOiB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsLFxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDAsXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJnYmE6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcjogMjUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGc6IDc3LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiOiA1MSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYTogMVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgICAgICBzdGFydEZtdCgpe1xcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnRvdWNoLnN0YXJ0KVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZW5kRm10KCl7XFxuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMudG91Y2guZW5kKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdmFsaWRhdGlvbkVuZCgpe1xcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy50b3VjaC5zdGFydCkgKyAxO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICAgICAgJ2NvbXBhY3QtcGlja2VyJzogQ29tcGFjdCxcXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgY2xvc2UoKXtcXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2FuY2VsLW5ldy10b3VjaCcsIHRoaXMudG91Y2gpO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdG9ISE1NU1Moc2Vjcykge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyhzZWNzKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgb25DaGFuZ2VDb2xvcih2YWwpe1xcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoLmNvbG9yID0gdmFsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBvblN1Ym1pdCgpe1xcbiAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKS50aGVuKCgpPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG91Y2guc3RhcnQgPj0gdGhpcy50b3VjaC5lbmQpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZEludmFsaWQgPSB0cnVlO1xcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZEludmFsaWQgPSBmYWxzZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29sbGlkZSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdhZGQtbmV3LXRvdWNoJywgdGhpcy50b3VjaCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChiYWcgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC5lcnJvclRvYXN0KHRoaXMuJHQoJ2FkbWluLnZhbGlkYXRpb25fZXJyb3InKSk7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcbjxzdHlsZT5cXG4gICAgLnZ1ZS1jb2xvcl9fY29tcGFjdCB7XFxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgICB9XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWE3NDlkNjAyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAzNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwidGltZWxpbmUudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWU1NmM4MDg0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy90aW1lbGluZS52dWVcbi8vIG1vZHVsZSBpZCA9IDM3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMjk0NTc1OTAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BsYXllci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3BsYXllci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yOTQ1NzU5MCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wbGF5ZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZ2xvYmFsL3ZpZGVvL3BsYXllci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwbGF5ZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTI5NDU3NTkwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjk0NTc1OTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAzODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNTc5MmY1NmMhc2Fzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luc3BlY3Rvci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luc3BlY3Rvci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01NzkyZjU2YyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbnNwZWN0b3IudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2luc3BlY3Rvci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBpbnNwZWN0b3IudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTU3OTJmNTZjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTc5MmY1NmNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy9pbnNwZWN0b3IudnVlXG4vLyBtb2R1bGUgaWQgPSAzODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LWU1NmM4MDg0IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90aW1lbGluZS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RpbWVsaW5lLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWU1NmM4MDg0IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RpbWVsaW5lLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy90aW1lbGluZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0aW1lbGluZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZTU2YzgwODRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1lNTZjODA4NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL3RpbWVsaW5lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vZWRpdFRvdWNoRm9ybS52dWVcIilcbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LWE3NDlkNjAyIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9lZGl0VG91Y2hGb3JtLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZWRpdFRvdWNoRm9ybS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9lZGl0VG91Y2hGb3JtLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZWRpdFRvdWNoRm9ybS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYTc0OWQ2MDJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1hNzQ5ZDYwMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvZWRpdFRvdWNoRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDM4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNWNiODNkMGQhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL25ld1RvdWNoRm9ybS52dWVcIilcbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9uZXdUb3VjaEZvcm0udnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9uZXdUb3VjaEZvcm0udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNWNiODNkMGQhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbmV3VG91Y2hGb3JtLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBuZXdUb3VjaEZvcm0udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVjYjgzZDBkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWNiODNkMGRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDM5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNTUzOTAzOTchLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RvdWNoZXNMaXN0LnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdG91Y2hlc0xpc3QudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNTUzOTAzOTchLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdG91Y2hlc0xpc3QudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvbGlzdHMvdG91Y2hlc0xpc3QudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdG91Y2hlc0xpc3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTU1MzkwMzk3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTUzOTAzOTdcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi00NTA0ZGFlZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFnLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGFnLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTQ1MDRkYWVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RhZy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0YWcudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ1MDRkYWVlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDUwNGRhZWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi02ZjEyNGM5ZiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFnRHJvcGRvd24udnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90YWdEcm9wZG93bi52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi02ZjEyNGM5ZiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90YWdEcm9wZG93bi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ0Ryb3Bkb3duLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRhZ0Ryb3Bkb3duLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02ZjEyNGM5ZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTZmMTI0YzlmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ0Ryb3Bkb3duLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTVmNDIyM2Y1IXNhc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YWdzLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGFncy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01ZjQyMjNmNSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90YWdzLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFncy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0YWdzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZjQyMjNmNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVmNDIyM2Y1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ3MudnVlXG4vLyBtb2R1bGUgaWQgPSAzOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2FkbWluLWhlYWRlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBfdm0udGl0bGUsXG4gICAgICBcImJyZWFkY3J1bWJzXCI6IF92bS5icmVhZGNydW1ic1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgb3ZlcmxheS13cmFwcGVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IGlzLWZsZXhcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTYgcGxheWVyLWNvbnRhaW5lclwiXG4gIH0sIFsoX3ZtLmluaXRpYWxpemVkKSA/IF9jKCdkbmMtcGxheWVyJywge1xuICAgIHJlZjogXCJwbGF5ZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzb3VyY2VcIjogX3ZtLnNvdXJjZVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNiB0b3VjaGVzLWNvbnRhaW5lclwiXG4gIH0sIFtfYygndG91Y2hlcy1saXN0JyldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5wbGF5ZXJSZWFkeSksXG4gICAgICBleHByZXNzaW9uOiBcInBsYXllclJlYWR5XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYWlsYm94LWNvbnRyb2xzIGNvbnRyb2wtbWVudVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1ncm91cFwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5zdGFydGVkXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uc3RhcnRUb3VjaFxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdmYS1wbGF5JzogIV92bS5zdGFydGVkLCAnZmEtY2lyY2xlIHRleHQtZGFuZ2VyJzogX3ZtLnN0YXJ0ZWRcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnN0YXJ0ZWQgPyBfdm0uJHQoJ3Njb3V0aW5ncy5yZWNvcmRpbmcnKSA6IF92bS4kdCgnc2NvdXRpbmdzLnN0YXJ0X3RvdWNoJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRpc2FibGVkXCI6ICFfdm0uc3RhcnRlZFxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmVuZFRvdWNoXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtc3RvcFwiXG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MuZW5kX3RvdWNoJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInB1bGwtcmlnaHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4tZ3JvdXBcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udG9vZ2xlVGltZWxpbmVcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jYWxlbmRhclwiXG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnRvb2dsZV90aW1lbGluZScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS50b29nbGVJbnNwZWN0b3JcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1leWVcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy50b29nbGVfaW5zcGVjdG9yJykpICsgXCJcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmVkaXQpID8gX2MoJ2VkaXQtdG91Y2gtZm9ybScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpbml0LXRvdWNoXCI6IF92bS50b3VjaCxcbiAgICAgIFwiZHVyYXRpb25cIjogX3ZtLmR1cmF0aW9uXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjYW5jZWwtbmV3LXRvdWNoXCI6IF92bS5jYW5jZWxFZGl0VG91Y2gsXG4gICAgICBcImFkZC1uZXctdG91Y2hcIjogX3ZtLnNhdmVFZGl0VG91Y2hcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyXCJcbiAgfSwgWyhfdm0ucGxheWVyUmVhZHkpID8gX2MoJ2luc3BlY3RvcicsIHtcbiAgICByZWY6IFwiaW5zcGVjdG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxheWluZ1wiOiBfdm0ucGxheWluZ1xuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyXCJcbiAgfSwgWyhfdm0ucGxheWVyUmVhZHkpID8gX2MoJ3RpbWVsaW5lJykgOiBfdm0uX2UoKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyXCJcbiAgfSwgWyhfdm0ucGxheWVyUmVhZHkpID8gX2MoJ2dsb2JhbC10aW1lbGluZScpIDogX3ZtLl9lKCldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5wbGF5ZXJSZWFkeSksXG4gICAgICBleHByZXNzaW9uOiBcInBsYXllclJlYWR5XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNlwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uc2F2ZVxuICAgIH1cbiAgfSwgW192bS5fdihcIiBcIiArIF92bS5fcyhfdm0uJHQoJ2Zvcm1zLnNhdmUnKSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNlwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyIGJ0bi1ibG9ja1wiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5jYW5jZWxcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnZm9ybXMuYmFjaycpKSldKV0pXSksIF92bS5fdihcIiBcIiksICghX3ZtLnBsYXllclJlYWR5KSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwib3ZlcmxheVwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1yZWZyZXNoIGZhLXNwaW5cIlxuICB9KV0pIDogX3ZtLl9lKCldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTI0Nzc5YjU4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yNDc3OWI1OCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2VkaXQudnVlXG4vLyBtb2R1bGUgaWQgPSAzOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ3ZpZGVvJywge1xuICAgIHJlZjogXCJwbGF5ZXJcIixcbiAgICBzdGF0aWNDbGFzczogXCJ2aWRlby1qcyB2anMtZGVmYXVsdC1za2luXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29udHJvbHNcIjogXCJcIixcbiAgICAgIFwicHJlbG9hZFwiOiBcImF1dG9cIixcbiAgICAgIFwicG9zdGVyXCI6IF92bS5wb3N0ZXIsXG4gICAgICBcImRhdGEtc2V0dXBcIjogX3ZtLnN0clNvdXJjZVxuICAgIH1cbiAgfSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yOTQ1NzU5MFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMjk0NTc1OTAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9nbG9iYWwvdmlkZW8vcGxheWVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiAoX3ZtLnRhZy5kcm9wZG93bikgPyBfYygndGFnLWRyb3Bkb3duJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhZ1wiOiBfdm0udGFnXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJvcHRpb24tY2xpY2tlZFwiOiBfdm0uZHJvcGRvd25PcHRpb25DbGlja2VkXG4gICAgfVxuICB9KSA6IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGFnLWRyb3Bkb3duXCJcbiAgfSwgW19jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIiBidG4gdGFnXCIsXG4gICAgY2xhc3M6ICdiZy0nICsgX3ZtLnRhZy5jb2xvcixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50YWdDbGlja2VkKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50YWcubmFtZSkpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00NTA0ZGFlZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNDUwNGRhZWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZy52dWVcbi8vIG1vZHVsZSBpZCA9IDQxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3ggYm94LXNvbGlkIFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXJcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtbWFwLW1hcmtlclwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnRvdWNoZXMnKSkgKyBcIlxcbiAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiXG4gIH0sIFsoX3ZtLnRvdWNoZXMubGVuZ3RoKSA/IF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0b2RvLWxpc3QgdWktc29ydGFibGVcIlxuICB9LCBfdm0uX2woKF92bS50b3VjaGVzKSwgZnVuY3Rpb24odG91Y2gpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnRcIixcbiAgICAgIHN0eWxlOiAoJ2JhY2tncm91bmQ6JyArIHRvdWNoLmNvbG9yLmhleCArICc7IGhlaWdodDoyMHB4OyB3aWR0aDoyMHB4O21hcmdpbi10b3A6IDFweDsnKVxuICAgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRleHRcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKHRvdWNoLnRleHQpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc21hbGwnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJsYWJlbCBsYWJlbC1zdWNjZXNzXCJcbiAgICB9LCBbX2MoJ2knLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jbG9jay1vXCJcbiAgICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy5zdGFydF9hdCcsIHtcbiAgICAgIHN0YXJ0OiBfdm0udG9ISE1NU1ModG91Y2guc3RhcnQpXG4gICAgfSkpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzbWFsbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsIGxhYmVsLWRhbmdlclwiXG4gICAgfSwgW19jKCdpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2xvY2stb1wiXG4gICAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MuZW5kX2F0Jywge1xuICAgICAgZW5kOiBfdm0udG9ISE1NU1ModG91Y2guZW5kKVxuICAgIH0pKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidG9vbHNcIlxuICAgIH0sIFtfYygnaScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWVkaXRcIixcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmVkaXRUb3VjaCh0b3VjaClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXRyYXNoLW9cIixcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLnJlbW92ZVRvdWNoKHRvdWNoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSldKV0pXG4gIH0pKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoIV92bS50b3VjaGVzLmxlbmd0aCkgPyBfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy5ub190b3VjaGVzJykpKV0pIDogX3ZtLl9lKCldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTU1MzkwMzk3XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01NTM5MDM5NyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveCBib3gtc29saWQgY29sbGFwc2VkLWJveFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiaW5zcGVjdG9yQm94XCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLXJpZ2h0IGJveC10b29sc1wiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImlkXCI6IFwiaW5zcGVjdG9yVG9vZ2xlclwiLFxuICAgICAgXCJkYXRhLXdpZGdldFwiOiBcImNvbGxhcHNlXCIsXG4gICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidG9vbHRpcFwiLFxuICAgICAgXCJ0aXRsZVwiOiBcIlwiLFxuICAgICAgXCJkYXRhLW9yaWdpbmFsLXRpdGxlXCI6IFwiQ29sbGFwc2VcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnRvb2dsZU9wZW5cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1wbHVzXCJcbiAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdFwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jYWxlbmRhclwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy5pbnNwZWN0b3InKSkgKyBcIlxcbiAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIChfdm0udG91Y2gpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnQgaW5zcGVjdG9yLWluZm9cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnRcIixcbiAgICBzdHlsZTogKCdiYWNrZ3JvdW5kOicgKyBfdm0uYmFja2dyb3VuZCArICc7IGhlaWdodDoyMHB4OyB3aWR0aDoyMHB4O21hcmdpbi10b3A6IDFweDsgbWFyZ2luLXJpZ2h0OjVweCcpXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdCBpbnNwZWN0b3ItaW5mby0tdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYWJlbCBsYWJlbC1zdWNjZXNzXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnN0YXJ0KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgbGFiZWwtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVuZCkpXSldKSA6IF92bS5fZSgpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIlxuICB9LCBbKF92bS50b3VjaCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1haWxib3gtY29udHJvbHMgY29udHJvbC1pbnNwZWN0b3ItbWVudVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1ncm91cFwiXG4gIH0sIFsoX3ZtLnJlY29yZGluZ1RvdWNoKSA/IF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY3JlYXRlQWN0aW9uXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLmVuZF9hY3Rpb24nKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnBsYXlcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYVwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnZmEtcGxheSc6ICFfdm0ucGxheWluZywgJ2ZhLXBhdXNlIHRleHQtZGFuZ2VyJzogX3ZtLnBsYXlpbmdcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnBsYXlpbmcgPyBfdm0uJHQoJ3Njb3V0aW5ncy5wYXVzZScpIDogX3ZtLiR0KCdzY291dGluZ3MucGxheScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4tZ3JvdXBcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmJhY2t3YXJkKDEwKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWZhc3QtYmFja3dhcmRcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwIHNcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmJhY2t3YXJkKDUpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtYmFja3dhcmRcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUgc1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZm9yd2FyZCg1KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWZvcndhcmRcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUgc1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZm9yd2FyZCgxMClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1mYXN0LWZvcndhcmRcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwIHNcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1ncm91cFwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucGxheWJhY2tSYXRlKDAuMjUpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMjUgeFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucGxheWJhY2tSYXRlKDAuNSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMC41IHhcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnBsYXliYWNrUmF0ZSgxKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxIHhcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnBsYXliYWNrUmF0ZSgxLjUpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuNSB4XFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5wbGF5YmFja1JhdGUoMilcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMiB4XFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImF0aGxldGUtbWVudVwiXG4gIH0sIFsoX3ZtLnRvdWNoKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgbm8tcGFkZGluZy1yaWdodFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImF0aGxldGUtbWVudS10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy5sZWZ0X2FjdGlvbnMnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiBuby1wYWRkaW5nLWxlZnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhdGhsZXRlLW1lbnUtdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MucmlnaHRfYWN0aW9ucycpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS50b3VjaCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IG5vLXBhZGRpbmctcmlnaHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhdGhsZXRlLW1lbnUtbGVmdFwiXG4gIH0sIFtfYygndGFncycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWdzXCI6IF92bS50YWdzTGVmdCxcbiAgICAgIFwic2VsZWN0ZWRcIjogX3ZtLmFjdGlvbi5sZWZ0VGFncyxcbiAgICAgIFwidHlwZVwiOiBcImxlZnRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwidGFnLWRlbGV0ZWRcIjogX3ZtLnRhZ0RlbGV0ZWRMZWZ0LFxuICAgICAgXCJ0YWctc2VsZWN0ZWRcIjogX3ZtLnRhZ1NlbGVjdGVkTGVmdFxuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IG5vLXBhZGRpbmctbGVmdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImF0aGxldGUtbWVudS1sZWZ0XCJcbiAgfSwgW19jKCd0YWdzJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhZ3NcIjogX3ZtLnRhZ3NSaWdodCxcbiAgICAgIFwic2VsZWN0ZWRcIjogX3ZtLmFjdGlvbi5yaWdodFRhZ3MsXG4gICAgICBcInR5cGVcIjogXCJyaWdodFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJ0YWctZGVsZXRlZFwiOiBfdm0udGFnRGVsZXRlZFJpZ2h0LFxuICAgICAgXCJ0YWctc2VsZWN0ZWRcIjogX3ZtLnRhZ1NlbGVjdGVkUmlnaHRcbiAgICB9XG4gIH0pXSwgMSldKV0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImluc3BlY3RvclwiXG4gICAgfVxuICB9KV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNTc5MmY1NmNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTU3OTJmNTZjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2luc3BlY3Rvci52dWVcbi8vIG1vZHVsZSBpZCA9IDQyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFsoX3ZtLm9wZW4pID8gX2MoJ2Zvcm0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ob3Jpem9udGFsIGZvcm0tdG91Y2hcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJhY3Rpb25cIjogXCJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLm9uU3VibWl0KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ3RvdWNoLnRleHQnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmV3LXRpdGxlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBUaXRsZVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEwXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLnRleHQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3VjaC50ZXh0XCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLnRleHQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3VjaC50ZXh0XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm5ldy10aXRsZVwiLFxuICAgICAgXCJuYW1lXCI6IFwibmV3LXRpdGxlXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImRhdGEtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJkYXRhLWFzXCI6IFwiVGl0bGVcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJUaXRsZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnRvdWNoLnRleHQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udG91Y2gudGV4dCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygndG91Y2gudGV4dCcpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygndG91Y2gudGV4dCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ3RvdWNoLnRleHQnKSkpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmV3LXRpdGxlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBDb2xvclxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEwXCJcbiAgfSwgW19jKCdjb21wYWN0LXBpY2tlcicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3VjaC5jb2xvciksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLmNvbG9yXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRvdWNoLmNvbG9yKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlLWNvbG9yXCI6IF92bS5vbkNoYW5nZUNvbG9yLFxuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRvdWNoLmNvbG9yID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ3RvdWNoLnN0YXJ0JylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm5ldy1zdGFydFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnQgKHNlYylcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLnN0YXJ0KSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2guc3RhcnRcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udG91Y2guc3RhcnQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3VjaC5zdGFydFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJuZXctc3RhcnRcIixcbiAgICAgIFwibmFtZVwiOiBcIm5ldy1zdGFydFwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJkYXRhLXJ1bGVzXCI6IFwicmVxdWlyZWR8bnVtZXJpY1wiLFxuICAgICAgXCJkYXRhLWFzXCI6IFwiU3RhcnRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJTdGFydFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnRvdWNoLnN0YXJ0KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRvdWNoLnN0YXJ0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNlwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uc3RhcnRGbXQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzdGFydEZtdFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJuZXctc3RhcnQtZm10XCIsXG4gICAgICBcIm5hbWVcIjogXCJuZXctc3RhcnQtZm10XCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiU3RhcnRcIixcbiAgICAgIFwiZGlzYWJsZWRcIjogXCJcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5zdGFydEZtdClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5zdGFydEZtdCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ3RvdWNoLnN0YXJ0JykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCd0b3VjaC5zdGFydCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ3RvdWNoLnN0YXJ0JykpKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ3RvdWNoLmVuZCcpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJuZXctZW5kXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBFbmQoc2VjKVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEwXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTZcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgdmFsdWU6IChfdm0udG91Y2guZW5kKSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2guZW5kXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLmVuZCksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLmVuZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJuZXctZW5kXCIsXG4gICAgICBcIm5hbWVcIjogXCJuZXctZW5kXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImRhdGEtcnVsZXNcIjogXCJyZXF1aXJlZHxudW1lcmljXCIsXG4gICAgICBcImRhdGEtYXNcIjogXCJFbmRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJFbmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS50b3VjaC5lbmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udG91Y2guZW5kID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNlwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZW5kRm10KSxcbiAgICAgIGV4cHJlc3Npb246IFwiZW5kRm10XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm5ldy1lbmQtZm10XCIsXG4gICAgICBcIm5hbWVcIjogXCJuZXctZW5kLWZtdFwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlN0YXJ0XCIsXG4gICAgICBcImRpc2FibGVkXCI6IFwiXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uZW5kRm10KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmVuZEZtdCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ3RvdWNoLmVuZCcpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygndG91Y2guZW5kJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgndG91Y2guZW5kJykpKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIChfdm0uY29sbGlkZSkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJhbGVydFwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIsOXXCIpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBUaGUgdG91Y2ggdGhhdCB5b3Ugd2FudCB0byBhZGQgb3ZlcmxhcCB3aXRoOlxcbiAgICAgICAgICAgICAgICAgICAgXCIpLCBfYygndWwnLCBfdm0uX2woKF92bS5jb2xsaWRlVG91Y2hlcyksIGZ1bmN0aW9uKHRvdWNoKSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIFsodG91Y2gucHJldmlvdXMuaGFzT3duUHJvcGVydHkoJ2lkJykpID8gX2MoJ3N0cm9uZycsIFtfdm0uX3YoX3ZtLl9zKHRvdWNoLnByZXZpb3VzLnRleHQpICsgXCI6IHRoYXRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0c1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24gXCIgKyBfdm0uX3MoX3ZtLnRvSEhNTVNTKHRvdWNoLnByZXZpb3VzLnN0YXJ0KSkgKyBcIiBhblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcyBvblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRvSEhNTVNTKHRvdWNoLnByZXZpb3VzLmVuZCkpKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksICh0b3VjaC5jdXJyZW50Lmhhc093blByb3BlcnR5KCdpZCcpKSA/IF9jKCdzdHJvbmcnLCBbX3ZtLl92KF92bS5fcyh0b3VjaC5jdXJyZW50LnRleHQpICsgXCI6IHRoYXRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0cyBvblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRvSEhNTVNTKHRvdWNoLmN1cnJlbnQuc3RhcnQpKSArIFwiIGFuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRzIG9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udG9ISE1NU1ModG91Y2guY3VycmVudC5lbmQpKSldKSA6IF92bS5fZSgpXSlcbiAgfSkpXSldKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uZW5kSW52YWxpZCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfdm0uX20oMSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiB0ZXh0LXJpZ2h0XCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQWRkIFRvdWNoXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXJcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5jbG9zZSgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ2FuY2VsXCIpXSldKV0pXSkgOiBfdm0uX2UoKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2g0JywgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImljb24gZmEgZmEtYmFuXCJcbiAgfSksIF92bS5fdihcIiBUb3VjaGVzIGNhbnQgb3ZlcmxhcCFcIildKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRhdGEtZGlzbWlzc1wiOiBcImFsZXJ0XCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiw5dcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g0JywgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImljb24gZmEgZmEtYmFuXCJcbiAgfSksIF92bS5fdihcIiBWYWxpZGF0aW9uIEVycm9yIVwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFRoZSBlbmQgb2YgdGhlIHRvdWNoIG11c3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBzdGFydFxcbiAgICAgICAgICAgICAgICBcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNWNiODNkMGRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGFnc1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1ncm91cFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInJvbGVcIjogXCJncm91cFwiLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiLi4uXCJcbiAgICB9XG4gIH0sIF92bS5fbCgoX3ZtLnRhZ3MpLCBmdW5jdGlvbih0YWcpIHtcbiAgICByZXR1cm4gX2MoJ3RhZycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidGFnXCI6IHRhZ1xuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwidGFnLWNsaWNrZWRcIjogX3ZtLnRhZ1NlbGVjdGVkXG4gICAgICB9XG4gICAgfSlcbiAgfSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGFncy1zZWxlY3RlZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcImRyYWd1bGFcIixcbiAgICAgIHJhd05hbWU6IFwidi1kcmFndWxhXCIsXG4gICAgICB2YWx1ZTogKF92bS5zZWxlY3RlZCksXG4gICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0YWdzLWxpc3RcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJiYWdcIjogXCJmaXJzdC1iYWdcIlxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0uc2VsZWN0ZWQpLCBmdW5jdGlvbih0YWcpIHtcbiAgICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICAgIGtleTogdGFnLmlkXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJsYWJlbFwiLFxuICAgICAgY2xhc3M6ICdiZy0nICsgdGFnLmNvbG9yXG4gICAgfSwgW19jKCdzcGFuJywgW192bS5fdihfdm0uX3ModGFnLm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCAodGFnLm9wdGlvbikgPyBfYygnc3BhbicsIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3ModGFnLm9wdGlvbi5uYW1lKSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCJcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5kZWxldGVUYWcodGFnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdzcGFuJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCLDl1wiKV0pXSldKV0pXG4gIH0pKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNWY0MjIzZjVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTVmNDIyM2Y1IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duIHRhZy1kcm9wZG93blwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi10b2dnbGUgYnRuIHRhZ1wiLFxuICAgIGNsYXNzOiAnYmctJyArIF92bS50YWcuY29sb3IsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJkcm9wZG93blwiLFxuICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IFwiZmFsc2VcIixcbiAgICAgIFwiaWRcIjogX3ZtLmlkXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGFnLm5hbWUpICsgXCJcXG4gICAgICAgIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2FyZXQtZG93blwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1tZW51XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IF92bS5pZFxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0udGFnLm9wdGlvbnMpLCBmdW5jdGlvbihvcHQpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0uY2xpY2tPcHQob3B0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3Mob3B0Lm5hbWUpKV0pXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNmYxMjRjOWZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTZmMTI0YzlmIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWVcbi8vIG1vZHVsZSBpZCA9IDQyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZm9ybScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWhvcml6b250YWwgZm9ybS10b3VjaFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImFjdGlvblwiOiBcIlwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0ub25TdWJtaXQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygndG91Y2h0ZXh0JylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm5ldy10aXRsZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MudGl0bGUnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEwXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udG91Y2gudGV4dCksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLnRleHRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmV3LXRpdGxlXCIsXG4gICAgICBcIm5hbWVcIjogXCJ0b3VjaHRleHRcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogXCJUaXRsZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlRpdGxlXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0udG91Y2gudGV4dClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS50b3VjaC50ZXh0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCd0b3VjaHRleHQnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ3RvdWNodGV4dCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ3RvdWNodGV4dCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmV3LXRpdGxlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy5jb2xvcicpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTBcIlxuICB9LCBbX2MoJ2NvbXBhY3QtcGlja2VyJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLmNvbG9yKSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2guY29sb3JcIlxuICAgIH1dLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0udG91Y2guY29sb3IpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2UtY29sb3JcIjogX3ZtLm9uQ2hhbmdlQ29sb3IsXG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udG91Y2guY29sb3IgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygndG91Y2hzdGFydCcpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJuZXctc3RhcnRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnN0YXJ0JykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udG91Y2guc3RhcnQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3VjaC5zdGFydFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJuZXctc3RhcnRcIixcbiAgICAgIFwibmFtZVwiOiBcInRvdWNoc3RhcnRcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkfG51bWVyaWNcIixcbiAgICAgIFwiZGF0YS12di1hc1wiOiBcIlN0YXJ0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiU3RhcnRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS50b3VjaC5zdGFydClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS50b3VjaC5zdGFydCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTZcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnN0YXJ0Rm10KSxcbiAgICAgIGV4cHJlc3Npb246IFwic3RhcnRGbXRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmV3LXN0YXJ0LWZtdFwiLFxuICAgICAgXCJuYW1lXCI6IFwibmV3LXN0YXJ0LWZtdFwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlN0YXJ0XCIsXG4gICAgICBcImRpc2FibGVkXCI6IFwiXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uc3RhcnRGbXQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uc3RhcnRGbXQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCd0b3VjaHN0YXJ0JykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCd0b3VjaHN0YXJ0JylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgndG91Y2hzdGFydCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygndG91Y2hlbmQnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmV3LWVuZFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MuZW5kJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udG91Y2guZW5kKSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2guZW5kXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm5ldy1lbmRcIixcbiAgICAgIFwibmFtZVwiOiBcInRvdWNoZW5kXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZHxudW1lcmljXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogXCJFbmRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJFbmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS50b3VjaC5lbmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udG91Y2guZW5kID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNlwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZW5kRm10KSxcbiAgICAgIGV4cHJlc3Npb246IFwiZW5kRm10XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm5ldy1lbmQtZm10XCIsXG4gICAgICBcIm5hbWVcIjogXCJuZXctZW5kLWZtdFwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlN0YXJ0XCIsXG4gICAgICBcImRpc2FibGVkXCI6IFwiXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uZW5kRm10KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmVuZEZtdCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ3RvdWNoZW5kJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCd0b3VjaGVuZCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ3RvdWNoZW5kJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmNvbGxpZGUpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1kYW5nZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiZGF0YS1kaXNtaXNzXCI6IFwiYWxlcnRcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCLDl1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDQnLCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaWNvbiBmYSBmYS1iYW5cIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MudG91Y2hlc19jYW50X292ZXJsYXAnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MudG91Y2hfb3ZlcmxhcF93aXRoJykpICsgXCI6XFxuICAgICAgICAgICAgICAgICAgICBcIiksIF9jKCd1bCcsIF92bS5fbCgoX3ZtLmNvbGxpZGVUb3VjaGVzKSwgZnVuY3Rpb24oY29sbGlkZVRvdWNoKSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIFsoY29sbGlkZVRvdWNoLnByZXZpb3VzLmlkICE9IF92bS50b3VjaC5pZCkgPyBfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MudG91Y2hfb3ZlcmxhcF9tc2cnLCB7XG4gICAgICB0aXRsZTogY29sbGlkZVRvdWNoLnByZXZpb3VzLnRleHQsXG4gICAgICBzdGFydDogX3ZtLnRvSEhNTVNTKGNvbGxpZGVUb3VjaC5wcmV2aW91cy5zdGFydCksXG4gICAgICBlbmQ6IF92bS50b0hITU1TUyhjb2xsaWRlVG91Y2gucHJldmlvdXMuZW5kKVxuICAgIH0pKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChjb2xsaWRlVG91Y2guY3VycmVudC5pZCAhPSBfdm0udG91Y2guaWQpID8gX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnRvdWNoX292ZXJsYXBfbXNnJywge1xuICAgICAgdGl0bGU6IGNvbGxpZGVUb3VjaC5jdXJyZW50LnRleHQsXG4gICAgICBzdGFydDogX3ZtLnRvSEhNTVNTKGNvbGxpZGVUb3VjaC5jdXJyZW50LnN0YXJ0KSxcbiAgICAgIGVuZDogX3ZtLnRvSEhNTVNTKGNvbGxpZGVUb3VjaC5jdXJyZW50LmVuZClcbiAgICB9KSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpXSlcbiAgfSkpXSldKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uZW5kSW52YWxpZCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJhbGVydFwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIsOXXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoNCcsIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpY29uIGZhIGZhLWJhblwiXG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy52YWxpZGF0aW9uX2Vycm9yJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnZhbGlkYXRpb25fZW5kX2dyZWF0ZXInKSkgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgdGV4dC1yaWdodFwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3Muc2F2ZScpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlclwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLmNsb3NlKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLmNhbmNlbCcpKSldKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWE3NDlkNjAyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSA0MzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94IGJveC1zb2xpZFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidGltZWxpbmVCb3hcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInB1bGwtcmlnaHQgYm94LXRvb2xzXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICBcInRpdGxlXCI6IFwiWm9vbSBJblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS56b29tSW4oJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXNlYXJjaC1wbHVzXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidG9vbHRpcFwiLFxuICAgICAgXCJ0aXRsZVwiOiBcIlpvb20gT3V0XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnpvb21PdXQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXNlYXJjaC1taW51c1wiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiaWRcIjogXCJ0aW1lbGluZVRvb2dsZXJcIixcbiAgICAgIFwiZGF0YS13aWRnZXRcIjogXCJjb2xsYXBzZVwiLFxuICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRvb2x0aXBcIixcbiAgICAgIFwidGl0bGVcIjogXCJcIixcbiAgICAgIFwiZGF0YS1vcmlnaW5hbC10aXRsZVwiOiBcIkNvbGxhcHNlXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS50b29nbGVPcGVuXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtbWludXNcIlxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNhbGVuZGFyXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdoMycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MudGltZWxpbmUnKSkgKyBcIlxcbiAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ0aW1lbGluZVwiXG4gICAgfVxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZTU2YzgwODRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWU1NmM4MDg0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL3RpbWVsaW5lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01NzkyZjU2YyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5zcGVjdG9yLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI2N2RjNzNmOVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01NzkyZjU2YyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5zcGVjdG9yLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01NzkyZjU2YyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5zcGVjdG9yLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01NzkyZjU2YyEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2luc3BlY3Rvci52dWVcbi8vIG1vZHVsZSBpZCA9IDQzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWY0MjIzZjUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZ3MudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjc0NzE3MjFhXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVmNDIyM2Y1IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YWdzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01ZjQyMjNmNSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFncy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWY0MjIzZjUhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFncy52dWVcbi8vIG1vZHVsZSBpZCA9IDQ0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTI5NDU3NTkwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wbGF5ZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjA2YTJkNTQyXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yOTQ1NzU5MCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGxheWVyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjk0NTc1OTAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BsYXllci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTI5NDU3NTkwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA0NDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00NTA0ZGFlZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFnLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI2NWNiNzFmMlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDUwNGRhZWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ1MDRkYWVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YWcudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00NTA0ZGFlZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZy52dWVcbi8vIG1vZHVsZSBpZCA9IDQ1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU1MzkwMzk3IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90b3VjaGVzTGlzdC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMTZhYWZlOWNcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU1MzkwMzk3IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90b3VjaGVzTGlzdC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU1MzkwMzk3IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90b3VjaGVzTGlzdC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU1MzkwMzk3IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNiODNkMGQhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL25ld1RvdWNoRm9ybS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMzhiMTlhOGNcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9uZXdUb3VjaEZvcm0udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2I4M2QwZCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbmV3VG91Y2hGb3JtLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNiODNkMGQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNiODNkMGQhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL25ld1RvdWNoRm9ybS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNDU0YTkwMGRcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9uZXdUb3VjaEZvcm0udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2I4M2QwZCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vbmV3VG91Y2hGb3JtLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNiODNkMGQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmYxMjRjOWYhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZ0Ryb3Bkb3duLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIzMDNjMWNkNFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmYxMjRjOWYhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZ0Ryb3Bkb3duLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmYxMjRjOWYhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZ0Ryb3Bkb3duLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmYxMjRjOWYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWVcbi8vIG1vZHVsZSBpZCA9IDQ2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWE3NDlkNjAyIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9lZGl0VG91Y2hGb3JtLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJjN2Y5ZGUzNFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTc0OWQ2MDIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2VkaXRUb3VjaEZvcm0udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZWRpdFRvdWNoRm9ybS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWE3NDlkNjAyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSA0NjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vZWRpdFRvdWNoRm9ybS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMjI4OGNiODVcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWE3NDlkNjAyIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9lZGl0VG91Y2hGb3JtLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTc0OWQ2MDIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL2VkaXRUb3VjaEZvcm0udnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZTU2YzgwODQhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RpbWVsaW5lLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIzNTE5MDE1NFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZTU2YzgwODQhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RpbWVsaW5lLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZTU2YzgwODQhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RpbWVsaW5lLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZTU2YzgwODQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL3RpbWVsaW5lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGlkPVwiZ2xvYmFsVGltZWxpbmVCb3hcIiBjbGFzcz1cImJveCBib3gtc29saWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDwhLS0gdG9vbHMgYm94IC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtcmlnaHQgYm94LXRvb2xzXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB2LW9uOmNsaWNrLnByZXZlbnQ9XCJnbG9iYWxab29tSW5cIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlpvb20gSW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zZWFyY2gtcGx1c1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHYtb246Y2xpY2sucHJldmVudD1cImdsb2JhbFpvb21PdXRcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiWm9vbSBPdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zZWFyY2gtbWludXNcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gLy4gdG9vbHMgLS0+XG5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+XG5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5nbG9iYWx0aW1lbGluZScpfX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2dsb2JhbFRpbWVsaW5lJz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlPlxuXG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQge2Rpc3BhdGNoLCBnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcbiAgICBpbXBvcnQgZ2xvYmFsVGltZWxpbmVTa2V0Y2ggZnJvbSAnLi4vc2tldGNoL2dsb2JhbFRpbWVsaW5lU2tldGNoJ1xuICAgIGltcG9ydCBzY291dGluZ3NMb2NhbGVzIGZyb20gJ2Jhc2UvbGFuZy9hZG1pbi9zY291dGluZ3Mvc2NvdXRpbmdzLmpzJztcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBsb2NhbGVzOiBzY291dGluZ3NMb2NhbGVzLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9wZW46IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgICdvcGVuJzogZnVuY3Rpb24gKG9wZW4sIG9sZE9wZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgICAgICAgICBwLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcC5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkKCl7XG5cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgd2luZG93LnAgPSBuZXcgcDUoZ2xvYmFsVGltZWxpbmVTa2V0Y2gpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnbG9iYWxab29tSW4oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKCcqJyk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldEdsb2JhbFRpbWVsaW5lWm9vbScsIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3IgKyAxKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0R2xvYmFsVGltZWxpbmVJbml0aWFsaXplZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnbG9iYWxab29tT3V0KClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZSgnKicpO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5nbG9iYWxUaW1lbGluZS56b29tRmFjdG9yID4gc3RhdGUuZ2xvYmFsVGltZWxpbmUuaW5pdGlhbFpvb21GYWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldEdsb2JhbFRpbWVsaW5lWm9vbScsIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3IgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldEdsb2JhbFRpbWVsaW5lSW5pdGlhbGl6ZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGdsb2JhbFRpbWVsaW5lLnZ1ZT81YjE1ODBkYSIsImltcG9ydCBTdGFnZSBmcm9tICcuL2NvbXBvbmVudHMvdWkvU3RhZ2UnXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9jb21wb25lbnRzL3VpL1RpbWVsaW5lJ1xuaW1wb3J0IFRvdWNoTWFuYWdlciBmcm9tICcuL2NvbXBvbmVudHMvdG91Y2hlcy9Ub3VjaE1hbmFnZXInXG5pbXBvcnQgVmlkZW9UaW1lTWFya2VyIGZyb20gJy4vY29tcG9uZW50cy91aS9WaWRlb1RpbWVNYXJrZXInXG5pbXBvcnQgVG91Y2hTcGVjIGZyb20gJy4vc3BlY3MvdG91Y2hlc1NwZWMnXG5pbXBvcnQge2dldFN0YXRlLCBkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2tldGNoKHApIHtcbiAgICBsZXQgc3RhdGUgPSBudWxsO1xuICAgIHdpbmRvdy5wID0gcDtcbiAgICBwLnNldHVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2xvYmFsVGltZWxpbmUnKS5vZmZzZXRXaWR0aDtcbiAgICAgICAgdmFyIGNhbnZhcyA9IHAuY3JlYXRlQ2FudmFzKHdpZHRoIC0gMjAsIDEzMCk7XG4gICAgICAgIGNhbnZhcy5tb3VzZU1vdmVkKG1vdXNlTW92ZWQpO1xuICAgICAgICBjYW52YXMubW91c2VQcmVzc2VkKG1vdXNlUHJlc3NlZCk7XG4gICAgICAgIHAuY29sb3JNb2RlKHAuUkdCLCAyNTUsIDI1NSwgMjU1LCAxMDApXG4gICAgICAgIHAuZnJhbWVSYXRlKDEwKTtcbiAgICB9O1xuXG4gICAgcC5kcmF3ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNvbmZpZ0J1dHRvbnMoKSB7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tSW4oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFpvb20nLCBzdGF0ZS50aW1lbGluZS56b29tRmFjdG9yICsgMSk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbml0aWFsaXplZCcsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tT3V0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChzdGF0ZS50aW1lbGluZS56b29tRmFjdG9yID4gc3RhdGUudGltZWxpbmUuaW5pdGlhbFpvb21GYWN0b3IpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRab29tJywgc3RhdGUudGltZWxpbmUuem9vbUZhY3RvciAtIDEpO1xuICAgICAgICAgICAgZGlzcGF0Y2goJ3NldEluaXRpYWxpemVkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW91c2VNb3ZlZCgpIHtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlLm1vdXNlT3ZlclRvdWNoKHAubW91c2VYLCBwLm1vdXNlWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGF0ZS50aW1lbGluZS5pbnN0YW5jZS5tb3VzZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwLm1vdXNlRHJhZ2dlZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLnRpbWVsaW5lLmluc3RhbmNlLmRyYWcoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBtb3VzZVByZXNzZWQoKSB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnRvdWNoTWFuYWdlci5pbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnN0YW5jZS5tb3VzZVByZXNzZWRUb3VjaChwLm1vdXNlWCwgcC5tb3VzZVkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdub2xvb3AnKTtcbiAgICAgICAgcC5ub0xvb3AoKTtcbiAgICB9XG5cbiAgICBwLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbG9vcCcpO1xuICAgICAgICBwLmxvb3AoKTtcbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvZ2xvYmFsVGltZWxpbmVTa2V0Y2guanMiLCJpbXBvcnQge2Rpc3BhdGNofSBmcm9tICdtb2Nrc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgZ2xvYmFsVGltZWxpbmVBY3Rpb25zID0ge1xuICAgIHNldEdsb2JhbFRpbWVsaW5lKHN0YXRlLCBpbnN0YW5jZSl7XG4gICAgICAgIHN0YXRlLmdsb2JhbFRpbWVsaW5lLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuICAgIHNldEdsb2JhbFRpbWVsaW5lV2lkdGgoc3RhdGUsIHdpZHRoKXtcbiAgICAgICAgc3RhdGUuZ2xvYmFsVGltZWxpbmUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH0sXG4gICAgc2V0R2xvYmFsVGltZWxpbmVIZWlnaHQoc3RhdGUsIGhlaWdodCl7XG4gICAgICAgIHN0YXRlLmdsb2JhbFRpbWVsaW5lLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEdsb2JhbFRpbWVsaW5lRW5kWScsIHN0YXRlLnRvdWNoTWFuYWdlci5nbG9iYWxUaW1lbGluZS5zdGFydFkgKyBoZWlnaHQpO1xuXG4gICAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfSxcbiAgICBzZXRHbG9iYWxUaW1lbGluZUNhbnZhcyhzdGF0ZSwgY2FudmFzKXtcbiAgICAgICAgc3RhdGUuZ2xvYmFsVGltZWxpbmUuY2FudmFzLmluc3RhbmNlID0gY2FudmFzO1xuICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgIH0sXG4gICAgc2V0R2xvYmFsVGltZWxpbmVWaWRlb01hcmtlcihzdGF0ZSwgdmlkZW9NYXJrZXIpe1xuICAgICAgICBzdGF0ZS5nbG9iYWxUaW1lbGluZS52aWRlb01hcmtlci5pbnN0YW5jZSA9IHZpZGVvTWFya2VyO1xuICAgICAgICByZXR1cm4gdmlkZW9NYXJrZXI7XG4gICAgfSxcbiAgICBzZXRHbG9iYWxUaW1lbGluZUNhbnZhc1dpZHRoKHN0YXRlLCB3aWR0aCl7XG4gICAgICAgIHN0YXRlLmdsb2JhbFRpbWVsaW5lLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfSxcbiAgICBzZXRHbG9iYWxUaW1lbGluZUNhbnZhc0hlaWdodChzdGF0ZSwgaGVpZ2h0KXtcbiAgICAgICAgc3RhdGUuZ2xvYmFsVGltZWxpbmUuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICB9LFxuICAgIHNldEdsb2JhbFRpbWVsaW5lU3RhZ2Uoc3RhdGUsIHN0YWdlKXtcbiAgICAgICAgc3RhdGUuZ2xvYmFsVGltZWxpbmUuc3RhZ2UuaW5zdGFuY2UgPSBzdGFnZTtcbiAgICAgICAgcmV0dXJuIHN0YWdlO1xuICAgIH0sXG4gICAgc2V0R2xvYmFsVGltZWxpbmVUaW1lbGluZShzdGF0ZSwgdGltZWxpbmUpe1xuICAgICAgICBzdGF0ZS5nbG9iYWxUaW1lbGluZS5pbnN0YW5jZSA9IHRpbWVsaW5lO1xuICAgICAgICByZXR1cm4gdGltZWxpbmU7XG4gICAgfSxcbiAgICBzZXRHbG9iYWxUaW1lbGluZVN0YXJ0VGltZShzdGF0ZSwgc3RhcnRUaW1lKXtcbiAgICAgICAgc3RhdGUuZ2xvYmFsVGltZWxpbmUuc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICAgICAgICByZXR1cm4gc3RhcnRUaW1lO1xuICAgIH0sXG4gICAgc2V0R2xvYmFsVGltZWxpbmVTdGFydFkoc3RhdGUsIHN0YXJ0WSl7XG4gICAgICAgIHN0YXRlLmdsb2JhbFRpbWVsaW5lLnN0YXJ0WSA9IHN0YXJ0WTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEdsb2JhbFRpbWVsaW5lTWludXRlc1knLCBzdGFydFkgKyA1KTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEdsb2JhbFRpbWVsaW5lU2Vjb25kc1knLCBzdGFydFkgKyA1NSk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRHbG9iYWxUaW1lbGluZUF4aXNZJywgc3RhcnRZICsgNjApO1xuICAgICAgICByZXR1cm4gc3RhcnRZO1xuICAgIH0sXG4gICAgc2V0R2xvYmFsVGltZWxpbmVBeGlzWShzdGF0ZSwgYXhpc1kpe1xuICAgICAgICBzdGF0ZS5nbG9iYWxUaW1lbGluZS5heGlzWSA9IGF4aXNZO1xuICAgICAgICByZXR1cm4gYXhpc1k7XG4gICAgfSxcbiAgICBzZXRHbG9iYWxUaW1lbGluZUVuZFkoc3RhdGUsIGVuZFkpe1xuICAgICAgICBzdGF0ZS5nbG9iYWxUaW1lbGluZS5lbmRZID0gZW5kWTtcbiAgICAgICAgcmV0dXJuIGVuZFk7XG4gICAgfSxcbiAgICBzZXRHbG9iYWxUaW1lbGluZVN0YXJ0WChzdGF0ZSwgc3RhcnRYKXtcbiAgICAgICAgc3RhdGUuZ2xvYmFsVGltZWxpbmUuc3RhcnRYID0gc3RhcnRYO1xuICAgICAgICByZXR1cm4gc3RhcnRYO1xuICAgIH0sXG4gICAgc2V0R2xvYmFsVGltZWxpbmVFbmRYKHN0YXRlLCBlbmRYKXtcbiAgICAgICAgc3RhdGUuZ2xvYmFsVGltZWxpbmUuZW5kWCA9IGVuZFg7XG4gICAgICAgIHJldHVybiBlbmRYO1xuICAgIH0sXG4gICAgc2V0R2xvYmFsVGltZWxpbmVNaW51dGVzWShzdGF0ZSwgbWludXRlc1kpe1xuICAgICAgICBzdGF0ZS5nbG9iYWxUaW1lbGluZS5taW51dGVzWSA9IG1pbnV0ZXNZO1xuICAgICAgICByZXR1cm4gbWludXRlc1k7XG4gICAgfSxcbiAgICBzZXRHbG9iYWxUaW1lbGluZVNlY29uZHNZKHN0YXRlLCBzZWNvbmRzWSl7XG4gICAgICAgIHN0YXRlLmdsb2JhbFRpbWVsaW5lLnNlY29uZHNZID0gc2Vjb25kc1k7XG4gICAgICAgIHJldHVybiBzZWNvbmRzWTtcbiAgICB9LFxuICAgIHNldEdsb2JhbFRpbWVsaW5lU2Vjb25kV2lkdGgoc3RhdGUsIHNlY29uZFdpZHRoKXtcbiAgICAgICAgc3RhdGUuZ2xvYmFsVGltZWxpbmUuc2Vjb25kV2lkdGggPSBzZWNvbmRXaWR0aDtcbiAgICAgICAgcmV0dXJuIHNlY29uZFdpZHRoO1xuICAgIH0sXG4gICAgc2V0R2xvYmFsVGltZWxpbmVDb2xXaWR0aChzdGF0ZSwgY29sV2lkdGgpe1xuICAgICAgICBzdGF0ZS5nbG9iYWxUaW1lbGluZS5jb2xXaWR0aCA9IGNvbFdpZHRoO1xuICAgICAgICBkaXNwYXRjaCgnc2V0R2xvYmFsVGltZWxpbmVTZWNvbmRXaWR0aCcsIGNvbFdpZHRoIC8gMTApO1xuICAgICAgICByZXR1cm4gY29sV2lkdGg7XG4gICAgfSxcbiAgICBzZXRHbG9iYWxUaW1lbGluZVpvb20oc3RhdGUsIHpvb20pe1xuICAgICAgICBpZiAoc3RhdGUucGxheWVyLmR1cmF0aW9uID4gNDIwKSB7XG4gICAgICAgICAgICBzdGF0ZS5nbG9iYWxUaW1lbGluZS5pbml0aWFsWm9vbUZhY3RvciA9IE1hdGguZmxvb3Ioc3RhdGUucGxheWVyLmR1cmF0aW9uIC8gNDIwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuZ2xvYmFsVGltZWxpbmUuem9vbUZhY3RvciAhPSB6b29tKSB7XG4gICAgICAgICAgICBzdGF0ZS5nbG9iYWxUaW1lbGluZS56b29tRmFjdG9yQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoem9vbSA8IHN0YXRlLmdsb2JhbFRpbWVsaW5lLmluaXRpYWxab29tRmFjdG9yKSB7XG4gICAgICAgICAgICBzdGF0ZS5nbG9iYWxUaW1lbGluZS56b29tRmFjdG9yID0gc3RhdGUuZ2xvYmFsVGltZWxpbmUuaW5pdGlhbFpvb21GYWN0b3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZS5nbG9iYWxUaW1lbGluZS56b29tRmFjdG9yID0gem9vbTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gem9vbTtcbiAgICB9LFxuICAgIHNldEdsb2JhbFRpbWVsaW5lSW5pdGlhbGl6ZWQoc3RhdGUsIGluaXRpYWxpemVkKXtcbiAgICAgICAgc3RhdGUuZ2xvYmFsVGltZWxpbmUuaW5pdGlhbGl6ZWQgPSBpbml0aWFsaXplZDtcbiAgICAgICAgcmV0dXJuIGluaXRpYWxpemVkO1xuICAgIH0sXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3N0b3Jlcy9hY3Rpb25zL2dsb2JhbFRpbWVsaW5lQWN0aW9ucy5qcyIsImltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gJ21vY2tzdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbnNwZWN0b3JBY3Rpb25zID0ge1xuICAgIHNldEluc3BlY3RvcihzdGF0ZSwgaW5zcGVjdG9yKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci5pbnN0YW5jZSA9IGluc3BlY3RvcjtcbiAgICAgICAgcmV0dXJuIGluc3BlY3RvcjtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvcldpZHRoKHN0YXRlLCB3aWR0aCl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9ySGVpZ2h0KHN0YXRlLCBoZWlnaHQpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvckVuZFknLCBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WSArIGhlaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvckNhbnZhcyhzdGF0ZSwgY2FudmFzKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci5jYW52YXMuaW5zdGFuY2UgPSBjYW52YXM7XG4gICAgICAgIHJldHVybiBjYW52YXM7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JWaWRlb01hcmtlcihzdGF0ZSwgdmlkZW9NYXJrZXIpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnZpZGVvTWFya2VyLmluc3RhbmNlID0gdmlkZW9NYXJrZXI7XG4gICAgICAgIHJldHVybiB2aWRlb01hcmtlcjtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvckNhbnZhc1dpZHRoKHN0YXRlLCB3aWR0aCl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvckNhbnZhc0hlaWdodChzdGF0ZSwgaGVpZ2h0KXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9yU3RhZ2Uoc3RhdGUsIHN0YWdlKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci5zdGFnZS5pbnN0YW5jZSA9IHN0YWdlO1xuICAgICAgICByZXR1cm4gc3RhZ2U7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JUaW1lbGluZShzdGF0ZSwgdGltZWxpbmUpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmluc3RhbmNlID0gdGltZWxpbmU7XG4gICAgICAgIHJldHVybiB0aW1lbGluZTtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvclN0YXJ0VGltZShzdGF0ZSwgc3RhcnRUaW1lKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gICAgICAgIHJldHVybiBzdGFydFRpbWU7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JTdGFydFkoc3RhdGUsIHN0YXJ0WSl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZID0gc3RhcnRZO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yTWludXRlc1knLCBzdGFydFkgKyA1KTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvclNlY29uZHNZJywgc3RhcnRZICsgNTUpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yQXhpc1knLCBzdGFydFkgKyA2MCk7XG4gICAgICAgIHJldHVybiBzdGFydFk7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JBeGlzWShzdGF0ZSwgYXhpc1kpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmF4aXNZID0gYXhpc1k7XG4gICAgICAgIHJldHVybiBheGlzWTtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvckVuZFkoc3RhdGUsIGVuZFkpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFkgPSBlbmRZO1xuICAgICAgICByZXR1cm4gZW5kWTtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvclN0YXJ0WChzdGF0ZSwgc3RhcnRYKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFggPSBzdGFydFg7XG4gICAgICAgIHJldHVybiBzdGFydFg7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JFbmRYKHN0YXRlLCBlbmRYKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRYID0gZW5kWDtcbiAgICAgICAgcmV0dXJuIGVuZFg7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JNaW51dGVzWShzdGF0ZSwgbWludXRlc1kpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLm1pbnV0ZXNZID0gbWludXRlc1k7XG4gICAgICAgIHJldHVybiBtaW51dGVzWTtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvclNlY29uZHNZKHN0YXRlLCBzZWNvbmRzWSl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kc1kgPSBzZWNvbmRzWTtcbiAgICAgICAgcmV0dXJuIHNlY29uZHNZO1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9yU2Vjb25kV2lkdGgoc3RhdGUsIHNlY29uZFdpZHRoKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRXaWR0aCA9IHNlY29uZFdpZHRoO1xuICAgICAgICByZXR1cm4gc2Vjb25kV2lkdGg7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JDb2xXaWR0aChzdGF0ZSwgY29sV2lkdGgpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmNvbFdpZHRoID0gY29sV2lkdGg7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JTZWNvbmRXaWR0aCcsIGNvbFdpZHRoIC8gMTApO1xuICAgICAgICByZXR1cm4gY29sV2lkdGg7XG4gICAgfSxcbiAgICBzZXRTZWxlY3RlZEFjdGlvbihzdGF0ZSwgYWN0aW9uKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkQWN0aW9uID0gYWN0aW9uO1xuICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH0sXG4gICAgcmVjb3JkaW5nVG91Y2goc3RhdGUsIHJlY29yZGluZyl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5yZWNvcmRpbmdUb3VjaCA9IHJlY29yZGluZztcbiAgICAgICAgcmV0dXJuIHJlY29yZGluZztcbiAgICB9LFxuICAgIHJlY29yZGluZ0FjdGlvbihzdGF0ZSwgcmVjb3JkaW5nKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnJlY29yZGluZ0FjdGlvbiA9IHJlY29yZGluZztcbiAgICAgICAgcmV0dXJuIHJlY29yZGluZztcbiAgICB9LFxuICAgIGFkZEFjdGlvbihzdGF0ZSwgYWN0aW9uKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfSxcbiAgICBhZGRMZWZ0VGFnKHN0YXRlLCB0YWcpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRBY3Rpb24ubGVmdFRhZ3MucHVzaCh0YWcpO1xuICAgICAgICByZXR1cm4gdGFnO1xuICAgIH0sXG4gICAgYWRkUmlnaHRUYWcoc3RhdGUsIHRhZyl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZEFjdGlvbi5yaWdodFRhZ3MucHVzaCh0YWcpO1xuICAgICAgICByZXR1cm4gdGFnO1xuICAgIH0sXG4gICAgZWRpdEFjdGlvbihzdGF0ZSwgYWN0aW9uKXtcbiAgICAgICAgdmFyIGluZGV4ID0gXy5maW5kSW5kZXgoc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guYWN0aW9ucywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHJldHVybiBvLmlkID09IGFjdGlvbi5pZFxuICAgICAgICB9KTtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guYWN0aW9uc1tpbmRleF0uc3RhcnQgPSBhY3Rpb24uc3RhcnQ7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnNbaW5kZXhdLmVuZCA9IGFjdGlvbi5lbmQ7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnNbaW5kZXhdLmNvbG9yID0gYWN0aW9uLmNvbG9yO1xuICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH0sXG4gICAgcmVtb3ZlQWN0aW9uKHN0YXRlLCBhY3Rpb24pe1xuICAgICAgICB2YXIgaW5kZXggPSBfLmZpbmRJbmRleChzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgcmV0dXJuIG8uaWQgPT0gYWN0aW9uLmlkXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guYWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfSxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc3RvcmVzL2FjdGlvbnMvaW5zcGVjdG9yQWN0aW9ucy5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcImdsb2JhbFRpbWVsaW5lLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zZGRmNWI0MSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvZ2xvYmFsVGltZWxpbmUudnVlXG4vLyBtb2R1bGUgaWQgPSA1NTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTNkZGY1YjQxIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9nbG9iYWxUaW1lbGluZS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2dsb2JhbFRpbWVsaW5lLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTNkZGY1YjQxIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2dsb2JhbFRpbWVsaW5lLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy9nbG9iYWxUaW1lbGluZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBnbG9iYWxUaW1lbGluZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtM2RkZjViNDFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zZGRmNWI0MVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2dsb2JhbFRpbWVsaW5lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveCBib3gtc29saWRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImdsb2JhbFRpbWVsaW5lQm94XCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLXJpZ2h0IGJveC10b29sc1wiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidG9vbHRpcFwiLFxuICAgICAgXCJ0aXRsZVwiOiBcIlpvb20gSW5cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0uZ2xvYmFsWm9vbUluKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1zZWFyY2gtcGx1c1wiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRvb2x0aXBcIixcbiAgICAgIFwidGl0bGVcIjogXCJab29tIE91dFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5nbG9iYWxab29tT3V0KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1zZWFyY2gtbWludXNcIlxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNhbGVuZGFyXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdoMycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MuZ2xvYmFsdGltZWxpbmUnKSkgKyBcIlxcbiAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJnbG9iYWxUaW1lbGluZVwiXG4gICAgfVxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtM2RkZjViNDFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTNkZGY1YjQxIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2dsb2JhbFRpbWVsaW5lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtM2RkZjViNDEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2dsb2JhbFRpbWVsaW5lLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIyY2M1NTk4MlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtM2RkZjViNDEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2dsb2JhbFRpbWVsaW5lLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtM2RkZjViNDEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2dsb2JhbFRpbWVsaW5lLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtM2RkZjViNDEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2dsb2JhbFRpbWVsaW5lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=