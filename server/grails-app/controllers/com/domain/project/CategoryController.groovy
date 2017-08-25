package com.domain.project

class CategoryController {
    static responseFormats = ['json']


    def index() {}

    def getCategories(){
        def categoryList = Category.findAll()
        respond categoryList
    }
}

