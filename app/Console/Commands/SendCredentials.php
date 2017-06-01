<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Maatwebsite\Excel\Facades\Excel;
use App\Scouting\Entities\Users\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\CredentialCreated;

class SendCredentials extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'credentials:send';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        Excel::load(resource_path().'\excel\suscriptores.xlsx', function($reader) {

            $excel = $reader->get();
            // iteracción
            $reader->each(function($row) {
                $user = new User;
                $user->country_id = $row->country_id;
                $user->username = $row->username;
                $user->first_name = $row->first_name;
                $user->last_name = $row->last_name;
                $user->email = $row->email;
                $user->password = bcrypt('secret');
                $user->number_invitations = '10';
                $user-> active = '1';
                $user->save();
                Mail::to($row->email)->send(new CredentialCreated($user));

            });

        })->get();
    }
}
