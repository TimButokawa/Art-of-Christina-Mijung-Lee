(function() {
    'use strict';

    angular.module('cmlee').controller('Wall', Wall);

    function Wall(wallImages) {
        var vm = this;
        vm.images = wallImages.images;
    }
})();
