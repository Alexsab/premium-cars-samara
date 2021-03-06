// $(function() {
document.addEventListener("DOMContentLoaded", function() {

	var $$$ = function(name) { return document.querySelector(name) },
		$$ = function(name) { return document.querySelectorAll(name) },
		cars = [{"name":"Mercedes-Benz GL-класс","year":"2014","price":"2439000","images":["6182947682","6182947609","6182947629","6182947665","6182947684"],"params":"83 677 км, 3.0  AT  (249 л.с.) , внедорожник, полный, дизель"},{"name":"Infiniti QX80","year":"2018","price":"4955000","images":["6020795950","6020779430","6020779743","6020781054","6020779567"],"params":"5.6  AT  (405 л.с.) , внедорожник, полный, бензин"},{"name":"Infiniti QX80","year":"2019","price":"4755000","images":["6173877478","6173877673","6173876578","6173880856","6173878741"],"params":"5.6  AT  (405 л.с.) , внедорожник, полный, бензин"},{"name":"Infiniti QX60","year":"2018","price":"2875000","images":["5999858251","5999758892","5999759360","5999759440","5999755902"],"params":"3.5  CVT  (262 л.с.) , внедорожник, полный, бензин"},{"name":"Infiniti QX50","year":"2019","price":"3090000","images":["5933901798","5933906546","5933906542","5933906559","5933903147"],"params":"2.0  CVT  (249 л.с.) , внедорожник, полный, бензин"},{"name":"SsangYong Actyon","year":"2013","price":"630000","images":["6011995756","6011993626","6011996036","6011995909","6012024795"],"params":"67 218 км, 2.0  AT  (149 л.с.) , внедорожник, полный, бензин"},{"name":"Hyundai Elantra","year":"2016","price":"759000","images":["6012111498","6012109319","6012111550","6012109977","6012111564"],"params":"96 212 км, 1.6  AT  (128 л.с.) , седан, передний, бензин"},{"name":"Infiniti QX50","year":"2019","price":"3030000","images":["5933957088","5933955800","5933954405","5933957015","5933956976"],"params":"2.0  CVT  (249 л.с.) , внедорожник, полный, бензин"},{"name":"Peugeot 408","year":"2014","price":"459000","images":["6010792707","6010792592","6010792668","6010792635","6010792346"],"params":"62 000 км, 1.6  AT  (120 л.с.) , седан, передний, бензин"},{"name":"Mercedes-Benz Vito","year":"2017","price":"4650000","images":["6146558855","6146557290","6146557602","6146560674","6146559942"],"params":"26 950 км, 2.1  AT  (190 л.с.) , минивэн, полный, дизель"},{"name":"Infiniti JX","year":"2012","price":"1600000","images":["5998746688","5998747178","5998752923","5998746597","5998746671"],"params":"63 000 км, 3.5  CVT  (262 л.с.) , внедорожник, полный, бензин"},{"name":"Infiniti QX50","year":"2019","price":"3470000","images":["6052466413","6052467110","6052469032","6052468478","6052466877"],"params":"2.0  CVT  (249 л.с.) , внедорожник, полный, бензин"},{"name":"Infiniti QX60","year":"2018","price":"3380000","images":["5978565084","5978553477","5978565096","5978565079","5978558238"],"params":"1 070 км, 2.5  CVT  (250 л.с.) , внедорожник, полный, гибрид"},{"name":"BMW X1","year":"2014","price":"970000","images":["6117854374","6117854470","6117855393","6117854253","6117854289"],"params":"77 100 км, 2.0  AT  (184 л.с.) , внедорожник, полный, дизель"},{"name":"Toyota Land Cruiser","year":"2015","price":"3350000","images":["6182812019","6182812029","6182812034","6182812124","6182812127"],"params":"137 000 км, 4.5  AT  (249 л.с.) , внедорожник, полный, дизель"},{"name":"BMW X3","year":"2014","price":"1299000","images":["5950340383","5950343671","5950344211","5950344398","5950345039"],"params":"110 000 км, 2.0  AT  (184 л.с.) , внедорожник, полный, бензин"},{"name":"Mercedes-Benz GLC-класс","year":"2016","price":"2200000","images":["6078570745","6078570783","6078570638","6078570778","6078570680"],"params":"40 543 км, 2.0  AT  (211 л.с.) , внедорожник, полный, бензин"},{"name":"Infiniti QX50","year":"2018","price":"2709000","images":["5933619687","5933619794","5933618224","5933619487","5933618271"],"params":"2.0  CVT  (249 л.с.) , внедорожник, полный, бензин"},{"name":"Nissan Murano","year":"2014","price":"1150000","images":["5948502868","5948503017","5948503039","5948502932","5948503007"],"params":"78 000 км, 3.5  CVT  (249 л.с.) , внедорожник, полный, бензин"},{"name":"Volkswagen Touareg","year":"2013","price":"1740000","images":["6173520928","6173520621","6173522345","6173524901","6173522412"],"params":"130 600 км, 3.6  AT  (249 л.с.) , внедорожник, полный, бензин"},{"name":"Infiniti QX80","year":"2017","price":"3950000","images":["6057183280","6057186235","6057192282","6057183250","6057185623"],"params":"2 000 км, 5.6  AT  (405 л.с.) , внедорожник, полный, бензин"},{"name":"Infiniti QX60","year":"2018","price":"3155000","images":["5934210376","5934222594","5934209143","5934222595","5934209804"],"params":"3.5  CVT  (262 л.с.) , внедорожник, полный, бензин"},{"name":"Infiniti QX50","year":"2018","price":"3480000","images":["5934057678","5934057787","5934058731","5934058236","5934058714"],"params":"2.0  CVT  (249 л.с.) , внедорожник, полный, бензин"},{"name":"Infiniti QX50","year":"2018","price":"3950000","images":["5934083256","5934083003","5934083531","5934084152","5934084770"],"params":"2.0  CVT  (249 л.с.) , внедорожник, полный, бензин"},{"name":"Infiniti QX50","year":"2019","price":"3195000","images":["5934026797","5934026799","5934023150","5934026793","5934021294"],"params":"2.0  CVT  (249 л.с.) , внедорожник, полный, бензин"},{"name":"Infiniti JX","year":"2013","price":"1199000","images":["5930494684","5930495689","5930495933","5930496110","5930496430"],"params":"119 000 км, 3.5  CVT  (262 л.с.) , внедорожник, полный, бензин"},{"name":"Infiniti QX70","year":"2014","price":"1649000","images":["5930804964","5930805587","5930806196","5930806438","5930807859"],"params":"111 700 км, 3.0  AT  (238 л.с.) , внедорожник, полный, дизель"}],
		models = [],
		prices = [],
		years = [],
		scrolltop = $$$('#scrolltop');

	// сортируем машины по возрастанию цены
	cars.sort(function(a, b){ return a.price - b.price; });

	// просто пример
	$$('.kdx-ui-card__carousel-cursor-detector').forEach(function(element) {
		element.addEventListener('click', function(t) {

		});
	});

	// делаем кнопку промотки наверх
	window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
	    scrolltop.style.display = "block";
	  } else {
	    scrolltop.style.display = "none";
	  }
	};
	scrolltop.addEventListener('click', function(t) {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	/* create cars list start */
	var i = 0,
		original = $$$('.kdx-ui-list__cell');
	function duplicate(imgArr = ["6182947682","6182947609","6182947629","6182947665","6182947684"], name = "Mercedes-Benz GL-класс", year = "2014", price = "2 439 000", params = "") {
		var clone = original.cloneNode(true); // "deep" clone
		clone.id = "duplicater" + ++i;
		clone.classList.remove('hide');
		clone.querySelector('.item-slider').setAttribute('data-fancybox-trigger','gallery'+imgArr[0]);
		clone.querySelector('.replace-name').innerText = name;
		clone.querySelector('.replace-year').innerText = year;
		clone.querySelector('.replace-params').innerText = params;
		var priceFormated = new Intl.NumberFormat('ru', {}).format(price);
		clone.querySelector('.replace-price').innerHTML = '<span class="kdx-ui-card__before-price"></span>\
			 ' + priceFormated + '\
			<span class="kdx-ui-card__current-price-currency "> ₽</span>';
		clone.querySelector('.replace-oldprice').innerHTML = '<span class="kdx-ui-card__before-price"></span>\
			 ' + new Intl.NumberFormat('ru', {}).format(parseInt(price)*1.1) + '\
			<span class="kdx-ui-card__current-price-currency "> ₽</span>';
		var j = 0;
		clone.querySelectorAll('.kdx-ui-card__image-picture').forEach(function(element) {
			element.children[0].setAttribute('srcset','https://98.img.avito.st/208x156/'+imgArr[j]+'.jpg 1x, https://98.img.avito.st/640x480/'+imgArr[j++]+'.jpg 2x');
			element.children[1].setAttribute('alt',name);
			element.children[1].setAttribute('title',name);
		});
		// or clone.id = ""; if the divs don't need an ID
		original.parentNode.appendChild(clone);

		addGallery('gallery'+imgArr[0], imgArr);
		reserveCar('#'+clone.id+' .reserve-btn', name, year, priceFormated)

		models.push(name.split(" ")[0]);
		prices.push(price);
		years.push(year);
	}
	cars.forEach(function(element) {
		duplicate(element.images, element.name, element.year, element.price, element.params);
	});
	// original.classList.remove('hide');
	original.parentNode.removeChild(original);
	/* create cars list end */
	setLocation();

	/**
	 * разделить массив arr на равные n частей
	 * @param  {[type]} arr [description]
	 * @param  {[type]} n   [description]
	 * @return {[type]}     [description]
	 */
	function splitTo( arr, n) {
	  var plen = Math.ceil(arr.length / n);

	  return arr.reduce( function( p, c, i, a) {
		if(i%plen === 0) p.push({});
		p[p.length-1][i] = c;
		return p;
	  }, []);
	}
	// prices = splitTo( prices, 5);

	/**
	 * добавить значение в фильтр
	 * @param {[type]} parent  в какой select
	 * @param {[type]} array  массив значений
	 */
	function addOption(parent, array) {
		// <option value="avto1">Модель 1</option>
		// <option value="price100">100 000 - 200 000</option>
		// <option value="year2018">от 2018</option>
		array.forEach(function(element) {
			parent.innerHTML += '<option value="'+element+'">'+element+'</option>';
		});
	}

	/* если есть фильтр на странице */
	if($('#filter_table') && false) {
		models = [...new Set(models)].sort();
		// prices = [...new Set(prices)].sort((a, b) => a - b);
		years = [...new Set(years)].sort();

		addOption($('select[name="models"]'), models);
		// addOption($('select[name="price"]'), prices);
		addOption($('select[name="year"]'), years);
		// console.log([models, prices, years]);
	}

	/* скрипт для того чтобы спарсить авито */
	if(location.host == 'www.avito.ru')	{
		var cars = [];
		$$('.catalog_table .item__line').forEach(function(element) {
			var name_year = element.querySelector('span[itemprop="name"]').innerText;
			var name = name_year.match(/(.*)?,/)[1];
			var year = name_year.match(/, (\d+)/)[1];
			var price = element.querySelector('span[itemprop="price"]').innerText.match(/\d+/g).join('');
			var params = element.querySelector('.specific-params').innerText;
			var images = [];
			element.querySelectorAll('.item-slider .item-slider-image img').forEach(function(image) {
				// //65.img.avito.st/208x156/6182947665.jpg
				images.push(image.src.match(/(\d+)\.jpg/)[1]);
			});
			cars.push({name: name, year: year, price: price, images: images, params: params});
		});

		JSON.stringify(cars);
		window.prompt("Copy to clipboard: Ctrl+C (CMD+C), Enter", JSON.stringify(cars));
		console.log(JSON.stringify(cars));
	}
	/**/

	// });

	function setLocation() {
		$('.kdx-ui-location').fancybox({
				type: "html",
				src:
	        '<div class="fc-content p-5 rounded">\
		        <div id="map-here"></div>\
	        </div>',
	      touch: {
			    vertical: false, // Allow to drag content vertically
			    momentum: false // Continue movement after releasing mouse/touch when panning
			  },
			  baseClass: "fancybox-slide--map",
		    afterShow : function(instance, current) {
		        ymaps.ready(init);
		        var map,
		            placemark;

		        function init() {
		            var map = new ymaps.Map("map-here", {
		                center: [53.248313,50.2142483],
		                zoom: 14,
		                controls: []
		            });
		            map.behaviors.disable('scrollZoom');

		            placemark = new ymaps.Placemark([53.248313,50.2142483], { hintContent: 'INFINITI Самарские автомобили', balloonContent: '<h2>INFINITI Самарские автомобили</h2> <p>г.Самара, Московское шоссе, 262</p> <p>+7 (846) 993 66 77</p>' }, { preset: 'islands#redAutoIcon' });
		            map.geoObjects.add(placemark);
		        }
		    }
		});
	}


	function addGallery(fancyboxid, imgArr) {
		let fancyboxImages = [];
		imgArr.forEach(function(element) {
			fancyboxImages.push({ src: 'https://98.img.avito.st/640x480/'+element+'.jpg' });
		});
		$('[data-fancybox-trigger="'+fancyboxid+'"]').on('click', function() {
		  $.fancybox.open(fancyboxImages, {
			    loop : true
		  });
		})
	}

	function reserveCar(selector, name, year, price) {
		$(selector).on('click', function() {
		  $.fancybox.open({
		    src  : '#reserve',
		    type : 'inline',
		    opts : {
		      afterShow : function( instance, current ) {
		        console.info(['show', instance, current]);
		      },
		      beforeClose : function( instance, current, e ) {
			      	console.info(['close', instance, current, e]);
							// return false;
					}
		    }
		  });
		  $("#contact").submit(function() { console.info('submit'); return false; });
		});
	}

	// $(function() {
  function validateEmail(email) { 
		var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return reg.test(email);
	}
	function checkEmail(email) {
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
	}
	function checkPhone (phone) {
		// var reg = /\+7 \(\d{3}\) \d{3}-?\d{1}-?\d{1}-?\d{1}-?\d{1}/;
		// return reg.test(phone);
		return true;
	}

	$(document).ready(function() {		
		$("#send").on("click", function(){
			var nameval  = $("#inputName").val();
			var phoneval    = $("#inputPhone").val();
			var agreeval    = $("#politikaCheckbox").prop('checked');
			var namelen    = nameval.length;
			var phonevalid = checkPhone(phoneval);
			
			if(phonevalid == false) {
				$("#inputName").addClass("error");
			}
			else if(phonevalid == true){
				$("#inputName").removeClass("error");
			}
			
			if(namelen < 4) {
				$("#inputPhone").addClass("error");
			}
			else if(namelen >= 4){
				$("#inputPhone").removeClass("error");
			}
			
			if(phonevalid == true && namelen >= 4 && agreeval) {
				// если обе проверки пройдены
				// сначала мы скрываем кнопку отправки
				$("#submit").replaceWith("<em>отправка...</em>");
				
				$.ajax({
					type: 'POST',
					url: 'mail.php',
					data: $("#contact").serialize(),
					success: function(data) {
						if(data == "true") {
							$("#contact").fadeOut("fast", function(){
								$(this).before("<p><strong>Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.</strong></p>");
								console.info('fadeOut');
								setTimeout("$.fancybox.close()", 2000);
							});
						}
					}
				});
			}
		});
	});
});