import server.RegistrationController

class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }
        "/registration/registerDesigner"(controller: 'registration',action: 'registerDesigner')
        "/login/designerLogin"(controller: 'login',action: 'designerLogin')
        "/products/saveProductInformation"(controller: 'product',action: 'saveProductInformation')

        "/"(view:"/index.html")
        "500"(view:'/error')
	}
}
