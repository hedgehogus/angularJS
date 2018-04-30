(function(){
    var app = angular.module('store-products',[]);

    app.directive("productTitle", function(){
        return{
            restrict: 'E', // type of directive (E for element, A for attribute)
            templateUrl: 'product-title.html',
            controller: function(){
                this.message = "0!";
                this.getMessage = function(){                    
                    return this.message;
                }
            },
            controllerAs: 'panels'
            };
    });
})();

/* best to split modules around functionality
- app.js - top level module attached via ng-app
- products.js -all the functionality for products and only products */