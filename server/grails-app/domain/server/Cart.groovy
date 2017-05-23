package server

class Cart {

    String price
    String designerId
    String expectedDeliveryDate

    UserInformation userInformation

    OrderStatus orderStatus

    ProductInformation productInformation
    String sizeSelected

    static constraints = {
        designerId(nullable: true)
        expectedDeliveryDate(nullable: true)
        price(nullable: true)
    }
}
