/**
 * Created by ashaik on 4/4/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('CartController', cartController);
    cartController.$inject = ['$scope', '$http', '$state','$mdDialog'];

    function cartController($scope, $http, $state,$mdDialog) {
        $scope.cartItems =[];
        var config = {
            loggedInUser  :'asfi'
        };
        $http({method:'POST',url:'/server/cart/getCartItems',data:config}).then(function (result){
            $scope.content = result.data.cartList;
        });



        ///////////////
        $scope.toggleSearch = false;

        $scope.headers = [
            {
                name:'',
                field:'thumb' //need to add pic
            },{
                name: 'Description',
                field: 'productInformation.shortDescription'
            },{
                name:'Price',
                field: 'price'
            },{
                name: 'Last Modified',
                field: 'last_modified'
            }
        ];

        $scope.custom = {name: 'bold', description:'grey',last_modified: 'grey'};
        $scope.sortable = ['name', 'description', 'last_modified'];
        $scope.thumbs = 'thumb';
        $scope.count = 3;


        //////////////////////
        $scope.cancelOrder = function(ev,$index) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Are you sure to cancel the order?')
                .targetEvent(ev)
                .ok('Cancel Order')
                .cancel('Not Now');

            $mdDialog.show(confirm).then(function() {
                $scope.cartItems.splice($index,1);
            }, function() {
            });
        };

        $scope.showTrackingInformation = function(ev,$index) {
            $mdDialog.show({
                controller:'TrackingController',
                templateUrl: 'cart/Track-information.tpl.html',
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
            $scope.getNumber = function (num) {
                return new Array(num);
            };
            $scope.goToPage = function (page) {
                $scope.tablePage = page;
            };
        },
        template: angular.element(document.querySelector('#md-table-template')).html()
    }
});