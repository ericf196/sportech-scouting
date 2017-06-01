@component('mail::layout')
{{-- Header --}}
@slot('header')
@component('mail::header', ['url' => config('app.url')])
<img src="{{$image}}" alt="scouting logo">
@endcomponent
@endslot

<<<<<<< HEAD
<p>Te han invitado a Registrarte en Scouting37.</p>
<div class="">
    <img width="300px" src="assets/img/logo.png" alt="">
    <h1>Data analytics for fencers</h1>
</div>

<a href="{{ url('http://localhost:4200/register?token='.$invite->token) }}">Click</a>  para registrarse!!
=======
{{-- Body --}}
<!-- Body here -->

{{-- Subcopy --}}
@slot('subcopy')
@component('mail::subcopy')
# Hi, Welcome to Scouting37

{{$user->first_name}} {{$user->last_name}} ({{$user->email}}) Has invited you to Register in Scouting37.

To register please click in the next link:

@component('mail::button', ['url' => '','color' => 'red'])
Register
@endcomponent
Thanks,<br>
Scouting37
@endcomponent
@endslot


{{-- Footer --}}
@slot('footer')
@component('mail::footer')
© 2017 Scouting37. All rights reserved.

@endcomponent
@endslot
@endcomponent
>>>>>>> 82f43e116388fbd85dfea49415455aec94a10e6c
