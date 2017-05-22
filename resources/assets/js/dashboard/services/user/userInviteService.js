import Vue from 'vue'

export default {
    sendInvite(invitation, successCalback, errorCallback){
        return Vue.http.post('/api/user/invite/process',invitation)
                .then((response) => successCalback(response.body))
                .catch((error) => errorCallback(error.body));
    }
}
