webpackJsonp([11,31],{

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(450)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(311),
  /* template */
  __webpack_require__(411),
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

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uuid = __webpack_require__(244);

var _uuid2 = _interopRequireDefault(_uuid);

var _gaugeOptsStub = __webpack_require__(325);

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
            var gaugeLib = __webpack_require__(380);
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

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pageHeader = __webpack_require__(196);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _gauge = __webpack_require__(381);

var _gauge2 = _interopRequireDefault(_gauge);

var _reports = __webpack_require__(248);

var _reports2 = _interopRequireDefault(_reports);

var _reportService = __webpack_require__(246);

var _reportService2 = _interopRequireDefault(_reportService);

var _reportDataService = __webpack_require__(343);

var _reportDataService2 = _interopRequireDefault(_reportDataService);

var _uuid = __webpack_require__(244);

var _uuid2 = _interopRequireDefault(_uuid);

var _lineOptions = __webpack_require__(328);

var _pieOptions = __webpack_require__(329);

var _barOptions = __webpack_require__(326);

var _gaugeOptions = __webpack_require__(327);

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

/***/ 325:
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

/***/ 326:
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

/***/ 327:
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

/***/ 328:
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

/***/ 329:
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

/***/ 343:
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

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.report {\n    background-color: white;\n}\n.border-right {\n    border-right: 1px solid #666;\n}\n.description-text {\n    font-size: 20px;\n    font-weight: bold;\n}\n.description-percentage {\n    font-size: 15px;\n    font-weight: bold;\n}\n.description-header {\n    font-size: 20px;\n    font-weight: bold;\n}\n\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/reports/view.vue?418f472c"],"names":[],"mappings":";AA6KA;IACA,wBAAA;CACA;AAEA;IACA,6BAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA","file":"view.vue","sourcesContent":["<template>\n    <div>\n        <page-header :title=\"$t('reports.report')\" :breadcrumbs=\"breadcrumbs\"></page-header>\n        <section class=\"content report\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-10\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-3 col-xs-6\">\n                            <div class=\"description-block border-right\">\n                                <span class=\"description-text\">EFFECTIVENESS</span>\n                                <div class=\"row\">\n                                    <div class=\"col-xs-6 text-right\">\n                                        <h5 class=\"description-header\">{{effectiveness.percentage}}%</h5>\n\n                                    </div>\n                                    <div class=\"col-xs-6 text-left\">\n                                        <span class=\"description-percentage text-green\">\n                                            {{effectiveness.victories}}V\n                                        </span>\n                                        <br>\n                                        <span class=\"description-percentage text-red\">\n                                            {{effectiveness.defeats}}V\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- /.description-block -->\n                        </div>\n                        <!-- /.col -->\n                        <div class=\"col-sm-3 col-xs-6\">\n                            <div class=\"description-block border-right\">\n                                <span class=\"description-text\">VALID</span>\n\n                                <div class=\"row\">\n                                    <div class=\"col-xs-6 text-right\">\n                                        <h5 class=\"description-header\">{{valid.percentage}}%</h5>\n\n                                    </div>\n                                    <div class=\"col-xs-6 text-left\">\n                                        <span class=\"description-percentage text-green\">\n                                            {{valid.valid}}\n                                        </span>\n                                        <br>\n                                        <span class=\"description-percentage text-red\">\n                                            {{valid.noValid}}\n\n                                        </span>\n                                    </div>\n                                </div>\n\n                            </div>\n                            <!-- /.description-block -->\n                        </div>\n                        <!-- /.col -->\n                        <div class=\"col-sm-3 col-xs-6\">\n                            <div class=\"description-block border-right\">\n                                <span class=\"description-text\">AVERAGE</span>\n                                <div class=\"row\">\n                                    <div class=\"col-xs-6 text-right\">\n                                        <h5 class=\"description-header\">{{average.percentage}}%</h5>\n\n                                    </div>\n                                    <div class=\"col-xs-6 text-left\">\n                                        <span class=\"description-percentage text-green\">\n                                            {{average.given}}\n                                        </span>\n                                        <br>\n                                        <span class=\"description-percentage text-red\">\n                                            {{average.received}}\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- /.description-block -->\n                        </div>\n                        <div class=\"col-sm-3 col-xs-6\">\n                            <div class=\"description-block border-right\">\n                                <span class=\"description-text\">PERFECTION</span>\n                                <div class=\"row\">\n                                    <div class=\"col-xs-6 text-right\">\n                                        <h5 class=\"description-header\">{{perfection.percentage}}%</h5>\n\n                                    </div>\n                                    <div class=\"col-xs-6 text-left\">\n                                        <span class=\"description-percentage text-green\">\n                                            {{perfection.perfect}}\n                                        </span>\n                                        <br>\n                                        <span class=\"description-percentage text-red\">\n                                            {{perfection.imperfect}}\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xs-12 col-md-2\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12\">\n                            <div class=\"description-block\">\n                                <span class=\"description-text\">TIME CONSUME</span>\n\n                                <div class=\"row\">\n                                    <div class=\"col-xs-6 text-right\">\n                                        <h5 class=\"description-header\">{{timeConsumed.percentage}}%</h5>\n\n                                    </div>\n                                    <div class=\"col-xs-6 text-left\">\n                                        <span class=\"description-percentage text-green\">\n                                            {{timeConsumed.timeConsumed}}\n                                        </span>\n                                        <br>\n                                        <span class=\"description-percentage text-red\">\n                                            {{timeConsumed.timeIdle}}\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- /.description-block -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-10\">\n                    <div class=\"nav-tabs-custom\">\n                        <ul class=\"nav nav-tabs\">\n                            <li :class=\"{'active':index == 0}\" v-for=\"(pointVsTimeGraph,index) in pointVsTimeGraphs\">\n                                <a :href=\"'#'+pointVsTimeGraph.id\" data-toggle=\"tab\"\n                                   aria-expanded=\"false\">\n                                    {{pointVsTimeGraph.name}}\n                                </a>\n                            </li>\n                        </ul>\n                        <div class=\"tab-content\">\n                            <div class=\"tab-pane\" :class=\"{'active':index == 0}\" :id=\"pointVsTimeGraph.id\"\n                                 v-for=\"(pointVsTimeGraph,index) in pointVsTimeGraphs\">\n                                <highcharts :ref=\"pointVsTimeGraph.id\" :options=\"pointVsTimeGraph.options\"></highcharts>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-2\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\n                            <gauge :value=\"offensiveGauge.data\" color=\"green\" title=\"Counteroffensive\"></gauge>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\n                            <gauge :value=\"defensiveGauge.data\" color=\"yellow\" title=\"Defensive\"></gauge>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\n                            <gauge :value=\"counterOffensiveGauge.data\" color=\"red\" title=\"Offensive\"></gauge>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-8\">\n                    <highcharts :options=\"pie\"></highcharts>\n                </div>\n                <div class=\"col-xs-12 col-md-4\">\n                    <highcharts :options=\"bar\"></highcharts>\n                </div>\n            </div>\n        </section>\n    </div>\n</template>\n<style>\n    .report {\n        background-color: white;\n    }\n\n    .border-right {\n        border-right: 1px solid #666;\n    }\n\n    .description-text {\n        font-size: 20px;\n        font-weight: bold;\n    }\n\n    .description-percentage {\n        font-size: 15px;\n        font-weight: bold;\n    }\n\n    .description-header {\n        font-size: 20px;\n        font-weight: bold;\n    }\n\n</style>\n<script type=\"text/babel\">\n    import pageHeader from 'base/components/header/pageHeader.vue'\n    import gauge from 'base/components/charts/gauges/gauge.vue'\n    import reportsLocales from 'base/lang/admin/reports/reports.js';\n    import reportService from 'base/dashboard/services/reports/reportService'\n    import reportDataService from 'base/dashboard/services/reports/reportDataService'\n    import uuidMixin from 'base/mixins/uuid'\n    import {lineBaseOptions} from './stubs/lineOptions'\n    import {pieBaseOptions} from './stubs/pieOptions'\n    import {barBaseOptions} from './stubs/barOptions'\n    import {gaugeBaseOptions} from './stubs/gaugeOptions'\n    export default{\n        locales: reportsLocales,\n        components: {\n            pageHeader,\n            gauge\n        },\n        mixins: [uuidMixin],\n        data(){\n            return {\n                reports: {},\n                pointVsTimeGraphs: [],\n                pie: {},\n                bar: {},\n                counterOffensiveGauge: {data: 0},\n                offensiveGauge: {data: 0},\n                defensiveGauge: {data: 0},\n                effectiveness: {},\n                valid: {},\n                average: {},\n                perfection: {},\n                timeConsumed: {}\n            }\n        },\n        computed: {\n            breadcrumbs(){\n                return [\n                    {\n                        href: '/dashboard',\n                        title: this.$t('admin.home')\n                    },\n                    {\n                        href: '/reports/' + this.$route.params.id,\n                        title: 'admin.view'\n                    }\n                ]\n            },\n        },\n        created(){\n            if (!this.$auth.user().superUser) {\n                this.$root.errorToast('No tienes permiso para ver el informe');\n                this.$router.push({\n                    name: 'reports.list',\n                })\n            } else {\n                reportService.show(this.$route.params.id,\n                        (response)=> {\n                            this.report = response.data;\n                        },\n                        (error)=> {\n                            console.log(error);\n                        })\n            }\n        },\n        mounted(){\n            reportDataService.pointVsTime(this.$route.params.id,\n                    (response)=> {\n                        var data = response;\n                        var graph = [];\n                        _.each(data, (graphData) => {\n                            var line = {\n                                id: this.generateUUID(),\n                                name: graphData.leftAthlete + ' VS ' + graphData.rightAthlete,\n                                options: _.cloneDeep(lineBaseOptions),\n                            }\n                            line.options.xAxis.categories = graphData.time;\n                            line.options.series[0].data = graphData.left;\n                            line.options.series[1].data = graphData.right;\n                            line.options.series[0].name = graphData.leftAthlete;\n                            line.options.series[1].name = graphData.rightAthlete;\n\n                            graph.push(line);\n                        });\n                        this.pointVsTimeGraphs = graph;\n                        var self = this;\n                        this.$nextTick(()=> {\n                            $('a[data-toggle=\"tab\"]').on('shown.bs.tab', (e)=> {\n                                _.each(self.pointVsTimeGraphs, (graphData) => {\n                                    self.$refs[graphData.id][0].chart.reflow();\n                                });\n                            });\n                        })\n                    },\n                    (error)=> {\n                        console.log(error);\n                    });\n\n            reportDataService.offensiveDefensive(this.$route.params.id,\n                    (response)=> {\n                        var data = response;\n                        this.counterOffensiveGauge.data = data.counterOffensive.data;\n                        this.offensiveGauge.data = data.offensive.data;\n                        this.defensiveGauge.data = data.defensive.data;\n                    },\n                    (error)=> {\n                        console.log(error);\n                    })\n\n            reportDataService.combatStatus(this.$route.params.id,\n                    (response)=> {\n                        var data = response;\n                        var pie = _.cloneDeep(pieBaseOptions);\n                        pie.series[0].data = data;\n                        this.pie = pie;\n                    },\n                    (error)=> {\n                        console.log(error);\n                    })\n            reportDataService.parry(this.$route.params.id,\n                    (response)=> {\n                        var data = response.data;\n                        var categories = response.categories;\n                        var bar = _.cloneDeep(barBaseOptions);\n                        bar.series[0].data = data;\n                        bar.xAxis.categories = categories;\n                        this.bar = bar;\n                    },\n                    (error)=> {\n                        console.log(error);\n                    })\n\n            reportDataService.summary(this.$route.params.id,\n                    (response)=> {\n                        var data = response;\n                        this.effectiveness = data.effectiveness;\n                        this.valid = data.valid;\n                        this.average = data.average;\n                        this.perfection = data.perfection;\n                        this.timeConsumed = data.consumedTime\n                    },\n                    (error)=> {\n                        console.log(error);\n                    })\n        }\n    }\n</script>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.gauge {\n    background-color: white;\n}\n.goal-wrapper {\n    font-size: 16px;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/charts/gauges/gauge.vue?56c4bb9a"],"names":[],"mappings":";AAaA;IACA,wBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA","file":"gauge.vue","sourcesContent":["<template>\n    <div :id=\"containerId\" class=\"gauge\">\n        <h4 class=\"text-center\"><b>{{title}}</b></h4>\n        <canvas :id=\"elementId\"></canvas>\n        <div class=\"goal-wrapper clearfix\">\n            <span :id=\"textId\" class=\"gauge-value pull-left\"></span>\n            <span class=\"gauge-value pull-left\">%</span>\n            <span id=\"goal-text\" class=\"goal-value pull-right\">100%</span>\n        </div>\n    </div>\n</template>\n\n<style>\n    .gauge {\n        background-color: white;\n    }\n\n    .goal-wrapper {\n        font-size: 16px;\n        font-weight: bold;\n    }\n</style>\n<script>\n    import uuidMixin from 'base/mixins/uuid'\n    import {opts} from './stubs/gaugeOptsStub'\n    export default{\n\n        props: {\n            value: {required: true},\n            title: {default: ''},\n            color: {required: true}\n        },\n        watch: {\n            value: function (val) {\n                this.gauge.set(val);\n            }\n        },\n        data(){\n            return {\n                gauge: null,\n                opts: {},\n                timeoutHandle: null\n            }\n        },\n        computed: {\n            elementId(){\n                return this.generateUUID()\n            },\n            containerId(){\n                return this.generateUUID()\n            },\n            textId(){\n                return this.generateUUID()\n            }\n        },\n        mixins: [uuidMixin],\n        mounted(){\n            this.draw();\n            window.addEventListener('resize', this.redraw);\n        },\n        methods: {\n            draw() {\n                var gaugeLib = require('gauge.js');\n                var width = document.getElementById(this.containerId).offsetWidth;\n                var height = width / 2;\n                document.getElementById(this.elementId).setAttribute('width', width + 'px');\n                document.getElementById(this.elementId).setAttribute('height', height + 'px');\n                this.opts = _.cloneDeep(opts);\n                this.opts.colorStart = this.color;\n                this.gauge = new gaugeLib.Gauge(document.getElementById(this.elementId)).setOptions(this.opts);\n                this.gauge.maxValue = 100; // set max gauge value\n                this.gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0\n                this.gauge.animationSpeed = 65; // set animation speed (32 is default value)\n                this.gauge.set(this.value); // set actual value\n                this.gauge.setTextField(document.getElementById(this.textId));\n            },\n            redraw() {\n                document.getElementById(this.elementId).getContext('2d').save();\n                document.getElementById(this.elementId).getContext('2d').setTransform(1, 0, 0, 1, 0, 0);\n                document.getElementById(this.elementId).getContext('2d').clearRect(0, 0, document.getElementById(this.elementId).getContext('2d').canvas.width, document.getElementById(this.elementId).getContext('2d').canvas.height);\n                document.getElementById(this.elementId).getContext('2d').restore();\n\n                if (this.timeoutHandle)\n                    window.clearTimeout(this.timeoutHandle);\n\n                this.timeoutHandle = window.setTimeout(this.draw, 250);\n            }\n        }\n    }\n</script>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 380:
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

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(462)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(282),
  /* template */
  __webpack_require__(427),
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

/***/ 411:
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

/***/ 427:
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

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(361);
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

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(373);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT82YjhlKioqKioqKioqKiIsIndlYnBhY2s6Ly8vcGFnZUhlYWRlci52dWU/NTYwYyoqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT9hNTZmKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT8zOGEzKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT80NDEyKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdXVpZC5qcz9hMGM4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0U2VydmljZS5qcz84YzIzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9yZXBvcnRzL3JlcG9ydHMuanM/ZDcyZiIsIndlYnBhY2s6Ly8vZ2F1Z2UudnVlIiwid2VicGFjazovLy92aWV3LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9zdHVicy9nYXVnZU9wdHNTdHViLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy9zdHVicy9iYXJPcHRpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy9zdHVicy9nYXVnZU9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3N0dWJzL2xpbmVPcHRpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy9zdHVicy9waWVPcHRpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0RGF0YVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3ZpZXcudnVlPzk2MDMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlPzY4ZmEiLCJ3ZWJwYWNrOi8vLy4vfi9nYXVnZS5qcy9kaXN0L2dhdWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWU/ZTA0YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWU/OTgyOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWU/M2ZmMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWU/M2QxMCJdLCJuYW1lcyI6WyJtZXRob2RzIiwiZ2VuZXJhdGVVVUlEIiwiZCIsIkRhdGUiLCJnZXRUaW1lIiwid2luZG93IiwicGVyZm9ybWFuY2UiLCJub3ciLCJ1dWlkIiwicmVwbGFjZSIsImMiLCJyIiwiTWF0aCIsInJhbmRvbSIsImZsb29yIiwidG9TdHJpbmciLCJzaG93IiwiaWQiLCJzdWNjZXNzQ2FsYmFjayIsImVycm9yQ2FsbGJhY2siLCJodHRwIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiYm9keSIsImNhdGNoIiwiZXJyb3IiLCJjcmVhdGUiLCJhdGhsZXRlIiwicG9zdCIsImxhdGVzdCIsIm9wdHMiLCJhbmdsZSIsImxpbmVXaWR0aCIsInJhZGl1c1NjYWxlIiwicG9pbnRlciIsImxlbmd0aCIsInN0cm9rZVdpZHRoIiwiY29sb3IiLCJsaW1pdE1heCIsImxpbWl0TWluIiwiY29sb3JTdGFydCIsImNvbG9yU3RvcCIsInN0cm9rZUNvbG9yIiwiZ2VuZXJhdGVHcmFkaWVudCIsImhpZ2hEcGlTdXBwb3J0IiwiYmFyQmFzZU9wdGlvbnMiLCJjaGFydCIsInR5cGUiLCJ0aXRsZSIsInRleHQiLCJ4QXhpcyIsImNhdGVnb3JpZXMiLCJ5QXhpcyIsIm1pbiIsImFsaWduIiwibGFiZWxzIiwib3ZlcmZsb3ciLCJwbG90T3B0aW9ucyIsImJhciIsImRhdGFMYWJlbHMiLCJlbmFibGVkIiwibGVnZW5kIiwibGF5b3V0IiwidmVydGljYWxBbGlnbiIsIngiLCJ5IiwiZmxvYXRpbmciLCJib3JkZXJXaWR0aCIsImJhY2tncm91bmRDb2xvciIsInNoYWRvdyIsImNyZWRpdHMiLCJzZXJpZXMiLCJuYW1lIiwiZGF0YSIsImdhdWdlQmFzZU9wdGlvbnMiLCJoZWlnaHQiLCJtYXgiLCJzdG9wcyIsIm1pbm9yVGlja0ludGVydmFsIiwidGlja0Ftb3VudCIsImZvcm1hdCIsInRvb2x0aXAiLCJ2YWx1ZVN1ZmZpeCIsInBhbmUiLCJzaXplIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiYmFja2dyb3VuZCIsImlubmVyUmFkaXVzIiwib3V0ZXJSYWRpdXMiLCJzaGFwZSIsInNvbGlkZ2F1Z2UiLCJ1c2VIVE1MIiwibGluZUJhc2VPcHRpb25zIiwiZm9ybWF0dGVyIiwidmFsdWUiLCJjcm9zc2hhaXJzIiwic2hhcmVkIiwibGluZSIsIm1hcmtlciIsInJhZGl1cyIsImNyb3AiLCJzdHlsZSIsImZvbnRXZWlnaHQiLCJ0ZXh0T3V0bGluZSIsImZvbnRTaXplIiwiaW5kZXgiLCJzeW1ib2wiLCJwaWVCYXNlT3B0aW9ucyIsInBsb3RCYWNrZ3JvdW5kQ29sb3IiLCJwbG90Qm9yZGVyV2lkdGgiLCJwbG90U2hhZG93IiwicG9pbnRGb3JtYXQiLCJwaWUiLCJhbGxvd1BvaW50U2VsZWN0IiwiY3Vyc29yIiwic2hvd0luTGVnZW5kIiwiY29sb3JCeVBvaW50IiwicG9pbnRWc1RpbWUiLCJvZmZlbnNpdmVEZWZlbnNpdmUiLCJjb21iYXRTdGF0dXMiLCJwYXJyeSIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTs7Ozs7a0JBSUE7c0JBRUE7QUFIQTs7a0JBS0E7eUNBQ0E7dUJBQ0E7QUFHQTtBQU5BO0FB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QUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsU0FBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLGdDQUFnQztBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsOEJBQThCO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDREQUE0RCxnQ0FBZ0M7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFVBQVU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFBQTtBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7O0FDMzBCRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUMvQkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDeE1BLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNsQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJqcy8xMS5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNDEyNWRhMzAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3ZpZXcudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi92aWV3LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTQxMjVkYTMwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3ZpZXcudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB2aWV3LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00MTI1ZGEzMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQxMjVkYTMwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi03ZmNkMDk1NiFzYXNzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtN2ZjZDA5NTYhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwYWdlSGVhZGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03ZmNkMDk1NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdmY2QwOTU2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkiLCI8dGVtcGxhdGU+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50LWhlYWRlclwiPlxuICAgICAgICA8aDE+XG4gICAgICAgICAgICB7e3RpdGxlfX1cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPG9sIGNsYXNzPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cImJyZWFkY3J1bWIuaHJlZlwiIGFjdGl2ZS1jbGFzcz1cImFjdGl2ZVwiIHRhZz1cImxpXCIgdi1mb3I9XCJicmVhZGNydW1iIGluIGJyZWFkY3J1bWJzXCI+XG4gICAgICAgICAgICAgICAge3skdChicmVhZGNydW1iLnRpdGxlKX19XG4gICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICA8L29sPlxuICAgIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cInNjc3NcIiByZWw9XCJzdHlsZXNoZWV0L3Njc3NcIj5cbiAgICAuYWRtaW4taGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiA5N3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAucm93IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJlYWRjcnVtYnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHBhZ2VIZWFkZXIudnVlPzUzNzlmNWNiIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYWRtaW4taGVhZGVyIHtcXG4gIGhlaWdodDogOTdweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5hZG1pbi1oZWFkZXIgLnJvdyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnc2VjdGlvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50LWhlYWRlclwiXG4gIH0sIFtfYygnaDEnLCBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0udGl0bGUpICsgXCJcXG4gICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iXCJcbiAgfSwgX3ZtLl9sKChfdm0uYnJlYWRjcnVtYnMpLCBmdW5jdGlvbihicmVhZGNydW1iKSB7XG4gICAgcmV0dXJuIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidG9cIjogYnJlYWRjcnVtYi5ocmVmLFxuICAgICAgICBcImFjdGl2ZS1jbGFzc1wiOiBcImFjdGl2ZVwiLFxuICAgICAgICBcInRhZ1wiOiBcImxpXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KGJyZWFkY3J1bWIudGl0bGUpKSArIFwiXFxuICAgICAgICBcIildKVxuICB9KSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03ZmNkMDk1NlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImU5ZmVjMWMyXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdlbmVyYXRlVVVJRCgpIHtcbiAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuICAgICAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQgLyAxNik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCkpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3V1aWQuanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHNob3coaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9yZXBvcnRzLycgKyBpZClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbiAgICBjcmVhdGUoYXRobGV0ZSwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAucG9zdCgnL2FwaS9yZXBvcnRzJywgYXRobGV0ZSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbiAgICBsYXRlc3Qoc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3JlcG9ydHMvbGF0ZXN0JylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydFNlcnZpY2UuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgXCJlblwiOiB7XG4gICAgICAgIFwicmVwb3J0c1wiOiB7XG4gICAgICAgICAgICBcImxpc3RcIjogXCJSZXBvcnRzIExpc3RcIixcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IFwiQ3JlYXRlIFJlcG9ydFwiLFxuICAgICAgICAgICAgXCJjcmVhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIlRoZSBSZXBvcnQgd2FzIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICAgICAgICBcIm5vdF9mb3VuZFwiOiBcIlRoZSBSZXBvcnQgZG9lc24ndCBleGlzdFwiLFxuICAgICAgICAgICAgXCJub19zY291dGluZ3NcIjogXCJZb3UgaGF2ZSB0byBhZGQgMSBvciBtb3JlIHNjb3VpdG5nc1wiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmFtZVwiLFxuICAgICAgICAgICAgXCJhZGRfc2NvdXRpbmdcIjogXCJBZGQgU2NvdXRpbmdcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgXCJyZXBvcnRzX3Njb3V0aW5nc1wiOiBcIlJlcG9ydCBTY291dGluZ3NcIixcbiAgICAgICAgICAgIFwicmVwb3J0XCI6IFwiUmVwb3J0XCIsXG4gICAgICAgICAgICBcImFjdGlvbnNcIjogXCJBY3Rpb25zXCIsXG4gICAgICAgICAgICBcInNjb3V0aW5nX2FkZGVkXCI6IFwiU2NvdXRpbmcgQWRkZWRcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJyZXBvcnRzXCI6IHtcbiAgICAgICAgICAgIFwibGlzdFwiOiBcIkxpc3RhIGRlIFJlcG9ydGVzXCIsXG4gICAgICAgICAgICBcImNyZWF0ZVwiOiBcIkNyZWFyIFJlcG9ydGVcIixcbiAgICAgICAgICAgIFwiY3JlYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJFbCBSZXBvcnRlIGZ1ZSBjcmVhZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXG4gICAgICAgICAgICBcIm5vdF9mb3VuZFwiOiBcIkVsIFJlcG9ydGUgbm8gZXhpc3RlXCIsXG4gICAgICAgICAgICBcIm5vX3Njb3V0aW5nc1wiOiBcIkRlYmVzIGFncmVnYXIgMSBvIG3DoXMgc2NvdXRpbmdzXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOb21icmVcIixcbiAgICAgICAgICAgIFwiYWRkX3Njb3V0aW5nXCI6IFwiQcOxYWRpciBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRlc2NyaXBjacOzblwiLFxuICAgICAgICAgICAgXCJyZXBvcnRzX3Njb3V0aW5nc1wiOiBcIlNjb3V0aW5ncyBkZWwgcmVwb3J0ZVwiLFxuICAgICAgICAgICAgXCJyZXBvcnRcIjogXCJSZXBvcnRlXCIsXG4gICAgICAgICAgICBcImFjdGlvbnNcIjogXCJBY2Npb25lc1wiLFxuICAgICAgICAgICAgXCJzY291dGluZ19hZGRlZFwiOiBcIlNjb3V0aW5nIEHDsWFkaWRvXCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9yZXBvcnRzL3JlcG9ydHMuanMiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiA6aWQ9XCJjb250YWluZXJJZFwiIGNsYXNzPVwiZ2F1Z2VcIj5cbiAgICAgICAgPGg0IGNsYXNzPVwidGV4dC1jZW50ZXJcIj48Yj57e3RpdGxlfX08L2I+PC9oND5cbiAgICAgICAgPGNhbnZhcyA6aWQ9XCJlbGVtZW50SWRcIj48L2NhbnZhcz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdvYWwtd3JhcHBlciBjbGVhcmZpeFwiPlxuICAgICAgICAgICAgPHNwYW4gOmlkPVwidGV4dElkXCIgY2xhc3M9XCJnYXVnZS12YWx1ZSBwdWxsLWxlZnRcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdhdWdlLXZhbHVlIHB1bGwtbGVmdFwiPiU8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBpZD1cImdvYWwtdGV4dFwiIGNsYXNzPVwiZ29hbC12YWx1ZSBwdWxsLXJpZ2h0XCI+MTAwJTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gICAgLmdhdWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmdvYWwtd3JhcHBlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHV1aWRNaXhpbiBmcm9tICdiYXNlL21peGlucy91dWlkJ1xuICAgIGltcG9ydCB7b3B0c30gZnJvbSAnLi9zdHVicy9nYXVnZU9wdHNTdHViJ1xuICAgIGV4cG9ydCBkZWZhdWx0e1xuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB2YWx1ZToge3JlcXVpcmVkOiB0cnVlfSxcbiAgICAgICAgICAgIHRpdGxlOiB7ZGVmYXVsdDogJyd9LFxuICAgICAgICAgICAgY29sb3I6IHtyZXF1aXJlZDogdHJ1ZX1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5zZXQodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBnYXVnZTogbnVsbCxcbiAgICAgICAgICAgICAgICBvcHRzOiB7fSxcbiAgICAgICAgICAgICAgICB0aW1lb3V0SGFuZGxlOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBlbGVtZW50SWQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVVVSUQoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRhaW5lcklkKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVVVUlEKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZXh0SWQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVVVSUQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtaXhpbnM6IFt1dWlkTWl4aW5dLFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlZHJhdyk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGRyYXcoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGdhdWdlTGliID0gcmVxdWlyZSgnZ2F1Z2UuanMnKTtcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRhaW5lcklkKS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gd2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGggKyAncHgnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQgKyAncHgnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdHMgPSBfLmNsb25lRGVlcChvcHRzKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdHMuY29sb3JTdGFydCA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZSA9IG5ldyBnYXVnZUxpYi5HYXVnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkpLnNldE9wdGlvbnModGhpcy5vcHRzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLm1heFZhbHVlID0gMTAwOyAvLyBzZXQgbWF4IGdhdWdlIHZhbHVlXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5zZXRNaW5WYWx1ZSgwKTsgIC8vIFByZWZlciBzZXR0ZXIgb3ZlciBnYXVnZS5taW5WYWx1ZSA9IDBcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLmFuaW1hdGlvblNwZWVkID0gNjU7IC8vIHNldCBhbmltYXRpb24gc3BlZWQgKDMyIGlzIGRlZmF1bHQgdmFsdWUpXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5zZXQodGhpcy52YWx1ZSk7IC8vIHNldCBhY3R1YWwgdmFsdWVcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLnNldFRleHRGaWVsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnRleHRJZCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZHJhdygpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5zYXZlKCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLmNsZWFyUmVjdCgwLCAwLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5jYW52YXMud2lkdGgsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLnJlc3RvcmUoKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVvdXRIYW5kbGUpXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SGFuZGxlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dEhhbmRsZSA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuZHJhdywgMjUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBnYXVnZS52dWU/NTZjNGJiOWEiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBhZ2UtaGVhZGVyIDp0aXRsZT1cIiR0KCdyZXBvcnRzLnJlcG9ydCcpXCIgOmJyZWFkY3J1bWJzPVwiYnJlYWRjcnVtYnNcIj48L3BhZ2UtaGVhZGVyPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQgcmVwb3J0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXRleHRcIj5FRkZFQ1RJVkVORVNTPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImRlc2NyaXB0aW9uLWhlYWRlclwiPnt7ZWZmZWN0aXZlbmVzcy5wZXJjZW50YWdlfX0lPC9oNT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tlZmZlY3RpdmVuZXNzLnZpY3Rvcmllc319VlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWZmZWN0aXZlbmVzcy5kZWZlYXRzfX1WXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5kZXNjcmlwdGlvbi1ibG9jayAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNvbCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMyBjb2wteHMtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi10ZXh0XCI+VkFMSUQ8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJkZXNjcmlwdGlvbi1oZWFkZXJcIj57e3ZhbGlkLnBlcmNlbnRhZ2V9fSU8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbGlkLnZhbGlkfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbGlkLm5vVmFsaWR9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmRlc2NyaXB0aW9uLWJsb2NrIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY29sIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXRleHRcIj5BVkVSQUdFPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImRlc2NyaXB0aW9uLWhlYWRlclwiPnt7YXZlcmFnZS5wZXJjZW50YWdlfX0lPC9oNT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3thdmVyYWdlLmdpdmVufX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2F2ZXJhZ2UucmVjZWl2ZWR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uZGVzY3JpcHRpb24tYmxvY2sgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMyBjb2wteHMtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi10ZXh0XCI+UEVSRkVDVElPTjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJkZXNjcmlwdGlvbi1oZWFkZXJcIj57e3BlcmZlY3Rpb24ucGVyY2VudGFnZX19JTwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cGVyZmVjdGlvbi5wZXJmZWN0fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3BlcmZlY3Rpb24uaW1wZXJmZWN0fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tdGV4dFwiPlRJTUUgQ09OU1VNRTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImRlc2NyaXB0aW9uLWhlYWRlclwiPnt7dGltZUNvbnN1bWVkLnBlcmNlbnRhZ2V9fSU8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RpbWVDb25zdW1lZC50aW1lQ29uc3VtZWR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dGltZUNvbnN1bWVkLnRpbWVJZGxlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmRlc2NyaXB0aW9uLWJsb2NrIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi10YWJzLWN1c3RvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIDpjbGFzcz1cInsnYWN0aXZlJzppbmRleCA9PSAwfVwiIHYtZm9yPVwiKHBvaW50VnNUaW1lR3JhcGgsaW5kZXgpIGluIHBvaW50VnNUaW1lR3JhcGhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiJyMnK3BvaW50VnNUaW1lR3JhcGguaWRcIiBkYXRhLXRvZ2dsZT1cInRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twb2ludFZzVGltZUdyYXBoLm5hbWV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmVcIiA6Y2xhc3M9XCJ7J2FjdGl2ZSc6aW5kZXggPT0gMH1cIiA6aWQ9XCJwb2ludFZzVGltZUdyYXBoLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHBvaW50VnNUaW1lR3JhcGgsaW5kZXgpIGluIHBvaW50VnNUaW1lR3JhcGhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoaWdoY2hhcnRzIDpyZWY9XCJwb2ludFZzVGltZUdyYXBoLmlkXCIgOm9wdGlvbnM9XCJwb2ludFZzVGltZUdyYXBoLm9wdGlvbnNcIj48L2hpZ2hjaGFydHM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnYXVnZSA6dmFsdWU9XCJvZmZlbnNpdmVHYXVnZS5kYXRhXCIgY29sb3I9XCJncmVlblwiIHRpdGxlPVwiQ291bnRlcm9mZmVuc2l2ZVwiPjwvZ2F1Z2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnYXVnZSA6dmFsdWU9XCJkZWZlbnNpdmVHYXVnZS5kYXRhXCIgY29sb3I9XCJ5ZWxsb3dcIiB0aXRsZT1cIkRlZmVuc2l2ZVwiPjwvZ2F1Z2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnYXVnZSA6dmFsdWU9XCJjb3VudGVyT2ZmZW5zaXZlR2F1Z2UuZGF0YVwiIGNvbG9yPVwicmVkXCIgdGl0bGU9XCJPZmZlbnNpdmVcIj48L2dhdWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICA8aGlnaGNoYXJ0cyA6b3B0aW9ucz1cInBpZVwiPjwvaGlnaGNoYXJ0cz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoaWdoY2hhcnRzIDpvcHRpb25zPVwiYmFyXCI+PC9oaWdoY2hhcnRzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGU+XG4gICAgLnJlcG9ydCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5ib3JkZXItcmlnaHQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNjY2O1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbi10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24tcGVyY2VudGFnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uLWhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG48L3N0eWxlPlxuPHNjcmlwdCB0eXBlPVwidGV4dC9iYWJlbFwiPlxuICAgIGltcG9ydCBwYWdlSGVhZGVyIGZyb20gJ2Jhc2UvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWUnXG4gICAgaW1wb3J0IGdhdWdlIGZyb20gJ2Jhc2UvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZSdcbiAgICBpbXBvcnQgcmVwb3J0c0xvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL3JlcG9ydHMvcmVwb3J0cy5qcyc7XG4gICAgaW1wb3J0IHJlcG9ydFNlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvcmVwb3J0cy9yZXBvcnRTZXJ2aWNlJ1xuICAgIGltcG9ydCByZXBvcnREYXRhU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydERhdGFTZXJ2aWNlJ1xuICAgIGltcG9ydCB1dWlkTWl4aW4gZnJvbSAnYmFzZS9taXhpbnMvdXVpZCdcbiAgICBpbXBvcnQge2xpbmVCYXNlT3B0aW9uc30gZnJvbSAnLi9zdHVicy9saW5lT3B0aW9ucydcbiAgICBpbXBvcnQge3BpZUJhc2VPcHRpb25zfSBmcm9tICcuL3N0dWJzL3BpZU9wdGlvbnMnXG4gICAgaW1wb3J0IHtiYXJCYXNlT3B0aW9uc30gZnJvbSAnLi9zdHVicy9iYXJPcHRpb25zJ1xuICAgIGltcG9ydCB7Z2F1Z2VCYXNlT3B0aW9uc30gZnJvbSAnLi9zdHVicy9nYXVnZU9wdGlvbnMnXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGxvY2FsZXM6IHJlcG9ydHNMb2NhbGVzLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBwYWdlSGVhZGVyLFxuICAgICAgICAgICAgZ2F1Z2VcbiAgICAgICAgfSxcbiAgICAgICAgbWl4aW5zOiBbdXVpZE1peGluXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByZXBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICBwb2ludFZzVGltZUdyYXBoczogW10sXG4gICAgICAgICAgICAgICAgcGllOiB7fSxcbiAgICAgICAgICAgICAgICBiYXI6IHt9LFxuICAgICAgICAgICAgICAgIGNvdW50ZXJPZmZlbnNpdmVHYXVnZToge2RhdGE6IDB9LFxuICAgICAgICAgICAgICAgIG9mZmVuc2l2ZUdhdWdlOiB7ZGF0YTogMH0sXG4gICAgICAgICAgICAgICAgZGVmZW5zaXZlR2F1Z2U6IHtkYXRhOiAwfSxcbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVuZXNzOiB7fSxcbiAgICAgICAgICAgICAgICB2YWxpZDoge30sXG4gICAgICAgICAgICAgICAgYXZlcmFnZToge30sXG4gICAgICAgICAgICAgICAgcGVyZmVjdGlvbjoge30sXG4gICAgICAgICAgICAgICAgdGltZUNvbnN1bWVkOiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgYnJlYWRjcnVtYnMoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL2Rhc2hib2FyZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy4kdCgnYWRtaW4uaG9tZScpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvcmVwb3J0cy8nICsgdGhpcy4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdhZG1pbi52aWV3J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZCgpe1xuICAgICAgICAgICAgaWYgKCF0aGlzLiRhdXRoLnVzZXIoKS5zdXBlclVzZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb290LmVycm9yVG9hc3QoJ05vIHRpZW5lcyBwZXJtaXNvIHBhcmEgdmVyIGVsIGluZm9ybWUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXBvcnRzLmxpc3QnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcG9ydFNlcnZpY2Uuc2hvdyh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIHJlcG9ydERhdGFTZXJ2aWNlLnBvaW50VnNUaW1lKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ3JhcGggPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChkYXRhLCAoZ3JhcGhEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmdlbmVyYXRlVVVJRCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBncmFwaERhdGEubGVmdEF0aGxldGUgKyAnIFZTICcgKyBncmFwaERhdGEucmlnaHRBdGhsZXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfLmNsb25lRGVlcChsaW5lQmFzZU9wdGlvbnMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLm9wdGlvbnMueEF4aXMuY2F0ZWdvcmllcyA9IGdyYXBoRGF0YS50aW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUub3B0aW9ucy5zZXJpZXNbMF0uZGF0YSA9IGdyYXBoRGF0YS5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUub3B0aW9ucy5zZXJpZXNbMV0uZGF0YSA9IGdyYXBoRGF0YS5yaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLm9wdGlvbnMuc2VyaWVzWzBdLm5hbWUgPSBncmFwaERhdGEubGVmdEF0aGxldGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5vcHRpb25zLnNlcmllc1sxXS5uYW1lID0gZ3JhcGhEYXRhLnJpZ2h0QXRobGV0ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9pbnRWc1RpbWVHcmFwaHMgPSBncmFwaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJ2FbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5vbignc2hvd24uYnMudGFiJywgKGUpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goc2VsZi5wb2ludFZzVGltZUdyYXBocywgKGdyYXBoRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcmVmc1tncmFwaERhdGEuaWRdWzBdLmNoYXJ0LnJlZmxvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXBvcnREYXRhU2VydmljZS5vZmZlbnNpdmVEZWZlbnNpdmUodGhpcy4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRlck9mZmVuc2l2ZUdhdWdlLmRhdGEgPSBkYXRhLmNvdW50ZXJPZmZlbnNpdmUuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2ZmZW5zaXZlR2F1Z2UuZGF0YSA9IGRhdGEub2ZmZW5zaXZlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmVuc2l2ZUdhdWdlLmRhdGEgPSBkYXRhLmRlZmVuc2l2ZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZXBvcnREYXRhU2VydmljZS5jb21iYXRTdGF0dXModGhpcy4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwaWUgPSBfLmNsb25lRGVlcChwaWVCYXNlT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaWUuc2VyaWVzWzBdLmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5waWUgPSBwaWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXBvcnREYXRhU2VydmljZS5wYXJyeSh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmNhdGVnb3JpZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmFyID0gXy5jbG9uZURlZXAoYmFyQmFzZU9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFyLnNlcmllc1swXS5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhci54QXhpcy5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFyID0gYmFyO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZXBvcnREYXRhU2VydmljZS5zdW1tYXJ5KHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdGl2ZW5lc3MgPSBkYXRhLmVmZmVjdGl2ZW5lc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkID0gZGF0YS52YWxpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXZlcmFnZSA9IGRhdGEuYXZlcmFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyZmVjdGlvbiA9IGRhdGEucGVyZmVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUNvbnN1bWVkID0gZGF0YS5jb25zdW1lZFRpbWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB2aWV3LnZ1ZT80MThmNDcyYyIsImV4cG9ydCBjb25zdCBvcHRzID0ge1xuICAgIGFuZ2xlOiAtMC4wMiwgLy8gVGhlIHNwYW4gb2YgdGhlIGdhdWdlIGFyY1xuICAgIGxpbmVXaWR0aDogMC40NCwgLy8gVGhlIGxpbmUgdGhpY2tuZXNzXG4gICAgcmFkaXVzU2NhbGU6IDEsIC8vIFJlbGF0aXZlIHJhZGl1c1xuICAgIHBvaW50ZXI6IHtcbiAgICAgICAgbGVuZ3RoOiAwLjYsIC8vIC8vIFJlbGF0aXZlIHRvIGdhdWdlIHJhZGl1c1xuICAgICAgICBzdHJva2VXaWR0aDogMC4wMzUsIC8vIFRoZSB0aGlja25lc3NcbiAgICAgICAgY29sb3I6ICcjMDAwMDAwJyAvLyBGaWxsIGNvbG9yXG4gICAgfSxcbiAgICBsaW1pdE1heDogZmFsc2UsICAgICAvLyBJZiBmYWxzZSwgdGhlIG1heCB2YWx1ZSBvZiB0aGUgZ2F1Z2Ugd2lsbCBiZSB1cGRhdGVkIGlmIHZhbHVlIHN1cnBhc3MgbWF4XG4gICAgbGltaXRNaW46IGZhbHNlLCAgICAgLy8gSWYgdHJ1ZSwgdGhlIG1pbiB2YWx1ZSBvZiB0aGUgZ2F1Z2Ugd2lsbCBiZSBmaXhlZCB1bmxlc3MgeW91IHNldCBpdCBtYW51YWxseVxuICAgIGNvbG9yU3RhcnQ6ICcjNkZBRENGJywgICAvLyBDb2xvcnNcbiAgICBjb2xvclN0b3A6ICcjOEZDMERBJywgICAgLy8ganVzdCBleHBlcmltZW50IHdpdGggdGhlbVxuICAgIHN0cm9rZUNvbG9yOiAnI0UwRTBFMCcsICAvLyB0byBzZWUgd2hpY2ggb25lcyB3b3JrIGJlc3QgZm9yIHlvdVxuICAgIGdlbmVyYXRlR3JhZGllbnQ6IHRydWUsXG4gICAgaGlnaERwaVN1cHBvcnQ6IHRydWUgICAgIC8vIEhpZ2ggcmVzb2x1dGlvbiBzdXBwb3J0XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvc3R1YnMvZ2F1Z2VPcHRzU3R1Yi5qcyIsImV4cG9ydCBjb25zdCBiYXJCYXNlT3B0aW9ucyA9IHtcbiAgICBjaGFydDoge1xuICAgICAgICB0eXBlOiAnYmFyJ1xuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgICAgdGV4dDogJ1BhcnJ5J1xuICAgIH0sXG4gICAgeEF4aXM6IHtcbiAgICAgICAgY2F0ZWdvcmllczogWycxMicsICcxMScsICcxMCcsICc5JywgJzgnLCAnNycsICc2JywgJzUnLCAnNCcsICczJywgJzInLCAnMSddLFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogJ0JvZHkgWm9uZSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgeUF4aXM6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogJ051bWJlciBvZiBQYXJyeXMnLFxuICAgICAgICAgICAgYWxpZ246ICdoaWdoJ1xuICAgICAgICB9LFxuICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiAnanVzdGlmeSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgYmFyOiB7XG4gICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgICAgbGF5b3V0OiAndmVydGljYWwnLFxuICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgIHg6IC00MCxcbiAgICAgICAgeTogODAsXG4gICAgICAgIGZsb2F0aW5nOiB0cnVlLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRkZGRicsXG4gICAgICAgIHNoYWRvdzogdHJ1ZVxuICAgIH0sXG4gICAgY3JlZGl0czoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgIH0sXG4gICAgc2VyaWVzOiBbe1xuICAgICAgICBuYW1lOiAnUGFycnkgTnVtYmVycycsXG4gICAgICAgIGRhdGE6IFsxLCAwLCAyLCAyLCAwLCAzLCA0LCAwLCAwLCAxLCAwLCAwXVxuICAgIH1dXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3N0dWJzL2Jhck9wdGlvbnMuanMiLCJleHBvcnQgY29uc3QgZ2F1Z2VCYXNlT3B0aW9ucyA9IHtcbiAgICBjaGFydDoge1xuICAgICAgICB0eXBlOiAnc29saWRnYXVnZScsXG4gICAgICAgIGhlaWdodDogMTUwXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMTAwLFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogbnVsbCxcbiAgICAgICAgICAgIHk6IC03MFxuXG4gICAgICAgIH0sXG4gICAgICAgIHN0b3BzOiBbXG4gICAgICAgICAgICBbMC4xLCAnIzU1QkYzQiddIC8vIGdyZWVuXG4gICAgICAgIF0sXG4gICAgICAgIGxpbmVXaWR0aDogMCxcbiAgICAgICAgbWlub3JUaWNrSW50ZXJ2YWw6IG51bGwsXG4gICAgICAgIHRpY2tBbW91bnQ6IDIsXG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjcmVkaXRzOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgfSxcblxuICAgIHNlcmllczogW3tcbiAgICAgICAgbmFtZTogbnVsbCxcbiAgICAgICAgZGF0YTogWzgwXSxcbiAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgZm9ybWF0OiAnPGRpdiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTNweDtjb2xvcjonICtcbiAgICAgICAgICAgICgnYmxhY2snKSArICdcIj57eX0lPC9zcGFuPjxici8+JyxcbiAgICAgICAgICAgIHk6IC0yNVxuICAgICAgICB9LFxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICB2YWx1ZVN1ZmZpeDogJyUnXG4gICAgICAgIH1cbiAgICB9XSxcbiAgICB0aXRsZToge1xuICAgICAgICB0ZXh0OiAnRWZlY3RpdmlkYWQnXG4gICAgfSxcblxuICAgIHBhbmU6IHtcbiAgICAgICAgc2l6ZTogJzE1MCUnLFxuICAgICAgICBzdGFydEFuZ2xlOiAtOTAsXG4gICAgICAgIGVuZEFuZ2xlOiA5MCxcbiAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0VFRScsXG4gICAgICAgICAgICBpbm5lclJhZGl1czogJzYwJScsXG4gICAgICAgICAgICBvdXRlclJhZGl1czogJzEwMCUnLFxuICAgICAgICAgICAgc2hhcGU6ICdhcmMnXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdG9vbHRpcDoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgIH0sXG5cbiAgICAvLyB0aGUgdmFsdWUgYXhpc1xuICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgIHNvbGlkZ2F1Z2U6IHtcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICB5OiA1LFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgICAgICAgICAgICAgIHVzZUhUTUw6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvc3R1YnMvZ2F1Z2VPcHRpb25zLmpzIiwiZXhwb3J0IGNvbnN0IGxpbmVCYXNlT3B0aW9ucyA9IHtcbiAgICBjaGFydDoge1xuICAgICAgICB0eXBlOiAnbGluZSdcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICAgIHRleHQ6ICdQb2ludHMgdnMgVGltZSdcbiAgICB9LFxuICAgIHhBeGlzOiB7XG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiAnVGltZSdcbiAgICAgICAgfSxcbiAgICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgKyAnbWluJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgeUF4aXM6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6ICdQb2ludHMnXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgKyAncHQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB0b29sdGlwOiB7XG4gICAgICAgIGNyb3NzaGFpcnM6IHRydWUsXG4gICAgICAgIHNoYXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgbGluZToge1xuICAgICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICAgICAgcmFkaXVzOiA4LFxuICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgICAgICAgICAgIGNyb3A6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnbm9uZScsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0T3V0bGluZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXJpZXM6IFt7XG4gICAgICAgIG5hbWU6ICdQZWRybyBHb3JyaW4nLFxuICAgICAgICBjb2xvcjogJyNmZjY2MDAnLFxuICAgICAgICBpbmRleDogMixcbiAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICAgICAgcmFkaXVzOiAxMlxuXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IFtdXG5cbiAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdKYXZpZXIgQmFzdGlkYXMnLFxuICAgICAgICBjb2xvcjogJyM2NGI1ZjYnLFxuICAgICAgICBpbmRleDogMSxcblxuICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ2NpcmNsZScsXG4gICAgICAgICAgICByYWRpdXM6IDEyXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IFtdXG4gICAgfV1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvc3R1YnMvbGluZU9wdGlvbnMuanMiLCJleHBvcnQgY29uc3QgcGllQmFzZU9wdGlvbnMgPSB7XG4gICAgY2hhcnQ6IHtcbiAgICAgICAgcGxvdEJhY2tncm91bmRDb2xvcjogbnVsbCxcbiAgICAgICAgcGxvdEJvcmRlcldpZHRoOiBudWxsLFxuICAgICAgICBwbG90U2hhZG93OiBmYWxzZSxcbiAgICAgICAgdHlwZTogJ3BpZSdcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICAgIHRleHQ6ICdDb21iYXQgU3RhdHVzJ1xuICAgIH0sXG4gICAgdG9vbHRpcDoge1xuICAgICAgICBwb2ludEZvcm1hdDogJ3tzZXJpZXMubmFtZX06IDxiPntwb2ludC5wZXJjZW50YWdlOi4xZn0lPC9iPidcbiAgICB9LFxuICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgIHBpZToge1xuICAgICAgICAgICAgYWxsb3dQb2ludFNlbGVjdDogdHJ1ZSxcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogJzxiPntwb2ludC5uYW1lfTwvYj46IHtwb2ludC5wZXJjZW50YWdlOi4xZn0gJScsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0luTGVnZW5kOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNlcmllczogW3tcbiAgICAgICAgbmFtZTogJ1BlcmNlbnQnLFxuICAgICAgICBjb2xvckJ5UG9pbnQ6IHRydWUsXG4gICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICBuYW1lOiAnRVFVQUwnLFxuICAgICAgICAgICAgeTogMjBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ1VQJyxcbiAgICAgICAgICAgIHk6IDYwLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnRE9XTicsXG4gICAgICAgICAgICB5OiAyMFxuICAgICAgICB9XVxuICAgIH1dXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3N0dWJzL3BpZU9wdGlvbnMuanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvaW50VnNUaW1lKGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvcmVwb3J0cy8nICsgaWQgKyAnL3BvaW50LXZzLXRpbWUnKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcbiAgICB9LFxuICAgIG9mZmVuc2l2ZURlZmVuc2l2ZShpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3JlcG9ydHMvJyArIGlkICsgJy9vZmZlbnNpdmUtZGVmZW5zaXZlJylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbiAgICBjb21iYXRTdGF0dXMoaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9yZXBvcnRzLycgKyBpZCArICcvY29tYmF0LXN0YXR1cycpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG4gICAgcGFycnkoaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9yZXBvcnRzLycgKyBpZCArICcvcGFycnknKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcbiAgICB9LFxuICAgIHN1bW1hcnkoaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9yZXBvcnRzLycgKyBpZCArICcvc3VtbWFyeScpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydERhdGFTZXJ2aWNlLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucmVwb3J0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5ib3JkZXItcmlnaHQge1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNjY2O1xcbn1cXG4uZGVzY3JpcHRpb24tdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5kZXNjcmlwdGlvbi1wZXJjZW50YWdlIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmRlc2NyaXB0aW9uLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3ZpZXcudnVlPzQxOGY0NzJjXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE2S0E7SUFDQSx3QkFBQTtDQUNBO0FBRUE7SUFDQSw2QkFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJ2aWV3LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8cGFnZS1oZWFkZXIgOnRpdGxlPVxcXCIkdCgncmVwb3J0cy5yZXBvcnQnKVxcXCIgOmJyZWFkY3J1bWJzPVxcXCJicmVhZGNydW1ic1xcXCI+PC9wYWdlLWhlYWRlcj5cXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJjb250ZW50IHJlcG9ydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC0xMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zIGNvbC14cy02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi10ZXh0XFxcIj5FRkZFQ1RJVkVORVNTPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1oZWFkZXJcXFwiPnt7ZWZmZWN0aXZlbmVzcy5wZXJjZW50YWdlfX0lPC9oNT5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LWxlZnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWZmZWN0aXZlbmVzcy52aWN0b3JpZXN9fVZcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWZmZWN0aXZlbmVzcy5kZWZlYXRzfX1WXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmRlc2NyaXB0aW9uLWJsb2NrIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jb2wgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLXhzLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXRleHRcXFwiPlZBTElEPC9zcGFuPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1oZWFkZXJcXFwiPnt7dmFsaWQucGVyY2VudGFnZX19JTwvaDU+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgdGV4dC1sZWZ0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbGlkLnZhbGlkfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsaWQubm9WYWxpZH19XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmRlc2NyaXB0aW9uLWJsb2NrIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jb2wgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLXhzLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXRleHRcXFwiPkFWRVJBR0U8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWhlYWRlclxcXCI+e3thdmVyYWdlLnBlcmNlbnRhZ2V9fSU8L2g1PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtbGVmdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3thdmVyYWdlLmdpdmVufX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7YXZlcmFnZS5yZWNlaXZlZH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmRlc2NyaXB0aW9uLWJsb2NrIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zIGNvbC14cy02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi10ZXh0XFxcIj5QRVJGRUNUSU9OPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1oZWFkZXJcXFwiPnt7cGVyZmVjdGlvbi5wZXJjZW50YWdlfX0lPC9oNT5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LWxlZnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cGVyZmVjdGlvbi5wZXJmZWN0fX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cGVyZmVjdGlvbi5pbXBlcmZlY3R9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi10ZXh0XFxcIj5USU1FIENPTlNVTUU8L3NwYW4+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWhlYWRlclxcXCI+e3t0aW1lQ29uc3VtZWQucGVyY2VudGFnZX19JTwvaDU+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgdGV4dC1sZWZ0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RpbWVDb25zdW1lZC50aW1lQ29uc3VtZWR9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0aW1lQ29uc3VtZWQudGltZUlkbGV9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5kZXNjcmlwdGlvbi1ibG9jayAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdi10YWJzLWN1c3RvbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgOmNsYXNzPVxcXCJ7J2FjdGl2ZSc6aW5kZXggPT0gMH1cXFwiIHYtZm9yPVxcXCIocG9pbnRWc1RpbWVHcmFwaCxpbmRleCkgaW4gcG9pbnRWc1RpbWVHcmFwaHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XFxcIicjJytwb2ludFZzVGltZUdyYXBoLmlkXFxcIiBkYXRhLXRvZ2dsZT1cXFwidGFiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cG9pbnRWc1RpbWVHcmFwaC5uYW1lfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYi1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiLXBhbmVcXFwiIDpjbGFzcz1cXFwieydhY3RpdmUnOmluZGV4ID09IDB9XFxcIiA6aWQ9XFxcInBvaW50VnNUaW1lR3JhcGguaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcIihwb2ludFZzVGltZUdyYXBoLGluZGV4KSBpbiBwb2ludFZzVGltZUdyYXBoc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGlnaGNoYXJ0cyA6cmVmPVxcXCJwb2ludFZzVGltZUdyYXBoLmlkXFxcIiA6b3B0aW9ucz1cXFwicG9pbnRWc1RpbWVHcmFwaC5vcHRpb25zXFxcIj48L2hpZ2hjaGFydHM+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGdhdWdlIDp2YWx1ZT1cXFwib2ZmZW5zaXZlR2F1Z2UuZGF0YVxcXCIgY29sb3I9XFxcImdyZWVuXFxcIiB0aXRsZT1cXFwiQ291bnRlcm9mZmVuc2l2ZVxcXCI+PC9nYXVnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnYXVnZSA6dmFsdWU9XFxcImRlZmVuc2l2ZUdhdWdlLmRhdGFcXFwiIGNvbG9yPVxcXCJ5ZWxsb3dcXFwiIHRpdGxlPVxcXCJEZWZlbnNpdmVcXFwiPjwvZ2F1Z2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Z2F1Z2UgOnZhbHVlPVxcXCJjb3VudGVyT2ZmZW5zaXZlR2F1Z2UuZGF0YVxcXCIgY29sb3I9XFxcInJlZFxcXCIgdGl0bGU9XFxcIk9mZmVuc2l2ZVxcXCI+PC9nYXVnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLThcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGhpZ2hjaGFydHMgOm9wdGlvbnM9XFxcInBpZVxcXCI+PC9oaWdoY2hhcnRzPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoaWdoY2hhcnRzIDpvcHRpb25zPVxcXCJiYXJcXFwiPjwvaGlnaGNoYXJ0cz5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L3NlY3Rpb24+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHN0eWxlPlxcbiAgICAucmVwb3J0IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuXFxuICAgIC5ib3JkZXItcmlnaHQge1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzY2NjtcXG4gICAgfVxcblxcbiAgICAuZGVzY3JpcHRpb24tdGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcblxcbiAgICAuZGVzY3JpcHRpb24tcGVyY2VudGFnZSB7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcblxcbiAgICAuZGVzY3JpcHRpb24taGVhZGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG48c2NyaXB0IHR5cGU9XFxcInRleHQvYmFiZWxcXFwiPlxcbiAgICBpbXBvcnQgcGFnZUhlYWRlciBmcm9tICdiYXNlL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlJ1xcbiAgICBpbXBvcnQgZ2F1Z2UgZnJvbSAnYmFzZS9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlJ1xcbiAgICBpbXBvcnQgcmVwb3J0c0xvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL3JlcG9ydHMvcmVwb3J0cy5qcyc7XFxuICAgIGltcG9ydCByZXBvcnRTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0U2VydmljZSdcXG4gICAgaW1wb3J0IHJlcG9ydERhdGFTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0RGF0YVNlcnZpY2UnXFxuICAgIGltcG9ydCB1dWlkTWl4aW4gZnJvbSAnYmFzZS9taXhpbnMvdXVpZCdcXG4gICAgaW1wb3J0IHtsaW5lQmFzZU9wdGlvbnN9IGZyb20gJy4vc3R1YnMvbGluZU9wdGlvbnMnXFxuICAgIGltcG9ydCB7cGllQmFzZU9wdGlvbnN9IGZyb20gJy4vc3R1YnMvcGllT3B0aW9ucydcXG4gICAgaW1wb3J0IHtiYXJCYXNlT3B0aW9uc30gZnJvbSAnLi9zdHVicy9iYXJPcHRpb25zJ1xcbiAgICBpbXBvcnQge2dhdWdlQmFzZU9wdGlvbnN9IGZyb20gJy4vc3R1YnMvZ2F1Z2VPcHRpb25zJ1xcbiAgICBleHBvcnQgZGVmYXVsdHtcXG4gICAgICAgIGxvY2FsZXM6IHJlcG9ydHNMb2NhbGVzLFxcbiAgICAgICAgY29tcG9uZW50czoge1xcbiAgICAgICAgICAgIHBhZ2VIZWFkZXIsXFxuICAgICAgICAgICAgZ2F1Z2VcXG4gICAgICAgIH0sXFxuICAgICAgICBtaXhpbnM6IFt1dWlkTWl4aW5dLFxcbiAgICAgICAgZGF0YSgpe1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIHJlcG9ydHM6IHt9LFxcbiAgICAgICAgICAgICAgICBwb2ludFZzVGltZUdyYXBoczogW10sXFxuICAgICAgICAgICAgICAgIHBpZToge30sXFxuICAgICAgICAgICAgICAgIGJhcjoge30sXFxuICAgICAgICAgICAgICAgIGNvdW50ZXJPZmZlbnNpdmVHYXVnZToge2RhdGE6IDB9LFxcbiAgICAgICAgICAgICAgICBvZmZlbnNpdmVHYXVnZToge2RhdGE6IDB9LFxcbiAgICAgICAgICAgICAgICBkZWZlbnNpdmVHYXVnZToge2RhdGE6IDB9LFxcbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVuZXNzOiB7fSxcXG4gICAgICAgICAgICAgICAgdmFsaWQ6IHt9LFxcbiAgICAgICAgICAgICAgICBhdmVyYWdlOiB7fSxcXG4gICAgICAgICAgICAgICAgcGVyZmVjdGlvbjoge30sXFxuICAgICAgICAgICAgICAgIHRpbWVDb25zdW1lZDoge31cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgICAgICBicmVhZGNydW1icygpe1xcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xcbiAgICAgICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvZGFzaGJvYXJkJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy4kdCgnYWRtaW4uaG9tZScpXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvcmVwb3J0cy8nICsgdGhpcy4kcm91dGUucGFyYW1zLmlkLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnYWRtaW4udmlldydcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgXVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9LFxcbiAgICAgICAgY3JlYXRlZCgpe1xcbiAgICAgICAgICAgIGlmICghdGhpcy4kYXV0aC51c2VyKCkuc3VwZXJVc2VyKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuZXJyb3JUb2FzdCgnTm8gdGllbmVzIHBlcm1pc28gcGFyYSB2ZXIgZWwgaW5mb3JtZScpO1xcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVwb3J0cy5saXN0JyxcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICByZXBvcnRTZXJ2aWNlLnNob3codGhpcy4kcm91dGUucGFyYW1zLmlkLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0ID0gcmVzcG9uc2UuZGF0YTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBtb3VudGVkKCl7XFxuICAgICAgICAgICAgcmVwb3J0RGF0YVNlcnZpY2UucG9pbnRWc1RpbWUodGhpcy4kcm91dGUucGFyYW1zLmlkLFxcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBncmFwaCA9IFtdO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChkYXRhLCAoZ3JhcGhEYXRhKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaW5lID0ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuZ2VuZXJhdGVVVUlEKCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBncmFwaERhdGEubGVmdEF0aGxldGUgKyAnIFZTICcgKyBncmFwaERhdGEucmlnaHRBdGhsZXRlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogXy5jbG9uZURlZXAobGluZUJhc2VPcHRpb25zKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLm9wdGlvbnMueEF4aXMuY2F0ZWdvcmllcyA9IGdyYXBoRGF0YS50aW1lO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLm9wdGlvbnMuc2VyaWVzWzBdLmRhdGEgPSBncmFwaERhdGEubGVmdDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5vcHRpb25zLnNlcmllc1sxXS5kYXRhID0gZ3JhcGhEYXRhLnJpZ2h0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLm9wdGlvbnMuc2VyaWVzWzBdLm5hbWUgPSBncmFwaERhdGEubGVmdEF0aGxldGU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUub3B0aW9ucy5zZXJpZXNbMV0ubmFtZSA9IGdyYXBoRGF0YS5yaWdodEF0aGxldGU7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoLnB1c2gobGluZSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludFZzVGltZUdyYXBocyA9IGdyYXBoO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKT0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnYVtkYXRhLXRvZ2dsZT1cXFwidGFiXFxcIl0nKS5vbignc2hvd24uYnMudGFiJywgKGUpPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKHNlbGYucG9pbnRWc1RpbWVHcmFwaHMsIChncmFwaERhdGEpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyZWZzW2dyYXBoRGF0YS5pZF1bMF0uY2hhcnQucmVmbG93KCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcblxcbiAgICAgICAgICAgIHJlcG9ydERhdGFTZXJ2aWNlLm9mZmVuc2l2ZURlZmVuc2l2ZSh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXFxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudGVyT2ZmZW5zaXZlR2F1Z2UuZGF0YSA9IGRhdGEuY291bnRlck9mZmVuc2l2ZS5kYXRhO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2ZmZW5zaXZlR2F1Z2UuZGF0YSA9IGRhdGEub2ZmZW5zaXZlLmRhdGE7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZlbnNpdmVHYXVnZS5kYXRhID0gZGF0YS5kZWZlbnNpdmUuZGF0YTtcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxuXFxuICAgICAgICAgICAgcmVwb3J0RGF0YVNlcnZpY2UuY29tYmF0U3RhdHVzKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGllID0gXy5jbG9uZURlZXAocGllQmFzZU9wdGlvbnMpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZS5zZXJpZXNbMF0uZGF0YSA9IGRhdGE7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5waWUgPSBwaWU7XFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XFxuICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIHJlcG9ydERhdGFTZXJ2aWNlLnBhcnJ5KHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZS5kYXRhO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yaWVzID0gcmVzcG9uc2UuY2F0ZWdvcmllcztcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmFyID0gXy5jbG9uZURlZXAoYmFyQmFzZU9wdGlvbnMpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhci5zZXJpZXNbMF0uZGF0YSA9IGRhdGE7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyLnhBeGlzLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFyID0gYmFyO1xcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xcbiAgICAgICAgICAgICAgICAgICAgfSlcXG5cXG4gICAgICAgICAgICByZXBvcnREYXRhU2VydmljZS5zdW1tYXJ5KHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdGl2ZW5lc3MgPSBkYXRhLmVmZmVjdGl2ZW5lc3M7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZCA9IGRhdGEudmFsaWQ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdmVyYWdlID0gZGF0YS5hdmVyYWdlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyZmVjdGlvbiA9IGRhdGEucGVyZmVjdGlvbjtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb25zdW1lZCA9IGRhdGEuY29uc3VtZWRUaW1lXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XFxuICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00MTI1ZGEzMCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5nYXVnZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uZ29hbC13cmFwcGVyIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWU/NTZjNGJiOWFcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWFBO0lBQ0Esd0JBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJnYXVnZS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IDppZD1cXFwiY29udGFpbmVySWRcXFwiIGNsYXNzPVxcXCJnYXVnZVxcXCI+XFxuICAgICAgICA8aDQgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48Yj57e3RpdGxlfX08L2I+PC9oND5cXG4gICAgICAgIDxjYW52YXMgOmlkPVxcXCJlbGVtZW50SWRcXFwiPjwvY2FudmFzPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ29hbC13cmFwcGVyIGNsZWFyZml4XFxcIj5cXG4gICAgICAgICAgICA8c3BhbiA6aWQ9XFxcInRleHRJZFxcXCIgY2xhc3M9XFxcImdhdWdlLXZhbHVlIHB1bGwtbGVmdFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnYXVnZS12YWx1ZSBwdWxsLWxlZnRcXFwiPiU8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gaWQ9XFxcImdvYWwtdGV4dFxcXCIgY2xhc3M9XFxcImdvYWwtdmFsdWUgcHVsbC1yaWdodFxcXCI+MTAwJTwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzdHlsZT5cXG4gICAgLmdhdWdlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuXFxuICAgIC5nb2FsLXdyYXBwZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG48L3N0eWxlPlxcbjxzY3JpcHQ+XFxuICAgIGltcG9ydCB1dWlkTWl4aW4gZnJvbSAnYmFzZS9taXhpbnMvdXVpZCdcXG4gICAgaW1wb3J0IHtvcHRzfSBmcm9tICcuL3N0dWJzL2dhdWdlT3B0c1N0dWInXFxuICAgIGV4cG9ydCBkZWZhdWx0e1xcblxcbiAgICAgICAgcHJvcHM6IHtcXG4gICAgICAgICAgICB2YWx1ZToge3JlcXVpcmVkOiB0cnVlfSxcXG4gICAgICAgICAgICB0aXRsZToge2RlZmF1bHQ6ICcnfSxcXG4gICAgICAgICAgICBjb2xvcjoge3JlcXVpcmVkOiB0cnVlfVxcbiAgICAgICAgfSxcXG4gICAgICAgIHdhdGNoOiB7XFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh2YWwpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5zZXQodmFsKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgZGF0YSgpe1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGdhdWdlOiBudWxsLFxcbiAgICAgICAgICAgICAgICBvcHRzOiB7fSxcXG4gICAgICAgICAgICAgICAgdGltZW91dEhhbmRsZTogbnVsbFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBjb21wdXRlZDoge1xcbiAgICAgICAgICAgIGVsZW1lbnRJZCgpe1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVVVSUQoKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgY29udGFpbmVySWQoKXtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVVVUlEKClcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHRleHRJZCgpe1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVVVSUQoKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBtaXhpbnM6IFt1dWlkTWl4aW5dLFxcbiAgICAgICAgbW91bnRlZCgpe1xcbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlZHJhdyk7XFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGRyYXcoKSB7XFxuICAgICAgICAgICAgICAgIHZhciBnYXVnZUxpYiA9IHJlcXVpcmUoJ2dhdWdlLmpzJyk7XFxuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVySWQpLm9mZnNldFdpZHRoO1xcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gd2lkdGggLyAyO1xcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoICsgJ3B4Jyk7XFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCArICdweCcpO1xcbiAgICAgICAgICAgICAgICB0aGlzLm9wdHMgPSBfLmNsb25lRGVlcChvcHRzKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRzLmNvbG9yU3RhcnQgPSB0aGlzLmNvbG9yO1xcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlID0gbmV3IGdhdWdlTGliLkdhdWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKSkuc2V0T3B0aW9ucyh0aGlzLm9wdHMpO1xcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLm1heFZhbHVlID0gMTAwOyAvLyBzZXQgbWF4IGdhdWdlIHZhbHVlXFxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2Uuc2V0TWluVmFsdWUoMCk7ICAvLyBQcmVmZXIgc2V0dGVyIG92ZXIgZ2F1Z2UubWluVmFsdWUgPSAwXFxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2UuYW5pbWF0aW9uU3BlZWQgPSA2NTsgLy8gc2V0IGFuaW1hdGlvbiBzcGVlZCAoMzIgaXMgZGVmYXVsdCB2YWx1ZSlcXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5zZXQodGhpcy52YWx1ZSk7IC8vIHNldCBhY3R1YWwgdmFsdWVcXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5zZXRUZXh0RmllbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy50ZXh0SWQpKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHJlZHJhdygpIHtcXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykuc2F2ZSgpO1xcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLmNsZWFyUmVjdCgwLCAwLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5jYW52YXMud2lkdGgsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLmNhbnZhcy5oZWlnaHQpO1xcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5yZXN0b3JlKCk7XFxuXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVvdXRIYW5kbGUpXFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dEhhbmRsZSk7XFxuXFxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dEhhbmRsZSA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuZHJhdywgMjUwKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZmMjgzMTk1IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlXG4vLyBtb2R1bGUgaWQgPSAzNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi4yXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBBbmltYXRlZFRleHQsIEFuaW1hdGVkVGV4dEZhY3RvcnksIEJhciwgQmFzZURvbnV0LCBCYXNlR2F1Z2UsIERvbnV0LCBHYXVnZSwgR2F1Z2VQb2ludGVyLCBUZXh0UmVuZGVyZXIsIFZhbHVlVXBkYXRlciwgYWRkQ29tbWFzLCBjdXRIZXgsIGZvcm1hdE51bWJlciwgbWVyZ2VPYmplY3RzLCBzZWNvbmRzVG9TdHJpbmcsXG4gICAgc2xpY2UgPSBbXS5zbGljZSxcbiAgICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gICAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG4gIChmdW5jdGlvbigpIHtcbiAgICB2YXIgYnJvd3NlclJlcXVlc3RBbmltYXRpb25GcmFtZSwgaXNDYW5jZWxsZWQsIGosIGxhc3RJZCwgbGVuLCB2ZW5kb3IsIHZlbmRvcnM7XG4gICAgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XG4gICAgZm9yIChqID0gMCwgbGVuID0gdmVuZG9ycy5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgdmVuZG9yID0gdmVuZG9yc1tqXTtcbiAgICAgIGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3IgKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHwgd2luZG93W3ZlbmRvciArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICB9XG4gICAgYnJvd3NlclJlcXVlc3RBbmltYXRpb25GcmFtZSA9IG51bGw7XG4gICAgbGFzdElkID0gMDtcbiAgICBpc0NhbmNlbGxlZCA9IHt9O1xuICAgIGlmICghcmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGN1cnJUaW1lLCBpZCwgbGFzdFRpbWUsIHRpbWVUb0NhbGw7XG4gICAgICAgIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgICAgIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfTtcbiAgICAgIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICBicm93c2VyUmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgICB2YXIgbXlJZDtcbiAgICAgICAgbXlJZCA9ICsrbGFzdElkO1xuICAgICAgICBicm93c2VyUmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICghaXNDYW5jZWxsZWRbbXlJZF0pIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZWxlbWVudCk7XG4gICAgICAgIHJldHVybiBteUlkO1xuICAgICAgfTtcbiAgICAgIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICByZXR1cm4gaXNDYW5jZWxsZWRbaWRdID0gdHJ1ZTtcbiAgICAgIH07XG4gICAgfVxuICB9KSgpO1xuXG4gIFN0cmluZy5wcm90b3R5cGUuaGFzaENvZGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2hhciwgaGFzaCwgaSwgaiwgcmVmO1xuICAgIGhhc2ggPSAwO1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGhhc2g7XG4gICAgfVxuICAgIGZvciAoaSA9IGogPSAwLCByZWYgPSB0aGlzLmxlbmd0aDsgMCA8PSByZWYgPyBqIDwgcmVmIDogaiA+IHJlZjsgaSA9IDAgPD0gcmVmID8gKytqIDogLS1qKSB7XG4gICAgICBjaGFyID0gdGhpcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hhcjtcbiAgICAgIGhhc2ggPSBoYXNoICYgaGFzaDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc2g7XG4gIH07XG5cbiAgc2Vjb25kc1RvU3RyaW5nID0gZnVuY3Rpb24oc2VjKSB7XG4gICAgdmFyIGhyLCBtaW47XG4gICAgaHIgPSBNYXRoLmZsb29yKHNlYyAvIDM2MDApO1xuICAgIG1pbiA9IE1hdGguZmxvb3IoKHNlYyAtIChociAqIDM2MDApKSAvIDYwKTtcbiAgICBzZWMgLT0gKGhyICogMzYwMCkgKyAobWluICogNjApO1xuICAgIHNlYyArPSAnJztcbiAgICBtaW4gKz0gJyc7XG4gICAgd2hpbGUgKG1pbi5sZW5ndGggPCAyKSB7XG4gICAgICBtaW4gPSAnMCcgKyBtaW47XG4gICAgfVxuICAgIHdoaWxlIChzZWMubGVuZ3RoIDwgMikge1xuICAgICAgc2VjID0gJzAnICsgc2VjO1xuICAgIH1cbiAgICBociA9IGhyID8gaHIgKyAnOicgOiAnJztcbiAgICByZXR1cm4gaHIgKyBtaW4gKyAnOicgKyBzZWM7XG4gIH07XG5cbiAgZm9ybWF0TnVtYmVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRpZ2l0cywgbnVtLCB2YWx1ZTtcbiAgICBudW0gPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgICB2YWx1ZSA9IG51bVswXTtcbiAgICBkaWdpdHMgPSAwIHx8IG51bVsxXTtcbiAgICByZXR1cm4gYWRkQ29tbWFzKHZhbHVlLnRvRml4ZWQoZGlnaXRzKSk7XG4gIH07XG5cbiAgbWVyZ2VPYmplY3RzID0gZnVuY3Rpb24ob2JqMSwgb2JqMikge1xuICAgIHZhciBrZXksIG91dCwgdmFsO1xuICAgIG91dCA9IHt9O1xuICAgIGZvciAoa2V5IGluIG9iajEpIHtcbiAgICAgIGlmICghaGFzUHJvcC5jYWxsKG9iajEsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdmFsID0gb2JqMVtrZXldO1xuICAgICAgb3V0W2tleV0gPSB2YWw7XG4gICAgfVxuICAgIGZvciAoa2V5IGluIG9iajIpIHtcbiAgICAgIGlmICghaGFzUHJvcC5jYWxsKG9iajIsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdmFsID0gb2JqMltrZXldO1xuICAgICAgb3V0W2tleV0gPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH07XG5cbiAgYWRkQ29tbWFzID0gZnVuY3Rpb24oblN0cikge1xuICAgIHZhciByZ3gsIHgsIHgxLCB4MjtcbiAgICBuU3RyICs9ICcnO1xuICAgIHggPSBuU3RyLnNwbGl0KCcuJyk7XG4gICAgeDEgPSB4WzBdO1xuICAgIHgyID0gJyc7XG4gICAgaWYgKHgubGVuZ3RoID4gMSkge1xuICAgICAgeDIgPSAnLicgKyB4WzFdO1xuICAgIH1cbiAgICByZ3ggPSAvKFxcZCspKFxcZHszfSkvO1xuICAgIHdoaWxlIChyZ3gudGVzdCh4MSkpIHtcbiAgICAgIHgxID0geDEucmVwbGFjZShyZ3gsICckMScgKyAnLCcgKyAnJDInKTtcbiAgICB9XG4gICAgcmV0dXJuIHgxICsgeDI7XG4gIH07XG5cbiAgY3V0SGV4ID0gZnVuY3Rpb24oblN0cikge1xuICAgIGlmIChuU3RyLmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcbiAgICAgIHJldHVybiBuU3RyLnN1YnN0cmluZygxLCA3KTtcbiAgICB9XG4gICAgcmV0dXJuIG5TdHI7XG4gIH07XG5cbiAgVmFsdWVVcGRhdGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIFZhbHVlVXBkYXRlci5wcm90b3R5cGUuYW5pbWF0aW9uU3BlZWQgPSAzMjtcblxuICAgIGZ1bmN0aW9uIFZhbHVlVXBkYXRlcihhZGRUb0FuaW1hdGlvblF1ZXVlLCBjbGVhcikge1xuICAgICAgaWYgKGFkZFRvQW5pbWF0aW9uUXVldWUgPT0gbnVsbCkge1xuICAgICAgICBhZGRUb0FuaW1hdGlvblF1ZXVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xlYXIgPSBjbGVhciAhPSBudWxsID8gY2xlYXIgOiB0cnVlO1xuICAgICAgaWYgKGFkZFRvQW5pbWF0aW9uUXVldWUpIHtcbiAgICAgICAgQW5pbWF0aW9uVXBkYXRlci5hZGQodGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVmFsdWVVcGRhdGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihmb3JjZSkge1xuICAgICAgdmFyIGRpZmY7XG4gICAgICBpZiAoZm9yY2UgPT0gbnVsbCkge1xuICAgICAgICBmb3JjZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGZvcmNlIHx8IHRoaXMuZGlzcGxheWVkVmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuY3R4ICYmIHRoaXMuY2xlYXIpIHtcbiAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgZGlmZiA9IHRoaXMudmFsdWUgLSB0aGlzLmRpc3BsYXllZFZhbHVlO1xuICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZiAvIHRoaXMuYW5pbWF0aW9uU3BlZWQpIDw9IDAuMDAxKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRWYWx1ZSA9IHRoaXMuZGlzcGxheWVkVmFsdWUgKyBkaWZmIC8gdGhpcy5hbmltYXRpb25TcGVlZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFZhbHVlVXBkYXRlcjtcblxuICB9KSgpO1xuXG4gIEJhc2VHYXVnZSA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gICAgZXh0ZW5kKEJhc2VHYXVnZSwgc3VwZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBCYXNlR2F1Z2UoKSB7XG4gICAgICByZXR1cm4gQmFzZUdhdWdlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIEJhc2VHYXVnZS5wcm90b3R5cGUuZGlzcGxheVNjYWxlID0gMTtcblxuICAgIEJhc2VHYXVnZS5wcm90b3R5cGUuc2V0VGV4dEZpZWxkID0gZnVuY3Rpb24odGV4dEZpZWxkLCBmcmFjdGlvbkRpZ2l0cykge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dEZpZWxkID0gdGV4dEZpZWxkIGluc3RhbmNlb2YgVGV4dFJlbmRlcmVyID8gdGV4dEZpZWxkIDogbmV3IFRleHRSZW5kZXJlcih0ZXh0RmllbGQsIGZyYWN0aW9uRGlnaXRzKTtcbiAgICB9O1xuXG4gICAgQmFzZUdhdWdlLnByb3RvdHlwZS5zZXRNaW5WYWx1ZSA9IGZ1bmN0aW9uKG1pblZhbHVlLCB1cGRhdGVTdGFydFZhbHVlKSB7XG4gICAgICB2YXIgZ2F1Z2UsIGosIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgICAgdGhpcy5taW5WYWx1ZSA9IG1pblZhbHVlO1xuICAgICAgaWYgKHVwZGF0ZVN0YXJ0VmFsdWUgPT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVTdGFydFZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh1cGRhdGVTdGFydFZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheWVkVmFsdWUgPSB0aGlzLm1pblZhbHVlO1xuICAgICAgICByZWYgPSB0aGlzLmdwIHx8IFtdO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICAgIGdhdWdlID0gcmVmW2pdO1xuICAgICAgICAgIHJlc3VsdHMucHVzaChnYXVnZS5kaXNwbGF5ZWRWYWx1ZSA9IHRoaXMubWluVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBCYXNlR2F1Z2UucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMgPSBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5vcHRpb25zID0gbWVyZ2VPYmplY3RzKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICBpZiAodGhpcy50ZXh0RmllbGQpIHtcbiAgICAgICAgdGhpcy50ZXh0RmllbGQuZWwuc3R5bGUuZm9udFNpemUgPSBvcHRpb25zLmZvbnRTaXplICsgJ3B4JztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5nbGUgPiAuNSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuYW5nbGUgPSAuNTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29uZmlnRGlzcGxheVNjYWxlKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQmFzZUdhdWdlLnByb3RvdHlwZS5jb25maWdEaXNwbGF5U2NhbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBiYWNraW5nU3RvcmVQaXhlbFJhdGlvLCBkZXZpY2VQaXhlbFJhdGlvLCBoZWlnaHQsIHByZXZEaXNwbGF5U2NhbGUsIHdpZHRoO1xuICAgICAgcHJldkRpc3BsYXlTY2FsZSA9IHRoaXMuZGlzcGxheVNjYWxlO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5oaWdoRHBpU3VwcG9ydCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZGlzcGxheVNjYWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gICAgICAgIGJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gPSB0aGlzLmN0eC53ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IHRoaXMuY3R4Lm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgdGhpcy5jdHgubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IHRoaXMuY3R4Lm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IHRoaXMuY3R4LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgMTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U2NhbGUgPSBkZXZpY2VQaXhlbFJhdGlvIC8gYmFja2luZ1N0b3JlUGl4ZWxSYXRpbztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRpc3BsYXlTY2FsZSAhPT0gcHJldkRpc3BsYXlTY2FsZSkge1xuICAgICAgICB3aWR0aCA9IHRoaXMuY2FudmFzLkdfX3dpZHRoIHx8IHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5HX19oZWlnaHQgfHwgdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoICogdGhpcy5kaXNwbGF5U2NhbGU7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodCAqIHRoaXMuZGlzcGxheVNjYWxlO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIHRoaXMuY2FudmFzLkdfX3dpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLkdfX2hlaWdodCA9IGhlaWdodDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICByZXR1cm4gQmFzZUdhdWdlO1xuXG4gIH0pKFZhbHVlVXBkYXRlcik7XG5cbiAgVGV4dFJlbmRlcmVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIFRleHRSZW5kZXJlcihlbCwgZnJhY3Rpb25EaWdpdHMxKSB7XG4gICAgICB0aGlzLmVsID0gZWw7XG4gICAgICB0aGlzLmZyYWN0aW9uRGlnaXRzID0gZnJhY3Rpb25EaWdpdHMxO1xuICAgIH1cblxuICAgIFRleHRSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oZ2F1Z2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLmlubmVySFRNTCA9IGZvcm1hdE51bWJlcihnYXVnZS5kaXNwbGF5ZWRWYWx1ZSwgdGhpcy5mcmFjdGlvbkRpZ2l0cyk7XG4gICAgfTtcblxuICAgIHJldHVybiBUZXh0UmVuZGVyZXI7XG5cbiAgfSkoKTtcblxuICBBbmltYXRlZFRleHQgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICAgIGV4dGVuZChBbmltYXRlZFRleHQsIHN1cGVyQ2xhc3MpO1xuXG4gICAgQW5pbWF0ZWRUZXh0LnByb3RvdHlwZS5kaXNwbGF5ZWRWYWx1ZSA9IDA7XG5cbiAgICBBbmltYXRlZFRleHQucHJvdG90eXBlLnZhbHVlID0gMDtcblxuICAgIEFuaW1hdGVkVGV4dC5wcm90b3R5cGUuc2V0VmFsID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlID0gMSAqIHZhbHVlO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBBbmltYXRlZFRleHQoZWxlbTEsIHRleHQpIHtcbiAgICAgIHRoaXMuZWxlbSA9IGVsZW0xO1xuICAgICAgdGhpcy50ZXh0ID0gdGV4dCAhPSBudWxsID8gdGV4dCA6IGZhbHNlO1xuICAgICAgdGhpcy52YWx1ZSA9IDEgKiB0aGlzLmVsZW0uaW5uZXJIVE1MO1xuICAgICAgaWYgKHRoaXMudGV4dCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBbmltYXRlZFRleHQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRleHRWYWw7XG4gICAgICBpZiAodGhpcy50ZXh0KSB7XG4gICAgICAgIHRleHRWYWwgPSBzZWNvbmRzVG9TdHJpbmcodGhpcy5kaXNwbGF5ZWRWYWx1ZS50b0ZpeGVkKDApKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHRWYWwgPSBhZGRDb21tYXMoZm9ybWF0TnVtYmVyKHRoaXMuZGlzcGxheWVkVmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmVsZW0uaW5uZXJIVE1MID0gdGV4dFZhbDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFuaW1hdGVkVGV4dDtcblxuICB9KShWYWx1ZVVwZGF0ZXIpO1xuXG4gIEFuaW1hdGVkVGV4dEZhY3RvcnkgPSB7XG4gICAgY3JlYXRlOiBmdW5jdGlvbihvYmpMaXN0KSB7XG4gICAgICB2YXIgZWxlbSwgaiwgbGVuLCBvdXQ7XG4gICAgICBvdXQgPSBbXTtcbiAgICAgIGZvciAoaiA9IDAsIGxlbiA9IG9iakxpc3QubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgZWxlbSA9IG9iakxpc3Rbal07XG4gICAgICAgIG91dC5wdXNoKG5ldyBBbmltYXRlZFRleHQoZWxlbSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gIH07XG5cbiAgR2F1Z2VQb2ludGVyID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgICBleHRlbmQoR2F1Z2VQb2ludGVyLCBzdXBlckNsYXNzKTtcblxuICAgIEdhdWdlUG9pbnRlci5wcm90b3R5cGUuZGlzcGxheWVkVmFsdWUgPSAwO1xuXG4gICAgR2F1Z2VQb2ludGVyLnByb3RvdHlwZS52YWx1ZSA9IDA7XG5cbiAgICBHYXVnZVBvaW50ZXIucHJvdG90eXBlLm9wdGlvbnMgPSB7XG4gICAgICBzdHJva2VXaWR0aDogMC4wMzUsXG4gICAgICBsZW5ndGg6IDAuMSxcbiAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIlxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBHYXVnZVBvaW50ZXIoZ2F1Z2UxKSB7XG4gICAgICB0aGlzLmdhdWdlID0gZ2F1Z2UxO1xuICAgICAgdGhpcy5jdHggPSB0aGlzLmdhdWdlLmN0eDtcbiAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5nYXVnZS5jYW52YXM7XG4gICAgICBHYXVnZVBvaW50ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgZmFsc2UsIGZhbHNlKTtcbiAgICAgIHRoaXMuc2V0T3B0aW9ucygpO1xuICAgIH1cblxuICAgIEdhdWdlUG9pbnRlci5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLm9wdGlvbnMgPSBtZXJnZU9iamVjdHModGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgIHRoaXMubGVuZ3RoID0gMiAqIHRoaXMuZ2F1Z2UucmFkaXVzICogdGhpcy5nYXVnZS5vcHRpb25zLnJhZGl1c1NjYWxlICogdGhpcy5vcHRpb25zLmxlbmd0aDtcbiAgICAgIHRoaXMuc3Ryb2tlV2lkdGggPSB0aGlzLmNhbnZhcy5oZWlnaHQgKiB0aGlzLm9wdGlvbnMuc3Ryb2tlV2lkdGg7XG4gICAgICB0aGlzLm1heFZhbHVlID0gdGhpcy5nYXVnZS5tYXhWYWx1ZTtcbiAgICAgIHRoaXMubWluVmFsdWUgPSB0aGlzLmdhdWdlLm1pblZhbHVlO1xuICAgICAgdGhpcy5hbmltYXRpb25TcGVlZCA9IHRoaXMuZ2F1Z2UuYW5pbWF0aW9uU3BlZWQ7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFuZ2xlID0gdGhpcy5nYXVnZS5vcHRpb25zLmFuZ2xlO1xuICAgIH07XG5cbiAgICBHYXVnZVBvaW50ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFuZ2xlLCBlbmRYLCBlbmRZLCBzdGFydFgsIHN0YXJ0WSwgeCwgeTtcbiAgICAgIGFuZ2xlID0gdGhpcy5nYXVnZS5nZXRBbmdsZS5jYWxsKHRoaXMsIHRoaXMuZGlzcGxheWVkVmFsdWUpO1xuICAgICAgeCA9IE1hdGgucm91bmQodGhpcy5sZW5ndGggKiBNYXRoLmNvcyhhbmdsZSkpO1xuICAgICAgeSA9IE1hdGgucm91bmQodGhpcy5sZW5ndGggKiBNYXRoLnNpbihhbmdsZSkpO1xuICAgICAgc3RhcnRYID0gTWF0aC5yb3VuZCh0aGlzLnN0cm9rZVdpZHRoICogTWF0aC5jb3MoYW5nbGUgLSBNYXRoLlBJIC8gMikpO1xuICAgICAgc3RhcnRZID0gTWF0aC5yb3VuZCh0aGlzLnN0cm9rZVdpZHRoICogTWF0aC5zaW4oYW5nbGUgLSBNYXRoLlBJIC8gMikpO1xuICAgICAgZW5kWCA9IE1hdGgucm91bmQodGhpcy5zdHJva2VXaWR0aCAqIE1hdGguY29zKGFuZ2xlICsgTWF0aC5QSSAvIDIpKTtcbiAgICAgIGVuZFkgPSBNYXRoLnJvdW5kKHRoaXMuc3Ryb2tlV2lkdGggKiBNYXRoLnNpbihhbmdsZSArIE1hdGguUEkgLyAyKSk7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLm9wdGlvbnMuY29sb3I7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4LmFyYygwLCAwLCB0aGlzLnN0cm9rZVdpZHRoLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyhzdGFydFgsIHN0YXJ0WSk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8oeCwgeSk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8oZW5kWCwgZW5kWSk7XG4gICAgICByZXR1cm4gdGhpcy5jdHguZmlsbCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gR2F1Z2VQb2ludGVyO1xuXG4gIH0pKFZhbHVlVXBkYXRlcik7XG5cbiAgQmFyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEJhcihlbGVtMSkge1xuICAgICAgdGhpcy5lbGVtID0gZWxlbTE7XG4gICAgfVxuXG4gICAgQmFyLnByb3RvdHlwZS51cGRhdGVWYWx1ZXMgPSBmdW5jdGlvbihhcnJWYWx1ZXMpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBhcnJWYWx1ZXNbMF07XG4gICAgICB0aGlzLm1heFZhbHVlID0gYXJyVmFsdWVzWzFdO1xuICAgICAgdGhpcy5hdmdWYWx1ZSA9IGFyclZhbHVlc1syXTtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcigpO1xuICAgIH07XG5cbiAgICBCYXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGF2Z1BlcmNlbnQsIHZhbFBlcmNlbnQ7XG4gICAgICBpZiAodGhpcy50ZXh0RmllbGQpIHtcbiAgICAgICAgdGhpcy50ZXh0RmllbGQudGV4dChmb3JtYXROdW1iZXIodGhpcy52YWx1ZSkpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubWF4VmFsdWUgPT09IDApIHtcbiAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IHRoaXMuYXZnVmFsdWUgKiAyO1xuICAgICAgfVxuICAgICAgdmFsUGVyY2VudCA9ICh0aGlzLnZhbHVlIC8gdGhpcy5tYXhWYWx1ZSkgKiAxMDA7XG4gICAgICBhdmdQZXJjZW50ID0gKHRoaXMuYXZnVmFsdWUgLyB0aGlzLm1heFZhbHVlKSAqIDEwMDtcbiAgICAgICQoXCIuYmFyLXZhbHVlXCIsIHRoaXMuZWxlbSkuY3NzKHtcbiAgICAgICAgXCJ3aWR0aFwiOiB2YWxQZXJjZW50ICsgXCIlXCJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuICQoXCIudHlwaWNhbC12YWx1ZVwiLCB0aGlzLmVsZW0pLmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogYXZnUGVyY2VudCArIFwiJVwiXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEJhcjtcblxuICB9KSgpO1xuXG4gIEdhdWdlID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgICBleHRlbmQoR2F1Z2UsIHN1cGVyQ2xhc3MpO1xuXG4gICAgR2F1Z2UucHJvdG90eXBlLmVsZW0gPSBudWxsO1xuXG4gICAgR2F1Z2UucHJvdG90eXBlLnZhbHVlID0gWzIwXTtcblxuICAgIEdhdWdlLnByb3RvdHlwZS5tYXhWYWx1ZSA9IDgwO1xuXG4gICAgR2F1Z2UucHJvdG90eXBlLm1pblZhbHVlID0gMDtcblxuICAgIEdhdWdlLnByb3RvdHlwZS5kaXNwbGF5ZWRBbmdsZSA9IDA7XG5cbiAgICBHYXVnZS5wcm90b3R5cGUuZGlzcGxheWVkVmFsdWUgPSAwO1xuXG4gICAgR2F1Z2UucHJvdG90eXBlLmxpbmVXaWR0aCA9IDQwO1xuXG4gICAgR2F1Z2UucHJvdG90eXBlLnBhZGRpbmdUb3AgPSAwLjE7XG5cbiAgICBHYXVnZS5wcm90b3R5cGUucGFkZGluZ0JvdHRvbSA9IDAuMTtcblxuICAgIEdhdWdlLnByb3RvdHlwZS5wZXJjZW50Q29sb3JzID0gbnVsbDtcblxuICAgIEdhdWdlLnByb3RvdHlwZS5vcHRpb25zID0ge1xuICAgICAgY29sb3JTdGFydDogXCIjNmZhZGNmXCIsXG4gICAgICBjb2xvclN0b3A6IHZvaWQgMCxcbiAgICAgIGdyYWRpZW50VHlwZTogMCxcbiAgICAgIHN0cm9rZUNvbG9yOiBcIiNlMGUwZTBcIixcbiAgICAgIHBvaW50ZXI6IHtcbiAgICAgICAgbGVuZ3RoOiAwLjgsXG4gICAgICAgIHN0cm9rZVdpZHRoOiAwLjAzNVxuICAgICAgfSxcbiAgICAgIGFuZ2xlOiAwLjE1LFxuICAgICAgbGluZVdpZHRoOiAwLjQ0LFxuICAgICAgcmFkaXVzU2NhbGU6IDEuMCxcbiAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgIGxpbWl0TWF4OiBmYWxzZSxcbiAgICAgIGxpbWl0TWluOiBmYWxzZVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBHYXVnZShjYW52YXMpIHtcbiAgICAgIHZhciBoLCB3O1xuICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICBHYXVnZS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMucGVyY2VudENvbG9ycyA9IG51bGw7XG4gICAgICBpZiAodHlwZW9mIEdfdm1sQ2FudmFzTWFuYWdlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSB3aW5kb3cuR192bWxDYW52YXNNYW5hZ2VyLmluaXRFbGVtZW50KHRoaXMuY2FudmFzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGggPSB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgICB3ID0gdGhpcy5jYW52YXMuY2xpZW50V2lkdGg7XG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoO1xuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3O1xuICAgICAgdGhpcy5ncCA9IFtuZXcgR2F1Z2VQb2ludGVyKHRoaXMpXTtcbiAgICAgIHRoaXMuc2V0T3B0aW9ucygpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBHYXVnZS5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBnYXVnZSwgaiwgbGVuLCBwaGksIHJlZjtcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgICB9XG4gICAgICBHYXVnZS5fX3N1cGVyX18uc2V0T3B0aW9ucy5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5jb25maWdQZXJjZW50Q29sb3JzKCk7XG4gICAgICB0aGlzLmV4dHJhUGFkZGluZyA9IDA7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFuZ2xlIDwgMCkge1xuICAgICAgICBwaGkgPSBNYXRoLlBJICogKDEgKyB0aGlzLm9wdGlvbnMuYW5nbGUpO1xuICAgICAgICB0aGlzLmV4dHJhUGFkZGluZyA9IE1hdGguc2luKHBoaSk7XG4gICAgICB9XG4gICAgICB0aGlzLmF2YWlsYWJsZUhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodCAqICgxIC0gdGhpcy5wYWRkaW5nVG9wIC0gdGhpcy5wYWRkaW5nQm90dG9tKTtcbiAgICAgIHRoaXMubGluZVdpZHRoID0gdGhpcy5hdmFpbGFibGVIZWlnaHQgKiB0aGlzLm9wdGlvbnMubGluZVdpZHRoO1xuICAgICAgdGhpcy5yYWRpdXMgPSAodGhpcy5hdmFpbGFibGVIZWlnaHQgLSB0aGlzLmxpbmVXaWR0aCAvIDIpIC8gKDEuMCArIHRoaXMuZXh0cmFQYWRkaW5nKTtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHJlZiA9IHRoaXMuZ3A7XG4gICAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgZ2F1Z2UgPSByZWZbal07XG4gICAgICAgIGdhdWdlLnNldE9wdGlvbnModGhpcy5vcHRpb25zLnBvaW50ZXIpO1xuICAgICAgICBnYXVnZS5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHYXVnZS5wcm90b3R5cGUuY29uZmlnUGVyY2VudENvbG9ycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGJ2YWwsIGd2YWwsIGksIGosIHJlZiwgcmVzdWx0cywgcnZhbDtcbiAgICAgIHRoaXMucGVyY2VudENvbG9ycyA9IG51bGw7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnBlcmNlbnRDb2xvcnMgIT09IHZvaWQgMCkge1xuICAgICAgICB0aGlzLnBlcmNlbnRDb2xvcnMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSBqID0gMCwgcmVmID0gdGhpcy5vcHRpb25zLnBlcmNlbnRDb2xvcnMubGVuZ3RoIC0gMTsgMCA8PSByZWYgPyBqIDw9IHJlZiA6IGogPj0gcmVmOyBpID0gMCA8PSByZWYgPyArK2ogOiAtLWopIHtcbiAgICAgICAgICBydmFsID0gcGFyc2VJbnQoKGN1dEhleCh0aGlzLm9wdGlvbnMucGVyY2VudENvbG9yc1tpXVsxXSkpLnN1YnN0cmluZygwLCAyKSwgMTYpO1xuICAgICAgICAgIGd2YWwgPSBwYXJzZUludCgoY3V0SGV4KHRoaXMub3B0aW9ucy5wZXJjZW50Q29sb3JzW2ldWzFdKSkuc3Vic3RyaW5nKDIsIDQpLCAxNik7XG4gICAgICAgICAgYnZhbCA9IHBhcnNlSW50KChjdXRIZXgodGhpcy5vcHRpb25zLnBlcmNlbnRDb2xvcnNbaV1bMV0pKS5zdWJzdHJpbmcoNCwgNiksIDE2KTtcbiAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5wZXJjZW50Q29sb3JzW2ldID0ge1xuICAgICAgICAgICAgcGN0OiB0aGlzLm9wdGlvbnMucGVyY2VudENvbG9yc1tpXVswXSxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgIHI6IHJ2YWwsXG4gICAgICAgICAgICAgIGc6IGd2YWwsXG4gICAgICAgICAgICAgIGI6IGJ2YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgR2F1Z2UucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgZ3AsIGksIGosIGssIGxlbiwgcmVmLCB2YWw7XG4gICAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICB2YWx1ZSA9IFt2YWx1ZV07XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID4gdGhpcy5ncC5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChpID0gaiA9IDAsIHJlZiA9IHZhbHVlLmxlbmd0aCAtIHRoaXMuZ3AubGVuZ3RoOyAwIDw9IHJlZiA/IGogPCByZWYgOiBqID4gcmVmOyBpID0gMCA8PSByZWYgPyArK2ogOiAtLWopIHtcbiAgICAgICAgICBncCA9IG5ldyBHYXVnZVBvaW50ZXIodGhpcyk7XG4gICAgICAgICAgZ3Auc2V0T3B0aW9ucyh0aGlzLm9wdGlvbnMucG9pbnRlcik7XG4gICAgICAgICAgdGhpcy5ncC5wdXNoKGdwKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPCB0aGlzLmdwLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmdwID0gdGhpcy5ncC5zbGljZSh0aGlzLmdwLmxlbmd0aCAtIHZhbHVlLmxlbmd0aCk7XG4gICAgICB9XG4gICAgICBpID0gMDtcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgIHZhbCA9IHZhbHVlW2tdO1xuICAgICAgICBpZiAodmFsID4gdGhpcy5tYXhWYWx1ZSkge1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRNYXgpIHtcbiAgICAgICAgICAgIHZhbCA9IHRoaXMubWF4VmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWF4VmFsdWUgPSB2YWwgKyAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh2YWwgPCB0aGlzLm1pblZhbHVlKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdE1pbikge1xuICAgICAgICAgICAgdmFsID0gdGhpcy5taW5WYWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5taW5WYWx1ZSA9IHZhbCAtIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3BbaV0udmFsdWUgPSB2YWw7XG4gICAgICAgIHRoaXMuZ3BbaSsrXS5zZXRPcHRpb25zKHtcbiAgICAgICAgICBtaW5WYWx1ZTogdGhpcy5taW5WYWx1ZSxcbiAgICAgICAgICBtYXhWYWx1ZTogdGhpcy5tYXhWYWx1ZSxcbiAgICAgICAgICBhbmdsZTogdGhpcy5vcHRpb25zLmFuZ2xlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy52YWx1ZSA9IE1hdGgubWF4KE1hdGgubWluKHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdLCB0aGlzLm1heFZhbHVlKSwgdGhpcy5taW5WYWx1ZSk7XG4gICAgICByZXR1cm4gQW5pbWF0aW9uVXBkYXRlci5ydW4oKTtcbiAgICB9O1xuXG4gICAgR2F1Z2UucHJvdG90eXBlLmdldEFuZ2xlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiAoMSArIHRoaXMub3B0aW9ucy5hbmdsZSkgKiBNYXRoLlBJICsgKCh2YWx1ZSAtIHRoaXMubWluVmFsdWUpIC8gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSkgKiAoMSAtIHRoaXMub3B0aW9ucy5hbmdsZSAqIDIpICogTWF0aC5QSTtcbiAgICB9O1xuXG4gICAgR2F1Z2UucHJvdG90eXBlLmdldENvbG9yRm9yUGVyY2VudGFnZSA9IGZ1bmN0aW9uKHBjdCwgZ3JhZCkge1xuICAgICAgdmFyIGNvbG9yLCBlbmRDb2xvciwgaSwgaiwgcmFuZ2VQY3QsIHJlZiwgc3RhcnRDb2xvcjtcbiAgICAgIGlmIChwY3QgPT09IDApIHtcbiAgICAgICAgY29sb3IgPSB0aGlzLnBlcmNlbnRDb2xvcnNbMF0uY29sb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xvciA9IHRoaXMucGVyY2VudENvbG9yc1t0aGlzLnBlcmNlbnRDb2xvcnMubGVuZ3RoIC0gMV0uY29sb3I7XG4gICAgICAgIGZvciAoaSA9IGogPSAwLCByZWYgPSB0aGlzLnBlcmNlbnRDb2xvcnMubGVuZ3RoIC0gMTsgMCA8PSByZWYgPyBqIDw9IHJlZiA6IGogPj0gcmVmOyBpID0gMCA8PSByZWYgPyArK2ogOiAtLWopIHtcbiAgICAgICAgICBpZiAocGN0IDw9IHRoaXMucGVyY2VudENvbG9yc1tpXS5wY3QpIHtcbiAgICAgICAgICAgIGlmIChncmFkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHN0YXJ0Q29sb3IgPSB0aGlzLnBlcmNlbnRDb2xvcnNbaSAtIDFdIHx8IHRoaXMucGVyY2VudENvbG9yc1swXTtcbiAgICAgICAgICAgICAgZW5kQ29sb3IgPSB0aGlzLnBlcmNlbnRDb2xvcnNbaV07XG4gICAgICAgICAgICAgIHJhbmdlUGN0ID0gKHBjdCAtIHN0YXJ0Q29sb3IucGN0KSAvIChlbmRDb2xvci5wY3QgLSBzdGFydENvbG9yLnBjdCk7XG4gICAgICAgICAgICAgIGNvbG9yID0ge1xuICAgICAgICAgICAgICAgIHI6IE1hdGguZmxvb3Ioc3RhcnRDb2xvci5jb2xvci5yICogKDEgLSByYW5nZVBjdCkgKyBlbmRDb2xvci5jb2xvci5yICogcmFuZ2VQY3QpLFxuICAgICAgICAgICAgICAgIGc6IE1hdGguZmxvb3Ioc3RhcnRDb2xvci5jb2xvci5nICogKDEgLSByYW5nZVBjdCkgKyBlbmRDb2xvci5jb2xvci5nICogcmFuZ2VQY3QpLFxuICAgICAgICAgICAgICAgIGI6IE1hdGguZmxvb3Ioc3RhcnRDb2xvci5jb2xvci5iICogKDEgLSByYW5nZVBjdCkgKyBlbmRDb2xvci5jb2xvci5iICogcmFuZ2VQY3QpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb2xvciA9IHRoaXMucGVyY2VudENvbG9yc1tpXS5jb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICdyZ2IoJyArIFtjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iXS5qb2luKCcsJykgKyAnKSc7XG4gICAgfTtcblxuICAgIEdhdWdlLnByb3RvdHlwZS5nZXRDb2xvckZvclZhbHVlID0gZnVuY3Rpb24odmFsLCBncmFkKSB7XG4gICAgICB2YXIgcGN0O1xuICAgICAgcGN0ID0gKHZhbCAtIHRoaXMubWluVmFsdWUpIC8gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzLmdldENvbG9yRm9yUGVyY2VudGFnZShwY3QsIGdyYWQpO1xuICAgIH07XG5cbiAgICBHYXVnZS5wcm90b3R5cGUucmVuZGVyU3RhdGljTGFiZWxzID0gZnVuY3Rpb24oc3RhdGljTGFiZWxzLCB3LCBoLCByYWRpdXMpIHtcbiAgICAgIHZhciBmb250LCBmb250c2l6ZSwgaiwgbGVuLCBtYXRjaCwgcmUsIHJlZiwgcmVzdCwgcm90YXRpb25BbmdsZSwgdmFsdWU7XG4gICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICB0aGlzLmN0eC50cmFuc2xhdGUodywgaCk7XG4gICAgICBmb250ID0gc3RhdGljTGFiZWxzLmZvbnQgfHwgXCIxMHB4IFRpbWVzXCI7XG4gICAgICByZSA9IC9cXGQrXFwuP1xcZD8vO1xuICAgICAgbWF0Y2ggPSBmb250Lm1hdGNoKHJlKVswXTtcbiAgICAgIHJlc3QgPSBmb250LnNsaWNlKG1hdGNoLmxlbmd0aCk7XG4gICAgICBmb250c2l6ZSA9IHBhcnNlRmxvYXQobWF0Y2gpICogdGhpcy5kaXNwbGF5U2NhbGU7XG4gICAgICB0aGlzLmN0eC5mb250ID0gZm9udHNpemUgKyByZXN0O1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gc3RhdGljTGFiZWxzLmNvbG9yIHx8IFwiIzAwMDAwMFwiO1xuICAgICAgdGhpcy5jdHgudGV4dEJhc2VsaW5lID0gXCJib3R0b21cIjtcbiAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICByZWYgPSBzdGF0aWNMYWJlbHMubGFiZWxzO1xuICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgIHZhbHVlID0gcmVmW2pdO1xuICAgICAgICByb3RhdGlvbkFuZ2xlID0gdGhpcy5nZXRBbmdsZSh2YWx1ZSkgLSAzICogTWF0aC5QSSAvIDI7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZShyb3RhdGlvbkFuZ2xlKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoZm9ybWF0TnVtYmVyKHZhbHVlLCBzdGF0aWNMYWJlbHMuZnJhY3Rpb25EaWdpdHMpLCAwLCAtcmFkaXVzIC0gdGhpcy5saW5lV2lkdGggLyAyKTtcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKC1yb3RhdGlvbkFuZ2xlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgfTtcblxuICAgIEdhdWdlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkaXNwbGF5ZWRBbmdsZSwgZmlsbFN0eWxlLCBnYXVnZSwgaCwgaiwgaywgbGVuLCBsZW4xLCByYWRpdXMsIHJlZiwgcmVmMSwgdywgem9uZTtcbiAgICAgIHcgPSB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XG4gICAgICBoID0gdGhpcy5jYW52YXMuaGVpZ2h0ICogdGhpcy5wYWRkaW5nVG9wICsgdGhpcy5hdmFpbGFibGVIZWlnaHQgLSAodGhpcy5yYWRpdXMgKyB0aGlzLmxpbmVXaWR0aCAvIDIpICogdGhpcy5leHRyYVBhZGRpbmc7XG4gICAgICBkaXNwbGF5ZWRBbmdsZSA9IHRoaXMuZ2V0QW5nbGUodGhpcy5kaXNwbGF5ZWRWYWx1ZSk7XG4gICAgICBpZiAodGhpcy50ZXh0RmllbGQpIHtcbiAgICAgICAgdGhpcy50ZXh0RmllbGQucmVuZGVyKHRoaXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5jdHgubGluZUNhcCA9IFwiYnV0dFwiO1xuICAgICAgcmFkaXVzID0gdGhpcy5yYWRpdXMgKiB0aGlzLm9wdGlvbnMucmFkaXVzU2NhbGU7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpY0xhYmVscykge1xuICAgICAgICB0aGlzLnJlbmRlclN0YXRpY0xhYmVscyh0aGlzLm9wdGlvbnMuc3RhdGljTGFiZWxzLCB3LCBoLCByYWRpdXMpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWNab25lcykge1xuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh3LCBoKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XG4gICAgICAgIHJlZiA9IHRoaXMub3B0aW9ucy5zdGF0aWNab25lcztcbiAgICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgem9uZSA9IHJlZltqXTtcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHpvbmUuc3Ryb2tlU3R5bGU7XG4gICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgdGhpcy5jdHguYXJjKDAsIDAsIHJhZGl1cywgdGhpcy5nZXRBbmdsZSh6b25lLm1pbiksIHRoaXMuZ2V0QW5nbGUoem9uZS5tYXgpLCBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jdXN0b21GaWxsU3R5bGUgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGZpbGxTdHlsZSA9IHRoaXMub3B0aW9ucy5jdXN0b21GaWxsU3R5bGUodGhpcyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZXJjZW50Q29sb3JzICE9PSBudWxsKSB7XG4gICAgICAgICAgZmlsbFN0eWxlID0gdGhpcy5nZXRDb2xvckZvclZhbHVlKHRoaXMuZGlzcGxheWVkVmFsdWUsIHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5jb2xvclN0b3AgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZ3JhZGllbnRUeXBlID09PSAwKSB7XG4gICAgICAgICAgICBmaWxsU3R5bGUgPSB0aGlzLmN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh3LCBoLCA5LCB3LCBoLCA3MCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpbGxTdHlsZSA9IHRoaXMuY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHcsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmaWxsU3R5bGUuYWRkQ29sb3JTdG9wKDAsIHRoaXMub3B0aW9ucy5jb2xvclN0YXJ0KTtcbiAgICAgICAgICBmaWxsU3R5bGUuYWRkQ29sb3JTdG9wKDEsIHRoaXMub3B0aW9ucy5jb2xvclN0b3ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbGxTdHlsZSA9IHRoaXMub3B0aW9ucy5jb2xvclN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gZmlsbFN0eWxlO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguYXJjKHcsIGgsIHJhZGl1cywgKDEgKyB0aGlzLm9wdGlvbnMuYW5nbGUpICogTWF0aC5QSSwgZGlzcGxheWVkQW5nbGUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMub3B0aW9ucy5zdHJva2VDb2xvcjtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh3LCBoLCByYWRpdXMsIGRpc3BsYXllZEFuZ2xlLCAoMiAtIHRoaXMub3B0aW9ucy5hbmdsZSkgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHcsIGgpO1xuICAgICAgcmVmMSA9IHRoaXMuZ3A7XG4gICAgICBmb3IgKGsgPSAwLCBsZW4xID0gcmVmMS5sZW5ndGg7IGsgPCBsZW4xOyBrKyspIHtcbiAgICAgICAgZ2F1Z2UgPSByZWYxW2tdO1xuICAgICAgICBnYXVnZS51cGRhdGUodHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5jdHgudHJhbnNsYXRlKC13LCAtaCk7XG4gICAgfTtcblxuICAgIHJldHVybiBHYXVnZTtcblxuICB9KShCYXNlR2F1Z2UpO1xuXG4gIEJhc2VEb251dCA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gICAgZXh0ZW5kKEJhc2VEb251dCwgc3VwZXJDbGFzcyk7XG5cbiAgICBCYXNlRG9udXQucHJvdG90eXBlLmxpbmVXaWR0aCA9IDE1O1xuXG4gICAgQmFzZURvbnV0LnByb3RvdHlwZS5kaXNwbGF5ZWRWYWx1ZSA9IDA7XG5cbiAgICBCYXNlRG9udXQucHJvdG90eXBlLnZhbHVlID0gMzM7XG5cbiAgICBCYXNlRG9udXQucHJvdG90eXBlLm1heFZhbHVlID0gODA7XG5cbiAgICBCYXNlRG9udXQucHJvdG90eXBlLm1pblZhbHVlID0gMDtcblxuICAgIEJhc2VEb251dC5wcm90b3R5cGUub3B0aW9ucyA9IHtcbiAgICAgIGxpbmVXaWR0aDogMC4xMCxcbiAgICAgIGNvbG9yU3RhcnQ6IFwiIzZmNmVhMFwiLFxuICAgICAgY29sb3JTdG9wOiBcIiNjMGMwZGJcIixcbiAgICAgIHN0cm9rZUNvbG9yOiBcIiNlZWVlZWVcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcIiNkNWQ1ZDVcIixcbiAgICAgIGFuZ2xlOiAwLjM1LFxuICAgICAgcmFkaXVzU2NhbGU6IDEuMFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBCYXNlRG9udXQoY2FudmFzKSB7XG4gICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgIEJhc2VEb251dC5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgICAgIGlmICh0eXBlb2YgR192bWxDYW52YXNNYW5hZ2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IHdpbmRvdy5HX3ZtbENhbnZhc01hbmFnZXIuaW5pdEVsZW1lbnQodGhpcy5jYW52YXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgdGhpcy5zZXRPcHRpb25zKCk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIEJhc2VEb251dC5wcm90b3R5cGUuZ2V0QW5nbGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuICgxIC0gdGhpcy5vcHRpb25zLmFuZ2xlKSAqIE1hdGguUEkgKyAoKHZhbHVlIC0gdGhpcy5taW5WYWx1ZSkgLyAodGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWUpKSAqICgoMiArIHRoaXMub3B0aW9ucy5hbmdsZSkgLSAoMSAtIHRoaXMub3B0aW9ucy5hbmdsZSkpICogTWF0aC5QSTtcbiAgICB9O1xuXG4gICAgQmFzZURvbnV0LnByb3RvdHlwZS5zZXRPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIEJhc2VEb251dC5fX3N1cGVyX18uc2V0T3B0aW9ucy5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5saW5lV2lkdGggPSB0aGlzLmNhbnZhcy5oZWlnaHQgKiB0aGlzLm9wdGlvbnMubGluZVdpZHRoO1xuICAgICAgdGhpcy5yYWRpdXMgPSB0aGlzLm9wdGlvbnMucmFkaXVzU2NhbGUgKiAodGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIHRoaXMubGluZVdpZHRoIC8gMik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQmFzZURvbnV0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHRoaXMudmFsdWUgPiB0aGlzLm1heFZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF4VmFsdWUgPSB0aGlzLnZhbHVlICogMS4xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEFuaW1hdGlvblVwZGF0ZXIucnVuKCk7XG4gICAgfTtcblxuICAgIEJhc2VEb251dC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZGlzcGxheWVkQW5nbGUsIGdyZEZpbGwsIGgsIHN0YXJ0LCBzdG9wLCB3O1xuICAgICAgZGlzcGxheWVkQW5nbGUgPSB0aGlzLmdldEFuZ2xlKHRoaXMuZGlzcGxheWVkVmFsdWUpO1xuICAgICAgdyA9IHRoaXMuY2FudmFzLndpZHRoIC8gMjtcbiAgICAgIGggPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgaWYgKHRoaXMudGV4dEZpZWxkKSB7XG4gICAgICAgIHRoaXMudGV4dEZpZWxkLnJlbmRlcih0aGlzKTtcbiAgICAgIH1cbiAgICAgIGdyZEZpbGwgPSB0aGlzLmN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh3LCBoLCAzOSwgdywgaCwgNzApO1xuICAgICAgZ3JkRmlsbC5hZGRDb2xvclN0b3AoMCwgdGhpcy5vcHRpb25zLmNvbG9yU3RhcnQpO1xuICAgICAgZ3JkRmlsbC5hZGRDb2xvclN0b3AoMSwgdGhpcy5vcHRpb25zLmNvbG9yU3RvcCk7XG4gICAgICBzdGFydCA9IHRoaXMucmFkaXVzIC0gdGhpcy5saW5lV2lkdGggLyAyO1xuICAgICAgc3RvcCA9IHRoaXMucmFkaXVzICsgdGhpcy5saW5lV2lkdGggLyAyO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLm9wdGlvbnMuc3Ryb2tlQ29sb3I7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4LmFyYyh3LCBoLCB0aGlzLnJhZGl1cywgKDEgLSB0aGlzLm9wdGlvbnMuYW5nbGUpICogTWF0aC5QSSwgKDIgKyB0aGlzLm9wdGlvbnMuYW5nbGUpICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XG4gICAgICB0aGlzLmN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGdyZEZpbGw7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4LmFyYyh3LCBoLCB0aGlzLnJhZGl1cywgKDEgLSB0aGlzLm9wdGlvbnMuYW5nbGUpICogTWF0aC5QSSwgZGlzcGxheWVkQW5nbGUsIGZhbHNlKTtcbiAgICAgIHJldHVybiB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEJhc2VEb251dDtcblxuICB9KShCYXNlR2F1Z2UpO1xuXG4gIERvbnV0ID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgICBleHRlbmQoRG9udXQsIHN1cGVyQ2xhc3MpO1xuXG4gICAgZnVuY3Rpb24gRG9udXQoKSB7XG4gICAgICByZXR1cm4gRG9udXQuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgRG9udXQucHJvdG90eXBlLnN0cm9rZUdyYWRpZW50ID0gZnVuY3Rpb24odywgaCwgc3RhcnQsIHN0b3ApIHtcbiAgICAgIHZhciBncmQ7XG4gICAgICBncmQgPSB0aGlzLmN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh3LCBoLCBzdGFydCwgdywgaCwgc3RvcCk7XG4gICAgICBncmQuYWRkQ29sb3JTdG9wKDAsIHRoaXMub3B0aW9ucy5zaGFkb3dDb2xvcik7XG4gICAgICBncmQuYWRkQ29sb3JTdG9wKDAuMTIsIHRoaXMub3B0aW9ucy5fb3JnU3Ryb2tlQ29sb3IpO1xuICAgICAgZ3JkLmFkZENvbG9yU3RvcCgwLjg4LCB0aGlzLm9wdGlvbnMuX29yZ1N0cm9rZUNvbG9yKTtcbiAgICAgIGdyZC5hZGRDb2xvclN0b3AoMSwgdGhpcy5vcHRpb25zLnNoYWRvd0NvbG9yKTtcbiAgICAgIHJldHVybiBncmQ7XG4gICAgfTtcblxuICAgIERvbnV0LnByb3RvdHlwZS5zZXRPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIGgsIHN0YXJ0LCBzdG9wLCB3O1xuICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIERvbnV0Ll9fc3VwZXJfXy5zZXRPcHRpb25zLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgICB3ID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xuICAgICAgaCA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICBzdGFydCA9IHRoaXMucmFkaXVzIC0gdGhpcy5saW5lV2lkdGggLyAyO1xuICAgICAgc3RvcCA9IHRoaXMucmFkaXVzICsgdGhpcy5saW5lV2lkdGggLyAyO1xuICAgICAgdGhpcy5vcHRpb25zLl9vcmdTdHJva2VDb2xvciA9IHRoaXMub3B0aW9ucy5zdHJva2VDb2xvcjtcbiAgICAgIHRoaXMub3B0aW9ucy5zdHJva2VDb2xvciA9IHRoaXMuc3Ryb2tlR3JhZGllbnQodywgaCwgc3RhcnQsIHN0b3ApO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIHJldHVybiBEb251dDtcblxuICB9KShCYXNlRG9udXQpO1xuXG4gIHdpbmRvdy5BbmltYXRpb25VcGRhdGVyID0ge1xuICAgIGVsZW1lbnRzOiBbXSxcbiAgICBhbmltSWQ6IG51bGwsXG4gICAgYWRkQWxsOiBmdW5jdGlvbihsaXN0KSB7XG4gICAgICB2YXIgZWxlbSwgaiwgbGVuLCByZXN1bHRzO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChqID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICBlbGVtID0gbGlzdFtqXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKEFuaW1hdGlvblVwZGF0ZXIuZWxlbWVudHMucHVzaChlbGVtKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9LFxuICAgIGFkZDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICByZXR1cm4gQW5pbWF0aW9uVXBkYXRlci5lbGVtZW50cy5wdXNoKG9iamVjdCk7XG4gICAgfSxcbiAgICBydW46IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFuaW1hdGlvbkZpbmlzaGVkLCBlbGVtLCBqLCBsZW4sIHJlZjtcbiAgICAgIGFuaW1hdGlvbkZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgIHJlZiA9IEFuaW1hdGlvblVwZGF0ZXIuZWxlbWVudHM7XG4gICAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgZWxlbSA9IHJlZltqXTtcbiAgICAgICAgaWYgKGVsZW0udXBkYXRlKCkpIHtcbiAgICAgICAgICBhbmltYXRpb25GaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWFuaW1hdGlvbkZpbmlzaGVkKSB7XG4gICAgICAgIHJldHVybiBBbmltYXRpb25VcGRhdGVyLmFuaW1JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShBbmltYXRpb25VcGRhdGVyLnJ1bik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoQW5pbWF0aW9uVXBkYXRlci5hbmltSWQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBpZiAodHlwZW9mIHdpbmRvdy5kZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgKHdpbmRvdy5kZWZpbmUuYW1kICE9IG51bGwpKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgR2F1Z2U6IEdhdWdlLFxuICAgICAgICBEb251dDogRG9udXQsXG4gICAgICAgIEJhc2VEb251dDogQmFzZURvbnV0LFxuICAgICAgICBUZXh0UmVuZGVyZXI6IFRleHRSZW5kZXJlclxuICAgICAgfTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiAobW9kdWxlLmV4cG9ydHMgIT0gbnVsbCkpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgIEdhdWdlOiBHYXVnZSxcbiAgICAgIERvbnV0OiBEb251dCxcbiAgICAgIEJhc2VEb251dDogQmFzZURvbnV0LFxuICAgICAgVGV4dFJlbmRlcmVyOiBUZXh0UmVuZGVyZXJcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5HYXVnZSA9IEdhdWdlO1xuICAgIHdpbmRvdy5Eb251dCA9IERvbnV0O1xuICAgIHdpbmRvdy5CYXNlRG9udXQgPSBCYXNlRG9udXQ7XG4gICAgd2luZG93LlRleHRSZW5kZXJlciA9IFRleHRSZW5kZXJlcjtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dhdWdlLmpzL2Rpc3QvZ2F1Z2UuanNcbi8vIG1vZHVsZSBpZCA9IDM4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDExIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTZmMjgzMTk1IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9nYXVnZS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2dhdWdlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTZmMjgzMTk1IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2dhdWdlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZ2F1Z2UudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTZmMjgzMTk1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNmYyODMxOTVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlXG4vLyBtb2R1bGUgaWQgPSAzODFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdwYWdlLWhlYWRlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBfdm0uJHQoJ3JlcG9ydHMucmVwb3J0JyksXG4gICAgICBcImJyZWFkY3J1bWJzXCI6IF92bS5icmVhZGNydW1ic1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgcmVwb3J0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0xMFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1zbS0zIGNvbC14cy02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXRleHRcIlxuICB9LCBbX3ZtLl92KFwiRUZGRUNUSVZFTkVTU1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IHRleHQtcmlnaHRcIlxuICB9LCBbX2MoJ2g1Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLWhlYWRlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lZmZlY3RpdmVuZXNzLnBlcmNlbnRhZ2UpICsgXCIlXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiB0ZXh0LWxlZnRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uZWZmZWN0aXZlbmVzcy52aWN0b3JpZXMpICsgXCJWXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uZWZmZWN0aXZlbmVzcy5kZWZlYXRzKSArIFwiVlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTMgY29sLXhzLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdGV4dFwiXG4gIH0sIFtfdm0uX3YoXCJWQUxJRFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IHRleHQtcmlnaHRcIlxuICB9LCBbX2MoJ2g1Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLWhlYWRlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS52YWxpZC5wZXJjZW50YWdlKSArIFwiJVwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1sZWZ0XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnZhbGlkLnZhbGlkKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udmFsaWQubm9WYWxpZCkgKyBcIlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTMgY29sLXhzLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdGV4dFwiXG4gIH0sIFtfdm0uX3YoXCJBVkVSQUdFXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1yaWdodFwiXG4gIH0sIFtfYygnaDUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24taGVhZGVyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmF2ZXJhZ2UucGVyY2VudGFnZSkgKyBcIiVcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IHRleHQtbGVmdFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5hdmVyYWdlLmdpdmVuKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uYXZlcmFnZS5yZWNlaXZlZCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTMgY29sLXhzLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdGV4dFwiXG4gIH0sIFtfdm0uX3YoXCJQRVJGRUNUSU9OXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1yaWdodFwiXG4gIH0sIFtfYygnaDUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24taGVhZGVyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnBlcmZlY3Rpb24ucGVyY2VudGFnZSkgKyBcIiVcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IHRleHQtbGVmdFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5wZXJmZWN0aW9uLnBlcmZlY3QpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5wZXJmZWN0aW9uLmltcGVyZmVjdCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLWJsb2NrXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXRleHRcIlxuICB9LCBbX3ZtLl92KFwiVElNRSBDT05TVU1FXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1yaWdodFwiXG4gIH0sIFtfYygnaDUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24taGVhZGVyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRpbWVDb25zdW1lZC5wZXJjZW50YWdlKSArIFwiJVwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1sZWZ0XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpbWVDb25zdW1lZC50aW1lQ29uc3VtZWQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50aW1lQ29uc3VtZWQudGltZUlkbGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSldKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtMTBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJuYXYtdGFicy1jdXN0b21cIlxuICB9LCBbX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5hdiBuYXYtdGFic1wiXG4gIH0sIF92bS5fbCgoX3ZtLnBvaW50VnNUaW1lR3JhcGhzKSwgZnVuY3Rpb24ocG9pbnRWc1RpbWVHcmFwaCwgaW5kZXgpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywge1xuICAgICAgY2xhc3M6IHtcbiAgICAgICAgJ2FjdGl2ZSc6IGluZGV4ID09IDBcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogJyMnICsgcG9pbnRWc1RpbWVHcmFwaC5pZCxcbiAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiLFxuICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MocG9pbnRWc1RpbWVHcmFwaC5uYW1lKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSlcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhYi1jb250ZW50XCJcbiAgfSwgX3ZtLl9sKChfdm0ucG9pbnRWc1RpbWVHcmFwaHMpLCBmdW5jdGlvbihwb2ludFZzVGltZUdyYXBoLCBpbmRleCkge1xuICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmVcIixcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdhY3RpdmUnOiBpbmRleCA9PSAwXG4gICAgICB9LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJpZFwiOiBwb2ludFZzVGltZUdyYXBoLmlkXG4gICAgICB9XG4gICAgfSwgW19jKCdoaWdoY2hhcnRzJywge1xuICAgICAgcmVmOiBwb2ludFZzVGltZUdyYXBoLmlkLFxuICAgICAgcmVmSW5Gb3I6IHRydWUsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm9wdGlvbnNcIjogcG9pbnRWc1RpbWVHcmFwaC5vcHRpb25zXG4gICAgICB9XG4gICAgfSldLCAxKVxuICB9KSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC0yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIlxuICB9LCBbX2MoJ2dhdWdlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5vZmZlbnNpdmVHYXVnZS5kYXRhLFxuICAgICAgXCJjb2xvclwiOiBcImdyZWVuXCIsXG4gICAgICBcInRpdGxlXCI6IFwiQ291bnRlcm9mZmVuc2l2ZVwiXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIlxuICB9LCBbX2MoJ2dhdWdlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5kZWZlbnNpdmVHYXVnZS5kYXRhLFxuICAgICAgXCJjb2xvclwiOiBcInllbGxvd1wiLFxuICAgICAgXCJ0aXRsZVwiOiBcIkRlZmVuc2l2ZVwiXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIlxuICB9LCBbX2MoJ2dhdWdlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5jb3VudGVyT2ZmZW5zaXZlR2F1Z2UuZGF0YSxcbiAgICAgIFwiY29sb3JcIjogXCJyZWRcIixcbiAgICAgIFwidGl0bGVcIjogXCJPZmZlbnNpdmVcIlxuICAgIH1cbiAgfSldLCAxKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLThcIlxuICB9LCBbX2MoJ2hpZ2hjaGFydHMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwib3B0aW9uc1wiOiBfdm0ucGllXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNFwiXG4gIH0sIFtfYygnaGlnaGNoYXJ0cycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJvcHRpb25zXCI6IF92bS5iYXJcbiAgICB9XG4gIH0pXSwgMSldKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDEyNWRhMzBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTQxMjVkYTMwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IDQxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDExIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2F1Z2VcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBfdm0uY29udGFpbmVySWRcbiAgICB9XG4gIH0sIFtfYygnaDQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIlxuICB9LCBbX2MoJ2InLCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdjYW52YXMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogX3ZtLmVsZW1lbnRJZFxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ29hbC13cmFwcGVyIGNsZWFyZml4XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdhdWdlLXZhbHVlIHB1bGwtbGVmdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IF92bS50ZXh0SWRcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnYXVnZS12YWx1ZSBwdWxsLWxlZnRcIlxuICB9LCBbX3ZtLl92KFwiJVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnb2FsLXZhbHVlIHB1bGwtcmlnaHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImdvYWwtdGV4dFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiMTAwJVwiKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi02ZjI4MzE5NVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNmYyODMxOTUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQxMjVkYTMwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi92aWV3LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJiMmYyMDc0YVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDEyNWRhMzAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3ZpZXcudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00MTI1ZGEzMCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdmlldy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQxMjVkYTMwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3ZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSA0NTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmYyODMxOTUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2dhdWdlLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI3Nzc4Yzk3NlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmYyODMxOTUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2dhdWdlLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmYyODMxOTUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2dhdWdlLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmYyODMxOTUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWVcbi8vIG1vZHVsZSBpZCA9IDQ2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDExIl0sInNvdXJjZVJvb3QiOiIifQ==