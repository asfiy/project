/**
 * Created by ashaik on 4/11/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('UploadProductsController', uploadProductsController);
    uploadProductsController.$inject = ['$scope', '$http', '$state','UploadProducts','categories','productInformation'];
    function uploadProductsController($scope,$http,$state,UploadProducts,categories,productInformation){
        $scope.files={};
        $scope.sizesList = ['xs','s','m','xl'];
        $scope.productInformation ={};
        $scope.designerId ={designerId:"asfiya"};
        $scope.productInformationList =[];
        $scope.categoryList = categories;
        $scope.productInformation = productInformation;

        $http({method:'POST',url:'/server/products/retrieveProducts',data:$scope.designerId}).then(function (result){
            $scope.productInformationList = result.data.productInformation;
            $scope.productImageList = result.data.productImage;

        });
        $scope.validateDocumentRequired = function(){
            if(($scope.files && ( $scope.files.length > 0  || typeof  $scope.files === "object" ))) {
                $scope.fileModelObj="file";
            }else{
                $scope.fileModelObj=null;
            }
        };

        $scope.saveProductInformation = function(){
            var result = UploadProducts.process($scope.formatData($scope.productInformation,$scope.files)).$promise;
            result.then(function (result){
                console.log("in controller");
                if(result.success){
                   // $scope.files.add(result.request.productImages);
                    $state.go('productUpload',{},{reload:true});
                }
              //  $state.go('productUpload');
            }).catch(function () {
                console.log("in error"+result.errors);
            });
        };


        $scope.formatData = function(requestObj,fileObj){
            var objFiles=[];
            for (var property in fileObj) {
                var fileNames = [];
                if(Object.prototype.toString.call(fileObj[property]) === '[object Array]'){
                    for (var i = 0; i < fileObj[property].length; i++) {
                        fileNames.push(property+"." + i);
                    }
                }else{
                    fileNames.push(property+"." + 0);
                }
                var tempObj={
                    file : fileObj[property],
                    fileFormDataName :fileNames
                };
                objFiles.push(tempObj);
            }
            var data={
                formfields: {req: requestObj},
                fileArrayObj: objFiles
            };
            return data;
        };


    }
})();

