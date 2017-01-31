import Vue from 'vue'

export default {
    update(id, scouting, successCalback, errorCallback){
        return Vue.http.put('/api/scoutings/' + id + '/touches/', scouting)
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error.body));
    },
}