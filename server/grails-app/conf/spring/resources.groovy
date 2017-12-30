import com.project.EmailUtility

// Place your Spring DSL code here
beans = {

    emailUtility(EmailUtility) {
        mailService = ref('mailService')
    }
}
