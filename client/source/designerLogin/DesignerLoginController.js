/**
 * Created by ashaik on 4/9/2017.
 */
(function () {
    'use strict';

    angular.module('project').controller('DesignerLoginController', designerLoginController);
    designerLoginController.$inject = ['$scope', '$http', '$state'];

    function designerLoginController($scope, $http, $state) {
        $scope.designerLogin={};

        $scope.login = function(){
            if($scope.designerLogin.userName && $scope.designerLogin.password){
                $http({method:'POST',url:'/server/login/designerLogin',data:$scope.designerLogin}).then(function (result){
                    console.log("in controller");
                    $state.go('productUpload');
                }).catch(function () {
                    console.log("in error");
                });

            }
        }
    }
})();