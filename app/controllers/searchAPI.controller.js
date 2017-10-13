'use strict';

angular.module('myApp').controller('searchAPICtrl', ['$scope', '$http', function($scope, $http) {
    //TODO: collectionService
    var api_key = "28487f78ee09a45ef3ca72bdf4957ccd";
    var request_method = "GET";

    $scope.searchResults = [];

    $scope.searchFor = {
        movieName: ''
    };

    function encodeSearchText(searchText) {
        console.log(searchText);
        var results = encodeURI(searchText);
        console.log(results);
        return results;
    }

    $scope.searchAPI = function() {
        var searchURL = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&query=";
        searchURL += encodeSearchText($scope.searchFor.movieName);
        console.log('SearchURL' + searchURL);

        //TODO: Move to a service
        $http({
            method: 'GET',
            url: searchURL
        }).then(function successCallback(response) {
            $scope.searchResults = response.data;
            console.log($scope.searchResults);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

    };
}]);
