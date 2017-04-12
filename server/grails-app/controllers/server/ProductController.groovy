package server

import org.codehaus.groovy.grails.web.json.JSONObject

class ProductController {

    def index() {}

    def saveProductInformation(){
        def information = new JSONObject(request.JSON)
        println information
    }
}
