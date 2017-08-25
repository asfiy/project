package com.domain.project

class DeliveryAddress {

    String address
    String city
    String country
    String pinCode

    static belongsTo=[User]
    static constraints = {
    }
}
