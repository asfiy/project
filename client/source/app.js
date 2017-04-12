/**
 * Created by ashaik on 3/24/2017.
 */
(function() {
    'use strict';

    var REST_URL = "/api", moduleName = "project";
    angular.module(moduleName, [
        'ui.router','ngResource','ngFileUpload','ng.shims.placeholder','checklist-model'
    ]);
    var app = angular.module(moduleName);
        angular.element(document).ready(function() {
            angular.bootstrap(document, [moduleName]);
        });

})();