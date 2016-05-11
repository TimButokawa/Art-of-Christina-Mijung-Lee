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
                altText: '@',
                medium: '@'
            },
            controller: ImageGalleryController
        };
        return directive;
    }

    function ImageGalleryController() {

        activate();

        function activate() {
            var options = {
                prevEffect: 'none',
                nextEffect: 'none',
                closeBtn: true,
                arrows: true,
                nextClick: false,
                margin: [20, 50, 20, 50],
                helpers:  {
                    title : {
                        type : 'inside'
                    },
                },
                afterLoad: function() {
                    this.outer.prepend('<span id="toggle-zoom"><span class="glyphicon glyphicon-search"></span></span>');
                    this.inner.attr('id', 'zoom-target');
                    this.title = _getImageTitle(this);
                },
                afterShow: function() {
                    angular.element('#toggle-zoom').on('click', function() {
                        _initZoom();
                        $(this).toggleClass('zoom-status');
                    });
                }
            };
            angular.element('.fancybox').fancybox(options);
        }

        function _getImageTitle(galleryImage) {
            var medium = angular.element(galleryImage.element).data('medium');
            if(medium) {
                return galleryImage.title + '<div class="text-lowercase first-letter-uppercase">' + medium + '</div>';
            }
            return galleryImage.title;
        }

        function _initZoom() {
            var target = angular.element('#zoom-target');
            if(target.find('img.zoomImg').length > 0) {
                target.trigger('zoom.destroy');
            } else {
                target.zoom({ on: 'mouseover', touch: true });
            }
        }
    }
})();
