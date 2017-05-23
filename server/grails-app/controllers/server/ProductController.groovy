
package server

import grails.converters.JSON
import org.codehaus.groovy.grails.web.json.JSONObject
import org.springframework.web.multipart.commons.CommonsMultipartFile

import javax.imageio.ImageIO
import java.awt.image.BufferedImage

import static org.springframework.http.HttpStatus.OK

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

            File inputFile = new File("C:\\Users\\ashaik\\Asfiya\\personal\\project\\project\\client\\source\\images\\ProductImages\\"+file.fileItem.fileName)
            InputStream arrayInputStream = new ByteArrayInputStream(file.bytes);
            BufferedImage bImageFromConvert = ImageIO.read(arrayInputStream);

            ImageIO.write(bImageFromConvert, "jpg", inputFile);
            arrayInputStream.close()
            productImage.fileUrl =inputFile
            productImage.contentType = file.contentType
            productImage.fileName = file.fileItem.fileName
            productInformation.addToProductImages(productImage)
        }

        productInformation.designerId ="asfiya"
        render productService.saveProductInformation(productInformation)
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
}
