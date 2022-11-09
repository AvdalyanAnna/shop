
// Set fixed elements that need padding-right when locking the scroll
window.paddingRightItems = '#page-header';

// Locking scroll plugin options
var bodyScrollOptions = {
    reserveScrollBarGap: true,
    allowTouchMove: true
};

// Disable copy or paste possibility
$(document).off('cut copy paste', '.no-paste').on('cut copy paste', '.no-paste', function(e) {
	e.preventDefault();
});

// Adding not-empty class if the input/textarea has value
$('input, textarea').each(function(e) {
	if ($(this).val() != '') {
		$(this).addClass('not-empty').parent().addClass('not-empty');
	} else {
		$(this).removeClass('not-empty').parent().removeClass('not-empty');
	}
});

$(document).off('change focusout keydown keypress input', 'input, textarea, select').on('change focusout keydown keypress input', 'input, textarea, select', function(e) {
	if ($(this).val() != '') {
		$(this).addClass('not-empty').parent().addClass('not-empty');
	} else {
		$(this).removeClass('not-empty').parent().removeClass('not-empty');
	}
});

$(document).off('focusin', 'input, textarea, select').on('focusin', 'input, textarea, select', function(e) {
	$(this).parent().addClass('focused');
});

$(document).off('focusout', 'input, textarea, select').on('focusout', 'input, textarea, select', function(e) {
	$(this).parent().removeClass('focused');
});

function getCenterClipPromoSlider() {
    var t = $(".promo__nav-circle"),
        e = t.offset().left + t.width() / 2;
    0 === (e = Math.round((100 * e) / $(window).width())) && (e = 50);
    var i = t.offset().top + t.height() / 2;
    return 0 === (i = Math.round((100 * i) / $(".promo").height())) && (i = 50), { left: e, top: i };
}

$('.promo__slider').slick({
	slidesToShow: 1,
	dots: false,	
	fade: true,
	prevArrow: $('.promo__nav-prev'),
	nextArrow: $('.promo__nav-next'),
});
$('.service-news__slider').slick({
	slidesToShow: 1,
	dots: false,
	prevArrow: $('.service-news__nav-prev'),
	nextArrow: $('.service-news__nav-next'),
});

$('.accardion__item-header').click(function(){
	var parent = $(this).parent();
	if(parent.hasClass('active')){
		parent.removeClass('active');
	} else {
		$('.accardion__item').removeClass('active');
		parent.addClass('active');
	}
});

$('.services-slider').slick({
	slidesToShow: 3,
	prevArrow: $('.services-section__arr-prev'),
	nextArrow: $('.services-section__arr-next'),
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		},
	]
});

$(".rates").rateYo({
    normalFill: "#A0A0A0"
  });


$(".js-rating").each(function (index) {
	$(this).rateYo({
	  rating: $(this).data("rating"),
	  fullStar: true,
	  starWidth: "14px",
	  spacing: "5px",
	  normalFill: "#e3e3e3",
	  ratedFill: "#F0BA2E",
	  starSvg: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9877 5.40732C13.9581 5.3166 13.8797 5.25045 13.7852 5.23666L9.25192 4.57785L7.2246 0.470093C7.1825 0.38439 7.0953 0.330261 7.00007 0.330261C6.90484 0.330261 6.81739 0.38439 6.77554 0.470093L4.74797 4.5781L0.214705 5.23691C0.120231 5.2507 0.0420452 5.3166 0.0122244 5.40757C-0.0170952 5.49803 0.00721249 5.59777 0.075625 5.66418L3.35617 8.86177L2.58158 13.377C2.56554 13.471 2.60413 13.5659 2.68106 13.6221C2.7585 13.6787 2.86099 13.686 2.94494 13.6411L7.00007 11.5096L11.0547 13.6411C11.0913 13.6604 11.1316 13.6699 11.1715 13.6699C11.2234 13.6699 11.275 13.6539 11.3188 13.6221C11.396 13.5659 11.4346 13.471 11.4183 13.377L10.644 8.86202L13.9245 5.66418C13.9927 5.59727 14.0172 5.49778 13.9877 5.40732Z"/></svg>'
	})
	$(this).rateYo().on("rateyo.change", function (e, data) {
	  var rating = data.rating;
	  $(this).parent().find('.js-rating-result').val(rating);
	  console.log(rating);
	});
});

$('.reviews-section__slider').slick({
	slidesToShow: 4,
	prevArrow: $('.reviews-section__arr-prev'),
	nextArrow: $('.reviews-section__arr-next'),
	responsive: [
		{
			breakpoint: 1300,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		},
	]
});

$('.display-btn-cards').click(function(e){
	e.preventDefault();
	$(".display-btn-inline").removeClass('active');
	$(this).addClass('active');
	$('.expert-cards').addClass('inline');
});

$('.display-btn-inline').click(function(e){
	e.preventDefault();
	$(".display-btn-cards").removeClass('active');
	$(this).addClass('active');
	$('.expert-cards').removeClass('inline');
});

$('.filter__group-title').click(function(){
	if($(this).hasClass('active')) {
		$(this).removeClass('active');
		$(this).next().slideUp(300);
	} else {
		$(this).addClass('active');
		$(this).next().slideDown(300);
	}
});

$('.filter-display-btn').click(function(e){
	e.preventDefault();
	if($(this).hasClass('active')){
		$(this).removeClass('active');
		$('.filter').slideUp(300);
	} else {
		$(this).addClass('active');
		$('.filter').slideDown(300);
	}
});


var progressPath = document.querySelector('.progress-wrap path');
var pathLength = progressPath.getTotalLength();
progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
var updateProgress = function () {
	var scroll = $(window).scrollTop();
	var height = $(document).height() - $(window).height();
	// console.log($(window).scrollTop() + ' - '+ scroll + ' - ' + height)
	console.log(height)

	var progress = pathLength - (scroll * pathLength / height);
	progressPath.style.strokeDashoffset = progress;
}
updateProgress();
$(window).scroll(updateProgress);	
var offset = 50;
var duration = 550;
$(window).on('scroll', function() {
	if ($(this).scrollTop() > offset) {
		$('.progress-wrap').addClass('active-progress');
	} else {
		$('.progress-wrap').removeClass('active-progress');
	}
});				
$('.progress-wrap').on('click', function(event) {
	event.preventDefault();
	$('html, body').animate({scrollTop: 0}, duration);
	return false;
});
	
AOS.init({
	duration: 800,
	disable: 'mobile'
});

$('.show-pass-btn').click(function(){
	var parent = $(this).parents('.form__field');
	var input = parent.find('.form__field-input');

	if(input.attr("type") == 'password') {
		input.attr("type","text");
		$(this).addClass('active');
	} else {
		input.attr("type","password");
		$(this).removeClass('active');
	}
	

});

$('.form__field-select').select2({
	width: '100%',	
	dropdownAutoWidth : true,
	minimumResultsForSearch: -1,
	placeholder: function(){
		$(this).data('placeholder');
	}
});