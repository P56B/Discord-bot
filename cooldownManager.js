const cooldowns = new Map();

function isOnCooldown(commandName, userId) {
    const now = Date.now();
    const timestamps = cooldowns.get(commandName);
    if (timestamps && timestamps.has(userId)) {
        const expirationTime = timestamps.get(userId) + (3 * 1000); // Cooldown-Zeit: 3 Sekunden
        if (now < expirationTime) {
            return true;
        }
    }
    return false;
}

function setCooldown(commandName, userId) {
    const now = Date.now();
    if (!cooldowns.has(commandName)) {
        cooldowns.set(commandName, new Map());
    }
    const timestamps = cooldowns.get(commandName);
    timestamps.set(userId, now);
    setTimeout(() => timestamps.delete(userId), 3 * 1000); // Cooldown-Zeit: 3 Sekunden
}

module.exports = { isOnCooldown, setCooldown };