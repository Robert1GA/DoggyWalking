angular.module('DoggyApp')
.controller('NavCtrl', ['$scope', 'Auth', '$state', 'UserService', function($scope, Auth, $state, UserService) {
  $scope.Auth = Auth;
  $scope.$state = $state;

  document.getElementById("book").addEventListener("click", function(){
    document.getElementById("book").parentElement.className = "active";
    document.getElementById("login").parentElement.className = "";
    document.getElementById("signup").parentElement.className = "";
    document.getElementById("home").parentElement.className = "";
  });
  document.getElementById("home").addEventListener("click", function(){
    document.getElementById("home").parentElement.className = "active";
    document.getElementById("login").parentElement.className = "";
    document.getElementById("signup").parentElement.className = "";
    document.getElementById("book").parentElement.className = "";
  });
  document.getElementById("login").addEventListener("click", function(){
    document.getElementById("login").parentElement.className = "active";
    document.getElementById("book").parentElement.className = "";
    document.getElementById("signup").parentElement.className = "";
    document.getElementById("home").parentElement.className = "";
  });
  document.getElementById("signup").addEventListener("click", function(){
    document.getElementById("signup").parentElement.className = "active";
    document.getElementById("login").parentElement.className = "";
    document.getElementById("book").parentElement.className = "";
    document.getElementById("home").parentElement.className = "";
  });


  $scope.logout = function() {
    Auth.removeToken();
    window.location = "/"
  }
}])
