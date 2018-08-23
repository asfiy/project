package com.domain.project

import org.codehaus.groovy.grails.web.json.JSONObject

import javax.servlet.http.HttpServletResponse

class LoginController {
    static responseFormats = ['json']

    def index() {}

    def authAjax = {
        response.sendError HttpServletResponse.SC_UNAUTHORIZED
    }

    def designerLogin(){
        def result
        DesignerInformation designerInformation
        def loginInformation = new JSONObject(request.JSON)
        designerInformation = DesignerInformation.findByUserName(loginInformation.userName)
        if(designerInformation){
            if(designerInformation.password == loginInformation.password){
                result = [success:true,designerInformation:designerInformation]
            }else{
                result = [success:false,errors:"Invalid UserName and Password"]
            }
        }else{
            result = [success:false,errors:"Invalid Password"]
        }
        respond result
    }

    def userLogin(){
        def result
        User userInformation
        def loginInformation = new JSONObject(request.JSON)
        userInformation = User.findByUserName(loginInformation.userName)
        if(userInformation){
            if(userInformation.password == loginInformation.password){
                result = [success:true,userInformation:userInformation]
            }else{
                result = [success:false,errors:"Invalid UserName and Password"]
            }
        }else{
            result = [success:false,errors:"Invalid Password"]
        }
        respond result
    }

    def getUserInfo(){
        def result
        User userInformation
        def userName = new JSONObject(request.JSON)
        userInformation = User.findByUserName(loginInformation.userName)
        if(userInformation){
                result = [success:true,userInformation:userInformation]
        }else{
                result = [success:false,errors:"Invalid UserName and Password"]
        }
        respond result
    }
}
