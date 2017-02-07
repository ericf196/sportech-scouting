<template>
    <div class="login-box">
        <div class="login-logo">
            <b>Scouting</b>37
        </div>
        <div class="login-box-body">
            <p class="login-box-msg"> Log In </p>
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
                <div class="form-group has-feedback" :class="{'has-error': errors.has('password') }">
                    <input type="password"
                           class="form-control"
                           name="password"
                           v-model="data.password"
                           v-validate.initial
                           data-vv-rules="required"
                           :class="{'input': true, 'is-danger': errors.has('password') }"
                           placeholder="Password"/>
                    <span class="fa fa-lock form-control-feedback"></span>
                    <span v-show="errors.has('password')" class="text-danger">{{ errors.first('password') }}</span>

                </div>
                <div class="row">
                    <div class="col-xs-4 col-xs-offset-1">
                        <div class="checkbox icheck">
                            <label>
                                <input type="checkbox" v-model="rememberMe" name="remember"> Remember Me
                            </label>
                        </div>
                    </div><!-- /.col -->
                    <div class="col-xs-7">
                        <button type="submit"
                                class="btn btn-primary btn-block btn-flat">Log In
                        </button>
                    </div><!-- /.col -->
                </div>
            </form>
        </div><!-- /.login-box-body -->

    </div><!-- /.login-box -->
</template>

<style>
    footer {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
    }

</style>
<script>

    export default{
        data(){
            return {
                context: 'login context',
                data: {
                    email: 'admin@admin.com',
                    password: 'secret',
                },
                rememberMe: false,
                error: null
            }
        },
        methods: {
            login() {
                var self = this;
                this.$validator.validateAll().then(success => {
                    if (!success) {
                        // handle error
                        return;
                    }
                    this.$auth.login({
                        body: this.data,
                        rememberMe: this.data.rememberMe,
                        redirect: {name: 'dashboard'},
                        success() {
                            self.$root.successToast('User LoggedIn');
                        },
                        error(res) {
                            if (res.data.hasOwnProperty('error')) {
                                self.$root.errorToast(res.data.error)
                            } else if (res.data.hasOwnProperty('errors')) {
                                _.each(res.data.errors, (error)=> {
                                    self.$root.errorToast(error)
                                })
                            }
                        }
                    });
                });
            }
        }
    }
</script>