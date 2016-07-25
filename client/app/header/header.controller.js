(function() {
    angular
        .module('app.header')
        .controller('header', Header);

    Header.$inject = ['authorization', 'user'];

    function Header(authorization, user) {
        var vm = this;

        vm.logout = function() {
            user.removeAuthorization();
        }

        vm.isAuthorized = function() {
            return authorization.isAuthorized();
        }
    }
}());
