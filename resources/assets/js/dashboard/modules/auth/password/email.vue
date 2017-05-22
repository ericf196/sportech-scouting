
<template>
    <div class="login-box">
        <div class="login-logo">
            <b>Scouting</b>37
        </div>
        <div class="login-box-body">
            <p class="login-box-msg"> Reset Password </p>
            <form v-on:submit.prevent="login()">
                <div class="form-group has-feedback" :class="{'has-error': errors.has('email') }">
                    <input type="text"
                           class="form-control"
                           placeholder="Email"
                           v-model="data.email"
                           v-validate.initial
                           data-vv-rules="required|email"
                           :class="{'input': true, 'is-danger': errors.has('email') }"
                           name="email"/>
                    <span class="fa fa-envelope form-control-feedback"></span>
                    <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>

                </div>
                <div class="row">

                    <div class="col-xs-7">
                        <router-link
                                :to="{ name: 'password.reset'}" class="btn btn-primary">
                            Send Password Reset Link
                        </router-link>
                    </div><!-- /.col -->
                </div>
            </form>
        </div><!-- /.login-box-body -->

    </div><!-- /.login-box -->
</template>
<script>
    import userService from 'base/dashboard/services/user/userService'

    export default{
        data(){
            return {
                data: {
                    email: '',
                },
                error: null,
            }
        },
        methods: {
            send() {
                userService.send(this.data,
                        (response)=> {
                    this.$root.successToast(response.message);
            },
                (response)=> {
                    if (response.validation) {
                        for (var error in response.errors) {
                            if (response.errors.hasOwnProperty(error)) {
                                response.errors[error].forEach((validationError) => {
                                })
                            }
                        }
                    } else {
                    }
                });
            }
        }
    }
</script>