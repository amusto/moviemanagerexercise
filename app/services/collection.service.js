'use strict';

angular.module('myApp').service('CollectionService', ['$http', '$q', '$filter', function($http, $q, $filter) {
    return {

        'getCollections': function(args) {
            var defer = $q.defer();
            var apiUrl = "/api/collections";

            $http({
                method: 'GET',
                url: apiUrl
            }).then(function successCallback(response) {
                defer.resolve(response.data);
            }, function errorCallback(response) {
                defer.reject(response);
            });

            return defer.promise;
        },

        'createCollection': function(collection) {
            var defer = $q.defer();
            var apiUrl = "/api/createCollection";

            $http({
                method: 'POST',
                url: apiUrl,
                data: collection
            }).then(function successCallback(response) {
                defer.resolve(response.data);
            }, function errorCallback(response) {
                defer.reject(response);
            });

            return defer.promise;
        },

        'updateCollection': function(collection) {
            var defer = $q.defer();
            var apiUrl = "/api/updateCollection";

            $http({
                method: 'POST',
                url: apiUrl,
                data: collection
            }).then(function successCallback(response) {
                defer.resolve(response.data);
            }, function errorCallback(response) {
                defer.reject(response);
            });

            return defer.promise;
        },


        'getCollection': function(collectionId) {
            var defer = $q.defer();
            var apiUrl = "/api/collection/" + collectionId;

            $http({
                method: 'GET',
                url: apiUrl
            }).then(function successCallback(response) {
                defer.resolve(response.data);
            }, function errorCallback(response) {
                defer.reject(response);
            });

            return defer.promise;
        },

        'deleteCollection': function(collectionId) {
            var defer = $q.defer();
            var apiUrl = "/api/deleteCollection/" + collectionId;

            $http({
                method: 'DELETE',
                url: apiUrl
            }).then(function successCallback(response) {
                defer.resolve(response.data);
            }, function errorCallback(response) {
                defer.reject(response);
            });

            return defer.promise;
        }

}}]);

