package project

import com.project.EmailContent
import grails.transaction.Transactional

@Transactional
class RegistrationService {

    def emailUtility

    def registerDesigner(designerInformation) {
        def result=[:]
        if(designerInformation.validate() && designerInformation.save(failOnError:true,flush:true)){
            result = [designerInformation:designerInformation,success:true]
        }else{
            result = [success: false]
        }
        return result
    }

    def registerUser(userInformation) {
        def result=[:]
        if(userInformation.validate() && userInformation.save(failOnError:true,flush:true)){
            result = [userInformation:userInformation,success:true]
        }else{
            result = [success: false]
        }
        return result
    }

    def sendRegistrationVerificationCode(designerInformation){
        EmailContent emailContent = new EmailContent()
        emailContent.subject = "Registration Successful"
        emailContent.body = "Thank you for registering with Cortuaarra. Please provide following code in the Verification Code box. "+designerInformation.verificationCode.toString()
        emailContent.toAddress = designerInformation.emailAddress
        emailUtility.sendEmail(emailContent)
    }

    private char[] verificationCodeGeneration() {
        String numbers = "0123456789";

        // Using random method
        Random rndm_method = new Random();

        char[] verificationCode = new char[4];

        for (int i = 0; i < 4; i++) {
            // Use of charAt() method : to get character value
            // Use of nextInt() as it is scanning the value as int
            verificationCode[i] =
                    numbers.charAt(rndm_method.nextInt(numbers.length()));
        }
        return verificationCode
    }

}
