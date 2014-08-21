define(['jquery', 'hasher'], function($, hasher) {
	
	return function() {
		this.redirect = function(location) {
			hasher.setHash(location);
		}
	}

});