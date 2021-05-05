// console.log(1);

// setTimeout(function(){
//     console.log('st 1');
// }, 1000)
// setTimeout(function(){
//     console.log('st 2');
// }, 500)

// console.log(2);

// console.log(3);

// обешания ))
// const freeCodeCampPromise = new Promise (
//     function(resolve, reject) {
//         resolve('Я сделал домашку')
//     }
// );



// const loadFiles = new Promise((resolve, reject) => {
//     for (let i = 0; i < 1e7; i++) {
//         //
//     }
// });

// console.log('синхроннвй код');

// console.log('Другая синхронная операция');




const loadFiles = new Promise((resolve, reject) => {
    const FILE_LIMIT = 500;
    let currentLimit = 0;

    for (let i = 0; i < 50; i++) {
        currentLimit = currentLimit + 15;
        if (currentLimit > FILE_LIMIT) {
            reject('Привышен лимит, загрузка отменена')
        }
    }
    resolve('занрузил все файлы')
});

