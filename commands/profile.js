const discord = require('discord.js')

module.exports.run = async (bot, message) => {
    const user = message.mentions.users.first() || message.author
    if (!user) {
        let embed = new (discord.MessageEmbed)
            embed.setAuthor(message.author.username, message.author.avatarURL())
            embed.setImage(user.displayAvatarURL({ size: 2048, dynamic: true }))
            embed.setColor("RANDOM")
            message.channel.send(embed)
    }
    let embed = new (discord.MessageEmbed)
        embed.setAuthor(message.author.username, message.author.avatarURL())
        embed.setImage(user.displayAvatarURL({ size: 2048, dynamic: true }))
        embed.setColor("RANDOM")
        message.channel.send(embed)
}

exports.callSign = ['프로필', '프사', 'profile', 'avatar']
exports.helps = {
    description: '해당 유저의 프로필을 확대하여 보여줍니다.\n만약 선택되지않을경우, 자신의 프로필을 보여줍니다.\n',
    uses: '프로필'
}
