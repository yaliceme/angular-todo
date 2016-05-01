"use strict";
angular.module('AngularTodo', [
  'home',
  'list',
  'ngRoute'
])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/client/app/home/home.html',
    controller: 'HomeController'
  });
  $routeProvider.when('/:listName', {
    templateUrl: '/client/app/list/list.html',
    controller: 'ListController'
  });
}]);
