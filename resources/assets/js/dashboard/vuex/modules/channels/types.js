import namespace from 'base/admin/vuex/utils/namespacer'
export default namespace('channels', {
    getters: [],
    actions: [
        'toggleActive',
        'create',
        'update',
        'remove',
        'show',
    ],
    mutations: [
        'SET_SELECTED',
        'SET_LIST',
        'SET_TABLE_COLUMNS',
        'SET_TABLE_AJAX',
        'SET_LOADING_ANALYTICS',
        'UPDATING',
        'UPDATED',
        'ERROR_UPDATING',
        'OPEN_EDIT',
        'CREATING',
        'CREATED',
        'ERROR_CREATING',
        'OPEN_CREATE',
        'DELETING',
        'DELETED',
        'ERROR_DELETING',
        'OPEN_REMOVE',
        'SET_TRACKS',
    ]
});
