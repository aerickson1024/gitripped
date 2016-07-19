(function() {
    angular
        .module('app.register')
        .controller('register', Register);

    Register.$inject = ['$location', 'user'];

    function Register($location, user) {
        var vm = this;
        vm.allFieldsSet = true;

        vm.register = function() {
            user.register(
                vm.firstName,
                vm.lastName,
                vm.email,
                vm.password
            ).then(function(res) {
                if (res.data.success) {
                    vm.firstName = '';
                    vm.lastName = '';
                    vm.email = '';
                    vm.password = '';
                    vm.allFieldsSet = true;
                    $location.path('/login');
                    console.log('User has been added to database.');
                } else {
                    vm.allFieldsSet = false;
                }
            });
        }
    }
}());
