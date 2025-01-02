// here it will print the all five because all i are referring to same reference
// so it will quickly increment to 5 and then it will print
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, 2000);
}

// to solve it you can use let as it is a block scope

// if you want to use var only then you have to do this
for (var i = 0; i < 5; i++) {
    function closureEx (x) {
        setTimeout(() => {
            console.log(x);
        }, x * 1000);
    }
    closureEx(i);
}
