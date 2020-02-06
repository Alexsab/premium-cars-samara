<?php
$value->id = $value->images[0];
$value->avito = true;
$filename = './uploads/'.$value->id.'/index.html';
if (file_exists($filename) && is_readable($filename)) {
	$value->countImages = file_get_contents($filename);
	$value->avito = false;
} else if(count($value->images)>5) {
	$value->countImages = count($value->images);
} else {
	$value->countImages = "";
}
// name: $value->name
// year: $value->year
// price: $value->price
// images: implode(",",$value->images)
// params: $value->params
// id: $value->id
// countImages: $value->$countImages

?>
<!-- one cell car start -->
<div class="kdx-ui-list__cell" id="car-<?=$value->id?>">
	<article class="kdx-ui-card">
		<div class="kdx-ui-card__inner ">
		    <div class="kdx-ui-card__layer kdx-ui-card__layer_image   kdx-ui-card__layer_16x9  layer-0 kdx-action" >
		    	<div class="item item_table clearfix js-catalog-item-enum" itemscope="" itemtype="http://schema.org/Product" id="<?=$value->id?>" data-type="1" data-marker="item">
				    <meta itemprop="description" content="...">
				    <div class="item__line">
				        <div class="item-photo " data-marker="item-photo">
				            <a class="js-item-slider item-slider" data-images="<?=implode(",",$value->images)?>" data-count="<?=$value->countImages?>" data-avito="<?=$value->avito?>" data-fancybox-trigger="gallery<?=$value->id?>" href="javascript:;" target="_self">
				                <ul class="item-slider-list js-item-slider-list">
				                	<?php
					                   $imgList = array_slice($value->images,
					                   	0,
					                   	(($value->countImages!="")?min($value->countImages+1,5):5));
					                   foreach ($imgList as $keyI => $valueI) {
					                        include 'picture.php';
					                   }
					                ?>
				                </ul>
				            </a>
				        </div>
				    </div>
				</div>
		    </div>
		    <div class="kdx-ui-card__layer kdx-ui-card__layer_text   kdx-ui-card__layer_h_large  layer-1 kdx-action" >
		        <div card="[object Object]"><a href="javascript:;" target="" class="kdx-ui-card__text kdx-ui-card__text_h_large   kdx-ui-card__link replace-name">
		                <?=$value->name;?>
		            </a></div>
		    </div>
		    <div class="kdx-ui-card__layer kdx-ui-card__layer_text   kdx-ui-card__layer_description  layer-2 kdx-ui-card_text-left kdx-ui-card__layer_column-1-4 kdx-ui-card_align-self-center" >
		        <div card="[object Object]">
		            <p class="kdx-ui-card__text kdx-ui-card__text_description replace-year">
		                <?=$value->year;?>
		            </p>
		        </div>
		    </div>
		    <div class="kdx-ui-card__layer kdx-ui-card__layer_text   kdx-ui-card__layer_description  layer-3 kdx-ui-card_text-right kdx-ui-card_text-uppercase kdx-ui-card__layer_column-3-4 kdx-ui-card__layer_align-right kdx-ui-card_align-self-center" >
		        <div card="[object Object]">
		            <p class="kdx-ui-card__text kdx-ui-card__text_description  ">
		            </p>
		        </div>
		    </div>
		    <div class="kdx-ui-card__layer kdx-ui-card__layer_text   kdx-ui-card__layer_regular  layer-4" >
		        <div card="[object Object]">
		            <p class="kdx-ui-card__text kdx-ui-card__text_regular replace-params">
		                <?=$value->params;?>
		            </p>
		        </div>
		    </div>
		    <div class="kdx-ui-card__layer kdx-ui-card__layer_icon-text   kdx-ui-card__layer_color  layer-5" >
		        <div class="kdx-ui-card__icon-text kdx-ui-card__icon-text_color  " card="[object Object]"><span class="kdx-ui-card__icon-text-color  green" style="background-color: green;"></span> <span class="kdx-ui-card__icon-text-content kdx-ui-card__icon-text-content_color  "> в наличии</span></div>
		    </div>
		    <div class="kdx-ui-card__layer kdx-ui-card__layer_price   layer-6" >
		        <div class="kdx-ui-card__price ">
		            <div>
		                <div><span class="kdx-ui-card__current-price replace-price">
		                	<span class="kdx-ui-card__before-price"></span>
		                    <?=number_format($value->price, 0, ',', '&nbsp;')?> <span class="kdx-ui-card__current-price-currency "> ₽</span>
		                        <!---->
		                    </span></div> <span class="kdx-ui-card__previous-price  is-line-through replace-oldprice"><span class="kdx-ui-card__before-price "></span>
		                    <?=number_format($value->price*1.2, 0, ',', '&nbsp;')?> <span class="kdx-ui-card__current-price-currency ">₽</span>
		                    <!----></span>
		                <!---->
		            </div>
		        </div>
		    </div>
		    <div class="kdx-ui-card__layer  layer-7" >
		        <!---->
		    </div>
		    <div class="kdx-ui-card__layer kdx-ui-card__layer_cta   kdx-ui-card__layer_button  layer-8 kdx-action" >
		        <div><a href="javascript:;" data-card="[object Object]" class="kdx-ui-card__cta kdx-ui-card__cta_button js-popup-ajax reserve-btn" data-popup-ajax-link="" data-popup-ajax-color="grey" data-popup-ajax-init="true">
		                Зарезервировать
		            </a></div>
		    </div>
		    <div class="kdx-ui-card__layer kdx-ui-card__layer_icon-text   kdx-ui-card__layer_icon  layer-9 " >
		    	<a href="javascript:;" class="kdx-ui-location">
		        <div class="kdx-ui-card__icon-text kdx-ui-card__icon-text_icon  " card="[object Object]"><span class="kdx-ui-card__icon-text-icon  ecom-icon-location"></span> <span class="kdx-ui-card__icon-text-content kdx-ui-card__icon-text-content_icon  "> INFINITI Самарские автомобили</span></div>
		        </a>
		    </div>
		</div>
	</article>
</div>	
<!-- one cell car end -->
			