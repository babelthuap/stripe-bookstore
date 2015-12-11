'use strict';

var app = angular.module('paymentApp');

app.controller('confirmationCtrl', function($scope, $state, BookService, $http, ENV) {
  if (!$scope.$storage.myToken){
    return $state.go("home");
  }

  $scope.purchase = JSON.parse(JSON.stringify($scope.$storage.cart));

  $scope.total = $scope.purchase.reduce(function(sum, book) {
    return sum + book.price;
  }, 0)

  $scope.$storage.cart = [];
});
