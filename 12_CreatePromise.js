const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

promise
.then(function (orderId) {
    console.log("Order created with id: ", orderId);
    return orderId;
})
.then(function (orderId) {
    return proceedToPayment(orderId);
})
.then(function(paymentInfo) {
    console.log(paymentInfo);
    
})
.catch(function(err) {
    console.log(err.message);
})
// catch method works only for code which is above it.

function createOrder() {
    const pr = new Promise(function(resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid")
            reject(err);
        }
        // logic for createOrder
        const orderId = "1234";
        if (orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
        }
    })

    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment successful");
    });
}

function validateCart() {
    return true;
}