/**
 * Created by ashaik on 5/16/2017.
 */

(function () {
    'use strict';

    angular.module('project').controller('TrackingController', trackingController);
    trackingController.$inject = ['$scope', '$http', '$state', '$mdDialog'];

    function trackingController($scope, $http, $state, $mdDialog) {
        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }
})();
