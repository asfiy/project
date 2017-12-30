package com.domain.project

import com.sun.org.apache.xpath.internal.operations.Bool

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
    Boolean isProductRemoved
    ProductRemoveReason productRemoveReason

    static hasMany = [productImages : ProductImages]

    static constraints = {
        isProductRemoved nullable: true
        productRemoveReason nullable: true
        //TODO: add field on ui and remove this
        showOnDesktop nullable: true
    }

    static mapping = {
        productImages(column: 'product_information_id', joinTable: false, cascade: 'all-delete-orphan')
        tablePerSubclass true
    }
}
