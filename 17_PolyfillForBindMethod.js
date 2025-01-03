let name = {
    firstName: "Jay",
    lastName: "Sagar",
}

let printName = function () {
    console.log(this.firstName + " " + this.lastName);
}

let printMyName = printName.bind(name);
printMyName();