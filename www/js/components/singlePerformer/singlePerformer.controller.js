var bantaba_app;
(function (bantaba_app) {
    'use strict';
    var SinglePerformerController = (function () {
        function SinglePerformerController(performersService, $stateParams) {
            var _this = this;
            this.performersService = performersService;
            this.$stateParams = $stateParams;
            this.performers = [];
            performersService.getSinglePerformer($stateParams.id)
                .then(function (res) {
                console.log('single performer res', res);
                _this.performer = res.data;
            });
        }
        return SinglePerformerController;
    }());
    SinglePerformerController.$inject = ['PerformersService', '$stateParams'];
    bantaba_app.SinglePerformerController = SinglePerformerController;
    angular
        .module('bantaba')
        .controller('SinglePerformerController', SinglePerformerController);
})(bantaba_app || (bantaba_app = {}));
