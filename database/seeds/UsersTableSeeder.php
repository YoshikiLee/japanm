<?php

use Illuminate\Database\Seeder;
use database\factories\UserFactory as factory;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();
        factory(App\User::class, 3)->create();
    }
}
