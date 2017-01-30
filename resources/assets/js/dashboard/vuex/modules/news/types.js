import namespace from 'base/admin/vuex/utils/namespacer'
export default namespace('news', {
    getters: [],
    actions: [
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
    ]
});