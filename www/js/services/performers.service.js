var bantaba_app;
(function (bantaba_app) {
    'use strict';
    var PerformersService = (function () {
        function PerformersService($http) {
            this.$http = $http;
        }
        PerformersService.prototype.getAllPerformers = function () {
            return this.$http.get('http://localhost:3000/performers/all/');
        };
        PerformersService.prototype.getSinglePerformer = function (id) {
            return this.$http.get("http://localhost:3000/performers/" + id + "/");
        };
        PerformersService.prototype.addPerformer = function (id, performer) {
            return this.$http.post("http://localhost:3000/performers/" + id + "/", performer);
        };
        PerformersService.prototype.editPerformer = function (id, performer) {
            return this.$http.put("http://localhost:3000/performers/" + id + "/", performer);
        };
        PerformersService.prototype.removePerformer = function (id) {
            return this.$http["delete"]("http://localhost:3000/performers/" + id + "/");
        };
        return PerformersService;
    }());
    PerformersService.inject = ['$http'];
    bantaba_app.PerformersService = PerformersService;
    angular
        .module('bantaba')
        .service('PerformersService', PerformersService);
})(bantaba_app || (bantaba_app = {}));
