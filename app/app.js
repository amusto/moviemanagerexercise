'use strict';

// Declare app level module which depends on views, and components
angular.module('mmApp', [
    'ngRoute',
    'mmApp.main',
    'mmApp.movieCollections'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/main'});
}])

.controller('homepageCtrl', ['$scope', function($scope) {
    $scope.siteTitle = "Armandos Movie Manager";

}]);
