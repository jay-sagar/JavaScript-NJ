"use strict";

// this is global space

console.log(this); 
// global object => for browser it is window object
// for node it is globalObject

// this inside a function

function x() {
    // the value depends on strict mode / non-strict mode
    console.log(this);
}

// this inside non-strict mode - (this substitution)
// if the value of this keyword is undefined or null,
//  it will be replaced with globalObject 
// only in non-strict mode

// this keyword value depends on how function is called (window)

x(); // undefined 
window.x(); // window

// this inside a object's method

const student = { // in object this refers to the object itself
    name: "Jay",
    printName: function () { // function inside object is called method
        console.log(this);
        console.log(this.name);
    }
}
student.printName(); // obj

const student2 = {
    name: "Deepika",
}

// call apply bind methods (sharing methods)

student.printName.call(student2); // call method take this as argument and replace it with the object passed
// so now you override the this keyword with the object passed
student.printName();


// this inside arrow function

const obj = {
    a: 10,
    x: () => { // arrow function doesn't have this keyword of its own they inherit this from the parent (enclosing lexical context)
        console.log(this);
    }
}
obj.x(); // obj

const obj2 = {
    a: 20,
    x: function () {
        const y = () => {
            console.log(this);
        }
        y();
    }
}
obj2.x(); // obj2

const obj3 = {
    a: 30,
    x: function () {
        const y = () => {
            function z() {
                console.log(this);
            }
            z();
        }
        y();
    }
}
obj3.x(); // undefined

// this in DOM
// this inside event listener is the element that triggered the event
// this inside DOM elements => reference to HTML element

// this inside class, constructor, static method, instance method
// this inside class refers to the object that is created from the class