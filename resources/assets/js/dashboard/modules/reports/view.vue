<template>
    <div>
        <page-header :title="$t('reports.report')" :breadcrumbs="breadcrumbs"></page-header>
        <section class="content report">
            <div class="row">
                <div class="col-xs-12 col-md-10">
                    <div class="row">
                        <div class="col-sm-3 col-xs-6">
                            <div class="description-block border-right">
                                <span class="description-text">EFFECTIVENESS</span>
                                <div class="row">
                                    <div class="col-xs-6 text-right">
                                        <h5 class="description-header">{{effectiveness.percentage}}%</h5>

                                    </div>
                                    <div class="col-xs-6 text-left">
                                        <span class="description-percentage text-green">
                                            {{effectiveness.victories}}V
                                        </span>
                                        <br>
                                        <span class="description-percentage text-red">
                                            {{effectiveness.defeats}}V
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <!-- /.description-block -->
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-3 col-xs-6">
                            <div class="description-block border-right">
                                <span class="description-text">VALID</span>

                                <div class="row">
                                    <div class="col-xs-6 text-right">
                                        <h5 class="description-header">{{valid.percentage}}%</h5>

                                    </div>
                                    <div class="col-xs-6 text-left">
                                        <span class="description-percentage text-green">
                                            {{valid.valid}}
                                        </span>
                                        <br>
                                        <span class="description-percentage text-red">
                                            {{valid.noValid}}

                                        </span>
                                    </div>
                                </div>

                            </div>
                            <!-- /.description-block -->
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-3 col-xs-6">
                            <div class="description-block border-right">
                                <span class="description-text">AVERAGE</span>
                                <div class="row">
                                    <div class="col-xs-6 text-right">
                                        <h5 class="description-header">{{average.percentage}}%</h5>

                                    </div>
                                    <div class="col-xs-6 text-left">
                                        <span class="description-percentage text-green">
                                            {{average.given}}
                                        </span>
                                        <br>
                                        <span class="description-percentage text-red">
                                            {{average.received}}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <!-- /.description-block -->
                        </div>
                        <div class="col-sm-3 col-xs-6">
                            <div class="description-block border-right">
                                <span class="description-text">PERFECTION</span>
                                <div class="row">
                                    <div class="col-xs-6 text-right">
                                        <h5 class="description-header">{{perfection.percentage}}%</h5>

                                    </div>
                                    <div class="col-xs-6 text-left">
                                        <span class="description-percentage text-green">
                                            {{perfection.perfect}}
                                        </span>
                                        <br>
                                        <span class="description-percentage text-red">
                                            {{perfection.imperfect}}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-2">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="description-block">
                                <span class="description-text">TIME CONSUME</span>

                                <div class="row">
                                    <div class="col-xs-6 text-right">
                                        <h5 class="description-header">{{timeConsumed.percentage}}%</h5>

                                    </div>
                                    <div class="col-xs-6 text-left">
                                        <span class="description-percentage text-green">
                                            {{timeConsumed.timeConsumed}}
                                        </span>
                                        <br>
                                        <span class="description-percentage text-red">
                                            {{timeConsumed.timeIdle}}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <!-- /.description-block -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-10">
                    <div class="nav-tabs-custom">
                        <ul class="nav nav-tabs">
                            <li :class="{'active':index == 0}" v-for="(pointVsTimeGraph,index) in pointVsTimeGraphs">
                                <a :href="'#'+pointVsTimeGraph.id" data-toggle="tab"
                                   aria-expanded="false">
                                    {{pointVsTimeGraph.name}}
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane" :class="{'active':index == 0}" :id="pointVsTimeGraph.id"
                                 v-for="(pointVsTimeGraph,index) in pointVsTimeGraphs">
                                <highcharts :ref="pointVsTimeGraph.id" :options="pointVsTimeGraph.options"></highcharts>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="row">
                        <div class="col-xs-12 col-md-10 col-md-offset-1">
                            <gauge :value="offensiveGauge.data" color="green" title="Counteroffensive"></gauge>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-md-10 col-md-offset-1">
                            <gauge :value="defensiveGauge.data" color="yellow" title="Defensive"></gauge>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-md-10 col-md-offset-1">
                            <gauge :value="counterOffensiveGauge.data" color="red" title="Offensive"></gauge>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-8">
                    <highcharts :options="pie"></highcharts>
                </div>
                <div class="col-xs-12 col-md-4">
                    <highcharts :options="bar"></highcharts>
                </div>
            </div>
        </section>
    </div>
</template>
<style>
    .report {
        background-color: white;
    }

    .border-right {
        border-right: 1px solid #666;
    }

    .description-text {
        font-size: 20px;
        font-weight: bold;
    }

    .description-percentage {
        font-size: 15px;
        font-weight: bold;
    }

    .description-header {
        font-size: 20px;
        font-weight: bold;
    }

</style>
<script type="text/babel">
    import pageHeader from 'base/components/header/pageHeader.vue'
    import gauge from 'base/components/charts/gauges/gauge.vue'
    import reportsLocales from 'base/lang/admin/reports/reports.js';
    import reportService from 'base/dashboard/services/reports/reportService'
    import reportDataService from 'base/dashboard/services/reports/reportDataService'
    import uuidMixin from 'base/mixins/uuid'
    import {lineBaseOptions} from './stubs/lineOptions'
    import {pieBaseOptions} from './stubs/pieOptions'
    import {barBaseOptions} from './stubs/barOptions'
    import {gaugeBaseOptions} from './stubs/gaugeOptions'
    export default{
        locales: reportsLocales,
        components: {
            pageHeader,
            gauge
        },
        mixins: [uuidMixin],
        data(){
            return {
                reports: {},
                pointVsTimeGraphs: [],
                pie: {},
                bar: {},
                counterOffensiveGauge: {data: 0},
                offensiveGauge: {data: 0},
                defensiveGauge: {data: 0},
                effectiveness: {},
                valid: {},
                average: {},
                perfection: {},
                timeConsumed: {}
            }
        },
        computed: {
            breadcrumbs(){
                return [
                    {
                        href: '/dashboard',
                        title: this.$t('admin.home')
                    },
                    {
                        href: '/reports/' + this.$route.params.id,
                        title: 'admin.view'
                    }
                ]
            },
        },
        created(){
            if (!this.$auth.user().superUser) {
                this.$root.errorToast('No tienes permiso para ver el informe');
                this.$router.push({
                    name: 'reports.list',
                })
            } else {
                reportService.show(this.$route.params.id,
                        (response)=> {
                            this.report = response.data;
                        },
                        (error)=> {
                            console.log(error);
                        })
            }
        },
        mounted(){
            reportDataService.pointVsTime(this.$route.params.id,
                    (response)=> {
                        var data = response;
                        var graph = [];
                        _.each(data, (graphData) => {
                            var line = {
                                id: this.generateUUID(),
                                name: graphData.leftAthlete + ' VS ' + graphData.rightAthlete,
                                options: _.cloneDeep(lineBaseOptions),
                            }
                            line.options.xAxis.categories = graphData.time;
                            line.options.series[0].data = graphData.left;
                            line.options.series[1].data = graphData.right;
                            line.options.series[0].name = graphData.leftAthlete;
                            line.options.series[1].name = graphData.rightAthlete;

                            graph.push(line);
                        });
                        this.pointVsTimeGraphs = graph;
                        var self = this;
                        this.$nextTick(()=> {
                            $('a[data-toggle="tab"]').on('shown.bs.tab', (e)=> {
                                _.each(self.pointVsTimeGraphs, (graphData) => {
                                    self.$refs[graphData.id][0].chart.reflow();
                                });
                            });
                        })
                    },
                    (error)=> {
                        console.log(error);
                    });

            reportDataService.offensiveDefensive(this.$route.params.id,
                    (response)=> {
                        var data = response;
                        this.counterOffensiveGauge.data = data.counterOffensive.data;
                        this.offensiveGauge.data = data.offensive.data;
                        this.defensiveGauge.data = data.defensive.data;
                    },
                    (error)=> {
                        console.log(error);
                    })

            reportDataService.combatStatus(this.$route.params.id,
                    (response)=> {
                        var data = response;
                        var pie = _.cloneDeep(pieBaseOptions);
                        pie.series[0].data = data;
                        this.pie = pie;
                    },
                    (error)=> {
                        console.log(error);
                    })
            reportDataService.parry(this.$route.params.id,
                    (response)=> {
                        var data = response.data;
                        var categories = response.categories;
                        var bar = _.cloneDeep(barBaseOptions);
                        bar.series[0].data = data;
                        bar.xAxis.categories = categories;
                        this.bar = bar;
                    },
                    (error)=> {
                        console.log(error);
                    })

            reportDataService.summary(this.$route.params.id,
                    (response)=> {
                        var data = response;
                        this.effectiveness = data.effectiveness;
                        this.valid = data.valid;
                        this.average = data.average;
                        this.perfection = data.perfection;
                        this.timeConsumed = data.consumedTime
                    },
                    (error)=> {
                        console.log(error);
                    })
        }
    }
</script>