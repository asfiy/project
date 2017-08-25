package com.domain.project

class OrderStatus {

    String status

    final static String NEW = "New"
    final static String IN_PROGRESS = "In Progress"
    final static String DELIVERED = "Delivered"
    final static String DISPATCHED = "Dispatched"
    final static String CANCELLED = "Cancelled"
    final static String IN_TRANSIT = "In Transit"
    final static String CART = "Cart"


    static constraints = {
    }
}
