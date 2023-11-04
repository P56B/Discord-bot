const fs = require('fs');
const path = require('path');

class XPSystem {
    constructor(saveInterval = 5000, cooldownPeriod = 60) {
        this.filePath = path.join(__dirname, 'storage.json');
        this.users = {}; // Speichert XP und Levels der Benutzer
        this.saveInterval = saveInterval;
        this.cooldownPeriod = cooldownPeriod;
        this.cooldowns = new Map(); // Speichert die Cooldowns der Benutzer
    }

    load() {
        try {
            if (fs.existsSync(this.filePath)) {
                this.users = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
            }
        } catch (error) {
            console.error('Fehler beim Laden der XP-Daten:', error);
        }
    }

    save() {
        // Verzögertes Speichern der Daten, um die Häufigkeit von Schreibvorgängen zu reduzieren
        if (this.saveTimeout) clearTimeout(this.saveTimeout);
        this.saveTimeout = setTimeout(() => {
            try {
                fs.writeFileSync(this.filePath, JSON.stringify(this.users, null, 4));
                console.log('XP-Daten gespeichert.');
            } catch (error) {
                console.error('Fehler beim Speichern der XP-Daten:', error);
            }
        }, this.saveInterval);
    }

    processMessage(message) {
        // Verarbeitet eine empfangene Nachricht und aktualisiert XP und Level
        const userId = message.author.id;
        const currentTime = Date.now();

        // Prüfen, ob der Benutzer einen Cooldown hat
        if (this.cooldowns.get(userId) > currentTime) return;

        // Cooldown für den Benutzer einstellen
        this.cooldowns.set(userId, currentTime + this.cooldownPeriod * 1000);

        // Benutzerinitialisierung, falls noch nicht vorhanden
        if (!this.users[userId]) {
            this.users[userId] = { xp: 0, level: 1 };
        }

        // XP hinzufügen und Level überprüfen
        const user = this.users[userId];
        user.xp += this.calculateXpForMessage(message);

        // Levelaufstieg prüfen
        const nextLevelXp = this.getNextLevelXp(user.level);
        if (user.xp >= nextLevelXp) {
            user.level++;
            user.xp -= nextLevelXp;
            this.onLevelUp(message, user.level); // Benachrichtigen bei Levelaufstieg
        }

        // Daten speichern
        this.save();
    }

    onLevelUp(message, level) {
        // Benachrichtigt den Benutzer bei einem Levelaufstieg und vergibt Belohnungen
        message.reply(\`Herzlichen Glückwunsch, ${message.author.username}! Du hast Level \${level} erreicht!\`);
        // Hier können weitere Belohnungen hinzugefügt werden
    }

    calculateXpForMessage(message) {
        // Berechnet XP basierend auf der Nachrichtenlänge
        const xp = Math.min(message.content.length / 10, 20); // Bis zu 20 XP pro Nachricht
        return xp;
    }

    getNextLevelXp(level) {
        // Berechnet die erforderliche XP-Anzahl für den nächsten Levelaufstieg
        return 5 * (level ** 2) + 50 * level + 100;
    }
}

module.exports = XPSystem;