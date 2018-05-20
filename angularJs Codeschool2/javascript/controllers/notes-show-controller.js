angular.module('NoteWrangler').controller('NotesShowController', function($http){
    var controller = this;    
     $http({method: 'GET', url: 'templates/pages/notes/data.json'}).then(function(resp){
         
    })
});