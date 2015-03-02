var controller;

$(function(){
	//Initialize Controller
	controller = new ScrollMagic();

	//Create the Scene and trigger when visiblewith ScrollMagic
	new ScrollScene({
		triggerElement: "#work",
		duration: 1000,
		offset: 700
	})
	.setTween(TweenMax.to('#block1', 6, {top: "+=2800", width:"200", height: "200"}))
	.addTo(controller)
	.addIndicators();

	var experienceScene = new ScrollScene({
		triggerElement: "#experience",
		duration: 1000,
		offset: 100
	})
	.setTween(TweenMax.to('#block1', 5, {top: "+=900", width: "200", height: "200"}))
	.addTo(controller)
	.addIndicators();

	// experienceScene.setClassToggle("#block1", "anime")

	// new ScrollScene({
	// 	triggerElement: "#experience",
	// 	offset: 150,
	// 	duration: 1000
	// })
	// .setClassToggle("#block1", "anime")
	// .addTo(controller);

	new ScrollScene({
		triggerElement: "#contact",
		duration: 600,
		offset: -550
	})
	.setTween(TweenMax.to('#block1', 3, {top: "+=1800", width: "200", height: "200"}))
	.addTo(controller)
	.addIndicators();
});