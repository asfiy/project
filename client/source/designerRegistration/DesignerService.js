/**
 * Created by ashaik on 12/3/2017.
 */
(function () {
    'use strict';

    angular.module('project').factory('DesignerService', designerService);
    designerService.$inject = ['$rootScope', '$http', 'Designer'];

    function designerService(rootScope, $http, Designer) {
        return {
            getDesignerInformation : function (designerId) {
                return Designer.getDesignerInformation({designerId: designerId}).$promise;
            }
        }
    }
})();