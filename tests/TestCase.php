<?php

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tymon\JWTAuth\Facades\JWTAuth;

abstract class TestCase extends Illuminate\Foundation\Testing\TestCase
{
    use DatabaseMigrations;
    /**
     * The base URL to use while testing the application.
     *
     * @var string
     */
    protected $baseUrl = 'http://localhost';

    /**
     * Creates the application.
     *
     * @return \Illuminate\Foundation\Application
     */
    public function createApplication()
    {
        $app = require __DIR__ . '/../bootstrap/app.php';

        $app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

        return $app;
    }

    protected function token($user)
    {
        return JWTAuth::fromUser($user);
    }

    protected function headers($user = null, $token = null)
    {
        $headers = ['Accept' => 'application/json', 'X-Requested-With' => 'XMLHttpRequest'];

        if (!is_null($user) && !$token) {
            $token = JWTAuth::fromUser($user);
            $headers['Authorization'] = 'Bearer ' . $token;
        } elseif ($token) {
            $headers['Authorization'] = 'Bearer ' . $token;
        }

        return $headers;
    }

    public function authGet($uri, $user = null)
    {
        return parent::get($uri . '?token=' . $this->token($user), $this->headers($user));
    }

    public function authPost($uri, $data, $user = null)
    {
        return parent::post($uri . '?token=' . $this->token($user), $data, $this->headers($user));
    }

    public function authPut($uri, $data, $user = null)
    {
        return parent::put($uri . '?token=' . $this->token($user), $data, $this->headers($user));
    }

    public function authDelete($uri, $data, $user = null)
    {
        return parent::delete($uri . '?token=' . $this->token($user), $data, $this->headers($user));
    }
}
