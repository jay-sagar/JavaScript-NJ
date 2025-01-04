// Debounce method => It will delay the execution of the function until the user stops typing for a certain amount of time.
// It will help to reduce the number of API calls made.
// It will help to reduce the number of times the function is called.

let counter = 0;
const getData = () => {
    // calls an API and gets data
    console.log('Fetching data...', counter++);
};

const debounce = function (fn, delay) {
    let timer;
    return function () {
        let context = this, args = arguments;

        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}

const betterFunction = debounce(getData, 300);