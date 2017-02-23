angular.module('DoggyApp')
.component('signupComp', {
  templateUrl: 'app/containers/signup/signup.html',
  controller: SignupCompCtrl,
  controllerAs: 'signupComp'
});

function SignupCompCtrl($scope, $state, UserService, Alerts) {
  signupComp = this;
  Alerts.add('success', ' ');  // Clears any previous alerts on load
  signupComp.user = {
    name: '',
    phone: '',
    email: '',
    password: ''
  };

  signupComp.userSignup = function() {
    var params = {
      name: signupComp.user.name,
      phone: signupComp.user.phone,
      email: signupComp.user.email,
      password: signupComp.user.password
    }

    UserService.createAccount(params).then(function(user) {
      if (user === false) {
        Alerts.add('danger', 'Error. See console');
        console.log('user create error');
      } else {
        // console.log('got user:', signupComp.user);
        Alerts.add('success', 'Successful! Now login with new username/password.');
        $state.go('home');
      };
    });
  };
}

SignupCompCtrl.$inject = ['$scope', '$state', 'UserService', 'Alerts'];
