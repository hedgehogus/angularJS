(function() {
    var app = angular.module("store", []);

    app.controller('StoreController', function(){
       
        this.products = gems;
    });

    app.directive("productTitle", function(){
        return{
            restrict: 'E', // type of directive (E for element, A for attribute)
            templateUrl: 'product-title.html',
            controller: function(){
                this.message = "0";
                this.getMessage = function(){                    
                    return this.message;
                }
            },
            controllerAs: 'panels'
            };
    });

   
    var gems = [{
        name: "Dodecahedron",
        price: 2.95,
        description: "description...",
        canPurchase: true,
        soldOut: false
    }, {
        name: "pentagonal gem",
        price: 5.95,
        description: "description...",
        canPurchase: false,
        soldOut: false
    }]
    
})();
