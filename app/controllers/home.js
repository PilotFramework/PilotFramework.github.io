define(['application', 'app/models/user', 'session'], function(App, UserModel, Session) {

	return {

		// /#/home
		index: function() {
			
			// If the user is logged in (has token).
			if(Session.getToken()) {

				// Render the teplate.
				App.template.render({
					template: 'home',
					data: {name: 'Joey'}
				});
			}

			// The user isn't logged in (no token).
			else { 
				App.url.redirect('account/login');
			}
		}

	}

});