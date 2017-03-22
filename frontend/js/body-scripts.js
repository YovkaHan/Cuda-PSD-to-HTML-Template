(function($){
	require('script!../../node_modules/jquery-placeholder/jquery.placeholder.js');
	
	$(document).ready( function() { // $(window).ready --IE8
		if($('html').hasClass('no-placeholder')) {
			$('input').placeholder();
		}
		// scrollTop appears when client scrolls over ".services-cl" position
		if($(window).scrollTop() > $('.scrollBtn-on').position().top) {
			if($('#arrowUp').hasClass('hidden')) {
				$('#arrowUp').removeClass('hidden');
			}
		}
	});
	$(window).scroll( function() {  // $(window).scroll --IE8
		if($(document).scrollTop() > $('.services-cl').position().top) {
			var o_var = (($(document).scrollTop() - $('.services-cl').position().top) / $('.services-cl').position().top).toFixed(1) / 2;
			if($('#arrowUp').hasClass('hidden')) {
				$('#arrowUp').removeClass('hidden');
			}
			$('#arrowUp').css('opacity', o_var);
		} else {
			$('#arrowUp').addClass('hidden');
		}
	});
})(jQuery);