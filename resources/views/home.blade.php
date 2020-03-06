<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="">
    <title>سایت</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/flexslider.css">
    <link rel="stylesheet" href="../css/jquery.fancybox.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/responsive.css">
    <link rel="stylesheet" href="../css/animate.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

    <link href="//fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
    <meta name="csrf-token" value="{{ csrf_token() }}" />
</head>

<body dir="rtl">

    <div id="app">
    </div>
    
    <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>

    <footer class="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">

                    <div class="footer-col col-md-4">
                        <h5>ارتباط با ما</h5>
                        <p>{{$contactus}}</p>
                    </div>
                    <div class="footer-col col-md-4">

                    </div>
                    <div class="footer-col col-md-4">
                        <h5> درباره </h5>
                        <p>{{$aboutus}}</p>
                    </div>

                </div>
            </div>
        </div>
        <!-- footer top -->
        <div class="footer-bottom">
            <div class="container">
                <div class="col-md-12">
                    <p>
                        {{$copyright}}
                    </p>
                </div>
            </div>
        </div>
    </footer>
    <!-- footer -->

</body>

</html>