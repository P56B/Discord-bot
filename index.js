
require('dotenv').config();
const { Client, Intents } = require('discord.js');
const XPSystem = require('./xpSystem');
const { welcomeMember, adjustNickname } = require('./welcomeAndNickname');
const { handleTicketCreation } = require('./ticketSystem');
const config = require('./config');
const { checkEnvironment } = require('./utils');

const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES, 
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ] 
});

const xpSystem = new XPSystem(config.saveInterval, config.cooldownPeriod);

client.once('ready', () => {
    console.log(`Eingeloggt als ${client.user.tag}!`);
    checkEnvironment(); // Überprüfe die Umgebungsvariablen
    xpSystem.load(); // XP-System initialisieren und Daten laden
});

client.on('messageCreate', message => {
    if (!message.guild || message.author.bot) return;
    if (message.content.startsWith('!')) {
        processCommand(message);
        // Befehlsverarbeitung wird nun vom commandHandler übernommen
            case 'ticket':
                const ticketSystem = new TicketSystem(client);
                
                
            const { processCommand } = require('./commandHandler');
            
                
        }
    } else {
        xpSystem.processMessage(message); // Verarbeiten der Nachricht für das XP-System
    }
});

// Diese Funktion wird nun in commandHandler.js definiert
    const row = new MessageActionRow().addComponents(
        new MessageButton()
            .setCustomId('createTicket')
            .setLabel('Erstelle ein Ticket')
            .setStyle('PRIMARY')
    );
    const ticketButtons = ticketSystem.createTicketButtons();
message.channel.send({ content: 'Wähle eine Ticketart:', components: [ticketButtons] });
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'createTicket') {
        await handleTicketCreation(interaction);
    }
});

client.on('guildMemberAdd', member => {
    welcomeMember(member, config.welcomeChannel); // Sendet Willkommensnachricht
    adjustNickname(member); // Passt den Nicknamen des Mitglieds an
});

client.login(config.token);
