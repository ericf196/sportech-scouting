<?php

use App\Scouting\Repositories\Contracts\Challenges\ChallengeRepository;
use Illuminate\Database\Seeder;

class ChallengesSeeder extends Seeder
{

    /**
     * @var ChallengeRepository
     */
    private $repository;

    public function __construct(ChallengeRepository $repository)
    {

        $this->repository = $repository;
    }

    public function run()
    {
        $challenges = [
            [
                'name'        => ['es' => 'Desafio 1', 'en' => 'Challenge 1'],
                'description' => ['es' => 'Desafio 1', 'en' => 'Challenge 1'],
                'points'      => 1000,
                'difficulty'  => 1,
            ],
            [
                'name'        => ['es' => 'Desafio 2', 'en' => 'Challenge 2'],
                'description' => ['es' => 'Desafio 2', 'en' => 'Challenge 2'],
                'points'      => 500,
                'difficulty'  => 0,
            ],
            [
                'name'        => ['es' => 'Desafio 3', 'en' => 'Challenge 3'],
                'description' => ['es' => 'Desafio 3', 'en' => 'Challenge 3'],
                'points'      => 1000,
                'difficulty'  => 1,
            ],
            [
                'name'        => ['es' => 'Desafio 4', 'en' => 'Challenge 4'],
                'description' => ['es' => 'Desafio 4', 'en' => 'Challenge 4'],
                'points'      => 500,
                'difficulty'  => 0,
            ],
            [
                'name'        => ['es' => 'Desafio 5', 'en' => 'Challenge 5'],
                'description' => ['es' => 'Desafio 5', 'en' => 'Challenge 5'],
                'points'      => 2000,
                'difficulty'  => 2,
            ],
            [
                'name'        => ['es' => 'Desafio 6', 'en' => 'Challenge 6'],
                'description' => ['es' => 'Desafio 6', 'en' => 'Challenge 6'],
                'points'      => 1000,
                'difficulty'  => 1,
            ],
            [
                'name'        => ['es' => 'Desafio 7', 'en' => 'Challenge 7'],
                'description' => ['es' => 'Desafio 7', 'en' => 'Challenge 7'],
                'points'      => 2000,
                'difficulty'  => 2,
            ],
            [
                'name'        => ['es' => 'Desafio 8', 'en' => 'Challenge 8'],
                'description' => ['es' => 'Desafio 8', 'en' => 'Challenge 8'],
                'points'      => 2000,
                'difficulty'  => 2,
            ],
        ];

        foreach ($challenges as $challenge) {
            $this->repository->create($challenge);
        }
    }

}