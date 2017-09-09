/**
 * Created by ashaik on 5/17/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('ProductOrderController', productOrderController);
    productOrderController.$inject = ['$scope', '$http', '$state', 'sessionService','$stateParams','selectedProduct'];
    function productOrderController($scope, $http, $state,sessionService,$stateParams,selectedProduct) {
        $scope.sizes =['XS','S','M','L','XL','XXL'];
        $scope.size={};
        $scope.customStyle ={};
        $scope.selectedProduct = selectedProduct;
        $scope.myInterval = 3000;
        $scope.productAddedToCart = false;
        var category = $stateParams.category;
        console.log(category);
        $scope.buyNow = function(){

                var config = {
                        productId:1,
                        login  :'asfi',
                        sizeSelected :$scope.size
                };
                $http({method:'POST',url:'/server/orders/buyNow',data:config}).then(function (result) {
                    if(result.success){
                            console.log("in contr");
                    }

                });
        };

        $scope.addToCart = function(){

            var config = {
                productId:1,
                login  :'asfi',
                sizeSelected :$scope.size
            };
            $http({method:'POST',url:'/server/orders/addToCart',data:config}).then(function (result) {
                if(result.status = 200){
                    console.log("in contr");
                    $scope.productAddedToCart = true;
                }

            });
        };


        $scope.getSelectedValue = function(index){
            $scope.size = $scope.sizes[index];
            $scope.sizeSelected = index;
         //  $scope.customStyle.style = {"background-color":"green"};
           // document.getElementById('sizeButton').style.backgroundColor = "red";
        }
    }
    })();

