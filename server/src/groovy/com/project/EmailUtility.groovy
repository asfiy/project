package com.project

/**
 * Created by ashaik on 10/21/2017.
 */
class EmailUtility {

    def mailService

    def sendEmail(emailContent) {
        mailService.sendMail {
            multipart false
            async true
            from "asfiya.12791@gmail.com"
            to emailContent.toAddress
            subject emailContent.subject
            html emailContent.body
        }
    }
}
