(function() {
    'use strict';

    angular.module('cmlee').controller('Main', Main);

    function Main($rootScope) {
        $rootScope.$on('$stateChangeSuccess', function() {
            var $close = angular.element('#swipebox-close');
            if($close.is(':visible')) {
                $close.trigger('click');
            }
        });
    }
})();
