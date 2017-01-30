@extends('layouts.auth')

@section('htmlheader_title')
    Register
@endsection

@section('content')

    <body class="hold-transition register-page">
    <div class="register-box">
        <div class="register-logo">
            <a href="{{ url('/home') }}">
                <img src="/images/brand/sportech-logo.png" alt="">
            </a>
        </div>

        @if (count($errors) > 0)
            <div class="alert alert-danger">
                {{ trans('message.validationerror') }}<br><br>
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <div class="register-box-body">
            <p class="login-box-msg">{{ trans('message.registermember') }}</p>
            <form action="{{ url(LaravelLocalization::getLocalizedURL(null,'/register')) }}" method="post">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                <div class="form-group has-feedback">
                    <input type="text" class="form-control"
                           placeholder="{{ trans('message.firstname') }}"
                           name="first_name" value="{{ old('first_name') }}"/>
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="text" class="form-control" placeholder="{{ trans('message.lastname') }}"
                           name="last_name" value="{{ old('last_name') }}"/>
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="email" class="form-control" placeholder="{{ trans('message.email') }}"
                           name="email" value="{{ old('email') }}"/>
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" class="form-control"
                           placeholder="{{ trans('message.password') }}" name="password"/>
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" class="form-control"
                           placeholder="{{ trans('message.retrypepassword') }}"
                           name="password_confirmation"/>
                    <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-1">
                        <label>
                            <div class="checkbox_register icheck">
                                <label>
                                    <input type="checkbox" name="terms">
                                </label>
                            </div>
                        </label>
                    </div><!-- /.col -->
                    <div class="col-xs-10">
                        <div class="form-group">
                            <button type="button" class="btn btn-block btn-flat" data-toggle="modal"
                                    data-target="#termsModal">{{ trans('message.terms') }}</button>
                        </div>
                    </div><!-- /.col -->
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <button type="submit"
                                class="btn btn-primary btn-block btn-flat">{{ trans('message.register') }}</button>
                    </div><!-- /.col -->
                </div>
            </form>


            <a href="{{ url('/login') }}" class="text-center">{{ trans('message.membreship') }}</a>
        </div><!-- /.form-box -->
    </div><!-- /.register-box -->

    @include('layouts.partials.scripts_auth')

    @include('auth.terms')

    <script>
        $(function () {
            $('input').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%' // optional
            });
        });
    </script>
    </body>

@endsection
