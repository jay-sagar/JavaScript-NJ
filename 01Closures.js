// Closure is bundle of lexical environment with function

// in javascript you can return function and pass function in the parameter as well
function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    a = 100; // now z() will print a = 100 as it store the reference not value
    return y;
}

var z = x();
console.log(z);
// even though function doesn't have value of "a" but it will print it because it remember it's parent lexical scope
z();
