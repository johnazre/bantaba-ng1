namespace bantaba_app {
    'use strict';

    export class AccountController {
        
        static $inject: Array<string> = [];
        constructor() {}
    }

    angular
        .module('bantaba')
        .controller('AccountController', AccountController);
}