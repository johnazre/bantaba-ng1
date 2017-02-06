var bantaba_app;
(function (bantaba_app) {
    'use strict';
    var SearchController = (function () {
        function SearchController(eventsService, performersService, miscService, $http) {
            this.eventsService = eventsService;
            this.performersService = performersService;
            this.miscService = miscService;
            this.$http = $http;
            this.events = [];
            this.performers = [];
            this.searchFilters = ['Location', 'Performer'];
            console.log(this.miscService);
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
        SearchController.prototype.searchFilter = function () {
            var _this = this;
            this.eventsService.queryEvents(this.selectedOption, this.searchTerm)
                .then(function (res) {
                console.log(res);
                _this.results = res.data;
            });
        };
        SearchController.prototype.getCities = function (state) {
            var _this = this;
            this.$http.get("http://api.sba.gov/geodata/city_links_for_state_of/" + state + ".json")
                .then(function (res) {
                console.log("cities res", res);
                res.data = _this.cities;
            });
        };
        return SearchController;
    }());
    SearchController.$inject = ['EventsService', 'PerformersService', 'MiscService', '$http'];
    bantaba_app.SearchController = SearchController;
    angular
        .module('bantaba')
        .controller('SearchController', SearchController);
})(bantaba_app || (bantaba_app = {}));
