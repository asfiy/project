/**
 * Created by ashaik on 3/24/2017.
 */
(function () {
    'use strict';

    angular.module('project').config(routeSetup);

    routeSetup.$inject = ['$stateProvider', '$urlRouterProvider', '$compileProvider'];

    function routeSetup($stateProvider, $urlRouterProvider, compileProvider) {

        $stateProvider
            .state('app', {
                abstract: true,
                url: '',
                template: '<ui-view />'
            })
            .state('home',{
                url:'/home',
                templateUrl: 'homepage/HomePage.html'
            })
            .state('login',{
                url:'/login',
                templateUrl: 'homepage/HomePage.html'
            })
            .state('designerRegistration',{
                url:'/designerRegistration',
                templateUrl: 'designerRegistration/DesignerRegistration.html',
                controller:'DesignerRegistrationController'
            })
    }
})();