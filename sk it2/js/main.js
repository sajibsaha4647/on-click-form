$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
	new WOW().init();
	
	$('.counter1').animationCounter({
	  start: 0,
	  end: 5000,
	  step:70,
	  delay:500,
	  txt: " +"

	});
	
	$('.counter2').animationCounter({
	  start: 0,
	  end:5100,
	  step:60,
	  delay:500,
	  txt: " +"

	});
	
	$('.counter3').animationCounter({
	  start: 0,
	  end:7500,
	  step:80,
	  delay:500,
	  txt: " +"

	});

});






$(document).ready(function() {
	var s = $(".saha");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top) {
			$(".saha").fadeOut();
			$(".fixed_menu_area").fadeIn();
		} else {
			$(".saha").fadeIn();
			$(".fixed_menu_area").fadeOut();	
		}
	});
});

	
	



