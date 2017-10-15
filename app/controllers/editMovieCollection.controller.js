'use strict';

angular.module('myApp').controller('editMovieCollectionCtrl', ['$scope', 'CollectionService', 'MovieService', '$stateParams', function($scope, CollectionService, MovieService, $stateParams) {
    $scope.collectionId = $stateParams.collectionID;
    $scope.collection = {};
    $scope.newMovie = {
        title: '',
        format: 'Streaming',
        length: '',
        releaseYear: '0',
        rating: '3'
    };
    $scope.editCollectionName = false;
    $scope.displayAddMovie = false;
    $scope.movieFormatOptions = ['VHS', 'DVD', 'Streaming'];
    $scope.movieRatingOptions = [1, 2, 3, 4, 5];

    //Movies table
    $scope.itemsByPage=15;

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

    $scope.displayRowAddMovie = function() {
        $scope.displayAddMovie = !$scope.displayAddMovie;
    };

    function invalidForm(formObject) {
        var formInvalid = false;
        for(var prop in formObject) {
            if(formObject[prop] === '' || (prop === 'releaseYear' && formObject[prop] === '0')) {
                formInvalid = true;
            }
        }

        return formInvalid;
    };

    $scope.addNewMovie = function() {
        console.log($scope.newMovie);

        if(invalidForm($scope.newMovie) === false) {
            console.log('create movie');
            $scope.invalidForm = invalidForm($scope.newMovie);
            $scope.collection.movies.push($scope.newMovie);
            $scope.updateCollection();
            $scope.displayRowAddMovie();
            /*MovieService.createMovie($scope.newMovie).then(function(data) {
            });*/

        } else {
            console.log('Invalid Form');
            $scope.invalidForm = invalidForm($scope.newMovie);
        }

        console.log($scope.collection);

    };

}])
.filter('range', function() {
    return function(input, start, end) {
        start = parseInt(start);
        end = parseInt(end);
        var direction = (start <= end) ? 1 : -1;
        while (start != end) {
            input.push(start);
            start += direction;
        }
        return input;
    };
});

;
