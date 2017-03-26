import server.RegistrationController

class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }
        "/registration/registerDesigner"(controller: 'registration',action: 'register')
        "/"(view:"/index")
        "500"(view:'/error')
	}
}
