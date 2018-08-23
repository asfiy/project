/**
 * Created by ashaik on 4/15/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('HomePageController', homePageController);
    homePageController.$inject = ['$scope', '$http', '$state','sessionService','ProductService'];

    function homePageController($scope, $http, $state,sessionService,ProductService) {
        $scope.imageList = [''];

        $scope.logout = function(){
            sessionService.destroy('user');
            $state.go('designerLogin');
        };
        ProductService.getHomePageImage().then(function(result){
            if(result.success){
                $scope.homePageUrl = result.homePageImage.fileUrl;
            }
    });

        ProductService.getWeeklyDesigns().then(function(result){
             $scope.weeklyDesigns = result;
        });
    }
})();