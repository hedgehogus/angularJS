angular.module('NoteWrangler').directive("nwCard", function(){    
    return {        
        restrict: 'E',
        templateUrl: "templates/pages/notes/nw-card.html",
        controller: function($scope){
            this.header = "note title";
            $scope.header = "from scope";
        },
        controllerAs: "card"
    }
})