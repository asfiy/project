/**
 * Created by ashaik on 3/25/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('DesignerRegistrationController',designerRegistrationController);
    designerRegistrationController.$inject =['$scope','$http','$state'];

    function designerRegistrationController($scope,$http,$state){
        $scope.step1= true;
        $scope.step2= false;
        $scope.designerRegistration={};
        $scope.onStep1Completion = function(designerRegistration){
            $http({method:'POST',url:'/server/registration/registerDesigner',data:designerRegistration}).then(function (result){
                $scope.step1 = false;
                $scope.step2 = true;
            }).catch(function () {
                console.log("in error");
            });
        };
        $scope.onStep2Completion = function(){
            $scope.step2 = false;
            $scope.step3 = true;
        };
        $scope.onPrevious = function(step){
            if(step == 'Step2'){
                $scope.step1= true;
                $scope.step2= false;
            }else if(step =='Step3'){
                $scope.step2= true;
                $scope.step3= false;
            }
        };
        console.log($scope.files);
        $scope.onCancel = function(){
            $state.go('home');

        }
    }
})();