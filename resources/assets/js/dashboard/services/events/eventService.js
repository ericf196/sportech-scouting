import Vue from 'vue'

export default {
    show(id, successCalback, errorCallback){
        return Vue.http.get('/api/events/' + id + '?include=championship.sport,specialty,category,type,reach')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    create(event, successCalback, errorCallback){
        return Vue.http.post('/api/events', event)
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    update(id, event, successCalback, errorCallback){
        return Vue.http.put('/api/events/' + id, event, {emulateHTTP: true})
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    remove(id, successCalback, errorCallback){
        return Vue.http.delete('/api/events/' + id)
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error.body));
    },
    getChampionships(successCalback, errorCallback) {
        return Vue.http.get('/api/championships?include=sport')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error.body));
    }
}