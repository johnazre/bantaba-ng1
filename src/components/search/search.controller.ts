namespace bantaba_app {
    'use strict';

    export class SearchController {
        events: Array<any> = [];
        event: any;
        performers: Array<any> = [];
        performer: any;
        searchFilters: string[] = ['Location', 'Performer'];
        selectedOption: any;
        searchTerm: string;
        
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
            console.log("select: ", this.selectedOption);
            console.log("term: ", this.searchTerm);
            this.eventsService.queryEvents(this.selectedOption, this.searchTerm)
                .then(function(res){ console.log(res)});
        }
    }

    angular
        .module('bantaba')
        .controller('SearchController', SearchController);
}