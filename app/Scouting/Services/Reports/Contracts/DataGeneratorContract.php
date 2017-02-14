<?php
namespace App\Scouting\Services\Reports\Contracts;

use App\Scouting\Entities\Scoutings\Scouting;

interface DataGeneratorContract
{

    /**
     * Analize the scouting
     *
     * @param Scouting $scouting
     * @return mixed
     */
    public function analyze(Scouting $scouting);
}