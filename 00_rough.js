const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
}

const arr2 = arr.forEach((element, index) => {
    return element = element + 1;
});

const arr3 = arr.map((element, index) => {
    return element = element + 1;
});

const arr4 = arr.filter((element, index) => {
    return element < 10;
});

console.log(arr)
console.log(arr2)
console.log(arr3)
console.log(arr4)