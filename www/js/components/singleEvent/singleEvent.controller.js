var bantaba_app;
(function (bantaba_app) {
    'use strict';
    var SingleEventController = (function () {
        function SingleEventController(eventsService, $stateParams) {
            var _this = this;
            this.eventsService = eventsService;
            this.$stateParams = $stateParams;
            eventsService.getSingleEvent($stateParams.id)
                .then(function (res) {
                console.log('single event res', res);
                _this.event = res.data[0];
            });
        }
        return SingleEventController;
    }());
    SingleEventController.$inject = ['EventsService', '$stateParams'];
    bantaba_app.SingleEventController = SingleEventController;
    angular
        .module('bantaba')
        .controller('SingleEventController', SingleEventController);
})(bantaba_app || (bantaba_app = {}));
