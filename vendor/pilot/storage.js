define(['jquery'], function($) {
	
	return {

		get: function(key) {
			return window.localStorage.getItem(key);
		},

		set: function(key, value) {
			window.localStorage.setItem(key, value);
		},

		remove: function(key) {
			window.localStorage.removeItem(key);
		},

		clear: function() {
			window.localStorage.clear();
		},

		key: function(key) {
			return window.localStorage.key(key);
		}

	}

});