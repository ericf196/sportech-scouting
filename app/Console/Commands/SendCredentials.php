<?php

namespace App\Console\Commands;

use App\Mail\UserCredentials;
use App\Scouting\Entities\Athletes\Athlete;
use App\Scouting\Entities\Sports\Category;
use App\Scouting\Entities\Sports\Specialty;
use App\Scouting\Entities\Sports\Sport;
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
    protected $signature = 'credentials:send {file}';

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
        $file = $this->argument('file');

        Excel::load(resource_path() . '/csv/' . $file . '.csv', function ($reader) {
            $count = 0;
            $excel = $reader->get();
            $fencing = Sport::where('name->en', 'Fencing')->first();
            $category = Category::where('name->en', 'Adult')->first();
            $bar = $this->output->createProgressBar(count($reader));

            $reader->each(function ($row) use ($count, $fencing, $category, $bar) {
                try {
                    \DB::beginTransaction();
                    if (!User::where('email', $row->email)->first()) {
                        $name = explode(' ', $row->name);
                        $firstName = '';
                        $lastName = '';
                        if (count($name)) {
                            $firstName = $name[0];
                            $lastName = count($name) > 1 ? $name[1] : '';
                        }
                        $count++;
                        if ($row->weapon == 'sabre') {
                            $specialty = Specialty::where('name->en', 'Sabre')->first();
                        } else {
                            $specialty = Specialty::where('name->en', ucfirst($row->weapon))->first();
                        }
                        $password = str_random(8);
                        $user = new User;
                        $user->username = str_slug($firstName . ' ' . $lastName);
                        $user->first_name = $firstName;
                        $user->last_name = $lastName;
                        $user->email = $row->email;
                        $user->password = bcrypt($password);
                        $user->number_invitations = '10';
                        $user->country_id = $row->country_id;
                        $user->sport_id = $fencing->id;
                        $user->specialty_id = $specialty->id;
                        $user->gender = 'm';
                        $user->active = '1';
                        $user->save();
                        Mail::to($row->email)->send(new UserCredentials($user, $password));
                    } else {
                        $this->info('Usuario existente ' . $row->email);
                    }
                    $bar->advance();
                    \DB::commit();
                } catch (\Exception $e) {
                    \DB::rollBack();
                    $bar->advance();
                    $this->error($e->getMessage());
                }
            });
            $bar->finish();

        })->get();

    }
}
