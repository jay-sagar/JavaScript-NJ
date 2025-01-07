// Prototype chain => array.__proto__ = Array.prototype
// array.__proto__.__proto__ = Object.prototype
// array.__proto__.__proto__.__proto__ = null
// function.__proto__ = Function.prototype
// function.__proto__.__proto__ = Object.prototype
// function.__proto__.__proto__.__proto__ = null

// Every function, array are basically objects in javascript

let arr = ["jay", "smith"];

let object = {
    name: "jay",
    city: "almora",
    getIntro: function() { 
        console.log(this.name + " from " + this.city);
    }
}

let object2 = {
    name: "smith"
}

object2.__proto__ = object;
object.getIntro();

Function.prototype.mybind = function() {
    console.log("mybind");
}
function fun() {}

