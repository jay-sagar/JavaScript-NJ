// There are 6 static methods of promise class

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 1")
    }, 1000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Value 2")
        reject(new Error("Error"))
    }, 2000)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 3")
    }, 3000)
})

// p1.then((value) => {
//     console.log(value)
// })

// p2.then((value) => {
//     console.log(value)
// })

// p3.then((value) => {
//     console.log(value)
// })

// Promise.all will reject if there is error
// let promise_all = Promise.all([p1, p2, p3]) // when all promises resolve then it will execute

// It will execute with error with status and reason
// let promise_all = Promise.allSettled([p1, p2, p3])

// Waits for the first promise to settle and it's result/error becomes the outcome
// let promise_all = Promise.race([p1, p2, p3])

// waits for the first promise to fulfill (& not rejected), and its result becomes the outcome
// throws aggregate error if all the promises are rejected
// let promise_all = Promise.any([p1, p2, p3])

// let promise_all = Promise.resolve(6) // 

let promise_all = Promise.reject(new Error("Error!"))
promise_all.then((value) => {
    console.log(value)
})

