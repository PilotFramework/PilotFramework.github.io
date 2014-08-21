define(['jquery', 'application', 'session', 'vendor/happy/happy'], function($, App, Session, Happy) {

	return {

		// /#/account/login
		login: function() {
			var instance = this;

			// If the user isn't logged in (no token).
			if(!Session.getToken()) {

				// Render the login template. (App.template.render(template, data, events, loaded)).
				App.template.render({
					template: 'account/login',
					events: {
						'submit form#formLogin': processLogin
					},
					loaded: loginTemplateLoaded
				})
			}

			// If the user is logged in (has token).
			else {
				App.url.redirect('home');
			}
		}

	}

	function processLogin(e) {
		e.preventDefault();
		var username = $('input#username').val();
		var password = $('input#password').val();

		Session.authenticate(username, password, function(token) {
			App.url.redirect('home');
		}, function(error) {
			$('body').append('<h2>Error: ' + error.status_code + '</h2>');
		});
	}

	function loginTemplateLoaded() {
		// Form validation.
		$('form#formLogin').isHappy({
			fields: {
				'#username': {
					required: true,
					message: "Username is required"
				},
				'#password': {
					required: true,
					message: "Password is required"
				}
			}
		});
	}

});