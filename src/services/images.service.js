(function() {
    'use strict';

    angular.module('cmlee').factory('imageService', imageService);

    function imageService($http, $q) {
        var service = {
            getOlderImages: getOlderImages,
            getWorkImages: getWorkImages
        };
        return service;

        function getOlderImages() {
            var deferred = $q.defer();
            $http.get('services/OlderImages/Get').success(function(data) {
                deferred.resolve(data);
            });
            return deferred.promise;
        }

        function getWorkImages() {
            var deferred = $q.defer();
            $http.get('services/Work/Get').success(function(data) {
                deferred.resolve(data);
            });
            return deferred.promise;
        }
    }
})();
