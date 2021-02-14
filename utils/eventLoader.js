const reqEvent = (event) => require(`../events/${event}`)

module.exports = TTEOGBOT => {
    TTEOGBOT.on('ready', () => reqEvent('ready')(TTEOGBOT))
    TTEOGBOT.on('msgDelete', (message) => reqEvent('message')(message))
    TTEOGBOT.on('message', (message) => reqEvent('message')(message))
    TTEOGBOT.on('messageDelete', (message) => reqEvent('messageDelete')(message))
    TTEOGBOT.on('messageUpdate', (oldMessage, newMessage) => reqEvent('messageUpdate')(oldMessage, newMessage))
    TTEOGBOT.on('channelCreate', (channel) => reqEvent('channelCreate')(channel))
    TTEOGBOT.on('channelDelete', (channel) => reqEvent('channelDelete')(channel))
    TTEOGBOT.on('channelUpdate', (oldChannel, newChannel) => reqEvent('channelUpdate')(oldChannel, newChannel))
    TTEOGBOT.on('emojiCreate', (emoji) => reqEvent('emojiCreate')(emoji))
    TTEOGBOT.on('emojiDelete', (emoji) => reqEvent('emojiDelete')(emoji))
    TTEOGBOT.on('emojiUpdate', (oldEmoji, newEmoji) => reqEvent('emojiUpdate')(oldEmoji, newEmoji))
    TTEOGBOT.on('roleCreate', (role) => reqEvent('roleCreate')(role))
    TTEOGBOT.on('roleDelete', (role) => reqEvent('roleDelete')(role))
    TTEOGBOT.on('guildMemberAdd', (member) => reqEvent('guildMemberAdd')(member))
    TTEOGBOT.on('guildMemberRemove', (member) => reqEvent('guildMemberRemove')(member))
}
