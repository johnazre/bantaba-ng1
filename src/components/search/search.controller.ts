namespace bantaba_app {
    'use strict';

    export class SearchController {
        cities: any[];
        event: any;
        events: Array<any> = [];
        performer: any;
        performers: Array<any> = [];
        results: any[];
        searchFilters: string[] = ['Location', 'Performer'];
        searchTerm: string;
        selectedOption: any;
        states: string[];
        
        static $inject: Array<string> = ['EventsService', 'PerformersService', 'MiscService', '$http'];
        constructor(private eventsService: EventsService,
                    private performersService: PerformersService,
                    public miscService: MiscService,
                    private $http: angular.IHttpService){
                        console.log(this.miscService)
                        this.states = this.miscService.getStates();
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
        getCities(state) {
            this.$http.get(`http://api.sba.gov/geodata/city_links_for_state_of/${state}.json`)
                .then((res: angular.IHttpPromiseCallbackArg<any>) => {
                    console.log("cities res", res)
                    res.data = this.cities;
                })
        }
    }

    angular
        .module('bantaba')
        .controller('SearchController', SearchController);
}