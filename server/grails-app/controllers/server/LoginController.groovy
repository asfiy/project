package server

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
                result = [success:true]
            }else{
                result = [success:false,errors:"Invalid UserName and Password"]
            }
        }else{
            result = [success:false,errors:"Invalid Password"]
        }
        respond result
    }
}
