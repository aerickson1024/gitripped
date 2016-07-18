(function() {
    angular
        .module('app.login')
        .controller('login', Login);

    Login.$inject = ['user'];

    function Login(user) {
        var vm = this;

        vm.login = function() {
            user.authenticate(vm.email, vm.password).then(function(res) {
                console.log(res.data);
            });
        }
    }
}());
