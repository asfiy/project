/**
 * Created by ashaik on 5/14/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('UserRegistrationController', userRegistrationController);
    userRegistrationController.$inject = ['$scope', '$http', '$state'];

    function userRegistrationController($scope,$http,$state){
        $scope.userRegistration ={};

        $scope.register = function(){
            $http({method:'POST',url:'/server/registration/registerUser',data:$scope.userRegistration}).then(function (result){
                console.log("in controller");
                $state.go('home');
            }).catch(function () {
                console.log("in error");
            });
        }
    }
})();