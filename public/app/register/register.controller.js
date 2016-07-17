(function() {
    angular
        .module('app.register')
        .controller('register', Register);

    Register.$inject = ['user'];

    function Register(user) {
        var vm = this;

        vm.register = function() {
            user.register(vm.email, vm.password).then(function(res) {
                console.log('Registered: %s %s', res.data.email, res.data.password);
            });
        }
    }
}());
