package com.domain.project

class User {

    String userName
    String password

    static hasMany = [deliveryAddresses:DeliveryAddress]
    static mapping = {
        deliveryAddresses(column: 'user_id', joinTable: false, cascade: 'all-delete-orphan', fetch: 'join')
        tablePerSubclass true
    }
}
