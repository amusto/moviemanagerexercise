(function () {
    'use strict';

    angular.module('myApp').controller('searchAPICtrl', ['$scope', '$http', function($scope, $http) {
        var api_key = "28487f78ee09a45ef3ca72bdf4957ccd";
        var request_method = "GET";

        $scope.searchResults = [];

        $scope.searchFor = {
            movieName: ''
        };

        function encodeSearchText(searchText) {
            var results = encodeURI(searchText);
            return results;
        }

        $scope.searchAPI = function() {
            var searchURL = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&query=";
            searchURL += encodeSearchText($scope.searchFor.movieName);

            //TODO: Move to a service
            $http({
                method: 'GET',
                url: searchURL
            }).then(function successCallback(response) {
                $scope.searchResults = response.data;
            }, function errorCallback(response) {
            });
        };

    }]);

}());
