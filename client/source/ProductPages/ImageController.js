/**
 * Created by ashaik on 9/9/2017.
 */

(function () {
    'use strict';

    angular.module('project').controller('ImageController', imageController);
    imageController.$inject = ['$scope', '$http', '$state', 'sessionService', '$stateParams', 'productInfo', '$mdDialog','ProductService'];
    function imageController($scope, $http, $state, sessionService, $stateParams, productInfo, $mdDialog,ProductService) {
        $scope.productInfo = productInfo;
        $scope.removeReasonsList;
        ProductService.getProductRemovingReasons().then(function (result) {
            $scope.removeReasonsList = result;
        });
        $scope.changeImage= function($index){
            angular.forEach($scope.productInfo.productImages, function(value,key){
                if(value.active==true){
                    value.active= false;
                }
            });
            $scope.productInfo.productImages[$index].active=true;
        };


        $scope.submitRemovingReason = function(removeReasonId){
            ProductService.removeProduct(removeReasonId,$scope.productInfo.id).then(function(result){
                if(result.success){
                    // show success message
                    $mdDialog.cancel();
                }
            });

        };



        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    };
})();
