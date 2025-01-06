// Throttling => It is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.
// It will help to reduce the number of times the function is called.

let counter = 0;
const expensive = () => {
    console.log('Expensive function executed...', counter++);
};

// Define the throttle function
function throttle(fn, limit) {
    let flag = true;
    return function () {
        let context = this, args = arguments;
        if (flag) {
            fn.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    };
}

// Create a throttled version of the expensive function
const betterFunction = throttle(expensive, 300);

// Add the event listener with the throttled function
window.addEventListener('resize', betterFunction);

