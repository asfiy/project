import com.domain.project.Role
import com.domain.project.User
import com.domain.project.UserRole
import grails.converters.JSON
import com.domain.project.ProductImages

class BootStrap {

    def init = { servletContext ->

      /*  def me = new User('test', 'test1').save()
            def userRole = new Role('ROLE_USER').save()

        UserRole.create me, userRole

        UserRole.withSession {
            it.flush()
            it.clear()
        }*/


    }
    def destroy = {
    }
}
