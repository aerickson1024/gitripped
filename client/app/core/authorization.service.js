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

    function Authorization($window, $rootScope, $location) {
        var self = this;

        // Extracts the 'claims' section of the JWT and parses
        // the base64 into a javascript object.
        self.parseClaims = function(token) {
            // var base64Url = token.split('.')[1];
            var base64 = token.replace('-', '+').replace('_', '/');
            var params = JSON.parse($window.atob(base64));

            return params;
        }

        self.saveClaims = function(claimsData) {
            $window.localStorage['claims'] = claimsData;
            var params = self.parseClaims(claimsData);
            $rootScope.$broadcast('updateUserInfo', {
                details: params
            });
        }

        self.getClaims = function() {
            return $window.localStorage['claims'];
        }

        self.removeToken = function() {
            $window.localStorage.removeItem('claims');
            $location.path('/');
        }

        self.isAuthorized = function() {
            var claims = self.getClaims();

            if (claims) {
                var params = self.parseClaims(claims);

                return Math.floor(new Date().getTime() / 1000) <= params.exp;
            } else {
                return false;
            }
        }
    }
}());
