@extends('layouts.dashboard')
@section('head')
    <title>Scouting37</title>
@endsection
@section('content')

@endsection

@section('scripts')
    @parent
    <script src="/vendor/videojs/video.js"></script>
    <script src="/vendor/videojs/libs/videojs-externals.js"></script>
    <script src="/vendor/videojs/libs/projectorjs/projector.min.js"></script>
    <script src="/vendor/videojs/libs/videojs-abloop.js"></script>
    <script src="/vendor/videojs/libs/videojs-disable-progress/disable-progress.js"></script>
    <script src="/js/p5js/libs/p5.js"></script>
    <script type='text/javascript' src='/js/p5js/libs/addons/p5.dom.js'></script>
    <script type='text/javascript' src='/js/p5js/libs/addons/p5.collide.js'></script>
    <script src="{{loadAsset('js/app.js')}}"></script>
@endsection