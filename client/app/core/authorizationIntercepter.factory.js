(function() {
    angular
        .module('app')
        .factory('authorizationInterceptor', AuthorizationInterceptor);

    AuthorizationInterceptor.$inject = ['$location', 'authorization'];

    function AuthorizationInterceptor($location, authorization) {
        return {
            request: function(config) {
                var claims = authorization.getClaims();

                if (claims) {
                    config.headers.claims = claims;
                }

                return config;
            },
            response: function(res) {
                if (res.data.claims) {
                    authorization.saveClaims(res.data.claims);
                }

                return res;
            },
            responseError: function(res) {
                return res;
            }
        }
    }
}());
