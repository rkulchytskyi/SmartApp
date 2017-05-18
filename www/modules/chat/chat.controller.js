(function(){
  'use strict';

  angular
    .module('starter')
  /*  .controller('chat', chat);

    chat.$inject = ['Messages'];

    vm = this;
    function chat( Messages ) {
      // Message Inbox
      vm.messages = [];
      // Receive Messages
      Messages.receive(function (message) {
        vm.messages.push(message);
      });
      // Send Messages
      vm.send = function () {
        Messages.send({
          data: vm.textbox
        });
      };
    }*/
  .controller( 'chat', [ 'Messages', '$scope', function( Messages, $scope ) {
    // Message Inbox
    $scope.messages = [];
    // Receive Messages
    Messages.receive(function(message) {
      $scope.messages.push(message);
    });
    // Send Messages
    $scope.send = function() {
      Messages.send({
        data: $scope.textbox
      });
    };
  }]);
})();
