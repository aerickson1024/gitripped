(function() {
    angular
        .module('app')
        .service('currentUser', CurrentUser);

    CurrentUser.$inject = ['$rootScope'];

    function CurrentUser($rootScope) {
        var self = this;
        self.firstName = '';
        self.lastName = '';
        self.email = '';
        self.permissions = [];

        self.getUser = function(callback) {
            var obj = {
                firstName: self.firstName,
                lastName: self.lastName,
                email: self.email,
                permissions: self.permissions
            };
            callback(obj);
        }

        $rootScope.$on('updateUserInfo', function(e, opt) {
            self.firstName = opt.details.firstName;
            self.lastName = opt.details.lastName;
            self.email = opt.details.email;
            self.permissions = opt.details.permissions;
        });
    }
}());
