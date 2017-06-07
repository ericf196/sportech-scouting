<!DOCTYPE html>
<html lang="en-US">
<head>
    <style>
        .myButton {
            -moz-box-shadow:inset 0px 1px 3px 0px #b89991;
            -webkit-box-shadow:inset 0px 1px 3px 0px #b89991;
            box-shadow:inset 0px 1px 3px 0px #b89991;
            background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #1cffc2), color-stop(1, #6c7c7c));
            background:-moz-linear-gradient(top, #1cffc2 5%, #6c7c7c 100%);
            background:-webkit-linear-gradient(top, #1cffc2 5%, #6c7c7c 100%);
            background:-o-linear-gradient(top, #1cffc2 5%, #6c7c7c 100%);
            background:-ms-linear-gradient(top, #1cffc2 5%, #6c7c7c 100%);
            background:linear-gradient(to bottom, #1cffc2 5%, #6c7c7c 100%);
            filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#1cffc2', endColorstr='#6c7c7c',GradientType=0);
            background-color:#1cffc2;
            -moz-border-radius:5px;
            -webkit-border-radius:5px;
            border-radius:5px;
            border:1px solid #566963;
            display:inline-block;
            cursor:pointer;
            color:#ffffff;
            font-family:Arial;
            font-size:25px;
            font-weight:bold;
            padding:14px 76px;
            text-decoration:none;
            text-shadow:0px -1px 0px #2b665e;
        }

        .myButton:hover {
            background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #6c7c7c), color-stop(1, #1cffc2));
            background:-moz-linear-gradient(top, #6c7c7c 5%, #1cffc2 100%);
            background:-webkit-linear-gradient(top, #6c7c7c 5%, #1cffc2 100%);
            background:-o-linear-gradient(top, #6c7c7c 5%, #1cffc2 100%);
            background:-ms-linear-gradient(top, #6c7c7c 5%, #1cffc2 100%);
            background:linear-gradient(to bottom, #6c7c7c 5%, #1cffc2 100%);
            filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#6c7c7c', endColorstr='#1cffc2',GradientType=0);
            background-color:#6c7c7c;
        }
        .myButton:active {
            position:relative;
            top:1px;
        }
    </style>
</head>
<body>

<h1>Hello!</h1>
<p>You are receiving this email because we received a password reset request for your account.</p>

<!--<a href="http://localhost:4200/recoverpassword" class="myButton">Reset password</a>-->
<a href="{{ url('http://localhost:4200/recoverpassword/'.$resetPassword->token) }}" class="myButton">Reset password</a>

<p>{{ $resetPassword->token }}</p>
<p>if you did not request a password reset, no further action is required.</p>
</body>
</html>





