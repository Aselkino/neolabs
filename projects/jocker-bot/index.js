const {startBot} = require('./lib/bot')

// const p = new Promise((resolve, reject) => {
//     resolve('Асинхронность');
// })

// const p = new Promise((resolve, reject) => {
//     reject('Ошибка ошибка!!!');
// });

(async function() {
    console.log('начинается запуск приложения');
    
    try {
        // const v = await p; //будет ошибка
        await startBot();

    } catch(err) {
        console.log('ошибка при запуске приложения',err);
    }

}) ();                                // vyzyvaetsya momental'no
