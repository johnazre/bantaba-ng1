var bantaba_app;
(function (bantaba_app) {
    'use strict';
    var LoginController = (function () {
        function LoginController(authService, $scope) {
            this.authService = authService;
            this.doLogin();
            $scope.$on("$ionicView.beforeEnter", function (event, data) {
                authService.login();
            });
        }
        LoginController.prototype.doLogin = function () {
            this.authService.login();
        };
        return LoginController;
    }());
    LoginController.$inject = ['AuthService', '$scope'];
    bantaba_app.LoginController = LoginController;
    angular
        .module('bantaba')
        .controller('LoginController', LoginController);
})(bantaba_app || (bantaba_app = {}));
// (function () {
//     'use strict';
//     angular
//         .module('bantaba')
//         .controller('LoginController', LoginController);
//     LoginController.$inject = ['AuthService', 'login', '$scope'];
//     function LoginController(AuthService, login, $scope) {
//         AuthService.login();
//         console.log('login', login)
//         $scope.$on("$ionicView.beforeEnter", function (event, data) {
//             AuthService.login();
//         });
//     }
// })();
