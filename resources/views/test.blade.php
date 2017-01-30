@extends('layouts.dashboard')
@section('head')
    <title>Scouting37</title>
    <style>
        .tags {
            display: inline-flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .tag-box {
            border: 1px solid #CCCCCC;
            border-radius: 5px;
            margin-bottom: 5px;
        }

        .btn-default-group {
            padding: 5px;
        }

        .btn-default-group.btn-default-group-lg {
            display: inline-flex;
            flex-wrap: wrap;
            padding: 5px;
        }

        .btn-default-group-lg a {
            margin-bottom: 3px;
            margin-right: 3px;
        }

        .tag-header {
            padding: 5px;
            border-bottom: 1px solid #CCCCCC;
        }

        .tag-body {
            padding: 0 5px;
        }
    </style>
@endsection
@section('content')


    <div class="container">
        <div class="row">
            <div class="col-xs-6">
                <div class="tags">
                    <div class="tag-box">
                        <div class="tag-header">
                            Aciones Ofensivas
                        </div>
                        <div class="tag-body">
                            <div class="btn btn-default-group" role="group" aria-label="...">
                                <a class=" btn btn-default tag">Accion 1</a>
                                <a class=" btn btn-default tag">Accion 2</a>
                                <a class=" btn btn-default tag">Accion 3</a>
                                <a class=" btn btn-default tag">Accion 4</a>
                            </div>
                        </div>
                    </div>
                    <div class="tag-box">
                        <div class="tag-header">
                            Aciones Ofensivas
                        </div>
                        <div class="tag-body">
                            <div class="btn btn-default-group" role="group" aria-label="...">
                                <a class=" btn btn-default tag">Accion 1</a>
                                <a class=" btn btn-default tag">Accion 2</a>
                            </div>
                        </div>
                    </div>
                    <div class="tag-box">
                        <div class="tag-header">
                            Aciones Ofensivas
                        </div>
                        <div class="tag-body">
                            <div class="btn btn-default-group btn-default-group-lg" role="group" aria-label="...">
                                <a class=" btn btn-default tag">Accion 1</a>
                                <a class=" btn btn-default tag">Accion 2</a>
                                <a class=" btn btn-default tag">Accion 3</a>
                                <a class=" btn btn-default tag">Accion 4</a>
                                <a class=" btn btn-default tag">Accion 4</a>
                                <a class=" btn btn-default tag">Accion 4</a>
                                <a class=" btn btn-default tag">Accion 4</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection

