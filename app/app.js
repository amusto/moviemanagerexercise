'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'ngTouch']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
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

        .state('addCollection', {
            url: '/addCollection',
            controller: 'addMovieCollectionCtrl',
            templateUrl: '/templates/addMovieCollection.template.html'
        })

        .state('editCollection', {
            url: '/editCollection',
            controller: 'editMovieCollectionCtrl',
            templateUrl: '/templates/editMovieCollection.template.html'
        })

}]);

myApp.controller('homepageCtrl', ['$scope', function($scope) {
    $scope.siteTitle = "Armandos Movie Manager";

    console.log($scope.siteTitle);

}]);