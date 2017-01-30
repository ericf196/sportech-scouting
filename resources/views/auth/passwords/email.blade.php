@extends('layouts.auth')

@section('htmlheader_title')
    {{trans('message.passwordrecovery')}}
@endsection

@section('content')

    <body class="login-page">
    <div class="login-box">
        <div class="login-logo">
            <a href="{{ url('/home') }}">
                <img src="/images/brand/sportech-logo-texto.png" alt="">
            </a>
        </div><!-- /.login-logo -->


        @if (session('status'))
            <div class="alert alert-success">
                {{ session('status') }}
            </div>
        @endif

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

        <div class="login-box-body">
            <p class="login-box-msg">{{trans('message.passwordreset')}}</p>
            <form action="{{ url(LaravelLocalization::getLocalizedURL(null,'/password/email')) }}" method="post">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                <div class="form-group has-feedback">
                    <input type="email" class="form-control" placeholder="Email" name="email"
                           value="{{ old('email') }}"/>
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>

                <div class="row">
                    <div class="col-xs-12 text-center">
                        <button type="submit"
                                class="btn btn-primary btn-flat">{{ trans('message.sendpassword') }}</button>
                    </div><!-- /.col -->

                </div>
            </form>

            <a href="{{ url('/login') }}">{{trans('message.login')}}</a>
            <br>
            <a href="{{ url('/register') }}" class="text-center">{{ trans('message.registermember') }}</a>

        </div><!-- /.login-box-body -->

    </div><!-- /.login-box -->

    @include('layouts.partials.scripts_auth')

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
