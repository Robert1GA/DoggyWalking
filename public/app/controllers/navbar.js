angular.module('DoggyApp')
.controller('NavCtrl', ['$scope', 'Auth', '$state', 'Alerts', 'UserService', function($scope, Auth, $state, Alerts, UserService) {
  $scope.Auth = Auth;
  
  $scope.logout = function() {
    Auth.removeToken();
    Alerts.add('success', 'Logged out!');
    window.location = "/"
    // $state.go('home');
  }
}])
