(function() {
    angular
        .module('app.login')
        .controller('login', Login);

    Login.$inject = ['$location', 'user'];

    function Login($location, user) {
        var vm = this;

        vm.login = function() {
            console.log('this was hit');
            user.authenticate(vm.email, vm.password).then(function(res) {
                if (res.data.success) {
                    $location.path('/dashboard');
                }
                // console.log(res.data);
            });
        }
    }
}());
