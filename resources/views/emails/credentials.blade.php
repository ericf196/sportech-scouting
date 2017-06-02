@component('mail::layout')
{{-- Header --}}
@slot('header')
@component('mail::header', ['url' => config('app.url')])
<img src="{{$image}}" alt="scouting logo">
@endcomponent
@endslot

{{-- Body --}}
<!-- Body here -->

{{-- Subcopy --}}
@slot('subcopy')
@component('mail::subcopy')
# Hi, Welcome to Scouting37

We are glad to announce the official launch of scouting37, your platform for fencing data analisys
<br><br>
CONGRTULATIONS!!! You have been selected to try the platform in our closed BETA.

Your log in credentials are:
@component('mail::panel')
Email: {{$user->email}}
Password: {{$password}}
@endcomponent

@component('mail::button', ['url' => env('FRONTEND_URL','http://scouting37.com/app'),'color' => 'red'])
Log In
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
