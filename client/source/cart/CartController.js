/**
 * Created by ashaik on 4/4/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('CartController', cartController);
    cartController.$inject = ['$scope', '$http', '$state'];

    function cartController($scope, $http, $state) {
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

    }
})();