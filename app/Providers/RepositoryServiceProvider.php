<?php

namespace App\Providers;

use App\Scouting\Repositories\Athletes\AthleteRepositoryEloquent;
use App\Scouting\Repositories\Challenges\ChallengeRepositoryEloquent;
use App\Scouting\Repositories\Championships\ChampionshipRepositoryEloquent;
use App\Scouting\Repositories\Clubs\ClubRepositoryEloquent;
use App\Scouting\Repositories\Contracts\Athletes\AthleteRepository;
use App\Scouting\Repositories\Contracts\Challenges\ChallengeRepository;
use App\Scouting\Repositories\Contracts\Championships\ChampionshipRepository;
use App\Scouting\Repositories\Contracts\Clubs\ClubRepository;
use App\Scouting\Repositories\Contracts\Events\EventReachRepository;
use App\Scouting\Repositories\Contracts\Events\EventRepository;
use App\Scouting\Repositories\Contracts\Events\EventTypeRepository;
use App\Scouting\Repositories\Contracts\Locations\CountryRepository;
use App\Scouting\Repositories\Contracts\Locations\LocationRepository;
use App\Scouting\Repositories\Contracts\Referees\RefereeRepository;
use App\Scouting\Repositories\Contracts\Scoutings\ScoutingRepository;
use App\Scouting\Repositories\Contracts\Scoutings\ScoutingTouchActionRepository;
use App\Scouting\Repositories\Contracts\Scoutings\ScoutingTouchRepository;
use App\Scouting\Repositories\Contracts\Scoutings\TagOptionRepository;
use App\Scouting\Repositories\Contracts\Scoutings\TagRepository;
use App\Scouting\Repositories\Contracts\Sports\CategoryRepository;
use App\Scouting\Repositories\Contracts\Sports\SpecialtyRepository;
use App\Scouting\Repositories\Contracts\Sports\SportRepository;
use App\Scouting\Repositories\Contracts\Users\UserRepository;
use App\Scouting\Repositories\Events\EventReachRepositoryEloquent;
use App\Scouting\Repositories\Events\EventRepositoryEloquent;
use App\Scouting\Repositories\Events\EventTypeRepositoryEloquent;
use App\Scouting\Repositories\Locations\CountryRepositoryEloquent;
use App\Scouting\Repositories\Locations\LocationRepositoryEloquent;
use App\Scouting\Repositories\Referees\RefereeRepositoryEloquent;
use App\Scouting\Repositories\Scoutings\ScoutingRepositoryEloquent;
use App\Scouting\Repositories\Scoutings\ScoutingTouchActionRepositoryEloquent;
use App\Scouting\Repositories\Scoutings\ScoutingTouchRepositoryEloquent;
use App\Scouting\Repositories\Scoutings\TagOptionRepositoryEloquent;
use App\Scouting\Repositories\Scoutings\TagRepositoryEloquent;
use App\Scouting\Repositories\Sports\CategoryRepositoryEloquent;
use App\Scouting\Repositories\Sports\SpecialtyRepositoryEloquent;
use App\Scouting\Repositories\Sports\SportRepositoryEloquent;
use App\Scouting\Repositories\Users\UserRepositoryEloquent;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ScoutingRepository::class, ScoutingRepositoryEloquent::class);
        $this->app->bind(EventRepository::class, EventRepositoryEloquent::class);
        $this->app->bind(ChampionshipRepository::class, ChampionshipRepositoryEloquent::class);
        $this->app->bind(EventTypeRepository::class, EventTypeRepositoryEloquent::class);
        $this->app->bind(EventReachRepository::class, EventReachRepositoryEloquent::class);
        $this->app->bind(AthleteRepository::class, AthleteRepositoryEloquent::class);
        $this->app->bind(SportRepository::class, SportRepositoryEloquent::class);
        $this->app->bind(CategoryRepository::class, CategoryRepositoryEloquent::class);
        $this->app->bind(SpecialtyRepository::class, SpecialtyRepositoryEloquent::class);
        $this->app->bind(LocationRepository::class, LocationRepositoryEloquent::class);
        $this->app->bind(RefereeRepository::class, RefereeRepositoryEloquent::class);
        $this->app->bind(ClubRepository::class, ClubRepositoryEloquent::class);
        $this->app->bind(ScoutingTouchRepository::class, ScoutingTouchRepositoryEloquent::class);
        $this->app->bind(ScoutingTouchActionRepository::class, ScoutingTouchActionRepositoryEloquent::class);
        $this->app->bind(TagRepository::class, TagRepositoryEloquent::class);
        $this->app->bind(TagOptionRepository::class, TagOptionRepositoryEloquent::class);
        $this->app->bind(CountryRepository::class, CountryRepositoryEloquent::class);
        $this->app->bind(ChallengeRepository::class, ChallengeRepositoryEloquent::class);
        $this->app->bind(UserRepository::class, UserRepositoryEloquent::class);
        $this->app->bind(\App\Scouting\Repositories\Contracts\Reports\ReportRepository::class, \App\Scouting\Repositories\Reports\ReportRepositoryEloquent::class);
        $this->app->bind(\App\Scouting\Repositories\Contracts\Rankings\RankingRepository::class, \App\Scouting\Repositories\Rankings\RankingRepositoryEloquent::class);
        //:end-bindings:
    }
}
