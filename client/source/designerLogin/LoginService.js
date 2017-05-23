/**
 * Created by ashaik on 5/6/2017.
 */
'use strict';
angular.module('project').factory('LoginService',loginService);
loginService.$inject=['sessionService'];

function loginService(sessionService) {
    return{
        isLoggedIn :function(){
        if(sessionService.get('user')){
            return true;
        }
        }
    }
}