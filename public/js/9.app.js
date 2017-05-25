webpackJsonp([9,31],{

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(426)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(285),
  /* template */
  __webpack_require__(387),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/reports/view.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] view.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4125da30", Component.options)
  } else {
    hotAPI.reload("data-v-4125da30", Component.options)
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

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uuid = __webpack_require__(242);

var _uuid2 = _interopRequireDefault(_uuid);

var _gaugeOptsStub = __webpack_require__(299);

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
            var gaugeLib = __webpack_require__(356);
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

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pageHeader = __webpack_require__(198);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _gauge = __webpack_require__(357);

var _gauge2 = _interopRequireDefault(_gauge);

var _reports = __webpack_require__(248);

var _reports2 = _interopRequireDefault(_reports);

var _reportService = __webpack_require__(246);

var _reportService2 = _interopRequireDefault(_reportService);

var _reportDataService = __webpack_require__(319);

var _reportDataService2 = _interopRequireDefault(_reportDataService);

var _uuid = __webpack_require__(242);

var _uuid2 = _interopRequireDefault(_uuid);

var _lineOptions = __webpack_require__(302);

var _pieOptions = __webpack_require__(303);

var _barOptions = __webpack_require__(300);

var _gaugeOptions = __webpack_require__(301);

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

/***/ 299:
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

/***/ 300:
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

/***/ 301:
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

/***/ 302:
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

/***/ 303:
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

/***/ 319:
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

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.report {\n    background-color: white;\n}\n.border-right {\n    border-right: 1px solid #666;\n}\n.description-text {\n    font-size: 20px;\n    font-weight: bold;\n}\n.description-percentage {\n    font-size: 15px;\n    font-weight: bold;\n}\n.description-header {\n    font-size: 20px;\n    font-weight: bold;\n}\n\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/reports/view.vue?418f472c"],"names":[],"mappings":";AA6KA;IACA,wBAAA;CACA;AAEA;IACA,6BAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA","file":"view.vue","sourcesContent":["<template>\n    <div>\n        <page-header :title=\"$t('reports.report')\" :breadcrumbs=\"breadcrumbs\"></page-header>\n        <section class=\"content report\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-10\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-3 col-xs-6\">\n                            <div class=\"description-block border-right\">\n                                <span class=\"description-text\">EFFECTIVENESS</span>\n                                <div class=\"row\">\n                                    <div class=\"col-xs-6 text-right\">\n                                        <h5 class=\"description-header\">{{effectiveness.percentage}}%</h5>\n\n                                    </div>\n                                    <div class=\"col-xs-6 text-left\">\n                                        <span class=\"description-percentage text-green\">\n                                            {{effectiveness.victories}}V\n                                        </span>\n                                        <br>\n                                        <span class=\"description-percentage text-red\">\n                                            {{effectiveness.defeats}}V\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- /.description-block -->\n                        </div>\n                        <!-- /.col -->\n                        <div class=\"col-sm-3 col-xs-6\">\n                            <div class=\"description-block border-right\">\n                                <span class=\"description-text\">VALID</span>\n\n                                <div class=\"row\">\n                                    <div class=\"col-xs-6 text-right\">\n                                        <h5 class=\"description-header\">{{valid.percentage}}%</h5>\n\n                                    </div>\n                                    <div class=\"col-xs-6 text-left\">\n                                        <span class=\"description-percentage text-green\">\n                                            {{valid.valid}}\n                                        </span>\n                                        <br>\n                                        <span class=\"description-percentage text-red\">\n                                            {{valid.noValid}}\n\n                                        </span>\n                                    </div>\n                                </div>\n\n                            </div>\n                            <!-- /.description-block -->\n                        </div>\n                        <!-- /.col -->\n                        <div class=\"col-sm-3 col-xs-6\">\n                            <div class=\"description-block border-right\">\n                                <span class=\"description-text\">AVERAGE</span>\n                                <div class=\"row\">\n                                    <div class=\"col-xs-6 text-right\">\n                                        <h5 class=\"description-header\">{{average.percentage}}%</h5>\n\n                                    </div>\n                                    <div class=\"col-xs-6 text-left\">\n                                        <span class=\"description-percentage text-green\">\n                                            {{average.given}}\n                                        </span>\n                                        <br>\n                                        <span class=\"description-percentage text-red\">\n                                            {{average.received}}\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- /.description-block -->\n                        </div>\n                        <div class=\"col-sm-3 col-xs-6\">\n                            <div class=\"description-block border-right\">\n                                <span class=\"description-text\">PERFECTION</span>\n                                <div class=\"row\">\n                                    <div class=\"col-xs-6 text-right\">\n                                        <h5 class=\"description-header\">{{perfection.percentage}}%</h5>\n\n                                    </div>\n                                    <div class=\"col-xs-6 text-left\">\n                                        <span class=\"description-percentage text-green\">\n                                            {{perfection.perfect}}\n                                        </span>\n                                        <br>\n                                        <span class=\"description-percentage text-red\">\n                                            {{perfection.imperfect}}\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xs-12 col-md-2\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12\">\n                            <div class=\"description-block\">\n                                <span class=\"description-text\">TIME CONSUME</span>\n\n                                <div class=\"row\">\n                                    <div class=\"col-xs-6 text-right\">\n                                        <h5 class=\"description-header\">{{timeConsumed.percentage}}%</h5>\n\n                                    </div>\n                                    <div class=\"col-xs-6 text-left\">\n                                        <span class=\"description-percentage text-green\">\n                                            {{timeConsumed.timeConsumed}}\n                                        </span>\n                                        <br>\n                                        <span class=\"description-percentage text-red\">\n                                            {{timeConsumed.timeIdle}}\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- /.description-block -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-10\">\n                    <div class=\"nav-tabs-custom\">\n                        <ul class=\"nav nav-tabs\">\n                            <li :class=\"{'active':index == 0}\" v-for=\"(pointVsTimeGraph,index) in pointVsTimeGraphs\">\n                                <a :href=\"'#'+pointVsTimeGraph.id\" data-toggle=\"tab\"\n                                   aria-expanded=\"false\">\n                                    {{pointVsTimeGraph.name}}\n                                </a>\n                            </li>\n                        </ul>\n                        <div class=\"tab-content\">\n                            <div class=\"tab-pane\" :class=\"{'active':index == 0}\" :id=\"pointVsTimeGraph.id\"\n                                 v-for=\"(pointVsTimeGraph,index) in pointVsTimeGraphs\">\n                                <highcharts :ref=\"pointVsTimeGraph.id\" :options=\"pointVsTimeGraph.options\"></highcharts>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-2\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\n                            <gauge :value=\"offensiveGauge.data\" color=\"green\" title=\"Counteroffensive\"></gauge>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\n                            <gauge :value=\"defensiveGauge.data\" color=\"yellow\" title=\"Defensive\"></gauge>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\n                            <gauge :value=\"counterOffensiveGauge.data\" color=\"red\" title=\"Offensive\"></gauge>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-8\">\n                    <highcharts :options=\"pie\"></highcharts>\n                </div>\n                <div class=\"col-xs-12 col-md-4\">\n                    <highcharts :options=\"bar\"></highcharts>\n                </div>\n            </div>\n        </section>\n    </div>\n</template>\n<style>\n    .report {\n        background-color: white;\n    }\n\n    .border-right {\n        border-right: 1px solid #666;\n    }\n\n    .description-text {\n        font-size: 20px;\n        font-weight: bold;\n    }\n\n    .description-percentage {\n        font-size: 15px;\n        font-weight: bold;\n    }\n\n    .description-header {\n        font-size: 20px;\n        font-weight: bold;\n    }\n\n</style>\n<script type=\"text/babel\">\n    import pageHeader from 'base/components/header/pageHeader.vue'\n    import gauge from 'base/components/charts/gauges/gauge.vue'\n    import reportsLocales from 'base/lang/admin/reports/reports.js';\n    import reportService from 'base/dashboard/services/reports/reportService'\n    import reportDataService from 'base/dashboard/services/reports/reportDataService'\n    import uuidMixin from 'base/mixins/uuid'\n    import {lineBaseOptions} from './stubs/lineOptions'\n    import {pieBaseOptions} from './stubs/pieOptions'\n    import {barBaseOptions} from './stubs/barOptions'\n    import {gaugeBaseOptions} from './stubs/gaugeOptions'\n    export default{\n        locales: reportsLocales,\n        components: {\n            pageHeader,\n            gauge\n        },\n        mixins: [uuidMixin],\n        data(){\n            return {\n                reports: {},\n                pointVsTimeGraphs: [],\n                pie: {},\n                bar: {},\n                counterOffensiveGauge: {data: 0},\n                offensiveGauge: {data: 0},\n                defensiveGauge: {data: 0},\n                effectiveness: {},\n                valid: {},\n                average: {},\n                perfection: {},\n                timeConsumed: {}\n            }\n        },\n        computed: {\n            breadcrumbs(){\n                return [\n                    {\n                        href: '/dashboard',\n                        title: this.$t('admin.home')\n                    },\n                    {\n                        href: '/reports/' + this.$route.params.id,\n                        title: 'admin.view'\n                    }\n                ]\n            },\n        },\n        created(){\n            if (!this.$auth.user().superUser) {\n                this.$root.errorToast('No tienes permiso para ver el informe');\n                this.$router.push({\n                    name: 'reports.list',\n                })\n            } else {\n                reportService.show(this.$route.params.id,\n                        (response)=> {\n                            this.report = response.data;\n                        },\n                        (error)=> {\n                            console.log(error);\n                        })\n            }\n        },\n        mounted(){\n            reportDataService.pointVsTime(this.$route.params.id,\n                    (response)=> {\n                        var data = response;\n                        var graph = [];\n                        _.each(data, (graphData) => {\n                            var line = {\n                                id: this.generateUUID(),\n                                name: graphData.leftAthlete + ' VS ' + graphData.rightAthlete,\n                                options: _.cloneDeep(lineBaseOptions),\n                            }\n                            line.options.xAxis.categories = graphData.time;\n                            line.options.series[0].data = graphData.left;\n                            line.options.series[1].data = graphData.right;\n                            line.options.series[0].name = graphData.leftAthlete;\n                            line.options.series[1].name = graphData.rightAthlete;\n\n                            graph.push(line);\n                        });\n                        this.pointVsTimeGraphs = graph;\n                        var self = this;\n                        this.$nextTick(()=> {\n                            $('a[data-toggle=\"tab\"]').on('shown.bs.tab', (e)=> {\n                                _.each(self.pointVsTimeGraphs, (graphData) => {\n                                    self.$refs[graphData.id][0].chart.reflow();\n                                });\n                            });\n                        })\n                    },\n                    (error)=> {\n                        console.log(error);\n                    });\n\n            reportDataService.offensiveDefensive(this.$route.params.id,\n                    (response)=> {\n                        var data = response;\n                        this.counterOffensiveGauge.data = data.counterOffensive.data;\n                        this.offensiveGauge.data = data.offensive.data;\n                        this.defensiveGauge.data = data.defensive.data;\n                    },\n                    (error)=> {\n                        console.log(error);\n                    })\n\n            reportDataService.combatStatus(this.$route.params.id,\n                    (response)=> {\n                        var data = response;\n                        var pie = _.cloneDeep(pieBaseOptions);\n                        pie.series[0].data = data;\n                        this.pie = pie;\n                    },\n                    (error)=> {\n                        console.log(error);\n                    })\n            reportDataService.parry(this.$route.params.id,\n                    (response)=> {\n                        var data = response.data;\n                        var categories = response.categories;\n                        var bar = _.cloneDeep(barBaseOptions);\n                        bar.series[0].data = data;\n                        bar.xAxis.categories = categories;\n                        this.bar = bar;\n                    },\n                    (error)=> {\n                        console.log(error);\n                    })\n\n            reportDataService.summary(this.$route.params.id,\n                    (response)=> {\n                        var data = response;\n                        this.effectiveness = data.effectiveness;\n                        this.valid = data.valid;\n                        this.average = data.average;\n                        this.perfection = data.perfection;\n                        this.timeConsumed = data.consumedTime\n                    },\n                    (error)=> {\n                        console.log(error);\n                    })\n        }\n    }\n</script>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.gauge {\n    background-color: white;\n}\n.goal-wrapper {\n    font-size: 16px;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/charts/gauges/gauge.vue?56c4bb9a"],"names":[],"mappings":";AAaA;IACA,wBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA","file":"gauge.vue","sourcesContent":["<template>\n    <div :id=\"containerId\" class=\"gauge\">\n        <h4 class=\"text-center\"><b>{{title}}</b></h4>\n        <canvas :id=\"elementId\"></canvas>\n        <div class=\"goal-wrapper clearfix\">\n            <span :id=\"textId\" class=\"gauge-value pull-left\"></span>\n            <span class=\"gauge-value pull-left\">%</span>\n            <span id=\"goal-text\" class=\"goal-value pull-right\">100%</span>\n        </div>\n    </div>\n</template>\n\n<style>\n    .gauge {\n        background-color: white;\n    }\n\n    .goal-wrapper {\n        font-size: 16px;\n        font-weight: bold;\n    }\n</style>\n<script>\n    import uuidMixin from 'base/mixins/uuid'\n    import {opts} from './stubs/gaugeOptsStub'\n    export default{\n\n        props: {\n            value: {required: true},\n            title: {default: ''},\n            color: {required: true}\n        },\n        watch: {\n            value: function (val) {\n                this.gauge.set(val);\n            }\n        },\n        data(){\n            return {\n                gauge: null,\n                opts: {},\n                timeoutHandle: null\n            }\n        },\n        computed: {\n            elementId(){\n                return this.generateUUID()\n            },\n            containerId(){\n                return this.generateUUID()\n            },\n            textId(){\n                return this.generateUUID()\n            }\n        },\n        mixins: [uuidMixin],\n        mounted(){\n            this.draw();\n            window.addEventListener('resize', this.redraw);\n        },\n        methods: {\n            draw() {\n                var gaugeLib = require('gauge.js');\n                var width = document.getElementById(this.containerId).offsetWidth;\n                var height = width / 2;\n                document.getElementById(this.elementId).setAttribute('width', width + 'px');\n                document.getElementById(this.elementId).setAttribute('height', height + 'px');\n                this.opts = _.cloneDeep(opts);\n                this.opts.colorStart = this.color;\n                this.gauge = new gaugeLib.Gauge(document.getElementById(this.elementId)).setOptions(this.opts);\n                this.gauge.maxValue = 100; // set max gauge value\n                this.gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0\n                this.gauge.animationSpeed = 65; // set animation speed (32 is default value)\n                this.gauge.set(this.value); // set actual value\n                this.gauge.setTextField(document.getElementById(this.textId));\n            },\n            redraw() {\n                document.getElementById(this.elementId).getContext('2d').save();\n                document.getElementById(this.elementId).getContext('2d').setTransform(1, 0, 0, 1, 0, 0);\n                document.getElementById(this.elementId).getContext('2d').clearRect(0, 0, document.getElementById(this.elementId).getContext('2d').canvas.width, document.getElementById(this.elementId).getContext('2d').canvas.height);\n                document.getElementById(this.elementId).getContext('2d').restore();\n\n                if (this.timeoutHandle)\n                    window.clearTimeout(this.timeoutHandle);\n\n                this.timeoutHandle = window.setTimeout(this.draw, 250);\n            }\n        }\n    }\n</script>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_RESULT__;// Generated by CoffeeScript 1.12.2
(function() {
  var AnimatedText, AnimatedTextFactory, Bar, BaseDonut, BaseGauge, Donut, Gauge, GaugePointer, TextRenderer, ValueUpdater, addCommas, cutHex, formatNumber, mergeObjects, secondsToString,
    slice = [].slice,
    hasProp = {}.hasOwnProperty,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (function() {
    var browserRequestAnimationFrame, isCancelled, j, lastId, len, vendor, vendors;
    vendors = ['ms', 'moz', 'webkit', 'o'];
    for (j = 0, len = vendors.length; j < len; j++) {
      vendor = vendors[j];
      if (window.requestAnimationFrame) {
        break;
      }
      window.requestAnimationFrame = window[vendor + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendor + 'CancelAnimationFrame'] || window[vendor + 'CancelRequestAnimationFrame'];
    }
    browserRequestAnimationFrame = null;
    lastId = 0;
    isCancelled = {};
    if (!requestAnimationFrame) {
      window.requestAnimationFrame = function(callback, element) {
        var currTime, id, lastTime, timeToCall;
        currTime = new Date().getTime();
        timeToCall = Math.max(0, 16 - (currTime - lastTime));
        id = window.setTimeout(function() {
          return callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
      return window.cancelAnimationFrame = function(id) {
        return clearTimeout(id);
      };
    } else if (!window.cancelAnimationFrame) {
      browserRequestAnimationFrame = window.requestAnimationFrame;
      window.requestAnimationFrame = function(callback, element) {
        var myId;
        myId = ++lastId;
        browserRequestAnimationFrame(function() {
          if (!isCancelled[myId]) {
            return callback();
          }
        }, element);
        return myId;
      };
      return window.cancelAnimationFrame = function(id) {
        return isCancelled[id] = true;
      };
    }
  })();

  String.prototype.hashCode = function() {
    var char, hash, i, j, ref;
    hash = 0;
    if (this.length === 0) {
      return hash;
    }
    for (i = j = 0, ref = this.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      char = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash;
  };

  secondsToString = function(sec) {
    var hr, min;
    hr = Math.floor(sec / 3600);
    min = Math.floor((sec - (hr * 3600)) / 60);
    sec -= (hr * 3600) + (min * 60);
    sec += '';
    min += '';
    while (min.length < 2) {
      min = '0' + min;
    }
    while (sec.length < 2) {
      sec = '0' + sec;
    }
    hr = hr ? hr + ':' : '';
    return hr + min + ':' + sec;
  };

  formatNumber = function() {
    var digits, num, value;
    num = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    value = num[0];
    digits = 0 || num[1];
    return addCommas(value.toFixed(digits));
  };

  mergeObjects = function(obj1, obj2) {
    var key, out, val;
    out = {};
    for (key in obj1) {
      if (!hasProp.call(obj1, key)) continue;
      val = obj1[key];
      out[key] = val;
    }
    for (key in obj2) {
      if (!hasProp.call(obj2, key)) continue;
      val = obj2[key];
      out[key] = val;
    }
    return out;
  };

  addCommas = function(nStr) {
    var rgx, x, x1, x2;
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = '';
    if (x.length > 1) {
      x2 = '.' + x[1];
    }
    rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  };

  cutHex = function(nStr) {
    if (nStr.charAt(0) === "#") {
      return nStr.substring(1, 7);
    }
    return nStr;
  };

  ValueUpdater = (function() {
    ValueUpdater.prototype.animationSpeed = 32;

    function ValueUpdater(addToAnimationQueue, clear) {
      if (addToAnimationQueue == null) {
        addToAnimationQueue = true;
      }
      this.clear = clear != null ? clear : true;
      if (addToAnimationQueue) {
        AnimationUpdater.add(this);
      }
    }

    ValueUpdater.prototype.update = function(force) {
      var diff;
      if (force == null) {
        force = false;
      }
      if (force || this.displayedValue !== this.value) {
        if (this.ctx && this.clear) {
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        diff = this.value - this.displayedValue;
        if (Math.abs(diff / this.animationSpeed) <= 0.001) {
          this.displayedValue = this.value;
        } else {
          this.displayedValue = this.displayedValue + diff / this.animationSpeed;
        }
        this.render();
        return true;
      }
      return false;
    };

    return ValueUpdater;

  })();

  BaseGauge = (function(superClass) {
    extend(BaseGauge, superClass);

    function BaseGauge() {
      return BaseGauge.__super__.constructor.apply(this, arguments);
    }

    BaseGauge.prototype.displayScale = 1;

    BaseGauge.prototype.setTextField = function(textField, fractionDigits) {
      return this.textField = textField instanceof TextRenderer ? textField : new TextRenderer(textField, fractionDigits);
    };

    BaseGauge.prototype.setMinValue = function(minValue, updateStartValue) {
      var gauge, j, len, ref, results;
      this.minValue = minValue;
      if (updateStartValue == null) {
        updateStartValue = true;
      }
      if (updateStartValue) {
        this.displayedValue = this.minValue;
        ref = this.gp || [];
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          gauge = ref[j];
          results.push(gauge.displayedValue = this.minValue);
        }
        return results;
      }
    };

    BaseGauge.prototype.setOptions = function(options) {
      if (options == null) {
        options = null;
      }
      this.options = mergeObjects(this.options, options);
      if (this.textField) {
        this.textField.el.style.fontSize = options.fontSize + 'px';
      }
      if (this.options.angle > .5) {
        this.options.angle = .5;
      }
      this.configDisplayScale();
      return this;
    };

    BaseGauge.prototype.configDisplayScale = function() {
      var backingStorePixelRatio, devicePixelRatio, height, prevDisplayScale, width;
      prevDisplayScale = this.displayScale;
      if (this.options.highDpiSupport === false) {
        delete this.displayScale;
      } else {
        devicePixelRatio = window.devicePixelRatio || 1;
        backingStorePixelRatio = this.ctx.webkitBackingStorePixelRatio || this.ctx.mozBackingStorePixelRatio || this.ctx.msBackingStorePixelRatio || this.ctx.oBackingStorePixelRatio || this.ctx.backingStorePixelRatio || 1;
        this.displayScale = devicePixelRatio / backingStorePixelRatio;
      }
      if (this.displayScale !== prevDisplayScale) {
        width = this.canvas.G__width || this.canvas.width;
        height = this.canvas.G__height || this.canvas.height;
        this.canvas.width = width * this.displayScale;
        this.canvas.height = height * this.displayScale;
        this.canvas.style.width = width + "px";
        this.canvas.style.height = height + "px";
        this.canvas.G__width = width;
        this.canvas.G__height = height;
      }
      return this;
    };

    return BaseGauge;

  })(ValueUpdater);

  TextRenderer = (function() {
    function TextRenderer(el, fractionDigits1) {
      this.el = el;
      this.fractionDigits = fractionDigits1;
    }

    TextRenderer.prototype.render = function(gauge) {
      return this.el.innerHTML = formatNumber(gauge.displayedValue, this.fractionDigits);
    };

    return TextRenderer;

  })();

  AnimatedText = (function(superClass) {
    extend(AnimatedText, superClass);

    AnimatedText.prototype.displayedValue = 0;

    AnimatedText.prototype.value = 0;

    AnimatedText.prototype.setVal = function(value) {
      return this.value = 1 * value;
    };

    function AnimatedText(elem1, text) {
      this.elem = elem1;
      this.text = text != null ? text : false;
      this.value = 1 * this.elem.innerHTML;
      if (this.text) {
        this.value = 0;
      }
    }

    AnimatedText.prototype.render = function() {
      var textVal;
      if (this.text) {
        textVal = secondsToString(this.displayedValue.toFixed(0));
      } else {
        textVal = addCommas(formatNumber(this.displayedValue));
      }
      return this.elem.innerHTML = textVal;
    };

    return AnimatedText;

  })(ValueUpdater);

  AnimatedTextFactory = {
    create: function(objList) {
      var elem, j, len, out;
      out = [];
      for (j = 0, len = objList.length; j < len; j++) {
        elem = objList[j];
        out.push(new AnimatedText(elem));
      }
      return out;
    }
  };

  GaugePointer = (function(superClass) {
    extend(GaugePointer, superClass);

    GaugePointer.prototype.displayedValue = 0;

    GaugePointer.prototype.value = 0;

    GaugePointer.prototype.options = {
      strokeWidth: 0.035,
      length: 0.1,
      color: "#000000"
    };

    function GaugePointer(gauge1) {
      this.gauge = gauge1;
      this.ctx = this.gauge.ctx;
      this.canvas = this.gauge.canvas;
      GaugePointer.__super__.constructor.call(this, false, false);
      this.setOptions();
    }

    GaugePointer.prototype.setOptions = function(options) {
      if (options == null) {
        options = null;
      }
      this.options = mergeObjects(this.options, options);
      this.length = 2 * this.gauge.radius * this.gauge.options.radiusScale * this.options.length;
      this.strokeWidth = this.canvas.height * this.options.strokeWidth;
      this.maxValue = this.gauge.maxValue;
      this.minValue = this.gauge.minValue;
      this.animationSpeed = this.gauge.animationSpeed;
      return this.options.angle = this.gauge.options.angle;
    };

    GaugePointer.prototype.render = function() {
      var angle, endX, endY, startX, startY, x, y;
      angle = this.gauge.getAngle.call(this, this.displayedValue);
      x = Math.round(this.length * Math.cos(angle));
      y = Math.round(this.length * Math.sin(angle));
      startX = Math.round(this.strokeWidth * Math.cos(angle - Math.PI / 2));
      startY = Math.round(this.strokeWidth * Math.sin(angle - Math.PI / 2));
      endX = Math.round(this.strokeWidth * Math.cos(angle + Math.PI / 2));
      endY = Math.round(this.strokeWidth * Math.sin(angle + Math.PI / 2));
      this.ctx.fillStyle = this.options.color;
      this.ctx.beginPath();
      this.ctx.arc(0, 0, this.strokeWidth, 0, Math.PI * 2, true);
      this.ctx.fill();
      this.ctx.beginPath();
      this.ctx.moveTo(startX, startY);
      this.ctx.lineTo(x, y);
      this.ctx.lineTo(endX, endY);
      return this.ctx.fill();
    };

    return GaugePointer;

  })(ValueUpdater);

  Bar = (function() {
    function Bar(elem1) {
      this.elem = elem1;
    }

    Bar.prototype.updateValues = function(arrValues) {
      this.value = arrValues[0];
      this.maxValue = arrValues[1];
      this.avgValue = arrValues[2];
      return this.render();
    };

    Bar.prototype.render = function() {
      var avgPercent, valPercent;
      if (this.textField) {
        this.textField.text(formatNumber(this.value));
      }
      if (this.maxValue === 0) {
        this.maxValue = this.avgValue * 2;
      }
      valPercent = (this.value / this.maxValue) * 100;
      avgPercent = (this.avgValue / this.maxValue) * 100;
      $(".bar-value", this.elem).css({
        "width": valPercent + "%"
      });
      return $(".typical-value", this.elem).css({
        "width": avgPercent + "%"
      });
    };

    return Bar;

  })();

  Gauge = (function(superClass) {
    extend(Gauge, superClass);

    Gauge.prototype.elem = null;

    Gauge.prototype.value = [20];

    Gauge.prototype.maxValue = 80;

    Gauge.prototype.minValue = 0;

    Gauge.prototype.displayedAngle = 0;

    Gauge.prototype.displayedValue = 0;

    Gauge.prototype.lineWidth = 40;

    Gauge.prototype.paddingTop = 0.1;

    Gauge.prototype.paddingBottom = 0.1;

    Gauge.prototype.percentColors = null;

    Gauge.prototype.options = {
      colorStart: "#6fadcf",
      colorStop: void 0,
      gradientType: 0,
      strokeColor: "#e0e0e0",
      pointer: {
        length: 0.8,
        strokeWidth: 0.035
      },
      angle: 0.15,
      lineWidth: 0.44,
      radiusScale: 1.0,
      fontSize: 40,
      limitMax: false,
      limitMin: false
    };

    function Gauge(canvas) {
      var h, w;
      this.canvas = canvas;
      Gauge.__super__.constructor.call(this);
      this.percentColors = null;
      if (typeof G_vmlCanvasManager !== 'undefined') {
        this.canvas = window.G_vmlCanvasManager.initElement(this.canvas);
      }
      this.ctx = this.canvas.getContext('2d');
      h = this.canvas.clientHeight;
      w = this.canvas.clientWidth;
      this.canvas.height = h;
      this.canvas.width = w;
      this.gp = [new GaugePointer(this)];
      this.setOptions();
      this.render();
    }

    Gauge.prototype.setOptions = function(options) {
      var gauge, j, len, phi, ref;
      if (options == null) {
        options = null;
      }
      Gauge.__super__.setOptions.call(this, options);
      this.configPercentColors();
      this.extraPadding = 0;
      if (this.options.angle < 0) {
        phi = Math.PI * (1 + this.options.angle);
        this.extraPadding = Math.sin(phi);
      }
      this.availableHeight = this.canvas.height * (1 - this.paddingTop - this.paddingBottom);
      this.lineWidth = this.availableHeight * this.options.lineWidth;
      this.radius = (this.availableHeight - this.lineWidth / 2) / (1.0 + this.extraPadding);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ref = this.gp;
      for (j = 0, len = ref.length; j < len; j++) {
        gauge = ref[j];
        gauge.setOptions(this.options.pointer);
        gauge.render();
      }
      return this;
    };

    Gauge.prototype.configPercentColors = function() {
      var bval, gval, i, j, ref, results, rval;
      this.percentColors = null;
      if (this.options.percentColors !== void 0) {
        this.percentColors = new Array();
        results = [];
        for (i = j = 0, ref = this.options.percentColors.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
          rval = parseInt((cutHex(this.options.percentColors[i][1])).substring(0, 2), 16);
          gval = parseInt((cutHex(this.options.percentColors[i][1])).substring(2, 4), 16);
          bval = parseInt((cutHex(this.options.percentColors[i][1])).substring(4, 6), 16);
          results.push(this.percentColors[i] = {
            pct: this.options.percentColors[i][0],
            color: {
              r: rval,
              g: gval,
              b: bval
            }
          });
        }
        return results;
      }
    };

    Gauge.prototype.set = function(value) {
      var gp, i, j, k, len, ref, val;
      if (!(value instanceof Array)) {
        value = [value];
      }
      if (value.length > this.gp.length) {
        for (i = j = 0, ref = value.length - this.gp.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
          gp = new GaugePointer(this);
          gp.setOptions(this.options.pointer);
          this.gp.push(gp);
        }
      } else if (value.length < this.gp.length) {
        this.gp = this.gp.slice(this.gp.length - value.length);
      }
      i = 0;
      for (k = 0, len = value.length; k < len; k++) {
        val = value[k];
        if (val > this.maxValue) {
          if (this.options.limitMax) {
            val = this.maxValue;
          } else {
            this.maxValue = val + 1;
          }
        } else if (val < this.minValue) {
          if (this.options.limitMin) {
            val = this.minValue;
          } else {
            this.minValue = val - 1;
          }
        }
        this.gp[i].value = val;
        this.gp[i++].setOptions({
          minValue: this.minValue,
          maxValue: this.maxValue,
          angle: this.options.angle
        });
      }
      this.value = Math.max(Math.min(value[value.length - 1], this.maxValue), this.minValue);
      return AnimationUpdater.run();
    };

    Gauge.prototype.getAngle = function(value) {
      return (1 + this.options.angle) * Math.PI + ((value - this.minValue) / (this.maxValue - this.minValue)) * (1 - this.options.angle * 2) * Math.PI;
    };

    Gauge.prototype.getColorForPercentage = function(pct, grad) {
      var color, endColor, i, j, rangePct, ref, startColor;
      if (pct === 0) {
        color = this.percentColors[0].color;
      } else {
        color = this.percentColors[this.percentColors.length - 1].color;
        for (i = j = 0, ref = this.percentColors.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
          if (pct <= this.percentColors[i].pct) {
            if (grad === true) {
              startColor = this.percentColors[i - 1] || this.percentColors[0];
              endColor = this.percentColors[i];
              rangePct = (pct - startColor.pct) / (endColor.pct - startColor.pct);
              color = {
                r: Math.floor(startColor.color.r * (1 - rangePct) + endColor.color.r * rangePct),
                g: Math.floor(startColor.color.g * (1 - rangePct) + endColor.color.g * rangePct),
                b: Math.floor(startColor.color.b * (1 - rangePct) + endColor.color.b * rangePct)
              };
            } else {
              color = this.percentColors[i].color;
            }
            break;
          }
        }
      }
      return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
    };

    Gauge.prototype.getColorForValue = function(val, grad) {
      var pct;
      pct = (val - this.minValue) / (this.maxValue - this.minValue);
      return this.getColorForPercentage(pct, grad);
    };

    Gauge.prototype.renderStaticLabels = function(staticLabels, w, h, radius) {
      var font, fontsize, j, len, match, re, ref, rest, rotationAngle, value;
      this.ctx.save();
      this.ctx.translate(w, h);
      font = staticLabels.font || "10px Times";
      re = /\d+\.?\d?/;
      match = font.match(re)[0];
      rest = font.slice(match.length);
      fontsize = parseFloat(match) * this.displayScale;
      this.ctx.font = fontsize + rest;
      this.ctx.fillStyle = staticLabels.color || "#000000";
      this.ctx.textBaseline = "bottom";
      this.ctx.textAlign = "center";
      ref = staticLabels.labels;
      for (j = 0, len = ref.length; j < len; j++) {
        value = ref[j];
        rotationAngle = this.getAngle(value) - 3 * Math.PI / 2;
        this.ctx.rotate(rotationAngle);
        this.ctx.fillText(formatNumber(value, staticLabels.fractionDigits), 0, -radius - this.lineWidth / 2);
        this.ctx.rotate(-rotationAngle);
      }
      return this.ctx.restore();
    };

    Gauge.prototype.render = function() {
      var displayedAngle, fillStyle, gauge, h, j, k, len, len1, radius, ref, ref1, w, zone;
      w = this.canvas.width / 2;
      h = this.canvas.height * this.paddingTop + this.availableHeight - (this.radius + this.lineWidth / 2) * this.extraPadding;
      displayedAngle = this.getAngle(this.displayedValue);
      if (this.textField) {
        this.textField.render(this);
      }
      this.ctx.lineCap = "butt";
      radius = this.radius * this.options.radiusScale;
      if (this.options.staticLabels) {
        this.renderStaticLabels(this.options.staticLabels, w, h, radius);
      }
      if (this.options.staticZones) {
        this.ctx.save();
        this.ctx.translate(w, h);
        this.ctx.lineWidth = this.lineWidth;
        ref = this.options.staticZones;
        for (j = 0, len = ref.length; j < len; j++) {
          zone = ref[j];
          this.ctx.strokeStyle = zone.strokeStyle;
          this.ctx.beginPath();
          this.ctx.arc(0, 0, radius, this.getAngle(zone.min), this.getAngle(zone.max), false);
          this.ctx.stroke();
        }
        this.ctx.restore();
      } else {
        if (this.options.customFillStyle !== void 0) {
          fillStyle = this.options.customFillStyle(this);
        } else if (this.percentColors !== null) {
          fillStyle = this.getColorForValue(this.displayedValue, true);
        } else if (this.options.colorStop !== void 0) {
          if (this.options.gradientType === 0) {
            fillStyle = this.ctx.createRadialGradient(w, h, 9, w, h, 70);
          } else {
            fillStyle = this.ctx.createLinearGradient(0, 0, w, 0);
          }
          fillStyle.addColorStop(0, this.options.colorStart);
          fillStyle.addColorStop(1, this.options.colorStop);
        } else {
          fillStyle = this.options.colorStart;
        }
        this.ctx.strokeStyle = fillStyle;
        this.ctx.beginPath();
        this.ctx.arc(w, h, radius, (1 + this.options.angle) * Math.PI, displayedAngle, false);
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.stroke();
        this.ctx.strokeStyle = this.options.strokeColor;
        this.ctx.beginPath();
        this.ctx.arc(w, h, radius, displayedAngle, (2 - this.options.angle) * Math.PI, false);
        this.ctx.stroke();
      }
      this.ctx.translate(w, h);
      ref1 = this.gp;
      for (k = 0, len1 = ref1.length; k < len1; k++) {
        gauge = ref1[k];
        gauge.update(true);
      }
      return this.ctx.translate(-w, -h);
    };

    return Gauge;

  })(BaseGauge);

  BaseDonut = (function(superClass) {
    extend(BaseDonut, superClass);

    BaseDonut.prototype.lineWidth = 15;

    BaseDonut.prototype.displayedValue = 0;

    BaseDonut.prototype.value = 33;

    BaseDonut.prototype.maxValue = 80;

    BaseDonut.prototype.minValue = 0;

    BaseDonut.prototype.options = {
      lineWidth: 0.10,
      colorStart: "#6f6ea0",
      colorStop: "#c0c0db",
      strokeColor: "#eeeeee",
      shadowColor: "#d5d5d5",
      angle: 0.35,
      radiusScale: 1.0
    };

    function BaseDonut(canvas) {
      this.canvas = canvas;
      BaseDonut.__super__.constructor.call(this);
      if (typeof G_vmlCanvasManager !== 'undefined') {
        this.canvas = window.G_vmlCanvasManager.initElement(this.canvas);
      }
      this.ctx = this.canvas.getContext('2d');
      this.setOptions();
      this.render();
    }

    BaseDonut.prototype.getAngle = function(value) {
      return (1 - this.options.angle) * Math.PI + ((value - this.minValue) / (this.maxValue - this.minValue)) * ((2 + this.options.angle) - (1 - this.options.angle)) * Math.PI;
    };

    BaseDonut.prototype.setOptions = function(options) {
      if (options == null) {
        options = null;
      }
      BaseDonut.__super__.setOptions.call(this, options);
      this.lineWidth = this.canvas.height * this.options.lineWidth;
      this.radius = this.options.radiusScale * (this.canvas.height / 2 - this.lineWidth / 2);
      return this;
    };

    BaseDonut.prototype.set = function(value) {
      this.value = value;
      if (this.value > this.maxValue) {
        this.maxValue = this.value * 1.1;
      }
      return AnimationUpdater.run();
    };

    BaseDonut.prototype.render = function() {
      var displayedAngle, grdFill, h, start, stop, w;
      displayedAngle = this.getAngle(this.displayedValue);
      w = this.canvas.width / 2;
      h = this.canvas.height / 2;
      if (this.textField) {
        this.textField.render(this);
      }
      grdFill = this.ctx.createRadialGradient(w, h, 39, w, h, 70);
      grdFill.addColorStop(0, this.options.colorStart);
      grdFill.addColorStop(1, this.options.colorStop);
      start = this.radius - this.lineWidth / 2;
      stop = this.radius + this.lineWidth / 2;
      this.ctx.strokeStyle = this.options.strokeColor;
      this.ctx.beginPath();
      this.ctx.arc(w, h, this.radius, (1 - this.options.angle) * Math.PI, (2 + this.options.angle) * Math.PI, false);
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.lineCap = "round";
      this.ctx.stroke();
      this.ctx.strokeStyle = grdFill;
      this.ctx.beginPath();
      this.ctx.arc(w, h, this.radius, (1 - this.options.angle) * Math.PI, displayedAngle, false);
      return this.ctx.stroke();
    };

    return BaseDonut;

  })(BaseGauge);

  Donut = (function(superClass) {
    extend(Donut, superClass);

    function Donut() {
      return Donut.__super__.constructor.apply(this, arguments);
    }

    Donut.prototype.strokeGradient = function(w, h, start, stop) {
      var grd;
      grd = this.ctx.createRadialGradient(w, h, start, w, h, stop);
      grd.addColorStop(0, this.options.shadowColor);
      grd.addColorStop(0.12, this.options._orgStrokeColor);
      grd.addColorStop(0.88, this.options._orgStrokeColor);
      grd.addColorStop(1, this.options.shadowColor);
      return grd;
    };

    Donut.prototype.setOptions = function(options) {
      var h, start, stop, w;
      if (options == null) {
        options = null;
      }
      Donut.__super__.setOptions.call(this, options);
      w = this.canvas.width / 2;
      h = this.canvas.height / 2;
      start = this.radius - this.lineWidth / 2;
      stop = this.radius + this.lineWidth / 2;
      this.options._orgStrokeColor = this.options.strokeColor;
      this.options.strokeColor = this.strokeGradient(w, h, start, stop);
      return this;
    };

    return Donut;

  })(BaseDonut);

  window.AnimationUpdater = {
    elements: [],
    animId: null,
    addAll: function(list) {
      var elem, j, len, results;
      results = [];
      for (j = 0, len = list.length; j < len; j++) {
        elem = list[j];
        results.push(AnimationUpdater.elements.push(elem));
      }
      return results;
    },
    add: function(object) {
      return AnimationUpdater.elements.push(object);
    },
    run: function() {
      var animationFinished, elem, j, len, ref;
      animationFinished = true;
      ref = AnimationUpdater.elements;
      for (j = 0, len = ref.length; j < len; j++) {
        elem = ref[j];
        if (elem.update()) {
          animationFinished = false;
        }
      }
      if (!animationFinished) {
        return AnimationUpdater.animId = requestAnimationFrame(AnimationUpdater.run);
      } else {
        return cancelAnimationFrame(AnimationUpdater.animId);
      }
    }
  };

  if (typeof window.define === 'function' && (window.define.amd != null)) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return {
        Gauge: Gauge,
        Donut: Donut,
        BaseDonut: BaseDonut,
        TextRenderer: TextRenderer
      };
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module !== 'undefined' && (module.exports != null)) {
    module.exports = {
      Gauge: Gauge,
      Donut: Donut,
      BaseDonut: BaseDonut,
      TextRenderer: TextRenderer
    };
  } else {
    window.Gauge = Gauge;
    window.Donut = Donut;
    window.BaseDonut = BaseDonut;
    window.TextRenderer = TextRenderer;
  }

}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(438)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(256),
  /* template */
  __webpack_require__(403),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/components/charts/gauges/gauge.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] gauge.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f283195", Component.options)
  } else {
    hotAPI.reload("data-v-6f283195", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 387:
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
     require("vue-hot-reload-api").rerender("data-v-4125da30", module.exports)
  }
}

/***/ }),

/***/ 403:
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
     require("vue-hot-reload-api").rerender("data-v-6f283195", module.exports)
  }
}

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(337);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("b2f2074a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4125da30!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./view.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4125da30!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./view.vue");
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
var content = __webpack_require__(349);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("7778c976", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6f283195!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./gauge.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6f283195!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./gauge.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWUiLCJ3ZWJwYWNrOi8vL3BhZ2VIZWFkZXIudnVlPzU2MGMqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT9hNTZmKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/NmI4ZSoqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlPzM4YTMqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT80NDEyKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3V1aWQuanM/YTBjOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydFNlcnZpY2UuanM/OGMyMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xhbmcvYWRtaW4vcmVwb3J0cy9yZXBvcnRzLmpzP2Q3MmYiLCJ3ZWJwYWNrOi8vL2dhdWdlLnZ1ZSIsIndlYnBhY2s6Ly8vdmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvc3R1YnMvZ2F1Z2VPcHRzU3R1Yi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvc3R1YnMvYmFyT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvc3R1YnMvZ2F1Z2VPcHRpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy9zdHVicy9saW5lT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvc3R1YnMvcGllT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydERhdGFTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy92aWV3LnZ1ZT85NjAzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZT82OGZhIiwid2VicGFjazovLy8uL34vZ2F1Z2UuanMvZGlzdC9nYXVnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3ZpZXcudnVlP2UwNGEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlPzk4MjgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3ZpZXcudnVlPzNmZjAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlPzNkMTAiXSwibmFtZXMiOlsibWV0aG9kcyIsImdlbmVyYXRlVVVJRCIsImQiLCJEYXRlIiwiZ2V0VGltZSIsIndpbmRvdyIsInBlcmZvcm1hbmNlIiwibm93IiwidXVpZCIsInJlcGxhY2UiLCJjIiwiciIsIk1hdGgiLCJyYW5kb20iLCJmbG9vciIsInRvU3RyaW5nIiwic2hvdyIsImlkIiwic3VjY2Vzc0NhbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaHR0cCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImJvZHkiLCJjYXRjaCIsImVycm9yIiwiY3JlYXRlIiwiYXRobGV0ZSIsInBvc3QiLCJsYXRlc3QiLCJvcHRzIiwiYW5nbGUiLCJsaW5lV2lkdGgiLCJyYWRpdXNTY2FsZSIsInBvaW50ZXIiLCJsZW5ndGgiLCJzdHJva2VXaWR0aCIsImNvbG9yIiwibGltaXRNYXgiLCJsaW1pdE1pbiIsImNvbG9yU3RhcnQiLCJjb2xvclN0b3AiLCJzdHJva2VDb2xvciIsImdlbmVyYXRlR3JhZGllbnQiLCJoaWdoRHBpU3VwcG9ydCIsImJhckJhc2VPcHRpb25zIiwiY2hhcnQiLCJ0eXBlIiwidGl0bGUiLCJ0ZXh0IiwieEF4aXMiLCJjYXRlZ29yaWVzIiwieUF4aXMiLCJtaW4iLCJhbGlnbiIsImxhYmVscyIsIm92ZXJmbG93IiwicGxvdE9wdGlvbnMiLCJiYXIiLCJkYXRhTGFiZWxzIiwiZW5hYmxlZCIsImxlZ2VuZCIsImxheW91dCIsInZlcnRpY2FsQWxpZ24iLCJ4IiwieSIsImZsb2F0aW5nIiwiYm9yZGVyV2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzaGFkb3ciLCJjcmVkaXRzIiwic2VyaWVzIiwibmFtZSIsImRhdGEiLCJnYXVnZUJhc2VPcHRpb25zIiwiaGVpZ2h0IiwibWF4Iiwic3RvcHMiLCJtaW5vclRpY2tJbnRlcnZhbCIsInRpY2tBbW91bnQiLCJmb3JtYXQiLCJ0b29sdGlwIiwidmFsdWVTdWZmaXgiLCJwYW5lIiwic2l6ZSIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsImJhY2tncm91bmQiLCJpbm5lclJhZGl1cyIsIm91dGVyUmFkaXVzIiwic2hhcGUiLCJzb2xpZGdhdWdlIiwidXNlSFRNTCIsImxpbmVCYXNlT3B0aW9ucyIsImZvcm1hdHRlciIsInZhbHVlIiwiY3Jvc3NoYWlycyIsInNoYXJlZCIsImxpbmUiLCJtYXJrZXIiLCJyYWRpdXMiLCJjcm9wIiwic3R5bGUiLCJmb250V2VpZ2h0IiwidGV4dE91dGxpbmUiLCJmb250U2l6ZSIsImluZGV4Iiwic3ltYm9sIiwicGllQmFzZU9wdGlvbnMiLCJwbG90QmFja2dyb3VuZENvbG9yIiwicGxvdEJvcmRlcldpZHRoIiwicGxvdFNoYWRvdyIsInBvaW50Rm9ybWF0IiwicGllIiwiYWxsb3dQb2ludFNlbGVjdCIsImN1cnNvciIsInNob3dJbkxlZ2VuZCIsImNvbG9yQnlQb2ludCIsInBvaW50VnNUaW1lIiwib2ZmZW5zaXZlRGVmZW5zaXZlIiwiY29tYmF0U3RhdHVzIiwicGFycnkiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBOzs7OztrQkFJQTtzQkFFQTtBQUhBOztrQkFLQTt5Q0FDQTt1QkFDQTtBQUdBO0FBTkE7QUFMQTtBQURBLEU7Ozs7Ozs7QUN2QkE7QUFDQTs7O0FBR0E7QUFDQSwwQ0FBMkMsaUJBQWlCLHdCQUF3QixHQUFHLHNCQUFzQix1QkFBdUIsR0FBRzs7QUFFdkk7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FB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O0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxnQ0FBZ0M7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELDhCQUE4QjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsU0FBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSw0REFBNEQsZ0NBQWdDO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsU0FBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQUE7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7Ozs7Ozs7OztBQzMwQkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDL0JBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3hNQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDbENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoianMvOS5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNDEyNWRhMzAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3ZpZXcudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi92aWV3LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTQxMjVkYTMwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3ZpZXcudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB2aWV3LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00MTI1ZGEzMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQxMjVkYTMwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTkwXG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIjx0ZW1wbGF0ZT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICAgIHt7dGl0bGV9fVxuICAgICAgICA8L2gxPlxuICAgICAgICA8b2wgY2xhc3M9XCJicmVhZGNydW1iXCI+XG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiYnJlYWRjcnVtYi5ocmVmXCIgYWN0aXZlLWNsYXNzPVwiYWN0aXZlXCIgdGFnPVwibGlcIiB2LWZvcj1cImJyZWFkY3J1bWIgaW4gYnJlYWRjcnVtYnNcIj5cbiAgICAgICAgICAgICAgICB7eyR0KGJyZWFkY3J1bWIudGl0bGUpfX1cbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIDwvb2w+XG4gICAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHJlbD1cInN0eWxlc2hlZXQvc2Nzc1wiPlxuICAgIC5hZG1pbi1oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDk3cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBicmVhZGNydW1iczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcGFnZUhlYWRlci52dWU/NTM3OWY1Y2IiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5hZG1pbi1oZWFkZXIge1xcbiAgaGVpZ2h0OiA5N3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmFkbWluLWhlYWRlciAucm93IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtN2ZjZDA5NTYhc2Fzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcGFnZUhlYWRlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2ZjZDA5NTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03ZmNkMDk1NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtaGVhZGVyXCJcbiAgfSwgW19jKCdoMScsIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS50aXRsZSkgKyBcIlxcbiAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWJcIlxuICB9LCBfdm0uX2woKF92bS5icmVhZGNydW1icyksIGZ1bmN0aW9uKGJyZWFkY3J1bWIpIHtcbiAgICByZXR1cm4gX2MoJ3JvdXRlci1saW5rJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0b1wiOiBicmVhZGNydW1iLmhyZWYsXG4gICAgICAgIFwiYWN0aXZlLWNsYXNzXCI6IFwiYWN0aXZlXCIsXG4gICAgICAgIFwidGFnXCI6IFwibGlcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoYnJlYWRjcnVtYi50aXRsZSkpICsgXCJcXG4gICAgICAgIFwiKV0pXG4gIH0pKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTdmY2QwOTU2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiZTlmZWMxYzJcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2VuZXJhdGVVVUlEKCkge1xuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XG4gICAgICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZCAvIDE2KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdXVpZDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdXVpZC5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc2hvdyhpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3JlcG9ydHMvJyArIGlkKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcbiAgICB9LFxuICAgIGNyZWF0ZShhdGhsZXRlLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5wb3N0KCcvYXBpL3JlcG9ydHMnLCBhdGhsZXRlKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcbiAgICB9LFxuICAgIGxhdGVzdChzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvcmVwb3J0cy9sYXRlc3QnKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcbiAgICB9LFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0U2VydmljZS5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBcImVuXCI6IHtcbiAgICAgICAgXCJyZXBvcnRzXCI6IHtcbiAgICAgICAgICAgIFwibGlzdFwiOiBcIlJlcG9ydHMgTGlzdFwiLFxuICAgICAgICAgICAgXCJjcmVhdGVcIjogXCJDcmVhdGUgUmVwb3J0XCIsXG4gICAgICAgICAgICBcImNyZWF0ZWRfc3VjY2Vzc2Z1bGx5XCI6IFwiVGhlIFJlcG9ydCB3YXMgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgICAgIFwibm90X2ZvdW5kXCI6IFwiVGhlIFJlcG9ydCBkb2Vzbid0IGV4aXN0XCIsXG4gICAgICAgICAgICBcIm5vX3Njb3V0aW5nc1wiOiBcIllvdSBoYXZlIHRvIGFkZCAxIG9yIG1vcmUgc2NvdWl0bmdzXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOYW1lXCIsXG4gICAgICAgICAgICBcImFkZF9zY291dGluZ1wiOiBcIkFkZCBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICBcInJlcG9ydHNfc2NvdXRpbmdzXCI6IFwiUmVwb3J0IFNjb3V0aW5nc1wiLFxuICAgICAgICAgICAgXCJyZXBvcnRcIjogXCJSZXBvcnRcIixcbiAgICAgICAgICAgIFwiYWN0aW9uc1wiOiBcIkFjdGlvbnNcIixcbiAgICAgICAgICAgIFwic2NvdXRpbmdfYWRkZWRcIjogXCJTY291dGluZyBBZGRlZFwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZXNcIjoge1xuICAgICAgICBcInJlcG9ydHNcIjoge1xuICAgICAgICAgICAgXCJsaXN0XCI6IFwiTGlzdGEgZGUgUmVwb3J0ZXNcIixcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IFwiQ3JlYXIgUmVwb3J0ZVwiLFxuICAgICAgICAgICAgXCJjcmVhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIkVsIFJlcG9ydGUgZnVlIGNyZWFkbyBzYXRpc2ZhY3RvcmlhbWVudGVcIixcbiAgICAgICAgICAgIFwibm90X2ZvdW5kXCI6IFwiRWwgUmVwb3J0ZSBubyBleGlzdGVcIixcbiAgICAgICAgICAgIFwibm9fc2NvdXRpbmdzXCI6IFwiRGViZXMgYWdyZWdhciAxIG8gbcOhcyBzY291dGluZ3NcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5vbWJyZVwiLFxuICAgICAgICAgICAgXCJhZGRfc2NvdXRpbmdcIjogXCJBw7FhZGlyIFNjb3V0aW5nXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcGNpw7NuXCIsXG4gICAgICAgICAgICBcInJlcG9ydHNfc2NvdXRpbmdzXCI6IFwiU2NvdXRpbmdzIGRlbCByZXBvcnRlXCIsXG4gICAgICAgICAgICBcInJlcG9ydFwiOiBcIlJlcG9ydGVcIixcbiAgICAgICAgICAgIFwiYWN0aW9uc1wiOiBcIkFjY2lvbmVzXCIsXG4gICAgICAgICAgICBcInNjb3V0aW5nX2FkZGVkXCI6IFwiU2NvdXRpbmcgQcOxYWRpZG9cIlxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYW5nL2FkbWluL3JlcG9ydHMvcmVwb3J0cy5qcyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IDppZD1cImNvbnRhaW5lcklkXCIgY2xhc3M9XCJnYXVnZVwiPlxuICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPjxiPnt7dGl0bGV9fTwvYj48L2g0PlxuICAgICAgICA8Y2FudmFzIDppZD1cImVsZW1lbnRJZFwiPjwvY2FudmFzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ29hbC13cmFwcGVyIGNsZWFyZml4XCI+XG4gICAgICAgICAgICA8c3BhbiA6aWQ9XCJ0ZXh0SWRcIiBjbGFzcz1cImdhdWdlLXZhbHVlIHB1bGwtbGVmdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2F1Z2UtdmFsdWUgcHVsbC1sZWZ0XCI+JTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwiZ29hbC10ZXh0XCIgY2xhc3M9XCJnb2FsLXZhbHVlIHB1bGwtcmlnaHRcIj4xMDAlPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgICAuZ2F1Z2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuZ29hbC13cmFwcGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgdXVpZE1peGluIGZyb20gJ2Jhc2UvbWl4aW5zL3V1aWQnXG4gICAgaW1wb3J0IHtvcHRzfSBmcm9tICcuL3N0dWJzL2dhdWdlT3B0c1N0dWInXG4gICAgZXhwb3J0IGRlZmF1bHR7XG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZhbHVlOiB7cmVxdWlyZWQ6IHRydWV9LFxuICAgICAgICAgICAgdGl0bGU6IHtkZWZhdWx0OiAnJ30sXG4gICAgICAgICAgICBjb2xvcjoge3JlcXVpcmVkOiB0cnVlfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLnNldCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGdhdWdlOiBudWxsLFxuICAgICAgICAgICAgICAgIG9wdHM6IHt9LFxuICAgICAgICAgICAgICAgIHRpbWVvdXRIYW5kbGU6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGVsZW1lbnRJZCgpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlVVVJRCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGFpbmVySWQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVVVSUQoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRleHRJZCgpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlVVVJRCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1peGluczogW3V1aWRNaXhpbl0sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVkcmF3KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZHJhdygpIHtcbiAgICAgICAgICAgICAgICB2YXIgZ2F1Z2VMaWIgPSByZXF1aXJlKCdnYXVnZS5qcycpO1xuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVySWQpLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSB3aWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aWR0aCArICdweCcpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCArICdweCcpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0cyA9IF8uY2xvbmVEZWVwKG9wdHMpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0cy5jb2xvclN0YXJ0ID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlID0gbmV3IGdhdWdlTGliLkdhdWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKSkuc2V0T3B0aW9ucyh0aGlzLm9wdHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2UubWF4VmFsdWUgPSAxMDA7IC8vIHNldCBtYXggZ2F1Z2UgdmFsdWVcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLnNldE1pblZhbHVlKDApOyAgLy8gUHJlZmVyIHNldHRlciBvdmVyIGdhdWdlLm1pblZhbHVlID0gMFxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2UuYW5pbWF0aW9uU3BlZWQgPSA2NTsgLy8gc2V0IGFuaW1hdGlvbiBzcGVlZCAoMzIgaXMgZGVmYXVsdCB2YWx1ZSlcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLnNldCh0aGlzLnZhbHVlKTsgLy8gc2V0IGFjdHVhbCB2YWx1ZVxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2Uuc2V0VGV4dEZpZWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMudGV4dElkKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVkcmF3KCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLnNhdmUoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykuY2xlYXJSZWN0KDAsIDAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLmNhbnZhcy53aWR0aCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykucmVzdG9yZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZW91dEhhbmRsZSlcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRIYW5kbGUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0SGFuZGxlID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5kcmF3LCAyNTApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGdhdWdlLnZ1ZT81NmM0YmI5YSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cGFnZS1oZWFkZXIgOnRpdGxlPVwiJHQoJ3JlcG9ydHMucmVwb3J0JylcIiA6YnJlYWRjcnVtYnM9XCJicmVhZGNydW1ic1wiPjwvcGFnZS1oZWFkZXI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudCByZXBvcnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTMgY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tdGV4dFwiPkVGRkVDVElWRU5FU1M8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiZGVzY3JpcHRpb24taGVhZGVyXCI+e3tlZmZlY3RpdmVuZXNzLnBlcmNlbnRhZ2V9fSU8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2VmZmVjdGl2ZW5lc3MudmljdG9yaWVzfX1WXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tlZmZlY3RpdmVuZXNzLmRlZmVhdHN9fVZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmRlc2NyaXB0aW9uLWJsb2NrIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY29sIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXRleHRcIj5WQUxJRDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImRlc2NyaXB0aW9uLWhlYWRlclwiPnt7dmFsaWQucGVyY2VudGFnZX19JTwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsaWQudmFsaWR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsaWQubm9WYWxpZH19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uZGVzY3JpcHRpb24tYmxvY2sgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jb2wgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTMgY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tdGV4dFwiPkFWRVJBR0U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiZGVzY3JpcHRpb24taGVhZGVyXCI+e3thdmVyYWdlLnBlcmNlbnRhZ2V9fSU8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2F2ZXJhZ2UuZ2l2ZW59fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7YXZlcmFnZS5yZWNlaXZlZH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5kZXNjcmlwdGlvbi1ibG9jayAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXRleHRcIj5QRVJGRUNUSU9OPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImRlc2NyaXB0aW9uLWhlYWRlclwiPnt7cGVyZmVjdGlvbi5wZXJjZW50YWdlfX0lPC9oNT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twZXJmZWN0aW9uLnBlcmZlY3R9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cGVyZmVjdGlvbi5pbXBlcmZlY3R9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb24tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi10ZXh0XCI+VElNRSBDT05TVU1FPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiZGVzY3JpcHRpb24taGVhZGVyXCI+e3t0aW1lQ29uc3VtZWQucGVyY2VudGFnZX19JTwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dGltZUNvbnN1bWVkLnRpbWVDb25zdW1lZH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0aW1lQ29uc3VtZWQudGltZUlkbGV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uZGVzY3JpcHRpb24tYmxvY2sgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LXRhYnMtY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgOmNsYXNzPVwieydhY3RpdmUnOmluZGV4ID09IDB9XCIgdi1mb3I9XCIocG9pbnRWc1RpbWVHcmFwaCxpbmRleCkgaW4gcG9pbnRWc1RpbWVHcmFwaHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCInIycrcG9pbnRWc1RpbWVHcmFwaC5pZFwiIGRhdGEtdG9nZ2xlPVwidGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3BvaW50VnNUaW1lR3JhcGgubmFtZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItcGFuZVwiIDpjbGFzcz1cInsnYWN0aXZlJzppbmRleCA9PSAwfVwiIDppZD1cInBvaW50VnNUaW1lR3JhcGguaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIocG9pbnRWc1RpbWVHcmFwaCxpbmRleCkgaW4gcG9pbnRWc1RpbWVHcmFwaHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhpZ2hjaGFydHMgOnJlZj1cInBvaW50VnNUaW1lR3JhcGguaWRcIiA6b3B0aW9ucz1cInBvaW50VnNUaW1lR3JhcGgub3B0aW9uc1wiPjwvaGlnaGNoYXJ0cz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGdhdWdlIDp2YWx1ZT1cIm9mZmVuc2l2ZUdhdWdlLmRhdGFcIiBjb2xvcj1cImdyZWVuXCIgdGl0bGU9XCJDb3VudGVyb2ZmZW5zaXZlXCI+PC9nYXVnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGdhdWdlIDp2YWx1ZT1cImRlZmVuc2l2ZUdhdWdlLmRhdGFcIiBjb2xvcj1cInllbGxvd1wiIHRpdGxlPVwiRGVmZW5zaXZlXCI+PC9nYXVnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGdhdWdlIDp2YWx1ZT1cImNvdW50ZXJPZmZlbnNpdmVHYXVnZS5kYXRhXCIgY29sb3I9XCJyZWRcIiB0aXRsZT1cIk9mZmVuc2l2ZVwiPjwvZ2F1Z2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoaWdoY2hhcnRzIDpvcHRpb25zPVwicGllXCI+PC9oaWdoY2hhcnRzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGhpZ2hjaGFydHMgOm9wdGlvbnM9XCJiYXJcIj48L2hpZ2hjaGFydHM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZT5cbiAgICAucmVwb3J0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmJvcmRlci1yaWdodCB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM2NjY7XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbi1wZXJjZW50YWdlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24taGVhZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbjwvc3R5bGU+XG48c2NyaXB0IHR5cGU9XCJ0ZXh0L2JhYmVsXCI+XG4gICAgaW1wb3J0IHBhZ2VIZWFkZXIgZnJvbSAnYmFzZS9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZSdcbiAgICBpbXBvcnQgZ2F1Z2UgZnJvbSAnYmFzZS9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlJ1xuICAgIGltcG9ydCByZXBvcnRzTG9jYWxlcyBmcm9tICdiYXNlL2xhbmcvYWRtaW4vcmVwb3J0cy9yZXBvcnRzLmpzJztcbiAgICBpbXBvcnQgcmVwb3J0U2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydFNlcnZpY2UnXG4gICAgaW1wb3J0IHJlcG9ydERhdGFTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0RGF0YVNlcnZpY2UnXG4gICAgaW1wb3J0IHV1aWRNaXhpbiBmcm9tICdiYXNlL21peGlucy91dWlkJ1xuICAgIGltcG9ydCB7bGluZUJhc2VPcHRpb25zfSBmcm9tICcuL3N0dWJzL2xpbmVPcHRpb25zJ1xuICAgIGltcG9ydCB7cGllQmFzZU9wdGlvbnN9IGZyb20gJy4vc3R1YnMvcGllT3B0aW9ucydcbiAgICBpbXBvcnQge2JhckJhc2VPcHRpb25zfSBmcm9tICcuL3N0dWJzL2Jhck9wdGlvbnMnXG4gICAgaW1wb3J0IHtnYXVnZUJhc2VPcHRpb25zfSBmcm9tICcuL3N0dWJzL2dhdWdlT3B0aW9ucydcbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgbG9jYWxlczogcmVwb3J0c0xvY2FsZXMsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIHBhZ2VIZWFkZXIsXG4gICAgICAgICAgICBnYXVnZVxuICAgICAgICB9LFxuICAgICAgICBtaXhpbnM6IFt1dWlkTWl4aW5dLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlcG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgIHBvaW50VnNUaW1lR3JhcGhzOiBbXSxcbiAgICAgICAgICAgICAgICBwaWU6IHt9LFxuICAgICAgICAgICAgICAgIGJhcjoge30sXG4gICAgICAgICAgICAgICAgY291bnRlck9mZmVuc2l2ZUdhdWdlOiB7ZGF0YTogMH0sXG4gICAgICAgICAgICAgICAgb2ZmZW5zaXZlR2F1Z2U6IHtkYXRhOiAwfSxcbiAgICAgICAgICAgICAgICBkZWZlbnNpdmVHYXVnZToge2RhdGE6IDB9LFxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZW5lc3M6IHt9LFxuICAgICAgICAgICAgICAgIHZhbGlkOiB7fSxcbiAgICAgICAgICAgICAgICBhdmVyYWdlOiB7fSxcbiAgICAgICAgICAgICAgICBwZXJmZWN0aW9uOiB7fSxcbiAgICAgICAgICAgICAgICB0aW1lQ29uc3VtZWQ6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBicmVhZGNydW1icygpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvZGFzaGJvYXJkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLiR0KCdhZG1pbi5ob21lJylcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9yZXBvcnRzLycgKyB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2FkbWluLnZpZXcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkKCl7XG4gICAgICAgICAgICBpZiAoIXRoaXMuJGF1dGgudXNlcigpLnN1cGVyVXNlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuZXJyb3JUb2FzdCgnTm8gdGllbmVzIHBlcm1pc28gcGFyYSB2ZXIgZWwgaW5mb3JtZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlcG9ydHMubGlzdCcsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVwb3J0U2VydmljZS5zaG93KHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBvcnQgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgcmVwb3J0RGF0YVNlcnZpY2UucG9pbnRWc1RpbWUodGhpcy4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBncmFwaCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKGRhdGEsIChncmFwaERhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGluZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuZ2VuZXJhdGVVVUlEKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGdyYXBoRGF0YS5sZWZ0QXRobGV0ZSArICcgVlMgJyArIGdyYXBoRGF0YS5yaWdodEF0aGxldGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF8uY2xvbmVEZWVwKGxpbmVCYXNlT3B0aW9ucyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUub3B0aW9ucy54QXhpcy5jYXRlZ29yaWVzID0gZ3JhcGhEYXRhLnRpbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5vcHRpb25zLnNlcmllc1swXS5kYXRhID0gZ3JhcGhEYXRhLmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5vcHRpb25zLnNlcmllc1sxXS5kYXRhID0gZ3JhcGhEYXRhLnJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUub3B0aW9ucy5zZXJpZXNbMF0ubmFtZSA9IGdyYXBoRGF0YS5sZWZ0QXRobGV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLm9wdGlvbnMuc2VyaWVzWzFdLm5hbWUgPSBncmFwaERhdGEucmlnaHRBdGhsZXRlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGgucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludFZzVGltZUdyYXBocyA9IGdyYXBoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnYVtkYXRhLXRvZ2dsZT1cInRhYlwiXScpLm9uKCdzaG93bi5icy50YWInLCAoZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChzZWxmLnBvaW50VnNUaW1lR3JhcGhzLCAoZ3JhcGhEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyZWZzW2dyYXBoRGF0YS5pZF1bMF0uY2hhcnQucmVmbG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlcG9ydERhdGFTZXJ2aWNlLm9mZmVuc2l2ZURlZmVuc2l2ZSh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudGVyT2ZmZW5zaXZlR2F1Z2UuZGF0YSA9IGRhdGEuY291bnRlck9mZmVuc2l2ZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZlbnNpdmVHYXVnZS5kYXRhID0gZGF0YS5vZmZlbnNpdmUuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmZW5zaXZlR2F1Z2UuZGF0YSA9IGRhdGEuZGVmZW5zaXZlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHJlcG9ydERhdGFTZXJ2aWNlLmNvbWJhdFN0YXR1cyh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBpZSA9IF8uY2xvbmVEZWVwKHBpZUJhc2VPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZS5zZXJpZXNbMF0uZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBpZSA9IHBpZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJlcG9ydERhdGFTZXJ2aWNlLnBhcnJ5KHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yaWVzID0gcmVzcG9uc2UuY2F0ZWdvcmllcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiYXIgPSBfLmNsb25lRGVlcChiYXJCYXNlT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXIuc2VyaWVzWzBdLmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFyLnhBeGlzLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXIgPSBiYXI7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHJlcG9ydERhdGFTZXJ2aWNlLnN1bW1hcnkodGhpcy4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0aXZlbmVzcyA9IGRhdGEuZWZmZWN0aXZlbmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWQgPSBkYXRhLnZhbGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdmVyYWdlID0gZGF0YS5hdmVyYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJmZWN0aW9uID0gZGF0YS5wZXJmZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lQ29uc3VtZWQgPSBkYXRhLmNvbnN1bWVkVGltZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHZpZXcudnVlPzQxOGY0NzJjIiwiZXhwb3J0IGNvbnN0IG9wdHMgPSB7XG4gICAgYW5nbGU6IC0wLjAyLCAvLyBUaGUgc3BhbiBvZiB0aGUgZ2F1Z2UgYXJjXG4gICAgbGluZVdpZHRoOiAwLjQ0LCAvLyBUaGUgbGluZSB0aGlja25lc3NcbiAgICByYWRpdXNTY2FsZTogMSwgLy8gUmVsYXRpdmUgcmFkaXVzXG4gICAgcG9pbnRlcjoge1xuICAgICAgICBsZW5ndGg6IDAuNiwgLy8gLy8gUmVsYXRpdmUgdG8gZ2F1Z2UgcmFkaXVzXG4gICAgICAgIHN0cm9rZVdpZHRoOiAwLjAzNSwgLy8gVGhlIHRoaWNrbmVzc1xuICAgICAgICBjb2xvcjogJyMwMDAwMDAnIC8vIEZpbGwgY29sb3JcbiAgICB9LFxuICAgIGxpbWl0TWF4OiBmYWxzZSwgICAgIC8vIElmIGZhbHNlLCB0aGUgbWF4IHZhbHVlIG9mIHRoZSBnYXVnZSB3aWxsIGJlIHVwZGF0ZWQgaWYgdmFsdWUgc3VycGFzcyBtYXhcbiAgICBsaW1pdE1pbjogZmFsc2UsICAgICAvLyBJZiB0cnVlLCB0aGUgbWluIHZhbHVlIG9mIHRoZSBnYXVnZSB3aWxsIGJlIGZpeGVkIHVubGVzcyB5b3Ugc2V0IGl0IG1hbnVhbGx5XG4gICAgY29sb3JTdGFydDogJyM2RkFEQ0YnLCAgIC8vIENvbG9yc1xuICAgIGNvbG9yU3RvcDogJyM4RkMwREEnLCAgICAvLyBqdXN0IGV4cGVyaW1lbnQgd2l0aCB0aGVtXG4gICAgc3Ryb2tlQ29sb3I6ICcjRTBFMEUwJywgIC8vIHRvIHNlZSB3aGljaCBvbmVzIHdvcmsgYmVzdCBmb3IgeW91XG4gICAgZ2VuZXJhdGVHcmFkaWVudDogdHJ1ZSxcbiAgICBoaWdoRHBpU3VwcG9ydDogdHJ1ZSAgICAgLy8gSGlnaCByZXNvbHV0aW9uIHN1cHBvcnRcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9zdHVicy9nYXVnZU9wdHNTdHViLmpzIiwiZXhwb3J0IGNvbnN0IGJhckJhc2VPcHRpb25zID0ge1xuICAgIGNoYXJ0OiB7XG4gICAgICAgIHR5cGU6ICdiYXInXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgICB0ZXh0OiAnUGFycnknXG4gICAgfSxcbiAgICB4QXhpczoge1xuICAgICAgICBjYXRlZ29yaWVzOiBbJzEyJywgJzExJywgJzEwJywgJzknLCAnOCcsICc3JywgJzYnLCAnNScsICc0JywgJzMnLCAnMicsICcxJ10sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiAnQm9keSBab25lJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiAnTnVtYmVyIG9mIFBhcnJ5cycsXG4gICAgICAgICAgICBhbGlnbjogJ2hpZ2gnXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgb3ZlcmZsb3c6ICdqdXN0aWZ5J1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwbG90T3B0aW9uczoge1xuICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGxlZ2VuZDoge1xuICAgICAgICBsYXlvdXQ6ICd2ZXJ0aWNhbCcsXG4gICAgICAgIGFsaWduOiAncmlnaHQnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgICAgeDogLTQwLFxuICAgICAgICB5OiA4MCxcbiAgICAgICAgZmxvYXRpbmc6IHRydWUsXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGRkZGJyxcbiAgICAgICAgc2hhZG93OiB0cnVlXG4gICAgfSxcbiAgICBjcmVkaXRzOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgfSxcbiAgICBzZXJpZXM6IFt7XG4gICAgICAgIG5hbWU6ICdQYXJyeSBOdW1iZXJzJyxcbiAgICAgICAgZGF0YTogWzEsIDAsIDIsIDIsIDAsIDMsIDQsIDAsIDAsIDEsIDAsIDBdXG4gICAgfV1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvc3R1YnMvYmFyT3B0aW9ucy5qcyIsImV4cG9ydCBjb25zdCBnYXVnZUJhc2VPcHRpb25zID0ge1xuICAgIGNoYXJ0OiB7XG4gICAgICAgIHR5cGU6ICdzb2xpZGdhdWdlJyxcbiAgICAgICAgaGVpZ2h0OiAxNTBcbiAgICB9LFxuICAgIHlBeGlzOiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiBudWxsLFxuICAgICAgICAgICAgeTogLTcwXG5cbiAgICAgICAgfSxcbiAgICAgICAgc3RvcHM6IFtcbiAgICAgICAgICAgIFswLjEsICcjNTVCRjNCJ10gLy8gZ3JlZW5cbiAgICAgICAgXSxcbiAgICAgICAgbGluZVdpZHRoOiAwLFxuICAgICAgICBtaW5vclRpY2tJbnRlcnZhbDogbnVsbCxcbiAgICAgICAgdGlja0Ftb3VudDogMixcbiAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNyZWRpdHM6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICB9LFxuXG4gICAgc2VyaWVzOiBbe1xuICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICBkYXRhOiBbODBdLFxuICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICBmb3JtYXQ6ICc8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToxM3B4O2NvbG9yOicgK1xuICAgICAgICAgICAgKCdibGFjaycpICsgJ1wiPnt5fSU8L3NwYW4+PGJyLz4nLFxuICAgICAgICAgICAgeTogLTI1XG4gICAgICAgIH0sXG4gICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgIHZhbHVlU3VmZml4OiAnJSdcbiAgICAgICAgfVxuICAgIH1dLFxuICAgIHRpdGxlOiB7XG4gICAgICAgIHRleHQ6ICdFZmVjdGl2aWRhZCdcbiAgICB9LFxuXG4gICAgcGFuZToge1xuICAgICAgICBzaXplOiAnMTUwJScsXG4gICAgICAgIHN0YXJ0QW5nbGU6IC05MCxcbiAgICAgICAgZW5kQW5nbGU6IDkwLFxuICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUVFJyxcbiAgICAgICAgICAgIGlubmVyUmFkaXVzOiAnNjAlJyxcbiAgICAgICAgICAgIG91dGVyUmFkaXVzOiAnMTAwJScsXG4gICAgICAgICAgICBzaGFwZTogJ2FyYydcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB0b29sdGlwOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgfSxcblxuICAgIC8vIHRoZSB2YWx1ZSBheGlzXG4gICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgc29saWRnYXVnZToge1xuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgIHk6IDUsXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgdXNlSFRNTDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy9zdHVicy9nYXVnZU9wdGlvbnMuanMiLCJleHBvcnQgY29uc3QgbGluZUJhc2VPcHRpb25zID0ge1xuICAgIGNoYXJ0OiB7XG4gICAgICAgIHR5cGU6ICdsaW5lJ1xuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgICAgdGV4dDogJ1BvaW50cyB2cyBUaW1lJ1xuICAgIH0sXG4gICAgeEF4aXM6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6ICdUaW1lJ1xuICAgICAgICB9LFxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSArICdtaW4nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogJ1BvaW50cydcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSArICdwdCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRvb2x0aXA6IHtcbiAgICAgICAgY3Jvc3NoYWlyczogdHJ1ZSxcbiAgICAgICAgc2hhcmVkOiB0cnVlXG4gICAgfSxcbiAgICBwbG90T3B0aW9uczoge1xuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgICAgICByYWRpdXM6IDgsXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgICAgICAgICAgY3JvcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdub25lJyxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRPdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNlcmllczogW3tcbiAgICAgICAgbmFtZTogJ1BlZHJvIEdvcnJpbicsXG4gICAgICAgIGNvbG9yOiAnI2ZmNjYwMCcsXG4gICAgICAgIGluZGV4OiAyLFxuICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ2NpcmNsZScsXG4gICAgICAgICAgICByYWRpdXM6IDEyXG5cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogW11cblxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0phdmllciBCYXN0aWRhcycsXG4gICAgICAgIGNvbG9yOiAnIzY0YjVmNicsXG4gICAgICAgIGluZGV4OiAxLFxuXG4gICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcbiAgICAgICAgICAgIHJhZGl1czogMTJcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogW11cbiAgICB9XVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy9zdHVicy9saW5lT3B0aW9ucy5qcyIsImV4cG9ydCBjb25zdCBwaWVCYXNlT3B0aW9ucyA9IHtcbiAgICBjaGFydDoge1xuICAgICAgICBwbG90QmFja2dyb3VuZENvbG9yOiBudWxsLFxuICAgICAgICBwbG90Qm9yZGVyV2lkdGg6IG51bGwsXG4gICAgICAgIHBsb3RTaGFkb3c6IGZhbHNlLFxuICAgICAgICB0eXBlOiAncGllJ1xuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgICAgdGV4dDogJ0NvbWJhdCBTdGF0dXMnXG4gICAgfSxcbiAgICB0b29sdGlwOiB7XG4gICAgICAgIHBvaW50Rm9ybWF0OiAne3Nlcmllcy5uYW1lfTogPGI+e3BvaW50LnBlcmNlbnRhZ2U6LjFmfSU8L2I+J1xuICAgIH0sXG4gICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgcGllOiB7XG4gICAgICAgICAgICBhbGxvd1BvaW50U2VsZWN0OiB0cnVlLFxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAnPGI+e3BvaW50Lm5hbWV9PC9iPjoge3BvaW50LnBlcmNlbnRhZ2U6LjFmfSAlJyxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93SW5MZWdlbmQ6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2VyaWVzOiBbe1xuICAgICAgICBuYW1lOiAnUGVyY2VudCcsXG4gICAgICAgIGNvbG9yQnlQb2ludDogdHJ1ZSxcbiAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgIG5hbWU6ICdFUVVBTCcsXG4gICAgICAgICAgICB5OiAyMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnVVAnLFxuICAgICAgICAgICAgeTogNjAsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdET1dOJyxcbiAgICAgICAgICAgIHk6IDIwXG4gICAgICAgIH1dXG4gICAgfV1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvc3R1YnMvcGllT3B0aW9ucy5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9pbnRWc1RpbWUoaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9yZXBvcnRzLycgKyBpZCArICcvcG9pbnQtdnMtdGltZScpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG4gICAgb2ZmZW5zaXZlRGVmZW5zaXZlKGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvcmVwb3J0cy8nICsgaWQgKyAnL29mZmVuc2l2ZS1kZWZlbnNpdmUnKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcbiAgICB9LFxuICAgIGNvbWJhdFN0YXR1cyhpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3JlcG9ydHMvJyArIGlkICsgJy9jb21iYXQtc3RhdHVzJylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbiAgICBwYXJyeShpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3JlcG9ydHMvJyArIGlkICsgJy9wYXJyeScpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG4gICAgc3VtbWFyeShpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3JlcG9ydHMvJyArIGlkICsgJy9zdW1tYXJ5JylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0RGF0YVNlcnZpY2UuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5yZXBvcnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmJvcmRlci1yaWdodCB7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM2NjY7XFxufVxcbi5kZXNjcmlwdGlvbi10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmRlc2NyaXB0aW9uLXBlcmNlbnRhZ2Uge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uZGVzY3JpcHRpb24taGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWU/NDE4ZjQ3MmNcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTZLQTtJQUNBLHdCQUFBO0NBQ0E7QUFFQTtJQUNBLDZCQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0NBQ0FcIixcImZpbGVcIjpcInZpZXcudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxwYWdlLWhlYWRlciA6dGl0bGU9XFxcIiR0KCdyZXBvcnRzLnJlcG9ydCcpXFxcIiA6YnJlYWRjcnVtYnM9XFxcImJyZWFkY3J1bWJzXFxcIj48L3BhZ2UtaGVhZGVyPlxcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbnRlbnQgcmVwb3J0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLXhzLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXRleHRcXFwiPkVGRkVDVElWRU5FU1M8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWhlYWRlclxcXCI+e3tlZmZlY3RpdmVuZXNzLnBlcmNlbnRhZ2V9fSU8L2g1PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtbGVmdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tlZmZlY3RpdmVuZXNzLnZpY3Rvcmllc319VlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tlZmZlY3RpdmVuZXNzLmRlZmVhdHN9fVZcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uZGVzY3JpcHRpb24tYmxvY2sgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNvbCAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wteHMtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tdGV4dFxcXCI+VkFMSUQ8L3NwYW4+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWhlYWRlclxcXCI+e3t2YWxpZC5wZXJjZW50YWdlfX0lPC9oNT5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LWxlZnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsaWQudmFsaWR9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWxpZC5ub1ZhbGlkfX1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uZGVzY3JpcHRpb24tYmxvY2sgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNvbCAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wteHMtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tdGV4dFxcXCI+QVZFUkFHRTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgdGV4dC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiZGVzY3JpcHRpb24taGVhZGVyXFxcIj57e2F2ZXJhZ2UucGVyY2VudGFnZX19JTwvaDU+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgdGV4dC1sZWZ0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2F2ZXJhZ2UuZ2l2ZW59fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3thdmVyYWdlLnJlY2VpdmVkfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uZGVzY3JpcHRpb24tYmxvY2sgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLXhzLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXRleHRcXFwiPlBFUkZFQ1RJT048L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWhlYWRlclxcXCI+e3twZXJmZWN0aW9uLnBlcmNlbnRhZ2V9fSU8L2g1PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtbGVmdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twZXJmZWN0aW9uLnBlcmZlY3R9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twZXJmZWN0aW9uLmltcGVyZmVjdH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXRleHRcXFwiPlRJTUUgQ09OU1VNRTwvc3Bhbj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgdGV4dC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiZGVzY3JpcHRpb24taGVhZGVyXFxcIj57e3RpbWVDb25zdW1lZC5wZXJjZW50YWdlfX0lPC9oNT5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LWxlZnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dGltZUNvbnN1bWVkLnRpbWVDb25zdW1lZH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RpbWVDb25zdW1lZC50aW1lSWRsZX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmRlc2NyaXB0aW9uLWJsb2NrIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtMTBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2LXRhYnMtY3VzdG9tXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSA6Y2xhc3M9XFxcInsnYWN0aXZlJzppbmRleCA9PSAwfVxcXCIgdi1mb3I9XFxcIihwb2ludFZzVGltZUdyYXBoLGluZGV4KSBpbiBwb2ludFZzVGltZUdyYXBoc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cXFwiJyMnK3BvaW50VnNUaW1lR3JhcGguaWRcXFwiIGRhdGEtdG9nZ2xlPVxcXCJ0YWJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twb2ludFZzVGltZUdyYXBoLm5hbWV9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWItcGFuZVxcXCIgOmNsYXNzPVxcXCJ7J2FjdGl2ZSc6aW5kZXggPT0gMH1cXFwiIDppZD1cXFwicG9pbnRWc1RpbWVHcmFwaC5pZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKHBvaW50VnNUaW1lR3JhcGgsaW5kZXgpIGluIHBvaW50VnNUaW1lR3JhcGhzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoaWdoY2hhcnRzIDpyZWY9XFxcInBvaW50VnNUaW1lR3JhcGguaWRcXFwiIDpvcHRpb25zPVxcXCJwb2ludFZzVGltZUdyYXBoLm9wdGlvbnNcXFwiPjwvaGlnaGNoYXJ0cz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Z2F1Z2UgOnZhbHVlPVxcXCJvZmZlbnNpdmVHYXVnZS5kYXRhXFxcIiBjb2xvcj1cXFwiZ3JlZW5cXFwiIHRpdGxlPVxcXCJDb3VudGVyb2ZmZW5zaXZlXFxcIj48L2dhdWdlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGdhdWdlIDp2YWx1ZT1cXFwiZGVmZW5zaXZlR2F1Z2UuZGF0YVxcXCIgY29sb3I9XFxcInllbGxvd1xcXCIgdGl0bGU9XFxcIkRlZmVuc2l2ZVxcXCI+PC9nYXVnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnYXVnZSA6dmFsdWU9XFxcImNvdW50ZXJPZmZlbnNpdmVHYXVnZS5kYXRhXFxcIiBjb2xvcj1cXFwicmVkXFxcIiB0aXRsZT1cXFwiT2ZmZW5zaXZlXFxcIj48L2dhdWdlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtOFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aGlnaGNoYXJ0cyA6b3B0aW9ucz1cXFwicGllXFxcIj48L2hpZ2hjaGFydHM+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGhpZ2hjaGFydHMgOm9wdGlvbnM9XFxcImJhclxcXCI+PC9oaWdoY2hhcnRzPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvc2VjdGlvbj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG48c3R5bGU+XFxuICAgIC5yZXBvcnQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIH1cXG5cXG4gICAgLmJvcmRlci1yaWdodCB7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNjY2O1xcbiAgICB9XFxuXFxuICAgIC5kZXNjcmlwdGlvbi10ZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuXFxuICAgIC5kZXNjcmlwdGlvbi1wZXJjZW50YWdlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuXFxuICAgIC5kZXNjcmlwdGlvbi1oZWFkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG5cXG48L3N0eWxlPlxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9iYWJlbFxcXCI+XFxuICAgIGltcG9ydCBwYWdlSGVhZGVyIGZyb20gJ2Jhc2UvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWUnXFxuICAgIGltcG9ydCBnYXVnZSBmcm9tICdiYXNlL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWUnXFxuICAgIGltcG9ydCByZXBvcnRzTG9jYWxlcyBmcm9tICdiYXNlL2xhbmcvYWRtaW4vcmVwb3J0cy9yZXBvcnRzLmpzJztcXG4gICAgaW1wb3J0IHJlcG9ydFNlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvcmVwb3J0cy9yZXBvcnRTZXJ2aWNlJ1xcbiAgICBpbXBvcnQgcmVwb3J0RGF0YVNlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvcmVwb3J0cy9yZXBvcnREYXRhU2VydmljZSdcXG4gICAgaW1wb3J0IHV1aWRNaXhpbiBmcm9tICdiYXNlL21peGlucy91dWlkJ1xcbiAgICBpbXBvcnQge2xpbmVCYXNlT3B0aW9uc30gZnJvbSAnLi9zdHVicy9saW5lT3B0aW9ucydcXG4gICAgaW1wb3J0IHtwaWVCYXNlT3B0aW9uc30gZnJvbSAnLi9zdHVicy9waWVPcHRpb25zJ1xcbiAgICBpbXBvcnQge2JhckJhc2VPcHRpb25zfSBmcm9tICcuL3N0dWJzL2Jhck9wdGlvbnMnXFxuICAgIGltcG9ydCB7Z2F1Z2VCYXNlT3B0aW9uc30gZnJvbSAnLi9zdHVicy9nYXVnZU9wdGlvbnMnXFxuICAgIGV4cG9ydCBkZWZhdWx0e1xcbiAgICAgICAgbG9jYWxlczogcmVwb3J0c0xvY2FsZXMsXFxuICAgICAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICAgICAgcGFnZUhlYWRlcixcXG4gICAgICAgICAgICBnYXVnZVxcbiAgICAgICAgfSxcXG4gICAgICAgIG1peGluczogW3V1aWRNaXhpbl0sXFxuICAgICAgICBkYXRhKCl7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgcmVwb3J0czoge30sXFxuICAgICAgICAgICAgICAgIHBvaW50VnNUaW1lR3JhcGhzOiBbXSxcXG4gICAgICAgICAgICAgICAgcGllOiB7fSxcXG4gICAgICAgICAgICAgICAgYmFyOiB7fSxcXG4gICAgICAgICAgICAgICAgY291bnRlck9mZmVuc2l2ZUdhdWdlOiB7ZGF0YTogMH0sXFxuICAgICAgICAgICAgICAgIG9mZmVuc2l2ZUdhdWdlOiB7ZGF0YTogMH0sXFxuICAgICAgICAgICAgICAgIGRlZmVuc2l2ZUdhdWdlOiB7ZGF0YTogMH0sXFxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZW5lc3M6IHt9LFxcbiAgICAgICAgICAgICAgICB2YWxpZDoge30sXFxuICAgICAgICAgICAgICAgIGF2ZXJhZ2U6IHt9LFxcbiAgICAgICAgICAgICAgICBwZXJmZWN0aW9uOiB7fSxcXG4gICAgICAgICAgICAgICAgdGltZUNvbnN1bWVkOiB7fVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBjb21wdXRlZDoge1xcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzKCl7XFxuICAgICAgICAgICAgICAgIHJldHVybiBbXFxuICAgICAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9kYXNoYm9hcmQnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLiR0KCdhZG1pbi5ob21lJylcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9yZXBvcnRzLycgKyB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdhZG1pbi52aWV3J1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBdXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuICAgICAgICBjcmVhdGVkKCl7XFxuICAgICAgICAgICAgaWYgKCF0aGlzLiRhdXRoLnVzZXIoKS5zdXBlclVzZXIpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kcm9vdC5lcnJvclRvYXN0KCdObyB0aWVuZXMgcGVybWlzbyBwYXJhIHZlciBlbCBpbmZvcm1lJyk7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXBvcnRzLmxpc3QnLFxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgIHJlcG9ydFNlcnZpY2Uuc2hvdyh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXFxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBvcnQgPSByZXNwb25zZS5kYXRhO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIG1vdW50ZWQoKXtcXG4gICAgICAgICAgICByZXBvcnREYXRhU2VydmljZS5wb2ludFZzVGltZSh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXFxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdyYXBoID0gW107XFxuICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKGRhdGEsIChncmFwaERhdGEpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmUgPSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5nZW5lcmF0ZVVVSUQoKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGdyYXBoRGF0YS5sZWZ0QXRobGV0ZSArICcgVlMgJyArIGdyYXBoRGF0YS5yaWdodEF0aGxldGUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfLmNsb25lRGVlcChsaW5lQmFzZU9wdGlvbnMpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUub3B0aW9ucy54QXhpcy5jYXRlZ29yaWVzID0gZ3JhcGhEYXRhLnRpbWU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUub3B0aW9ucy5zZXJpZXNbMF0uZGF0YSA9IGdyYXBoRGF0YS5sZWZ0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLm9wdGlvbnMuc2VyaWVzWzFdLmRhdGEgPSBncmFwaERhdGEucmlnaHQ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUub3B0aW9ucy5zZXJpZXNbMF0ubmFtZSA9IGdyYXBoRGF0YS5sZWZ0QXRobGV0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5vcHRpb25zLnNlcmllc1sxXS5uYW1lID0gZ3JhcGhEYXRhLnJpZ2h0QXRobGV0ZTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGgucHVzaChsaW5lKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvaW50VnNUaW1lR3JhcGhzID0gZ3JhcGg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdhW2RhdGEtdG9nZ2xlPVxcXCJ0YWJcXFwiXScpLm9uKCdzaG93bi5icy50YWInLCAoZSk9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goc2VsZi5wb2ludFZzVGltZUdyYXBocywgKGdyYXBoRGF0YSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJlZnNbZ3JhcGhEYXRhLmlkXVswXS5jaGFydC5yZWZsb3coKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgICAgcmVwb3J0RGF0YVNlcnZpY2Uub2ZmZW5zaXZlRGVmZW5zaXZlKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50ZXJPZmZlbnNpdmVHYXVnZS5kYXRhID0gZGF0YS5jb3VudGVyT2ZmZW5zaXZlLmRhdGE7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZlbnNpdmVHYXVnZS5kYXRhID0gZGF0YS5vZmZlbnNpdmUuZGF0YTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmVuc2l2ZUdhdWdlLmRhdGEgPSBkYXRhLmRlZmVuc2l2ZS5kYXRhO1xcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xcbiAgICAgICAgICAgICAgICAgICAgfSlcXG5cXG4gICAgICAgICAgICByZXBvcnREYXRhU2VydmljZS5jb21iYXRTdGF0dXModGhpcy4kcm91dGUucGFyYW1zLmlkLFxcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwaWUgPSBfLmNsb25lRGVlcChwaWVCYXNlT3B0aW9ucyk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcGllLnNlcmllc1swXS5kYXRhID0gZGF0YTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBpZSA9IHBpZTtcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgcmVwb3J0RGF0YVNlcnZpY2UucGFycnkodGhpcy4kcm91dGUucGFyYW1zLmlkLFxcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhdGVnb3JpZXMgPSByZXNwb25zZS5jYXRlZ29yaWVzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiYXIgPSBfLmNsb25lRGVlcChiYXJCYXNlT3B0aW9ucyk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyLnNlcmllc1swXS5kYXRhID0gZGF0YTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXIueEF4aXMuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXIgPSBiYXI7XFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XFxuICAgICAgICAgICAgICAgICAgICB9KVxcblxcbiAgICAgICAgICAgIHJlcG9ydERhdGFTZXJ2aWNlLnN1bW1hcnkodGhpcy4kcm91dGUucGFyYW1zLmlkLFxcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0aXZlbmVzcyA9IGRhdGEuZWZmZWN0aXZlbmVzcztcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkID0gZGF0YS52YWxpZDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF2ZXJhZ2UgPSBkYXRhLmF2ZXJhZ2U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJmZWN0aW9uID0gZGF0YS5wZXJmZWN0aW9uO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUNvbnN1bWVkID0gZGF0YS5jb25zdW1lZFRpbWVcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQxMjVkYTMwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3ZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSAzMzdcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZ2F1Z2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmdvYWwtd3JhcHBlciB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlPzU2YzRiYjlhXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFhQTtJQUNBLHdCQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiZ2F1Z2UudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiA6aWQ9XFxcImNvbnRhaW5lcklkXFxcIiBjbGFzcz1cXFwiZ2F1Z2VcXFwiPlxcbiAgICAgICAgPGg0IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+PGI+e3t0aXRsZX19PC9iPjwvaDQ+XFxuICAgICAgICA8Y2FudmFzIDppZD1cXFwiZWxlbWVudElkXFxcIj48L2NhbnZhcz5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImdvYWwtd3JhcHBlciBjbGVhcmZpeFxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gOmlkPVxcXCJ0ZXh0SWRcXFwiIGNsYXNzPVxcXCJnYXVnZS12YWx1ZSBwdWxsLWxlZnRcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2F1Z2UtdmFsdWUgcHVsbC1sZWZ0XFxcIj4lPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuIGlkPVxcXCJnb2FsLXRleHRcXFwiIGNsYXNzPVxcXCJnb2FsLXZhbHVlIHB1bGwtcmlnaHRcXFwiPjEwMCU8L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c3R5bGU+XFxuICAgIC5nYXVnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcblxcbiAgICAuZ29hbC13cmFwcGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuPC9zdHlsZT5cXG48c2NyaXB0PlxcbiAgICBpbXBvcnQgdXVpZE1peGluIGZyb20gJ2Jhc2UvbWl4aW5zL3V1aWQnXFxuICAgIGltcG9ydCB7b3B0c30gZnJvbSAnLi9zdHVicy9nYXVnZU9wdHNTdHViJ1xcbiAgICBleHBvcnQgZGVmYXVsdHtcXG5cXG4gICAgICAgIHByb3BzOiB7XFxuICAgICAgICAgICAgdmFsdWU6IHtyZXF1aXJlZDogdHJ1ZX0sXFxuICAgICAgICAgICAgdGl0bGU6IHtkZWZhdWx0OiAnJ30sXFxuICAgICAgICAgICAgY29sb3I6IHtyZXF1aXJlZDogdHJ1ZX1cXG4gICAgICAgIH0sXFxuICAgICAgICB3YXRjaDoge1xcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodmFsKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2Uuc2V0KHZhbCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGRhdGEoKXtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICBnYXVnZTogbnVsbCxcXG4gICAgICAgICAgICAgICAgb3B0czoge30sXFxuICAgICAgICAgICAgICAgIHRpbWVvdXRIYW5kbGU6IG51bGxcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgICAgICBlbGVtZW50SWQoKXtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVVVUlEKClcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGNvbnRhaW5lcklkKCl7XFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlVVVJRCgpXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB0ZXh0SWQoKXtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVVVUlEKClcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgbWl4aW5zOiBbdXVpZE1peGluXSxcXG4gICAgICAgIG1vdW50ZWQoKXtcXG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWRyYXcpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIG1ldGhvZHM6IHtcXG4gICAgICAgICAgICBkcmF3KCkge1xcbiAgICAgICAgICAgICAgICB2YXIgZ2F1Z2VMaWIgPSByZXF1aXJlKCdnYXVnZS5qcycpO1xcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRhaW5lcklkKS5vZmZzZXRXaWR0aDtcXG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IHdpZHRoIC8gMjtcXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aWR0aCArICdweCcpO1xcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQgKyAncHgnKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRzID0gXy5jbG9uZURlZXAob3B0cyk7XFxuICAgICAgICAgICAgICAgIHRoaXMub3B0cy5jb2xvclN0YXJ0ID0gdGhpcy5jb2xvcjtcXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZSA9IG5ldyBnYXVnZUxpYi5HYXVnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkpLnNldE9wdGlvbnModGhpcy5vcHRzKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5tYXhWYWx1ZSA9IDEwMDsgLy8gc2V0IG1heCBnYXVnZSB2YWx1ZVxcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLnNldE1pblZhbHVlKDApOyAgLy8gUHJlZmVyIHNldHRlciBvdmVyIGdhdWdlLm1pblZhbHVlID0gMFxcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLmFuaW1hdGlvblNwZWVkID0gNjU7IC8vIHNldCBhbmltYXRpb24gc3BlZWQgKDMyIGlzIGRlZmF1bHQgdmFsdWUpXFxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2Uuc2V0KHRoaXMudmFsdWUpOyAvLyBzZXQgYWN0dWFsIHZhbHVlXFxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2Uuc2V0VGV4dEZpZWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMudGV4dElkKSk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICByZWRyYXcoKSB7XFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLnNhdmUoKTtcXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5jbGVhclJlY3QoMCwgMCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykuY2FudmFzLndpZHRoLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5jYW52YXMuaGVpZ2h0KTtcXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykucmVzdG9yZSgpO1xcblxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lb3V0SGFuZGxlKVxcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRIYW5kbGUpO1xcblxcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXRIYW5kbGUgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLmRyYXcsIDI1MCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02ZjI4MzE5NSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi4yXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBBbmltYXRlZFRleHQsIEFuaW1hdGVkVGV4dEZhY3RvcnksIEJhciwgQmFzZURvbnV0LCBCYXNlR2F1Z2UsIERvbnV0LCBHYXVnZSwgR2F1Z2VQb2ludGVyLCBUZXh0UmVuZGVyZXIsIFZhbHVlVXBkYXRlciwgYWRkQ29tbWFzLCBjdXRIZXgsIGZvcm1hdE51bWJlciwgbWVyZ2VPYmplY3RzLCBzZWNvbmRzVG9TdHJpbmcsXG4gICAgc2xpY2UgPSBbXS5zbGljZSxcbiAgICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gICAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG4gIChmdW5jdGlvbigpIHtcbiAgICB2YXIgYnJvd3NlclJlcXVlc3RBbmltYXRpb25GcmFtZSwgaXNDYW5jZWxsZWQsIGosIGxhc3RJZCwgbGVuLCB2ZW5kb3IsIHZlbmRvcnM7XG4gICAgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XG4gICAgZm9yIChqID0gMCwgbGVuID0gdmVuZG9ycy5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgdmVuZG9yID0gdmVuZG9yc1tqXTtcbiAgICAgIGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3IgKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHwgd2luZG93W3ZlbmRvciArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICB9XG4gICAgYnJvd3NlclJlcXVlc3RBbmltYXRpb25GcmFtZSA9IG51bGw7XG4gICAgbGFzdElkID0gMDtcbiAgICBpc0NhbmNlbGxlZCA9IHt9O1xuICAgIGlmICghcmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGN1cnJUaW1lLCBpZCwgbGFzdFRpbWUsIHRpbWVUb0NhbGw7XG4gICAgICAgIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgICAgIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfTtcbiAgICAgIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICBicm93c2VyUmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgICB2YXIgbXlJZDtcbiAgICAgICAgbXlJZCA9ICsrbGFzdElkO1xuICAgICAgICBicm93c2VyUmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICghaXNDYW5jZWxsZWRbbXlJZF0pIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZWxlbWVudCk7XG4gICAgICAgIHJldHVybiBteUlkO1xuICAgICAgfTtcbiAgICAgIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICByZXR1cm4gaXNDYW5jZWxsZWRbaWRdID0gdHJ1ZTtcbiAgICAgIH07XG4gICAgfVxuICB9KSgpO1xuXG4gIFN0cmluZy5wcm90b3R5cGUuaGFzaENvZGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2hhciwgaGFzaCwgaSwgaiwgcmVmO1xuICAgIGhhc2ggPSAwO1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGhhc2g7XG4gICAgfVxuICAgIGZvciAoaSA9IGogPSAwLCByZWYgPSB0aGlzLmxlbmd0aDsgMCA8PSByZWYgPyBqIDwgcmVmIDogaiA+IHJlZjsgaSA9IDAgPD0gcmVmID8gKytqIDogLS1qKSB7XG4gICAgICBjaGFyID0gdGhpcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hhcjtcbiAgICAgIGhhc2ggPSBoYXNoICYgaGFzaDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc2g7XG4gIH07XG5cbiAgc2Vjb25kc1RvU3RyaW5nID0gZnVuY3Rpb24oc2VjKSB7XG4gICAgdmFyIGhyLCBtaW47XG4gICAgaHIgPSBNYXRoLmZsb29yKHNlYyAvIDM2MDApO1xuICAgIG1pbiA9IE1hdGguZmxvb3IoKHNlYyAtIChociAqIDM2MDApKSAvIDYwKTtcbiAgICBzZWMgLT0gKGhyICogMzYwMCkgKyAobWluICogNjApO1xuICAgIHNlYyArPSAnJztcbiAgICBtaW4gKz0gJyc7XG4gICAgd2hpbGUgKG1pbi5sZW5ndGggPCAyKSB7XG4gICAgICBtaW4gPSAnMCcgKyBtaW47XG4gICAgfVxuICAgIHdoaWxlIChzZWMubGVuZ3RoIDwgMikge1xuICAgICAgc2VjID0gJzAnICsgc2VjO1xuICAgIH1cbiAgICBociA9IGhyID8gaHIgKyAnOicgOiAnJztcbiAgICByZXR1cm4gaHIgKyBtaW4gKyAnOicgKyBzZWM7XG4gIH07XG5cbiAgZm9ybWF0TnVtYmVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRpZ2l0cywgbnVtLCB2YWx1ZTtcbiAgICBudW0gPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgICB2YWx1ZSA9IG51bVswXTtcbiAgICBkaWdpdHMgPSAwIHx8IG51bVsxXTtcbiAgICByZXR1cm4gYWRkQ29tbWFzKHZhbHVlLnRvRml4ZWQoZGlnaXRzKSk7XG4gIH07XG5cbiAgbWVyZ2VPYmplY3RzID0gZnVuY3Rpb24ob2JqMSwgb2JqMikge1xuICAgIHZhciBrZXksIG91dCwgdmFsO1xuICAgIG91dCA9IHt9O1xuICAgIGZvciAoa2V5IGluIG9iajEpIHtcbiAgICAgIGlmICghaGFzUHJvcC5jYWxsKG9iajEsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdmFsID0gb2JqMVtrZXldO1xuICAgICAgb3V0W2tleV0gPSB2YWw7XG4gICAgfVxuICAgIGZvciAoa2V5IGluIG9iajIpIHtcbiAgICAgIGlmICghaGFzUHJvcC5jYWxsKG9iajIsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdmFsID0gb2JqMltrZXldO1xuICAgICAgb3V0W2tleV0gPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH07XG5cbiAgYWRkQ29tbWFzID0gZnVuY3Rpb24oblN0cikge1xuICAgIHZhciByZ3gsIHgsIHgxLCB4MjtcbiAgICBuU3RyICs9ICcnO1xuICAgIHggPSBuU3RyLnNwbGl0KCcuJyk7XG4gICAgeDEgPSB4WzBdO1xuICAgIHgyID0gJyc7XG4gICAgaWYgKHgubGVuZ3RoID4gMSkge1xuICAgICAgeDIgPSAnLicgKyB4WzFdO1xuICAgIH1cbiAgICByZ3ggPSAvKFxcZCspKFxcZHszfSkvO1xuICAgIHdoaWxlIChyZ3gudGVzdCh4MSkpIHtcbiAgICAgIHgxID0geDEucmVwbGFjZShyZ3gsICckMScgKyAnLCcgKyAnJDInKTtcbiAgICB9XG4gICAgcmV0dXJuIHgxICsgeDI7XG4gIH07XG5cbiAgY3V0SGV4ID0gZnVuY3Rpb24oblN0cikge1xuICAgIGlmIChuU3RyLmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcbiAgICAgIHJldHVybiBuU3RyLnN1YnN0cmluZygxLCA3KTtcbiAgICB9XG4gICAgcmV0dXJuIG5TdHI7XG4gIH07XG5cbiAgVmFsdWVVcGRhdGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIFZhbHVlVXBkYXRlci5wcm90b3R5cGUuYW5pbWF0aW9uU3BlZWQgPSAzMjtcblxuICAgIGZ1bmN0aW9uIFZhbHVlVXBkYXRlcihhZGRUb0FuaW1hdGlvblF1ZXVlLCBjbGVhcikge1xuICAgICAgaWYgKGFkZFRvQW5pbWF0aW9uUXVldWUgPT0gbnVsbCkge1xuICAgICAgICBhZGRUb0FuaW1hdGlvblF1ZXVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xlYXIgPSBjbGVhciAhPSBudWxsID8gY2xlYXIgOiB0cnVlO1xuICAgICAgaWYgKGFkZFRvQW5pbWF0aW9uUXVldWUpIHtcbiAgICAgICAgQW5pbWF0aW9uVXBkYXRlci5hZGQodGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVmFsdWVVcGRhdGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihmb3JjZSkge1xuICAgICAgdmFyIGRpZmY7XG4gICAgICBpZiAoZm9yY2UgPT0gbnVsbCkge1xuICAgICAgICBmb3JjZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGZvcmNlIHx8IHRoaXMuZGlzcGxheWVkVmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuY3R4ICYmIHRoaXMuY2xlYXIpIHtcbiAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgZGlmZiA9IHRoaXMudmFsdWUgLSB0aGlzLmRpc3BsYXllZFZhbHVlO1xuICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZiAvIHRoaXMuYW5pbWF0aW9uU3BlZWQpIDw9IDAuMDAxKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRWYWx1ZSA9IHRoaXMuZGlzcGxheWVkVmFsdWUgKyBkaWZmIC8gdGhpcy5hbmltYXRpb25TcGVlZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFZhbHVlVXBkYXRlcjtcblxuICB9KSgpO1xuXG4gIEJhc2VHYXVnZSA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gICAgZXh0ZW5kKEJhc2VHYXVnZSwgc3VwZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBCYXNlR2F1Z2UoKSB7XG4gICAgICByZXR1cm4gQmFzZUdhdWdlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIEJhc2VHYXVnZS5wcm90b3R5cGUuZGlzcGxheVNjYWxlID0gMTtcblxuICAgIEJhc2VHYXVnZS5wcm90b3R5cGUuc2V0VGV4dEZpZWxkID0gZnVuY3Rpb24odGV4dEZpZWxkLCBmcmFjdGlvbkRpZ2l0cykge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dEZpZWxkID0gdGV4dEZpZWxkIGluc3RhbmNlb2YgVGV4dFJlbmRlcmVyID8gdGV4dEZpZWxkIDogbmV3IFRleHRSZW5kZXJlcih0ZXh0RmllbGQsIGZyYWN0aW9uRGlnaXRzKTtcbiAgICB9O1xuXG4gICAgQmFzZUdhdWdlLnByb3RvdHlwZS5zZXRNaW5WYWx1ZSA9IGZ1bmN0aW9uKG1pblZhbHVlLCB1cGRhdGVTdGFydFZhbHVlKSB7XG4gICAgICB2YXIgZ2F1Z2UsIGosIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgICAgdGhpcy5taW5WYWx1ZSA9IG1pblZhbHVlO1xuICAgICAgaWYgKHVwZGF0ZVN0YXJ0VmFsdWUgPT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVTdGFydFZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh1cGRhdGVTdGFydFZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheWVkVmFsdWUgPSB0aGlzLm1pblZhbHVlO1xuICAgICAgICByZWYgPSB0aGlzLmdwIHx8IFtdO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICAgIGdhdWdlID0gcmVmW2pdO1xuICAgICAgICAgIHJlc3VsdHMucHVzaChnYXVnZS5kaXNwbGF5ZWRWYWx1ZSA9IHRoaXMubWluVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBCYXNlR2F1Z2UucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMgPSBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5vcHRpb25zID0gbWVyZ2VPYmplY3RzKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICBpZiAodGhpcy50ZXh0RmllbGQpIHtcbiAgICAgICAgdGhpcy50ZXh0RmllbGQuZWwuc3R5bGUuZm9udFNpemUgPSBvcHRpb25zLmZvbnRTaXplICsgJ3B4JztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5nbGUgPiAuNSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuYW5nbGUgPSAuNTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29uZmlnRGlzcGxheVNjYWxlKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQmFzZUdhdWdlLnByb3RvdHlwZS5jb25maWdEaXNwbGF5U2NhbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBiYWNraW5nU3RvcmVQaXhlbFJhdGlvLCBkZXZpY2VQaXhlbFJhdGlvLCBoZWlnaHQsIHByZXZEaXNwbGF5U2NhbGUsIHdpZHRoO1xuICAgICAgcHJldkRpc3BsYXlTY2FsZSA9IHRoaXMuZGlzcGxheVNjYWxlO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5oaWdoRHBpU3VwcG9ydCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZGlzcGxheVNjYWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gICAgICAgIGJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gPSB0aGlzLmN0eC53ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IHRoaXMuY3R4Lm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgdGhpcy5jdHgubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IHRoaXMuY3R4Lm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IHRoaXMuY3R4LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgMTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U2NhbGUgPSBkZXZpY2VQaXhlbFJhdGlvIC8gYmFja2luZ1N0b3JlUGl4ZWxSYXRpbztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRpc3BsYXlTY2FsZSAhPT0gcHJldkRpc3BsYXlTY2FsZSkge1xuICAgICAgICB3aWR0aCA9IHRoaXMuY2FudmFzLkdfX3dpZHRoIHx8IHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5HX19oZWlnaHQgfHwgdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoICogdGhpcy5kaXNwbGF5U2NhbGU7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodCAqIHRoaXMuZGlzcGxheVNjYWxlO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIHRoaXMuY2FudmFzLkdfX3dpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLkdfX2hlaWdodCA9IGhlaWdodDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICByZXR1cm4gQmFzZUdhdWdlO1xuXG4gIH0pKFZhbHVlVXBkYXRlcik7XG5cbiAgVGV4dFJlbmRlcmVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIFRleHRSZW5kZXJlcihlbCwgZnJhY3Rpb25EaWdpdHMxKSB7XG4gICAgICB0aGlzLmVsID0gZWw7XG4gICAgICB0aGlzLmZyYWN0aW9uRGlnaXRzID0gZnJhY3Rpb25EaWdpdHMxO1xuICAgIH1cblxuICAgIFRleHRSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oZ2F1Z2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLmlubmVySFRNTCA9IGZvcm1hdE51bWJlcihnYXVnZS5kaXNwbGF5ZWRWYWx1ZSwgdGhpcy5mcmFjdGlvbkRpZ2l0cyk7XG4gICAgfTtcblxuICAgIHJldHVybiBUZXh0UmVuZGVyZXI7XG5cbiAgfSkoKTtcblxuICBBbmltYXRlZFRleHQgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICAgIGV4dGVuZChBbmltYXRlZFRleHQsIHN1cGVyQ2xhc3MpO1xuXG4gICAgQW5pbWF0ZWRUZXh0LnByb3RvdHlwZS5kaXNwbGF5ZWRWYWx1ZSA9IDA7XG5cbiAgICBBbmltYXRlZFRleHQucHJvdG90eXBlLnZhbHVlID0gMDtcblxuICAgIEFuaW1hdGVkVGV4dC5wcm90b3R5cGUuc2V0VmFsID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlID0gMSAqIHZhbHVlO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBBbmltYXRlZFRleHQoZWxlbTEsIHRleHQpIHtcbiAgICAgIHRoaXMuZWxlbSA9IGVsZW0xO1xuICAgICAgdGhpcy50ZXh0ID0gdGV4dCAhPSBudWxsID8gdGV4dCA6IGZhbHNlO1xuICAgICAgdGhpcy52YWx1ZSA9IDEgKiB0aGlzLmVsZW0uaW5uZXJIVE1MO1xuICAgICAgaWYgKHRoaXMudGV4dCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBbmltYXRlZFRleHQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRleHRWYWw7XG4gICAgICBpZiAodGhpcy50ZXh0KSB7XG4gICAgICAgIHRleHRWYWwgPSBzZWNvbmRzVG9TdHJpbmcodGhpcy5kaXNwbGF5ZWRWYWx1ZS50b0ZpeGVkKDApKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHRWYWwgPSBhZGRDb21tYXMoZm9ybWF0TnVtYmVyKHRoaXMuZGlzcGxheWVkVmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmVsZW0uaW5uZXJIVE1MID0gdGV4dFZhbDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFuaW1hdGVkVGV4dDtcblxuICB9KShWYWx1ZVVwZGF0ZXIpO1xuXG4gIEFuaW1hdGVkVGV4dEZhY3RvcnkgPSB7XG4gICAgY3JlYXRlOiBmdW5jdGlvbihvYmpMaXN0KSB7XG4gICAgICB2YXIgZWxlbSwgaiwgbGVuLCBvdXQ7XG4gICAgICBvdXQgPSBbXTtcbiAgICAgIGZvciAoaiA9IDAsIGxlbiA9IG9iakxpc3QubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgZWxlbSA9IG9iakxpc3Rbal07XG4gICAgICAgIG91dC5wdXNoKG5ldyBBbmltYXRlZFRleHQoZWxlbSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gIH07XG5cbiAgR2F1Z2VQb2ludGVyID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgICBleHRlbmQoR2F1Z2VQb2ludGVyLCBzdXBlckNsYXNzKTtcblxuICAgIEdhdWdlUG9pbnRlci5wcm90b3R5cGUuZGlzcGxheWVkVmFsdWUgPSAwO1xuXG4gICAgR2F1Z2VQb2ludGVyLnByb3RvdHlwZS52YWx1ZSA9IDA7XG5cbiAgICBHYXVnZVBvaW50ZXIucHJvdG90eXBlLm9wdGlvbnMgPSB7XG4gICAgICBzdHJva2VXaWR0aDogMC4wMzUsXG4gICAgICBsZW5ndGg6IDAuMSxcbiAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIlxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBHYXVnZVBvaW50ZXIoZ2F1Z2UxKSB7XG4gICAgICB0aGlzLmdhdWdlID0gZ2F1Z2UxO1xuICAgICAgdGhpcy5jdHggPSB0aGlzLmdhdWdlLmN0eDtcbiAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5nYXVnZS5jYW52YXM7XG4gICAgICBHYXVnZVBvaW50ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgZmFsc2UsIGZhbHNlKTtcbiAgICAgIHRoaXMuc2V0T3B0aW9ucygpO1xuICAgIH1cblxuICAgIEdhdWdlUG9pbnRlci5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLm9wdGlvbnMgPSBtZXJnZU9iamVjdHModGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgIHRoaXMubGVuZ3RoID0gMiAqIHRoaXMuZ2F1Z2UucmFkaXVzICogdGhpcy5nYXVnZS5vcHRpb25zLnJhZGl1c1NjYWxlICogdGhpcy5vcHRpb25zLmxlbmd0aDtcbiAgICAgIHRoaXMuc3Ryb2tlV2lkdGggPSB0aGlzLmNhbnZhcy5oZWlnaHQgKiB0aGlzLm9wdGlvbnMuc3Ryb2tlV2lkdGg7XG4gICAgICB0aGlzLm1heFZhbHVlID0gdGhpcy5nYXVnZS5tYXhWYWx1ZTtcbiAgICAgIHRoaXMubWluVmFsdWUgPSB0aGlzLmdhdWdlLm1pblZhbHVlO1xuICAgICAgdGhpcy5hbmltYXRpb25TcGVlZCA9IHRoaXMuZ2F1Z2UuYW5pbWF0aW9uU3BlZWQ7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFuZ2xlID0gdGhpcy5nYXVnZS5vcHRpb25zLmFuZ2xlO1xuICAgIH07XG5cbiAgICBHYXVnZVBvaW50ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFuZ2xlLCBlbmRYLCBlbmRZLCBzdGFydFgsIHN0YXJ0WSwgeCwgeTtcbiAgICAgIGFuZ2xlID0gdGhpcy5nYXVnZS5nZXRBbmdsZS5jYWxsKHRoaXMsIHRoaXMuZGlzcGxheWVkVmFsdWUpO1xuICAgICAgeCA9IE1hdGgucm91bmQodGhpcy5sZW5ndGggKiBNYXRoLmNvcyhhbmdsZSkpO1xuICAgICAgeSA9IE1hdGgucm91bmQodGhpcy5sZW5ndGggKiBNYXRoLnNpbihhbmdsZSkpO1xuICAgICAgc3RhcnRYID0gTWF0aC5yb3VuZCh0aGlzLnN0cm9rZVdpZHRoICogTWF0aC5jb3MoYW5nbGUgLSBNYXRoLlBJIC8gMikpO1xuICAgICAgc3RhcnRZID0gTWF0aC5yb3VuZCh0aGlzLnN0cm9rZVdpZHRoICogTWF0aC5zaW4oYW5nbGUgLSBNYXRoLlBJIC8gMikpO1xuICAgICAgZW5kWCA9IE1hdGgucm91bmQodGhpcy5zdHJva2VXaWR0aCAqIE1hdGguY29zKGFuZ2xlICsgTWF0aC5QSSAvIDIpKTtcbiAgICAgIGVuZFkgPSBNYXRoLnJvdW5kKHRoaXMuc3Ryb2tlV2lkdGggKiBNYXRoLnNpbihhbmdsZSArIE1hdGguUEkgLyAyKSk7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLm9wdGlvbnMuY29sb3I7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4LmFyYygwLCAwLCB0aGlzLnN0cm9rZVdpZHRoLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyhzdGFydFgsIHN0YXJ0WSk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8oeCwgeSk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8oZW5kWCwgZW5kWSk7XG4gICAgICByZXR1cm4gdGhpcy5jdHguZmlsbCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gR2F1Z2VQb2ludGVyO1xuXG4gIH0pKFZhbHVlVXBkYXRlcik7XG5cbiAgQmFyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEJhcihlbGVtMSkge1xuICAgICAgdGhpcy5lbGVtID0gZWxlbTE7XG4gICAgfVxuXG4gICAgQmFyLnByb3RvdHlwZS51cGRhdGVWYWx1ZXMgPSBmdW5jdGlvbihhcnJWYWx1ZXMpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBhcnJWYWx1ZXNbMF07XG4gICAgICB0aGlzLm1heFZhbHVlID0gYXJyVmFsdWVzWzFdO1xuICAgICAgdGhpcy5hdmdWYWx1ZSA9IGFyclZhbHVlc1syXTtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcigpO1xuICAgIH07XG5cbiAgICBCYXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGF2Z1BlcmNlbnQsIHZhbFBlcmNlbnQ7XG4gICAgICBpZiAodGhpcy50ZXh0RmllbGQpIHtcbiAgICAgICAgdGhpcy50ZXh0RmllbGQudGV4dChmb3JtYXROdW1iZXIodGhpcy52YWx1ZSkpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubWF4VmFsdWUgPT09IDApIHtcbiAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IHRoaXMuYXZnVmFsdWUgKiAyO1xuICAgICAgfVxuICAgICAgdmFsUGVyY2VudCA9ICh0aGlzLnZhbHVlIC8gdGhpcy5tYXhWYWx1ZSkgKiAxMDA7XG4gICAgICBhdmdQZXJjZW50ID0gKHRoaXMuYXZnVmFsdWUgLyB0aGlzLm1heFZhbHVlKSAqIDEwMDtcbiAgICAgICQoXCIuYmFyLXZhbHVlXCIsIHRoaXMuZWxlbSkuY3NzKHtcbiAgICAgICAgXCJ3aWR0aFwiOiB2YWxQZXJjZW50ICsgXCIlXCJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuICQoXCIudHlwaWNhbC12YWx1ZVwiLCB0aGlzLmVsZW0pLmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogYXZnUGVyY2VudCArIFwiJVwiXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEJhcjtcblxuICB9KSgpO1xuXG4gIEdhdWdlID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgICBleHRlbmQoR2F1Z2UsIHN1cGVyQ2xhc3MpO1xuXG4gICAgR2F1Z2UucHJvdG90eXBlLmVsZW0gPSBudWxsO1xuXG4gICAgR2F1Z2UucHJvdG90eXBlLnZhbHVlID0gWzIwXTtcblxuICAgIEdhdWdlLnByb3RvdHlwZS5tYXhWYWx1ZSA9IDgwO1xuXG4gICAgR2F1Z2UucHJvdG90eXBlLm1pblZhbHVlID0gMDtcblxuICAgIEdhdWdlLnByb3RvdHlwZS5kaXNwbGF5ZWRBbmdsZSA9IDA7XG5cbiAgICBHYXVnZS5wcm90b3R5cGUuZGlzcGxheWVkVmFsdWUgPSAwO1xuXG4gICAgR2F1Z2UucHJvdG90eXBlLmxpbmVXaWR0aCA9IDQwO1xuXG4gICAgR2F1Z2UucHJvdG90eXBlLnBhZGRpbmdUb3AgPSAwLjE7XG5cbiAgICBHYXVnZS5wcm90b3R5cGUucGFkZGluZ0JvdHRvbSA9IDAuMTtcblxuICAgIEdhdWdlLnByb3RvdHlwZS5wZXJjZW50Q29sb3JzID0gbnVsbDtcblxuICAgIEdhdWdlLnByb3RvdHlwZS5vcHRpb25zID0ge1xuICAgICAgY29sb3JTdGFydDogXCIjNmZhZGNmXCIsXG4gICAgICBjb2xvclN0b3A6IHZvaWQgMCxcbiAgICAgIGdyYWRpZW50VHlwZTogMCxcbiAgICAgIHN0cm9rZUNvbG9yOiBcIiNlMGUwZTBcIixcbiAgICAgIHBvaW50ZXI6IHtcbiAgICAgICAgbGVuZ3RoOiAwLjgsXG4gICAgICAgIHN0cm9rZVdpZHRoOiAwLjAzNVxuICAgICAgfSxcbiAgICAgIGFuZ2xlOiAwLjE1LFxuICAgICAgbGluZVdpZHRoOiAwLjQ0LFxuICAgICAgcmFkaXVzU2NhbGU6IDEuMCxcbiAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgIGxpbWl0TWF4OiBmYWxzZSxcbiAgICAgIGxpbWl0TWluOiBmYWxzZVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBHYXVnZShjYW52YXMpIHtcbiAgICAgIHZhciBoLCB3O1xuICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICBHYXVnZS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMucGVyY2VudENvbG9ycyA9IG51bGw7XG4gICAgICBpZiAodHlwZW9mIEdfdm1sQ2FudmFzTWFuYWdlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSB3aW5kb3cuR192bWxDYW52YXNNYW5hZ2VyLmluaXRFbGVtZW50KHRoaXMuY2FudmFzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGggPSB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgICB3ID0gdGhpcy5jYW52YXMuY2xpZW50V2lkdGg7XG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoO1xuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3O1xuICAgICAgdGhpcy5ncCA9IFtuZXcgR2F1Z2VQb2ludGVyKHRoaXMpXTtcbiAgICAgIHRoaXMuc2V0T3B0aW9ucygpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBHYXVnZS5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBnYXVnZSwgaiwgbGVuLCBwaGksIHJlZjtcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgICB9XG4gICAgICBHYXVnZS5fX3N1cGVyX18uc2V0T3B0aW9ucy5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5jb25maWdQZXJjZW50Q29sb3JzKCk7XG4gICAgICB0aGlzLmV4dHJhUGFkZGluZyA9IDA7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFuZ2xlIDwgMCkge1xuICAgICAgICBwaGkgPSBNYXRoLlBJICogKDEgKyB0aGlzLm9wdGlvbnMuYW5nbGUpO1xuICAgICAgICB0aGlzLmV4dHJhUGFkZGluZyA9IE1hdGguc2luKHBoaSk7XG4gICAgICB9XG4gICAgICB0aGlzLmF2YWlsYWJsZUhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodCAqICgxIC0gdGhpcy5wYWRkaW5nVG9wIC0gdGhpcy5wYWRkaW5nQm90dG9tKTtcbiAgICAgIHRoaXMubGluZVdpZHRoID0gdGhpcy5hdmFpbGFibGVIZWlnaHQgKiB0aGlzLm9wdGlvbnMubGluZVdpZHRoO1xuICAgICAgdGhpcy5yYWRpdXMgPSAodGhpcy5hdmFpbGFibGVIZWlnaHQgLSB0aGlzLmxpbmVXaWR0aCAvIDIpIC8gKDEuMCArIHRoaXMuZXh0cmFQYWRkaW5nKTtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHJlZiA9IHRoaXMuZ3A7XG4gICAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgZ2F1Z2UgPSByZWZbal07XG4gICAgICAgIGdhdWdlLnNldE9wdGlvbnModGhpcy5vcHRpb25zLnBvaW50ZXIpO1xuICAgICAgICBnYXVnZS5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHYXVnZS5wcm90b3R5cGUuY29uZmlnUGVyY2VudENvbG9ycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGJ2YWwsIGd2YWwsIGksIGosIHJlZiwgcmVzdWx0cywgcnZhbDtcbiAgICAgIHRoaXMucGVyY2VudENvbG9ycyA9IG51bGw7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnBlcmNlbnRDb2xvcnMgIT09IHZvaWQgMCkge1xuICAgICAgICB0aGlzLnBlcmNlbnRDb2xvcnMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSBqID0gMCwgcmVmID0gdGhpcy5vcHRpb25zLnBlcmNlbnRDb2xvcnMubGVuZ3RoIC0gMTsgMCA8PSByZWYgPyBqIDw9IHJlZiA6IGogPj0gcmVmOyBpID0gMCA8PSByZWYgPyArK2ogOiAtLWopIHtcbiAgICAgICAgICBydmFsID0gcGFyc2VJbnQoKGN1dEhleCh0aGlzLm9wdGlvbnMucGVyY2VudENvbG9yc1tpXVsxXSkpLnN1YnN0cmluZygwLCAyKSwgMTYpO1xuICAgICAgICAgIGd2YWwgPSBwYXJzZUludCgoY3V0SGV4KHRoaXMub3B0aW9ucy5wZXJjZW50Q29sb3JzW2ldWzFdKSkuc3Vic3RyaW5nKDIsIDQpLCAxNik7XG4gICAgICAgICAgYnZhbCA9IHBhcnNlSW50KChjdXRIZXgodGhpcy5vcHRpb25zLnBlcmNlbnRDb2xvcnNbaV1bMV0pKS5zdWJzdHJpbmcoNCwgNiksIDE2KTtcbiAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5wZXJjZW50Q29sb3JzW2ldID0ge1xuICAgICAgICAgICAgcGN0OiB0aGlzLm9wdGlvbnMucGVyY2VudENvbG9yc1tpXVswXSxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgIHI6IHJ2YWwsXG4gICAgICAgICAgICAgIGc6IGd2YWwsXG4gICAgICAgICAgICAgIGI6IGJ2YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgR2F1Z2UucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgZ3AsIGksIGosIGssIGxlbiwgcmVmLCB2YWw7XG4gICAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICB2YWx1ZSA9IFt2YWx1ZV07XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID4gdGhpcy5ncC5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChpID0gaiA9IDAsIHJlZiA9IHZhbHVlLmxlbmd0aCAtIHRoaXMuZ3AubGVuZ3RoOyAwIDw9IHJlZiA/IGogPCByZWYgOiBqID4gcmVmOyBpID0gMCA8PSByZWYgPyArK2ogOiAtLWopIHtcbiAgICAgICAgICBncCA9IG5ldyBHYXVnZVBvaW50ZXIodGhpcyk7XG4gICAgICAgICAgZ3Auc2V0T3B0aW9ucyh0aGlzLm9wdGlvbnMucG9pbnRlcik7XG4gICAgICAgICAgdGhpcy5ncC5wdXNoKGdwKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPCB0aGlzLmdwLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmdwID0gdGhpcy5ncC5zbGljZSh0aGlzLmdwLmxlbmd0aCAtIHZhbHVlLmxlbmd0aCk7XG4gICAgICB9XG4gICAgICBpID0gMDtcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgIHZhbCA9IHZhbHVlW2tdO1xuICAgICAgICBpZiAodmFsID4gdGhpcy5tYXhWYWx1ZSkge1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRNYXgpIHtcbiAgICAgICAgICAgIHZhbCA9IHRoaXMubWF4VmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWF4VmFsdWUgPSB2YWwgKyAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh2YWwgPCB0aGlzLm1pblZhbHVlKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdE1pbikge1xuICAgICAgICAgICAgdmFsID0gdGhpcy5taW5WYWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5taW5WYWx1ZSA9IHZhbCAtIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3BbaV0udmFsdWUgPSB2YWw7XG4gICAgICAgIHRoaXMuZ3BbaSsrXS5zZXRPcHRpb25zKHtcbiAgICAgICAgICBtaW5WYWx1ZTogdGhpcy5taW5WYWx1ZSxcbiAgICAgICAgICBtYXhWYWx1ZTogdGhpcy5tYXhWYWx1ZSxcbiAgICAgICAgICBhbmdsZTogdGhpcy5vcHRpb25zLmFuZ2xlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy52YWx1ZSA9IE1hdGgubWF4KE1hdGgubWluKHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdLCB0aGlzLm1heFZhbHVlKSwgdGhpcy5taW5WYWx1ZSk7XG4gICAgICByZXR1cm4gQW5pbWF0aW9uVXBkYXRlci5ydW4oKTtcbiAgICB9O1xuXG4gICAgR2F1Z2UucHJvdG90eXBlLmdldEFuZ2xlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiAoMSArIHRoaXMub3B0aW9ucy5hbmdsZSkgKiBNYXRoLlBJICsgKCh2YWx1ZSAtIHRoaXMubWluVmFsdWUpIC8gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSkgKiAoMSAtIHRoaXMub3B0aW9ucy5hbmdsZSAqIDIpICogTWF0aC5QSTtcbiAgICB9O1xuXG4gICAgR2F1Z2UucHJvdG90eXBlLmdldENvbG9yRm9yUGVyY2VudGFnZSA9IGZ1bmN0aW9uKHBjdCwgZ3JhZCkge1xuICAgICAgdmFyIGNvbG9yLCBlbmRDb2xvciwgaSwgaiwgcmFuZ2VQY3QsIHJlZiwgc3RhcnRDb2xvcjtcbiAgICAgIGlmIChwY3QgPT09IDApIHtcbiAgICAgICAgY29sb3IgPSB0aGlzLnBlcmNlbnRDb2xvcnNbMF0uY29sb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xvciA9IHRoaXMucGVyY2VudENvbG9yc1t0aGlzLnBlcmNlbnRDb2xvcnMubGVuZ3RoIC0gMV0uY29sb3I7XG4gICAgICAgIGZvciAoaSA9IGogPSAwLCByZWYgPSB0aGlzLnBlcmNlbnRDb2xvcnMubGVuZ3RoIC0gMTsgMCA8PSByZWYgPyBqIDw9IHJlZiA6IGogPj0gcmVmOyBpID0gMCA8PSByZWYgPyArK2ogOiAtLWopIHtcbiAgICAgICAgICBpZiAocGN0IDw9IHRoaXMucGVyY2VudENvbG9yc1tpXS5wY3QpIHtcbiAgICAgICAgICAgIGlmIChncmFkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHN0YXJ0Q29sb3IgPSB0aGlzLnBlcmNlbnRDb2xvcnNbaSAtIDFdIHx8IHRoaXMucGVyY2VudENvbG9yc1swXTtcbiAgICAgICAgICAgICAgZW5kQ29sb3IgPSB0aGlzLnBlcmNlbnRDb2xvcnNbaV07XG4gICAgICAgICAgICAgIHJhbmdlUGN0ID0gKHBjdCAtIHN0YXJ0Q29sb3IucGN0KSAvIChlbmRDb2xvci5wY3QgLSBzdGFydENvbG9yLnBjdCk7XG4gICAgICAgICAgICAgIGNvbG9yID0ge1xuICAgICAgICAgICAgICAgIHI6IE1hdGguZmxvb3Ioc3RhcnRDb2xvci5jb2xvci5yICogKDEgLSByYW5nZVBjdCkgKyBlbmRDb2xvci5jb2xvci5yICogcmFuZ2VQY3QpLFxuICAgICAgICAgICAgICAgIGc6IE1hdGguZmxvb3Ioc3RhcnRDb2xvci5jb2xvci5nICogKDEgLSByYW5nZVBjdCkgKyBlbmRDb2xvci5jb2xvci5nICogcmFuZ2VQY3QpLFxuICAgICAgICAgICAgICAgIGI6IE1hdGguZmxvb3Ioc3RhcnRDb2xvci5jb2xvci5iICogKDEgLSByYW5nZVBjdCkgKyBlbmRDb2xvci5jb2xvci5iICogcmFuZ2VQY3QpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb2xvciA9IHRoaXMucGVyY2VudENvbG9yc1tpXS5jb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICdyZ2IoJyArIFtjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iXS5qb2luKCcsJykgKyAnKSc7XG4gICAgfTtcblxuICAgIEdhdWdlLnByb3RvdHlwZS5nZXRDb2xvckZvclZhbHVlID0gZnVuY3Rpb24odmFsLCBncmFkKSB7XG4gICAgICB2YXIgcGN0O1xuICAgICAgcGN0ID0gKHZhbCAtIHRoaXMubWluVmFsdWUpIC8gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzLmdldENvbG9yRm9yUGVyY2VudGFnZShwY3QsIGdyYWQpO1xuICAgIH07XG5cbiAgICBHYXVnZS5wcm90b3R5cGUucmVuZGVyU3RhdGljTGFiZWxzID0gZnVuY3Rpb24oc3RhdGljTGFiZWxzLCB3LCBoLCByYWRpdXMpIHtcbiAgICAgIHZhciBmb250LCBmb250c2l6ZSwgaiwgbGVuLCBtYXRjaCwgcmUsIHJlZiwgcmVzdCwgcm90YXRpb25BbmdsZSwgdmFsdWU7XG4gICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICB0aGlzLmN0eC50cmFuc2xhdGUodywgaCk7XG4gICAgICBmb250ID0gc3RhdGljTGFiZWxzLmZvbnQgfHwgXCIxMHB4IFRpbWVzXCI7XG4gICAgICByZSA9IC9cXGQrXFwuP1xcZD8vO1xuICAgICAgbWF0Y2ggPSBmb250Lm1hdGNoKHJlKVswXTtcbiAgICAgIHJlc3QgPSBmb250LnNsaWNlKG1hdGNoLmxlbmd0aCk7XG4gICAgICBmb250c2l6ZSA9IHBhcnNlRmxvYXQobWF0Y2gpICogdGhpcy5kaXNwbGF5U2NhbGU7XG4gICAgICB0aGlzLmN0eC5mb250ID0gZm9udHNpemUgKyByZXN0O1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gc3RhdGljTGFiZWxzLmNvbG9yIHx8IFwiIzAwMDAwMFwiO1xuICAgICAgdGhpcy5jdHgudGV4dEJhc2VsaW5lID0gXCJib3R0b21cIjtcbiAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICByZWYgPSBzdGF0aWNMYWJlbHMubGFiZWxzO1xuICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgIHZhbHVlID0gcmVmW2pdO1xuICAgICAgICByb3RhdGlvbkFuZ2xlID0gdGhpcy5nZXRBbmdsZSh2YWx1ZSkgLSAzICogTWF0aC5QSSAvIDI7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZShyb3RhdGlvbkFuZ2xlKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoZm9ybWF0TnVtYmVyKHZhbHVlLCBzdGF0aWNMYWJlbHMuZnJhY3Rpb25EaWdpdHMpLCAwLCAtcmFkaXVzIC0gdGhpcy5saW5lV2lkdGggLyAyKTtcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKC1yb3RhdGlvbkFuZ2xlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgfTtcblxuICAgIEdhdWdlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkaXNwbGF5ZWRBbmdsZSwgZmlsbFN0eWxlLCBnYXVnZSwgaCwgaiwgaywgbGVuLCBsZW4xLCByYWRpdXMsIHJlZiwgcmVmMSwgdywgem9uZTtcbiAgICAgIHcgPSB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XG4gICAgICBoID0gdGhpcy5jYW52YXMuaGVpZ2h0ICogdGhpcy5wYWRkaW5nVG9wICsgdGhpcy5hdmFpbGFibGVIZWlnaHQgLSAodGhpcy5yYWRpdXMgKyB0aGlzLmxpbmVXaWR0aCAvIDIpICogdGhpcy5leHRyYVBhZGRpbmc7XG4gICAgICBkaXNwbGF5ZWRBbmdsZSA9IHRoaXMuZ2V0QW5nbGUodGhpcy5kaXNwbGF5ZWRWYWx1ZSk7XG4gICAgICBpZiAodGhpcy50ZXh0RmllbGQpIHtcbiAgICAgICAgdGhpcy50ZXh0RmllbGQucmVuZGVyKHRoaXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5jdHgubGluZUNhcCA9IFwiYnV0dFwiO1xuICAgICAgcmFkaXVzID0gdGhpcy5yYWRpdXMgKiB0aGlzLm9wdGlvbnMucmFkaXVzU2NhbGU7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpY0xhYmVscykge1xuICAgICAgICB0aGlzLnJlbmRlclN0YXRpY0xhYmVscyh0aGlzLm9wdGlvbnMuc3RhdGljTGFiZWxzLCB3LCBoLCByYWRpdXMpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWNab25lcykge1xuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh3LCBoKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XG4gICAgICAgIHJlZiA9IHRoaXMub3B0aW9ucy5zdGF0aWNab25lcztcbiAgICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgem9uZSA9IHJlZltqXTtcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHpvbmUuc3Ryb2tlU3R5bGU7XG4gICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgdGhpcy5jdHguYXJjKDAsIDAsIHJhZGl1cywgdGhpcy5nZXRBbmdsZSh6b25lLm1pbiksIHRoaXMuZ2V0QW5nbGUoem9uZS5tYXgpLCBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jdXN0b21GaWxsU3R5bGUgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGZpbGxTdHlsZSA9IHRoaXMub3B0aW9ucy5jdXN0b21GaWxsU3R5bGUodGhpcyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZXJjZW50Q29sb3JzICE9PSBudWxsKSB7XG4gICAgICAgICAgZmlsbFN0eWxlID0gdGhpcy5nZXRDb2xvckZvclZhbHVlKHRoaXMuZGlzcGxheWVkVmFsdWUsIHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5jb2xvclN0b3AgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZ3JhZGllbnRUeXBlID09PSAwKSB7XG4gICAgICAgICAgICBmaWxsU3R5bGUgPSB0aGlzLmN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh3LCBoLCA5LCB3LCBoLCA3MCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpbGxTdHlsZSA9IHRoaXMuY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHcsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmaWxsU3R5bGUuYWRkQ29sb3JTdG9wKDAsIHRoaXMub3B0aW9ucy5jb2xvclN0YXJ0KTtcbiAgICAgICAgICBmaWxsU3R5bGUuYWRkQ29sb3JTdG9wKDEsIHRoaXMub3B0aW9ucy5jb2xvclN0b3ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbGxTdHlsZSA9IHRoaXMub3B0aW9ucy5jb2xvclN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gZmlsbFN0eWxlO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguYXJjKHcsIGgsIHJhZGl1cywgKDEgKyB0aGlzLm9wdGlvbnMuYW5nbGUpICogTWF0aC5QSSwgZGlzcGxheWVkQW5nbGUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMub3B0aW9ucy5zdHJva2VDb2xvcjtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh3LCBoLCByYWRpdXMsIGRpc3BsYXllZEFuZ2xlLCAoMiAtIHRoaXMub3B0aW9ucy5hbmdsZSkgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHcsIGgpO1xuICAgICAgcmVmMSA9IHRoaXMuZ3A7XG4gICAgICBmb3IgKGsgPSAwLCBsZW4xID0gcmVmMS5sZW5ndGg7IGsgPCBsZW4xOyBrKyspIHtcbiAgICAgICAgZ2F1Z2UgPSByZWYxW2tdO1xuICAgICAgICBnYXVnZS51cGRhdGUodHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5jdHgudHJhbnNsYXRlKC13LCAtaCk7XG4gICAgfTtcblxuICAgIHJldHVybiBHYXVnZTtcblxuICB9KShCYXNlR2F1Z2UpO1xuXG4gIEJhc2VEb251dCA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gICAgZXh0ZW5kKEJhc2VEb251dCwgc3VwZXJDbGFzcyk7XG5cbiAgICBCYXNlRG9udXQucHJvdG90eXBlLmxpbmVXaWR0aCA9IDE1O1xuXG4gICAgQmFzZURvbnV0LnByb3RvdHlwZS5kaXNwbGF5ZWRWYWx1ZSA9IDA7XG5cbiAgICBCYXNlRG9udXQucHJvdG90eXBlLnZhbHVlID0gMzM7XG5cbiAgICBCYXNlRG9udXQucHJvdG90eXBlLm1heFZhbHVlID0gODA7XG5cbiAgICBCYXNlRG9udXQucHJvdG90eXBlLm1pblZhbHVlID0gMDtcblxuICAgIEJhc2VEb251dC5wcm90b3R5cGUub3B0aW9ucyA9IHtcbiAgICAgIGxpbmVXaWR0aDogMC4xMCxcbiAgICAgIGNvbG9yU3RhcnQ6IFwiIzZmNmVhMFwiLFxuICAgICAgY29sb3JTdG9wOiBcIiNjMGMwZGJcIixcbiAgICAgIHN0cm9rZUNvbG9yOiBcIiNlZWVlZWVcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcIiNkNWQ1ZDVcIixcbiAgICAgIGFuZ2xlOiAwLjM1LFxuICAgICAgcmFkaXVzU2NhbGU6IDEuMFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBCYXNlRG9udXQoY2FudmFzKSB7XG4gICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgIEJhc2VEb251dC5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgICAgIGlmICh0eXBlb2YgR192bWxDYW52YXNNYW5hZ2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IHdpbmRvdy5HX3ZtbENhbnZhc01hbmFnZXIuaW5pdEVsZW1lbnQodGhpcy5jYW52YXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgdGhpcy5zZXRPcHRpb25zKCk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIEJhc2VEb251dC5wcm90b3R5cGUuZ2V0QW5nbGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuICgxIC0gdGhpcy5vcHRpb25zLmFuZ2xlKSAqIE1hdGguUEkgKyAoKHZhbHVlIC0gdGhpcy5taW5WYWx1ZSkgLyAodGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWUpKSAqICgoMiArIHRoaXMub3B0aW9ucy5hbmdsZSkgLSAoMSAtIHRoaXMub3B0aW9ucy5hbmdsZSkpICogTWF0aC5QSTtcbiAgICB9O1xuXG4gICAgQmFzZURvbnV0LnByb3RvdHlwZS5zZXRPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIEJhc2VEb251dC5fX3N1cGVyX18uc2V0T3B0aW9ucy5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5saW5lV2lkdGggPSB0aGlzLmNhbnZhcy5oZWlnaHQgKiB0aGlzLm9wdGlvbnMubGluZVdpZHRoO1xuICAgICAgdGhpcy5yYWRpdXMgPSB0aGlzLm9wdGlvbnMucmFkaXVzU2NhbGUgKiAodGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIHRoaXMubGluZVdpZHRoIC8gMik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQmFzZURvbnV0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHRoaXMudmFsdWUgPiB0aGlzLm1heFZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF4VmFsdWUgPSB0aGlzLnZhbHVlICogMS4xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEFuaW1hdGlvblVwZGF0ZXIucnVuKCk7XG4gICAgfTtcblxuICAgIEJhc2VEb251dC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZGlzcGxheWVkQW5nbGUsIGdyZEZpbGwsIGgsIHN0YXJ0LCBzdG9wLCB3O1xuICAgICAgZGlzcGxheWVkQW5nbGUgPSB0aGlzLmdldEFuZ2xlKHRoaXMuZGlzcGxheWVkVmFsdWUpO1xuICAgICAgdyA9IHRoaXMuY2FudmFzLndpZHRoIC8gMjtcbiAgICAgIGggPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgaWYgKHRoaXMudGV4dEZpZWxkKSB7XG4gICAgICAgIHRoaXMudGV4dEZpZWxkLnJlbmRlcih0aGlzKTtcbiAgICAgIH1cbiAgICAgIGdyZEZpbGwgPSB0aGlzLmN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh3LCBoLCAzOSwgdywgaCwgNzApO1xuICAgICAgZ3JkRmlsbC5hZGRDb2xvclN0b3AoMCwgdGhpcy5vcHRpb25zLmNvbG9yU3RhcnQpO1xuICAgICAgZ3JkRmlsbC5hZGRDb2xvclN0b3AoMSwgdGhpcy5vcHRpb25zLmNvbG9yU3RvcCk7XG4gICAgICBzdGFydCA9IHRoaXMucmFkaXVzIC0gdGhpcy5saW5lV2lkdGggLyAyO1xuICAgICAgc3RvcCA9IHRoaXMucmFkaXVzICsgdGhpcy5saW5lV2lkdGggLyAyO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLm9wdGlvbnMuc3Ryb2tlQ29sb3I7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4LmFyYyh3LCBoLCB0aGlzLnJhZGl1cywgKDEgLSB0aGlzLm9wdGlvbnMuYW5nbGUpICogTWF0aC5QSSwgKDIgKyB0aGlzLm9wdGlvbnMuYW5nbGUpICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XG4gICAgICB0aGlzLmN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGdyZEZpbGw7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4LmFyYyh3LCBoLCB0aGlzLnJhZGl1cywgKDEgLSB0aGlzLm9wdGlvbnMuYW5nbGUpICogTWF0aC5QSSwgZGlzcGxheWVkQW5nbGUsIGZhbHNlKTtcbiAgICAgIHJldHVybiB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEJhc2VEb251dDtcblxuICB9KShCYXNlR2F1Z2UpO1xuXG4gIERvbnV0ID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgICBleHRlbmQoRG9udXQsIHN1cGVyQ2xhc3MpO1xuXG4gICAgZnVuY3Rpb24gRG9udXQoKSB7XG4gICAgICByZXR1cm4gRG9udXQuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgRG9udXQucHJvdG90eXBlLnN0cm9rZUdyYWRpZW50ID0gZnVuY3Rpb24odywgaCwgc3RhcnQsIHN0b3ApIHtcbiAgICAgIHZhciBncmQ7XG4gICAgICBncmQgPSB0aGlzLmN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh3LCBoLCBzdGFydCwgdywgaCwgc3RvcCk7XG4gICAgICBncmQuYWRkQ29sb3JTdG9wKDAsIHRoaXMub3B0aW9ucy5zaGFkb3dDb2xvcik7XG4gICAgICBncmQuYWRkQ29sb3JTdG9wKDAuMTIsIHRoaXMub3B0aW9ucy5fb3JnU3Ryb2tlQ29sb3IpO1xuICAgICAgZ3JkLmFkZENvbG9yU3RvcCgwLjg4LCB0aGlzLm9wdGlvbnMuX29yZ1N0cm9rZUNvbG9yKTtcbiAgICAgIGdyZC5hZGRDb2xvclN0b3AoMSwgdGhpcy5vcHRpb25zLnNoYWRvd0NvbG9yKTtcbiAgICAgIHJldHVybiBncmQ7XG4gICAgfTtcblxuICAgIERvbnV0LnByb3RvdHlwZS5zZXRPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIGgsIHN0YXJ0LCBzdG9wLCB3O1xuICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIERvbnV0Ll9fc3VwZXJfXy5zZXRPcHRpb25zLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgICB3ID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xuICAgICAgaCA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICBzdGFydCA9IHRoaXMucmFkaXVzIC0gdGhpcy5saW5lV2lkdGggLyAyO1xuICAgICAgc3RvcCA9IHRoaXMucmFkaXVzICsgdGhpcy5saW5lV2lkdGggLyAyO1xuICAgICAgdGhpcy5vcHRpb25zLl9vcmdTdHJva2VDb2xvciA9IHRoaXMub3B0aW9ucy5zdHJva2VDb2xvcjtcbiAgICAgIHRoaXMub3B0aW9ucy5zdHJva2VDb2xvciA9IHRoaXMuc3Ryb2tlR3JhZGllbnQodywgaCwgc3RhcnQsIHN0b3ApO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIHJldHVybiBEb251dDtcblxuICB9KShCYXNlRG9udXQpO1xuXG4gIHdpbmRvdy5BbmltYXRpb25VcGRhdGVyID0ge1xuICAgIGVsZW1lbnRzOiBbXSxcbiAgICBhbmltSWQ6IG51bGwsXG4gICAgYWRkQWxsOiBmdW5jdGlvbihsaXN0KSB7XG4gICAgICB2YXIgZWxlbSwgaiwgbGVuLCByZXN1bHRzO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChqID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICBlbGVtID0gbGlzdFtqXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKEFuaW1hdGlvblVwZGF0ZXIuZWxlbWVudHMucHVzaChlbGVtKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9LFxuICAgIGFkZDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICByZXR1cm4gQW5pbWF0aW9uVXBkYXRlci5lbGVtZW50cy5wdXNoKG9iamVjdCk7XG4gICAgfSxcbiAgICBydW46IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFuaW1hdGlvbkZpbmlzaGVkLCBlbGVtLCBqLCBsZW4sIHJlZjtcbiAgICAgIGFuaW1hdGlvbkZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgIHJlZiA9IEFuaW1hdGlvblVwZGF0ZXIuZWxlbWVudHM7XG4gICAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgZWxlbSA9IHJlZltqXTtcbiAgICAgICAgaWYgKGVsZW0udXBkYXRlKCkpIHtcbiAgICAgICAgICBhbmltYXRpb25GaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWFuaW1hdGlvbkZpbmlzaGVkKSB7XG4gICAgICAgIHJldHVybiBBbmltYXRpb25VcGRhdGVyLmFuaW1JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShBbmltYXRpb25VcGRhdGVyLnJ1bik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoQW5pbWF0aW9uVXBkYXRlci5hbmltSWQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBpZiAodHlwZW9mIHdpbmRvdy5kZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgKHdpbmRvdy5kZWZpbmUuYW1kICE9IG51bGwpKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgR2F1Z2U6IEdhdWdlLFxuICAgICAgICBEb251dDogRG9udXQsXG4gICAgICAgIEJhc2VEb251dDogQmFzZURvbnV0LFxuICAgICAgICBUZXh0UmVuZGVyZXI6IFRleHRSZW5kZXJlclxuICAgICAgfTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiAobW9kdWxlLmV4cG9ydHMgIT0gbnVsbCkpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgIEdhdWdlOiBHYXVnZSxcbiAgICAgIERvbnV0OiBEb251dCxcbiAgICAgIEJhc2VEb251dDogQmFzZURvbnV0LFxuICAgICAgVGV4dFJlbmRlcmVyOiBUZXh0UmVuZGVyZXJcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5HYXVnZSA9IEdhdWdlO1xuICAgIHdpbmRvdy5Eb251dCA9IERvbnV0O1xuICAgIHdpbmRvdy5CYXNlRG9udXQgPSBCYXNlRG9udXQ7XG4gICAgd2luZG93LlRleHRSZW5kZXJlciA9IFRleHRSZW5kZXJlcjtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dhdWdlLmpzL2Rpc3QvZ2F1Z2UuanNcbi8vIG1vZHVsZSBpZCA9IDM1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNmYyODMxOTUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2dhdWdlLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZ2F1Z2UudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNmYyODMxOTUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZ2F1Z2UudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBnYXVnZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmYyODMxOTVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ZjI4MzE5NVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWVcbi8vIG1vZHVsZSBpZCA9IDM1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygncGFnZS1oZWFkZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogX3ZtLiR0KCdyZXBvcnRzLnJlcG9ydCcpLFxuICAgICAgXCJicmVhZGNydW1ic1wiOiBfdm0uYnJlYWRjcnVtYnNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc2VjdGlvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50IHJlcG9ydFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtMTBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtc20tMyBjb2wteHMtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi10ZXh0XCJcbiAgfSwgW192bS5fdihcIkVGRkVDVElWRU5FU1NcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiB0ZXh0LXJpZ2h0XCJcbiAgfSwgW19jKCdoNScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1oZWFkZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZWZmZWN0aXZlbmVzcy5wZXJjZW50YWdlKSArIFwiJVwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1sZWZ0XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmVmZmVjdGl2ZW5lc3MudmljdG9yaWVzKSArIFwiVlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmVmZmVjdGl2ZW5lc3MuZGVmZWF0cykgKyBcIlZcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1zbS0zIGNvbC14cy02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXRleHRcIlxuICB9LCBbX3ZtLl92KFwiVkFMSURcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiB0ZXh0LXJpZ2h0XCJcbiAgfSwgW19jKCdoNScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1oZWFkZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udmFsaWQucGVyY2VudGFnZSkgKyBcIiVcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IHRleHQtbGVmdFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS52YWxpZC52YWxpZCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnZhbGlkLm5vVmFsaWQpICsgXCJcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1zbS0zIGNvbC14cy02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXRleHRcIlxuICB9LCBbX3ZtLl92KFwiQVZFUkFHRVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IHRleHQtcmlnaHRcIlxuICB9LCBbX2MoJ2g1Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLWhlYWRlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5hdmVyYWdlLnBlcmNlbnRhZ2UpICsgXCIlXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiB0ZXh0LWxlZnRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uYXZlcmFnZS5naXZlbikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmF2ZXJhZ2UucmVjZWl2ZWQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1zbS0zIGNvbC14cy02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXRleHRcIlxuICB9LCBbX3ZtLl92KFwiUEVSRkVDVElPTlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IHRleHQtcmlnaHRcIlxuICB9LCBbX2MoJ2g1Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLWhlYWRlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5wZXJmZWN0aW9uLnBlcmNlbnRhZ2UpICsgXCIlXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiB0ZXh0LWxlZnRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ucGVyZmVjdGlvbi5wZXJmZWN0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ucGVyZmVjdGlvbi5pbXBlcmZlY3QpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1ibG9ja1wiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi10ZXh0XCJcbiAgfSwgW192bS5fdihcIlRJTUUgQ09OU1VNRVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IHRleHQtcmlnaHRcIlxuICB9LCBbX2MoJ2g1Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLWhlYWRlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50aW1lQ29uc3VtZWQucGVyY2VudGFnZSkgKyBcIiVcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IHRleHQtbGVmdFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50aW1lQ29uc3VtZWQudGltZUNvbnN1bWVkKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udGltZUNvbnN1bWVkLnRpbWVJZGxlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTEwXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibmF2LXRhYnMtY3VzdG9tXCJcbiAgfSwgW19jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJuYXYgbmF2LXRhYnNcIlxuICB9LCBfdm0uX2woKF92bS5wb2ludFZzVGltZUdyYXBocyksIGZ1bmN0aW9uKHBvaW50VnNUaW1lR3JhcGgsIGluZGV4KSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIHtcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdhY3RpdmUnOiBpbmRleCA9PSAwXG4gICAgICB9XG4gICAgfSwgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6ICcjJyArIHBvaW50VnNUaW1lR3JhcGguaWQsXG4gICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIixcbiAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IFwiZmFsc2VcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKHBvaW50VnNUaW1lR3JhcGgubmFtZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXG4gIH0pKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0YWItY29udGVudFwiXG4gIH0sIF92bS5fbCgoX3ZtLnBvaW50VnNUaW1lR3JhcGhzKSwgZnVuY3Rpb24ocG9pbnRWc1RpbWVHcmFwaCwgaW5kZXgpIHtcbiAgICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lXCIsXG4gICAgICBjbGFzczoge1xuICAgICAgICAnYWN0aXZlJzogaW5kZXggPT0gMFxuICAgICAgfSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaWRcIjogcG9pbnRWc1RpbWVHcmFwaC5pZFxuICAgICAgfVxuICAgIH0sIFtfYygnaGlnaGNoYXJ0cycsIHtcbiAgICAgIHJlZjogcG9pbnRWc1RpbWVHcmFwaC5pZCxcbiAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJvcHRpb25zXCI6IHBvaW50VnNUaW1lR3JhcGgub3B0aW9uc1xuICAgICAgfVxuICAgIH0pXSwgMSlcbiAgfSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXCJcbiAgfSwgW19jKCdnYXVnZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0ub2ZmZW5zaXZlR2F1Z2UuZGF0YSxcbiAgICAgIFwiY29sb3JcIjogXCJncmVlblwiLFxuICAgICAgXCJ0aXRsZVwiOiBcIkNvdW50ZXJvZmZlbnNpdmVcIlxuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXCJcbiAgfSwgW19jKCdnYXVnZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uZGVmZW5zaXZlR2F1Z2UuZGF0YSxcbiAgICAgIFwiY29sb3JcIjogXCJ5ZWxsb3dcIixcbiAgICAgIFwidGl0bGVcIjogXCJEZWZlbnNpdmVcIlxuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXCJcbiAgfSwgW19jKCdnYXVnZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uY291bnRlck9mZmVuc2l2ZUdhdWdlLmRhdGEsXG4gICAgICBcImNvbG9yXCI6IFwicmVkXCIsXG4gICAgICBcInRpdGxlXCI6IFwiT2ZmZW5zaXZlXCJcbiAgICB9XG4gIH0pXSwgMSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC04XCJcbiAgfSwgW19jKCdoaWdoY2hhcnRzJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLnBpZVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTRcIlxuICB9LCBbX2MoJ2hpZ2hjaGFydHMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwib3B0aW9uc1wiOiBfdm0uYmFyXG4gICAgfVxuICB9KV0sIDEpXSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTQxMjVkYTMwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00MTI1ZGEzMCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3ZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSAzODdcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2F1Z2VcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBfdm0uY29udGFpbmVySWRcbiAgICB9XG4gIH0sIFtfYygnaDQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIlxuICB9LCBbX2MoJ2InLCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdjYW52YXMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogX3ZtLmVsZW1lbnRJZFxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ29hbC13cmFwcGVyIGNsZWFyZml4XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdhdWdlLXZhbHVlIHB1bGwtbGVmdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IF92bS50ZXh0SWRcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnYXVnZS12YWx1ZSBwdWxsLWxlZnRcIlxuICB9LCBbX3ZtLl92KFwiJVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnb2FsLXZhbHVlIHB1bGwtcmlnaHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImdvYWwtdGV4dFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiMTAwJVwiKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi02ZjI4MzE5NVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNmYyODMxOTUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDAzXG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDEyNWRhMzAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3ZpZXcudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImIyZjIwNzRhXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00MTI1ZGEzMCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdmlldy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQxMjVkYTMwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi92aWV3LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDEyNWRhMzAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IDQyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZmMjgzMTk1IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9nYXVnZS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNzc3OGM5NzZcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZmMjgzMTk1IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9nYXVnZS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZmMjgzMTk1IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9nYXVnZS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZmMjgzMTk1IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlXG4vLyBtb2R1bGUgaWQgPSA0Mzhcbi8vIG1vZHVsZSBjaHVua3MgPSA5Il0sInNvdXJjZVJvb3QiOiIifQ==