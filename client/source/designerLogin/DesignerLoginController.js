/**
 * Created by ashaik on 4/9/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('DesignerLoginController', designerLoginController);
    designerLoginController.$inject = ['$window','$route','$rootScope','$scope', '$http', '$state','sessionService'];

    function designerLoginController($window,$route,$rootScope,$scope, $http, $state,sessionService) {
        $scope.designerLogin={};

        $scope.login = function(){
            if($scope.designerLogin.userName && $scope.designerLogin.password){
                $http({method:'POST',url:'/server/login/auth',data:$scope.designerLogin}).then(function (result){
                    console.log("in controller");
                    if(result.statusText && result.data.designerInformation.id){
                        sessionService.set('user',result.data.designerInformation.id);
                      //  $window.location.reload();
                        $rootScope.toReload = true;
                        $scope.$watch('thingToWatchForRefershing', function (newValue, oldValue) {
                            $scope.$emit('somethingChangedInFirstDirective', $rootScope.toReload);
                        });
                        $state.go('designerHomePage',{designerId:result.data.designerInformation.id},{reload:true});
                    }else{
                        $state.go('designerLogin');
                    }
                }).catch(function () {
                    console.log("in error");
                });
            }
        };


    }
})();