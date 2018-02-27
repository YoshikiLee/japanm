<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{__('messages.title')}}</title>

    <!-- Styles -->
    <link href="{{ asset( mix('css/app.css') ) }}" rel="stylesheet">
    <link href="{{ asset( mix('css/proj.css') ) }}" rel="stylesheet">
    <style>
    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 80px;
    }
    </style>
    @yield('stylesheet')
</head>
<body>
    @yield('content')
    <footer class="footer">
        <div class="container">
            <div class="text-center">
                <span class="small">{{__('messages.footer_copyright')}}</span>
            </div>
        </div>
    </footer>
    <!-- Scripts -->
    <script src="{{ asset( mix('js/app.js') ) }}"></script>
    <script src="{{ asset('js/morris-data.js') }}"></script>
    @yield('javascript')
</body>
</html>
