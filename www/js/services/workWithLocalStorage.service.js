(function(){
  'use strict';

  class WorkWithLocalStorage {
    constructor() {

    }
    saveToLocalStorage(key, value){
      localStorage.clear();
      localStorage.setItem(key, value);
    }
  }

  angular
    .module('starter')
    .service('WorkWithLocalStorage', WorkWithLocalStorage);

  WorkWithLocalStorage.$inject = [];
})();
