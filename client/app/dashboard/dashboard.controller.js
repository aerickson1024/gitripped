(function() {
    angular
        .module('app.dashboard')
        .controller('dashboard', Dashboard);

    Dashboard.$inject = [];

    function Dashboard() {
        var vm = this;

        vm.logout = function() {
            console.log('User has been logged out.');
        }
    }
}());
