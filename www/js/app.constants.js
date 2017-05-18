(function() {
  'use strict';

  angular
    .module('chat')
    .constant('config', {
    rltm: {
      service: "pubnub",
      config: {
        publishKey: "pub-c-8cea8e6b-3643-4a2a-ab0e-f4d6ade9bb08",
        subscribeKey: "sub-c-1c88d310-3a27-11e7-9843-0619f8945a4f"
      }
      // or use socket.io!
      // https://github.com/pubnub/rltm.js#socketio
    }
  });

})();
