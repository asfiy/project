package server

class ProductInformation {

    String productCode
    String designerId
    String price
    Boolean xs
    Boolean s
    Boolean m
    Boolean l
    Boolean xl
    Boolean xxl
    String deliveryTime
    String fabric
    String shortDescription
    String description
    String care

    static hasMany = [productImages : ProductImages]

    static constraints = {
    }
}
