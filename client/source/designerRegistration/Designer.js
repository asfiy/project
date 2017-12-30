/**
 * Created by ashaik on 12/3/2017.
 */
(function() {
    'use strict';

    angular.module('project').factory('Designer', designerResource);

    designerResource.$inject = ['$resource', '$http'];

    function designerResource( resource, $http) {
        return resource('/server/designer', {}, {
            getDesignerInformation: {
                method: 'GET',
                url: '/server/designer/getDesignerInformation'
            }
        });
    }
})();