"use strict";
var services = angular.module("services", []);

services.factory('DataFactory', function () {
  var lists = [];
  // example lists array
  // ===================
  // lists = [
  //   {
  //     listName: "work",
  //     createdAt: 1462066037207,
  //     items: [
  //       {
  //         itemName: "write a report",
  //         createdAt: 1462066075804,
  //         completed: false
  //       },
  //       {
  //         itemName: "do some code",
  //         createdAt: 1462066088245,
  //         completed: false
  //       }
  //     ]
  //   },
  //   {
  //     listName: "personal",
  //     createdAt: 1462066057230,
  //     items: [
  //       {
  //         itemName: "read a book",
  //         createdAt: 1462066103468,
  //         completed: false
  //       },
  //       {
  //         itemName: "eat some food",
  //         createdAt: 1462066116172,
  //         completed: false
  //       }
  //     ]
  //   }
  // ];

  return {lists: lists};
});
