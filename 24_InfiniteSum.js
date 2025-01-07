let sum = function (a) {
    return function (b) {
        if (b) {
        return sum(a + b);
        } else {
            return a;
        }
    }
}

let sum2 = a => b => b ? sum(a + b) : a;

console.log(sum(1)(2)(3)(4)());
console.log(sum2(1)(2)(3)(4)());