package server

import org.apache.catalina.User
import org.codehaus.groovy.grails.web.json.JSONObject

import static org.springframework.http.HttpStatus.OK

class LoginController {
    static responseFormats = ['json']

    def index() {}

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
        UserInformation userInformation
        def loginInformation = new JSONObject(request.JSON)
        userInformation = UserInformation.findByUserName(loginInformation.userName)
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
}
