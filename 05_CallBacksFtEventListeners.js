// what is a Callback function in javascript

setTimeout(function() {
    console.log("timer");
}, 5000);

function x(y) {
    console.log("x");
    y();
}

x(function y() {
    console.log("y");
})

// Closures demo with event listeners
// scope demo with event listeners

function attachEventListeners() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz() {
        console.log("Button clicked", ++count);
    })
}
attachEventListeners();

/* 
0. When asynchronous like setTimeout called it removed from the call stack and put side so that the main thread can run
    and when its time over it push back to call stack to execute
1. Function that is passed on as argument to another function is called callback function.
2. setTimeout helps turn JS which is single threaded and synchronous into asynchronous.
3. Event listeners can also invoke closures with scope.
4. Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used.
*/