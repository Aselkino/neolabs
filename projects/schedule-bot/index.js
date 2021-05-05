require('dotenv').config();

const { runBot } = require('./lib/bot');
const { setCommands } = require('./lib/bot-cmds');

async function start() {
    try {
        setCommands();
        await runBot();
    } catch(error) {
        console.log('Ошибка', error);
    }
}

start();
