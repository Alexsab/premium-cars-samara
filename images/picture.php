<li class="item-slider-item js-item-slider-item ">
    <div class="item-slider-image">
        <figure class="kdx-ui-card__figure_16x9 ">
            <picture class="kdx-ui-card__image-picture ">
            	<?php if(!$value->avito): ?>
	                <source data-srcset="/uploads/<?=$value->id?>/images/<?=$keyI?>-576.jpg 1x, /uploads/<?=$value->id?>/images/<?=$keyI?>-576.jpg 2x" media="screen"> <img data-srcset="/uploads/<?=$value->id?>/images/<?=$keyI?>-576.jpg" alt="<?=$value->name?>, <?=$value->year?>" title="<?=$value->name?>, <?=$value->year?>" src="/img/camera.jpg" class="kdx-ui-card__image-img lazy" style="cursor: pointer;">
	        	<?php else: ?>
	                <source data-srcset="https://98.img.avito.st/432x324/<?=$valueI?>.jpg 1x, https://98.img.avito.st/640x480/<?=$valueI?>.jpg 2x" media="screen"> <img data-srcset="https://98.img.avito.st/432x324/<?=$valueI?>.jpg" alt="<?=$value->name?>, <?=$value->year?>" title="<?=$value->name?>, <?=$value->year?>" src="https://98.img.avito.st/208x156/<?=$valueI?>.jpg" class="kdx-ui-card__image-img lazy" style="cursor: pointer;">
                <?php endif; ?>
            </picture>
        </figure>
    </div>
    <?php if($keyI==count($imgList)-1 && $value->countImages>5): ?>
	    <div class="item-slider-more js-item-slider-more">
	        Ещё<br><?=($value->countImages!="")?($value->countImages-5)." ":""?>фото
	    </div>
    <?php endif; ?>
</li>
<?php /* * /?>
https://www.avito.ru/img/share/auto/6231331110
75x55
208x156
432x324
640x480
1280x960
<?php /**/ ?>