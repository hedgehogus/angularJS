(function() {
    var app = angular.module("store", []);

    app.controller('StoreController', function(){
       
        this.products = gems;
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
