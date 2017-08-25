/**
 * Created by ashaik on 3/24/2017.
 */
(function() {
    'use strict';

    var REST_URL = "/api", moduleName = "project";
    angular.module(moduleName, ['ngMaterial','ui.router','ngResource','ngFileUpload','ng.shims.placeholder','checklist-model','material.svgAssetsCache']);

    var app = angular.module(moduleName);
        angular.element(document).ready(function() {
            angular.bootstrap(document, [moduleName]);
        });

    app.run(appSetup);
    appSetup.$inject = ['$rootScope', '$location','LoginService', '$state','CategoryService'];
        function appSetup(root,$location,loginService,state,categoryService){
            categoryService.setCategories();

            console.log("path" +$location.path());
        var designerRoutesPermission=['/productUpload'];
            var userRoutesPermission=['/cart'];

            root.$on('$stateChangeStart',function(event, toState){
            if(designerRoutesPermission.indexOf($location.path()) ==0 && !loginService.isLoggedIn()){
                if(toState.name==='designerLogin')
                return;
                state.go('designerLogin');
                event.preventDefault();

            }
            if(userRoutesPermission.indexOf($location.path()) ==0 && !loginService.isLoggedIn()){
                if(toState.name==='userLogin')
                    return;
                state.go('userLogin');
                event.preventDefault();
            }
        });
    };

})();