$(document).ready(function(){

	$(document).scroll(function() {
					var scroll = $(document).scrollTop();
			        if (scroll < 500) {
			        	$('.hdr-stage').addClass("active")
			        	$('.abtme-hdr').addClass("visible")
			        }
			        if (scroll > 700) {
			        	$('.hdr-stage').removeClass("active")
			        	$('.abtme-hdr').removeClass("visible")
			        }
			        if (scroll < 1000) {
			       		$('.work-hdr').removeClass("visible")
			        }
			        if (scroll > 1000) {
			        	$('.hdr-stage').addClass("active")
			        	$('.work-hdr').addClass("visible")
			        }
			        if (scroll > 1500) {
			        	$('.hdr-stage').removeClass("active")
			        	$('.work-hdr').removeClass("visible")
			        }
			        if (scroll < 1780) {
			       		$('.exp-hdr').removeClass("visible")
			        }
			        if (scroll > 1780) {
			        	$('.hdr-stage').addClass("active")
			        	$('.exp-hdr').addClass("visible")
			        }
			        if (scroll > 2500) {
			        	$('.hdr-stage').removeClass("active")
			        	$('.exp-hdr').removeClass("visible")
			        }
			        if (scroll < 2680) {
			       		$('.skill-hdr').removeClass("visible")
			        }
			   		if (scroll > 2680) {
			        	$('.hdr-stage').addClass("active")
			        	$('.skill-hdr').addClass("visible")
			        }
			        if (scroll > 3000) {
			        	$('.hdr-stage').removeClass("active")
			        	$('.skill-hdr').removeClass("visible")
			        }
	});
});