import Vue from 'vue'

export default {
    getSports(successCalback, errorCallback) {
        return Vue.http.get('/api/sports')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error.body));
    },
    getSpecialtiesBySport(sportId, successCalback, errorCallback) {
        return Vue.http.get('/api/sports/' + sportId + '/specialties')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    getCategories(successCalback, errorCallback) {
        return Vue.http.get('/api/categories')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    getCountries(successCalback, errorCallback) {
        return Vue.http.get('/api/countries')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    getGenders(successCalback, errorCallback) {
        return Vue.http.get('/api/genders')
            .then((response) => {
                successCalback(response.body)
            })
            .catch((error) => errorCallback(error));
    },
    getChampionshipEvents(championshipId, successCalback, errorCallback) {
        return Vue.http.get('/api/championships/' + championshipId + '/events')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    getEventAthletes(eventId, successCalback, errorCallback) {
        return Vue.http.get('/api/events/' + eventId + '/athletes')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    getArbiters(successCalback, errorCallback) {
        return Vue.http.get('/api/arbiters/list')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    getChampionships(successCalback, errorCallback) {
        return Vue.http.get('/api/championships?include=sport')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error.body));
    },
    getTypes(successCalback, errorCallback) {
        return Vue.http.get('/api/events/types')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error.body));
    },
    getReaches(successCalback, errorCallback) {
        return Vue.http.get('/api/events/reaches')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error.body));
    },
    getTags(successCalback, errorCallback) {
        return Vue.http.get('/api/tags?include=options')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error.body));
    },
}