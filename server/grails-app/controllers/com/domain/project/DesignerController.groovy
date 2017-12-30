package com.domain.project

import org.codehaus.groovy.grails.web.json.JSONObject

class DesignerController {
    static responseFormats = ['json']

    def getDesignerInformation() {
        def req = new JSONObject(request.JSON)
        Long designerId = Long.parseLong(params.designerId)
        DesignerInformation designerInformation = DesignerInformation.findById(designerId)
        respond designerInformation
    }
}
