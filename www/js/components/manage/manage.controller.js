var bantaba_app;
(function (bantaba_app) {
    'use strict';
    var ManageController = (function () {
        function ManageController() {
        }
        return ManageController;
    }());
    ManageController.$inject = [];
    bantaba_app.ManageController = ManageController;
    angular
        .module('bantaba')
        .controller('ManageController', ManageController);
})(bantaba_app || (bantaba_app = {}));
