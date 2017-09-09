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
                resolve: {
                    categories: function(CategoryService){
                        return CategoryService.getCategories().then(function(response) {
                            return response;
                        });
                    }
                },
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
                url:'/product?productId',
                templateUrl: 'ProductPages/ProductPage.html',
                resolve: {
                    selectedProduct: function(ProductService,$stateParams){
                        return ProductService.getProductById($stateParams.productId).then(function(response) {
                            return response;
                        });
                    }
                },
                controller:'ProductOrderController'
            })
            .state('products',{
                url:'/products?category',
                templateUrl: 'ProductPages/ProductsDisplay.html',
                resolve: {
                    productInfoList: function(ProductService,$stateParams){
                        return ProductService.retrieveProductsBasedOnCategory($stateParams.category).then(function(response) {
                            return response;
                        });
                    }
                },
                controller:'ProductDisplayController'
            })
            .state('checkout',{
                url:'/checkout',
                templateUrl: 'checkout/DeliveryAddress_Checkout.html',
                controller:' CheckoutController'
            })
            .state('success',{
                url:'/success',
                templateUrl: 'defaultPages/OrderSuccess.html'
            })
    }
})();