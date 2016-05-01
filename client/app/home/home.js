"use strict";
angular.module('home', [])
.controller('HomeController', function ($scope, DataFactory) {
  $scope.lists = DataFactory.lists;
});
