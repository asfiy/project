/**
 * Created by ashaik on 4/4/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('CartController', cartController);
    cartController.$inject = ['$scope', '$http', '$state','$mdDialog'];

    function cartController($scope, $http, $state,$mdDialog) {
        $scope.cartItems =[];
        var item1 ={name:'Item1',cost:'20'};
        var item2 ={name:'Item1',cost:'20'};
        var item3 ={name:'Item1',cost:'20'};
        var item4 ={name:'Item1',cost:'20'};
        var item5 ={name:'Item1',cost:'20'};
        var item6 ={name:'Item1',cost:'20'};

        $scope.cartItems.push(item1);
        $scope.cartItems.push(item2);
        $scope.cartItems.push(item3);
        $scope.cartItems.push(item4);
        $scope.cartItems.push(item5);
        $scope.cartItems.push(item5);


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