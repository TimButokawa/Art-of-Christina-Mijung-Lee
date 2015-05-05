(function() {
    'use strict';

    angular.module('cmlee').factory('imageService', imageService);

    function imageService($http, $q) {
        var service = {
            getOlderImages: getOlderImages,
            getPaperImages: getPaperImages,
            getWallImages: getWallImages
        };
        return service;

        function getOlderImages() {
            var deferred = $q.defer();
            $http.get('services/OlderImages/Get').success(function(data) {
                deferred.resolve(data);
            });
            return deferred.promise;
        }

        function getPaperImages() {
            var deferred = $q.defer();
            $http.get('services/Paper/Get').success(function(data) {
                deferred.resolve(data);
            });
            return deferred.promise;
        }

        function getWallImages() {
            var deferred = $q.defer();
            $http.get('services/Wall/Get').success(function(data) {
                deferred.resolve(data);
            });
            return deferred.promise;
        }
    }
})();
