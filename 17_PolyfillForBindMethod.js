let name = {
    firstName: "Jay",
    lastName: "Sagar",
}

let printName = function (hometown, state, country) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state + ", " + country);
}

let printMyName = printName.bind(name, "Mumbai", "Maharashtra");
printMyName("India");

// Polyfill for bind method in JavaScript
Function.prototype.myBind = function (...args) {
    let obj = this;
    let params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printMyName2 = printName.myBind(name, "Mumbai", "Maharashtra");
printMyName2("India");