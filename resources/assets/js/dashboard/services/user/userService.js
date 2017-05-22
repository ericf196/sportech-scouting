import Vue from 'vue'

export default {
    show(id, successCalback, errorCallback){
        return Vue.http.get('/api/auth/user?include=athlete.sport,athlete.specialty,athlete.country,athlete.category,athlete.gender')
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error));
    },
    update(id, user, successCalback, errorCallback){
        return Vue.http.put('/api/user', user, {emulateHTTP: true})
            .then((response) => successCalback(response.body))
            .catch((error) => errorCallback(error.body));
    },
    create(user,successCalback, errorCallback){
           return Vue.http.post('/api/accept',user)
               .then((response) => successCalback(response.body))
                .catch((error) => errorCallback(error));
    },
    send(user,successCalback, errorCallback){
        return Vue.http.post('/api/password/email',user)
                .then((response) => successCalback(response.body))
    .catch((error) => errorCallback(error));
    },
}