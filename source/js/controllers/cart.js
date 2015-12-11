'use strict';

var app = angular.module('paymentApp');

app.controller('cartCtrl', function($scope, $state, BookService) {
  $scope.cart = $scope.$storage.cart;  

  $scope.total = $scope.cart.reduce(function(sum, book){
    return sum + book.price;
  },0)

});
