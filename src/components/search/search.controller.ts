namespace bantaba_app {
    'use strict';

    export class SearchController {
        events: Array<any> = [];
        event: any;
        performers: Array<any> = [];
        performer: any;
        
        static $inject: Array<string> = ['EventsService', 'PerformersService', '$http'];
        constructor(private eventsService: EventsService,
                    private performersService: PerformersService,
                    private $http: angular.IHttpService) {
            this.getAllEvents();
        }

        getAllEvents() {
            this.eventsService.getAllEvents()
                .then((res: angular.IHttpPromiseCallbackArg<any>) => {
                    console.log('res: ', res.data)
                    this.events = res.data;
                });
        }

        getAllPerformers() {
            this.performersService.getAllPerformers()
                .then((res: angular.IHttpPromiseCallbackArg<any>) => {
                    console.log('res: ', res.data)
                    this.performers = res.data;
                });
        }
    }

    angular
        .module('bantaba')
        .controller('SearchController', SearchController);
}