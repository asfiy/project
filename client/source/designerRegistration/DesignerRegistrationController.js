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
        $scope.designerInformation={};
        $scope.citizenDetailsList = ['Aadhar Card','Pan Card','Voter ID'];
        $scope.onStep1Completion = function(designerRegistration){
                $scope.step1 = false;
                $scope.step2 = true;
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
        $scope.onCancel = function(){
            $state.go('home');

        };
        $scope.citizenDetailData = function(){
            if($scope.designerInformation.citizenDetails =='Pan Card'){
                $scope.panCardDetails= true;
            }
        };

        $scope.submitDesignerRegistration = function(){
            $scope.designerInformation;
            $http({method:'POST',url:'/server/registration/registerDesigner',data:$scope.designerInformation}).then(function (result){
                    console.log("in controller");
                $state.go('productUpload');
            }).catch(function () {
                console.log("in error");
            });
        }
    }
})();