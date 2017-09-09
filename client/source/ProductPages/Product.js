/**
 * Created by ashaik on 8/23/2017.
 */
(function() {
    'use strict';

    angular.module('project').factory('Product', productResource);

    productResource.$inject = ['$resource', '$http'];

    function productResource( resource, $http) {
        return resource( '/server/products', {}, {
            retrieveProductsBasedOnCategory: {
                method: 'GET',
                url: '/server/products/retrieveProductsBasedOnCategory',
                isArray: true
            },
            retrieveProductsBasedOnDesigner: {
                method: 'GET',
                url: '/server/products/retrieveProductsBasedOnDesigner',
                isArray: true
            },
            getProductById: {
                method: 'GET',
                url: '/server/products/getProductById'
            }
        });
    }
})();