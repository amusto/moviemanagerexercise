'use strict';

angular.module('myApp').controller('addMovieCollectionCtrl', ['$scope', '$http', function($scope, $http) {
    //TODO: collectionService

    $scope.collectionGenres = ['Comedy', 'Action', 'Drama', 'Documentary'];

    $scope.collection = {
        name: '',
        genre: $scope.collectionGenres[0]
    };
    console.log($scope.collection);

    $scope.createCollection = function() {
        console.log($scope.collection);
    };

    console.log('AddMovieController');
}]);
