package server
import static org.springframework.http.HttpStatus.OK

class RegistrationController {
    static responseFormats = ['json']

    def registrationService
    def index() { }

    def register() {
        log.error(request.JSON)
        registrationService.registerDesigner(request.JSON)
        respond status:OK
    }
}
