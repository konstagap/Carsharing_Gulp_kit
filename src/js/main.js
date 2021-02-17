const menuBtn = document.querySelector('.menu');
const body = document.querySelector('body');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('open');
	nav.classList.toggle('nav--active');
	body.classList.toggle('noscroll');
});

// slider top
$(document).ready(function () {
	$('.slider-top').slick({
		autoplay: true,
		arrows: false,
		dots: true,
		fade: true
	});
});
// slider feedback
$(document).ready(function () {
	$('.feedback__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 875,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});
