<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">


    </head>
    <body>
        <div id="" class="container">

            @yield('content')
            
            <!--
            <div class="row">
                <div class="cl-sm-4">
                    <h1>VUEjs - AJAX axios</h1>
                    <ul class="list-group">
                        <li v-for="item in lists" class="list-group-item">
                            item.name 
                        </li>
                    </ul>
                </div>
                <div class="col-sm-8">
                    <h1>JSON</h1>
                    <pre>
                        $ data
                    </pre>
                </div>
            </div>
        -->
        </div>
        
        <script src="{{ asset('js/app.js') }}"></script>

    </body>
</html>
