var bantaba_app;
(function (bantaba_app) {
    'use strict';
    var SingleEventController = (function () {
        function SingleEventController(eventsService) {
            this.eventsService = eventsService;
            this.events = [];
        }
        return SingleEventController;
    }());
    SingleEventController.$inject = ['EventsService'];
    bantaba_app.SingleEventController = SingleEventController;
    angular
        .module('bantaba')
        .controller('SingleEventController', SingleEventController);
})(bantaba_app || (bantaba_app = {}));
