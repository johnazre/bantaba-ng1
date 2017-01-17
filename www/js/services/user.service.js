var bantaba_app;
(function (bantaba_app) {
    'use strict';
    var UserService = (function () {
        function UserService($http) {
            this.$http = $http;
        }
        return UserService;
    }());
    UserService.inject = ['$http'];
    bantaba_app.UserService = UserService;
    angular
        .module('bantaba')
        .service('UserService', UserService);
})(bantaba_app || (bantaba_app = {}));
