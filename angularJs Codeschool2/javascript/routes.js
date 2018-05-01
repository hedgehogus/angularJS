/*  1) using ngViev
    2) loading ngRoute library
    3) importing ngRoute module
    4) defining routes
*/
angular.module("NoteWrangler").config(function($routeProvider){
    console.log('TEST');
    $routeProvider.when('/notes', {
        templateUrl: '/templates/pages/notes/index.html'
    })
    .when('/users', {
        templateUrl: '/templates/pages/users/index.html'
    })
    .otherwise({redirectTo:'/'})
}).config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);