// fetch function
// const todosPromise = fetch('https://jsonplaceholder.typicode.com/todos')
// console.log(todosPromise)

// todosPromise.then(success => {
//     console.log(success.status);
//     console.log(success.statusText);
//     // console.log(success.json());
//     const dataPromise = success.json();
//     dataPromise.then(data => {
//         // console.log(data);
//         console.log(data[0]);
//     })
//         .catch(error => console.log(error))
//         .finally(() => console.log('in finally'));
// })
//     .catch(error => console.log(error))
//     .finally(() => console.log('in finally'));

async function getData() {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos');
    // console.log(result);
    // result.json().then(data => console.log(data[0]));
    const data = await result.json();
    console.log(data[0]);
}
getData();

