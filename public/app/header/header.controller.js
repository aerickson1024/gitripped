(function() {
    angular
        .module('app.header')
        .controller('header', Header);

    Header.$inject = [];

    function Header() {
        var vm = this;

        vm.logout = function() {
            console.log('User has logged out.');
        }
    }
}());
