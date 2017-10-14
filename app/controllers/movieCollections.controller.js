'use strict';

angular.module('myApp').controller('movieCollectionsCtrl', ['$scope', 'movieCollections', 'CollectionService', function($scope, movieCollections, CollectionService) {
    /* INFO: Using ui.router allows us to resolve dependencies before a state is loaded. I resolved movieCollections and made it available to the controller before it loads. */
    $scope.movieCollections = movieCollections;

    $scope.addCollection = {};

    $scope.deleteCollection = function(collectionId) {
        console.log(collectionId);
    };

}]);
