/**
 * Created by ashaik on 10/16/2017.
 */
(function() {
    'use strict';

    angular.module('project').factory('Cart', cartResource);

    cartResource.$inject = ['$resource', '$http'];

    function cartResource( resource, $http) {
        return resource('/server/cart', {}, {
            getCartItems: {
                method: 'GET',
                url: '/server/cart/getCartItems',
                isArray: true
            }
        });
    }
})();