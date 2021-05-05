const { bot } = require('./bot');
const { getTodaySchedule } = require('./schedule');

exports.setCommands = function() {
    bot.command('schedule', (ctx) => {
        
        const schedule = getTodaySchedule();
        
        ctx.reply(schedule);
    });
}