(function() {
    var app = angular.module("store", ['store-products']); // store depends on store-product

    app.controller('StoreController', ['$http', '$log', '$filter', function($http, $log, $filter){    
        var store = this; 
        store.products = [];
        $http.get('/products.json').then(function(response){
            store.products = response.data;
            console.log(response.data);
        }, function (error){
            console.log(error);
        });        
    }]);          
})();
