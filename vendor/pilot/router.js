define(['signals', 'crossroads', 'hasher', 'jquery'], function(signals, crossroads, hasher, $) {
	
	return function(options) {

		// Public/private properties.
		this.defaultRoute = (options.defaultRoute) ? options.defaultRoute : 'index';
		this.routes = {};

		// Controller.
		this.singleController = function(pattern, controller, action) {
			// Create a route to match the index of the controller.
			var route = crossroads.addRoute(pattern, controller[action]);

			// Store the route in our routes object.
			this.routes[pattern] = route;

			// Return the route.
			return route;
		}

		this.controller = function(routes, controller) {
			var instance = this;

			$.each(routes, function(key, value) {
				var pattern = value.split('/');
				var action = (pattern[1]) ? pattern[1] : 'index';

				var route = crossroads.addRoute(value, controller[action]);
				instance.routes[value] = route;
			});
		}

		// Returns the amount of routes already registered.
		this.countRoutes = function() {
			var count = 0;
			$.each(this.routes, function(key, value) {
				count++;
			});
			return count;
		}

		// Start the router.
		this.start = function() {
			// Add the parse hash functions to add/change on hasher.
			hasher.initialized.add(this.parseHash);
			hasher.changed.add(this.parseHash);

			// Initialize hasher.
			hasher.init();

			// Check for a hash and revert to default if required.
			if(!hasher.getHash()) {
				hasher.setHash(this.defaultRoute);
			}
		}

		// Parse harsh.
		this.parseHash = function(newHash, oldHash) {
			crossroads.parse(newHash);
		}

	}

});