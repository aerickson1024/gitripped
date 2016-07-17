(function() {
    angular
        .module('app')
        .service('user', User);

    User.$inject = ['$http'];

    function User($http) {
        var self = this;

        self.register = function(email, password) {
            return $http.post('api/register', {
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
    }
}());
