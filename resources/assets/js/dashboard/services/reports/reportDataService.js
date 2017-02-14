import Vue from 'vue'

export default {
    pointVsTime(id, successCalback, errorCallback){
        return Vue.http.get('/api/reports/' + id + '/point-vs-time')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    offensiveDefensive(id, successCalback, errorCallback){
        return Vue.http.get('/api/reports/' + id + '/offensive-defensive')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    combatStatus(id, successCalback, errorCallback){
        return Vue.http.get('/api/reports/' + id + '/combat-status')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    parry(id, successCalback, errorCallback){
        return Vue.http.get('/api/reports/' + id + '/parry')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    summary(id, successCalback, errorCallback){
        return Vue.http.get('/api/reports/' + id + '/summary')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    }
}