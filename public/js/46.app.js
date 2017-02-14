webpackJsonp([46,25],{

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(190)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(187),
  /* template */
  __webpack_require__(189),
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

/***/ 187:
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

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.admin-header {\n  height: 97px;\n  margin-bottom: 20px;\n}\n.admin-header .row {\n    margin-bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 189:
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

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(188);
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

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(516)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(506),
  /* template */
  __webpack_require__(512),
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

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pageHeader = __webpack_require__(186);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _gauge = __webpack_require__(532);

var _gauge2 = _interopRequireDefault(_gauge);

var _reports = __webpack_require__(519);

var _reports2 = _interopRequireDefault(_reports);

var _reportService = __webpack_require__(522);

var _reportService2 = _interopRequireDefault(_reportService);

var _uuid = __webpack_require__(243);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            options: {
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
                    categories: ['0:01', '0:25', '0:40', '0:55', '1:04', '1:16', '2:00', '2:23', '2:48', '3:01', '3:16', '3:30'],
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
                    data: [0, 1, 1, 2, 3, 4, 4, 5]

                }, {
                    name: 'Javier Bastidas',
                    color: '#64b5f6',
                    index: 1,

                    marker: {
                        symbol: 'circle',
                        radius: 12
                    },
                    data: [0, 0, 1, 1, 2, 2, 3, 3]
                }]
            },
            pie: {
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
            },
            bar: {
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
            },
            gauge: {
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
            }
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

        _reportService2.default.show(this.$route.params.id, function (response) {
            _this.report = response.data;
        }, function (error) {
            console.log(error);
        });
    },
    mounted: function mounted() {}
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.report {\n    background-color: white;\n}\n.border-right {\n    border-right: 1px solid #666;\n}\n.description-text {\n    font-size: 20px;\n    font-weight: bold;\n}\n.description-percentage {\n    font-size: 15px;\n    font-weight: bold;\n}\n.description-header {\n    font-size: 20px;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/reports/view.vue?92132f18"],"names":[],"mappings":";AA6JA;IACA,wBAAA;CACA;AAEA;IACA,6BAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA","file":"view.vue","sourcesContent":["<template>\n    <div>\n        <page-header :title=\"$t('reports.report')\" :breadcrumbs=\"breadcrumbs\"></page-header>\n        <section class=\"content report\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-10\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-3 col-xs-6\">\n                            <div class=\"description-block border-right\">\n                                <span class=\"description-text\">EFECTIVITY</span>\n                                <div class=\"row\">\n                                    <div class=\"col-xs-6 text-right\">\n                                        <h5 class=\"description-header\">100%</h5>\n\n                                    </div>\n                                    <div class=\"col-xs-6 text-left\">\n                                        <span class=\"description-percentage text-green\">\n                                            7V\n                                        </span>\n                                        <br>\n                                        <span class=\"description-percentage text-red\">\n                                            0V\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- /.description-block -->\n                        </div>\n                        <!-- /.col -->\n                        <div class=\"col-sm-3 col-xs-6\">\n                            <div class=\"description-block border-right\">\n                                <span class=\"description-text\">VALID</span>\n\n                                <div class=\"row\">\n                                    <div class=\"col-xs-6 text-right\">\n                                        <h5 class=\"description-header\">57%</h5>\n\n                                    </div>\n                                    <div class=\"col-xs-6 text-left\">\n                                        <span class=\"description-percentage text-green\">\n                                            55\n                                        </span>\n                                        <br>\n                                        <span class=\"description-percentage text-red\">\n                                            22\n                                        </span>\n                                    </div>\n                                </div>\n\n                            </div>\n                            <!-- /.description-block -->\n                        </div>\n                        <!-- /.col -->\n                        <div class=\"col-sm-3 col-xs-6\">\n                            <div class=\"description-block border-right\">\n                                <span class=\"description-text\">AVERAGE</span>\n                                <div class=\"row\">\n                                    <div class=\"col-xs-6 text-right\">\n                                        <h5 class=\"description-header\">40%</h5>\n\n                                    </div>\n                                    <div class=\"col-xs-6 text-left\">\n                                        <span class=\"description-percentage text-green\">\n                                            25\n                                        </span>\n                                        <br>\n                                        <span class=\"description-percentage text-red\">\n                                            12\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- /.description-block -->\n                        </div>\n                        <div class=\"col-sm-3 col-xs-6\">\n                            <div class=\"description-block border-right\">\n                                <span class=\"description-text\">PERFECTION</span>\n                                <div class=\"row\">\n                                    <div class=\"col-xs-6 text-right\">\n                                        <h5 class=\"description-header\">55%</h5>\n\n                                    </div>\n                                    <div class=\"col-xs-6 text-left\">\n                                        <span class=\"description-percentage text-green\">\n                                            35\n                                        </span>\n                                        <br>\n                                        <span class=\"description-percentage text-red\">\n                                            3\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xs-12 col-md-2\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12\">\n                            <div class=\"description-block\">\n                                <span class=\"description-text\">TIME CONSUME</span>\n\n                                <div class=\"row\">\n                                    <div class=\"col-xs-6 text-right\">\n                                        <h5 class=\"description-header\">85%</h5>\n\n                                    </div>\n                                    <div class=\"col-xs-6 text-left\">\n                                        <span class=\"description-percentage text-green\">\n                                            7:45\n                                        </span>\n                                        <br>\n                                        <span class=\"description-percentage text-red\">\n                                            14:20\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- /.description-block -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-10\">\n                    <highcharts :options=\"options\"></highcharts>\n                </div>\n                <div class=\"col-md-2\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\n                            <gauge value=\"15\" title=\"Contraofensividad\"></gauge>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\n                            <gauge value=\"25\" title=\"Defensividad\"></gauge>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\n                            <gauge value=\"60\" title=\"Ofensividad\"></gauge>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-8\">\n                    <highcharts :options=\"pie\"></highcharts>\n                </div>\n                <div class=\"col-xs-12 col-md-4\">\n                    <highcharts :options=\"bar\"></highcharts>\n                </div>\n            </div>\n        </section>\n    </div>\n</template>\n<style>\n    .report {\n        background-color: white;\n    }\n\n    .border-right {\n        border-right: 1px solid #666;\n    }\n\n    .description-text {\n        font-size: 20px;\n        font-weight: bold;\n    }\n\n    .description-percentage {\n        font-size: 15px;\n        font-weight: bold;\n    }\n\n    .description-header {\n        font-size: 20px;\n        font-weight: bold;\n    }\n</style>\n<script type=\"text/babel\">\n    import pageHeader from 'base/components/header/pageHeader.vue'\n    import gauge from 'base/components/charts/gauges/gauge.vue'\n    import reportsLocales from 'base/lang/admin/reports/reports.js';\n    import reportService from 'base/dashboard/services/reports/reportService'\n    import uuidMixin from 'base/mixins/uuid'\n\n    export default{\n        locales: reportsLocales,\n        components: {\n            pageHeader,\n            gauge\n        },\n        mixins: [uuidMixin],\n        data(){\n            return {\n                reports: {},\n                options: {\n                    chart: {\n                        type: 'line'\n                    },\n                    title: {\n                        text: 'Points vs Time'\n                    },\n                    xAxis: {\n                        title: {\n                            text: 'Time'\n                        },\n                        categories: ['0:01', '0:25', '0:40', '0:55', '1:04', '1:16',\n                            '2:00', '2:23', '2:48', '3:01', '3:16', '3:30'],\n                        labels: {\n                            formatter: function () {\n                                return this.value + 'min';\n                            }\n                        }\n                    },\n                    yAxis: {\n                        title: {\n                            text: 'Points'\n                        },\n                        labels: {\n                            formatter: function () {\n                                return this.value + 'pt';\n                            }\n                        }\n                    },\n                    tooltip: {\n                        crosshairs: true,\n                        shared: true\n                    },\n                    plotOptions: {\n                        line: {\n                            marker: {\n                                radius: 8,\n                                lineWidth: 0\n                            },\n                            dataLabels: {\n                                enabled: true,\n                                color: 'white',\n                                verticalAlign: 'middle',\n                                crop: false,\n                                overflow: 'none',\n                                style: {\n                                    fontWeight: 'bold',\n                                    textOutline: 'none',\n                                    fontSize:'16px'\n                                }\n                            }\n                        }\n                    },\n                    series: [{\n                        name: 'Pedro Gorrin',\n                        color: '#ff6600',\n                        index: 2,\n                        marker: {\n                            symbol: 'circle',\n                            radius: 12\n\n                        },\n                        data: [0, 1, 1, 2, 3, 4, 4, 5]\n\n                    }, {\n                        name: 'Javier Bastidas',\n                        color: '#64b5f6',\n                        index: 1,\n\n                        marker: {\n                            symbol: 'circle',\n                            radius: 12\n                        },\n                        data: [0, 0, 1, 1, 2, 2, 3, 3]\n                    }]\n                },\n                pie: {\n                    chart: {\n                        plotBackgroundColor: null,\n                        plotBorderWidth: null,\n                        plotShadow: false,\n                        type: 'pie'\n                    },\n                    title: {\n                        text: 'Combat Status'\n                    },\n                    tooltip: {\n                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'\n                    },\n                    plotOptions: {\n                        pie: {\n                            allowPointSelect: true,\n                            cursor: 'pointer',\n                            dataLabels: {\n                                enabled: false,\n                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',\n                                style: {\n                                    color: 'black'\n                                }\n                            },\n                            showInLegend: true\n                        }\n                    },\n                    series: [{\n                        name: 'Percent',\n                        colorByPoint: true,\n                        data: [{\n                            name: 'EQUAL',\n                            y: 20\n                        }, {\n                            name: 'UP',\n                            y: 60,\n                        }, {\n                            name: 'DOWN',\n                            y: 20\n                        }]\n                    }]\n                },\n                bar: {\n                    chart: {\n                        type: 'bar'\n                    },\n                    title: {\n                        text: 'Parry'\n                    },\n                    xAxis: {\n                        categories: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],\n                        title: {\n                            text: 'Body Zone'\n                        }\n                    },\n                    yAxis: {\n                        min: 0,\n                        title: {\n                            text: 'Number of Parrys',\n                            align: 'high'\n                        },\n                        labels: {\n                            overflow: 'justify'\n                        }\n                    },\n                    plotOptions: {\n                        bar: {\n                            dataLabels: {\n                                enabled: true\n                            }\n                        }\n                    },\n                    legend: {\n                        layout: 'vertical',\n                        align: 'right',\n                        verticalAlign: 'top',\n                        x: -40,\n                        y: 80,\n                        floating: true,\n                        borderWidth: 1,\n                        backgroundColor: '#FFFFFF',\n                        shadow: true\n                    },\n                    credits: {\n                        enabled: false\n                    },\n                    series: [{\n                        name: 'Parry Numbers',\n                        data: [1, 0, 2, 2, 0, 3, 4, 0, 0, 1, 0, 0]\n                    }]\n                },\n                gauge: {\n                    chart: {\n                        type: 'solidgauge',\n                        height: 150\n                    },\n                    yAxis: {\n                        min: 0,\n                        max: 100,\n                        title: {\n                            text: null,\n                            y: -70\n\n                        },\n                        stops: [\n                            [0.1, '#55BF3B'] // green\n                        ],\n                        lineWidth: 0,\n                        minorTickInterval: null,\n                        tickAmount: 2,\n                        labels: {\n                            enabled: false\n                        }\n                    },\n\n                    credits: {\n                        enabled: false\n                    },\n\n                    series: [{\n                        name: null,\n                        data: [80],\n                        dataLabels: {\n                            format: '<div style=\"text-align:center\"><span style=\"font-size:13px;color:' +\n                            ('black') + '\">{y}%</span><br/>',\n                            y: -25\n                        },\n                        tooltip: {\n                            valueSuffix: '%'\n                        }\n                    }],\n                    title: {\n                        text: 'Efectividad'\n                    },\n\n                    pane: {\n                        size: '150%',\n                        startAngle: -90,\n                        endAngle: 90,\n                        background: {\n                            backgroundColor: '#EEE',\n                            innerRadius: '60%',\n                            outerRadius: '100%',\n                            shape: 'arc'\n                        }\n                    },\n\n                    tooltip: {\n                        enabled: false\n                    },\n\n                    // the value axis\n                    plotOptions: {\n                        solidgauge: {\n                            dataLabels: {\n                                y: 5,\n                                borderWidth: 0,\n                                useHTML: true\n                            }\n                        }\n                    }\n                }\n            }\n        },\n        computed: {\n            breadcrumbs(){\n                return [\n                    {\n                        href: '/dashboard',\n                        title: this.$t('admin.home')\n                    },\n                    {\n                        href: '/reports/' + this.$route.params.id,\n                        title: 'admin.view'\n                    }\n                ]\n            },\n        },\n        created(){\n            reportService.show(this.$route.params.id,\n                    (response)=> {\n                        this.report = response.data;\n                    },\n                    (error)=> {\n                        console.log(error);\n                    })\n        },\n        mounted(){\n\n        }\n    }\n</script>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-header', {
    attrs: {
      "title": _vm.$t('reports.report'),
      "breadcrumbs": _vm.breadcrumbs
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "content report"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-10"
  }, [_c('highcharts', {
    attrs: {
      "options": _vm.options
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-2"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-10 col-md-offset-1"
  }, [_c('gauge', {
    attrs: {
      "value": "15",
      "title": "Contraofensividad"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-10 col-md-offset-1"
  }, [_c('gauge', {
    attrs: {
      "value": "25",
      "title": "Defensividad"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-10 col-md-offset-1"
  }, [_c('gauge', {
    attrs: {
      "value": "60",
      "title": "Ofensividad"
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
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
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
  }, [_vm._v("EFECTIVITY")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-6 text-right"
  }, [_c('h5', {
    staticClass: "description-header"
  }, [_vm._v("100%")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6 text-left"
  }, [_c('span', {
    staticClass: "description-percentage text-green"
  }, [_vm._v("\n                                        7V\n                                    ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
    staticClass: "description-percentage text-red"
  }, [_vm._v("\n                                        0V\n                                    ")])])])])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("57%")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6 text-left"
  }, [_c('span', {
    staticClass: "description-percentage text-green"
  }, [_vm._v("\n                                        55\n                                    ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
    staticClass: "description-percentage text-red"
  }, [_vm._v("\n                                        22\n                                    ")])])])])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("40%")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6 text-left"
  }, [_c('span', {
    staticClass: "description-percentage text-green"
  }, [_vm._v("\n                                        25\n                                    ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
    staticClass: "description-percentage text-red"
  }, [_vm._v("\n                                        12\n                                    ")])])])])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("55%")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6 text-left"
  }, [_c('span', {
    staticClass: "description-percentage text-green"
  }, [_vm._v("\n                                        35\n                                    ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
    staticClass: "description-percentage text-red"
  }, [_vm._v("\n                                        3\n                                    ")])])])])])])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("85%")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6 text-left"
  }, [_c('span', {
    staticClass: "description-percentage text-green"
  }, [_vm._v("\n                                        7:45\n                                    ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
    staticClass: "description-percentage text-red"
  }, [_vm._v("\n                                        14:20\n                                    ")])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4125da30", module.exports)
  }
}

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(508);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(134)("b2f2074a", content, false);
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

/***/ 519:
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
            "report": "Report"
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
            "report": "Reporte"
        }
    }
};

/***/ }),

/***/ 522:
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
    }
};

/***/ }),

/***/ 530:
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

/***/ 531:
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
        value: { required: true },
        title: { default: '' }
    },
    data: function data() {
        return {
            gauge: null,
            opts: {
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
            },
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
            var gaugeLib = __webpack_require__(530);
            var width = document.getElementById(this.containerId).offsetWidth;
            var height = width / 2;
            document.getElementById(this.elementId).setAttribute('width', width + 'px');
            document.getElementById(this.elementId).setAttribute('height', height + 'px');
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

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(535)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(531),
  /* template */
  __webpack_require__(533),
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

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "gauge",
    attrs: {
      "id": _vm.containerId
    }
  }, [_c('h4', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('canvas', {
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

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.gauge {\n    background-color: white;\n}\n.goal-wrapper {\n    font-size: 16px;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/charts/gauges/gauge.vue?4d6742d4"],"names":[],"mappings":";AAaA;IACA,wBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA","file":"gauge.vue","sourcesContent":["<template>\n    <div :id=\"containerId\" class=\"gauge\">\n        <h4 class=\"text-center\">{{title}}</h4>\n        <canvas :id=\"elementId\"></canvas>\n        <div class=\"goal-wrapper clearfix\">\n            <span :id=\"textId\" class=\"gauge-value pull-left\"></span>\n            <span class=\"gauge-value pull-left\">%</span>\n            <span id=\"goal-text\" class=\"goal-value pull-right\">100%</span>\n        </div>\n    </div>\n</template>\n\n<style>\n    .gauge {\n        background-color: white;\n    }\n\n    .goal-wrapper {\n        font-size: 16px;\n        font-weight: bold;\n    }\n</style>\n<script>\n    import uuidMixin from 'base/mixins/uuid'\n\n    export default{\n\n        props: {\n            value: {required: true},\n            title: {default: ''}\n        },\n        data(){\n            return {\n                gauge: null,\n                opts: {\n                    angle: -0.02, // The span of the gauge arc\n                    lineWidth: 0.44, // The line thickness\n                    radiusScale: 1, // Relative radius\n                    pointer: {\n                        length: 0.6, // // Relative to gauge radius\n                        strokeWidth: 0.035, // The thickness\n                        color: '#000000' // Fill color\n                    },\n                    limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max\n                    limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually\n                    colorStart: '#6FADCF',   // Colors\n                    colorStop: '#8FC0DA',    // just experiment with them\n                    strokeColor: '#E0E0E0',  // to see which ones work best for you\n                    generateGradient: true,\n                    highDpiSupport: true     // High resolution support\n                },\n                timeoutHandle: null\n            }\n        },\n        computed: {\n            elementId(){\n                return this.generateUUID()\n            },\n            containerId(){\n                return this.generateUUID()\n            },\n            textId(){\n                return this.generateUUID()\n            }\n        },\n        mixins: [uuidMixin],\n        mounted(){\n            this.draw();\n            window.addEventListener('resize', this.redraw);\n        },\n        methods: {\n            draw() {\n                var gaugeLib = require('gauge.js');\n                var width = document.getElementById(this.containerId).offsetWidth;\n                var height = width / 2;\n                document.getElementById(this.elementId).setAttribute('width', width + 'px');\n                document.getElementById(this.elementId).setAttribute('height', height + 'px');\n                this.gauge = new gaugeLib.Gauge(document.getElementById(this.elementId)).setOptions(this.opts);\n                this.gauge.maxValue = 100; // set max gauge value\n                this.gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0\n                this.gauge.animationSpeed = 65; // set animation speed (32 is default value)\n                this.gauge.set(this.value); // set actual value\n                this.gauge.setTextField(document.getElementById(this.textId));\n            },\n            redraw() {\n                document.getElementById(this.elementId).getContext('2d').save();\n                document.getElementById(this.elementId).getContext('2d').setTransform(1, 0, 0, 1, 0, 0);\n                document.getElementById(this.elementId).getContext('2d').clearRect(0, 0, document.getElementById(this.elementId).getContext('2d').canvas.width, document.getElementById(this.elementId).getContext('2d').canvas.height);\n                document.getElementById(this.elementId).getContext('2d').restore();\n\n                if (this.timeoutHandle)\n                    window.clearTimeout(this.timeoutHandle);\n\n                this.timeoutHandle = window.setTimeout(this.draw, 250);\n            }\n        }\n    }\n</script>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(534);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(134)("7778c976", content, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlIiwid2VicGFjazovLy9wYWdlSGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlP2E1NmYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT8zOGEzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/NDQxMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy91dWlkLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy92aWV3LnZ1ZSIsIndlYnBhY2s6Ly8vdmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3ZpZXcudnVlPzk2MDMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3ZpZXcudnVlP2UwNGEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3ZpZXcudnVlPzNmZjAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYW5nL2FkbWluL3JlcG9ydHMvcmVwb3J0cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9nYXVnZS5qcy9kaXN0L2dhdWdlLmpzIiwid2VicGFjazovLy9nYXVnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZT85ODI4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZT82OGZhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZT8zZDEwIl0sIm5hbWVzIjpbIm1ldGhvZHMiLCJnZW5lcmF0ZVVVSUQiLCJkIiwiRGF0ZSIsImdldFRpbWUiLCJ3aW5kb3ciLCJwZXJmb3JtYW5jZSIsIm5vdyIsInV1aWQiLCJyZXBsYWNlIiwiYyIsInIiLCJNYXRoIiwicmFuZG9tIiwiZmxvb3IiLCJ0b1N0cmluZyIsInNob3ciLCJpZCIsInN1Y2Nlc3NDYWxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImh0dHAiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJib2R5IiwiY2F0Y2giLCJlcnJvciIsImNyZWF0ZSIsImF0aGxldGUiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBOzs7OztrQkFJQTtzQkFFQTtBQUhBOztrQkFLQTt5Q0FDQTt1QkFDQTtBQUdBO0FBTkE7QUFMQTtBQURBLEU7Ozs7Ozs7QUN2QkE7QUFDQTs7O0FBR0E7QUFDQSwwQ0FBMkMsaUJBQWlCLHdCQUF3QixHQUFHLHNCQUFzQix1QkFBdUIsR0FBRzs7QUFFdkk7Ozs7Ozs7O0FDUEEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNyQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7Ozs7Ozs7O2tCQ3BCZTtBQUNYQSxhQUFTO0FBQ0xDLG9CQURLLDBCQUNVO0FBQ1gsZ0JBQUlDLElBQUksSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQVI7QUFDQSxnQkFBSUMsT0FBT0MsV0FBUCxJQUFzQixPQUFPRCxPQUFPQyxXQUFQLENBQW1CQyxHQUExQixLQUFrQyxVQUE1RCxFQUF3RTtBQUNwRUwscUJBQUtJLFlBQVlDLEdBQVosRUFBTCxDQURvRSxDQUM1QztBQUMzQjtBQUNELGdCQUFJQyxPQUFPLHVDQUF1Q0MsT0FBdkMsQ0FBK0MsT0FBL0MsRUFBd0QsVUFBVUMsQ0FBVixFQUFhO0FBQzVFLG9CQUFJQyxJQUFJLENBQUNULElBQUlVLEtBQUtDLE1BQUwsS0FBZ0IsRUFBckIsSUFBMkIsRUFBM0IsR0FBZ0MsQ0FBeEM7QUFDQVgsb0JBQUlVLEtBQUtFLEtBQUwsQ0FBV1osSUFBSSxFQUFmLENBQUo7QUFDQSx1QkFBTyxDQUFDUSxLQUFLLEdBQUwsR0FBV0MsQ0FBWCxHQUFnQkEsSUFBSSxHQUFKLEdBQVUsR0FBM0IsRUFBaUNJLFFBQWpDLENBQTBDLEVBQTFDLENBQVA7QUFDSCxhQUpVLENBQVg7QUFLQSxtQkFBT1AsSUFBUDtBQUNIO0FBWkk7QUFERSxDOzs7Ozs7OztBQ0NmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7QUNzSkE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7Ozs7OztBQUVBOztBQUVBO0FBRUE7QUFIQTtZQUlBOzBCQUNBOztxQkFFQTs7OzBCQUlBO0FBRkE7OzBCQUtBO0FBRkE7Ozs4QkFNQTtBQUZBO3lFQUdBLGdEQUNBOzt3REFFQTtnREFDQTtBQUdBO0FBTEE7QUFOQTs7OzhCQWVBO0FBRkE7O3dEQUlBO2dEQUNBO0FBR0E7QUFMQTtBQUpBOztnQ0FXQTs0QkFFQTtBQUhBOzs7O29DQU9BO3VDQUVBO0FBSEE7O3FDQUtBO21DQUNBOzJDQUNBO2tDQUNBO3NDQUNBOzs0Q0FFQTs2Q0FDQTswQ0FLQTtBQVBBO0FBTkE7QUFMQTtBQURBOzswQkFxQkE7MkJBQ0E7MkJBQ0E7O2dDQUVBO2dDQUdBOztBQUpBO2dEQU1BOztBQVZBOzBCQVlBOzJCQUNBOzJCQUVBOzs7Z0NBRUE7Z0NBRUE7QUFIQTtnREFNQTtBQVhBO0FBaEVBOzs7eUNBOEVBO3FDQUNBO2dDQUNBOzBCQUVBO0FBTEE7OzBCQVFBO0FBRkE7O2lDQUtBO0FBRkE7OzswQ0FLQTtnQ0FDQTs7cUNBRUE7b0NBQ0E7O3VDQUlBO0FBSEE7QUFIQTtzQ0FTQTtBQVpBO0FBREE7OzBCQWVBO2tDQUNBOzs4QkFFQTsyQkFDQTtBQUZBOzhCQUlBOzJCQUNBO0FBRkE7OEJBSUE7MkJBSUE7QUFMQTtBQVRBO0FBM0JBOzs7MEJBNkNBO0FBRkE7OzBCQUtBO0FBRkE7OzJGQUlBOzs4QkFJQTtBQUhBO0FBRkE7O3lCQU9BOzs4QkFFQTsrQkFFQTtBQUhBOztrQ0FPQTtBQUhBO0FBTkE7Ozs7cUNBZ0JBO0FBSkE7QUFEQTtBQURBOzs0QkFRQTsyQkFDQTttQ0FDQTt3QkFDQTt1QkFDQTs4QkFDQTtpQ0FDQTtxQ0FDQTs0QkFFQTtBQVZBOzs2QkFhQTtBQUZBOzswQkFJQTs0REFHQTtBQUpBO0FBNUNBOzs7MEJBbURBOzRCQUVBO0FBSEE7O3lCQUtBO3lCQUNBOzs4QkFFQTs0QkFHQTs7QUFKQTs2Q0FPQTtBQUZBOytCQUdBO3VDQUNBO2dDQUNBOztpQ0FLQTtBQUpBO0FBZEE7Ozs2QkFzQkE7QUFIQTs7OzBCQUtBOzJCQUNBOztnQ0FFQSxnRkFDQTs0QkFFQTtBQUpBOztxQ0FRQTtBQUhBO0FBUkE7OzBCQWVBO0FBSEE7OzswQkFLQTtpQ0FDQTs4QkFDQTs7eUNBRUE7cUNBQ0E7cUNBQ0E7K0JBSUE7QUFQQTtBQUpBOzs7NkJBZUE7QUFIQTs7QUFJQTs7OzsrQkFJQTt5Q0FDQTtxQ0FNQTtBQVJBO0FBREE7QUFEQTtBQTdEQTtBQXpLQTtBQWlQQTs7OzRDQUVBOztzQkFHQTsrQkFFQTtBQUhBLGFBREE7dURBTUE7dUJBR0E7QUFKQTtBQU1BO0FBYkE7O0FBY0E7O3dEQUNBLHdCQUNBO29DQUNBO0FBQ0EsNEJBQ0E7d0JBQ0E7QUFDQTtBQUNBO2dDQUVBLENBQ0E7QUFuUkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVMQTtBQUNBOzs7QUFHQTtBQUNBLG9DQUFxQyw4QkFBOEIsR0FBRyxpQkFBaUIsbUNBQW1DLEdBQUcscUJBQXFCLHNCQUFzQix3QkFBd0IsR0FBRywyQkFBMkIsc0JBQXNCLHdCQUF3QixHQUFHLHVCQUF1QixzQkFBc0Isd0JBQXdCLEdBQUcsVUFBVSw0SEFBNEgsTUFBTSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLHF0UEFBcXRQLGtDQUFrQyxPQUFPLHVCQUF1Qix1Q0FBdUMsT0FBTywyQkFBMkIsMEJBQTBCLDRCQUE0QixPQUFPLGlDQUFpQywwQkFBMEIsNEJBQTRCLE9BQU8sNkJBQTZCLDBCQUEwQiw0QkFBNEIsT0FBTyxtUEFBbVAsb0pBQW9KLHlEQUF5RCx1REFBdUQsZ0RBQWdELHNCQUFzQiw2QkFBNkIsNkJBQTZCLDhCQUE4Qiw2REFBNkQsK0JBQStCLHVFQUF1RSwrQkFBK0Isa0NBQWtDLHFFQUFxRSx3TUFBd00sc0RBQXNELDREQUE0RCwrQkFBK0IsMkJBQTJCLHVCQUF1QiwrQkFBK0Isa0NBQWtDLHVFQUF1RSxvQ0FBb0Msc0RBQXNELDJEQUEyRCwrQkFBK0IsMkJBQTJCLHVCQUF1QixpQ0FBaUMsd0dBQXdHLHFDQUFxQyxpQ0FBaUMsdUNBQXVDLHlIQUF5SCw0Q0FBNEMsc1NBQXNTLDJNQUEyTSwrQkFBK0IsMkJBQTJCLHVCQUF1QixpQ0FBaUMsZ0tBQWdLLG9IQUFvSCxrRkFBa0YsR0FBRyxxS0FBcUssa0hBQWtILGdGQUFnRixvQkFBb0IseUJBQXlCLDhCQUE4Qiw0TUFBNE0sK0JBQStCLHNFQUFzRSxpQ0FBaUMseUNBQXlDLFlBQVksTUFBTSxxQkFBcUIsNkJBQTZCLHFDQUFxQyxnQ0FBZ0MsZ0pBQWdKLGdHQUFnRyxXQUFXLE9BQU8scUJBQXFCLDhDQUE4Qyx1RkFBdUYsK0JBQStCLDRFQUE0RSx1QkFBdUIsaUNBQWlDLHlIQUF5SCwwR0FBMEcsR0FBRyx3R0FBd0csR0FBRyx5R0FBeUcsd0JBQXdCLG9CQUFvQix5QkFBeUIsOEJBQThCLDREQUE0RCwrQkFBK0IsOERBQThELCtCQUErQix3SUFBd0ksMEVBQTBFLHVCQUF1QiwrQkFBK0IsbUVBQW1FLDZIQUE2SCxvQ0FBb0MsNEVBQTRFLHVCQUF1QixxQ0FBcUMsZ0NBQWdDLDJDQUEyQyw4RUFBOEUsMkJBQTJCLHVCQUF1QixnQ0FBZ0MsMFlBQTBZLGlDQUFpQywrREFBK0QsaUNBQWlDLDJJQUEySSxvQkFBb0IsMkJBQTJCLDhCQUE4Qix5R0FBeUcsK0JBQStCLHNHQUFzRywwR0FBMEcsMFJBQTBSLHVFQUF1RSx1QkFBdUIsbUNBQW1DLCtEQUErRCxtQ0FBbUMsaUhBQWlILHFHQUFxRyx3REFBd0QsRUFBRSw4RUFBOEUscUNBQXFDLHlFQUF5RSx1QkFBdUIsZ0NBQWdDLG9FQUFvRSxnQ0FBZ0MsK0pBQStKLDhOQUE4Tix1QkFBdUIsbUNBQW1DLCtEQUErRCw4RUFBOEUsdUNBQXVDLDJDQUEyQyxzS0FBc0ssMkJBQTJCLHVCQUF1QixtQkFBbUIsZUFBZSxXQUFXLHNCQUFzQiw0QkFBNEIsaURBQWlELDBIQUEwSCx3QkFBd0Isd0lBQXdJLGtDQUFrQyxZQUFZLHFCQUFxQiwyRkFBMkYsc0RBQXNELHVCQUF1QixrQ0FBa0MsNkNBQTZDLHVCQUF1QixZQUFZLHFCQUFxQixhQUFhLE9BQU8sd0NBQXdDOztBQUVsbWxCOzs7Ozs7OztBQ1BBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDektBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7Ozs7Ozs7OztrQkNwQmU7QUFDWCxVQUFNO0FBQ0YsbUJBQVc7QUFDUCxvQkFBUSxjQUREO0FBRVAsc0JBQVUsZUFGSDtBQUdQLG9DQUF3QixxQ0FIakI7QUFJUCx5QkFBYSwwQkFKTjtBQUtQLDRCQUFnQixxQ0FMVDtBQU1QLG9CQUFRLE1BTkQ7QUFPUCw0QkFBZ0IsY0FQVDtBQVFQLDJCQUFlLGFBUlI7QUFTUCxpQ0FBcUIsa0JBVGQ7QUFVUCxzQkFBVTtBQVZIO0FBRFQsS0FESztBQWVYLFVBQU07QUFDRixtQkFBVztBQUNQLG9CQUFRLG1CQUREO0FBRVAsc0JBQVUsZUFGSDtBQUdQLG9DQUF3QiwwQ0FIakI7QUFJUCx5QkFBYSxzQkFKTjtBQUtQLDRCQUFnQixpQ0FMVDtBQU1QLG9CQUFRLFFBTkQ7QUFPUCw0QkFBZ0IsaUJBUFQ7QUFRUCwyQkFBZSxhQVJSO0FBU1AsaUNBQXFCLHVCQVRkO0FBVVAsc0JBQVU7QUFWSDtBQURUO0FBZkssQzs7Ozs7Ozs7Ozs7Ozs7QUNBZjs7Ozs7O2tCQUVlO0FBQ1hRLFFBRFcsZ0JBQ05DLEVBRE0sRUFDRkMsY0FERSxFQUNjQyxhQURkLEVBQzRCO0FBQ25DLGVBQU8sY0FBSUMsSUFBSixDQUFTQyxHQUFULENBQWEsa0JBQWtCSixFQUEvQixFQUNGSyxJQURFLENBQ0csVUFBQ0MsUUFBRDtBQUFBLG1CQUFjTCxlQUFlSyxTQUFTQyxJQUF4QixDQUFkO0FBQUEsU0FESCxFQUVGQyxLQUZFLENBRUksVUFBQ0MsS0FBRDtBQUFBLG1CQUFXUCxjQUFjTyxLQUFkLENBQVg7QUFBQSxTQUZKLENBQVA7QUFHSCxLQUxVO0FBTVhDLFVBTlcsa0JBTUpDLE9BTkksRUFNS1YsY0FOTCxFQU1xQkMsYUFOckIsRUFNbUM7QUFDMUMsZUFBTyxjQUFJQyxJQUFKLENBQVNTLElBQVQsQ0FBYyxjQUFkLEVBQThCRCxPQUE5QixFQUNGTixJQURFLENBQ0csVUFBQ0MsUUFBRDtBQUFBLG1CQUFjTCxlQUFlSyxTQUFTQyxJQUF4QixDQUFkO0FBQUEsU0FESCxFQUVGQyxLQUZFLENBRUksVUFBQ0MsS0FBRDtBQUFBLG1CQUFXUCxjQUFjTyxLQUFkLENBQVg7QUFBQSxTQUZKLENBQVA7QUFHSDtBQVZVLEM7Ozs7Ozs7eUNDRmY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsc0NBQXNDLDBCQUEwQix5REFBeUQsRUFBRSxrQkFBa0IsMEJBQTBCLEVBQUUsbUNBQW1DLDhCQUE4QixvQ0FBb0MsY0FBYzs7QUFFNVI7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyw4QkFBOEI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsRUFBRTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsU0FBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLGdDQUFnQztBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsOEJBQThCO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDREQUE0RCxnQ0FBZ0M7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFVBQVU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFBQTtBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbnpCRDs7Ozs7Ozs7OzJCQUlBOzBCQUVBO0FBSEE7MEJBSUE7O21CQUVBOzs4QkFFQTtpQ0FDQTtnQ0FDQTs7aUNBRUE7d0NBQ0E7cUNBRUE7QUFKQTtpQ0FLQTtpQ0FDQTt1Q0FDQTtzQ0FDQTt3Q0FDQTtrQ0FDQTtxQ0FFQTtBQWhCQTsyQkFrQkE7QUFwQkE7QUFxQkE7Ozt3Q0FFQTt3QkFDQTtBQUNBOzRDQUNBO3dCQUNBO0FBQ0E7a0NBQ0E7d0JBQ0E7QUFFQTtBQVZBO1lBV0E7Z0NBQ0E7YUFDQTsrQ0FDQTtBQUNBOzs7OEJBRUE7K0NBQ0E7a0VBQ0E7aUNBQ0E7a0ZBQ0E7b0ZBQ0E7cUdBQ0E7dUNBQ0E7dUNBQ0E7NENBQ0E7d0NBQ0E7aUVBQ0E7QUFDQTtrQ0FDQTtxRUFDQTtpR0FDQTs0TkFDQTtxRUFFQTs7cUJBQ0Esd0NBRUE7OzhEQUNBO0FBRUE7QUF6QkE7QUE1Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7OztBQy9CQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDbENBO0FBQ0E7OztBQUdBO0FBQ0EsbUNBQW9DLDhCQUE4QixHQUFHLGlCQUFpQixzQkFBc0Isd0JBQXdCLEdBQUcsVUFBVSw0SEFBNEgsS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsMklBQTJJLE9BQU8seVhBQXlYLGtDQUFrQyxPQUFPLHVCQUF1QiwwQkFBMEIsNEJBQTRCLE9BQU8seUZBQXlGLG9CQUFvQixzQkFBc0IsZUFBZSx1QkFBdUIsWUFBWSxXQUFXLGtCQUFrQixzQkFBc0IsdURBQXVELG9OQUFvTixrTkFBa04sbWxCQUFtbEIscURBQXFELFdBQVcsc0JBQXNCLDBCQUEwQiwyREFBMkQsNkJBQTZCLDJEQUEyRCx3QkFBd0IsMkRBQTJELFdBQVcsbURBQW1ELDBCQUEwQiw2REFBNkQsV0FBVyxxQkFBcUIsc0JBQXNCLHFEQUFxRCxvRkFBb0YseUNBQXlDLDhGQUE4RixnR0FBZ0csaUhBQWlILDRDQUE0QyxtRUFBbUUsMkZBQTJGLDBGQUEwRixvR0FBb0csZUFBZSx5QkFBeUIsa0ZBQWtGLDBHQUEwRywwT0FBME8scUZBQXFGLHlHQUF5RywyRUFBMkUsZUFBZSxXQUFXLE9BQU8sd0NBQXdDOztBQUV2NEk7Ozs7Ozs7O0FDUEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6ImpzLzQ2LmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTdmY2QwOTU2IXNhc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03ZmNkMDk1NiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHBhZ2VIZWFkZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdmY2QwOTU2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2ZjZDA5NTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDYgNDggNDkiLCI8dGVtcGxhdGU+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50LWhlYWRlclwiPlxuICAgICAgICA8aDE+XG4gICAgICAgICAgICB7e3RpdGxlfX1cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPG9sIGNsYXNzPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cImJyZWFkY3J1bWIuaHJlZlwiIGFjdGl2ZS1jbGFzcz1cImFjdGl2ZVwiIHRhZz1cImxpXCIgdi1mb3I9XCJicmVhZGNydW1iIGluIGJyZWFkY3J1bWJzXCI+XG4gICAgICAgICAgICAgICAge3skdChicmVhZGNydW1iLnRpdGxlKX19XG4gICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICA8L29sPlxuICAgIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cInNjc3NcIiByZWw9XCJzdHlsZXNoZWV0L3Njc3NcIj5cbiAgICAuYWRtaW4taGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiA5N3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAucm93IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJlYWRjcnVtYnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHBhZ2VIZWFkZXIudnVlPzUzNzlmNWNiIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYWRtaW4taGVhZGVyIHtcXG4gIGhlaWdodDogOTdweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5hZG1pbi1oZWFkZXIgLnJvdyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDYgNDggNDkiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGVudC1oZWFkZXJcIlxuICB9LCBbX2MoJ2gxJywgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYlwiXG4gIH0sIF92bS5fbCgoX3ZtLmJyZWFkY3J1bWJzKSwgZnVuY3Rpb24oYnJlYWRjcnVtYikge1xuICAgIHJldHVybiBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInRvXCI6IGJyZWFkY3J1bWIuaHJlZixcbiAgICAgICAgXCJhY3RpdmUtY2xhc3NcIjogXCJhY3RpdmVcIixcbiAgICAgICAgXCJ0YWdcIjogXCJsaVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChicmVhZGNydW1iLnRpdGxlKSkgKyBcIlxcbiAgICAgICAgXCIpXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtN2ZjZDA5NTZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxODlcbi8vIG1vZHVsZSBjaHVua3MgPSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0NiA0OCA0OSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiZTlmZWMxYzJcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0NiA0OCA0OSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdlbmVyYXRlVVVJRCgpIHtcbiAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuICAgICAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQgLyAxNik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCkpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3V1aWQuanMiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNDEyNWRhMzAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3ZpZXcudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi92aWV3LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTQxMjVkYTMwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3ZpZXcudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3JlcG9ydHMvdmlldy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB2aWV3LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00MTI1ZGEzMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQxMjVkYTMwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gNDYiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBhZ2UtaGVhZGVyIDp0aXRsZT1cIiR0KCdyZXBvcnRzLnJlcG9ydCcpXCIgOmJyZWFkY3J1bWJzPVwiYnJlYWRjcnVtYnNcIj48L3BhZ2UtaGVhZGVyPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQgcmVwb3J0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXRleHRcIj5FRkVDVElWSVRZPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImRlc2NyaXB0aW9uLWhlYWRlclwiPjEwMCU8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA3VlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBWXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5kZXNjcmlwdGlvbi1ibG9jayAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNvbCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMyBjb2wteHMtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi10ZXh0XCI+VkFMSUQ8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJkZXNjcmlwdGlvbi1oZWFkZXJcIj41NyU8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1NVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmRlc2NyaXB0aW9uLWJsb2NrIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY29sIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXRleHRcIj5BVkVSQUdFPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImRlc2NyaXB0aW9uLWhlYWRlclwiPjQwJTwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmRlc2NyaXB0aW9uLWJsb2NrIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTMgY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tdGV4dFwiPlBFUkZFQ1RJT048L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiZGVzY3JpcHRpb24taGVhZGVyXCI+NTUlPC9oNT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXRleHRcIj5USU1FIENPTlNVTUU8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJkZXNjcmlwdGlvbi1oZWFkZXJcIj44NSU8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA3OjQ1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTQ6MjBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmRlc2NyaXB0aW9uLWJsb2NrIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGhpZ2hjaGFydHMgOm9wdGlvbnM9XCJvcHRpb25zXCI+PC9oaWdoY2hhcnRzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Z2F1Z2UgdmFsdWU9XCIxNVwiIHRpdGxlPVwiQ29udHJhb2ZlbnNpdmlkYWRcIj48L2dhdWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Z2F1Z2UgdmFsdWU9XCIyNVwiIHRpdGxlPVwiRGVmZW5zaXZpZGFkXCI+PC9nYXVnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGdhdWdlIHZhbHVlPVwiNjBcIiB0aXRsZT1cIk9mZW5zaXZpZGFkXCI+PC9nYXVnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgPGhpZ2hjaGFydHMgOm9wdGlvbnM9XCJwaWVcIj48L2hpZ2hjaGFydHM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8aGlnaGNoYXJ0cyA6b3B0aW9ucz1cImJhclwiPjwvaGlnaGNoYXJ0cz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlPlxuICAgIC5yZXBvcnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuYm9yZGVyLXJpZ2h0IHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzY2NjtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24tdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uLXBlcmNlbnRhZ2Uge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbi1oZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0IHR5cGU9XCJ0ZXh0L2JhYmVsXCI+XG4gICAgaW1wb3J0IHBhZ2VIZWFkZXIgZnJvbSAnYmFzZS9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZSdcbiAgICBpbXBvcnQgZ2F1Z2UgZnJvbSAnYmFzZS9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlJ1xuICAgIGltcG9ydCByZXBvcnRzTG9jYWxlcyBmcm9tICdiYXNlL2xhbmcvYWRtaW4vcmVwb3J0cy9yZXBvcnRzLmpzJztcbiAgICBpbXBvcnQgcmVwb3J0U2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydFNlcnZpY2UnXG4gICAgaW1wb3J0IHV1aWRNaXhpbiBmcm9tICdiYXNlL21peGlucy91dWlkJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGxvY2FsZXM6IHJlcG9ydHNMb2NhbGVzLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBwYWdlSGVhZGVyLFxuICAgICAgICAgICAgZ2F1Z2VcbiAgICAgICAgfSxcbiAgICAgICAgbWl4aW5zOiBbdXVpZE1peGluXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByZXBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbGluZSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdQb2ludHMgdnMgVGltZSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeEF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1RpbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWycwOjAxJywgJzA6MjUnLCAnMDo0MCcsICcwOjU1JywgJzE6MDQnLCAnMToxNicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzI6MDAnLCAnMjoyMycsICcyOjQ4JywgJzM6MDEnLCAnMzoxNicsICczOjMwJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgKyAnbWluJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdQb2ludHMnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlICsgJ3B0JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzaGFpcnM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9wOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTonMTZweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1BlZHJvIEdvcnJpbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZjY2MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMTJcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFswLCAxLCAxLCAyLCAzLCA0LCA0LCA1XVxuXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdKYXZpZXIgQmFzdGlkYXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjNjRiNWY2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiAxLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMTJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbMCwgMCwgMSwgMSwgMiwgMiwgMywgM11cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBpZToge1xuICAgICAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxvdEJhY2tncm91bmRDb2xvcjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsb3RCb3JkZXJXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsb3RTaGFkb3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BpZSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDb21iYXQgU3RhdHVzJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludEZvcm1hdDogJ3tzZXJpZXMubmFtZX06IDxiPntwb2ludC5wZXJjZW50YWdlOi4xZn0lPC9iPidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93UG9pbnRTZWxlY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAnPGI+e3BvaW50Lm5hbWV9PC9iPjoge3BvaW50LnBlcmNlbnRhZ2U6LjFmfSAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJbkxlZ2VuZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnUGVyY2VudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvckJ5UG9pbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFUVVBTCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMjBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnVVAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDYwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdET1dOJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdQYXJyeSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeEF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnMTInLCAnMTEnLCAnMTAnLCAnOScsICc4JywgJzcnLCAnNicsICc1JywgJzQnLCAnMycsICcyJywgJzEnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0JvZHkgWm9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ051bWJlciBvZiBQYXJyeXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduOiAnaGlnaCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2p1c3RpZnknXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiAndmVydGljYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IC00MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNyZWRpdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdQYXJyeSBOdW1iZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFsxLCAwLCAyLCAyLCAwLCAzLCA0LCAwLCAwLCAxLCAwLCAwXVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ2F1Z2U6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZGdhdWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAtNzBcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWzAuMSwgJyM1NUJGM0InXSAvLyBncmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbm9yVGlja0ludGVydmFsOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGlja0Ftb3VudDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgY3JlZGl0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogWzgwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6ICc8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToxM3B4O2NvbG9yOicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgnYmxhY2snKSArICdcIj57eX0lPC9zcGFuPjxici8+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAtMjVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVTdWZmaXg6ICclJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdFZmVjdGl2aWRhZCdcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBwYW5lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAnMTUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFuZ2xlOiAtOTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRBbmdsZTogOTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0VFRScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJSYWRpdXM6ICc2MCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGVyUmFkaXVzOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU6ICdhcmMnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdmFsdWUgYXhpc1xuICAgICAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29saWRnYXVnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZUhUTUw6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBicmVhZGNydW1icygpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvZGFzaGJvYXJkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLiR0KCdhZG1pbi5ob21lJylcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9yZXBvcnRzLycgKyB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2FkbWluLnZpZXcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkKCl7XG4gICAgICAgICAgICByZXBvcnRTZXJ2aWNlLnNob3codGhpcy4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBvcnQgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCl7XG5cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB2aWV3LnZ1ZT85MjEzMmYxOCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnJlcG9ydCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uYm9yZGVyLXJpZ2h0IHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzY2NjtcXG59XFxuLmRlc2NyaXB0aW9uLXRleHQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uZGVzY3JpcHRpb24tcGVyY2VudGFnZSB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5kZXNjcmlwdGlvbi1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4uLy4uLy4uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy92aWV3LnZ1ZT85MjEzMmYxOFwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBNkpBO0lBQ0Esd0JBQUE7Q0FDQTtBQUVBO0lBQ0EsNkJBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwidmlldy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPHBhZ2UtaGVhZGVyIDp0aXRsZT1cXFwiJHQoJ3JlcG9ydHMucmVwb3J0JylcXFwiIDpicmVhZGNydW1icz1cXFwiYnJlYWRjcnVtYnNcXFwiPjwvcGFnZS1oZWFkZXI+XFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29udGVudCByZXBvcnRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtMTBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wteHMtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tdGV4dFxcXCI+RUZFQ1RJVklUWTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgdGV4dC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiZGVzY3JpcHRpb24taGVhZGVyXFxcIj4xMDAlPC9oNT5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LWxlZnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDdWXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwVlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5kZXNjcmlwdGlvbi1ibG9jayAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY29sIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zIGNvbC14cy02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi10ZXh0XFxcIj5WQUxJRDwvc3Bhbj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgdGV4dC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiZGVzY3JpcHRpb24taGVhZGVyXFxcIj41NyU8L2g1PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtbGVmdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmRlc2NyaXB0aW9uLWJsb2NrIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jb2wgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLXhzLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1ibG9jayBib3JkZXItcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXRleHRcXFwiPkFWRVJBR0U8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWhlYWRlclxcXCI+NDAlPC9oNT5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LWxlZnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI1XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5kZXNjcmlwdGlvbi1ibG9jayAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wteHMtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tdGV4dFxcXCI+UEVSRkVDVElPTjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgdGV4dC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiZGVzY3JpcHRpb24taGVhZGVyXFxcIj41NSU8L2g1PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtbGVmdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tdGV4dFxcXCI+VElNRSBDT05TVU1FPC9zcGFuPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJkZXNjcmlwdGlvbi1oZWFkZXJcXFwiPjg1JTwvaDU+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgdGV4dC1sZWZ0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA3OjQ1XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNDoyMFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5kZXNjcmlwdGlvbi1ibG9jayAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoaWdoY2hhcnRzIDpvcHRpb25zPVxcXCJvcHRpb25zXFxcIj48L2hpZ2hjaGFydHM+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGdhdWdlIHZhbHVlPVxcXCIxNVxcXCIgdGl0bGU9XFxcIkNvbnRyYW9mZW5zaXZpZGFkXFxcIj48L2dhdWdlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGdhdWdlIHZhbHVlPVxcXCIyNVxcXCIgdGl0bGU9XFxcIkRlZmVuc2l2aWRhZFxcXCI+PC9nYXVnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnYXVnZSB2YWx1ZT1cXFwiNjBcXFwiIHRpdGxlPVxcXCJPZmVuc2l2aWRhZFxcXCI+PC9nYXVnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLThcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGhpZ2hjaGFydHMgOm9wdGlvbnM9XFxcInBpZVxcXCI+PC9oaWdoY2hhcnRzPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoaWdoY2hhcnRzIDpvcHRpb25zPVxcXCJiYXJcXFwiPjwvaGlnaGNoYXJ0cz5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L3NlY3Rpb24+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHN0eWxlPlxcbiAgICAucmVwb3J0IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuXFxuICAgIC5ib3JkZXItcmlnaHQge1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzY2NjtcXG4gICAgfVxcblxcbiAgICAuZGVzY3JpcHRpb24tdGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcblxcbiAgICAuZGVzY3JpcHRpb24tcGVyY2VudGFnZSB7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcblxcbiAgICAuZGVzY3JpcHRpb24taGVhZGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuPC9zdHlsZT5cXG48c2NyaXB0IHR5cGU9XFxcInRleHQvYmFiZWxcXFwiPlxcbiAgICBpbXBvcnQgcGFnZUhlYWRlciBmcm9tICdiYXNlL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlJ1xcbiAgICBpbXBvcnQgZ2F1Z2UgZnJvbSAnYmFzZS9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZXMvZ2F1Z2UudnVlJ1xcbiAgICBpbXBvcnQgcmVwb3J0c0xvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL3JlcG9ydHMvcmVwb3J0cy5qcyc7XFxuICAgIGltcG9ydCByZXBvcnRTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0U2VydmljZSdcXG4gICAgaW1wb3J0IHV1aWRNaXhpbiBmcm9tICdiYXNlL21peGlucy91dWlkJ1xcblxcbiAgICBleHBvcnQgZGVmYXVsdHtcXG4gICAgICAgIGxvY2FsZXM6IHJlcG9ydHNMb2NhbGVzLFxcbiAgICAgICAgY29tcG9uZW50czoge1xcbiAgICAgICAgICAgIHBhZ2VIZWFkZXIsXFxuICAgICAgICAgICAgZ2F1Z2VcXG4gICAgICAgIH0sXFxuICAgICAgICBtaXhpbnM6IFt1dWlkTWl4aW5dLFxcbiAgICAgICAgZGF0YSgpe1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIHJlcG9ydHM6IHt9LFxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICBjaGFydDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJ1xcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1BvaW50cyB2cyBUaW1lJ1xcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIHhBeGlzOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1RpbWUnXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJzA6MDEnLCAnMDoyNScsICcwOjQwJywgJzA6NTUnLCAnMTowNCcsICcxOjE2JyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzI6MDAnLCAnMjoyMycsICcyOjQ4JywgJzM6MDEnLCAnMzoxNicsICczOjMwJ10sXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgKyAnbWluJztcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICB5QXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdQb2ludHMnXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSArICdwdCc7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzaGFpcnM6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkOiB0cnVlXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlcjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiA4LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoOiAwXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JvcDogZmFsc2UsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ25vbmUnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE91dGxpbmU6ICdub25lJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTonMTZweCdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBzZXJpZXM6IFt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1BlZHJvIEdvcnJpbicsXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmY2NjAwJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogMixcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXI6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiAxMlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogWzAsIDEsIDEsIDIsIDMsIDQsIDQsIDVdXFxuXFxuICAgICAgICAgICAgICAgICAgICB9LCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0phdmllciBCYXN0aWRhcycsXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjNjRiNWY2JyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogMSxcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXI6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiAxMlxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogWzAsIDAsIDEsIDEsIDIsIDIsIDMsIDNdXFxuICAgICAgICAgICAgICAgICAgICB9XVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBwaWU6IHtcXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxvdEJhY2tncm91bmRDb2xvcjogbnVsbCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBwbG90Qm9yZGVyV2lkdGg6IG51bGwsXFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxvdFNoYWRvdzogZmFsc2UsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BpZSdcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDb21iYXQgU3RhdHVzJ1xcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludEZvcm1hdDogJ3tzZXJpZXMubmFtZX06IDxiPntwb2ludC5wZXJjZW50YWdlOi4xZn0lPC9iPidcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd1BvaW50U2VsZWN0OiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6ICc8Yj57cG9pbnQubmFtZX08L2I+OiB7cG9pbnQucGVyY2VudGFnZTouMWZ9ICUnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SW5MZWdlbmQ6IHRydWVcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzOiBbe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdQZXJjZW50JyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvckJ5UG9pbnQ6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VRVUFMJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMjBcXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdVUCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDYwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0RPV04nLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAyMFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXFxuICAgICAgICAgICAgICAgICAgICB9XVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBiYXI6IHtcXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcidcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdQYXJyeSdcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICB4QXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnMTInLCAnMTEnLCAnMTAnLCAnOScsICc4JywgJzcnLCAnNicsICc1JywgJzQnLCAnMycsICcyJywgJzEnXSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQm9keSBab25lJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICB5QXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTnVtYmVyIG9mIFBhcnJ5cycsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduOiAnaGlnaCdcXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2p1c3RpZnknXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ6ICd2ZXJ0aWNhbCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdyaWdodCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogLTQwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDgwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvdzogdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIGNyZWRpdHM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIHNlcmllczogW3tcXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnUGFycnkgTnVtYmVycycsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogWzEsIDAsIDIsIDIsIDAsIDMsIDQsIDAsIDAsIDEsIDAsIDBdXFxuICAgICAgICAgICAgICAgICAgICB9XVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBnYXVnZToge1xcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc29saWRnYXVnZScsXFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICB5QXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDEwMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAtNzBcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BzOiBbXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFswLjEsICcjNTVCRjNCJ10gLy8gZ3JlZW5cXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5vclRpY2tJbnRlcnZhbDogbnVsbCxcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrQW1vdW50OiAyLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgICAgICAgICBjcmVkaXRzOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgICAgICAgICBzZXJpZXM6IFt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbnVsbCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbODBdLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAnPGRpdiBzdHlsZT1cXFwidGV4dC1hbGlnbjpjZW50ZXJcXFwiPjxzcGFuIHN0eWxlPVxcXCJmb250LXNpemU6MTNweDtjb2xvcjonICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCdibGFjaycpICsgJ1xcXCI+e3l9JTwvc3Bhbj48YnIvPicsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IC0yNVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVN1ZmZpeDogJyUnXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfV0sXFxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdFZmVjdGl2aWRhZCdcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgICAgICAgICBwYW5lOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogJzE1MCUnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5nbGU6IC05MCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRBbmdsZTogOTAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUVFJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJSYWRpdXM6ICc2MCUnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRlclJhZGl1czogJzEwMCUnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFwZTogJ2FyYydcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXFxuICAgICAgICAgICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHZhbHVlIGF4aXNcXG4gICAgICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc29saWRnYXVnZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiA1LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VIVE1MOiB0cnVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgICAgICBicmVhZGNydW1icygpe1xcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xcbiAgICAgICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvZGFzaGJvYXJkJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy4kdCgnYWRtaW4uaG9tZScpXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvcmVwb3J0cy8nICsgdGhpcy4kcm91dGUucGFyYW1zLmlkLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnYWRtaW4udmlldydcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgXVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9LFxcbiAgICAgICAgY3JlYXRlZCgpe1xcbiAgICAgICAgICAgIHJlcG9ydFNlcnZpY2Uuc2hvdyh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXFxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0ID0gcmVzcG9uc2UuZGF0YTtcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICB9LFxcbiAgICAgICAgbW91bnRlZCgpe1xcblxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00MTI1ZGEzMCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gNDYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygncGFnZS1oZWFkZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogX3ZtLiR0KCdyZXBvcnRzLnJlcG9ydCcpLFxuICAgICAgXCJicmVhZGNydW1ic1wiOiBfdm0uYnJlYWRjcnVtYnNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc2VjdGlvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50IHJlcG9ydFwiXG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0xMFwiXG4gIH0sIFtfYygnaGlnaGNoYXJ0cycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJvcHRpb25zXCI6IF92bS5vcHRpb25zXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC0yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIlxuICB9LCBbX2MoJ2dhdWdlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiMTVcIixcbiAgICAgIFwidGl0bGVcIjogXCJDb250cmFvZmVuc2l2aWRhZFwiXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIlxuICB9LCBbX2MoJ2dhdWdlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiMjVcIixcbiAgICAgIFwidGl0bGVcIjogXCJEZWZlbnNpdmlkYWRcIlxuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXCJcbiAgfSwgW19jKCdnYXVnZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcIjYwXCIsXG4gICAgICBcInRpdGxlXCI6IFwiT2ZlbnNpdmlkYWRcIlxuICAgIH1cbiAgfSldLCAxKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLThcIlxuICB9LCBbX2MoJ2hpZ2hjaGFydHMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwib3B0aW9uc1wiOiBfdm0ucGllXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNFwiXG4gIH0sIFtfYygnaGlnaGNoYXJ0cycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJvcHRpb25zXCI6IF92bS5iYXJcbiAgICB9XG4gIH0pXSwgMSldKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtMTBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtc20tMyBjb2wteHMtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi10ZXh0XCJcbiAgfSwgW192bS5fdihcIkVGRUNUSVZJVFlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiB0ZXh0LXJpZ2h0XCJcbiAgfSwgW19jKCdoNScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1oZWFkZXJcIlxuICB9LCBbX3ZtLl92KFwiMTAwJVwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1sZWZ0XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgN1ZcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBWXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtc20tMyBjb2wteHMtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi10ZXh0XCJcbiAgfSwgW192bS5fdihcIlZBTElEXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1yaWdodFwiXG4gIH0sIFtfYygnaDUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24taGVhZGVyXCJcbiAgfSwgW192bS5fdihcIjU3JVwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgdGV4dC1sZWZ0XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1ncmVlblwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXBlcmNlbnRhZ2UgdGV4dC1yZWRcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtc20tMyBjb2wteHMtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLWJsb2NrIGJvcmRlci1yaWdodFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi10ZXh0XCJcbiAgfSwgW192bS5fdihcIkFWRVJBR0VcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiB0ZXh0LXJpZ2h0XCJcbiAgfSwgW19jKCdoNScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1oZWFkZXJcIlxuICB9LCBbX3ZtLl92KFwiNDAlXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiB0ZXh0LWxlZnRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyNVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LXJlZFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1zbS0zIGNvbC14cy02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tYmxvY2sgYm9yZGVyLXJpZ2h0XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXRleHRcIlxuICB9LCBbX3ZtLl92KFwiUEVSRkVDVElPTlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IHRleHQtcmlnaHRcIlxuICB9LCBbX2MoJ2g1Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLWhlYWRlclwiXG4gIH0sIFtfdm0uX3YoXCI1NSVcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IHRleHQtbGVmdFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtZ3JlZW5cIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDM1XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tYmxvY2tcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdGV4dFwiXG4gIH0sIFtfdm0uX3YoXCJUSU1FIENPTlNVTUVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiB0ZXh0LXJpZ2h0XCJcbiAgfSwgW19jKCdoNScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1oZWFkZXJcIlxuICB9LCBbX3ZtLl92KFwiODUlXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiB0ZXh0LWxlZnRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tcGVyY2VudGFnZSB0ZXh0LWdyZWVuXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA3OjQ1XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi1wZXJjZW50YWdlIHRleHQtcmVkXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNDoyMFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSldKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00MTI1ZGEzMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNDEyNWRhMzAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcmVwb3J0cy92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gNDYiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQxMjVkYTMwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi92aWV3LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJiMmYyMDc0YVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDEyNWRhMzAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3ZpZXcudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00MTI1ZGEzMCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdmlldy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQxMjVkYTMwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9yZXBvcnRzL3ZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSA1MTZcbi8vIG1vZHVsZSBjaHVua3MgPSA0NiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBcImVuXCI6IHtcbiAgICAgICAgXCJyZXBvcnRzXCI6IHtcbiAgICAgICAgICAgIFwibGlzdFwiOiBcIlJlcG9ydHMgTGlzdFwiLFxuICAgICAgICAgICAgXCJjcmVhdGVcIjogXCJDcmVhdGUgUmVwb3J0XCIsXG4gICAgICAgICAgICBcImNyZWF0ZWRfc3VjY2Vzc2Z1bGx5XCI6IFwiVGhlIFJlcG9ydCB3YXMgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgICAgIFwibm90X2ZvdW5kXCI6IFwiVGhlIFJlcG9ydCBkb2Vzbid0IGV4aXN0XCIsXG4gICAgICAgICAgICBcIm5vX3Njb3V0aW5nc1wiOiBcIllvdSBoYXZlIHRvIGFkZCAxIG9yIG1vcmUgc2NvdWl0bmdzXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOYW1lXCIsXG4gICAgICAgICAgICBcImFkZF9zY291dGluZ1wiOiBcIkFkZCBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICBcInJlcG9ydHNfc2NvdXRpbmdzXCI6IFwiUmVwb3J0IFNjb3V0aW5nc1wiLFxuICAgICAgICAgICAgXCJyZXBvcnRcIjogXCJSZXBvcnRcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJyZXBvcnRzXCI6IHtcbiAgICAgICAgICAgIFwibGlzdFwiOiBcIkxpc3RhIGRlIFJlcG9ydGVzXCIsXG4gICAgICAgICAgICBcImNyZWF0ZVwiOiBcIkNyZWFyIFJlcG9ydGVcIixcbiAgICAgICAgICAgIFwiY3JlYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJFbCBSZXBvcnRlIGZ1ZSBjcmVhZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXG4gICAgICAgICAgICBcIm5vdF9mb3VuZFwiOiBcIkVsIFJlcG9ydGUgbm8gZXhpc3RlXCIsXG4gICAgICAgICAgICBcIm5vX3Njb3V0aW5nc1wiOiBcIkRlYmVzIGFncmVnYXIgMSBvIG3DoXMgc2NvdXRpbmdzXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOb21icmVcIixcbiAgICAgICAgICAgIFwiYWRkX3Njb3V0aW5nXCI6IFwiQcOxYWRpciBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRlc2NyaXBjacOzblwiLFxuICAgICAgICAgICAgXCJyZXBvcnRzX3Njb3V0aW5nc1wiOiBcIlNjb3V0aW5ncyBkZWwgcmVwb3J0ZVwiLFxuICAgICAgICAgICAgXCJyZXBvcnRcIjogXCJSZXBvcnRlXCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9yZXBvcnRzL3JlcG9ydHMuanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHNob3coaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9yZXBvcnRzLycgKyBpZClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbiAgICBjcmVhdGUoYXRobGV0ZSwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAucG9zdCgnL2FwaS9yZXBvcnRzJywgYXRobGV0ZSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydFNlcnZpY2UuanMiLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuMlxuKGZ1bmN0aW9uKCkge1xuICB2YXIgQW5pbWF0ZWRUZXh0LCBBbmltYXRlZFRleHRGYWN0b3J5LCBCYXIsIEJhc2VEb251dCwgQmFzZUdhdWdlLCBEb251dCwgR2F1Z2UsIEdhdWdlUG9pbnRlciwgVGV4dFJlbmRlcmVyLCBWYWx1ZVVwZGF0ZXIsIGFkZENvbW1hcywgY3V0SGV4LCBmb3JtYXROdW1iZXIsIG1lcmdlT2JqZWN0cywgc2Vjb25kc1RvU3RyaW5nLFxuICAgIHNsaWNlID0gW10uc2xpY2UsXG4gICAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICAgIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuICAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJyb3dzZXJSZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIGlzQ2FuY2VsbGVkLCBqLCBsYXN0SWQsIGxlbiwgdmVuZG9yLCB2ZW5kb3JzO1xuICAgIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHZlbmRvcnMubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIHZlbmRvciA9IHZlbmRvcnNbal07XG4gICAgICBpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvciArICdDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8IHdpbmRvd1t2ZW5kb3IgKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgfVxuICAgIGJyb3dzZXJSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuICAgIGxhc3RJZCA9IDA7XG4gICAgaXNDYW5jZWxsZWQgPSB7fTtcbiAgICBpZiAoIXJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBjdXJyVGltZSwgaWQsIGxhc3RUaW1lLCB0aW1lVG9DYWxsO1xuICAgICAgICBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgICBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH07XG4gICAgICByZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xuICAgICAgYnJvd3NlclJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIG15SWQ7XG4gICAgICAgIG15SWQgPSArK2xhc3RJZDtcbiAgICAgICAgYnJvd3NlclJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoIWlzQ2FuY2VsbGVkW215SWRdKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gbXlJZDtcbiAgICAgIH07XG4gICAgICByZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgcmV0dXJuIGlzQ2FuY2VsbGVkW2lkXSA9IHRydWU7XG4gICAgICB9O1xuICAgIH1cbiAgfSkoKTtcblxuICBTdHJpbmcucHJvdG90eXBlLmhhc2hDb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNoYXIsIGhhc2gsIGksIGosIHJlZjtcbiAgICBoYXNoID0gMDtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBoYXNoO1xuICAgIH1cbiAgICBmb3IgKGkgPSBqID0gMCwgcmVmID0gdGhpcy5sZW5ndGg7IDAgPD0gcmVmID8gaiA8IHJlZiA6IGogPiByZWY7IGkgPSAwIDw9IHJlZiA/ICsraiA6IC0taikge1xuICAgICAgY2hhciA9IHRoaXMuY2hhckNvZGVBdChpKTtcbiAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNoYXI7XG4gICAgICBoYXNoID0gaGFzaCAmIGhhc2g7XG4gICAgfVxuICAgIHJldHVybiBoYXNoO1xuICB9O1xuXG4gIHNlY29uZHNUb1N0cmluZyA9IGZ1bmN0aW9uKHNlYykge1xuICAgIHZhciBociwgbWluO1xuICAgIGhyID0gTWF0aC5mbG9vcihzZWMgLyAzNjAwKTtcbiAgICBtaW4gPSBNYXRoLmZsb29yKChzZWMgLSAoaHIgKiAzNjAwKSkgLyA2MCk7XG4gICAgc2VjIC09IChociAqIDM2MDApICsgKG1pbiAqIDYwKTtcbiAgICBzZWMgKz0gJyc7XG4gICAgbWluICs9ICcnO1xuICAgIHdoaWxlIChtaW4ubGVuZ3RoIDwgMikge1xuICAgICAgbWluID0gJzAnICsgbWluO1xuICAgIH1cbiAgICB3aGlsZSAoc2VjLmxlbmd0aCA8IDIpIHtcbiAgICAgIHNlYyA9ICcwJyArIHNlYztcbiAgICB9XG4gICAgaHIgPSBociA/IGhyICsgJzonIDogJyc7XG4gICAgcmV0dXJuIGhyICsgbWluICsgJzonICsgc2VjO1xuICB9O1xuXG4gIGZvcm1hdE51bWJlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkaWdpdHMsIG51bSwgdmFsdWU7XG4gICAgbnVtID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gICAgdmFsdWUgPSBudW1bMF07XG4gICAgZGlnaXRzID0gMCB8fCBudW1bMV07XG4gICAgcmV0dXJuIGFkZENvbW1hcyh2YWx1ZS50b0ZpeGVkKGRpZ2l0cykpO1xuICB9O1xuXG4gIG1lcmdlT2JqZWN0cyA9IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcbiAgICB2YXIga2V5LCBvdXQsIHZhbDtcbiAgICBvdXQgPSB7fTtcbiAgICBmb3IgKGtleSBpbiBvYmoxKSB7XG4gICAgICBpZiAoIWhhc1Byb3AuY2FsbChvYmoxLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHZhbCA9IG9iajFba2V5XTtcbiAgICAgIG91dFtrZXldID0gdmFsO1xuICAgIH1cbiAgICBmb3IgKGtleSBpbiBvYmoyKSB7XG4gICAgICBpZiAoIWhhc1Byb3AuY2FsbChvYmoyLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHZhbCA9IG9iajJba2V5XTtcbiAgICAgIG91dFtrZXldID0gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9O1xuXG4gIGFkZENvbW1hcyA9IGZ1bmN0aW9uKG5TdHIpIHtcbiAgICB2YXIgcmd4LCB4LCB4MSwgeDI7XG4gICAgblN0ciArPSAnJztcbiAgICB4ID0gblN0ci5zcGxpdCgnLicpO1xuICAgIHgxID0geFswXTtcbiAgICB4MiA9ICcnO1xuICAgIGlmICh4Lmxlbmd0aCA+IDEpIHtcbiAgICAgIHgyID0gJy4nICsgeFsxXTtcbiAgICB9XG4gICAgcmd4ID0gLyhcXGQrKShcXGR7M30pLztcbiAgICB3aGlsZSAocmd4LnRlc3QoeDEpKSB7XG4gICAgICB4MSA9IHgxLnJlcGxhY2Uocmd4LCAnJDEnICsgJywnICsgJyQyJyk7XG4gICAgfVxuICAgIHJldHVybiB4MSArIHgyO1xuICB9O1xuXG4gIGN1dEhleCA9IGZ1bmN0aW9uKG5TdHIpIHtcbiAgICBpZiAoblN0ci5jaGFyQXQoMCkgPT09IFwiI1wiKSB7XG4gICAgICByZXR1cm4gblN0ci5zdWJzdHJpbmcoMSwgNyk7XG4gICAgfVxuICAgIHJldHVybiBuU3RyO1xuICB9O1xuXG4gIFZhbHVlVXBkYXRlciA9IChmdW5jdGlvbigpIHtcbiAgICBWYWx1ZVVwZGF0ZXIucHJvdG90eXBlLmFuaW1hdGlvblNwZWVkID0gMzI7XG5cbiAgICBmdW5jdGlvbiBWYWx1ZVVwZGF0ZXIoYWRkVG9BbmltYXRpb25RdWV1ZSwgY2xlYXIpIHtcbiAgICAgIGlmIChhZGRUb0FuaW1hdGlvblF1ZXVlID09IG51bGwpIHtcbiAgICAgICAgYWRkVG9BbmltYXRpb25RdWV1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLmNsZWFyID0gY2xlYXIgIT0gbnVsbCA/IGNsZWFyIDogdHJ1ZTtcbiAgICAgIGlmIChhZGRUb0FuaW1hdGlvblF1ZXVlKSB7XG4gICAgICAgIEFuaW1hdGlvblVwZGF0ZXIuYWRkKHRoaXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFZhbHVlVXBkYXRlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZm9yY2UpIHtcbiAgICAgIHZhciBkaWZmO1xuICAgICAgaWYgKGZvcmNlID09IG51bGwpIHtcbiAgICAgICAgZm9yY2UgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChmb3JjZSB8fCB0aGlzLmRpc3BsYXllZFZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmN0eCAmJiB0aGlzLmNsZWFyKSB7XG4gICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGRpZmYgPSB0aGlzLnZhbHVlIC0gdGhpcy5kaXNwbGF5ZWRWYWx1ZTtcbiAgICAgICAgaWYgKE1hdGguYWJzKGRpZmYgLyB0aGlzLmFuaW1hdGlvblNwZWVkKSA8PSAwLjAwMSkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheWVkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGlzcGxheWVkVmFsdWUgPSB0aGlzLmRpc3BsYXllZFZhbHVlICsgZGlmZiAvIHRoaXMuYW5pbWF0aW9uU3BlZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiBWYWx1ZVVwZGF0ZXI7XG5cbiAgfSkoKTtcblxuICBCYXNlR2F1Z2UgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICAgIGV4dGVuZChCYXNlR2F1Z2UsIHN1cGVyQ2xhc3MpO1xuXG4gICAgZnVuY3Rpb24gQmFzZUdhdWdlKCkge1xuICAgICAgcmV0dXJuIEJhc2VHYXVnZS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBCYXNlR2F1Z2UucHJvdG90eXBlLmRpc3BsYXlTY2FsZSA9IDE7XG5cbiAgICBCYXNlR2F1Z2UucHJvdG90eXBlLnNldFRleHRGaWVsZCA9IGZ1bmN0aW9uKHRleHRGaWVsZCwgZnJhY3Rpb25EaWdpdHMpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHRGaWVsZCA9IHRleHRGaWVsZCBpbnN0YW5jZW9mIFRleHRSZW5kZXJlciA/IHRleHRGaWVsZCA6IG5ldyBUZXh0UmVuZGVyZXIodGV4dEZpZWxkLCBmcmFjdGlvbkRpZ2l0cyk7XG4gICAgfTtcblxuICAgIEJhc2VHYXVnZS5wcm90b3R5cGUuc2V0TWluVmFsdWUgPSBmdW5jdGlvbihtaW5WYWx1ZSwgdXBkYXRlU3RhcnRWYWx1ZSkge1xuICAgICAgdmFyIGdhdWdlLCBqLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICAgIHRoaXMubWluVmFsdWUgPSBtaW5WYWx1ZTtcbiAgICAgIGlmICh1cGRhdGVTdGFydFZhbHVlID09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlU3RhcnRWYWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodXBkYXRlU3RhcnRWYWx1ZSkge1xuICAgICAgICB0aGlzLmRpc3BsYXllZFZhbHVlID0gdGhpcy5taW5WYWx1ZTtcbiAgICAgICAgcmVmID0gdGhpcy5ncCB8fCBbXTtcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICBnYXVnZSA9IHJlZltqXTtcbiAgICAgICAgICByZXN1bHRzLnB1c2goZ2F1Z2UuZGlzcGxheWVkVmFsdWUgPSB0aGlzLm1pblZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQmFzZUdhdWdlLnByb3RvdHlwZS5zZXRPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlT2JqZWN0cyh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgaWYgKHRoaXMudGV4dEZpZWxkKSB7XG4gICAgICAgIHRoaXMudGV4dEZpZWxkLmVsLnN0eWxlLmZvbnRTaXplID0gb3B0aW9ucy5mb250U2l6ZSArICdweCc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFuZ2xlID4gLjUpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmFuZ2xlID0gLjU7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbmZpZ0Rpc3BsYXlTY2FsZSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEJhc2VHYXVnZS5wcm90b3R5cGUuY29uZmlnRGlzcGxheVNjYWxlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYmFja2luZ1N0b3JlUGl4ZWxSYXRpbywgZGV2aWNlUGl4ZWxSYXRpbywgaGVpZ2h0LCBwcmV2RGlzcGxheVNjYWxlLCB3aWR0aDtcbiAgICAgIHByZXZEaXNwbGF5U2NhbGUgPSB0aGlzLmRpc3BsYXlTY2FsZTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlnaERwaVN1cHBvcnQgPT09IGZhbHNlKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRpc3BsYXlTY2FsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICAgICAgICBiYWNraW5nU3RvcmVQaXhlbFJhdGlvID0gdGhpcy5jdHgud2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCB0aGlzLmN0eC5tb3pCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IHRoaXMuY3R4Lm1zQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCB0aGlzLmN0eC5vQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCB0aGlzLmN0eC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IDE7XG4gICAgICAgIHRoaXMuZGlzcGxheVNjYWxlID0gZGV2aWNlUGl4ZWxSYXRpbyAvIGJhY2tpbmdTdG9yZVBpeGVsUmF0aW87XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kaXNwbGF5U2NhbGUgIT09IHByZXZEaXNwbGF5U2NhbGUpIHtcbiAgICAgICAgd2lkdGggPSB0aGlzLmNhbnZhcy5HX193aWR0aCB8fCB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuR19faGVpZ2h0IHx8IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aCAqIHRoaXMuZGlzcGxheVNjYWxlO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgKiB0aGlzLmRpc3BsYXlTY2FsZTtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5HX193aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5HX19oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIEJhc2VHYXVnZTtcblxuICB9KShWYWx1ZVVwZGF0ZXIpO1xuXG4gIFRleHRSZW5kZXJlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBUZXh0UmVuZGVyZXIoZWwsIGZyYWN0aW9uRGlnaXRzMSkge1xuICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgdGhpcy5mcmFjdGlvbkRpZ2l0cyA9IGZyYWN0aW9uRGlnaXRzMTtcbiAgICB9XG5cbiAgICBUZXh0UmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKGdhdWdlKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbC5pbm5lckhUTUwgPSBmb3JtYXROdW1iZXIoZ2F1Z2UuZGlzcGxheWVkVmFsdWUsIHRoaXMuZnJhY3Rpb25EaWdpdHMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVGV4dFJlbmRlcmVyO1xuXG4gIH0pKCk7XG5cbiAgQW5pbWF0ZWRUZXh0ID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgICBleHRlbmQoQW5pbWF0ZWRUZXh0LCBzdXBlckNsYXNzKTtcblxuICAgIEFuaW1hdGVkVGV4dC5wcm90b3R5cGUuZGlzcGxheWVkVmFsdWUgPSAwO1xuXG4gICAgQW5pbWF0ZWRUZXh0LnByb3RvdHlwZS52YWx1ZSA9IDA7XG5cbiAgICBBbmltYXRlZFRleHQucHJvdG90eXBlLnNldFZhbCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZSA9IDEgKiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gQW5pbWF0ZWRUZXh0KGVsZW0xLCB0ZXh0KSB7XG4gICAgICB0aGlzLmVsZW0gPSBlbGVtMTtcbiAgICAgIHRoaXMudGV4dCA9IHRleHQgIT0gbnVsbCA/IHRleHQgOiBmYWxzZTtcbiAgICAgIHRoaXMudmFsdWUgPSAxICogdGhpcy5lbGVtLmlubmVySFRNTDtcbiAgICAgIGlmICh0aGlzLnRleHQpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQW5pbWF0ZWRUZXh0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB0ZXh0VmFsO1xuICAgICAgaWYgKHRoaXMudGV4dCkge1xuICAgICAgICB0ZXh0VmFsID0gc2Vjb25kc1RvU3RyaW5nKHRoaXMuZGlzcGxheWVkVmFsdWUudG9GaXhlZCgwKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0VmFsID0gYWRkQ29tbWFzKGZvcm1hdE51bWJlcih0aGlzLmRpc3BsYXllZFZhbHVlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5lbGVtLmlubmVySFRNTCA9IHRleHRWYWw7XG4gICAgfTtcblxuICAgIHJldHVybiBBbmltYXRlZFRleHQ7XG5cbiAgfSkoVmFsdWVVcGRhdGVyKTtcblxuICBBbmltYXRlZFRleHRGYWN0b3J5ID0ge1xuICAgIGNyZWF0ZTogZnVuY3Rpb24ob2JqTGlzdCkge1xuICAgICAgdmFyIGVsZW0sIGosIGxlbiwgb3V0O1xuICAgICAgb3V0ID0gW107XG4gICAgICBmb3IgKGogPSAwLCBsZW4gPSBvYmpMaXN0Lmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgIGVsZW0gPSBvYmpMaXN0W2pdO1xuICAgICAgICBvdXQucHVzaChuZXcgQW5pbWF0ZWRUZXh0KGVsZW0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICB9O1xuXG4gIEdhdWdlUG9pbnRlciA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gICAgZXh0ZW5kKEdhdWdlUG9pbnRlciwgc3VwZXJDbGFzcyk7XG5cbiAgICBHYXVnZVBvaW50ZXIucHJvdG90eXBlLmRpc3BsYXllZFZhbHVlID0gMDtcblxuICAgIEdhdWdlUG9pbnRlci5wcm90b3R5cGUudmFsdWUgPSAwO1xuXG4gICAgR2F1Z2VQb2ludGVyLnByb3RvdHlwZS5vcHRpb25zID0ge1xuICAgICAgc3Ryb2tlV2lkdGg6IDAuMDM1LFxuICAgICAgbGVuZ3RoOiAwLjEsXG4gICAgICBjb2xvcjogXCIjMDAwMDAwXCJcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gR2F1Z2VQb2ludGVyKGdhdWdlMSkge1xuICAgICAgdGhpcy5nYXVnZSA9IGdhdWdlMTtcbiAgICAgIHRoaXMuY3R4ID0gdGhpcy5nYXVnZS5jdHg7XG4gICAgICB0aGlzLmNhbnZhcyA9IHRoaXMuZ2F1Z2UuY2FudmFzO1xuICAgICAgR2F1Z2VQb2ludGVyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGZhbHNlLCBmYWxzZSk7XG4gICAgICB0aGlzLnNldE9wdGlvbnMoKTtcbiAgICB9XG5cbiAgICBHYXVnZVBvaW50ZXIucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMgPSBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5vcHRpb25zID0gbWVyZ2VPYmplY3RzKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICB0aGlzLmxlbmd0aCA9IDIgKiB0aGlzLmdhdWdlLnJhZGl1cyAqIHRoaXMuZ2F1Z2Uub3B0aW9ucy5yYWRpdXNTY2FsZSAqIHRoaXMub3B0aW9ucy5sZW5ndGg7XG4gICAgICB0aGlzLnN0cm9rZVdpZHRoID0gdGhpcy5jYW52YXMuaGVpZ2h0ICogdGhpcy5vcHRpb25zLnN0cm9rZVdpZHRoO1xuICAgICAgdGhpcy5tYXhWYWx1ZSA9IHRoaXMuZ2F1Z2UubWF4VmFsdWU7XG4gICAgICB0aGlzLm1pblZhbHVlID0gdGhpcy5nYXVnZS5taW5WYWx1ZTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uU3BlZWQgPSB0aGlzLmdhdWdlLmFuaW1hdGlvblNwZWVkO1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hbmdsZSA9IHRoaXMuZ2F1Z2Uub3B0aW9ucy5hbmdsZTtcbiAgICB9O1xuXG4gICAgR2F1Z2VQb2ludGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhbmdsZSwgZW5kWCwgZW5kWSwgc3RhcnRYLCBzdGFydFksIHgsIHk7XG4gICAgICBhbmdsZSA9IHRoaXMuZ2F1Z2UuZ2V0QW5nbGUuY2FsbCh0aGlzLCB0aGlzLmRpc3BsYXllZFZhbHVlKTtcbiAgICAgIHggPSBNYXRoLnJvdW5kKHRoaXMubGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpKTtcbiAgICAgIHkgPSBNYXRoLnJvdW5kKHRoaXMubGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKTtcbiAgICAgIHN0YXJ0WCA9IE1hdGgucm91bmQodGhpcy5zdHJva2VXaWR0aCAqIE1hdGguY29zKGFuZ2xlIC0gTWF0aC5QSSAvIDIpKTtcbiAgICAgIHN0YXJ0WSA9IE1hdGgucm91bmQodGhpcy5zdHJva2VXaWR0aCAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDIpKTtcbiAgICAgIGVuZFggPSBNYXRoLnJvdW5kKHRoaXMuc3Ryb2tlV2lkdGggKiBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkgLyAyKSk7XG4gICAgICBlbmRZID0gTWF0aC5yb3VuZCh0aGlzLnN0cm9rZVdpZHRoICogTWF0aC5zaW4oYW5nbGUgKyBNYXRoLlBJIC8gMikpO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5vcHRpb25zLmNvbG9yO1xuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLmN0eC5hcmMoMCwgMCwgdGhpcy5zdHJva2VXaWR0aCwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLmN0eC5tb3ZlVG8oc3RhcnRYLCBzdGFydFkpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHgsIHkpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKGVuZFgsIGVuZFkpO1xuICAgICAgcmV0dXJuIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEdhdWdlUG9pbnRlcjtcblxuICB9KShWYWx1ZVVwZGF0ZXIpO1xuXG4gIEJhciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBCYXIoZWxlbTEpIHtcbiAgICAgIHRoaXMuZWxlbSA9IGVsZW0xO1xuICAgIH1cblxuICAgIEJhci5wcm90b3R5cGUudXBkYXRlVmFsdWVzID0gZnVuY3Rpb24oYXJyVmFsdWVzKSB7XG4gICAgICB0aGlzLnZhbHVlID0gYXJyVmFsdWVzWzBdO1xuICAgICAgdGhpcy5tYXhWYWx1ZSA9IGFyclZhbHVlc1sxXTtcbiAgICAgIHRoaXMuYXZnVmFsdWUgPSBhcnJWYWx1ZXNbMl07XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXIoKTtcbiAgICB9O1xuXG4gICAgQmFyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhdmdQZXJjZW50LCB2YWxQZXJjZW50O1xuICAgICAgaWYgKHRoaXMudGV4dEZpZWxkKSB7XG4gICAgICAgIHRoaXMudGV4dEZpZWxkLnRleHQoZm9ybWF0TnVtYmVyKHRoaXMudmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1heFZhbHVlID09PSAwKSB7XG4gICAgICAgIHRoaXMubWF4VmFsdWUgPSB0aGlzLmF2Z1ZhbHVlICogMjtcbiAgICAgIH1cbiAgICAgIHZhbFBlcmNlbnQgPSAodGhpcy52YWx1ZSAvIHRoaXMubWF4VmFsdWUpICogMTAwO1xuICAgICAgYXZnUGVyY2VudCA9ICh0aGlzLmF2Z1ZhbHVlIC8gdGhpcy5tYXhWYWx1ZSkgKiAxMDA7XG4gICAgICAkKFwiLmJhci12YWx1ZVwiLCB0aGlzLmVsZW0pLmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogdmFsUGVyY2VudCArIFwiJVwiXG4gICAgICB9KTtcbiAgICAgIHJldHVybiAkKFwiLnR5cGljYWwtdmFsdWVcIiwgdGhpcy5lbGVtKS5jc3Moe1xuICAgICAgICBcIndpZHRoXCI6IGF2Z1BlcmNlbnQgKyBcIiVcIlxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBCYXI7XG5cbiAgfSkoKTtcblxuICBHYXVnZSA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gICAgZXh0ZW5kKEdhdWdlLCBzdXBlckNsYXNzKTtcblxuICAgIEdhdWdlLnByb3RvdHlwZS5lbGVtID0gbnVsbDtcblxuICAgIEdhdWdlLnByb3RvdHlwZS52YWx1ZSA9IFsyMF07XG5cbiAgICBHYXVnZS5wcm90b3R5cGUubWF4VmFsdWUgPSA4MDtcblxuICAgIEdhdWdlLnByb3RvdHlwZS5taW5WYWx1ZSA9IDA7XG5cbiAgICBHYXVnZS5wcm90b3R5cGUuZGlzcGxheWVkQW5nbGUgPSAwO1xuXG4gICAgR2F1Z2UucHJvdG90eXBlLmRpc3BsYXllZFZhbHVlID0gMDtcblxuICAgIEdhdWdlLnByb3RvdHlwZS5saW5lV2lkdGggPSA0MDtcblxuICAgIEdhdWdlLnByb3RvdHlwZS5wYWRkaW5nVG9wID0gMC4xO1xuXG4gICAgR2F1Z2UucHJvdG90eXBlLnBhZGRpbmdCb3R0b20gPSAwLjE7XG5cbiAgICBHYXVnZS5wcm90b3R5cGUucGVyY2VudENvbG9ycyA9IG51bGw7XG5cbiAgICBHYXVnZS5wcm90b3R5cGUub3B0aW9ucyA9IHtcbiAgICAgIGNvbG9yU3RhcnQ6IFwiIzZmYWRjZlwiLFxuICAgICAgY29sb3JTdG9wOiB2b2lkIDAsXG4gICAgICBncmFkaWVudFR5cGU6IDAsXG4gICAgICBzdHJva2VDb2xvcjogXCIjZTBlMGUwXCIsXG4gICAgICBwb2ludGVyOiB7XG4gICAgICAgIGxlbmd0aDogMC44LFxuICAgICAgICBzdHJva2VXaWR0aDogMC4wMzVcbiAgICAgIH0sXG4gICAgICBhbmdsZTogMC4xNSxcbiAgICAgIGxpbmVXaWR0aDogMC40NCxcbiAgICAgIHJhZGl1c1NjYWxlOiAxLjAsXG4gICAgICBmb250U2l6ZTogNDAsXG4gICAgICBsaW1pdE1heDogZmFsc2UsXG4gICAgICBsaW1pdE1pbjogZmFsc2VcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gR2F1Z2UoY2FudmFzKSB7XG4gICAgICB2YXIgaCwgdztcbiAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgR2F1Z2UuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLnBlcmNlbnRDb2xvcnMgPSBudWxsO1xuICAgICAgaWYgKHR5cGVvZiBHX3ZtbENhbnZhc01hbmFnZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gd2luZG93Lkdfdm1sQ2FudmFzTWFuYWdlci5pbml0RWxlbWVudCh0aGlzLmNhbnZhcyk7XG4gICAgICB9XG4gICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBoID0gdGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgICAgdyA9IHRoaXMuY2FudmFzLmNsaWVudFdpZHRoO1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaDtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdztcbiAgICAgIHRoaXMuZ3AgPSBbbmV3IEdhdWdlUG9pbnRlcih0aGlzKV07XG4gICAgICB0aGlzLnNldE9wdGlvbnMoKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgR2F1Z2UucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICB2YXIgZ2F1Z2UsIGosIGxlbiwgcGhpLCByZWY7XG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMgPSBudWxsO1xuICAgICAgfVxuICAgICAgR2F1Z2UuX19zdXBlcl9fLnNldE9wdGlvbnMuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICAgIHRoaXMuY29uZmlnUGVyY2VudENvbG9ycygpO1xuICAgICAgdGhpcy5leHRyYVBhZGRpbmcgPSAwO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmdsZSA8IDApIHtcbiAgICAgICAgcGhpID0gTWF0aC5QSSAqICgxICsgdGhpcy5vcHRpb25zLmFuZ2xlKTtcbiAgICAgICAgdGhpcy5leHRyYVBhZGRpbmcgPSBNYXRoLnNpbihwaGkpO1xuICAgICAgfVxuICAgICAgdGhpcy5hdmFpbGFibGVIZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQgKiAoMSAtIHRoaXMucGFkZGluZ1RvcCAtIHRoaXMucGFkZGluZ0JvdHRvbSk7XG4gICAgICB0aGlzLmxpbmVXaWR0aCA9IHRoaXMuYXZhaWxhYmxlSGVpZ2h0ICogdGhpcy5vcHRpb25zLmxpbmVXaWR0aDtcbiAgICAgIHRoaXMucmFkaXVzID0gKHRoaXMuYXZhaWxhYmxlSGVpZ2h0IC0gdGhpcy5saW5lV2lkdGggLyAyKSAvICgxLjAgKyB0aGlzLmV4dHJhUGFkZGluZyk7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICByZWYgPSB0aGlzLmdwO1xuICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgIGdhdWdlID0gcmVmW2pdO1xuICAgICAgICBnYXVnZS5zZXRPcHRpb25zKHRoaXMub3B0aW9ucy5wb2ludGVyKTtcbiAgICAgICAgZ2F1Z2UucmVuZGVyKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgR2F1Z2UucHJvdG90eXBlLmNvbmZpZ1BlcmNlbnRDb2xvcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBidmFsLCBndmFsLCBpLCBqLCByZWYsIHJlc3VsdHMsIHJ2YWw7XG4gICAgICB0aGlzLnBlcmNlbnRDb2xvcnMgPSBudWxsO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wZXJjZW50Q29sb3JzICE9PSB2b2lkIDApIHtcbiAgICAgICAgdGhpcy5wZXJjZW50Q29sb3JzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gaiA9IDAsIHJlZiA9IHRoaXMub3B0aW9ucy5wZXJjZW50Q29sb3JzLmxlbmd0aCAtIDE7IDAgPD0gcmVmID8gaiA8PSByZWYgOiBqID49IHJlZjsgaSA9IDAgPD0gcmVmID8gKytqIDogLS1qKSB7XG4gICAgICAgICAgcnZhbCA9IHBhcnNlSW50KChjdXRIZXgodGhpcy5vcHRpb25zLnBlcmNlbnRDb2xvcnNbaV1bMV0pKS5zdWJzdHJpbmcoMCwgMiksIDE2KTtcbiAgICAgICAgICBndmFsID0gcGFyc2VJbnQoKGN1dEhleCh0aGlzLm9wdGlvbnMucGVyY2VudENvbG9yc1tpXVsxXSkpLnN1YnN0cmluZygyLCA0KSwgMTYpO1xuICAgICAgICAgIGJ2YWwgPSBwYXJzZUludCgoY3V0SGV4KHRoaXMub3B0aW9ucy5wZXJjZW50Q29sb3JzW2ldWzFdKSkuc3Vic3RyaW5nKDQsIDYpLCAxNik7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMucGVyY2VudENvbG9yc1tpXSA9IHtcbiAgICAgICAgICAgIHBjdDogdGhpcy5vcHRpb25zLnBlcmNlbnRDb2xvcnNbaV1bMF0sXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICByOiBydmFsLFxuICAgICAgICAgICAgICBnOiBndmFsLFxuICAgICAgICAgICAgICBiOiBidmFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEdhdWdlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIGdwLCBpLCBqLCBrLCBsZW4sIHJlZiwgdmFsO1xuICAgICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgdmFsdWUgPSBbdmFsdWVdO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IHRoaXMuZ3AubGVuZ3RoKSB7XG4gICAgICAgIGZvciAoaSA9IGogPSAwLCByZWYgPSB2YWx1ZS5sZW5ndGggLSB0aGlzLmdwLmxlbmd0aDsgMCA8PSByZWYgPyBqIDwgcmVmIDogaiA+IHJlZjsgaSA9IDAgPD0gcmVmID8gKytqIDogLS1qKSB7XG4gICAgICAgICAgZ3AgPSBuZXcgR2F1Z2VQb2ludGVyKHRoaXMpO1xuICAgICAgICAgIGdwLnNldE9wdGlvbnModGhpcy5vcHRpb25zLnBvaW50ZXIpO1xuICAgICAgICAgIHRoaXMuZ3AucHVzaChncCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoIDwgdGhpcy5ncC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5ncCA9IHRoaXMuZ3Auc2xpY2UodGhpcy5ncC5sZW5ndGggLSB2YWx1ZS5sZW5ndGgpO1xuICAgICAgfVxuICAgICAgaSA9IDA7XG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICB2YWwgPSB2YWx1ZVtrXTtcbiAgICAgICAgaWYgKHZhbCA+IHRoaXMubWF4VmFsdWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0TWF4KSB7XG4gICAgICAgICAgICB2YWwgPSB0aGlzLm1heFZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1heFZhbHVlID0gdmFsICsgMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmFsIDwgdGhpcy5taW5WYWx1ZSkge1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRNaW4pIHtcbiAgICAgICAgICAgIHZhbCA9IHRoaXMubWluVmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWluVmFsdWUgPSB2YWwgLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdwW2ldLnZhbHVlID0gdmFsO1xuICAgICAgICB0aGlzLmdwW2krK10uc2V0T3B0aW9ucyh7XG4gICAgICAgICAgbWluVmFsdWU6IHRoaXMubWluVmFsdWUsXG4gICAgICAgICAgbWF4VmFsdWU6IHRoaXMubWF4VmFsdWUsXG4gICAgICAgICAgYW5nbGU6IHRoaXMub3B0aW9ucy5hbmdsZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmFsdWUgPSBNYXRoLm1heChNYXRoLm1pbih2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXSwgdGhpcy5tYXhWYWx1ZSksIHRoaXMubWluVmFsdWUpO1xuICAgICAgcmV0dXJuIEFuaW1hdGlvblVwZGF0ZXIucnVuKCk7XG4gICAgfTtcblxuICAgIEdhdWdlLnByb3RvdHlwZS5nZXRBbmdsZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gKDEgKyB0aGlzLm9wdGlvbnMuYW5nbGUpICogTWF0aC5QSSArICgodmFsdWUgLSB0aGlzLm1pblZhbHVlKSAvICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSkpICogKDEgLSB0aGlzLm9wdGlvbnMuYW5nbGUgKiAyKSAqIE1hdGguUEk7XG4gICAgfTtcblxuICAgIEdhdWdlLnByb3RvdHlwZS5nZXRDb2xvckZvclBlcmNlbnRhZ2UgPSBmdW5jdGlvbihwY3QsIGdyYWQpIHtcbiAgICAgIHZhciBjb2xvciwgZW5kQ29sb3IsIGksIGosIHJhbmdlUGN0LCByZWYsIHN0YXJ0Q29sb3I7XG4gICAgICBpZiAocGN0ID09PSAwKSB7XG4gICAgICAgIGNvbG9yID0gdGhpcy5wZXJjZW50Q29sb3JzWzBdLmNvbG9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sb3IgPSB0aGlzLnBlcmNlbnRDb2xvcnNbdGhpcy5wZXJjZW50Q29sb3JzLmxlbmd0aCAtIDFdLmNvbG9yO1xuICAgICAgICBmb3IgKGkgPSBqID0gMCwgcmVmID0gdGhpcy5wZXJjZW50Q29sb3JzLmxlbmd0aCAtIDE7IDAgPD0gcmVmID8gaiA8PSByZWYgOiBqID49IHJlZjsgaSA9IDAgPD0gcmVmID8gKytqIDogLS1qKSB7XG4gICAgICAgICAgaWYgKHBjdCA8PSB0aGlzLnBlcmNlbnRDb2xvcnNbaV0ucGN0KSB7XG4gICAgICAgICAgICBpZiAoZ3JhZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBzdGFydENvbG9yID0gdGhpcy5wZXJjZW50Q29sb3JzW2kgLSAxXSB8fCB0aGlzLnBlcmNlbnRDb2xvcnNbMF07XG4gICAgICAgICAgICAgIGVuZENvbG9yID0gdGhpcy5wZXJjZW50Q29sb3JzW2ldO1xuICAgICAgICAgICAgICByYW5nZVBjdCA9IChwY3QgLSBzdGFydENvbG9yLnBjdCkgLyAoZW5kQ29sb3IucGN0IC0gc3RhcnRDb2xvci5wY3QpO1xuICAgICAgICAgICAgICBjb2xvciA9IHtcbiAgICAgICAgICAgICAgICByOiBNYXRoLmZsb29yKHN0YXJ0Q29sb3IuY29sb3IuciAqICgxIC0gcmFuZ2VQY3QpICsgZW5kQ29sb3IuY29sb3IuciAqIHJhbmdlUGN0KSxcbiAgICAgICAgICAgICAgICBnOiBNYXRoLmZsb29yKHN0YXJ0Q29sb3IuY29sb3IuZyAqICgxIC0gcmFuZ2VQY3QpICsgZW5kQ29sb3IuY29sb3IuZyAqIHJhbmdlUGN0KSxcbiAgICAgICAgICAgICAgICBiOiBNYXRoLmZsb29yKHN0YXJ0Q29sb3IuY29sb3IuYiAqICgxIC0gcmFuZ2VQY3QpICsgZW5kQ29sb3IuY29sb3IuYiAqIHJhbmdlUGN0KVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLnBlcmNlbnRDb2xvcnNbaV0uY29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAncmdiKCcgKyBbY29sb3IuciwgY29sb3IuZywgY29sb3IuYl0uam9pbignLCcpICsgJyknO1xuICAgIH07XG5cbiAgICBHYXVnZS5wcm90b3R5cGUuZ2V0Q29sb3JGb3JWYWx1ZSA9IGZ1bmN0aW9uKHZhbCwgZ3JhZCkge1xuICAgICAgdmFyIHBjdDtcbiAgICAgIHBjdCA9ICh2YWwgLSB0aGlzLm1pblZhbHVlKSAvICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSk7XG4gICAgICByZXR1cm4gdGhpcy5nZXRDb2xvckZvclBlcmNlbnRhZ2UocGN0LCBncmFkKTtcbiAgICB9O1xuXG4gICAgR2F1Z2UucHJvdG90eXBlLnJlbmRlclN0YXRpY0xhYmVscyA9IGZ1bmN0aW9uKHN0YXRpY0xhYmVscywgdywgaCwgcmFkaXVzKSB7XG4gICAgICB2YXIgZm9udCwgZm9udHNpemUsIGosIGxlbiwgbWF0Y2gsIHJlLCByZWYsIHJlc3QsIHJvdGF0aW9uQW5nbGUsIHZhbHVlO1xuICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHcsIGgpO1xuICAgICAgZm9udCA9IHN0YXRpY0xhYmVscy5mb250IHx8IFwiMTBweCBUaW1lc1wiO1xuICAgICAgcmUgPSAvXFxkK1xcLj9cXGQ/LztcbiAgICAgIG1hdGNoID0gZm9udC5tYXRjaChyZSlbMF07XG4gICAgICByZXN0ID0gZm9udC5zbGljZShtYXRjaC5sZW5ndGgpO1xuICAgICAgZm9udHNpemUgPSBwYXJzZUZsb2F0KG1hdGNoKSAqIHRoaXMuZGlzcGxheVNjYWxlO1xuICAgICAgdGhpcy5jdHguZm9udCA9IGZvbnRzaXplICsgcmVzdDtcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHN0YXRpY0xhYmVscy5jb2xvciB8fCBcIiMwMDAwMDBcIjtcbiAgICAgIHRoaXMuY3R4LnRleHRCYXNlbGluZSA9IFwiYm90dG9tXCI7XG4gICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgcmVmID0gc3RhdGljTGFiZWxzLmxhYmVscztcbiAgICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICB2YWx1ZSA9IHJlZltqXTtcbiAgICAgICAgcm90YXRpb25BbmdsZSA9IHRoaXMuZ2V0QW5nbGUodmFsdWUpIC0gMyAqIE1hdGguUEkgLyAyO1xuICAgICAgICB0aGlzLmN0eC5yb3RhdGUocm90YXRpb25BbmdsZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGZvcm1hdE51bWJlcih2YWx1ZSwgc3RhdGljTGFiZWxzLmZyYWN0aW9uRGlnaXRzKSwgMCwgLXJhZGl1cyAtIHRoaXMubGluZVdpZHRoIC8gMik7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSgtcm90YXRpb25BbmdsZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgIH07XG5cbiAgICBHYXVnZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZGlzcGxheWVkQW5nbGUsIGZpbGxTdHlsZSwgZ2F1Z2UsIGgsIGosIGssIGxlbiwgbGVuMSwgcmFkaXVzLCByZWYsIHJlZjEsIHcsIHpvbmU7XG4gICAgICB3ID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xuICAgICAgaCA9IHRoaXMuY2FudmFzLmhlaWdodCAqIHRoaXMucGFkZGluZ1RvcCArIHRoaXMuYXZhaWxhYmxlSGVpZ2h0IC0gKHRoaXMucmFkaXVzICsgdGhpcy5saW5lV2lkdGggLyAyKSAqIHRoaXMuZXh0cmFQYWRkaW5nO1xuICAgICAgZGlzcGxheWVkQW5nbGUgPSB0aGlzLmdldEFuZ2xlKHRoaXMuZGlzcGxheWVkVmFsdWUpO1xuICAgICAgaWYgKHRoaXMudGV4dEZpZWxkKSB7XG4gICAgICAgIHRoaXMudGV4dEZpZWxkLnJlbmRlcih0aGlzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3R4LmxpbmVDYXAgPSBcImJ1dHRcIjtcbiAgICAgIHJhZGl1cyA9IHRoaXMucmFkaXVzICogdGhpcy5vcHRpb25zLnJhZGl1c1NjYWxlO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWNMYWJlbHMpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJTdGF0aWNMYWJlbHModGhpcy5vcHRpb25zLnN0YXRpY0xhYmVscywgdywgaCwgcmFkaXVzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljWm9uZXMpIHtcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUodywgaCk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xuICAgICAgICByZWYgPSB0aGlzLm9wdGlvbnMuc3RhdGljWm9uZXM7XG4gICAgICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICAgIHpvbmUgPSByZWZbal07XG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB6b25lLnN0cm9rZVN0eWxlO1xuICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIHRoaXMuY3R4LmFyYygwLCAwLCByYWRpdXMsIHRoaXMuZ2V0QW5nbGUoem9uZS5taW4pLCB0aGlzLmdldEFuZ2xlKHpvbmUubWF4KSwgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY3VzdG9tRmlsbFN0eWxlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBmaWxsU3R5bGUgPSB0aGlzLm9wdGlvbnMuY3VzdG9tRmlsbFN0eWxlKHRoaXMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVyY2VudENvbG9ycyAhPT0gbnVsbCkge1xuICAgICAgICAgIGZpbGxTdHlsZSA9IHRoaXMuZ2V0Q29sb3JGb3JWYWx1ZSh0aGlzLmRpc3BsYXllZFZhbHVlLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuY29sb3JTdG9wICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmdyYWRpZW50VHlwZSA9PT0gMCkge1xuICAgICAgICAgICAgZmlsbFN0eWxlID0gdGhpcy5jdHguY3JlYXRlUmFkaWFsR3JhZGllbnQodywgaCwgOSwgdywgaCwgNzApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaWxsU3R5bGUgPSB0aGlzLmN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCB3LCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmlsbFN0eWxlLmFkZENvbG9yU3RvcCgwLCB0aGlzLm9wdGlvbnMuY29sb3JTdGFydCk7XG4gICAgICAgICAgZmlsbFN0eWxlLmFkZENvbG9yU3RvcCgxLCB0aGlzLm9wdGlvbnMuY29sb3JTdG9wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWxsU3R5bGUgPSB0aGlzLm9wdGlvbnMuY29sb3JTdGFydDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGZpbGxTdHlsZTtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh3LCBoLCByYWRpdXMsICgxICsgdGhpcy5vcHRpb25zLmFuZ2xlKSAqIE1hdGguUEksIGRpc3BsYXllZEFuZ2xlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLm9wdGlvbnMuc3Ryb2tlQ29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5hcmModywgaCwgcmFkaXVzLCBkaXNwbGF5ZWRBbmdsZSwgKDIgLSB0aGlzLm9wdGlvbnMuYW5nbGUpICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh3LCBoKTtcbiAgICAgIHJlZjEgPSB0aGlzLmdwO1xuICAgICAgZm9yIChrID0gMCwgbGVuMSA9IHJlZjEubGVuZ3RoOyBrIDwgbGVuMTsgaysrKSB7XG4gICAgICAgIGdhdWdlID0gcmVmMVtrXTtcbiAgICAgICAgZ2F1Z2UudXBkYXRlKHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuY3R4LnRyYW5zbGF0ZSgtdywgLWgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gR2F1Z2U7XG5cbiAgfSkoQmFzZUdhdWdlKTtcblxuICBCYXNlRG9udXQgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICAgIGV4dGVuZChCYXNlRG9udXQsIHN1cGVyQ2xhc3MpO1xuXG4gICAgQmFzZURvbnV0LnByb3RvdHlwZS5saW5lV2lkdGggPSAxNTtcblxuICAgIEJhc2VEb251dC5wcm90b3R5cGUuZGlzcGxheWVkVmFsdWUgPSAwO1xuXG4gICAgQmFzZURvbnV0LnByb3RvdHlwZS52YWx1ZSA9IDMzO1xuXG4gICAgQmFzZURvbnV0LnByb3RvdHlwZS5tYXhWYWx1ZSA9IDgwO1xuXG4gICAgQmFzZURvbnV0LnByb3RvdHlwZS5taW5WYWx1ZSA9IDA7XG5cbiAgICBCYXNlRG9udXQucHJvdG90eXBlLm9wdGlvbnMgPSB7XG4gICAgICBsaW5lV2lkdGg6IDAuMTAsXG4gICAgICBjb2xvclN0YXJ0OiBcIiM2ZjZlYTBcIixcbiAgICAgIGNvbG9yU3RvcDogXCIjYzBjMGRiXCIsXG4gICAgICBzdHJva2VDb2xvcjogXCIjZWVlZWVlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCIjZDVkNWQ1XCIsXG4gICAgICBhbmdsZTogMC4zNSxcbiAgICAgIHJhZGl1c1NjYWxlOiAxLjBcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gQmFzZURvbnV0KGNhbnZhcykge1xuICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICBCYXNlRG9udXQuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gICAgICBpZiAodHlwZW9mIEdfdm1sQ2FudmFzTWFuYWdlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSB3aW5kb3cuR192bWxDYW52YXNNYW5hZ2VyLmluaXRFbGVtZW50KHRoaXMuY2FudmFzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIHRoaXMuc2V0T3B0aW9ucygpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBCYXNlRG9udXQucHJvdG90eXBlLmdldEFuZ2xlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiAoMSAtIHRoaXMub3B0aW9ucy5hbmdsZSkgKiBNYXRoLlBJICsgKCh2YWx1ZSAtIHRoaXMubWluVmFsdWUpIC8gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSkgKiAoKDIgKyB0aGlzLm9wdGlvbnMuYW5nbGUpIC0gKDEgLSB0aGlzLm9wdGlvbnMuYW5nbGUpKSAqIE1hdGguUEk7XG4gICAgfTtcblxuICAgIEJhc2VEb251dC5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgICB9XG4gICAgICBCYXNlRG9udXQuX19zdXBlcl9fLnNldE9wdGlvbnMuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICAgIHRoaXMubGluZVdpZHRoID0gdGhpcy5jYW52YXMuaGVpZ2h0ICogdGhpcy5vcHRpb25zLmxpbmVXaWR0aDtcbiAgICAgIHRoaXMucmFkaXVzID0gdGhpcy5vcHRpb25zLnJhZGl1c1NjYWxlICogKHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSB0aGlzLmxpbmVXaWR0aCAvIDIpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEJhc2VEb251dC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmICh0aGlzLnZhbHVlID4gdGhpcy5tYXhWYWx1ZSkge1xuICAgICAgICB0aGlzLm1heFZhbHVlID0gdGhpcy52YWx1ZSAqIDEuMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBBbmltYXRpb25VcGRhdGVyLnJ1bigpO1xuICAgIH07XG5cbiAgICBCYXNlRG9udXQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGRpc3BsYXllZEFuZ2xlLCBncmRGaWxsLCBoLCBzdGFydCwgc3RvcCwgdztcbiAgICAgIGRpc3BsYXllZEFuZ2xlID0gdGhpcy5nZXRBbmdsZSh0aGlzLmRpc3BsYXllZFZhbHVlKTtcbiAgICAgIHcgPSB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XG4gICAgICBoID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcbiAgICAgIGlmICh0aGlzLnRleHRGaWVsZCkge1xuICAgICAgICB0aGlzLnRleHRGaWVsZC5yZW5kZXIodGhpcyk7XG4gICAgICB9XG4gICAgICBncmRGaWxsID0gdGhpcy5jdHguY3JlYXRlUmFkaWFsR3JhZGllbnQodywgaCwgMzksIHcsIGgsIDcwKTtcbiAgICAgIGdyZEZpbGwuYWRkQ29sb3JTdG9wKDAsIHRoaXMub3B0aW9ucy5jb2xvclN0YXJ0KTtcbiAgICAgIGdyZEZpbGwuYWRkQ29sb3JTdG9wKDEsIHRoaXMub3B0aW9ucy5jb2xvclN0b3ApO1xuICAgICAgc3RhcnQgPSB0aGlzLnJhZGl1cyAtIHRoaXMubGluZVdpZHRoIC8gMjtcbiAgICAgIHN0b3AgPSB0aGlzLnJhZGl1cyArIHRoaXMubGluZVdpZHRoIC8gMjtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5vcHRpb25zLnN0cm9rZUNvbG9yO1xuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLmN0eC5hcmModywgaCwgdGhpcy5yYWRpdXMsICgxIC0gdGhpcy5vcHRpb25zLmFuZ2xlKSAqIE1hdGguUEksICgyICsgdGhpcy5vcHRpb25zLmFuZ2xlKSAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xuICAgICAgdGhpcy5jdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBncmRGaWxsO1xuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLmN0eC5hcmModywgaCwgdGhpcy5yYWRpdXMsICgxIC0gdGhpcy5vcHRpb25zLmFuZ2xlKSAqIE1hdGguUEksIGRpc3BsYXllZEFuZ2xlLCBmYWxzZSk7XG4gICAgICByZXR1cm4gdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBCYXNlRG9udXQ7XG5cbiAgfSkoQmFzZUdhdWdlKTtcblxuICBEb251dCA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gICAgZXh0ZW5kKERvbnV0LCBzdXBlckNsYXNzKTtcblxuICAgIGZ1bmN0aW9uIERvbnV0KCkge1xuICAgICAgcmV0dXJuIERvbnV0Ll9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIERvbnV0LnByb3RvdHlwZS5zdHJva2VHcmFkaWVudCA9IGZ1bmN0aW9uKHcsIGgsIHN0YXJ0LCBzdG9wKSB7XG4gICAgICB2YXIgZ3JkO1xuICAgICAgZ3JkID0gdGhpcy5jdHguY3JlYXRlUmFkaWFsR3JhZGllbnQodywgaCwgc3RhcnQsIHcsIGgsIHN0b3ApO1xuICAgICAgZ3JkLmFkZENvbG9yU3RvcCgwLCB0aGlzLm9wdGlvbnMuc2hhZG93Q29sb3IpO1xuICAgICAgZ3JkLmFkZENvbG9yU3RvcCgwLjEyLCB0aGlzLm9wdGlvbnMuX29yZ1N0cm9rZUNvbG9yKTtcbiAgICAgIGdyZC5hZGRDb2xvclN0b3AoMC44OCwgdGhpcy5vcHRpb25zLl9vcmdTdHJva2VDb2xvcik7XG4gICAgICBncmQuYWRkQ29sb3JTdG9wKDEsIHRoaXMub3B0aW9ucy5zaGFkb3dDb2xvcik7XG4gICAgICByZXR1cm4gZ3JkO1xuICAgIH07XG5cbiAgICBEb251dC5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBoLCBzdGFydCwgc3RvcCwgdztcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgICB9XG4gICAgICBEb251dC5fX3N1cGVyX18uc2V0T3B0aW9ucy5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgdyA9IHRoaXMuY2FudmFzLndpZHRoIC8gMjtcbiAgICAgIGggPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgc3RhcnQgPSB0aGlzLnJhZGl1cyAtIHRoaXMubGluZVdpZHRoIC8gMjtcbiAgICAgIHN0b3AgPSB0aGlzLnJhZGl1cyArIHRoaXMubGluZVdpZHRoIC8gMjtcbiAgICAgIHRoaXMub3B0aW9ucy5fb3JnU3Ryb2tlQ29sb3IgPSB0aGlzLm9wdGlvbnMuc3Ryb2tlQ29sb3I7XG4gICAgICB0aGlzLm9wdGlvbnMuc3Ryb2tlQ29sb3IgPSB0aGlzLnN0cm9rZUdyYWRpZW50KHcsIGgsIHN0YXJ0LCBzdG9wKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICByZXR1cm4gRG9udXQ7XG5cbiAgfSkoQmFzZURvbnV0KTtcblxuICB3aW5kb3cuQW5pbWF0aW9uVXBkYXRlciA9IHtcbiAgICBlbGVtZW50czogW10sXG4gICAgYW5pbUlkOiBudWxsLFxuICAgIGFkZEFsbDogZnVuY3Rpb24obGlzdCkge1xuICAgICAgdmFyIGVsZW0sIGosIGxlbiwgcmVzdWx0cztcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaiA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgZWxlbSA9IGxpc3Rbal07XG4gICAgICAgIHJlc3VsdHMucHVzaChBbmltYXRpb25VcGRhdGVyLmVsZW1lbnRzLnB1c2goZWxlbSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSxcbiAgICBhZGQ6IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgcmV0dXJuIEFuaW1hdGlvblVwZGF0ZXIuZWxlbWVudHMucHVzaChvYmplY3QpO1xuICAgIH0sXG4gICAgcnVuOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhbmltYXRpb25GaW5pc2hlZCwgZWxlbSwgaiwgbGVuLCByZWY7XG4gICAgICBhbmltYXRpb25GaW5pc2hlZCA9IHRydWU7XG4gICAgICByZWYgPSBBbmltYXRpb25VcGRhdGVyLmVsZW1lbnRzO1xuICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgIGVsZW0gPSByZWZbal07XG4gICAgICAgIGlmIChlbGVtLnVwZGF0ZSgpKSB7XG4gICAgICAgICAgYW5pbWF0aW9uRmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFhbmltYXRpb25GaW5pc2hlZCkge1xuICAgICAgICByZXR1cm4gQW5pbWF0aW9uVXBkYXRlci5hbmltSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoQW5pbWF0aW9uVXBkYXRlci5ydW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNhbmNlbEFuaW1hdGlvbkZyYW1lKEFuaW1hdGlvblVwZGF0ZXIuYW5pbUlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cuZGVmaW5lID09PSAnZnVuY3Rpb24nICYmICh3aW5kb3cuZGVmaW5lLmFtZCAhPSBudWxsKSkge1xuICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIEdhdWdlOiBHYXVnZSxcbiAgICAgICAgRG9udXQ6IERvbnV0LFxuICAgICAgICBCYXNlRG9udXQ6IEJhc2VEb251dCxcbiAgICAgICAgVGV4dFJlbmRlcmVyOiBUZXh0UmVuZGVyZXJcbiAgICAgIH07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgKG1vZHVsZS5leHBvcnRzICE9IG51bGwpKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICBHYXVnZTogR2F1Z2UsXG4gICAgICBEb251dDogRG9udXQsXG4gICAgICBCYXNlRG9udXQ6IEJhc2VEb251dCxcbiAgICAgIFRleHRSZW5kZXJlcjogVGV4dFJlbmRlcmVyXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuR2F1Z2UgPSBHYXVnZTtcbiAgICB3aW5kb3cuRG9udXQgPSBEb251dDtcbiAgICB3aW5kb3cuQmFzZURvbnV0ID0gQmFzZURvbnV0O1xuICAgIHdpbmRvdy5UZXh0UmVuZGVyZXIgPSBUZXh0UmVuZGVyZXI7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nYXVnZS5qcy9kaXN0L2dhdWdlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MzBcbi8vIG1vZHVsZSBjaHVua3MgPSA0NiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IDppZD1cImNvbnRhaW5lcklkXCIgY2xhc3M9XCJnYXVnZVwiPlxuICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7dGl0bGV9fTwvaDQ+XG4gICAgICAgIDxjYW52YXMgOmlkPVwiZWxlbWVudElkXCI+PC9jYW52YXM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnb2FsLXdyYXBwZXIgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgIDxzcGFuIDppZD1cInRleHRJZFwiIGNsYXNzPVwiZ2F1Z2UtdmFsdWUgcHVsbC1sZWZ0XCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnYXVnZS12YWx1ZSBwdWxsLWxlZnRcIj4lPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJnb2FsLXRleHRcIiBjbGFzcz1cImdvYWwtdmFsdWUgcHVsbC1yaWdodFwiPjEwMCU8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAgIC5nYXVnZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5nb2FsLXdyYXBwZXIge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCB1dWlkTWl4aW4gZnJvbSAnYmFzZS9taXhpbnMvdXVpZCdcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB2YWx1ZToge3JlcXVpcmVkOiB0cnVlfSxcbiAgICAgICAgICAgIHRpdGxlOiB7ZGVmYXVsdDogJyd9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZ2F1Z2U6IG51bGwsXG4gICAgICAgICAgICAgICAgb3B0czoge1xuICAgICAgICAgICAgICAgICAgICBhbmdsZTogLTAuMDIsIC8vIFRoZSBzcGFuIG9mIHRoZSBnYXVnZSBhcmNcbiAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoOiAwLjQ0LCAvLyBUaGUgbGluZSB0aGlja25lc3NcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzU2NhbGU6IDEsIC8vIFJlbGF0aXZlIHJhZGl1c1xuICAgICAgICAgICAgICAgICAgICBwb2ludGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IDAuNiwgLy8gLy8gUmVsYXRpdmUgdG8gZ2F1Z2UgcmFkaXVzXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMC4wMzUsIC8vIFRoZSB0aGlja25lc3NcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwMDAwMCcgLy8gRmlsbCBjb2xvclxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsaW1pdE1heDogZmFsc2UsICAgICAvLyBJZiBmYWxzZSwgdGhlIG1heCB2YWx1ZSBvZiB0aGUgZ2F1Z2Ugd2lsbCBiZSB1cGRhdGVkIGlmIHZhbHVlIHN1cnBhc3MgbWF4XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0TWluOiBmYWxzZSwgICAgIC8vIElmIHRydWUsIHRoZSBtaW4gdmFsdWUgb2YgdGhlIGdhdWdlIHdpbGwgYmUgZml4ZWQgdW5sZXNzIHlvdSBzZXQgaXQgbWFudWFsbHlcbiAgICAgICAgICAgICAgICAgICAgY29sb3JTdGFydDogJyM2RkFEQ0YnLCAgIC8vIENvbG9yc1xuICAgICAgICAgICAgICAgICAgICBjb2xvclN0b3A6ICcjOEZDMERBJywgICAgLy8ganVzdCBleHBlcmltZW50IHdpdGggdGhlbVxuICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogJyNFMEUwRTAnLCAgLy8gdG8gc2VlIHdoaWNoIG9uZXMgd29yayBiZXN0IGZvciB5b3VcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVHcmFkaWVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaGlnaERwaVN1cHBvcnQ6IHRydWUgICAgIC8vIEhpZ2ggcmVzb2x1dGlvbiBzdXBwb3J0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aW1lb3V0SGFuZGxlOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBlbGVtZW50SWQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVVVSUQoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRhaW5lcklkKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVVVUlEKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZXh0SWQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVVVSUQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtaXhpbnM6IFt1dWlkTWl4aW5dLFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlZHJhdyk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGRyYXcoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGdhdWdlTGliID0gcmVxdWlyZSgnZ2F1Z2UuanMnKTtcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRhaW5lcklkKS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gd2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGggKyAncHgnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQgKyAncHgnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlID0gbmV3IGdhdWdlTGliLkdhdWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKSkuc2V0T3B0aW9ucyh0aGlzLm9wdHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2UubWF4VmFsdWUgPSAxMDA7IC8vIHNldCBtYXggZ2F1Z2UgdmFsdWVcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLnNldE1pblZhbHVlKDApOyAgLy8gUHJlZmVyIHNldHRlciBvdmVyIGdhdWdlLm1pblZhbHVlID0gMFxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2UuYW5pbWF0aW9uU3BlZWQgPSA2NTsgLy8gc2V0IGFuaW1hdGlvbiBzcGVlZCAoMzIgaXMgZGVmYXVsdCB2YWx1ZSlcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLnNldCh0aGlzLnZhbHVlKTsgLy8gc2V0IGFjdHVhbCB2YWx1ZVxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2Uuc2V0VGV4dEZpZWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMudGV4dElkKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVkcmF3KCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLnNhdmUoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykuY2xlYXJSZWN0KDAsIDAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLmNhbnZhcy53aWR0aCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykucmVzdG9yZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZW91dEhhbmRsZSlcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRIYW5kbGUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0SGFuZGxlID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5kcmF3LCAyNTApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGdhdWdlLnZ1ZT80ZDY3NDJkNCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi02ZjI4MzE5NSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vZ2F1Z2UudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9nYXVnZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi02ZjI4MzE5NSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9nYXVnZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGdhdWdlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02ZjI4MzE5NVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTZmMjgzMTk1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gNDYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnYXVnZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IF92bS5jb250YWluZXJJZFxuICAgIH1cbiAgfSwgW19jKCdoNCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdjYW52YXMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogX3ZtLmVsZW1lbnRJZFxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ29hbC13cmFwcGVyIGNsZWFyZml4XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdhdWdlLXZhbHVlIHB1bGwtbGVmdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IF92bS50ZXh0SWRcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnYXVnZS12YWx1ZSBwdWxsLWxlZnRcIlxuICB9LCBbX3ZtLl92KFwiJVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnb2FsLXZhbHVlIHB1bGwtcmlnaHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImdvYWwtdGV4dFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiMTAwJVwiKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi02ZjI4MzE5NVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNmYyODMxOTUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gNDYiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5nYXVnZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uZ29hbC13cmFwcGVyIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWU/NGQ2NzQyZDRcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWFBO0lBQ0Esd0JBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJnYXVnZS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IDppZD1cXFwiY29udGFpbmVySWRcXFwiIGNsYXNzPVxcXCJnYXVnZVxcXCI+XFxuICAgICAgICA8aDQgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj57e3RpdGxlfX08L2g0PlxcbiAgICAgICAgPGNhbnZhcyA6aWQ9XFxcImVsZW1lbnRJZFxcXCI+PC9jYW52YXM+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnb2FsLXdyYXBwZXIgY2xlYXJmaXhcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIDppZD1cXFwidGV4dElkXFxcIiBjbGFzcz1cXFwiZ2F1Z2UtdmFsdWUgcHVsbC1sZWZ0XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdhdWdlLXZhbHVlIHB1bGwtbGVmdFxcXCI+JTwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBpZD1cXFwiZ29hbC10ZXh0XFxcIiBjbGFzcz1cXFwiZ29hbC12YWx1ZSBwdWxsLXJpZ2h0XFxcIj4xMDAlPC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHN0eWxlPlxcbiAgICAuZ2F1Z2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIH1cXG5cXG4gICAgLmdvYWwtd3JhcHBlciB7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcbjwvc3R5bGU+XFxuPHNjcmlwdD5cXG4gICAgaW1wb3J0IHV1aWRNaXhpbiBmcm9tICdiYXNlL21peGlucy91dWlkJ1xcblxcbiAgICBleHBvcnQgZGVmYXVsdHtcXG5cXG4gICAgICAgIHByb3BzOiB7XFxuICAgICAgICAgICAgdmFsdWU6IHtyZXF1aXJlZDogdHJ1ZX0sXFxuICAgICAgICAgICAgdGl0bGU6IHtkZWZhdWx0OiAnJ31cXG4gICAgICAgIH0sXFxuICAgICAgICBkYXRhKCl7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgZ2F1Z2U6IG51bGwsXFxuICAgICAgICAgICAgICAgIG9wdHM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlOiAtMC4wMiwgLy8gVGhlIHNwYW4gb2YgdGhlIGdhdWdlIGFyY1xcbiAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoOiAwLjQ0LCAvLyBUaGUgbGluZSB0aGlja25lc3NcXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1c1NjYWxlOiAxLCAvLyBSZWxhdGl2ZSByYWRpdXNcXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXI6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IDAuNiwgLy8gLy8gUmVsYXRpdmUgdG8gZ2F1Z2UgcmFkaXVzXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDAuMDM1LCAvLyBUaGUgdGhpY2tuZXNzXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMDAwMDAwJyAvLyBGaWxsIGNvbG9yXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgbGltaXRNYXg6IGZhbHNlLCAgICAgLy8gSWYgZmFsc2UsIHRoZSBtYXggdmFsdWUgb2YgdGhlIGdhdWdlIHdpbGwgYmUgdXBkYXRlZCBpZiB2YWx1ZSBzdXJwYXNzIG1heFxcbiAgICAgICAgICAgICAgICAgICAgbGltaXRNaW46IGZhbHNlLCAgICAgLy8gSWYgdHJ1ZSwgdGhlIG1pbiB2YWx1ZSBvZiB0aGUgZ2F1Z2Ugd2lsbCBiZSBmaXhlZCB1bmxlc3MgeW91IHNldCBpdCBtYW51YWxseVxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JTdGFydDogJyM2RkFEQ0YnLCAgIC8vIENvbG9yc1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3JTdG9wOiAnIzhGQzBEQScsICAgIC8vIGp1c3QgZXhwZXJpbWVudCB3aXRoIHRoZW1cXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAnI0UwRTBFMCcsICAvLyB0byBzZWUgd2hpY2ggb25lcyB3b3JrIGJlc3QgZm9yIHlvdVxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVHcmFkaWVudDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hEcGlTdXBwb3J0OiB0cnVlICAgICAvLyBIaWdoIHJlc29sdXRpb24gc3VwcG9ydFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB0aW1lb3V0SGFuZGxlOiBudWxsXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICAgICAgZWxlbWVudElkKCl7XFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlVVVJRCgpXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBjb250YWluZXJJZCgpe1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVVVSUQoKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdGV4dElkKCl7XFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlVVVJRCgpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIG1peGluczogW3V1aWRNaXhpbl0sXFxuICAgICAgICBtb3VudGVkKCl7XFxuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVkcmF3KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgZHJhdygpIHtcXG4gICAgICAgICAgICAgICAgdmFyIGdhdWdlTGliID0gcmVxdWlyZSgnZ2F1Z2UuanMnKTtcXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJZCkub2Zmc2V0V2lkdGg7XFxuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSB3aWR0aCAvIDI7XFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGggKyAncHgnKTtcXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgaGVpZ2h0ICsgJ3B4Jyk7XFxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2UgPSBuZXcgZ2F1Z2VMaWIuR2F1Z2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpKS5zZXRPcHRpb25zKHRoaXMub3B0cyk7XFxuICAgICAgICAgICAgICAgIHRoaXMuZ2F1Z2UubWF4VmFsdWUgPSAxMDA7IC8vIHNldCBtYXggZ2F1Z2UgdmFsdWVcXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5zZXRNaW5WYWx1ZSgwKTsgIC8vIFByZWZlciBzZXR0ZXIgb3ZlciBnYXVnZS5taW5WYWx1ZSA9IDBcXG4gICAgICAgICAgICAgICAgdGhpcy5nYXVnZS5hbmltYXRpb25TcGVlZCA9IDY1OyAvLyBzZXQgYW5pbWF0aW9uIHNwZWVkICgzMiBpcyBkZWZhdWx0IHZhbHVlKVxcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLnNldCh0aGlzLnZhbHVlKTsgLy8gc2V0IGFjdHVhbCB2YWx1ZVxcbiAgICAgICAgICAgICAgICB0aGlzLmdhdWdlLnNldFRleHRGaWVsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnRleHRJZCkpO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgcmVkcmF3KCkge1xcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuZ2V0Q29udGV4dCgnMmQnKS5zYXZlKCk7XFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykuY2xlYXJSZWN0KDAsIDAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLmNhbnZhcy53aWR0aCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmdldENvbnRleHQoJzJkJykuY2FudmFzLmhlaWdodCk7XFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5nZXRDb250ZXh0KCcyZCcpLnJlc3RvcmUoKTtcXG5cXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZW91dEhhbmRsZSlcXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SGFuZGxlKTtcXG5cXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0SGFuZGxlID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5kcmF3LCAyNTApO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmYyODMxOTUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2dhdWdlcy9nYXVnZS52dWVcbi8vIG1vZHVsZSBpZCA9IDUzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDQ2IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02ZjI4MzE5NSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZ2F1Z2UudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjc3NzhjOTc2XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02ZjI4MzE5NSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZ2F1Z2UudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02ZjI4MzE5NSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZ2F1Z2UudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02ZjI4MzE5NSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvZ2F1Z2VzL2dhdWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gNDYiXSwic291cmNlUm9vdCI6IiJ9