import namespace from '../../utils/namespacer'
export default namespace('common', {
    getters: [],
    actions: [
        'getSports',
        'getSpecialties',
        'getCategories',
        'getCountries',
        'getChampionships',
        'getChampionshipEvents',
        'getTypes',
        'getReaches',
        'getGenders',
        'getEventAthletes',
        'getArbiters'
    ],
    mutations: [
        'SET_SPORTS',
        'SET_SPECIALTIES',
        'SET_CATEGORIES',
        'SET_COUNTRIES',
        'SET_CHAMPIONSHIPS',
        'SET_CHAMPIONSHIP_EVENTS',
        'SET_EVENT_ATHLETES',
        'SET_GENDERS',
        'SET_TYPES',
        'SET_REACHES',
        'SET_ERROR_MSG',
        'SET_SUCCESS_MSG'
    ]
});
