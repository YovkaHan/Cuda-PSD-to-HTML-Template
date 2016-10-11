(function($){
	require('script!../../node_modules/jquery-placeholder/jquery.placeholder.js');
	$(document).on('ready', function() {
		if($('html').hasClass('no-placeholder')) {
			$('input').placeholder();
		}
		
	})
})(jQuery);