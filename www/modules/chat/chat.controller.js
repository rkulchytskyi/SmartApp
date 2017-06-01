(function(){
  'use strict';

  angular
    .module('starter')
    .controller( 'chat', [ 'Messages', 'Pubnub', function( Messages, Pubnub ) {

    // Message Inbox

    let vm = this;
    vm.hmessages = [];
    vm.messages = [];

    Pubnub.init({
      publishKey: "pub-c-8cea8e6b-3643-4a2a-ab0e-f4d6ade9bb08",
      subscribeKey: "sub-c-1c88d310-3a27-11e7-9843-0619f8945a4f"
    });

    Pubnub.history(
      {
        channel: 'myChannel',
        reverse: false, // false is the default
        count: 5, // 100 is the default
        stringifiedTimeToken: true // false is the default
      },
      function (status, response) {
        // handle status, response
        vm.hmessages.push(response.messages);

      }
    );

    Messages.user({
      name : localStorage.getItem('userName')
    });
    // Receive Messages
    Messages.receive(function(message) {
      vm.messages.push(message);
    });
    // Send Messages
    vm.send = function() {

      Pubnub.publish(
        {
          message: {
            such:  vm.textbox,
            user: localStorage.getItem('userName')
          },
          channel: 'myChannel'
        },
        function (status, response) {
          if (status.error) {
            console.log(status)
          } else {
            Messages.send({
              data: vm.textbox
            });
            console.log("message Published w/ timetoken", response.timetoken)
          }
        }
      );

    };
  }]);
})();
