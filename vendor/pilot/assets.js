define(['jquery', 'errorhandler'], function($, ErrorHandler) {
	
	return function() {

		// Public/private variables.
		this.history = [];

		this.addJS = function(location) {
			if(!location)
				ErrorHandler.throw('assets', 'unspecified_location');

			$('head').append('<script type="text/javascript" src="public/assets/js/' + location + '.js" class="javascript_' + location + '"></script>');
			this.history.push(location + '.js');
		}

		this.addCSS = function(location) {
			if(!location)
				ErrorHandler.throw('assets', 'unspecified_location');

			$('head').append('<link rel="stylesheet" href="public/assets/css/' + location + '.css" type="text/css" class="css_' + location + '" />');
			this.history.push(location + '.css');
		}

		this.add = function(object) {
			var instance = this;

			if(object.js) {
				$.each(object.js, function(key, value) {
					instance.addJS(value);
				});
			}

			if(object.css) {
				$.each(object.css, function(key, value) {
					instance.addCSS(value);
				});
			}
		}

		this.remove = function(type, key) {
			if(type == 'js') {
				var selector = $('script.javascript_' + key).remove();
			} else if(type == 'css') {
				var selector = $('link.css_' + key).remove();
			}
		}

	}

});