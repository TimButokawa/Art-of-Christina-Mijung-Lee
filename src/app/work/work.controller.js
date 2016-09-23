(function() {
    'use strict';

    angular
        .module('cmlee')
        .controller('WorkController', WorkController);

    function WorkController(workImages) {
        var vm = this;
        vm.images = workImages.images;
    }
})();
