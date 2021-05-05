// const { Telegaf, Telegraf } = require('telegraf')
// const token = '1657753595:AAHanfIdeA3Zu6vnvO75J88zi-VOeF3SMQI';

// const bot = new Telegraf(token);



// bot.on('text', (ctx) => {
//     ctx.reply('Hello 👌🏻');
//     console.log(ctx);
// });


const jokes = ['шутка1', 'шутка1', 'шутка1']




exports.startBot = function() {
    try{   
        bot.jokes('giveJoke', (ctx) => {
            const jokesIndex = Math.floor(Math.random() * jokes.length);
            const joke = jokes[jokesIndex];
            ctx.reply(joke)
            // ctx.replyWithPhoto({
            //     url: 'https://unsplash.com/photos/npxXWgQ33ZQ',
            //     filename: 'mackbook.jpg'
            // })
        })


    await bot.launch()
        // .then(() => {
            console.log('Бот успешно запушен');
        // });
    catch(err) {
        console.log('ошибка при запуске приложения',err);
    }
}
}