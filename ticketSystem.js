
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
        try {
            // Hier wird die Interaktion für das Erstellen eines Tickets gehandhabt.
            // Implementieren Sie die Logik, um auf das Drücken eines Ticketbuttons zu reagieren
            const ticketType = this.ticketTypes[interaction.customId];
            if (ticketType) {
                // Logik zum Erstellen eines Tickets entsprechend des gewählten Typs
                // Diese Funktion sollte die Ticket-Erstellung und -Konfiguration handhaben
                // Zum Beispiel das Erstellen eines neuen Kanals für das Ticket
            } else {
                throw new Error('Unbekannter Tickettyp');
            }
        } catch (error) {
            console.error('Fehler bei der Erstellung eines Tickets:', error);
            // Senden einer Fehlermeldung an den Benutzer
            interaction.reply({ content: 'Es gab einen Fehler bei der Erstellung deines Tickets. Bitte versuche es später erneut.', ephemeral: true });
        }
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
