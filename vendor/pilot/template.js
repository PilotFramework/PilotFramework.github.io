define(['jquery', 'vendor/mustache/mustache', 'errorhandler'], function($, Mustache, ErrorHandler) {
	
	return function() {

		// Public/private variables.
		this.history = [];

		this.render = function(params) {
			if(params.template) {

				// Track the template in the template history.
				this.history.push(params.template);

				// Parse and bind events.
				if(params.events) {
					this.bindEvents(params.events);
				}

				// Use AJAX to load in the template file.
				$.get('app/views/' + params.template + '.html', function(response) {
					$('body').html(Mustache.render(response, params.data));

					if(params.loaded) {
						params.loaded();
					}
				});

				return true;
			} else {
				ErrorHandler.throw('template', 'unspecified_template');
				return false;
			}
		}

		// Return the most recent template from the history.
		this.currentTemplate = function() {
			return this.history.slice(-1)[0];
		}

		this.bindEvents = function(events) {
			$.each(events, function(key, value) {
				var pieces = key.split(' ');
				$(document).on(pieces[0], pieces[1], value);

			});
		}

	}

});