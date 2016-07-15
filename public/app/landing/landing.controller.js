(function() {
    angular
        .module('app.landing')
        .controller('landing', Landing);

    Landing.$inject = [];

    function Landing() {
        var vm = this;
    }
}());
