package com.domain.project

import org.codehaus.groovy.grails.web.json.JSONObject

class CartController {
    static responseFormats = ['json']

    def getCartItems() {
        def req = new JSONObject(request.JSON)
        println req.loggedInUser;

        def cartList = Cart.findAllByUser(User.findByUserName(req.loggedInUser))
        def result =[:]
        result = [success:true,cartList:cartList]
        respond result
    }
}
