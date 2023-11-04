
class CommandValidator {
    constructor(commands) {
        this.commands = commands; // Hier werden alle verfügbaren Befehle und ihre Schemas gespeichert
    }

    validate(message) {
        const content = message.content;
        const commandName = content.split(' ')[0].substring(1); // Entfernt das Präfix und spaltet den Befehlsnamen ab
        const command = this.commands[commandName];

        if (!command) {
            return { valid: false, error: 'Unbekannter Befehl.' };
        }

        // Hier könnte eine komplexere Logik implementiert werden, um Argumente zu validieren
        return { valid: true, command };
    }
}

module.exports = CommandValidator;
