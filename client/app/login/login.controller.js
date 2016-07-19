(function() {
    angular
        .module('app.login')
        .controller('login', Login);

    Login.$inject = ['$location', 'user'];

    function Login($location, user) {
        var vm = this;
        vm.validCredentials = true;

        vm.login = function() {
            user.authenticate(vm.email, vm.password).then(function(res) {
                if (res.data.success) {
                    $location.path('/dashboard');
                } else {
                    vm.validCredentials = false;
                }
                // console.log(res.data);
            });
        }
    }
}());
