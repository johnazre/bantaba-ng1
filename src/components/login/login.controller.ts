namespace bantaba_app {
    'use strict';

    export class LoginController {

        static $inject: Array<string> = ['AuthService', '$scope'];
        constructor(private authService: AuthService, $scope: angular.IScope) {
            this.doLogin();
            $scope.$on("$ionicView.beforeEnter", function (event, data) {
                authService.login();
            });
        }
        doLogin() {
            this.authService.login();
        }
    }

    angular
        .module('bantaba')
        .controller('LoginController', LoginController);
}

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
