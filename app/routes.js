define([
	'vendor/pilot/router',
	'app/controllers/home',
	'app/controllers/account',
], function(router, home, account) {
	
	return function() {
		// Create a new route instance and set our default route.
		var Router = new router({
			defaultRoute: 'home'
		});

		/**
		 *
		 * 	---- ROUTES ----
		 *
		 * 	Your routes go here, defined like so:
		 * 	Router.controller([array, of, routes], controllerinstance);
		 *
		 */

		Router.controller(['home'], home);
		Router.controller(['account', 'account/login'], account);

		// Start the router.
		Router.start();
	}

});