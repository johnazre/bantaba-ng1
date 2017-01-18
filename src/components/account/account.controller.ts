namespace bantaba_app {
    'use strict';

    export class AccountController {
        
        static $inject: Array<string> = ['AuthService'];
        constructor(private authService: AuthService) {
            this.doLogin();
        }

        doLogin() {
            this.authService.login();
        }

    
    }

    angular
        .module('bantaba')
        .controller('AccountController', AccountController);
}