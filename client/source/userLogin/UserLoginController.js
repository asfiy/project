/**
 * Created by ashaik on 4/9/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('UserLoginController', userLoginController);
    userLoginController.$inject = ['$scope', '$http', '$state','sessionService'];

    function userLoginController($scope, $http, $state,sessionService) {
        $scope.userLogin={};

        $scope.login = function(){
            if($scope.userLogin.userName && $scope.userLogin.password){
                $http.post('/server/login/auth', {userName: $scope.userLogin.userName, password: $scope.userLogin.password}).then(function(user){
                    console.log("in controller");
                    /*if(result.statusText && result.data.userInformation.id){
                        sessionService.set('user',result.data.userInformation.id);
                        $state.go('home',{},{reload:true});
                    }else{
                        $state.go('userLogin');
                    }*/
                }).catch(function () {
                    console.log("in error");
                });

            }
        };


    }
})();