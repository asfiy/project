package com.domain.project

class ProductImages {

    String fileName
    String contentType
    String fileUrl
    Boolean intialImage
    static  belongsTo = [ProductInformation]
    static constraints = {
    }
    static mapping = {
        tablePerHierarchy true
    }
}
