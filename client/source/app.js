/**
 * Created by ashaik on 3/24/2017.
 */
(function() {
    'use strict';

    var REST_URL = "/api", moduleName = "project";
    angular.module(moduleName, [
        'ui.router','ngResource','ng.shims.placeholder','ngFileUpload'
    ]);
    var app = angular.module(moduleName);
        angular.element(document).ready(function() {
            angular.bootstrap(document, [moduleName]);
        });

})();