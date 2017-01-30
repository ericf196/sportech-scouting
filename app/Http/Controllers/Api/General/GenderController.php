<?php
namespace App\Http\Controllers\Api\General;


use App\Http\Controllers\Controller;

class GenderController extends Controller
{

    public function index()
    {
        return response()->json([
            [
                'gender' => 'm',
                'name'   => trans('admin/athletes/athletes.m')
            ],
            [
                'gender' => 'w',
                'name'   => trans('admin/athletes/athletes.w')
            ],
            [
                'gender' => 'n',
                'name'   => trans('admin/athletes/athletes.n')
            ],
        ]);
    }
}