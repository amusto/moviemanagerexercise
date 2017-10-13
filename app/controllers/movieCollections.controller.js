'use strict';

angular.module('myApp').controller('movieCollectionsCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello, I'm in the movieCollections ctrl");

    $scope.movieCollections = {};
    $scope.movieCollections.recordcount = 20;
    console.log($scope.movieCollections);

    $scope.collectionGenres = ['Comedy', 'Action', 'Drama', 'Documentary'];

    $scope.addCollection = {

    };

    $scope.deleteCollection = function(index) {
        console.log(index);
    };

    $scope.movieCollections.data = [
        {
            id: 0,
            name: 'My Favorite Dramas',
            genre: $scope.collectionGenres[2],
            numOfMovies: 50
        },
        {
            id: 1,
            name: 'I love Action movies!',
            genre: $scope.collectionGenres[1],
            numOfMovies: 20
        },
        {
            id: 2,
            name: 'Comedy: Can you make me laugh?',
            genre: $scope.collectionGenres[0],
            numOfMovies: 5
        }
    ];

    console.log($scope.movieCollections);

}]);
