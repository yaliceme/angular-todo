"use strict";
angular.module('list', [])
.controller('ListController', function ($scope, $routeParams, DataFactory) {
  var lists = DataFactory.lists;
  $scope.listName = $routeParams.listName;
  $scope.items = [];

  for (var i = 0; i < lists.length; i++) {
    if (lists[i].listName === $scope.listName) {
      $scope.items = lists[i].items;
    }
  }
});
