namespace bantaba_app {
    'use strict';

    export interface IEvent {  
        id: number;
        name: string;
        performers: any[];
        start_date: Date;
        end_date: Date;
    }
    export interface IEventsService {
        getAllEvents(): any;
        getSingleEvent(id: number): any;
        addEvent(id: number, event: any): any;
        editEvent(id: number, event: any): any;
        removeEvent(id: number): any;
    }
    export class EventsService implements IEventsService {
        static inject: Array<string> = ['$http'];
        constructor(private $http: angular.IHttpService) {}

        getAllEvents() {
            return this.$http.get('http://localhost:3000/events/all/');
        }

        queryEvents(option, term) {
            if(option === 'Location'){
                return this.$http.get(`http://localhost:3000/events/search?location=${term}`)
            } else {
                return this.$http.get(`http://localhost:3000/events/search?performer=${term}`)
            }
        }

        getSingleEvent(id: number) {
            return this.$http.get(`http://localhost:3000/events/${id}/`);
        }

        addEvent(id: number, event: IEvent) {
            return this.$http.post(`http://localhost:3000/events/${id}/`, event);
        }

        editEvent(id: number, event: IEvent) {
            return this.$http.put(`http://localhost:3000/events/${id}/`, event);
        }

        removeEvent(id: number) {
            return this.$http.delete(`http://localhost:3000/events/${id}/`);
        }
    }

    angular
        .module('bantaba')
        .service('EventsService', EventsService);
}