(function() {
    angular
        .module('app', ['app.landing', 'ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/landing/landing.html',
                    controller: 'landing',
                    controllerAs: 'vm'
                })
                .otherwise({ redirectTo: '/' });
        }]);
}());
