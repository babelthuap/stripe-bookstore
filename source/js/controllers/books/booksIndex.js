'use strict';

var app = angular.module('paymentApp');

app.controller('booksIndexCtrl', function($scope, $state, BookService) {
  if (!$scope.$storage.myToken){
    return $state.go("home");
  }
  BookService.index()
  .then(function(res) {
    $scope.books = res.data;
  }, function(err) {
    console.error(err);
  });

});
