/**
 * Created by ashaik on 10/16/2017.
 */
/**
 * Created by ashaik on 9/18/2017.
 */
(function () {
    'use strict';

    angular.module('project').factory('CartService', cartService);
    cartService.$inject = ['$rootScope', '$http', 'Cart'];

    function cartService(rootScope, $http, Cart) {
        return {
            getCartItems : function (userId) {
                return Cart.getCartItems({userId: userId}).$promise;
            }
        }
    }
})();