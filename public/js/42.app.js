webpackJsonp([42,24],{

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(395)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(276),
  /* template */
  __webpack_require__(359),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/championships/championships.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] championships.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f393a6a", Component.options)
  } else {
    hotAPI.reload("data-v-2f393a6a", Component.options)
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

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _events = __webpack_require__(208);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    locales: _events2.default
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

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"championships.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2f393a6a", module.exports)
  }
}

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(325);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(134)("3a3a27ad", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2f393a6a!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./championships.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2f393a6a!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./championships.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2NoYW1waW9uc2hpcHMvY2hhbXBpb25zaGlwcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYW5nL2FkbWluL2V2ZW50cy9ldmVudHMuanM/ZWU2NSoqKioqIiwid2VicGFjazovLy9jaGFtcGlvbnNoaXBzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2NoYW1waW9uc2hpcHMvY2hhbXBpb25zaGlwcy52dWU/NzkwNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2NoYW1waW9uc2hpcHMvY2hhbXBpb25zaGlwcy52dWU/MjU1MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2NoYW1waW9uc2hpcHMvY2hhbXBpb25zaGlwcy52dWU/ZGI4YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7a0JDL0JlO0FBQ1gsVUFBTTtBQUNGLGtCQUFVO0FBQ04saUJBQUssTUFEQztBQUVOLGlCQUFLLFFBRkM7QUFHTixpQkFBSyx3QkFIQztBQUlOLG9DQUF3QixvQ0FKbEI7QUFLTixvQ0FBd0Isb0NBTGxCO0FBTU4sbUNBQXVCLG9DQU5qQjtBQU9OLG9DQUF3QiwyQ0FQbEI7QUFRTix5QkFBYSx5QkFSUDtBQVNOLG9CQUFRLE1BVEY7QUFVTiwyQkFBZSxhQVZUO0FBV04sNEJBQWdCLGNBWFY7QUFZTixzQkFBVSxRQVpKO0FBYU4sb0JBQVEsTUFiRjtBQWNOLHlCQUFhLFdBZFA7QUFlTix3QkFBWSxVQWZOO0FBZ0JOLHlCQUFhLFdBaEJQO0FBaUJOLHdCQUFZLFVBakJOO0FBa0JOLG9CQUFRLE1BbEJGO0FBbUJOLHFCQUFTLE9BbkJIO0FBb0JOLHVCQUFXLFNBcEJMO0FBcUJOLDZCQUFpQixrQkFyQlg7QUFzQk4sNEJBQWdCLGNBdEJWO0FBdUJOLHNCQUFVLFFBdkJKO0FBd0JOLG1CQUFPLFdBeEJEO0FBeUJOLDhCQUFrQiw0Q0F6Qlo7QUEwQk4sNEJBQWdCLGNBMUJWO0FBMkJOLDBCQUFjLG1CQTNCUjtBQTRCTix1QkFBVyxTQTVCTDtBQTZCTixzQkFBVSxRQTdCSjtBQThCTiw0QkFBZ0I7QUE5QlY7QUFEUixLQURLO0FBbUNYLFVBQU07QUFDRixrQkFBVTtBQUNOLGlCQUFLLFdBREM7QUFFTixpQkFBSyxVQUZDO0FBR04saUJBQUssdUJBSEM7QUFJTixvQ0FBd0IseUNBSmxCO0FBS04sb0NBQXdCLDhDQUxsQjtBQU1OLG1DQUF1Qiw0Q0FOakI7QUFPTixvQ0FBd0IsNENBUGxCO0FBUU4seUJBQWEscUJBUlA7QUFTTixvQkFBUSxRQVRGO0FBVU4sMkJBQWUsYUFWVDtBQVdOLDRCQUFnQixZQVhWO0FBWU4sc0JBQVUsUUFaSjtBQWFOLG9CQUFRLFFBYkY7QUFjTix5QkFBYSxpQkFkUDtBQWVOLHdCQUFZLHVCQWZOO0FBZ0JOLHlCQUFhLGNBaEJQO0FBaUJOLHdCQUFZLFdBakJOO0FBa0JOLG9CQUFRLE1BbEJGO0FBbUJOLHFCQUFTLFNBbkJIO0FBb0JOLHVCQUFXLFVBcEJMO0FBcUJOLDZCQUFpQix1QkFyQlg7QUFzQk4sNEJBQWdCLGNBdEJWO0FBdUJOLHNCQUFVLFlBdkJKO0FBd0JOLG1CQUFPLGNBeEJEO0FBeUJOLDhCQUFrQixpREF6Qlo7QUEwQk4sNEJBQWdCLGlCQTFCVjtBQTJCTiwwQkFBYyx3QkEzQlI7QUE0Qk4sdUJBQVcsV0E1Qkw7QUE2Qk4sc0JBQVUsYUE3Qko7QUE4Qk4sNEJBQWdCO0FBOUJWO0FBRFI7QUFuQ0ssQzs7Ozs7Ozs7Ozs7Ozs7QUNhZjs7Ozs7OztBQUVBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBOzs7QUFHQTtBQUNBLG1EQUFvRCx1R0FBdUc7O0FBRTNKOzs7Ozs7OztBQ1BBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ1RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJqcy80Mi5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMmYzOTNhNmEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NoYW1waW9uc2hpcHMudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jaGFtcGlvbnNoaXBzLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTJmMzkzYTZhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NoYW1waW9uc2hpcHMudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2NoYW1waW9uc2hpcHMvY2hhbXBpb25zaGlwcy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjaGFtcGlvbnNoaXBzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yZjM5M2E2YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJmMzkzYTZhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvY2hhbXBpb25zaGlwcy9jaGFtcGlvbnNoaXBzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTY3XG4vLyBtb2R1bGUgY2h1bmtzID0gNDIiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgXCJlblwiOiB7XG4gICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwibVwiOiBcIk1hbGVcIixcbiAgICAgICAgICAgIFwid1wiOiBcIkZlbWFsZVwiLFxuICAgICAgICAgICAgXCJuXCI6IFwiUHJlZmVyIG5vdCB0byBkaXNjbG9zZVwiLFxuICAgICAgICAgICAgXCJjcmVhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIlRoZSBFdmVudCB3YXMgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgICAgIFwidXBkYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJUaGUgRXZlbnQgd2FzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICAgICAgICBcImRlbGV0ZWRfc3VjY2VzZnVsbHlcIjogXCJUaGUgRXZlbnQgd2FzIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICAgICAgICBcImV2ZW50X3Bvc3Rlcl9kZWxldGVkXCI6IFwiVGhlIGV2ZW50IHBvc3RlciB3YXMgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgICAgIFwibm90X2ZvdW5kXCI6IFwiVGhlIEV2ZW50IGRvZXNuJ3QgZXhpc3RcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5hbWVcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgXCJjaGFtcGlvbnNoaXBcIjogXCJDaGFtcGlvbnNoaXBcIixcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiR2VuZGVyXCIsXG4gICAgICAgICAgICBcImNvZGVcIjogXCJDb2RlXCIsXG4gICAgICAgICAgICBcImluaXRfZGF0ZVwiOiBcIkluaXQgRGF0ZVwiLFxuICAgICAgICAgICAgXCJlbmRfZGF0ZVwiOiBcIkVuZCBEYXRlXCIsXG4gICAgICAgICAgICBcInNwZWNpYWx0eVwiOiBcIlNwZWNpYWx0eVwiLFxuICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIkNhdGVnb3J5XCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJUeXBlXCIsXG4gICAgICAgICAgICBcInJlYWNoXCI6IFwiUmVhY2hcIixcbiAgICAgICAgICAgIFwiYWN0aW9uc1wiOiBcIkFjdGlvbnNcIixcbiAgICAgICAgICAgIFwic2VsZWN0X29wdGlvblwiOiBcIlNlbGVjdCBhbiBvcHRpb25cIixcbiAgICAgICAgICAgIFwidXBsb2FkX2ltYWdlXCI6IFwiVXBsb2FkIGltYWdlXCIsXG4gICAgICAgICAgICBcInVwZGF0ZVwiOiBcIlVwZGF0ZVwiLFxuICAgICAgICAgICAgXCJuZXdcIjogXCJOZXcgRXZlbnRcIixcbiAgICAgICAgICAgIFwiZGVsZXRlX21lc3NhZ2VcIjogXCJBcmUgeW91IHN1cmU/IHRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmVcIixcbiAgICAgICAgICAgIFwiZGVsZXRlX2V2ZW50XCI6IFwiRGVsZXRlIEV2ZW50XCIsXG4gICAgICAgICAgICBcImV2ZW50X2luZm9cIjogXCJFdmVudCBJbmZvcm1hdGlvblwiLFxuICAgICAgICAgICAgXCJzZWVfYWxsXCI6IFwiU2VlIEFsbFwiLFxuICAgICAgICAgICAgXCJzZWxlY3RcIjogXCJTZWxlY3RcIixcbiAgICAgICAgICAgIFwic2VhcmNoX2V2ZW50XCI6IFwiU2VhcmNoIEV2ZW50XCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJlc1wiOiB7XG4gICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwibVwiOiBcIk1hc2N1bGlub1wiLFxuICAgICAgICAgICAgXCJ3XCI6IFwiRmVtZW5pbm9cIixcbiAgICAgICAgICAgIFwiblwiOiBcIlByZWZpZXJvIG5vIHJldmVsYXJsb1wiLFxuICAgICAgICAgICAgXCJjcmVhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIkVsIGV2ZW50byBmdWUgY3JlYWRvIHNhdGlzZmFjdG9yaWFtZW50ZVwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIkVsIGV2ZW50byBmdWUgYWN0dWFsaXphZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXG4gICAgICAgICAgICBcImRlbGV0ZWRfc3VjY2VzZnVsbHlcIjogXCJFbCBldmVudG8gZnVlIGVsaW1pbmFkbyBzYXRpc2ZhY3RvcmlhbWVudGVcIixcbiAgICAgICAgICAgIFwiZXZlbnRfcG9zdGVyX2RlbGV0ZWRcIjogXCJFbCBwb3N0ZXIgZnVlIGVsaW1pbmFkbyBzYXRpc2ZhY3RvcmlhbWVudGVcIixcbiAgICAgICAgICAgIFwibm90X2ZvdW5kXCI6IFwiRWwgZXZlbnRvIG5vIGV4aXN0ZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTm9tYnJlXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcGNpw7NuXCIsXG4gICAgICAgICAgICBcImNoYW1waW9uc2hpcFwiOiBcIkNhbXBlb25hdG9cIixcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiR8OpbmVyb1wiLFxuICAgICAgICAgICAgXCJjb2RlXCI6IFwiQ8OzZGlnb1wiLFxuICAgICAgICAgICAgXCJpbml0X2RhdGVcIjogXCJGZWNoYSBkZSBpbmljaW9cIixcbiAgICAgICAgICAgIFwiZW5kX2RhdGVcIjogXCJGZWNoYSBkZSBmaW5hbGl6YWNpw7NuXCIsXG4gICAgICAgICAgICBcInNwZWNpYWx0eVwiOiBcIkVzcGVjaWFsaWRhZFwiLFxuICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIkNhdGVnb3LDrWFcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIlRpcG9cIixcbiAgICAgICAgICAgIFwicmVhY2hcIjogXCJBbGNhbmNlXCIsXG4gICAgICAgICAgICBcImFjdGlvbnNcIjogXCJBY2Npb25lc1wiLFxuICAgICAgICAgICAgXCJzZWxlY3Rfb3B0aW9uXCI6IFwiU2VsZWNjaW9uZSB1bmEgb3BjacOzblwiLFxuICAgICAgICAgICAgXCJ1cGxvYWRfaW1hZ2VcIjogXCJTdWJpciBJbWFnZW5cIixcbiAgICAgICAgICAgIFwidXBkYXRlXCI6IFwiQWN0dWFsaXphclwiLFxuICAgICAgICAgICAgXCJuZXdcIjogXCJOdWV2byBFdmVudG9cIixcbiAgICAgICAgICAgIFwiZGVsZXRlX21lc3NhZ2VcIjogXCLCv0VzdGFzIFNlZ3Vybz8gZXN0YSBhY2Npw7NuIG5vIHNlIHB1ZWRlIGRlc2hhY2VyXCIsXG4gICAgICAgICAgICBcImRlbGV0ZV9ldmVudFwiOiBcIkVsaW1pbmFyIEV2ZW50b1wiLFxuICAgICAgICAgICAgXCJldmVudF9pbmZvXCI6IFwiSW5mb3JtYWNpw7NuIGRlbCBldmVudG9cIixcbiAgICAgICAgICAgIFwic2VlX2FsbFwiOiBcIlZlciBUb2Rvc1wiLFxuICAgICAgICAgICAgXCJzZWxlY3RcIjogXCJTZWxlY2Npb25hclwiLFxuICAgICAgICAgICAgXCJzZWFyY2hfZXZlbnRcIjogXCJCdXNjYXIgRXZlbnRvXCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9ldmVudHMvZXZlbnRzLmpzIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxyb3V0ZXItdmlldz5cblxuICAgICAgICA8L3JvdXRlci12aWV3PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZT5cblxuPC9zdHlsZT5cbjxzY3JpcHQgdHlwZT1cInRleHQvYmFiZWxcIj5cbiAgICBpbXBvcnQgZXZlbnRMb2NhbGVzIGZyb20gJ2Jhc2UvbGFuZy9hZG1pbi9ldmVudHMvZXZlbnRzLmpzJztcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBsb2NhbGVzOiBldmVudExvY2FsZXMsXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2hhbXBpb25zaGlwcy52dWU/Y2FmY2ZmMmEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJjaGFtcGlvbnNoaXBzLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yZjM5M2E2YSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvY2hhbXBpb25zaGlwcy9jaGFtcGlvbnNoaXBzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzI1XG4vLyBtb2R1bGUgY2h1bmtzID0gNDIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygncm91dGVyLXZpZXcnKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTJmMzkzYTZhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yZjM5M2E2YSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9jaGFtcGlvbnNoaXBzL2NoYW1waW9uc2hpcHMudnVlXG4vLyBtb2R1bGUgaWQgPSAzNTlcbi8vIG1vZHVsZSBjaHVua3MgPSA0MiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMmYzOTNhNmEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NoYW1waW9uc2hpcHMudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjNhM2EyN2FkXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yZjM5M2E2YSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2hhbXBpb25zaGlwcy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTJmMzkzYTZhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jaGFtcGlvbnNoaXBzLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMmYzOTNhNmEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2NoYW1waW9uc2hpcHMvY2hhbXBpb25zaGlwcy52dWVcbi8vIG1vZHVsZSBpZCA9IDM5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDQyIl0sInNvdXJjZVJvb3QiOiIifQ==