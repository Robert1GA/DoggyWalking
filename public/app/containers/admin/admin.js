angular.module('DoggyApp')
.component('adminComp', {
  templateUrl: 'app/containers/admin/admin.html',
  controller: AdminCompCtrl,
  controllerAs: 'adminComp'
});

function AdminCompCtrl() {
  var adminComp = this;

}

AdminCompCtrl.$inject = [];
