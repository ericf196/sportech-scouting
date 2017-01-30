import types from './types'
import videoChannelService from 'base/admin/services/channels/channel-service'

// initial state
const state = {
    table: {
        videoChannels: [],
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

export const mutations = {
    [types.mutations.SET_TABLE_AJAX](state, ajax) {
        state.table.ajax = ajax
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
    [types.mutations.SET_LIST] (state, liveEvents) {
        state.table.videoChannels = liveEvents
    },
    [types.mutations.SET_TABLE_COLUMNS] (state, columns) {
        state.table.columns = columns
    },
    [types.mutations.SET_SELECTED] (state, liveEvent) {
        state.selected = liveEvent
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
}

const getters = {}

const actions = {
    [types.actions.create]: (context, payload) => {
        context.commit(types.mutations.CREATING);
        videoChannelService.create(payload.data, (response) => {
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
        videoChannelService.update(payload.id, payload.data, (response) => {
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
        videoChannelService.remove(payload.data.id, (response) => {
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
        videoChannelService.show(payload.id, (response) => {
                context.commit(types.mutations.SET_SELECTED, response.data);
                payload.successHandler()
            }, (response) => {
                payload.errorHandler(response);
            }
        );
    },
    [types.actions.toggleActive]: (context, payload) => {
        videoChannelService.toggleActive(payload.id, (response) => {
            payload.successHandler(response)
        }, (response) => {
            const error = response;
            if (error.status_code == 422) {
                payload.errorHandler({errors: error.errors, validation: true});
            } else {
                payload.errorHandler({errors: error.message, validation: false});
            }
        });
    }
}

export default {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}