(function() {
    angular
        .module('app.landing')
        .controller('landing', Landing);

    Landing.$inject = ['user'];

    function Landing(user) {
        var vm = this;

        vm.login = function() {
            user.authenticate(vm.email, vm.password).then(function(res) {
                console.log('Authenticated: %s %s', res.data.email, res.data.password);
            });
        }
    }
}());
