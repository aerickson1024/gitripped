(function() {
    angular
        .module('app.header')
        .controller('header', Header);

    Header.$inject = ['authorization'];

    function Header(authorization) {
        var vm = this;

        vm.logout = function() {
            authorization.removeClaims();
        }

        vm.isAuthorized = function() {
            return authorization.isAuthorized();
        }
    }
}());
