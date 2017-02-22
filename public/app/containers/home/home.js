angular.module('DoggyApp')
.component('homeComp', {
  templateUrl: 'app/containers/home/home.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp'
});

function HomeCompCtrl(Auth, UserService) {
  var homeComp = this;

}

HomeCompCtrl.$inject = ['Auth', 'UserService'];
