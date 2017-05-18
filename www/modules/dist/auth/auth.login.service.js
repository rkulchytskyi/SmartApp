"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var LoginService = function () {
    function LoginService($q) {
      _classCallCheck(this, LoginService);

      this.$q = $q;
    }

    _createClass(LoginService, [{
      key: "loginUser",
      value: function loginUser(email, pw) {
        var deferred = this.$q.defer();
        var promise = deferred.promise;

        // Checking if Firebase has user
        var query = firebase.database().ref("users").orderByKey();
        query.once("value").then(function (snapshot) {

          var myError = {}; // BreakExseption

          try {
            snapshot.forEach(function (childSnapshot) {
              var emailData = childSnapshot.val().email;
              var passData = childSnapshot.val().password;

              if (emailData == email && passData == pw) throw myError;
              debugger;
            });
          } catch (e) {
            if (e !== myError) throw e;
            return deferred.resolve();
          }

          deferred.reject();
        });

        promise.success = function (fn) {
          promise.then(fn);
          return promise;
        };
        promise.error = function (fn) {
          promise.then(null, fn);
          return promise;
        };
        return promise;
      }
    }]);

    return LoginService;
  }();

  angular.module('starter').service('LoginService', LoginService);

  LoginService.$inject = ['$q'];
  //LoginService.$inject = ['$q'];
  /*LoginService.$inject = ['$q'];
   function LoginService($q){
    return {
      loginUser: function(name, pw) {
        let deferred = $q.defer();
        let promise = deferred.promise;
         if (name == 'user@user' && pw == 'secret') {
          deferred.resolve('Welcome ' + name + '!');
        } else {
          deferred.reject('Wrong credentials.');
        }
        promise.success = function(fn) {
          promise.then(fn);
          return promise;
        };
        promise.error = function(fn) {
          promise.then(null, fn);
          return promise;
        };
        return promise;
      }
    }
  }*/
})();