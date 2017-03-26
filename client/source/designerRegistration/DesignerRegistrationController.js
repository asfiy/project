/**
 * Created by ashaik on 3/25/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('DesignerRegistrationController',designerRegistrationController);
    designerRegistrationController.$inject =['$scope','$http'];

    function designerRegistrationController($scope,$http){
        $scope.step1= true;
        $scope.step2= false;
        $scope.onStep1Completion = function(designerRegistration){
            $scope.step1 = false;
            $scope.step2 = true;
            $http({method:'POST',url:'/server/designerRegistration/register',data:designerRegistration}).then(function (result){
                console.log('in con');
            }).catch(function () {
console.log("in error");            });
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
    }
})();