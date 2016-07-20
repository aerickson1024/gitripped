(function() {
    angular
        .module('app.dashboard')
        .controller('dashboard', Dashboard);

    Dashboard.$inject = ['$http', 'currentUser'];

    function Dashboard($http, currentUser) {
        var vm = this;

        currentUser.getUser(function(res) {
            vm.firstName = res.firstName;
            vm.lastName = res.lastName;
            vm.email = res.email;
        });

        $http.get('/api/dashboard').then(function(res) {
            if (res.data.success) {
                console.log('User was authorized to view the Dashboard.');
            } else {
                console.log('User was denied acccess to the Dashboard.');
            }
        });

        vm.logout = function() {
            console.log('User has been logged out.');
        }
    }
}());
