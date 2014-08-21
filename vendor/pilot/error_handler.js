define(['jquery'], function($) {

	return {

		throw: function(section, error) {

			this.loadConfig(function(errors) {
				var html = '<h1>An error has occured.</h1>';
				html += '<p>' + errors[section][error].message + '</p>';

				$('body').html(html);
			});
		},

		loadConfig: function(callback) {
			$.get('app/config/errors.json', function(data) {
				callback(data);
			}, 'json');
		}

	}

});