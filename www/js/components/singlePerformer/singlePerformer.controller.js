var bantaba_app;
(function (bantaba_app) {
    'use strict';
    var SinglePerformerController = (function () {
        function SinglePerformerController(performersService) {
            this.performersService = performersService;
            this.performers = [];
        }
        return SinglePerformerController;
    }());
    SinglePerformerController.$inject = ['PerformersService'];
    bantaba_app.SinglePerformerController = SinglePerformerController;
    angular
        .module('bantaba')
        .controller('SinglePerformerController', SinglePerformerController);
})(bantaba_app || (bantaba_app = {}));
