var controller;

$(function(){
	//Initialize Controller
	controller = new ScrollMagic.Controller();

	//Create the Scene and trigger when visiblewith ScrollMagic
	new ScrollMagic.Scene({triggerElement: "#work", duration: 1000, offset: 700})
		.setTween(TweenMax.to("#block1", 6, {top: "+=2800", width:"400", height: "400", left:"22%"}))
		.setClassToggle("#block1", "parachute")
		// .addIndicators()
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#experience", duration: 1000})
		.setTween(TweenMax.to('#block1', 4, {top: "+=900", width: "300", height: "300", left: "24.5%"}))
		.setClassToggle("#block1", "parachute")
		.on("progress", function(event){
			if(event.progress == 1) {
				$("#block1").addClass("bar");
			};
		})
		// .addIndicators()
		.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#experience",
		offset: 100,
		duration: 900
	})
	.setClassToggle("#block1", "bar")
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#contact",
		duration: 600,
		offset: -550
	})
	.setTween(TweenMax.to('#block1', 3, {top: "+=1800", width: "300", height: "300", rotation: 360}))
	.setClassToggle("#block1", "drop")
	// .addIndicators()
	.on("progress", function(event){
		if(event.progress === 1) {
			$("#block1").toggleClass('dead');
		} else {
			$("#block1").removeClass('dead')
		}
	})
	.addTo(controller);
});