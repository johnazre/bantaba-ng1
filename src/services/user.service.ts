namespace bantaba_app {
    'use strict';

    export interface IUserService {
    }
    export class UserService implements IUserService {
        static inject: Array<string> = ['$http'];
        constructor(private $http: angular.IHttpService) {}
    }

    angular
        .module('bantaba')
        .service('UserService', UserService);
}