import namespace from 'base/admin/vuex/utils/namespacer'
export default namespace('results', {
    getters: [],
    actions: [
        'create',
        'update',
        'remove',
        'show',
        'processXml',
        'createAthleteFromXml',
        'createAllAthletesFromXml',
        'createArbiterFromXml',
        'createAllArbitersFromXml'
    ],
    mutations: [
        'SET_SELECTED',
        'SET_LIST',
        'SET_TABLE_COLUMNS',
        'SET_TABLE_AJAX',
        'UPDATING',
        'UPDATED',
        'CREATING',
        'CREATED',
        'ERROR_CREATING',
        'DELETING',
        'DELETED',
        'ERROR_DELETING',
        'OPEN_REMOVE',
    ]
});
