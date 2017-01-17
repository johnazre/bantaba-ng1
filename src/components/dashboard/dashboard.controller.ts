namespace bantaba_app {
    'use strict';

    export class DashboardController {
        events: Array<any> = [];
        event: any;
        static $inject: Array<string> = ['EventsService', '$http'];
        constructor(public eventsService: EventsService,
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

        // getSingleEvent(id: number) {
        //     return this.eventsService.getSingleEvent(id).then(function (res) {
        //         console.log('res: ', res.data)
        //         this.event = res.data;
        //         return this.event;
        //     });
        // }

        // addEvent(id: number, event: IEvent) {
        //     return this.eventsService.addEvent(id, event).then(function (res) {
        //         console.log('res: ', res.data)
        //         this.event = res.data;
        //         return this.event;
        //     });
        // }
    }

    angular
        .module('bantaba')
        .controller('DashboardController', DashboardController);
}