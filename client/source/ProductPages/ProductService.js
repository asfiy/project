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
            getProductById: function(productId){
                return Product.getProductById({productId:productId}).$promise;

            }
        };

    }
})();
