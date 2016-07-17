(function() {
    angular
        .module('app', [
            'app.header',
            'app.landing',
            'app.register',
            'app.login',
            'app.dashboard',
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
                .when('/login', {
                    templateUrl: 'app/login/login.html',
                    controller: 'login',
                    controllerAs: 'vm'
                })
                .when('/dashboard', {
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: 'dashboard',
                    controllerAs: 'vm'
                })
                .otherwise({ redirectTo: '/' });
        }]);
}());
