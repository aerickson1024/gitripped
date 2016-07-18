(function() {
    angular
        .module('app')
        .service('authorization', Authorization);

    Authorization.$inject = [
        '$window',
        '$rootScope',
        '$location',
        'currentUser'
    ];

    function Authorization($window, $rootScope, $location, currentUser) {
        var self = this;

        // Extracts the 'claims' section of the JWT and parses
        // the base64 into a javascript object.
        self.parseJWT = function(token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');

            var params = JSON.parse($window.atob(base64));

            currentUser.storeUser(
                params._doc.firstName,
                params._doc.lastName,
                params._doc.email
            );

            return params;
        }

        self.saveToken = function(token) {
            $window.localStorage['jwtToken'] = token;
        }

        self.getToken = function() {
            return $window.localStorage['jwtToken'];
        }

        self.removeToken = function() {
            $window.localStorage.removeItem('jwtToken');
            console.log('User has been logged out.');
        }

        self.isAuthorized = function() {
            var token = self.getToken();

            if (token) {
                var params = self.parseJWT(token);

                return Math.floor(new Date().getTime() / 1000) <= params.exp;
            } else {
                return false;
            }
        }

        $rootScope.$watch(function() { return self.isAuthorized(); }, function(newValue, oldValue) {
            if (!newValue && oldValue) {
                $location.path('/');
            }
        }, true);
    }
}());
