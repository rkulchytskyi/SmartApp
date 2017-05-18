'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
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

  var AuthController = function () {
    function AuthController(LoginService, RegisterService, $state, $ionicPopup) {
      _classCallCheck(this, AuthController);

      this.LoginService = LoginService;
      this.RegisterService = RegisterService;
      this.$state = $state;
      this.$ionicPopup = $ionicPopup;
      this.userId = Math.floor(Math.random() * 10000 + 1);
      this.settingsData = {
        email: '',
        pass: ''
      };
    }

    // Login to app


    _createClass(AuthController, [{
      key: 'login',
      value: function login() {
        var _this = this;

        console.log("LOGIN user: " + this.settingsData.email + " - PW: " + this.settingsData.pass);

        this.LoginService.loginUser(this.settingsData.email, this.settingsData.pass).success(function (data) {

          var alertPopup = _this.$ionicPopup.alert({
            title: 'Login success!'
          });
          _this.$state.go('general');
        }).error(function (data) {

          var alertPopup = _this.$ionicPopup.alert({
            title: 'Login failed!',
            template: 'Please check your credentials!'
          });
        });
      }

      // Register in app

    }, {
      key: 'register',
      value: function register() {
        var _this2 = this;

        console.log("Register user: " + this.settingsData.email + " - PW: " + this.settingsData.pass);

        this.RegisterService.registerUser(this.userId, this.settingsData.email, this.settingsData.pass).then(function () {
          var alertPopup = _this2.$ionicPopup.alert({
            title: 'Registered success!'
          });
          _this2.$state.go('general');
        }, function () {

          var alertPopup = _this2.$ionicPopup.alert({
            title: 'Registered failed!',
            template: 'This email already exist.'
          });
        });
      }
    }]);

    return AuthController;
  }();

  angular.module('starter').controller('AuthController', AuthController);

  AuthController.$inject = ['LoginService', 'RegisterService', '$state', '$ionicPopup'];
})();