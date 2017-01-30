import Vue from 'vue'

export default {
    show(id, successCalback, errorCallback){
        return Vue.http.get('/api/athletes/' + id + '?include=sport,specialty,category,country')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    create(athlete, successCalback, errorCallback){
        return Vue.http.post('/api/athletes', athlete)
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    update(id, athlete, successCalback, errorCallback){
        return Vue.http.put('/api/athletes/' + id, athlete, {emulateHTTP: true})
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error.body));
    },
    remove(id, successCalback, errorCallback){
        return Vue.http.delete('/api/athletes/' + id)
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error.body));
    }
}