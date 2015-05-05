(function() {
    'use strict';

    angular.module('cmlee').directive('imageGallery', imageGallery);

    function imageGallery() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'components/image-gallery/image-gallery.html',
            scope: {
                galleryName: '@',
                fullImage: '@',
                thumbImage: '@',
                imageTitle: '@',
                altText: '@'
            },
            controller: ImageGalleryController,
            controllerAs: 'gallery'
        };
        return directive;
    }

    function ImageGalleryController() {
        angular.element('.swipebox').swipebox();
    }
})();