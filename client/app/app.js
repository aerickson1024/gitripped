(function() {
    angular
        .module('app', [
            'ngRoute',
            'app.header',
            'app.landing',
            'app.register',
            'app.login',
            'app.dashboard'
        ])
        .config(['$routeProvider', '$httpProvider',
            function($routeProvider, $httpProvider) {
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
                        controllerAs: 'vm',
                        resolve: {
                            auth: ['currentUser', function(currentUser) {
                                return currentUser.verifyMe();
                            }]
                        }
                    })
                    .otherwise({ redirectTo: '/' });

                $httpProvider.interceptors.push('authorizationInterceptor');
        }])
        .run(['$rootScope', '$location', 'authorization', 'currentUser',
            function($rootScope, $location, authorization, currentUser) {
                var routesThatRequireAuthorization = ['/dashboard'];

                $rootScope.$on('$routeChangeStart', function(event, next, current) {
                    console.log($location.path());
                    if (_(routesThatRequireAuthorization).contains($location.path()) && !authorization.isAuthorized()) {
                        // $location.path('/');
                    }
                });

                $rootScope.$on('$routeChangeError', function(events, next, current) {
                    console.log('error in changing route');
                    $location.path('/login');
                });
        }]);
}());
