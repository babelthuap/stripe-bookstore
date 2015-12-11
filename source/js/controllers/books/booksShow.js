'use strict';

var app = angular.module('paymentApp');

app.controller('booksShowCtrl', function($scope, $state, $http, ENV, BookService) {
  if (!$scope.$storage.myToken){
    return $state.go("home");
  }

  BookService.show($state.params.bookId)
  .then(function(res) {
    $scope.book = res.data;
  });

  // console.log($scope.hideButton);

  $scope.addToCart = function() {
    var book =  $scope.book;
    $scope.$storage.cart.push(book);
    $scope.hideButton = true;    
  // console.log($scope.hideButton);
  //   console.log('cart:', $scope.$storage.cart);

    //tell user that it was added to the cart
    // ng-hide to button
  }



  // $scope.inCart = function(){
  //   console.log("incart is running")
 
  //   var thisBookId = $scope.book._id;
  //   console.log("thisBookId", thisBookId)
    
  //   var cartIds = $scope.$storage.cart.map(function(book){
  //     return book._id;  
  //   })
  // console.log("cartIds", cartIds)
  //    hideButton = (cartIds.indexOf(thisBookId) !== -1)

  // }

});
