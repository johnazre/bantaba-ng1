var bantaba_app;
(function (bantaba_app) {
    'use strict';
    var SearchController = (function () {
        function SearchController(eventsService, performersService, $http) {
            this.eventsService = eventsService;
            this.performersService = performersService;
            this.$http = $http;
            this.events = [];
            this.performers = [];
            this.searchFilters = ['Location', 'Performer'];
        }
        SearchController.prototype.getAllEvents = function () {
            var _this = this;
            this.eventsService.getAllEvents()
                .then(function (res) {
                console.log('res: ', res.data);
                _this.events = res.data;
            });
        };
        SearchController.prototype.getAllPerformers = function () {
            var _this = this;
            this.performersService.getAllPerformers()
                .then(function (res) {
                console.log('res: ', res.data);
                _this.performers = res.data;
            });
        };
        SearchController.prototype.searchFilterChange = function () {
            console.log("select: ", this.selectedOption);
        };
        return SearchController;
    }());
    SearchController.$inject = ['EventsService', 'PerformersService', '$http'];
    bantaba_app.SearchController = SearchController;
    angular
        .module('bantaba')
        .controller('SearchController', SearchController);
})(bantaba_app || (bantaba_app = {}));
