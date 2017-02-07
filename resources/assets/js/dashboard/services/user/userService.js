import Vue from 'vue'

export default {
    show(id, successCalback, errorCallback){
        return Vue.http.get('/api/user/' + id + '?include=user')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    create(user, successCalback, errorCallback){
        return Vue.http.post('/api/user', user)
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    update(id, user, successCalback, errorCallback){
        return Vue.http.put('/api/user/' + id, user, {emulateHTTP: true})
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error.body));
    },
    remove(id, successCalback, errorCallback){
        return Vue.http.delete('/api/user/' + id)
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error.body));
    }
}