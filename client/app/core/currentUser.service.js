(function() {
    angular
        .module('app')
        .service('currentUser', CurrentUser);

    CurrentUser.$inject = [];

    function CurrentUser() {
        var self = this;
        self.firstName = '';
        self.lastName = '';
        self.email = '';

        this.storeUser = function(firstName, lastName, email) {
            self.firstName = firstName;
            self.lastName = lastName;
            self.email = email;
        }

        this.getUser = function(callback) {
            var obj = {
                firstName: self.firstName,
                lastName: self.lastName,
                email: self.email
            };
            callback(obj);
        }
    }
}());
