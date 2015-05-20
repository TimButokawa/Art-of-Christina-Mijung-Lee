(function() {
    'use strict';

    angular.module('cmlee').directive('featureImage', featureImage);

    featureImage.$inject = ['$window'];

    function featureImage($window) {
        var directive = {
            restrict: 'EA',
            replace: true,
            templateUrl: 'components/feature-image/feature-image.html',
            link: link
        };
        return directive;

        function link(scope, element) {
            function setFeatureImageHeight() {
                element.find('.image-container').css('height', $window.innerHeight - 35);
            }

            angular.element($window).bind('resize', function() {
                setFeatureImageHeight();
            });

            setFeatureImageHeight();
        }
    }
})();
