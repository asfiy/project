/**
 * Created by ashaik on 12/3/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('VerificationController', verificationController);
    verificationController.$inject = ['$scope', '$http', '$state','designerInformation'];

    function verificationController($scope, $http, $state,designerInformation) {
        $scope.designerInformation = designerInformation;
        $scope.verifyCode = function(designerRegistration){
            if(designerRegistration == $scope.designerInformation.verificationCode){
                $scope.designerInformation.isVerified = true;
                $http({method:'POST',url:'/server/registration/designerVerification',data:$scope.designerInformation}).then(function (result){
                    console.log("in controller");
                    $state.go('designerLogin');
                }).catch(function () {
                    console.log("in error");
                });
            }
        }
    }
})();