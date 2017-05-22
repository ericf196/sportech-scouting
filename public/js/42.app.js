webpackJsonp([42,29],{

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(446)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(306),
  /* template */
  __webpack_require__(406),
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

/***/ 244:
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

/***/ 245:
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

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uuid = __webpack_require__(242);

var _uuid2 = _interopRequireDefault(_uuid);

var _gaugeOptsStub = __webpack_require__(320);

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
            var gaugeLib = __webpack_require__(375);
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

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pageHeader = __webpack_require__(194);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _gauge = __webpack_require__(376);

var _gauge2 = _interopRequireDefault(_gauge);

var _reports = __webpack_require__(245);

var _reports2 = _interopRequireDefault(_reports);

var _reportService = __webpack_require__(244);

var _reportService2 = _interopRequireDefault(_reportService);

var _reportDataService = __webpack_require__(338);

var _reportDataService2 = _interopRequireDefault(_reportDataService);

var _uuid = __webpack_require__(242);

var _uuid2 = _interopRequireDefault(_uuid);

var _lineOptions = __webpack_require__(323);

var _pieOptions = __webpack_require__(324);

var _barOptions = __webpack_require__(321);

var _gaugeOptions = __webpack_require__(322);

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

/***/ 320:
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

/***/ 321:
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

/***/ 322:
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

/***/ 323:
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

/***/ 324:
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

/***/ 338:
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

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.report {\n    background-color: white;\n}\n.border-right {\n    border-right: 1px solid #666;\n}\n.description-text {\n    font-size: 20px;\n    font-weight: bold;\n}\n.description-percentage {\n    font-size: 15px;\n    font-weight: bold;\n}\n.description-header {\n    font-size: 20px;\n    font-weight: bold;\n}\n\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/reports/view.vue?34a79e8a"],"names":[],"mappings":";AA6KA;IACA,wBAAA;CACA;AAEA;IACA,6BAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA","file":"view.vue","sourcesContent":["<template>\r\n    <div>\r\n        <page-header :title=\"$t('reports.report')\" :breadcrumbs=\"breadcrumbs\"></page-header>\r\n        <section class=\"content report\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-md-10\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-3 col-xs-6\">\r\n                            <div class=\"description-block border-right\">\r\n                                <span class=\"description-text\">EFFECTIVENESS</span>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-6 text-right\">\r\n                                        <h5 class=\"description-header\">{{effectiveness.percentage}}%</h5>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-xs-6 text-left\">\r\n                                        <span class=\"description-percentage text-green\">\r\n                                            {{effectiveness.victories}}V\r\n                                        </span>\r\n                                        <br>\r\n                                        <span class=\"description-percentage text-red\">\r\n                                            {{effectiveness.defeats}}V\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- /.description-block -->\r\n                        </div>\r\n                        <!-- /.col -->\r\n                        <div class=\"col-sm-3 col-xs-6\">\r\n                            <div class=\"description-block border-right\">\r\n                                <span class=\"description-text\">VALID</span>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-6 text-right\">\r\n                                        <h5 class=\"description-header\">{{valid.percentage}}%</h5>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-xs-6 text-left\">\r\n                                        <span class=\"description-percentage text-green\">\r\n                                            {{valid.valid}}\r\n                                        </span>\r\n                                        <br>\r\n                                        <span class=\"description-percentage text-red\">\r\n                                            {{valid.noValid}}\r\n\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- /.description-block -->\r\n                        </div>\r\n                        <!-- /.col -->\r\n                        <div class=\"col-sm-3 col-xs-6\">\r\n                            <div class=\"description-block border-right\">\r\n                                <span class=\"description-text\">AVERAGE</span>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-6 text-right\">\r\n                                        <h5 class=\"description-header\">{{average.percentage}}%</h5>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-xs-6 text-left\">\r\n                                        <span class=\"description-percentage text-green\">\r\n                                            {{average.given}}\r\n                                        </span>\r\n                                        <br>\r\n                                        <span class=\"description-percentage text-red\">\r\n                                            {{average.received}}\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- /.description-block -->\r\n                        </div>\r\n                        <div class=\"col-sm-3 col-xs-6\">\r\n                            <div class=\"description-block border-right\">\r\n                                <span class=\"description-text\">PERFECTION</span>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-6 text-right\">\r\n                                        <h5 class=\"description-header\">{{perfection.percentage}}%</h5>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-xs-6 text-left\">\r\n                                        <span class=\"description-percentage text-green\">\r\n                                            {{perfection.perfect}}\r\n                                        </span>\r\n                                        <br>\r\n                                        <span class=\"description-percentage text-red\">\r\n                                            {{perfection.imperfect}}\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-12 col-md-2\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <div class=\"description-block\">\r\n                                <span class=\"description-text\">TIME CONSUME</span>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-6 text-right\">\r\n                                        <h5 class=\"description-header\">{{timeConsumed.percentage}}%</h5>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-xs-6 text-left\">\r\n                                        <span class=\"description-percentage text-green\">\r\n                                            {{timeConsumed.timeConsumed}}\r\n                                        </span>\r\n                                        <br>\r\n                                        <span class=\"description-percentage text-red\">\r\n                                            {{timeConsumed.timeIdle}}\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- /.description-block -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-md-10\">\r\n                    <div class=\"nav-tabs-custom\">\r\n                        <ul class=\"nav nav-tabs\">\r\n                            <li :class=\"{'active':index == 0}\" v-for=\"(pointVsTimeGraph,index) in pointVsTimeGraphs\">\r\n                                <a :href=\"'#'+pointVsTimeGraph.id\" data-toggle=\"tab\"\r\n                                   aria-expanded=\"false\">\r\n                                    {{pointVsTimeGraph.name}}\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"tab-content\">\r\n                            <div class=\"tab-pane\" :class=\"{'active':index == 0}\" :id=\"pointVsTimeGraph.id\"\r\n                                 v-for=\"(pointVsTimeGraph,index) in pointVsTimeGraphs\">\r\n                                <highcharts :ref=\"pointVsTimeGraph.id\" :options=\"pointVsTimeGraph.options\"></highcharts>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\r\n                            <gauge :value=\"offensiveGauge.data\" color=\"green\" title=\"Counteroffensive\"></gauge>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\r\n                            <gauge :value=\"defensiveGauge.data\" color=\"yellow\" title=\"Defensive\"></gauge>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\r\n                            <gauge :value=\"counterOffensiveGauge.data\" color=\"red\" title=\"Offensive\"></gauge>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-md-8\">\r\n                    <highcharts :options=\"pie\"></highcharts>\r\n                </div>\r\n                <div class=\"col-xs-12 col-md-4\">\r\n                    <highcharts :options=\"bar\"></highcharts>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</template>\r\n<style>\r\n    .report {\r\n        background-color: white;\r\n    }\r\n\r\n    .border-right {\r\n        border-right: 1px solid #666;\r\n    }\r\n\r\n    .description-text {\r\n        font-size: 20px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .description-percentage {\r\n        font-size: 15px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .description-header {\r\n        font-size: 20px;\r\n        font-weight: bold;\r\n    }\r\n\r\n</style>\r\n<script type=\"text/babel\">\r\n    import pageHeader from 'base/components/header/pageHeader.vue'\r\n    import gauge from 'base/components/charts/gauges/gauge.vue'\r\n    import reportsLocales from 'base/lang/admin/reports/reports.js';\r\n    import reportService from 'base/dashboard/services/reports/reportService'\r\n    import reportDataService from 'base/dashboard/services/reports/reportDataService'\r\n    import uuidMixin from 'base/mixins/uuid'\r\n    import {lineBaseOptions} from './stubs/lineOptions'\r\n    import {pieBaseOptions} from './stubs/pieOptions'\r\n    import {barBaseOptions} from './stubs/barOptions'\r\n    import {gaugeBaseOptions} from './stubs/gaugeOptions'\r\n    export default{\r\n        locales: reportsLocales,\r\n        components: {\r\n            pageHeader,\r\n            gauge\r\n        },\r\n        mixins: [uuidMixin],\r\n        data(){\r\n            return {\r\n                reports: {},\r\n                pointVsTimeGraphs: [],\r\n                pie: {},\r\n                bar: {},\r\n                counterOffensiveGauge: {data: 0},\r\n                offensiveGauge: {data: 0},\r\n                defensiveGauge: {data: 0},\r\n                effectiveness: {},\r\n                valid: {},\r\n                average: {},\r\n                perfection: {},\r\n                timeConsumed: {}\r\n            }\r\n        },\r\n        computed: {\r\n            breadcrumbs(){\r\n                return [\r\n                    {\r\n                        href: '/dashboard',\r\n                        title: this.$t('admin.home')\r\n                    },\r\n                    {\r\n                        href: '/reports/' + this.$route.params.id,\r\n                        title: 'admin.view'\r\n                    }\r\n                ]\r\n            },\r\n        },\r\n        created(){\r\n            if (!this.$auth.user().superUser) {\r\n                this.$root.errorToast('No tienes permiso para ver el informe');\r\n                this.$router.push({\r\n                    name: 'reports.list',\r\n                })\r\n            } else {\r\n                reportService.show(this.$route.params.id,\r\n                        (response)=> {\r\n                            this.report = response.data;\r\n                        },\r\n                        (error)=> {\r\n                            console.log(error);\r\n                        })\r\n            }\r\n        },\r\n        mounted(){\r\n            reportDataService.pointVsTime(this.$route.params.id,\r\n                    (response)=> {\r\n                        var data = response;\r\n                        var graph = [];\r\n                        _.each(data, (graphData) => {\r\n                            var line = {\r\n                                id: this.generateUUID(),\r\n                                name: graphData.leftAthlete + ' VS ' + graphData.rightAthlete,\r\n                                options: _.cloneDeep(lineBaseOptions),\r\n                            }\r\n                            line.options.xAxis.categories = graphData.time;\r\n                            line.options.series[0].data = graphData.left;\r\n                            line.options.series[1].data = graphData.right;\r\n                            line.options.series[0].name = graphData.leftAthlete;\r\n                            line.options.series[1].name = graphData.rightAthlete;\r\n\r\n                            graph.push(line);\r\n                        });\r\n                        this.pointVsTimeGraphs = graph;\r\n                        var self = this;\r\n                        this.$nextTick(()=> {\r\n                            $('a[data-toggle=\"tab\"]').on('shown.bs.tab', (e)=> {\r\n                                _.each(self.pointVsTimeGraphs, (graphData) => {\r\n                                    self.$refs[graphData.id][0].chart.reflow();\r\n                                });\r\n                            });\r\n                        })\r\n                    },\r\n                    (error)=> {\r\n                        console.log(error);\r\n                    });\r\n\r\n            reportDataService.offensiveDefensive(this.$route.params.id,\r\n                    (response)=> {\r\n                        var data = response;\r\n                        this.counterOffensiveGauge.data = data.counterOffensive.data;\r\n                        this.offensiveGauge.data = data.offensive.data;\r\n                        this.defensiveGauge.data = data.defensive.data;\r\n                    },\r\n                    (error)=> {\r\n                        console.log(error);\r\n                    })\r\n\r\n            reportDataService.combatStatus(this.$route.params.id,\r\n                    (response)=> {\r\n                        var data = response;\r\n                        var pie = _.cloneDeep(pieBaseOptions);\r\n                        pie.series[0].data = data;\r\n                        this.pie = pie;\r\n                    },\r\n                    (error)=> {\r\n                        console.log(error);\r\n                    })\r\n            reportDataService.parry(this.$route.params.id,\r\n                    (response)=> {\r\n                        var data = response.data;\r\n                        var categories = response.categories;\r\n                        var bar = _.cloneDeep(barBaseOptions);\r\n                        bar.series[0].data = data;\r\n                        bar.xAxis.categories = categories;\r\n                        this.bar = bar;\r\n                    },\r\n                    (error)=> {\r\n                        console.log(error);\r\n                    })\r\n\r\n            reportDataService.summary(this.$route.params.id,\r\n                    (response)=> {\r\n                        var data = response;\r\n                        this.effectiveness = data.effectiveness;\r\n                        this.valid = data.valid;\r\n                        this.average = data.average;\r\n                        this.perfection = data.perfection;\r\n                        this.timeConsumed = data.consumedTime\r\n                    },\r\n                    (error)=> {\r\n                        console.log(error);\r\n                    })\r\n        }\r\n    }\r\n</script>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.gauge {\n    background-color: white;\n}\n.goal-wrapper {\n    font-size: 16px;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/charts/gauges/gauge.vue?7b96997a"],"names":[],"mappings":";AAaA;IACA,wBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA","file":"gauge.vue","sourcesContent":["<template>\r\n    <div :id=\"containerId\" class=\"gauge\">\r\n        <h4 class=\"text-center\"><b>{{title}}</b></h4>\r\n        <canvas :id=\"elementId\"></canvas>\r\n        <div class=\"goal-wrapper clearfix\">\r\n            <span :id=\"textId\" class=\"gauge-value pull-left\"></span>\r\n            <span class=\"gauge-value pull-left\">%</span>\r\n            <span id=\"goal-text\" class=\"goal-value pull-right\">100%</span>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<style>\r\n    .gauge {\r\n        background-color: white;\r\n    }\r\n\r\n    .goal-wrapper {\r\n        font-size: 16px;\r\n        font-weight: bold;\r\n    }\r\n</style>\r\n<script>\r\n    import uuidMixin from 'base/mixins/uuid'\r\n    import {opts} from './stubs/gaugeOptsStub'\r\n    export default{\r\n\r\n        props: {\r\n            value: {required: true},\r\n            title: {default: ''},\r\n            color: {required: true}\r\n        },\r\n        watch: {\r\n            value: function (val) {\r\n                this.gauge.set(val);\r\n            }\r\n        },\r\n        data(){\r\n            return {\r\n                gauge: null,\r\n                opts: {},\r\n                timeoutHandle: null\r\n            }\r\n        },\r\n        computed: {\r\n            elementId(){\r\n                return this.generateUUID()\r\n            },\r\n            containerId(){\r\n                return this.generateUUID()\r\n            },\r\n            textId(){\r\n                return this.generateUUID()\r\n            }\r\n        },\r\n        mixins: [uuidMixin],\r\n        mounted(){\r\n            this.draw();\r\n            window.addEventListener('resize', this.redraw);\r\n        },\r\n        methods: {\r\n            draw() {\r\n                var gaugeLib = require('gauge.js');\r\n                var width = document.getElementById(this.containerId).offsetWidth;\r\n                var height = width / 2;\r\n                document.getElementById(this.elementId).setAttribute('width', width + 'px');\r\n                document.getElementById(this.elementId).setAttribute('height', height + 'px');\r\n                this.opts = _.cloneDeep(opts);\r\n                this.opts.colorStart = this.color;\r\n                this.gauge = new gaugeLib.Gauge(document.getElementById(this.elementId)).setOptions(this.opts);\r\n                this.gauge.maxValue = 100; // set max gauge value\r\n                this.gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0\r\n                this.gauge.animationSpeed = 65; // set animation speed (32 is default value)\r\n                this.gauge.set(this.value); // set actual value\r\n                this.gauge.setTextField(document.getElementById(this.textId));\r\n            },\r\n            redraw() {\r\n                document.getElementById(this.elementId).getContext('2d').save();\r\n                document.getElementById(this.elementId).getContext('2d').setTransform(1, 0, 0, 1, 0, 0);\r\n                document.getElementById(this.elementId).getContext('2d').clearRect(0, 0, document.getElementById(this.elementId).getContext('2d').canvas.width, document.getElementById(this.elementId).getContext('2d').canvas.height);\r\n                document.getElementById(this.elementId).getContext('2d').restore();\r\n\r\n                if (this.timeoutHandle)\r\n                    window.clearTimeout(this.timeoutHandle);\r\n\r\n                this.timeoutHandle = window.setTimeout(this.draw, 250);\r\n            }\r\n        }\r\n    }\r\n</script>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 375:
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

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(448)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(279),
  /* template */
  __webpack_require__(411),
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

/***/ 406:
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

/***/ 411:
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

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(360);
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

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(362);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT82YjhlKioqKioqKioqKiIsIndlYnBhY2s6Ly8vcGFnZUhlYWRlci52dWU/M2QwNyoqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT9jYWUyKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT81ZDk4KioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT9hNjI3KioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdXVpZC5qcz9hMGM4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0U2VydmljZS5qcz84YzIzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9yZXBvcnRzL3JlcG9ydHMuanM/ZDcyZiIsIndlYnBhY2s6Ly8vZ2F1Z2UudnVlIiwid2VicGFjazovLy92aWV3LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9zdHVicy9nYXVnZU9wdHNTdHViLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy9zdHVicy9iYXJPcHRpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy9zdHVicy9nYXVnZU9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3N0dWJzL2xpbmVPcHRpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy9zdHVicy9waWVPcHRpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0RGF0YVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3ZpZXcudnVlP2MzZjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlP2NiM2MiLCJ3ZWJwYWNrOi8vLy4vfi9nYXVnZS5qcy9kaXN0L2dhdWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWU/Y2YzNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWU/NjM2MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWU/NTNiMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWU/ZWRkMyJdLCJuYW1lcyI6WyJtZXRob2RzIiwiZ2VuZXJhdGVVVUlEIiwiZCIsIkRhdGUiLCJnZXRUaW1lIiwid2luZG93IiwicGVyZm9ybWFuY2UiLCJub3ciLCJ1dWlkIiwicmVwbGFjZSIsImMiLCJyIiwiTWF0aCIsInJhbmRvbSIsImZsb29yIiwidG9TdHJpbmciLCJzaG93IiwiaWQiLCJzdWNjZXNzQ2FsYmFjayIsImVycm9yQ2FsbGJhY2siLCJodHRwIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiYm9keSIsImNhdGNoIiwiZXJyb3IiLCJjcmVhdGUiLCJhdGhsZXRlIiwicG9zdCIsImxhdGVzdCIsIm9wdHMiLCJhbmdsZSIsImxpbmVXaWR0aCIsInJhZGl1c1NjYWxlIiwicG9pbnRlciIsImxlbmd0aCIsInN0cm9rZVdpZHRoIiwiY29sb3IiLCJsaW1pdE1heCIsImxpbWl0TWluIiwiY29sb3JTdGFydCIsImNvbG9yU3RvcCIsInN0cm9rZUNvbG9yIiwiZ2VuZXJhdGVHcmFkaWVudCIsImhpZ2hEcGlTdXBwb3J0IiwiYmFyQmFzZU9wdGlvbnMiLCJjaGFydCIsInR5cGUiLCJ0aXRsZSIsInRleHQiLCJ4QXhpcyIsImNhdGVnb3JpZXMiLCJ5QXhpcyIsIm1pbiIsImFsaWduIiwibGFiZWxzIiwib3ZlcmZsb3ciLCJwbG90T3B0aW9ucyIsImJhciIsImRhdGFMYWJlbHMiLCJlbmFibGVkIiwibGVnZW5kIiwibGF5b3V0IiwidmVydGljYWxBbGlnbiIsIngiLCJ5IiwiZmxvYXRpbmciLCJib3JkZXJXaWR0aCIsImJhY2tncm91bmRDb2xvciIsInNoYWRvdyIsImNyZWRpdHMiLCJzZXJpZXMiLCJuYW1lIiwiZGF0YSIsImdhdWdlQmFzZU9wdGlvbnMiLCJoZWlnaHQiLCJtYXgiLCJzdG9wcyIsIm1pbm9yVGlja0ludGVydmFsIiwidGlja0Ftb3VudCIsImZvcm1hdCIsInRvb2x0aXAiLCJ2YWx1ZVN1ZmZpeCIsInBhbmUiLCJzaXplIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiYmFja2dyb3VuZCIsImlubmVyUmFkaXVzIiwib3V0ZXJSYWRpdXMiLCJzaGFwZSIsInNvbGlkZ2F1Z2UiLCJ1c2VIVE1MIiwibGluZUJhc2VPcHRpb25zIiwiZm9ybWF0dGVyIiwidmFsdWUiLCJjcm9zc2hhaXJzIiwic2hhcmVkIiwibGluZSIsIm1hcmtlciIsInJhZGl1cyIsImNyb3AiLCJzdHlsZSIsImZvbnRXZWlnaHQiLCJ0ZXh0T3V0bGluZSIsImZvbnRTaXplIiwiaW5kZXgiLCJzeW1ib2wiLCJwaWVCYXNlT3B0aW9ucyIsInBsb3RCYWNrZ3JvdW5kQ29sb3IiLCJwbG90Qm9yZGVyV2lkdGgiLCJwbG90U2hhZG93IiwicG9pbnRGb3JtYXQiLCJwaWUiLCJhbGxvd1BvaW50U2VsZWN0IiwiY3Vyc29yIiwic2hvd0luTGVnZW5kIiwiY29sb3JCeVBvaW50IiwicG9pbnRWc1RpbWUiLCJvZmZlbnNpdmVEZWZlbnNpdmUiLCJjb21iYXRTdGF0dXMiLCJwYXJyeSIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTs7Ozs7a0JBSUE7c0JBRUE7QUFIQTs7a0JBS0E7eUNBQ0E7dUJBQ0E7QUFHQTtBQU5BO0FB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R0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDeE1BLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNsQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJqcy80Mi5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNGE1ZWJiMzchLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3ZpZXcudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi92aWV3LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTRhNWViYjM3IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3ZpZXcudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxzcG9ydGVjaC1zY291dGluZ1xcXFxyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGRhc2hib2FyZFxcXFxtb2R1bGVzXFxcXHJlcG9ydHNcXFxcdmlldy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB2aWV3LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00YTVlYmIzN1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTRhNWViYjM3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg4XG4vLyBtb2R1bGUgY2h1bmtzID0gNDIiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi02NmY4NWU3ZCFzYXNzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNjZmODVlN2QhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHNwb3J0ZWNoLXNjb3V0aW5nXFxcXHJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxoZWFkZXJcXFxccGFnZUhlYWRlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwYWdlSGVhZGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02NmY4NWU3ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTY2Zjg1ZTdkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMxIDMyIDMzIDM0IDM1IDM2IDM3IDM4IDM5IDQwIDQxIDQyIDQzIDQ0IDQ1IDQ2IDQ3IDQ4IDQ5IDUwIiwiPHRlbXBsYXRlPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50LWhlYWRlclwiPlxyXG4gICAgICAgIDxoMT5cclxuICAgICAgICAgICAge3t0aXRsZX19XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8b2wgY2xhc3M9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJicmVhZGNydW1iLmhyZWZcIiBhY3RpdmUtY2xhc3M9XCJhY3RpdmVcIiB0YWc9XCJsaVwiIHYtZm9yPVwiYnJlYWRjcnVtYiBpbiBicmVhZGNydW1ic1wiPlxyXG4gICAgICAgICAgICAgICAge3skdChicmVhZGNydW1iLnRpdGxlKX19XHJcbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgPC9vbD5cclxuICAgIDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgcmVsPVwic3R5bGVzaGVldC9zY3NzXCI+XHJcbiAgICAuYWRtaW4taGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDk3cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnJlYWRjcnVtYnM6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHBhZ2VIZWFkZXIudnVlPzRiODkxOTIwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYWRtaW4taGVhZGVyIHtcXG4gIGhlaWdodDogOTdweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5hZG1pbi1oZWFkZXIgLnJvdyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZmODVlN2QhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMzEgMzIgMzMgMzQgMzUgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGVudC1oZWFkZXJcIlxuICB9LCBbX2MoJ2gxJywgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYlwiXG4gIH0sIF92bS5fbCgoX3ZtLmJyZWFkY3J1bWJzKSwgZnVuY3Rpb24oYnJlYWRjcnVtYikge1xuICAgIHJldHVybiBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInRvXCI6IGJyZWFkY3J1bWIuaHJlZixcbiAgICAgICAgXCJhY3RpdmUtY2xhc3NcIjogXCJhY3RpdmVcIixcbiAgICAgICAgXCJ0YWdcIjogXCJsaVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChicmVhZGNydW1iLnRpdGxlKSkgKyBcIlxcbiAgICAgICAgXCIpXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNjZmODVlN2RcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMjA0NjE0MThcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZmODVlN2QhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOThcbi8vIG1vZHVsZSBjaHVua3MgPSAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBnZW5lcmF0ZVVVSUQoKSB7XHJcbiAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSAqIDE2KSAlIDE2IHwgMDtcclxuICAgICAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQgLyAxNik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KSkudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHV1aWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy91dWlkLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzaG93KGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9yZXBvcnRzLycgKyBpZClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZShhdGhsZXRlLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnBvc3QoJy9hcGkvcmVwb3J0cycsIGF0aGxldGUpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbiAgICBsYXRlc3Qoc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvcmVwb3J0cy9sYXRlc3QnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvcmVwb3J0cy9yZXBvcnRTZXJ2aWNlLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgXCJlblwiOiB7XHJcbiAgICAgICAgXCJyZXBvcnRzXCI6IHtcclxuICAgICAgICAgICAgXCJsaXN0XCI6IFwiUmVwb3J0cyBMaXN0XCIsXHJcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IFwiQ3JlYXRlIFJlcG9ydFwiLFxyXG4gICAgICAgICAgICBcImNyZWF0ZWRfc3VjY2Vzc2Z1bGx5XCI6IFwiVGhlIFJlcG9ydCB3YXMgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgXCJub3RfZm91bmRcIjogXCJUaGUgUmVwb3J0IGRvZXNuJ3QgZXhpc3RcIixcclxuICAgICAgICAgICAgXCJub19zY291dGluZ3NcIjogXCJZb3UgaGF2ZSB0byBhZGQgMSBvciBtb3JlIHNjb3VpdG5nc1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOYW1lXCIsXHJcbiAgICAgICAgICAgIFwiYWRkX3Njb3V0aW5nXCI6IFwiQWRkIFNjb3V0aW5nXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICBcInJlcG9ydHNfc2NvdXRpbmdzXCI6IFwiUmVwb3J0IFNjb3V0aW5nc1wiLFxyXG4gICAgICAgICAgICBcInJlcG9ydFwiOiBcIlJlcG9ydFwiLFxyXG4gICAgICAgICAgICBcImFjdGlvbnNcIjogXCJBY3Rpb25zXCIsXHJcbiAgICAgICAgICAgIFwic2NvdXRpbmdfYWRkZWRcIjogXCJTY291dGluZyBBZGRlZFwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiZXNcIjoge1xyXG4gICAgICAgIFwicmVwb3J0c1wiOiB7XHJcbiAgICAgICAgICAgIFwibGlzdFwiOiBcIkxpc3RhIGRlIFJlcG9ydGVzXCIsXHJcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IFwiQ3JlYXIgUmVwb3J0ZVwiLFxyXG4gICAgICAgICAgICBcImNyZWF0ZWRfc3VjY2Vzc2Z1bGx5XCI6IFwiRWwgUmVwb3J0ZSBmdWUgY3JlYWRvIHNhdGlzZmFjdG9yaWFtZW50ZVwiLFxyXG4gICAgICAgICAgICBcIm5vdF9mb3VuZFwiOiBcIkVsIFJlcG9ydGUgbm8gZXhpc3RlXCIsXHJcbiAgICAgICAgICAgIFwibm9fc2NvdXRpbmdzXCI6IFwiRGViZXMgYWdyZWdhciAxIG8gbcOhcyBzY291dGluZ3NcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTm9tYnJlXCIsXHJcbiAgICAgICAgICAgIFwiYWRkX3Njb3V0aW5nXCI6IFwiQcOxYWRpciBTY291dGluZ1wiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcGNpw7NuXCIsXHJcbiAgICAgICAgICAgIFwicmVwb3J0c19zY291dGluZ3NcIjogXCJTY291dGluZ3MgZGVsIHJlcG9ydGVcIixcclxuICAgICAgICAgICAgXCJyZXBvcnRcIjogXCJSZXBvcnRlXCIsXHJcbiAgICAgICAgICAgIFwiYWN0aW9uc1wiOiBcIkFjY2lvbmVzXCIsXHJcbiAgICAgICAgICAgIFwic2NvdXRpbmdfYWRkZWRcIjogXCJTY291dGluZyBBw7FhZGlkb1wiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9yZXBvcnRzL3JlcG9ydHMuanMiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IDppZD1cImNvbnRhaW5lcklkXCIgY2xhc3M9XCJnYXVnZVwiPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cInRleHQtY2VudGVyXCI+PGI+e3t0aXRsZX19PC9iPjwvaDQ+XHJcbiAgICAgICAgPGNhbnZhcyA6aWQ9XCJlbGVtZW50SWRcIj48L2NhbnZhcz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ29hbC13cmFwcGVyIGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIDppZD1cInRleHRJZFwiIGNsYXNzPVwiZ2F1Z2UtdmFsdWUgcHVsbC1sZWZ0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdhdWdlLXZhbHVlIHB1bGwtbGVmdFwiPiU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPVwiZ29hbC10ZXh0XCIgY2xhc3M9XCJnb2FsLXZhbHVlIHB1bGwtcmlnaHRcIj4xMDAlPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgICAuZ2F1Z2Uge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5nb2FsLXdyYXBwZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB1dWlkTWl4aW4gZnJvbSAnYmFzZS9taXhpbnMvdXVpZCdcclxuICAgIGltcG9ydCB7b3B0c30gZnJvbSAnLi9zdHVicy9nYXVnZU9wdHNTdHViJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHR7XHJcblxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB7cmVxdWlyZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICB0aXRsZToge2RlZmF1bHQ6ICcnfSxcclxuICAgICAgICAgICAgY29sb3I6IHtyZXF1aXJlZDogdHJ1ZX1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLnNldCh2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhKCl7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBnYXVnZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIG9wdHM6IHt9LFxyXG4gICAgICAgICAgICAgICAgdGltZW91dEhhbmRsZTogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBlbGVtZW50SWQoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlVVVJRCgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRhaW5lcklkKCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVVVSUQoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0ZXh0SWQoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlVVVJRCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1peGluczogW3V1aWRNaXhpbl0sXHJcbiAgICAgICAgbW91bnRlZCgpe1xyXG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVkcmF3KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgZHJhdygpIHtcclxuICAgICAgICAgICAgICAgIHZhciBnYXVnZUxpYiA9IHJlcXVpcmUoJ2dhdWdlLmpzJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRhaW5lcklkKS5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSB3aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQgKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0cyA9IF8uY2xvbmVEZWVwKG9wdHMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRzLmNvbG9yU3RhcnQgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZSA9IG5ldyBnYXVnZUxpYi5HYXVnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkpLnNldE9wdGlvbnModGhpcy5vcHRzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2UubWF4VmFsdWUgPSAxMDA7IC8vIHNldCBtYXggZ2F1Z2UgdmFsdWVcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2Uuc2V0TWluVmFsdWUoMCk7ICAvLyBQcmVmZXIgc2V0dGVyIG92ZXIgZ2F1Z2UubWluVmFsdWUgPSAwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLmFuaW1hdGlvblNwZWVkID0gNjU7IC8vIHNldCBhbmltYXRpb24gc3BlZWQgKDMyIGlzIGRlZmF1bHQgdmFsdWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLnNldCh0aGlzLnZhbHVlKTsgLy8gc2V0IGFjdHVhbCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5zZXRUZXh0RmllbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy50ZXh0SWQpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVkcmF3KCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykuc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykuY2xlYXJSZWN0KDAsIDAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLmNhbnZhcy53aWR0aCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZW91dEhhbmRsZSlcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dEhhbmRsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0SGFuZGxlID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5kcmF3LCAyNTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZ2F1Z2UudnVlPzdiOTY5OTdhIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8cGFnZS1oZWFkZXIgOnRpdGxlPVwiJHQoJ3JlcG9ydHMucmVwb3J0JylcIiA6YnJlYWRjcnVtYnM9XCJicmVhZGNydW1ic1wiPjwvcGFnZS1oZWFkZXI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50IHJlcG9ydFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC14cy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi10ZXh0XCI+RUZGRUNUSVZFTkVTUzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJkZXNjcmlwdGlvbi1oZWFkZXJcIj57e2VmZmVjdGl2ZW5lc3MucGVyY2VudGFnZX19JTwvaDU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2VmZmVjdGl2ZW5lc3MudmljdG9yaWVzfX1WXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2VmZmVjdGl2ZW5lc3MuZGVmZWF0c319VlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmRlc2NyaXB0aW9uLWJsb2NrIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNvbCAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC14cy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi10ZXh0XCI+VkFMSUQ8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImRlc2NyaXB0aW9uLWhlYWRlclwiPnt7dmFsaWQucGVyY2VudGFnZX19JTwvaDU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbGlkLnZhbGlkfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsaWQubm9WYWxpZH19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5kZXNjcmlwdGlvbi1ibG9jayAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jb2wgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMyBjb2wteHMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tdGV4dFwiPkFWRVJBR0U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiZGVzY3JpcHRpb24taGVhZGVyXCI+e3thdmVyYWdlLnBlcmNlbnRhZ2V9fSU8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3thdmVyYWdlLmdpdmVufX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7YXZlcmFnZS5yZWNlaXZlZH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uZGVzY3JpcHRpb24tYmxvY2sgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTMgY29sLXhzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXRleHRcIj5QRVJGRUNUSU9OPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImRlc2NyaXB0aW9uLWhlYWRlclwiPnt7cGVyZmVjdGlvbi5wZXJjZW50YWdlfX0lPC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cGVyZmVjdGlvbi5wZXJmZWN0fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cGVyZmVjdGlvbi5pbXBlcmZlY3R9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi10ZXh0XCI+VElNRSBDT05TVU1FPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJkZXNjcmlwdGlvbi1oZWFkZXJcIj57e3RpbWVDb25zdW1lZC5wZXJjZW50YWdlfX0lPC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dGltZUNvbnN1bWVkLnRpbWVDb25zdW1lZH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RpbWVDb25zdW1lZC50aW1lSWRsZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uZGVzY3JpcHRpb24tYmxvY2sgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtdGFicy1jdXN0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgOmNsYXNzPVwieydhY3RpdmUnOmluZGV4ID09IDB9XCIgdi1mb3I9XCIocG9pbnRWc1RpbWVHcmFwaCxpbmRleCkgaW4gcG9pbnRWc1RpbWVHcmFwaHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cIicjJytwb2ludFZzVGltZUdyYXBoLmlkXCIgZGF0YS10b2dnbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3BvaW50VnNUaW1lR3JhcGgubmFtZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmVcIiA6Y2xhc3M9XCJ7J2FjdGl2ZSc6aW5kZXggPT0gMH1cIiA6aWQ9XCJwb2ludFZzVGltZUdyYXBoLmlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIocG9pbnRWc1RpbWVHcmFwaCxpbmRleCkgaW4gcG9pbnRWc1RpbWVHcmFwaHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGlnaGNoYXJ0cyA6cmVmPVwicG9pbnRWc1RpbWVHcmFwaC5pZFwiIDpvcHRpb25zPVwicG9pbnRWc1RpbWVHcmFwaC5vcHRpb25zXCI+PC9oaWdoY2hhcnRzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGdhdWdlIDp2YWx1ZT1cIm9mZmVuc2l2ZUdhdWdlLmRhdGFcIiBjb2xvcj1cImdyZWVuXCIgdGl0bGU9XCJDb3VudGVyb2ZmZW5zaXZlXCI+PC9nYXVnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnYXVnZSA6dmFsdWU9XCJkZWZlbnNpdmVHYXVnZS5kYXRhXCIgY29sb3I9XCJ5ZWxsb3dcIiB0aXRsZT1cIkRlZmVuc2l2ZVwiPjwvZ2F1Z2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Z2F1Z2UgOnZhbHVlPVwiY291bnRlck9mZmVuc2l2ZUdhdWdlLmRhdGFcIiBjb2xvcj1cInJlZFwiIHRpdGxlPVwiT2ZmZW5zaXZlXCI+PC9nYXVnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aGlnaGNoYXJ0cyA6b3B0aW9ucz1cInBpZVwiPjwvaGlnaGNoYXJ0cz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoaWdoY2hhcnRzIDpvcHRpb25zPVwiYmFyXCI+PC9oaWdoY2hhcnRzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGU+XHJcbiAgICAucmVwb3J0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuYm9yZGVyLXJpZ2h0IHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNjY2O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbi10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uLXBlcmNlbnRhZ2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24taGVhZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG48L3N0eWxlPlxyXG48c2NyaXB0IHR5cGU9XCJ0ZXh0L2JhYmVsXCI+XHJcbiAgICBpbXBvcnQgcGFnZUhlYWRlciBmcm9tICdiYXNlL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlJ1xyXG4gICAgaW1wb3J0IGdhdWdlIGZyb20gJ2Jhc2UvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZSdcclxuICAgIGltcG9ydCByZXBvcnRzTG9jYWxlcyBmcm9tICdiYXNlL2xhbmcvYWRtaW4vcmVwb3J0cy9yZXBvcnRzLmpzJztcclxuICAgIGltcG9ydCByZXBvcnRTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0U2VydmljZSdcclxuICAgIGltcG9ydCByZXBvcnREYXRhU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydERhdGFTZXJ2aWNlJ1xyXG4gICAgaW1wb3J0IHV1aWRNaXhpbiBmcm9tICdiYXNlL21peGlucy91dWlkJ1xyXG4gICAgaW1wb3J0IHtsaW5lQmFzZU9wdGlvbnN9IGZyb20gJy4vc3R1YnMvbGluZU9wdGlvbnMnXHJcbiAgICBpbXBvcnQge3BpZUJhc2VPcHRpb25zfSBmcm9tICcuL3N0dWJzL3BpZU9wdGlvbnMnXHJcbiAgICBpbXBvcnQge2JhckJhc2VPcHRpb25zfSBmcm9tICcuL3N0dWJzL2Jhck9wdGlvbnMnXHJcbiAgICBpbXBvcnQge2dhdWdlQmFzZU9wdGlvbnN9IGZyb20gJy4vc3R1YnMvZ2F1Z2VPcHRpb25zJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHR7XHJcbiAgICAgICAgbG9jYWxlczogcmVwb3J0c0xvY2FsZXMsXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBwYWdlSGVhZGVyLFxyXG4gICAgICAgICAgICBnYXVnZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWl4aW5zOiBbdXVpZE1peGluXSxcclxuICAgICAgICBkYXRhKCl7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXBvcnRzOiB7fSxcclxuICAgICAgICAgICAgICAgIHBvaW50VnNUaW1lR3JhcGhzOiBbXSxcclxuICAgICAgICAgICAgICAgIHBpZToge30sXHJcbiAgICAgICAgICAgICAgICBiYXI6IHt9LFxyXG4gICAgICAgICAgICAgICAgY291bnRlck9mZmVuc2l2ZUdhdWdlOiB7ZGF0YTogMH0sXHJcbiAgICAgICAgICAgICAgICBvZmZlbnNpdmVHYXVnZToge2RhdGE6IDB9LFxyXG4gICAgICAgICAgICAgICAgZGVmZW5zaXZlR2F1Z2U6IHtkYXRhOiAwfSxcclxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZW5lc3M6IHt9LFxyXG4gICAgICAgICAgICAgICAgdmFsaWQ6IHt9LFxyXG4gICAgICAgICAgICAgICAgYXZlcmFnZToge30sXHJcbiAgICAgICAgICAgICAgICBwZXJmZWN0aW9uOiB7fSxcclxuICAgICAgICAgICAgICAgIHRpbWVDb25zdW1lZDoge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgYnJlYWRjcnVtYnMoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL2Rhc2hib2FyZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLiR0KCdhZG1pbi5ob21lJylcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9yZXBvcnRzLycgKyB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnYWRtaW4udmlldydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkKCl7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy4kYXV0aC51c2VyKCkuc3VwZXJVc2VyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb290LmVycm9yVG9hc3QoJ05vIHRpZW5lcyBwZXJtaXNvIHBhcmEgdmVyIGVsIGluZm9ybWUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVwb3J0cy5saXN0JyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXBvcnRTZXJ2aWNlLnNob3codGhpcy4kcm91dGUucGFyYW1zLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBvcnQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCl7XHJcbiAgICAgICAgICAgIHJlcG9ydERhdGFTZXJ2aWNlLnBvaW50VnNUaW1lKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ3JhcGggPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKGRhdGEsIChncmFwaERhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaW5lID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmdlbmVyYXRlVVVJRCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGdyYXBoRGF0YS5sZWZ0QXRobGV0ZSArICcgVlMgJyArIGdyYXBoRGF0YS5yaWdodEF0aGxldGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogXy5jbG9uZURlZXAobGluZUJhc2VPcHRpb25zKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUub3B0aW9ucy54QXhpcy5jYXRlZ29yaWVzID0gZ3JhcGhEYXRhLnRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLm9wdGlvbnMuc2VyaWVzWzBdLmRhdGEgPSBncmFwaERhdGEubGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUub3B0aW9ucy5zZXJpZXNbMV0uZGF0YSA9IGdyYXBoRGF0YS5yaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUub3B0aW9ucy5zZXJpZXNbMF0ubmFtZSA9IGdyYXBoRGF0YS5sZWZ0QXRobGV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUub3B0aW9ucy5zZXJpZXNbMV0ubmFtZSA9IGdyYXBoRGF0YS5yaWdodEF0aGxldGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGgucHVzaChsaW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9pbnRWc1RpbWVHcmFwaHMgPSBncmFwaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJ2FbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5vbignc2hvd24uYnMudGFiJywgKGUpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChzZWxmLnBvaW50VnNUaW1lR3JhcGhzLCAoZ3JhcGhEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJlZnNbZ3JhcGhEYXRhLmlkXVswXS5jaGFydC5yZWZsb3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmVwb3J0RGF0YVNlcnZpY2Uub2ZmZW5zaXZlRGVmZW5zaXZlKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50ZXJPZmZlbnNpdmVHYXVnZS5kYXRhID0gZGF0YS5jb3VudGVyT2ZmZW5zaXZlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2ZmZW5zaXZlR2F1Z2UuZGF0YSA9IGRhdGEub2ZmZW5zaXZlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmZW5zaXZlR2F1Z2UuZGF0YSA9IGRhdGEuZGVmZW5zaXZlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHJlcG9ydERhdGFTZXJ2aWNlLmNvbWJhdFN0YXR1cyh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBpZSA9IF8uY2xvbmVEZWVwKHBpZUJhc2VPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGllLnNlcmllc1swXS5kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5waWUgPSBwaWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmVwb3J0RGF0YVNlcnZpY2UucGFycnkodGhpcy4kcm91dGUucGFyYW1zLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhdGVnb3JpZXMgPSByZXNwb25zZS5jYXRlZ29yaWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmFyID0gXy5jbG9uZURlZXAoYmFyQmFzZU9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXIuc2VyaWVzWzBdLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXIueEF4aXMuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFyID0gYmFyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICByZXBvcnREYXRhU2VydmljZS5zdW1tYXJ5KHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdGl2ZW5lc3MgPSBkYXRhLmVmZmVjdGl2ZW5lc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWQgPSBkYXRhLnZhbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF2ZXJhZ2UgPSBkYXRhLmF2ZXJhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyZmVjdGlvbiA9IGRhdGEucGVyZmVjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lQ29uc3VtZWQgPSBkYXRhLmNvbnN1bWVkVGltZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdmlldy52dWU/MzRhNzllOGEiLCJleHBvcnQgY29uc3Qgb3B0cyA9IHtcclxuICAgIGFuZ2xlOiAtMC4wMiwgLy8gVGhlIHNwYW4gb2YgdGhlIGdhdWdlIGFyY1xyXG4gICAgbGluZVdpZHRoOiAwLjQ0LCAvLyBUaGUgbGluZSB0aGlja25lc3NcclxuICAgIHJhZGl1c1NjYWxlOiAxLCAvLyBSZWxhdGl2ZSByYWRpdXNcclxuICAgIHBvaW50ZXI6IHtcclxuICAgICAgICBsZW5ndGg6IDAuNiwgLy8gLy8gUmVsYXRpdmUgdG8gZ2F1Z2UgcmFkaXVzXHJcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDAuMDM1LCAvLyBUaGUgdGhpY2tuZXNzXHJcbiAgICAgICAgY29sb3I6ICcjMDAwMDAwJyAvLyBGaWxsIGNvbG9yXHJcbiAgICB9LFxyXG4gICAgbGltaXRNYXg6IGZhbHNlLCAgICAgLy8gSWYgZmFsc2UsIHRoZSBtYXggdmFsdWUgb2YgdGhlIGdhdWdlIHdpbGwgYmUgdXBkYXRlZCBpZiB2YWx1ZSBzdXJwYXNzIG1heFxyXG4gICAgbGltaXRNaW46IGZhbHNlLCAgICAgLy8gSWYgdHJ1ZSwgdGhlIG1pbiB2YWx1ZSBvZiB0aGUgZ2F1Z2Ugd2lsbCBiZSBmaXhlZCB1bmxlc3MgeW91IHNldCBpdCBtYW51YWxseVxyXG4gICAgY29sb3JTdGFydDogJyM2RkFEQ0YnLCAgIC8vIENvbG9yc1xyXG4gICAgY29sb3JTdG9wOiAnIzhGQzBEQScsICAgIC8vIGp1c3QgZXhwZXJpbWVudCB3aXRoIHRoZW1cclxuICAgIHN0cm9rZUNvbG9yOiAnI0UwRTBFMCcsICAvLyB0byBzZWUgd2hpY2ggb25lcyB3b3JrIGJlc3QgZm9yIHlvdVxyXG4gICAgZ2VuZXJhdGVHcmFkaWVudDogdHJ1ZSxcclxuICAgIGhpZ2hEcGlTdXBwb3J0OiB0cnVlICAgICAvLyBIaWdoIHJlc29sdXRpb24gc3VwcG9ydFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvc3R1YnMvZ2F1Z2VPcHRzU3R1Yi5qcyIsImV4cG9ydCBjb25zdCBiYXJCYXNlT3B0aW9ucyA9IHtcclxuICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgdHlwZTogJ2JhcidcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHRleHQ6ICdQYXJyeSdcclxuICAgIH0sXHJcbiAgICB4QXhpczoge1xyXG4gICAgICAgIGNhdGVnb3JpZXM6IFsnMTInLCAnMTEnLCAnMTAnLCAnOScsICc4JywgJzcnLCAnNicsICc1JywgJzQnLCAnMycsICcyJywgJzEnXSxcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnQm9keSBab25lJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB5QXhpczoge1xyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnTnVtYmVyIG9mIFBhcnJ5cycsXHJcbiAgICAgICAgICAgIGFsaWduOiAnaGlnaCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2p1c3RpZnknXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgICAgYmFyOiB7XHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsZWdlbmQ6IHtcclxuICAgICAgICBsYXlvdXQ6ICd2ZXJ0aWNhbCcsXHJcbiAgICAgICAgYWxpZ246ICdyaWdodCcsXHJcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXHJcbiAgICAgICAgeDogLTQwLFxyXG4gICAgICAgIHk6IDgwLFxyXG4gICAgICAgIGZsb2F0aW5nOiB0cnVlLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLFxyXG4gICAgICAgIHNoYWRvdzogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGNyZWRpdHM6IHtcclxuICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNlcmllczogW3tcclxuICAgICAgICBuYW1lOiAnUGFycnkgTnVtYmVycycsXHJcbiAgICAgICAgZGF0YTogWzEsIDAsIDIsIDIsIDAsIDMsIDQsIDAsIDAsIDEsIDAsIDBdXHJcbiAgICB9XVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3N0dWJzL2Jhck9wdGlvbnMuanMiLCJleHBvcnQgY29uc3QgZ2F1Z2VCYXNlT3B0aW9ucyA9IHtcclxuICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgdHlwZTogJ3NvbGlkZ2F1Z2UnLFxyXG4gICAgICAgIGhlaWdodDogMTUwXHJcbiAgICB9LFxyXG4gICAgeUF4aXM6IHtcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgdGV4dDogbnVsbCxcclxuICAgICAgICAgICAgeTogLTcwXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RvcHM6IFtcclxuICAgICAgICAgICAgWzAuMSwgJyM1NUJGM0InXSAvLyBncmVlblxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGluZVdpZHRoOiAwLFxyXG4gICAgICAgIG1pbm9yVGlja0ludGVydmFsOiBudWxsLFxyXG4gICAgICAgIHRpY2tBbW91bnQ6IDIsXHJcbiAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVkaXRzOiB7XHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgIH0sXHJcblxyXG4gICAgc2VyaWVzOiBbe1xyXG4gICAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgICAgZGF0YTogWzgwXSxcclxuICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgIGZvcm1hdDogJzxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjEzcHg7Y29sb3I6JyArXHJcbiAgICAgICAgICAgICgnYmxhY2snKSArICdcIj57eX0lPC9zcGFuPjxici8+JyxcclxuICAgICAgICAgICAgeTogLTI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgIHZhbHVlU3VmZml4OiAnJSdcclxuICAgICAgICB9XHJcbiAgICB9XSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdGV4dDogJ0VmZWN0aXZpZGFkJ1xyXG4gICAgfSxcclxuXHJcbiAgICBwYW5lOiB7XHJcbiAgICAgICAgc2l6ZTogJzE1MCUnLFxyXG4gICAgICAgIHN0YXJ0QW5nbGU6IC05MCxcclxuICAgICAgICBlbmRBbmdsZTogOTAsXHJcbiAgICAgICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUVFJyxcclxuICAgICAgICAgICAgaW5uZXJSYWRpdXM6ICc2MCUnLFxyXG4gICAgICAgICAgICBvdXRlclJhZGl1czogJzEwMCUnLFxyXG4gICAgICAgICAgICBzaGFwZTogJ2FyYydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHRvb2x0aXA6IHtcclxuICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB0aGUgdmFsdWUgYXhpc1xyXG4gICAgcGxvdE9wdGlvbnM6IHtcclxuICAgICAgICBzb2xpZGdhdWdlOiB7XHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIHk6IDUsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMCxcclxuICAgICAgICAgICAgICAgIHVzZUhUTUw6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy9zdHVicy9nYXVnZU9wdGlvbnMuanMiLCJleHBvcnQgY29uc3QgbGluZUJhc2VPcHRpb25zID0ge1xyXG4gICAgY2hhcnQ6IHtcclxuICAgICAgICB0eXBlOiAnbGluZSdcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHRleHQ6ICdQb2ludHMgdnMgVGltZSdcclxuICAgIH0sXHJcbiAgICB4QXhpczoge1xyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdUaW1lJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgKyAnbWluJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB5QXhpczoge1xyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdQb2ludHMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSArICdwdCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdG9vbHRpcDoge1xyXG4gICAgICAgIGNyb3NzaGFpcnM6IHRydWUsXHJcbiAgICAgICAgc2hhcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcGxvdE9wdGlvbnM6IHtcclxuICAgICAgICBsaW5lOiB7XHJcbiAgICAgICAgICAgIG1hcmtlcjoge1xyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiA4LFxyXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxyXG4gICAgICAgICAgICAgICAgY3JvcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE91dGxpbmU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2VyaWVzOiBbe1xyXG4gICAgICAgIG5hbWU6ICdQZWRybyBHb3JyaW4nLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmNjYwMCcsXHJcbiAgICAgICAgaW5kZXg6IDIsXHJcbiAgICAgICAgbWFya2VyOiB7XHJcbiAgICAgICAgICAgIHN5bWJvbDogJ2NpcmNsZScsXHJcbiAgICAgICAgICAgIHJhZGl1czogMTJcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiBbXVxyXG5cclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiAnSmF2aWVyIEJhc3RpZGFzJyxcclxuICAgICAgICBjb2xvcjogJyM2NGI1ZjYnLFxyXG4gICAgICAgIGluZGV4OiAxLFxyXG5cclxuICAgICAgICBtYXJrZXI6IHtcclxuICAgICAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcclxuICAgICAgICAgICAgcmFkaXVzOiAxMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YTogW11cclxuICAgIH1dXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvc3R1YnMvbGluZU9wdGlvbnMuanMiLCJleHBvcnQgY29uc3QgcGllQmFzZU9wdGlvbnMgPSB7XHJcbiAgICBjaGFydDoge1xyXG4gICAgICAgIHBsb3RCYWNrZ3JvdW5kQ29sb3I6IG51bGwsXHJcbiAgICAgICAgcGxvdEJvcmRlcldpZHRoOiBudWxsLFxyXG4gICAgICAgIHBsb3RTaGFkb3c6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6ICdwaWUnXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICB0ZXh0OiAnQ29tYmF0IFN0YXR1cydcclxuICAgIH0sXHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgcG9pbnRGb3JtYXQ6ICd7c2VyaWVzLm5hbWV9OiA8Yj57cG9pbnQucGVyY2VudGFnZTouMWZ9JTwvYj4nXHJcbiAgICB9LFxyXG4gICAgcGxvdE9wdGlvbnM6IHtcclxuICAgICAgICBwaWU6IHtcclxuICAgICAgICAgICAgYWxsb3dQb2ludFNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAnPGI+e3BvaW50Lm5hbWV9PC9iPjoge3BvaW50LnBlcmNlbnRhZ2U6LjFmfSAlJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd0luTGVnZW5kOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNlcmllczogW3tcclxuICAgICAgICBuYW1lOiAnUGVyY2VudCcsXHJcbiAgICAgICAgY29sb3JCeVBvaW50OiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IFt7XHJcbiAgICAgICAgICAgIG5hbWU6ICdFUVVBTCcsXHJcbiAgICAgICAgICAgIHk6IDIwXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiAnVVAnLFxyXG4gICAgICAgICAgICB5OiA2MCxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdET1dOJyxcclxuICAgICAgICAgICAgeTogMjBcclxuICAgICAgICB9XVxyXG4gICAgfV1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy9zdHVicy9waWVPcHRpb25zLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwb2ludFZzVGltZShpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvcmVwb3J0cy8nICsgaWQgKyAnL3BvaW50LXZzLXRpbWUnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG4gICAgb2ZmZW5zaXZlRGVmZW5zaXZlKGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9yZXBvcnRzLycgKyBpZCArICcvb2ZmZW5zaXZlLWRlZmVuc2l2ZScpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbiAgICBjb21iYXRTdGF0dXMoaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3JlcG9ydHMvJyArIGlkICsgJy9jb21iYXQtc3RhdHVzJylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfSxcclxuICAgIHBhcnJ5KGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9yZXBvcnRzLycgKyBpZCArICcvcGFycnknKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG4gICAgc3VtbWFyeShpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvcmVwb3J0cy8nICsgaWQgKyAnL3N1bW1hcnknKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydERhdGFTZXJ2aWNlLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucmVwb3J0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5ib3JkZXItcmlnaHQge1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNjY2O1xcbn1cXG4uZGVzY3JpcHRpb24tdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5kZXNjcmlwdGlvbi1wZXJjZW50YWdlIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmRlc2NyaXB0aW9uLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3ZpZXcudnVlPzM0YTc5ZThhXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE2S0E7SUFDQSx3QkFBQTtDQUNBO0FBRUE7SUFDQSw2QkFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJ2aWV3LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8cGFnZS1oZWFkZXIgOnRpdGxlPVxcXCIkdCgncmVwb3J0cy5yZXBvcnQnKVxcXCIgOmJyZWFkY3J1bWJzPVxcXCJicmVhZGNydW1ic1xcXCI+PC9wYWdlLWhlYWRlcj5cXHJcXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJjb250ZW50IHJlcG9ydFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zIGNvbC14cy02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi10ZXh0XFxcIj5FRkZFQ1RJVkVORVNTPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1oZWFkZXJcXFwiPnt7ZWZmZWN0aXZlbmVzcy5wZXJjZW50YWdlfX0lPC9oNT5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LWxlZnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWZmZWN0aXZlbmVzcy52aWN0b3JpZXN9fVZcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWZmZWN0aXZlbmVzcy5kZWZlYXRzfX1WXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmRlc2NyaXB0aW9uLWJsb2NrIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jb2wgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLXhzLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXRleHRcXFwiPlZBTElEPC9zcGFuPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1oZWFkZXJcXFwiPnt7dmFsaWQucGVyY2VudGFnZX19JTwvaDU+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgdGV4dC1sZWZ0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbGlkLnZhbGlkfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsaWQubm9WYWxpZH19XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmRlc2NyaXB0aW9uLWJsb2NrIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jb2wgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLXhzLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXRleHRcXFwiPkFWRVJBR0U8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWhlYWRlclxcXCI+e3thdmVyYWdlLnBlcmNlbnRhZ2V9fSU8L2g1PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtbGVmdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3thdmVyYWdlLmdpdmVufX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7YXZlcmFnZS5yZWNlaXZlZH19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmRlc2NyaXB0aW9uLWJsb2NrIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zIGNvbC14cy02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi10ZXh0XFxcIj5QRVJGRUNUSU9OPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1oZWFkZXJcXFwiPnt7cGVyZmVjdGlvbi5wZXJjZW50YWdlfX0lPC9oNT5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LWxlZnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cGVyZmVjdGlvbi5wZXJmZWN0fX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cGVyZmVjdGlvbi5pbXBlcmZlY3R9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWJsb2NrXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi10ZXh0XFxcIj5USU1FIENPTlNVTUU8L3NwYW4+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWhlYWRlclxcXCI+e3t0aW1lQ29uc3VtZWQucGVyY2VudGFnZX19JTwvaDU+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgdGV4dC1sZWZ0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RpbWVDb25zdW1lZC50aW1lQ29uc3VtZWR9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0aW1lQ29uc3VtZWQudGltZUlkbGV9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5kZXNjcmlwdGlvbi1ibG9jayAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdi10YWJzLWN1c3RvbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgOmNsYXNzPVxcXCJ7J2FjdGl2ZSc6aW5kZXggPT0gMH1cXFwiIHYtZm9yPVxcXCIocG9pbnRWc1RpbWVHcmFwaCxpbmRleCkgaW4gcG9pbnRWc1RpbWVHcmFwaHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XFxcIicjJytwb2ludFZzVGltZUdyYXBoLmlkXFxcIiBkYXRhLXRvZ2dsZT1cXFwidGFiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cG9pbnRWc1RpbWVHcmFwaC5uYW1lfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYi1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiLXBhbmVcXFwiIDpjbGFzcz1cXFwieydhY3RpdmUnOmluZGV4ID09IDB9XFxcIiA6aWQ9XFxcInBvaW50VnNUaW1lR3JhcGguaWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcIihwb2ludFZzVGltZUdyYXBoLGluZGV4KSBpbiBwb2ludFZzVGltZUdyYXBoc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGlnaGNoYXJ0cyA6cmVmPVxcXCJwb2ludFZzVGltZUdyYXBoLmlkXFxcIiA6b3B0aW9ucz1cXFwicG9pbnRWc1RpbWVHcmFwaC5vcHRpb25zXFxcIj48L2hpZ2hjaGFydHM+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGdhdWdlIDp2YWx1ZT1cXFwib2ZmZW5zaXZlR2F1Z2UuZGF0YVxcXCIgY29sb3I9XFxcImdyZWVuXFxcIiB0aXRsZT1cXFwiQ291bnRlcm9mZmVuc2l2ZVxcXCI+PC9nYXVnZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnYXVnZSA6dmFsdWU9XFxcImRlZmVuc2l2ZUdhdWdlLmRhdGFcXFwiIGNvbG9yPVxcXCJ5ZWxsb3dcXFwiIHRpdGxlPVxcXCJEZWZlbnNpdmVcXFwiPjwvZ2F1Z2U+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Z2F1Z2UgOnZhbHVlPVxcXCJjb3VudGVyT2ZmZW5zaXZlR2F1Z2UuZGF0YVxcXCIgY29sb3I9XFxcInJlZFxcXCIgdGl0bGU9XFxcIk9mZmVuc2l2ZVxcXCI+PC9nYXVnZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLThcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGhpZ2hjaGFydHMgOm9wdGlvbnM9XFxcInBpZVxcXCI+PC9oaWdoY2hhcnRzPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoaWdoY2hhcnRzIDpvcHRpb25zPVxcXCJiYXJcXFwiPjwvaGlnaGNoYXJ0cz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L3NlY3Rpb24+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuPHN0eWxlPlxcclxcbiAgICAucmVwb3J0IHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5ib3JkZXItcmlnaHQge1xcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzY2NjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGVzY3JpcHRpb24tdGV4dCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGVzY3JpcHRpb24tcGVyY2VudGFnZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGVzY3JpcHRpb24taGVhZGVyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuPC9zdHlsZT5cXHJcXG48c2NyaXB0IHR5cGU9XFxcInRleHQvYmFiZWxcXFwiPlxcclxcbiAgICBpbXBvcnQgcGFnZUhlYWRlciBmcm9tICdiYXNlL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlJ1xcclxcbiAgICBpbXBvcnQgZ2F1Z2UgZnJvbSAnYmFzZS9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlJ1xcclxcbiAgICBpbXBvcnQgcmVwb3J0c0xvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL3JlcG9ydHMvcmVwb3J0cy5qcyc7XFxyXFxuICAgIGltcG9ydCByZXBvcnRTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0U2VydmljZSdcXHJcXG4gICAgaW1wb3J0IHJlcG9ydERhdGFTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0RGF0YVNlcnZpY2UnXFxyXFxuICAgIGltcG9ydCB1dWlkTWl4aW4gZnJvbSAnYmFzZS9taXhpbnMvdXVpZCdcXHJcXG4gICAgaW1wb3J0IHtsaW5lQmFzZU9wdGlvbnN9IGZyb20gJy4vc3R1YnMvbGluZU9wdGlvbnMnXFxyXFxuICAgIGltcG9ydCB7cGllQmFzZU9wdGlvbnN9IGZyb20gJy4vc3R1YnMvcGllT3B0aW9ucydcXHJcXG4gICAgaW1wb3J0IHtiYXJCYXNlT3B0aW9uc30gZnJvbSAnLi9zdHVicy9iYXJPcHRpb25zJ1xcclxcbiAgICBpbXBvcnQge2dhdWdlQmFzZU9wdGlvbnN9IGZyb20gJy4vc3R1YnMvZ2F1Z2VPcHRpb25zJ1xcclxcbiAgICBleHBvcnQgZGVmYXVsdHtcXHJcXG4gICAgICAgIGxvY2FsZXM6IHJlcG9ydHNMb2NhbGVzLFxcclxcbiAgICAgICAgY29tcG9uZW50czoge1xcclxcbiAgICAgICAgICAgIHBhZ2VIZWFkZXIsXFxyXFxuICAgICAgICAgICAgZ2F1Z2VcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtaXhpbnM6IFt1dWlkTWl4aW5dLFxcclxcbiAgICAgICAgZGF0YSgpe1xcclxcbiAgICAgICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgICAgIHJlcG9ydHM6IHt9LFxcclxcbiAgICAgICAgICAgICAgICBwb2ludFZzVGltZUdyYXBoczogW10sXFxyXFxuICAgICAgICAgICAgICAgIHBpZToge30sXFxyXFxuICAgICAgICAgICAgICAgIGJhcjoge30sXFxyXFxuICAgICAgICAgICAgICAgIGNvdW50ZXJPZmZlbnNpdmVHYXVnZToge2RhdGE6IDB9LFxcclxcbiAgICAgICAgICAgICAgICBvZmZlbnNpdmVHYXVnZToge2RhdGE6IDB9LFxcclxcbiAgICAgICAgICAgICAgICBkZWZlbnNpdmVHYXVnZToge2RhdGE6IDB9LFxcclxcbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVuZXNzOiB7fSxcXHJcXG4gICAgICAgICAgICAgICAgdmFsaWQ6IHt9LFxcclxcbiAgICAgICAgICAgICAgICBhdmVyYWdlOiB7fSxcXHJcXG4gICAgICAgICAgICAgICAgcGVyZmVjdGlvbjoge30sXFxyXFxuICAgICAgICAgICAgICAgIHRpbWVDb25zdW1lZDoge31cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXHJcXG4gICAgICAgICAgICBicmVhZGNydW1icygpe1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xcclxcbiAgICAgICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvZGFzaGJvYXJkJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy4kdCgnYWRtaW4uaG9tZScpXFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvcmVwb3J0cy8nICsgdGhpcy4kcm91dGUucGFyYW1zLmlkLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnYWRtaW4udmlldydcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgXVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgY3JlYXRlZCgpe1xcclxcbiAgICAgICAgICAgIGlmICghdGhpcy4kYXV0aC51c2VyKCkuc3VwZXJVc2VyKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuZXJyb3JUb2FzdCgnTm8gdGllbmVzIHBlcm1pc28gcGFyYSB2ZXIgZWwgaW5mb3JtZScpO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XFxyXFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVwb3J0cy5saXN0JyxcXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgICAgICByZXBvcnRTZXJ2aWNlLnNob3codGhpcy4kcm91dGUucGFyYW1zLmlkLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0ID0gcmVzcG9uc2UuZGF0YTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtb3VudGVkKCl7XFxyXFxuICAgICAgICAgICAgcmVwb3J0RGF0YVNlcnZpY2UucG9pbnRWc1RpbWUodGhpcy4kcm91dGUucGFyYW1zLmlkLFxcclxcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBncmFwaCA9IFtdO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChkYXRhLCAoZ3JhcGhEYXRhKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaW5lID0ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuZ2VuZXJhdGVVVUlEKCksXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBncmFwaERhdGEubGVmdEF0aGxldGUgKyAnIFZTICcgKyBncmFwaERhdGEucmlnaHRBdGhsZXRlLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogXy5jbG9uZURlZXAobGluZUJhc2VPcHRpb25zKSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLm9wdGlvbnMueEF4aXMuY2F0ZWdvcmllcyA9IGdyYXBoRGF0YS50aW1lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLm9wdGlvbnMuc2VyaWVzWzBdLmRhdGEgPSBncmFwaERhdGEubGVmdDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5vcHRpb25zLnNlcmllc1sxXS5kYXRhID0gZ3JhcGhEYXRhLnJpZ2h0O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLm9wdGlvbnMuc2VyaWVzWzBdLm5hbWUgPSBncmFwaERhdGEubGVmdEF0aGxldGU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUub3B0aW9ucy5zZXJpZXNbMV0ubmFtZSA9IGdyYXBoRGF0YS5yaWdodEF0aGxldGU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoLnB1c2gobGluZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludFZzVGltZUdyYXBocyA9IGdyYXBoO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKT0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnYVtkYXRhLXRvZ2dsZT1cXFwidGFiXFxcIl0nKS5vbignc2hvd24uYnMudGFiJywgKGUpPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKHNlbGYucG9pbnRWc1RpbWVHcmFwaHMsIChncmFwaERhdGEpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyZWZzW2dyYXBoRGF0YS5pZF1bMF0uY2hhcnQucmVmbG93KCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcclxcblxcclxcbiAgICAgICAgICAgIHJlcG9ydERhdGFTZXJ2aWNlLm9mZmVuc2l2ZURlZmVuc2l2ZSh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXFxyXFxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2U7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudGVyT2ZmZW5zaXZlR2F1Z2UuZGF0YSA9IGRhdGEuY291bnRlck9mZmVuc2l2ZS5kYXRhO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2ZmZW5zaXZlR2F1Z2UuZGF0YSA9IGRhdGEub2ZmZW5zaXZlLmRhdGE7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZlbnNpdmVHYXVnZS5kYXRhID0gZGF0YS5kZWZlbnNpdmUuZGF0YTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuXFxyXFxuICAgICAgICAgICAgcmVwb3J0RGF0YVNlcnZpY2UuY29tYmF0U3RhdHVzKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGllID0gXy5jbG9uZURlZXAocGllQmFzZU9wdGlvbnMpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZS5zZXJpZXNbMF0uZGF0YSA9IGRhdGE7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5waWUgPSBwaWU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgIHJlcG9ydERhdGFTZXJ2aWNlLnBhcnJ5KHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZS5kYXRhO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yaWVzID0gcmVzcG9uc2UuY2F0ZWdvcmllcztcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmFyID0gXy5jbG9uZURlZXAoYmFyQmFzZU9wdGlvbnMpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhci5zZXJpZXNbMF0uZGF0YSA9IGRhdGE7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyLnhBeGlzLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFyID0gYmFyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSlcXHJcXG5cXHJcXG4gICAgICAgICAgICByZXBvcnREYXRhU2VydmljZS5zdW1tYXJ5KHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdGl2ZW5lc3MgPSBkYXRhLmVmZmVjdGl2ZW5lc3M7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZCA9IGRhdGEudmFsaWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdmVyYWdlID0gZGF0YS5hdmVyYWdlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyZmVjdGlvbiA9IGRhdGEucGVyZmVjdGlvbjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb25zdW1lZCA9IGRhdGEuY29uc3VtZWRUaW1lXFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00YTVlYmIzNyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzYwXG4vLyBtb2R1bGUgY2h1bmtzID0gNDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5nYXVnZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uZ29hbC13cmFwcGVyIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWU/N2I5Njk5N2FcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWFBO0lBQ0Esd0JBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJnYXVnZS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IDppZD1cXFwiY29udGFpbmVySWRcXFwiIGNsYXNzPVxcXCJnYXVnZVxcXCI+XFxyXFxuICAgICAgICA8aDQgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48Yj57e3RpdGxlfX08L2I+PC9oND5cXHJcXG4gICAgICAgIDxjYW52YXMgOmlkPVxcXCJlbGVtZW50SWRcXFwiPjwvY2FudmFzPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ29hbC13cmFwcGVyIGNsZWFyZml4XFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiA6aWQ9XFxcInRleHRJZFxcXCIgY2xhc3M9XFxcImdhdWdlLXZhbHVlIHB1bGwtbGVmdFxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnYXVnZS12YWx1ZSBwdWxsLWxlZnRcXFwiPiU8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gaWQ9XFxcImdvYWwtdGV4dFxcXCIgY2xhc3M9XFxcImdvYWwtdmFsdWUgcHVsbC1yaWdodFxcXCI+MTAwJTwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzdHlsZT5cXHJcXG4gICAgLmdhdWdlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5nb2FsLXdyYXBwZXIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGltcG9ydCB1dWlkTWl4aW4gZnJvbSAnYmFzZS9taXhpbnMvdXVpZCdcXHJcXG4gICAgaW1wb3J0IHtvcHRzfSBmcm9tICcuL3N0dWJzL2dhdWdlT3B0c1N0dWInXFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0e1xcclxcblxcclxcbiAgICAgICAgcHJvcHM6IHtcXHJcXG4gICAgICAgICAgICB2YWx1ZToge3JlcXVpcmVkOiB0cnVlfSxcXHJcXG4gICAgICAgICAgICB0aXRsZToge2RlZmF1bHQ6ICcnfSxcXHJcXG4gICAgICAgICAgICBjb2xvcjoge3JlcXVpcmVkOiB0cnVlfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHdhdGNoOiB7XFxyXFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh2YWwpIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5zZXQodmFsKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgZGF0YSgpe1xcclxcbiAgICAgICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgICAgIGdhdWdlOiBudWxsLFxcclxcbiAgICAgICAgICAgICAgICBvcHRzOiB7fSxcXHJcXG4gICAgICAgICAgICAgICAgdGltZW91dEhhbmRsZTogbnVsbFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBjb21wdXRlZDoge1xcclxcbiAgICAgICAgICAgIGVsZW1lbnRJZCgpe1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVVVSUQoKVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgY29udGFpbmVySWQoKXtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVVVUlEKClcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHRleHRJZCgpe1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVVVSUQoKVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtaXhpbnM6IFt1dWlkTWl4aW5dLFxcclxcbiAgICAgICAgbW91bnRlZCgpe1xcclxcbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xcclxcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlZHJhdyk7XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgICAgIGRyYXcoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHZhciBnYXVnZUxpYiA9IHJlcXVpcmUoJ2dhdWdlLmpzJyk7XFxyXFxuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVySWQpLm9mZnNldFdpZHRoO1xcclxcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gd2lkdGggLyAyO1xcclxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoICsgJ3B4Jyk7XFxyXFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCArICdweCcpO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdHMgPSBfLmNsb25lRGVlcChvcHRzKTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRzLmNvbG9yU3RhcnQgPSB0aGlzLmNvbG9yO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlID0gbmV3IGdhdWdlTGliLkdhdWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKSkuc2V0T3B0aW9ucyh0aGlzLm9wdHMpO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLm1heFZhbHVlID0gMTAwOyAvLyBzZXQgbWF4IGdhdWdlIHZhbHVlXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2Uuc2V0TWluVmFsdWUoMCk7ICAvLyBQcmVmZXIgc2V0dGVyIG92ZXIgZ2F1Z2UubWluVmFsdWUgPSAwXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2UuYW5pbWF0aW9uU3BlZWQgPSA2NTsgLy8gc2V0IGFuaW1hdGlvbiBzcGVlZCAoMzIgaXMgZGVmYXVsdCB2YWx1ZSlcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5zZXQodGhpcy52YWx1ZSk7IC8vIHNldCBhY3R1YWwgdmFsdWVcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5zZXRUZXh0RmllbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy50ZXh0SWQpKTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHJlZHJhdygpIHtcXHJcXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykuc2F2ZSgpO1xcclxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XFxyXFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLmNsZWFyUmVjdCgwLCAwLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5jYW52YXMud2lkdGgsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLmNhbnZhcy5oZWlnaHQpO1xcclxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5yZXN0b3JlKCk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVvdXRIYW5kbGUpXFxyXFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dEhhbmRsZSk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dEhhbmRsZSA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuZHJhdywgMjUwKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZhNzg2NWEwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlXG4vLyBtb2R1bGUgaWQgPSAzNjJcbi8vIG1vZHVsZSBjaHVua3MgPSA0MiIsIi8qKlxuICogZ2F1Z2UuanNcbiAqIENvcHlyaWdodChjKSAyMDE1IFZsYWRpbWlyIFJvZGtpbiA8bWFpbEB2b3ZhbnIuY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuR2F1Z2UgPSBmYWN0b3J5KCk7XG4gICAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgdGVtcGxhdGUgPSAnPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiICcgK1xuICAgICAgICAncHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIiB2aWV3Qm94PVwiLTUwIC01MCAxMDAgMTAwXCI+JyArXG4gICAgICAgICc8ZGVmcz4nICtcbiAgICAgICAgICAgICc8ZyBpZD1cImdhdWdlLW1hcmtcIiBjbGFzcz1cImdhdWdlLW1hcmtcIj4nICtcbiAgICAgICAgICAgICAgICAnPGxpbmUgeDE9XCIwXCIgeTE9XCItNDAuNVwiIHgyPVwiMFwiIHkyPVwiLTQwLjc1XCIgLz4nICtcbiAgICAgICAgICAgICc8L2c+JyArXG5cbiAgICAgICAgICAgICc8ZyBpZD1cImdhdWdlLXRpY2tcIiBjbGFzcz1cImdhdWdlLXRpY2tcIj4nICtcbiAgICAgICAgICAgICAgICAnPGxpbmUgeDE9XCIwXCIgeTE9XCItNDAuNVwiIHgyPVwiMFwiIHkyPVwiLTQxLjVcIiAvPicgK1xuICAgICAgICAgICAgJzwvZz4nICtcbiAgICAgICAgJzwvZGVmcz4nICtcblxuICAgICAgICAnPGcgY2xhc3M9XCJnYXVnZS1tYXJrc1wiPjwvZz4nICtcbiAgICAgICAgJzxnIGNsYXNzPVwiZ2F1Z2UtdGlja3NcIj48L2c+JyArXG4gICAgICAgICc8ZyBjbGFzcz1cImdhdWdlLWxhYmVsc1wiPjwvZz4nICtcblxuICAgICAgICAnPGcgY2xhc3M9XCJnYXVnZS1zY2FsZS1hcmNcIj48L2c+JyArXG4gICAgICAgICc8ZyBjbGFzcz1cImdhdWdlLXNjYWxlLWFyYy13YXJuaW5nXCI+PC9nPicgK1xuICAgICAgICAnPGcgY2xhc3M9XCJnYXVnZS1zY2FsZS1hcmMtZGFuZ2VyXCI+PC9nPicgK1xuXG4gICAgICAgICc8ZyBjbGFzcz1cImdhdWdlLWhhbmRcIj4nICtcbiAgICAgICAgICAgICc8cG9seWdvbiBwb2ludHM9XCItMSwwIDAsLTQxIDEsMFwiIC8+JyArXG4gICAgICAgICAgICAnPGNpcmNsZSBjeD1cIjBcIiBjeT1cIjBcIiByPVwiMlwiIC8+JyArXG4gICAgICAgICc8L2c+JyArXG4gICAgJzwvc3ZnPic7XG5cbiAgICB2YXIgR2F1Z2U7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbyBPcHRpb25zXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gby5ibG9ja1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvLmFjdHVhbFZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gby5sYWJlbHNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW28ubWF4VmFsdWVdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtvLndhcm5pbmdWYWx1ZV0gaW4gcGVyY2VudHNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW28uZGFuZ2VyVmFsdWVdIGluIHBlcmNlbnRlc1xuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtb2R1bGUgR2F1Z2VcbiAgICAgKi9cbiAgICBHYXVnZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHRoaXMuX2Jsb2NrID0gby5ibG9jaztcbiAgICAgICAgdGhpcy5fYWN0dWFsVmFsdWUgPSBvLmFjdHVhbFZhbHVlO1xuICAgICAgICB0aGlzLl9sYWJlbHMgPSBvLmxhYmVscztcbiAgICAgICAgdGhpcy5fbWF4VmFsdWUgPSBvLm1heFZhbHVlIHx8IHRoaXMuX2xhYmVsc1t0aGlzLl9sYWJlbHMubGVuZ3RoIC0gMV07XG4gICAgICAgIHRoaXMuX3dhcm5pbmdWYWx1ZSA9IG8ud2FybmluZ1ZhbHVlO1xuICAgICAgICB0aGlzLl9kYW5nZXJWYWx1ZSA9IG8uZGFuZ2VyVmFsdWU7XG5cbiAgICAgICAgdGhpcy5fZGVsdGEgPSAxMDAgLyB0aGlzLl9tYXhWYWx1ZTtcblxuICAgICAgICB0aGlzLl9yZW5kZXIoKTtcbiAgICB9O1xuXG4gICAgR2F1Z2UucHJvdG90eXBlID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9yZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2Jsb2NrLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVySGFuZCgpO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyVGlja3MoKTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlck1hcmtzKCk7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJUaWNrc0xhYmVscygpO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyQXJjU2NhbGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl93YXJuaW5nVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlckFyY1dhcm5pbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9kYW5nZXJWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyQXJjRGFuZ2VyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IGRlZ3JlZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3ZhbHVlVG9EZWdyZWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgLy8gLTEyMCBkZWcgLSBleGNsdWRlZCBwYXJ0XG4gICAgICAgICAgICAvLyAtMjEwIGRlZyAtIHJvdGF0ZSBzdGFydCB0byBzaW1tZXRyaWNhbCB2aWV3XG4gICAgICAgICAgICByZXR1cm4gKHZhbHVlIC8gdGhpcy5fbWF4VmFsdWUgKiAoMzYwIC0gMTIwKSkgLSAyMTA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gcmFkaXVzXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gcG9zaXRpb25cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF92YWx1ZVRvUG9zaXRpb246IGZ1bmN0aW9uICh2YWx1ZSwgcmFkaXVzKSB7XG4gICAgICAgICAgICB2YXIgYSA9IHRoaXMuX3ZhbHVlVG9EZWdyZWUodmFsdWUpICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgICAgIHZhciB4ID0gcmFkaXVzICogTWF0aC5jb3MoYSk7XG4gICAgICAgICAgICB2YXIgeSA9IHJhZGl1cyAqIE1hdGguc2luKGEpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICAgICAgeTogeSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBwZXJjZW50XG4gICAgICAgICAqIEByZXR1cm4ge051bWJlcn0gdmFsdWVcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9wZXJjZW50VG9WYWx1ZTogZnVuY3Rpb24gKHBlcmNlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwZXJjZW50IC8gdGhpcy5fZGVsdGE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfcmVuZGVySGFuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5faGFuZCA9ICQoJy5nYXVnZS1oYW5kJywgdGhpcy5fYmxvY2spWzBdO1xuICAgICAgICAgICAgdGhpcy5fc2V0VmFsdWUodGhpcy5fYWN0dWFsVmFsdWUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3NldFZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9oYW5kLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoJyArICh0aGlzLl92YWx1ZVRvRGVncmVlKHRoaXMuX2FjdHVhbFZhbHVlKSArIDkwKSArICdkZWcpJztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICovXG4gICAgICAgIHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2FjdHVhbFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9zZXRWYWx1ZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3JlbmRlclRpY2tzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdGlja3NDYWNoZSA9ICcnO1xuICAgICAgICAgICAgdmFyIHRpY2tzID0gJCgnLmdhdWdlLXRpY2tzJywgdGhpcy5fYmxvY2spWzBdO1xuXG4gICAgICAgICAgICB2YXIgdG90YWwgPSB0aGlzLl9sYWJlbHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGZvciAodmFyIHZhbHVlID0gMDsgdmFsdWUgPD0gdG90YWw7IHZhbHVlKyspIHtcbiAgICAgICAgICAgICAgICB0aWNrc0NhY2hlICs9IHRoaXMuX2J1aWxkVGljayh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRpY2tzLmlubmVySFRNTCA9IHRpY2tzQ2FjaGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9idWlsZFRpY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICc8dXNlIHhsaW5rOmhyZWY9XCIjZ2F1Z2UtdGlja1wiIHRyYW5zZm9ybT1cInJvdGF0ZSgnICsgKHRoaXMuX3ZhbHVlVG9EZWdyZWUodmFsdWUpICsgOTApICsgJylcIiAvPic7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfcmVuZGVyVGlja3NMYWJlbHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsYWJlbHNDYWNoZSA9ICcnO1xuICAgICAgICAgICAgdmFyIGxhYmVscyA9ICQoJy5nYXVnZS1sYWJlbHMnLCB0aGlzLl9ibG9jaylbMF07XG5cbiAgICAgICAgICAgIHZhciB0b3RhbCA9IHRoaXMuX2xhYmVscy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgZm9yICh2YXIgdmFsdWUgPSAwOyB2YWx1ZSA8PSB0b3RhbDsgdmFsdWUrKykge1xuICAgICAgICAgICAgICAgIGxhYmVsc0NhY2hlICs9IHRoaXMuX2J1aWxkVGlja0xhYmVsKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFiZWxzLmlubmVySFRNTCA9IGxhYmVsc0NhY2hlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX2J1aWxkVGlja0xhYmVsOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuX3ZhbHVlVG9Qb3NpdGlvbih2YWx1ZSwgNDMpO1xuXG4gICAgICAgICAgICByZXR1cm4gJzx0ZXh0IHg9XCInICsgcG9zaXRpb24ueCArICdcIiB5PVwiJyArIHBvc2l0aW9uLnkgKyAnXCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIj4nICtcbiAgICAgICAgICAgICAgICB0aGlzLl9sYWJlbHNbdmFsdWVdICsgJzwvdGV4dD4nO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3JlbmRlck1hcmtzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWFya3NDYWNoZSA9ICcnO1xuICAgICAgICAgICAgdmFyIG1hcmtzID0gJCgnLmdhdWdlLW1hcmtzJywgdGhpcy5fYmxvY2spWzBdO1xuXG4gICAgICAgICAgICB2YXIgdG90YWwgPSAodGhpcy5fbGFiZWxzLmxlbmd0aCAtIDEpICogMTA7XG4gICAgICAgICAgICBmb3IgKHZhciB2YWx1ZSA9IDA7IHZhbHVlIDw9IHRvdGFsOyB2YWx1ZSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gU2tpcCBtYXJrcyBvbiB0aWNrc1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAlIDEwID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXJrc0NhY2hlICs9IHRoaXMuX2J1aWxkTWFyayh2YWx1ZSAvIDEwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFya3MuaW5uZXJIVE1MID0gbWFya3NDYWNoZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX2J1aWxkTWFyazogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJzx1c2UgeGxpbms6aHJlZj1cIiNnYXVnZS1tYXJrXCIgdHJhbnNmb3JtPVwicm90YXRlKCcgKyAodGhpcy5fdmFsdWVUb0RlZ3JlZSh2YWx1ZSkgKyA5MCkgKyAnKVwiIC8+JztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9yZW5kZXJBcmNTY2FsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1heCA9IDEwMDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2RhbmdlclZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbWF4ID0gdGhpcy5fZGFuZ2VyVmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl93YXJuaW5nVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBtYXggPSB0aGlzLl93YXJuaW5nVmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBncm91cCA9ICQoJy5nYXVnZS1zY2FsZS1hcmMnLCB0aGlzLl9ibG9jaylbMF07XG4gICAgICAgICAgICB2YXIgYXJjID0gdGhpcy5fYnVpbGRBcmMoMCwgbWF4LCAzOSk7XG5cbiAgICAgICAgICAgIGdyb3VwLmlubmVySFRNTCA9IGFyYztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9yZW5kZXJBcmNXYXJuaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWF4ID0gMTAwO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fZGFuZ2VyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBtYXggPSB0aGlzLl9kYW5nZXJWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGdyb3VwID0gJCgnLmdhdWdlLXNjYWxlLWFyYy13YXJuaW5nJywgdGhpcy5fYmxvY2spWzBdO1xuICAgICAgICAgICAgdmFyIGFyYyA9IHRoaXMuX2J1aWxkQXJjKHRoaXMuX3dhcm5pbmdWYWx1ZSwgbWF4LCAzOSk7XG5cbiAgICAgICAgICAgIGdyb3VwLmlubmVySFRNTCA9IGFyYztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9yZW5kZXJBcmNEYW5nZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBncm91cCA9ICQoJy5nYXVnZS1zY2FsZS1hcmMtZGFuZ2VyJywgdGhpcy5fYmxvY2spWzBdO1xuICAgICAgICAgICAgdmFyIGFyYyA9IHRoaXMuX2J1aWxkQXJjKHRoaXMuX2RhbmdlclZhbHVlLCAxMDAsIDM5KTtcblxuICAgICAgICAgICAgZ3JvdXAuaW5uZXJIVE1MID0gYXJjO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gbWluIGluIHBlcmNlbnRzXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBtYXggaW4gcGVyY2VudHNcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHJhZGl1c1xuICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfYnVpbGRBcmM6IGZ1bmN0aW9uIChtaW4sIG1heCwgcmFkaXVzKSB7XG4gICAgICAgICAgICBtaW4gPSB0aGlzLl9wZXJjZW50VG9WYWx1ZShtaW4pO1xuICAgICAgICAgICAgbWF4ID0gdGhpcy5fcGVyY2VudFRvVmFsdWUobWF4KTtcbiAgICAgICAgICAgIHZhciBwb3NpdGlvblN0YXJ0ID0gdGhpcy5fdmFsdWVUb1Bvc2l0aW9uKG1pbiwgcmFkaXVzKTtcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbkVuZCA9IHRoaXMuX3ZhbHVlVG9Qb3NpdGlvbihtYXgsIHJhZGl1cyk7XG4gICAgICAgICAgICB2YXIgYWxwaGEgPSAoMzYwIC0gMTIwKSAvIHRoaXMuX21heFZhbHVlICogKG1heCAtIG1pbik7XG4gICAgICAgICAgICB2YXIgYXJjID0gJzxwYXRoIGQ9XCJNJyArIHBvc2l0aW9uU3RhcnQueCArICcsJyArIHBvc2l0aW9uU3RhcnQueSArXG4gICAgICAgICAgICAgICAgJyBBJyArIHJhZGl1cyArICcsJyArIHJhZGl1cyArICcgMCAnICtcbiAgICAgICAgICAgICAgICAoKGFscGhhID4gMTgwKSA/IDEgOiAwKSArICcsMSAnICtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkVuZC54ICsgJywnICsgcG9zaXRpb25FbmQueSArXG4gICAgICAgICAgICAgICAgJ1wiIHN0eWxlPVwiZmlsbDogbm9uZTtcIiAvPic7XG5cbiAgICAgICAgICAgIHJldHVybiBhcmM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICovXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZXN0cm95Jyk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiBHYXVnZTtcblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dhdWdlLmpzL2Rpc3QvZ2F1Z2UuanNcbi8vIG1vZHVsZSBpZCA9IDM3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDQyIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTZhNzg2NWEwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9nYXVnZS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2dhdWdlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTZhNzg2NWEwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2dhdWdlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcc3BvcnRlY2gtc2NvdXRpbmdcXFxccmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXGNoYXJ0c1xcXFxnYXVnZXNcXFxcZ2F1Z2UudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZ2F1Z2UudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTZhNzg2NWEwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNmE3ODY1YTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlXG4vLyBtb2R1bGUgaWQgPSAzNzZcbi8vIG1vZHVsZSBjaHVua3MgPSA0MiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdwYWdlLWhlYWRlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBfdm0uJHQoJ3JlcG9ydHMucmVwb3J0JyksXG4gICAgICBcImJyZWFkY3J1bWJzXCI6IF92bS5icmVhZGNydW1ic1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgcmVwb3J0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0xMFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1zbS0zIGNvbC14cy02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXRleHRcIlxuICB9LCBbX3ZtLl92KFwiRUZGRUNUSVZFTkVTU1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IHRleHQtcmlnaHRcIlxuICB9LCBbX2MoJ2g1Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLWhlYWRlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lZmZlY3RpdmVuZXNzLnBlcmNlbnRhZ2UpICsgXCIlXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiB0ZXh0LWxlZnRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uZWZmZWN0aXZlbmVzcy52aWN0b3JpZXMpICsgXCJWXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uZWZmZWN0aXZlbmVzcy5kZWZlYXRzKSArIFwiVlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTMgY29sLXhzLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdGV4dFwiXG4gIH0sIFtfdm0uX3YoXCJWQUxJRFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IHRleHQtcmlnaHRcIlxuICB9LCBbX2MoJ2g1Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLWhlYWRlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS52YWxpZC5wZXJjZW50YWdlKSArIFwiJVwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1sZWZ0XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnZhbGlkLnZhbGlkKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udmFsaWQubm9WYWxpZCkgKyBcIlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTMgY29sLXhzLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdGV4dFwiXG4gIH0sIFtfdm0uX3YoXCJBVkVSQUdFXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1yaWdodFwiXG4gIH0sIFtfYygnaDUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24taGVhZGVyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmF2ZXJhZ2UucGVyY2VudGFnZSkgKyBcIiVcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IHRleHQtbGVmdFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5hdmVyYWdlLmdpdmVuKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uYXZlcmFnZS5yZWNlaXZlZCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTMgY29sLXhzLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdGV4dFwiXG4gIH0sIFtfdm0uX3YoXCJQRVJGRUNUSU9OXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1yaWdodFwiXG4gIH0sIFtfYygnaDUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24taGVhZGVyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnBlcmZlY3Rpb24ucGVyY2VudGFnZSkgKyBcIiVcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IHRleHQtbGVmdFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5wZXJmZWN0aW9uLnBlcmZlY3QpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5wZXJmZWN0aW9uLmltcGVyZmVjdCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLWJsb2NrXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXRleHRcIlxuICB9LCBbX3ZtLl92KFwiVElNRSBDT05TVU1FXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1yaWdodFwiXG4gIH0sIFtfYygnaDUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24taGVhZGVyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRpbWVDb25zdW1lZC5wZXJjZW50YWdlKSArIFwiJVwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1sZWZ0XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpbWVDb25zdW1lZC50aW1lQ29uc3VtZWQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50aW1lQ29uc3VtZWQudGltZUlkbGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSldKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtMTBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJuYXYtdGFicy1jdXN0b21cIlxuICB9LCBbX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5hdiBuYXYtdGFic1wiXG4gIH0sIF92bS5fbCgoX3ZtLnBvaW50VnNUaW1lR3JhcGhzKSwgZnVuY3Rpb24ocG9pbnRWc1RpbWVHcmFwaCwgaW5kZXgpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywge1xuICAgICAgY2xhc3M6IHtcbiAgICAgICAgJ2FjdGl2ZSc6IGluZGV4ID09IDBcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogJyMnICsgcG9pbnRWc1RpbWVHcmFwaC5pZCxcbiAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiLFxuICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MocG9pbnRWc1RpbWVHcmFwaC5uYW1lKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSlcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhYi1jb250ZW50XCJcbiAgfSwgX3ZtLl9sKChfdm0ucG9pbnRWc1RpbWVHcmFwaHMpLCBmdW5jdGlvbihwb2ludFZzVGltZUdyYXBoLCBpbmRleCkge1xuICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmVcIixcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdhY3RpdmUnOiBpbmRleCA9PSAwXG4gICAgICB9LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJpZFwiOiBwb2ludFZzVGltZUdyYXBoLmlkXG4gICAgICB9XG4gICAgfSwgW19jKCdoaWdoY2hhcnRzJywge1xuICAgICAgcmVmOiBwb2ludFZzVGltZUdyYXBoLmlkLFxuICAgICAgcmVmSW5Gb3I6IHRydWUsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm9wdGlvbnNcIjogcG9pbnRWc1RpbWVHcmFwaC5vcHRpb25zXG4gICAgICB9XG4gICAgfSldLCAxKVxuICB9KSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC0yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIlxuICB9LCBbX2MoJ2dhdWdlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5vZmZlbnNpdmVHYXVnZS5kYXRhLFxuICAgICAgXCJjb2xvclwiOiBcImdyZWVuXCIsXG4gICAgICBcInRpdGxlXCI6IFwiQ291bnRlcm9mZmVuc2l2ZVwiXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIlxuICB9LCBbX2MoJ2dhdWdlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5kZWZlbnNpdmVHYXVnZS5kYXRhLFxuICAgICAgXCJjb2xvclwiOiBcInllbGxvd1wiLFxuICAgICAgXCJ0aXRsZVwiOiBcIkRlZmVuc2l2ZVwiXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIlxuICB9LCBbX2MoJ2dhdWdlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5jb3VudGVyT2ZmZW5zaXZlR2F1Z2UuZGF0YSxcbiAgICAgIFwiY29sb3JcIjogXCJyZWRcIixcbiAgICAgIFwidGl0bGVcIjogXCJPZmZlbnNpdmVcIlxuICAgIH1cbiAgfSldLCAxKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLThcIlxuICB9LCBbX2MoJ2hpZ2hjaGFydHMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwib3B0aW9uc1wiOiBfdm0ucGllXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNFwiXG4gIH0sIFtfYygnaGlnaGNoYXJ0cycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJvcHRpb25zXCI6IF92bS5iYXJcbiAgICB9XG4gIH0pXSwgMSldKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNGE1ZWJiMzdcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTRhNWViYjM3IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IDQwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDQyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2F1Z2VcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBfdm0uY29udGFpbmVySWRcbiAgICB9XG4gIH0sIFtfYygnaDQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIlxuICB9LCBbX2MoJ2InLCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdjYW52YXMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogX3ZtLmVsZW1lbnRJZFxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ29hbC13cmFwcGVyIGNsZWFyZml4XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdhdWdlLXZhbHVlIHB1bGwtbGVmdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IF92bS50ZXh0SWRcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnYXVnZS12YWx1ZSBwdWxsLWxlZnRcIlxuICB9LCBbX3ZtLl92KFwiJVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnb2FsLXZhbHVlIHB1bGwtcmlnaHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImdvYWwtdGV4dFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiMTAwJVwiKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi02YTc4NjVhMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNmE3ODY1YTAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDExXG4vLyBtb2R1bGUgY2h1bmtzID0gNDIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTRhNWViYjM3IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi92aWV3LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI2MDRiNGQyMlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNGE1ZWJiMzchLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3ZpZXcudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00YTVlYmIzNyEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdmlldy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTRhNWViYjM3IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3ZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSA0NDZcbi8vIG1vZHVsZSBjaHVua3MgPSA0MiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmE3ODY1YTAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2dhdWdlLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIxMDhjYjNiYlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmE3ODY1YTAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2dhdWdlLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmE3ODY1YTAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2dhdWdlLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmE3ODY1YTAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWVcbi8vIG1vZHVsZSBpZCA9IDQ0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDQyIl0sInNvdXJjZVJvb3QiOiIifQ==