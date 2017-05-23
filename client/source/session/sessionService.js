/**
 * Created by ashaik on 5/6/2017.
 */
'use strict';
angular.module('project').factory('sessionService',sessionService);
sessionService.$inject=[];

function sessionService(){
    return{
            set: function(key,value){
                return sessionStorage.setItem(key,value);
            },
        get: function(key){
            return sessionStorage.getItem(key);

        },destroy: function(key){
            return sessionStorage.removeItem(key);
        }
    };
};
