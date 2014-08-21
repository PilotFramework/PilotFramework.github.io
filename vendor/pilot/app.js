define([
	'vendor/pilot/template',
	'vendor/pilot/model',
	'vendor/pilot/url',
	'vendor/pilot/assets',
], function(Template, Model, Url, Assets) {
	
	return {
		template: 	new Template(),
		model: 		new Model(),
		url: 		new Url(),
		assets: 	new Assets()
	}

});