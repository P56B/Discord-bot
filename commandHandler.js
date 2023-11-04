const { isOnCooldown, setCooldown } = require('./cooldownManager');

function processCommand(message) {
    const args = message.content.slice(1).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = commands[commandName];

    if (!command) {
        message.reply('Unbekannter Befehl.');
        return;
    }

    if (isOnCooldown(commandName, message.author.id)) {
        message.reply('Du musst warten, bevor du diesen Befehl wieder verwenden kannst.');
        return;
    }

    command(message, args);
    setCooldown(commandName, message.author.id);
}

module.exports = { processCommand };