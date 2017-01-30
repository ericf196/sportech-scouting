import types from './types';
import userService from 'base/admin/services/users/user-service'
import Vue from 'vue'

// initial state
const state = {
    table: {
        users: [],
        columns: [],
        ajax: {},
    },
    selected: {},
    selectedUserRoleIndex: null,
    roles: [],
    analytics: {
        newUsersCount: 0,
        usersCount: 0,
        hasIncremented: false,
        incrementMsg: '',
        loading: false,
    },
    modals: {
        edit: {
            open: false,
            updating: false,
        },
        remove: {
            open: false,
            removing: false,
        },
        block: {
            blocking: false,
            open: false
        }
    }
};

// mutations
export const mutations = {
    [types.mutations.EDIT_USER] (state, edit) {
        state.modals.edit.open = edit;
    },
    [types.mutations.OPEN_DELETE_USER] (state, remove) {
        state.modals.remove.open = remove;
    },
    [types.mutations.SET_SELECTED] (state, user) {
        state.selected = user;
    },
    [types.mutations.SET_SELECTED_USER_ROLE_INDEX] (state, user) {
        const role = state.roles.filter((role)=> {
            return role.id === user.role.id;
        });
        if (role.length) {
            state.selectedUserRoleIndex = state.roles.indexOf(role[0]);
        } else {
            state.selectedUserRoleIndex = null;
        }
    },
    [types.mutations.SET_LIST] (state, users) {
        state.table.users = users;
    },
    [types.mutations.SET_TABLE_COLUMNS] (state, columns) {
        state.table.columns = columns;
    },
    [types.mutations.SET_TABLE_AJAX] (state, ajax) {
        state.table.ajax = ajax;
    },
    [types.mutations.SET_HAS_INCREMENT] (state, payload) {
        state.analytics.hasIncremented = payload.hasIncremented;
        state.analytics.incrementMsg = payload.incrementMsg;
    },
    [types.mutations.SET_NEW_USERS_COUNT] (state, newUsersCount) {
        state.analytics.newUsersCount = newUsersCount;
    },
    [types.mutations.SET_USERS_COUNT] (state, usersCount) {
        state.analytics.usersCount = usersCount;
    },
    [types.mutations.SET_LOADING_ANALYTICS] (state, loading) {
        state.analytics.loading = loading;
    },
    [types.mutations.SET_FIRST_NAME] (state, first_name) {
        state.selected.first_name = first_name;
    },
    [types.mutations.SET_LAST_NAME] (state, last_name) {
        state.selected.last_name = last_name;
    },
    [types.mutations.SET_ROLE] (state, role) {
        state.selected.role = role;
    },
    [types.mutations.SET_ROLES] (state, roles) {
        state.roles = roles;
    },
    [types.mutations.UPDATING_USER] (state) {
        state.modals.edit.updating = true;
    },
    [types.mutations.USER_UPDATED] (state) {
        state.modals.edit.updating = false;
    },
    [types.mutations.ERROR_UPDATING] (state, mutation) {
        state.modals.edit.updating = false;
    },
    [types.mutations.DELETING_USER] (state) {
        state.modals.remove.removing = true;
    },
    [types.mutations.USER_DELETED] (state) {
        state.modals.remove.removing = false;
    },
    [types.mutations.ERROR_DELETING] (state, mutation) {
        state.modals.remove.removing = false;
    },
    [types.mutations.BLOCKING_USER] (state, mutation) {
        state.modals.block.blocking = true;
    },
    [types.mutations.USER_BLOCKED] (state, mutation) {
        state.modals.block.blocking = false;
    },
    [types.mutations.ERROR_BLOCKING] (state, mutation) {
        state.modals.block.blocking = false;
    },
    [types.mutations.UNBLOCKING_USER] (state, mutation) {
        state.modals.block.blocking = true;
    },
    [types.mutations.USER_UNBLOCKED] (state, mutation) {
        state.modals.block.blocking = false;
    },
    [types.mutations.ERROR_UNBLOCKING] (state, mutation) {
        state.modals.block.blocking = false;
    },
    [types.mutations.OPEN_BLOCK_USER] (state, block) {
        state.modals.block.open = block;
    }
};

const getters = {}

const actions = {
    [types.actions.getAnalytics]: context => {
        context.commit(types.mutations.SET_LOADING_ANALYTICS, true);
        userService.getAnalytics((response) => {
            context.commit(types.mutations.SET_LOADING_ANALYTICS, false);
            context.commit(types.mutations.SET_NEW_USERS_COUNT, response.newUsersToday);
            context.commit(types.mutations.SET_USERS_COUNT, response.total);
            context.commit({
                type: types.mutations.SET_HAS_INCREMENT,
                hasIncremented: response.increment,
                incrementMsg: response.incrementMsg
            });
        }, (response) => {
            // error callback
        });
    },
    [types.actions.getRoles]: context => {
        userService.getRoles((response) => {
                response.data.forEach(function (val) {
                    val.value = val.id;
                    val.label = Vue.t('admin.' + val.name);
                });
                context.commit(types.mutations.SET_ROLES, response.data);
            }, (response)=> {
                // error callback
            }
        );
    },
    [types.actions.update]: (context, payload) => {
        context.commit(types.mutations.UPDATING_USER);
        userService.updateUser(payload.user.id, payload.user,
            (response) => {
                context.commit(types.mutations.USER_UPDATED);
                context.commit(types.mutations.EDIT_USER, false);
                payload.successHandler(response);
            },
            (response) => {
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
        context.commit(types.mutations.DELETING_USER);
        userService.removeUser(payload.user.id, (response) => {
                context.commit(types.mutations.USER_DELETED);
                payload.successHandler(response);
            }, (response) => {
                const error = response;
                context.commit(types.mutations.ERROR_DELETING);
                payload.errorHandler(error);
            }
        );
    },
    [types.actions.block]: (context, payload) => {
        context.commit(types.mutations.BLOCKING_USER);
        userService.blockUser(payload.user.id, (response) => {
            context.commit(types.mutations.USER_BLOCKED);
            payload.successHandler(response);
        }, (response) => {
            const error = response;
            context.commit(types.mutations.ERROR_BLOCKING);
            payload.errorHandler(error);
        });
    },

    [types.actions.unblock]: (context, payload) => {
        context.commit(types.mutations.UNBLOCKING_USER);
        userService.unblockUser(payload.user.id, (response) => {
            context.commit(types.mutations.USER_UNBLOCKED);
            payload.successHandler(response);
        }, (response) => {
            const error = response;
            context.commit(types.mutations.ERROR_UNBLOCKING);
            payload.errorHandler(error);
        });
    },

}

export default {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
};