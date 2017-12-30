/**
 * Created by ashaik on 5/14/2017.
 */
(function () {
    'use strict';

    angular.module('project').directive('designerLogin', designerLogin);
    designerLogin.$inject = ['LoginService','$timeout'];

    function designerLogin(loginService,$timeout) {
        return {
            priority: 1,
            replace: true,
            link: function (scope, element, attrs) {
                scope.$watch('toReload', function(newVal, oldVal){
                    if (scope.toReload==true){
                        element.show();
                    }
                });
                $timeout(function () {
                    console.log("in login dir");
                    function toggleVisibilityBasedOnPermission() {

                        console.log("in login fun" + loginService.isLoggedIn());
                        if (!loginService.isLoggedIn()) {
                            element.show();
                        } else {
                            element.hide();
                        }
                    }

                    toggleVisibilityBasedOnPermission();
                }, 0);
            }
        }
    }
})();

