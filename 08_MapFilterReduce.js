const arr = [5, 1, 3, 2, 6];

function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

function binary(x) {
    return x.toString(2);
}

const output = arr.map(binary);

function isOdd(x) {
    return x % 2;
}

const output2 = arr.filter(isOdd);

const output3 = arr.reduce((accumulator, current) => {
    accumulator = accumulator + current;
    return accumulator;
}, 0);

const output4 = arr.reduce((accumulator, current) => {
    if (current > accumulator) {
        accumulator = current;
    }
    return accumulator;
}, 0);

console.log(output);
console.log(output2);
console.log(output3);
console.log(output4);

const users = [
    { firstName: "Jay", lastName: "Sagar", age: 26},
    { firstName: "Donald", lastName: "trump", age: 75},
    { firstName: "elon", lastName: "musk", age: 50},
    { firstName: "virat", lastName: "kohli", age: 26},
];

const output5 = users.map((x) => {
    return x.firstName + " " +  x.lastName;
});

console.log(output5);

const output6 = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age]++;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})

console.log(output6);


// chaining
const output7 = users.filter(x => x.age < 30).map((x) => x.firstName);

console.log(output7);

const output8 = users.reduce((acc, curr) => {
    if (curr.age < 30) {
        acc.push(curr.firstName);
    }
    return acc;
}, [])

console.log(output8)