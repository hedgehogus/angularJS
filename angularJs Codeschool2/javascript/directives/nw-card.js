angular.module('NoteWrangler').directive("nwCard", function(){    
    return {        
        restrict: 'E',
        templateUrl: "templates/pages/notes/nw-card.html",
        controller: function(){
            this.header = "note title"
        },
        controllerAs: "card"
    }
})