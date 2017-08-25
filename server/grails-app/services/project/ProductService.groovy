package project

import grails.transaction.Transactional
import com.domain.project.ProductInformation

@Transactional
class ProductService {
    def messageSource
    def serviceMethod() {

    }
    def saveProductInformation(ProductInformation productInformation){
        def result = [:]
        if (productInformation.hasErrors() == false && productInformation.validate() &&  productInformation.save(failOnError: true,flush: true)) {
            result = [request: productInformation, success: true]
        } else {
            result = [errors: productInformation.errors.allErrors.collect {
                messageSource.getMessage(it, null)
            }, success      : false]
        }
        return result

    }

}
