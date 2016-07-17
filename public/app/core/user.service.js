(function() {
    angular
        .module('app')
        .service('user', User);

    User.$inject = ['$http'];

    function User($http) {
        this.register = function(email, password) {
            return $http.post('api/register', {
                email: email,
                password: password
            });
        }

        this.authenticate = function(email, password) {
            return $http.post('api/authenticate', {
                email: email,
                password: password
            });
        }
    }
}());
