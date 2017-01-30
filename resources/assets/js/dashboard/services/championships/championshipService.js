import Vue from 'vue'

export default {
    show(id, successCalback, errorCallback){
        return Vue.http.get('/api/championships/' + id + '?include=sport')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    create(championship, successCalback, errorCallback){
        return Vue.http.post('/api/championships', championship)
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    update(id, championship, successCalback, errorCallback){
        return Vue.http.put('/api/championships/' + id, championship, {emulateHTTP: true})
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    remove(id, successCalback, errorCallback){
        return Vue.http.delete('/api/championships/' + id)
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error.body));
    }
}