namespace bantaba_app {
    'use strict';

    export class SinglePerformerController {
        performers: Array<any> = [];
        performer: any;
        static $inject: Array<string> = ['PerformersService', '$stateParams'];
        constructor(public performersService: PerformersService, 
                    public $stateParams: angular.ui.IStateParamsService) {
                        performersService.getSinglePerformer($stateParams.id)
                                    .then((res) => {
                                        console.log('single performer res', res)
                                        this.performer = res.data;
                                    })
                    }

    }

    angular
        .module('bantaba')
        .controller('SinglePerformerController', SinglePerformerController);
}