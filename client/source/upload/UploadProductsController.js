/**
 * Created by ashaik on 4/11/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('UploadProductsController', uploadProductsController);
    uploadProductsController.$inject = ['$scope', '$http', '$state'];
    function uploadProductsController($scope,$http,$state){
        $scope.files=[];
        $scope.sizesList = ['xs','s','m','xl'];
        $scope.productInformation =[];
        $scope.validateDocumentRequired = function(){
            if(($scope.files && ( $scope.files.length > 0  || typeof  $scope.files === "object" ))) {
                $scope.fileModelObj="file";
            }else{
                $scope.fileModelObj=null;
            }
        };

        $scope.saveProductInformation = function(){
            $http({method:'POST',url:'/server/products/saveProductInformation',data:$scope.productInformation}).then(function (result) {
                    console.log('in product');
            });
        }
    }
})();