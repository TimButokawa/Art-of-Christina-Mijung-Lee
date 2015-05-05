(function() {
    'use strict';

    angular.module('cmlee').controller('Paper', Paper);

    function Paper(paperImages) {
        var vm = this;
        vm.images = paperImages.images;
    }
})();
