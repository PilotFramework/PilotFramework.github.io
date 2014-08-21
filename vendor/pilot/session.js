define(['jquery', 'config', 'storage'], function($, Config, Storage) {

	return {
		token: (Storage.get('token')) ? Storage.get('token') : false,

		getToken: function() {
			return this.token;
		},

		authenticate: function(username, password, callback, error_callback) {
			var instance = this;

			// Now we'll get the API configuration so we know where to go to
			// process the request.
			Config.get('api', function(ApiConfig) {

				// Hit the auth endpoint.
				$.post(ApiConfig.url + 'user/auth', {username: username, password: password}, function(data) {
					
					// If there's an error send it to our error handler.
					if(data.status_code !== 200) {
						if(error_callback)
							error_callback(data);
					}

					// Otherwise proceed with the authentication.
					else {
						instance.authSuccess(data.api_key, callback);
					}

				}, 'json');

			});
		},

		setToken: function(token) {
			this.token = token;
			Storage.set('token', token);
		},

		authSuccess: function(token, callback) {
			this.setToken(token);
			
			if(callback)
				callback(this.token);
		},

		processError: function(code) {
			console.log('Error found: ' + code);
		}
	}

});