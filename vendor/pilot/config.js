define(['jquery'], function($) {
	
	return {

		get: function(config, callback) {
			$.get('app/config/' + config + '.json', function(data) {
				callback(data);
			}, 'json');
		}

	}

});