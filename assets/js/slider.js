$(function() {
	$('.intro__slider').slick({
		arrows: true,
		adaptiveHeight: true,
		slidesToShow: 1, 
		slidesToScroll: 1, 
		easing: 'ease',
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		draggable: false,
		responsive:[
			{
				breakpoint: 1000,
				settings: {
					arrows: false,
				}
			}
		]
	});
});