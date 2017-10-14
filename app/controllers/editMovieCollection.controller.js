'use strict';

angular.module('myApp').controller('editMovieCollectionCtrl', ['$scope', 'CollectionService', '$stateParams', function($scope, CollectionService, $stateParams) {
    $scope.collectionId = $stateParams.collectionID;
    $scope.collection = {};
    $scope.editCollectionName = false;
    $scope.displayAddMovie = false;

    $scope.getCollection = function() {
        CollectionService.getCollection($scope.collectionId).then(function(data) {
            $scope.collection = data;
        });
    };
    $scope.getCollection();

    $scope.editCollection = function() {
        $scope.editCollectionName = !$scope.editCollectionName;
    };

    $scope.updateCollection = function() {
        CollectionService.updateCollection($scope.collection).then(function(data) {
            $scope.editCollectionName = false;
        });
    };

    $scope.addMovie = function() {
        $scope.displayAddMovie = !$scope.displayAddMovie;
    };

}]);
