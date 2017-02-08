import Vue from 'vue'

export default {
    inProgress(successCalback, errorCallback){
        return Vue.http.get('/api/user/challenges/in-progress')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    completed(successCalback, errorCallback){
        return Vue.http.get('/api/user/challenges/completed')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    acceptChallenge(challengeId, successCalback, errorCallback){
        return Vue.http.post('/api/user/challenges/' + challengeId + '/accept')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error.body));
    },
}