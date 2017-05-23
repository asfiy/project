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
            .state('designerLogin',{
                url:'/designerLogin',
                templateUrl: 'designerLogin/DesignerLogin.html',
                controller:'DesignerLoginController'
            })
            .state('designerRegistration',{
                url:'/designerRegistration',
                templateUrl: 'designerRegistration/DesignerRegistration.html',
                controller:'DesignerRegistrationController'
            })
            .state('cart',{
                url:'/cart',
                templateUrl:'cart/Cart.html',
                controller:'CartController',
                data:{}
            })
            .state('cancelOrder',{
                url:'/cancel',
                templateUrl:'cancel/CancelOrder.html',
                controller:'CancelOrderController'
            })
            .state('productUpload',{
                url:'/UploadProducts',
                templateUrl:'upload/UploadProducts.html',
                controller:'UploadProductsController'
            })
            .state('userLogin',{
                url:'/login',
                templateUrl: 'userLogin/UserLogin.html',
                controller:'UserLoginController'
            })
            .state('userRegistration',{
                url:'/register',
                templateUrl: 'userRegistration/UserRegistration.html',
                controller:'UserRegistrationController'
            })
            .state('productPage',{
                url:'/product',
                templateUrl: 'ProductPages/ProductPage.html',
                controller:'ProductOrderController'
            })
    }
})();