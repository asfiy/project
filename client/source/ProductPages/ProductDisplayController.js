/**
 * Created by ashaik on 5/17/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('ProductDisplayController', productDisplayController);
    productDisplayController.$inject = ['$scope', '$http','$stateParams','productInfoList','$mdDialog','categories'];
    function productDisplayController($scope, $http,$stateParams,productInfoList,$mdDialog,categories) {

        var category = $stateParams.category;
        $scope.categories = categories;

        function generateMatrix(products) {
            $scope.matrix = [];
            if (products.length > 0) {
                $scope.matrix = [];
                var i, k;
                for (i = 0, k = -1; i < products.length; i++) {
                    if (i % 5 === 0) {
                        k++;
                        $scope.matrix[k] = [];
                    }
                    $scope.matrix[k].push(products[i]);
                }
            }
        }

        generateMatrix(productInfoList);

        $scope.slider = {
            minValue: 0,
            maxValue: 10000,
            options: {
                floor: 0,
                ceil: 10000,
                step: 100,
                onChange: function(){
                    $scope.onSliderChange();
                }
            }
        };

        $scope.onSliderChange = function(){
            console.log("in chnage"+$scope.slider.minValue);
            console.log("in chnage"+$scope.slider.maxValue);
            $scope.products = [];
            angular.forEach(productInfoList, function (value, key) {
                console.log(key + ': ' + value);
                if (value.price >= $scope.slider.minValue && value.price <= $scope.slider.maxValue) {
                    $scope.products.push(value);
                }
            });
            generateMatrix($scope.products);
        };

        $scope.filterCategories = function(categories){
            var isSelected = false;

            angular.forEach(categories, function(value,key){
                if (value.Selected) {
                    isSelected = true;
                }
            });
            $scope.unFilteredProductsList = productInfoList;
            $scope.products = [];
            if (isSelected == true) {
                angular.forEach($scope.unFilteredProductsList, function (value, key) {
                    console.log(key + ': ' + value);
                    for (var i = 0; i < categories.length; i++) {
                        if (categories[i].Selected == true) {
                            if (value.category.categoryName == categories[i].categoryName) {
                                $scope.products.push(value);
                            }
                        }
                    }
                });
                generateMatrix($scope.products);
                $scope.dropdownOpen = false;
            }
        };

        $scope.priceFilter = function(){
            console.log($scope.slider.minValue);
        }

    }
})();
