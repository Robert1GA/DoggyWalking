angular.module('DoggyApp',['ui.router', 'ngResource', 'ngMaterial'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

  $urlRouterProvider.otherwise('/');

  // Between routes to check auth
  //$httpProvider.interceptors.push('AuthInterceptor');

  //Setup states (aka routes)
  $stateProvider
  .state('home', {
    url: '/',
    component: 'homeComp'
  })
  .state('appointment', {
    // url: '/appointment',
    component: 'appointmentComp'
  })


  // // Removes # symbol for our routes
  $locationProvider.html5Mode(true);

  }
])
// .run(function($transitions) {
//   $transitions.onStart({ to: 'profile' }, function(trans) {
//     var auth = trans.injector().get('Auth')
//     if (!auth.isLoggedIn()) {
//       // User isn't authenticated. Redirect to a new Target State
//       return trans.router.stateService.target('signup');
//     }
//   });
// });
