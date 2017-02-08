import Vue from 'vue'

export default {
    summary(successCalback, errorCallback){
        return Vue.http.get('/api/user/statistics/summary')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    }
}