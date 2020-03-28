{{-- @extends('themedata.layout') --}}

@section('content')

<!DOCTYPE html>
<!-- saved from url=(0025)/ -->
<html lang="fa">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<style class="vjs-styles-defaults">
		.video-js {
			width: 300px;
			height: 150px;
		}

		.vjs-fluid {
			padding-top: 56.25%
		}
	</style>

	<meta name="author" content=".ir" xmlns:util="xalan://ir.irrci.Core">
	<meta name="publisher" content="www..ir">
	<meta name="language" content="Persian, FA">
	<meta name="rating" content="General">
	<meta name="copyright" content="© 2014 .ir">
	<meta name="expires" content="never">
	<meta name="robots" content="INDEX,FOLLOW">
	<meta name="dc.publisher" content="www..ir">
	<link rel="shortcut icon" href="favicon.ico">
	<title>پایگاه اطلاع رسانی بنیاد</title>
	<meta name="keywords" content="بنیاد حیات طیبه علمای جهان اسلام">
	<meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="@khamenei_ir">
	<meta name="twitter:title" content=".ir">
	<meta name="twitter:description" content="پایگاه اطلاع رسانی بنیاد">
	<meta name="twitter:creator" content="@khamenei_ir">
	<meta name="twitter:image" content="./themes/fa_def/images/logo/125x125.gif">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style type="text/css">
		@font-face {
			font-family: 'bnazanin';
			src: './assets/themes/fonts/bnazanin.ttf';
		}

		.dideo-tooltip {
			position: relative;
			display: inline-block;
			font-family: 'bnazanin';
			font-size: 0;
			padding: 3px 5px;
		}

		.dideo-tooltip .tooltiptext {
			visibility: hidden;
			font-family: 'bnazanin';
			width: 120px;
			font-size: 13px;
			background-color: black;
			color: #fff;
			text-align: center;
			border-radius: 6px;
			padding: 5px 0;
			position: absolute;
			z-index: 1;
			top: 0px;
			left: 110%;
		}

		.dideo-img {
			width: 18px;
			height: 18px;
			margin-bottom: -3px;
			filter: drop-shadow(0px 0px 2px #adadad);
			webkit: filter: drop-shadow(0px 0px 2px #adadad);
		}

		.dideo-tooltip .tooltiptext::after {
			content: "";
			position: absolute;
			top: 50%;
			right: 100%;
			margin-top: -5px;
			border-width: 5px;
			border-style: solid;
			border-color: transparent black transparent transparent;
		}

		.dideo-tooltip:hover .tooltiptext {
			visibility: visible;
		}

		.srg {
			min-width: 750px;
		}
	</style>
</head>

<body id="bd">

	<span style="display:none">home</span>

	<link rel="search" type="application/opensearchdescription+xml" href="./opensearch.xml" title=".ir Search">

	<link href="./rss?t=99" rel="alternate" type="application/rss+xml" title="تلکس خبری">
	<link href="./others-rss" rel="alternate" type="application/rss+xml" title="دیگران">
	<link href="./podcast" rel="alternate" type="application/rss+xml" title="پادکست">
	<link href="./rss?t=1" rel="alternate" type="application/rss+xml" title="اخبار">
	<link href="./rss?t=2" rel="alternate" type="application/rss+xml" title="بیانات">
	<link href="./rss?t=4" rel="alternate" type="application/rss+xml" title="پيام ها و نامه ها">
	<link href="./rss?t=6" rel="alternate" type="application/rss+xml" title="آلبوم تصاوير">
	<link href="./rss?t=8" rel="alternate" type="application/rss+xml" title="صوت بیانات و کلیپ صوتی">
	<link href="./rss?t=11" rel="alternate" type="application/rss+xml" title="ويژه نامه ها">




	<link rel="stylesheet" type="text/css" href="/assets/cssjs/reset.min.css">
	<link href="/assets/cssjs/video-js.min.css" type="text/css" rel="stylesheet">
	<link href="/assets/cssjs/video-player.css" type="text/css" rel="stylesheet">
	<link href="/assets/cssjs/audio-player.css" type="text/css" rel="stylesheet">
	<link href="/assets/cssjs/styles.css" type="text/css" rel="stylesheet">
	<link href="/assets/cssjs/global.css" type="text/css" rel="stylesheet">


	<style type="text/css">
		/*
				
				#photo-list .box-inner-vertical li a img,
				#audio-list .box-inner-vertical li a img,
				#video-list .box-inner-vertical li a img,
				.divAds,
				#selections-list li img,
				
				.divTitr1,
				.divTitr2{
					-moz-filter: grayscale(90%);
					-webkit-filter: grayscale(90%);
					-ms-filter: grayscale(90%);
					-o-filter: grayscale(90%);
					filter: grayscale(90%);
					
					-moz-transition:all ease-out 0.3s;
					-webkit-transition:all ease-out 0.3s;
					-ms-transition:all ease-out 0.3s;
					-o-transition:all ease-out 0.3s;
					transition:all ease-out 0.3s;
				}
				
				.divTitr1:hover,.divTitr2:hover, .divAds:hover{
					-moz-filter: grayscale(0%);
					-webkit-filter: grayscale(0%);
					-ms-filter: grayscale(0%);
					-o-filter: grayscale(0%);
					filter: grayscale(0%);
				}
				*/
		#features .divTitr1 {
			position: relative;
		}

		#features iframe {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			border: 0;
			z-index: 9999999
		}

		#scroll-top {
			position: fixed;
			width: 50px;
			height: 50px;
			border: 1px solid rgba(200, 216, 241, 0.5);
			border-radius: 3px;
			box-shadow: 0 0 5px #000;
			bottom: 30px;
			right: -55px;
			cursor: pointer;
			background: #103B7F;
			-moz-transition: all ease-out 0.3s;
			-webkit-transition: all ease-out 0.3s;
			-ms-transition: all ease-out 0.3s;
			-o-transition: all ease-out 0.3s;
			transition: all ease-out 0.3s;
			/*
					-moz-filter: grayscale(90%);
					-webkit-filter: grayscale(90%);
					-ms-filter: grayscale(90%);
					-o-filter: grayscale(90%);
					filter: grayscale(90%);
					*/
		}

		/*
				div.footerLogo18x div{
					-moz-filter: grayscale(90%);
					-webkit-filter: grayscale(90%);
					-ms-filter: grayscale(90%);
					-o-filter: grayscale(90%);
					filter: grayscale(90%);
				}
				*/
		#scroll-top i {
			display: block;
			width: 100%;
			height: 100%;
			background: url('data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDg2LjAwMiA4Ni4wMDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDg2LjAwMiA4Ni4wMDI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KPGc+Cgk8cGF0aCBkPSJNODAuMDkzLDY0Ljk5OWMxLjM1MywxLjMzOCwzLjU0NCwxLjMzOCw0Ljg5NiwwYzEuMzUtMS4zMzgsMS4zNTItMy41MDYsMC00Ljg0N0w0NS40NDUsMjEuMDA0ICAgYy0xLjM1Mi0xLjMzOC0zLjU0MS0xLjMzOC00Ljg5MiwwTDEuMDEzLDYwLjE1MmMtMS4zNSwxLjM0MS0xLjM1MiwzLjUwNywwLDQuODQ3YzEuMzUyLDEuMzM4LDMuNTQzLDEuMzM4LDQuODk1LDBsMzcuMDkxLTM1LjcwMyAgIEw4MC4wOTMsNjQuOTk5eiIgZmlsbD0iI2Y0ZjRmNCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=') center center no-repeat;
			-moz-transform: rotate(-90deg);
			-webkit-transform: rotate(-90deg);
			-ms-transform: rotate(-90deg);
			-o-transform: rotate(-90deg);
			transform: rotate(-90deg);

			-moz-transition: all ease-out 0.3s;
			-webkit-transition: all ease-out 0.3s;
			-ms-transition: all ease-out 0.3s;
			-o-transition: all ease-out 0.3s;
			transition: all ease-out 0.3s;
			-moz-transition-delay: 0.05s;
			-webkit-transition-delay: 0.05s;
			-ms-transition-delay: 0.05s;
			-o-transition-delay: 0.05s;
			transition-delay: 0.05s;
		}

		#scroll-top.show {
			right: 30px;
		}

		#scroll-top.show i {
			-moz-transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
			-ms-transform: rotate(0deg);
			-o-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		/*
				div.footerLogo18x div a img, #scroll-top, .navigate-up, .navigate-down, #multimedia .box-head-bg, #selections-list #points1{
					-webkit-filter:grayscale(90%);
					-moz-filter:grayscale(90%);
					-ms-filter:grayscale(90%);
					-o-filter:grayscale(90%);
					filter:grayscale(90%);
				}
				*/
		@media only screen and (max-width: 1065px) {
			#scroll-top {
				bottom: -1px;
				-moz-opacity: 0.5;
				-webkit-opacity: 0.5;
				-ms-opacity: 0.5;
				-o-opacity: 0.5;
				opacity: 0.5;
			}

			#scroll-top.show {
				bottom: -1px;
				right: -1px;
			}
		}
	</style>
	<link rel="stylesheet" type="text/css" href="/assets/cssjs/res-init.min.css">
	<link rel="stylesheet" type="text/css" href="/assets/cssjs/res.min.css">
	<!-- <script type="text/javascript" async="" src="http://www.google-analytics.com/ga.js"></script>
	<script type="text/javascript" language="JavaScript"> -->
	<!-- var pageName = "home";var box1T = 0;var box1State = 1;var box2T = 0;var box2State = 1;var pageName = "home";var newsTypeID = "";var lastNewsYear = "";
	</script> -->
	<!-- <script type="text/javascript" src="/assets/cssjs/videojs-ie8.min.js"></script> -->
	<script type="text/javascript" src="/assets/cssjs/jquery-1.6.2.min.js"></script>
	<!-- <script type="text/javascript" src="/assets/cssjs/activity.js"></script> -->
	<style>
		.divTitr2,
		.divTitr1 {
			position: relative
		}
	</style>
	<meta content="app-id=968842773" name="apple-itunes-app">


	<div id="scroll-top" class="">
		<i class="icon-arrow-top"></i>
	</div>
	<div id="wrapper">
		<div id="topmenu">
			<div class="tcontainer">
				<div class="gd_3">
					<div class="top-menu">

						<a class="topmenu-index" title="صفحه اصلی" href="/"></a>
						<a class="topmenu-others" title="دیگران" href="./others"></a>
						<a class="topmenu-tag" title="کلیدواژه" href="./tag"></a>
						<a class="topmenu-specials" title="صفحات ویژه" href="./others-index?type=33&amp;year=1394"></a>
						<a class="topmenu-fast" title="عضویت در سایت" href="./email-register"></a>
						<a class="topmenu-archive" title="آرشیو دسته بندی شده تمام مطالب" href="./archive"></a>
						<a class="topmenu-search" title="جستجو" href="./search"></a>
						<a class="topmenu-contacts" title="ارتباط با ما" href="./contact"></a>

					</div>
					<div id="topticker" style="overflow: hidden; position: relative; height: 20px;" class="">
						<ul style="position: absolute; margin: 0px; padding: 0px; top: 0px;">



							@if(count($news)>0)
							@foreach ($news as $new)

							<li style="margin: 0px; padding: 0px; height: 20px;">
								<a href="/news/{{$new->slug}}">{{$new->title}}</a>
							</li>

							@endforeach
							@endif

						</ul>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
		<div id="header">
			<div class="container">
				<div class="hcontainer">
					<div class="gd_3 header-inner">
						<h1 class="logo" style="left:-5px">
							<a href="/" title="صفحه اصلی"></a>
						</h1>
						<div class="logo-sign">
							<a href="/" title="صفحه اصلی"></a>
						</div>
						<div class="bismillah" style="top:7px"></div>
						<div id="header-icons" style="right:-8px">
							<div class="header-icons-inner">
								<a class="header-icon-mobile showTooltip" title="نسخه موبایل" href="/m"></a><a class="header-icon-rss showTooltip" title="نسخه آر اس اس" href="./services"></a><a class="header-icon-contacts showTooltip" title="ارتباط با ما" href="./contact"></a><a class="header-icon-about showTooltip" title="درباره ما" href="./about"></a><a class="header-icon-languages showTooltip" title="زبان های دیگر" href="http://www..ir/"></a><a class="header-icon-home showTooltip" title="صفحه اصلی" href="./index"></a>
							</div>
						</div>
						<div class="header-today" style="top: 85px; left: 56px; right:auto; text-align:left;">امروز {{$todaysdate}}</div>
					</div>
					<div class="clear"></div>
					<div class="toggle-menu-stage">
						<button type="button" class="toggle-button"><span></span><span></span><span></span></button>
						<nav class="toggle-menu-main">
							<button type="button" class="toggle-button"><span></span><span></span><span></span></button>
							<ul>
								<li>
									<a href="./">صفحه اصلی</a>
								</li>
								<li class="has-submenu">
									<a href="javascript:void(0);">اخبار</a>
									<ul>
										<li>
											<a href="./news-index">صفحه اخبار</a>
										</li>
										<li>
											<a href="./around-index">حاشیه دیدارها</a>
										</li>
										<li>
											<a href="./news-index?nt=50">روزنگار</a>
										</li>
									</ul>
								</li>
								<li class="has-submenu">
									<a href="javascript:void(0);">بیانات</a>
									<ul>
										<li>
											<a href="./speech">صفحه بيانات</a>
										</li>
										<li>
											<a href="./selected-index">گزیده بیانات</a>
										</li>
										<li>
											<a href="./speech?nt=4">پیام‌ها و نامه‌ها</a>
										</li>
										<li>
											<a href="./speech?nt=3">نقشه راه</a>
										</li>
										<li>
											<a href="./news-index?nt=49">مرور سریع</a>
										</li>
										<li>
											<a href="./news2?nt=52">پیشخوان</a>
										</li>
										<li>
											<a href="./speech?nt=32">ابلاغیه</a>
										</li>
										<li>
											<a title="آرشیو موضوعی بیانات" href="./speech-topic">موضوعی</a>
										</li>
										<li>
											<a href="./speech-quran?npt=7">قرآن</a>
										</li>
										<li>
											<a href="./speech-hadis?npt=8">حدیث</a>
										</li>
										<li>
											<a href="./speech-nahj?npt=9">نهج‌البلاغه</a>
										</li>
										<li>
											<a href="./speech-family">خانواده ایرانی</a>
										</li>
									</ul>
								</li>
								<li class="has-submenu">
									<a href="javascript:void(0);">استفتائات</a>
									<ul>
										<li>
											<a href="https://">صفحه استفتائات</a>
										</li>
										<li>
											<a href="./news-index?nt=56">رساله آموزشی</a>
										</li>
										<li>
											<a href="./page?id=7102">راهنمای فتاوا</a>
										</li>
									</ul>
								</li>
								<li class="has-submenu">
									<a href="javascript:void(0);">دیگران</a>
									<ul>
										<li>
											<a href="./others">صفحه دیگران</a>
										</li>
										<li>
											<a href="./others-index?type=12">يادداشت</a>
										</li>
										<li>
											<a href="./others-index?type=13">گفتگو</a>
										</li>
										<li>
											<a href="./others-index?type=14">خاطرات</a>
										</li>
										<li>
											<a href="./others-index?type=22">گزارش</a>
										</li>
										<li>
											<a href="./others-index?type=11">پرونده</a>
										</li>
										<li>
											<a href="./others-index?type=26">مقالات جستار</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="./archive">آرشیو پیشرفته</a>
								</li>
								<li>
									<a href="./search">جستجو</a>
								</li>
								<li class="has-submenu">
									<a href="javascript:void(0);">عکس</a>
									<ul>
										<li>
											<a href="./photo-index">صفحه عکس</a>
										</li>
										<li>
											<a href="./photo-index?type=speech">تصاویر دیدارها</a>
										</li>
										<li>
											<a href="./photo-index?type=selected">تصاویر ویژه</a>
										</li>
										<li>
											<a href="./photo-index?type=poster">پوستر/سایز اصلی</a>
										</li>
										<li>
											<a href="./news-index?nt=51">چندرسانه‌ای</a>
										</li>
									</ul>
								</li>
								<li class="has-submenu">
									<a href="javascript:void(0);">صوت</a>
									<ul>
										<li>
											<a href="./audio-index">صفحه صوت</a>
										</li>
										<li>
											<a href="./audio-index?type=speech">صوت کامل بیانات</a>
										</li>
										<li>
											<a href="./audio-index?type=selected">صوت گزیده بیانات</a>
										</li>
										<li>
											<a href="./audio-index?type=clip">کلیپ صوتی</a>
										</li>
										<li>
											<a href="./podcast">نسخه پادکست</a>
										</li>
									</ul>
								</li>
								<li class="has-submenu">
									<a href="javascript:void(0);">فیلم</a>
									<ul>
										<li>
											<a href="./video-index">صفحه فیلم</a>
										</li>
										<li>
											<a href="./video-index?type=speech">فیلم دیدارها</a>
										</li>
										<li>
											<a href="./video-index?type=selected">گزیده دیدارها</a>
										</li>
										<li>
											<a href="./video-index?type=clip">نماهنگ</a>
										</li>
										<li>
											<a href="./video-index?type=news">گزارش خبري</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="./memory-content?id=5467">زندگی نامه</a>
								</li>
								<li>
									<a href="./page?id=7100">درس خارج</a>
								</li>
								<li>
									<a href="./hadis-index">شرح حدیث</a>
								</li>
								<li>
									<a href="./memory-index">خاطرات</a>
								</li>
								<li class="has-submenu">
									<a href="javascript:void(0);">جستار</a>
									<ul>
										<li>
											<a href="./keyword-index">صفحه جستار</a>
										</li>
										<li>
											<a href="./others-index?type=26">مقالات جستار</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="./tag">کلیدواژه</a>
								</li>
								<li>
									<a href="./others-index?type=33&amp;year=1394">صفحه ویژه</a>
								</li>
								<li class="has-submenu">
									<a href="javascript:void(0);">کتاب</a>
									<ul>
										<li>
											<a href="./book">صفحه کتاب</a>
										</li>
										<li>
											<a href="./book-archive?nt=46">تلمیحات و اشارات</a>
										</li>
										<li>
											<a href="./book-archive?nt=38&amp;oid=30">کتابخانه</a>
										</li>
										<li>
											<a href="./book-archive?nt=38&amp;oid=21">انتشارات</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="./email-register">عضویت</a>
								</li>
								<li>
									<a href="./contact">ارتباط با ما</a>
								</li>
							</ul>
						</nav>
					</div>
					<div class="gd_2 menu">
						<div id="menu">
							<div class="menu-inner">
								<div id="divO" style="left: 539px; width:45px; background-position: -473px -43px;"></div>
								<a href="./" class="menu-homepage" title="صفحه اصلی"></a>
								<a href="/" class="menu-news" title="آرشیو اخبار"></a>
								<!-- <a href="./memory-content?id=5467" class="menu-biography" title="زندگی نامه آیت الله العظمی سیدعلی خامنه ای"></a><a href="./speech" class="menu-speeches" title="آرشیو بیانات"></a><a href="https://www.leader.ir/fa/services/2/%D9%81%D9%82%D9%87-%D9%88-%D8%A7%D8%AD%DA%A9%D8%A7%D9%85-%D8%B4%D8%B1%D8%B9%DB%8C" class="menu-treatise" title="استفتائات"></a>
								<a href="./page?id=7100" class="menu-kharej" title="درس خارج"></a>
								<a href="./hadis-index" class="menu-hadith" title="شرح حدیث"></a>
								<a href="./memory-index" class="menu-memories" title="آرشیو خاطرات"></a>
								<a href="./keyword-index" class="menu-keywords" title="صفحه اصلی جستار"></a> -->
								<a href="./book" class="menu-book" title="صفحه کتاب"></a>
								<a href="./photo-index" class="menu-photos" title="آرشیو تصاویر"></a>
								<a href="./audio-index" class="menu-audios" title="آرشیو صوت"></a>
								<a href="./video-index" class="menu-videos" title="آرشیو فیلم"></a>
							</div>
						</div>
						<div class="clear"></div>
						<div id="submenu" style="right: 130px;">
							<div class="submenu-inner">
								<ul rel="menu-homepage" style="display: none;">
									<li class="submenu-first">
										<a title="صفحه نخست" href="./">صفحه نخست</a>
									</li>
									<li>
										<a title="صفحه ویژه" href="./others-index?type=33">صفحه ویژه</a>
									</li>
									<li>
										<a title="دیگران" href="./others">دیگران</a>
									</li>
									<li>
										<a title="آرشیو پیشرفته" href="./archive">آرشیو پیشرفته</a>
									</li>
									<li class="submenu-last">
										<a title="درباره ما" href="./about">درباره ما</a>
									</li>
								</ul>
								<ul rel="menu-news" style="display: none;">
									<li class="submenu-first">
										<a title="آرشیو اخبار" href="./news-index">خبر</a>
									</li>
									<li>
										<a title="" href="./around-index">حاشیه دیدارها</a>
									</li>
									<li class="submenu-last">
										<a title="" href="./news-index?nt=50">روزنگار</a>
									</li>
								</ul>
								<!-- <ul rel="menu-biography" style="display: none;">
									<li class="submenu-last">
										<a title="زندگی‌نامه مختصر" href="./memory-content?id=5467">زندگی‌نامه</a>
									</li>
								</ul>
								<ul rel="menu-speeches" style="display: none;">
									<li class="submenu-first">
										<a title="" href="./speech">بيانات</a>
									</li>
									<li>
										<a title="" href="./selected-index">گزیده بیانات</a>
									</li>
									<li>
										<a title="" href="./speech?nt=4">پیام‌ها و نامه‌ها</a>
									</li>
									<li>
										<a title="" href="./speech?nt=3">نقشه راه</a>
									</li>
									<li>
										<a title="" href="./news-index?nt=49">مرور سریع</a>
									</li>
									<li>
										<a title="" href="./news2?nt=52">پیشخوان</a>
									</li>
									<li>
										<a title="" href="./speech?nt=32">ابلاغیه</a>
									</li>
									<li>
										<a title="آرشیو موضوعی بیانات" href="./speech-topic">موضوعی</a>
									</li>
									<li>
										<a title="" href="./speech-quran?npt=7">قرآن</a>
									</li>
									<li>
										<a title="" href="./speech-hadis?npt=8">حدیث</a>
									</li>
									<li>
										<a title="" href="./speech-nahj?npt=9">نهج‌البلاغه</a>
									</li>
									<li class="submenu-last">
										<a href="./speech-family">خانواده ایرانی</a>
									</li>
								</ul>
								<ul rel="menu-treatise" style="display: inline;">
									<li class="submenu-first">
										<a title="" href="https://www.leader.ir/fa/services/2/%D9%81%D9%82%D9%87-%D9%88-%D8%A7%D8%AD%DA%A9%D8%A7%D9%85-%D8%B4%D8%B1%D8%B9%DB%8C">استفتائات</a>
									</li>
									<li>
										<a title="" href="./news-index?nt=56">رساله آموزشی</a>
									</li>
									<li class="submenu-last">
										<a title="" href="./page?id=7102">راهنمای فتاوا</a>
									</li>
								</ul>
								<ul rel="menu-kharej" style="display: none;">
									<li class="submenu-last">
										<a title="" href="./page?id=7100">درس خارج</a>
									</li>
								</ul>
								<ul rel="menu-hadith" style="display: none;">
									<li class="submenu-last">
										<a title="" href="./hadis-index">شرح حدیث</a>
									</li>
								</ul>
								<ul rel="menu-memories" style="display: none;">
									<li class="submenu-last">
										<a title="" href="./memory-index">آرشیو خاطرات</a>
									</li>
								</ul>
								<ul rel="menu-keywords" style="display: none;">
									<li class="submenu-first">
										<a title="" href="./keyword-index">جستار</a>
									</li>
									<li class="submenu-last">
										<a title="" href="./others-index?type=26">مقالات جستار</a>
									</li>
								</ul> -->
								<ul rel="menu-book" style="display: none;">
									<li class="submenu-first">
										<a title="" href="./book-archive?nt=46">تلمیحات و اشارات</a>
									</li>
									<li>
										<a title="" href="./book-archive?nt=38&amp;oid=30">کتابخانه</a>
									</li>
									<li class="submenu-last">
										<a title="" href="./book-archive?nt=38&amp;oid=21">انتشارات</a>
									</li>
								</ul>
								<ul rel="menu-photos" style="display: none;">
									<li class="submenu-first">
										<a title="" href="./photo-index?type=speech">تصاویر دیدارها</a>
									</li>
									<li>
										<a title="" href="./photo-index?type=selected">تصاویر ویژه</a>
									</li>
									<li>
										<a title="" href="./photo-index?type=poster">پوستر/سایز اصلی</a>
									</li>
									<li class="submenu-last">
										<a title="" href="./news-index?nt=51">چندرسانه‌ای</a>
									</li>
								</ul>
								<ul rel="menu-audios" style="display: none;">
									<li class="submenu-first">
										<a title="" href="./audio-index?type=speech">صوت کامل بیانات</a>
									</li>
									<li>
										<a title="" href="./audio-index?type=selected">صوت گزیده بیانات</a>
									</li>
									<li>
										<a title="" href="./audio-index?type=clip">کلیپ صوتی</a>
									</li>
									<li class="submenu-last">
										<a title="" href="./podcast">نسخه پادکست</a>
									</li>
								</ul>
								<ul rel="menu-videos" style="display: none;">
									<li class="submenu-first">
										<a title="" href="./video-index?type=speech">فیلم دیدارها</a>
									</li>
									<li>
										<a title="" href="./video-index?type=selected">گزیده دیدارها</a>
									</li>
									<li>
										<a title="" href="./video-index?type=clip">نماهنگ</a>
									</li>
									<li class="submenu-last">
										<a title="" href="./video-index?type=news">گزارش خبري</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div id="search">
						<div class="header-search-form" style="background:transparent;border:none">
							<input type="button" class="header-search-button" title="جستجو" value="">
						</div>
						<div class="header-search-form">
							<input type="text" title="جستجو" class="header-search-input" id="q" name="Search" value="جستجو...">
						</div>
					</div>
					<div class="clear"></div>
				</div>
			</div>
		</div>
		<div id="features">
			<div class="container bgColor">
				<div class="divTitr1"><a href="./news-content?id=45140"><img class="divTitr1_img" src="./assets/ndata/139812201126b328f.JPG" alt="" style="display: none;"></a>
					<div style="cursor:pointer" onclick="">
						<div style="height: 4px">
							<div class="rc2"></div>
							<div class="rc1"></div>
						</div>
						<div class="div3">
							<div style="margin: 0px; color: #FFFFFF; height: 55px; padding-top: 170px;padding-right:10px;padding-left:10px;text-align:justify" dir="rtl">
								<a href="./news-content?id=45140" class="white"><b></b>
									<br>
								</a>
							</div>
						</div>
						<div style="height: 4px">
							<div class="rc3"></div>
							<div class="rc4"></div>
						</div>
					</div>
				</div>
				<div class="divTitr2" style="background:#103b7f"><a href="./speech-content?id=45076"><img class="divTitr2_img" src="./assets/ndata/139812151833f10b5.jpg" alt="" style="display: none;"></a>
					<div onclick="location.href=&#39;./speech-content?id=45076&#39;;">
						<div style="height: 4px">
							<div class="rc2"></div>
							<div class="rc1"></div>
						</div>
						<div class="div3" style="cursor:pointer">
							<div style="margin: 0px; color: #000000; ; padding-top: 87px; padding-right: 7px; padding-left: 7px;" dir="rtl">
								<a href="./speech-content?id=45076"></a>
								<br>
								<div style="text-align:justify">
									<br>
									<br>
									<br>
									<br>
									<br>
									<br>
									<br>
									&nbsp;&nbsp; <a href="./speech-content?id=45076"><span style="color:#ffffff;">بیانات</span></a><span style="color:#ffffff;"> | </span><a href="./photo-album?id=45066"><span style="color:#ffffff;">عکس</span></a><span style="color:#ffffff;"> | </span><a href="./video-content?id=45089"><span style="color:#ffffff;">فیلم</span></a>
								</div>
							</div>
						</div>
						<div style="height: 4px">
							<div class="rc3"></div>
							<div class="rc4"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="latest">
			<div class="container">
				<div class="gd_2">
					<div id="selections" class="box">
						<div class="blue-curve-tl"></div>
						<div class="blue-curve-tr"></div>
						<div class="blue-curve-bl"></div>
						<div class="blue-curve-br"></div>
						<div class="box-head">
							<div class="box-head-bg">
								<h3 class="box-title">
									<a href="./news-index?nt=45" title="برگزيده ها"><span class="box-icon selection-glossy-icon"></span></a>
								</h3>
								<div class="subscribe">
									<a class="rss-icon" href="./rss?t=45" title="آرس اس اس برگزيده‌ها"></a><a class="add-icon" href="./news-index?nt=45" title="آرشيو"></a>
								</div>
							</div>
						</div>
						<div class="box-body">
							<div id="selections-list" class="box-inside-wrapper" rel="next" style="direction: rtl;">
								<ul class="box-inner-horizontal">
									<li style="float: right;">
										<a href="./redirect?id=45134&amp;u=./video-content?id=45127" title="1398/12/16"><img alt="توصیه‌های رهبر انقلاب درباره مقابله با کرونا" src="./assets/ndata/smps.jpg"><span>توصیه‌های رهبر انقلاب درباره مقابله با کرونا</span></a>
									</li>
									<li style="float: right;">
										<a href="./redirect?id=45132&amp;u=./video-content?id=45129" title="1398/12/16"><img alt="رزمایش همدلی در مقابله با کرونا" src="./assets/ndata/smps(1).jpg"><span>رزمایش همدلی در مقابله با کرونا</span></a>
									</li>
									<li style="float: right;">
										<a href="./redirect?id=45122&amp;u=./audio-content?id=45106" title="1398/12/16"><img alt="کلیپ صوتی | در سختی‌ها، پروردگارت را یاد کن" src="./assets/ndata/smps(2).jpg"><span>کلیپ صوتی | در سختی‌ها، پروردگارت را یاد کن</span></a>
									</li>
									<li style="float: right;">
										<a href="./redirect?id=45125&amp;u=./photo-album?id=45110" title="1398/12/15"><img alt="با صحیفه سجادیه انس داشته باشید" src="./assets/ndata/smps(3).jpg"><span>با صحیفه سجادیه انس داشته باشید</span></a>
									</li>
									<li style="float: right;">
										<a href="./redirect?id=45124&amp;u=./photo-album?id=45108" title="1398/12/15"><img alt="توصیه‌های رهبر انقلاب در مقابله با کرونا" src="./assets/ndata/smps(4).jpg"><span>توصیه‌های رهبر انقلاب در مقابله با کرونا</span></a>
									</li>
									<li style="float: right;">
										<a href="./redirect?id=44849&amp;u=./message-content?id=45111" title="1398/12/15"><img alt="پیام تسلیت در پی درگذشت حجت‌الاسلام محسن حبیبی" src="./assets/ndata/smps(5).jpg"><span>پیام تسلیت در پی درگذشت حجت‌الاسلام محسن حبیبی</span></a>
									</li>
									<li style="float: right;">
										<a href="./redirect?id=44849&amp;u=./speech-content?id=45094" title="1398/12/14"><img alt="شرح حدیثی قدسی درباره اهمیت دعا کردن" src="./assets/ndata/smps(6).jpg"><span>شرح حدیثی قدسی درباره اهمیت دعا کردن</span></a>
									</li>
									<li style="float: right;">
										<a href="./redirect?id=44849&amp;u=./audio-content?id=45090" title="1398/12/14"><img rel="./assets/ndata/news/44849/smps.jpg" alt="کلیپ صوتی | جهادگران عرصه سلامت" src="./assets/ndata/smps(7).jpg"><span>کلیپ صوتی | جهادگران عرصه سلامت</span></a>
									</li>
									<li style="float: right;">
										<a href="./redirect?id=44849&amp;u=./video-content?id=45085" title="1398/12/12"><img rel="./assets/ndata/news/44849/smps.jpg" alt="بین سطورِ کرونا در آمریکا" src="./assets/ndata/smps(8).jpg"><span>بین سطورِ کرونا در آمریکا</span></a>
									</li>
									<li style="float: right;">
										<a href="./redirect?id=44849&amp;u=./news-content?id=45082" title="1398/12/12"><img rel="./assets/ndata/news/44849/smps.jpg" alt="ثبت نام دوره تربیت پژوهشگر معارف انقلاب اسلامی" src="./assets/ndata/smps(9).jpg"><span>ثبت نام دوره تربیت پژوهشگر معارف انقلاب اسلامی</span></a>
									</li>
									<li style="float: right;">
										<a href="./redirect?id=44849&amp;u=./video-content?id=45056" title="1398/12/12"><img rel="./assets/ndata/news/44849/smps.jpg" alt="نگاهی به ابلاغیه سیاست‌های کلی سلامت" src="./assets/ndata/smps(10).jpg"><span>نگاهی به ابلاغیه سیاست‌های کلی سلامت</span></a>
									</li>
									<li style="float: right;">
										<a href="./redirect?id=44849&amp;u=./video-content?id=45059" title="1398/12/12"><img rel="./assets/ndata/news/44849/smps.jpg" alt="آمریکا غرق خواهد شد" src="./assets/ndata/smps(11).jpg"><span>آمریکا غرق خواهد شد</span></a>
									</li>
									<li class="__last" style="width: 1px; height: 1px; visibility: hidden; float: right;"></li>
								</ul>
								<div style="position:absolute; margin:97px 225px 0 0;" id="points1"></div>
							</div>
							<a class="navigate-right-big2 disabled" id="navigate-right-selections"></a><a class="navigate-left-big2" id="navigate-left-selections"></a>
						</div>
					</div>
				</div>
				<div class="gd_1">
					<div id="latest-events" class="box">
						<div class="box-head">
							<div class="box-head-bg">
								<h3 class="box-title">
									<a href="./news-index" title="آرشیو اخبار"><span class="box-icon latesst-glossy-icon"></span></a>
								</h3>
								<div class="navigation" style="right:262px">
									<a class="navigate-up disabled" id="navigate-up-latesst"><span>Up</span></a><a class="navigate-down" id="navigate-down-latesst"><span>Down</span></a>
								</div>
							</div>
						</div>
						<div class="box-body">
							<div id="latesst" class="box-inside-wrapper" style="height: 99px" rel="next">
								<ul class="box-inner-vertical list-items">
									<li>
										<a href="./news-content?id=45140" title="1398/12/19">سخنرانی نوروزی رهبر انقلاب در حرم مطهر رضوی برگزار نمی‌شود</a>
									</li>
									<li>
										<a href="./news-content?id=45137" title="1398/12/18">توصیه‌ معنوی رهبر انقلاب پیرامون تعطیلی اعتکاف امسال</a>
									</li>
									<li>
										<a href="./message-content?id=45111" title="1398/12/15">پیام تسلیت در پی درگذشت حجت‌الاسلام والمسلمین محسن حبیبی</a>
									</li>
									<li>
										<a href="./news-content?id=45105" title="1398/12/15">دولت هند در مقابل هندوهای افراطی بایستد</a>
									</li>
									<li>
										<a href="./news-content?id=45093" title="1398/12/14">خط حزب‌الله ۲۲۷ | یازده دقیقه متفاوت</a>
									</li>
									<li>
										<a href="./message-content?id=45068" title="1398/12/13">پیام تسلیت در پی درگذشت دکتر میرمحمدی</a>
									</li>
									<li>
										<a href="./news-content?id=45067" title="1398/12/13">کاشت دو نهال توسط رهبر انقلاب در هفته منابع طبیعی</a>
									</li>
									<li>
										<a href="./message-content?id=45075" title="1398/12/13">پیام تسلیت در پی درگذشت پدر سرلشکر پاسدار مصطفی ایزدی</a>
									</li>
									<li>
										<a href="./message-content?id=45046" title="1398/12/10">پیام تسلیت در پی درگذشت حجت‌الاسلام والمسلمین سیدهادی خسروشاهی</a>
									</li>
									<li>
										<a href="./news-content?id=45033" title="1398/12/08">تشکر رهبر انقلاب از زحمات پزشکان و پرستاران در مبارزه با کرونا</a>
									</li>
									<li>
										<a href="./news-content?id=45032" title="1398/12/07">خط حزب‌الله ۲۲۶ | درسی مهم برای نیروهای انقلابی</a>
									</li>
									<li>
										<a href="./news-content?id=45000" title="1398/12/04">تشکر عمیق از ملت ایران در پی امتحان بزرگ و مطلوب انتخابات</a>
									</li>
									<li class="__last" style="width: 1px; height: 1px; visibility: hidden;"></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
		<div id="main">
			<div class="container">
				<div class="row1">
					<div class="gd_2">
						<div class="other-box1">
							<a href="./others" class="icon-logoType"></a><a href="./others" class="text-logoType"></a>
							<div class="right-column">
								<a href="./others-dialog?id=45142" title="1398/12/20"><span class="bmitraFont title">نماز جعفر طیار؛ اکسیر اعظم معنوی</span><span class="lead"><span style="color:#ff0000;"><span style="font-size:11px;"><strong>|</strong></span></span><span style="color:#696969;"><span style="font-size:11px;"><strong> </strong></span></span><span style="color:#696969;"><span style="font-size:11px;"><strong>حجت‌الاسلا‌م ماندگاری</strong></span></span>
										<div style="text-align: justify;">
											اگر میلیون‌ها مؤمن در این روزهای بابرکت ماه رجب نماز جعفر طیار بخوانند، تضرع و زاری بکنند، ان‌شاءالله به برکت مراقبت‌های پزشکی که اسباب عادی است و به برکت نماز جعفر طیار که اسباب معنوی است، این ویروس منحوس از مملکت ما رخت می‌بندد.</div>
									</span></a><a href="./others-dialog?id=45142" target="_blank" class="more">[متن کامل]</a>
							</div>
							<div class="left-column" style="padding-top:20px;">
								<ul>
									<li>
										<a href="./others-note?id=45139" title="1398/12/19">سهل‌انگاری در شیوع بیماری حرام شرعی است</a>
									</li>
									<li>
										<a href="./others-dialog?id=45136" title="1398/12/16">اهل دعا بن‌بست نخواهند داشت</a>
									</li>
									<li>
										<a href="./others-dialog?id=45131" title="1398/12/16">عقلانیت دینی؛ درون مایه اصلی پیام رهبری به ملت</a>
									</li>
									<li>
										<a href="./others-note?id=45114" title="1398/12/15">هند امروز چه تفاوتی با هند گاندی دارد؟</a>
									</li>
									<li>
										<a href="./others-note?id=45118" title="1398/12/15">جنایت علیه مسلمانان هند در سایه سکوت مدعیان حقوق بشر</a>
									</li>
									<li>
										<a href="./others-report?id=45072" title="1398/12/13">دعایی که رهبر انقلاب خواندن آن را در دوران شیوع بیماری توصیه کردند</a>
									</li>
									<li>
										<a href="./others-dialog?id=45057" title="1398/12/10">دستور بسیج امکانات کشور برای سلامت مردم</a>
									</li>
									<li>
										<a href="./others-dialog?id=45058" title="1398/12/10">ملت ایران در قضیه کرونا دوست و دشمن خودش را شناخت</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="gd_1" id="latest-wrapper">
						<div class="divAds" style=""><img class="divAds_img" src="./assets/ndata/13981219017c2dcb.jpg" alt="" style="display: none;">
							<a href="./video-content?id=45119">
								<div style="height:244px">
									<div style="height: 4px;font-size:0em;">
										<div class="rc2"></div>
										<div class="rc1"></div>
									</div>
									<div style="text-align:justify;padding-top: 236px;"></div>
									<div style="height: 4px;font-size:0em;">
										<div class="rc3"></div>
										<div class="rc4"></div>
									</div>
								</div>
							</a>
						</div>
					</div>
					<div class="clear"></div>
				</div>
				<div class="row2">
					<div class="gd_4">
						<div id="speeches" class="box">
							<div class="curve-tl"></div>
							<div class="curve-tr"></div>
							<div class="box-head">
								<div class="box-head-bg">
									<h3 class="box-title">
										<a href="./speech" title="بیانات"><span class="box-icon speeches-glossy-icon"></span></a>
									</h3>
									<div class="navigation">
										<a class="navigate-up disabled" id="navigate-up-speeches"><span>Up</span></a><a class="navigate-down" id="navigate-down-speeches"><span>Down</span></a>
									</div>
								</div>
							</div>
							<div class="box-body">
								<div id="speeches-list" class="box-inside-wrapper" rel="next">
									<ul class="box-inner-vertical list-items">
										<li>
											<a href="./speech-content?id=45076" title="1398/12/13">بیانات پس از کاشت نهال در آستانه روز درختکاری</a>
										</li>
										<li>
											<a href="./speech-content?id=45038" title="1398/12/08">تشکر رهبر انقلاب از زحمات پزشکان و پرستاران در مبارزه با کرونا</a>
										</li>
										<li>
											<a href="./speech-content?id=45002" title="1398/12/04">بیانات در ابتدای جلسه درس خارج فقه و تشکر از حضور ملت ایران در انتخابات</a>
										</li>
										<li>
											<a href="./speech-content?id=44989" title="1398/12/02">بیانات در گفت‌وگو با خبرنگار صداوسیما پس از شرکت در انتخابات</a>
										</li>
										<li>
											<a href="./speech-content?id=44955" title="1398/11/29">بیانات در دیدار مردم آذربایجان شرقی</a>
										</li>
										<li>
											<a href="./speech-content?id=44919" title="1398/11/26">بیانات در دیدار مداحان اهل‌بیت علیهم‌السلام</a>
										</li>
										<li>
											<a href="./speech-content?id=44852" title="1398/11/19">بیانات در دیدار فرماندهان و کارکنان نیروی هوایی ارتش</a>
										</li>
										<li>
											<a href="./speech-content?id=44827" title="1398/11/16">بیانات در دیدار اقشار مختلف مردم</a>
										</li>
										<li>
											<a href="./speech-content?id=44875" title="1398/11/14">شرح حدیثی از امام صادق(ع)، درباره نماز شب</a>
										</li>
										<li>
											<a href="./speech-content?id=44695" title="1398/10/27">خطبه‌های نماز جمعه تهران</a>
										</li>
										<li>
											<a href="./speech-content?id=44668" title="1398/10/23">بیانات در دیدار دست‌اندرکاران کنگره ۲۰۰۰ شهید استان بوشهر</a>
										</li>
										<li>
											<a href="./speech-content?id=44628" title="1398/10/18">بیانات در دیدار مردم قم</a>
										</li>
										<li>
											<a href="./speech-content?id=44574" title="1398/10/13">بیانات در منزل سپهبد شهید حاج قاسم سلیمانی</a>
										</li>
										<li>
											<a href="./speech-content?id=44541" title="1398/10/11">بیانات در دیدار جمعی از پرستاران سراسر کشور</a>
										</li>
										<li>
											<a href="./speech-content?id=44749" title="1398/10/09">شرح حدیثی درباره آخرین گفتگوهای پیامبر اعظم(ص) و حضرت فاطمه زهرا(س)</a>
										</li>
										<li class="__last" style="width: 1px; height: 1px; visibility: hidden;"></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="gd_4">
						<div id="radmap" class="box">
							<div class="curve-tl"></div>
							<div class="curve-tr"></div>
							<div class="box-head">
								<div class="box-head-bg">
									<h3 class="box-title">
										<a href="./weekly" title="خط حزب‌الله"><span class="box-icon radmap-glossy-icon"></span></a>
									</h3>
									<div class="navigation">
										<a class="navigate-up disabled" id="navigate-up-radmap"><span>Up</span></a><a class="navigate-down" id="navigate-down-radmap"><span>Down</span></a>
									</div>
								</div>
							</div>
							<div class="box-body">
								<div id="radmap-list" class="box-inside-wrapper" rel="next">
									<ul class="box-inner-vertical list-items">
										<li>
											<a href="./weekly/#173,1" title="شماره صدوسی‌چهار">۱۳۴. تضمین‌های واقعی در مقابل دست چدنی</a>
										</li>
										<li>
											<a href="./weekly/#172,1" title="شماره صدوسی‌وسه">۱۳۳. سند صیانت را دوباره بخوانید</a>
										</li>
										<li>
											<a href="./weekly/#171,1" title="شماره صدوسی‌ودو">۱۳۲. آزمون عزت</a>
										</li>
										<li>
											<a href="./weekly/#170,1" title="شماره صدوسی‌ویک">۱۳۱. اتاق جنگ ایران کجاست؟</a>
										</li>
										<li>
											<a href="./weekly/#169,1" title="شماره صدوسی‌">۱۳۰. خطر اشرافی‌گری</a>
										</li>
										<li>
											<a href="./weekly/#168,1" title="شماره صدوبیست‌ونه">۱۲۹. علت حضور ایران در منطقه چیست؟</a>
										</li>
										<li>
											<a href="./weekly/#167,1" title="شماره صدوبیست‌وهشت">۱۲۸. احتياج به «تعمير قلب» داريم</a>
										</li>
										<li>
											<a href="./weekly/#166,1" title="شماره صدوبیست‌وهفت">۱۲۷. باید با نهج‌البلاغه مأنوس شوید</a>
										</li>
										<li>
											<a href="./weekly/#165,1" title="شماره صدوبیست‌وشش">۱۲۶. میدان دادن به حسن باقری‌های نسل سوم</a>
										</li>
										<li>
											<a href="./weekly/#164,1" title="شماره صدوبیست‌وپنج">۱۲۵. راهیان راه زینب(س)</a>
										</li>
										<li>
											<a href="./weekly/#163,1" title="شماره صدوبیست‌وچهارم">۱۲۴. سربازان عدالت</a>
										</li>
										<li>
											<a href="./weekly/#162,1" title="شماره صدوبیست‌وسوم">۱۲۳. محکم‌تر از فولاد</a>
										</li>
										<li>
											<a href="./weekly/#161,1" title="شماره صدوبیست‌ودوم">۱۲۲. پرچمی که برافراشته ماند</a>
										</li>
										<li>
											<a href="./weekly/#160,1" title="شماره صدوبیست‌ویکم">۱۲۱. انقلابی‌نماها به‌دنبال چه هستند؟</a>
										</li>
										<li>
											<a href="./weekly/#159,1" title="شماره صدوبیستم">۱۲۰. پرچمدار</a>
										</li>
										<li>
											<a href="./weekly/#158,1" title="شماره صدونوزدهم">۱۱۹. در صف مردم</a>
										</li>
										<li>
											<a href="./weekly/#157,1" title="شماره صدوهجدهم">۱۱۸. سلمانِ محمد(ص)</a>
										</li>
										<li>
											<a href="./weekly/#156,1" title="شماره صدوهفدهم">۱۱۷. برای مرهم زخم</a>
										</li>
										<li>
											<a href="./weekly/#154,1" title="شماره صدوشانزدهم">۱۱۶. حمله به امید مردم</a>
										</li>
										<li>
											<a href="./weekly/#153,1" title="شماره صدوپانزدهم">۱۱۵. سناریوی آشوب</a>
										</li>
										<li>
											<a href="./weekly/#152,1" title="شماره صدوچهاردهم">۱۱۴. ملاک حال فعلی افراد است</a>
										</li>
										<li>
											<a href="./weekly/#151,1" title="شماره صدوسیزدهم">۱۱۳. وحدت شکنان</a>
										</li>
										<li>
											<a href="./weekly/#150,1" title="شماره صدودوازده">۱۱۲. راز وعده‌های صادق</a>
										</li>
										<li>
											<a href="./weekly/#149,1" title="شماره صدویازده">۱۱۱. راهبرد وحدت يا تفرقه؛ كدام يك پيروز است؟</a>
										</li>
										<li>
											<a href="./weekly/#148,1" title="شماره صدوده">۱۱۰. گفتمان انقلاب را غلبه دهید</a>
										</li>
										<li>
											<a href="./weekly/#147,1" title="شماره صدونه">۱۰۹. در کنار مردم</a>
										</li>
										<li>
											<a href="./weekly/#146,1" title="شماره صدوهشت">۱۰۸. اگر همه با هم باشیم</a>
										</li>
										<li>
											<a href="./weekly/#145,1" title="شماره صدوهفت">۱۰۷. رستاخیز جان</a>
										</li>
										<li>
											<a href="./weekly/#144,1" title="شماره صدو شش">۱۰۶. به رهبری حسین</a>
										</li>
										<li>
											<a href="./weekly/#143,1" title="شماره صدوپنج">۱۰۵. علیه امنیت ایران</a>
										</li>
										<li>
											<a href="./weekly/#142,1" title="شماره صدوچهار">۱۰۴. قدرت ایران قابل مذاکره نیست</a>
										</li>
										<li>
											<a href="./weekly/#140,1" title="شماره صدوسه">۱۰۳. مخاطب اول</a>
										</li>
										<li>
											<a href="./weekly/#139,1" title="شماره صدو دو">۱۰۲. پیروز جنگ روایت‌ها</a>
										</li>
										<li>
											<a href="./weekly/#138,1" title="شماره صد و یک">۱۰۱. غوغای امت حسین</a>
										</li>
										<li>
											<a href="./weekly/#137,1" title="شماره صد ویژه‌نامه ۱۰۰+">۱۰۰. ویژه‌نامه شماره صد</a>
										</li>
										<li>
											<a href="./weekly/#136,1" title="شماره صد">۱۰۰. مقابله با زورگو</a>
										</li>
										<li>
											<a href="./weekly/#135,1" title="شماره نود و نه"> ۹۹. چشم انتظاران</a>
										</li>
										<li>
											<a href="./weekly/#134,1" title="شماره نودوهشت">۹۸. زندگی فرزندان خمینی</a>
										</li>
										<li>
											<a href="./weekly/#133,1" title="شماره نودوهفت">۹۷. مبارزه ادامه دارد</a>
										</li>
										<li>
											<a href="./weekly/#132,1" title="شماره نود و شش">۹۶. جهادی‌ها</a>
										</li>
										<li>
											<a href="./weekly/#131,1" title="شماره نود و پنج">۹۵. حزب‌الله این است</a>
										</li>
										<li>
											<a href="./weekly/#130,1" title="شماره نود و چهار">۹۴. حفظ عزت</a>
										</li>
										<li>
											<a href="./weekly/#129,1" title="شماره نود و سه">۹۳. مسئولیت سنگین و حساس</a>
										</li>
										<li>
											<a href="./weekly/#128,1" title="شماره نود و دو">۹۲. مردم در برابر جلاد</a>
										</li>
										<li>
											<a href="./weekly/#127,1" title="شماره نود و یک">۹۱. بار دیگر مسجد ابوذر...</a>
										</li>
										<li>
											<a href="./weekly/#126,1" title="شماره نود">۹۰. پرچمدار استیفای حق مردم</a>
										</li>
										<li>
											<a href="./weekly/#125,1" title="شماره هشتاد و نهم">۸۹. دوستان و دشمنان اتحاد</a>
										</li>
										<li>
											<a href="./weekly/#123,1" title="شماره هشتاد و هشتم">۸۸.سه دیدار مهم</a>
										</li>
										<li>
											<a href="./weekly/#122,1" title="شماره هشتاد و هفتم ">۸۷. سیلی بزرگ‌تر</a>
										</li>
										<li>
											<a href="./weekly/#121,1" title="شماره هشتاد و ششم">۸۶. تماشاچی نباشید</a>
										</li>
										<li>
											<a href="./weekly/#120,1" title="شماره هشتاد و پنجم">۸۵. آتش به اختیار</a>
										</li>
										<li>
											<a href="./weekly/#119,1" title="شماره هشتاد و چهارم">۸۴. درس‌های قیام روح الله</a>
										</li>
										<li>
											<a href="./weekly/#118,1" title="شماره هشتادوسوم">خط ۸۳. رمز انجام ‌نشدنی‌ها</a>
										</li>
										<li>
											<a href="./weekly/#117,1" title="شماره هشتادودوم">خط ۸۲. توجه به طبقه محروم اولویت دولت دوازدهم باشد</a>
										</li>
										<li>
											<a href="./weekly/#116,1" title="شماره هشتادویکم">خط ۸۱. کاندیداها مراقب باشند</a>
										</li>
										<li>
											<a href="./weekly/#115,1" title="شماره هشتاد">قول به مردم، عهد با خدا</a>
										</li>
										<li>
											<a href="./weekly/#114,1" title="شماره هفتادونهم">خط ۷۹. ارزش دست کارگر</a>
										</li>
										<li>
											<a href="./weekly/#113,1" title="شماره هفتادوهشتم">خط ۷۸. دوقطبی دروغین جنگ وبرجام</a>
										</li>
										<li>
											<a href="./weekly/#111,1" title="شماره هفتاد و هفتم">شماره ۷۷. ۱۰ وظیفه مهم جوان مومن انقلابی در انتخابات</a>
										</li>
										<li>
											<a href="./weekly/#110,1" title="شماره هفتاد و ششم">شماره۷۶. خط بسیجی و انقلابی را از دست ندهید</a>
										</li>
										<li>
											<a href="./weekly/#109,1" title="شماره هفتاد و پنجم">شماره۷۵. مدیریت قوی کلید اقتصاد قدرتمند</a>
										</li>
										<li>
											<a href="./weekly/#107,1" title="شماره هفتاد و چهارم">شماره ۷۴ . مردم دغدغه اصلی رهبرانقلاب</a>
										</li>
										<li>
											<a href="./weekly/#106,1" title="شماره هفتاد و سوم">شماره ۷۳ . اکنون، اینگونه نیست</a>
										</li>
										<li>
											<a href="./weekly/#105,1" title="شماره هفتاد و دوم">شماره ۷۲. فصل برداشت</a>
										</li>
										<li>
											<a href="./weekly/#104,1" title="شماره هفتاد و یکم">شماره۷۱. هشدار مکرر رهبر انقلاب درباره هوای خوزستان</a>
										</li>
										<li>
											<a href="./weekly/#103,1" title="شماره هفتادم">شماره۷۰. مردم گله‌مندند</a>
										</li>
										<li>
											<a href="./weekly/#101,1" title="شماره شصت و نهم">شماره۶۹. ۲۲ بهمن عید غدیر نظام اسلامی</a>
										</li>
										<li>
											<a href="./weekly/#100,1" title="شماره شصت و هشتم">شماره ۶۸. خدمت فلسفه وجود ما</a>
										</li>
										<li>
											<a href="./weekly/#99,1" title="شماره شصت و هفتم">شماره۶۷. مردان آب و آتش</a>
										</li>
										<li>
											<a href="./weekly/#98,1" title="شماره شصت و ششم">شماره ۶۶. فلسطین زنده‌است</a>
										</li>
										<li>
											<a href="./weekly/#97,1" title="شماره شصت و پنجم">شماره۶۵. انقلابی‌ها</a>
										</li>
										<li>
											<a href="./weekly/#96,1" title="شماره شصت و چهارم">شماره ۶۴. همه با هم برادریم</a>
										</li>
										<li>
											<a href="./weekly/#95,1" title="شماره شصت و سوم">شماره۶۳. گزارش به مردم</a>
										</li>
										<li>
											<a href="./weekly/#94,1" title="شماره شصت و دوم">شماره ۶۲. تکیه‌گاه دشمن شدند</a>
										</li>
										<li>
											<a href="./weekly/#93,1" title="شماره شصت و یکم">شماره۶۱. آزادسازی حلب</a>
										</li>
										<li>
											<a href="./weekly/#92,1" title="شماره شصتم">شماره ۶۰. اقدام متقابل</a>
										</li>
										<li>
											<a href="./weekly/#91,1" title="شماره پنجاه و نهم ">شماره ۵۹. حل مشکلات مردم در صدر اولویت‌ها</a>
										</li>
										<li>
											<a href="./weekly/#90,1" title="شماره پنجاه و هشتم">شماره۵۸. بی‌آبرو</a>
										</li>
										<li>
											<a href="./weekly/#89,1" title="شماره پنجاه و هفتم">شماره ۵۷. بزرگ‌ترین گردهمایی عالم</a>
										</li>
										<li>
											<a href="./weekly/#88,1" title="شماره پنجاه و ششم">شماره۵۶. فروپاشی</a>
										</li>
										<li>
											<a href="./weekly/#87,1" title="شماره پنجاه و پنجم">شماره ۵۵. تا نفس دارم لحظه‌ای کوتاه نمی‌آیم</a>
										</li>
										<li>
											<a href="./weekly/#86,1" title="شماره پنجاه و چهارم">شماره ۵۴. روضه یمن</a>
										</li>
										<li>
											<a href="./weekly/#85,1" title="شماره پنجاه و سوم">شماره۵۳. کربلا، درس جهاد کبیر</a>
										</li>
										<li>
											<a href="./weekly/#84,1" title="شماره پنجاه و دوم">شماره ۵۲. اصرار دارم...</a>
										</li>
										<li>
											<a href="./weekly/#83,1" title="شماره پنجاه و یکم">شماره ۵۱. حزب‌الله پیروز است</a>
										</li>
										<li>
											<a href="./weekly/#82,1" title="شماره پنجاهم">شماره ۵۰. سفیر انقلاب در نیویورک</a>
										</li>
										<li>
											<a href="./weekly/#81,1" title="شماره چهل و نهم">شماره۴۹. چشمان باز</a>
										</li>
										<li>
											<a href="./weekly/#80,1" title="شماره چهل و هشتم">خط حزب‌الله ۴۸. اقتصاد را باید مردمی کرد</a>
										</li>
										<li>
											<a href="./weekly/#78,1" title="شماره چهل و هفتم">شماره ۴۷. از پنج صبح</a>
										</li>
										<li>
											<a href="./weekly/#77,1" title="شماره چهل و ششم">شماره۴۶. ماموریت بچه مسجدی‌ها</a>
										</li>
										<li>
											<a href="./weekly/#76,1" title="شماره چهل و پنجم">شماره ۴۵.« نصر من الله»</a>
										</li>
										<li>
											<a href="./weekly/#75,1" title="شماره چهل و چهارم">شماره۴۴. «این شد تجربه، این شد آمریکا»</a>
										</li>
										<li>
											<a href="./weekly/#74,1" title="شماره چهل و سوم">شماره۴۳. تاوان غفلت زخم تفرقه</a>
										</li>
										<li>
											<a href="./weekly/#73,1" title="شماره چهل و دوم">شماره۴۲. مدیون حاج قاسم‌ها</a>
										</li>
										<li>
											<a href="./weekly/#71,1" title="شماره چهل و یکم">شماره ۴۱. حق گرفتی است</a>
										</li>
										<li>
											<a href="./weekly/#70,1" title="شماره چهلم">شماره ۴۰. آماده باش برای جنگ احزاب</a>
										</li>
										<li>
											<a href="./weekly/#69,1" title="شماره سی و نهم">شماره ۳۹. منتظریم حاج احمد ان‌شاءالله بیاید...</a>
										</li>
										<li>
											<a href="./weekly/#68,1" title="شماره سی و هشتم">شماره ۳۸. آغاز سال نو</a>
										</li>
										<li>
											<a href="./weekly/#67,1" title="شماره سی و هفتم">شماره ۳۷.بنده به جوانِ انقلابیِ متدیّن ارادت دارم</a>
										</li>
										<li>
											<a href="./weekly/#65,1" title="شماره سی و ششم">شماره۳۶. وقت اقدام انقلابی است</a>
										</li>
										<li>
											<a href="./weekly/#62,1" title="شماره سی و پنجم">شماره ۳۵. اسلام مقتدر اعجاز روح‌الله</a>
										</li>
										<li>
											<a href="./weekly/#61,1" title="شماره سی و چهارم">شماره ۳۴. خانواده شما خانواده شهادت‌اند</a>
										</li>
										<li>
											<a href="./weekly/#60,1" title="شماره سی و سوم">شماره۳۳. مردم عائله ما هستند</a>
										</li>
										<li>
											<a href="./weekly/#59,1" title="شماره سی و دوم ">شماره ۳۲. شعبان ماه عاشقانه ها</a>
										</li>
										<li>
											<a href="./weekly/#57,1" title="شماره سی و یکم">شماره ۳۱. طرح کلی اندیشه اسلامی استاد سید علی خامنه‌ای</a>
										</li>
										<li>
											<a href="./weekly/#56,1" title="شماره سی‌ام">شماره۳۰. خدعه آمریکا پس از برجام</a>
										</li>
										<li>
											<a href="./weekly/#55,1" title="شماره بیست و نهم">شماره ۲۹. افسر جنگ نرم، سرباز حقیقت است</a>
										</li>
										<li>
											<a href="./weekly/#54,1" title="شماره بیست و هشتم">شماره ۲۸. اقتصاد مقاومتی، مسیر حل مشکلات مردم</a>
										</li>
										<li>
											<a href="./weekly/#53,1" title="شماره بیست و هفتم">شماره۲۷. فصل پنجم سال</a>
										</li>
										<li>
											<a href="./weekly/#52,1" title="شماره بیست و ششم">شماره ۲۶. مثل زندگانی حضرت زهرا سلام‌الله علیها</a>
										</li>
										<li>
											<a href="./weekly/#51,1" title="شماره بیست و پنجم">شماره ۲۵: شب و روز نشناسیم</a>
										</li>
										<li>
											<a href="./weekly/#50,1" title="شماره بیست و چهارم">شماره ۲۴. راهیان نور</a>
										</li>
										<li>
											<a href="./weekly/#49,1" title="شماره بیست و سوم">شماره ۲۳. پیام اعتماد ملت در انتخابات هفتم اسفند</a>
										</li>
										<li>
											<a href="./weekly/#48,1" title="شماره بیست و دوم">شماره ۲۲. خط حزب‌الله در ایستگاه انتخابات</a>
										</li>
										<li>
											<a href="./weekly/#47,1" title="شماره بیست و یکم">شماره ۲۱. دستورالعمل انگلیسی</a>
										</li>
										<li>
											<a href="./weekly/#46,1" title="شماره بیستم">شماره ۲۰. آیا انقلاب اسلامی ایران همچنان پیشرو است؟</a>
										</li>
										<li>
											<a href="./weekly/#45,1" title="شماره نوزدهم">شماره ۱۹. نظر رهبر انقلاب درباره شهدای مدافع حرم</a>
										</li>
										<li>
											<a href="./weekly/#44,1" title="شماره هجدهم">شماره ۱۸. دیدار با خورشید در انتهای شب</a>
										</li>
										<li>
											<a href="./weekly/#43,1" title="شماره هفدهم">شماره ۱۷. تصویر واقعی آمریکا</a>
										</li>
										<li>
											<a href="./weekly/#42,1" title="شماره شانزدهم">شماره ۱۶. حرف نو رهبر انقلاب درباره پروژه شماره چهار دشمن</a>
										</li>
										<li>
											<a href="./weekly/#41,1" title="شماره پانزدهم">شماره ۱۵. دام موریانه در انتخابات</a>
										</li>
										<li>
											<a href="./weekly/#40,1" title="شماره چهاردهم">شماره ۱۴. مردم در خط حزب الله</a>
										</li>
										<li>
											<a href="./weekly/#39,1" title="شماره سیزدهم">شماره ۱۳. فتنه، خط قرمز انقلاب</a>
										</li>
										<li>
											<a href="./weekly/#38,1" title="شماره دوازدهم">شماره ۱۲. بیداری سرکوب شدنی نیست</a>
										</li>
										<li>
											<a href="./weekly/#37,1" title="شماره یازدهم">شماره ۱۱. نفوذ، اشغال بدون جنگ</a>
										</li>
										<li>
											<a href="./weekly/#36,1" title="شماره دهم">شماره ۱۰. فرامتن نامه رهبر انقلاب به جوانان غرب</a>
										</li>
										<li>
											<a href="./weekly/#35,1" title="ویژه‌نامه اربعین">ویژه‌نامه اربعین: از ملت عراق تشکر میکنم</a>
										</li>
										<li>
											<a href="./weekly/#34,1" title="شماره نهم">شماره ۹. تا انقلاب مهدی</a>
										</li>
										<li>
											<a href="./weekly/#33,1" title="شماره هشتم">شماره ۸. 21 ماه گذشت</a>
										</li>
										<li>
											<a href="./weekly/#32,1" title="شماره هفتم">شماره ۷. نقشه های آندلسی</a>
										</li>
										<li>
											<a href="./weekly/#31,1" title="شماره ششم">شماره ۶. خیانت بزک</a>
										</li>
										<li>
											<a href="./weekly/#30,1" title="شماره پنجم">شماره ۵. عاشورائیان در شام</a>
										</li>
										<li>
											<a href="./weekly/#28,1" title="شماره پنجم ویژه نامه محرم">شماره ۵ محرم. وظیفه مسلمان، اقدام به‌هنگام است</a>
										</li>
										<li>
											<a href="./weekly/#27,1" title="شماره چهارم">شماره ۴. ابلاغ سند صیانت با فرمان رهبر انقلاب</a>
										</li>
										<li>
											<a href="./weekly/#26,1" title="شماره چهارم ویژه نامه محرم">چهارمین ویژه نامه محرم خط حزب الله</a>
										</li>
										<li>
											<a href="./weekly/#25,1" title="شماره سوم ویژه‌نامه محرم">سومین ویژه نامه محرم خط حزب الله</a>
										</li>
										<li>
											<a href="./weekly/#24,1" title="شماره دوم ویژه نامه محرم">دومین ویژه نامه محرم خط حزب الله</a>
										</li>
										<li>
											<a href="./weekly/#22,1" title="شماره سوم">شماره ۳. خون شهید همدانی در محور مقاومت</a>
										</li>
										<li>
											<a href="./weekly/#23,1" title="شماره اول ویژه‌نامه محرم">یکم ویژه نامه محرم خط حزب الله</a>
										</li>
										<li>
											<a href="./weekly/#13,1" title="شماره دوم">شماره ۲. مباهله در قرن 21</a>
										</li>
										<li>
											<a href="./weekly/#6,1" title="شماره یکم">شماره ۱. «پایان خویشتن‌داری» در برابر بی‌کفایتی آل‌سعود</a>
										</li>
										<li>
											<a href="./weekly/#7,1" title="پیش‌شماره سیزدهم">پیش‌شماره ۱۳. خروش ابراهیمی ملت‌ها</a>
										</li>
										<li>
											<a href="./weekly/#8,1" title="پیش‌شماره دوازدهم">پیش‌شماره ۱۲. نقطه کلیدی پنج سخنرانی اخیر رهبر انقلاب</a>
										</li>
										<li>
											<a href="./weekly/#9,1" title="پیش‌شماره یازدهم">پیش‌شماره ۱۱. حمایت رهبر انقلاب از جوانان انقلابی</a>
										</li>
										<li>
											<a href="./weekly/#10,1" title="پیش‌شماره دهم">پیش‌شماره ۱۰. کلید، اقتصاد مقاومتی است</a>
										</li>
										<li>
											<a href="./weekly/#11,1" title="پیش‌شماره‌ی نهم">پیش‌شماره ۹. خط حزب‌الله برای «محمد رسول‌الله(ص)»</a>
										</li>
										<li>
											<a href="./weekly/#12,1" title="پیش‌شماره هشتم">پیش‌شماره ۸. مأموریت جدید: آغاز فصل جدیدی از مبارزه با استکبار</a>
										</li>
										<li>
											<a href="./weekly/#21,1" title="پیش‌شماره هفتم">پیش‌شماره ۷. نماینده ولی‌امر در خط مقدم</a>
										</li>
										<li>
											<a href="./weekly/#20,1" title="پیش‌شماره ششم">پیش‌شماره ۶. اعترافات شیطان</a>
										</li>
										<li>
											<a href="./weekly/#19,1" title="پیش‌شماره پنجم">پیش‌شماره ۵. پرچم مقاومت بالاست</a>
										</li>
										<li>
											<a href="./weekly/#14,1" title="پیش‌شماره چهارم">پیش‌شماره ۴. مبارزه با استکبار ادامه خواهد داشت</a>
										</li>
										<li class="__last" style="width: 1px; height: 1px; visibility: hidden;"></li>
										<li class="__last" style="width: 1px; height: 1px; visibility: hidden;"></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="gd_4">
						<div id="telex" class="box">
							<div class="curve-tl"></div>
							<div class="curve-tr"></div>
							<div class="box-head">
								<div class="box-head-bg">
									<h3 class="box-title">
										<a href="./telex" title="تلکس"><span class="box-icon telex-glossy-icon"></span></a>
									</h3>
									<div class="navigation">
										<a class="navigate-up disabled" id="navigate-up-telex"><span>Up</span></a><a class="navigate-down" id="navigate-down-telex"><span>Down</span></a>
									</div>
								</div>
							</div>
							<div class="box-body">
								<div id="telex-list" class="box-inside-wrapper" rel="next">
									<ul class="box-inner-vertical list-items">
										<li>
											<a href="./redirect?id=45143&amp;c=c350574b50ca6815d3b4&amp;u=https://www.farsnews.ir/news/13981220000421/%D9%85%D8%AF%D8%A7%D9%81%D8%B9%D8%A7%D9%86-%D8%B3%D9%84%D8%A7%D9%85%D8%AA-%D8%B4%D9%87%DB%8C%D8%AF-%D8%AE%D8%AF%D9%85%D8%AA-%D9%85%D8%AD%D8%B3%D9%88%D8%A8-%D9%85%DB%8C%E2%80%8C%D8%B4%D9%88%D9%86%D8%AF" title="1398/12/21">فارس | به موافقت رهبر انقلاب مدافعان سلامت «شهید خدمت» محسوب می‌شوند</a>
										</li>
										<li>
											<a href="./redirect?id=44973&amp;c=5fbf89f88801b32a572c&amp;u=http://radiogoftogoo.ir/NewsDetails/?m=178698%26n=588739" title="1398/12/01">رادیو گفتگو | انتخابات پرشور باید نقش سازنده‌ای در چانه‌زنی‌ها داشته باشد</a>
										</li>
										<li>
											<a href="./redirect?id=44712&amp;c=b16d746ba93049fcf680&amp;u=https://www.farsnews.com/news/13981028000586/%D9%BE%DB%8C%D8%A7%D9%85-%D9%85%D9%82%D8%A7%D9%85-%D9%85%D8%B9%D8%B8%D9%85-%D8%B1%D9%87%D8%A8%D8%B1%DB%8C-%D8%A8%D9%87-%D8%A8%DB%8C%D8%B3%D8%AA%D9%85%DB%8C%D9%86-%DA%A9%D9%86%DA%AF%D8%B1%D9%87-%D8%B3%D8%B1%D8%AF%D8%A7%D8%B1%D8%A7%D9%86-%D9%88-%DB%B4%DB%B0%DB%B0%DB%B0-%D8%B4%D9%87%DB%8C%D8%AF-%D9%85%D9%86%D8%B7%D9%82%D9%87-%DB%B1%DB%B7" title="1398/10/28">پیام رهبر انقلاب به بیستمین کنگره سرداران و ۴۰۰۰ شهید منطقه ۱۷</a>
										</li>
										<li>
											<a href="./redirect?id=44629&amp;c=4b998405040794e5fdeb&amp;u=https://www.farsnews.com/news/13981018000686/" title="1398/10/18">پیام خانواده شهید سلیمانی به رهبر انقلاب/ قدردانی از حماسه‌آفرینی ملت ایران در تشییع «حاج‌قاسم»</a>
										</li>
										<li>
											<a href="./redirect?id=44446&amp;c=21dbb0f304243c86a140&amp;u=https://www.mporg.ir/home/wid/6070d914-4938-4254-aecf-74c6c721af10/id/108971/" title="1398/10/02">تمام فعالیت‌های اقتصادی نهادهای انقلابی مشمول قوانین مالیاتی هستند</a>
										</li>
										<li>
											<a href="./redirect?id=44397&amp;c=1ceccd69a5d30d24d394&amp;u=http://book-.ir/index.aspx?pageid=220%26newsview=415" title="1398/09/24">نشست نقد کتاب اندیشه‌ی سیاسی حضرت آیت‌الله خامنه‌ای</a>
										</li>
										<li>
											<a href="./redirect?id=44348&amp;c=379459da649d9f7b084c&amp;u=https://www.tasnimnews.com/fa/news/1398/09/16/2155218/%D9%82%D9%85-%D9%86%D8%B4%D8%B3%D8%AA-%D8%B1%D9%88%D8%B4-%D8%B4%D9%86%D8%A7%D8%B3%DB%8C-%D8%A7%D8%AC%D8%AA%D9%87%D8%A7%D8%AF%DB%8C-%D8%B1%D9%87%D8%A8%D8%B1-%D9%85%D8%B9%D8%B8%D9%85-%D8%A7%D9%86%D9%82%D9%84%D8%A7%D8%A8-%D8%A8%D8%A7-%D9%85%D8%AD%D9%88%D8%B1%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D8%A8-%D8%AF%D8%B1%D8%B3-%D9%86%D8%A7%D9%85%D9%87-%D8%BA%D9%86%D8%A7-%D9%88-%D9%85%D9%88%D8%B3%DB%8C%D9%82%DB%8C-%D8%A8%D8%B1%DA%AF%D8%B2%D8%A7%D8%B1-%D9%85%DB" title="1398/09/17">نشست «روش‌شناسی اجتهادی رهبر معظم انقلاب» با محوریت کتاب «درس‌نامه‌ غنا و موسیقی» برگزار می‌شود</a>
										</li>
										<li>
											<a href="./redirect?id=44318&amp;c=6b9f080509bf79a2ef76&amp;u=https://www.farsnews.com/news/13980913000936/" title="1398/09/13">دستورات رهبر معظم انقلاب اسلامی درباره جان‌باختگان حوادث اخیر</a>
										</li>
										<li>
											<a href="./redirect?id=44030&amp;c=ef1dafe0a12b7094a875&amp;u=https://www.farsnews.com/news/13980826000542/" title="1398/08/26">فارس | توصیه رهبر انقلاب به رئیس‌جمهور درباره پرداخت بسته حمایتی</a>
										</li>
										<li>
											<a href="./redirect?id=44017&amp;u=mehrnews.com/news/4773255" title="1398/08/25">نشست «روش‌شناسی اجتهادی حضرت آیت‌الله العظمی خامنه‌ای»</a>
										</li>
										<li>
											<a href="./redirect?id=43998&amp;c=d6a5a6ca2c56a79cd069&amp;u=https://www.mizanonline.com/fa/news/567943/" title="1398/08/24">میزان | تفاوت لیست عفو اخیر اعلام شده به رهبر انقلاب چه بود؟</a>
										</li>
										<li>
											<a href="./redirect?id=43893&amp;c=c500192e13e66d963745&amp;u=https://motahari.ac.ir/tollab/fa/news/95/%D8%A7%D9%81%D8%AA%D8%AA%D8%A7%D8%AD%DB%8C%D9%87-%D8%AF%D9%88%D8%B1%D9%87-%D8%AA%D8%B1%D8%A8%DB%8C%D8%AA-%D9%85%D8%AF%D8%B1%D8%B3-%DA%A9%D8%AA%D8%A7%D8%A8-%D8%B7%D8%B1%D8%AD-%DA%A9%D9%84%DB%8C-%D8%A7%D9%86%D8%AF%DB%8C%D8%B4%D9%87-%D9%87%D8%A7%DB%8C-%D8%A7%D8%B3%D9%84%D8%A7%D9%85%DB%8C-%D8%AF%D8%B1-%D9%82%D8%B1%D8%A2%D9%86" title="1398/08/12">افتتاحیه دوره تربیت مدرس کتاب طرح کلی اندیشه‌ اسلامی در قرآن</a>
										</li>
										<li>
											<a href="./redirect?id=43543&amp;c=1ceccd69a5d30d24d394&amp;u=http://book-.ir/index.aspx?pageid=220%26newsview=402" title="1398/07/03">آیین معرفی کتاب «تفسیر سوره برائت» در مشهد برگزار می‌شود</a>
										</li>
										<li>
											<a href="./redirect?id=43373&amp;c=c42ac206f0f2b98c17ce&amp;u=http://sobhe-no.ir/newspaper/775/7" title="1398/06/10">صبح‌نو | روایتی از دیدار فعالان خانواده با رهبر انقلاب</a>
										</li>
										<li>
											<a href="./redirect?id=43367&amp;c=5c6d8a69446930655216&amp;u=https://www.farsnews.com/news/13980606000863/" title="1398/06/08">فارس | در دیدار رهبر انقلاب با جمعی از فعالان حوزه خانواده چه گذشت؟</a>
										</li>
										<li class="__last" style="width: 1px; height: 1px; visibility: hidden;"></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="gd_4">
						<div id="newKeywords" class="box">
							<div class="curve-tl"></div>
							<div class="curve-tr"></div>
							<div class="box-head">
								<div class="box-head-bg">
									<h3 class="box-title">
										<a href="./keyword-index" title=""><span class="box-icon keywords-glossy-icon"></span></a>
									</h3>
									<div class="navigation">
										<a class="navigate-up disabled" id="navigate-up-newKeywords"><span>Up</span></a><a class="navigate-down" id="navigate-down-newKeywords"><span>Down</span></a>
									</div>
								</div>
							</div>
							<div class="box-body">
								<div id="newKeywords-list" class="box-inside-wrapper" rel="next">
									<ul class="box-inner-vertical list-items">
										<li>
											<a href="./keyword-content?id=1179" class="kwtitle" style="background: rgb(200, 216, 240);">مقاومت اسلامی فلسطین</a>
										</li>
										<li>
											<a href="./keyword-content?id=2596" class="kwtitle">افول آمریکا</a>
										</li>
										<li>
											<a href="./keyword-content?id=5275" class="kwtitle" style="background: rgb(200, 216, 240);">تعامل با دنیا</a>
										</li>
										<li>
											<a href="./keyword-content?id=1030" class="kwtitle">عبرتهای عاشورا</a>
										</li>
										<li>
											<a href="./keyword-content?id=1036" class="kwtitle" style="background: rgb(200, 216, 240);">عوام و خواص</a>
										</li>
										<li>
											<a href="./keyword-content?id=1669" class="kwtitle">عزت و افتخار حسینی</a>
										</li>
										<li>
											<a href="./keyword-content?id=2634" class="kwtitle" style="background: rgb(200, 216, 240);">تمدن‌سازی نوین اسلامی</a>
										</li>
										<li>
											<a href="./keyword-content?id=11096" class="kwtitle">شعار مرگ بر آمریکا</a>
										</li>
										<li>
											<a href="./keyword-content?id=13014" class="kwtitle" style="background: rgb(200, 216, 240);">تجربه برجام</a>
										</li>
										<li>
											<a href="./keyword-content?id=5502" class="kwtitle">هسته‌ای بهانه است</a>
										</li>
										<li>
											<a href="./keyword-content?id=1415" class="kwtitle" style="background: rgb(200, 216, 240);">کالای داخلی</a>
										</li>
										<li>
											<a href="./keyword-content?id=2583" class="kwtitle">تفاخر به کالای خارجی</a>
										</li>
										<li>
											<a href="./keyword-content?id=1252" class="kwtitle" style="background: rgb(200, 216, 240);">حمایت از تولید ملی</a>
										</li>
										<li>
											<a href="./keyword-content?id=11102" class="kwtitle">مردمی بودن مسئولان</a>
										</li>
										<li>
											<a href="./keyword-content?id=11101" class="kwtitle" style="background: rgb(200, 216, 240);">جبهه مقاومت</a>
										</li>
										<li class="__last" style="width: 1px; height: 1px; visibility: hidden;"></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="clear"></div>
				</div>
				<div class="row3">
					<div class="gd_4">
						<div id="photos" class="box">
							<div class="curve-tl"></div>
							<div class="curve-tr"></div>
							<div class="box-head">
								<div class="box-head-bg">
									<h3 class="box-title">
										<a href="./photo-index" title="آرشیو تصاویر"><span class="box-icon photo-glossy-icon"></span></a>
									</h3>
									<div class="navigation">
										<a class="navigate-up disabled" id="navigate-up-photo"><span>Up</span></a><a class="navigate-down" id="navigate-down-photo"><span>Down</span></a>
									</div>
								</div>
							</div>
							<div class="box-body">
								<div id="photo-list" class="box-inside-wrapper" rel="next">
									<ul class="box-inner-vertical">
										<li>
											<a href="./photo-album?id=45133" title="1398/12/16"><img alt="قدردان دلتنگی‌های شما..." src="./assets/ndata/smps(12).jpg">قدردان دلتنگی‌های شما...</a>
										</li>
										<li>
											<a href="./photo-album?id=45120" title="1398/12/16"><img alt="جهادگران دیروز و امروز و فردا" src="./assets/ndata/smps(13).jpg">جهادگران دیروز و امروز و فردا</a>
										</li>
										<li>
											<a href="./photo-album?id=45116" title="1398/12/15"><img alt="قلوب جریحه‌دار" src="./assets/ndata/smps(14).jpg">قلوب جریحه‌دار</a>
										</li>
										<li>
											<a href="./photo-album?id=45110" title="1398/12/15"><img alt="اطلاع‌نگاشت | انس با صحیفه سجادیه" src="./assets/ndata/smps(15).jpg">اطلاع‌نگاشت | انس با صحیفه سجادیه</a>
										</li>
										<li>
											<a href="./photo-album?id=45108" title="1398/12/15"><img alt="اطلاع‌نگاشت | توصیه‌های رهبر انقلاب در مقابله با کرونا" src="./assets/ndata/smps(16).jpg">اطلاع‌نگاشت | توصیه‌های رهبر انقلاب در مقابله با کرونا</a>
										</li>
										<li>
											<a href="./photo-album?id=45099" title="1398/12/14"><img alt="اطلاع‌نگاشت | فقط باید از خدا خواست" src="./assets/ndata/smps(17).jpg">اطلاع‌نگاشت | فقط باید از خدا خواست</a>
										</li>
										<li>
											<a href="./photo-album?id=45102" title="1398/12/14"><img alt="سخن نگاشت | تشکیلات قوی شیعه ویژگی دوران امام جواد علیه‌السلام" src="./assets/ndata/smps(18).jpg">سخن نگاشت | تشکیلات قوی شیعه ویژگی دوران امام جواد علیه‌السلام</a>
										</li>
										<li>
											<a href="./photo-album?id=45066" title="1398/12/13"><img alt="کاشت نهال در آستانه روز درختکاری" rel="./assets/ndata/news/45066/smps.jpg">کاشت نهال در آستانه روز درختکاری</a>
										</li>
										<li>
											<a href="./photo-album?id=45079" title="1398/12/13"><img alt="سخن نگاشت | کاشت نهال در آستانه روز درختکاری" rel="./assets/ndata/news/45079/smps.jpg">سخن نگاشت | کاشت نهال در آستانه روز درختکاری</a>
										</li>
										<li>
											<a href="./photo-album?id=45065" title="1398/12/13"><img alt="تصاویری از مرحوم سیدمحمد میرمحمدی در کنار رهبر انقلاب" rel="./assets/ndata/news/45065/smps.jpg">تصاویری از مرحوم سیدمحمد میرمحمدی در کنار رهبر انقلاب</a>
										</li>
										<li>
											<a href="./photo-album?id=45040" title="1398/12/08"><img alt="پزشکان و پرستاران، اجرتان با خدا" rel="./assets/ndata/news/45040/smps.jpg">پزشکان و پرستاران، اجرتان با خدا</a>
										</li>
										<li>
											<a href="./photo-album?id=45034" title="1398/12/08"><img alt="پیام تشکر از زحمات پزشکان و پرستاران در مبارزه با کرونا" rel="./assets/ndata/news/45034/smps.jpg">پیام تشکر از زحمات پزشکان و پرستاران در مبارزه با کرونا</a>
										</li>
										<li class="__last" style="width: 1px; height: 1px; visibility: hidden;"></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="gd_4">
						<div id="audio" class="box">
							<div class="curve-tl"></div>
							<div class="curve-tr"></div>
							<div class="box-head">
								<div class="box-head-bg">
									<h3 class="box-title">
										<a href="./audio-index" title="آرشیو صوت"><span class="box-icon audio-glossy-icon"></span></a>
									</h3>
									<div class="navigation">
										<a class="navigate-up disabled" id="navigate-up-audio"><span>Up</span></a><a class="navigate-down" id="navigate-down-audio"><span>Down</span></a>
									</div>
								</div>
							</div>
							<div class="box-body">
								<div id="audio-list" class="box-inside-wrapper" rel="next">
									<ul class="box-inner-vertical">
										<li>
											<a href="./audio-content?id=45106" title="1398/12/15"><img alt="کلیپ صوتی | پروردگارت را یاد کن" src="./assets/ndata/smps(19).jpg">کلیپ صوتی | پروردگارت را یاد کن</a>
										</li>
										<li>
											<a href="./audio-content?id=45090" title="1398/12/14"><img alt="کلیپ صوتی | جهادگران عرصه سلامت" src="./assets/ndata/smps(20).jpg">کلیپ صوتی | جهادگران عرصه سلامت</a>
										</li>
										<li>
											<a href="./audio-content?id=45083" title="1398/12/13"><img alt="دعای هفتم صحیفه سجادیه" src="./assets/ndata/smps(21).jpg">دعای هفتم صحیفه سجادیه</a>
										</li>
										<li>
											<a href="./audio-content?id=45077" title="1398/12/13"><img alt="بیانات پس از کاشت نهال در آستانه روز درختکاری" src="./assets/ndata/smps(22).jpg">بیانات پس از کاشت نهال در آستانه روز درختکاری</a>
										</li>
										<li>
											<a href="./audio-content?id=45036" title="1398/12/08"><img alt="پیام تشکر از زحمات پزشکان و پرستاران در مبارزه با کرونا" src="./assets/ndata/smps(23).jpg">پیام تشکر از زحمات پزشکان و پرستاران در مبارزه با کرونا</a>
										</li>
										<li>
											<a href="./audio-content?id=45004" title="1398/12/04"><img alt="بیانات در ابتدای جلسه درس خارج فقه و تشکر از حضور ملت ایران در انتخابات" src="./assets/ndata/smps(24).jpg">بیانات در ابتدای جلسه درس خارج فقه و تشکر از حضور ملت ایران در انتخابات</a>
										</li>
										<li>
											<a href="./audio-content?id=44990" title="1398/12/02"><img alt="گفت‌وگو با خبرنگار صداوسیما پس از شرکت در انتخابات مجلس شورای اسلامی و میان‌دوره‌ای مجلس خبرگان رهبری" src="./assets/ndata/smps(25).jpg">گفت‌وگو با خبرنگار صداوسیما پس از شرکت در انتخابات مجلس شورای اسلامی و میان‌دوره‌ای مجلس خبرگان رهبری</a>
										</li>
										<li>
											<a href="./audio-content?id=44953" title="1398/11/29"><img alt="دیدار مردم آذربایجان شرقی" rel="./assets/ndata/news/44953/smps.jpg">دیدار مردم آذربایجان شرقی</a>
										</li>
										<li>
											<a href="./audio-content?id=44918" title="1398/11/26"><img alt="دیدار مداحان اهل‌بیت علیهم‌السلام" rel="./assets/ndata/news/44918/smps.jpg">دیدار مداحان اهل‌بیت علیهم‌السلام</a>
										</li>
										<li>
											<a href="./audio-content?id=44972" title="1398/11/26"><img alt="کلیپ صوتی | درس‌های فاطمی" rel="./assets/ndata/news/44972/smps.jpg">کلیپ صوتی | درس‌های فاطمی</a>
										</li>
										<li>
											<a href="./audio-content?id=44974" title="1398/11/21"><img alt="کلیپ صوتی | پیروزی تضمین شده ملت ایران" rel="./assets/ndata/news/44974/smps.jpg">کلیپ صوتی | پیروزی تضمین شده ملت ایران</a>
										</li>
										<li>
											<a href="./audio-content?id=44849" title="1398/11/19"><img alt="دیدار فرماندهان و کارکنان نیروی هوایی ارتش" rel="./assets/ndata/news/44849/smps.jpg">دیدار فرماندهان و کارکنان نیروی هوایی ارتش</a>
										</li>
										<li class="__last" style="width: 1px; height: 1px; visibility: hidden;"></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="gd_4">
						<div id="video" class="box">
							<div class="curve-tl"></div>
							<div class="curve-tr"></div>
							<div class="box-head">
								<div class="box-head-bg">
									<h3 class="box-title">
										<a href="./video-index" title="آرشیو فیلم"><span class="box-icon video-glossy-icon"></span></a>
									</h3>
									<div class="navigation">
										<a class="navigate-up disabled" id="navigate-up-video"><span>Up</span></a><a class="navigate-down" id="navigate-down-video"><span>Down</span></a>
									</div>
								</div>
							</div>
							<div class="box-body">
								<div id="video-list" class="box-inside-wrapper" rel="next">
									<ul class="box-inner-vertical">
										<li>
											<a href="./video-content?id=45119" title="1398/12/16"><img alt="مجله اینترنتی نگار | شماره چهارم: بیانات رهبر انقلاب برای مقابله با کرونا" src="./assets/ndata/smps(26).jpg">مجله اینترنتی نگار | شماره چهارم: بیانات رهبر انقلاب برای مقابله با کرونا</a>
										</li>
										<li>
											<a href="./video-content?id=45129" title="1398/12/16"><img alt="نماهنگ | رزمایش همدلی" src="./assets/ndata/smps(27).jpg">نماهنگ | رزمایش همدلی</a>
										</li>
										<li>
											<a href="./video-content?id=45127" title="1398/12/16"><img alt="نماهنگ | توصیه‌های رهبر انقلاب درباره مقابله با کرونا" src="./assets/ndata/smps(28).jpg">نماهنگ | توصیه‌های رهبر انقلاب درباره مقابله با کرونا</a>
										</li>
										<li>
											<a href="./video-content?id=45085" title="1398/12/14"><img alt="بین سطورِ کرونا در آمریکا" src="./assets/ndata/smps(29).jpg">بین سطورِ کرونا در آمریکا</a>
										</li>
										<li>
											<a href="./video-content?id=45086" title="1398/12/14"><img alt="دشواری‌ها به لطف تو آسان شود..." src="./assets/ndata/smps(30).jpg">دشواری‌ها به لطف تو آسان شود...</a>
										</li>
										<li>
											<a href="./video-content?id=45089" title="1398/12/13"><img alt="کاشت نهال در آستانه روز درختکاری" src="./assets/ndata/smps(31).jpg">کاشت نهال در آستانه روز درختکاری</a>
										</li>
										<li>
											<a href="./video-content?id=45059" title="1398/12/12"><img alt="نماهنگ | بزک آمریکایی" src="./assets/ndata/smps(32).jpg">نماهنگ | بزک آمریکایی</a>
										</li>
										<li>
											<a href="./video-content?id=45056" title="1398/12/10"><img alt="مرور سریع | نگاهی به ابلاغیه سیاست‌های کلی سلامت" rel="./assets/ndata/news/45056/smps.jpg">مرور سریع | نگاهی به ابلاغیه سیاست‌های کلی سلامت</a>
										</li>
										<li>
											<a href="./video-content?id=45047" title="1398/12/10"><img alt="بین سطورِ بیماری کرونا" rel="./assets/ndata/news/45047/smps.jpg">بین سطورِ بیماری کرونا</a>
										</li>
										<li>
											<a href="./video-content?id=45045" title="1398/12/10"><img alt="مجله اینترنتی نگار | شماره سوم: پیام ویدئویی رهبر انقلاب در پی شیوع کرونا" rel="./assets/ndata/news/45045/smps.jpg">مجله اینترنتی نگار | شماره سوم: پیام ویدئویی رهبر انقلاب در پی شیوع کرونا</a>
										</li>
										<li>
											<a href="./video-content?id=45039" title="1398/12/08"><img alt="پیام تشکر از زحمات پزشکان و پرستاران در مبارزه با کرونا" rel="./assets/ndata/news/45039/smps.jpg">پیام تشکر از زحمات پزشکان و پرستاران در مبارزه با کرونا</a>
										</li>
										<li>
											<a href="./video-content?id=45026" title="1398/12/05"><img alt="بین سطورِ آمریکای بدهکار" rel="./assets/ndata/news/45026/smps.jpg">بین سطورِ آمریکای بدهکار</a>
										</li>
										<li class="__last" style="width: 1px; height: 1px; visibility: hidden;"></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="gd_4">
						<div id="memory" class="box">
							<div class="curve-tl"></div>
							<div class="curve-tr"></div>
							<div class="box-head">
								<div class="box-head-bg">
									<h3 class="box-title">
										<a href="./memory-index" title="خاطرات"><span class="box-icon memory-glossy-icon"></span></a>
									</h3>
									<div class="navigation">
										<a class="navigate-up disabled" id="navigate-up-memory"><span>Up</span></a><a class="navigate-down" id="navigate-down-memory"><span>Down</span></a>
									</div>
								</div>
							</div>
							<div class="box-body">
								<div id="memory-list" class="box-inside-wrapper" rel="next">
									<ul class="box-inner-vertical list-items">
										<li>
											<a href="./memory-content?id=44861" title="1398/11/20">برای زنان ایران</a>
										</li>
										<li>
											<a href="./others-memory?id=41348" title="1398/04/20">آقا گفتند اصل این است که کنار جوان‌ها باشید</a>
										</li>
										<li>
											<a href="./memory-content?id=42491" title="1398/02/22">لایحه‌ای که هنوز به مجلس نرسیده!</a>
										</li>
										<li>
											<a href="./memory-content?id=42355" title="1398/02/08">اگر تحریم نبودیم این کارها انجام نمی‌شد</a>
										</li>
										<li>
											<a href="./memory-content?id=44385" title="1398/01/13">کمک‌رسانی مردمی در زلزله سال ۴۷ فردوس</a>
										</li>
										<li>
											<a href="./memory-content?id=44384" title="1398/01/01">کارخانه‌های دولتی دست برج‌سازها نیفتد!</a>
										</li>
										<li>
											<a href="./memory-content?id=41636" title="1397/11/20">روایت آیت‌الله خامنه‌ای از حمله شبانه‌ی ساواک به منزل ایشان</a>
										</li>
										<li>
											<a href="./memory-content?id=44844" title="1397/11/19">همسر صبور</a>
										</li>
										<li>
											<a href="./memory-content?id=41440" title="1397/10/29">نظر امام درباره کارهایی که به سهولت انجام میشوند</a>
										</li>
										<li>
											<a href="./memory-content?id=44417" title="1397/09/19">دیدید که این جوری است؟</a>
										</li>
										<li>
											<a href="./memory-content?id=44467" title="1397/04/24">کارْ آماده نبود، افتتاحش می‌کردند!</a>
										</li>
										<li>
											<a href="./memory-content?id=44466" title="1397/04/24">رهبرانقلاب عمل کردن به کدام خصلت مرحوم هاشمی را به دکتر روحانی توصیه کرد؟</a>
										</li>
										<li>
											<a href="./memory-content?id=44465" title="1397/04/24">گفتگوی دکتر روحانی و رهبر انقلاب درباره ارز دولتی</a>
										</li>
										<li>
											<a href="./memory-content?id=44462" title="1397/04/24">گل خوردیم اما مردم ریختند توی خیابانها</a>
										</li>
										<li>
											<a href="./memory-content?id=44461" title="1397/04/06">ما در مساله‌ی زن تهاجم داریم نه دفاع</a>
										</li>
										<li class="__last" style="width: 1px; height: 1px; visibility: hidden;"></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="clear"></div>
				</div>
			</div>
		</div>
		<div id="appended-box">
			<div class="container">
				<div class="gd_3">
					<div id="appended" class="box">
						<div class="box-head">
							<div class="box-head-bg">
								<h3 class="box-title">
									<a href="javascript:void(0)" title=""><span class="box-icon" style="background: url(&#39;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAAAgCAYAAAAFbAo6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0M2MjM5OUIzMUYzMTFFQTg3Q0FFMEJGQTVCQzdEMDEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0M2MjM5OUEzMUYzMTFFQTg3Q0FFMEJGQTVCQzdEMDEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjIwMTJDQkYzMTQyMTFFQUI2MDNGQkI0RDJCQ0M2MDkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjIwMTJDQzAzMTQyMTFFQUI2MDNGQkI0RDJCQ0M2MDkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz640pgkAAAGkklEQVR42uxcQXbjRBCV87wf82BvcYIoXMDKCaZzgogVSxRWsIqyghVolqysOQHOCVAuwCgnQDkAD/kEodv8yvvT07Ilyzax6XpPz5HValVX/6r6VfLM6Pn5OfDi5RBy5k3g5WBiIhsfbfJ59GOij8kxr/UU1vBacLLNcdZxk2L9MddHdsxAwxrUKYHAOM+xOFCfNLrUR3nE+xLq40kfqd6c8ITwluujOgZFR3bqHI1GJ5cCAK4/6auv/6p+KE5kbTX+TPWaFvtMo6+iQDiCUG50e9THpT5uTghohtZMsb58B/NF+9R33AdQ5lNvVOO4nOpjMSScb5h/kOg5jV5iyDI4HYlADcya6h1E/w/60zhjvg9l+0S2jL3H8oIEG7qVd+qj6gJWY5AT41uDoo+2uSl2Yv1p7J91vR+ZKHEA14jal43PenpRTAvmqm7aUsGuq27l81Yf55h/k3emr4UDDt0Qs3ZsfN8KP7Oidt+IlsOOc/1sRVmlQBE421fFPu4xtkJFF0CZkoD3YKXDAtdLyyMnWGiDa8a7bgCy0gHI2jKm0ufpDsAyGZiuhTbUHZ+3Gi9roTaMXF90yQxik6FUBfZfUiaZEBBD7F8n+fXnr5z1hKk1h4BtQUrFOBdFZzBgiEh1zwrra+bva5zeU4QKUUU1JlKYzYBBKomW+vy9SRMYX+8CaNA97sFl7DT1AnrRe82zSkSg3MoSS2zuZB3Q8PwGzhEBKEM4Xg1dcis6Tux0uyU1em4D3HjNIhN4oywuIQCxgUTJuVR8+hpHtBxjPsN9vDERgGbGR8RHIqQLJUax07KM7WMQAv1dx/EJni9pX6G9MKWIlWFjagtkMdZQ2JECQO0aoSXaSGao1oAytSM/dJHUObEdFmus2I6wtdHZ0AXh0llHkLm+G7VyNiioBGhyTgs9x6sfM9lviFb3IKt26vwWhp84IsAbjDE84Y1ZHMYIQJ3eBQMVqJ4Ki0tl9lijpz4azHnBUQoFSujgUw30WBU/4Dd2a0BBb0UtIKPP37CLRJGgT2sI85S45y3sLZy5cYwtsDdlS0a6xr2RA6BzKwsZ2/xu7oOd33bNAttyNkVpko2akUfOhW+5monE3dalsyd42h3mrREtOG03lHIZ+Dl5LEcB5kUJ5riD1yuHDilFz5wiSMY8C88ssEFPxN0+kI4LOM4j9EgoKwSbemGYWyJihqhvbPwLPWNCoIgp2sW2YwKEM6IgkdgGvUaxx7llj1XTmxy32SKqfcLh2sBmNoa9QAweWenMRL+4pTwvAdAlokPt4A9TipYVbYwiT1UEthmiRgCPu6LoK164hNGMN7+jDXZFlgI6msjFlfVHvSas2aw1wd+2c5VEF750rNV8fwsdaysVCrgj6GLkzmo8P4LPzrAHNRVrC+G0lP6m5BAX4Hw1dJzhWoFnvqO5coC8oHPlWG8foL2MG7d4l90UNca8okoyaGuQ4n6pRHNOq5bUtLlLzJ0SOBqLX5QoPkTeS0SFB94iopwLL5N0CZ0yS8cCm7ykzYlg2AWNVRbvWnEgcqgbbFYCGtC0VPISQc7hFC55gM0W5EAZOdwTdBUOl4iudoULPe1oVwNssidStF2Bm8WSKSgzhRvANuoIOGdkC8ER7PbAyujgLzeOCov7QNmmLjQ87QpGK3CeIIKw57Je9xLxBMQUUS5xLUVqL1y9KAAthwEL4jI50lZBLYoQ872sxwKCVIcVonfTslbDfy4FkNbmS6SrWiIiA1jRPhh7NdgPoRZXco+McbRsKnIcaTsprCOmZ8m49N/vvg8GAG5VIHzyIv6Li58i8JBHQrQiwt5s4GGllYL7tCWeOSJZPEJtO+8em7vS2qioPXPMbyeE/0kEfPnBQtuLeOqzbQTb2OGFxlMeKeSLXBI/CuEJkuNr4h9Df3lwi/klugkJjnsardd7VnorIr2otAOZX8C50uA0RCFN10H/n5SNHKDr1GdT1H5oAKjKQn8AQlsTH4qDYb+teoBHXdN3T65Kaw1gMgJ+2OPZOVVuDxueo6QyX8NJj05QgTYDf6o06vUGAZGq7f3YplcbQ7r8iQXyEtyja4TKpCLdotPOb0g2pcTqtaX0HQKuF9C++e6PdVHu4y93+eNJ04h0tUIOyDkkmpV90yjur9F89v9Owe5b7ODHk+MT88pqYBpXPVOvl/8QbPX/HKxe1siZB5uXYwWbFy8HA1vjTerlUGBbeJN6aZOR/49lvHjO5sWDzYuXbeUfAQYA6+qmGG0g86cAAAAASUVORK5CYII=&#39;) no-repeat center right; width:155px; height:32px"></span></a>
								</h3>
							</div>
						</div>
						<div class="box-body">
							<div id="appended-list" class="box-inside-wrapper" rel="next" style="direction: rtl;">
								<ul class="box-inner-horizontal">
									<li style="float: right;">
										<a href="./photo-album?id=44582" title=""><img alt="لوح: یا حسین فرماندهی از آن توست..." src="./assets/ndata/44582.jpg"><span>لوح: یا حسین فرماندهی از آن توست...</span></a>
									</li>
									<li style="float: right;">
										<a href="./others-note?id=44644" title=""><img alt="تحلیل: خون‌آوردهای حاج‌قاسم" src="./assets/ndata/44644.jpg"><span>تحلیل: خون‌آوردهای حاج‌قاسم</span></a>
									</li>
									<li style="float: right;">
										<a href="./video-content?id=44619" title=""><img alt="فیلم: روز وصل دوستداران یاد باد..." src="./assets/ndata/44619.jpg"><span>فیلم: روز وصل دوستداران یاد باد...</span></a>
									</li>
									<li style="float: right;">
										<a href="./shahid-soleymani/" title=""><img alt="فراخوان: پاسخ مردم به پیام رهبر انقلاب" src="./assets/ndata/00000.jpg"><span>فراخوان: پاسخ مردم به پیام رهبر انقلاب</span></a>
									</li>
									<li style="float: right;">
										<a href="./message-content?id=44554" title=""><img alt="پیام تسلیت در پی شهادت شهید سپهبد قاسم سلیمانی" src="./assets/ndata/44554.jpg"><span>پیام تسلیت در پی شهادت شهید سپهبد قاسم سلیمانی</span></a>
									</li>
									<li style="float: right;">
										<a href="./photo-album?id=44571" title=""><img alt="سخن‌نگاشت پیام تسلیت " src="./assets/ndata/44571.jpg"><span>سخن‌نگاشت پیام تسلیت </span></a>
									</li>
									<li style="float: right;">
										<a href="./message-content?id=44555" title=""><img alt="" src="./assets/ndata/44555.jpg"><span>انتصاب سردار سرتیپ قاآنی به فرماندهی نیرو قدس سپاه</span></a>
									</li>
									<li style="float: right;">
										<a href="./news-content?id=44561" title=""><img rel="/ndata/news/appends/44561.jpg" alt="حضور رهبر انقلاب در منزل سپهبد شهید حاج قاسم سلیمانی"><span>حضور رهبر انقلاب در منزل سپهبد شهید حاج قاسم سلیمانی</span></a>
									</li>
									<li style="float: right;">
										<a href="./speech-content?id=44574" title=""><img rel="/ndata/news/appends/44574.jpg" alt="بیانات در منزل سپهبد شهید حاج قاسم سلیمانی"><span>بیانات در منزل سپهبد شهید حاج قاسم سلیمانی</span></a>
									</li>
									<li style="float: right;">
										<a href="./photo-album?id=44566" title=""><img rel="/ndata/news/appends/44566.jpg" alt="تصاویر حضور در منزل سپهبد شهید سلیمانی"><span>تصاویر حضور در منزل سپهبد شهید سلیمانی</span></a>
									</li>
									<li style="float: right;">
										<a href="./photo-album?id=44572" title=""><img rel="/ndata/news/appends/44572.jpg" alt="سخن‌نگاشت حضور در منزل سپهبد شهید سلیمانی"><span>سخن‌نگاشت حضور در منزل سپهبد شهید سلیمانی</span></a>
									</li>
									<li style="float: right;">
										<a href="./video-content?id=44595" title=""><img rel="/ndata/news/appends/44595.jpg" alt="فیلم حضور در منزل سپهبد شهید حاج قاسم سلیمانی"><span>فیلم حضور در منزل سپهبد شهید حاج قاسم سلیمانی</span></a>
									</li>
									<li style="float: right;">
										<a href="./video-content?id=44600" title=""><img rel="/ndata/news/appends/44600.jpg" alt="نماهنگ | ابومهدی"><span>نماهنگ | ابومهدی</span></a>
									</li>
									<li style="float: right;">
										<a href="./video-content?id=44559" title=""><img rel="/ndata/news/appends/44559.jpg" alt="نماهنگ | سردار آسمانی"><span>نماهنگ | سردار آسمانی</span></a>
									</li>
									<li style="float: right;">
										<a href="./video-content?id=44573" title=""><img rel="/ndata/news/appends/44573.jpg" alt="نماهنگ | رقص در خون"><span>نماهنگ | رقص در خون</span></a>
									</li>
									<li style="float: right;">
										<a href="./photo-album?id=44560" title=""><img rel="/ndata/news/appends/44560.jpg" alt="لوح | سردار بزرگ و پر افتخار اسلام آسمانی شد"><span>لوح | سردار بزرگ و پر افتخار اسلام آسمانی شد</span></a>
									</li>
									<li style="float: right;">
										<a href="./photo-album?id=44582" title=""><img rel="/ndata/news/appends/44582.jpg" alt="لوح | یا حسین فرماندهی از آن توست..."><span>لوح | یا حسین فرماندهی از آن توست...</span></a>
									</li>
									<li style="float: right;">
										<a href="./photo-album?id=44569" title=""><img rel="/ndata/news/appends/44569.jpg" alt="لوح | دلبستگان مقاومت، خونخواهان سلیمانی آسمانی"><span>لوح | دلبستگان مقاومت، خونخواهان سلیمانی آسمانی</span></a>
									</li>
									<li style="float: right;">
										<a href="./photo-album?id=44577" title=""><img rel="/ndata/news/appends/44577.jpg" alt="لوح | انتقام سخت"><span>لوح | انتقام سخت</span></a>
									</li>
									<li style="float: right;">
										<a href="./photo-album?id=44564" title=""><img rel="/ndata/news/appends/44564.jpg" alt="لوح | سلیمانی آسمانی"><span>لوح | سلیمانی آسمانی</span></a>
									</li>
									<li style="float: right;">
										<a href="./photo-album?id=44601" title=""><img rel="/ndata/news/appends/44601.jpg" alt="مجموعه لوح | سردار آسمانی"><span>مجموعه لوح | سردار آسمانی</span></a>
									</li>
									<li style="float: right;">
										<a href="./photo-album?id=44587" title=""><img rel="/ndata/news/appends/44587.jpg" alt="لوح |خط جهاد ادامه دارد"><span>لوح |خط جهاد ادامه دارد</span></a>
									</li>
									<li style="float: right;">
										<a href="./photo-album?id=44565" title=""><img rel="/ndata/news/appends/44565.jpg" alt="تصاویری از شهید سپهبد قاسم سلیمانی در کنار رهبر انقلاب"><span>تصاویری از شهید سپهبد قاسم سلیمانی در کنار رهبر انقلاب</span></a>
									</li>
									<li style="float: right;">
										<a href="./news-content?id=44603" title=""><img rel="/ndata/news/appends/44603.jpg" alt="اقامه نماز بر پیکر شهید سپهبد قاسم سلیمانی"><span>اقامه نماز بر پیکر شهید سپهبد قاسم سلیمانی</span></a>
									</li>
									<li style="float: right;">
										<a href="./photo-album?id=44606" title=""><img rel="/ndata/news/appends/44606.jpg" alt="تصاویر اقامه نماز بر پیکر شهید سپهبد قاسم سلیمانی"><span>تصاویر اقامه نماز بر پیکر شهید سپهبد قاسم سلیمانی</span></a>
									</li>
									<li style="float: right;">
										<a href="./video-content?id=44605" title=""><img rel="/ndata/news/appends/44605.jpg" alt="فیلم اقامه نماز بر پیکر شهید سپهبد قاسم سلیمانی"><span>فیلم اقامه نماز بر پیکر شهید سپهبد قاسم سلیمانی</span></a>
									</li>
									<li style="float: right;">
										<a href="./audio-content?id=44607" title=""><img rel="/ndata/news/appends/44607.jpg" alt="صوت اقامه نماز بر پیکر شهید سپهبد قاسم سلیمانی"><span>صوت اقامه نماز بر پیکر شهید سپهبد قاسم سلیمانی</span></a>
									</li>
									<li style="float: right;">
										<a href="./news-content?id=44580" title=""><img rel="/ndata/news/appends/44580.jpg" alt="فراخوان | پاسخ خود را به پیام رهبر انقلاب بنویسید"><span>فراخوان | پاسخ خود را به پیام رهبر انقلاب بنویسید</span></a>
									</li>
									<li style="float: right;">
										<a href="./speech-content?id=44558" title=""><img rel="/ndata/news/appends/44558.jpg" alt="تبیین و تحلیل | «پیروزیِ نهایی» از آن ملت ایران است..."><span>تبیین و تحلیل | «پیروزیِ نهایی» از آن ملت ایران است...</span></a>
									</li>
									<li style="float: right;">
										<a href="./speech-content?id=44579" title=""><img rel="/ndata/news/appends/44579.jpg" alt="تبیین و تحلیل | جهادِ حاج قاسم؛ شکست آمریکا"><span>تبیین و تحلیل | جهادِ حاج قاسم؛ شکست آمریکا</span></a>
									</li>
									<li style="float: right;">
										<a href="./others-note?id=44596" title=""><img rel="/ndata/news/appends/44596.jpg" alt="تبیین و تحلیل |تروریسم آشکار دولتی؛ نشانه قطعی زوالِ آمریکا"><span>تبیین و تحلیل |تروریسم آشکار دولتی؛ نشانه قطعی زوالِ آمریکا</span></a>
									</li>
									<li style="float: right;">
										<a href="./others-note?id=44584" title=""><img rel="/ndata/news/appends/44584.jpg" alt="تبیین و تحلیل |پیام خون حاج قاسم‌ها چیست؟"><span>تبیین و تحلیل |پیام خون حاج قاسم‌ها چیست؟</span></a>
									</li>
									<li style="float: right;">
										<a href="./news-content?id=44591" title=""><img rel="/ndata/news/appends/44591.jpg" alt="خط حزب‌الله | ویژه‌نامه شهادت شهید سپهبد سلیمانی"><span>خط حزب‌الله | ویژه‌نامه شهادت شهید سپهبد سلیمانی</span></a>
									</li>
									<li style="float: right;">
										<a href="./message-content?id=44592" title=""><img rel="/ndata/news/appends/44592.jpg" alt="پیام تسلیت حضرت آیت‌الله سیستانی به رهبر انقلاب اسلامی"><span>پیام تسلیت حضرت آیت‌الله سیستانی به رهبر انقلاب اسلامی</span></a>
									</li>
									<li class="__last" style="width: 1px; height: 1px; visibility: hidden; float: right;"></li>
								</ul>
								<div style="position:absolute; margin:97px 225px 0 0;" id="points9"></div>
							</div>
							<a class="navigate-right-big2 disabled" id="navigate-right-appended"></a><a class="navigate-left-big2" id="navigate-left-appended"></a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="multimedia">
			<div class="container">
				<div class="gd_3">
					<div class="box">
						<div class="box-head">
							<div class="box-head-bg">
								<h3 class="box-title">
									<a title="چندرسانه‌ای" href="./news-index?nt=51"><span class="box-icon multimedia-glossy-icon"></span></a>
								</h3>
								<div id="points2" style="width:100%; position:absolute; top:15px; text-align:center;">
									<div class="pointMarkerSelected"></div>
									<div class="pointMarker"></div>
									<div class="pointMarker"></div>
									<div class="pointMarker"></div>
									<div class="pointMarker"></div>
									<div class="pointMarker"></div>
									<div class="pointMarker"></div>
									<div class="pointMarker"></div>
									<div class="pointMarker"></div>
									<div class="pointMarker"></div>
								</div>
								<div class="subscribe">
									<a title="RSS چندرسانه‌ای" href="./rss?t=51" class="rss-icon"></a><a title="آرشيو" href="./news-index?nt=51" class="add-icon"></a>
								</div>
							</div>
						</div>
						<div class="box-body">
							<div class="box-inside-wrapper" id="multimedia-list" rel="next" style="direction: rtl;">
								<ul class="box-inner-horizontal">
									<li style="float: right;">
										<a href="./redirect?id=44641&amp;u=./shahid-soleymani/" title="1398/10/19"><img alt="پاسخ شما به پیام تسلیت رهبر انقلاب درپی شهادت سپهبد قاسم سلیمانی" src="./assets/ndata/smpf.jpg"><span>پاسخ شما به پیام تسلیت رهبر انقلاب درپی شهادت سپهبد قاسم سلیمانی</span></a>
									</li>
									<li style="float: right;">
										<a href="./redirect?id=37902&amp;u=./tag-content?id=19693" title="1398/08/12"><img alt="ریحانه" src="./assets/ndata/smpf(1).jpg"><span>ریحانه</span></a>
									</li>
									<li style="float: right;">
										<a href="./redirect?id=37766&amp;u=./defamoghaddas/" title="1398/07/15"><img alt="صفحه‌ی ویژه دفاع مقدس" src="./assets/ndata/smpf(2).jpg"><span>صفحه‌ی ویژه دفاع مقدس</span></a>
									</li>
									<li style="float: right;">
										<a href="./redirect?id=42671&amp;c=f57cf9bb8e90d2b426cb&amp;u=http://nojavan..ir/" title="1398/07/15"><img alt="نوجوان" src="./assets/ndata/smpf(3).jpg"><span>نوجوان</span></a>
									</li>
									<li style="float: right;">
										<a href="./redirect?id=41877&amp;u=./gaam2/" title="1398/07/14"><img alt="بیانیه «گام دوم انقلاب»" src="./assets/ndata/smpf(4).jpg"><span>بیانیه «گام دوم انقلاب»</span></a>
									</li>
									<li style="float: right;">
										<a href="./redirect?id=26728&amp;u=ndata/news/26728/index.html" title="1398/07/02"><img alt="دستخط مقاومت" src="./assets/ndata/smpf(5).jpg"><span>دستخط مقاومت</span></a>
									</li>
									<li style="float: right;">
										<a href="./redirect?id=33640&amp;u=./ndata/news/33640/index.html" title="1398/05/03"><img alt="برای فلسطین" src="./assets/ndata/smpf(6).jpg"><span>برای فلسطین</span></a>
									</li>
									<li style="float: right;">
										<a href="./redirect?id=37092&amp;u=./ndata/news/37092/index.html" title="1398/04/17"><img alt="مروری بر زندگینامه پدر گرامی رهبر انقلاب" rel="./assets/ndata/news/37092/smpf.jpg" src="./assets/ndata/smpf(7).jpg"><span>مروری بر زندگینامه پدر گرامی رهبر انقلاب</span></a>
									</li>
									<li style="float: right;">
										<a href="./redirect?id=41020&amp;u=./usa-decline/" title="1397/08/12"><img alt="افول آمریکا" rel="./assets/ndata/news/41020/smpf.jpg" src="./assets/ndata/smpf(8).jpg"><span>افول آمریکا</span></a>
									</li>
									<li style="float: right;">
										<a href="./redirect?id=31521&amp;u=./ebrat/" title="1397/07/16"><img alt="درس و عبرت" rel="./assets/ndata/news/31521/smpf.jpg" src="./assets/ndata/smpf(9).jpg"><span>درس و عبرت</span></a>
									</li>
									<li class="__last" style="width: 1px; height: 1px; visibility: hidden; float: right;"></li>
								</ul>
							</div>
							<a id="navigate-right-multimedia" class="navigate-right-big2 disabled"></a><a id="navigate-left-multimedia" class="navigate-left-big2"></a>
						</div>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
		<div id="bot-shadow"></div>
		<div align="center" id="footersitemap">
			<div style="width:957px;overflow: hidden;text-align:center" align="right">
				<div class="footer">
					<ul>
						<li class="titr">
							<a href="./speech">بيانات</a>
						</li>
						<li>
							<a href="./selected-index">گزیده بیانات</a>
						</li>
						<li>
							<a href="./speech?nt=4">پیام‌ها و نامه‌ها</a>
						</li>
						<li>
							<a href="./speech?nt=3">نقشه راه</a>
						</li>
						<li>
							<a href="./news-index?nt=49">مرور سریع</a>
						</li>
						<li>
							<a href="./news2?nt=52">پیشخوان</a>
						</li>
						<li>
							<a href="./speech?nt=32">ابلاغیه</a>
						</li>
						<li>
							<a href="./keyword-index">جستار</a>
						</li>
						<li>
							<a title="آرشیو موضوعی بیانات" href="./speech-topic">موضوعی</a>
						</li>
						<li>
							<a href="./speech-quran?npt=7">قرآن</a>
						</li>
						<li>
							<a href="./speech-hadis?npt=8">حدیث</a>
						</li>
						<li>
							<a href="./speech-nahj?npt=9">نهج‌البلاغه</a>
						</li>
						<li>
							<a href="./speech-family">خانواده ایرانی</a>
						</li>
					</ul>
					<ul>
						<li class="titr">
							<a href="./news-index">اخبار</a>
						</li>
						<li>
							<a href="./news-index">خبر</a>
						</li>
						<li>
							<a href="./around-index">حاشیه دیدارها</a>
						</li>
						<li>
							<a href="./news-index?nt=50">روزنگار</a>
						</li>
						<li>
							<a href="./page?id=20991">عضویت در سامانه پیامکی</a>
						</li>
						<li>
							<a href="./email-register">عضویت</a>
						</li>
					</ul>
					<ul>
						<li class="titr">
							<a href="./memory-index">خاطرات</a>
						</li>
						<li>
							<a href="./memory-index">خاطرات</a>
						</li>
						<li>
							<a href="./memory-content?id=5467">زندگی‌نامه</a>
						</li>
					</ul>
					<ul>
						<li class="titr">
							<a href="./treatise-index">علمی - فقهی</a>
						</li>
						<li>
							<a href="./treatise-index">استفتائات</a>
						</li>
						<li>
							<a href="./page?id=7102">راهنمای فتاوا</a>
						</li>
						<li>
							<a title="" href="./news-index?nt=56">رساله آموزشی</a>
						</li>
						<li>
							<a href="./tag-content?id=5478">استهلال ماهانه</a>
						</li>
						<li>
							<a href="./page?id=7100">درس خارج</a>
						</li>
						<li>
							<a href="./hadis-index">شرح حدیث</a>
						</li>
						<li>
							<a href="./treatise-imam">
								توضيح المسائل امام
							</a>
						</li>
					</ul>
					<ul>
						<li class="titr">
							<a href="./others">دیگران</a>
						</li>
						<li>
							<a href="./others-index?type=12">یادداشت</a>
						</li>
						<li>
							<a href="./others-index?type=13">گفتگو</a>
						</li>
						<li>
							<a href="./others-index?type=14">خاطره</a>
						</li>
						<li>
							<a href="./others-index?type=22">گزارش</a>
						</li>
						<li>
							<a href="./others-index?type=11">آرشیو پرونده ها</a>
						</li>
						<li>
							<a href="./others-index?type=33">صفحه ویژه</a>
						</li>
					</ul>
					<ul>
						<li class="titr">
							<a href="./book">کتاب</a>
						</li>
						<li>
							<a href="./book-archive?nt=46">تلمیحات و اشارات</a>
						</li>
						<li>
							<a href="./book-archive?nt=38&amp;oid=30">کتابخانه</a>
						</li>
						<li>
							<a href="./book-archive?nt=38&amp;oid=21">انتشارات</a>
						</li>
					</ul>
					<ul>
						<li class="titr">
							<a href="./photo-index">عکس</a>
						</li>
						<li>
							<a href="./photo-index?type=speech">تصاویر دیدارها</a>
						</li>
						<li>
							<a href="./photo-index?type=selected">تصاویر ویژه</a>
						</li>
						<li>
							<a href="./photo-index?type=poster">پوستر/سایز اصلی</a>
						</li>
						<li>
							<a href="./news-index?nt=51">چندرسانه‌ای</a>
						</li>
					</ul>
					<ul>
						<li class="titr">
							<a href="./audio-index">صوت</a>
						</li>
						<li>
							<a href="./audio-index?type=speech">صوت کامل بیانات</a>
						</li>
						<li>
							<a href="./audio-index?type=selected">صوت گزیده بیانات</a>
						</li>
						<li>
							<a href="./audio-index?type=clip">کلیپ صوتی</a>
						</li>
						<li>
							<a href="./podcast">نسخه پادکست</a>
						</li>
					</ul>
					<ul>
						<li class="titr">
							<a href="./video-index">فیلم</a>
						</li>
						<li>
							<a href="./video-index?type=speech">فیلم دیدارها</a>
						</li>
						<li>
							<a href="./video-index?type=selected">گزیده دیدارها</a>
						</li>
						<li>
							<a href="./video-index?type=clip">نماهنگ</a>
						</li>
						<li>
							<a title="" href="./video-index?type=news">گزارش خبری</a>
						</li>
					</ul>
				</div>
			</div>
			<div style="width:960px; padding:10px 10px 10px 0; height:26px;">
				<div class="footerLogo18x">
					<div>
						<a href="./"><span>خانه</span><img alt="" class="icon18x_home" src="./assets/spacer.gif"></a>
					</div>
					<div>
						<a href="http://www..ir/" target="_blank"><span>زبان های دیگر</span><img alt="" class="icon18x_lang" src="./assets/spacer.gif"></a>
					</div>
					<div>
						<a href="./contact"><span>ارتباط با ما</span><img alt="" class="icon18x_contact" src="./assets/spacer.gif"></a>
					</div>
					<div>
						<a href="./email-register" title="عضویت در سایت" class="showTooltip"><span>عضویت</span><img alt="Email Newsletter" title="عضویت در خبرنامه و پیامک" class="icon18x_contact showTooltip" src="./assets/spacer.gif"></a>
					</div>
					<div>
						<a href="./tag" title="کلیدواژه" class="showTooltip"><span>کلیدواژه</span><img alt="Tag Keywords" title="کلیدواژه" class="icon18x_key showTooltip" src="./assets/spacer.gif"></a>
					</div>
					<div>
						<a href="./telex"><span>تلکس خبری</span><img alt="" class="icon18x_about" src="./assets/spacer.gif"></a>
					</div>
					<div>
						<a href="./mobile" title="نسخه مناسب برای تلفن همراه" class="showTooltip"><span>تلفن همراه</span><img alt="" title="نسخه مناسب برای تلفن همراه" class="icon18x_mobile showTooltip" src="./assets/spacer.gif"></a>
					</div>
					<div>
						<a href="./rss"><span>RSS</span><img alt="" class="icon18x_rss" src="./assets/spacer.gif"></a>
					</div>
					<div>
						<a href="./podcast"><span>پادکست</span><img alt="" class="icon18x_padcast" src="./assets/spacer.gif"></a>
					</div>
					<div>
						<a href="./api" title=" API" class="showTooltip"><span>API</span><img alt="" class="icon18x_api" src="./assets/spacer.gif"></a>
					</div>
					<div class="last">
						<a href="./search"><span>جستجو</span><img alt="" class="icon18x_search" src="./assets/spacer.gif"></a>
					</div>
				</div>
				<div id="footer-search">
					<div onmouseout="this.removeAttribute(document.all?&#39;className&#39;:&#39;class&#39;,&#39;footer-search-hovered&#39;);" onmouseover="this.setAttribute(document.all?&#39;className&#39;:&#39;class&#39;,&#39;footer-search-hovered&#39;);" title="Search" id="footer-search-form">
						<input type="text" title="جستجو" name="Search" id="q2" class="footer-search-input"><input type="button" value="" title="جستجو" class="footer-search-button">
					</div>
				</div>
			</div>
		</div>
		<div align="center" id="footerCP">
			<div style="width:957px;overflow: hidden;" align="right">
				<div class="footerCopyright">پایگاه اطلاع رسانی بنیاد حیات طیبه علمای جهان اسلام</div>
				<div class="copyright">All Content by <a href="./">.ir</a> is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/deed.fa">Creative Commons Attribution 4.0 International License</a>.</div>
			</div>
		</div>
		<!-- <script type="text/javascript">
              if (location.href.indexOf('localhost') == -1){
              var _gaq = _gaq || [];
                _gaq.push(['_setAccount', 'UA-6238962-2']);
                _gaq.push(['_trackPageview']);
              (function() {
                 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                 var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
               })();
              }
		  </script> -->
		<!-- <script type="text/javascript" src="/assets/cssjs/video.min.js"></script>
		  <script type="text/javascript" src="/assets/cssjs/video-actions.js"></script>
		  <script type="text/javascript" src="/assets/cssjs/audio-actions.js"></script> -->
		<script type="text/javascript" src="/assets/cssjs/global.js"></script>
		<script type="text/javascript" src="/assets/cssjs/forms.js"></script>
		<script src="/assets/cssjs/jquery.plugin.scroll-2.js"></script>
		<script src="/assets/cssjs/homepage.js"></script>
		<!-- <script type="text/javascript">if (IEBrowser.Version() < 7) {document.getElementById('divAlertUpgradeBrowser').style.display="";}</script> -->
		<div id="divAlertUpgradeBrowser" class="fixed-position fixed-s" style="display:none">
			<div align="center" style="width: 100%;">
				<div style="width: 977px;">
					<div align="right" style="overflow: hidden; width: 881px; height: 40px;background: url(&#39;./assets/themes/fa_def/images/ver2/breaking_news_tile.gif&#39;) repeat-x ;" class="bgColor">
						<div style="display:inline;float:right;width:719px;padding-top:12px;padding-right:12px;">
							لطفا به منظور مشاهده بهتر سایت و مرور ایمن در اینترنت ، مرورگر خود را به نسخه بالاتر ارتقاء دهید
							یا از دیگر مرورگرها استفاده کنید.
						</div>
						<div style="display:inline;float:right;width:150px;">
							<img src="./assets/themes/fa_def/images/ver2/breaking_news_logo.gif" border="0"></div>
					</div>
				</div>
			</div>
		</div>
	</div>


	<iframe src="/assets/cssjs/start.html" style="display:none"></iframe>
</body>

</html>