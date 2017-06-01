(function(){
  'use strict';

  class GeneralController {
    constructor($state, $ionicPopup) {
      this.$state = $state;
      this.$ionicPopup = $ionicPopup;
    }
  }

  angular
    .module('starter')
    .controller('GeneralController', GeneralController);

    GeneralController.$inject = ['$state', '$ionicPopup'];


})();
