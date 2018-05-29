angular.module('NoteWrangler').directive("nwCard", function(){   
    var num = 0; 
    return {       
        restrict: 'E',
        templateUrl: "templates/pages/notes/nw-card.html",
        scope: {note: '=' 
           // note: "@" //input
            // note: '=' // two way binding
        }, // child no longer has access to the parents scope
        controller: function($scope){
            this.header = "note title";
            $scope.header = "from scope ";
            num++;
            $scope.num = num;
            console.log($scope);
        },
        controllerAs: "card"
    }
})