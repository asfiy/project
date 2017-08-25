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
        registrationService.registerDesigner(designerInformation)
        respond status:OK
    }

    def registerUser() {
        User userInformation = new User()
        def information = new JSONObject(request.JSON)
        bindData(userInformation,information)
        registrationService.registerUser(userInformation)
        respond status:OK
    }

}
