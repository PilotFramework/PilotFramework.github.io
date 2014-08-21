define(['jquery'], function($) {
	
	return function(table) {

		// Public/private variables.
		this.table = table;

		// Find.
		this.find = function(query) {
			return 'GET: /api/users/' + query;
		}

		// Remove.
		this.remove = function(query) {
			return 'DELETE: /api/users/' + query;
		}

		// Save
		this.save = function() {
			return 'POST: /api/users/';
		}
	}

});