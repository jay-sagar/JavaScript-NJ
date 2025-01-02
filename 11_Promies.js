// const promise = createOrder(card);
// {data: undefined}

// A promise is an object representing the eventual completion or failure of an asynchronous operation.
// promise create a object that is undefined at the start and then it will be resolved with the data.

// promise are immutable, once resolved it can't be changed.

const GITHUB_API = "https://api.github.com/users/jay-sagar";

const user = fetch(GITHUB_API)
.then(response => response.json()).then(data => console.log(data));

createOrder(cart)
.then(function () {
    return proceedToPayment();
})
.then(function() {
    return showOrderSummary();
})
.then(function() {
    return updateWallet();
})