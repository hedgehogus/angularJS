angular.module('NoteWrangler').directive("nwCard", function(){   
    var num = 0; 
    return {       
        restrict: 'E',
        templateUrl: "templates/pages/notes/nw-card.html",
        scope: {note: '=' 
           // note: "@" //passes in a string //passed directly or through interpolation with double curly braces notation
            // note: '=' // two way binding
            // note: '&' //someExpression //operator allows you to invoke or evaluate an expression on the parent scope of whatever the directive is inside of.
        }, // child no longer has access to the parents scope - isolate scope 
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