
// $(function() {
document.addEventListener("DOMContentLoaded", function() {
	
	var $$$ = function(name) { return document.querySelector(name) },
		$$ = function(name) { return document.querySelectorAll(name) },
		models = [],
		prices = [],
		years = [],
		scrolltop = $$$('#scrolltop');


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

	/* create cars list with js start deprecated */
	if(window.cars) {
		var cars = window.cars;
		// сортируем машины по возрастанию цены
		cars.sort(function(a, b){ return a.price - b.price; });
		var i = 0,
			original = $$$('.kdx-ui-list__cell');
		function duplicate(element) {
			// console.log([element.images, element.name, element.year, element.price, element.params, element.id, element.countImages]);
			// console.log([element.countImages=="", element.countImages==null]);
			// console.log([element.images[0], element.images[1]]);
			var clone = original.cloneNode(true); // "deep" clone
			clone.id = "duplicater" + ++i;
			clone.classList.remove('hide');
			clone.querySelector('.item-slider').setAttribute('data-fancybox-trigger','gallery'+element.id);
			clone.querySelector('.replace-name').innerText = element.name;
			clone.querySelector('.replace-year').innerText = element.year;
			clone.querySelector('.replace-params').innerText = element.params;
			clone.querySelector('.item-slider-more').innerHTML = (element.countImages!="") ? 'Ещё<br>'+(element.countImages-5)+' фото' : 'Ещё<br>фото';
			
			var priceFormated = new Intl.NumberFormat('ru', {}).format(element.price);
			clone.querySelector('.replace-price').innerHTML = '<span class="kdx-ui-card__before-price"></span>\
				 ' + priceFormated + '\
				<span class="kdx-ui-card__current-price-currency "> ₽</span>';
			clone.querySelector('.replace-oldprice').innerHTML = '<span class="kdx-ui-card__before-price"></span>\
				 ' + new Intl.NumberFormat('ru', {}).format(parseInt(element.price)*1.1) + '\
				<span class="kdx-ui-card__current-price-currency "> ₽</span>';
			
			var j = 0;
			clone.querySelectorAll('.kdx-ui-card__image-picture').forEach(function(cloneelem) {
				if(element.countImages!="") {
					cloneelem.children[0].setAttribute('srcset','\
						/uploads/'+element.id+'/images/'+j+'-576.jpg 1x,\
						/uploads/'+element.id+'/images/'+j+'-768.jpg 2x\
						');
				}
				else {
					cloneelem.children[0].setAttribute('srcset','https://98.img.avito.st/208x156/'+element.images[j]+'.jpg 1x, https://98.img.avito.st/640x480/'+element.images[j]+'.jpg 2x');
				}
				j++;
				cloneelem.children[1].setAttribute('alt',element.name);
				cloneelem.children[1].setAttribute('title',element.name);
			});
			// or clone.id = ""; if the divs don't need an ID
			original.parentNode.appendChild(clone);

			addGallery('gallery'+element.id, element.images, element.id, element.countImages);
			reserveCar('#'+clone.id+' .reserve-btn', element.name, element.year, priceFormated)

			models.push(element.name.split(" ")[0]);
			prices.push(element.price);
			years.push(element.year);
		}
		// cars.forEach(function(element) {
			// duplicate(element);
		// });
		// original.classList.remove('hide');
		original.parentNode.removeChild(original);
	}
	/* create cars list with js end */

	/* when we created list car at php */
	$$('.kdx-ui-list__cell').forEach(function(element) {
		
		addGallery(
			element.querySelector('.item-slider').getAttribute('data-fancybox-trigger'), 
			element.querySelector('.item-slider').getAttribute('data-images'),
			element.querySelector('.item').getAttribute('id'), 
			element.querySelector('.item-slider').getAttribute('data-count'),
			element.querySelector('.item-slider').getAttribute('data-avito')
		);
		reserveCar(
			'#'+element.getAttribute('id')+' .reserve-btn', 
			element.querySelector('.replace-name').textContent
				.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim(),
			element.querySelector('.replace-year').innerText,
			element.querySelector('.replace-price').innerText
		);
		reserveCar(
			'#'+element.getAttribute('id')+' .replace-name', 
			element.querySelector('.replace-name').textContent
				.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim(),
			element.querySelector('.replace-year').innerText,
			element.querySelector('.replace-price').innerText
		);
		element.addEventListener('click', function(t) {

		});
	});

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
		const copyToClipboard = str => {
			const el = document.createElement('textarea');
			el.value = str;
			el.setAttribute('readonly', '');
			el.style.position = 'absolute';
			el.style.left = '-9999px';
			document.body.appendChild(el);
			el.select();
			document.execCommand('copy');
			document.body.removeChild(el);
		};
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
		copyToClipboard(JSON.stringify(cars));
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
		    	ym('55810999', 'reachGoal', 'show_map');
		    	ym('55834846', 'reachGoal', 'show_map');
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


	function addGallery(fancyboxid, imgArr, id, countImages, avito) {
		let fancyboxImages = [];
		if(!avito) {
			let i = 0;
			while (i <= countImages) { // выводит 0, затем 1, затем 2
				fancyboxImages.push({ src: '/uploads/'+id+'/images/'+i+'-1920x1280.jpg' });
				i++;
			}
		} else {
			imgArr = imgArr.split(',');
			imgArr.forEach(function(element) {
				fancyboxImages.push({ src: 'https://98.img.avito.st/1280x960/'+element+'.jpg' });
			});
		}
		$('[data-fancybox-trigger="'+fancyboxid+'"]').on('click', function() {
		  $.fancybox.open(fancyboxImages, {
			    loop : true,
			    afterShow : function(instance, current) {
			    	ym('55810999', 'reachGoal', 'watch_gallery');
			    	ym('55834846', 'reachGoal', 'watch_gallery');
		    	}
		  });
		})
	}

	function reserveCar(selector, name, year, price) {
	    $(selector).on('click', function() {
	    	$("#reserve").find('.car').html(name);
	        $("#contact").find('#carname').attr('value',name);
	        $("#contact").find('#caryear').attr('value',year);
	        $("#contact").find('#carprice').attr('value',price);
	        $.fancybox.open({
	            src: '#reserve',
	            type: 'inline',
	            opts: {
	                afterShow: function(instance, current) {
	                    // console.info(['show', instance, current]);
	                    ym('55810999', 'reachGoal', 'leed_form_open');
	                    ym('55834846', 'reachGoal', 'leed_form_open');
	                },
	                beforeClose: function(instance, current, e) {
	                    // console.info(['close', instance, current, e]);
	                    // return false;
	                }
	            }
	        });
	        $("#contact").submit(function() {
	            return false;
	        });
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
		var reg = /\+7 \(?\d{3}\)? \d{3}-?\d{2}-?\d{2}/;
		return reg.test(phone);
		// return true;
	}

	function getCookie(name) {
	  var matches = document.cookie.match(new RegExp(
	    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	  ))
	  return matches ? decodeURIComponent(matches[1]) : undefined
	}
	function setCookie(name, value, props) {
	    props = props || {}
	    console.log(props);
	    var exp = props.expires
	    if (typeof exp == "number" && exp) {
	        var d = new Date()
	        d.setTime(d.getTime() + exp*1000)
	        exp = props.expires = d
	    }
	    if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }
	    value = encodeURIComponent(value)
	    var updatedCookie = name + "=" + value
	    for(var propName in props){
	        updatedCookie += "; " + propName
	        var propValue = props[propName]
	        if(propValue !== true){ updatedCookie += "=" + propValue }
	    	console.log(updatedCookie);
	    }
	    document.cookie = updatedCookie
	}

	$$$('#inputPhone').addEventListener('input', function (e) {
		// var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
		// e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
		var num = this.value.replace( '+7' , '' ).replace( /\D/g, '' ).split( /(?=.)/ ), i = num.length;
        if ( 0 <= i ) num.unshift( '+7' );
        if ( 1 <= i ) num.splice( 1, 0, ' ' );
        if ( 4 <= i ) num.splice( 5, 0, ' ' );
        if ( 7 <= i ) num.splice( 9, 0, '-' );
        if ( 9 <= i ) num.splice( 12, 0, '-' );
        if ( 11 <= i ) num.splice( 15, num.length - 15 );
        this.value = num.join( '' );
	});

	$(document).ready(function() {
		$("#send").on("click", function(){
			var nameval  = $("#inputName").val();
			var phoneval    = $("#inputPhone").val();
			var agreeval    = $("#politikaCheckbox").prop('checked');
			var namelen    = nameval.length;
			var phonelen    = phoneval.length;
			var phonevalid = checkPhone(phoneval);
			
			if(phonevalid == false && phonelen < 16) {
				$("#inputPhone").addClass("is-invalid");
				$("#inputPhone").removeClass("is-valid");
			}
			else if(phonevalid == true){
				$("#inputPhone").addClass("is-valid");
				$("#inputPhone").removeClass("is-invalid");
			}
			
			if(namelen < 1) {
				$("#inputName").addClass("is-invalid");
				$("#inputName").removeClass("is-valid");
			}
			else if(namelen >= 1){
				$("#inputName").addClass("is-valid");
				$("#inputName").removeClass("is-invalid");
			}
			
			if(phonevalid == true && namelen >= 1 && agreeval) {
				// если обе проверки пройдены
				ym('55810999', 'reachGoal', 'leed_form_sent');
				ym('55834846', 'reachGoal', 'leed_form_sent');
				// сначала мы скрываем кнопку отправки
				$("#submit").replaceWith("<em>отправка...</em>");
				$("#politikaCheckbox").attr('value', agreeval);
				$.ajax({
					type: 'POST',
					url: 'mail.php',
					data: $("#contact").serialize(),
					success: function(data) {
						if(data == "true") {
							ym('55810999', 'reachGoal', 'leed_form');
				            ym('55834846', 'reachGoal', 'leed_form');
							$("#contact").fadeOut("fast", function(){
								$(this).before("<p><strong>Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.</strong></p>");
								// console.info('fadeOut');
								setTimeout("$.fancybox.close()", 2000);
							});
						}
					}
				});
			}
		});

		//cookie popup
        var cookieLink  = $('.cookie-more'),
            cookieAgree = $('.cookie-agree'),
            cookieMain  = $('.cookie');

        $(window).on('load', function() {
            if (!getCookie('cookieAreShown')) {
                cookieMain.addClass('is-show');
            }
        });


        cookieAgree.on('click', function(e) {
            e.preventDefault();
            // cookiePopup.fadeOut(400);
            cookieMain.removeClass('is-show');
            setTimeout(function() {
                setCookie('cookieAreShown', true);
                cookieMain.hide();
            }, 1200);
        });

	});
});