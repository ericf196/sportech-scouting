@extends('layouts.dashboard')
@section('head')
    <title>Scouting37</title>
@endsection
@section('content')

@endsection

@section('scripts')
    @parent
    <script src="/vendor/videojs/video.min.js"></script>
    <script src="/vendor/p5js/p5.min.js"></script>
    <script src="{{'js/manifest.js'}}"></script>
    <script src="{{'js/vendor.js'}}"></script>
    <script src="{{'js/app.js'}}"></script>
@endsection