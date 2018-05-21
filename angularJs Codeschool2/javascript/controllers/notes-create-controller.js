angular.module('NoteWrangler').controller('NotesCreateController', function($http, $routeParams){
    var controller = this;       
    this.saveNote = function(note) {
        controller.errors = null;
        $http({method: 'POST', url: 'templates/pages/notes/', data: {'param': note}}).catch(function(message){
            controller.errors = message.statusText;
            console.log(controller.errors);
        })
    }
});