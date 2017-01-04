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
    <link href="vendor/videojs/libs/projectorjs/projectorjs.min.css" rel="stylesheet" type="text/css">
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
            <div class="row is-flex">
                <div class="col-xs-12 col-md-6 player-container">
                    <dnc-player :source="source" ref="player"></dnc-player>
                </div>
                <div class="col-xs-12 col-md-6 touches-container">
                    <touches-list></touches-list>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <div class="mailbox-controls control-menu">
                        <div class="btn-group">
                            <button type="button" class="btn btn-success btn-sm" v-on:click="startTouch"
                                    :disabled="started"><i
                                        class="fa" :class="{'fa-play':!started,'fa-circle text-danger':started}"></i>
                                @{{started?'Recording Touch':'Start Touch'}}
                            </button>
                            <button type="button" class="btn btn-danger btn-sm" :disabled="!started"
                                    v-on:click="endTouch"><i
                                        class="fa fa-stop"></i> End Touch
                            </button>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-default btn-sm" v-on:click="backward(10)"><i
                                        class="fa fa-fast-backward"></i> 10 s
                            </button>
                            <button type="button" class="btn btn-default btn-sm" v-on:click="backward(5)"><i
                                        class="fa fa-backward"></i> 5 s
                            </button>
                            <button type="button" class="btn btn-default btn-sm" v-on:click="forward(5)"><i
                                        class="fa fa-forward"></i> 5 s
                            </button>
                            <button type="button" class="btn btn-default btn-sm" v-on:click="forward(10)"><i
                                        class="fa fa-fast-forward"></i> 10 s
                            </button>
                        </div>

                        <div class="btn-group">
                            <button type="button" class="btn btn-default btn-sm" v-on:click="playbackRate(0.25)">
                                0.25 x
                            </button>
                            <button type="button" class="btn btn-default btn-sm" v-on:click="playbackRate(0.5)">
                                0.5 x
                            </button>
                            <button type="button" class="btn btn-default btn-sm" v-on:click="playbackRate(1)">
                                1 x
                            </button>
                            <button type="button" class="btn btn-default btn-sm" v-on:click="playbackRate(1.5)">
                                1.5 x
                            </button>
                            <button type="button" class="btn btn-default btn-sm" v-on:click="playbackRate(2)">
                                2 x
                            </button>
                        </div>

                        <div class="pull-right">
                            <div class="btn-group">
                                <button type="button" class="btn btn-default btn-sm" v-on:click="toogleTimeline"><i
                                            class="fa fa-calendar"></i> Toogle Timeline
                                </button>
                                <button type="button" class="btn btn-default btn-sm" v-on:click="toogleInspector"><i
                                            class="fa fa-eye"></i> Toogle
                                    Touch Inspector
                                </button>
                            </div>
                            <!-- /.btn-group -->
                        </div>
                    </div>
                </div>
            </div>
            <new-touch-form :open="touch.initialized" :start="touch.start" :end="touch.end"
                            v-on:cancel-new-touch="cancelNewTouch"
                            v-on:add-new-touch="saveNewTouch" :duration="duration"></new-touch-form>
            <edit-touch-form v-if="edit"
                             v-on:cancel-new-touch="cancelEditTouch"
                             :init-touch="touch"
                             v-on:add-new-touch="saveEditTouch" :duration="duration"></edit-touch-form>
            <div class="row">
                <div class="col-xs-12">
                    <inspector ref="inspector" :playing="playing"></inspector>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12">
                    <timeline></timeline>
                </div>
            </div>
        </div>
    </div>

</div>
@include('layouts.footer.footer')
<script id="touch-dropdown" type="text/template">
    <div class="btn-group btn-touch">
        <button type="button" class="btn btn-link touch-link dropdown-toggle" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-gear"></i>
        </button>
        <ul class="dropdown-menu">
            <li>
                <a href="#" class="editTouch">Edit</a>
            </li>
        </ul>
    </div>
</script>
<script src="/vendor/videojs/video.js"></script>
<script src="/vendor/videojs/libs/videojs-externals.js"></script>
<script src="/vendor/videojs/libs/projectorjs/projector.min.js"></script>
<script src="/vendor/videojs/libs/videojs-abloop.js"></script>
<script src="/vendor/videojs/libs/videojs-disable-progress/disable-progress.js"></script>
<script src="/js/p5js/libs/p5.js"></script>
<script type='text/javascript' src='/js/p5js/libs/addons/p5.dom.js'></script>
<script type='text/javascript' src='/js/p5js/libs/addons/p5.collide.js'></script>
<script src="/js/app.js"></script>
<script src="/vendor/adminLte/adminLte.js"></script>

</body>
</html>
