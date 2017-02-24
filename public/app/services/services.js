angular.module('DoggyApp')

.factory('UserService', ['$http', 'Auth', 'Alerts', function($http, Auth, Alerts) {
  return {
    createAccount: function(params) {
      var URL = '/api/users';
      var req = {
        url: URL,
        method: 'POST',
        data: params
      }
      return $http(req).then(function success(res) {
        if(res.status !== 200) {
          console.log('couldnot create user', res.data.message);
          return false;
        }
        console.log(res);
        Auth.saveToken(res.data.token);
        return res.data;
      }, function error(res) {
        console.log('error response:', res);
      });
    },
    login: function(params) {
      var req = {
        url: 'api/auth',
        method: 'POST',
        data: params
      }
      return $http(req).then(function(res) {
        Auth.saveToken(res.data.token);
        // Alerts.add('success', 'Logged in!');
        Alerts.add('success', ' ');
        console.log(params);
      })
    },
    deleteUser: function() {
      var URL = '/api/users/' + Auth.currentUser().id;
      var req = {
        url: URL,
        method: 'DELETE'
      }

      return $http(req);
    }
  }
}])
.factory('Auth', ['$window', function($window) {
  return {
    saveToken: function(token) {
      $window.localStorage['app-token'] = token;
    },
    getToken: function() {
      return $window.localStorage['app-token'];
    },
    removeToken: function() {
      $window.localStorage.removeItem('app-token');
    },
    isLoggedIn: function() {
      var token = this.getToken();
      return token ? true : false;
    },
    currentUser: function() {
      if (this.isLoggedIn()) {
        var token = this.getToken();
        try {
          var payload = JSON.parse($window.atob(token.split('.')[1]));
          return payload;
        } catch(err) {
          return false;
        }
      }
    }
  }
}])
.factory('Alerts', [function() {
  var alerts = [];

  return {
    // clear: function() {
    //   alerts = [];
    // },
    add: function(type, msg) {
      alerts = [];
      alerts.push({type: type, msg: msg});
    },
    get: function() {
      return alerts;
    },
    remove: function(idx) {
      alerts.splice(idx, 1);
    }
  }
}])
.factory('AuthInterceptor', ['Auth', function(Auth) {
  return {
    request: function(config) {
      var token = Auth.getToken();
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    }
  }
}])
