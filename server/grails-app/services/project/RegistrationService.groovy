package project

import grails.transaction.Transactional

@Transactional
class RegistrationService {

    def registerDesigner(designerInformation) {
        def result=[:]
        if(designerInformation.validate() && designerInformation.save(failOnError:true,flush:true)){
            result = [designerInformation:designerInformation,success:true]
        }else{
            result = [success: false]
        }
        return result
    }
}
