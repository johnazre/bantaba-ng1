var bantaba_app;
(function (bantaba_app) {
    'use strict';
    var MyEventsController = (function () {
        function MyEventsController() {
        }
        return MyEventsController;
    }());
    MyEventsController.$inject = [];
    bantaba_app.MyEventsController = MyEventsController;
    angular
        .module('bantaba')
        .controller('MyEventsController', MyEventsController);
})(bantaba_app || (bantaba_app = {}));
