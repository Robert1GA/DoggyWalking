angular.module('DoggyApp')
.component('scheduleComp', {
  templateUrl: 'app/containers/schedule/schedule.html',
  controller: ScheduleCompCtrl,
  controllerAs: 'scheduleComp'
});

function ScheduleCompCtrl() {
  var scheduleComp = this;

}

ScheduleCompCtrl.$inject = [];

// Auth, UserService
// 'Auth', 'UserService'
