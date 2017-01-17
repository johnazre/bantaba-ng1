namespace bantaba_app {
    'use strict';

    export class SinglePerformerController {
        performers: Array<any> = [];
        performer: any;
        static $inject: Array<string> = ['PerformersService'];
        constructor(public performersService: PerformersService) {}

    }

    angular
        .module('bantaba')
        .controller('SinglePerformerController', SinglePerformerController);
}