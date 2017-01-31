<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
    <title>Scouting37</title>
    <link href="{{'css/app.css'}}" rel="stylesheet" type="text/css">
    <link href="{{'css/AdminLte.css'}}" rel="stylesheet" type="text/css">
    <link href="{{'css/skin-blue.css'}}" rel="stylesheet" type="text/css">
    <link href="{{'css/vue-toastr.css'}}" rel="stylesheet" type="text/css">
    <link href="/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
    <link href="//cdn.datatables.net/plug-ins/1.10.13/integration/font-awesome/dataTables.fontAwesome.css"
          rel="stylesheet" type="text/css">
    <link href="vendor/videojs/libs/projectorjs/projectorjs.min.css" rel="stylesheet" type="text/css">
    @yield('head')
</head>
<body>
<div id="app">
    @yield('content')
</div>

@include('layouts.footer.footer')
@section('scripts')

@show
</body>
</html>