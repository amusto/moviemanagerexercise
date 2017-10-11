'use strict';

angular.module('mmApp.movieCollections', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/movieCollections', {
    templateUrl: 'controllers/movieCollections.template.html',
    controller: 'movieCollectionsCtrl'
  });
}])

.controller('movieCollectionsCtrl', [function() {

}]);