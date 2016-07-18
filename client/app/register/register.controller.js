(function() {
    angular
        .module('app.register')
        .controller('register', Register);

    Register.$inject = ['user'];

    function Register(user) {
        var vm = this;

        vm.register = function() {
            user.register(
                vm.firstName,
                vm.lastName,
                vm.email,
                vm.password
            ).then(function(res) {
                console.log(res.data);
            });
        }
    }
}());
