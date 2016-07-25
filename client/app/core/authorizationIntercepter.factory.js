(function() {
    angular
        .module('app')
        .factory('authorizationInterceptor', AuthorizationInterceptor);

    AuthorizationInterceptor.$inject = ['$q', '$location', 'authorization'];

    function AuthorizationInterceptor($q, $location, authorization) {
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

                // if (res.data.revokeAuthentication) {
                //     authorization.removeClaims();
                //     authorization.readyToAuthenticate = true;
                //     //$location.path('/');
                // }

                return res;
            },
            responseError: function(rejection) {
                switch(rejection.status){
                    case 401:
                        authorization.removeClaims();
                        break;
                    case 0:
                        // actions when internet is down
                        break;
                    default:
                        // some default actions
                }
                return $q.reject(rejection);
            }
        }
    }
}());
