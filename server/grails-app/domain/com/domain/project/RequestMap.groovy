package com.domain.project


    class RequestMap {

        String url
        String configAttribute

        static mapping = {
            cache true
        }

        static constraints = {
            url blank: false
            configAttribute blank: false
        }
}
