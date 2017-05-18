(function(){
  'use strict';

  class GeneralController {
    constructor($state, $ionicPopup) {
      this.$state = $state;
      this.$ionicPopup = $ionicPopup;
    }

    toggleLight(){
      console.log();
      window.plugins.flashlight.available(function(isAvailable) {
        if (isAvailable) {

          // switch on
          window.plugins.flashlight.switchOn(
            function() {}, // optional success callback
            function() {}, // optional error callback
            {intensity: 0.3} // optional as well
          );

          // switch off after 3 seconds
          setTimeout(function() {
            window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
          }, 3000);

        } else {
          alert("Flashlight not available on this device");
        }
      });
    }
  }

  angular
    .module('starter')
    .controller('GeneralController', GeneralController);

    GeneralController.$inject = ['$state', '$ionicPopup'];


})();
