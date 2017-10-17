(function () {

    'use strict';

    angular.module('myApp').controller('movieCollectionsCtrl', ['$scope', 'movieCollectionsData', 'CollectionService', function($scope, movieCollectionsData, CollectionService) {
        /* INFO: Using ui.router allows us to resolve dependencies before a state is loaded. I resolved movieCollections and made it available to the controller before it loads. */
        $scope.movieCollections = movieCollectionsData;
        $scope.addCollection = {};

        $scope.getCollections = function() {
            CollectionService.getCollections().then(function(data) {
                $scope.movieCollections = data;
            });
        };

        $scope.deleteCollection = function(collectionId) {
            CollectionService.deleteCollection(collectionId).then(function(response) {
                $scope.getCollections();
            });
        };

    }]);

}());

