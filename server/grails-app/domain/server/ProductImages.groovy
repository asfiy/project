package server

class ProductImages {

    String fileName
    String contentType
    String fileUrl
    static  belongsTo = [ProductInformation]
    static constraints = {
    }
    static mapping = {
        tablePerHierarchy true
    }
}
