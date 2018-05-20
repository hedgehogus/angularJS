/*  1) using ngViev
    2) loading ngRoute library
    3) importing ngRoute module
    4) defining routes
*/
angular.module("NoteWrangler").config(function($routeProvider){    
    $routeProvider.when('/notes', {
        templateUrl: '/templates/pages/notes/index.html',
        // controller: function(){} -inline style controller
        controller:'NotesIndexController',
        controllerAs: 'indexController'
    })
    .when('/users', {
        templateUrl: '/templates/pages/users/index.html'
    })
    .when('/notes:id', {
        templateUrl:'/templates/pages/notes/show.html',
        controller: "NotesShowController",
        controllerAs: "showController"
    })
    .otherwise({redirectTo:'/'})
}).config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);