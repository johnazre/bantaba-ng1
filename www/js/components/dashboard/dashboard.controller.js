var bantaba_app;
(function (bantaba_app) {
    'use strict';
    var DashboardController = (function () {
        function DashboardController(eventsService, $http) {
            this.eventsService = eventsService;
            this.$http = $http;
            this.events = [];
            this.getAllEvents();
        }
        DashboardController.prototype.getAllEvents = function () {
            var _this = this;
            this.eventsService.getAllEvents()
                .then(function (res) {
                console.log('res: ', res.data);
                _this.events = res.data;
            });
        };
        return DashboardController;
    }());
    DashboardController.$inject = ['EventsService', '$http'];
    bantaba_app.DashboardController = DashboardController;
    angular
        .module('bantaba')
        .controller('DashboardController', DashboardController);
})(bantaba_app || (bantaba_app = {}));
