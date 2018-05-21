angular.module('NoteWrangler').controller('NotesShowController', function($http, $routeParams){
    var controller = this;       
    controller.number = $routeParams.id;
    //  $http({method: 'GET', url: 'templates/pages/notes/data' + $routeParams.id + '.json'}).then(function(resp){
         
    // })
});