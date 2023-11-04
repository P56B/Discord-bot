
// Für das Testen müsste Jest als Entwicklungsabhängigkeit hinzugefügt werden:
// npm install --save-dev jest

// In der package.json Datei müsste ein Testskript hinzugefügt werden:
// "scripts": {
//   "test": "jest"
// }

// Beispiel für einen Unit-Test für das XP-System
const XPSystem = require('../xpSystem');

describe('XPSystem', () => {
  test('Benutzer XP initial bei 0', () => {
    const xpSystem = new XPSystem();
    const userXP = xpSystem.getXP('some-user-id');
    expect(userXP).toBe(0);
  });

  // Weitere Tests für Methoden der XPSystem Klasse hinzufügen
});

// Die Tests würden mit 'npm test' ausgeführt werden.
