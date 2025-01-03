const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved');
    }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved2');
    }, 10000);
});

async function asyncFunc() {
    const result = await promise;
    console.log(result);
    const result2 = await promise2;
    console.log(result2);
}
asyncFunc();