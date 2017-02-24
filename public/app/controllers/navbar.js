angular.module('DoggyApp')
.controller('NavCtrl', ['$scope', 'Auth', '$state', 'UserService', function($scope, Auth, $state, UserService) {
  $scope.Auth = Auth;

  $scope.logout = function() {
    Auth.removeToken();
    window.location = "/"
  }
}])
