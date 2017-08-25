package com.domain.project

class ProductInformation {

    String productCode
    String designerId
    String price
    Boolean xs = false
    Boolean s = false
    Boolean m = false
    Boolean l = false
    Boolean xl = false
    Boolean xxl = false
    String deliveryTime
    String fabric
    String shortDescription
    String description
    String care
    Boolean showOnDesktop
    Set productImages =[]
    Category category

    static hasMany = [productImages : ProductImages]

    static constraints = {
    }

    static mapping = {
        productImages(column: 'designer_id', joinTable: false, cascade: 'all-delete-orphan')
        tablePerSubclass true
    }
}
