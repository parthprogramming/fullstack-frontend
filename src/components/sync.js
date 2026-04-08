// function greet() {
//     console.log('hello')
// }
// console.log('before')
// setTimeout(greet, 2000)
// console.log('after')

// setInterval(greet,2000)
function onFullFilled(msg) {
    console.log('fullfilled', msg);
}
function onRejected(msg) {
    console.log('rejected', msg);
}
function onFinally() {
    console.log('finally');
}

const p = new Promise((resolve, reject) => {
    console.log('in side promise processing...');
    const result = true;
    if (result) {
        resolve("order placed id is " + 1);
    } else {
        reject("order not placed");
    }
})

// console.log('order placed');
// p.then(onFullFilled)
//     .catch(onRejected)
//     .finally(onFinally)

p.then(success => console.log(success))
    .catch(error => console.log(error))
    .finally(() => console.log('in finally'));
