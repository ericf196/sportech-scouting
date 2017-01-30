import types from './types'
import eventsService from 'base/admin/services/events/event-service'

// initial state
const state = {
    table: {
        events: [],
        columns: [],
        ajax: {}
    },
    selected: {},
    analytics: {
        eventsCount: 0,
        loading: false
    },
    updating: false,
    creating: false,
    removing: false,
    modals: {
        remove: {
            open: false,
        },
        addAthlete: {
            open: false,
        }
    }
};

// mutations
export const mutations = {
    [types.mutations.SET_TABLE_AJAX](state, ajax) {
        state.table.ajax = ajax
    },
    [types.mutations.SET_COUNT] (state, count) {
        state.analytics.eventsCount = count
    },
    [types.mutations.SET_LOADING_ANALYTICS] (state, loading) {
        state.analytics.loading = loading
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
    [types.mutations.SET_LIST] (state, events) {
        state.table.events = events
    },
    [types.mutations.SET_TABLE_COLUMNS] (state, columns) {
        state.table.columns = columns
    },
    [types.mutations.SET_SELECTED] (state, event) {
        state.selected = event
    },
    [types.mutations.OPEN_REMOVE] (state, remove) {
        state.modals.remove.open = remove
    },
    [types.mutations.CREATING] (state) {
        state.creating = true
    },
    [types.mutations.CREATED] (state) {
        state.creating = false
    },
    [types.mutations.ERROR_CREATING] (state, mutation) {
        state.creating = false
    },
    [types.mutations.OPEN_ADD_ATHLETE](state, add) {
        state.modals.addAthlete.open = add
    }
}

const getters = {}

const actions = {
    [types.actions.setAnalytics]: context => {
        context.commit(types.mutations.SET_LOADING_ANALYTICS, true);
        eventsService.getAnalytics((response) => {
            context.commit(types.mutations.SET_LOADING_ANALYTICS, false);
            context.commit(types.mutations.SET_COUNT, response.total)
        }, (response) => {
            // error callback
        });
    },
    [types.actions.create]: (context, payload) => {
        context.commit(types.mutations.CREATING);
        eventsService.create(payload.data, (response) => {
            context.commit(types.mutations.CREATED);
            payload.successHandler(response)
        }, (response) => {
            const error = response;
            context.commit(types.mutations.ERROR_CREATING);
            if (error.status_code === 422) {
                payload.errorHandler({errors: error.errors, validation: true});
            } else {
                payload.errorHandler({errors: error.message, validation: false});
            }
        });
    },
    [types.actions.update]: (context, payload) => {
        context.commit(types.mutations.UPDATING);
        eventsService.update(payload.id, payload.data, (response) => {
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
        eventsService.remove(payload.id, (response) => {
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
        eventsService.show(payload.id, (response) => {
                context.commit(types.mutations.SET_SELECTED, response.data);
                payload.successHandler()
            }, (response) => {
                payload.errorHandler(response);
            }
        );
    }
};

export default {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
};