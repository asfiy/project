package com.domain.project

class Cart {

    String price
    String designerId
    String expectedDeliveryDate

    User user

    OrderStatus orderStatus

    ProductInformation productInformation
    String sizeSelected

    static constraints = {
        designerId(nullable: true)
        expectedDeliveryDate(nullable: true)
        price(nullable: true)
    }
}
