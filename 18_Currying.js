// Currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument.
// in a simple way, currying is a process of converting a function that takes multiple arguments into a function that takes them one at a time.
let multiply = function (x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

// using function closure

let multiply2 = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyByTwo2 = multiply2(2);
multiplyByTwo2(5);

let multiplyByThree2 = multiply2(3);
multiplyByThree2(5);
