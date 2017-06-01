(function(){
  'use strict';

  class AuthController{
    constructor(LoginService, WorkWithLocalStorage, RegisterService, $state, $ionicPopup){

      this.LoginService = LoginService;
      this.WorkWithLocalStorage = WorkWithLocalStorage;
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
        this.WorkWithLocalStorage.saveToLocalStorage('userName', this.settingsData.email);

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
            this.WorkWithLocalStorage.saveToLocalStorage('userName', this.settingsData.email);

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

  AuthController.$inject = ['LoginService', 'WorkWithLocalStorage', 'RegisterService', '$state', '$ionicPopup'];

})();
