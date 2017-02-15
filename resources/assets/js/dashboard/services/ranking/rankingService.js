import Vue from 'vue'

export default {
    ranking(successCalback, errorCallback){
        return Vue.http.get('/api/ranking?include=user.athlete.country')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
}