
/**
 * Sendet eine Willkommensnachricht an ein neues Mitglied.
 * @param {GuildMember} member - Das Mitglied, das dem Server beigetreten ist.
 */
function welcomeMember(member) {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'willkommen');
    if (!channel) return;
    channel.send(\`Willkommen auf dem Server, ${member.user}! Wir sind froh, dich hier zu haben!\`);
}

/**
 * Passt den Nicknamen eines neuen oder bestehenden Mitglieds an.
 * @param {GuildMember} member - Das Mitglied, dessen Nickname angepasst werden soll.
 */
function adjustNickname(member) {
    // Hier können Sie Logik hinzufügen, um zu entscheiden, wie der Nickname angepasst werden soll.
    // Im folgenden Beispiel wird "User-" vor den Benutzernamen gestellt, wenn nicht bereits vorhanden.
    const prefix = 'User-';
    if (!member.nickname || !member.nickname.startsWith(prefix)) {
        member.setNickname(`${prefix}${member.user.username}`).catch(console.error);
    }
}

module.exports = { welcomeMember, adjustNickname };
