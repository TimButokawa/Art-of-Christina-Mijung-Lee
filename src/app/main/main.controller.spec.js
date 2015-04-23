'use strict';

describe('Controller: Main...', function() {
    var scope, controller;

    beforeEach(module('cmlee'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        controller = $controller('Main',  {
            $scope: scope
        });
    }));

    it('should have a placeholder...', function() {
        var vm = controller;
        expect(vm.title).toBe('placeholder');
    });
});
