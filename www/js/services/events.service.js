var bantaba_app;
(function (bantaba_app) {
    'use strict';
    var EventsService = (function () {
        function EventsService($http) {
            this.$http = $http;
        }
        EventsService.prototype.getAllEvents = function () {
            return this.$http.get('http://localhost:3000/events/all/');
        };
        EventsService.prototype.queryEvents = function (option, term) {
            if (option === 'Location') {
                return this.$http.get("http://localhost:3000/events/search?location=" + term);
            }
            else {
                return this.$http.get("http://localhost:3000/events/search?performer=" + term);
            }
        };
        EventsService.prototype.getSingleEvent = function (id) {
            return this.$http.get("http://localhost:3000/events/" + id + "/");
        };
        EventsService.prototype.addEvent = function (id, event) {
            return this.$http.post("http://localhost:3000/events/" + id + "/", event);
        };
        EventsService.prototype.editEvent = function (id, event) {
            return this.$http.put("http://localhost:3000/events/" + id + "/", event);
        };
        EventsService.prototype.removeEvent = function (id) {
            return this.$http["delete"]("http://localhost:3000/events/" + id + "/");
        };
        return EventsService;
    }());
    EventsService.inject = ['$http'];
    bantaba_app.EventsService = EventsService;
    angular
        .module('bantaba')
        .service('EventsService', EventsService);
})(bantaba_app || (bantaba_app = {}));
