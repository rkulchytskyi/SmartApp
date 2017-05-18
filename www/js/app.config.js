(function(){
  'use strict';

  angular
    .module('starter')
    .config(ionicFunctionCloudProvider);

  ionicFunctionCloudProvider.$inject = ['$ionicCloudProvider'];

  function ionicFunctionCloudProvider($ionicCloudProvider){
    $ionicCloudProvider.init({
      "core": {
        "app_id": "9db303cd"
      }
    });
  }

})();
