"use strict";
angular.module('AngularTodo', [
  'home',
  'list',
  'ngRoute'
])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/app/home/home.html',
    controller: 'HomeController'
  });
  $routeProvider.when('/:listName', {
    templateUrl: '/app/list/list.html',
    controller: 'ListController'
  });
}]);
