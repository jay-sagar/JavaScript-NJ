const cart = ["shoes", "pants", "kurta"];

// callback hell or pyramid of doom
// we gave control to the api to call the next function
// IOC => Inversion of Control means we are giving control to the api to call the next function
api.createOrder(cart, function () {
    
    api.proceedToPayment(function () {

        api.showOrderSummary(function () {
            
            api.updateWallet();
        })
    })
})