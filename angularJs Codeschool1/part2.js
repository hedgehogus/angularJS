(function() {
    var app = angular.module("store", []);

    app.controller('StoreController', function(){
       
        this.reviews = reviews;
    });

    app.controller("ReviewController", function(){
        this.review = {};

        this.addReview = function(){
            reviews.push(this.review);
            this.review = {};
            console.log(this.review);
        }
    })

    var reviews = [
        {
            stars:5,
            body: "I love this product",
            author: "joe",
        },
        {
            stars:1,
            body: "this product sucks",
            author: "pil",
        },
        {
            stars:4,
            body: "sososo",
            author: "bill",
        }
    ]

    
})();
