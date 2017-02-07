// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('bantaba', ['ionic',
  // 'starter.controllers',
  // 'starter.services',
  'auth0.lock',
  'angular-jwt'])

  .run(function ($ionicPlatform, $rootScope: angular.IRootScopeService, AuthService) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window['StatusBar']) {
        // org.apache.cordova.statusbar required
        window['StatusBar'].styleDefault();
      }

      // Register the authentication listener that is
      // set up in auth.service.js
      AuthService.registerAuthenticationListener();

      //This event gets triggered on URL change
      $rootScope.$on('$locationChangeStart', AuthService.checkAuthOnRefresh);
    });

    // Check is the user authenticated before Ionic platform is ready
    AuthService.checkAuthOnRefresh();
  })

  .config(function ($stateProvider, $urlRouterProvider, lockProvider, jwtOptionsProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html',
        
      })

      // Each tab has its own nav history stack:

      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'DashboardController',
            controllerAs: 'vm'
          }
        },
        // resolve: {
        //   auth: function ($rootScope) {
        //     console.log($rootScope);
            
        //     return false;
        //   }
        // }
      })

      .state('tab.search', {
        url: '/search',
        views: {
          'tab-search': {
            templateUrl: 'templates/tab-search.html',
            controller: 'SearchController',
            controllerAs: 'vm'
          }
        }
      })

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountController',
            controllerAs: 'vm'
          }
        }
      })
      .state('tab.myevents', {
        url: '/my-events',
        views: {
          'tab-myevents': {
            templateUrl: 'templates/tab-myevents.html',
            controller: 'SearchController',
            controllerAs: 'vm'
          }
        }
      })
      .state('tab.manage', {
        url: '/manage',
        views: {
          'tab-manage': {
            templateUrl: 'templates/tab-manage.html',
            controller: 'SearchController',
            controllerAs: 'vm'
          }
        }
      })
      
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginController',
        resolve: {
          login: function($rootScope) {
            return 'yes';
          }
        }
      })
      
      .state('tab.event', {
        url: '/event/:id',
        views: {
          'event': {
            templateUrl: 'templates/event.html',
            controller: 'SingleEventController',
            controllerAs: 'vm'
          }
        }
      })

      .state('tab.performer', {
        url: '/performer/:id',
        views: {
          'performer': {
            templateUrl: 'templates/tab-performer.html',
            controller: 'SinglePerformerController',
            controllerAs: 'vm'
          }
        }
      });
      
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

    lockProvider.init({
      clientID: 'dBy2aMEHCXu82NMs0z4pGgO7zMN2APaD',
      domain: 'simplre.auth0.com',
      options: {
        auth: {
          redirect: false,
          params: {
            scope: 'openid',
            device: 'Mobile device'
          },
          sso: false
        },
        theme: {
          logo: 'img/logo.png',
          primaryColor: '#606E10'
        },
        languageDictionary: {
          title: ''
        },
        
      }
    });

    // Configuration for angular-jwt
    jwtOptionsProvider.config({
      tokenGetter: function () {
        return localStorage.getItem('id_token');
      },
      whiteListedDomains: ['localhost'],
      unauthenticatedRedirectPath: '/login'
    });


  });
