// 1.  What is Function Statement ?
// A.  A normal function that we create using Naming convention. & By this we can do the Hoisting.
function xyz() {
  console.log("Function Statement");
}

// 2.  What is Function Expression ?
// A.  When we assign a function into a variable that is Function Expression. & We can not do Hoisting by this becz it acts like variable.
var a = function () {
  console.log("Function Expression");
};

// 3.  What is Anonymous Function ?
// A.  A Function without the name is known as Anonymous Function. & It is used in a place where function are treated as value.
//   function(){
//  }

// 4.  What is Named Function Expression ?
// A.  A function with a name is known as Named Function Expression.
var a = function xyx() {
  console.log("Names Function Expression");
};

// 5.  Difference b/w Parameters and Arguments ?
// A.  When we creating a function  & put some variables in this ( ) that is our Parameters.
function ab(param1, param2) {
  console.log("FCF");
}
//    & When we call this function & pass a variable in this ( ) that is our Arguments
ab(4, 5);

// 6.  What is First Class Function Or First class citizens?
// A.   The Ability of use function as value,
// *     Can be passed as an Argument,
// *     Can be executed inside a closured function &
// *     Can be taken as return form.
var b = function (param) {
  return function xyz() {
    console.log(" F C F ");
  };
};

// 7. Function are heart of JS. 
// They are called first class citizens or first class functions because they have the ability to be stored in the variables,
//  passed as parameters and arguments. They can also be returned in the function.

// 8. Arrow Functions