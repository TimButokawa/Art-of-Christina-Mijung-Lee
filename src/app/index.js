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
                templateUrl: 'app/paper/paper.html'
            })
            .state('wall', {
                url: '/wall',
                templateUrl: 'app/wall/wall.html'
            })
            .state('old', {
                url: '/old',
                templateUrl: 'app/old/old.html'
            })
            ;

            $urlRouterProvider.otherwise('/home');
        })
    ;
})();
