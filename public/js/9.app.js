webpackJsonp([9,31],{

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(435)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(290),
  /* template */
  __webpack_require__(392),
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
     require("vue-hot-reload-api").rerender("data-v-66f85e7d", module.exports)
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

/***/ 246:
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

/***/ 248:
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

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uuid = __webpack_require__(242);

var _uuid2 = _interopRequireDefault(_uuid);

var _gaugeOptsStub = __webpack_require__(305);

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
            var gaugeLib = __webpack_require__(359);
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

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pageHeader = __webpack_require__(198);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _gauge = __webpack_require__(360);

var _gauge2 = _interopRequireDefault(_gauge);

var _reports = __webpack_require__(248);

var _reports2 = _interopRequireDefault(_reports);

var _reportService = __webpack_require__(246);

var _reportService2 = _interopRequireDefault(_reportService);

var _reportDataService = __webpack_require__(321);

var _reportDataService2 = _interopRequireDefault(_reportDataService);

var _uuid = __webpack_require__(242);

var _uuid2 = _interopRequireDefault(_uuid);

var _lineOptions = __webpack_require__(308);

var _pieOptions = __webpack_require__(309);

var _barOptions = __webpack_require__(306);

var _gaugeOptions = __webpack_require__(307);

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

/***/ 305:
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

/***/ 306:
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

/***/ 307:
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

/***/ 308:
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

/***/ 309:
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

/***/ 321:
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

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.report {\n    background-color: white;\n}\n.border-right {\n    border-right: 1px solid #666;\n}\n.description-text {\n    font-size: 20px;\n    font-weight: bold;\n}\n.description-percentage {\n    font-size: 15px;\n    font-weight: bold;\n}\n.description-header {\n    font-size: 20px;\n    font-weight: bold;\n}\n\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/reports/view.vue?34a79e8a"],"names":[],"mappings":";AA6KA;IACA,wBAAA;CACA;AAEA;IACA,6BAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA","file":"view.vue","sourcesContent":["<template>\r\n    <div>\r\n        <page-header :title=\"$t('reports.report')\" :breadcrumbs=\"breadcrumbs\"></page-header>\r\n        <section class=\"content report\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-md-10\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-3 col-xs-6\">\r\n                            <div class=\"description-block border-right\">\r\n                                <span class=\"description-text\">EFFECTIVENESS</span>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-6 text-right\">\r\n                                        <h5 class=\"description-header\">{{effectiveness.percentage}}%</h5>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-xs-6 text-left\">\r\n                                        <span class=\"description-percentage text-green\">\r\n                                            {{effectiveness.victories}}V\r\n                                        </span>\r\n                                        <br>\r\n                                        <span class=\"description-percentage text-red\">\r\n                                            {{effectiveness.defeats}}V\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- /.description-block -->\r\n                        </div>\r\n                        <!-- /.col -->\r\n                        <div class=\"col-sm-3 col-xs-6\">\r\n                            <div class=\"description-block border-right\">\r\n                                <span class=\"description-text\">VALID</span>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-6 text-right\">\r\n                                        <h5 class=\"description-header\">{{valid.percentage}}%</h5>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-xs-6 text-left\">\r\n                                        <span class=\"description-percentage text-green\">\r\n                                            {{valid.valid}}\r\n                                        </span>\r\n                                        <br>\r\n                                        <span class=\"description-percentage text-red\">\r\n                                            {{valid.noValid}}\r\n\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- /.description-block -->\r\n                        </div>\r\n                        <!-- /.col -->\r\n                        <div class=\"col-sm-3 col-xs-6\">\r\n                            <div class=\"description-block border-right\">\r\n                                <span class=\"description-text\">AVERAGE</span>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-6 text-right\">\r\n                                        <h5 class=\"description-header\">{{average.percentage}}%</h5>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-xs-6 text-left\">\r\n                                        <span class=\"description-percentage text-green\">\r\n                                            {{average.given}}\r\n                                        </span>\r\n                                        <br>\r\n                                        <span class=\"description-percentage text-red\">\r\n                                            {{average.received}}\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- /.description-block -->\r\n                        </div>\r\n                        <div class=\"col-sm-3 col-xs-6\">\r\n                            <div class=\"description-block border-right\">\r\n                                <span class=\"description-text\">PERFECTION</span>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-6 text-right\">\r\n                                        <h5 class=\"description-header\">{{perfection.percentage}}%</h5>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-xs-6 text-left\">\r\n                                        <span class=\"description-percentage text-green\">\r\n                                            {{perfection.perfect}}\r\n                                        </span>\r\n                                        <br>\r\n                                        <span class=\"description-percentage text-red\">\r\n                                            {{perfection.imperfect}}\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-12 col-md-2\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <div class=\"description-block\">\r\n                                <span class=\"description-text\">TIME CONSUME</span>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-6 text-right\">\r\n                                        <h5 class=\"description-header\">{{timeConsumed.percentage}}%</h5>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-xs-6 text-left\">\r\n                                        <span class=\"description-percentage text-green\">\r\n                                            {{timeConsumed.timeConsumed}}\r\n                                        </span>\r\n                                        <br>\r\n                                        <span class=\"description-percentage text-red\">\r\n                                            {{timeConsumed.timeIdle}}\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- /.description-block -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-md-10\">\r\n                    <div class=\"nav-tabs-custom\">\r\n                        <ul class=\"nav nav-tabs\">\r\n                            <li :class=\"{'active':index == 0}\" v-for=\"(pointVsTimeGraph,index) in pointVsTimeGraphs\">\r\n                                <a :href=\"'#'+pointVsTimeGraph.id\" data-toggle=\"tab\"\r\n                                   aria-expanded=\"false\">\r\n                                    {{pointVsTimeGraph.name}}\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"tab-content\">\r\n                            <div class=\"tab-pane\" :class=\"{'active':index == 0}\" :id=\"pointVsTimeGraph.id\"\r\n                                 v-for=\"(pointVsTimeGraph,index) in pointVsTimeGraphs\">\r\n                                <highcharts :ref=\"pointVsTimeGraph.id\" :options=\"pointVsTimeGraph.options\"></highcharts>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\r\n                            <gauge :value=\"offensiveGauge.data\" color=\"green\" title=\"Counteroffensive\"></gauge>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\r\n                            <gauge :value=\"defensiveGauge.data\" color=\"yellow\" title=\"Defensive\"></gauge>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\r\n                            <gauge :value=\"counterOffensiveGauge.data\" color=\"red\" title=\"Offensive\"></gauge>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-md-8\">\r\n                    <highcharts :options=\"pie\"></highcharts>\r\n                </div>\r\n                <div class=\"col-xs-12 col-md-4\">\r\n                    <highcharts :options=\"bar\"></highcharts>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</template>\r\n<style>\r\n    .report {\r\n        background-color: white;\r\n    }\r\n\r\n    .border-right {\r\n        border-right: 1px solid #666;\r\n    }\r\n\r\n    .description-text {\r\n        font-size: 20px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .description-percentage {\r\n        font-size: 15px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .description-header {\r\n        font-size: 20px;\r\n        font-weight: bold;\r\n    }\r\n\r\n</style>\r\n<script type=\"text/babel\">\r\n    import pageHeader from 'base/components/header/pageHeader.vue'\r\n    import gauge from 'base/components/charts/gauges/gauge.vue'\r\n    import reportsLocales from 'base/lang/admin/reports/reports.js';\r\n    import reportService from 'base/dashboard/services/reports/reportService'\r\n    import reportDataService from 'base/dashboard/services/reports/reportDataService'\r\n    import uuidMixin from 'base/mixins/uuid'\r\n    import {lineBaseOptions} from './stubs/lineOptions'\r\n    import {pieBaseOptions} from './stubs/pieOptions'\r\n    import {barBaseOptions} from './stubs/barOptions'\r\n    import {gaugeBaseOptions} from './stubs/gaugeOptions'\r\n    export default{\r\n        locales: reportsLocales,\r\n        components: {\r\n            pageHeader,\r\n            gauge\r\n        },\r\n        mixins: [uuidMixin],\r\n        data(){\r\n            return {\r\n                reports: {},\r\n                pointVsTimeGraphs: [],\r\n                pie: {},\r\n                bar: {},\r\n                counterOffensiveGauge: {data: 0},\r\n                offensiveGauge: {data: 0},\r\n                defensiveGauge: {data: 0},\r\n                effectiveness: {},\r\n                valid: {},\r\n                average: {},\r\n                perfection: {},\r\n                timeConsumed: {}\r\n            }\r\n        },\r\n        computed: {\r\n            breadcrumbs(){\r\n                return [\r\n                    {\r\n                        href: '/dashboard',\r\n                        title: this.$t('admin.home')\r\n                    },\r\n                    {\r\n                        href: '/reports/' + this.$route.params.id,\r\n                        title: 'admin.view'\r\n                    }\r\n                ]\r\n            },\r\n        },\r\n        created(){\r\n            if (!this.$auth.user().superUser) {\r\n                this.$root.errorToast('No tienes permiso para ver el informe');\r\n                this.$router.push({\r\n                    name: 'reports.list',\r\n                })\r\n            } else {\r\n                reportService.show(this.$route.params.id,\r\n                        (response)=> {\r\n                            this.report = response.data;\r\n                        },\r\n                        (error)=> {\r\n                            console.log(error);\r\n                        })\r\n            }\r\n        },\r\n        mounted(){\r\n            reportDataService.pointVsTime(this.$route.params.id,\r\n                    (response)=> {\r\n                        var data = response;\r\n                        var graph = [];\r\n                        _.each(data, (graphData) => {\r\n                            var line = {\r\n                                id: this.generateUUID(),\r\n                                name: graphData.leftAthlete + ' VS ' + graphData.rightAthlete,\r\n                                options: _.cloneDeep(lineBaseOptions),\r\n                            }\r\n                            line.options.xAxis.categories = graphData.time;\r\n                            line.options.series[0].data = graphData.left;\r\n                            line.options.series[1].data = graphData.right;\r\n                            line.options.series[0].name = graphData.leftAthlete;\r\n                            line.options.series[1].name = graphData.rightAthlete;\r\n\r\n                            graph.push(line);\r\n                        });\r\n                        this.pointVsTimeGraphs = graph;\r\n                        var self = this;\r\n                        this.$nextTick(()=> {\r\n                            $('a[data-toggle=\"tab\"]').on('shown.bs.tab', (e)=> {\r\n                                _.each(self.pointVsTimeGraphs, (graphData) => {\r\n                                    self.$refs[graphData.id][0].chart.reflow();\r\n                                });\r\n                            });\r\n                        })\r\n                    },\r\n                    (error)=> {\r\n                        console.log(error);\r\n                    });\r\n\r\n            reportDataService.offensiveDefensive(this.$route.params.id,\r\n                    (response)=> {\r\n                        var data = response;\r\n                        this.counterOffensiveGauge.data = data.counterOffensive.data;\r\n                        this.offensiveGauge.data = data.offensive.data;\r\n                        this.defensiveGauge.data = data.defensive.data;\r\n                    },\r\n                    (error)=> {\r\n                        console.log(error);\r\n                    })\r\n\r\n            reportDataService.combatStatus(this.$route.params.id,\r\n                    (response)=> {\r\n                        var data = response;\r\n                        var pie = _.cloneDeep(pieBaseOptions);\r\n                        pie.series[0].data = data;\r\n                        this.pie = pie;\r\n                    },\r\n                    (error)=> {\r\n                        console.log(error);\r\n                    })\r\n            reportDataService.parry(this.$route.params.id,\r\n                    (response)=> {\r\n                        var data = response.data;\r\n                        var categories = response.categories;\r\n                        var bar = _.cloneDeep(barBaseOptions);\r\n                        bar.series[0].data = data;\r\n                        bar.xAxis.categories = categories;\r\n                        this.bar = bar;\r\n                    },\r\n                    (error)=> {\r\n                        console.log(error);\r\n                    })\r\n\r\n            reportDataService.summary(this.$route.params.id,\r\n                    (response)=> {\r\n                        var data = response;\r\n                        this.effectiveness = data.effectiveness;\r\n                        this.valid = data.valid;\r\n                        this.average = data.average;\r\n                        this.perfection = data.perfection;\r\n                        this.timeConsumed = data.consumedTime\r\n                    },\r\n                    (error)=> {\r\n                        console.log(error);\r\n                    })\r\n        }\r\n    }\r\n</script>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.gauge {\n    background-color: white;\n}\n.goal-wrapper {\n    font-size: 16px;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/charts/gauges/gauge.vue?7b96997a"],"names":[],"mappings":";AAaA;IACA,wBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA","file":"gauge.vue","sourcesContent":["<template>\r\n    <div :id=\"containerId\" class=\"gauge\">\r\n        <h4 class=\"text-center\"><b>{{title}}</b></h4>\r\n        <canvas :id=\"elementId\"></canvas>\r\n        <div class=\"goal-wrapper clearfix\">\r\n            <span :id=\"textId\" class=\"gauge-value pull-left\"></span>\r\n            <span class=\"gauge-value pull-left\">%</span>\r\n            <span id=\"goal-text\" class=\"goal-value pull-right\">100%</span>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<style>\r\n    .gauge {\r\n        background-color: white;\r\n    }\r\n\r\n    .goal-wrapper {\r\n        font-size: 16px;\r\n        font-weight: bold;\r\n    }\r\n</style>\r\n<script>\r\n    import uuidMixin from 'base/mixins/uuid'\r\n    import {opts} from './stubs/gaugeOptsStub'\r\n    export default{\r\n\r\n        props: {\r\n            value: {required: true},\r\n            title: {default: ''},\r\n            color: {required: true}\r\n        },\r\n        watch: {\r\n            value: function (val) {\r\n                this.gauge.set(val);\r\n            }\r\n        },\r\n        data(){\r\n            return {\r\n                gauge: null,\r\n                opts: {},\r\n                timeoutHandle: null\r\n            }\r\n        },\r\n        computed: {\r\n            elementId(){\r\n                return this.generateUUID()\r\n            },\r\n            containerId(){\r\n                return this.generateUUID()\r\n            },\r\n            textId(){\r\n                return this.generateUUID()\r\n            }\r\n        },\r\n        mixins: [uuidMixin],\r\n        mounted(){\r\n            this.draw();\r\n            window.addEventListener('resize', this.redraw);\r\n        },\r\n        methods: {\r\n            draw() {\r\n                var gaugeLib = require('gauge.js');\r\n                var width = document.getElementById(this.containerId).offsetWidth;\r\n                var height = width / 2;\r\n                document.getElementById(this.elementId).setAttribute('width', width + 'px');\r\n                document.getElementById(this.elementId).setAttribute('height', height + 'px');\r\n                this.opts = _.cloneDeep(opts);\r\n                this.opts.colorStart = this.color;\r\n                this.gauge = new gaugeLib.Gauge(document.getElementById(this.elementId)).setOptions(this.opts);\r\n                this.gauge.maxValue = 100; // set max gauge value\r\n                this.gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0\r\n                this.gauge.animationSpeed = 65; // set animation speed (32 is default value)\r\n                this.gauge.set(this.value); // set actual value\r\n                this.gauge.setTextField(document.getElementById(this.textId));\r\n            },\r\n            redraw() {\r\n                document.getElementById(this.elementId).getContext('2d').save();\r\n                document.getElementById(this.elementId).getContext('2d').setTransform(1, 0, 0, 1, 0, 0);\r\n                document.getElementById(this.elementId).getContext('2d').clearRect(0, 0, document.getElementById(this.elementId).getContext('2d').canvas.width, document.getElementById(this.elementId).getContext('2d').canvas.height);\r\n                document.getElementById(this.elementId).getContext('2d').restore();\r\n\r\n                if (this.timeoutHandle)\r\n                    window.clearTimeout(this.timeoutHandle);\r\n\r\n                this.timeoutHandle = window.setTimeout(this.draw, 250);\r\n            }\r\n        }\r\n    }\r\n</script>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 359:
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

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(438)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(261),
  /* template */
  __webpack_require__(398),
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

/***/ 392:
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

/***/ 398:
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

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(343);
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

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(346);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWUiLCJ3ZWJwYWNrOi8vL3BhZ2VIZWFkZXIudnVlPzNkMDcqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT9jYWUyKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/NmI4ZSoqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlPzVkOTgqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT9hNjI3KioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3V1aWQuanM/YTBjOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydFNlcnZpY2UuanM/OGMyMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xhbmcvYWRtaW4vcmVwb3J0cy9yZXBvcnRzLmpzP2Q3MmYiLCJ3ZWJwYWNrOi8vL2dhdWdlLnZ1ZSIsIndlYnBhY2s6Ly8vdmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvc3R1YnMvZ2F1Z2VPcHRzU3R1Yi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvc3R1YnMvYmFyT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvc3R1YnMvZ2F1Z2VPcHRpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy9zdHVicy9saW5lT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvc3R1YnMvcGllT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydERhdGFTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy92aWV3LnZ1ZT9jM2YyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZT9jYjNjIiwid2VicGFjazovLy8uL34vZ2F1Z2UuanMvZGlzdC9nYXVnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3ZpZXcudnVlP2NmMzQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlPzYzNjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3ZpZXcudnVlPzUzYjAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlP2VkZDMiXSwibmFtZXMiOlsibWV0aG9kcyIsImdlbmVyYXRlVVVJRCIsImQiLCJEYXRlIiwiZ2V0VGltZSIsIndpbmRvdyIsInBlcmZvcm1hbmNlIiwibm93IiwidXVpZCIsInJlcGxhY2UiLCJjIiwiciIsIk1hdGgiLCJyYW5kb20iLCJmbG9vciIsInRvU3RyaW5nIiwic2hvdyIsImlkIiwic3VjY2Vzc0NhbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaHR0cCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImJvZHkiLCJjYXRjaCIsImVycm9yIiwiY3JlYXRlIiwiYXRobGV0ZSIsInBvc3QiLCJsYXRlc3QiLCJvcHRzIiwiYW5nbGUiLCJsaW5lV2lkdGgiLCJyYWRpdXNTY2FsZSIsInBvaW50ZXIiLCJsZW5ndGgiLCJzdHJva2VXaWR0aCIsImNvbG9yIiwibGltaXRNYXgiLCJsaW1pdE1pbiIsImNvbG9yU3RhcnQiLCJjb2xvclN0b3AiLCJzdHJva2VDb2xvciIsImdlbmVyYXRlR3JhZGllbnQiLCJoaWdoRHBpU3VwcG9ydCIsImJhckJhc2VPcHRpb25zIiwiY2hhcnQiLCJ0eXBlIiwidGl0bGUiLCJ0ZXh0IiwieEF4aXMiLCJjYXRlZ29yaWVzIiwieUF4aXMiLCJtaW4iLCJhbGlnbiIsImxhYmVscyIsIm92ZXJmbG93IiwicGxvdE9wdGlvbnMiLCJiYXIiLCJkYXRhTGFiZWxzIiwiZW5hYmxlZCIsImxlZ2VuZCIsImxheW91dCIsInZlcnRpY2FsQWxpZ24iLCJ4IiwieSIsImZsb2F0aW5nIiwiYm9yZGVyV2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzaGFkb3ciLCJjcmVkaXRzIiwic2VyaWVzIiwibmFtZSIsImRhdGEiLCJnYXVnZUJhc2VPcHRpb25zIiwiaGVpZ2h0IiwibWF4Iiwic3RvcHMiLCJtaW5vclRpY2tJbnRlcnZhbCIsInRpY2tBbW91bnQiLCJmb3JtYXQiLCJ0b29sdGlwIiwidmFsdWVTdWZmaXgiLCJwYW5lIiwic2l6ZSIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsImJhY2tncm91bmQiLCJpbm5lclJhZGl1cyIsIm91dGVyUmFkaXVzIiwic2hhcGUiLCJzb2xpZGdhdWdlIiwidXNlSFRNTCIsImxpbmVCYXNlT3B0aW9ucyIsImZvcm1hdHRlciIsInZhbHVlIiwiY3Jvc3NoYWlycyIsInNoYXJlZCIsImxpbmUiLCJtYXJrZXIiLCJyYWRpdXMiLCJjcm9wIiwic3R5bGUiLCJmb250V2VpZ2h0IiwidGV4dE91dGxpbmUiLCJmb250U2l6ZSIsImluZGV4Iiwic3ltYm9sIiwicGllQmFzZU9wdGlvbnMiLCJwbG90QmFja2dyb3VuZENvbG9yIiwicGxvdEJvcmRlcldpZHRoIiwicGxvdFNoYWRvdyIsInBvaW50Rm9ybWF0IiwicGllIiwiYWxsb3dQb2ludFNlbGVjdCIsImN1cnNvciIsInNob3dJbkxlZ2VuZCIsImNvbG9yQnlQb2ludCIsInBvaW50VnNUaW1lIiwib2ZmZW5zaXZlRGVmZW5zaXZlIiwiY29tYmF0U3RhdHVzIiwicGFycnkiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBOzs7OztrQkFJQTtzQkFFQTtBQUhBOztrQkFLQTt5Q0FDQTt1QkFDQTtBQUdBO0FBTkE7QUFMQTtBQURBLEU7Ozs7Ozs7QUN2QkE7QUFDQTs7O0FBR0E7QUFDQSwwQ0FBMkMsaUJBQWlCLHdCQUF3QixHQUFHLHNCQUFzQix1QkFBdUIsR0FBRzs7QUFFdkk7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FB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SDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3hNQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDbENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoianMvOS5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNGE1ZWJiMzchLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3ZpZXcudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi92aWV3LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTRhNWViYjM3IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3ZpZXcudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxzcG9ydGVjaC1zY291dGluZ1xcXFxyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGRhc2hib2FyZFxcXFxtb2R1bGVzXFxcXHJlcG9ydHNcXFxcdmlldy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB2aWV3LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00YTVlYmIzN1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTRhNWViYjM3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTkwXG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudC1oZWFkZXJcIj5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgIHt7dGl0bGV9fVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPG9sIGNsYXNzPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiYnJlYWRjcnVtYi5ocmVmXCIgYWN0aXZlLWNsYXNzPVwiYWN0aXZlXCIgdGFnPVwibGlcIiB2LWZvcj1cImJyZWFkY3J1bWIgaW4gYnJlYWRjcnVtYnNcIj5cclxuICAgICAgICAgICAgICAgIHt7JHQoYnJlYWRjcnVtYi50aXRsZSl9fVxyXG4gICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgIDwvb2w+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvdGVtcGxhdGU+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHJlbD1cInN0eWxlc2hlZXQvc2Nzc1wiPlxyXG4gICAgLmFkbWluLWhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA5N3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHR7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwYWdlSGVhZGVyLnZ1ZT80Yjg5MTkyMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmFkbWluLWhlYWRlciB7XFxuICBoZWlnaHQ6IDk3cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uYWRtaW4taGVhZGVyIC5yb3cge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi02NmY4NWU3ZCFzYXNzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNjZmODVlN2QhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHNwb3J0ZWNoLXNjb3V0aW5nXFxcXHJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxoZWFkZXJcXFxccGFnZUhlYWRlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwYWdlSGVhZGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02NmY4NWU3ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTY2Zjg1ZTdkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGVudC1oZWFkZXJcIlxuICB9LCBbX2MoJ2gxJywgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYlwiXG4gIH0sIF92bS5fbCgoX3ZtLmJyZWFkY3J1bWJzKSwgZnVuY3Rpb24oYnJlYWRjcnVtYikge1xuICAgIHJldHVybiBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInRvXCI6IGJyZWFkY3J1bWIuaHJlZixcbiAgICAgICAgXCJhY3RpdmUtY2xhc3NcIjogXCJhY3RpdmVcIixcbiAgICAgICAgXCJ0YWdcIjogXCJsaVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChicmVhZGNydW1iLnRpdGxlKSkgKyBcIlxcbiAgICAgICAgXCIpXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNjZmODVlN2RcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIyMDQ2MTQxOFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZmODVlN2QhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkiLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZ2VuZXJhdGVVVUlEKCkge1xyXG4gICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XHJcbiAgICAgICAgICAgICAgICBkID0gTWF0aC5mbG9vcihkIC8gMTYpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCkpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB1dWlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdXVpZC5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc2hvdyhpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvcmVwb3J0cy8nICsgaWQpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGUoYXRobGV0ZSwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5wb3N0KCcvYXBpL3JlcG9ydHMnLCBhdGhsZXRlKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG4gICAgbGF0ZXN0KHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3JlcG9ydHMvbGF0ZXN0JylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfSxcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0U2VydmljZS5qcyIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIFwiZW5cIjoge1xyXG4gICAgICAgIFwicmVwb3J0c1wiOiB7XHJcbiAgICAgICAgICAgIFwibGlzdFwiOiBcIlJlcG9ydHMgTGlzdFwiLFxyXG4gICAgICAgICAgICBcImNyZWF0ZVwiOiBcIkNyZWF0ZSBSZXBvcnRcIixcclxuICAgICAgICAgICAgXCJjcmVhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIlRoZSBSZXBvcnQgd2FzIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIFwibm90X2ZvdW5kXCI6IFwiVGhlIFJlcG9ydCBkb2Vzbid0IGV4aXN0XCIsXHJcbiAgICAgICAgICAgIFwibm9fc2NvdXRpbmdzXCI6IFwiWW91IGhhdmUgdG8gYWRkIDEgb3IgbW9yZSBzY291aXRuZ3NcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmFtZVwiLFxyXG4gICAgICAgICAgICBcImFkZF9zY291dGluZ1wiOiBcIkFkZCBTY291dGluZ1wiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgXCJyZXBvcnRzX3Njb3V0aW5nc1wiOiBcIlJlcG9ydCBTY291dGluZ3NcIixcclxuICAgICAgICAgICAgXCJyZXBvcnRcIjogXCJSZXBvcnRcIixcclxuICAgICAgICAgICAgXCJhY3Rpb25zXCI6IFwiQWN0aW9uc1wiLFxyXG4gICAgICAgICAgICBcInNjb3V0aW5nX2FkZGVkXCI6IFwiU2NvdXRpbmcgQWRkZWRcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImVzXCI6IHtcclxuICAgICAgICBcInJlcG9ydHNcIjoge1xyXG4gICAgICAgICAgICBcImxpc3RcIjogXCJMaXN0YSBkZSBSZXBvcnRlc1wiLFxyXG4gICAgICAgICAgICBcImNyZWF0ZVwiOiBcIkNyZWFyIFJlcG9ydGVcIixcclxuICAgICAgICAgICAgXCJjcmVhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIkVsIFJlcG9ydGUgZnVlIGNyZWFkbyBzYXRpc2ZhY3RvcmlhbWVudGVcIixcclxuICAgICAgICAgICAgXCJub3RfZm91bmRcIjogXCJFbCBSZXBvcnRlIG5vIGV4aXN0ZVwiLFxyXG4gICAgICAgICAgICBcIm5vX3Njb3V0aW5nc1wiOiBcIkRlYmVzIGFncmVnYXIgMSBvIG3DoXMgc2NvdXRpbmdzXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5vbWJyZVwiLFxyXG4gICAgICAgICAgICBcImFkZF9zY291dGluZ1wiOiBcIkHDsWFkaXIgU2NvdXRpbmdcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRlc2NyaXBjacOzblwiLFxyXG4gICAgICAgICAgICBcInJlcG9ydHNfc2NvdXRpbmdzXCI6IFwiU2NvdXRpbmdzIGRlbCByZXBvcnRlXCIsXHJcbiAgICAgICAgICAgIFwicmVwb3J0XCI6IFwiUmVwb3J0ZVwiLFxyXG4gICAgICAgICAgICBcImFjdGlvbnNcIjogXCJBY2Npb25lc1wiLFxyXG4gICAgICAgICAgICBcInNjb3V0aW5nX2FkZGVkXCI6IFwiU2NvdXRpbmcgQcOxYWRpZG9cIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xhbmcvYWRtaW4vcmVwb3J0cy9yZXBvcnRzLmpzIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiA6aWQ9XCJjb250YWluZXJJZFwiIGNsYXNzPVwiZ2F1Z2VcIj5cclxuICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPjxiPnt7dGl0bGV9fTwvYj48L2g0PlxyXG4gICAgICAgIDxjYW52YXMgOmlkPVwiZWxlbWVudElkXCI+PC9jYW52YXM+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdvYWwtd3JhcHBlciBjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICA8c3BhbiA6aWQ9XCJ0ZXh0SWRcIiBjbGFzcz1cImdhdWdlLXZhbHVlIHB1bGwtbGVmdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnYXVnZS12YWx1ZSBwdWxsLWxlZnRcIj4lPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBpZD1cImdvYWwtdGV4dFwiIGNsYXNzPVwiZ29hbC12YWx1ZSBwdWxsLXJpZ2h0XCI+MTAwJTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLmdhdWdlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuZ29hbC13cmFwcGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgdXVpZE1peGluIGZyb20gJ2Jhc2UvbWl4aW5zL3V1aWQnXHJcbiAgICBpbXBvcnQge29wdHN9IGZyb20gJy4vc3R1YnMvZ2F1Z2VPcHRzU3R1YidcclxuICAgIGV4cG9ydCBkZWZhdWx0e1xyXG5cclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB2YWx1ZToge3JlcXVpcmVkOiB0cnVlfSxcclxuICAgICAgICAgICAgdGl0bGU6IHtkZWZhdWx0OiAnJ30sXHJcbiAgICAgICAgICAgIGNvbG9yOiB7cmVxdWlyZWQ6IHRydWV9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5zZXQodmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YSgpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZ2F1Z2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvcHRzOiB7fSxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXRIYW5kbGU6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgZWxlbWVudElkKCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVVVSUQoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250YWluZXJJZCgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVVVUlEKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGV4dElkKCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVVVSUQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtaXhpbnM6IFt1dWlkTWl4aW5dLFxyXG4gICAgICAgIG1vdW50ZWQoKXtcclxuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlZHJhdyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGRyYXcoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2F1Z2VMaWIgPSByZXF1aXJlKCdnYXVnZS5qcycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJZCkub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gd2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aWR0aCArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgaGVpZ2h0ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdHMgPSBfLmNsb25lRGVlcChvcHRzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0cy5jb2xvclN0YXJ0ID0gdGhpcy5jb2xvcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2UgPSBuZXcgZ2F1Z2VMaWIuR2F1Z2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpKS5zZXRPcHRpb25zKHRoaXMub3B0cyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLm1heFZhbHVlID0gMTAwOyAvLyBzZXQgbWF4IGdhdWdlIHZhbHVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLnNldE1pblZhbHVlKDApOyAgLy8gUHJlZmVyIHNldHRlciBvdmVyIGdhdWdlLm1pblZhbHVlID0gMFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5hbmltYXRpb25TcGVlZCA9IDY1OyAvLyBzZXQgYW5pbWF0aW9uIHNwZWVkICgzMiBpcyBkZWZhdWx0IHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5zZXQodGhpcy52YWx1ZSk7IC8vIHNldCBhY3R1YWwgdmFsdWVcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2Uuc2V0VGV4dEZpZWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMudGV4dElkKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlZHJhdygpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLnNhdmUoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLmNsZWFyUmVjdCgwLCAwLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5jYW52YXMud2lkdGgsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVvdXRIYW5kbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRIYW5kbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dEhhbmRsZSA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuZHJhdywgMjUwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGdhdWdlLnZ1ZT83Yjk2OTk3YSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHBhZ2UtaGVhZGVyIDp0aXRsZT1cIiR0KCdyZXBvcnRzLnJlcG9ydCcpXCIgOmJyZWFkY3J1bWJzPVwiYnJlYWRjcnVtYnNcIj48L3BhZ2UtaGVhZGVyPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudCByZXBvcnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMyBjb2wteHMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tdGV4dFwiPkVGRkVDVElWRU5FU1M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiZGVzY3JpcHRpb24taGVhZGVyXCI+e3tlZmZlY3RpdmVuZXNzLnBlcmNlbnRhZ2V9fSU8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tlZmZlY3RpdmVuZXNzLnZpY3Rvcmllc319VlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tlZmZlY3RpdmVuZXNzLmRlZmVhdHN9fVZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5kZXNjcmlwdGlvbi1ibG9jayAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jb2wgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMyBjb2wteHMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tdGV4dFwiPlZBTElEPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJkZXNjcmlwdGlvbi1oZWFkZXJcIj57e3ZhbGlkLnBlcmNlbnRhZ2V9fSU8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWxpZC52YWxpZH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbGlkLm5vVmFsaWR9fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uZGVzY3JpcHRpb24tYmxvY2sgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY29sIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTMgY29sLXhzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXRleHRcIj5BVkVSQUdFPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImRlc2NyaXB0aW9uLWhlYWRlclwiPnt7YXZlcmFnZS5wZXJjZW50YWdlfX0lPC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7YXZlcmFnZS5naXZlbn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2F2ZXJhZ2UucmVjZWl2ZWR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmRlc2NyaXB0aW9uLWJsb2NrIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC14cy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi10ZXh0XCI+UEVSRkVDVElPTjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJkZXNjcmlwdGlvbi1oZWFkZXJcIj57e3BlcmZlY3Rpb24ucGVyY2VudGFnZX19JTwvaDU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3BlcmZlY3Rpb24ucGVyZmVjdH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3BlcmZlY3Rpb24uaW1wZXJmZWN0fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbi1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tdGV4dFwiPlRJTUUgQ09OU1VNRTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiZGVzY3JpcHRpb24taGVhZGVyXCI+e3t0aW1lQ29uc3VtZWQucGVyY2VudGFnZX19JTwvaDU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RpbWVDb25zdW1lZC50aW1lQ29uc3VtZWR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0aW1lQ29uc3VtZWQudGltZUlkbGV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmRlc2NyaXB0aW9uLWJsb2NrIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LXRhYnMtY3VzdG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIDpjbGFzcz1cInsnYWN0aXZlJzppbmRleCA9PSAwfVwiIHYtZm9yPVwiKHBvaW50VnNUaW1lR3JhcGgsaW5kZXgpIGluIHBvaW50VnNUaW1lR3JhcGhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCInIycrcG9pbnRWc1RpbWVHcmFwaC5pZFwiIGRhdGEtdG9nZ2xlPVwidGFiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twb2ludFZzVGltZUdyYXBoLm5hbWV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1wYW5lXCIgOmNsYXNzPVwieydhY3RpdmUnOmluZGV4ID09IDB9XCIgOmlkPVwicG9pbnRWc1RpbWVHcmFwaC5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHBvaW50VnNUaW1lR3JhcGgsaW5kZXgpIGluIHBvaW50VnNUaW1lR3JhcGhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhpZ2hjaGFydHMgOnJlZj1cInBvaW50VnNUaW1lR3JhcGguaWRcIiA6b3B0aW9ucz1cInBvaW50VnNUaW1lR3JhcGgub3B0aW9uc1wiPjwvaGlnaGNoYXJ0cz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnYXVnZSA6dmFsdWU9XCJvZmZlbnNpdmVHYXVnZS5kYXRhXCIgY29sb3I9XCJncmVlblwiIHRpdGxlPVwiQ291bnRlcm9mZmVuc2l2ZVwiPjwvZ2F1Z2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Z2F1Z2UgOnZhbHVlPVwiZGVmZW5zaXZlR2F1Z2UuZGF0YVwiIGNvbG9yPVwieWVsbG93XCIgdGl0bGU9XCJEZWZlbnNpdmVcIj48L2dhdWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGdhdWdlIDp2YWx1ZT1cImNvdW50ZXJPZmZlbnNpdmVHYXVnZS5kYXRhXCIgY29sb3I9XCJyZWRcIiB0aXRsZT1cIk9mZmVuc2l2ZVwiPjwvZ2F1Z2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhpZ2hjaGFydHMgOm9wdGlvbnM9XCJwaWVcIj48L2hpZ2hjaGFydHM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aGlnaGNoYXJ0cyA6b3B0aW9ucz1cImJhclwiPjwvaGlnaGNoYXJ0cz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlPlxyXG4gICAgLnJlcG9ydCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvcmRlci1yaWdodCB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzY2NjtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24tdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbi1wZXJjZW50YWdlIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uLWhlYWRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuPC9zdHlsZT5cclxuPHNjcmlwdCB0eXBlPVwidGV4dC9iYWJlbFwiPlxyXG4gICAgaW1wb3J0IHBhZ2VIZWFkZXIgZnJvbSAnYmFzZS9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZSdcclxuICAgIGltcG9ydCBnYXVnZSBmcm9tICdiYXNlL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWUnXHJcbiAgICBpbXBvcnQgcmVwb3J0c0xvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL3JlcG9ydHMvcmVwb3J0cy5qcyc7XHJcbiAgICBpbXBvcnQgcmVwb3J0U2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydFNlcnZpY2UnXHJcbiAgICBpbXBvcnQgcmVwb3J0RGF0YVNlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvcmVwb3J0cy9yZXBvcnREYXRhU2VydmljZSdcclxuICAgIGltcG9ydCB1dWlkTWl4aW4gZnJvbSAnYmFzZS9taXhpbnMvdXVpZCdcclxuICAgIGltcG9ydCB7bGluZUJhc2VPcHRpb25zfSBmcm9tICcuL3N0dWJzL2xpbmVPcHRpb25zJ1xyXG4gICAgaW1wb3J0IHtwaWVCYXNlT3B0aW9uc30gZnJvbSAnLi9zdHVicy9waWVPcHRpb25zJ1xyXG4gICAgaW1wb3J0IHtiYXJCYXNlT3B0aW9uc30gZnJvbSAnLi9zdHVicy9iYXJPcHRpb25zJ1xyXG4gICAgaW1wb3J0IHtnYXVnZUJhc2VPcHRpb25zfSBmcm9tICcuL3N0dWJzL2dhdWdlT3B0aW9ucydcclxuICAgIGV4cG9ydCBkZWZhdWx0e1xyXG4gICAgICAgIGxvY2FsZXM6IHJlcG9ydHNMb2NhbGVzLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgcGFnZUhlYWRlcixcclxuICAgICAgICAgICAgZ2F1Z2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1peGluczogW3V1aWRNaXhpbl0sXHJcbiAgICAgICAgZGF0YSgpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVwb3J0czoge30sXHJcbiAgICAgICAgICAgICAgICBwb2ludFZzVGltZUdyYXBoczogW10sXHJcbiAgICAgICAgICAgICAgICBwaWU6IHt9LFxyXG4gICAgICAgICAgICAgICAgYmFyOiB7fSxcclxuICAgICAgICAgICAgICAgIGNvdW50ZXJPZmZlbnNpdmVHYXVnZToge2RhdGE6IDB9LFxyXG4gICAgICAgICAgICAgICAgb2ZmZW5zaXZlR2F1Z2U6IHtkYXRhOiAwfSxcclxuICAgICAgICAgICAgICAgIGRlZmVuc2l2ZUdhdWdlOiB7ZGF0YTogMH0sXHJcbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVuZXNzOiB7fSxcclxuICAgICAgICAgICAgICAgIHZhbGlkOiB7fSxcclxuICAgICAgICAgICAgICAgIGF2ZXJhZ2U6IHt9LFxyXG4gICAgICAgICAgICAgICAgcGVyZmVjdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgICB0aW1lQ29uc3VtZWQ6IHt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzKCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9kYXNoYm9hcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy4kdCgnYWRtaW4uaG9tZScpXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvcmVwb3J0cy8nICsgdGhpcy4kcm91dGUucGFyYW1zLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2FkbWluLnZpZXcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCgpe1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuJGF1dGgudXNlcigpLnN1cGVyVXNlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm9vdC5lcnJvclRvYXN0KCdObyB0aWVuZXMgcGVybWlzbyBwYXJhIHZlciBlbCBpbmZvcm1lJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlcG9ydHMubGlzdCcsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVwb3J0U2VydmljZS5zaG93KHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpe1xyXG4gICAgICAgICAgICByZXBvcnREYXRhU2VydmljZS5wb2ludFZzVGltZSh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdyYXBoID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChkYXRhLCAoZ3JhcGhEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGluZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5nZW5lcmF0ZVVVSUQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBncmFwaERhdGEubGVmdEF0aGxldGUgKyAnIFZTICcgKyBncmFwaERhdGEucmlnaHRBdGhsZXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF8uY2xvbmVEZWVwKGxpbmVCYXNlT3B0aW9ucyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLm9wdGlvbnMueEF4aXMuY2F0ZWdvcmllcyA9IGdyYXBoRGF0YS50aW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5vcHRpb25zLnNlcmllc1swXS5kYXRhID0gZ3JhcGhEYXRhLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLm9wdGlvbnMuc2VyaWVzWzFdLmRhdGEgPSBncmFwaERhdGEucmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLm9wdGlvbnMuc2VyaWVzWzBdLm5hbWUgPSBncmFwaERhdGEubGVmdEF0aGxldGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLm9wdGlvbnMuc2VyaWVzWzFdLm5hbWUgPSBncmFwaERhdGEucmlnaHRBdGhsZXRlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoLnB1c2gobGluZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvaW50VnNUaW1lR3JhcGhzID0gZ3JhcGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdhW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykub24oJ3Nob3duLmJzLnRhYicsIChlKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goc2VsZi5wb2ludFZzVGltZUdyYXBocywgKGdyYXBoRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyZWZzW2dyYXBoRGF0YS5pZF1bMF0uY2hhcnQucmVmbG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlcG9ydERhdGFTZXJ2aWNlLm9mZmVuc2l2ZURlZmVuc2l2ZSh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudGVyT2ZmZW5zaXZlR2F1Z2UuZGF0YSA9IGRhdGEuY291bnRlck9mZmVuc2l2ZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZmVuc2l2ZUdhdWdlLmRhdGEgPSBkYXRhLm9mZmVuc2l2ZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmVuc2l2ZUdhdWdlLmRhdGEgPSBkYXRhLmRlZmVuc2l2ZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICByZXBvcnREYXRhU2VydmljZS5jb21iYXRTdGF0dXModGhpcy4kcm91dGUucGFyYW1zLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwaWUgPSBfLmNsb25lRGVlcChwaWVCYXNlT3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZS5zZXJpZXNbMF0uZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGllID0gcGllO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJlcG9ydERhdGFTZXJ2aWNlLnBhcnJ5KHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yaWVzID0gcmVzcG9uc2UuY2F0ZWdvcmllcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJhciA9IF8uY2xvbmVEZWVwKGJhckJhc2VPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyLnNlcmllc1swXS5kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyLnhBeGlzLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhciA9IGJhcjtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgcmVwb3J0RGF0YVNlcnZpY2Uuc3VtbWFyeSh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZmZlY3RpdmVuZXNzID0gZGF0YS5lZmZlY3RpdmVuZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkID0gZGF0YS52YWxpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdmVyYWdlID0gZGF0YS5hdmVyYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcmZlY3Rpb24gPSBkYXRhLnBlcmZlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUNvbnN1bWVkID0gZGF0YS5jb25zdW1lZFRpbWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHZpZXcudnVlPzM0YTc5ZThhIiwiZXhwb3J0IGNvbnN0IG9wdHMgPSB7XHJcbiAgICBhbmdsZTogLTAuMDIsIC8vIFRoZSBzcGFuIG9mIHRoZSBnYXVnZSBhcmNcclxuICAgIGxpbmVXaWR0aDogMC40NCwgLy8gVGhlIGxpbmUgdGhpY2tuZXNzXHJcbiAgICByYWRpdXNTY2FsZTogMSwgLy8gUmVsYXRpdmUgcmFkaXVzXHJcbiAgICBwb2ludGVyOiB7XHJcbiAgICAgICAgbGVuZ3RoOiAwLjYsIC8vIC8vIFJlbGF0aXZlIHRvIGdhdWdlIHJhZGl1c1xyXG4gICAgICAgIHN0cm9rZVdpZHRoOiAwLjAzNSwgLy8gVGhlIHRoaWNrbmVzc1xyXG4gICAgICAgIGNvbG9yOiAnIzAwMDAwMCcgLy8gRmlsbCBjb2xvclxyXG4gICAgfSxcclxuICAgIGxpbWl0TWF4OiBmYWxzZSwgICAgIC8vIElmIGZhbHNlLCB0aGUgbWF4IHZhbHVlIG9mIHRoZSBnYXVnZSB3aWxsIGJlIHVwZGF0ZWQgaWYgdmFsdWUgc3VycGFzcyBtYXhcclxuICAgIGxpbWl0TWluOiBmYWxzZSwgICAgIC8vIElmIHRydWUsIHRoZSBtaW4gdmFsdWUgb2YgdGhlIGdhdWdlIHdpbGwgYmUgZml4ZWQgdW5sZXNzIHlvdSBzZXQgaXQgbWFudWFsbHlcclxuICAgIGNvbG9yU3RhcnQ6ICcjNkZBRENGJywgICAvLyBDb2xvcnNcclxuICAgIGNvbG9yU3RvcDogJyM4RkMwREEnLCAgICAvLyBqdXN0IGV4cGVyaW1lbnQgd2l0aCB0aGVtXHJcbiAgICBzdHJva2VDb2xvcjogJyNFMEUwRTAnLCAgLy8gdG8gc2VlIHdoaWNoIG9uZXMgd29yayBiZXN0IGZvciB5b3VcclxuICAgIGdlbmVyYXRlR3JhZGllbnQ6IHRydWUsXHJcbiAgICBoaWdoRHBpU3VwcG9ydDogdHJ1ZSAgICAgLy8gSGlnaCByZXNvbHV0aW9uIHN1cHBvcnRcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL3N0dWJzL2dhdWdlT3B0c1N0dWIuanMiLCJleHBvcnQgY29uc3QgYmFyQmFzZU9wdGlvbnMgPSB7XHJcbiAgICBjaGFydDoge1xyXG4gICAgICAgIHR5cGU6ICdiYXInXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICB0ZXh0OiAnUGFycnknXHJcbiAgICB9LFxyXG4gICAgeEF4aXM6IHtcclxuICAgICAgICBjYXRlZ29yaWVzOiBbJzEyJywgJzExJywgJzEwJywgJzknLCAnOCcsICc3JywgJzYnLCAnNScsICc0JywgJzMnLCAnMicsICcxJ10sXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgdGV4dDogJ0JvZHkgWm9uZSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgeUF4aXM6IHtcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgdGV4dDogJ051bWJlciBvZiBQYXJyeXMnLFxyXG4gICAgICAgICAgICBhbGlnbjogJ2hpZ2gnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdqdXN0aWZ5J1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwbG90T3B0aW9uczoge1xyXG4gICAgICAgIGJhcjoge1xyXG4gICAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbGVnZW5kOiB7XHJcbiAgICAgICAgbGF5b3V0OiAndmVydGljYWwnLFxyXG4gICAgICAgIGFsaWduOiAncmlnaHQnLFxyXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxyXG4gICAgICAgIHg6IC00MCxcclxuICAgICAgICB5OiA4MCxcclxuICAgICAgICBmbG9hdGluZzogdHJ1ZSxcclxuICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGRkZGJyxcclxuICAgICAgICBzaGFkb3c6IHRydWVcclxuICAgIH0sXHJcbiAgICBjcmVkaXRzOiB7XHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgbmFtZTogJ1BhcnJ5IE51bWJlcnMnLFxyXG4gICAgICAgIGRhdGE6IFsxLCAwLCAyLCAyLCAwLCAzLCA0LCAwLCAwLCAxLCAwLCAwXVxyXG4gICAgfV1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy9zdHVicy9iYXJPcHRpb25zLmpzIiwiZXhwb3J0IGNvbnN0IGdhdWdlQmFzZU9wdGlvbnMgPSB7XHJcbiAgICBjaGFydDoge1xyXG4gICAgICAgIHR5cGU6ICdzb2xpZGdhdWdlJyxcclxuICAgICAgICBoZWlnaHQ6IDE1MFxyXG4gICAgfSxcclxuICAgIHlBeGlzOiB7XHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHk6IC03MFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0b3BzOiBbXHJcbiAgICAgICAgICAgIFswLjEsICcjNTVCRjNCJ10gLy8gZ3JlZW5cclxuICAgICAgICBdLFxyXG4gICAgICAgIGxpbmVXaWR0aDogMCxcclxuICAgICAgICBtaW5vclRpY2tJbnRlcnZhbDogbnVsbCxcclxuICAgICAgICB0aWNrQW1vdW50OiAyLFxyXG4gICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY3JlZGl0czoge1xyXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICB9LFxyXG5cclxuICAgIHNlcmllczogW3tcclxuICAgICAgICBuYW1lOiBudWxsLFxyXG4gICAgICAgIGRhdGE6IFs4MF0sXHJcbiAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICBmb3JtYXQ6ICc8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToxM3B4O2NvbG9yOicgK1xyXG4gICAgICAgICAgICAoJ2JsYWNrJykgKyAnXCI+e3l9JTwvc3Bhbj48YnIvPicsXHJcbiAgICAgICAgICAgIHk6IC0yNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICB2YWx1ZVN1ZmZpeDogJyUnXHJcbiAgICAgICAgfVxyXG4gICAgfV0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHRleHQ6ICdFZmVjdGl2aWRhZCdcclxuICAgIH0sXHJcblxyXG4gICAgcGFuZToge1xyXG4gICAgICAgIHNpemU6ICcxNTAlJyxcclxuICAgICAgICBzdGFydEFuZ2xlOiAtOTAsXHJcbiAgICAgICAgZW5kQW5nbGU6IDkwLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0VFRScsXHJcbiAgICAgICAgICAgIGlubmVyUmFkaXVzOiAnNjAlJyxcclxuICAgICAgICAgICAgb3V0ZXJSYWRpdXM6ICcxMDAlJyxcclxuICAgICAgICAgICAgc2hhcGU6ICdhcmMnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdGhlIHZhbHVlIGF4aXNcclxuICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgICAgc29saWRnYXVnZToge1xyXG4gICAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICB5OiA1LFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICB1c2VIVE1MOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvc3R1YnMvZ2F1Z2VPcHRpb25zLmpzIiwiZXhwb3J0IGNvbnN0IGxpbmVCYXNlT3B0aW9ucyA9IHtcclxuICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgdHlwZTogJ2xpbmUnXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICB0ZXh0OiAnUG9pbnRzIHZzIFRpbWUnXHJcbiAgICB9LFxyXG4gICAgeEF4aXM6IHtcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnVGltZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlICsgJ21pbic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgeUF4aXM6IHtcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnUG9pbnRzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgKyAncHQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvb2x0aXA6IHtcclxuICAgICAgICBjcm9zc2hhaXJzOiB0cnVlLFxyXG4gICAgICAgIHNoYXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgICAgbGluZToge1xyXG4gICAgICAgICAgICBtYXJrZXI6IHtcclxuICAgICAgICAgICAgICAgIHJhZGl1czogOCxcclxuICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcclxuICAgICAgICAgICAgICAgIGNyb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdub25lJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRPdXRsaW5lOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNlcmllczogW3tcclxuICAgICAgICBuYW1lOiAnUGVkcm8gR29ycmluJyxcclxuICAgICAgICBjb2xvcjogJyNmZjY2MDAnLFxyXG4gICAgICAgIGluZGV4OiAyLFxyXG4gICAgICAgIG1hcmtlcjoge1xyXG4gICAgICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxyXG4gICAgICAgICAgICByYWRpdXM6IDEyXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YTogW11cclxuXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogJ0phdmllciBCYXN0aWRhcycsXHJcbiAgICAgICAgY29sb3I6ICcjNjRiNWY2JyxcclxuICAgICAgICBpbmRleDogMSxcclxuXHJcbiAgICAgICAgbWFya2VyOiB7XHJcbiAgICAgICAgICAgIHN5bWJvbDogJ2NpcmNsZScsXHJcbiAgICAgICAgICAgIHJhZGl1czogMTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IFtdXHJcbiAgICB9XVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3N0dWJzL2xpbmVPcHRpb25zLmpzIiwiZXhwb3J0IGNvbnN0IHBpZUJhc2VPcHRpb25zID0ge1xyXG4gICAgY2hhcnQ6IHtcclxuICAgICAgICBwbG90QmFja2dyb3VuZENvbG9yOiBudWxsLFxyXG4gICAgICAgIHBsb3RCb3JkZXJXaWR0aDogbnVsbCxcclxuICAgICAgICBwbG90U2hhZG93OiBmYWxzZSxcclxuICAgICAgICB0eXBlOiAncGllJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdGV4dDogJ0NvbWJhdCBTdGF0dXMnXHJcbiAgICB9LFxyXG4gICAgdG9vbHRpcDoge1xyXG4gICAgICAgIHBvaW50Rm9ybWF0OiAne3Nlcmllcy5uYW1lfTogPGI+e3BvaW50LnBlcmNlbnRhZ2U6LjFmfSU8L2I+J1xyXG4gICAgfSxcclxuICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgICAgcGllOiB7XHJcbiAgICAgICAgICAgIGFsbG93UG9pbnRTZWxlY3Q6IHRydWUsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogJzxiPntwb2ludC5uYW1lfTwvYj46IHtwb2ludC5wZXJjZW50YWdlOi4xZn0gJScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNob3dJbkxlZ2VuZDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgbmFtZTogJ1BlcmNlbnQnLFxyXG4gICAgICAgIGNvbG9yQnlQb2ludDogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBbe1xyXG4gICAgICAgICAgICBuYW1lOiAnRVFVQUwnLFxyXG4gICAgICAgICAgICB5OiAyMFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogJ1VQJyxcclxuICAgICAgICAgICAgeTogNjAsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiAnRE9XTicsXHJcbiAgICAgICAgICAgIHk6IDIwXHJcbiAgICAgICAgfV1cclxuICAgIH1dXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvc3R1YnMvcGllT3B0aW9ucy5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcG9pbnRWc1RpbWUoaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3JlcG9ydHMvJyArIGlkICsgJy9wb2ludC12cy10aW1lJylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfSxcclxuICAgIG9mZmVuc2l2ZURlZmVuc2l2ZShpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvcmVwb3J0cy8nICsgaWQgKyAnL29mZmVuc2l2ZS1kZWZlbnNpdmUnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG4gICAgY29tYmF0U3RhdHVzKGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9yZXBvcnRzLycgKyBpZCArICcvY29tYmF0LXN0YXR1cycpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbiAgICBwYXJyeShpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvcmVwb3J0cy8nICsgaWQgKyAnL3BhcnJ5JylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfSxcclxuICAgIHN1bW1hcnkoaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3JlcG9ydHMvJyArIGlkICsgJy9zdW1tYXJ5JylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvcmVwb3J0cy9yZXBvcnREYXRhU2VydmljZS5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnJlcG9ydCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uYm9yZGVyLXJpZ2h0IHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzY2NjtcXG59XFxuLmRlc2NyaXB0aW9uLXRleHQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uZGVzY3JpcHRpb24tcGVyY2VudGFnZSB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5kZXNjcmlwdGlvbi1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4uLy4uLy4uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy92aWV3LnZ1ZT8zNGE3OWU4YVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBNktBO0lBQ0Esd0JBQUE7Q0FDQTtBQUVBO0lBQ0EsNkJBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwidmlldy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPHBhZ2UtaGVhZGVyIDp0aXRsZT1cXFwiJHQoJ3JlcG9ydHMucmVwb3J0JylcXFwiIDpicmVhZGNydW1icz1cXFwiYnJlYWRjcnVtYnNcXFwiPjwvcGFnZS1oZWFkZXI+XFxyXFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29udGVudCByZXBvcnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wteHMtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tdGV4dFxcXCI+RUZGRUNUSVZFTkVTUzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgdGV4dC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiZGVzY3JpcHRpb24taGVhZGVyXFxcIj57e2VmZmVjdGl2ZW5lc3MucGVyY2VudGFnZX19JTwvaDU+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgdGV4dC1sZWZ0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2VmZmVjdGl2ZW5lc3MudmljdG9yaWVzfX1WXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2VmZmVjdGl2ZW5lc3MuZGVmZWF0c319VlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5kZXNjcmlwdGlvbi1ibG9jayAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY29sIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zIGNvbC14cy02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi10ZXh0XFxcIj5WQUxJRDwvc3Bhbj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgdGV4dC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiZGVzY3JpcHRpb24taGVhZGVyXFxcIj57e3ZhbGlkLnBlcmNlbnRhZ2V9fSU8L2g1PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtbGVmdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWxpZC52YWxpZH19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbGlkLm5vVmFsaWR9fVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5kZXNjcmlwdGlvbi1ibG9jayAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY29sIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zIGNvbC14cy02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi10ZXh0XFxcIj5BVkVSQUdFPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1oZWFkZXJcXFwiPnt7YXZlcmFnZS5wZXJjZW50YWdlfX0lPC9oNT5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LWxlZnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7YXZlcmFnZS5naXZlbn19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2F2ZXJhZ2UucmVjZWl2ZWR9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5kZXNjcmlwdGlvbi1ibG9jayAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wteHMtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tdGV4dFxcXCI+UEVSRkVDVElPTjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgdGV4dC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiZGVzY3JpcHRpb24taGVhZGVyXFxcIj57e3BlcmZlY3Rpb24ucGVyY2VudGFnZX19JTwvaDU+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgdGV4dC1sZWZ0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3BlcmZlY3Rpb24ucGVyZmVjdH19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3BlcmZlY3Rpb24uaW1wZXJmZWN0fX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1ibG9ja1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tdGV4dFxcXCI+VElNRSBDT05TVU1FPC9zcGFuPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1oZWFkZXJcXFwiPnt7dGltZUNvbnN1bWVkLnBlcmNlbnRhZ2V9fSU8L2g1PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtbGVmdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0aW1lQ29uc3VtZWQudGltZUNvbnN1bWVkfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dGltZUNvbnN1bWVkLnRpbWVJZGxlfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uZGVzY3JpcHRpb24tYmxvY2sgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXYtdGFicy1jdXN0b21cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdi10YWJzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIDpjbGFzcz1cXFwieydhY3RpdmUnOmluZGV4ID09IDB9XFxcIiB2LWZvcj1cXFwiKHBvaW50VnNUaW1lR3JhcGgsaW5kZXgpIGluIHBvaW50VnNUaW1lR3JhcGhzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVxcXCInIycrcG9pbnRWc1RpbWVHcmFwaC5pZFxcXCIgZGF0YS10b2dnbGU9XFxcInRhYlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3BvaW50VnNUaW1lR3JhcGgubmFtZX19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWItY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYi1wYW5lXFxcIiA6Y2xhc3M9XFxcInsnYWN0aXZlJzppbmRleCA9PSAwfVxcXCIgOmlkPVxcXCJwb2ludFZzVGltZUdyYXBoLmlkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVxcXCIocG9pbnRWc1RpbWVHcmFwaCxpbmRleCkgaW4gcG9pbnRWc1RpbWVHcmFwaHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhpZ2hjaGFydHMgOnJlZj1cXFwicG9pbnRWc1RpbWVHcmFwaC5pZFxcXCIgOm9wdGlvbnM9XFxcInBvaW50VnNUaW1lR3JhcGgub3B0aW9uc1xcXCI+PC9oaWdoY2hhcnRzPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnYXVnZSA6dmFsdWU9XFxcIm9mZmVuc2l2ZUdhdWdlLmRhdGFcXFwiIGNvbG9yPVxcXCJncmVlblxcXCIgdGl0bGU9XFxcIkNvdW50ZXJvZmZlbnNpdmVcXFwiPjwvZ2F1Z2U+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Z2F1Z2UgOnZhbHVlPVxcXCJkZWZlbnNpdmVHYXVnZS5kYXRhXFxcIiBjb2xvcj1cXFwieWVsbG93XFxcIiB0aXRsZT1cXFwiRGVmZW5zaXZlXFxcIj48L2dhdWdlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGdhdWdlIDp2YWx1ZT1cXFwiY291bnRlck9mZmVuc2l2ZUdhdWdlLmRhdGFcXFwiIGNvbG9yPVxcXCJyZWRcXFwiIHRpdGxlPVxcXCJPZmZlbnNpdmVcXFwiPjwvZ2F1Z2U+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC04XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoaWdoY2hhcnRzIDpvcHRpb25zPVxcXCJwaWVcXFwiPjwvaGlnaGNoYXJ0cz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aGlnaGNoYXJ0cyA6b3B0aW9ucz1cXFwiYmFyXFxcIj48L2hpZ2hjaGFydHM+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9zZWN0aW9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcbjxzdHlsZT5cXHJcXG4gICAgLnJlcG9ydCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYm9yZGVyLXJpZ2h0IHtcXHJcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM2NjY7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRlc2NyaXB0aW9uLXRleHQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRlc2NyaXB0aW9uLXBlcmNlbnRhZ2Uge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRlc2NyaXB0aW9uLWhlYWRlciB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgfVxcclxcblxcclxcbjwvc3R5bGU+XFxyXFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2JhYmVsXFxcIj5cXHJcXG4gICAgaW1wb3J0IHBhZ2VIZWFkZXIgZnJvbSAnYmFzZS9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZSdcXHJcXG4gICAgaW1wb3J0IGdhdWdlIGZyb20gJ2Jhc2UvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZSdcXHJcXG4gICAgaW1wb3J0IHJlcG9ydHNMb2NhbGVzIGZyb20gJ2Jhc2UvbGFuZy9hZG1pbi9yZXBvcnRzL3JlcG9ydHMuanMnO1xcclxcbiAgICBpbXBvcnQgcmVwb3J0U2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydFNlcnZpY2UnXFxyXFxuICAgIGltcG9ydCByZXBvcnREYXRhU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydERhdGFTZXJ2aWNlJ1xcclxcbiAgICBpbXBvcnQgdXVpZE1peGluIGZyb20gJ2Jhc2UvbWl4aW5zL3V1aWQnXFxyXFxuICAgIGltcG9ydCB7bGluZUJhc2VPcHRpb25zfSBmcm9tICcuL3N0dWJzL2xpbmVPcHRpb25zJ1xcclxcbiAgICBpbXBvcnQge3BpZUJhc2VPcHRpb25zfSBmcm9tICcuL3N0dWJzL3BpZU9wdGlvbnMnXFxyXFxuICAgIGltcG9ydCB7YmFyQmFzZU9wdGlvbnN9IGZyb20gJy4vc3R1YnMvYmFyT3B0aW9ucydcXHJcXG4gICAgaW1wb3J0IHtnYXVnZUJhc2VPcHRpb25zfSBmcm9tICcuL3N0dWJzL2dhdWdlT3B0aW9ucydcXHJcXG4gICAgZXhwb3J0IGRlZmF1bHR7XFxyXFxuICAgICAgICBsb2NhbGVzOiByZXBvcnRzTG9jYWxlcyxcXHJcXG4gICAgICAgIGNvbXBvbmVudHM6IHtcXHJcXG4gICAgICAgICAgICBwYWdlSGVhZGVyLFxcclxcbiAgICAgICAgICAgIGdhdWdlXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWl4aW5zOiBbdXVpZE1peGluXSxcXHJcXG4gICAgICAgIGRhdGEoKXtcXHJcXG4gICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICByZXBvcnRzOiB7fSxcXHJcXG4gICAgICAgICAgICAgICAgcG9pbnRWc1RpbWVHcmFwaHM6IFtdLFxcclxcbiAgICAgICAgICAgICAgICBwaWU6IHt9LFxcclxcbiAgICAgICAgICAgICAgICBiYXI6IHt9LFxcclxcbiAgICAgICAgICAgICAgICBjb3VudGVyT2ZmZW5zaXZlR2F1Z2U6IHtkYXRhOiAwfSxcXHJcXG4gICAgICAgICAgICAgICAgb2ZmZW5zaXZlR2F1Z2U6IHtkYXRhOiAwfSxcXHJcXG4gICAgICAgICAgICAgICAgZGVmZW5zaXZlR2F1Z2U6IHtkYXRhOiAwfSxcXHJcXG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlbmVzczoge30sXFxyXFxuICAgICAgICAgICAgICAgIHZhbGlkOiB7fSxcXHJcXG4gICAgICAgICAgICAgICAgYXZlcmFnZToge30sXFxyXFxuICAgICAgICAgICAgICAgIHBlcmZlY3Rpb246IHt9LFxcclxcbiAgICAgICAgICAgICAgICB0aW1lQ29uc3VtZWQ6IHt9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxyXFxuICAgICAgICAgICAgYnJlYWRjcnVtYnMoKXtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL2Rhc2hib2FyZCcsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuJHQoJ2FkbWluLmhvbWUnKVxcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL3JlcG9ydHMvJyArIHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2FkbWluLnZpZXcnXFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIF1cXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNyZWF0ZWQoKXtcXHJcXG4gICAgICAgICAgICBpZiAoIXRoaXMuJGF1dGgudXNlcigpLnN1cGVyVXNlcikge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLiRyb290LmVycm9yVG9hc3QoJ05vIHRpZW5lcyBwZXJtaXNvIHBhcmEgdmVyIGVsIGluZm9ybWUnKTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xcclxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlcG9ydHMubGlzdCcsXFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgcmVwb3J0U2VydmljZS5zaG93KHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcG9ydCA9IHJlc3BvbnNlLmRhdGE7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbW91bnRlZCgpe1xcclxcbiAgICAgICAgICAgIHJlcG9ydERhdGFTZXJ2aWNlLnBvaW50VnNUaW1lKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ3JhcGggPSBbXTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goZGF0YSwgKGdyYXBoRGF0YSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGluZSA9IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmdlbmVyYXRlVVVJRCgpLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZ3JhcGhEYXRhLmxlZnRBdGhsZXRlICsgJyBWUyAnICsgZ3JhcGhEYXRhLnJpZ2h0QXRobGV0ZSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF8uY2xvbmVEZWVwKGxpbmVCYXNlT3B0aW9ucyksXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5vcHRpb25zLnhBeGlzLmNhdGVnb3JpZXMgPSBncmFwaERhdGEudGltZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5vcHRpb25zLnNlcmllc1swXS5kYXRhID0gZ3JhcGhEYXRhLmxlZnQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUub3B0aW9ucy5zZXJpZXNbMV0uZGF0YSA9IGdyYXBoRGF0YS5yaWdodDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5vcHRpb25zLnNlcmllc1swXS5uYW1lID0gZ3JhcGhEYXRhLmxlZnRBdGhsZXRlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLm9wdGlvbnMuc2VyaWVzWzFdLm5hbWUgPSBncmFwaERhdGEucmlnaHRBdGhsZXRlO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwaC5wdXNoKGxpbmUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9pbnRWc1RpbWVHcmFwaHMgPSBncmFwaDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCk9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJ2FbZGF0YS10b2dnbGU9XFxcInRhYlxcXCJdJykub24oJ3Nob3duLmJzLnRhYicsIChlKT0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChzZWxmLnBvaW50VnNUaW1lR3JhcGhzLCAoZ3JhcGhEYXRhKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcmVmc1tncmFwaERhdGEuaWRdWzBdLmNoYXJ0LnJlZmxvdygpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9KTtcXHJcXG5cXHJcXG4gICAgICAgICAgICByZXBvcnREYXRhU2VydmljZS5vZmZlbnNpdmVEZWZlbnNpdmUodGhpcy4kcm91dGUucGFyYW1zLmlkLFxcclxcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRlck9mZmVuc2l2ZUdhdWdlLmRhdGEgPSBkYXRhLmNvdW50ZXJPZmZlbnNpdmUuZGF0YTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZmVuc2l2ZUdhdWdlLmRhdGEgPSBkYXRhLm9mZmVuc2l2ZS5kYXRhO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmZW5zaXZlR2F1Z2UuZGF0YSA9IGRhdGEuZGVmZW5zaXZlLmRhdGE7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9KVxcclxcblxcclxcbiAgICAgICAgICAgIHJlcG9ydERhdGFTZXJ2aWNlLmNvbWJhdFN0YXR1cyh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXFxyXFxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2U7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBpZSA9IF8uY2xvbmVEZWVwKHBpZUJhc2VPcHRpb25zKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWUuc2VyaWVzWzBdLmRhdGEgPSBkYXRhO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGllID0gcGllO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICByZXBvcnREYXRhU2VydmljZS5wYXJyeSh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXFxyXFxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2UuZGF0YTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmNhdGVnb3JpZXM7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJhciA9IF8uY2xvbmVEZWVwKGJhckJhc2VPcHRpb25zKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXIuc2VyaWVzWzBdLmRhdGEgPSBkYXRhO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhci54QXhpcy5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhciA9IGJhcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuXFxyXFxuICAgICAgICAgICAgcmVwb3J0RGF0YVNlcnZpY2Uuc3VtbWFyeSh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXFxyXFxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2U7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZmZlY3RpdmVuZXNzID0gZGF0YS5lZmZlY3RpdmVuZXNzO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWQgPSBkYXRhLnZhbGlkO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXZlcmFnZSA9IGRhdGEuYXZlcmFnZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcmZlY3Rpb24gPSBkYXRhLnBlcmZlY3Rpb247XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lQ29uc3VtZWQgPSBkYXRhLmNvbnN1bWVkVGltZVxcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbjwvc2NyaXB0PlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNGE1ZWJiMzchLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IDM0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5nYXVnZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uZ29hbC13cmFwcGVyIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWU/N2I5Njk5N2FcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWFBO0lBQ0Esd0JBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJnYXVnZS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IDppZD1cXFwiY29udGFpbmVySWRcXFwiIGNsYXNzPVxcXCJnYXVnZVxcXCI+XFxyXFxuICAgICAgICA8aDQgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48Yj57e3RpdGxlfX08L2I+PC9oND5cXHJcXG4gICAgICAgIDxjYW52YXMgOmlkPVxcXCJlbGVtZW50SWRcXFwiPjwvY2FudmFzPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ29hbC13cmFwcGVyIGNsZWFyZml4XFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiA6aWQ9XFxcInRleHRJZFxcXCIgY2xhc3M9XFxcImdhdWdlLXZhbHVlIHB1bGwtbGVmdFxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnYXVnZS12YWx1ZSBwdWxsLWxlZnRcXFwiPiU8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gaWQ9XFxcImdvYWwtdGV4dFxcXCIgY2xhc3M9XFxcImdvYWwtdmFsdWUgcHVsbC1yaWdodFxcXCI+MTAwJTwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzdHlsZT5cXHJcXG4gICAgLmdhdWdlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5nb2FsLXdyYXBwZXIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGltcG9ydCB1dWlkTWl4aW4gZnJvbSAnYmFzZS9taXhpbnMvdXVpZCdcXHJcXG4gICAgaW1wb3J0IHtvcHRzfSBmcm9tICcuL3N0dWJzL2dhdWdlT3B0c1N0dWInXFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0e1xcclxcblxcclxcbiAgICAgICAgcHJvcHM6IHtcXHJcXG4gICAgICAgICAgICB2YWx1ZToge3JlcXVpcmVkOiB0cnVlfSxcXHJcXG4gICAgICAgICAgICB0aXRsZToge2RlZmF1bHQ6ICcnfSxcXHJcXG4gICAgICAgICAgICBjb2xvcjoge3JlcXVpcmVkOiB0cnVlfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHdhdGNoOiB7XFxyXFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh2YWwpIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5zZXQodmFsKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgZGF0YSgpe1xcclxcbiAgICAgICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgICAgIGdhdWdlOiBudWxsLFxcclxcbiAgICAgICAgICAgICAgICBvcHRzOiB7fSxcXHJcXG4gICAgICAgICAgICAgICAgdGltZW91dEhhbmRsZTogbnVsbFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBjb21wdXRlZDoge1xcclxcbiAgICAgICAgICAgIGVsZW1lbnRJZCgpe1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVVVSUQoKVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgY29udGFpbmVySWQoKXtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVVVUlEKClcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHRleHRJZCgpe1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVVVSUQoKVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtaXhpbnM6IFt1dWlkTWl4aW5dLFxcclxcbiAgICAgICAgbW91bnRlZCgpe1xcclxcbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xcclxcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlZHJhdyk7XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgICAgIGRyYXcoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHZhciBnYXVnZUxpYiA9IHJlcXVpcmUoJ2dhdWdlLmpzJyk7XFxyXFxuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVySWQpLm9mZnNldFdpZHRoO1xcclxcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gd2lkdGggLyAyO1xcclxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoICsgJ3B4Jyk7XFxyXFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCArICdweCcpO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdHMgPSBfLmNsb25lRGVlcChvcHRzKTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRzLmNvbG9yU3RhcnQgPSB0aGlzLmNvbG9yO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlID0gbmV3IGdhdWdlTGliLkdhdWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKSkuc2V0T3B0aW9ucyh0aGlzLm9wdHMpO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLm1heFZhbHVlID0gMTAwOyAvLyBzZXQgbWF4IGdhdWdlIHZhbHVlXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2Uuc2V0TWluVmFsdWUoMCk7ICAvLyBQcmVmZXIgc2V0dGVyIG92ZXIgZ2F1Z2UubWluVmFsdWUgPSAwXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2UuYW5pbWF0aW9uU3BlZWQgPSA2NTsgLy8gc2V0IGFuaW1hdGlvbiBzcGVlZCAoMzIgaXMgZGVmYXVsdCB2YWx1ZSlcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5zZXQodGhpcy52YWx1ZSk7IC8vIHNldCBhY3R1YWwgdmFsdWVcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5zZXRUZXh0RmllbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy50ZXh0SWQpKTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHJlZHJhdygpIHtcXHJcXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykuc2F2ZSgpO1xcclxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XFxyXFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLmNsZWFyUmVjdCgwLCAwLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5jYW52YXMud2lkdGgsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLmNhbnZhcy5oZWlnaHQpO1xcclxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5yZXN0b3JlKCk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVvdXRIYW5kbGUpXFxyXFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dEhhbmRsZSk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dEhhbmRsZSA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuZHJhdywgMjUwKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZhNzg2NWEwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlXG4vLyBtb2R1bGUgaWQgPSAzNDZcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiLyoqXG4gKiBnYXVnZS5qc1xuICogQ29weXJpZ2h0KGMpIDIwMTUgVmxhZGltaXIgUm9ka2luIDxtYWlsQHZvdmFuci5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5HYXVnZSA9IGZhY3RvcnkoKTtcbiAgICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciB0ZW1wbGF0ZSA9ICc8c3ZnIHZlcnNpb249XCIxLjFcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgJyArXG4gICAgICAgICdwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiIHZpZXdCb3g9XCItNTAgLTUwIDEwMCAxMDBcIj4nICtcbiAgICAgICAgJzxkZWZzPicgK1xuICAgICAgICAgICAgJzxnIGlkPVwiZ2F1Z2UtbWFya1wiIGNsYXNzPVwiZ2F1Z2UtbWFya1wiPicgK1xuICAgICAgICAgICAgICAgICc8bGluZSB4MT1cIjBcIiB5MT1cIi00MC41XCIgeDI9XCIwXCIgeTI9XCItNDAuNzVcIiAvPicgK1xuICAgICAgICAgICAgJzwvZz4nICtcblxuICAgICAgICAgICAgJzxnIGlkPVwiZ2F1Z2UtdGlja1wiIGNsYXNzPVwiZ2F1Z2UtdGlja1wiPicgK1xuICAgICAgICAgICAgICAgICc8bGluZSB4MT1cIjBcIiB5MT1cIi00MC41XCIgeDI9XCIwXCIgeTI9XCItNDEuNVwiIC8+JyArXG4gICAgICAgICAgICAnPC9nPicgK1xuICAgICAgICAnPC9kZWZzPicgK1xuXG4gICAgICAgICc8ZyBjbGFzcz1cImdhdWdlLW1hcmtzXCI+PC9nPicgK1xuICAgICAgICAnPGcgY2xhc3M9XCJnYXVnZS10aWNrc1wiPjwvZz4nICtcbiAgICAgICAgJzxnIGNsYXNzPVwiZ2F1Z2UtbGFiZWxzXCI+PC9nPicgK1xuXG4gICAgICAgICc8ZyBjbGFzcz1cImdhdWdlLXNjYWxlLWFyY1wiPjwvZz4nICtcbiAgICAgICAgJzxnIGNsYXNzPVwiZ2F1Z2Utc2NhbGUtYXJjLXdhcm5pbmdcIj48L2c+JyArXG4gICAgICAgICc8ZyBjbGFzcz1cImdhdWdlLXNjYWxlLWFyYy1kYW5nZXJcIj48L2c+JyArXG5cbiAgICAgICAgJzxnIGNsYXNzPVwiZ2F1Z2UtaGFuZFwiPicgK1xuICAgICAgICAgICAgJzxwb2x5Z29uIHBvaW50cz1cIi0xLDAgMCwtNDEgMSwwXCIgLz4nICtcbiAgICAgICAgICAgICc8Y2lyY2xlIGN4PVwiMFwiIGN5PVwiMFwiIHI9XCIyXCIgLz4nICtcbiAgICAgICAgJzwvZz4nICtcbiAgICAnPC9zdmc+JztcblxuICAgIHZhciBHYXVnZTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvIE9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBvLmJsb2NrXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG8uYWN0dWFsVmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvLmxhYmVsc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbby5tYXhWYWx1ZV1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW28ud2FybmluZ1ZhbHVlXSBpbiBwZXJjZW50c1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbby5kYW5nZXJWYWx1ZV0gaW4gcGVyY2VudGVzXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1vZHVsZSBHYXVnZVxuICAgICAqL1xuICAgIEdhdWdlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgdGhpcy5fYmxvY2sgPSBvLmJsb2NrO1xuICAgICAgICB0aGlzLl9hY3R1YWxWYWx1ZSA9IG8uYWN0dWFsVmFsdWU7XG4gICAgICAgIHRoaXMuX2xhYmVscyA9IG8ubGFiZWxzO1xuICAgICAgICB0aGlzLl9tYXhWYWx1ZSA9IG8ubWF4VmFsdWUgfHwgdGhpcy5fbGFiZWxzW3RoaXMuX2xhYmVscy5sZW5ndGggLSAxXTtcbiAgICAgICAgdGhpcy5fd2FybmluZ1ZhbHVlID0gby53YXJuaW5nVmFsdWU7XG4gICAgICAgIHRoaXMuX2RhbmdlclZhbHVlID0gby5kYW5nZXJWYWx1ZTtcblxuICAgICAgICB0aGlzLl9kZWx0YSA9IDEwMCAvIHRoaXMuX21heFZhbHVlO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlcigpO1xuICAgIH07XG5cbiAgICBHYXVnZS5wcm90b3R5cGUgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3JlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fYmxvY2suaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJIYW5kKCk7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJUaWNrcygpO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyTWFya3MoKTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlclRpY2tzTGFiZWxzKCk7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJBcmNTY2FsZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3dhcm5pbmdWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyQXJjV2FybmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX2RhbmdlclZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJBcmNEYW5nZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4ge051bWJlcn0gZGVncmVlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfdmFsdWVUb0RlZ3JlZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAvLyAtMTIwIGRlZyAtIGV4Y2x1ZGVkIHBhcnRcbiAgICAgICAgICAgIC8vIC0yMTAgZGVnIC0gcm90YXRlIHN0YXJ0IHRvIHNpbW1ldHJpY2FsIHZpZXdcbiAgICAgICAgICAgIHJldHVybiAodmFsdWUgLyB0aGlzLl9tYXhWYWx1ZSAqICgzNjAgLSAxMjApKSAtIDIxMDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSByYWRpdXNcbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBwb3NpdGlvblxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3ZhbHVlVG9Qb3NpdGlvbjogZnVuY3Rpb24gKHZhbHVlLCByYWRpdXMpIHtcbiAgICAgICAgICAgIHZhciBhID0gdGhpcy5fdmFsdWVUb0RlZ3JlZSh2YWx1ZSkgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICAgICAgdmFyIHggPSByYWRpdXMgKiBNYXRoLmNvcyhhKTtcbiAgICAgICAgICAgIHZhciB5ID0gcmFkaXVzICogTWF0aC5zaW4oYSk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgICAgICB5OiB5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHBlcmNlbnRcbiAgICAgICAgICogQHJldHVybiB7TnVtYmVyfSB2YWx1ZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3BlcmNlbnRUb1ZhbHVlOiBmdW5jdGlvbiAocGVyY2VudCkge1xuICAgICAgICAgICAgcmV0dXJuIHBlcmNlbnQgLyB0aGlzLl9kZWx0YTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9yZW5kZXJIYW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9oYW5kID0gJCgnLmdhdWdlLWhhbmQnLCB0aGlzLl9ibG9jaylbMF07XG4gICAgICAgICAgICB0aGlzLl9zZXRWYWx1ZSh0aGlzLl9hY3R1YWxWYWx1ZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfc2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2hhbmQuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgnICsgKHRoaXMuX3ZhbHVlVG9EZWdyZWUodGhpcy5fYWN0dWFsVmFsdWUpICsgOTApICsgJ2RlZyknO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKi9cbiAgICAgICAgc2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fYWN0dWFsVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3NldFZhbHVlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfcmVuZGVyVGlja3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0aWNrc0NhY2hlID0gJyc7XG4gICAgICAgICAgICB2YXIgdGlja3MgPSAkKCcuZ2F1Z2UtdGlja3MnLCB0aGlzLl9ibG9jaylbMF07XG5cbiAgICAgICAgICAgIHZhciB0b3RhbCA9IHRoaXMuX2xhYmVscy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgZm9yICh2YXIgdmFsdWUgPSAwOyB2YWx1ZSA8PSB0b3RhbDsgdmFsdWUrKykge1xuICAgICAgICAgICAgICAgIHRpY2tzQ2FjaGUgKz0gdGhpcy5fYnVpbGRUaWNrKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGlja3MuaW5uZXJIVE1MID0gdGlja3NDYWNoZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX2J1aWxkVGljazogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJzx1c2UgeGxpbms6aHJlZj1cIiNnYXVnZS10aWNrXCIgdHJhbnNmb3JtPVwicm90YXRlKCcgKyAodGhpcy5fdmFsdWVUb0RlZ3JlZSh2YWx1ZSkgKyA5MCkgKyAnKVwiIC8+JztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9yZW5kZXJUaWNrc0xhYmVsczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxhYmVsc0NhY2hlID0gJyc7XG4gICAgICAgICAgICB2YXIgbGFiZWxzID0gJCgnLmdhdWdlLWxhYmVscycsIHRoaXMuX2Jsb2NrKVswXTtcblxuICAgICAgICAgICAgdmFyIHRvdGFsID0gdGhpcy5fbGFiZWxzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBmb3IgKHZhciB2YWx1ZSA9IDA7IHZhbHVlIDw9IHRvdGFsOyB2YWx1ZSsrKSB7XG4gICAgICAgICAgICAgICAgbGFiZWxzQ2FjaGUgKz0gdGhpcy5fYnVpbGRUaWNrTGFiZWwodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYWJlbHMuaW5uZXJIVE1MID0gbGFiZWxzQ2FjaGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfYnVpbGRUaWNrTGFiZWw6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5fdmFsdWVUb1Bvc2l0aW9uKHZhbHVlLCA0Myk7XG5cbiAgICAgICAgICAgIHJldHVybiAnPHRleHQgeD1cIicgKyBwb3NpdGlvbi54ICsgJ1wiIHk9XCInICsgcG9zaXRpb24ueSArICdcIiB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiPicgK1xuICAgICAgICAgICAgICAgIHRoaXMuX2xhYmVsc1t2YWx1ZV0gKyAnPC90ZXh0Pic7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfcmVuZGVyTWFya3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtYXJrc0NhY2hlID0gJyc7XG4gICAgICAgICAgICB2YXIgbWFya3MgPSAkKCcuZ2F1Z2UtbWFya3MnLCB0aGlzLl9ibG9jaylbMF07XG5cbiAgICAgICAgICAgIHZhciB0b3RhbCA9ICh0aGlzLl9sYWJlbHMubGVuZ3RoIC0gMSkgKiAxMDtcbiAgICAgICAgICAgIGZvciAodmFyIHZhbHVlID0gMDsgdmFsdWUgPD0gdG90YWw7IHZhbHVlKyspIHtcbiAgICAgICAgICAgICAgICAvLyBTa2lwIG1hcmtzIG9uIHRpY2tzXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICUgMTAgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hcmtzQ2FjaGUgKz0gdGhpcy5fYnVpbGRNYXJrKHZhbHVlIC8gMTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXJrcy5pbm5lckhUTUwgPSBtYXJrc0NhY2hlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfYnVpbGRNYXJrOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnPHVzZSB4bGluazpocmVmPVwiI2dhdWdlLW1hcmtcIiB0cmFuc2Zvcm09XCJyb3RhdGUoJyArICh0aGlzLl92YWx1ZVRvRGVncmVlKHZhbHVlKSArIDkwKSArICcpXCIgLz4nO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3JlbmRlckFyY1NjYWxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWF4ID0gMTAwO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fZGFuZ2VyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBtYXggPSB0aGlzLl9kYW5nZXJWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuX3dhcm5pbmdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG1heCA9IHRoaXMuX3dhcm5pbmdWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGdyb3VwID0gJCgnLmdhdWdlLXNjYWxlLWFyYycsIHRoaXMuX2Jsb2NrKVswXTtcbiAgICAgICAgICAgIHZhciBhcmMgPSB0aGlzLl9idWlsZEFyYygwLCBtYXgsIDM5KTtcblxuICAgICAgICAgICAgZ3JvdXAuaW5uZXJIVE1MID0gYXJjO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3JlbmRlckFyY1dhcm5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtYXggPSAxMDA7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9kYW5nZXJWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG1heCA9IHRoaXMuX2RhbmdlclZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZ3JvdXAgPSAkKCcuZ2F1Z2Utc2NhbGUtYXJjLXdhcm5pbmcnLCB0aGlzLl9ibG9jaylbMF07XG4gICAgICAgICAgICB2YXIgYXJjID0gdGhpcy5fYnVpbGRBcmModGhpcy5fd2FybmluZ1ZhbHVlLCBtYXgsIDM5KTtcblxuICAgICAgICAgICAgZ3JvdXAuaW5uZXJIVE1MID0gYXJjO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3JlbmRlckFyY0RhbmdlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGdyb3VwID0gJCgnLmdhdWdlLXNjYWxlLWFyYy1kYW5nZXInLCB0aGlzLl9ibG9jaylbMF07XG4gICAgICAgICAgICB2YXIgYXJjID0gdGhpcy5fYnVpbGRBcmModGhpcy5fZGFuZ2VyVmFsdWUsIDEwMCwgMzkpO1xuXG4gICAgICAgICAgICBncm91cC5pbm5lckhUTUwgPSBhcmM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBtaW4gaW4gcGVyY2VudHNcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCBpbiBwZXJjZW50c1xuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gcmFkaXVzXG4gICAgICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9idWlsZEFyYzogZnVuY3Rpb24gKG1pbiwgbWF4LCByYWRpdXMpIHtcbiAgICAgICAgICAgIG1pbiA9IHRoaXMuX3BlcmNlbnRUb1ZhbHVlKG1pbik7XG4gICAgICAgICAgICBtYXggPSB0aGlzLl9wZXJjZW50VG9WYWx1ZShtYXgpO1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uU3RhcnQgPSB0aGlzLl92YWx1ZVRvUG9zaXRpb24obWluLCByYWRpdXMpO1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uRW5kID0gdGhpcy5fdmFsdWVUb1Bvc2l0aW9uKG1heCwgcmFkaXVzKTtcbiAgICAgICAgICAgIHZhciBhbHBoYSA9ICgzNjAgLSAxMjApIC8gdGhpcy5fbWF4VmFsdWUgKiAobWF4IC0gbWluKTtcbiAgICAgICAgICAgIHZhciBhcmMgPSAnPHBhdGggZD1cIk0nICsgcG9zaXRpb25TdGFydC54ICsgJywnICsgcG9zaXRpb25TdGFydC55ICtcbiAgICAgICAgICAgICAgICAnIEEnICsgcmFkaXVzICsgJywnICsgcmFkaXVzICsgJyAwICcgK1xuICAgICAgICAgICAgICAgICgoYWxwaGEgPiAxODApID8gMSA6IDApICsgJywxICcgK1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uRW5kLnggKyAnLCcgKyBwb3NpdGlvbkVuZC55ICtcbiAgICAgICAgICAgICAgICAnXCIgc3R5bGU9XCJmaWxsOiBub25lO1wiIC8+JztcblxuICAgICAgICAgICAgcmV0dXJuIGFyYztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKi9cbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rlc3Ryb3knKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIEdhdWdlO1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2F1Z2UuanMvZGlzdC9nYXVnZS5qc1xuLy8gbW9kdWxlIGlkID0gMzU5XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi02YTc4NjVhMCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vZ2F1Z2UudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9nYXVnZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi02YTc4NjVhMCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9nYXVnZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHNwb3J0ZWNoLXNjb3V0aW5nXFxcXHJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxjaGFydHNcXFxcZ2F1Z2VzXFxcXGdhdWdlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGdhdWdlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02YTc4NjVhMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTZhNzg2NWEwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzYwXG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdwYWdlLWhlYWRlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBfdm0uJHQoJ3JlcG9ydHMucmVwb3J0JyksXG4gICAgICBcImJyZWFkY3J1bWJzXCI6IF92bS5icmVhZGNydW1ic1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgcmVwb3J0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0xMFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1zbS0zIGNvbC14cy02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXRleHRcIlxuICB9LCBbX3ZtLl92KFwiRUZGRUNUSVZFTkVTU1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IHRleHQtcmlnaHRcIlxuICB9LCBbX2MoJ2g1Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLWhlYWRlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lZmZlY3RpdmVuZXNzLnBlcmNlbnRhZ2UpICsgXCIlXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiB0ZXh0LWxlZnRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uZWZmZWN0aXZlbmVzcy52aWN0b3JpZXMpICsgXCJWXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uZWZmZWN0aXZlbmVzcy5kZWZlYXRzKSArIFwiVlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTMgY29sLXhzLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdGV4dFwiXG4gIH0sIFtfdm0uX3YoXCJWQUxJRFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IHRleHQtcmlnaHRcIlxuICB9LCBbX2MoJ2g1Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLWhlYWRlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS52YWxpZC5wZXJjZW50YWdlKSArIFwiJVwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1sZWZ0XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnZhbGlkLnZhbGlkKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udmFsaWQubm9WYWxpZCkgKyBcIlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTMgY29sLXhzLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdGV4dFwiXG4gIH0sIFtfdm0uX3YoXCJBVkVSQUdFXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1yaWdodFwiXG4gIH0sIFtfYygnaDUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24taGVhZGVyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmF2ZXJhZ2UucGVyY2VudGFnZSkgKyBcIiVcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IHRleHQtbGVmdFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5hdmVyYWdlLmdpdmVuKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uYXZlcmFnZS5yZWNlaXZlZCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTMgY29sLXhzLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdGV4dFwiXG4gIH0sIFtfdm0uX3YoXCJQRVJGRUNUSU9OXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1yaWdodFwiXG4gIH0sIFtfYygnaDUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24taGVhZGVyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnBlcmZlY3Rpb24ucGVyY2VudGFnZSkgKyBcIiVcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IHRleHQtbGVmdFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5wZXJmZWN0aW9uLnBlcmZlY3QpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5wZXJmZWN0aW9uLmltcGVyZmVjdCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLWJsb2NrXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXRleHRcIlxuICB9LCBbX3ZtLl92KFwiVElNRSBDT05TVU1FXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1yaWdodFwiXG4gIH0sIFtfYygnaDUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24taGVhZGVyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRpbWVDb25zdW1lZC5wZXJjZW50YWdlKSArIFwiJVwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1sZWZ0XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpbWVDb25zdW1lZC50aW1lQ29uc3VtZWQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50aW1lQ29uc3VtZWQudGltZUlkbGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSldKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtMTBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJuYXYtdGFicy1jdXN0b21cIlxuICB9LCBbX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5hdiBuYXYtdGFic1wiXG4gIH0sIF92bS5fbCgoX3ZtLnBvaW50VnNUaW1lR3JhcGhzKSwgZnVuY3Rpb24ocG9pbnRWc1RpbWVHcmFwaCwgaW5kZXgpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywge1xuICAgICAgY2xhc3M6IHtcbiAgICAgICAgJ2FjdGl2ZSc6IGluZGV4ID09IDBcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogJyMnICsgcG9pbnRWc1RpbWVHcmFwaC5pZCxcbiAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiLFxuICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MocG9pbnRWc1RpbWVHcmFwaC5uYW1lKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSlcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhYi1jb250ZW50XCJcbiAgfSwgX3ZtLl9sKChfdm0ucG9pbnRWc1RpbWVHcmFwaHMpLCBmdW5jdGlvbihwb2ludFZzVGltZUdyYXBoLCBpbmRleCkge1xuICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmVcIixcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdhY3RpdmUnOiBpbmRleCA9PSAwXG4gICAgICB9LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJpZFwiOiBwb2ludFZzVGltZUdyYXBoLmlkXG4gICAgICB9XG4gICAgfSwgW19jKCdoaWdoY2hhcnRzJywge1xuICAgICAgcmVmOiBwb2ludFZzVGltZUdyYXBoLmlkLFxuICAgICAgcmVmSW5Gb3I6IHRydWUsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm9wdGlvbnNcIjogcG9pbnRWc1RpbWVHcmFwaC5vcHRpb25zXG4gICAgICB9XG4gICAgfSldLCAxKVxuICB9KSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC0yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIlxuICB9LCBbX2MoJ2dhdWdlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5vZmZlbnNpdmVHYXVnZS5kYXRhLFxuICAgICAgXCJjb2xvclwiOiBcImdyZWVuXCIsXG4gICAgICBcInRpdGxlXCI6IFwiQ291bnRlcm9mZmVuc2l2ZVwiXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIlxuICB9LCBbX2MoJ2dhdWdlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5kZWZlbnNpdmVHYXVnZS5kYXRhLFxuICAgICAgXCJjb2xvclwiOiBcInllbGxvd1wiLFxuICAgICAgXCJ0aXRsZVwiOiBcIkRlZmVuc2l2ZVwiXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIlxuICB9LCBbX2MoJ2dhdWdlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5jb3VudGVyT2ZmZW5zaXZlR2F1Z2UuZGF0YSxcbiAgICAgIFwiY29sb3JcIjogXCJyZWRcIixcbiAgICAgIFwidGl0bGVcIjogXCJPZmZlbnNpdmVcIlxuICAgIH1cbiAgfSldLCAxKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLThcIlxuICB9LCBbX2MoJ2hpZ2hjaGFydHMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwib3B0aW9uc1wiOiBfdm0ucGllXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNFwiXG4gIH0sIFtfYygnaGlnaGNoYXJ0cycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJvcHRpb25zXCI6IF92bS5iYXJcbiAgICB9XG4gIH0pXSwgMSldKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNGE1ZWJiMzdcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTRhNWViYjM3IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IDM5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnYXVnZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IF92bS5jb250YWluZXJJZFxuICAgIH1cbiAgfSwgW19jKCdoNCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiXG4gIH0sIFtfYygnYicsIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2NhbnZhcycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBfdm0uZWxlbWVudElkXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnb2FsLXdyYXBwZXIgY2xlYXJmaXhcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2F1Z2UtdmFsdWUgcHVsbC1sZWZ0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogX3ZtLnRleHRJZFxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdhdWdlLXZhbHVlIHB1bGwtbGVmdFwiXG4gIH0sIFtfdm0uX3YoXCIlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdvYWwtdmFsdWUgcHVsbC1yaWdodFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiZ29hbC10ZXh0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIxMDAlXCIpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZhNzg2NWEwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02YTc4NjVhMCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlXG4vLyBtb2R1bGUgaWQgPSAzOThcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00YTVlYmIzNyEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdmlldy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNjA0YjRkMjJcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTRhNWViYjM3IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi92aWV3LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNGE1ZWJiMzchLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3ZpZXcudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00YTVlYmIzNyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmE3ODY1YTAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2dhdWdlLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIxMDhjYjNiYlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmE3ODY1YTAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2dhdWdlLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmE3ODY1YTAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2dhdWdlLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmE3ODY1YTAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWVcbi8vIG1vZHVsZSBpZCA9IDQzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDkiXSwic291cmNlUm9vdCI6IiJ9