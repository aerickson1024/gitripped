(function() {
    angular
        .module('app', [
            'app.landing',
            'app.register',
            'app.welcome',
            'ngRoute'
        ])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/landing/landing.html',
                    controller: 'landing',
                    controllerAs: 'vm'
                })
                .when('/register', {
                    templateUrl: 'app/register/register.html',
                    controller: 'register',
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
