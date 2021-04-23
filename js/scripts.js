/*feedback owl slider Owl - carousel*/
$('#sync1').owlCarousel({
	items: 1,
	loop: false,
	center: true,
	margin: 10,
	dots: false,
	URLhashListener: true,
	autoplayHoverPause: false,
	mouseDrag: false,
	touchDrag: false,
	startPosition: 'URLHash',
	responsive: {
		300: {
			dots: true,
			mouseDrag: true,
			touchDrag: true
		},
		768: {
			dots: false,
			mouseDrag: false,
			touchDrag: false
		}
	}
});
$('#all-lars').owlCarousel({
	items: 1,
	loop: false,
	center: true,
	margin: 10,
	dots: false,
	URLhashListener: true,
	autoplayHoverPause: false,
	mouseDrag: true,
	touchDrag: true,
	startPosition: 'URLHash',
	nav: true,
	responsive: {
		300: {
			dots: false,
			mouseDrag: false,
			touchDrag: false
		},
		768: {
			dots: false,
			mouseDrag: false,
			touchDrag: false
		}
	}
});

/*add hesh for slider refrigeration*/
var revLar_zero = document.querySelectorAll('.zero');
var revLar_one = document.querySelectorAll('.one');
var revLar_two = document.querySelectorAll('.two');
var revLar_three = document.querySelectorAll('.three');
var u = document.location;

function getAtrButton(button) {
	for (var i = 0; i < button.length; i ++) {
		var atr = button[i].getAttribute("data-href");
	}
	return atr;
}

function selectButton(but) {		
	if (String(u).indexOf('#') !== -1) {
		var positHash = String(u).indexOf('#');
		var oldUrl = String(u).slice(0, positHash);
	} else {
		var oldUrl = String(u);
	}

	for (let i = 0; i < but.length; i++) {
		but[i].onclick = function () {
			var butAtr = getAtrButton(but);
			var newU = oldUrl + butAtr;
			window.location.href = newU;
		}
	}
}

selectButton(revLar_zero);
selectButton(revLar_one);
selectButton(revLar_two);
selectButton(revLar_three);

document.onclick = function (e) {
	console.log(e.target);
};






window.onload = function () {
	var slideout = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('menu'),
		'side': 'left',
		'padding': 320,
		'tolerance': 320,
		'touch':false
	});

	document.querySelector('.js-slideout-toggle').addEventListener('click', function () {
		slideout.toggle();
	});

	document.querySelector('.js-slideout-toggle-menu').addEventListener('click', function () {
		slideout.toggle();
	});

	document.querySelector('.menu').addEventListener('click', function (eve) {
		if (eve.target.nodeName === 'A') {slideout.close(); }
	});
};

/*move bg*/
$(document).mousemove(function (e) {
	var x = ((e.pageX - 2000) * 1 / 35), y = ((e.pageY - 4000) * -1 / 85);
	$('#eskimo_bg').css('background-position', x + 'px ' + y + 'px');
});

$(document).mousemove(function (e) {
	var x = ((e.pageX - 200) * 1 / 25), y = ((e.pageY - 5000) * -1 / 85);
	$('#briket_bg').css('background-position', x + 'px ' + y + 'px');
});

$(document).ready(function () {	
	$('.hits_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.previews-positions-wrap'
	});
	$('.previews-positions-wrap').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.hits_slider',				
		dots: false,
		centerMode: false,
		focusOnSelect: true
	});				

	$('.mob-ref-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 3,
		centerMode: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					centerMode: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					centerMode: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true
				}
			}
		]			
	});

	$('.slider_partners').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true
	});




	$('.mobile-news').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true
	});
	$('#special_projects_wrap').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					centerMode: true
				}
			}
		]
	});
});
	

//scrolling for top button
var $page = $('html, body');
$('a[href*="#"]').click(function () {
	$page.animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 1800);
	return false;
});
//scrolling
jQuery(window).on('scroll', function () {
	var top = jQuery(document).scrollTop();
	var batas = jQuery(window).height();
	var header = jQuery('header');
	var windowW = $(window).width();
	if (top > 0) {
		$('.if-s').addClass('sticky');
	} else {
		$('.if-s').removeClass('sticky');
	}
});

window.addEventListener('scroll', function (e) {
	const
		oldScroll = this.oldScroll || 0,
		newScroll = this.scrollY,
		//isScrollDown = newScroll > oldScroll;
		isScrollDown = newScroll > oldScroll && newScroll > 50;

	document.querySelector('header').classList.toggle('scroll-down', isScrollDown);
	this.oldScroll = newScroll;
	//top button
	document.getElementById('top_b').classList.toggle('show', isScrollDown);
	this.oldScroll = newScroll;
});

//slider button
$(document).ready(function () {

	$('.slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
		  autoplaySpeed: 5000
	});

	$('.slides-wrapper').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: false,
				}
			}
		]
	});
	
	$('#brands-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					centerMode: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					centerMode: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true
				}
			}
		]
	});
	$('.new_item').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					centerMode: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true
				}
			}
		]
	});
	$('.new_item_b2b').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 3,
		centerMode: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					arrows: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					arrows: false,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					arrows: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					arrows: false,
				}
			}
		]
	});
	$('.mobile-news').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true
	});
	$('#special_projects_wrap').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,

				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					centerMode: true
				}
			}
		]
	});
	$('#special_projects_wrap_b2b').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,

				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					centerMode: true
				}
			}
		]
	});
	$('.positions-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					arrows: false
				}
			}
		]
	});	

	var $page = $('html, body');
	$('a[href*="#"]').click(function () {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1800);
		return false;
	});

	$(document).mousemove(function (e) {
		var x = ((e.pageX - 2000) * 1 / 35), y = ((e.pageY - 4000) * -1 / 85);
		$('#eskimo_bg').css('background-position', x + 'px ' + y + 'px');
	});

	$(document).mousemove(function (e) {
		var x = ((e.pageX - 200) * 1 / 25), y = ((e.pageY - 5000) * -1 / 85);
		$('#briket_bg').css('background-position', x + 'px ' + y + 'px');
	});

	$('.spoiler-title').click(function () {
		$(this).parent().children('div.spoiler-content').toggle('fast');
		$(this).children('span.button-spoiler').toggleClass("active");
		return false;
	});

	var slideout = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('menu'),
		'side': 'left',
		'padding': 320,
		'tolerance': 320,
		'touch':false
	});

	document.querySelector('.js-slideout-toggle').addEventListener('click', function () {
		slideout.toggle();
	});

	document.querySelector('.js-slideout-toggle-menu').addEventListener('click', function () {
		slideout.toggle();
	});

	document.querySelector('.menu').addEventListener('click', function (eve) {
		if (eve.target.nodeName === 'A') { slideout.close(); }
	});

});

//search menu

var formSearch = document.getElementsByClassName("formSearch");
var openBut = document.getElementById("open");
var closeBut = document.getElementById("close");

function clickBut(button, targetForm) {
	button.onclick = function () {
		for (var i = 0; i < targetForm.length; i++) {
			targetForm[i].classList.add("active");			
		}
	};
}

function clickButClose(button, targetForm) {
	button.onclick = function () {
		for (var i = 0; i < targetForm.length; i++) {
			targetForm[i].classList.remove("active");
		}
	};
}

clickBut(openBut, formSearch);
clickButClose(closeBut, formSearch);

//tabs activation
function Selected(a) {
	var label = a.value;
	if (label==1) {
		document.getElementById("Label1").style.display='block';
		document.getElementById("Label2").style.display='none';
		document.getElementById("Label3").style.display='none';
		
	} else if (label==2) {
		document.getElementById("Label1").style.display='none';
		document.getElementById("Label2").style.display='block';
		document.getElementById("Label3").style.display='none';
		
	} else if (label==3) {
		document.getElementById("Label1").style.display='none';
		document.getElementById("Label2").style.display='none';
		document.getElementById("Label3").style.display='block';
		
	} else {
		document.getElementById("Label1").style.display='none';
		document.getElementById("Label2").style.display='none';
		document.getElementById("Label3").style.display='none';
	}
	
}

var OldOpt = $('#allContacts div.active a').attr('class');
OldOpt = '#' + OldOpt;

$('#allContacts a').click(function () {
	$(OldOpt).css('display', 'none');
	$("#allContacts div").removeClass('active');
	var NewOpt = this.className;
	$(this).parent().addClass('active');
	NewOpt = '#' + NewOpt;
	$(NewOpt).css('display', 'block');
	OldOpt = NewOpt;
});

//spoiler index b2b
/*
$(document).ready(function () {
	$('.spoiler-title').click(function () {
		$('div.spoiler-content').toggle('fast');
		$('.spoiler-title').children('span').toggleClass("active");
		return false;
	});
});
*/

//hide empty elements vacancy
var float_items = document.getElementsByClassName("float-item");
for (var i = 0; i < float_items.length; i ++) {
	if (float_items[i].getElementsByTagName("p").length == 0) float_items[i].style.display = "none";
}

//hide projects for sidebar
var sidPr = document.getElementById("sidebar_projects");
var hideElem = 'elem192';
$('#allContacts a').click(function () {
	var newCity = this.className;
	if (newCity == hideElem) {
		$(sidPr).css('display', 'block');
	} else {
		$(sidPr).css('display', 'none');
	};
});


//blocks refrigeration on index page
var button_blocks_ref = document.querySelectorAll(".block-prev");
var image_refs = document.querySelectorAll(".refr");
var review_lars = document.querySelectorAll(".lar"); 
function clickButtonSlider(button, buttons_array, images_refrigeration, reviews_ref) {
	button.onclick = function() {
		for (var i = 0; i < buttons_array.length; i ++) {
			if (button != buttons_array[i]) {
				buttons_array[i].classList.remove("active");
				images_refrigeration[i].classList.remove("active");
				reviews_ref[i].classList.remove("active");
			} else {
				buttons_array[i].classList.add("active");
				images_refrigeration[i].classList.add("active");
				reviews_ref[i].classList.add("active");
			};
		};
	};
};
//begin
for (var i = 0; i < button_blocks_ref.length; i ++) {
	clickButtonSlider(button_blocks_ref[i], button_blocks_ref, image_refs, review_lars);
};

//reviews slider for home page
var wrap_button_reviews_clients = document.getElementById("sync2");
var button_reviews_clients = wrap_button_reviews_clients.querySelectorAll(".button");

function clickButtonSlider2(button, buttons_array) {
	button.onclick = function () {
		for (var i = 0; i < buttons_array.length; i++) {
			if (button != buttons_array[i]) {
				buttons_array[i].classList.remove("active");
			} else {
				buttons_array[i].classList.add("active");
			};
		};
	};
};

for (var i = 0; i < button_reviews_clients.length; i++) {
	clickButtonSlider2(button_reviews_clients[i], button_reviews_clients);
};
