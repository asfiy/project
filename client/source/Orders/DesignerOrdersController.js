/**
 * Created by ashaik on 9/16/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('ProductsOrderController', productsOrderController);
    productsOrderController.$inject = ['$scope', '$http','$stateParams','$state','ordersList','$mdDialog','$uibModal'];
    function productsOrderController($scope, $http,$stateParams,$state,ordersList,$mdDialog,$uibModal) {

        $scope.ordersList = ordersList;
        $scope.gridOptions = {
            data: 'ordersList',
            enableGridMenu: false,
            enableColumnResizing: true,
            enableSorting: false,
            enableHorizontalScrollbar: 0,
            enableVerticalScrollbar: 0,
            gridMenuShowHideColumns: false,
            rowHeight:220
        };

        $scope.gridOptions.columnDefs = [
            {
                field: "productInformation.productImages",
                displayName: "Product",
                enableColumnMenu: false,
                minWidth: 250,
                cellTemplate: '<div class="ngCellText cellActive" ng-repeat="productImage in row.entity.productInformation.productImages"><div ng-if="productImage.intialImage">' +
                '<img src="{{productImage.fileUrl}}" height="220px;" width="200px;"  alt="Washed Out"></div></div>'
            },
            {
                field: "productInformation.description",
                displayName: "Description",
                enableColumnMenu: false,
                minWidth: 250,
                cellTemplate: '<div class="ngCellText cellActive" >{{row.entity.productInformation.description}}</div>'
            },
            {
                field: "productInformation.price",
                displayName: "Price",
                enableColumnMenu: false,
                minWidth: 250,
                cellTemplate: '<div class="ngCellText cellActive" >{{row.entity.productInformation.price}}</div>'
            },
            {
                field: "id",
                displayName: "Checkout",
                enableColumnMenu: false,
                minWidth: 250,
                cellTemplate: '<div class="ngCellText cellActive"><button ng-click="grid.appScope.showOrdersPage(row.entity)"><span class="glyphicon glyphicon-play"></span></button></div>'
            }
        ];

        $scope.getTableHeight = function () {
            var rowHeight = 250, headerHeight = 30;
            return {
                height: ($scope.ordersList.length * rowHeight + headerHeight) + "px"
            };
        };

        $scope.showOrderInfo = function(){
          console.log("in ");
        };

        angular.extend($scope, {
            showOrdersPage: function (order) {
                $state.go('orderedProductInfo',{order:order},{reload:true});
            }
        });

        }
})();

