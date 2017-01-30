import eventsService from 'base/admin/pages/events/services/event-service'

export const openRemoveModal = ({dispatch}, edit) => dispatch('OPEN_REMOVE_LIVE_EVENT', edit);
export const setLiveEvents = ({dispatch}, liveEvents) => dispatch('SET_LIVE_EVENTS', liveEvents);
export const setTableColumns = ({dispatch}, columns) => dispatch('SET_LIVE_EVENT_TABLE_COLUMNS', columns);
export const setTableAjax = ({dispatch}, ajax) => dispatch('SET_LIVE_EVENT_TABLE_AJAX', ajax);

export const setSelectedLiveEvent = ({dispatch}, liveEvent) => {
    dispatch('SET_SELECTED_LIVE_EVENT', liveEvent);
}

export const create = ({dispatch}, liveEvent, successHandler, errorHandler) => {
    dispatch('CREATING_LIVE_EVENT');
    eventsService.create(liveEvent, (response) => {
        dispatch('LIVE_EVENT_CREATED');
        dispatch('OPEN_CREATE_LIVE_EVENT', false);
        successHandler(response)
    }, (response) => {
        const error = response;
        dispatch('ERROR_CREATING_LIVE_EVENT');
        if (error.status_code == 422) {
            errorHandler({errors: error.errors, validation: true});
        } else {
            errorHandler({errors: error.message, validation: false});
        }
    });
};

export const update = ({dispatch}, id, data, successHandler, errorHandler) => {
    dispatch('UPDATING_LIVE_EVENT');
    eventsService.update(id, data, (response) => {
        dispatch('LIVE_EVENT_UPDATED');
        dispatch('OPEN_EDIT_LIVE_EVENT', false);
        successHandler(response)
    }, (response) => {
        const error = response;
        dispatch('ERROR_UPDATING_LIVE_EVENT');
        if (error.status_code == 422) {
            errorHandler({errors: error.errors, validation: true});
        } else {
            errorHandler({errors: error.message, validation: false});
        }
    });
};

export const remove = ({dispatch}, liveEvent, successHandler, errorHandler) => {
    dispatch('DELETING_LIVE_EVENT');
    eventsService.remove(liveEvent.id, (response) => {
            dispatch('LIVE_EVENT_DELETED');
            successHandler(response)
        }, (response) => {
            const error = response;
            dispatch('ERROR_DELETING_LIVE_EVENT');
            errorHandler(error);
        }
    );
};

export const show = ({dispatch}, id, successHandler, errorHandler) => {
    eventsService.show(id, (response) => {
            dispatch('SET_SELECTED_LIVE_EVENT', response.data);
            successHandler()
        }, (response) => {
            errorHandler(response);
        }
    );
};

export const getChampionships = ({dispatch}) => {
    eventsService.getChampionships((response) => {
        dispatch('SET_CHAMPIONSHIPS', response.data);
    }, (response) => {
        // error callback
    });
};

export const getTracks = ({dispatch}) => {
    eventsService.getTracks((response) => {
        dispatch('SET_TRACKS', response.data);
    }, (response) => {
        // error callback
    });
};

export const getChampionshipEvents = ({dispatch}, championshipId) => {
    eventsService.getChampionshipEvents(championshipId, (response) => {
        dispatch('SET_CHAMPIONSHIP_EVENTS', response.data);
    }, (response) => {
        // error callback
    });
};

export const setChampionshipEvents = ({dispatch}, events) => {
    dispatch('SET_CHAMPIONSHIP_EVENTS', events);
};

export const setToggleActive = ({dispatch}, liveEvent, successHandler, errorHandler) => {
    eventsService.toggleActive(liveEvent, (response) => {
        successHandler(response)
    }, (response) => {
        const error = response;
        if (error.status_code == 422) {
            errorHandler({errors: error.errors, validation: true});
        } else {
            errorHandler({errors: error.message, validation: false});
        }
    });
};