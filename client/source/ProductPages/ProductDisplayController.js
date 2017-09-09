/**
 * Created by ashaik on 5/17/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('ProductDisplayController', productDisplayController);
    productDisplayController.$inject = ['$scope', '$http','$stateParams','productInfoList'];
    function productDisplayController($scope, $http,$stateParams,productInfoList) {

        var category = $stateParams.category;
        if (productInfoList.length > 0) {
            $scope.matrix = [];
            var i, k;
            $scope.products = productInfoList;
            for (i = 0, k = -1; i < $scope.products.length; i++) {
                if (i % 3 === 0) {
                    k++;
                    $scope.matrix[k] = [];
                }
                $scope.matrix[k].push($scope.products[i]);
            }
        }

    }
})();
