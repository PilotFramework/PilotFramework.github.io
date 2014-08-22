require.config({
    baseUrl: '',
    paths: {
        jquery:         'vendor/jquery/jquery',
        crossroads:     'vendor/crossroads/crossroads',
        signals:        'vendor/crossroads/signals',
        hasher:         'vendor/crossroads/hasher',
        application: 	'vendor/pilot/app',
        session:        'vendor/pilot/session',
        config:         'vendor/pilot/config',
        storage:        'vendor/pilot/storage',
        errorhandler:   'vendor/pilot/error_handler',
        router:         'vendor/pilot/router',
        model:          'app/models',
        controller:     'app/controllers',
    }
});

require(['app/routes'], function(routes) {
    var Router = new routes;
});