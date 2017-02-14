<?php
namespace App\Scouting\Services\Reports\Contracts;

use Illuminate\Support\Collection;

interface GlobalDataGeneratorContract
{

    /**
     * Analize the scouting
     *
     * @param Collection $scoutings
     * @return mixed
     */
    public function analyze(Collection $scoutings);
}