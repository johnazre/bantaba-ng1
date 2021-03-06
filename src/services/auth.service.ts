(function () {

    'use strict';

    angular
        .module('bantaba')
        .service('AuthService', AuthService);

    AuthService.$inject = ['$rootScope', 'lock', 'authManager', 'jwtHelper', '$state'];

    function AuthService($rootScope, lock, authManager, jwtHelper, $state) {

        var userProfile = JSON.parse(localStorage.getItem('profile')) || {};

        function login() {
            lock.show();
        }

        // Logging out just requires removing the user's
        // id_token and profile
        function logout() {
            localStorage.removeItem('id_token');
            localStorage.removeItem('profile');
            authManager.unauthenticate();
            userProfile = {};
            $state.go('login');
        }

        // Set up the logic for when a user authenticates
        // This method is called from app.run.js
        function registerAuthenticationListener() {
            lock.on('authenticated', function (authResult) {
                console.log('authenticated');
                localStorage.setItem('id_token', authResult.idToken);
                authManager.authenticate();
                lock.hide();

                // Redirect to default page
                $state.go('tab.dash');

                lock.getProfile(authResult.idToken, function (error, profile) {
                    if (error) {
                        console.log(error);
                    }

                    localStorage.setItem('profile', JSON.stringify(profile));

                });
            });
        }
        function checkAuthOnRefresh() {
      var token = localStorage.getItem('id_token');
      if (token) {
        if (!jwtHelper.isTokenExpired(token)) {
          if (!$rootScope.isAuthenticated) {
            authManager.authenticate();
          }
        }
      }
    }

    return {
      userProfile: userProfile,
      login: login,
      logout: logout,
      registerAuthenticationListener: registerAuthenticationListener,
      checkAuthOnRefresh: checkAuthOnRefresh
    }
  }
})();
