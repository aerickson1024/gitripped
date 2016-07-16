(function() {
    angular
        .module('app', ['app.landing', 'app.welcome', 'ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/landing/landing.html',
                    controller: 'landing',
                    controllerAs: 'vm'
                })
                .when('/welcome', {
                    templateUrl: 'app/welcome/welcome.html',
                    controller: 'welcome',
                    controllerAs: 'vm'
                })
                .otherwise({ redirectTo: '/' });
        }]);
}());
