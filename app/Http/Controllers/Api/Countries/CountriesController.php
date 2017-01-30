<?php
namespace App\Http\Controllers\Api\Countries;

use App\Http\Controllers\Controller;
use App\Scouting\Repositories\Contracts\Locations\CountryRepository;
use App\Scouting\Transformers\Locations\CountryTransformer;

class CountriesController extends Controller
{

    /**
     * @var CountryRepository
     */
    private $countryRepository;

    public function __construct(CountryRepository $countryRepository)
    {

        $this->countryRepository = $countryRepository;
    }

    public function index()
    {

        return $this->createCollection($this->countryRepository->all(), new CountryTransformer());

    }
}