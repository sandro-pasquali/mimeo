(function($) {

	var _data 	= $.fn._data;
	var slice	= Array.prototype.slice

	$.fn._data = function() {
		console.log(arguments);
		_data.apply($, slice.call(arguments));
	}

})(jQuery);