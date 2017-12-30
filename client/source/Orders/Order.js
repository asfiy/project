/**
 * Created by ashaik on 9/18/2017.
 */
(function() {
    'use strict';

    angular.module('project').factory('Order', orderResource);

    orderResource.$inject = ['$resource', '$http'];

    function orderResource( resource, $http) {
        return resource('/server/orders', {}, {
            getActiveOrdersForDesigners: {
                method: 'GET',
                url: '/server/orders/getActiveOrdersForDesigners',
                isArray: true
            },
            updateProcessStarted:{
                method: 'POST',
                url: '/server/orders/updateProcessStarted'
            }
        });
    }
})();