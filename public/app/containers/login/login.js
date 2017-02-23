angular.module('DoggyApp')
.component('loginComp', {
  templateUrl: 'app/containers/login/login.html',
  controller: LoginCompCtrl,
  controllerAs: 'loginComp'
});

function LoginCompCtrl($scope, $state, UserService, Alerts) {
  $scope.user = {
    email: '',
    password: ''
  };

  $scope.userLogin = function() {
    UserService.login($scope.user).then(function(user) {
      if (user !== false) {

        $state.go('home');
      }
    });
  };
}

LoginCompCtrl.$inject = ['$scope', '$state', 'UserService', 'Alerts'];
