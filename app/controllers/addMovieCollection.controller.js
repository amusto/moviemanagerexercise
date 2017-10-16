'use strict';

angular.module('myApp').controller('addMovieCollectionCtrl', ['$scope', '$sce', 'CollectionService', '$state', function($scope, $sce, CollectionService, $state) {
    $scope.collection = {
        name: ''
    };

    $scope.createCollection = function() {

        CollectionService.createCollection($scope.collection).then(function (response) {
            if (response.status === 'success') {
                $state.go('movieCollections');
            } else {
            }
        });
    }
}]);
