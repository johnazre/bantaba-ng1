var bantaba_app;
(function (bantaba_app) {
    'use strict';
    var MiscService = (function () {
        function MiscService() {
        }
        MiscService.prototype.getStates = function () {
            return ["AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY"];
        };
        return MiscService;
    }());
    MiscService.inject = [];
    bantaba_app.MiscService = MiscService;
    angular
        .module('bantaba')
        .service('MiscService', MiscService);
})(bantaba_app || (bantaba_app = {}));
