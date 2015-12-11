'use strict';

var app = angular.module('paymentApp');

app.controller('cartCtrl', function($scope, $state, BookService, $http, ENV) {
  $scope.cart = $scope.$storage.cart;  

  $scope.total = $scope.cart.reduce(function(sum, book){
    return sum + book.price;
  },0)

  $scope.doCheckout = function(tokenObj) {
    $http.post(`${ENV.API_URL}/checkout`, {
      tokenObj: tokenObj,
      book: $scope.book
    })z1
    .then(function(res) {
      console.log('res:', res);
    }, function(err) {
      console.log('err:', err);
    })
  };

  $scope.formatPrice = function(num) {
    return Math.round(num * 100);
  };

});
