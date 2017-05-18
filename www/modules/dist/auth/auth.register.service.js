'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var RegisterService = function () {
    function RegisterService($q) {
      _classCallCheck(this, RegisterService);

      this.$q = $q;
    }

    _createClass(RegisterService, [{
      key: 'registerUser',
      value: function registerUser(userId, email, password) {
        var deferred = this.$q.defer();
        var promise = deferred.promise;

        firebase.database().ref().once('value', function (snap) {

          if (snap.val() !== null) {
            var query = firebase.database().ref("users").orderByKey();
            query.once("value").then(function (snapshot) {

              var myError = {}; // BreakExseption

              try {
                snapshot.forEach(function (childSnapshot) {
                  if (childSnapshot.val().email == email) throw myError;
                });
              } catch (e) {
                if (e !== myError) throw e;
                return deferred.reject();
              }

              firebase.database().ref('users/' + userId).set({
                email: email,
                password: password
              }).then(function () {
                deferred.resolve();
              });
            });
          } else {

            firebase.database().ref('users/' + userId).set({
              email: email,
              password: password
            });
            deferred.resolve();
          }
        });

        return promise;
      }
    }]);

    return RegisterService;
  }();

  angular.module('starter').service('RegisterService', RegisterService);

  RegisterService.$inject = ['$q'];
})();