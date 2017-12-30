/**
 * Created by ashaik on 10/20/2017.
 */
(function () {
    'use strict';

    angular.module('project').directive('headerComponent', headerComponent);
    function headerComponent() {
        return {
            restrict: 'E',
            scope: {
            },
            link: function($rootScope,$scope){
                $scope.$on('somethingChangedInFirstDirective', function (ev, data) {
                    // render everything again i.e. reload the directive
                    $scope.render();
                });
            },
            controller:function(){
            },
            templateUrl: function (elem, attrs) {
                return "headerComponent/header-component.html";
            }

        }
    }
})();