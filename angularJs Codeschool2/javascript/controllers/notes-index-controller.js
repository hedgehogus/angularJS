angular.module('NoteWrangler').controller('NotesIndexController', function($http){
    var controller = this;    
     $http({method: 'GET', url: 'templates/pages/notes/data.json'}).then(function(resp){
         controller.notes = resp.data;
         console.log(controller.notes);
    })
});