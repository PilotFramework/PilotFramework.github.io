define(['application', 'model/user', 'session'], function(App, UserModel, Session) {

	return {

		// /#/home
		index: function() {
			
			// If the user is logged in (has token).
			if(Session.getToken()) {

				UserModel.get(false, function(data) {
					console.log(data);

					UserModel.edit(1, {status: 2}, function(data) {
						console.log(data);
					});
				});

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