const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

class TicketSystem {
    constructor(client) {
        this.client = client;
        this.ticketTypes = {
            support: {
                label: 'Support',
                description: 'Erstelle ein Ticket für persönlichen Support.',
                color: 'PRIMARY'
            },
            bug: {
                label: 'Bug Report',
                description: 'Melde einen Bug oder ein technisches Problem.',
                color: 'SECONDARY'
            },
            inquiry: {
                label: 'Allgemeine Frage',
                description: 'Stelle eine allgemeine Frage an das Team.',
                color: 'SUCCESS'
            }
            // Weitere Tickettypen können hier hinzugefügt werden
        };
    }

    createTicketInteraction(interaction) {
        // Hier wird die Interaktion für das Erstellen eines Tickets gehandhabt.
        // Diese Methode muss noch implementiert werden.
    }

    createTicketButtons() {
        const row = new MessageActionRow();
        for (const [type, ticketType] of Object.entries(this.ticketTypes)) {
            const button = new MessageButton()
                .setCustomId(type)
                .setLabel(ticketType.label)
                .setStyle(ticketType.color);
            row.addComponents(button);
        }
        return row;
    }
}

module.exports = TicketSystem;