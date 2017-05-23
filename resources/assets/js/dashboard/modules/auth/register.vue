<template>
    <div class="login-box">
        <div class="login-logo">
            <b>Scouting</b>37
        </div>
        <div class="login-box-body">
            <p class="login-box-msg"> Register </p>
            <form v-on:submit.prevent="register()">
                <div class="form-group has-feedback">
                    <label class="col-md-4 control-label">User</label>
                    <input type="text" class="form-control"
                           placeholder="User"
                           name="user_name" v-model="data.user_name"/>
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <label class="col-md-4 control-label">First name</label>
                    <input type="text" class="form-control"
                           placeholder="First name"
                           name="first_name" v-model="data.first_name"/>
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <label class="col-md-4 control-label">Last name</label>
                    <input type="text" class="form-control" placeholder="Last Name"
                           name="last_name" v-model="data.last_name"/>
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback" :class="{'has-error': errors.has('email') }">
                    <label class="col-md-4 control-label">Email</label>
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
                    <label class="col-md-4 control-label">Password</label>
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
                <div class="form-group has-feedback" :class="{'has-error': errors.has('password') }">
                    <label class="col-md-6 control-label">Confirm Password</label>
                    <input type="password"
                           class="form-control"
                           name="confirm_password"
                           v-model="data.confirm_password"
                           v-validate.initial
                           data-vv-rules="required"
                           :class="{'input': true, 'is-danger': errors.has('password') }"
                           placeholder=" Confirm Password"/>
                    <span class="fa fa-lock form-control-feedback"></span>
                    <span v-show="errors.has('password')" class="text-danger">{{ errors.first('password') }}</span>

                </div>
                <div class="row">
                    <div class="col-xs-7">
                        <button type="submit"
                                class="btn btn-primary btn-block btn-flat">Register
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
    import userService from 'base/dashboard/services/user/userService'

    export default{
        data(){
            return {
                context: 'login context',
                data: {
                    user_name : '',
                    first_name: '',
                    last_name: '',
                    email: 'admin@admin.com',
                    password: 'secret',
                    confirm_password :'',
                    token : ''
                },
                error: null,
            }
        },
        methods: {
            register() {
                this.data.token=this.$route.query.token;
                userService.create(this.data,
                        (response)=> {
                    this.$router.push({
                    name: 'login'
                })
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