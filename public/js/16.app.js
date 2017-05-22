webpackJsonp([16,31],{

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(448)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(297),
  /* template */
  __webpack_require__(409),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/dashboard/dashboard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39b7e8b6", Component.options)
  } else {
    hotAPI.reload("data-v-39b7e8b6", Component.options)
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

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    summary: function summary(successCalback, errorCallback) {
        return _vue2.default.http.get('/api/user/statistics/summary').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    }
};

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pageHeader = __webpack_require__(196);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _userStatisticsService = __webpack_require__(256);

var _userStatisticsService2 = _interopRequireDefault(_userStatisticsService);

var _rankingService = __webpack_require__(342);

var _rankingService2 = _interopRequireDefault(_rankingService);

var _scoutingService = __webpack_require__(243);

var _scoutingService2 = _interopRequireDefault(_scoutingService);

var _reportService = __webpack_require__(246);

var _reportService2 = _interopRequireDefault(_reportService);

var _dashboard = __webpack_require__(346);

var _dashboard2 = _interopRequireDefault(_dashboard);

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

exports.default = {
    locales: _dashboard2.default,
    data: function data() {
        return {
            breadcrumbs: [{
                href: '/',
                title: 'Home'
            }],
            latestScouting: null,
            latestReport: null,
            summary: {
                scountings: 0,
                reports: 0,
                completedChallenges: 0,
                rank: 0,
                points: 0
            },
            ranking: []
        };
    },

    components: {
        pageHeader: _pageHeader2.default
    },
    computed: {
        userTitle: function userTitle() {
            return this.$auth.user().athlete ? this.$auth.user().athlete.sport.name + ' ' + this.$auth.user().athlete.specialty.name : '';
        }
    },
    mounted: function mounted() {
        this.loadRanking();
        this.loadLatestReport();
        this.loadLatestScouting();
    },

    methods: {
        loadRanking: function loadRanking() {
            var _this = this;

            _rankingService2.default.ranking(function (response) {
                _this.ranking = response.data;
            }, function (response) {});
        },
        loadLatestReport: function loadLatestReport() {
            var _this2 = this;

            _reportService2.default.latest(function (response) {
                _this2.latestReport = response.data;
            }, function (response) {});
        },
        loadLatestScouting: function loadLatestScouting() {
            var _this3 = this;

            _scoutingService2.default.latest(function (response) {
                _this3.latestScouting = response.data;
            }, function (response) {});
        }
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
    ranking: function ranking(successCalback, errorCallback) {
        return _vue2.default.http.get('/api/ranking?include=user.athlete.country').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
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
    "en": {
        "dashboard": {
            "global_ranking": "Global Ranking",
            "menu": "Menu",
            "overall_ranking": "Overall Ranking",
            "scoutings": "Scoutings",
            "reports": "Reports",
            "completed_challenges": "Completed Challenges",
            "latest_report": "Latest Report",
            "no_report": "Create a new report",
            "no_scouting": "Create a new scouting",
            "latest_scouting": "Latest Scouting",
            "create_report": "Create Report",
            "create_scouting": "Create Scouting",
            "go_to_ptofile": "Go to My Profile"
        }
    },
    "es": {
        "dashboard": {
            "global_ranking": "Ranking Global",
            "menu": "Menu",
            "overall_ranking": "Ranking",
            "scoutings": "Scoutings",
            "reports": "Reportes",
            "completed_challenges": "Desafios Completados",
            "latest_report": "Último Reporte",
            "no_report": "Crea un nuevo report",
            "no_scouting": "Crea un nuevo scouting",
            "latest_scouting": "Último Scouting",
            "create_report": "Crear Reporte",
            "create_scouting": "Crear Scouting",
            "go_to_ptofile": "Ir a mi Perfil"
        }
    }
};

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.product-rank {\n    font-size: 31px;\n    width: 70px;\n    text-align: center;\n    color: #AAA;\n}\n.product-points {\n    font-size: 20px;\n    background: #00c0ef;\n    margin: 9px;\n    padding: 0 5px;\n    min-width: 61px;\n    text-align: center;\n    color: white;\n}\n.product-img {\n    padding-right: 5px;\n}\n.products-list .latest-product {\n    margin-left: 0 !important;\n}\n.latest-product a {\n    font-size: 20px;\n    font-weight: bold;\n}\n.product-item {\n    border: 1px solid #f4f4f4;\n    padding: 5px !important;\n    margin-bottom: 10px !important;\n    background: #f7f7f7 !important\n}\n.latest-box-body {\n    padding-top: 0 !important;\n}\n.product-flag {\n    padding: 10px;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/dashboard/dashboard.vue?711a64be"],"names":[],"mappings":";AA2IA;IACA,gBAAA;IACA,YAAA;IACA,mBAAA;IACA,YAAA;CACA;AAEA;IACA,gBAAA;IACA,oBAAA;IACA,YAAA;IACA,eAAA;IACA,gBAAA;IACA,mBAAA;IACA,aAAA;CACA;AAEA;IACA,mBAAA;CACA;AAEA;IACA,0BAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,0BAAA;IACA,wBAAA;IACA,+BAAA;IACA,8BAAA;CACA;AAEA;IACA,0BAAA;CACA;AAEA;IACA,cAAA;CACA","file":"dashboard.vue","sourcesContent":["<template>\n    <div>\n        <page-header title=\"Dashboard\" :breadcrumbs=\"breadcrumbs\"></page-header>\n        <section class=\"content\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-3\">\n\n                    <div class=\"box box-widget widget-user-2\">\n                        <!-- Add the bg color to the header using any of the bg-* classes -->\n                        <div class=\"widget-user-header bg-blue\">\n                            <div class=\"widget-user-image\">\n                                <img class=\"img-circle\" :src=\"$auth.user().image\" alt=\"User Avatar\">\n                            </div>\n                            <!-- /.widget-user-image -->\n                            <h3 class=\"widget-user-username\">{{$auth.user().full_name}}</h3>\n                            <h5 class=\"widget-user-desc\">{{userTitle}}</h5>\n                        </div>\n                        <router-link :to=\"{ name: 'user.view'}\" class=\"btn btn-primary btn-block btn-flat\">\n                            {{$t('dashboard.go_to_ptofile')}}\n                        </router-link>\n                    </div>\n                    <div class=\"box box-primary\">\n                        <div class=\"box-header\">\n                            <h3 class=\"box-title\">{{$t('dashboard.latest_scouting')}}</h3>\n                        </div>\n                        <div class=\"box-body latest-box-body\">\n                            <ul class=\"products-list product-list-in-box\" v-if=\"latestScouting\">\n                                <li class=\"item product-item\">\n                                    <div class=\"latest-product\">\n                                        <router-link\n                                                :to=\"{ name: 'scoutings.touch', params: { id: latestScouting.id }}\">\n                                            {{latestScouting.name}}\n                                        </router-link>\n                                        <span class=\"product-description\">\n                                            {{latestScouting.description}}\n                                        </span>\n                                    </div>\n                                </li>\n                            </ul>\n                            <h4 v-else>{{$t('dashboard.no_scouting')}}</h4>\n                            <router-link :to=\"{ name: 'scoutings.create'}\"\n                                         class=\"btn btn-success btn-block\">\n                                {{$t('dashboard.create_scouting')}}\n\n                            </router-link>\n\n                        </div>\n                    </div>\n                    <div class=\"box box-primary\">\n                        <div class=\"box-header\">\n                            <h3 class=\"box-title\">{{$t('dashboard.latest_report')}}</h3>\n                        </div>\n                        <div class=\"box-body\">\n                            <ul class=\"products-list product-list-in-box\" v-if=\"latestReport\">\n                                <li class=\"item product-item\">\n                                    <div class=\"latest-product\">\n                                        <router-link :to=\"{ name: 'reports.view', params: { id: latestReport.id }}\">\n                                            {{latestReport.name}}\n                                        </router-link>\n                                        <span class=\"product-description\">\n                                            {{latestReport.description}}\n                                        </span>\n                                    </div>\n                                </li>\n                            </ul>\n                            <h4 v-else>{{$t('dashboard.no_report')}}</h4>\n                            <router-link :to=\"{ name: 'reports.create'}\"\n                                         class=\"btn btn-success btn-block\">\n                                {{$t('dashboard.create_report')}}\n                            </router-link>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xs-12 col-md-9\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-10\">\n                            <div class=\"box box-primary\">\n                                <div class=\"box-header\">\n                                    <h3 class=\"box-title\">{{$t('dashboard.global_ranking')}}</h3>\n                                </div>\n                                <div class=\"box-body\">\n                                    <ul class=\"products-list product-list-in-box\">\n                                        <li class=\"item\" v-for=\"rank in ranking\">\n                                            <div class=\"product-rank pull-left\">\n                                                {{rank.rank}}\n                                            </div>\n                                            <div class=\"product-img\">\n                                                <img :src=\"rank.user.image\" alt=\"Product Image\">\n                                            </div>\n                                            <div class=\"product-info\">\n                                                <h4 class=\"pull-left\">{{rank.user.full_name}}</h4>\n                                                <img :src=\"rank.user.athlete.country.flag\" class=\"product-flag\" alt=\"\">\n                                                <span class=\"product-points pull-right\">{{rank.points}} pts\n                                                </span>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xs-12 col-md-2\">\n                            <div class=\"box box-primary\">\n                                <div class=\"box-header\">\n                                    <h3 class=\"box-title text-center\">{{$t('admin.quick_navigation')}}</h3>\n                                </div>\n                                <div class=\"box-body text-center\">\n                                    <router-link :to=\"{ name: 'scoutings.list'}\" class=\"btn btn-app btn-primary\">\n                                        <i class=\"fa fa-list\"></i>\n                                        {{$t('admin.scoutings')}}\n                                    </router-link>\n                                    <a class=\"btn btn-app\">\n                                        <i class=\"fa fa-file-text\"></i>\n                                        {{$t('admin.reports')}}\n                                    </a>\n                                    <router-link :to=\"{ name: 'athletes.list'}\" class=\"btn btn-app\">\n                                        <i class=\"fa fa-users\"></i>\n                                        {{$t('admin.athletes')}}\n\n                                    </router-link>\n                                    <router-link :to=\"{ name: 'events.list'}\" class=\"btn btn-app\">\n                                        <i class=\"fa fa-calendar\"></i>\n                                        {{$t('admin.events')}}\n\n                                    </router-link>\n                                    <router-link :to=\"{ name: 'championships.list'}\" class=\"btn btn-app\">\n                                        <i class=\"fa fa-trophy\"></i>\n                                        {{$t('admin.championships')}}\n\n                                    </router-link>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </div>\n</template>\n<style>\n    .product-rank {\n        font-size: 31px;\n        width: 70px;\n        text-align: center;\n        color: #AAA;\n    }\n\n    .product-points {\n        font-size: 20px;\n        background: #00c0ef;\n        margin: 9px;\n        padding: 0 5px;\n        min-width: 61px;\n        text-align: center;\n        color: white;\n    }\n\n    .product-img {\n        padding-right: 5px;\n    }\n\n    .products-list .latest-product {\n        margin-left: 0 !important;\n    }\n\n    .latest-product a {\n        font-size: 20px;\n        font-weight: bold;\n    }\n\n    .product-item {\n        border: 1px solid #f4f4f4;\n        padding: 5px !important;\n        margin-bottom: 10px !important;\n        background: #f7f7f7 !important\n    }\n\n    .latest-box-body {\n        padding-top: 0 !important;\n    }\n\n    .product-flag {\n        padding: 10px;\n    }\n</style>\n<script>\n    import pageHeader from 'base/components/header/pageHeader.vue'\n    import userStatisticsService from 'base/dashboard/services/user/userStatisticsService'\n    import rankingService from 'base/dashboard/services/ranking/rankingService'\n    import scoutingService from 'base/dashboard/services/scoutings/scoutingService'\n    import reportsService from 'base/dashboard/services/reports/reportService'\n    import dashboardLocales from 'base/lang/admin/dashboard/dashboard.js';\n\n    export default{\n        locales: dashboardLocales,\n        data(){\n            return {\n                breadcrumbs: [\n                    {\n                        href: '/',\n                        title: 'Home'\n                    },\n                ],\n                latestScouting: null,\n                latestReport: null,\n                summary: {\n                    scountings: 0,\n                    reports: 0,\n                    completedChallenges: 0,\n                    rank: 0,\n                    points: 0\n                },\n                ranking: []\n            }\n        },\n        components: {\n            pageHeader\n        },\n        computed: {\n            userTitle(){\n                return this.$auth.user().athlete ? this.$auth.user().athlete.sport.name + ' ' + this.$auth.user().athlete.specialty.name : ''\n            },\n        },\n        mounted(){\n            this.loadRanking();\n            this.loadLatestReport();\n            this.loadLatestScouting();\n        },\n        methods: {\n            loadRanking(){\n                rankingService.ranking((response)=> {\n                    this.ranking = response.data;\n                }, (response)=> {\n\n                })\n            },\n            loadLatestReport(){\n                reportsService.latest((response)=> {\n                    this.latestReport = response.data;\n                }, (response)=> {\n\n                })\n            },\n            loadLatestScouting(){\n                scoutingService.latest((response)=> {\n                    this.latestScouting = response.data;\n                }, (response)=> {\n\n                })\n            },\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-header', {
    attrs: {
      "title": "Dashboard",
      "breadcrumbs": _vm.breadcrumbs
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-3"
  }, [_c('div', {
    staticClass: "box box-widget widget-user-2"
  }, [_c('div', {
    staticClass: "widget-user-header bg-blue"
  }, [_c('div', {
    staticClass: "widget-user-image"
  }, [_c('img', {
    staticClass: "img-circle",
    attrs: {
      "src": _vm.$auth.user().image,
      "alt": "User Avatar"
    }
  })]), _vm._v(" "), _c('h3', {
    staticClass: "widget-user-username"
  }, [_vm._v(_vm._s(_vm.$auth.user().full_name))]), _vm._v(" "), _c('h5', {
    staticClass: "widget-user-desc"
  }, [_vm._v(_vm._s(_vm.userTitle))])]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-primary btn-block btn-flat",
    attrs: {
      "to": {
        name: 'user.view'
      }
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('dashboard.go_to_ptofile')) + "\n                    ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box box-primary"
  }, [_c('div', {
    staticClass: "box-header"
  }, [_c('h3', {
    staticClass: "box-title"
  }, [_vm._v(_vm._s(_vm.$t('dashboard.latest_scouting')))])]), _vm._v(" "), _c('div', {
    staticClass: "box-body latest-box-body"
  }, [(_vm.latestScouting) ? _c('ul', {
    staticClass: "products-list product-list-in-box"
  }, [_c('li', {
    staticClass: "item product-item"
  }, [_c('div', {
    staticClass: "latest-product"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'scoutings.touch',
        params: {
          id: _vm.latestScouting.id
        }
      }
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.latestScouting.name) + "\n                                    ")]), _vm._v(" "), _c('span', {
    staticClass: "product-description"
  }, [_vm._v("\n                                        " + _vm._s(_vm.latestScouting.description) + "\n                                    ")])], 1)])]) : _c('h4', [_vm._v(_vm._s(_vm.$t('dashboard.no_scouting')))]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-success btn-block",
    attrs: {
      "to": {
        name: 'scoutings.create'
      }
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.$t('dashboard.create_scouting')) + "\n\n                        ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "box box-primary"
  }, [_c('div', {
    staticClass: "box-header"
  }, [_c('h3', {
    staticClass: "box-title"
  }, [_vm._v(_vm._s(_vm.$t('dashboard.latest_report')))])]), _vm._v(" "), _c('div', {
    staticClass: "box-body"
  }, [(_vm.latestReport) ? _c('ul', {
    staticClass: "products-list product-list-in-box"
  }, [_c('li', {
    staticClass: "item product-item"
  }, [_c('div', {
    staticClass: "latest-product"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'reports.view',
        params: {
          id: _vm.latestReport.id
        }
      }
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.latestReport.name) + "\n                                    ")]), _vm._v(" "), _c('span', {
    staticClass: "product-description"
  }, [_vm._v("\n                                        " + _vm._s(_vm.latestReport.description) + "\n                                    ")])], 1)])]) : _c('h4', [_vm._v(_vm._s(_vm.$t('dashboard.no_report')))]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-success btn-block",
    attrs: {
      "to": {
        name: 'reports.create'
      }
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.$t('dashboard.create_report')) + "\n                        ")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-9"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-10"
  }, [_c('div', {
    staticClass: "box box-primary"
  }, [_c('div', {
    staticClass: "box-header"
  }, [_c('h3', {
    staticClass: "box-title"
  }, [_vm._v(_vm._s(_vm.$t('dashboard.global_ranking')))])]), _vm._v(" "), _c('div', {
    staticClass: "box-body"
  }, [_c('ul', {
    staticClass: "products-list product-list-in-box"
  }, _vm._l((_vm.ranking), function(rank) {
    return _c('li', {
      staticClass: "item"
    }, [_c('div', {
      staticClass: "product-rank pull-left"
    }, [_vm._v("\n                                            " + _vm._s(rank.rank) + "\n                                        ")]), _vm._v(" "), _c('div', {
      staticClass: "product-img"
    }, [_c('img', {
      attrs: {
        "src": rank.user.image,
        "alt": "Product Image"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "product-info"
    }, [_c('h4', {
      staticClass: "pull-left"
    }, [_vm._v(_vm._s(rank.user.full_name))]), _vm._v(" "), _c('img', {
      staticClass: "product-flag",
      attrs: {
        "src": rank.user.athlete.country.flag,
        "alt": ""
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "product-points pull-right"
    }, [_vm._v(_vm._s(rank.points) + " pts\n                                            ")])])])
  }))])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-2"
  }, [_c('div', {
    staticClass: "box box-primary"
  }, [_c('div', {
    staticClass: "box-header"
  }, [_c('h3', {
    staticClass: "box-title text-center"
  }, [_vm._v(_vm._s(_vm.$t('admin.quick_navigation')))])]), _vm._v(" "), _c('div', {
    staticClass: "box-body text-center"
  }, [_c('router-link', {
    staticClass: "btn btn-app btn-primary",
    attrs: {
      "to": {
        name: 'scoutings.list'
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-list"
  }), _vm._v("\n                                    " + _vm._s(_vm.$t('admin.scoutings')) + "\n                                ")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-app"
  }, [_c('i', {
    staticClass: "fa fa-file-text"
  }), _vm._v("\n                                    " + _vm._s(_vm.$t('admin.reports')) + "\n                                ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-app",
    attrs: {
      "to": {
        name: 'athletes.list'
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-users"
  }), _vm._v("\n                                    " + _vm._s(_vm.$t('admin.athletes')) + "\n\n                                ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-app",
    attrs: {
      "to": {
        name: 'events.list'
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-calendar"
  }), _vm._v("\n                                    " + _vm._s(_vm.$t('admin.events')) + "\n\n                                ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-app",
    attrs: {
      "to": {
        name: 'championships.list'
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-trophy"
  }), _vm._v("\n                                    " + _vm._s(_vm.$t('admin.championships')) + "\n\n                                ")])], 1)])])])])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-39b7e8b6", module.exports)
  }
}

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(359);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("b3532890", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-39b7e8b6!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-39b7e8b6!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/NmI4ZSoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vcGFnZUhlYWRlci52dWU/NTYwYyoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlP2E1NmYqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/MzhhMyoqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT80NDEyKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9zY291dGluZ3Mvc2NvdXRpbmdTZXJ2aWNlLmpzPzNkODUqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydFNlcnZpY2UuanM/OGMyMyoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvdXNlci91c2VyU3RhdGlzdGljc1NlcnZpY2UuanM/MDkwNiIsIndlYnBhY2s6Ly8vZGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9yYW5raW5nL3JhbmtpbmdTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC52dWU/NzU5NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlP2I5ZGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnZ1ZT9jYTRiIl0sIm5hbWVzIjpbInNob3ciLCJpZCIsInN1Y2Nlc3NDYWxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImh0dHAiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJib2R5IiwiY2F0Y2giLCJlcnJvciIsImNyZWF0ZSIsInNjb3V0aW5nIiwicG9zdCIsInVwZGF0ZSIsInB1dCIsImVtdWxhdGVIVFRQIiwicmVtb3ZlIiwiZGVsZXRlIiwicmVwb3J0IiwibGF0ZXN0IiwiYXRobGV0ZSIsInN1bW1hcnkiLCJyYW5raW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7O0FDOUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztB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QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDdE1BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJqcy8xNi5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMzliN2U4YjYhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2Rhc2hib2FyZC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Rhc2hib2FyZC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zOWI3ZThiNiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9kYXNoYm9hcmQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZGFzaGJvYXJkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zOWI3ZThiNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM5YjdlOGI2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDE3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDE2IiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtN2ZjZDA5NTYhc2Fzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcGFnZUhlYWRlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2ZjZDA5NTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03ZmNkMDk1NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwiPHRlbXBsYXRlPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgICAge3t0aXRsZX19XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxvbCBjbGFzcz1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJicmVhZGNydW1iLmhyZWZcIiBhY3RpdmUtY2xhc3M9XCJhY3RpdmVcIiB0YWc9XCJsaVwiIHYtZm9yPVwiYnJlYWRjcnVtYiBpbiBicmVhZGNydW1ic1wiPlxuICAgICAgICAgICAgICAgIHt7JHQoYnJlYWRjcnVtYi50aXRsZSl9fVxuICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgPC9vbD5cbiAgICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgcmVsPVwic3R5bGVzaGVldC9zY3NzXCI+XG4gICAgLmFkbWluLWhlYWRlciB7XG4gICAgICAgIGhlaWdodDogOTdweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwYWdlSGVhZGVyLnZ1ZT81Mzc5ZjVjYiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmFkbWluLWhlYWRlciB7XFxuICBoZWlnaHQ6IDk3cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uYWRtaW4taGVhZGVyIC5yb3cge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGVudC1oZWFkZXJcIlxuICB9LCBbX2MoJ2gxJywgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYlwiXG4gIH0sIF92bS5fbCgoX3ZtLmJyZWFkY3J1bWJzKSwgZnVuY3Rpb24oYnJlYWRjcnVtYikge1xuICAgIHJldHVybiBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInRvXCI6IGJyZWFkY3J1bWIuaHJlZixcbiAgICAgICAgXCJhY3RpdmUtY2xhc3NcIjogXCJhY3RpdmVcIixcbiAgICAgICAgXCJ0YWdcIjogXCJsaVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChicmVhZGNydW1iLnRpdGxlKSkgKyBcIlxcbiAgICAgICAgXCIpXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtN2ZjZDA5NTZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJlOWZlYzFjMlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHNob3coaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9zY291dGluZ3MvJyArIGlkICsgJz9pbmNsdWRlPWNoYW1waW9uc2hpcC5zcG9ydCxldmVudCxsZWZ0QXRobGV0ZSxyaWdodEF0aGxldGUsdG91Y2hlcy5hY3Rpb25zLmxlZnRUYWdzLHRvdWNoZXMuYWN0aW9ucy5yaWdodFRhZ3MnKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcbiAgICB9LFxuICAgIGNyZWF0ZShzY291dGluZywgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAucG9zdCgnL2FwaS9zY291dGluZ3MnLCBzY291dGluZylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbiAgICB1cGRhdGUoaWQsIHNjb3V0aW5nLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5wdXQoJy9hcGkvc2NvdXRpbmdzLycgKyBpZCwgc2NvdXRpbmcsIHtlbXVsYXRlSFRUUDogdHJ1ZX0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvci5ib2R5KSk7XG4gICAgfSxcbiAgICByZW1vdmUoaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmRlbGV0ZSgnL2FwaS9zY291dGluZ3MvJyArIGlkKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IuYm9keSkpO1xuICAgIH0sXG4gICAgcmVwb3J0KGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvc2NvdXRpbmdzLycgKyBpZCArICcvcmVwb3J0JylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbiAgICBsYXRlc3Qoc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3Njb3V0aW5ncy9sYXRlc3QnKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcbiAgICB9LFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3Njb3V0aW5ncy9zY291dGluZ1NlcnZpY2UuanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHNob3coaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9yZXBvcnRzLycgKyBpZClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbiAgICBjcmVhdGUoYXRobGV0ZSwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAucG9zdCgnL2FwaS9yZXBvcnRzJywgYXRobGV0ZSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbiAgICBsYXRlc3Qoc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3JlcG9ydHMvbGF0ZXN0JylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydFNlcnZpY2UuanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHN1bW1hcnkoc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3VzZXIvc3RhdGlzdGljcy9zdW1tYXJ5JylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3VzZXIvdXNlclN0YXRpc3RpY3NTZXJ2aWNlLmpzIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwYWdlLWhlYWRlciB0aXRsZT1cIkRhc2hib2FyZFwiIDpicmVhZGNydW1icz1cImJyZWFkY3J1bWJzXCI+PC9wYWdlLWhlYWRlcj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtM1wiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3ggYm94LXdpZGdldCB3aWRnZXQtdXNlci0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEFkZCB0aGUgYmcgY29sb3IgdG8gdGhlIGhlYWRlciB1c2luZyBhbnkgb2YgdGhlIGJnLSogY2xhc3NlcyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXQtdXNlci1oZWFkZXIgYmctYmx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXQtdXNlci1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWNpcmNsZVwiIDpzcmM9XCIkYXV0aC51c2VyKCkuaW1hZ2VcIiBhbHQ9XCJVc2VyIEF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy53aWRnZXQtdXNlci1pbWFnZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ3aWRnZXQtdXNlci11c2VybmFtZVwiPnt7JGF1dGgudXNlcigpLmZ1bGxfbmFtZX19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ3aWRnZXQtdXNlci1kZXNjXCI+e3t1c2VyVGl0bGV9fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICd1c2VyLnZpZXcnfVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tZmxhdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2Rhc2hib2FyZC5nb190b19wdG9maWxlJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3ggYm94LXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlXCI+e3skdCgnZGFzaGJvYXJkLmxhdGVzdF9zY291dGluZycpfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHkgbGF0ZXN0LWJveC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicHJvZHVjdHMtbGlzdCBwcm9kdWN0LWxpc3QtaW4tYm94XCIgdi1pZj1cImxhdGVzdFNjb3V0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW0gcHJvZHVjdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF0ZXN0LXByb2R1Y3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0bz1cInsgbmFtZTogJ3Njb3V0aW5ncy50b3VjaCcsIHBhcmFtczogeyBpZDogbGF0ZXN0U2NvdXRpbmcuaWQgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsYXRlc3RTY291dGluZy5uYW1lfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xhdGVzdFNjb3V0aW5nLmRlc2NyaXB0aW9ufX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCB2LWVsc2U+e3skdCgnZGFzaGJvYXJkLm5vX3Njb3V0aW5nJyl9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3Njb3V0aW5ncy5jcmVhdGUnfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdkYXNoYm9hcmQuY3JlYXRlX3Njb3V0aW5nJyl9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94IGJveC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZVwiPnt7JHQoJ2Rhc2hib2FyZC5sYXRlc3RfcmVwb3J0Jyl9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInByb2R1Y3RzLWxpc3QgcHJvZHVjdC1saXN0LWluLWJveFwiIHYtaWY9XCJsYXRlc3RSZXBvcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbSBwcm9kdWN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXRlc3QtcHJvZHVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdyZXBvcnRzLnZpZXcnLCBwYXJhbXM6IHsgaWQ6IGxhdGVzdFJlcG9ydC5pZCB9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xhdGVzdFJlcG9ydC5uYW1lfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xhdGVzdFJlcG9ydC5kZXNjcmlwdGlvbn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgdi1lbHNlPnt7JHQoJ2Rhc2hib2FyZC5ub19yZXBvcnQnKX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAncmVwb3J0cy5jcmVhdGUnfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdkYXNoYm9hcmQuY3JlYXRlX3JlcG9ydCcpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94IGJveC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGVcIj57eyR0KCdkYXNoYm9hcmQuZ2xvYmFsX3JhbmtpbmcnKX19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicHJvZHVjdHMtbGlzdCBwcm9kdWN0LWxpc3QtaW4tYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbVwiIHYtZm9yPVwicmFuayBpbiByYW5raW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LXJhbmsgcHVsbC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3JhbmsucmFua319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInJhbmsudXNlci5pbWFnZVwiIGFsdD1cIlByb2R1Y3QgSW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInB1bGwtbGVmdFwiPnt7cmFuay51c2VyLmZ1bGxfbmFtZX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInJhbmsudXNlci5hdGhsZXRlLmNvdW50cnkuZmxhZ1wiIGNsYXNzPVwicHJvZHVjdC1mbGFnXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3QtcG9pbnRzIHB1bGwtcmlnaHRcIj57e3JhbmsucG9pbnRzfX0gcHRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3ggYm94LXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZSB0ZXh0LWNlbnRlclwiPnt7JHQoJ2FkbWluLnF1aWNrX25hdmlnYXRpb24nKX19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3Njb3V0aW5ncy5saXN0J31cIiBjbGFzcz1cImJ0biBidG4tYXBwIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1saXN0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2FkbWluLnNjb3V0aW5ncycpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tYXBwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1maWxlLXRleHRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnYWRtaW4ucmVwb3J0cycpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdhdGhsZXRlcy5saXN0J31cIiBjbGFzcz1cImJ0biBidG4tYXBwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS11c2Vyc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdhZG1pbi5hdGhsZXRlcycpfX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdldmVudHMubGlzdCd9XCIgY2xhc3M9XCJidG4gYnRuLWFwcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnYWRtaW4uZXZlbnRzJyl9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ2NoYW1waW9uc2hpcHMubGlzdCd9XCIgY2xhc3M9XCJidG4gYnRuLWFwcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJvcGh5XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2FkbWluLmNoYW1waW9uc2hpcHMnKX19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGU+XG4gICAgLnByb2R1Y3QtcmFuayB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzFweDtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNBQUE7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtcG9pbnRzIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDBjMGVmO1xuICAgICAgICBtYXJnaW46IDlweDtcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgIG1pbi13aWR0aDogNjFweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtaW1nIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIH1cblxuICAgIC5wcm9kdWN0cy1saXN0IC5sYXRlc3QtcHJvZHVjdCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmxhdGVzdC1wcm9kdWN0IGEge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWl0ZW0ge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjRmNGY0O1xuICAgICAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3ICFpbXBvcnRhbnRcbiAgICB9XG5cbiAgICAubGF0ZXN0LWJveC1ib2R5IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1mbGFnIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgcGFnZUhlYWRlciBmcm9tICdiYXNlL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlJ1xuICAgIGltcG9ydCB1c2VyU3RhdGlzdGljc1NlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvdXNlci91c2VyU3RhdGlzdGljc1NlcnZpY2UnXG4gICAgaW1wb3J0IHJhbmtpbmdTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3JhbmtpbmcvcmFua2luZ1NlcnZpY2UnXG4gICAgaW1wb3J0IHNjb3V0aW5nU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9zY291dGluZ3Mvc2NvdXRpbmdTZXJ2aWNlJ1xuICAgIGltcG9ydCByZXBvcnRzU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydFNlcnZpY2UnXG4gICAgaW1wb3J0IGRhc2hib2FyZExvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuanMnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGxvY2FsZXM6IGRhc2hib2FyZExvY2FsZXMsXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYnJlYWRjcnVtYnM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdIb21lJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgbGF0ZXN0U2NvdXRpbmc6IG51bGwsXG4gICAgICAgICAgICAgICAgbGF0ZXN0UmVwb3J0OiBudWxsLFxuICAgICAgICAgICAgICAgIHN1bW1hcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2NvdW50aW5nczogMCxcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0czogMCxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkQ2hhbGxlbmdlczogMCxcbiAgICAgICAgICAgICAgICAgICAgcmFuazogMCxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByYW5raW5nOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBwYWdlSGVhZGVyXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICB1c2VyVGl0bGUoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kYXV0aC51c2VyKCkuYXRobGV0ZSA/IHRoaXMuJGF1dGgudXNlcigpLmF0aGxldGUuc3BvcnQubmFtZSArICcgJyArIHRoaXMuJGF1dGgudXNlcigpLmF0aGxldGUuc3BlY2lhbHR5Lm5hbWUgOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgdGhpcy5sb2FkUmFua2luZygpO1xuICAgICAgICAgICAgdGhpcy5sb2FkTGF0ZXN0UmVwb3J0KCk7XG4gICAgICAgICAgICB0aGlzLmxvYWRMYXRlc3RTY291dGluZygpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBsb2FkUmFua2luZygpe1xuICAgICAgICAgICAgICAgIHJhbmtpbmdTZXJ2aWNlLnJhbmtpbmcoKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYW5raW5nID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB9LCAocmVzcG9uc2UpPT4ge1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2FkTGF0ZXN0UmVwb3J0KCl7XG4gICAgICAgICAgICAgICAgcmVwb3J0c1NlcnZpY2UubGF0ZXN0KChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF0ZXN0UmVwb3J0ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB9LCAocmVzcG9uc2UpPT4ge1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2FkTGF0ZXN0U2NvdXRpbmcoKXtcbiAgICAgICAgICAgICAgICBzY291dGluZ1NlcnZpY2UubGF0ZXN0KChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF0ZXN0U2NvdXRpbmcgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIH0sIChyZXNwb25zZSk9PiB7XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRhc2hib2FyZC52dWU/NzExYTY0YmUiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJhbmtpbmcoc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3Jhbmtpbmc/aW5jbHVkZT11c2VyLmF0aGxldGUuY291bnRyeScpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvcmFua2luZy9yYW5raW5nU2VydmljZS5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBcImVuXCI6IHtcbiAgICAgICAgXCJkYXNoYm9hcmRcIjoge1xuICAgICAgICAgICAgXCJnbG9iYWxfcmFua2luZ1wiOiBcIkdsb2JhbCBSYW5raW5nXCIsXG4gICAgICAgICAgICBcIm1lbnVcIjogXCJNZW51XCIsXG4gICAgICAgICAgICBcIm92ZXJhbGxfcmFua2luZ1wiOiBcIk92ZXJhbGwgUmFua2luZ1wiLFxuICAgICAgICAgICAgXCJzY291dGluZ3NcIjogXCJTY291dGluZ3NcIixcbiAgICAgICAgICAgIFwicmVwb3J0c1wiOiBcIlJlcG9ydHNcIixcbiAgICAgICAgICAgIFwiY29tcGxldGVkX2NoYWxsZW5nZXNcIjogXCJDb21wbGV0ZWQgQ2hhbGxlbmdlc1wiLFxuICAgICAgICAgICAgXCJsYXRlc3RfcmVwb3J0XCI6IFwiTGF0ZXN0IFJlcG9ydFwiLFxuICAgICAgICAgICAgXCJub19yZXBvcnRcIjogXCJDcmVhdGUgYSBuZXcgcmVwb3J0XCIsXG4gICAgICAgICAgICBcIm5vX3Njb3V0aW5nXCI6IFwiQ3JlYXRlIGEgbmV3IHNjb3V0aW5nXCIsXG4gICAgICAgICAgICBcImxhdGVzdF9zY291dGluZ1wiOiBcIkxhdGVzdCBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJjcmVhdGVfcmVwb3J0XCI6IFwiQ3JlYXRlIFJlcG9ydFwiLFxuICAgICAgICAgICAgXCJjcmVhdGVfc2NvdXRpbmdcIjogXCJDcmVhdGUgU2NvdXRpbmdcIixcbiAgICAgICAgICAgIFwiZ29fdG9fcHRvZmlsZVwiOiBcIkdvIHRvIE15IFByb2ZpbGVcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJkYXNoYm9hcmRcIjoge1xuICAgICAgICAgICAgXCJnbG9iYWxfcmFua2luZ1wiOiBcIlJhbmtpbmcgR2xvYmFsXCIsXG4gICAgICAgICAgICBcIm1lbnVcIjogXCJNZW51XCIsXG4gICAgICAgICAgICBcIm92ZXJhbGxfcmFua2luZ1wiOiBcIlJhbmtpbmdcIixcbiAgICAgICAgICAgIFwic2NvdXRpbmdzXCI6IFwiU2NvdXRpbmdzXCIsXG4gICAgICAgICAgICBcInJlcG9ydHNcIjogXCJSZXBvcnRlc1wiLFxuICAgICAgICAgICAgXCJjb21wbGV0ZWRfY2hhbGxlbmdlc1wiOiBcIkRlc2FmaW9zIENvbXBsZXRhZG9zXCIsXG4gICAgICAgICAgICBcImxhdGVzdF9yZXBvcnRcIjogXCLDmmx0aW1vIFJlcG9ydGVcIixcbiAgICAgICAgICAgIFwibm9fcmVwb3J0XCI6IFwiQ3JlYSB1biBudWV2byByZXBvcnRcIixcbiAgICAgICAgICAgIFwibm9fc2NvdXRpbmdcIjogXCJDcmVhIHVuIG51ZXZvIHNjb3V0aW5nXCIsXG4gICAgICAgICAgICBcImxhdGVzdF9zY291dGluZ1wiOiBcIsOabHRpbW8gU2NvdXRpbmdcIixcbiAgICAgICAgICAgIFwiY3JlYXRlX3JlcG9ydFwiOiBcIkNyZWFyIFJlcG9ydGVcIixcbiAgICAgICAgICAgIFwiY3JlYXRlX3Njb3V0aW5nXCI6IFwiQ3JlYXIgU2NvdXRpbmdcIixcbiAgICAgICAgICAgIFwiZ29fdG9fcHRvZmlsZVwiOiBcIklyIGEgbWkgUGVyZmlsXCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucHJvZHVjdC1yYW5rIHtcXG4gICAgZm9udC1zaXplOiAzMXB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0FBQTtcXG59XFxuLnByb2R1Y3QtcG9pbnRzIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDBjMGVmO1xcbiAgICBtYXJnaW46IDlweDtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxuICAgIG1pbi13aWR0aDogNjFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5wcm9kdWN0LWltZyB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuLnByb2R1Y3RzLWxpc3QgLmxhdGVzdC1wcm9kdWN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXG59XFxuLmxhdGVzdC1wcm9kdWN0IGEge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ucHJvZHVjdC1pdGVtIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y0ZjRmNDtcXG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNyAhaW1wb3J0YW50XFxufVxcbi5sYXRlc3QtYm94LWJvZHkge1xcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xcbn1cXG4ucHJvZHVjdC1mbGFnIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlPzcxMWE2NGJlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUEySUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7Q0FDQTtBQUVBO0lBQ0EsMEJBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtDQUNBO0FBRUE7SUFDQSwwQkFBQTtJQUNBLHdCQUFBO0lBQ0EsK0JBQUE7SUFDQSw4QkFBQTtDQUNBO0FBRUE7SUFDQSwwQkFBQTtDQUNBO0FBRUE7SUFDQSxjQUFBO0NBQ0FcIixcImZpbGVcIjpcImRhc2hib2FyZC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPHBhZ2UtaGVhZGVyIHRpdGxlPVxcXCJEYXNoYm9hcmRcXFwiIDpicmVhZGNydW1icz1cXFwiYnJlYWRjcnVtYnNcXFwiPjwvcGFnZS1oZWFkZXI+XFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC0zXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveCBib3gtd2lkZ2V0IHdpZGdldC11c2VyLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQWRkIHRoZSBiZyBjb2xvciB0byB0aGUgaGVhZGVyIHVzaW5nIGFueSBvZiB0aGUgYmctKiBjbGFzc2VzIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndpZGdldC11c2VyLWhlYWRlciBiZy1ibHVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2lkZ2V0LXVzZXItaW1hZ2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiaW1nLWNpcmNsZVxcXCIgOnNyYz1cXFwiJGF1dGgudXNlcigpLmltYWdlXFxcIiBhbHQ9XFxcIlVzZXIgQXZhdGFyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy53aWRnZXQtdXNlci1pbWFnZSAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJ3aWRnZXQtdXNlci11c2VybmFtZVxcXCI+e3skYXV0aC51c2VyKCkuZnVsbF9uYW1lfX08L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcIndpZGdldC11c2VyLWRlc2NcXFwiPnt7dXNlclRpdGxlfX08L2g1PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XFxcInsgbmFtZTogJ3VzZXIudmlldyd9XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tZmxhdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2Rhc2hib2FyZC5nb190b19wdG9maWxlJyl9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveCBib3gtcHJpbWFyeVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94LWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiYm94LXRpdGxlXFxcIj57eyR0KCdkYXNoYm9hcmQubGF0ZXN0X3Njb3V0aW5nJyl9fTwvaDM+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94LWJvZHkgbGF0ZXN0LWJveC1ib2R5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJwcm9kdWN0cy1saXN0IHByb2R1Y3QtbGlzdC1pbi1ib3hcXFwiIHYtaWY9XFxcImxhdGVzdFNjb3V0aW5nXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaXRlbSBwcm9kdWN0LWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxhdGVzdC1wcm9kdWN0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRvPVxcXCJ7IG5hbWU6ICdzY291dGluZ3MudG91Y2gnLCBwYXJhbXM6IHsgaWQ6IGxhdGVzdFNjb3V0aW5nLmlkIH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bGF0ZXN0U2NvdXRpbmcubmFtZX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwcm9kdWN0LWRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bGF0ZXN0U2NvdXRpbmcuZGVzY3JpcHRpb259fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgdi1lbHNlPnt7JHQoJ2Rhc2hib2FyZC5ub19zY291dGluZycpfX08L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdzY291dGluZ3MuY3JlYXRlJ31cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdkYXNoYm9hcmQuY3JlYXRlX3Njb3V0aW5nJyl9fVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3ggYm94LXByaW1hcnlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcImJveC10aXRsZVxcXCI+e3skdCgnZGFzaGJvYXJkLmxhdGVzdF9yZXBvcnQnKX19PC9oMz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3gtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwicHJvZHVjdHMtbGlzdCBwcm9kdWN0LWxpc3QtaW4tYm94XFxcIiB2LWlmPVxcXCJsYXRlc3RSZXBvcnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJpdGVtIHByb2R1Y3QtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGF0ZXN0LXByb2R1Y3RcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdyZXBvcnRzLnZpZXcnLCBwYXJhbXM6IHsgaWQ6IGxhdGVzdFJlcG9ydC5pZCB9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xhdGVzdFJlcG9ydC5uYW1lfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInByb2R1Y3QtZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsYXRlc3RSZXBvcnQuZGVzY3JpcHRpb259fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgdi1lbHNlPnt7JHQoJ2Rhc2hib2FyZC5ub19yZXBvcnQnKX19PC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAncmVwb3J0cy5jcmVhdGUnfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2Rhc2hib2FyZC5jcmVhdGVfcmVwb3J0Jyl9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94IGJveC1wcmltYXJ5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiYm94LXRpdGxlXFxcIj57eyR0KCdkYXNoYm9hcmQuZ2xvYmFsX3JhbmtpbmcnKX19PC9oMz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94LWJvZHlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwicHJvZHVjdHMtbGlzdCBwcm9kdWN0LWxpc3QtaW4tYm94XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJpdGVtXFxcIiB2LWZvcj1cXFwicmFuayBpbiByYW5raW5nXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtcmFuayBwdWxsLWxlZnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmFuay5yYW5rfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1pbWdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cXFwicmFuay51c2VyLmltYWdlXFxcIiBhbHQ9XFxcIlByb2R1Y3QgSW1hZ2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWluZm9cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwicHVsbC1sZWZ0XFxcIj57e3JhbmsudXNlci5mdWxsX25hbWV9fTwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVxcXCJyYW5rLnVzZXIuYXRobGV0ZS5jb3VudHJ5LmZsYWdcXFwiIGNsYXNzPVxcXCJwcm9kdWN0LWZsYWdcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHJvZHVjdC1wb2ludHMgcHVsbC1yaWdodFxcXCI+e3tyYW5rLnBvaW50c319IHB0c1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94IGJveC1wcmltYXJ5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiYm94LXRpdGxlIHRleHQtY2VudGVyXFxcIj57eyR0KCdhZG1pbi5xdWlja19uYXZpZ2F0aW9uJyl9fTwvaDM+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveC1ib2R5IHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdzY291dGluZ3MubGlzdCd9XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1hcHAgYnRuLXByaW1hcnlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbGlzdFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdhZG1pbi5zY291dGluZ3MnKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1hcHBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtZmlsZS10ZXh0XFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2FkbWluLnJlcG9ydHMnKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XFxcInsgbmFtZTogJ2F0aGxldGVzLmxpc3QnfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tYXBwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVzZXJzXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2FkbWluLmF0aGxldGVzJyl9fVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAnZXZlbnRzLmxpc3QnfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tYXBwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNhbGVuZGFyXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2FkbWluLmV2ZW50cycpfX1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XFxcInsgbmFtZTogJ2NoYW1waW9uc2hpcHMubGlzdCd9XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1hcHBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdHJvcGh5XFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2FkbWluLmNoYW1waW9uc2hpcHMnKX19XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvc2VjdGlvbj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG48c3R5bGU+XFxuICAgIC5wcm9kdWN0LXJhbmsge1xcbiAgICAgICAgZm9udC1zaXplOiAzMXB4O1xcbiAgICAgICAgd2lkdGg6IDcwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBjb2xvcjogI0FBQTtcXG4gICAgfVxcblxcbiAgICAucHJvZHVjdC1wb2ludHMge1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogIzAwYzBlZjtcXG4gICAgICAgIG1hcmdpbjogOXB4O1xcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XFxuICAgICAgICBtaW4td2lkdGg6IDYxcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG5cXG4gICAgLnByb2R1Y3QtaW1nIHtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gICAgfVxcblxcbiAgICAucHJvZHVjdHMtbGlzdCAubGF0ZXN0LXByb2R1Y3Qge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gICAgfVxcblxcbiAgICAubGF0ZXN0LXByb2R1Y3QgYSB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcblxcbiAgICAucHJvZHVjdC1pdGVtIHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNGY0ZjQ7XFxuICAgICAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmN2Y3ZjcgIWltcG9ydGFudFxcbiAgICB9XFxuXFxuICAgIC5sYXRlc3QtYm94LWJvZHkge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcXG4gICAgfVxcblxcbiAgICAucHJvZHVjdC1mbGFnIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG48L3N0eWxlPlxcbjxzY3JpcHQ+XFxuICAgIGltcG9ydCBwYWdlSGVhZGVyIGZyb20gJ2Jhc2UvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWUnXFxuICAgIGltcG9ydCB1c2VyU3RhdGlzdGljc1NlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvdXNlci91c2VyU3RhdGlzdGljc1NlcnZpY2UnXFxuICAgIGltcG9ydCByYW5raW5nU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9yYW5raW5nL3JhbmtpbmdTZXJ2aWNlJ1xcbiAgICBpbXBvcnQgc2NvdXRpbmdTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3Njb3V0aW5ncy9zY291dGluZ1NlcnZpY2UnXFxuICAgIGltcG9ydCByZXBvcnRzU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydFNlcnZpY2UnXFxuICAgIGltcG9ydCBkYXNoYm9hcmRMb2NhbGVzIGZyb20gJ2Jhc2UvbGFuZy9hZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzJztcXG5cXG4gICAgZXhwb3J0IGRlZmF1bHR7XFxuICAgICAgICBsb2NhbGVzOiBkYXNoYm9hcmRMb2NhbGVzLFxcbiAgICAgICAgZGF0YSgpe1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJzOiBbXFxuICAgICAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy8nLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnSG9tZSdcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgICAgIGxhdGVzdFNjb3V0aW5nOiBudWxsLFxcbiAgICAgICAgICAgICAgICBsYXRlc3RSZXBvcnQ6IG51bGwsXFxuICAgICAgICAgICAgICAgIHN1bW1hcnk6IHtcXG4gICAgICAgICAgICAgICAgICAgIHNjb3VudGluZ3M6IDAsXFxuICAgICAgICAgICAgICAgICAgICByZXBvcnRzOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkQ2hhbGxlbmdlczogMCxcXG4gICAgICAgICAgICAgICAgICAgIHJhbms6IDAsXFxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6IDBcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgcmFua2luZzogW11cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgY29tcG9uZW50czoge1xcbiAgICAgICAgICAgIHBhZ2VIZWFkZXJcXG4gICAgICAgIH0sXFxuICAgICAgICBjb21wdXRlZDoge1xcbiAgICAgICAgICAgIHVzZXJUaXRsZSgpe1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kYXV0aC51c2VyKCkuYXRobGV0ZSA/IHRoaXMuJGF1dGgudXNlcigpLmF0aGxldGUuc3BvcnQubmFtZSArICcgJyArIHRoaXMuJGF1dGgudXNlcigpLmF0aGxldGUuc3BlY2lhbHR5Lm5hbWUgOiAnJ1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9LFxcbiAgICAgICAgbW91bnRlZCgpe1xcbiAgICAgICAgICAgIHRoaXMubG9hZFJhbmtpbmcoKTtcXG4gICAgICAgICAgICB0aGlzLmxvYWRMYXRlc3RSZXBvcnQoKTtcXG4gICAgICAgICAgICB0aGlzLmxvYWRMYXRlc3RTY291dGluZygpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIG1ldGhvZHM6IHtcXG4gICAgICAgICAgICBsb2FkUmFua2luZygpe1xcbiAgICAgICAgICAgICAgICByYW5raW5nU2VydmljZS5yYW5raW5nKChyZXNwb25zZSk9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhbmtpbmcgPSByZXNwb25zZS5kYXRhO1xcbiAgICAgICAgICAgICAgICB9LCAocmVzcG9uc2UpPT4ge1xcblxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgbG9hZExhdGVzdFJlcG9ydCgpe1xcbiAgICAgICAgICAgICAgICByZXBvcnRzU2VydmljZS5sYXRlc3QoKHJlc3BvbnNlKT0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF0ZXN0UmVwb3J0ID0gcmVzcG9uc2UuZGF0YTtcXG4gICAgICAgICAgICAgICAgfSwgKHJlc3BvbnNlKT0+IHtcXG5cXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGxvYWRMYXRlc3RTY291dGluZygpe1xcbiAgICAgICAgICAgICAgICBzY291dGluZ1NlcnZpY2UubGF0ZXN0KChyZXNwb25zZSk9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhdGVzdFNjb3V0aW5nID0gcmVzcG9uc2UuZGF0YTtcXG4gICAgICAgICAgICAgICAgfSwgKHJlc3BvbnNlKT0+IHtcXG5cXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zOWI3ZThiNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDM1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDE2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ3BhZ2UtaGVhZGVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiRGFzaGJvYXJkXCIsXG4gICAgICBcImJyZWFkY3J1bWJzXCI6IF92bS5icmVhZGNydW1ic1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTNcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3ggYm94LXdpZGdldCB3aWRnZXQtdXNlci0yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwid2lkZ2V0LXVzZXItaGVhZGVyIGJnLWJsdWVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3aWRnZXQtdXNlci1pbWFnZVwiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImltZy1jaXJjbGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLiRhdXRoLnVzZXIoKS5pbWFnZSxcbiAgICAgIFwiYWx0XCI6IFwiVXNlciBBdmF0YXJcIlxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIndpZGdldC11c2VyLXVzZXJuYW1lXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiRhdXRoLnVzZXIoKS5mdWxsX25hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwid2lkZ2V0LXVzZXItZGVzY1wiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyVGl0bGUpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIGJ0bi1mbGF0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjoge1xuICAgICAgICBuYW1lOiAndXNlci52aWV3J1xuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnZGFzaGJvYXJkLmdvX3RvX3B0b2ZpbGUnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3ggYm94LXByaW1hcnlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyXCJcbiAgfSwgW19jKCdoMycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2Rhc2hib2FyZC5sYXRlc3Rfc2NvdXRpbmcnKSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtYm9keSBsYXRlc3QtYm94LWJvZHlcIlxuICB9LCBbKF92bS5sYXRlc3RTY291dGluZykgPyBfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvZHVjdHMtbGlzdCBwcm9kdWN0LWxpc3QtaW4tYm94XCJcbiAgfSwgW19jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtIHByb2R1Y3QtaXRlbVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxhdGVzdC1wcm9kdWN0XCJcbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiB7XG4gICAgICAgIG5hbWU6ICdzY291dGluZ3MudG91Y2gnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBpZDogX3ZtLmxhdGVzdFNjb3V0aW5nLmlkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmxhdGVzdFNjb3V0aW5nLm5hbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvZHVjdC1kZXNjcmlwdGlvblwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmxhdGVzdFNjb3V0aW5nLmRlc2NyaXB0aW9uKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pXSkgOiBfYygnaDQnLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2Rhc2hib2FyZC5ub19zY291dGluZycpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiB7XG4gICAgICAgIG5hbWU6ICdzY291dGluZ3MuY3JlYXRlJ1xuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2Rhc2hib2FyZC5jcmVhdGVfc2NvdXRpbmcnKSkgKyBcIlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3ggYm94LXByaW1hcnlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyXCJcbiAgfSwgW19jKCdoMycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2Rhc2hib2FyZC5sYXRlc3RfcmVwb3J0JykpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIlxuICB9LCBbKF92bS5sYXRlc3RSZXBvcnQpID8gX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2R1Y3RzLWxpc3QgcHJvZHVjdC1saXN0LWluLWJveFwiXG4gIH0sIFtfYygnbGknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbSBwcm9kdWN0LWl0ZW1cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYXRlc3QtcHJvZHVjdFwiXG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjoge1xuICAgICAgICBuYW1lOiAncmVwb3J0cy52aWV3JyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgaWQ6IF92bS5sYXRlc3RSZXBvcnQuaWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubGF0ZXN0UmVwb3J0Lm5hbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvZHVjdC1kZXNjcmlwdGlvblwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmxhdGVzdFJlcG9ydC5kZXNjcmlwdGlvbikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldKV0pIDogX2MoJ2g0JywgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdkYXNoYm9hcmQubm9fcmVwb3J0JykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRvXCI6IHtcbiAgICAgICAgbmFtZTogJ3JlcG9ydHMuY3JlYXRlJ1xuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2Rhc2hib2FyZC5jcmVhdGVfcmVwb3J0JykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTEwXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94IGJveC1wcmltYXJ5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlclwiXG4gIH0sIFtfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdkYXNoYm9hcmQuZ2xvYmFsX3JhbmtpbmcnKSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiXG4gIH0sIFtfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvZHVjdHMtbGlzdCBwcm9kdWN0LWxpc3QtaW4tYm94XCJcbiAgfSwgX3ZtLl9sKChfdm0ucmFua2luZyksIGZ1bmN0aW9uKHJhbmspIHtcbiAgICByZXR1cm4gX2MoJ2xpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiaXRlbVwiXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwcm9kdWN0LXJhbmsgcHVsbC1sZWZ0XCJcbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhyYW5rLnJhbmspICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwcm9kdWN0LWltZ1wiXG4gICAgfSwgW19jKCdpbWcnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNyY1wiOiByYW5rLnVzZXIuaW1hZ2UsXG4gICAgICAgIFwiYWx0XCI6IFwiUHJvZHVjdCBJbWFnZVwiXG4gICAgICB9XG4gICAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInByb2R1Y3QtaW5mb1wiXG4gICAgfSwgW19jKCdoNCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdFwiXG4gICAgfSwgW192bS5fdihfdm0uX3MocmFuay51c2VyLmZ1bGxfbmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbWcnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwcm9kdWN0LWZsYWdcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3JjXCI6IHJhbmsudXNlci5hdGhsZXRlLmNvdW50cnkuZmxhZyxcbiAgICAgICAgXCJhbHRcIjogXCJcIlxuICAgICAgfVxuICAgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInByb2R1Y3QtcG9pbnRzIHB1bGwtcmlnaHRcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKHJhbmsucG9pbnRzKSArIFwiIHB0c1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXG4gIH0pKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3ggYm94LXByaW1hcnlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyXCJcbiAgfSwgW19jKCdoMycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtdGl0bGUgdGV4dC1jZW50ZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2FkbWluLnF1aWNrX25hdmlnYXRpb24nKSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtYm9keSB0ZXh0LWNlbnRlclwiXG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1hcHAgYnRuLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiB7XG4gICAgICAgIG5hbWU6ICdzY291dGluZ3MubGlzdCdcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1saXN0XCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnYWRtaW4uc2NvdXRpbmdzJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWFwcFwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1maWxlLXRleHRcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdhZG1pbi5yZXBvcnRzJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1hcHBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiB7XG4gICAgICAgIG5hbWU6ICdhdGhsZXRlcy5saXN0J1xuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXVzZXJzXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnYWRtaW4uYXRobGV0ZXMnKSkgKyBcIlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWFwcFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRvXCI6IHtcbiAgICAgICAgbmFtZTogJ2V2ZW50cy5saXN0J1xuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNhbGVuZGFyXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnYWRtaW4uZXZlbnRzJykpICsgXCJcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1hcHBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiB7XG4gICAgICAgIG5hbWU6ICdjaGFtcGlvbnNoaXBzLmxpc3QnXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdHJvcGh5XCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnYWRtaW4uY2hhbXBpb25zaGlwcycpKSArIFwiXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSldKV0pXSldKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMzliN2U4YjZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTM5YjdlOGI2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSA0MDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMzliN2U4YjYhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2Rhc2hib2FyZC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiYjM1MzI4OTBcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTM5YjdlOGI2IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kYXNoYm9hcmQudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zOWI3ZThiNiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMzliN2U4YjYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSA0NDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiJdLCJzb3VyY2VSb290IjoiIn0=