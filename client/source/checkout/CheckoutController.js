/**
 * Created by ashaik on 5/24/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('CheckoutController', checkoutController);
    checkoutController.$inject = ['$scope', '$http', '$state'];
    function checkoutController($scope,$http,$state) {
        $http({method:'GET',url:'/server/login/getUserInfo',data:$scope.designerInformation}).then(function (result){
            if(result.success){
                $state.go('successPage');// need to redirect to payment gateway
            }else{
                $state.go('userLogin');
            }
        }).catch(function () {
            console.log("in error");
        });
    }

})();