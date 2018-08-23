
package com.domain.project

import grails.converters.JSON
import org.codehaus.groovy.grails.web.json.JSONObject
import org.springframework.web.multipart.commons.CommonsMultipartFile

import javax.imageio.ImageIO
import java.awt.image.BufferedImage

class ProductController {
    static responseFormats = ['json']
    def productService
    def index() {}

    def saveProductInformation(){
        def req = new JSONObject(params.req)
        def productImages = params.list("products")[0]
        ProductInformation productInformation = new ProductInformation()
        bindData(productInformation,req)
        if(req.sizes){
            req.sizes.each{ size ->
                if(size=='xs'){
                    productInformation.xs = true
                }else if(size=='s'){
                    productInformation.s = true
                }else if(size=='m'){
                    productInformation.m = true
                }else if(size=='l'){
                    productInformation.l = true
                }else if(size=='xl'){
                    productInformation.xl = true
                }else if(size=='xxl'){
                    productInformation.xxl = true
                }
            }
        }
        productImages.each { product ->
            CommonsMultipartFile file = product.value
            ProductImages productImage = new ProductImages()

            File inputFile = new File("..\\client\\source\\images\\ProductImages\\"+file.fileItem.fileName)
            InputStream arrayInputStream = new ByteArrayInputStream(file.bytes);
            BufferedImage bImageFromConvert = ImageIO.read(arrayInputStream);

            ImageIO.write(bImageFromConvert, "jpg", inputFile);
            arrayInputStream.close()
            productImage.fileUrl ="images\\ProductImages\\" +file.fileItem.fileName
            productImage.contentType = file.contentType
            productImage.fileName = file.fileItem.fileName
            productInformation.addToProductImages(productImage)
        }
        productInformation.showOnDesktop = false
        productInformation.designerId ="asfiya"
        productInformation.category = Category.findByCategoryName(req.category)
        respond productService.saveProductInformation(productInformation)
    }


    def retrieveProducts(){
        def result = [:]
        def req = new JSONObject(request.JSON)
        List<ProductImages> productImagesList =[]
        List<ProductInformation> productInformationList = ProductInformation.findAllByDesignerId(req.designerId)
        productInformationList.each{ productInformation ->
            productInformation.productImages.each { productImage ->
                productImagesList.add(productImage)
            }
        }
        result = [productInformation:productInformationList,productImage:productImagesList]
        render result as JSON
    }

    def retrieveProductsBasedOnCategory(){
        List<ProductInformation> productInformationList = ProductInformation.findAllByCategory(Category.findByCategoryName(params.category))
        render productInformationList as JSON
    }

    def retrieveProductsBasedOnDesigner(){
        List<ProductInformation> productInformationList = ProductInformation.findAllByDesignerId(params.designerId)
        render productInformationList as JSON
    }

    def getProductById(){
        ProductInformation selectedProduct = ProductInformation.findById(params.productId)
        render selectedProduct as JSON
    }

    def getProductRemovingReasons(){
        List<ProductRemoveReason> productRemoveReasonList = ProductRemoveReason.findAll()
        render productRemoveReasonList as JSON
    }

    def removeProduct(){
        def result = [:]
        def req = new JSONObject(request.JSON)
        ProductInformation productInformation = ProductInformation.findById(req.productId)
        ProductRemoveReason productRemoveReason = ProductRemoveReason.findById(req.removeReasonId)
        productInformation.productRemoveReason = productRemoveReason
        productInformation.isProductRemoved = true
        respond productService.saveProductInformation(productInformation)
    }

    def getHomePageImage(){
        HomePageImages homePageImage = HomePageImages.findByStartDateGreaterThanEqualsAndEndDateLessThanEquals(new Date(),new Date())
        def result = [homePageImage:homePageImage,success :true]
        render result as JSON
    }

    def getWeeklyDesigns(){
        List<WeeklyDesigns> weeklyDesigns = WeeklyDesigns.findAllByWeekStartDateLessThanEqualsAndWeekEndDateGreaterThanEquals(new Date(),new Date())
        render weeklyDesigns as JSON
    }

    def getSimilarProducts(){
        ProductInformation selectedProduct = ProductInformation.findById(params.productId)
        List<ProductInformation> similarProductList = ProductInformation.findAllByCategory(Category.findByCategoryName(selectedProduct.category.categoryName),[max: 10])
        render similarProductList as JSON
    }

    def submitUserReview(){
        ProductUserReview productUserReview = new ProductUserReview()
        productUserReview.userReviewComments = params.userReviewComments
        productUserReview.productInformation =ProductInformation.findById(params.productId)
        productUserReview.reviewDate = new Date()
        //add user here
        respond productService.submitUserReview(productUserReview)
    }
}
