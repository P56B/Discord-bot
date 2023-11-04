
// config.js
module.exports = {
  token: process.env.BOT_TOKEN, // Der Token Ihres Bots
  saveInterval: process.env.SAVE_INTERVAL, // Speicherintervall für die Datenpersistenz
  cooldownPeriod: process.env.COOLDOWN_PERIOD, // Abkühlzeit für bestimmte Operationen
  welcomeChannel: process.env.WELCOME_CHANNEL, // Kanal-ID für Willkommensnachrichten
  // ... weitere Konfigurationsvariablen
};
