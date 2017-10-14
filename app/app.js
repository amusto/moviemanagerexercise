'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'ngTouch']);

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
            resolve: {
                movieCollections: function (CollectionService) {
                    return CollectionService.getCollections().then(function(data) {
                        return data;
                    });
                }
            },
            templateUrl: '/templates/movieCollections.template.html'
        })

        .state('addCollection', {
            url: '/addCollection',
            controller: 'addMovieCollectionCtrl',
            templateUrl: '/templates/addMovieCollection.template.html'
        })

        .state('editCollection', {
            url: '/editCollection/:collectionID',
            controller: 'editMovieCollectionCtrl',
            templateUrl: '/templates/editMovieCollection.template.html'
        })

        .state('searchAPI', {
            url: '/searchAPI',
            controller: 'searchAPICtrl',
            templateUrl: '/templates/searchAPI.template.html'
        })

}]);

myApp.controller('homepageCtrl', ['$scope', function($scope) {
    $scope.siteTitle = "Armandos Movie Manager";

}]);