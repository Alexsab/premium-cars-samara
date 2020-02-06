<?php 

$string = file_get_contents("./images/cars.json");
if ($string === false) {
    // deal with error...
}

$cars = json_decode($string);
if ($cars === null) {
    // deal with error...
}

?>
<!DOCTYPE html>
<html lang="ru">

<head>

	<meta charset="utf-8">

	<title>Premium Cars Samara</title>
	<meta name="description" content="Автомобили с пробегом">
	<meta name="keywords" content="подержанные автомобили самара, авто с пробегом в самаре, продажа авто, продажа подержанных автомобилей, автомобили бу, продажа авто бу"/>

	<meta property="og:title" content="Premium Cars Samara" />
	<meta property="og:type" content="website" />
	<meta property="og:description" content="Автомобили с пробегом в Самаре">
	<meta property="og:image" content="img/@1x/im.jpg">

	<meta name="viewport" content="width=device-width">
	
	<link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://alexsab.github.io/premium-cars-samara/icons/apple-touch-icon-57x57.png" />
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://alexsab.github.io/premium-cars-samara/icons/apple-touch-icon-114x114.png" />
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://alexsab.github.io/premium-cars-samara/icons/apple-touch-icon-72x72.png" />
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://alexsab.github.io/premium-cars-samara/icons/apple-touch-icon-144x144.png" />
	<link rel="apple-touch-icon-precomposed" sizes="60x60" href="https://alexsab.github.io/premium-cars-samara/icons/apple-touch-icon-60x60.png" />
	<link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://alexsab.github.io/premium-cars-samara/icons/apple-touch-icon-120x120.png" />
	<link rel="apple-touch-icon-precomposed" sizes="76x76" href="https://alexsab.github.io/premium-cars-samara/icons/apple-touch-icon-76x76.png" />
	<link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://alexsab.github.io/premium-cars-samara/icons/apple-touch-icon-152x152.png" />
	<link rel="icon" type="image/png" href="https://alexsab.github.io/premium-cars-samara/icons/favicon-196x196.png" sizes="196x196" />
	<link rel="icon" type="image/png" href="https://alexsab.github.io/premium-cars-samara/icons/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/png" href="https://alexsab.github.io/premium-cars-samara/icons/favicon-32x32.png" sizes="32x32" />
	<link rel="icon" type="image/png" href="https://alexsab.github.io/premium-cars-samara/icons/favicon-16x16.png" sizes="16x16" />
	<link rel="icon" type="image/png" href="https://alexsab.github.io/premium-cars-samara/icons/favicon-128.png" sizes="128x128" />
	<meta name="application-name" content="Premium Cars Samara"/>
	<meta name="msapplication-TileColor" content="#000000" />
	<meta name="msapplication-TileImage" content="https://alexsab.github.io/premium-cars-samara/icons/mstile-144x144.png" />
	<meta name="msapplication-square70x70logo" content="https://alexsab.github.io/premium-cars-samara/icons/mstile-70x70.png" />
	<meta name="msapplication-square150x150logo" content="https://alexsab.github.io/premium-cars-samara/icons/mstile-150x150.png" />
	<meta name="msapplication-wide310x150logo" content="https://alexsab.github.io/premium-cars-samara/icons/mstile-310x150.png" />
	<meta name="msapplication-square310x310logo" content="https://alexsab.github.io/premium-cars-samara/icons/mstile-310x310.png" />
	
	<meta name="theme-color" content="#000000">
	<link rel="stylesheet" href="css/styles.min.css?201910191558">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
	

<?php if(($pos = strpos($_SERVER['SERVER_NAME'], '127.0.0.1')) === FALSE): ?>
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
   ym(55810999, "init", {clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
   ym(55834846, "init", {clickmap:true, trackLinks:true, accurateTrackBounce:true });
</script>
<noscript><div><img data-src="https://mc.yandex.ru/watch/55810999" style="position:absolute; left:-9999px;" alt="" /><img src="https://mc.yandex.ru/watch/55834846" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
<script src="//cdn.callibri.ru/callibri.js" type="text/javascript" charset="utf-8"></script>
<?php endif; ?>
</head>

<body>

	<!-- Header -->
	<header class="header" itemscope itemtype="http://schema.org/Organization">
		<div class="header-top">
			<div class="header-top-logo">
				<img class="lazy img-logo" itemprop="logo"
				src="data:image/gif;base64,R0lGODlhBwACAIAAAP///wAAACH5BAEAAAEALAAAAAAHAAIAAAIDjI9YADs="
				data-src="img/@1x/logo-SA-white-tiny.png"
				data-srcset="img/@1x/logo-SA-white-tiny.png 1x, img/@2x/logo-SA-white-tiny.png 2x"
				alt="Самарские автомобили">
			</div>
			<div class="header-top-contact">
				<address itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"><span itemprop="addressLocality">Самара</span>, <span itemprop="streetAddress">Московское шоссе, 262</span></address>
				<a class="callibri_phone" href="tel:+78469936677"><span itemprop="telephone">+7 (846) 993 66 77</span></a>
			</div>
		</div>
		<div class="content">
			<h1 class="header-name" itemprop="name"><span>Premium</span> <span>Cars</span> <span>Samara</span></h1>
			<p class="header-desc">Автомобили с&nbsp;пробегом</p>
		</div>
	</header>

	<!-- Intro -->
	<section id="intro" class="main absolute">
		<div class="content">
	<script>
		<?php /* disable filter * / ?>
			<form id="filter_table">
				<div class="select_container">
					<select name="models">
						<option value="">КАТАЛОГ</option>
					</select>
				</div>
				<div class="select_container">
					<select name="price">
						<option value="">СТОИМОСТЬ</option>
						<option value="_500">до 500 тыс.</option>
						<option value="500_1000">от 500 тыс. до 1 млн.</option>
						<option value="1000_2000">от 1 млн. до 2 млн.</option>
						<option value="2000_3000">от 2 млн. до 3 млн.</option>
						<option value="3000_4000">от 3 млн. до 4 млн.</option>
						<option value="4000_">от 4 млн.</option>
					</select>
				</div>
				<div class="select_container">
					<select name="year">
						<option value="">ГОД ВЫПУСКА</option>
					</select>
				</div>
				<div class="select_container">
					<button>НАЙТИ</button>
				</div>
			</form>
		<?php/**/?>
	</script>
			
			

			<div class="kdx-ui-list__box">
				<?php
					function cmp($a, $b) {
					    return $a->price > $b->price;
					}

					usort($cars, "cmp");

                    // create car list 
                   	foreach ($cars as $key => &$value) {
                   		if(strpos($value->params, " км,") !== FALSE)
		                    include 'images/item.php';
                    }
                ?>
			</div>
		</div>
	</section>

	<button id="scrolltop" title="Наверх">Наверх</button>
	
	<div class="cookie">
	    <div class="cookie-inner">
	        <p class="df-text-input-14px cookie-desktop">Данный веб-сайт использует cookie-файлы с&nbsp;целью повышения удобства и&nbsp;эффективности работы пользователя.</p>
	        <p class="df-text-input-14px cookie-mobile">Данный веб-сайт использует cookie-файлы</p>
	        <div class="cookie-buttons">
	            <a href="//www.probegcentr.ru/conf_probegcenter.pdf" target="_blank" class="df-button cookie-more">Подробнее</a>
	            <a href="#" class="df-button cookie-agree">Согласен</a>
	        </div>
	    </div>
	</div>

	<div id="reserve" style="display: none;width:100%;max-width:660px;">
	    <h2 class="mb-3">
	        Зарезервировать автомобиль
		    <p class="car"></p>
	    </h2>
		<form id="contact" name="contact" class="" action="#" method="post">
			<input type="hidden" id="carname" name="carname" value="">
			<input type="hidden" id="caryear" name="caryear" value="">
			<input type="hidden" id="carprice" name="carprice" value="">
	        <p class="form-group input">
	        	<label for="inputName" class="input__title">Имя</label>
	            <input id="inputName" type="text" value="" name="first-name" class="form-control input__field required" placeholder="Как вас зовут?" required/>
	        </p>
	        <p class="form-group input">
	        	<label for="inputPhone" class="input__title">Телефон <sup>*</sup></label>
	            <input id="inputPhone" type="tel"  value="" name="phone" class="form-control input__field input_tel required" placeholder="Ваш номер телефона" required pattern="\+7[ -][0-9]{3}[ -][0-9]{3}[ -][0-9]{2}[ -][0-9]{2}"/>
	            <small>Телефон в формате +7 999 999-99-99</small>
	        </p>
	        <p class="form-check">
	        	<input type="checkbox" class="form-check-input custom-control-input agreement__input required" id="politikaCheckbox" name="agree" value="" required>
				<label class="form-check-label custom-control-label" for="politikaCheckbox"><a href="//www.probegcentr.ru/conf_probegcenter.pdf" target="_blank">Согласен с условиями обработки персональных данных</a></label>
	        </p>
	        <p class="mb-0 text-right">
	            <button id="send" class="btn btn-primary" >Зарезервировать</button>
	        </p>
	    </form>
	</div>

	<script type="text/javascript" src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&mode=debug"></script>
	<script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
	<script src="js/scripts.min.js?201910191558"></script>
</body>
</html>
