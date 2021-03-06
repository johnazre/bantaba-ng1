var bantaba_app;
(function (bantaba_app) {
    'use strict';
    var SearchController = (function () {
        function SearchController(eventsService, performersService, miscService, $http, $scope) {
            this.eventsService = eventsService;
            this.performersService = performersService;
            this.miscService = miscService;
            this.$http = $http;
            this.$scope = $scope;
            this.events = [];
            this.performers = [];
            this.searchFilters = ['Location', 'Performer'];
            this.states = this.miscService.getStates();
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
        SearchController.prototype.getCities = function (state) {
            var _this = this;
            this.$http.get("http://api.sba.gov/geodata/city_links_for_state_of/" + state + ".json")
                .then(function (res) {
                _this.cities = res.data.sort(function (a, b) { return a.name - b.name; });
            });
        };
        SearchController.prototype.searchByLocation = function () {
            var _this = this;
            this.$http.get("http://localhost:3000/events/search?location=" + this.selectedState)
                .then(function (res) {
                _this.locationResults = res.data;
            });
        };
        SearchController.prototype.searchByPerformer = function () {
            var _this = this;
            this.$http.get("http://localhost:3000/events/search?performer=" + this.searchTerm)
                .then(function (res) {
                console.log('res', res);
                _this.performerResults = res.data;
            });
        };
        SearchController.prototype.showSingle = function (event) {
            console.log('event', event);
        };
        return SearchController;
    }());
    SearchController.$inject = ['EventsService', 'PerformersService', 'MiscService', '$http', '$scope'];
    bantaba_app.SearchController = SearchController;
    angular
        .module('bantaba')
        .controller('SearchController', SearchController);
})(bantaba_app || (bantaba_app = {}));
