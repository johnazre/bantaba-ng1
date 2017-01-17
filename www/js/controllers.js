var DashCtrl = (function () {
    function DashCtrl(eventsService) {
        this.eventsService = eventsService;
    }
    DashCtrl.prototype.getEvents = function () {
        console.log(this.eventsService.getAllEvents());
    };
    return DashCtrl;
}());
DashCtrl.$inject = ['EventsService'];
var ChatsCtrl = (function () {
    function ChatsCtrl(Chats) {
        this.Chats = Chats;
        this.$inject = ['Chats'];
        this.chats = Chats.all();
    }
    ChatsCtrl.prototype.remove = function (chat) {
        this.Chats.remove(chat);
    };
    ;
    return ChatsCtrl;
}());
var ChatDetailCtrl = (function () {
    function ChatDetailCtrl(Chats, $stateParams) {
        this.Chats = Chats;
        this.$stateParams = $stateParams;
        this.$inject = ['Chats', '$stateParams'];
        this.chat = Chats.get($stateParams.chatId);
    }
    return ChatDetailCtrl;
}());
angular.module('starter.controllers', [])
    .controller('DashCtrl', DashCtrl)
    .controller('ChatsCtrl', ChatsCtrl)
    .controller('ChatDetailCtrl', ChatDetailCtrl)
    .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
