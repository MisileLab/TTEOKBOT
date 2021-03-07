
const reqEvent = (event) => require(`../events/${event}`)

module.exports = TTEOGBOT => {
    TTEOGBOT.on('ready', () => reqEvent('ready')(TTEOGBOT))
    TTEOGBOT.on('message', (message) => reqEvent('message')(message))
    TTEOGBOT.on('messageDelete', (message) => reqEvent('messageDelete')(message))
    TTEOGBOT.on('messageUpdate', (oldMessage, newMessage) => reqEvent('messageUpdate')(oldMessage, newMessage))
    TTEOGBOT.on('channelCreate', (channel) => reqEvent('channelCreate')(channel))
    TTEOGBOT.on('channelDelete', (channel) => reqEvent('channelDelete')(channel))
    TTEOGBOT.on('channelUpdate', (oldChannel, newChannel) => reqEvent('channelUpdate')(oldChannel, newChannel))
    TTEOGBOT.on('roleCreate', (role) => reqEvent('roleCreate')(role))
    TTEOGBOT.on('roleDelete', (role) => reqEvent('roleDelete')(role))
    TTEOGBOT.on('guildMemberAdd', (member) => reqEvent('guildMemberAdd')(member))
    TTEOGBOT.on('guildMemberRemove', (member) => reqEvent('guildMemberRemove')(member))
}
