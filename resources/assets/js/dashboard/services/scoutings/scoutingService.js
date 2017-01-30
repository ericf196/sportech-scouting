import Vue from 'vue'

export default {
    show(id, successCalback, errorCallback){
        return Vue.http.get('/api/scoutings/' + id + '?include=championship.sport,event,leftAthlete,rightAthlete,touches.actions.leftTags,touches.actions.rightTags')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    create(scouting, successCalback, errorCallback){
        return Vue.http.post('/api/scoutings', scouting)
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    update(id, scouting, successCalback, errorCallback){
        return Vue.http.put('/api/scoutings/' + id, scouting, {emulateHTTP: true})
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error.body));
    },
    remove(id, successCalback, errorCallback){
        return Vue.http.delete('/api/scoutings/' + id)
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error.body));
    }
}