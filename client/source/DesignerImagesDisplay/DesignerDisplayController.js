/**
 * Created by ashaik on 9/9/2017.
 */
/**
 * Created by ashaik on 5/17/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('DesignerDisplayController', designerDisplayController);
    designerDisplayController.$inject = ['$scope', '$http','$stateParams','productInfoList','$mdDialog'];
    function designerDisplayController($scope, $http,$stateParams,productInfoList,$mdDialog) {

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

        $scope.removeProduct = function(){
            console.log("in remove");

        };

        $scope.updateInformation = function(){
            console.log("in update");
        }
    }
})();
