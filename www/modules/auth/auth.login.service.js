(function(){
  'use strict';

  class LoginService {

    constructor($q) {
      this.$q = $q;
    }
    loginUser (email, pw) {
      let deferred = this.$q.defer();
      let promise = deferred.promise;

      // Checking if Firebase has user
      let query = firebase.database().ref("users").orderByKey();
      query.once("value")
        .then( (snapshot) => {

            let myError = {}; // BreakExseption

            try {
              snapshot.forEach((childSnapshot) => {
                let emailData = childSnapshot.val().email;
                let passData = childSnapshot.val().password;

                if (emailData == email && passData == pw) throw myError;
              });

            } catch(e) {
              if (e !== myError) throw e;
              return deferred.resolve();
            }

            deferred.reject();


          });

      promise.success = (fn) => {
        promise.then(fn);
        return promise;
      };
      promise.error = (fn) => {
        promise.then(null, fn);
        return promise;
      };
      return promise;
    }
  }

  angular
    .module('starter')
    .service('LoginService', LoginService);

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
