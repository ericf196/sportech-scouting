import namespace from 'base/admin/vuex/utils/namespacer'
export default namespace('events', {
    getters: [],
    actions: [
        'setAnalytics',
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
        'SET_COUNT',
        'SET_LOADING_ANALYTICS',
        'UPDATING',
        'EVENT_UPDATED',
        'ERROR_UPDATING',
        'OPEN_EDIT',
        'CREATING',
        'EVENT_CREATED',
        'ERROR_CREATING',
        'OPEN_CREATE',
        'DELETING',
        'EVENT_DELETED',
        'ERROR_DELETING',
        'OPEN_REMOVE',
        'OPEN_ADD_ATHLETE',

    ]
});
