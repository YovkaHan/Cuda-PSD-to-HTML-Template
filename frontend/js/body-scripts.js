(function($){
	require('script!../../node_modules/jquery-placeholder/jquery.placeholder.js');
	
	$(document).ready( function() { // $(window).ready --IE8
		if($('html').hasClass('no-placeholder')) {
			$('input').placeholder();
		}
	});
	$(window).scroll( function() {  // $(window).scroll --IE8
			// scrollTop appears when client scrolls over ".scrollBtn-on" position and turns it back
		var pointPosition = $('.scrollBtn-on').position().top;
		
		if($(document).scrollTop() > pointPosition) {
			var opacity = (($(document).scrollTop() - pointPosition) / pointPosition).toFixed(1) / 2;
			if($('#arrowUp').hasClass('hidden')) {
				$('#arrowUp').removeClass('hidden');
			}
			$('#arrowUp').css('opacity', opacity);
		} else {
			$('#arrowUp').addClass('hidden');
		}
	});
})(jQuery);