(function() {
    angular
        .module('app.welcome')
        .controller('welcome', Welcome);

    Welcome.$inject = [];

    function Welcome() {
        var vm = this;

        vm.logout = function() {
            console.log('User has been logged out.');
        }
    }
}());
