package com.domain.project

import org.codehaus.groovy.grails.web.json.JSONObject

import javax.persistence.criteria.Order

class OrderController {
    static responseFormats = ['json']

    def orderService
    def index() {}

    def buyNow(){
        def req = new JSONObject(request.JSON)
        println req.productId;
        ProductInformation productInformation = ProductInformation.findById(req.productId);
        User userInformation = User.findByUserName(req.login)
        OrderInformation orderInformation = new OrderInformation()
        orderInformation.user = userInformation
        orderInformation.productInformation = productInformation
        orderInformation.sizeSelected =req.sizeSelected
        orderInformation.orderStatus = OrderStatus.findByStatus(OrderStatus.NEW)

        respond orderService.productOrder(orderInformation)
    }

    def addToCart(){
        def req = new JSONObject(request.JSON)
        println req.productId;
        ProductInformation productInformation = ProductInformation.findById(req.productId);
        User userInformation = User.findByUserName(req.login)
        Cart cart = new Cart()
        cart.user = userInformation
        cart.productInformation = productInformation
        cart.sizeSelected =req.sizeSelected

        respond orderService.addToCart(cart)
    }

    def getActiveOrdersForDesigners(){
        List<OrderInformation> activeOrdersList = OrderInformation.findAllByDesignerId(params.designerId)
        respond activeOrdersList
    }

    def updateProcessStarted(){
        def req = new JSONObject(request.JSON)

        OrderInformation orderInformation = OrderInformation.findById(req.orderId)
        orderInformation.orderStatus = OrderStatus.findByStatus(req.orderStatus)
        respond orderService.updateProcessStarted(orderInformation)
    }

}
