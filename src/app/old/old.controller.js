(function() {
    'use strict';

    angular.module('cmlee').controller('OlderWork', OlderWork);

    function OlderWork(oldImages) {
        var vm = this;
        vm.images = oldImages.twentyThirteen;
    }
})();
