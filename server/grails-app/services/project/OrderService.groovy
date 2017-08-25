package project

import grails.transaction.Transactional
import com.domain.project.Cart
import com.domain.project.OrderInformation

@Transactional
class OrderService {

    def productOrder(OrderInformation orderInformation) {
        def result=[:]
        if(orderInformation.validate() && orderInformation.save(failOnError:true,flush:true)){
            result = [orderInformation:orderInformation,success:true]
        }else{
            result = [success: false]
        }
        return result
    }

    def addToCart(Cart cart) {
        def result=[:]
        if(cart.validate() && cart.save(failOnError:true,flush:true)){
            result = [cart:cart,success:true]
        }else{
            result = [success: false]
        }
        return result
    }
}
