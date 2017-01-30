import types from './types'
import athleteService from 'base/admin/services/athletes/athlete-service'
import arbiterService from 'base/admin/services/arbiters/arbiter-service'
import resultService from 'base/admin/services/results/results-service'

// initial state
const state = {
    table: {
        list: [],
        columns: [],
        ajax: {}
    },
    selected: {},
    updating: false,
    creating: false,
    removing: false,
    modals: {
        remove: {
            open: false,
        }
    }
};

// mutations
const mutations = {
    [types.mutations.SET_LIST] (state, athletes) {
        state.table.list = athletes
    },
    [types.mutations.SET_TABLE_AJAX](state, ajax) {
        state.table.ajax = ajax
    },
    [types.mutations.SET_TABLE_COLUMNS] (state, columns) {
        state.table.columns = columns
    },
    [types.mutations.SET_SELECTED] (state, athlete) {
        state.selected = athlete
    },
    [types.mutations.UPDATING] (state) {
        state.updating = true
    },
    [types.mutations.UPDATED] (state) {
        state.updating = false
    },
    [types.mutations.ERROR_UPDATING] (state, mutation) {
        state.updating = false
    },
    [types.mutations.DELETING] (state) {
        state.removing = true
    },
    [types.mutations.DELETED] (state) {
        state.removing = false
    },
    [types.mutations.ERROR_DELETING] (state, mutation) {
        state.removing = false
    },
    [types.mutations.CREATING] (state) {
        state.creating = true
    },
    [types.mutations.CREATED] (state) {
        state.creating = false
    },
    [types.mutations.ERROR_CREATING] (state, mutation) {
        state.creating = false
    }
}

const getters = {}

const actions = {
    [types.actions.processXml]: (context, payload) => {
        resultService.processXml(payload.data, (response) => {
            payload.successHandler(response)
        }, (response) => {
            const error = response;
            if (error.status_code == 422) {
                payload.errorHandler({errors: error.errors, validation: true});
            } else {
                payload.errorHandler({errors: error.message, validation: false});
            }
        });
    }, [types.actions.create]: (context, payload) => {
        context.commit(types.mutations.CREATING);
        resultService.create(payload.data, (response) => {
            context.commit(types.mutations.CREATED);
            payload.successHandler(response)
        }, (response) => {
            const error = response;
            context.commit(types.mutations.ERROR_CREATING);
            if (error.status_code == 422) {
                payload.errorHandler({errors: error.errors, validation: true});
            } else {
                payload.errorHandler({errors: error.message, validation: false});
            }
        });
    },
    [types.actions.createAthleteFromXml]: (context, payload) => {
        context.commit(types.mutations.CREATING);
        athleteService.createFromXml(payload.data, payload.event, (response) => {
            context.commit(types.mutations.CREATED);
            payload.successHandler(response)
        }, (response) => {
            const error = response;
            context.commit(types.mutations.ERROR_CREATING);
            if (error.status_code == 422) {
                payload.errorHandler({errors: error.errors, validation: true});
            } else {
                payload.errorHandler({errors: error.message, validation: false});
            }
        });
    },
    [types.actions.createAllAthletesFromXml]: (context, payload) => {
        context.commit(types.mutations.CREATING);
        athleteService.createAllAthletesFromXml(payload.data, payload.event, (response) => {
            context.commit(types.mutations.CREATED);
            payload.successHandler(response)
        }, (response) => {
            const error = response;
            context.commit(types.mutations.ERROR_CREATING);
            if (error.status_code == 422) {
                payload.errorHandler({errors: error.errors, validation: true});
            } else {
                payload.errorHandler({errors: error.message, validation: false});
            }
        });
    },
    [types.actions.createArbiterFromXml]: (context, payload) => {
        context.commit(types.mutations.CREATING);
        arbiterService.createFromXml(payload.data, payload.event, (response) => {
            context.commit(types.mutations.CREATED);
            payload.successHandler(response)
        }, (response) => {
            const error = response;
            context.commit(types.mutations.ERROR_CREATING);
            if (error.status_code == 422) {
                payload.errorHandler({errors: error.errors, validation: true});
            } else {
                payload.errorHandler({errors: error.message, validation: false});
            }
        });
    },
    [types.actions.createAllArbitersFromXml]: (context, payload) => {
        context.commit(types.mutations.CREATING);
        arbiterService.createAllArbitersFromXml(payload.data, payload.event, (response) => {
            context.commit(types.mutations.CREATED);
            payload.successHandler(response)
        }, (response) => {
            const error = response;
            context.commit(types.mutations.ERROR_CREATING);
            if (error.status_code == 422) {
                payload.errorHandler({errors: error.errors, validation: true});
            } else {
                payload.errorHandler({errors: error.message, validation: false});
            }
        });
    },
    [types.actions.update]: (context, payload) => {
        context.commit(types.mutations.UPDATING);
        athleteService.update(payload.id, payload.data, (response) => {
            context.commit(types.mutations.UPDATED);
            payload.successHandler(response)
        }, (response) => {
            const error = response;
            context.commit(types.mutations.ERROR_UPDATING);
            if (error.status_code === 422) {
                payload.errorHandler({errors: error.errors, validation: true});
            } else {
                payload.errorHandler({errors: error.message, validation: false});
            }
        });
    },
    [types.actions.remove]: (context, payload) => {
        context.commit(types.mutations.DELETING);
        athleteService.remove(payload.data.id, (response) => {
                context.commit(types.mutations.DELETED);
                payload.successHandler(response)
            }, (response) => {
                const error = response;
                context.commit(types.mutations.ERROR_DELETING);
                payload.errorHandler(error);
            }
        );
    },
    [types.actions.show]: (context, payload) => {
        athleteService.show(payload.id, (response) => {
                context.commit(types.mutations.SET_SELECTED, response.data);
                payload.successHandler()
            }, (response) => {
                payload.errorHandler(response);
            }
        );
    }
}

export default {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}