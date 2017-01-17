namespace bantaba_app {
    'use strict';

    export class ManageController {
        
        static $inject: Array<string> = [];
        constructor() {}
    }

    angular
        .module('bantaba')
        .controller('ManageController', ManageController);
}