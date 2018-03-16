(function() {
    var app = angular.module("store", []);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    var gems = [{
        name: "Dodecahedron",
        price: 2.95,
        description: "decription...",
        canPurchase: true,
        soldOut: false
    }, {
        name: "pentagonal gem",
        price: 5.95,
        description: "decription...",
        canPurchase: false,
        soldOut: false
    }]
})();

// directives - html annotations that trigger js behaviours
// modules - where our app components live
// controllers - where we add application behavior
// expressions - how values get displayed within the page