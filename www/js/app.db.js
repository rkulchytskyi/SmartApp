(function() {
  'use strict';

  angular
    .module('starter')
    .factory('dataBase', function(){
      let db = openDatabase("localDB.db", '1.0', "Local SmartChat DB", 65536);
    return db ;
  })
})();
