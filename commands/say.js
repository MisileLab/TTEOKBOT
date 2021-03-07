const discord = require('discord.js')
const error = require('../utils/embed.js')

module.exports.run = async (TTEOGBOT, message, query) => {
    var id = message.author.id
    var sayMessage = query.message.slice(query.command.length + 1).replace("@everyone", "`@everyone`").replace("@here", "`@here`") // 멘션 못하도록 막음

    if (sayMessage == "") {
        return error.wrongcmd(message, "`T_말해 [텍스트]`")
    } else {
        let embed = new (discord.MessageEmbed)
        embed.setColor("RANDOM")
        embed.setAuthor(message.author.username, message.author.avatarURL())
        embed.setDescription(sayMessage)
        message.delete()
        id === '764644897591656449'
            ? message.channel.send(sayMessage)
            : message.channel.send({ embed: embed })
    }
}

exports.callSign = ['say', '말해', '말해줘']
exports.helps = {
    description: '떡봇가 당신의 말을 대신 말합니다.\n',
    uses: '말해 [텍스트]'
}