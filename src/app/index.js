(function() {
    'use strict';

    angular
        .module('cmlee', ['ui.router', 'ui.bootstrap'])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('main', {
                    url: '/home',
                    templateUrl: 'app/main/main.html',
                    controller: 'Main as main'
                })
                .state('statement', {
                    url: '/statement',
                    templateUrl: 'app/statement/statement.html'
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: 'app/contact/contact.html'
                })
                .state('cv', {
                    url: '/cv',
                    templateUrl: 'app/cv/cv.html'
                })
                .state('work', {
                    url: '/work',
                    templateUrl: 'app/work/work.html',
                    controller: 'WorkController',
                    controllerAs: '$ctrl',
                    resolve: {
                        workImages: function(imageService) {
                            return imageService.getWorkImages();
                        }
                    }
                })
                .state('old', {
                    url: '/old',
                    templateUrl: 'app/old/old.html',
                    controller: 'OlderWork as old',
                    resolve: {
                        oldImages: function(imageService) {
                            return imageService.getOlderImages();
                        }
                    }
                })
            ;

            $urlRouterProvider.otherwise('/home');
        })
    ;
})();
