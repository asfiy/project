/**
 * Created by ashaik on 9/18/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('OrderedProductInfoController', orderedProductInfoController);
    orderedProductInfoController.$inject = ['$scope', '$http', '$stateParams', 'orderedProduct','OrderService'];
    function orderedProductInfoController($scope, $http, $stateParams, orderedProduct,OrderService) {
        $scope.orderedProduct = orderedProduct;
        $scope.productImages = orderedProduct.productInformation.productImages;
        $scope.yesOrNoList={Yes:true,No:false};
        $scope.processStarted = false;

        $scope.processStarted= function(){
            orderedProduct.orderStatus = "In Progress";
            OrderService.updateProcessStarted(orderedProduct.id,orderedProduct.orderStatus).then(function(result){
                if(result.status = 200) {
                    console.log("in contr");
                    $scope.processStarted = true;
                    $scope.orderedProduct= result.orderInformation;
                }
            });
        }
    }
})();