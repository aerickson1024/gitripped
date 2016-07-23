(function() {
    angular
        .module('app')
        .service('currentUser', CurrentUser);

    CurrentUser.$inject = ['$rootScope', 'authorization'];

    function CurrentUser($rootScope, authorization) {
        var self = this;
        self.firstName = '';
        self.lastName = '';
        self.email = '';
        self.permissions = [];

        var initialLoad = true;

        self.getUser = function(callback) {
            var userDetails;
            var details;
            if (initialLoad) {
                userDetails = self.populateDetails();
                initialLoad = false;
            }

            if (userDetails) {
                details = {
                    firstName: userDetails.firstName,
                    lastName: userDetails.lastName,
                    email: userDetails.email,
                    permissions: userDetails.permissions
                };
            } else {
                details = {
                    firstName: self.firstName,
                    lastName: self.lastName,
                    email: self.email,
                    permissions: self.permissions
                };
            }
            callback(details);
        }

        self.populateDetails = function() {
            var claims = authorization.getClaims();
            var params = authorization.parseClaims(claims);
            self.firstName = params.firstName;
            self.lastName = params.lastName;
            self.email = params.email;
            self.permissions = params.permissions;
        }

        $rootScope.$on('updateUserInfo', function(events, args) {
            self.firstName = args.details.firstName;
            self.lastName = args.details.lastName;
            self.email = args.details.email;
            self.permissions = args.details.permissions;
            $rootScope.$broadcast('currentUserDetailsChanged');
        });
    }
}());
