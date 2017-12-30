/**
 * Created by ashaik on 4/4/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('CartController', cartController);
    cartController.$inject = ['$scope', '$http', '$state','cartList'];

    function cartController($scope, $http, $state,cartList) {
        $scope.cartList = cartList;
        $scope.gridOptions = {
            data: 'cartList',
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
                cellTemplate: '<div class="ngCellText cellActive" align="center">{{row.entity.productInformation.description}}</div>'
            },
            {
                field: "productInformation.price",
                displayName: "Price",
                enableColumnMenu: false,
                minWidth: 250,
                cellTemplate: '<div class="ngCellText cellActive" >{{row.entity.productInformation.price}}</div>'
            }
        ];

        $scope.getTableHeight = function () {
            var rowHeight = 250, headerHeight = 30;
            return {
                height: ($scope.cartList.length * rowHeight + headerHeight) + "px"
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


angular.module('project').directive('mdTable', function () {
    return {
        restrict: 'E',
        scope: {
            headers: '=',
            content: '=',
            sortable: '=',
            filters: '=',
            customClass: '=customClass',
            thumbs:'=',
            count: '='
        },
        controller: function ($scope,$filter,$window) {
            var orderBy = $filter('orderBy');
            $scope.tablePage = 0;
            $scope.nbOfPages = function () {
                return Math.ceil($scope.content.length / $scope.count);
            },
                $scope.handleSort = function (field) {
                    if ($scope.sortable.indexOf(field) > -1) { return true; } else { return false; }
                };
            $scope.order = function(predicate, reverse) {
                $scope.content = orderBy($scope.content, predicate, reverse);
                $scope.predicate = predicate;
            };
            $scope.order($scope.sortable[0],false);
            /*$scope.getNumber = function (num) {
                return new Array(num);
            };*/
            $scope.goToPage = function (page) {
                $scope.tablePage = page;
            };
        },
        template: angular.element(document.querySelector('#md-table-template')).html()
    }
});