(function() {
    'use strict';

    angular.module('cmlee').directive('contactForm', contactForm);

    function contactForm() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'components/contact-form/contact-form.html',
            controller: ContactMe,
            controllerAs: 'information'
        };
        return directive;
    }

    ContactMe.$inject = ['$http'];

    function ContactMe($http) {
        var vm = this;
        vm.submit = submit;
        vm.messageHasBeenSent = false;
        vm.showErrorMessage = false;
        vm.showSuccessMessage = false;

        function submit(info) {
            // TODO: eventual submit service
            vm.messageHasBeenSent = true;
            $http({
                method  : 'POST',
                url     : 'components/contact-form/contact-form.php',
                data    : $.param(info),
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .success(function(data) {
                if(data.success) {
                    vm.showSuccessMessage = true;
                    console.log('success', data);
                } else {
                    vm.showErrorMessage = true;
                }
            })
            .error(function(data, status) {
                vm.showErrorMessage = true;
                console.log('error: ', status);
            });
        }
    }
})();
