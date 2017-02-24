angular.module('DoggyApp')
.component('bookComp', {
  templateUrl: 'app/containers/book/book.html',
  controller: BookCompCtrl,
  controllerAs: 'bookComp'
});

function BookCompCtrl(Auth, UserService) {
  var bookComp = this;
  bookComp.username = Auth.currentUser().email;


}

BookCompCtrl.$inject = ['Auth', 'UserService'];
