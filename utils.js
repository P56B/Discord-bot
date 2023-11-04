/**
 * Überprüft die notwendigen Umgebungsvariablen.
 */
function checkEnvironment() {
    const requiredEnvVars = ['DISCORD_BOT_TOKEN'];
    const unsetEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);
    if (unsetEnvVars.length > 0) {
        throw new Error(\`Fehlende Umgebungsvariablen: \${unsetEnvVars.join(', ')}\`);
    }
    // Weitere Überprüfungen können hier hinzugefügt werden
}

module.exports = { checkEnvironment };