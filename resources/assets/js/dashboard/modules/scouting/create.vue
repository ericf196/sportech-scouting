<template>
    <div>
        <admin-header :title="$t('admin.scoutings')" :breadcrumbs="breadcrumbs"></admin-header>
        <section class="content">
            <form class="form" id="scouting-form">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">{{$t('scoutings.new')}}</h3>
                            </div><!-- /.box-header -->
                            <div class="box-body">
                                <div class="row">
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('nameen') }">
                                            <label for="nameen" data-error="">{{$t('scoutings.name')}}
                                            </label>
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i
                                                            class="fa fa-user"></i>
                                                </div>
                                                <input id="nameen" name="nameen"
                                                       type="text"
                                                       :placeholder="$t('scoutings.name')"
                                                       v-model="scouting.translation.name.en"
                                                       v-validate.initial
                                                       data-vv-rules="required"
                                                       :data-vv-as="$t('scoutings.name')"
                                                       class="form-control">
                                            </div>
                                            <span class="text-danger"
                                                  v-show="errors.has('nameen')">{{
                                                errors.first('nameen') }}
                                            </span>
                                        </div>
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('videoSrc') }">
                                            <label for="videoSrc" data-error="">{{$t('scoutings.video_src')}}
                                            </label>
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i
                                                            class="fa fa-video-camera"></i>
                                                </div>
                                                <input id="videoSrc" name="videoSrc"
                                                       type="text"
                                                       :placeholder="$t('scoutings.video_src')"
                                                       v-model="scouting.videoSrc"
                                                       v-validate.initial
                                                       data-vv-rules="required"
                                                       :data-vv-as="$t('scoutings.video_src')"
                                                       class="form-control">
                                            </div>
                                            <span class="text-danger"
                                                  v-show="errors.has('videoSrc')">{{
                                                errors.first('videoSrc') }}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('translation.description.en') }">
                                            <label for="descriptionen" data-error="">
                                                {{$t('scoutings.description')}}
                                            </label>
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i
                                                            class="fa fa-list"></i>
                                                </div>
                                                <textarea id="descriptionen"
                                                          rows="4"
                                                          name="descriptionen"
                                                          type="text"
                                                          :placeholder="$t('scoutings.description')"
                                                          v-model="scouting.translation.description.en"
                                                          class="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 text-center">
                                        <button class="btn btn-danger"
                                                @click="onBack">
                                            {{$t('forms.back')}}
                                        </button>
                                        <button type="submit" href="#!"
                                                class="btn btn-success"
                                                :class="{'disabled':updating}"
                                                @click="onSubmit">
                                            {{$t('forms.save')}}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <search-championship :open="searchChampionshipOpen"
                                 v-on:championship-selected="championshipSelected"
                                 v-on:championship-close="modalDismiss">
            </search-championship>
            <search-event :open="searchEventOpen" :championship-id="scouting.championship.id"
                          v-on:event-selected="eventSelected"
                          v-on:event-close="modalDismiss">
            </search-event>
            <search-athlete :open="searchLeftAthleteOpen" :except="exceptAthlete"
                            type="left"
                            v-on:left-athlete-selected="leftAthleteSelected"
                            v-on:athlete-close="modalDismiss">
            </search-athlete>
            <search-athlete :open="searchRightAthleteOpen" :except="exceptAthlete"
                            type="right"
                            v-on:right-athlete-selected="rightAthleteSelected"
                            v-on:athlete-close="modalDismiss">
            </search-athlete>
            <new-championship :open="newChampionshipOpen"
                              v-on:championship-created="championshipCreated"
                              v-on:championship-new-close="modalDismiss">

            </new-championship>
            <new-event :open="newEventOpen" :championship="scouting.championship"
                       v-on:event-created="eventCreated"
                       v-on:event-new-close="modalDismiss"></new-event>
            <new-athlete :open="newLeftAthleteOpen" type="left"
                         v-on:left-athlete-created="leftAthleteCreated"
                         v-on:athlete-new-close="modalDismiss"></new-athlete>
            <new-athlete :open="newRightAthleteOpen" type="right"
                         v-on:right-athlete-created="rightAthleteCreated"
                         v-on:athlete-new-close="modalDismiss"></new-athlete>
        </section>
    </div>
</template>

<style>

</style>
<script>
    import scoutingsLocales from 'base/lang/admin/scoutings/scoutings.js';
    import formDataObjectParser from 'base/mixins/ajax/formDataParser'
    import {mapActions} from 'vuex'
    import vSelect from "base/components/forms/select/select.vue"
    import adminHeader from 'base/components/header/pageHeader.vue'
    import searchChampionship from './modals/searchChampionship.vue'
    import searchEvent from './modals/searchEvent.vue'
    import newChampionship from './modals/newChampionship.vue'
    import newEvent from './modals/newEvent.vue'
    import searchAthlete from './modals/searchAthlete.vue'
    import newAthlete from './modals/newAthlete.vue'
    import scoutingService from 'base/dashboard/services/scoutings/scoutingService'


    export default{
        components: {
            vSelect,
            adminHeader,
            searchChampionship,
            newChampionship,
            searchEvent,
            newEvent,
            searchAthlete,
            newAthlete
        },
        mixins: [formDataObjectParser],
        data(){
            return {
                scouting: {
                    championship: {name: null, id: null},
                    event: {name: null},
                    leftAthlete: {name: null},
                    rightAthlete: {name: null},
                    sport: null,
                    videoSrc: '',
                    translation: {
                        name: {
                            es: '',
                            en: ''
                        },
                        description: {
                            es: '',
                            en: ''
                        }
                    }
                },
                updating: false,
                searchChampionshipOpen: false,
                newChampionshipOpen: false,
                searchEventOpen: false,
                newEventOpen: false,
                searchRightAthleteOpen: false,
                newRightAthleteOpen: false,
                searchLeftAthleteOpen: false,
                newLeftAthleteOpen: false,
            }
        },
        computed: {
            breadcrumbs(){
                return [
                    {
                        href: '/dashboard',
                        title: 'admin.home'
                    },
                    {
                        href: '/scoutings/list',
                        title: 'admin.scoutings'
                    },
                    {
                        href: '/scoutings/create',
                        title: 'admin.new'
                    }
                ]
            },
            championships() {
                return this.$store.state.common.championships
            },
            events() {
                return this.$store.state.common.events
            },
            athletes() {
                return this.$store.state.common.athletes
            },
            exceptAthlete(){
                var id = null;
                if (this.scouting.leftAthlete) {
                    if (this.scouting.leftAthlete.hasOwnProperty('id')) {
                        id = this.scouting.leftAthlete.id
                    }
                }
                if (this.scouting.rightAthlete) {
                    if (this.scouting.rightAthlete.hasOwnProperty('id')) {
                        if (id) {
                            id += ',' + this.scouting.rightAthlete.id
                        } else {
                            id = this.scouting.rightAthlete.id
                        }
                    }
                }
                return id;
            },
        },

        locales: scoutingsLocales,
        methods: {
            championshipSelected(championship){
                this.searchChampionshipOpen = false;
                this.scouting.championship = championship
            },
            championshipCreated(championship){
                this.newChampionshipOpen = false;
                this.scouting.championship = championship;
            },
            eventSelected(event){
                this.searchEventOpen = false;
                this.scouting.event = event
            },
            eventCreated(event){
                this.newEventOpen = false;
                this.scouting.event = event;
            },
            leftAthleteSelected(athlete){
                this.searchLeftAthleteOpen = false;
                this.scouting.leftAthlete = athlete
            },
            leftAthleteCreated(athlete){
                this.newLeftAthleteOpen = false;
                this.scouting.leftAthlete = athlete;
            },
            rightAthleteSelected(athlete){
                this.searchRightAthleteOpen = false;
                this.scouting.rightAthlete = athlete
            },
            rightAthleteCreated(athlete){
                this.newRightAthleteOpen = false;
                this.scouting.rightAthlete = athlete
            },
            search(type){
                switch (type) {
                    case 'championship':
                        this.searchChampionshipOpen = true;
                        break;
                    case 'event':
                        this.searchEventOpen = true;
                        break;
                    case 'left_athlete':
                        this.searchLeftAthleteOpen = true;
                        break;
                    case 'right_athlete':
                        this.searchRightAthleteOpen = true;
                        break;
                }
            },
            add(type){
                switch (type) {
                    case 'championship':
                        this.newChampionshipOpen = true;
                        break;
                    case 'event':
                        this.newEventOpen = true;
                        break;
                    case 'left_athlete':
                        this.newLeftAthleteOpen = true;
                        break;
                    case 'right_athlete':
                        this.newRightAthleteOpen = true;
                        break;
                }
            },
            onBack(evt){
                evt.preventDefault();
                this.$router.push({
                    name: 'scoutings.list'
                })
            },
            onSubmit(evt){
                evt.preventDefault();
                var self = this;
                this.$validator.validateAll().then(()=> {

                    this.scouting.translation.name.es = this.scouting.translation.name.en;
                    this.scouting.translation.description.es = this.scouting.translation.description.en;
                    scoutingService.create(this.scouting, (response)=> {
                        self.$root.successToast(response.message);
                        self.$router.push({
                            name: 'scoutings.list'
                        })
                    }, (response)=> {
                        response = response.body;
                        if (response.validation) {
                            for (var error in response.errors) {
                                if (response.errors.hasOwnProperty(error)) {
                                    response.errors[error].forEach((validationError)=> {
                                        self.$root.errorToast(validationError)
                                    })
                                }
                            }
                        } else {
                            self.$root.errorToast(response.errors)
                        }
                    })
                }).catch(bag => {
                    this.$root.errorToast(this.$t('admin.validation_error'));
                });
            },
            modalDismiss(){
                this.searchChampionshipOpen = false;
                this.newChampionshipOpen = false;
                this.searchEventOpen = false;
                this.newEventOpen = false;
                this.searchLeftAthleteOpen = false;
                this.newLeftAthleteOpen = false;
                this.searchRightAthleteOpen = false;
                this.newRightAthleteOpen = false;
            }
        }
    }
</script>
