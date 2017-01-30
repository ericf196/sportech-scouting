<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title> Sportech37 - @yield('title', 'Your title here') </title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <!-- Bootstrap 3.3.4 -->
    <!-- Font Awesome Icons -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"
          type="text/css"/>
    <!-- Theme style -->
    <link href="{{ asset('/css/bootstrap.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ asset('/css/AdminLTE.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ asset('/css/skins/skin-blue.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ asset('/plugins/iCheck/square/blue.css') }}" rel="stylesheet" type="text/css"/>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

@yield('content')

</html>