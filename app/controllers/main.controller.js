'use strict';

angular.module('mmApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'controllers/main.template.html',
    controller: 'mainCtrl'
  });
}])

.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {

}]);