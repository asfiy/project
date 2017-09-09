import com.domain.project.RegistrationController

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
        "/products/retrieveProductsBasedOnCategory"(controller: 'product',action: 'retrieveProductsBasedOnCategory')
        "/products/getProductById"(controller: 'product',action: 'getProductById')

        "/registration/registerUser"(controller: 'registration',action: 'registerUser')
        "/login/userLogin"(controller: 'login',action: 'userLogin')

        "/orders/buyNow"(controller: 'Order',action: 'buyNow')
        "/orders/addToCart"(controller: 'Order',action: 'addToCart')
        "/cart/getCartItems"(controller: 'Cart',action: 'getCartItems')
        "/category/getCategories"(controller: 'Category',action: 'getCategories')
        "/"(view:"/index.html")
        "500"(view:'/error')
	}
}
