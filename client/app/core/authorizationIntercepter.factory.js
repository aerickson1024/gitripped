(function() {
    angular
        .module('app')
        .factory('authorizationInterceptor', AuthorizationInterceptor);

    AuthorizationInterceptor.$inject = ['authorization'];

    function AuthorizationInterceptor(authorization) {
        return {
            request: function(config) {
                var token = authorization.getToken();

                if (token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }

                return config;
            },
            response: function(res) {
                if (res.data.token) {
                    authorization.saveToken(res.data.token);
                }

                return res;
            },
            responseError: function(res) {
                return res;
            }
        }
    }
}());
