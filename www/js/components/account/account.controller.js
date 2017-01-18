var bantaba_app;
(function (bantaba_app) {
    'use strict';
    var AccountController = (function () {
        function AccountController(authService) {
            this.authService = authService;
        }
        AccountController.prototype.logout = function () {
            this.authService.logout();
        };
        return AccountController;
    }());
    AccountController.$inject = ['AuthService'];
    bantaba_app.AccountController = AccountController;
    angular
        .module('bantaba')
        .controller('AccountController', AccountController);
})(bantaba_app || (bantaba_app = {}));
