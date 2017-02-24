angular.module('DoggyApp')
.component('signupComp', {
  templateUrl: 'app/containers/signup/signup.html',
  controller: SignupCompCtrl,
  controllerAs: 'signupComp'
});

function SignupCompCtrl($scope, $state, UserService) {
  signupComp = this;
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
        console.log('user create error');
      } else {
        // console.log('got user:', signupComp.user);
        $state.go('home');
      };
    });
  };
}

SignupCompCtrl.$inject = ['$scope', '$state', 'UserService'];
