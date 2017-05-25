<?php

namespace App\Http\Controllers;

use App\Libaries\Fractal\FractalResponses;
use App\Scouting\Entities\Users\User;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests, FractalResponses;
    public $loggedUser;

    public function loggedInUser():User
    {
        if (!$this->loggedUser) {
            $this->loggedUser = \JWTAuth::parseToken()->authenticate();
        }
        return $this->loggedUser;
    }
}
