import com.domain.project.User
import grails.converters.JSON
import com.domain.project.ProductImages

class BootStrap {

    def init = { servletContext ->
        def person =new User(username:"test", password:"test123")
        person.save()
    }
    def destroy = {
    }
}
