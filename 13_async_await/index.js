// console.log(1);
// setTimeout(() => {
//     console.log('set timeout code');
// }, 20);

// console.log(2);
// console.log(3);




// const delay = (ms) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`завершился спустя ${ms}`)
//         }, ms)
//     });
// };
// console.log(1);
// delay(3000)
//     .then((message) => console.log(message));
// console.log(2);

// setTimeout(() => {
//     console.group('set timout callback');
// }, 1000);
// console.log(2);

const promise = new Promise((resolve, reject) => {
    resolve('text');
});

async function load() {
    try {
        console.log(1);
        const result = await promise;
        console.log('получил ответ от сервера: ', result);
        console.log(2);
        return result;
    } catch (e) {
        console.log('ошибка загрузки', e)
    }
}

console.log('inside 1')
load()
    .then(v => console.log('async функция зaкончилась'))
console.log('inside 2')