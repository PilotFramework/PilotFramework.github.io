define(['jquery', 'session'], function($, Session) {
	
	return function(endpoint) {

		// Public/private variables.
		this.url = 'http://localhost/api/public/';
		this.endpoint = endpoint;

		// Get.
		this.get = function(params, callback) {
			var instance = this;

			if(!params) params = {};
			params['token'] = Session.getToken();

			$.ajax({
				type: 'GET',
				url: this.url + this.endpoint,
				data: params,
				success: function(data) {
					instance.requestMade(data, callback);
				}
			});
		}

		// Find.
		this.find = function(id, callback) {
			var instance = this;

			$.ajax({
				type: 'GET',
				url: this.url + this.endpoint + '/' + id,
				data: {token: Session.getToken()},
				success: function(data) {
					instance.requestMade(data, callback);
				}
			});
		}

		// Edit
		this.edit = function(id, params, callback) {
			var instance = this;

			if(!params) params = {};
			params['token'] = Session.getToken();

			$.ajax({
				type: 'PUT',
				url: this.url + this.endpoint + '/' + id,
				data: params,
				success: function(data) {
					instance.requestMade(data, callback);
				}
			});
		}

		// Query.
		this.query = function(endpoint, type, params, callback) {
			var instance = this;

			// Type.
			if(!type) type = 'GET';

			// Parameters.
			if(!params) params = {};
			params['token'] = Session.getToken();

			// Callback
			if(!callback) callback = function() {}

			$.ajax({
				type: type,
				url: this.url + endpoint,
				data: params,
				success: function(data) {
					instance.requestMade(data, callback);
				}
			});
		}

		// Request made.
		this.requestMade = function(data, callback) {
			if(data.token) {
				Session.setToken(data.token);
			}

			callback(data);
		}
	}

});