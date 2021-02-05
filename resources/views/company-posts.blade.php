<!DOCTYPE html>
<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
	<title>میزان</title>
	<link rel="stylesheet" type="text/css" href="/css/style.css">
</head>

<body>
	<div class="mainApp">
		<div class="site-header">
			<div class="bismillah">
				<i class="icon mz-bismillah"></i>
			</div>
			<a href="/">
				<div class="site-brand">
					<img src="/img/logo.png">
				</div>
			</a>
			<ul class="main-menu">
				<li><a href="#">پیامستان</a></li>
				<li><a href="#">آموزش</a></li>
				<li><a href="#">مشاوره</a></li>
				<li><a href="/bank" class="active">اطلاعات</a></li>
			</ul>
			<div class="icon-menu">
				<a href="/" class="menu-item roselife">
					<img src="/img/rose.png">
				</a>
				<a href="/panel" class="menu-item">
					<i class="icon mz-user-c"></i>
				</a>
				<a href="/bank-data" class="menu-item">
					<i class="icon mz-search"></i>
				</a>
			</div>
			<div class="submenu-box">

				<ul>
					<li><a><i class="icon mz-menu"></i>درباره</a>
						<ul>
							<li><a href="#">درباره موسسه</a></li>
							<li><a href="#">اساسنامه</a></li>
							<li><a href="#">چشم انداز</a></li>
							<li><a href="#">بیانیه ماموریت</a></li>
							<li><a href="#">افتخارات و الواح</a></li>
							<li><a href="#">مجوزها</a></li>
							<li><a href="#">سوالات متداول</a></li>
						</ul>
					</li>
					<li><a href="#">عملکرد</a></li>
					<li><a href="#">موضوعات</a></li>
					<li><a href="#">پدیدآورندگان</a></li>
					<li><a href="#">اعضا</a></li>
					<li><a href="#">پیشنهاد سردبیر</a></li>
					<li><a href="#">گالری</a></li>
				</ul>

			</div>
		</div>


		<div class="intro-box">
			<div class="container main-pd">
				<h1 class="head-title">
					اخبار
				</h1>
			</div>
		</div>
		<main class="container">
			<div class="row">
				<div class="col-3">
					<div class="sidebar">
						<div class="filters">
							<div class="title">
								مخاطب
								<span class="checkbox-ui">
									<label>
										<input type="checkbox">
										<span>همه</span>
										<i class="icon mz-checkbox"></i>
									</label>
								</span>
							</div>
							<div class="body">
								<div class="btn-group btn-group-toggle unbi" data-toggle="buttons">
									<label class="btn btn-primary active">
										<input type="radio" name="gender" value="1" required=""> مردان
									</label>
									<label class="btn btn-primary">
										<input type="radio" name="gender" value="2" required=""> زنان
									</label>
								</div>
							</div>
							<div class="body">
								<div class="btn-group btn-group-toggle unbi" data-toggle="buttons">
									<label class="btn btn-primary">
										<input type="radio" name="gender" value="1" required=""> مجرد
									</label>
									<label class="btn btn-primary">
										<input type="radio" name="gender" value="2" required=""> متاهل
									</label>
								</div>
							</div>
						</div>
						<div class="filters">
							<div class="title">
								سن
								<span class="checkbox-ui">
									<label>
										<input type="checkbox">
										<span>همه</span>
										<i class="icon mz-checkbox"></i>
									</label>
								</span>
							</div>
							<div class="body">
								<div class="range-slider" start="[10, 80]">
									<div class="slider"></div>
									<div class="values">
										<div class="lower"><span></span>سال</div>
										<div class="upper"><span></span>سال</div>
									</div>
								</div>
							</div>
						</div>
						<div class="filters">
							<div class="title">
								قیمت
								<span class="checkbox-ui">
									<label>
										<input type="checkbox">
										<span>همه</span>
										<i class="icon mz-checkbox"></i>
									</label>
								</span>
							</div>
							<div class="body">
								<div class="range-slider" start="[0, 1000000]" range='{ "min": 0, "max": 100000000 }'>
									<div class="slider"></div>
									<div class="values">
										<div class="lower"><span></span>تومان</div>
										<div class="upper"><span></span>تومان</div>
									</div>
								</div>
							</div>
						</div>
						<div class="filters">
							<div class="title">
								علوم
								<span class="checkbox-ui">
									<label>
										<input type="checkbox">
										<span>همه</span>
										<i class="icon mz-checkbox"></i>
									</label>
								</span>
							</div>
							<div class="checkbox-ui column">
								<label>
									<input type="checkbox">
									<i class="icon mz-checkbox"></i>
									<span>فقهی</span>
								</label>
								<label>
									<input type="checkbox">
									<i class="icon mz-checkbox"></i>
									<span>حقوقی</span>
								</label>
								<label>
									<input type="checkbox">
									<i class="icon mz-checkbox"></i>
									<span>مدیریت</span>
								</label>
								<label>
									<input type="checkbox">
									<i class="icon mz-checkbox"></i>
									<span>تغذیه</span>
								</label>
							</div>
						</div>
						<div class="filters">
							<div class="title">
								جنس
								<span class="checkbox-ui">
									<label>
										<input type="checkbox">
										<span>همه</span>
										<i class="icon mz-checkbox"></i>
									</label>
								</span>
							</div>
							<div class="checkbox-ui column">
								<label>
									<input type="checkbox">
									<i class="icon mz-checkbox"></i>
									<span><i class="icon rl-music-note"></i> صوت </span>
								</label>
								<label>
									<input type="checkbox">
									<i class="icon mz-checkbox"></i>
									<span><i class="icon rl-play-arrow"></i> فیلم </span>
								</label>
								<label>
									<input type="checkbox">
									<i class="icon mz-checkbox"></i>
									<span><i class="icon rl-chart"></i> داده نما </span>
								</label>
								<label>
									<input type="checkbox">
									<i class="icon mz-checkbox"></i>
									<span><i class="icon rl-attach"></i> فایل </span>
								</label>
								<label class="more">
									<i class="icon mz-plus"></i>
									<span>بیشتر</span>
								</label>
							</div>
						</div>
						<div class="filters">
							<div class="title">
								شیوه پاسخگویی
								<span class="checkbox-ui">
									<label>
										<input type="checkbox">
										<span>همه</span>
										<i class="icon mz-checkbox"></i>
									</label>
								</span>
							</div>
							<div class="checkbox-ui column">
								<label>
									<input type="checkbox">
									<i class="icon mz-checkbox"></i>
									<span>پرسش و پاسخ</span>
								</label>
								<label>
									<input type="checkbox">
									<i class="icon mz-checkbox"></i>
									<span>فقط پرسش</span>
								</label>
								<label>
									<input type="checkbox">
									<i class="icon mz-checkbox"></i>
									<span>چند پاسخی</span>
								</label>
							</div>
						</div>
					</div>
				</div>
				<div class="col-9">
					<div class="posts-wrap" data-masonry='{ "itemSelector": ".box", "percentPosition": true}'>

						<div class="box npx shadow-d">
							<div class="box-cover">
								<img src="/sample_img/1.jpg">
							</div>
							<div class="box-text">
								<div class="box-title text-primary">
									عنوان خبر
								</div>
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
								است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
								فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
							</div>

						</div>

						<div class="box npx shadow-d">
							<div class="box-cover">
								<img src="/sample_img/1.jpg">
							</div>
							<div class="box-text">
								<div class="box-title text-primary">
									عنوان خبر
								</div>
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
								است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
								فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
							</div>

						</div>

						<div class="box npx shadow-d">
							<div class="box-cover">
								<img src="/sample_img/1.jpg">
							</div>
							<div class="box-text">
								<div class="box-title text-primary">
									عنوان خبر
								</div>
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
								است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
								فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
							</div>

						</div>

						<div class="box npx shadow-d">
							<div class="box-cover">
								<img src="/sample_img/1.jpg">
							</div>
							<div class="box-text">
								<div class="box-title text-primary">
									عنوان خبر
								</div>
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
								است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
								فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
							</div>

						</div>

						<div class="box npx shadow-d">
							<div class="box-cover">
								<img src="/sample_img/1.jpg">
							</div>
							<div class="box-text">
								<div class="box-title text-primary">
									عنوان خبر
								</div>
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
								است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
								فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
							</div>

						</div>

						<div class="box npx shadow-d">
							<div class="box-cover">
								<img src="/sample_img/1.jpg">
							</div>
							<div class="box-text">
								<div class="box-title text-primary">
									عنوان خبر
								</div>
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
								است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
								فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
							</div>

						</div>

						<div class="box npx shadow-d">
							<div class="box-cover">
								<img src="/sample_img/1.jpg">
							</div>
							<div class="box-text">
								<div class="box-title text-primary">
									عنوان خبر
								</div>
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
								است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
								فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
							</div>

						</div>

					</div>

					<nav aria-label="Page navigation example">
						<ul class="pagination">
							<li class="page-item disabled">
								<a class="page-link" href="#" aria-label="Previous">
									<span aria-hidden="true">&laquo;</span>
									<span class="sr-only">Previous</span>
								</a>
							</li>
							<li class="page-item active"><a class="page-link" href="#" persian>1</a></li>
							<li class="page-item"><a class="page-link" href="#" persian>2</a></li>
							<li class="page-item"><a class="page-link" href="#" persian>3</a></li>
							<li class="page-item">
								<a class="page-link" href="#" aria-label="Next">
									<span aria-hidden="true">&raquo;</span>
									<span class="sr-only">Next</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</main>


		<div class="page-backdrop"></div>
	</div>
	<footer>
		<div class="container">
			<div class="footbox">
				<div class="logo">
					<img src="/img/footer-logo.png">
				</div>
				<div class="menu">
					<a href="#">سیاست‌های حریم خصوصی</a>
					<a href="#">قوانین</a>
					<a href="#">تماس با ما</a>
				</div>
			</div>
			<div class="copyright">
				تمامی حقوق محفوظ است.
			</div>
		</div>
	</footer>
	<script type="text/javascript" src="/js/scripts.js"></script>

</body>

</html>