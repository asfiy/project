/**
 * Created by ashaik on 4/15/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('HomePageController', homePageController);
    homePageController.$inject = ['$scope', '$http', '$state','sessionService'];

    function homePageController($scope, $http, $state,sessionService) {
        $scope.imageList = [''];

        $scope.logout = function(){
            sessionService.destroy('user');
            $state.go('designerLogin');
        }
    }
})();