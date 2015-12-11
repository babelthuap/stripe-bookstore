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
  
    $state.go("cart")
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
