define(['jquery', 'storage'], function($, Storage) {

	return {
		token: (Storage.get('token')) ? Storage.get('token') : false,
		url: 'http://localhost/api/public/',

		getToken: function() {
			return this.token;
		},

		authenticate: function(username, password, callback, error_callback) {
			var instance = this;

			// Hit the auth endpoint.
			$.post(this.url + 'auth/login', {username: username, password: password}, function(data) {
				
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