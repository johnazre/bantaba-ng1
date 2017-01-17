namespace bantaba_app {
    'use strict';

    export class SingleEventController {
        events: Array<any> = [];
        event: any;
        static $inject: Array<string> = ['EventsService'];
        constructor(public eventsService: EventsService) {}

    }

    angular
        .module('bantaba')
        .controller('SingleEventController', SingleEventController);
}