/**
 * Created by ashaik on 4/13/2017.
 */

angular.module('project').factory('UploadProducts', uploadProductsresource);
uploadProductsresource.$inject = [ '$resource', '$http'];

function uploadProductsresource( resource, $http) {
    var _transformRequest =  function (origData, headerGetter) {
        var formData = new FormData();
        var origTransformRequest = $http.defaults.transformRequest;
        var data = origData.formfields;
        if (data) {
            for (var key in data) {
                var val = data[key];
                if (typeof origTransformRequest == 'function') {
                    val = origTransformRequest(val, headerGetter);
                } else {
                    for (var i = 0; i < origTransformRequest.length; i++) {
                        var transformFn = origTransformRequest[i];
                        if (typeof transformFn == 'function') {
                            val = transformFn(val, headerGetter);
                        }
                    }
                }
                if (val != undefined) formData.append(key, val);
            }
        }
        if (origData.fileArrayObj != null) {
            for (var property in origData.fileArrayObj) {
                var fileFormName=origData.fileArrayObj[property].fileFormDataName || 'file';
                if (Object.prototype.toString.call(origData.fileArrayObj[property].file) === '[object Array]') {
                    var isFileFormNameString = Object.prototype.toString.call(fileFormName) === '[object String]';
                    for (var i = 0; i < origData.fileArrayObj[property].file.length; i++) {
                        formData.append(isFileFormNameString ? fileFormName : fileFormName[i], origData.fileArrayObj[property].file[i],
                            (origData.fileArrayObj[property].fileName && origData.fileArrayObj[property].fileName[i]) || origData.fileArrayObj[property].file[i].name);
                    }
                } else {
                    formData.append(fileFormName, origData.fileArrayObj[property].file, origData.fileArrayObj[property].fileName || origData.fileArrayObj[property].file.name);

                }
            }
        }
        return formData;
    };
    return resource('/server', {requestId:'@requestId'},  {
        process : {
            method: 'POST',
            url: '/server/products/saveProductInformation',
            headers: {'Content-Type': undefined},
            transformRequest: _transformRequest
        }
    });
}