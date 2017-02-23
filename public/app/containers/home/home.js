angular.module('DoggyApp')
.component('homeComp', {
  templateUrl: 'app/containers/home/home.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp'
});

function HomeCompCtrl() {
  var homeComp = this;

}

HomeCompCtrl.$inject = [];

// Auth, UserService
// 'Auth', 'UserService'
