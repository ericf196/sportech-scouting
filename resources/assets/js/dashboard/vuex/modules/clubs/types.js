import namespace from 'base/admin/vuex/utils/namespacer'
export default namespace('clubs', {
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
        'SET_LOADINGS_ANALYTICS',
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
        'OPEN_ADD_ATHLETE',
    ]
});
