'use strict';

var app = angular.module('paymentApp');

app.controller('navCtrl', function($scope, $state) {
  $scope.logout = function(){
    delete $scope.$storage.myToken;
    $state.go('home');
  };

  $scope.isAuthenticated = function(){
    return $scope.$storage.myToken
  }

  $scope.sizeOfCart = function(){
    var cart = $scope.$storage.cart;
    return cart ? cart.length : 0;
  }


});
