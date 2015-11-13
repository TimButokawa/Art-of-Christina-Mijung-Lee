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
