(function($){
	scrollNav();
})(jQuery);

function scrollNav() {
	$('.smooth-scr').click(function(){  
		//Animate
		$('html, body')
		.stop()
		.animate({
			scrollTop: $( $(this).attr('href') ).offset().top - 100
			}, 2000);
		return false;
	});
}