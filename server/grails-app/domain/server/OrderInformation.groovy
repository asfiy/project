package server

class OrderInformation {

    String price
    String designerId
    String expectedDeliveryDate
    String actualDeliveryDate
    String isAmountRecieved
    String isOrderCancelled
    UserInformation userInformation
    String isGiftWrappingNeeded
    OrderStatus orderStatus
    FormOfPayment formOfPayment
    ProductInformation productInformation
    String sizeSelected
    DeliveryAddress deliveryAddress

    static constraints = {
        designerId(nullable: true)
        expectedDeliveryDate(nullable: true)
        actualDeliveryDate(nullable: true)
        isAmountRecieved(nullable: true)
        isOrderCancelled(nullable: true)
        formOfPayment(nullable: true)
        isGiftWrappingNeeded(nullable: true)
        price(nullable: true)
    }
}
