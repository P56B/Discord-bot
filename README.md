# Discord Bot Projekt

Dieser Discord Bot bietet ein XP-System, ein Ticket-System mit Buttons, Willkommensnachrichten und automatische Nickname-Anpassungen.

## Funktionen

- **XP-System**: Benutzer erhalten XP für das Senden von Nachrichten und können im Level aufsteigen.
- **Ticket-System**: Benutzer können Tickets erstellen, indem sie auf einen Button klicken, der durch den Befehl `!ticket` im Chat erstellt wird.
- **Willkommensnachrichten**: Neue Benutzer erhalten eine Willkommensnachricht, wenn sie dem Server beitreten.
- **Nickname-Anpassung**: Der Nickname von neuen Benutzern wird automatisch angepasst.

## Befehle

- `!ticket`: Erstellt einen Button, um ein Ticket zu öffnen.

## Einstellungen

Die Einstellungen des Bots können in der `config.js`-Datei angepasst werden. Folgende Einstellungen sind verfügbar:

- `token`: Der Token des Bots von Discord.
- `saveInterval`: Wie oft das XP-System die Daten speichert.
- `cooldownPeriod`: Cooldown-Zeitraum für das Sammeln von XP.
- `welcomeChannel`: Der Kanalname, in dem Willkommensnachrichten gesendet werden.
- `ticketChannelPrefix`: Das Präfix für Ticket-Kanäle.
- `ticketCategory`: Die Kategorie, unter der Ticket-Kanäle erstellt werden.

## Installation und Start

1. Stellen Sie sicher, dass Node.js und npm auf Ihrem System installiert sind.
2. Installieren Sie die Abhängigkeiten mit `npm install`.
3. Stellen Sie die `config.js`-Datei und `.env`-Datei mit den erforderlichen Einstellungen ein.
4. Starten Sie den Bot mit `node index.js`.

## Lizenz

Dieses Projekt ist lizenziert unter der MIT Lizenz - siehe die `LICENSE`-Datei für Details.