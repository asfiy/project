/**
 * Created by ashaik on 5/17/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('ProductOrderController', productOrderController);
    productOrderController.$inject = ['$scope', '$http', '$state', 'sessionService','$stateParams','selectedProduct','$mdDialog'];
    function productOrderController($scope, $http, $state,sessionService,$stateParams,selectedProduct,$mdDialog) {
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
                productId:$scope.selectedProduct.id,
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

        $scope.showImages = function(ev,$index) {
            $scope.selectedProduct.productImages[$index].active=true;
            $mdDialog.show({
                locals: { productInfo: $scope.selectedProduct },
                controller: 'ImageController',
                templateUrl: '/ProductPages/show-images.tpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true
            })
                .then(function(answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
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

