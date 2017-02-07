namespace bantaba_app {
    'use strict';

    export class SingleEventController {
        event: any;
        static $inject: Array<string> = ['EventsService', '$stateParams'];
        constructor(public eventsService: EventsService, 
                    public $stateParams: angular.ui.IStateParamsService) {
                        eventsService.getSingleEvent($stateParams.id)
                                    .then((res) => {
                                        console.log('single event res', res)
                                        this.event = res.data[0];
                                    })
        }

    }

    angular
        .module('bantaba')
        .controller('SingleEventController', SingleEventController);
}