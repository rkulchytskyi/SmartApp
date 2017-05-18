'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var GeneralController = function GeneralController($state, $ionicPopup) {
    _classCallCheck(this, GeneralController);

    this.$state = $state;
    this.$ionicPopup = $ionicPopup;
  }

  /* turnOn(){
     nativeclick.trigger();
     this.$cordovaFlashlight.switchOn().then(
     function (success) {
       console.log("Flashlight is on !");
     },
     function (error) {
       console.log('Error while switching Flashlight on')
     }
   );
  }
    turnOff(){ //nativeclick.trigger(); $scope.isOn = false; $cordovaFlashlight.switchOff().then( function (success) { console.log("Flashlight is off !"); }, function (error) { console.log('Error while switching Flashlight off') } );
   }*/
  ;

  angular.module('starter').controller('GeneralController', GeneralController);

  GeneralController.$inject = ['$state', '$ionicPopup'];
})();