/**
 * Created by ashaik on 9/16/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('DesignerProductsDisplayController', designerProductsDisplayController);
    designerProductsDisplayController.$inject = ['$scope', '$http','$stateParams','selectedProduct','$mdDialog'];
    function designerProductsDisplayController($scope, $http,$stateParams,selectedProduct,$mdDialog) {

        $scope.selectedProduct = selectedProduct;
        $scope.isOpen = false;
    }
})();
