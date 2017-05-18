(function(){
  'use strict';

  angular
    .module('starter')
    .config(routeFunction);

  routeFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routeFunction($stateProvider, $urlRouterProvider){

    $stateProvider

      .state('auth', {
        url: '/auth',
        templateUrl: 'modules/auth/auth.html',
        controller: 'AuthController',
        controllerAs: 'vm',
      })

      .state('general', {
        url: '/general',
        templateUrl: 'modules/general/general.html',
        controller: 'GeneralController',
        controllerAs: 'vm',
      })

      .state('general.chat', {
        url: '/chat',
        views: {
          'menuContent': {
            templateUrl: 'modules/chat/chat.html',
            /*controller: 'ChatController',
            controllerAs: 'vm',*/
          }
        }
      })

      .state('app', {
        url: '/app',
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html'
          }
        }
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html'
          }
        }
      })
      .state('app.playlists', {
        url: '/playlists',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlists.html',
            controller: 'PlaylistsCtrl'
          }
        }
      })

      .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlist.html',
            controller: 'PlaylistCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/auth');

  }

})();

