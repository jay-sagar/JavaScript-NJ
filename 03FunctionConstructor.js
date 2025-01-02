// this allows you to encapsulate and hide the data from outsiders
function Counter() {
    var count = 0;

    this.incrementCounter = function() {
        count++;
        console.log(count)
    }

    this.decrementCounter = function() {
        count--;
        console.log(count)
    }
}

var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

class Counter { // this is equal to function constructor
    constructor() {
        var count = 0;

        this.incrementCounter = function () {
            count++;
            console.log(count);
        };

        this.decrementCounter = function () {
            count--;
            console.log(count);
        };
    }
}

