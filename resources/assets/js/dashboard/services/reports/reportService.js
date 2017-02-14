import Vue from 'vue'

export default {
    show(id, successCalback, errorCallback){
        return Vue.http.get('/api/reports/' + id)
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    create(athlete, successCalback, errorCallback){
        return Vue.http.post('/api/reports', athlete)
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
}