package com.domain.project

import org.codehaus.groovy.grails.web.json.JSONObject

import static org.springframework.http.HttpStatus.OK

class RegistrationController {
    static responseFormats = ['json']

    def registrationService
    def index() { }

    def registerDesigner() {
        DesignerInformation designerInformation = new DesignerInformation()
        def information = new JSONObject(request.JSON)
        bindData(designerInformation,information)
        char[] verificationCode = registrationService.verificationCodeGeneration()
        designerInformation.verificationCode = verificationCode.toString()
        def result = registrationService.registerDesigner(designerInformation)
        if(result.success){
            registrationService.sendRegistrationVerificationCode(designerInformation);
        }
        respond result
    }

    def registerUser() {
        User userInformation = new User()
        def information = new JSONObject(request.JSON)
        bindData(userInformation,information)
        registrationService.registerUser(userInformation)
        respond status:OK
    }

    def verifyCode(){
        def result=[:]
        def designerData = new JSONObject(request.JSON)
        DesignerInformation designerInformation = DesignerInformation.findById(designerData.id)
        if(designerData.verification.equals(designerInformation.verificationCode)){
            result.success = true
        }
        result.success = false
    }

    def designerVerification(){
        def data = new JSONObject(request.JSON)
        DesignerInformation  designerInformation = DesignerInformation.findById(data.id)
        bindData(designerInformation,data)
        def result = registrationService.registerDesigner(designerInformation)
        respond result
    }
}
