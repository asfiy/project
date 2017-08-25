/**
 * Created by ashaik on 8/13/2017.
 */
(function () {
    'use strict';

    angular.module('project').factory('CategoryService', categoryService);
    categoryService.$inject = ['$rootScope','$http'];

    function categoryService(rootScope,$http) {
        return {
            setCategories: function(){
                var categories = $http({method: 'POST', url: '/server/category/getCategories'}).then(function (result) {
                                            return result.data;
                                        });
                rootScope.categories = categories;
            },
            getCategories:function(){
                return $http({method: 'POST', url: '/server/category/getCategories'}).then(function (result) {
                    return result.data;
                });
            }
    };

    }
})();