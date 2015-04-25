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

    function NavBarController() {
        // TODO: controller
    }
})();
