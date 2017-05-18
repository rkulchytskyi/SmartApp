(function(){
  'use strict';

  /*function AuthController(LoginService, $state, $ionicPopup) {
    let vm = this;
    vm.loginUser = false;
    vm.login = login;
    vm.settingsData = {
      email: '',
      pass: ''
    };

    // Login to app
    function login(){
      console.log("LOGIN user: " + vm.settingsData.email + " - PW: " + vm.settingsData.pass);

      LoginService.loginUser(vm.settingsData.email, vm.settingsData.pass).success(function(data) {

        let alertPopup = $ionicPopup.alert({
          title: 'Login success!'
        });
        $state.go('app');
      }).error(function(data) {
        let alertPopup = $ionicPopup.alert({
          title: 'Login failed!',
          template: 'Please check your credentials!'
        });
      });
    }

  }*/

  class AuthController{
    constructor(LoginService, RegisterService, $state, $ionicPopup){
      this.LoginService = LoginService;
      this.RegisterService = RegisterService;
      this.$state = $state;
      this.$ionicPopup = $ionicPopup;
      this.userId = Math.floor((Math.random() * 10000) + 1);
      this.settingsData = {
        email: '',
        pass: ''
      };
    }

    // Login to app
    login(){
      console.log("LOGIN user: " + this.settingsData.email + " - PW: " + this.settingsData.pass);

      this.LoginService.loginUser(this.settingsData.email, this.settingsData.pass).success((data) => {

        let alertPopup = this.$ionicPopup.alert({
          title: 'Login success!'
        });
        this.$state.go('general');
      }).error((data) => {

        let alertPopup = this.$ionicPopup.alert({
          title: 'Login failed!',
          template: 'Please check your credentials!'
        });
      });
    }

    // Register in app
    register(){

      console.log("Register user: " + this.settingsData.email + " - PW: " + this.settingsData.pass);

      this.RegisterService.registerUser(this.userId, this.settingsData.email, this.settingsData.pass)
        .then( () => {
            let alertPopup = this.$ionicPopup.alert({
              title: 'Registered success!'
            });
            this.$state.go('general');
          }, () => {

            let alertPopup = this.$ionicPopup.alert({
              title: 'Registered failed!',
              template: 'This email already exist.'
            });
          });
    }
  }

  angular
    .module('starter')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['LoginService', 'RegisterService', '$state', '$ionicPopup'];

})();
