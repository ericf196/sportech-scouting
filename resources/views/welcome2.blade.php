<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
    <link href="css/AdminLte.css" rel="stylesheet" type="text/css">
    <link href="css/app.css" rel="stylesheet" type="text/css">
    <link href="css/skin-blue.css" rel="stylesheet" type="text/css">
</head>
<body class="layout-top-nav skin-blue">
<div id="app-layout" class="wrapper">
    <header class="main-header">
        <a href="{{url('/')}}" class="logo" style="width: 100%; padding-bottom: 20px">
            Scouting
        </a>
    </header>
    <div class="content-wrapper main-content">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <dnc-player :source="source" ref="player"></dnc-player>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <nav class="navbar navbar-default navbar-xs" role="navigation">
                        <div class="navbar-header">

                        </div>

                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav">
                                <li>
                                    <button href="#" id="startTouch" v-on:click="startTouch" class="btn btn-link"><i
                                                class="fa fa-play"></i>
                                        Start Touch
                                    </button>
                                </li>
                                <li>
                                    <button href="#" id="endTouch" v-on:click="endTouch" class="btn btn-link"><i
                                                class="fa fa-stop"></i>
                                        End Touch
                                    </button>
                                </li>
                            </ul>

                            <ul class="nav navbar-nav">
                                <li>
                                    <button href="#" id="backward10s" class="btn btn-link" v-on:click="backward(10)"><i
                                                class="fa fa-fast-backward"></i>
                                        10 s
                                    </button>
                                </li>
                                <li>
                                    <button href="#" id="backward5s" class="btn btn-link" v-on:click="backward(5)"><i
                                                class="fa fa-backward"></i>
                                        5 s
                                    </button>
                                </li>
                                <li>
                                    <button href="#" id="forward5s" class="btn btn-link" v-on:click="forward(5)"><i
                                                class="fa fa-forward"></i>
                                        5 s
                                    </button>
                                </li>
                                <li>
                                    <button href="#" id="forward10s" class="btn btn-link" v-on:click="forward(10)"><i
                                                class="fa fa-fast-forward"></i>
                                        10 s
                                    </button>
                                </li>
                            </ul>

                        </div><!-- /.navbar-collapse -->
                    </nav>
                </div>
            </div>
            <new-touch-form :open="touch.initialized" :start="touch.start" :end="touch.end"
                            v-on:cancel-new-touch="cancelNewTouch"
                            v-on:add-new-touch="saveNewTouch" :duration="duration"></new-touch-form>
            <edit-touch-form :open="touch.edit" :start="touch.start" :end="touch.end"
                             v-on:cancel-new-touch="cancelEditTouch"
                             :init-touch="touch"
                             v-on:add-new-touch="saveEditTouch" :duration="duration"></edit-touch-form>
            <div class="row">
                <div class="col-xs-12">
                    <div id='timeline'></div>
                </div>
            </div>
        </div>
    </div>

</div>
@include('layouts.footer.footer')
<script id="action-dropdown" type="text/template">
    <div class="btn-group btn-action">
        <button type="button" class="btn btn-link action-link dropdown-toggle" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-gear"></i>
        </button>
        <ul class="dropdown-menu">
            <li>
                <a href="#" class="editAction">Edit</a>
            </li>
            <li>
                <a href="#" class="addSubAction">Add SubAction</a>
            </li>
            <li>
                <a href="#" class="loopVideo">Loop this action</a>
            </li>
        </ul>
    </div>
</script>
<script id="toolbar" type="text/template">
    <nav class="navbar navbar-default navbar-xs" role="navigation">
        <div class="navbar-header">
            <p class="navbar-brand">Touches Timeline</p>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="#" class="success" id="zoomIn"><i class="fa fa-search-plus"></i> Zoom In</a>
                </li>
                <li>
                    <a href="#" class="danger" id="zoomOut"><i class="fa fa-search-minus"></i> Zoom Out</a>
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </nav>
</script>
<script id="action-inspector-toolbar" type="text/template">
    <nav class="navbar navbar-default navbar-xs" role="navigation">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Action Inspector</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">

            </ul>
            <ul class="nav navbar-nav navbar-right">

            </ul>
        </div><!-- /.navbar-collapse -->
    </nav>
</script>
<script src="/vendor/videojs/video.min.js"></script>
<script src="/vendor/videojs/libs/youtube.js"></script>
<script src="/js/p5js/libs/p5.js"></script>
<script type='text/javascript' src='/js/p5js/libs/addons/p5.dom.js'></script>
<script type='text/javascript' src='/js/p5js/libs/addons/p5.collide.js'></script>
<script src="/js/app.js"></script>

</body>
</html>
