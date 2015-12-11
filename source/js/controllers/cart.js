'use strict';

var app = angular.module('paymentApp');

app.controller('cartCtrl', function($scope, $state, BookService) {
  $scope.cart = $scope.$storage.cart  


});
