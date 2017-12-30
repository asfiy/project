package com.domain.project

class ProductImages {

    String fileName
    String contentType
    String fileUrl
    Boolean intialImage
    static  belongsTo = [ProductInformation]
    static constraints = {
        //TODO: add checkbox on upload screen and make it mandatory
        intialImage nullable: true
    }
    static mapping = {
        tablePerHierarchy true
    }
}
