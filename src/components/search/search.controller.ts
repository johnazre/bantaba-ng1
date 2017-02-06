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
        selectedCity: any;
        selectedState: any;
        states: string[];
        
        static $inject: Array<string> = ['EventsService', 'PerformersService', 'MiscService', '$http'];
        constructor(private eventsService: EventsService,
                    private performersService: PerformersService,
                    public miscService: MiscService,
                    private $http: angular.IHttpService){
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

        // searchFilter() {
        //     this.eventsService.queryEvents(this.selectedOption, this.searchTerm)
        //         .then((res: angular.IHttpPromiseCallbackArg<any>) => { 
        //             console.log(res)
        //             this.results = res.data;
        //         });
        // }
        getCities(state) {
            this.$http.get(`http://api.sba.gov/geodata/city_links_for_state_of/${state}.json`)
                .then((res: angular.IHttpPromiseCallbackArg<any>) => {
                    console.log("cities res", res.data)                    
                    this.cities = res.data.sort((a, b) => a.name - b.name);
                })
        }
        searchByLocation() {
            this.$http.get(`http://localhost:3000/events/search?location=${this.selectedState}`)
                .then((res: angular.IHttpPromiseCallbackArg<any>) => {
                    console.log("query res", res);
                    this.results = res.data;
                });
        }
        searchByPerformer() {
            this.$http.get(`http://localhost:3000/events/search?performer=${this.searchTerm}`)
                .then((res: angular.IHttpPromiseCallbackArg<any>) => {
                    console.log("query res", res);
                    this.results = res.data;
                });
        }
    }

    angular
        .module('bantaba')
        .controller('SearchController', SearchController);
}