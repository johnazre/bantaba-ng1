var bantaba_app;
(function (bantaba_app) {
    'use strict';
    var AccountController = (function () {
        function AccountController() {
        }
        return AccountController;
    }());
    AccountController.$inject = [];
    bantaba_app.AccountController = AccountController;
    angular
        .module('bantaba')
        .controller('AccountController', AccountController);
})(bantaba_app || (bantaba_app = {}));
