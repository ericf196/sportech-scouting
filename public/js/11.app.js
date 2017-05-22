webpackJsonp([11,30],{

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(450)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(309),
  /* template */
  __webpack_require__(409),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\dashboard\\modules\\reports\\view.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] view.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a5ebb37", Component.options)
  } else {
    hotAPI.reload("data-v-4a5ebb37", Component.options)
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

/***/ 245:
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
        return _vue2.default.http.get('/api/reports/' + id).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    create: function create(athlete, successCalback, errorCallback) {
        return _vue2.default.http.post('/api/reports', athlete).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    latest: function latest(successCalback, errorCallback) {
        return _vue2.default.http.get('/api/reports/latest').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    }
};

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "en": {
        "reports": {
            "list": "Reports List",
            "create": "Create Report",
            "created_successfully": "The Report was created successfully",
            "not_found": "The Report doesn't exist",
            "no_scoutings": "You have to add 1 or more scouitngs",
            "name": "Name",
            "add_scouting": "Add Scouting",
            "description": "Description",
            "reports_scoutings": "Report Scoutings",
            "report": "Report",
            "actions": "Actions",
            "scouting_added": "Scouting Added"
        }
    },
    "es": {
        "reports": {
            "list": "Lista de Reportes",
            "create": "Crear Reporte",
            "created_successfully": "El Reporte fue creado satisfactoriamente",
            "not_found": "El Reporte no existe",
            "no_scoutings": "Debes agregar 1 o más scoutings",
            "name": "Nombre",
            "add_scouting": "Añadir Scouting",
            "description": "Descripción",
            "reports_scoutings": "Scoutings del reporte",
            "report": "Reporte",
            "actions": "Acciones",
            "scouting_added": "Scouting Añadido"
        }
    }
};

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uuid = __webpack_require__(243);

var _uuid2 = _interopRequireDefault(_uuid);

var _gaugeOptsStub = __webpack_require__(323);

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

exports.default = {

    props: {
        value: { required: true },
        title: { default: '' },
        color: { required: true }
    },
    watch: {
        value: function value(val) {
            this.gauge.set(val);
        }
    },
    data: function data() {
        return {
            gauge: null,
            opts: {},
            timeoutHandle: null
        };
    },

    computed: {
        elementId: function elementId() {
            return this.generateUUID();
        },
        containerId: function containerId() {
            return this.generateUUID();
        },
        textId: function textId() {
            return this.generateUUID();
        }
    },
    mixins: [_uuid2.default],
    mounted: function mounted() {
        this.draw();
        window.addEventListener('resize', this.redraw);
    },

    methods: {
        draw: function draw() {
            var gaugeLib = __webpack_require__(378);
            var width = document.getElementById(this.containerId).offsetWidth;
            var height = width / 2;
            document.getElementById(this.elementId).setAttribute('width', width + 'px');
            document.getElementById(this.elementId).setAttribute('height', height + 'px');
            this.opts = _.cloneDeep(_gaugeOptsStub.opts);
            this.opts.colorStart = this.color;
            this.gauge = new gaugeLib.Gauge(document.getElementById(this.elementId)).setOptions(this.opts);
            this.gauge.maxValue = 100; // set max gauge value
            this.gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
            this.gauge.animationSpeed = 65; // set animation speed (32 is default value)
            this.gauge.set(this.value); // set actual value
            this.gauge.setTextField(document.getElementById(this.textId));
        },
        redraw: function redraw() {
            document.getElementById(this.elementId).getContext('2d').save();
            document.getElementById(this.elementId).getContext('2d').setTransform(1, 0, 0, 1, 0, 0);
            document.getElementById(this.elementId).getContext('2d').clearRect(0, 0, document.getElementById(this.elementId).getContext('2d').canvas.width, document.getElementById(this.elementId).getContext('2d').canvas.height);
            document.getElementById(this.elementId).getContext('2d').restore();

            if (this.timeoutHandle) window.clearTimeout(this.timeoutHandle);

            this.timeoutHandle = window.setTimeout(this.draw, 250);
        }
    }
};

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pageHeader = __webpack_require__(195);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _gauge = __webpack_require__(379);

var _gauge2 = _interopRequireDefault(_gauge);

var _reports = __webpack_require__(246);

var _reports2 = _interopRequireDefault(_reports);

var _reportService = __webpack_require__(245);

var _reportService2 = _interopRequireDefault(_reportService);

var _reportDataService = __webpack_require__(341);

var _reportDataService2 = _interopRequireDefault(_reportDataService);

var _uuid = __webpack_require__(243);

var _uuid2 = _interopRequireDefault(_uuid);

var _lineOptions = __webpack_require__(326);

var _pieOptions = __webpack_require__(327);

var _barOptions = __webpack_require__(324);

var _gaugeOptions = __webpack_require__(325);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    locales: _reports2.default,
    components: {
        pageHeader: _pageHeader2.default,
        gauge: _gauge2.default
    },
    mixins: [_uuid2.default],
    data: function data() {
        return {
            reports: {},
            pointVsTimeGraphs: [],
            pie: {},
            bar: {},
            counterOffensiveGauge: { data: 0 },
            offensiveGauge: { data: 0 },
            defensiveGauge: { data: 0 },
            effectiveness: {},
            valid: {},
            average: {},
            perfection: {},
            timeConsumed: {}
        };
    },

    computed: {
        breadcrumbs: function breadcrumbs() {
            return [{
                href: '/dashboard',
                title: this.$t('admin.home')
            }, {
                href: '/reports/' + this.$route.params.id,
                title: 'admin.view'
            }];
        }
    },
    created: function created() {
        var _this = this;

        if (!this.$auth.user().superUser) {
            this.$root.errorToast('No tienes permiso para ver el informe');
            this.$router.push({
                name: 'reports.list'
            });
        } else {
            _reportService2.default.show(this.$route.params.id, function (response) {
                _this.report = response.data;
            }, function (error) {
                console.log(error);
            });
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        _reportDataService2.default.pointVsTime(this.$route.params.id, function (response) {
            var data = response;
            var graph = [];
            _.each(data, function (graphData) {
                var line = {
                    id: _this2.generateUUID(),
                    name: graphData.leftAthlete + ' VS ' + graphData.rightAthlete,
                    options: _.cloneDeep(_lineOptions.lineBaseOptions)
                };
                line.options.xAxis.categories = graphData.time;
                line.options.series[0].data = graphData.left;
                line.options.series[1].data = graphData.right;
                line.options.series[0].name = graphData.leftAthlete;
                line.options.series[1].name = graphData.rightAthlete;

                graph.push(line);
            });
            _this2.pointVsTimeGraphs = graph;
            var self = _this2;
            _this2.$nextTick(function () {
                $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                    _.each(self.pointVsTimeGraphs, function (graphData) {
                        self.$refs[graphData.id][0].chart.reflow();
                    });
                });
            });
        }, function (error) {
            console.log(error);
        });

        _reportDataService2.default.offensiveDefensive(this.$route.params.id, function (response) {
            var data = response;
            _this2.counterOffensiveGauge.data = data.counterOffensive.data;
            _this2.offensiveGauge.data = data.offensive.data;
            _this2.defensiveGauge.data = data.defensive.data;
        }, function (error) {
            console.log(error);
        });

        _reportDataService2.default.combatStatus(this.$route.params.id, function (response) {
            var data = response;
            var pie = _.cloneDeep(_pieOptions.pieBaseOptions);
            pie.series[0].data = data;
            _this2.pie = pie;
        }, function (error) {
            console.log(error);
        });
        _reportDataService2.default.parry(this.$route.params.id, function (response) {
            var data = response.data;
            var categories = response.categories;
            var bar = _.cloneDeep(_barOptions.barBaseOptions);
            bar.series[0].data = data;
            bar.xAxis.categories = categories;
            _this2.bar = bar;
        }, function (error) {
            console.log(error);
        });

        _reportDataService2.default.summary(this.$route.params.id, function (response) {
            var data = response;
            _this2.effectiveness = data.effectiveness;
            _this2.valid = data.valid;
            _this2.average = data.average;
            _this2.perfection = data.perfection;
            _this2.timeConsumed = data.consumedTime;
        }, function (error) {
            console.log(error);
        });
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var opts = exports.opts = {
    angle: -0.02, // The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.035, // The thickness
        color: '#000000' // Fill color
    },
    limitMax: false, // If false, the max value of the gauge will be updated if value surpass max
    limitMin: false, // If true, the min value of the gauge will be fixed unless you set it manually
    colorStart: '#6FADCF', // Colors
    colorStop: '#8FC0DA', // just experiment with them
    strokeColor: '#E0E0E0', // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true // High resolution support
};

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var barBaseOptions = exports.barBaseOptions = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Parry'
    },
    xAxis: {
        categories: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
        title: {
            text: 'Body Zone'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Parrys',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Parry Numbers',
        data: [1, 0, 2, 2, 0, 3, 4, 0, 0, 1, 0, 0]
    }]
};

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var gaugeBaseOptions = exports.gaugeBaseOptions = {
    chart: {
        type: 'solidgauge',
        height: 150
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: null,
            y: -70

        },
        stops: [[0.1, '#55BF3B'] // green
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        labels: {
            enabled: false
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: null,
        data: [80],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:13px;color:' + 'black' + '">{y}%</span><br/>',
            y: -25
        },
        tooltip: {
            valueSuffix: '%'
        }
    }],
    title: {
        text: 'Efectividad'
    },

    pane: {
        size: '150%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor: '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    }
};

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var lineBaseOptions = exports.lineBaseOptions = {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Points vs Time'
    },
    xAxis: {
        title: {
            text: 'Time'
        },
        categories: [],
        labels: {
            formatter: function formatter() {
                return this.value + 'min';
            }
        }
    },
    yAxis: {
        title: {
            text: 'Points'
        },
        labels: {
            formatter: function formatter() {
                return this.value + 'pt';
            }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        line: {
            marker: {
                radius: 8,
                lineWidth: 0
            },
            dataLabels: {
                enabled: true,
                color: 'white',
                verticalAlign: 'middle',
                crop: false,
                overflow: 'none',
                style: {
                    fontWeight: 'bold',
                    textOutline: 'none',
                    fontSize: '16px'
                }
            }
        }
    },
    series: [{
        name: 'Pedro Gorrin',
        color: '#ff6600',
        index: 2,
        marker: {
            symbol: 'circle',
            radius: 12

        },
        data: []

    }, {
        name: 'Javier Bastidas',
        color: '#64b5f6',
        index: 1,

        marker: {
            symbol: 'circle',
            radius: 12
        },
        data: []
    }]
};

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var pieBaseOptions = exports.pieBaseOptions = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Combat Status'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: 'black'
                }
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Percent',
        colorByPoint: true,
        data: [{
            name: 'EQUAL',
            y: 20
        }, {
            name: 'UP',
            y: 60
        }, {
            name: 'DOWN',
            y: 20
        }]
    }]
};

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    pointVsTime: function pointVsTime(id, successCalback, errorCallback) {
        return _vue2.default.http.get('/api/reports/' + id + '/point-vs-time').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    offensiveDefensive: function offensiveDefensive(id, successCalback, errorCallback) {
        return _vue2.default.http.get('/api/reports/' + id + '/offensive-defensive').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    combatStatus: function combatStatus(id, successCalback, errorCallback) {
        return _vue2.default.http.get('/api/reports/' + id + '/combat-status').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    parry: function parry(id, successCalback, errorCallback) {
        return _vue2.default.http.get('/api/reports/' + id + '/parry').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    summary: function summary(id, successCalback, errorCallback) {
        return _vue2.default.http.get('/api/reports/' + id + '/summary').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    }
};

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.report {\n    background-color: white;\n}\n.border-right {\n    border-right: 1px solid #666;\n}\n.description-text {\n    font-size: 20px;\n    font-weight: bold;\n}\n.description-percentage {\n    font-size: 15px;\n    font-weight: bold;\n}\n.description-header {\n    font-size: 20px;\n    font-weight: bold;\n}\n\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/reports/view.vue?34a79e8a"],"names":[],"mappings":";AA6KA;IACA,wBAAA;CACA;AAEA;IACA,6BAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA","file":"view.vue","sourcesContent":["<template>\r\n    <div>\r\n        <page-header :title=\"$t('reports.report')\" :breadcrumbs=\"breadcrumbs\"></page-header>\r\n        <section class=\"content report\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-md-10\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-3 col-xs-6\">\r\n                            <div class=\"description-block border-right\">\r\n                                <span class=\"description-text\">EFFECTIVENESS</span>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-6 text-right\">\r\n                                        <h5 class=\"description-header\">{{effectiveness.percentage}}%</h5>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-xs-6 text-left\">\r\n                                        <span class=\"description-percentage text-green\">\r\n                                            {{effectiveness.victories}}V\r\n                                        </span>\r\n                                        <br>\r\n                                        <span class=\"description-percentage text-red\">\r\n                                            {{effectiveness.defeats}}V\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- /.description-block -->\r\n                        </div>\r\n                        <!-- /.col -->\r\n                        <div class=\"col-sm-3 col-xs-6\">\r\n                            <div class=\"description-block border-right\">\r\n                                <span class=\"description-text\">VALID</span>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-6 text-right\">\r\n                                        <h5 class=\"description-header\">{{valid.percentage}}%</h5>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-xs-6 text-left\">\r\n                                        <span class=\"description-percentage text-green\">\r\n                                            {{valid.valid}}\r\n                                        </span>\r\n                                        <br>\r\n                                        <span class=\"description-percentage text-red\">\r\n                                            {{valid.noValid}}\r\n\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- /.description-block -->\r\n                        </div>\r\n                        <!-- /.col -->\r\n                        <div class=\"col-sm-3 col-xs-6\">\r\n                            <div class=\"description-block border-right\">\r\n                                <span class=\"description-text\">AVERAGE</span>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-6 text-right\">\r\n                                        <h5 class=\"description-header\">{{average.percentage}}%</h5>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-xs-6 text-left\">\r\n                                        <span class=\"description-percentage text-green\">\r\n                                            {{average.given}}\r\n                                        </span>\r\n                                        <br>\r\n                                        <span class=\"description-percentage text-red\">\r\n                                            {{average.received}}\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- /.description-block -->\r\n                        </div>\r\n                        <div class=\"col-sm-3 col-xs-6\">\r\n                            <div class=\"description-block border-right\">\r\n                                <span class=\"description-text\">PERFECTION</span>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-6 text-right\">\r\n                                        <h5 class=\"description-header\">{{perfection.percentage}}%</h5>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-xs-6 text-left\">\r\n                                        <span class=\"description-percentage text-green\">\r\n                                            {{perfection.perfect}}\r\n                                        </span>\r\n                                        <br>\r\n                                        <span class=\"description-percentage text-red\">\r\n                                            {{perfection.imperfect}}\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-12 col-md-2\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <div class=\"description-block\">\r\n                                <span class=\"description-text\">TIME CONSUME</span>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-6 text-right\">\r\n                                        <h5 class=\"description-header\">{{timeConsumed.percentage}}%</h5>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-xs-6 text-left\">\r\n                                        <span class=\"description-percentage text-green\">\r\n                                            {{timeConsumed.timeConsumed}}\r\n                                        </span>\r\n                                        <br>\r\n                                        <span class=\"description-percentage text-red\">\r\n                                            {{timeConsumed.timeIdle}}\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- /.description-block -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-md-10\">\r\n                    <div class=\"nav-tabs-custom\">\r\n                        <ul class=\"nav nav-tabs\">\r\n                            <li :class=\"{'active':index == 0}\" v-for=\"(pointVsTimeGraph,index) in pointVsTimeGraphs\">\r\n                                <a :href=\"'#'+pointVsTimeGraph.id\" data-toggle=\"tab\"\r\n                                   aria-expanded=\"false\">\r\n                                    {{pointVsTimeGraph.name}}\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"tab-content\">\r\n                            <div class=\"tab-pane\" :class=\"{'active':index == 0}\" :id=\"pointVsTimeGraph.id\"\r\n                                 v-for=\"(pointVsTimeGraph,index) in pointVsTimeGraphs\">\r\n                                <highcharts :ref=\"pointVsTimeGraph.id\" :options=\"pointVsTimeGraph.options\"></highcharts>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\r\n                            <gauge :value=\"offensiveGauge.data\" color=\"green\" title=\"Counteroffensive\"></gauge>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\r\n                            <gauge :value=\"defensiveGauge.data\" color=\"yellow\" title=\"Defensive\"></gauge>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\r\n                            <gauge :value=\"counterOffensiveGauge.data\" color=\"red\" title=\"Offensive\"></gauge>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-md-8\">\r\n                    <highcharts :options=\"pie\"></highcharts>\r\n                </div>\r\n                <div class=\"col-xs-12 col-md-4\">\r\n                    <highcharts :options=\"bar\"></highcharts>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</template>\r\n<style>\r\n    .report {\r\n        background-color: white;\r\n    }\r\n\r\n    .border-right {\r\n        border-right: 1px solid #666;\r\n    }\r\n\r\n    .description-text {\r\n        font-size: 20px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .description-percentage {\r\n        font-size: 15px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .description-header {\r\n        font-size: 20px;\r\n        font-weight: bold;\r\n    }\r\n\r\n</style>\r\n<script type=\"text/babel\">\r\n    import pageHeader from 'base/components/header/pageHeader.vue'\r\n    import gauge from 'base/components/charts/gauges/gauge.vue'\r\n    import reportsLocales from 'base/lang/admin/reports/reports.js';\r\n    import reportService from 'base/dashboard/services/reports/reportService'\r\n    import reportDataService from 'base/dashboard/services/reports/reportDataService'\r\n    import uuidMixin from 'base/mixins/uuid'\r\n    import {lineBaseOptions} from './stubs/lineOptions'\r\n    import {pieBaseOptions} from './stubs/pieOptions'\r\n    import {barBaseOptions} from './stubs/barOptions'\r\n    import {gaugeBaseOptions} from './stubs/gaugeOptions'\r\n    export default{\r\n        locales: reportsLocales,\r\n        components: {\r\n            pageHeader,\r\n            gauge\r\n        },\r\n        mixins: [uuidMixin],\r\n        data(){\r\n            return {\r\n                reports: {},\r\n                pointVsTimeGraphs: [],\r\n                pie: {},\r\n                bar: {},\r\n                counterOffensiveGauge: {data: 0},\r\n                offensiveGauge: {data: 0},\r\n                defensiveGauge: {data: 0},\r\n                effectiveness: {},\r\n                valid: {},\r\n                average: {},\r\n                perfection: {},\r\n                timeConsumed: {}\r\n            }\r\n        },\r\n        computed: {\r\n            breadcrumbs(){\r\n                return [\r\n                    {\r\n                        href: '/dashboard',\r\n                        title: this.$t('admin.home')\r\n                    },\r\n                    {\r\n                        href: '/reports/' + this.$route.params.id,\r\n                        title: 'admin.view'\r\n                    }\r\n                ]\r\n            },\r\n        },\r\n        created(){\r\n            if (!this.$auth.user().superUser) {\r\n                this.$root.errorToast('No tienes permiso para ver el informe');\r\n                this.$router.push({\r\n                    name: 'reports.list',\r\n                })\r\n            } else {\r\n                reportService.show(this.$route.params.id,\r\n                        (response)=> {\r\n                            this.report = response.data;\r\n                        },\r\n                        (error)=> {\r\n                            console.log(error);\r\n                        })\r\n            }\r\n        },\r\n        mounted(){\r\n            reportDataService.pointVsTime(this.$route.params.id,\r\n                    (response)=> {\r\n                        var data = response;\r\n                        var graph = [];\r\n                        _.each(data, (graphData) => {\r\n                            var line = {\r\n                                id: this.generateUUID(),\r\n                                name: graphData.leftAthlete + ' VS ' + graphData.rightAthlete,\r\n                                options: _.cloneDeep(lineBaseOptions),\r\n                            }\r\n                            line.options.xAxis.categories = graphData.time;\r\n                            line.options.series[0].data = graphData.left;\r\n                            line.options.series[1].data = graphData.right;\r\n                            line.options.series[0].name = graphData.leftAthlete;\r\n                            line.options.series[1].name = graphData.rightAthlete;\r\n\r\n                            graph.push(line);\r\n                        });\r\n                        this.pointVsTimeGraphs = graph;\r\n                        var self = this;\r\n                        this.$nextTick(()=> {\r\n                            $('a[data-toggle=\"tab\"]').on('shown.bs.tab', (e)=> {\r\n                                _.each(self.pointVsTimeGraphs, (graphData) => {\r\n                                    self.$refs[graphData.id][0].chart.reflow();\r\n                                });\r\n                            });\r\n                        })\r\n                    },\r\n                    (error)=> {\r\n                        console.log(error);\r\n                    });\r\n\r\n            reportDataService.offensiveDefensive(this.$route.params.id,\r\n                    (response)=> {\r\n                        var data = response;\r\n                        this.counterOffensiveGauge.data = data.counterOffensive.data;\r\n                        this.offensiveGauge.data = data.offensive.data;\r\n                        this.defensiveGauge.data = data.defensive.data;\r\n                    },\r\n                    (error)=> {\r\n                        console.log(error);\r\n                    })\r\n\r\n            reportDataService.combatStatus(this.$route.params.id,\r\n                    (response)=> {\r\n                        var data = response;\r\n                        var pie = _.cloneDeep(pieBaseOptions);\r\n                        pie.series[0].data = data;\r\n                        this.pie = pie;\r\n                    },\r\n                    (error)=> {\r\n                        console.log(error);\r\n                    })\r\n            reportDataService.parry(this.$route.params.id,\r\n                    (response)=> {\r\n                        var data = response.data;\r\n                        var categories = response.categories;\r\n                        var bar = _.cloneDeep(barBaseOptions);\r\n                        bar.series[0].data = data;\r\n                        bar.xAxis.categories = categories;\r\n                        this.bar = bar;\r\n                    },\r\n                    (error)=> {\r\n                        console.log(error);\r\n                    })\r\n\r\n            reportDataService.summary(this.$route.params.id,\r\n                    (response)=> {\r\n                        var data = response;\r\n                        this.effectiveness = data.effectiveness;\r\n                        this.valid = data.valid;\r\n                        this.average = data.average;\r\n                        this.perfection = data.perfection;\r\n                        this.timeConsumed = data.consumedTime\r\n                    },\r\n                    (error)=> {\r\n                        console.log(error);\r\n                    })\r\n        }\r\n    }\r\n</script>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.gauge {\n    background-color: white;\n}\n.goal-wrapper {\n    font-size: 16px;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/charts/gauges/gauge.vue?7b96997a"],"names":[],"mappings":";AAaA;IACA,wBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA","file":"gauge.vue","sourcesContent":["<template>\r\n    <div :id=\"containerId\" class=\"gauge\">\r\n        <h4 class=\"text-center\"><b>{{title}}</b></h4>\r\n        <canvas :id=\"elementId\"></canvas>\r\n        <div class=\"goal-wrapper clearfix\">\r\n            <span :id=\"textId\" class=\"gauge-value pull-left\"></span>\r\n            <span class=\"gauge-value pull-left\">%</span>\r\n            <span id=\"goal-text\" class=\"goal-value pull-right\">100%</span>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<style>\r\n    .gauge {\r\n        background-color: white;\r\n    }\r\n\r\n    .goal-wrapper {\r\n        font-size: 16px;\r\n        font-weight: bold;\r\n    }\r\n</style>\r\n<script>\r\n    import uuidMixin from 'base/mixins/uuid'\r\n    import {opts} from './stubs/gaugeOptsStub'\r\n    export default{\r\n\r\n        props: {\r\n            value: {required: true},\r\n            title: {default: ''},\r\n            color: {required: true}\r\n        },\r\n        watch: {\r\n            value: function (val) {\r\n                this.gauge.set(val);\r\n            }\r\n        },\r\n        data(){\r\n            return {\r\n                gauge: null,\r\n                opts: {},\r\n                timeoutHandle: null\r\n            }\r\n        },\r\n        computed: {\r\n            elementId(){\r\n                return this.generateUUID()\r\n            },\r\n            containerId(){\r\n                return this.generateUUID()\r\n            },\r\n            textId(){\r\n                return this.generateUUID()\r\n            }\r\n        },\r\n        mixins: [uuidMixin],\r\n        mounted(){\r\n            this.draw();\r\n            window.addEventListener('resize', this.redraw);\r\n        },\r\n        methods: {\r\n            draw() {\r\n                var gaugeLib = require('gauge.js');\r\n                var width = document.getElementById(this.containerId).offsetWidth;\r\n                var height = width / 2;\r\n                document.getElementById(this.elementId).setAttribute('width', width + 'px');\r\n                document.getElementById(this.elementId).setAttribute('height', height + 'px');\r\n                this.opts = _.cloneDeep(opts);\r\n                this.opts.colorStart = this.color;\r\n                this.gauge = new gaugeLib.Gauge(document.getElementById(this.elementId)).setOptions(this.opts);\r\n                this.gauge.maxValue = 100; // set max gauge value\r\n                this.gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0\r\n                this.gauge.animationSpeed = 65; // set animation speed (32 is default value)\r\n                this.gauge.set(this.value); // set actual value\r\n                this.gauge.setTextField(document.getElementById(this.textId));\r\n            },\r\n            redraw() {\r\n                document.getElementById(this.elementId).getContext('2d').save();\r\n                document.getElementById(this.elementId).getContext('2d').setTransform(1, 0, 0, 1, 0, 0);\r\n                document.getElementById(this.elementId).getContext('2d').clearRect(0, 0, document.getElementById(this.elementId).getContext('2d').canvas.width, document.getElementById(this.elementId).getContext('2d').canvas.height);\r\n                document.getElementById(this.elementId).getContext('2d').restore();\r\n\r\n                if (this.timeoutHandle)\r\n                    window.clearTimeout(this.timeoutHandle);\r\n\r\n                this.timeoutHandle = window.setTimeout(this.draw, 250);\r\n            }\r\n        }\r\n    }\r\n</script>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * gauge.js
 * Copyright(c) 2015 Vladimir Rodkin <mail@vovanr.com>
 * MIT Licensed
 */

(function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Gauge = factory();
    }
}(this, function () {

    'use strict';

    var template = '<svg version="1.1" width="100%" height="100%" ' +
        'preserveAspectRatio="xMidYMid meet" viewBox="-50 -50 100 100">' +
        '<defs>' +
            '<g id="gauge-mark" class="gauge-mark">' +
                '<line x1="0" y1="-40.5" x2="0" y2="-40.75" />' +
            '</g>' +

            '<g id="gauge-tick" class="gauge-tick">' +
                '<line x1="0" y1="-40.5" x2="0" y2="-41.5" />' +
            '</g>' +
        '</defs>' +

        '<g class="gauge-marks"></g>' +
        '<g class="gauge-ticks"></g>' +
        '<g class="gauge-labels"></g>' +

        '<g class="gauge-scale-arc"></g>' +
        '<g class="gauge-scale-arc-warning"></g>' +
        '<g class="gauge-scale-arc-danger"></g>' +

        '<g class="gauge-hand">' +
            '<polygon points="-1,0 0,-41 1,0" />' +
            '<circle cx="0" cy="0" r="2" />' +
        '</g>' +
    '</svg>';

    var Gauge;

    /**
     * @param {Object} o Options
     * @param {HTMLElement} o.block
     * @param {Number} o.actualValue
     * @param {Array} o.labels
     * @param {Number} [o.maxValue]
     * @param {Number} [o.warningValue] in percents
     * @param {Number} [o.dangerValue] in percentes
     * @constructor
     * @module Gauge
     */
    Gauge = function (o) {
        this._block = o.block;
        this._actualValue = o.actualValue;
        this._labels = o.labels;
        this._maxValue = o.maxValue || this._labels[this._labels.length - 1];
        this._warningValue = o.warningValue;
        this._dangerValue = o.dangerValue;

        this._delta = 100 / this._maxValue;

        this._render();
    };

    Gauge.prototype = {
        /**
         * @private
         */
        _render: function () {
            this._block.innerHTML = template;
            this._renderHand();
            this._renderTicks();
            this._renderMarks();
            this._renderTicksLabels();
            this._renderArcScale();
            if (this._warningValue !== undefined) {
                this._renderArcWarning();
            }
            if (this._dangerValue !== undefined) {
                this._renderArcDanger();
            }
        },

        /**
         * @param {Number} value
         * @return {Number} degree
         * @private
         */
        _valueToDegree: function (value) {
            // -120 deg - excluded part
            // -210 deg - rotate start to simmetrical view
            return (value / this._maxValue * (360 - 120)) - 210;
        },

        /**
         * @param {Number} value
         * @param {Number} radius
         * @return {Object} position
         * @private
         */
        _valueToPosition: function (value, radius) {
            var a = this._valueToDegree(value) * Math.PI / 180;
            var x = radius * Math.cos(a);
            var y = radius * Math.sin(a);

            return {
                x: x,
                y: y,
            };
        },

        /**
         * @param {Number} percent
         * @return {Number} value
         * @private
         */
        _percentToValue: function (percent) {
            return percent / this._delta;
        },

        /**
         * @private
         */
        _renderHand: function () {
            this._hand = $('.gauge-hand', this._block)[0];
            this._setValue(this._actualValue);
        },

        /**
         * @private
         */
        _setValue: function () {
            this._hand.style.transform = 'rotate(' + (this._valueToDegree(this._actualValue) + 90) + 'deg)';
        },

        /**
         * @param {Number} value
         * @public
         */
        setValue: function (value) {
            this._actualValue = value;
            this._setValue();
        },

        /**
         * @private
         */
        _renderTicks: function () {
            var ticksCache = '';
            var ticks = $('.gauge-ticks', this._block)[0];

            var total = this._labels.length - 1;
            for (var value = 0; value <= total; value++) {
                ticksCache += this._buildTick(value);
            }

            ticks.innerHTML = ticksCache;
        },

        /**
         * @return {String}
         * @private
         */
        _buildTick: function (value) {
            return '<use xlink:href="#gauge-tick" transform="rotate(' + (this._valueToDegree(value) + 90) + ')" />';
        },

        /**
         * @private
         */
        _renderTicksLabels: function () {
            var labelsCache = '';
            var labels = $('.gauge-labels', this._block)[0];

            var total = this._labels.length - 1;
            for (var value = 0; value <= total; value++) {
                labelsCache += this._buildTickLabel(value);
            }

            labels.innerHTML = labelsCache;
        },

        /**
         * @param {Number} value
         * @return {String}
         * @private
         */
        _buildTickLabel: function (value) {
            var position = this._valueToPosition(value, 43);

            return '<text x="' + position.x + '" y="' + position.y + '" text-anchor="middle">' +
                this._labels[value] + '</text>';
        },

        /**
         * @private
         */
        _renderMarks: function () {
            var marksCache = '';
            var marks = $('.gauge-marks', this._block)[0];

            var total = (this._labels.length - 1) * 10;
            for (var value = 0; value <= total; value++) {
                // Skip marks on ticks
                if (value % 10 === 0) {
                    continue;
                }
                marksCache += this._buildMark(value / 10);
            }

            marks.innerHTML = marksCache;
        },

        /**
         * @return {String}
         * @private
         */
        _buildMark: function (value) {
            return '<use xlink:href="#gauge-mark" transform="rotate(' + (this._valueToDegree(value) + 90) + ')" />';
        },

        /**
         * @private
         */
        _renderArcScale: function () {
            var max = 100;

            if (this._dangerValue) {
                max = this._dangerValue;
            }

            if (this._warningValue) {
                max = this._warningValue;
            }

            var group = $('.gauge-scale-arc', this._block)[0];
            var arc = this._buildArc(0, max, 39);

            group.innerHTML = arc;
        },

        /**
         * @private
         */
        _renderArcWarning: function () {
            var max = 100;

            if (this._dangerValue) {
                max = this._dangerValue;
            }

            var group = $('.gauge-scale-arc-warning', this._block)[0];
            var arc = this._buildArc(this._warningValue, max, 39);

            group.innerHTML = arc;
        },

        /**
         * @private
         */
        _renderArcDanger: function () {
            var group = $('.gauge-scale-arc-danger', this._block)[0];
            var arc = this._buildArc(this._dangerValue, 100, 39);

            group.innerHTML = arc;
        },

        /**
         * @param {Number} min in percents
         * @param {Number} max in percents
         * @param {Number} radius
         * @return {String}
         * @private
         */
        _buildArc: function (min, max, radius) {
            min = this._percentToValue(min);
            max = this._percentToValue(max);
            var positionStart = this._valueToPosition(min, radius);
            var positionEnd = this._valueToPosition(max, radius);
            var alpha = (360 - 120) / this._maxValue * (max - min);
            var arc = '<path d="M' + positionStart.x + ',' + positionStart.y +
                ' A' + radius + ',' + radius + ' 0 ' +
                ((alpha > 180) ? 1 : 0) + ',1 ' +
                positionEnd.x + ',' + positionEnd.y +
                '" style="fill: none;" />';

            return arc;
        },

        /**
         * @public
         */
        destroy: function () {
            console.log('destroy');
        },
    };

    return Gauge;

}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(453)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(281),
  /* template */
  __webpack_require__(415),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\components\\charts\\gauges\\gauge.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] gauge.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a7865a0", Component.options)
  } else {
    hotAPI.reload("data-v-6a7865a0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-header', {
    attrs: {
      "title": _vm.$t('reports.report'),
      "breadcrumbs": _vm.breadcrumbs
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "content report"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-10"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-3 col-xs-6"
  }, [_c('div', {
    staticClass: "description-block border-right"
  }, [_c('span', {
    staticClass: "description-text"
  }, [_vm._v("EFFECTIVENESS")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-6 text-right"
  }, [_c('h5', {
    staticClass: "description-header"
  }, [_vm._v(_vm._s(_vm.effectiveness.percentage) + "%")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6 text-left"
  }, [_c('span', {
    staticClass: "description-percentage text-green"
  }, [_vm._v("\n                                        " + _vm._s(_vm.effectiveness.victories) + "V\n                                    ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
    staticClass: "description-percentage text-red"
  }, [_vm._v("\n                                        " + _vm._s(_vm.effectiveness.defeats) + "V\n                                    ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3 col-xs-6"
  }, [_c('div', {
    staticClass: "description-block border-right"
  }, [_c('span', {
    staticClass: "description-text"
  }, [_vm._v("VALID")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-6 text-right"
  }, [_c('h5', {
    staticClass: "description-header"
  }, [_vm._v(_vm._s(_vm.valid.percentage) + "%")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6 text-left"
  }, [_c('span', {
    staticClass: "description-percentage text-green"
  }, [_vm._v("\n                                        " + _vm._s(_vm.valid.valid) + "\n                                    ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
    staticClass: "description-percentage text-red"
  }, [_vm._v("\n                                        " + _vm._s(_vm.valid.noValid) + "\n\n                                    ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3 col-xs-6"
  }, [_c('div', {
    staticClass: "description-block border-right"
  }, [_c('span', {
    staticClass: "description-text"
  }, [_vm._v("AVERAGE")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-6 text-right"
  }, [_c('h5', {
    staticClass: "description-header"
  }, [_vm._v(_vm._s(_vm.average.percentage) + "%")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6 text-left"
  }, [_c('span', {
    staticClass: "description-percentage text-green"
  }, [_vm._v("\n                                        " + _vm._s(_vm.average.given) + "\n                                    ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
    staticClass: "description-percentage text-red"
  }, [_vm._v("\n                                        " + _vm._s(_vm.average.received) + "\n                                    ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3 col-xs-6"
  }, [_c('div', {
    staticClass: "description-block border-right"
  }, [_c('span', {
    staticClass: "description-text"
  }, [_vm._v("PERFECTION")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-6 text-right"
  }, [_c('h5', {
    staticClass: "description-header"
  }, [_vm._v(_vm._s(_vm.perfection.percentage) + "%")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6 text-left"
  }, [_c('span', {
    staticClass: "description-percentage text-green"
  }, [_vm._v("\n                                        " + _vm._s(_vm.perfection.perfect) + "\n                                    ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
    staticClass: "description-percentage text-red"
  }, [_vm._v("\n                                        " + _vm._s(_vm.perfection.imperfect) + "\n                                    ")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-2"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "description-block"
  }, [_c('span', {
    staticClass: "description-text"
  }, [_vm._v("TIME CONSUME")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-6 text-right"
  }, [_c('h5', {
    staticClass: "description-header"
  }, [_vm._v(_vm._s(_vm.timeConsumed.percentage) + "%")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6 text-left"
  }, [_c('span', {
    staticClass: "description-percentage text-green"
  }, [_vm._v("\n                                        " + _vm._s(_vm.timeConsumed.timeConsumed) + "\n                                    ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
    staticClass: "description-percentage text-red"
  }, [_vm._v("\n                                        " + _vm._s(_vm.timeConsumed.timeIdle) + "\n                                    ")])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-10"
  }, [_c('div', {
    staticClass: "nav-tabs-custom"
  }, [_c('ul', {
    staticClass: "nav nav-tabs"
  }, _vm._l((_vm.pointVsTimeGraphs), function(pointVsTimeGraph, index) {
    return _c('li', {
      class: {
        'active': index == 0
      }
    }, [_c('a', {
      attrs: {
        "href": '#' + pointVsTimeGraph.id,
        "data-toggle": "tab",
        "aria-expanded": "false"
      }
    }, [_vm._v("\n                                " + _vm._s(pointVsTimeGraph.name) + "\n                            ")])])
  })), _vm._v(" "), _c('div', {
    staticClass: "tab-content"
  }, _vm._l((_vm.pointVsTimeGraphs), function(pointVsTimeGraph, index) {
    return _c('div', {
      staticClass: "tab-pane",
      class: {
        'active': index == 0
      },
      attrs: {
        "id": pointVsTimeGraph.id
      }
    }, [_c('highcharts', {
      ref: pointVsTimeGraph.id,
      refInFor: true,
      attrs: {
        "options": pointVsTimeGraph.options
      }
    })], 1)
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-10 col-md-offset-1"
  }, [_c('gauge', {
    attrs: {
      "value": _vm.offensiveGauge.data,
      "color": "green",
      "title": "Counteroffensive"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-10 col-md-offset-1"
  }, [_c('gauge', {
    attrs: {
      "value": _vm.defensiveGauge.data,
      "color": "yellow",
      "title": "Defensive"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-10 col-md-offset-1"
  }, [_c('gauge', {
    attrs: {
      "value": _vm.counterOffensiveGauge.data,
      "color": "red",
      "title": "Offensive"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-8"
  }, [_c('highcharts', {
    attrs: {
      "options": _vm.pie
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-4"
  }, [_c('highcharts', {
    attrs: {
      "options": _vm.bar
    }
  })], 1)])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4a5ebb37", module.exports)
  }
}

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "gauge",
    attrs: {
      "id": _vm.containerId
    }
  }, [_c('h4', {
    staticClass: "text-center"
  }, [_c('b', [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c('canvas', {
    attrs: {
      "id": _vm.elementId
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "goal-wrapper clearfix"
  }, [_c('span', {
    staticClass: "gauge-value pull-left",
    attrs: {
      "id": _vm.textId
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "gauge-value pull-left"
  }, [_vm._v("%")]), _vm._v(" "), _c('span', {
    staticClass: "goal-value pull-right",
    attrs: {
      "id": "goal-text"
    }
  }, [_vm._v("100%")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6a7865a0", module.exports)
  }
}

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(362);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("604b4d22", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4a5ebb37!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./view.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4a5ebb37!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./view.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(365);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("108cb3bb", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6a7865a0!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./gauge.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6a7865a0!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./gauge.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT82YjhlKioqKioqKioqKiIsIndlYnBhY2s6Ly8vcGFnZUhlYWRlci52dWU/M2QwNyoqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT9jYWUyKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT81ZDk4KioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT9hNjI3KioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdXVpZC5qcz9hMGM4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0U2VydmljZS5qcz84YzIzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9yZXBvcnRzL3JlcG9ydHMuanM/ZDcyZiIsIndlYnBhY2s6Ly8vZ2F1Z2UudnVlIiwid2VicGFjazovLy92aWV3LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9zdHVicy9nYXVnZU9wdHNTdHViLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy9zdHVicy9iYXJPcHRpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy9zdHVicy9nYXVnZU9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3N0dWJzL2xpbmVPcHRpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy9zdHVicy9waWVPcHRpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0RGF0YVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3ZpZXcudnVlP2MzZjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlP2NiM2MiLCJ3ZWJwYWNrOi8vLy4vfi9nYXVnZS5qcy9kaXN0L2dhdWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWU/Y2YzNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWU/NjM2MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWU/NTNiMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWU/ZWRkMyJdLCJuYW1lcyI6WyJtZXRob2RzIiwiZ2VuZXJhdGVVVUlEIiwiZCIsIkRhdGUiLCJnZXRUaW1lIiwid2luZG93IiwicGVyZm9ybWFuY2UiLCJub3ciLCJ1dWlkIiwicmVwbGFjZSIsImMiLCJyIiwiTWF0aCIsInJhbmRvbSIsImZsb29yIiwidG9TdHJpbmciLCJzaG93IiwiaWQiLCJzdWNjZXNzQ2FsYmFjayIsImVycm9yQ2FsbGJhY2siLCJodHRwIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiYm9keSIsImNhdGNoIiwiZXJyb3IiLCJjcmVhdGUiLCJhdGhsZXRlIiwicG9zdCIsImxhdGVzdCIsIm9wdHMiLCJhbmdsZSIsImxpbmVXaWR0aCIsInJhZGl1c1NjYWxlIiwicG9pbnRlciIsImxlbmd0aCIsInN0cm9rZVdpZHRoIiwiY29sb3IiLCJsaW1pdE1heCIsImxpbWl0TWluIiwiY29sb3JTdGFydCIsImNvbG9yU3RvcCIsInN0cm9rZUNvbG9yIiwiZ2VuZXJhdGVHcmFkaWVudCIsImhpZ2hEcGlTdXBwb3J0IiwiYmFyQmFzZU9wdGlvbnMiLCJjaGFydCIsInR5cGUiLCJ0aXRsZSIsInRleHQiLCJ4QXhpcyIsImNhdGVnb3JpZXMiLCJ5QXhpcyIsIm1pbiIsImFsaWduIiwibGFiZWxzIiwib3ZlcmZsb3ciLCJwbG90T3B0aW9ucyIsImJhciIsImRhdGFMYWJlbHMiLCJlbmFibGVkIiwibGVnZW5kIiwibGF5b3V0IiwidmVydGljYWxBbGlnbiIsIngiLCJ5IiwiZmxvYXRpbmciLCJib3JkZXJXaWR0aCIsImJhY2tncm91bmRDb2xvciIsInNoYWRvdyIsImNyZWRpdHMiLCJzZXJpZXMiLCJuYW1lIiwiZGF0YSIsImdhdWdlQmFzZU9wdGlvbnMiLCJoZWlnaHQiLCJtYXgiLCJzdG9wcyIsIm1pbm9yVGlja0ludGVydmFsIiwidGlja0Ftb3VudCIsImZvcm1hdCIsInRvb2x0aXAiLCJ2YWx1ZVN1ZmZpeCIsInBhbmUiLCJzaXplIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiYmFja2dyb3VuZCIsImlubmVyUmFkaXVzIiwib3V0ZXJSYWRpdXMiLCJzaGFwZSIsInNvbGlkZ2F1Z2UiLCJ1c2VIVE1MIiwibGluZUJhc2VPcHRpb25zIiwiZm9ybWF0dGVyIiwidmFsdWUiLCJjcm9zc2hhaXJzIiwic2hhcmVkIiwibGluZSIsIm1hcmtlciIsInJhZGl1cyIsImNyb3AiLCJzdHlsZSIsImZvbnRXZWlnaHQiLCJ0ZXh0T3V0bGluZSIsImZvbnRTaXplIiwiaW5kZXgiLCJzeW1ib2wiLCJwaWVCYXNlT3B0aW9ucyIsInBsb3RCYWNrZ3JvdW5kQ29sb3IiLCJwbG90Qm9yZGVyV2lkdGgiLCJwbG90U2hhZG93IiwicG9pbnRGb3JtYXQiLCJwaWUiLCJhbGxvd1BvaW50U2VsZWN0IiwiY3Vyc29yIiwic2hvd0luTGVnZW5kIiwiY29sb3JCeVBvaW50IiwicG9pbnRWc1RpbWUiLCJvZmZlbnNpdmVEZWZlbnNpdmUiLCJjb21iYXRTdGF0dXMiLCJwYXJyeSIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTs7Ozs7a0JBSUE7c0JBRUE7QUFIQTs7a0JBS0E7eUNBQ0E7dUJBQ0E7QUFHQTtBQU5BO0FBTEE7QUFEQSxFOzs7Ozs7O0FDdkJBO0FBQ0E7OztBQUdBO0FBQ0EsMENBQTJDLGlCQUFpQix3QkFBd0IsR0FBRyxzQkFBc0IsdUJBQXVCLEdBQUc7O0FBRXZJOzs7Ozs7OztBQ1BBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDckJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7Ozs7Ozs7OztrQkNwQmU7QUFDWEEsYUFBUztBQUNMQyxvQkFESywwQkFDVTtBQUNYLGdCQUFJQyxJQUFJLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFSO0FBQ0EsZ0JBQUlDLE9BQU9DLFdBQVAsSUFBc0IsT0FBT0QsT0FBT0MsV0FBUCxDQUFtQkMsR0FBMUIsS0FBa0MsVUFBNUQsRUFBd0U7QUFDcEVMLHFCQUFLSSxZQUFZQyxHQUFaLEVBQUwsQ0FEb0UsQ0FDNUM7QUFDM0I7QUFDRCxnQkFBSUMsT0FBTyx1Q0FBdUNDLE9BQXZDLENBQStDLE9BQS9DLEVBQXdELFVBQVVDLENBQVYsRUFBYTtBQUM1RSxvQkFBSUMsSUFBSSxDQUFDVCxJQUFJVSxLQUFLQyxNQUFMLEtBQWdCLEVBQXJCLElBQTJCLEVBQTNCLEdBQWdDLENBQXhDO0FBQ0FYLG9CQUFJVSxLQUFLRSxLQUFMLENBQVdaLElBQUksRUFBZixDQUFKO0FBQ0EsdUJBQU8sQ0FBQ1EsS0FBSyxHQUFMLEdBQVdDLENBQVgsR0FBZ0JBLElBQUksR0FBSixHQUFVLEdBQTNCLEVBQWlDSSxRQUFqQyxDQUEwQyxFQUExQyxDQUFQO0FBQ0gsYUFKVSxDQUFYO0FBS0EsbUJBQU9QLElBQVA7QUFDSDtBQVpJO0FBREUsQzs7Ozs7Ozs7Ozs7Ozs7QUNBZjs7Ozs7O2tCQUVlO0FBQ1hRLFFBRFcsZ0JBQ05DLEVBRE0sRUFDRkMsY0FERSxFQUNjQyxhQURkLEVBQzRCO0FBQ25DLGVBQU8sY0FBSUMsSUFBSixDQUFTQyxHQUFULENBQWEsa0JBQWtCSixFQUEvQixFQUNGSyxJQURFLENBQ0csVUFBQ0MsUUFBRDtBQUFBLG1CQUFjTCxlQUFlSyxTQUFTQyxJQUF4QixDQUFkO0FBQUEsU0FESCxFQUVGQyxLQUZFLENBRUksVUFBQ0MsS0FBRDtBQUFBLG1CQUFXUCxjQUFjTyxLQUFkLENBQVg7QUFBQSxTQUZKLENBQVA7QUFHSCxLQUxVO0FBTVhDLFVBTlcsa0JBTUpDLE9BTkksRUFNS1YsY0FOTCxFQU1xQkMsYUFOckIsRUFNbUM7QUFDMUMsZUFBTyxjQUFJQyxJQUFKLENBQVNTLElBQVQsQ0FBYyxjQUFkLEVBQThCRCxPQUE5QixFQUNGTixJQURFLENBQ0csVUFBQ0MsUUFBRDtBQUFBLG1CQUFjTCxlQUFlSyxTQUFTQyxJQUF4QixDQUFkO0FBQUEsU0FESCxFQUVGQyxLQUZFLENBRUksVUFBQ0MsS0FBRDtBQUFBLG1CQUFXUCxjQUFjTyxLQUFkLENBQVg7QUFBQSxTQUZKLENBQVA7QUFHSCxLQVZVO0FBV1hJLFVBWFcsa0JBV0paLGNBWEksRUFXWUMsYUFYWixFQVcwQjtBQUNqQyxlQUFPLGNBQUlDLElBQUosQ0FBU0MsR0FBVCxDQUFhLHFCQUFiLEVBQ0ZDLElBREUsQ0FDRyxVQUFDQyxRQUFEO0FBQUEsbUJBQWNMLGVBQWVLLFNBQVNDLElBQXhCLENBQWQ7QUFBQSxTQURILEVBRUZDLEtBRkUsQ0FFSSxVQUFDQyxLQUFEO0FBQUEsbUJBQVdQLGNBQWNPLEtBQWQsQ0FBWDtBQUFBLFNBRkosQ0FBUDtBQUdIO0FBZlUsQzs7Ozs7Ozs7Ozs7OztrQkNGQTtBQUNYLFVBQU07QUFDRixtQkFBVztBQUNQLG9CQUFRLGNBREQ7QUFFUCxzQkFBVSxlQUZIO0FBR1Asb0NBQXdCLHFDQUhqQjtBQUlQLHlCQUFhLDBCQUpOO0FBS1AsNEJBQWdCLHFDQUxUO0FBTVAsb0JBQVEsTUFORDtBQU9QLDRCQUFnQixjQVBUO0FBUVAsMkJBQWUsYUFSUjtBQVNQLGlDQUFxQixrQkFUZDtBQVVQLHNCQUFVLFFBVkg7QUFXUCx1QkFBVyxTQVhKO0FBWVAsOEJBQWtCO0FBWlg7QUFEVCxLQURLO0FBaUJYLFVBQU07QUFDRixtQkFBVztBQUNQLG9CQUFRLG1CQUREO0FBRVAsc0JBQVUsZUFGSDtBQUdQLG9DQUF3QiwwQ0FIakI7QUFJUCx5QkFBYSxzQkFKTjtBQUtQLDRCQUFnQixpQ0FMVDtBQU1QLG9CQUFRLFFBTkQ7QUFPUCw0QkFBZ0IsaUJBUFQ7QUFRUCwyQkFBZSxhQVJSO0FBU1AsaUNBQXFCLHVCQVRkO0FBVVAsc0JBQVUsU0FWSDtBQVdQLHVCQUFXLFVBWEo7QUFZUCw4QkFBa0I7QUFaWDtBQURUO0FBakJLLEM7Ozs7Ozs7Ozs7Ozs7O0FDdUJmOzs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFJQTswQkFDQTsyQkFFQTtBQUpBOzttQ0FNQTsyQkFDQTtBQUVBO0FBSkE7MEJBS0E7O21CQUVBO2tCQUNBOzJCQUVBO0FBSkE7QUFLQTs7O3dDQUVBO3dCQUNBO0FBQ0E7NENBQ0E7d0JBQ0E7QUFDQTtrQ0FDQTt3QkFDQTtBQUVBO0FBVkE7WUFXQTtnQ0FDQTthQUNBOytDQUNBO0FBQ0E7Ozs4QkFFQTsrQ0FDQTtrRUFDQTtpQ0FDQTtrRkFDQTtvRkFDQTswQkFDQTt3Q0FDQTtxR0FDQTt1Q0FDQTt1Q0FDQTs0Q0FDQTt3Q0FDQTtpRUFDQTtBQUNBO2tDQUNBO3FFQUNBO2lHQUNBOzROQUNBO3FFQUVBOztxQkFDQSx3Q0FFQTs7OERBQ0E7QUFFQTtBQTNCQTtBQWxDQSxFOzs7Ozs7Ozs7Ozs7OztBQzJLQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTtBQUVBO0FBSEE7WUFJQTswQkFDQTs7cUJBRUE7K0JBQ0E7aUJBQ0E7aUJBQ0E7MkNBQ0E7b0NBQ0E7b0NBQ0E7MkJBQ0E7bUJBQ0E7cUJBQ0E7d0JBQ0E7MEJBRUE7QUFiQTtBQWNBOzs7NENBRUE7O3NCQUdBOytCQUVBO0FBSEEsYUFEQTt1REFNQTt1QkFHQTtBQUpBO0FBTUE7QUFiQTs7QUFjQTs7MENBQ0E7a0NBQ0E7O3NCQUdBO0FBRkE7ZUFHQTs0REFDQSx3QkFDQTt3Q0FDQTtBQUNBLGdDQUNBOzRCQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOzttRUFDQSx3QkFDQTt1QkFDQTt3QkFDQTs4Q0FDQTs7K0JBRUE7cUVBQ0E7K0JBRUE7QUFKQTswREFLQTt3REFDQTt3REFDQTt3REFDQTt3REFFQTs7MkJBQ0E7QUFDQTt1Q0FDQTtnQkFDQTt5Q0FDQTswRUFDQTt3RUFDQTswREFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUNBO3dCQUNBO0FBRUE7OzBFQUNBLHdCQUNBO3VCQUNBO3NFQUNBO3dEQUNBO3dEQUNBO0FBQ0EsNEJBQ0E7d0JBQ0E7QUFFQTs7b0VBQ0Esd0JBQ0E7dUJBQ0E7d0JBQ0E7aUNBQ0E7eUJBQ0E7QUFDQSw0QkFDQTt3QkFDQTtBQUNBOzZEQUNBLHdCQUNBO2dDQUNBO3NDQUNBO3dCQUNBO2lDQUNBO21DQUNBO3lCQUNBO0FBQ0EsNEJBQ0E7d0JBQ0E7QUFFQTs7K0RBQ0Esd0JBQ0E7dUJBQ0E7d0NBQ0E7Z0NBQ0E7a0NBQ0E7cUNBQ0E7dUNBQ0E7QUFDQSw0QkFDQTt3QkFDQTtBQUNBO0FBQ0E7QUFwSUEsRTs7Ozs7Ozs7Ozs7Ozs7QUNqTk8sSUFBTUssc0JBQU87QUFDaEJDLFdBQU8sQ0FBQyxJQURRLEVBQ0Y7QUFDZEMsZUFBVyxJQUZLLEVBRUM7QUFDakJDLGlCQUFhLENBSEcsRUFHQTtBQUNoQkMsYUFBUztBQUNMQyxnQkFBUSxHQURILEVBQ1E7QUFDYkMscUJBQWEsS0FGUixFQUVlO0FBQ3BCQyxlQUFPLFNBSEYsQ0FHWTtBQUhaLEtBSk87QUFTaEJDLGNBQVUsS0FUTSxFQVNLO0FBQ3JCQyxjQUFVLEtBVk0sRUFVSztBQUNyQkMsZ0JBQVksU0FYSSxFQVdTO0FBQ3pCQyxlQUFXLFNBWkssRUFZUztBQUN6QkMsaUJBQWEsU0FiRyxFQWFTO0FBQ3pCQyxzQkFBa0IsSUFkRjtBQWVoQkMsb0JBQWdCLElBZkEsQ0FlUztBQWZULENBQWIsQzs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1DLDBDQUFpQjtBQUMxQkMsV0FBTztBQUNIQyxjQUFNO0FBREgsS0FEbUI7QUFJMUJDLFdBQU87QUFDSEMsY0FBTTtBQURILEtBSm1CO0FBTzFCQyxXQUFPO0FBQ0hDLG9CQUFZLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLEdBQW5CLEVBQXdCLEdBQXhCLEVBQTZCLEdBQTdCLEVBQWtDLEdBQWxDLEVBQXVDLEdBQXZDLEVBQTRDLEdBQTVDLEVBQWlELEdBQWpELEVBQXNELEdBQXRELEVBQTJELEdBQTNELENBRFQ7QUFFSEgsZUFBTztBQUNIQyxrQkFBTTtBQURIO0FBRkosS0FQbUI7QUFhMUJHLFdBQU87QUFDSEMsYUFBSyxDQURGO0FBRUhMLGVBQU87QUFDSEMsa0JBQU0sa0JBREg7QUFFSEssbUJBQU87QUFGSixTQUZKO0FBTUhDLGdCQUFRO0FBQ0pDLHNCQUFVO0FBRE47QUFOTCxLQWJtQjtBQXVCMUJDLGlCQUFhO0FBQ1RDLGFBQUs7QUFDREMsd0JBQVk7QUFDUkMseUJBQVM7QUFERDtBQURYO0FBREksS0F2QmE7QUE4QjFCQyxZQUFRO0FBQ0pDLGdCQUFRLFVBREo7QUFFSlIsZUFBTyxPQUZIO0FBR0pTLHVCQUFlLEtBSFg7QUFJSkMsV0FBRyxDQUFDLEVBSkE7QUFLSkMsV0FBRyxFQUxDO0FBTUpDLGtCQUFVLElBTk47QUFPSkMscUJBQWEsQ0FQVDtBQVFKQyx5QkFBaUIsU0FSYjtBQVNKQyxnQkFBUTtBQVRKLEtBOUJrQjtBQXlDMUJDLGFBQVM7QUFDTFYsaUJBQVM7QUFESixLQXpDaUI7QUE0QzFCVyxZQUFRLENBQUM7QUFDTEMsY0FBTSxlQUREO0FBRUxDLGNBQU0sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQztBQUZELEtBQUQ7QUE1Q2tCLENBQXZCLEM7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNQyw4Q0FBbUI7QUFDNUI1QixXQUFPO0FBQ0hDLGNBQU0sWUFESDtBQUVINEIsZ0JBQVE7QUFGTCxLQURxQjtBQUs1QnZCLFdBQU87QUFDSEMsYUFBSyxDQURGO0FBRUh1QixhQUFLLEdBRkY7QUFHSDVCLGVBQU87QUFDSEMsa0JBQU0sSUFESDtBQUVIZ0IsZUFBRyxDQUFDOztBQUZELFNBSEo7QUFRSFksZUFBTyxDQUNILENBQUMsR0FBRCxFQUFNLFNBQU4sQ0FERyxDQUNjO0FBRGQsU0FSSjtBQVdIN0MsbUJBQVcsQ0FYUjtBQVlIOEMsMkJBQW1CLElBWmhCO0FBYUhDLG9CQUFZLENBYlQ7QUFjSHhCLGdCQUFRO0FBQ0pLLHFCQUFTO0FBREw7QUFkTCxLQUxxQjs7QUF3QjVCVSxhQUFTO0FBQ0xWLGlCQUFTO0FBREosS0F4Qm1COztBQTRCNUJXLFlBQVEsQ0FBQztBQUNMQyxjQUFNLElBREQ7QUFFTEMsY0FBTSxDQUFDLEVBQUQsQ0FGRDtBQUdMZCxvQkFBWTtBQUNScUIsb0JBQVEsc0VBQ1AsT0FETyxHQUNJLG9CQUZKO0FBR1JmLGVBQUcsQ0FBQztBQUhJLFNBSFA7QUFRTGdCLGlCQUFTO0FBQ0xDLHlCQUFhO0FBRFI7QUFSSixLQUFELENBNUJvQjtBQXdDNUJsQyxXQUFPO0FBQ0hDLGNBQU07QUFESCxLQXhDcUI7O0FBNEM1QmtDLFVBQU07QUFDRkMsY0FBTSxNQURKO0FBRUZDLG9CQUFZLENBQUMsRUFGWDtBQUdGQyxrQkFBVSxFQUhSO0FBSUZDLG9CQUFZO0FBQ1JuQiw2QkFBaUIsTUFEVDtBQUVSb0IseUJBQWEsS0FGTDtBQUdSQyx5QkFBYSxNQUhMO0FBSVJDLG1CQUFPO0FBSkM7QUFKVixLQTVDc0I7O0FBd0Q1QlQsYUFBUztBQUNMckIsaUJBQVM7QUFESixLQXhEbUI7O0FBNEQ1QjtBQUNBSCxpQkFBYTtBQUNUa0Msb0JBQVk7QUFDUmhDLHdCQUFZO0FBQ1JNLG1CQUFHLENBREs7QUFFUkUsNkJBQWEsQ0FGTDtBQUdSeUIseUJBQVM7QUFIRDtBQURKO0FBREg7QUE3RGUsQ0FBekIsQzs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1DLDRDQUFrQjtBQUMzQi9DLFdBQU87QUFDSEMsY0FBTTtBQURILEtBRG9CO0FBSTNCQyxXQUFPO0FBQ0hDLGNBQU07QUFESCxLQUpvQjtBQU8zQkMsV0FBTztBQUNIRixlQUFPO0FBQ0hDLGtCQUFNO0FBREgsU0FESjtBQUlIRSxvQkFBWSxFQUpUO0FBS0hJLGdCQUFRO0FBQ0p1Qyx1QkFBVyxxQkFBWTtBQUNuQix1QkFBTyxLQUFLQyxLQUFMLEdBQWEsS0FBcEI7QUFDSDtBQUhHO0FBTEwsS0FQb0I7QUFrQjNCM0MsV0FBTztBQUNISixlQUFPO0FBQ0hDLGtCQUFNO0FBREgsU0FESjtBQUlITSxnQkFBUTtBQUNKdUMsdUJBQVcscUJBQVk7QUFDbkIsdUJBQU8sS0FBS0MsS0FBTCxHQUFhLElBQXBCO0FBQ0g7QUFIRztBQUpMLEtBbEJvQjtBQTRCM0JkLGFBQVM7QUFDTGUsb0JBQVksSUFEUDtBQUVMQyxnQkFBUTtBQUZILEtBNUJrQjtBQWdDM0J4QyxpQkFBYTtBQUNUeUMsY0FBTTtBQUNGQyxvQkFBUTtBQUNKQyx3QkFBUSxDQURKO0FBRUpwRSwyQkFBVztBQUZQLGFBRE47QUFLRjJCLHdCQUFZO0FBQ1JDLHlCQUFTLElBREQ7QUFFUnZCLHVCQUFPLE9BRkM7QUFHUjBCLCtCQUFlLFFBSFA7QUFJUnNDLHNCQUFNLEtBSkU7QUFLUjdDLDBCQUFVLE1BTEY7QUFNUjhDLHVCQUFPO0FBQ0hDLGdDQUFZLE1BRFQ7QUFFSEMsaUNBQWEsTUFGVjtBQUdIQyw4QkFBVTtBQUhQO0FBTkM7QUFMVjtBQURHLEtBaENjO0FBb0QzQmxDLFlBQVEsQ0FBQztBQUNMQyxjQUFNLGNBREQ7QUFFTG5DLGVBQU8sU0FGRjtBQUdMcUUsZUFBTyxDQUhGO0FBSUxQLGdCQUFRO0FBQ0pRLG9CQUFRLFFBREo7QUFFSlAsb0JBQVE7O0FBRkosU0FKSDtBQVNMM0IsY0FBTTs7QUFURCxLQUFELEVBV0w7QUFDQ0QsY0FBTSxpQkFEUDtBQUVDbkMsZUFBTyxTQUZSO0FBR0NxRSxlQUFPLENBSFI7O0FBS0NQLGdCQUFRO0FBQ0pRLG9CQUFRLFFBREo7QUFFSlAsb0JBQVE7QUFGSixTQUxUO0FBU0MzQixjQUFNO0FBVFAsS0FYSztBQXBEbUIsQ0FBeEIsQzs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1tQywwQ0FBaUI7QUFDMUI5RCxXQUFPO0FBQ0grRCw2QkFBcUIsSUFEbEI7QUFFSEMseUJBQWlCLElBRmQ7QUFHSEMsb0JBQVksS0FIVDtBQUlIaEUsY0FBTTtBQUpILEtBRG1CO0FBTzFCQyxXQUFPO0FBQ0hDLGNBQU07QUFESCxLQVBtQjtBQVUxQmdDLGFBQVM7QUFDTCtCLHFCQUFhO0FBRFIsS0FWaUI7QUFhMUJ2RCxpQkFBYTtBQUNUd0QsYUFBSztBQUNEQyw4QkFBa0IsSUFEakI7QUFFREMsb0JBQVEsU0FGUDtBQUdEeEQsd0JBQVk7QUFDUkMseUJBQVMsS0FERDtBQUVSb0Isd0JBQVEsK0NBRkE7QUFHUnNCLHVCQUFPO0FBQ0hqRSwyQkFBTztBQURKO0FBSEMsYUFIWDtBQVVEK0UsMEJBQWM7QUFWYjtBQURJLEtBYmE7QUEyQjFCN0MsWUFBUSxDQUFDO0FBQ0xDLGNBQU0sU0FERDtBQUVMNkMsc0JBQWMsSUFGVDtBQUdMNUMsY0FBTSxDQUFDO0FBQ0hELGtCQUFNLE9BREg7QUFFSFAsZUFBRztBQUZBLFNBQUQsRUFHSDtBQUNDTyxrQkFBTSxJQURQO0FBRUNQLGVBQUc7QUFGSixTQUhHLEVBTUg7QUFDQ08sa0JBQU0sTUFEUDtBQUVDUCxlQUFHO0FBRkosU0FORztBQUhELEtBQUQ7QUEzQmtCLENBQXZCLEM7Ozs7Ozs7Ozs7Ozs7O0FDQVA7Ozs7OztrQkFFZTtBQUNYcUQsZUFEVyx1QkFDQ3RHLEVBREQsRUFDS0MsY0FETCxFQUNxQkMsYUFEckIsRUFDbUM7QUFDMUMsZUFBTyxjQUFJQyxJQUFKLENBQVNDLEdBQVQsQ0FBYSxrQkFBa0JKLEVBQWxCLEdBQXVCLGdCQUFwQyxFQUNGSyxJQURFLENBQ0csVUFBQ0MsUUFBRDtBQUFBLG1CQUFjTCxlQUFlSyxTQUFTQyxJQUF4QixDQUFkO0FBQUEsU0FESCxFQUVGQyxLQUZFLENBRUksVUFBQ0MsS0FBRDtBQUFBLG1CQUFXUCxjQUFjTyxLQUFkLENBQVg7QUFBQSxTQUZKLENBQVA7QUFHSCxLQUxVO0FBTVg4RixzQkFOVyw4QkFNUXZHLEVBTlIsRUFNWUMsY0FOWixFQU00QkMsYUFONUIsRUFNMEM7QUFDakQsZUFBTyxjQUFJQyxJQUFKLENBQVNDLEdBQVQsQ0FBYSxrQkFBa0JKLEVBQWxCLEdBQXVCLHNCQUFwQyxFQUNGSyxJQURFLENBQ0csVUFBQ0MsUUFBRDtBQUFBLG1CQUFjTCxlQUFlSyxTQUFTQyxJQUF4QixDQUFkO0FBQUEsU0FESCxFQUVGQyxLQUZFLENBRUksVUFBQ0MsS0FBRDtBQUFBLG1CQUFXUCxjQUFjTyxLQUFkLENBQVg7QUFBQSxTQUZKLENBQVA7QUFHSCxLQVZVO0FBV1grRixnQkFYVyx3QkFXRXhHLEVBWEYsRUFXTUMsY0FYTixFQVdzQkMsYUFYdEIsRUFXb0M7QUFDM0MsZUFBTyxjQUFJQyxJQUFKLENBQVNDLEdBQVQsQ0FBYSxrQkFBa0JKLEVBQWxCLEdBQXVCLGdCQUFwQyxFQUNGSyxJQURFLENBQ0csVUFBQ0MsUUFBRDtBQUFBLG1CQUFjTCxlQUFlSyxTQUFTQyxJQUF4QixDQUFkO0FBQUEsU0FESCxFQUVGQyxLQUZFLENBRUksVUFBQ0MsS0FBRDtBQUFBLG1CQUFXUCxjQUFjTyxLQUFkLENBQVg7QUFBQSxTQUZKLENBQVA7QUFHSCxLQWZVO0FBZ0JYZ0csU0FoQlcsaUJBZ0JMekcsRUFoQkssRUFnQkRDLGNBaEJDLEVBZ0JlQyxhQWhCZixFQWdCNkI7QUFDcEMsZUFBTyxjQUFJQyxJQUFKLENBQVNDLEdBQVQsQ0FBYSxrQkFBa0JKLEVBQWxCLEdBQXVCLFFBQXBDLEVBQ0ZLLElBREUsQ0FDRyxVQUFDQyxRQUFEO0FBQUEsbUJBQWNMLGVBQWVLLFNBQVNDLElBQXhCLENBQWQ7QUFBQSxTQURILEVBRUZDLEtBRkUsQ0FFSSxVQUFDQyxLQUFEO0FBQUEsbUJBQVdQLGNBQWNPLEtBQWQsQ0FBWDtBQUFBLFNBRkosQ0FBUDtBQUdILEtBcEJVO0FBcUJYaUcsV0FyQlcsbUJBcUJIMUcsRUFyQkcsRUFxQkNDLGNBckJELEVBcUJpQkMsYUFyQmpCLEVBcUIrQjtBQUN0QyxlQUFPLGNBQUlDLElBQUosQ0FBU0MsR0FBVCxDQUFhLGtCQUFrQkosRUFBbEIsR0FBdUIsVUFBcEMsRUFDRkssSUFERSxDQUNHLFVBQUNDLFFBQUQ7QUFBQSxtQkFBY0wsZUFBZUssU0FBU0MsSUFBeEIsQ0FBZDtBQUFBLFNBREgsRUFFRkMsS0FGRSxDQUVJLFVBQUNDLEtBQUQ7QUFBQSxtQkFBV1AsY0FBY08sS0FBZCxDQUFYO0FBQUEsU0FGSixDQUFQO0FBR0g7QUF6QlUsQzs7Ozs7OztBQ0ZmO0FBQ0E7OztBQUdBO0FBQ0Esb0NBQXFDLDhCQUE4QixHQUFHLGlCQUFpQixtQ0FBbUMsR0FBRyxxQkFBcUIsc0JBQXNCLHdCQUF3QixHQUFHLDJCQUEyQixzQkFBc0Isd0JBQXdCLEdBQUcsdUJBQXVCLHNCQUFzQix3QkFBd0IsR0FBRyxZQUFZLDRIQUE0SCxNQUFNLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsOHdCQUE4d0IsMEJBQTBCLGtSQUFrUix5QkFBeUIsa1BBQWtQLHVCQUF1QiwydUJBQTJ1QixrQkFBa0Isa1JBQWtSLGFBQWEsaVBBQWlQLGVBQWUsZ3ZCQUFndkIsb0JBQW9CLGtSQUFrUixlQUFlLGlQQUFpUCxrQkFBa0IsaXNCQUFpc0IsdUJBQXVCLGtSQUFrUixvQkFBb0IsaVBBQWlQLHNCQUFzQiwrd0JBQSt3Qix5QkFBeUIsa1JBQWtSLDJCQUEyQixpUEFBaVAsdUJBQXVCLG1sQkFBbWxCLG9CQUFvQixnUUFBZ1EsdUJBQXVCLHVPQUF1TyxvQkFBb0Isb3hEQUFveEQsb0NBQW9DLFNBQVMsMkJBQTJCLHlDQUF5QyxTQUFTLCtCQUErQiw0QkFBNEIsOEJBQThCLFNBQVMscUNBQXFDLDRCQUE0Qiw4QkFBOEIsU0FBUyxpQ0FBaUMsNEJBQTRCLDhCQUE4QixTQUFTLGlRQUFpUSwwT0FBME8sZ0JBQWdCLDJDQUEyQyxlQUFlLDBDQUEwQyxlQUFlLDBDQUEwQyxpQkFBaUIsbURBQW1ELDZEQUE2RCw2REFBNkQsb0RBQW9ELHdCQUF3QiwrQkFBK0Isc0VBQXNFLDRCQUE0Qiw2Q0FBNkMsUUFBUSxzQ0FBc0MsUUFBUSxzQ0FBc0MsUUFBUSxzQ0FBc0MsOEJBQThCLGdDQUFnQyxtQ0FBbUMscUNBQXFDLGlCQUFpQixhQUFhLHdCQUF3Qiw4QkFBOEIscURBQXFELGdJQUFnSSwwQkFBMEIsOElBQThJLHNDQUFzQyxjQUFjLHVCQUF1QixtREFBbUQsbUZBQW1GLHVDQUF1QyxrRUFBa0Usa0JBQWtCLE9BQU8sdUdBQXVHLDREQUE0RCw2QkFBNkIsd0NBQXdDLG1EQUFtRCw2QkFBNkIsa0JBQWtCLGFBQWEsdUJBQXVCLDBHQUEwRyxnREFBZ0QsMkNBQTJDLHlEQUF5RCw0Q0FBNEMseVFBQXlRLCtFQUErRSw2RUFBNkUsOEVBQThFLG9GQUFvRixxRkFBcUYscURBQXFELDZCQUE2QixFQUFFLDJEQUEyRCw0Q0FBNEMsaURBQWlELHNGQUFzRixtRkFBbUYsbUZBQW1GLHFDQUFxQyxFQUFFLGlDQUFpQyxFQUFFLDZCQUE2QiwwQkFBMEIsb0NBQW9DLCtDQUErQyx5QkFBeUIsRUFBRSxxSEFBcUgsZ0RBQWdELHlGQUF5RiwyRUFBMkUsMkVBQTJFLHlCQUF5QixvQ0FBb0MsK0NBQStDLHlCQUF5QixnSEFBZ0gsZ0RBQWdELGtFQUFrRSxzREFBc0QsMkNBQTJDLHlCQUF5QixvQ0FBb0MsK0NBQStDLHlCQUF5QixxR0FBcUcscURBQXFELGlFQUFpRSxrRUFBa0Usc0RBQXNELDhEQUE4RCwyQ0FBMkMseUJBQXlCLG9DQUFvQywrQ0FBK0MseUJBQXlCLDJHQUEyRyxnREFBZ0Qsb0VBQW9FLG9EQUFvRCx3REFBd0QsOERBQThELDBGQUEwRixvQ0FBb0MsK0NBQStDLHlCQUF5QixjQUFjLFNBQVMsMENBQTBDOztBQUU3cmhCOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsbUNBQW9DLDhCQUE4QixHQUFHLGlCQUFpQixzQkFBc0Isd0JBQXdCLEdBQUcsVUFBVSw0SEFBNEgsS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsa0pBQWtKLE9BQU8sbVpBQW1aLG9DQUFvQyxTQUFTLDJCQUEyQiw0QkFBNEIsOEJBQThCLFNBQVMsd0ZBQXdGLEtBQUssb0RBQW9ELHdCQUF3Qix3QkFBd0IsZUFBZSx5QkFBeUIsWUFBWSx5QkFBeUIsZUFBZSxhQUFhLHFCQUFxQix1Q0FBdUMsd0NBQXdDLGlCQUFpQixhQUFhLG9CQUFvQix3QkFBd0IsNERBQTRELHlEQUF5RCxhQUFhLHdCQUF3Qiw0QkFBNEIsK0RBQStELCtCQUErQiwrREFBK0QsMEJBQTBCLCtEQUErRCxhQUFhLHVEQUF1RCw0QkFBNEIsK0RBQStELGFBQWEsdUJBQXVCLHdCQUF3Qix1REFBdUQsc0ZBQXNGLDJDQUEyQyxnR0FBZ0csa0dBQWtHLGtEQUFrRCxzREFBc0QsbUhBQW1ILDhDQUE4QyxxRUFBcUUsNkZBQTZGLDRGQUE0RixzR0FBc0csaUJBQWlCLDJCQUEyQixvRkFBb0YsNEdBQTRHLDRPQUE0Tyx1RkFBdUYsK0dBQStHLCtFQUErRSxpQkFBaUIsYUFBYSxTQUFTLDBDQUEwQzs7QUFFeDNIOzs7Ozs7Ozt5Q0NQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsWUFBWTtBQUMzQixlQUFlLE9BQU87QUFDdEIsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsbUJBQW1CLE9BQU87QUFDMUIsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLGdCQUFnQjtBQUMvQztBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLGdCQUFnQjtBQUMvQztBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsZ0JBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsbUJBQW1CLE9BQU87QUFDMUIsbUJBQW1CLE9BQU87QUFDMUIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7OztBQ2hURDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUMvQkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDeE1BLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNsQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJqcy8xMS5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNGE1ZWJiMzchLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3ZpZXcudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi92aWV3LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTRhNWViYjM3IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3ZpZXcudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxzcG9ydGVjaC1zY291dGluZ1xcXFxyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGRhc2hib2FyZFxcXFxtb2R1bGVzXFxcXHJlcG9ydHNcXFxcdmlldy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB2aWV3LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00YTVlYmIzN1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTRhNWViYjM3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi02NmY4NWU3ZCFzYXNzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNjZmODVlN2QhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHNwb3J0ZWNoLXNjb3V0aW5nXFxcXHJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxoZWFkZXJcXFxccGFnZUhlYWRlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwYWdlSGVhZGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02NmY4NWU3ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTY2Zjg1ZTdkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkiLCI8dGVtcGxhdGU+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICB7e3RpdGxlfX1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxvbCBjbGFzcz1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cImJyZWFkY3J1bWIuaHJlZlwiIGFjdGl2ZS1jbGFzcz1cImFjdGl2ZVwiIHRhZz1cImxpXCIgdi1mb3I9XCJicmVhZGNydW1iIGluIGJyZWFkY3J1bWJzXCI+XHJcbiAgICAgICAgICAgICAgICB7eyR0KGJyZWFkY3J1bWIudGl0bGUpfX1cclxuICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICA8L29sPlxyXG4gICAgPC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiByZWw9XCJzdHlsZXNoZWV0L3Njc3NcIj5cclxuICAgIC5hZG1pbi1oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogOTdweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0e1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBicmVhZGNydW1iczoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcGFnZUhlYWRlci52dWU/NGI4OTE5MjAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5hZG1pbi1oZWFkZXIge1xcbiAgaGVpZ2h0OiA5N3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmFkbWluLWhlYWRlciAucm93IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtaGVhZGVyXCJcbiAgfSwgW19jKCdoMScsIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS50aXRsZSkgKyBcIlxcbiAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWJcIlxuICB9LCBfdm0uX2woKF92bS5icmVhZGNydW1icyksIGZ1bmN0aW9uKGJyZWFkY3J1bWIpIHtcbiAgICByZXR1cm4gX2MoJ3JvdXRlci1saW5rJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0b1wiOiBicmVhZGNydW1iLmhyZWYsXG4gICAgICAgIFwiYWN0aXZlLWNsYXNzXCI6IFwiYWN0aXZlXCIsXG4gICAgICAgIFwidGFnXCI6IFwibGlcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoYnJlYWRjcnVtYi50aXRsZSkpICsgXCJcXG4gICAgICAgIFwiKV0pXG4gIH0pKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTY2Zjg1ZTdkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMjA0NjE0MThcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZmODVlN2QhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGdlbmVyYXRlVVVJRCgpIHtcclxuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xyXG4gICAgICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZCAvIDE2KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpKS50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdXVpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3V1aWQuanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHNob3coaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3JlcG9ydHMvJyArIGlkKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlKGF0aGxldGUsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAucG9zdCgnL2FwaS9yZXBvcnRzJywgYXRobGV0ZSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfSxcclxuICAgIGxhdGVzdChzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9yZXBvcnRzL2xhdGVzdCcpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydFNlcnZpY2UuanMiLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBcImVuXCI6IHtcclxuICAgICAgICBcInJlcG9ydHNcIjoge1xyXG4gICAgICAgICAgICBcImxpc3RcIjogXCJSZXBvcnRzIExpc3RcIixcclxuICAgICAgICAgICAgXCJjcmVhdGVcIjogXCJDcmVhdGUgUmVwb3J0XCIsXHJcbiAgICAgICAgICAgIFwiY3JlYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJUaGUgUmVwb3J0IHdhcyBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBcIm5vdF9mb3VuZFwiOiBcIlRoZSBSZXBvcnQgZG9lc24ndCBleGlzdFwiLFxyXG4gICAgICAgICAgICBcIm5vX3Njb3V0aW5nc1wiOiBcIllvdSBoYXZlIHRvIGFkZCAxIG9yIG1vcmUgc2NvdWl0bmdzXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5hbWVcIixcclxuICAgICAgICAgICAgXCJhZGRfc2NvdXRpbmdcIjogXCJBZGQgU2NvdXRpbmdcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgIFwicmVwb3J0c19zY291dGluZ3NcIjogXCJSZXBvcnQgU2NvdXRpbmdzXCIsXHJcbiAgICAgICAgICAgIFwicmVwb3J0XCI6IFwiUmVwb3J0XCIsXHJcbiAgICAgICAgICAgIFwiYWN0aW9uc1wiOiBcIkFjdGlvbnNcIixcclxuICAgICAgICAgICAgXCJzY291dGluZ19hZGRlZFwiOiBcIlNjb3V0aW5nIEFkZGVkXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJlc1wiOiB7XHJcbiAgICAgICAgXCJyZXBvcnRzXCI6IHtcclxuICAgICAgICAgICAgXCJsaXN0XCI6IFwiTGlzdGEgZGUgUmVwb3J0ZXNcIixcclxuICAgICAgICAgICAgXCJjcmVhdGVcIjogXCJDcmVhciBSZXBvcnRlXCIsXHJcbiAgICAgICAgICAgIFwiY3JlYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJFbCBSZXBvcnRlIGZ1ZSBjcmVhZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXHJcbiAgICAgICAgICAgIFwibm90X2ZvdW5kXCI6IFwiRWwgUmVwb3J0ZSBubyBleGlzdGVcIixcclxuICAgICAgICAgICAgXCJub19zY291dGluZ3NcIjogXCJEZWJlcyBhZ3JlZ2FyIDEgbyBtw6FzIHNjb3V0aW5nc1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOb21icmVcIixcclxuICAgICAgICAgICAgXCJhZGRfc2NvdXRpbmdcIjogXCJBw7FhZGlyIFNjb3V0aW5nXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmlwY2nDs25cIixcclxuICAgICAgICAgICAgXCJyZXBvcnRzX3Njb3V0aW5nc1wiOiBcIlNjb3V0aW5ncyBkZWwgcmVwb3J0ZVwiLFxyXG4gICAgICAgICAgICBcInJlcG9ydFwiOiBcIlJlcG9ydGVcIixcclxuICAgICAgICAgICAgXCJhY3Rpb25zXCI6IFwiQWNjaW9uZXNcIixcclxuICAgICAgICAgICAgXCJzY291dGluZ19hZGRlZFwiOiBcIlNjb3V0aW5nIEHDsWFkaWRvXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYW5nL2FkbWluL3JlcG9ydHMvcmVwb3J0cy5qcyIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgOmlkPVwiY29udGFpbmVySWRcIiBjbGFzcz1cImdhdWdlXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwidGV4dC1jZW50ZXJcIj48Yj57e3RpdGxlfX08L2I+PC9oND5cclxuICAgICAgICA8Y2FudmFzIDppZD1cImVsZW1lbnRJZFwiPjwvY2FudmFzPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnb2FsLXdyYXBwZXIgY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgPHNwYW4gOmlkPVwidGV4dElkXCIgY2xhc3M9XCJnYXVnZS12YWx1ZSBwdWxsLWxlZnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2F1Z2UtdmFsdWUgcHVsbC1sZWZ0XCI+JTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJnb2FsLXRleHRcIiBjbGFzcz1cImdvYWwtdmFsdWUgcHVsbC1yaWdodFwiPjEwMCU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuICAgIC5nYXVnZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmdvYWwtd3JhcHBlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHV1aWRNaXhpbiBmcm9tICdiYXNlL21peGlucy91dWlkJ1xyXG4gICAgaW1wb3J0IHtvcHRzfSBmcm9tICcuL3N0dWJzL2dhdWdlT3B0c1N0dWInXHJcbiAgICBleHBvcnQgZGVmYXVsdHtcclxuXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdmFsdWU6IHtyZXF1aXJlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgIHRpdGxlOiB7ZGVmYXVsdDogJyd9LFxyXG4gICAgICAgICAgICBjb2xvcjoge3JlcXVpcmVkOiB0cnVlfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2Uuc2V0KHZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGdhdWdlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgb3B0czoge30sXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0SGFuZGxlOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRJZCgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVVVUlEKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGFpbmVySWQoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlVVVJRCgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRleHRJZCgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVVVUlEKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWl4aW5zOiBbdXVpZE1peGluXSxcclxuICAgICAgICBtb3VudGVkKCl7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWRyYXcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBkcmF3KCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdhdWdlTGliID0gcmVxdWlyZSgnZ2F1Z2UuanMnKTtcclxuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVySWQpLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IHdpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGggKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRzID0gXy5jbG9uZURlZXAob3B0cyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdHMuY29sb3JTdGFydCA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlID0gbmV3IGdhdWdlTGliLkdhdWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKSkuc2V0T3B0aW9ucyh0aGlzLm9wdHMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5tYXhWYWx1ZSA9IDEwMDsgLy8gc2V0IG1heCBnYXVnZSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5zZXRNaW5WYWx1ZSgwKTsgIC8vIFByZWZlciBzZXR0ZXIgb3ZlciBnYXVnZS5taW5WYWx1ZSA9IDBcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2UuYW5pbWF0aW9uU3BlZWQgPSA2NTsgLy8gc2V0IGFuaW1hdGlvbiBzcGVlZCAoMzIgaXMgZGVmYXVsdCB2YWx1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2Uuc2V0KHRoaXMudmFsdWUpOyAvLyBzZXQgYWN0dWFsIHZhbHVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLnNldFRleHRGaWVsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnRleHRJZCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWRyYXcoKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5jbGVhclJlY3QoMCwgMCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykuY2FudmFzLndpZHRoLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLnJlc3RvcmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lb3V0SGFuZGxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SGFuZGxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXRIYW5kbGUgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLmRyYXcsIDI1MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBnYXVnZS52dWU/N2I5Njk5N2EiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxwYWdlLWhlYWRlciA6dGl0bGU9XCIkdCgncmVwb3J0cy5yZXBvcnQnKVwiIDpicmVhZGNydW1icz1cImJyZWFkY3J1bWJzXCI+PC9wYWdlLWhlYWRlcj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQgcmVwb3J0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTMgY29sLXhzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXRleHRcIj5FRkZFQ1RJVkVORVNTPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImRlc2NyaXB0aW9uLWhlYWRlclwiPnt7ZWZmZWN0aXZlbmVzcy5wZXJjZW50YWdlfX0lPC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWZmZWN0aXZlbmVzcy52aWN0b3JpZXN9fVZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWZmZWN0aXZlbmVzcy5kZWZlYXRzfX1WXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uZGVzY3JpcHRpb24tYmxvY2sgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY29sIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTMgY29sLXhzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXRleHRcIj5WQUxJRDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiZGVzY3JpcHRpb24taGVhZGVyXCI+e3t2YWxpZC5wZXJjZW50YWdlfX0lPC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsaWQudmFsaWR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWxpZC5ub1ZhbGlkfX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmRlc2NyaXB0aW9uLWJsb2NrIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNvbCAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC14cy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi10ZXh0XCI+QVZFUkFHRTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJkZXNjcmlwdGlvbi1oZWFkZXJcIj57e2F2ZXJhZ2UucGVyY2VudGFnZX19JTwvaDU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2F2ZXJhZ2UuZ2l2ZW59fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3thdmVyYWdlLnJlY2VpdmVkfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5kZXNjcmlwdGlvbi1ibG9jayAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMyBjb2wteHMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tdGV4dFwiPlBFUkZFQ1RJT048L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiZGVzY3JpcHRpb24taGVhZGVyXCI+e3twZXJmZWN0aW9uLnBlcmNlbnRhZ2V9fSU8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twZXJmZWN0aW9uLnBlcmZlY3R9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twZXJmZWN0aW9uLmltcGVyZmVjdH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb24tYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXRleHRcIj5USU1FIENPTlNVTUU8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImRlc2NyaXB0aW9uLWhlYWRlclwiPnt7dGltZUNvbnN1bWVkLnBlcmNlbnRhZ2V9fSU8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0aW1lQ29uc3VtZWQudGltZUNvbnN1bWVkfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dGltZUNvbnN1bWVkLnRpbWVJZGxlfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5kZXNjcmlwdGlvbi1ibG9jayAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi10YWJzLWN1c3RvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSA6Y2xhc3M9XCJ7J2FjdGl2ZSc6aW5kZXggPT0gMH1cIiB2LWZvcj1cIihwb2ludFZzVGltZUdyYXBoLGluZGV4KSBpbiBwb2ludFZzVGltZUdyYXBoc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiJyMnK3BvaW50VnNUaW1lR3JhcGguaWRcIiBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cG9pbnRWc1RpbWVHcmFwaC5uYW1lfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItcGFuZVwiIDpjbGFzcz1cInsnYWN0aXZlJzppbmRleCA9PSAwfVwiIDppZD1cInBvaW50VnNUaW1lR3JhcGguaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihwb2ludFZzVGltZUdyYXBoLGluZGV4KSBpbiBwb2ludFZzVGltZUdyYXBoc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoaWdoY2hhcnRzIDpyZWY9XCJwb2ludFZzVGltZUdyYXBoLmlkXCIgOm9wdGlvbnM9XCJwb2ludFZzVGltZUdyYXBoLm9wdGlvbnNcIj48L2hpZ2hjaGFydHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Z2F1Z2UgOnZhbHVlPVwib2ZmZW5zaXZlR2F1Z2UuZGF0YVwiIGNvbG9yPVwiZ3JlZW5cIiB0aXRsZT1cIkNvdW50ZXJvZmZlbnNpdmVcIj48L2dhdWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGdhdWdlIDp2YWx1ZT1cImRlZmVuc2l2ZUdhdWdlLmRhdGFcIiBjb2xvcj1cInllbGxvd1wiIHRpdGxlPVwiRGVmZW5zaXZlXCI+PC9nYXVnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnYXVnZSA6dmFsdWU9XCJjb3VudGVyT2ZmZW5zaXZlR2F1Z2UuZGF0YVwiIGNvbG9yPVwicmVkXCIgdGl0bGU9XCJPZmZlbnNpdmVcIj48L2dhdWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoaWdoY2hhcnRzIDpvcHRpb25zPVwicGllXCI+PC9oaWdoY2hhcnRzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhpZ2hjaGFydHMgOm9wdGlvbnM9XCJiYXJcIj48L2hpZ2hjaGFydHM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzdHlsZT5cclxuICAgIC5yZXBvcnQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3JkZXItcmlnaHQge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM2NjY7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24tcGVyY2VudGFnZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbi1oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQgdHlwZT1cInRleHQvYmFiZWxcIj5cclxuICAgIGltcG9ydCBwYWdlSGVhZGVyIGZyb20gJ2Jhc2UvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWUnXHJcbiAgICBpbXBvcnQgZ2F1Z2UgZnJvbSAnYmFzZS9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlJ1xyXG4gICAgaW1wb3J0IHJlcG9ydHNMb2NhbGVzIGZyb20gJ2Jhc2UvbGFuZy9hZG1pbi9yZXBvcnRzL3JlcG9ydHMuanMnO1xyXG4gICAgaW1wb3J0IHJlcG9ydFNlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvcmVwb3J0cy9yZXBvcnRTZXJ2aWNlJ1xyXG4gICAgaW1wb3J0IHJlcG9ydERhdGFTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0RGF0YVNlcnZpY2UnXHJcbiAgICBpbXBvcnQgdXVpZE1peGluIGZyb20gJ2Jhc2UvbWl4aW5zL3V1aWQnXHJcbiAgICBpbXBvcnQge2xpbmVCYXNlT3B0aW9uc30gZnJvbSAnLi9zdHVicy9saW5lT3B0aW9ucydcclxuICAgIGltcG9ydCB7cGllQmFzZU9wdGlvbnN9IGZyb20gJy4vc3R1YnMvcGllT3B0aW9ucydcclxuICAgIGltcG9ydCB7YmFyQmFzZU9wdGlvbnN9IGZyb20gJy4vc3R1YnMvYmFyT3B0aW9ucydcclxuICAgIGltcG9ydCB7Z2F1Z2VCYXNlT3B0aW9uc30gZnJvbSAnLi9zdHVicy9nYXVnZU9wdGlvbnMnXHJcbiAgICBleHBvcnQgZGVmYXVsdHtcclxuICAgICAgICBsb2NhbGVzOiByZXBvcnRzTG9jYWxlcyxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIHBhZ2VIZWFkZXIsXHJcbiAgICAgICAgICAgIGdhdWdlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtaXhpbnM6IFt1dWlkTWl4aW5dLFxyXG4gICAgICAgIGRhdGEoKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlcG9ydHM6IHt9LFxyXG4gICAgICAgICAgICAgICAgcG9pbnRWc1RpbWVHcmFwaHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgcGllOiB7fSxcclxuICAgICAgICAgICAgICAgIGJhcjoge30sXHJcbiAgICAgICAgICAgICAgICBjb3VudGVyT2ZmZW5zaXZlR2F1Z2U6IHtkYXRhOiAwfSxcclxuICAgICAgICAgICAgICAgIG9mZmVuc2l2ZUdhdWdlOiB7ZGF0YTogMH0sXHJcbiAgICAgICAgICAgICAgICBkZWZlbnNpdmVHYXVnZToge2RhdGE6IDB9LFxyXG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlbmVzczoge30sXHJcbiAgICAgICAgICAgICAgICB2YWxpZDoge30sXHJcbiAgICAgICAgICAgICAgICBhdmVyYWdlOiB7fSxcclxuICAgICAgICAgICAgICAgIHBlcmZlY3Rpb246IHt9LFxyXG4gICAgICAgICAgICAgICAgdGltZUNvbnN1bWVkOiB7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBicmVhZGNydW1icygpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvZGFzaGJvYXJkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuJHQoJ2FkbWluLmhvbWUnKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL3JlcG9ydHMvJyArIHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdhZG1pbi52aWV3J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQoKXtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLiRhdXRoLnVzZXIoKS5zdXBlclVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuZXJyb3JUb2FzdCgnTm8gdGllbmVzIHBlcm1pc28gcGFyYSB2ZXIgZWwgaW5mb3JtZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXBvcnRzLmxpc3QnLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcG9ydFNlcnZpY2Uuc2hvdyh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcG9ydCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKXtcclxuICAgICAgICAgICAgcmVwb3J0RGF0YVNlcnZpY2UucG9pbnRWc1RpbWUodGhpcy4kcm91dGUucGFyYW1zLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBncmFwaCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goZGF0YSwgKGdyYXBoRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuZ2VuZXJhdGVVVUlEKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZ3JhcGhEYXRhLmxlZnRBdGhsZXRlICsgJyBWUyAnICsgZ3JhcGhEYXRhLnJpZ2h0QXRobGV0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfLmNsb25lRGVlcChsaW5lQmFzZU9wdGlvbnMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5vcHRpb25zLnhBeGlzLmNhdGVnb3JpZXMgPSBncmFwaERhdGEudGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUub3B0aW9ucy5zZXJpZXNbMF0uZGF0YSA9IGdyYXBoRGF0YS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5vcHRpb25zLnNlcmllc1sxXS5kYXRhID0gZ3JhcGhEYXRhLnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5vcHRpb25zLnNlcmllc1swXS5uYW1lID0gZ3JhcGhEYXRhLmxlZnRBdGhsZXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5vcHRpb25zLnNlcmllc1sxXS5uYW1lID0gZ3JhcGhEYXRhLnJpZ2h0QXRobGV0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwaC5wdXNoKGxpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludFZzVGltZUdyYXBocyA9IGdyYXBoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnYVtkYXRhLXRvZ2dsZT1cInRhYlwiXScpLm9uKCdzaG93bi5icy50YWInLCAoZSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKHNlbGYucG9pbnRWc1RpbWVHcmFwaHMsIChncmFwaERhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcmVmc1tncmFwaERhdGEuaWRdWzBdLmNoYXJ0LnJlZmxvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXBvcnREYXRhU2VydmljZS5vZmZlbnNpdmVEZWZlbnNpdmUodGhpcy4kcm91dGUucGFyYW1zLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRlck9mZmVuc2l2ZUdhdWdlLmRhdGEgPSBkYXRhLmNvdW50ZXJPZmZlbnNpdmUuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZlbnNpdmVHYXVnZS5kYXRhID0gZGF0YS5vZmZlbnNpdmUuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZlbnNpdmVHYXVnZS5kYXRhID0gZGF0YS5kZWZlbnNpdmUuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgcmVwb3J0RGF0YVNlcnZpY2UuY29tYmF0U3RhdHVzKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGllID0gXy5jbG9uZURlZXAocGllQmFzZU9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWUuc2VyaWVzWzBdLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBpZSA9IHBpZTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXBvcnREYXRhU2VydmljZS5wYXJyeSh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmNhdGVnb3JpZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiYXIgPSBfLmNsb25lRGVlcChiYXJCYXNlT3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhci5zZXJpZXNbMF0uZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhci54QXhpcy5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXIgPSBiYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHJlcG9ydERhdGFTZXJ2aWNlLnN1bW1hcnkodGhpcy4kcm91dGUucGFyYW1zLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0aXZlbmVzcyA9IGRhdGEuZWZmZWN0aXZlbmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZCA9IGRhdGEudmFsaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXZlcmFnZSA9IGRhdGEuYXZlcmFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJmZWN0aW9uID0gZGF0YS5wZXJmZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb25zdW1lZCA9IGRhdGEuY29uc3VtZWRUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB2aWV3LnZ1ZT8zNGE3OWU4YSIsImV4cG9ydCBjb25zdCBvcHRzID0ge1xyXG4gICAgYW5nbGU6IC0wLjAyLCAvLyBUaGUgc3BhbiBvZiB0aGUgZ2F1Z2UgYXJjXHJcbiAgICBsaW5lV2lkdGg6IDAuNDQsIC8vIFRoZSBsaW5lIHRoaWNrbmVzc1xyXG4gICAgcmFkaXVzU2NhbGU6IDEsIC8vIFJlbGF0aXZlIHJhZGl1c1xyXG4gICAgcG9pbnRlcjoge1xyXG4gICAgICAgIGxlbmd0aDogMC42LCAvLyAvLyBSZWxhdGl2ZSB0byBnYXVnZSByYWRpdXNcclxuICAgICAgICBzdHJva2VXaWR0aDogMC4wMzUsIC8vIFRoZSB0aGlja25lc3NcclxuICAgICAgICBjb2xvcjogJyMwMDAwMDAnIC8vIEZpbGwgY29sb3JcclxuICAgIH0sXHJcbiAgICBsaW1pdE1heDogZmFsc2UsICAgICAvLyBJZiBmYWxzZSwgdGhlIG1heCB2YWx1ZSBvZiB0aGUgZ2F1Z2Ugd2lsbCBiZSB1cGRhdGVkIGlmIHZhbHVlIHN1cnBhc3MgbWF4XHJcbiAgICBsaW1pdE1pbjogZmFsc2UsICAgICAvLyBJZiB0cnVlLCB0aGUgbWluIHZhbHVlIG9mIHRoZSBnYXVnZSB3aWxsIGJlIGZpeGVkIHVubGVzcyB5b3Ugc2V0IGl0IG1hbnVhbGx5XHJcbiAgICBjb2xvclN0YXJ0OiAnIzZGQURDRicsICAgLy8gQ29sb3JzXHJcbiAgICBjb2xvclN0b3A6ICcjOEZDMERBJywgICAgLy8ganVzdCBleHBlcmltZW50IHdpdGggdGhlbVxyXG4gICAgc3Ryb2tlQ29sb3I6ICcjRTBFMEUwJywgIC8vIHRvIHNlZSB3aGljaCBvbmVzIHdvcmsgYmVzdCBmb3IgeW91XHJcbiAgICBnZW5lcmF0ZUdyYWRpZW50OiB0cnVlLFxyXG4gICAgaGlnaERwaVN1cHBvcnQ6IHRydWUgICAgIC8vIEhpZ2ggcmVzb2x1dGlvbiBzdXBwb3J0XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9zdHVicy9nYXVnZU9wdHNTdHViLmpzIiwiZXhwb3J0IGNvbnN0IGJhckJhc2VPcHRpb25zID0ge1xyXG4gICAgY2hhcnQ6IHtcclxuICAgICAgICB0eXBlOiAnYmFyJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdGV4dDogJ1BhcnJ5J1xyXG4gICAgfSxcclxuICAgIHhBeGlzOiB7XHJcbiAgICAgICAgY2F0ZWdvcmllczogWycxMicsICcxMScsICcxMCcsICc5JywgJzgnLCAnNycsICc2JywgJzUnLCAnNCcsICczJywgJzInLCAnMSddLFxyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdCb2R5IFpvbmUnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHlBeGlzOiB7XHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdOdW1iZXIgb2YgUGFycnlzJyxcclxuICAgICAgICAgICAgYWxpZ246ICdoaWdoJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnanVzdGlmeSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGxvdE9wdGlvbnM6IHtcclxuICAgICAgICBiYXI6IHtcclxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxlZ2VuZDoge1xyXG4gICAgICAgIGxheW91dDogJ3ZlcnRpY2FsJyxcclxuICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcclxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcclxuICAgICAgICB4OiAtNDAsXHJcbiAgICAgICAgeTogODAsXHJcbiAgICAgICAgZmxvYXRpbmc6IHRydWUsXHJcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRkZGRicsXHJcbiAgICAgICAgc2hhZG93OiB0cnVlXHJcbiAgICB9LFxyXG4gICAgY3JlZGl0czoge1xyXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2VyaWVzOiBbe1xyXG4gICAgICAgIG5hbWU6ICdQYXJyeSBOdW1iZXJzJyxcclxuICAgICAgICBkYXRhOiBbMSwgMCwgMiwgMiwgMCwgMywgNCwgMCwgMCwgMSwgMCwgMF1cclxuICAgIH1dXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvc3R1YnMvYmFyT3B0aW9ucy5qcyIsImV4cG9ydCBjb25zdCBnYXVnZUJhc2VPcHRpb25zID0ge1xyXG4gICAgY2hhcnQ6IHtcclxuICAgICAgICB0eXBlOiAnc29saWRnYXVnZScsXHJcbiAgICAgICAgaGVpZ2h0OiAxNTBcclxuICAgIH0sXHJcbiAgICB5QXhpczoge1xyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICB0ZXh0OiBudWxsLFxyXG4gICAgICAgICAgICB5OiAtNzBcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdG9wczogW1xyXG4gICAgICAgICAgICBbMC4xLCAnIzU1QkYzQiddIC8vIGdyZWVuXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsaW5lV2lkdGg6IDAsXHJcbiAgICAgICAgbWlub3JUaWNrSW50ZXJ2YWw6IG51bGwsXHJcbiAgICAgICAgdGlja0Ftb3VudDogMixcclxuICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWRpdHM6IHtcclxuICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgbmFtZTogbnVsbCxcclxuICAgICAgICBkYXRhOiBbODBdLFxyXG4gICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgZm9ybWF0OiAnPGRpdiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTNweDtjb2xvcjonICtcclxuICAgICAgICAgICAgKCdibGFjaycpICsgJ1wiPnt5fSU8L3NwYW4+PGJyLz4nLFxyXG4gICAgICAgICAgICB5OiAtMjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgdmFsdWVTdWZmaXg6ICclJ1xyXG4gICAgICAgIH1cclxuICAgIH1dLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICB0ZXh0OiAnRWZlY3RpdmlkYWQnXHJcbiAgICB9LFxyXG5cclxuICAgIHBhbmU6IHtcclxuICAgICAgICBzaXplOiAnMTUwJScsXHJcbiAgICAgICAgc3RhcnRBbmdsZTogLTkwLFxyXG4gICAgICAgIGVuZEFuZ2xlOiA5MCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNFRUUnLFxyXG4gICAgICAgICAgICBpbm5lclJhZGl1czogJzYwJScsXHJcbiAgICAgICAgICAgIG91dGVyUmFkaXVzOiAnMTAwJScsXHJcbiAgICAgICAgICAgIHNoYXBlOiAnYXJjJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdG9vbHRpcDoge1xyXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHRoZSB2YWx1ZSBheGlzXHJcbiAgICBwbG90T3B0aW9uczoge1xyXG4gICAgICAgIHNvbGlkZ2F1Z2U6IHtcclxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgeTogNSxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgdXNlSFRNTDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3N0dWJzL2dhdWdlT3B0aW9ucy5qcyIsImV4cG9ydCBjb25zdCBsaW5lQmFzZU9wdGlvbnMgPSB7XHJcbiAgICBjaGFydDoge1xyXG4gICAgICAgIHR5cGU6ICdsaW5lJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdGV4dDogJ1BvaW50cyB2cyBUaW1lJ1xyXG4gICAgfSxcclxuICAgIHhBeGlzOiB7XHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgdGV4dDogJ1RpbWUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSArICdtaW4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHlBeGlzOiB7XHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgdGV4dDogJ1BvaW50cydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlICsgJ3B0JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgY3Jvc3NoYWlyczogdHJ1ZSxcclxuICAgICAgICBzaGFyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBwbG90T3B0aW9uczoge1xyXG4gICAgICAgIGxpbmU6IHtcclxuICAgICAgICAgICAgbWFya2VyOiB7XHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IDgsXHJcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXHJcbiAgICAgICAgICAgICAgICBjcm9wOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0T3V0bGluZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgbmFtZTogJ1BlZHJvIEdvcnJpbicsXHJcbiAgICAgICAgY29sb3I6ICcjZmY2NjAwJyxcclxuICAgICAgICBpbmRleDogMixcclxuICAgICAgICBtYXJrZXI6IHtcclxuICAgICAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcclxuICAgICAgICAgICAgcmFkaXVzOiAxMlxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IFtdXHJcblxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6ICdKYXZpZXIgQmFzdGlkYXMnLFxyXG4gICAgICAgIGNvbG9yOiAnIzY0YjVmNicsXHJcbiAgICAgICAgaW5kZXg6IDEsXHJcblxyXG4gICAgICAgIG1hcmtlcjoge1xyXG4gICAgICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxyXG4gICAgICAgICAgICByYWRpdXM6IDEyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiBbXVxyXG4gICAgfV1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy9zdHVicy9saW5lT3B0aW9ucy5qcyIsImV4cG9ydCBjb25zdCBwaWVCYXNlT3B0aW9ucyA9IHtcclxuICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgcGxvdEJhY2tncm91bmRDb2xvcjogbnVsbCxcclxuICAgICAgICBwbG90Qm9yZGVyV2lkdGg6IG51bGwsXHJcbiAgICAgICAgcGxvdFNoYWRvdzogZmFsc2UsXHJcbiAgICAgICAgdHlwZTogJ3BpZSdcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHRleHQ6ICdDb21iYXQgU3RhdHVzJ1xyXG4gICAgfSxcclxuICAgIHRvb2x0aXA6IHtcclxuICAgICAgICBwb2ludEZvcm1hdDogJ3tzZXJpZXMubmFtZX06IDxiPntwb2ludC5wZXJjZW50YWdlOi4xZn0lPC9iPidcclxuICAgIH0sXHJcbiAgICBwbG90T3B0aW9uczoge1xyXG4gICAgICAgIHBpZToge1xyXG4gICAgICAgICAgICBhbGxvd1BvaW50U2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICc8Yj57cG9pbnQubmFtZX08L2I+OiB7cG9pbnQucGVyY2VudGFnZTouMWZ9ICUnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93SW5MZWdlbmQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2VyaWVzOiBbe1xyXG4gICAgICAgIG5hbWU6ICdQZXJjZW50JyxcclxuICAgICAgICBjb2xvckJ5UG9pbnQ6IHRydWUsXHJcbiAgICAgICAgZGF0YTogW3tcclxuICAgICAgICAgICAgbmFtZTogJ0VRVUFMJyxcclxuICAgICAgICAgICAgeTogMjBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdVUCcsXHJcbiAgICAgICAgICAgIHk6IDYwLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogJ0RPV04nLFxyXG4gICAgICAgICAgICB5OiAyMFxyXG4gICAgICAgIH1dXHJcbiAgICB9XVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3N0dWJzL3BpZU9wdGlvbnMuanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHBvaW50VnNUaW1lKGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9yZXBvcnRzLycgKyBpZCArICcvcG9pbnQtdnMtdGltZScpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbiAgICBvZmZlbnNpdmVEZWZlbnNpdmUoaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3JlcG9ydHMvJyArIGlkICsgJy9vZmZlbnNpdmUtZGVmZW5zaXZlJylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfSxcclxuICAgIGNvbWJhdFN0YXR1cyhpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvcmVwb3J0cy8nICsgaWQgKyAnL2NvbWJhdC1zdGF0dXMnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG4gICAgcGFycnkoaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3JlcG9ydHMvJyArIGlkICsgJy9wYXJyeScpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbiAgICBzdW1tYXJ5KGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9yZXBvcnRzLycgKyBpZCArICcvc3VtbWFyeScpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0RGF0YVNlcnZpY2UuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5yZXBvcnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmJvcmRlci1yaWdodCB7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM2NjY7XFxufVxcbi5kZXNjcmlwdGlvbi10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmRlc2NyaXB0aW9uLXBlcmNlbnRhZ2Uge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uZGVzY3JpcHRpb24taGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWU/MzRhNzllOGFcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTZLQTtJQUNBLHdCQUFBO0NBQ0E7QUFFQTtJQUNBLDZCQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0NBQ0FcIixcImZpbGVcIjpcInZpZXcudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxwYWdlLWhlYWRlciA6dGl0bGU9XFxcIiR0KCdyZXBvcnRzLnJlcG9ydCcpXFxcIiA6YnJlYWRjcnVtYnM9XFxcImJyZWFkY3J1bWJzXFxcIj48L3BhZ2UtaGVhZGVyPlxcclxcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbnRlbnQgcmVwb3J0XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLXhzLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXRleHRcXFwiPkVGRkVDVElWRU5FU1M8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWhlYWRlclxcXCI+e3tlZmZlY3RpdmVuZXNzLnBlcmNlbnRhZ2V9fSU8L2g1PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtbGVmdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tlZmZlY3RpdmVuZXNzLnZpY3Rvcmllc319VlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tlZmZlY3RpdmVuZXNzLmRlZmVhdHN9fVZcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uZGVzY3JpcHRpb24tYmxvY2sgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNvbCAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wteHMtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tdGV4dFxcXCI+VkFMSUQ8L3NwYW4+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWhlYWRlclxcXCI+e3t2YWxpZC5wZXJjZW50YWdlfX0lPC9oNT5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LWxlZnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsaWQudmFsaWR9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWxpZC5ub1ZhbGlkfX1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uZGVzY3JpcHRpb24tYmxvY2sgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNvbCAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wteHMtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tdGV4dFxcXCI+QVZFUkFHRTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgdGV4dC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiZGVzY3JpcHRpb24taGVhZGVyXFxcIj57e2F2ZXJhZ2UucGVyY2VudGFnZX19JTwvaDU+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgdGV4dC1sZWZ0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2F2ZXJhZ2UuZ2l2ZW59fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3thdmVyYWdlLnJlY2VpdmVkfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uZGVzY3JpcHRpb24tYmxvY2sgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLXhzLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXRleHRcXFwiPlBFUkZFQ1RJT048L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWhlYWRlclxcXCI+e3twZXJmZWN0aW9uLnBlcmNlbnRhZ2V9fSU8L2g1PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtbGVmdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twZXJmZWN0aW9uLnBlcmZlY3R9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twZXJmZWN0aW9uLmltcGVyZmVjdH19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tYmxvY2tcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXRleHRcXFwiPlRJTUUgQ09OU1VNRTwvc3Bhbj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgdGV4dC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiZGVzY3JpcHRpb24taGVhZGVyXFxcIj57e3RpbWVDb25zdW1lZC5wZXJjZW50YWdlfX0lPC9oNT5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LWxlZnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dGltZUNvbnN1bWVkLnRpbWVDb25zdW1lZH19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RpbWVDb25zdW1lZC50aW1lSWRsZX19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmRlc2NyaXB0aW9uLWJsb2NrIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2LXRhYnMtY3VzdG9tXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSA6Y2xhc3M9XFxcInsnYWN0aXZlJzppbmRleCA9PSAwfVxcXCIgdi1mb3I9XFxcIihwb2ludFZzVGltZUdyYXBoLGluZGV4KSBpbiBwb2ludFZzVGltZUdyYXBoc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cXFwiJyMnK3BvaW50VnNUaW1lR3JhcGguaWRcXFwiIGRhdGEtdG9nZ2xlPVxcXCJ0YWJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twb2ludFZzVGltZUdyYXBoLm5hbWV9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWItcGFuZVxcXCIgOmNsYXNzPVxcXCJ7J2FjdGl2ZSc6aW5kZXggPT0gMH1cXFwiIDppZD1cXFwicG9pbnRWc1RpbWVHcmFwaC5pZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKHBvaW50VnNUaW1lR3JhcGgsaW5kZXgpIGluIHBvaW50VnNUaW1lR3JhcGhzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoaWdoY2hhcnRzIDpyZWY9XFxcInBvaW50VnNUaW1lR3JhcGguaWRcXFwiIDpvcHRpb25zPVxcXCJwb2ludFZzVGltZUdyYXBoLm9wdGlvbnNcXFwiPjwvaGlnaGNoYXJ0cz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Z2F1Z2UgOnZhbHVlPVxcXCJvZmZlbnNpdmVHYXVnZS5kYXRhXFxcIiBjb2xvcj1cXFwiZ3JlZW5cXFwiIHRpdGxlPVxcXCJDb3VudGVyb2ZmZW5zaXZlXFxcIj48L2dhdWdlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGdhdWdlIDp2YWx1ZT1cXFwiZGVmZW5zaXZlR2F1Z2UuZGF0YVxcXCIgY29sb3I9XFxcInllbGxvd1xcXCIgdGl0bGU9XFxcIkRlZmVuc2l2ZVxcXCI+PC9nYXVnZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnYXVnZSA6dmFsdWU9XFxcImNvdW50ZXJPZmZlbnNpdmVHYXVnZS5kYXRhXFxcIiBjb2xvcj1cXFwicmVkXFxcIiB0aXRsZT1cXFwiT2ZmZW5zaXZlXFxcIj48L2dhdWdlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtOFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aGlnaGNoYXJ0cyA6b3B0aW9ucz1cXFwicGllXFxcIj48L2hpZ2hjaGFydHM+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGhpZ2hjaGFydHMgOm9wdGlvbnM9XFxcImJhclxcXCI+PC9oaWdoY2hhcnRzPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvc2VjdGlvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG48c3R5bGU+XFxyXFxuICAgIC5yZXBvcnQge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJvcmRlci1yaWdodCB7XFxyXFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNjY2O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kZXNjcmlwdGlvbi10ZXh0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kZXNjcmlwdGlvbi1wZXJjZW50YWdlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kZXNjcmlwdGlvbi1oZWFkZXIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG48L3N0eWxlPlxcclxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9iYWJlbFxcXCI+XFxyXFxuICAgIGltcG9ydCBwYWdlSGVhZGVyIGZyb20gJ2Jhc2UvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWUnXFxyXFxuICAgIGltcG9ydCBnYXVnZSBmcm9tICdiYXNlL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWUnXFxyXFxuICAgIGltcG9ydCByZXBvcnRzTG9jYWxlcyBmcm9tICdiYXNlL2xhbmcvYWRtaW4vcmVwb3J0cy9yZXBvcnRzLmpzJztcXHJcXG4gICAgaW1wb3J0IHJlcG9ydFNlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvcmVwb3J0cy9yZXBvcnRTZXJ2aWNlJ1xcclxcbiAgICBpbXBvcnQgcmVwb3J0RGF0YVNlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvcmVwb3J0cy9yZXBvcnREYXRhU2VydmljZSdcXHJcXG4gICAgaW1wb3J0IHV1aWRNaXhpbiBmcm9tICdiYXNlL21peGlucy91dWlkJ1xcclxcbiAgICBpbXBvcnQge2xpbmVCYXNlT3B0aW9uc30gZnJvbSAnLi9zdHVicy9saW5lT3B0aW9ucydcXHJcXG4gICAgaW1wb3J0IHtwaWVCYXNlT3B0aW9uc30gZnJvbSAnLi9zdHVicy9waWVPcHRpb25zJ1xcclxcbiAgICBpbXBvcnQge2JhckJhc2VPcHRpb25zfSBmcm9tICcuL3N0dWJzL2Jhck9wdGlvbnMnXFxyXFxuICAgIGltcG9ydCB7Z2F1Z2VCYXNlT3B0aW9uc30gZnJvbSAnLi9zdHVicy9nYXVnZU9wdGlvbnMnXFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0e1xcclxcbiAgICAgICAgbG9jYWxlczogcmVwb3J0c0xvY2FsZXMsXFxyXFxuICAgICAgICBjb21wb25lbnRzOiB7XFxyXFxuICAgICAgICAgICAgcGFnZUhlYWRlcixcXHJcXG4gICAgICAgICAgICBnYXVnZVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG1peGluczogW3V1aWRNaXhpbl0sXFxyXFxuICAgICAgICBkYXRhKCl7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgICAgICAgcmVwb3J0czoge30sXFxyXFxuICAgICAgICAgICAgICAgIHBvaW50VnNUaW1lR3JhcGhzOiBbXSxcXHJcXG4gICAgICAgICAgICAgICAgcGllOiB7fSxcXHJcXG4gICAgICAgICAgICAgICAgYmFyOiB7fSxcXHJcXG4gICAgICAgICAgICAgICAgY291bnRlck9mZmVuc2l2ZUdhdWdlOiB7ZGF0YTogMH0sXFxyXFxuICAgICAgICAgICAgICAgIG9mZmVuc2l2ZUdhdWdlOiB7ZGF0YTogMH0sXFxyXFxuICAgICAgICAgICAgICAgIGRlZmVuc2l2ZUdhdWdlOiB7ZGF0YTogMH0sXFxyXFxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZW5lc3M6IHt9LFxcclxcbiAgICAgICAgICAgICAgICB2YWxpZDoge30sXFxyXFxuICAgICAgICAgICAgICAgIGF2ZXJhZ2U6IHt9LFxcclxcbiAgICAgICAgICAgICAgICBwZXJmZWN0aW9uOiB7fSxcXHJcXG4gICAgICAgICAgICAgICAgdGltZUNvbnN1bWVkOiB7fVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBjb21wdXRlZDoge1xcclxcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzKCl7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiBbXFxyXFxuICAgICAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9kYXNoYm9hcmQnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLiR0KCdhZG1pbi5ob21lJylcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9yZXBvcnRzLycgKyB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdhZG1pbi52aWV3J1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICBdXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBjcmVhdGVkKCl7XFxyXFxuICAgICAgICAgICAgaWYgKCF0aGlzLiRhdXRoLnVzZXIoKS5zdXBlclVzZXIpIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy4kcm9vdC5lcnJvclRvYXN0KCdObyB0aWVuZXMgcGVybWlzbyBwYXJhIHZlciBlbCBpbmZvcm1lJyk7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXBvcnRzLmxpc3QnLFxcclxcbiAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgIHJlcG9ydFNlcnZpY2Uuc2hvdyh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBvcnQgPSByZXNwb25zZS5kYXRhO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG1vdW50ZWQoKXtcXHJcXG4gICAgICAgICAgICByZXBvcnREYXRhU2VydmljZS5wb2ludFZzVGltZSh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXFxyXFxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2U7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdyYXBoID0gW107XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKGRhdGEsIChncmFwaERhdGEpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmUgPSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5nZW5lcmF0ZVVVSUQoKSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGdyYXBoRGF0YS5sZWZ0QXRobGV0ZSArICcgVlMgJyArIGdyYXBoRGF0YS5yaWdodEF0aGxldGUsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfLmNsb25lRGVlcChsaW5lQmFzZU9wdGlvbnMpLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUub3B0aW9ucy54QXhpcy5jYXRlZ29yaWVzID0gZ3JhcGhEYXRhLnRpbWU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUub3B0aW9ucy5zZXJpZXNbMF0uZGF0YSA9IGdyYXBoRGF0YS5sZWZ0O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLm9wdGlvbnMuc2VyaWVzWzFdLmRhdGEgPSBncmFwaERhdGEucmlnaHQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUub3B0aW9ucy5zZXJpZXNbMF0ubmFtZSA9IGdyYXBoRGF0YS5sZWZ0QXRobGV0ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5vcHRpb25zLnNlcmllc1sxXS5uYW1lID0gZ3JhcGhEYXRhLnJpZ2h0QXRobGV0ZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGgucHVzaChsaW5lKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvaW50VnNUaW1lR3JhcGhzID0gZ3JhcGg7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdhW2RhdGEtdG9nZ2xlPVxcXCJ0YWJcXFwiXScpLm9uKCdzaG93bi5icy50YWInLCAoZSk9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goc2VsZi5wb2ludFZzVGltZUdyYXBocywgKGdyYXBoRGF0YSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJlZnNbZ3JhcGhEYXRhLmlkXVswXS5jaGFydC5yZWZsb3coKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgcmVwb3J0RGF0YVNlcnZpY2Uub2ZmZW5zaXZlRGVmZW5zaXZlKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50ZXJPZmZlbnNpdmVHYXVnZS5kYXRhID0gZGF0YS5jb3VudGVyT2ZmZW5zaXZlLmRhdGE7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZlbnNpdmVHYXVnZS5kYXRhID0gZGF0YS5vZmZlbnNpdmUuZGF0YTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmVuc2l2ZUdhdWdlLmRhdGEgPSBkYXRhLmRlZmVuc2l2ZS5kYXRhO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSlcXHJcXG5cXHJcXG4gICAgICAgICAgICByZXBvcnREYXRhU2VydmljZS5jb21iYXRTdGF0dXModGhpcy4kcm91dGUucGFyYW1zLmlkLFxcclxcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwaWUgPSBfLmNsb25lRGVlcChwaWVCYXNlT3B0aW9ucyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcGllLnNlcmllc1swXS5kYXRhID0gZGF0YTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBpZSA9IHBpZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgcmVwb3J0RGF0YVNlcnZpY2UucGFycnkodGhpcy4kcm91dGUucGFyYW1zLmlkLFxcclxcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhdGVnb3JpZXMgPSByZXNwb25zZS5jYXRlZ29yaWVzO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiYXIgPSBfLmNsb25lRGVlcChiYXJCYXNlT3B0aW9ucyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyLnNlcmllc1swXS5kYXRhID0gZGF0YTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXIueEF4aXMuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXIgPSBiYXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9KVxcclxcblxcclxcbiAgICAgICAgICAgIHJlcG9ydERhdGFTZXJ2aWNlLnN1bW1hcnkodGhpcy4kcm91dGUucGFyYW1zLmlkLFxcclxcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0aXZlbmVzcyA9IGRhdGEuZWZmZWN0aXZlbmVzcztcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkID0gZGF0YS52YWxpZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF2ZXJhZ2UgPSBkYXRhLmF2ZXJhZ2U7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJmZWN0aW9uID0gZGF0YS5wZXJmZWN0aW9uO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUNvbnN1bWVkID0gZGF0YS5jb25zdW1lZFRpbWVcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTRhNWViYjM3IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3ZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSAzNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmdhdWdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5nb2FsLXdyYXBwZXIge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4uLy4uLy4uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZT83Yjk2OTk3YVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBYUE7SUFDQSx3QkFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0NBQ0FcIixcImZpbGVcIjpcImdhdWdlLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxkaXYgOmlkPVxcXCJjb250YWluZXJJZFxcXCIgY2xhc3M9XFxcImdhdWdlXFxcIj5cXHJcXG4gICAgICAgIDxoNCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPjxiPnt7dGl0bGV9fTwvYj48L2g0PlxcclxcbiAgICAgICAgPGNhbnZhcyA6aWQ9XFxcImVsZW1lbnRJZFxcXCI+PC9jYW52YXM+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnb2FsLXdyYXBwZXIgY2xlYXJmaXhcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIDppZD1cXFwidGV4dElkXFxcIiBjbGFzcz1cXFwiZ2F1Z2UtdmFsdWUgcHVsbC1sZWZ0XFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdhdWdlLXZhbHVlIHB1bGwtbGVmdFxcXCI+JTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBpZD1cXFwiZ29hbC10ZXh0XFxcIiBjbGFzcz1cXFwiZ29hbC12YWx1ZSBwdWxsLXJpZ2h0XFxcIj4xMDAlPC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHN0eWxlPlxcclxcbiAgICAuZ2F1Z2Uge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmdvYWwtd3JhcHBlciB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuPHNjcmlwdD5cXHJcXG4gICAgaW1wb3J0IHV1aWRNaXhpbiBmcm9tICdiYXNlL21peGlucy91dWlkJ1xcclxcbiAgICBpbXBvcnQge29wdHN9IGZyb20gJy4vc3R1YnMvZ2F1Z2VPcHRzU3R1YidcXHJcXG4gICAgZXhwb3J0IGRlZmF1bHR7XFxyXFxuXFxyXFxuICAgICAgICBwcm9wczoge1xcclxcbiAgICAgICAgICAgIHZhbHVlOiB7cmVxdWlyZWQ6IHRydWV9LFxcclxcbiAgICAgICAgICAgIHRpdGxlOiB7ZGVmYXVsdDogJyd9LFxcclxcbiAgICAgICAgICAgIGNvbG9yOiB7cmVxdWlyZWQ6IHRydWV9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgd2F0Y2g6IHtcXHJcXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHZhbCkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLnNldCh2YWwpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBkYXRhKCl7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgICAgICAgZ2F1Z2U6IG51bGwsXFxyXFxuICAgICAgICAgICAgICAgIG9wdHM6IHt9LFxcclxcbiAgICAgICAgICAgICAgICB0aW1lb3V0SGFuZGxlOiBudWxsXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxyXFxuICAgICAgICAgICAgZWxlbWVudElkKCl7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlVVVJRCgpXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBjb250YWluZXJJZCgpe1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVVVSUQoKVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgdGV4dElkKCl7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlVVVJRCgpXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG1peGluczogW3V1aWRNaXhpbl0sXFxyXFxuICAgICAgICBtb3VudGVkKCl7XFxyXFxuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XFxyXFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVkcmF3KTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgZHJhdygpIHtcXHJcXG4gICAgICAgICAgICAgICAgdmFyIGdhdWdlTGliID0gcmVxdWlyZSgnZ2F1Z2UuanMnKTtcXHJcXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJZCkub2Zmc2V0V2lkdGg7XFxyXFxuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSB3aWR0aCAvIDI7XFxyXFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGggKyAncHgnKTtcXHJcXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgaGVpZ2h0ICsgJ3B4Jyk7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMub3B0cyA9IF8uY2xvbmVEZWVwKG9wdHMpO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdHMuY29sb3JTdGFydCA9IHRoaXMuY29sb3I7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2UgPSBuZXcgZ2F1Z2VMaWIuR2F1Z2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpKS5zZXRPcHRpb25zKHRoaXMub3B0cyk7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2UubWF4VmFsdWUgPSAxMDA7IC8vIHNldCBtYXggZ2F1Z2UgdmFsdWVcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5zZXRNaW5WYWx1ZSgwKTsgIC8vIFByZWZlciBzZXR0ZXIgb3ZlciBnYXVnZS5taW5WYWx1ZSA9IDBcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5hbmltYXRpb25TcGVlZCA9IDY1OyAvLyBzZXQgYW5pbWF0aW9uIHNwZWVkICgzMiBpcyBkZWZhdWx0IHZhbHVlKVxcclxcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLnNldCh0aGlzLnZhbHVlKTsgLy8gc2V0IGFjdHVhbCB2YWx1ZVxcclxcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLnNldFRleHRGaWVsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnRleHRJZCkpO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgcmVkcmF3KCkge1xcclxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5zYXZlKCk7XFxyXFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcXHJcXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykuY2xlYXJSZWN0KDAsIDAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLmNhbnZhcy53aWR0aCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykuY2FudmFzLmhlaWdodCk7XFxyXFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLnJlc3RvcmUoKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZW91dEhhbmRsZSlcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SGFuZGxlKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0SGFuZGxlID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5kcmF3LCAyNTApO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbjwvc2NyaXB0PlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmE3ODY1YTAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWVcbi8vIG1vZHVsZSBpZCA9IDM2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDExIiwiLyoqXG4gKiBnYXVnZS5qc1xuICogQ29weXJpZ2h0KGMpIDIwMTUgVmxhZGltaXIgUm9ka2luIDxtYWlsQHZvdmFuci5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5HYXVnZSA9IGZhY3RvcnkoKTtcbiAgICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciB0ZW1wbGF0ZSA9ICc8c3ZnIHZlcnNpb249XCIxLjFcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgJyArXG4gICAgICAgICdwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiIHZpZXdCb3g9XCItNTAgLTUwIDEwMCAxMDBcIj4nICtcbiAgICAgICAgJzxkZWZzPicgK1xuICAgICAgICAgICAgJzxnIGlkPVwiZ2F1Z2UtbWFya1wiIGNsYXNzPVwiZ2F1Z2UtbWFya1wiPicgK1xuICAgICAgICAgICAgICAgICc8bGluZSB4MT1cIjBcIiB5MT1cIi00MC41XCIgeDI9XCIwXCIgeTI9XCItNDAuNzVcIiAvPicgK1xuICAgICAgICAgICAgJzwvZz4nICtcblxuICAgICAgICAgICAgJzxnIGlkPVwiZ2F1Z2UtdGlja1wiIGNsYXNzPVwiZ2F1Z2UtdGlja1wiPicgK1xuICAgICAgICAgICAgICAgICc8bGluZSB4MT1cIjBcIiB5MT1cIi00MC41XCIgeDI9XCIwXCIgeTI9XCItNDEuNVwiIC8+JyArXG4gICAgICAgICAgICAnPC9nPicgK1xuICAgICAgICAnPC9kZWZzPicgK1xuXG4gICAgICAgICc8ZyBjbGFzcz1cImdhdWdlLW1hcmtzXCI+PC9nPicgK1xuICAgICAgICAnPGcgY2xhc3M9XCJnYXVnZS10aWNrc1wiPjwvZz4nICtcbiAgICAgICAgJzxnIGNsYXNzPVwiZ2F1Z2UtbGFiZWxzXCI+PC9nPicgK1xuXG4gICAgICAgICc8ZyBjbGFzcz1cImdhdWdlLXNjYWxlLWFyY1wiPjwvZz4nICtcbiAgICAgICAgJzxnIGNsYXNzPVwiZ2F1Z2Utc2NhbGUtYXJjLXdhcm5pbmdcIj48L2c+JyArXG4gICAgICAgICc8ZyBjbGFzcz1cImdhdWdlLXNjYWxlLWFyYy1kYW5nZXJcIj48L2c+JyArXG5cbiAgICAgICAgJzxnIGNsYXNzPVwiZ2F1Z2UtaGFuZFwiPicgK1xuICAgICAgICAgICAgJzxwb2x5Z29uIHBvaW50cz1cIi0xLDAgMCwtNDEgMSwwXCIgLz4nICtcbiAgICAgICAgICAgICc8Y2lyY2xlIGN4PVwiMFwiIGN5PVwiMFwiIHI9XCIyXCIgLz4nICtcbiAgICAgICAgJzwvZz4nICtcbiAgICAnPC9zdmc+JztcblxuICAgIHZhciBHYXVnZTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvIE9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBvLmJsb2NrXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG8uYWN0dWFsVmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvLmxhYmVsc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbby5tYXhWYWx1ZV1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW28ud2FybmluZ1ZhbHVlXSBpbiBwZXJjZW50c1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbby5kYW5nZXJWYWx1ZV0gaW4gcGVyY2VudGVzXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1vZHVsZSBHYXVnZVxuICAgICAqL1xuICAgIEdhdWdlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgdGhpcy5fYmxvY2sgPSBvLmJsb2NrO1xuICAgICAgICB0aGlzLl9hY3R1YWxWYWx1ZSA9IG8uYWN0dWFsVmFsdWU7XG4gICAgICAgIHRoaXMuX2xhYmVscyA9IG8ubGFiZWxzO1xuICAgICAgICB0aGlzLl9tYXhWYWx1ZSA9IG8ubWF4VmFsdWUgfHwgdGhpcy5fbGFiZWxzW3RoaXMuX2xhYmVscy5sZW5ndGggLSAxXTtcbiAgICAgICAgdGhpcy5fd2FybmluZ1ZhbHVlID0gby53YXJuaW5nVmFsdWU7XG4gICAgICAgIHRoaXMuX2RhbmdlclZhbHVlID0gby5kYW5nZXJWYWx1ZTtcblxuICAgICAgICB0aGlzLl9kZWx0YSA9IDEwMCAvIHRoaXMuX21heFZhbHVlO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlcigpO1xuICAgIH07XG5cbiAgICBHYXVnZS5wcm90b3R5cGUgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3JlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fYmxvY2suaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJIYW5kKCk7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJUaWNrcygpO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyTWFya3MoKTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlclRpY2tzTGFiZWxzKCk7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJBcmNTY2FsZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3dhcm5pbmdWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyQXJjV2FybmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX2RhbmdlclZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJBcmNEYW5nZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4ge051bWJlcn0gZGVncmVlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfdmFsdWVUb0RlZ3JlZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAvLyAtMTIwIGRlZyAtIGV4Y2x1ZGVkIHBhcnRcbiAgICAgICAgICAgIC8vIC0yMTAgZGVnIC0gcm90YXRlIHN0YXJ0IHRvIHNpbW1ldHJpY2FsIHZpZXdcbiAgICAgICAgICAgIHJldHVybiAodmFsdWUgLyB0aGlzLl9tYXhWYWx1ZSAqICgzNjAgLSAxMjApKSAtIDIxMDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSByYWRpdXNcbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBwb3NpdGlvblxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3ZhbHVlVG9Qb3NpdGlvbjogZnVuY3Rpb24gKHZhbHVlLCByYWRpdXMpIHtcbiAgICAgICAgICAgIHZhciBhID0gdGhpcy5fdmFsdWVUb0RlZ3JlZSh2YWx1ZSkgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICAgICAgdmFyIHggPSByYWRpdXMgKiBNYXRoLmNvcyhhKTtcbiAgICAgICAgICAgIHZhciB5ID0gcmFkaXVzICogTWF0aC5zaW4oYSk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgICAgICB5OiB5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHBlcmNlbnRcbiAgICAgICAgICogQHJldHVybiB7TnVtYmVyfSB2YWx1ZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3BlcmNlbnRUb1ZhbHVlOiBmdW5jdGlvbiAocGVyY2VudCkge1xuICAgICAgICAgICAgcmV0dXJuIHBlcmNlbnQgLyB0aGlzLl9kZWx0YTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9yZW5kZXJIYW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9oYW5kID0gJCgnLmdhdWdlLWhhbmQnLCB0aGlzLl9ibG9jaylbMF07XG4gICAgICAgICAgICB0aGlzLl9zZXRWYWx1ZSh0aGlzLl9hY3R1YWxWYWx1ZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfc2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2hhbmQuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgnICsgKHRoaXMuX3ZhbHVlVG9EZWdyZWUodGhpcy5fYWN0dWFsVmFsdWUpICsgOTApICsgJ2RlZyknO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKi9cbiAgICAgICAgc2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fYWN0dWFsVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3NldFZhbHVlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfcmVuZGVyVGlja3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0aWNrc0NhY2hlID0gJyc7XG4gICAgICAgICAgICB2YXIgdGlja3MgPSAkKCcuZ2F1Z2UtdGlja3MnLCB0aGlzLl9ibG9jaylbMF07XG5cbiAgICAgICAgICAgIHZhciB0b3RhbCA9IHRoaXMuX2xhYmVscy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgZm9yICh2YXIgdmFsdWUgPSAwOyB2YWx1ZSA8PSB0b3RhbDsgdmFsdWUrKykge1xuICAgICAgICAgICAgICAgIHRpY2tzQ2FjaGUgKz0gdGhpcy5fYnVpbGRUaWNrKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGlja3MuaW5uZXJIVE1MID0gdGlja3NDYWNoZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX2J1aWxkVGljazogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJzx1c2UgeGxpbms6aHJlZj1cIiNnYXVnZS10aWNrXCIgdHJhbnNmb3JtPVwicm90YXRlKCcgKyAodGhpcy5fdmFsdWVUb0RlZ3JlZSh2YWx1ZSkgKyA5MCkgKyAnKVwiIC8+JztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9yZW5kZXJUaWNrc0xhYmVsczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxhYmVsc0NhY2hlID0gJyc7XG4gICAgICAgICAgICB2YXIgbGFiZWxzID0gJCgnLmdhdWdlLWxhYmVscycsIHRoaXMuX2Jsb2NrKVswXTtcblxuICAgICAgICAgICAgdmFyIHRvdGFsID0gdGhpcy5fbGFiZWxzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBmb3IgKHZhciB2YWx1ZSA9IDA7IHZhbHVlIDw9IHRvdGFsOyB2YWx1ZSsrKSB7XG4gICAgICAgICAgICAgICAgbGFiZWxzQ2FjaGUgKz0gdGhpcy5fYnVpbGRUaWNrTGFiZWwodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYWJlbHMuaW5uZXJIVE1MID0gbGFiZWxzQ2FjaGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfYnVpbGRUaWNrTGFiZWw6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5fdmFsdWVUb1Bvc2l0aW9uKHZhbHVlLCA0Myk7XG5cbiAgICAgICAgICAgIHJldHVybiAnPHRleHQgeD1cIicgKyBwb3NpdGlvbi54ICsgJ1wiIHk9XCInICsgcG9zaXRpb24ueSArICdcIiB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiPicgK1xuICAgICAgICAgICAgICAgIHRoaXMuX2xhYmVsc1t2YWx1ZV0gKyAnPC90ZXh0Pic7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfcmVuZGVyTWFya3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtYXJrc0NhY2hlID0gJyc7XG4gICAgICAgICAgICB2YXIgbWFya3MgPSAkKCcuZ2F1Z2UtbWFya3MnLCB0aGlzLl9ibG9jaylbMF07XG5cbiAgICAgICAgICAgIHZhciB0b3RhbCA9ICh0aGlzLl9sYWJlbHMubGVuZ3RoIC0gMSkgKiAxMDtcbiAgICAgICAgICAgIGZvciAodmFyIHZhbHVlID0gMDsgdmFsdWUgPD0gdG90YWw7IHZhbHVlKyspIHtcbiAgICAgICAgICAgICAgICAvLyBTa2lwIG1hcmtzIG9uIHRpY2tzXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICUgMTAgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hcmtzQ2FjaGUgKz0gdGhpcy5fYnVpbGRNYXJrKHZhbHVlIC8gMTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXJrcy5pbm5lckhUTUwgPSBtYXJrc0NhY2hlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfYnVpbGRNYXJrOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnPHVzZSB4bGluazpocmVmPVwiI2dhdWdlLW1hcmtcIiB0cmFuc2Zvcm09XCJyb3RhdGUoJyArICh0aGlzLl92YWx1ZVRvRGVncmVlKHZhbHVlKSArIDkwKSArICcpXCIgLz4nO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3JlbmRlckFyY1NjYWxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWF4ID0gMTAwO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fZGFuZ2VyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBtYXggPSB0aGlzLl9kYW5nZXJWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuX3dhcm5pbmdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG1heCA9IHRoaXMuX3dhcm5pbmdWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGdyb3VwID0gJCgnLmdhdWdlLXNjYWxlLWFyYycsIHRoaXMuX2Jsb2NrKVswXTtcbiAgICAgICAgICAgIHZhciBhcmMgPSB0aGlzLl9idWlsZEFyYygwLCBtYXgsIDM5KTtcblxuICAgICAgICAgICAgZ3JvdXAuaW5uZXJIVE1MID0gYXJjO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3JlbmRlckFyY1dhcm5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtYXggPSAxMDA7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9kYW5nZXJWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG1heCA9IHRoaXMuX2RhbmdlclZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZ3JvdXAgPSAkKCcuZ2F1Z2Utc2NhbGUtYXJjLXdhcm5pbmcnLCB0aGlzLl9ibG9jaylbMF07XG4gICAgICAgICAgICB2YXIgYXJjID0gdGhpcy5fYnVpbGRBcmModGhpcy5fd2FybmluZ1ZhbHVlLCBtYXgsIDM5KTtcblxuICAgICAgICAgICAgZ3JvdXAuaW5uZXJIVE1MID0gYXJjO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3JlbmRlckFyY0RhbmdlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGdyb3VwID0gJCgnLmdhdWdlLXNjYWxlLWFyYy1kYW5nZXInLCB0aGlzLl9ibG9jaylbMF07XG4gICAgICAgICAgICB2YXIgYXJjID0gdGhpcy5fYnVpbGRBcmModGhpcy5fZGFuZ2VyVmFsdWUsIDEwMCwgMzkpO1xuXG4gICAgICAgICAgICBncm91cC5pbm5lckhUTUwgPSBhcmM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBtaW4gaW4gcGVyY2VudHNcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCBpbiBwZXJjZW50c1xuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gcmFkaXVzXG4gICAgICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9idWlsZEFyYzogZnVuY3Rpb24gKG1pbiwgbWF4LCByYWRpdXMpIHtcbiAgICAgICAgICAgIG1pbiA9IHRoaXMuX3BlcmNlbnRUb1ZhbHVlKG1pbik7XG4gICAgICAgICAgICBtYXggPSB0aGlzLl9wZXJjZW50VG9WYWx1ZShtYXgpO1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uU3RhcnQgPSB0aGlzLl92YWx1ZVRvUG9zaXRpb24obWluLCByYWRpdXMpO1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uRW5kID0gdGhpcy5fdmFsdWVUb1Bvc2l0aW9uKG1heCwgcmFkaXVzKTtcbiAgICAgICAgICAgIHZhciBhbHBoYSA9ICgzNjAgLSAxMjApIC8gdGhpcy5fbWF4VmFsdWUgKiAobWF4IC0gbWluKTtcbiAgICAgICAgICAgIHZhciBhcmMgPSAnPHBhdGggZD1cIk0nICsgcG9zaXRpb25TdGFydC54ICsgJywnICsgcG9zaXRpb25TdGFydC55ICtcbiAgICAgICAgICAgICAgICAnIEEnICsgcmFkaXVzICsgJywnICsgcmFkaXVzICsgJyAwICcgK1xuICAgICAgICAgICAgICAgICgoYWxwaGEgPiAxODApID8gMSA6IDApICsgJywxICcgK1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uRW5kLnggKyAnLCcgKyBwb3NpdGlvbkVuZC55ICtcbiAgICAgICAgICAgICAgICAnXCIgc3R5bGU9XCJmaWxsOiBub25lO1wiIC8+JztcblxuICAgICAgICAgICAgcmV0dXJuIGFyYztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKi9cbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rlc3Ryb3knKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIEdhdWdlO1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2F1Z2UuanMvZGlzdC9nYXVnZS5qc1xuLy8gbW9kdWxlIGlkID0gMzc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNmE3ODY1YTAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2dhdWdlLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZ2F1Z2UudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNmE3ODY1YTAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZ2F1Z2UudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxzcG9ydGVjaC1zY291dGluZ1xcXFxyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcY2hhcnRzXFxcXGdhdWdlc1xcXFxnYXVnZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBnYXVnZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmE3ODY1YTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02YTc4NjVhMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWVcbi8vIG1vZHVsZSBpZCA9IDM3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDExIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ3BhZ2UtaGVhZGVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IF92bS4kdCgncmVwb3J0cy5yZXBvcnQnKSxcbiAgICAgIFwiYnJlYWRjcnVtYnNcIjogX3ZtLmJyZWFkY3J1bWJzXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGVudCByZXBvcnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTEwXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTMgY29sLXhzLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdGV4dFwiXG4gIH0sIFtfdm0uX3YoXCJFRkZFQ1RJVkVORVNTXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1yaWdodFwiXG4gIH0sIFtfYygnaDUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24taGVhZGVyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVmZmVjdGl2ZW5lc3MucGVyY2VudGFnZSkgKyBcIiVcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IHRleHQtbGVmdFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5lZmZlY3RpdmVuZXNzLnZpY3RvcmllcykgKyBcIlZcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5lZmZlY3RpdmVuZXNzLmRlZmVhdHMpICsgXCJWXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtc20tMyBjb2wteHMtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi10ZXh0XCJcbiAgfSwgW192bS5fdihcIlZBTElEXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1yaWdodFwiXG4gIH0sIFtfYygnaDUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24taGVhZGVyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnZhbGlkLnBlcmNlbnRhZ2UpICsgXCIlXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiB0ZXh0LWxlZnRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udmFsaWQudmFsaWQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS52YWxpZC5ub1ZhbGlkKSArIFwiXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtc20tMyBjb2wteHMtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi10ZXh0XCJcbiAgfSwgW192bS5fdihcIkFWRVJBR0VcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiB0ZXh0LXJpZ2h0XCJcbiAgfSwgW19jKCdoNScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1oZWFkZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uYXZlcmFnZS5wZXJjZW50YWdlKSArIFwiJVwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1sZWZ0XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmF2ZXJhZ2UuZ2l2ZW4pICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5hdmVyYWdlLnJlY2VpdmVkKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtc20tMyBjb2wteHMtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi10ZXh0XCJcbiAgfSwgW192bS5fdihcIlBFUkZFQ1RJT05cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiB0ZXh0LXJpZ2h0XCJcbiAgfSwgW19jKCdoNScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1oZWFkZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0ucGVyZmVjdGlvbi5wZXJjZW50YWdlKSArIFwiJVwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1sZWZ0XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnBlcmZlY3Rpb24ucGVyZmVjdCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnBlcmZlY3Rpb24uaW1wZXJmZWN0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tYmxvY2tcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdGV4dFwiXG4gIH0sIFtfdm0uX3YoXCJUSU1FIENPTlNVTUVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiB0ZXh0LXJpZ2h0XCJcbiAgfSwgW19jKCdoNScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1oZWFkZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGltZUNvbnN1bWVkLnBlcmNlbnRhZ2UpICsgXCIlXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiB0ZXh0LWxlZnRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udGltZUNvbnN1bWVkLnRpbWVDb25zdW1lZCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpbWVDb25zdW1lZC50aW1lSWRsZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0xMFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5hdi10YWJzLWN1c3RvbVwiXG4gIH0sIFtfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibmF2IG5hdi10YWJzXCJcbiAgfSwgX3ZtLl9sKChfdm0ucG9pbnRWc1RpbWVHcmFwaHMpLCBmdW5jdGlvbihwb2ludFZzVGltZUdyYXBoLCBpbmRleCkge1xuICAgIHJldHVybiBfYygnbGknLCB7XG4gICAgICBjbGFzczoge1xuICAgICAgICAnYWN0aXZlJzogaW5kZXggPT0gMFxuICAgICAgfVxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiAnIycgKyBwb2ludFZzVGltZUdyYXBoLmlkLFxuICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidGFiXCIsXG4gICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiBcImZhbHNlXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhwb2ludFZzVGltZUdyYXBoLm5hbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKVxuICB9KSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGFiLWNvbnRlbnRcIlxuICB9LCBfdm0uX2woKF92bS5wb2ludFZzVGltZUdyYXBocyksIGZ1bmN0aW9uKHBvaW50VnNUaW1lR3JhcGgsIGluZGV4KSB7XG4gICAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZVwiLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgJ2FjdGl2ZSc6IGluZGV4ID09IDBcbiAgICAgIH0sXG4gICAgICBhdHRyczoge1xuICAgICAgICBcImlkXCI6IHBvaW50VnNUaW1lR3JhcGguaWRcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2hpZ2hjaGFydHMnLCB7XG4gICAgICByZWY6IHBvaW50VnNUaW1lR3JhcGguaWQsXG4gICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwib3B0aW9uc1wiOiBwb2ludFZzVGltZUdyYXBoLm9wdGlvbnNcbiAgICAgIH1cbiAgICB9KV0sIDEpXG4gIH0pKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMVwiXG4gIH0sIFtfYygnZ2F1Z2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLm9mZmVuc2l2ZUdhdWdlLmRhdGEsXG4gICAgICBcImNvbG9yXCI6IFwiZ3JlZW5cIixcbiAgICAgIFwidGl0bGVcIjogXCJDb3VudGVyb2ZmZW5zaXZlXCJcbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMVwiXG4gIH0sIFtfYygnZ2F1Z2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmRlZmVuc2l2ZUdhdWdlLmRhdGEsXG4gICAgICBcImNvbG9yXCI6IFwieWVsbG93XCIsXG4gICAgICBcInRpdGxlXCI6IFwiRGVmZW5zaXZlXCJcbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMVwiXG4gIH0sIFtfYygnZ2F1Z2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmNvdW50ZXJPZmZlbnNpdmVHYXVnZS5kYXRhLFxuICAgICAgXCJjb2xvclwiOiBcInJlZFwiLFxuICAgICAgXCJ0aXRsZVwiOiBcIk9mZmVuc2l2ZVwiXG4gICAgfVxuICB9KV0sIDEpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtOFwiXG4gIH0sIFtfYygnaGlnaGNoYXJ0cycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJvcHRpb25zXCI6IF92bS5waWVcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC00XCJcbiAgfSwgW19jKCdoaWdoY2hhcnRzJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLmJhclxuICAgIH1cbiAgfSldLCAxKV0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00YTVlYmIzN1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNGE1ZWJiMzchLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnYXVnZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IF92bS5jb250YWluZXJJZFxuICAgIH1cbiAgfSwgW19jKCdoNCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiXG4gIH0sIFtfYygnYicsIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2NhbnZhcycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBfdm0uZWxlbWVudElkXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnb2FsLXdyYXBwZXIgY2xlYXJmaXhcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2F1Z2UtdmFsdWUgcHVsbC1sZWZ0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogX3ZtLnRleHRJZFxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdhdWdlLXZhbHVlIHB1bGwtbGVmdFwiXG4gIH0sIFtfdm0uX3YoXCIlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdvYWwtdmFsdWUgcHVsbC1yaWdodFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiZ29hbC10ZXh0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIxMDAlXCIpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZhNzg2NWEwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02YTc4NjVhMCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlXG4vLyBtb2R1bGUgaWQgPSA0MTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNGE1ZWJiMzchLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3ZpZXcudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjYwNGI0ZDIyXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00YTVlYmIzNyEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdmlldy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTRhNWViYjM3IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi92aWV3LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNGE1ZWJiMzchLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IDQ1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDExIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02YTc4NjVhMCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZ2F1Z2UudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjEwOGNiM2JiXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02YTc4NjVhMCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZ2F1Z2UudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02YTc4NjVhMCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZ2F1Z2UudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02YTc4NjVhMCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiXSwic291cmNlUm9vdCI6IiJ9