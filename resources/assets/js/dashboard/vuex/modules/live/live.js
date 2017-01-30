import * as types from './live-mutation-types'

// initial state
const state = {
    table: {
        liveEvents: [],
        columns: [],
        ajax: {}
    },
    championships: [],
    events: [],
    tracks: [],
    selectedLiveEvent: {},
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
export const mutations = {
    [types.SET_LIVE_EVENT_TABLE_AJAX](state, ajax) {
        state.table.ajax = ajax
    },
    [types.UPDATING_LIVE_EVENT] (state) {
        state.updating = true
    },
    [types.LIVE_EVENT_UPDATED] (state) {
        state.updating = false
    },
    [types.ERROR_UPDATING_LIVE_EVENT] (state, mutation) {
        state.updating = false
    },
    [types.DELETING_LIVE_EVENT] (state) {
        state.removing = true
    },
    [types.LIVE_EVENT_DELETED] (state) {
        state.removing = false
    },
    [types.ERROR_DELETING_LIVE_EVENT] (state, mutation) {
        state.removing = false
    },
    [types.SET_LIVE_EVENTS] (state, liveEvents) {
        state.table.liveEvent = liveEvents
    },
    [types.SET_LIVE_EVENT_TABLE_COLUMNS] (state, columns) {
        state.table.columns = columns
    },
    [types.SET_SELECTED_LIVE_EVENT] (state, liveEvent) {
        state.selectedLiveEvent = liveEvent
    },
    [types.OPEN_REMOVE_LIVE_EVENT] (state, remove) {
        state.modals.remove.open = remove
    },
    [types.CREATING_LIVE_EVENT] (state) {
        state.creating = true
    },
    [types.LIVE_EVENT_CREATED] (state) {
        state.creating = false
    },
    [types.ERROR_CREATING_LIVE_EVENT] (state, mutation) {
        state.creating = false
    },
    [types.SET_CHAMPIONSHIPS](state, championships) {
        state.championships = championships;
    },
    [types.SET_CHAMPIONSHIP_EVENTS](state, events) {
        state.events = events;
    },
    [types.SET_TRACKS](state, tracks) {
        state.tracks = tracks;
    },
}

export default {
    state,
    mutations
}