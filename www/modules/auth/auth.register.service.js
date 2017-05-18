(function(){
  'use strict';

  class RegisterService {

    constructor($q) {
      this.$q = $q;
    }

    registerUser (userId, email, password) {
      let deferred = this.$q.defer();
      let promise = deferred.promise;

      firebase.database().ref().once('value', (snap) => {

        if ( snap.val() !== null ) {
          let query = firebase.database().ref("users").orderByKey();
          query.once("value")

            .then( (snapshot) => {

              let myError = {}; // BreakExseption

              try {
                snapshot.forEach((childSnapshot) => {
                  if (childSnapshot.val().email == email) throw myError;
                });
              } catch(e) {
                if (e !== myError) throw e;
                return deferred.reject();
              }

              firebase.database().ref('users/' + userId).set({
                email: email,
                password: password
              }).then(function(){
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

  }

  angular
    .module('starter')
    .service('RegisterService', RegisterService);

  RegisterService.$inject = ['$q'];

})();
