/**
 * Created by ashaik on 9/18/2017.
 */
(function () {
    'use strict';

    angular.module('project').factory('OrderService', orderService);
    orderService.$inject = ['$rootScope', '$http', 'Order'];

    function orderService(rootScope, $http, Order) {
        return {
            getActiveOrdersForDesigners: function (designerId) {
                return Order.getActiveOrdersForDesigners({designerId: designerId}).$promise;
            },
            updateProcessStarted: function(orderId,orderStatus){
                return Order.updateProcessStarted({orderId: orderId,orderStatus:orderStatus}).$promise;
            }

        }
    }
})();