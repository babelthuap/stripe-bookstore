'use strict';

var app = angular.module('paymentApp');

app.controller('confirmationCtrl', function($scope, $state, BookService, $http, ENV) {
  $scope.purchase = JSON.parse(JSON.stringify($scope.$storage.cart));

  $scope.total = $scope.purchase.reduce(function(sum, book) {
    return sum + book.price;
  }, 0)

  $scope.$storage.cart = [];
});
