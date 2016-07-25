(function() {
    angular
        .module('app.dashboard')
        .controller('dashboard', Dashboard);

    Dashboard.$inject = ['$rootScope', '$http', 'currentUser', 'authorization'];

    function Dashboard($rootScope, $http, currentUser, authorization) {
        var vm = this;

        currentUser.getUser(function(res) {
            vm.firstName = res.firstName;
            vm.lastName = res.lastName;
            vm.email = res.email;
        });

        $http.get('/api/dashboard').then(function(res) {
            if (res.data.success) {
                console.log(res.data.message);
            } else {
                // authorization.removeClaims();
                console.log(res.data.message);
            }
        });

        $rootScope.$on('currentUserDetailsChanged', function(events, args) {
            currentUser.getUser(function(res) {
                vm.firstName = res.firstName;
                vm.lastName = res.lastName;
                vm.email = res.email;
            });
        });
    }
}());
