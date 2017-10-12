'use strict';

//TODO: Consider a requireAll approach for dependencies
/*function requireAll(r) {
    r.keys().forEach(r);
}*/

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    //$locationProvider.hashPrefix('!');

    $urlRouterProvider.otherwise('/main');

    $stateProvider

        .state('main', {
            url: '/main',
            controller: 'mainCtrl',
            templateUrl: 'templates/main.template.html'
        })

        .state('movieCollections', {
            url: '/movieCollections',
            controller: 'movieCollectionsCtrl',
            templateUrl: '/templates/movieCollections.template.html'
        })

}]);

myApp.controller('homepageCtrl', ['$scope', function($scope) {
    $scope.siteTitle = "Armandos Movie Manager";

    console.log($scope.siteTitle);

}]);