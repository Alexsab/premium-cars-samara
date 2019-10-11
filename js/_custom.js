document.addEventListener("DOMContentLoaded", function() {

	var cars = [{"name":"Mercedes-Benz GL-класс","year":"2014","price":"2439000","images":["6182947682","6182947609","6182947629","6182947665","6182947684"]},{"name":"Infiniti QX80","year":"2018","price":"4955000","images":["6020795950","6020779430","6020779743","6020781054","6020779567"]},{"name":"Infiniti QX80","year":"2019","price":"4755000","images":["6173877478","6173877673","6173876578","6173880856","6173878741"]},{"name":"Infiniti QX60","year":"2018","price":"2875000","images":["5999858251","5999758892","5999759360","5999759440","5999755902"]},{"name":"Infiniti QX50","year":"2019","price":"3090000","images":["5933901798","5933906546","5933906542","5933906559","5933903147"]},{"name":"SsangYong Actyon","year":"2013","price":"630000","images":["6011995756","6011993626","6011996036","6011995909","6012024795"]},{"name":"Hyundai Elantra","year":"2016","price":"759000","images":["6012111498","6012109319","6012111550","6012109977","6012111564"]},{"name":"Infiniti QX50","year":"2019","price":"3030000","images":["5933957088","5933955800","5933954405","5933957015","5933956976"]},{"name":"Peugeot 408","year":"2014","price":"459000","images":["6010792707","6010792592","6010792668","6010792635","6010792346"]},{"name":"Mercedes-Benz Vito","year":"2017","price":"4650000","images":["6146558855","6146557290","6146557602","6146560674","6146559942"]},{"name":"Infiniti JX","year":"2012","price":"1600000","images":["5998746688","5998747178","5998752923","5998746597","5998746671"]},{"name":"Infiniti QX50","year":"2019","price":"3470000","images":["6052466413","6052467110","6052469032","6052468478","6052466877"]},{"name":"Infiniti QX60","year":"2018","price":"3380000","images":["5978565084","5978553477","5978565096","5978565079","5978558238"]},{"name":"BMW X1","year":"2014","price":"970000","images":["6117854374","6117854470","6117855393","6117854253","6117854289"]},{"name":"Toyota Land Cruiser","year":"2015","price":"3350000","images":["6182812019","6182812029","6182812034","6182812124","6182812127"]},{"name":"BMW X3","year":"2014","price":"1299000","images":["5950340383","5950343671","5950344211","5950344398","5950345039"]},{"name":"Mercedes-Benz GLC-класс","year":"2016","price":"2200000","images":["6078570745","6078570783","6078570638","6078570778","6078570680"]},{"name":"Infiniti QX50","year":"2018","price":"2709000","images":["5933619687","5933619794","5933618224","5933619487","5933618271"]},{"name":"Nissan Murano","year":"2014","price":"1150000","images":["5948502868","5948503017","5948503039","5948502932","5948503007"]},{"name":"Volkswagen Touareg","year":"2013","price":"1740000","images":["6173520928","6173520621","6173522345","6173524901","6173522412"]},{"name":"Infiniti QX80","year":"2017","price":"3950000","images":["6057183280","6057186235","6057192282","6057183250","6057185623"]},{"name":"Infiniti QX60","year":"2018","price":"3155000","images":["5934210376","5934222594","5934209143","5934222595","5934209804"]},{"name":"Infiniti QX50","year":"2018","price":"3480000","images":["5934057678","5934057787","5934058731","5934058236","5934058714"]},{"name":"Infiniti QX50","year":"2018","price":"3950000","images":["5934083256","5934083003","5934083531","5934084152","5934084770"]},{"name":"Infiniti QX50","year":"2019","price":"3195000","images":["5934026797","5934026799","5934023150","5934026793","5934021294"]},{"name":"Infiniti JX","year":"2013","price":"1199000","images":["5930494684","5930495689","5930495933","5930496110","5930496430"]},{"name":"Infiniti QX70","year":"2014","price":"1649000","images":["5930804964","5930805587","5930806196","5930806438","5930807859"]}];

	var $ = function(name) { return document.querySelector(name) },
	$$ = function(name) { return document.querySelectorAll(name) };

	$$('.kdx-ui-card__carousel-cursor-detector').forEach(function(element) {
		element.addEventListener('click', function(t) {

        });
	});


	var i = 0;
	var original = $('.kdx-ui-list__cell');

	function duplicate(imgArr = ["6182947682","6182947609","6182947629","6182947665","6182947684"], name = "Mercedes-Benz GL-класс", year = "2014", price = "2 439 000") {
	    var clone = original.cloneNode(true); // "deep" clone
	    clone.id = "duplicater" + ++i;
	    clone.classList.remove('hide');
	    clone.querySelector('.replace-name').innerText = name;
	    clone.querySelector('.replace-year').innerText = year;
	    clone.querySelector('.replace-price').innerHTML = '<span class="kdx-ui-card__before-price"></span>\
             ' + new Intl.NumberFormat('ru', {}).format(price) + '\
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
	}

	cars.forEach(function(element) {
		duplicate(element.images, element.name, element.year, element.price);
	});
	
	// original.classList.remove('hide');
	original.parentNode.removeChild(original);


	if(location.host == 'www.avito.ru')	{
		var cars = [];
		$$('.catalog_table .item__line').forEach(function(element) {
			var name_year = element.querySelector('span[itemprop="name"]').innerText;
			var name = name_year.match(/(.*)?,/)[1];
			var year = name_year.match(/, (\d+)/)[1];
			var price = element.querySelector('span[itemprop="price"]').innerText.match(/\d+/g).join('');
			var images = [];
			element.querySelectorAll('.item-slider .item-slider-image img').forEach(function(image) {
				// //65.img.avito.st/208x156/6182947665.jpg
				images.push(image.src.match(/(\d+)\.jpg/)[1]);
			});
			cars.push({name: name, year: year, price: price, images: images});
		});

		JSON.stringify(cars);
		console.log(cars);
		window.prompt("Copy to clipboard: Ctrl+C (CMD+C), Enter", cars);
	}
	/**/

});

			