'use strict';

var app = angular.module('paymentApp');

app.controller('cartCtrl', function($scope, $state, BookService, $http, ENV) {
   if (!$scope.$storage.myToken){
    return $state.go("home");
  }
  
  $scope.cart = $scope.$storage.cart;  

  $scope.total = $scope.cart.reduce(function(sum, book){
    return sum + book.price;
  },0)

  $scope.doCheckout = function(tokenObj) {
    $http.post(`${ENV.API_URL}/checkout`, {
      tokenObj: tokenObj,
      cart: $scope.cart,
      total: $scope.total
    })
    .then(function(res) {
      console.log('res:', res);
      $state.go('confirmation')
    }, function(err) {
      console.log('err:', err);
    })
  };

  $scope.formatPrice = function(num) {
    return Math.round(num * 100);
  };

});
