$(document).ready(function(){

	$(document).scroll(function() {
					var scroll = $(document).scrollTop();
			        if (scroll < 200) {
			        	$('.hdr-stage').addClass("active")
			        	$('.abtme-hdr').addClass("visible")
			        }
			        if (scroll > 400) {
			        	$('.hdr-stage').removeClass("active")
			        	$('.abtme-hdr').removeClass("visible")
			        }
			        if (scroll < 700) {
			       		$('.work-hdr').removeClass("visible")
			        }
			        if (scroll > 700) {
			        	$('.hdr-stage').addClass("active")
			        	$('.work-hdr').addClass("visible")
			        }
			        if (scroll > 1200) {
			        	$('.hdr-stage').removeClass("active")
			        	$('.work-hdr').removeClass("visible")
			        }
			        if (scroll < 1480) {
			       		$('.exp-hdr').removeClass("visible")
			        }
			        if (scroll > 1480) {
			        	$('.hdr-stage').addClass("active")
			        	$('.exp-hdr').addClass("visible")
			        }
			        if (scroll > 2200) {
			        	$('.hdr-stage').removeClass("active")
			        	$('.exp-hdr').removeClass("visible")
			        }
			        if (scroll < 2380) {
			       		$('.skill-hdr').removeClass("visible")
			        }
			   		if (scroll > 2380) {
			        	$('.hdr-stage').addClass("active")
			        	$('.skill-hdr').addClass("visible")
			        }
			        if (scroll > 2800) {
			        	$('.hdr-stage').removeClass("active")
			        	$('.skill-hdr').removeClass("visible")
			        }
	});
});