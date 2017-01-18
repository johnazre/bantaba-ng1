namespace bantaba_app {
    'use strict';

    export class AccountController {
        
        static $inject: Array<string> = ['AuthService'];
        constructor(private authService: AuthService) {
        }

        logout() {
            this.authService.logout();
        }

    
    }

    angular
        .module('bantaba')
        .controller('AccountController', AccountController);
}