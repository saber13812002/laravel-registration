<!-- <%@ Page Language="C#" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="preview_dotnet_templates_with_out_masterpages_one_page_Scroll_nav_index" %> -->

{{-- @extends('themedata.layout') --}}

@section('content')

<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="">
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>سایت</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/flexslider.css">
    <link rel="stylesheet" href="css/jquery.fancybox.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/animate.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
</head>

<body>
    <form id="form1" runat="server">
        <section class="banner" role="banner">

            <header id="header">
                <div class="header-content clearfix">
                    <a class="logo" href="#">
                        <img src="images/logo.png" alt=""></a>
                    <nav class="navigation" role="navigation">
                        <ul class="primary-nav">
                            <li><a class="login" href="/reg">ورود/ثبت نام</a></li>
                        </ul>
                    </nav>
                    <a href="#" class="nav-toggle">منو<span></span></a>
                </div>
                <!-- header content -->
            </header>
            <!-- header -->

            <div class="container">
                <div class="col-md-10 col-md-offset-1">
                    <div class="banner-text text-center">
                        <h1>سامانه </h1>
                    </div>
                    <!-- banner text -->
                </div>
            </div>
        </section>
        <!-- /banner -->

        <!-- features -->
        @if(count($news)>0)
        <section id="features" class="features section">
            <div class="container">
                <div class="row">
                    <div class="headingsyle">
                        <h1><span>اطلاعیه</span></h1>
                    </div>
                    <div class="col-md-12 col-sm-12 feature text-center">

                        @foreach ($news as $new)
                            <div class="feature-content">
                                <p class="info" style="direction: rtl;">
                                    {{-- {{$new->title}} --}}
                                    {{$new->body}}
                                    {{-- <li><a href='/news/{{$new->slug}}'>متن کامل خبر</a></li> --}}
                                </p>
                            </div>
                        @endforeach

                    </div>
                </div>
            </div>
        </section>
        @endif
        <!-- /features -->

        <!-- tables -->
        @if(count($iframes)>0)
        <section id="tables" class="tables section no-padding">
            <div class="container-fluid">
                <div class="row no-gutter">
                    <div class="headingsyle">
                        <h1><span>جدول مسابقات</span></h1>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 table" style="    text-align: center;">

                        @foreach ($iframes as $iframe)
                        {{-- https://widget.toornament.com/tournaments/2491521708242829312/?_locale=en_US&theme= --}}
                        <iframe width="85%" height="360" src="{{$iframe->link}}" allowfullscreen frameborder="0"></iframe>

                        @endforeach
                    </div>
                </div>
            </div>
        </section>
        @endif
        <!-- /tables -->

        <!-- testimonials -->
        @if(count($rules)>0)
        <section id="testimonials" class="section testimonials">
            <div class="container-fluid">
                <div class="row no-gutter">
                    <div class="headingsyle">
                        <h1><span>قوانین</span></h1>
                    </div>
                </div>

                @foreach ($rules as $rule)

                <div class="col-md-3 col-sm-6 feature text-center">
                    <div class="feature-content">
                        <h5>{{$rule->title}}</h5>
                        <p>
                            <a href="/{{$rule->link}}" class="btn btn-large">دریافت</a>
                        </p>

                    </div>
                </div>

                @endforeach

            </div>
        </section>
        @endif
        <!--  -->

        <!-- works -->
        @if (count($games) > 0)
        <section id="works" class="works section no-padding">
            <div class="container-fluid">
                <div class="row no-gutter">
                    <div class="headingsyle">
                        <h1><span>بازی ها</span></h1>
                    </div>
                    @foreach ($games as $game)
                    <div class="col-lg-3 col-md-6 col-sm-6 work">
                        <a href="/{{$game->link}}" class="work-box">
                            <img src="/{{$game->link}}" alt="">
                            <div class="overlay">
                                <div class="overlay-caption">
                                    <h5>{{$game->title}}</h5>
                                    <p>{{$game->englishtitle}}</p>
                                </div>
                            </div>
                            <!-- overlay -->
                        </a>
                    </div>
                    @endforeach
                </div>
            </div>
        </section>
        @endif
        <!-- /works -->


        <!-- teams -->
        @if(count($stats)>0)
        <section id="teams" class="section teams">
            <div class="container">
                <div class="row">
                    <div class="headingsyle">
                        <h1><span>آمار بازیها</span></h1>
                    </div>

                    @foreach ($stats as $stat)
                    <div class="col-md-3 col-sm-6">
                        <div class="person">
                            <img src="/{{$stat->link}}" alt="" class="img-responsive">
                            <div class="person-content">
                                <h4><strong>{{$stat->title}}</strong></h4>
                                <h5 class="role"><strong>{{$stat->title2}}</strong></h5>
                                <p>{{$stat->title3}}<br />
                                    {{$stat->title4}}</p>
                            </div>
                            <ul class="social-icons clearfix">
                            </ul>
                        </div>
                        <!-- person -->
                    </div>
                    @endforeach
                </div>
            </div>
        </section>
        @endif
        <!-- /teams -->
        <!-- /testimonials -->


        <!-- Contact -->
        <section id="contact" class="space100">
            <div class="container">
                <div class="row">
                    <div class="headingsyle">
                        <h1><span>ثبت نام</span></h1>
                    </div>
                    <div class="text-center">
                        <h1>سامانه </h1>
                        <h3>شما میتوانید از طریق دکمه های زیر ثبت نام کنید</h3>
                        <a href="/reg" class="btn btn-large login">ورود/ثبت نام</a> 
                    </div>
                </div>
                <!-- ./end row -->
                <div class="row">
                    <div class="col-md-12">
                        <div id="main-contact-form" class="contact-form">
                            <!-- form  بخش ثبت نام رو در این قسمت کپی کن-->

                            <!-- ./form -->
                        </div>
                    </div>
                </div>
                <!-- ./end row -->
            </div>
        </section>
        <!-- End Contact -->


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
                                <h5> درباره ما</h5>
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




        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script>
            window.jQuery || document.write('<script src="js/jquery.min.js"><\/script>')
        </script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.flexslider-min.js"></script>
        <script src="js/jquery.fancybox.pack.js"></script>
        <script src="js/jquery.waypoints.min.js"></script>
        <script src="js/retina.min.js"></script>
        <script src="js/modernizr.js"></script>
        <script src="js/main.js"></script>
        <script>
            if((localStorage.getItem('wpIdeaTokenFANS')?JSON.parse(localStorage.getItem('wpIdeaTokenFANS')):2).token)
            {
                setValue('login','پروفایل');
                //setValue('reg','محیط کاربری');
            }
            else
            {
                //setValue('reg','ثبت نام');
                setValue('login','ورود/ثبت نام');
            }

            function setValue(classname,regval){
                var showHide = document.getElementsByClassName(classname);

                Array.from(showHide).forEach(element => {
                    element.innerHTML = regval;
                });
            }
        </script>
    </form>
</body>

</html>
