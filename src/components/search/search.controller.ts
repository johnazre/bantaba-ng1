namespace bantaba_app {
    'use strict';

    export class SearchController {
        event: any;
        events: Array<any> = [];
        performer: any;
        performers: Array<any> = [];
        results: any[];
        searchFilters: string[] = ['Location', 'Performer'];
        searchTerm: string;
        selectedOption: any;
        
        static $inject: Array<string> = ['EventsService', 'PerformersService', '$http'];
        constructor(private eventsService: EventsService,
                    private performersService: PerformersService,
                    private $http: angular.IHttpService) {
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

        searchFilter() {
            this.eventsService.queryEvents(this.selectedOption, this.searchTerm)
                .then((res: angular.IHttpPromiseCallbackArg<any>) => { 
                    console.log(res)
                    this.results = res.data;
                });
        }
    }

    angular
        .module('bantaba')
        .controller('SearchController', SearchController);
}