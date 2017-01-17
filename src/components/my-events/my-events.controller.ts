namespace bantaba_app {
    'use strict';

    export class MyEventsController {
        
        static $inject: Array<string> = [];
        constructor() {}
    }

    angular
        .module('bantaba')
        .controller('MyEventsController', MyEventsController);
}