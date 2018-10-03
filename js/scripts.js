$(window).load(function() {
    setTimeout(function(){
			$('#loading').hide();
    }, 3000); 
});

$(document).ready(function(){
	$(".button-collapse").sideNav();

//Parallax
	$('.parallax').parallax();

//ScrollSpy
	$('.scrollspy').scrollSpy();

//Progress Bar
	var $progressBar = $(".determinate"),
		defaultWidth = parseInt($progressBar.css('width')); 
	$(window).scroll(function() {
    	var winScrollTop = $(window).scrollTop() + 0,
    		maximumHeight = $(document).height() - $(window).height(),
    		scrollPercentage = (winScrollTop/maximumHeight) * 100;
	    
	    $progressBar.css({
	        "width": Number((scrollPercentage).toFixed(2)) + "%"
	    }, 500, 'easeInOutSine');
	});

	function animateWrapper() {
		$('.wrapper').addClass('animate');
	}
	
	setTimeout(function() {
	    $('.start-nav').addClass('fixed');
	    $(window).scroll()
	}, 1500);

	setTimeout(function() {
	    $('.parallax-container').removeClass('animate');
	    animateWrapper();
	}, 2800);

	$('.contact-icons').hover(function(){
		$(this).toggleClass('active')
	});

	$('.side-list').hover(function(){
		$(this).toggleClass('animate');
	});

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

		    if (scroll >= 200 && scroll <= 900) {
		      $(".side-about").addClass("animate");
		    }else {
		    	$(".side-about").removeClass("animate");
		    }

		    if (scroll >= 1100 && scroll <= 2300) {
		      $(".side-work").addClass("animate");
		    }else {
		    	$(".side-work").removeClass("animate");
		    }

		    if(scroll >= 2400 && scroll <= 3900) {
		    	$(".side-experience").addClass("animate");
		    }else {
		    	$(".side-experience").removeClass("animate");
		    }

		    if(scroll >= 4400 && scroll <= 5500) {
		    	$(".side-contact").addClass("animate");
		    }else {
		    	$(".side-contact").removeClass("animate");
		    }
	});

//MENU
	$(".hamburger").click(function(){
    	$(this).toggleClass("active-menu");
    	$('.start-nav').toggleClass('fixed');
    	$('.container').toggleClass('adjust')
	});

});