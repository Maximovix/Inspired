$(function() {
	let scroll = $(this).scrollTop(),
		heightHeader = $('.header').outerHeight();

	/* Scroll */
	$('[data-scroll]').click(function(event) {
		event.preventDefault();

		let blockID = $(this).data('scroll'),
			blockOffset = $(blockID).offset().top,
			heightNav = $('.nav').outerHeight();

			$('html,body').animate({
				scrollTop: blockOffset - heightNav,
			}, 700);
	});

	/* Fixed Nav */
	$(window).scroll(function(event) {
		event.preventDefault();

		scroll = $(this).scrollTop();
		heightHeader = $('.header').outerHeight();
		console.log('1');

		if (scroll < heightHeader) {
			$('.nav').removeClass('fixed');
		} else  {
			$('.nav').addClass('fixed');
		}

	});

	/* Nav-Burger */
	$('.nav__burger').click(function(event) {
		$('.nav__burger,.nav__list').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.nav__link').click(function(event) {
		$('.nav__burger,.nav__list').removeClass('active');
		$('body').removeClass('lock');
	})
});