namespace bantaba_app {
    'use strict';

    export interface IPerformer {
    }
    export interface IPerformersService {
        getAllPerformers(): any;
        getSinglePerformer(id: number): any;
        addPerformer(id: number, performer: any): any;
        editPerformer(id: number, performer: any): any;
        removePerformer(id: number): any;
    }
    export class PerformersService implements IPerformersService {
        static inject: Array<string> = ['$http'];
        constructor(private $http: angular.IHttpService) {}

        getAllPerformers() {
            return this.$http.get('http://localhost:3000/performers/all/');
        }

        getSinglePerformer(id: number) {
            return this.$http.get(`http://localhost:3000/performers/${id}/`);
        }

        addPerformer(id: number, performer: IPerformer) {
            return this.$http.post(`http://localhost:3000/performers/${id}/`, performer);
        }

        editPerformer(id: number, performer: IPerformer) {
            return this.$http.put(`http://localhost:3000/performers/${id}/`, performer);
        }

        removePerformer(id: number) {
            return this.$http.delete(`http://localhost:3000/performers/${id}/`);
        }

    }

    angular
        .module('bantaba')
        .service('PerformersService', PerformersService);
}