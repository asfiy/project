package com.domain.project

import grails.converters.JSON
import org.codehaus.groovy.grails.web.json.JSONObject

class CartController {
    static responseFormats = ['json']

    def getCartItems() {
        def req = new JSONObject(request.JSON)
        println params.userId;

        def cartList = Cart.findAllByUser(User.findByUserName(params.userId))
        def result =[:]
        result = [success:true,cartList:cartList]
        render cartList as JSON
    }
}
