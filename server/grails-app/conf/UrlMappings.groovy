import com.domain.project.RegistrationController

class UrlMappings {

	static mappings = {
        "/api/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }
        "/registration/registerDesigner"(controller: 'registration',action: 'registerDesigner')
        "/login/designerLogin"(controller: 'login',action: 'designerLogin')
        //"/login/auth"(controller: 'login',action: 'auth')
        "/products/saveProductInformation"(controller: 'product',action: 'saveProductInformation')
        "/products/retrieveProducts"(controller: 'product',action: 'retrieveProducts')
        "/products/retrieveProductsBasedOnCategory"(controller: 'product',action: 'retrieveProductsBasedOnCategory')

        "/products/retrieveProductsBasedOnDesigner"(controller: 'product',action: 'retrieveProductsBasedOnDesigner')
        "/products/getProductById"(controller: 'product',action: 'getProductById')
        "/products/getProductRemovingReasons"(controller: 'product',action: 'getProductRemovingReasons')
        "/products/removeProduct"(controller: 'product',action: 'removeProduct')
        "/products/getHomePageImage"(controller: 'product',action: 'getHomePageImage')
        "/products/getWeeklyDesigns"(controller: 'product',action: 'getWeeklyDesigns')
        "/products/getSimilarProducts"(controller: 'product',action: 'getSimilarProducts')
        "/products/submitUserReview"(controller: 'product',action: 'submitUserReview')

        "/registration/registerUser"(controller: 'registration',action: 'registerUser')
        "/login/userLogin"(controller: 'login',action: 'userLogin')

        "/orders/buyNow"(controller: 'Order',action: 'buyNow')
        "/orders/addToCart"(controller: 'Order',action: 'addToCart')
        "/orders/getActiveOrdersForDesigners"(controller: 'Order',action: 'getActiveOrdersForDesigners')
        "/orders/updateProcessStarted"(controller: 'Order',action: 'updateProcessStarted')

        "/cart/getCartItems"(controller: 'Cart',action: 'getCartItems')
        "/category/getCategories"(controller: 'Category',action: 'getCategories')
        "/"(view:"/index.html")
        "/"(uri: '/index.html')
        "500"(view:'/error')
	}
}
