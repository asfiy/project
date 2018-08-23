/**
 * Created by ashaik on 8/13/2017.
 */
(function () {
    'use strict';

    angular.module('project').factory('ProductService', productService);
    productService.$inject = ['$rootScope','$http','Product'];

    function productService(rootScope,$http,Product) {
        return {
            retrieveProductsBasedOnCategory: function(category){
                /*var productInfoList =  $http({method:'POST',url:'/server/products/retrieveProductsBasedOnCategory',category:category}).then(function (result) {
                    return result.data;
                });*/
                return Product.retrieveProductsBasedOnCategory({category:category}).$promise;
            },
            retrieveProductsBasedOnDesigner: function(designerId){
                /*var productInfoList =  $http({method:'POST',url:'/server/products/retrieveProductsBasedOnCategory',category:category}).then(function (result) {
                 return result.data;
                 });*/
                return Product.retrieveProductsBasedOnDesigner({designerId:designerId}).$promise;
            },
            getProductById: function(productId){
                return Product.getProductById({productId:productId}).$promise;

            },
            getSimilarProducts: function(productId){
                return Product.getSimilarProducts({productId:productId}).$promise;
            },
            getProductRemovingReasons: function(){
                return Product.getProductRemovingReasons().$promise;
            },
            removeProduct: function(removeReasonId,productId){
                return Product.removeProduct({removeReasonId:removeReasonId, productId: productId}).$promise;
            },
            getHomePageImage: function(){
                return Product.getHomePageImage().$promise;
            },
            getWeeklyDesigns: function(){
                return Product.getWeeklyDesigns().$promise;
            },
            submitUserReview: function(productId,userReviewComments){
                return Product.submitUserReview({productId: productId,userReviewComments:userReviewComments}).$promise;
            }
        };

    }
})();
