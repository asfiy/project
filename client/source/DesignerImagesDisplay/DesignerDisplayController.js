/**
 * Created by ashaik on 9/9/2017.
 */
/**
 * Created by ashaik on 5/17/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('DesignerDisplayController', designerDisplayController);
    designerDisplayController.$inject = ['$scope', '$http','$stateParams','productInfoList','$mdDialog','ProductService','$state'];
    function designerDisplayController($scope, $http,$stateParams,productInfoList,$mdDialog,ProductService,$state) {

        var category = $stateParams.category;
        if (productInfoList.length > 0) {
            $scope.matrix = [];
            var i, k;
            $scope.products = productInfoList;
            for (i = 0, k = -1; i < $scope.products.length; i++) {
                if (i % 5 === 0) {
                    k++;
                    $scope.matrix[k] = [];
                }
                $scope.matrix[k].push($scope.products[i]);
            }
        }

        $scope.removeProduct = function(product){
            console.log("in remove");

         /*   $uibModal.open({
                templateUrl: 'DesignerImagesDisplay/remove-product.tpl.html',
                controller: function ($scope, $uibModalInstance) {
                    $scope.close = function(){
                        $uibModalInstance.close();
                    };

                }
            });
*/

            $mdDialog.show({
                locals: { productInfo: product},
                controller: 'ImageController',
                templateUrl: 'DesignerImagesDisplay/remove-product.tpl.html',
                parent: angular.element(document.body),
                clickOutsideToClose:true
            })
                .then(function(answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
                });
        };

        $scope.updateInformation = function(productId){
            $state.go('productUpload',{productId:productId});
        };

        $scope.addNewProducts  = function() {
            $state.go('productUpload');
        };
    }
})();
