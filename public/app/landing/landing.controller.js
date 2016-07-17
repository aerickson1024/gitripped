(function() {
    angular
        .module('app.landing')
        .controller('landing', Landing);

    Landing.$inject = ['user'];

    function Landing(user) {
        var vm = this;
    }
}());
