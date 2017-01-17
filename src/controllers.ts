class DashCtrl {
  static $inject: Array<string> = ['EventsService'];
  constructor(public eventsService: EventsService){

  }
  getEvents() {
    console.log(this.eventsService.getAllEvents())
  }
}

class ChatsCtrl {
  public $inject = ['Chats']
  chats: any[];

  constructor(public Chats: any){
    this.chats = Chats.all();
  }
  remove(chat: any) {
    this.Chats.remove(chat);
  };
}

class ChatDetailCtrl {
  public $inject = ['Chats', '$stateParams'];
  chat: Object
  constructor(
    public Chats: any,
    public $stateParams: ng.ui.IStateParamsService
  ){
    this.chat = Chats.get($stateParams.chatId);
  }
  
}

angular.module('starter.controllers', [])

.controller('DashCtrl', DashCtrl)

.controller('ChatsCtrl', ChatsCtrl)

.controller('ChatDetailCtrl', ChatDetailCtrl)

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
