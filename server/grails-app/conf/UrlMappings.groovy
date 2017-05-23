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
        "/products/retrieveProducts"(controller: 'product',action: 'retrieveProducts')
        "/registration/registerUser"(controller: 'registration',action: 'registerUser')
        "/login/userLogin"(controller: 'login',action: 'userLogin')

        "/orders/buyNow"(controller: 'Order',action: 'buyNow')
        "/orders/addToCart"(controller: 'Order',action: 'addToCart')

        "/"(view:"/index.html")
        "500"(view:'/error')
	}
}
