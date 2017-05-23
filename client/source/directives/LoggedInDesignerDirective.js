/**
 * Created by ashaik on 5/14/2017.
 */
(function () {
    'use strict';

    angular.module('project').directive('designerLogin', designerLogin);
    designerLogin.$inject = ['LoginService'];

    function designerLogin(loginService) {
        return {
            link: function (scope, element, attrs) {
               function toggleVisibilityBasedOnPermission() {
                    if (!loginService.isLoggedIn()) {
                        element.show();
                    } else {
                        element.hide();
                    }
               }

                toggleVisibilityBasedOnPermission();
            }
        };
    }
})();

