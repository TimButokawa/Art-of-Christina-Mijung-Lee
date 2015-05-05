(function() {
    'use strict';

    angular.module('cmlee', ['ui.router', 'ui.bootstrap'])
        .config(function ($stateProvider, $urlRouterProvider) {
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
            .state('paper', {
                url: '/paper',
                templateUrl: 'app/paper/paper.html',
                controller: 'Paper as paper',
                resolve: {
                    paperImages: function(imageService) {
                        return imageService.getPaperImages();
                    }
                }
            })
            .state('wall', {
                url: '/wall',
                templateUrl: 'app/wall/wall.html',
                controller: 'Wall as wall',
                resolve: {
                    wallImages: function(imageService) {
                        return imageService.getWallImages();
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
