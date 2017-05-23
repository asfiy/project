package server

import org.codehaus.groovy.grails.web.json.JSONObject

import static org.springframework.http.HttpStatus.OK

class OrderController {
    def orderService
    def index() {}

    def buyNow(){
        def req = new JSONObject(request.JSON)
        println req.productId;
        ProductInformation productInformation = ProductInformation.findById(req.productId);
        UserInformation userInformation = UserInformation.findByUserName(req.login)
        OrderInformation orderInformation = new OrderInformation()
        orderInformation.userInformation = userInformation
        orderInformation.productInformation = productInformation
        orderInformation.sizeSelected =req.sizeSelected
        orderInformation.orderStatus = OrderStatus.findByStatus(OrderStatus.NEW)

        render orderService.productOrder(orderInformation)
    }

    def addToCart(){
        def req = new JSONObject(request.JSON)
        println req.productId;
        ProductInformation productInformation = ProductInformation.findById(req.productId);
        UserInformation userInformation = UserInformation.findByUserName(req.login)
        Cart cart = new Cart()
        cart.userInformation = userInformation
        cart.productInformation = productInformation
        cart.sizeSelected =req.sizeSelected
        cart.orderStatus = OrderStatus.findByStatus(OrderStatus.CART)

        render orderService.addToCart(cart)

    }
}
