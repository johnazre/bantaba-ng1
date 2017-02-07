namespace bantaba_app {
    'use strict';

    export class SingleEventController {
        events: Array<any> = [];
        event: any;
        static $inject: Array<string> = ['EventsService', '$stateParams'];
        constructor(public eventsService: EventsService, 
                    public $stateParams: angular.ui.IStateParamsService) {
                        eventsService.getSingleEvent($stateParams.id)
        }

    }

    angular
        .module('bantaba')
        .controller('SingleEventController', SingleEventController);
}