/**
 * Created by ashaik on 5/17/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('ProductOrderController', productOrderController);
    productOrderController.$inject = ['$scope', '$http', '$state', 'sessionService','$stateParams','productInfoList'];
    function productOrderController($scope, $http, $state,sessionService,$stateParams,productInfoList) {
        $scope.sizes =['XS','S','M','L','XL','XXL'];
        $scope.size={};
        $scope.customStyle ={};
        var category = $stateParams.category;
        console.log(category);
      //  $scope.products=[];
        //TODO: move to init function
        var config = {
            category:category
        };
        if(productInfoList.length>0){
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
       /* $http({method:'POST',url:'/server/products/retrieveProductsBasedOnCategory',data:config}).then(function (result) {
            if(result.status==200){
                $scope.matrix = [];
                    var i, k;
                $scope.products = result.data;
                    for (i = 0, k = -1; i < $scope.products.length; i++) {
                        if (i % 3 === 0) {
                            k++;
                            $scope.matrix[k] = [];
                        }
                        $scope.products[i].fileUrl =
                        $scope.matrix[k].push($scope.products[i]);
                    }
                }
        });*/
        $scope.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        $scope.displayProducts = function(){

        };

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
            $http({method:'POST',url:'/server/orders/buyNow',data:config}).then(function (result) {
                if(result.success){
                    console.log("in contr");
                }

            });
        };


        $scope.getSelectedValue = function($index){
            $scope.size = $scope.sizes[$index];
         //  $scope.customStyle.style = {"background-color":"green"};
           // document.getElementById('sizeButton').style.backgroundColor = "red";
        }
    }
    })();
/*


angular.module('project').filter('listToMatrix', function() {
    function listToMatrix(list, elementsPerSubArray) {
        var matrix = [], i, k;
        if(list!=undefined){
            for (i = 0, k = -1; i < list.length; i++) {
                if (i % elementsPerSubArray === 0) {
                    k++;
                    matrix[k] = [];
                }

                matrix[k].push(list[i]);
            }
        }
        list = matrix;

        return list;
    }
    return function(list, elementsPerSubArray) {
        return listToMatrix(list, elementsPerSubArray);
    };
});
*/
