import types from './types'
import commonService from '../../../services/common/commonService'

// initial state
const state = {
    sports: [],
    specialties: [],
    categories: [],
    countries: [],
    championships: [],
    genders: [],
    events: [],
    types: [],
    reaches: [],
    athletes: [],
    arbiters: []
};

// mutations
const mutations = {
    [types.mutations.SET_SPORTS](state, sports) {
        state.sports = sports;
    },
    [types.mutations.SET_SPECIALTIES](state, specialties) {
        state.specialties = specialties;
    },
    [types.mutations.SET_CATEGORIES](state, categories) {
        state.categories = categories;
    },
    [types.mutations.SET_COUNTRIES](state, countries) {
        state.countries = countries;
    },
    [types.mutations.SET_CHAMPIONSHIPS](state, championships) {
        state.championships = championships;
    },
    [types.mutations.SET_CHAMPIONSHIP_EVENTS](state, events) {
        state.events = events;
    },
    [types.mutations.SET_EVENT_ATHLETES](state, athletes) {
        state.athletes = athletes;
    },
    [types.mutations.SET_GENDERS](state, genders) {
        state.genders = genders;
    },
    [types.mutations.SET_TYPES](state, types) {
        state.types = types;
    },
    [types.mutations.SET_REACHES](state, reaches) {
        state.reaches = reaches;
    },
    [types.mutations.SET_ARBITERS](state, arbiters) {
        state.arbiters = arbiters;
    }
}

const getters = {};

const actions = {
    [types.actions.getSports]: (context, successHandler) => {
        commonService.getSports((response) => {
            context.commit(types.mutations.SET_SPORTS, response.data);
            if (successHandler)
                successHandler(response.data)
        }, (response) => {
            // error callback
        });
    },
    [types.actions.getSpecialties]: (context, sportId, successHandler) => {
        commonService.getSpecialtiesBySport(sportId, (response) => {
            context.commit(types.mutations.SET_SPECIALTIES, response.data);
            successHandler(response.data)
        }, (response) => {
            // error callback
        });
    },
    [types.actions.getCategories]: (context, successHandler) => {
        commonService.getCategories((response) => {
            context.commit(types.mutations.SET_CATEGORIES, response.data);
            successHandler(response.data)
        }, (response) => {
            // error callback
        });
    },
    [types.actions.getCountries]: (context, sportId, successHandler) => {
        commonService.getCountries((response) => {
            context.commit(types.mutations.SET_COUNTRIES, response.data);
            successHandler(response.data)
        }, (response) => {
            // error callback
        });
    },
    [types.actions.getChampionships]: (context) => {
        commonService.getChampionships((response) => {
            context.commit(types.mutations.SET_CHAMPIONSHIPS, response.data);
        }, (response) => {
            // error callback
        });
    },
    [types.actions.getChampionshipEvents]: (context, championshipId) => {
        commonService.getChampionshipEvents(championshipId, (response) => {
            context.commit(types.mutations.SET_CHAMPIONSHIP_EVENTS, response.data);
        }, (response) => {
            // error callback
        });
    },
    [types.actions.getEventAthletes]: (context, eventId) => {
        commonService.getEventAthletes(eventId, (response) => {
            context.commit(types.mutations.SET_EVENT_ATHLETES, response.data);
        }, (response) => {
            // error callback
        });
    },
    [types.actions.getTypes]: (context) => {
        commonService.getTypes((response) => {
            context.commit(types.mutations.SET_TYPES, response.data);
        }, (response) => {
            // error callback
        });
    },
    [types.actions.getReaches]: (context) => {
        commonService.getReaches((response) => {
            context.commit(types.mutations.SET_REACHES, response.data);
        }, (response) => {
            // error callback
        });
    },
    [types.actions.getGenders]: (context) => {
        commonService.getGenders((response) => {
            context.commit(types.mutations.SET_GENDERS, response);
        }, (response) => {
            // error callback
        });
    },
    [types.actions.getArbiters]: (context) => {
        commonService.getArbiters((response) => {
            context.commit(types.mutations.SET_ARBITERS, response.data);
        }, (response) => {
            // error callback
        });
    }
}

export default {
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions
}