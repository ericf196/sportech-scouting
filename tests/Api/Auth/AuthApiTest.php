<?php

use App\Scouting\Entities\Users\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tymon\JWTAuth\Facades\JWTAuth;

/*
 * @group auth
 */

class AuthApiTest extends BrowserKitTestCase
{
    use DatabaseTransactions;

    /**
     * @test
     * @group auth
     */
    public function it_login_an_user()
    {
        $user = factory(User::class)->create();
        $token = JWTAuth::fromUser($user);

        $response = $this->post('api/auth/login', ['email' => $user->email, 'password' => 'secret'], $this->headers())
            ->assertResponseOk()
            ->seeHeader('Authorization', 'Bearer ' . $token);

        $response = $response->decodeResponseJson();

        $this->assertEquals($token, $response['token']);
    }

    /**
     * @test
     * @group auth
     */
    public function it_return_error_if_an_user_is_inactive()
    {
        $user = factory(User::class)->create(['active' => 0]);
        $response = $this->post('api/auth/login', ['email' => $user->email, 'password' => 'secret'], $this->headers())
            ->assertResponseStatus(401)
            ->seeJson([
                    "error" => "This user is marked as inactive"
                ]
            );
    }

    /**
     * @test
     * @group auth
     */
    public function it_return_error_if_wrong_credentials_are_submitted()
    {
        $user = factory(User::class)->create();
        $response = $this->post('api/auth/login', ['email' => $user->email, 'password' => 'secret2'], $this->headers())
            ->assertResponseStatus(401)
            ->seeJson([
                    "error" => "The provided credentials does not match our records"
                ]
            );
    }

    /**
     * @test
     * @group auth
     */
    public function it_return_error_if_email_format_is_invalid()
    {
        $user = factory(User::class)->create();
        $response = $this->post('api/auth/login', ['email' => 'hola', 'password' => 'secret2'], $this->headers())
            ->assertResponseStatus(422)
            ->seeJsonContains([
                    "errors" => ["The email must be a valid email address."]
                ]
            );
    }

    /**
     * @test
     * @group auth
     */
    public function it_return_error_if_no_data_is_submitted()
    {
        $user = factory(User::class)->create();
        $response = $this->post('api/auth/login', [], $this->headers())
            ->assertResponseStatus(422)
            ->seeJsonContains([
                    "errors" => ["The email field is required.", "The password field is required."],
                ]
            );
    }

    /**
     * @test
     * @group auth
     */
    public function it_logout_an_user()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user);
        $response = $this->post('api/auth/logout', [], $this->headers($user))->assertResponseOk()
            ->seeJson([
                    "success" => true,
                ]
            );
    }

    /**
     * @test
     * @group auth
     */
    public function it_get_the_logged_in_user()
    {
        $user = factory(User::class)->create();
        $response = $this->get('api/auth/user', $this->headers($user))->assertResponseOk()
            ->seeJson([
                    "data" => [
                        'username'   => $user->username,
                        'first_name' => $user->first_name,
                        'last_name'  => $user->last_name,
                        'full_name'  => $user->first_name . ' ' . $user->last_name,
                        'id'         => $user->id
                    ],
                ]
            );
    }

    /**
     * @test
     * @group auth
     */
    public function it_return_error_when_get_unauthticated_user()
    {
        $response = $this->get('api/auth/user', $this->headers())->assertResponseStatus(400)
            ->seeJson(['error' => 'token_not_provided']);
    }

    /**
     * @test
     * @group auth
     */
    public function it_return_error_when_get_user_with_invalid_token()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user);
        $response = $this->post('api/auth/logout', [], $this->headers($user))->assertResponseOk()
            ->seeJson([
                    "success" => true,
                ]
            );
        $response = $this->get('api/auth/user?token=jjj', $this->headers(null, 'jjj'))->assertResponseStatus(401)
            ->seeJson(['error' => 'token_invalid']);
    }
}