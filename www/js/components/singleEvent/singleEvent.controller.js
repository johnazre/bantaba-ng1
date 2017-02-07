var bantaba_app;
(function (bantaba_app) {
    'use strict';
    var SingleEventController = (function () {
        function SingleEventController(eventsService, $stateParams) {
            this.eventsService = eventsService;
            this.$stateParams = $stateParams;
            this.events = [];
            eventsService.getSingleEvent($stateParams.id);
        }
        return SingleEventController;
    }());
    SingleEventController.$inject = ['EventsService', '$stateParams'];
    bantaba_app.SingleEventController = SingleEventController;
    angular
        .module('bantaba')
        .controller('SingleEventController', SingleEventController);
})(bantaba_app || (bantaba_app = {}));
