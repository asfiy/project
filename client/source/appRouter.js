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
            .state('verificationCode',{
                url:'/verificationCode?designerId',
                templateUrl:'designerRegistration/VerificationCode.html',
                resolve: {
                    designerInformation: function (DesignerService, $stateParams) {
                        return DesignerService.getDesignerInformation($stateParams.designerId).then(function (response) {
                            return response;
                        });
                    }
                },
                controller:'VerificationController'
            })
            .state('cartList',{
                url:'cart?userId',
                templateUrl:'cart/Cart.html',
                resolve: {
                    cartList: function (CartService, $stateParams) {
                        return CartService.getCartItems($stateParams.userId).then(function (response) {
                            return response;
                        });
                    }
                },
                controller:'CartController'
            })
            .state('cartPage',{
                url:'cart?userId',
                templateUrl:'cart/Cart.html',
                resolve:{
                    cartList: function(CartService,$stateParams){
                        return CartService.getCartItems($stateParams.userId).then(function(response) {
                            return response;
                        });
                    }
                },
                controller:'CartController'
            })
            .state('cancelOrder',{
                url:'/cancel',
                templateUrl:'cancel/CancelOrder.html',
                controller:'CancelOrderController'
            })
            .state('productUpload',{
                url:'/UploadProducts?productId',
                templateUrl:'upload/UploadProducts.html',
                resolve: {
                    productInformation: function(ProductService,$stateParams){
                        if($stateParams.productId){
                            return ProductService.getProductById($stateParams.productId).then(function(response) {
                                return response;
                            });
                        }
                    },
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
            .state('designerProductDisplayPage',{
                url:'/productDisplay?productId',
                templateUrl: 'DesignerImagesDisplay/DesignerSingleProductDisplay.html',
                resolve: {
                    selectedProduct: function(ProductService,$stateParams){
                        return ProductService.getProductById($stateParams.productId).then(function(response) {
                            return response;
                        });
                    }
                },
                controller:'DesignerProductsDisplayController'
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
            .state('designerHomePage',{
                url:'/designerHomePage?designerId',
                templateUrl: 'DesignerImagesDisplay/DesignerDisplay.html',
                resolve: {
                    productInfoList: function(ProductService,$stateParams){
                        return ProductService.retrieveProductsBasedOnDesigner($stateParams.designerId).then(function(response) {
                            return response;
                        });
                    }
                },
                controller:'DesignerDisplayController'
            })
            .state('designerOrder',{
                url:'/designerOrder?designerId',
                templateUrl: 'Orders/ProductOrdersPage.html',
                resolve: {
                    ordersList: function(OrderService,$stateParams){
                        return OrderService.getActiveOrdersForDesigners($stateParams.designerId).then(function(response) {
                            return response;
                        });
                    }
                },
                controller:'ProductsOrderController'
            })
            .state('orderedProductInfo',{
                url:'/productInfo',
                params :{order:null},
                templateUrl: 'Orders/OrderedProductInfo.html',
                resolve: {
                    orderedProduct: function(ProductService,$stateParams){
                      return $stateParams.order;
                    }
                },
                controller:'OrderedProductInfoController'
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