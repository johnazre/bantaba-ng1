// namespace bantaba_app {
//     'use strict';

//     export class LoginController {

//         static $inject: Array<string> = ['AuthService', '$scope'];
//         constructor(private authService: AuthService, $scope: angular.IScope) {
//             this.doLogin();
//         }
//         doLogin() {
//             this.authService.login();
//         }
//     }

//     angular
//         .module('bantaba')
//         .controller('LoginController', LoginController);
// }

(function () {

    'use strict';

    angular
        .module('bantaba')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['AuthService', 'login', '$scope'];

    function LoginController(AuthService, login, $scope) {
        AuthService.login();
        console.log('login', login)

        $scope.$on("$ionicView.beforeEnter", function (event, data) {
            // handle event
            console.log("State Params: ", data.stateParams);
            AuthService.login();
        });
    }
})();
