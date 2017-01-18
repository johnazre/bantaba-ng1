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

    LoginController.$inject = ['AuthService', 'login'];

    function LoginController(AuthService, login) {
        AuthService.login();
        console.log('login', login)
    }
})();
