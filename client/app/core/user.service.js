(function() {
    angular
        .module('app')
        .service('user', User);

    User.$inject = ['$location', '$http', 'authorization'];

    function User($location, $http, authorization) {
        var self = this;

        self.register = function(firstName, lastName, email, password) {
            return $http.post('api/register', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            });
        }

        self.authenticate = function(email, password) {
            return $http.post('api/authenticate', {
                email: email,
                password: password
            });
        }

        self.removeAuthorization = function() {
            $http.get('/api/logout').then(function() {
                authorization.removeClaims();
                $location.path('/');
            });
        }
    }
}());
