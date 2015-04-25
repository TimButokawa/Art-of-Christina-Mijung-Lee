(function() {
    'use strict';

    angular.module('cmlee').directive('navBar', navBar);

    function navBar() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'components/nav/nav.html',
            controller: NavBarController
        };
        return directive;
    }

    function NavBarController($rootScope, $window) {
        var $trigger = angular.element('span.mobile-trigger');
        var $links = angular.element('.link-container');
        var $viewport = angular.element($window);
        $trigger.on('click', function() {
            $links.slideToggle();
        });

        $rootScope.$on('$stateChangeSuccess', function() {
            if($links.is(':visible') && $viewport.width() < 678) {
                $links.slideToggle();
            }
        });
    }
})();
