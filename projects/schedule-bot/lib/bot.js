const { Telegraf } = require('telegraf');


const bot = new Telegraf(process.env.token);
exports.bot = bot;

exports.runBot = async function() {
    console.log('Запускаю бота...');
    try { 
        
        await bot.launch();

        console.log('Бот успешно запущен');
    } catch (error) {
        console.log('Ошибка: ', error);
    }
}
