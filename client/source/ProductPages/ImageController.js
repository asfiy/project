/**
 * Created by ashaik on 9/9/2017.
 */

(function () {
    'use strict';

    angular.module('project').controller('ImageController', imageController);
    imageController.$inject = ['$scope', '$http', '$state', 'sessionService', '$stateParams', 'productInfo', '$mdDialog'];
    function imageController($scope, $http, $state, sessionService, $stateParams, productInfo, $mdDialog) {
        $scope.productInfo = productInfo;

        $scope.changeImage= function($index){
            angular.forEach($scope.productInfo.productImages, function(value,key){
                if(value.active==true){
                    value.active= false;
                }
            });
            $scope.productInfo.productImages[$index].active=true;
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    };
})();
