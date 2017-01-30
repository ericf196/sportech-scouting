import namespace from 'base/admin/vuex/utils/namespacer'
export default namespace('users', {
    getters: [],
    actions: [
        'getAnalytics',
        'getRoles',
        'update',
        'remove',
        'block',
        'unblock'
    ],
    mutations: [
        'SET_SELECTED',
        'SET_LIST',
        'SET_TABLE_COLUMNS',
        'SET_TABLE_AJAX',
        'SET_NEW_USERS_COUNT',
        'SET_USERS_COUNT',
        'SET_HAS_INCREMENT',
        'SET_LOADING_ANALYTICS',
        'SET_FIRST_NAME',
        'SET_LAST_NAME',
        'SET_ROLE',
        'SET_ROLES',
        'UPDATING_USER',
        'USER_UPDATED',
        'ERROR_UPDATING',
        'EDIT_USER',
        'SET_SELECTED_USER_ROLE_INDEX',
        'DELETING_USER',
        'USER_DELETED',
        'ERROR_DELETING',
        'OPEN_DELETE_USER',
        'BLOCKING_USER',
        'USER_BLOCKED',
        'ERROR_BLOCKING',
        'UNBLOCKING_USER',
        'USER_UNBLOCKED',
        'ERROR_UNBLOCKING',
        'OPEN_BLOCK_USER'
    ]
});
