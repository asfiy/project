package com.domain.project

class DesignerInformation {

    String userName
    String fullName
    String labelName
    String address
    Integer pinCode
    String city
    String state
    String country
    String mobileNumber
    String emailAddress
    String labelDescription
    Integer storeContactNumber
    String storeAddress
    String storeCity
    Integer storePinCode
    String storeCountry
    String panCardNumber
    String voterIDNumber
    String aadharCardNumber
    String password
    String verificationCode
    Boolean isVerified

    static constraints = {
        aadharCardNumber(nullable:true)
        voterIDNumber(nullable:true)
        panCardNumber(nullable:true)
        verificationCode(nullable:true)
        isVerified(nullable: true)
    }
}
