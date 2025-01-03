let name = {
    firstName: "Jay",
    lastName: "Shah",
    printFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}
name.printFullName();

// generally we do this
let printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown, ", " + state);
}

let name2 = {
    firstName: "Deepika",
    lastName: "Padukone",
}

// function borrowing 
// call method => call the function with the object passed as argument
name.printFullName.call(name2);

// first argument is always the object and then the arguments of the function
printFullName.call(name2, "Bangalore", "Karnataka");

// apply method
// apply method => call the function with the object passed as argument
// but the arguments are passed as an array
printFullName.apply(name2, ["Bangalore", "Karnataka"]);

// bind method
// bind method => returns a new function
// bind method => call the function with the object passed as argument
let printMyName = printFullName.bind(name2, "Bangalore", "Karnataka");
console.log(printMyName);
printMyName();