const discord = require('discord.js')

module.exports.run = async (TTEOGBOT, message) => {
    let embed = new (discord.MessageEmbed)
        embed.setColor("RANDOM")
        embed.setTitle("떡봇 초대링크")
        embed.setDescription("[여기](https://discord.com/oauth2/authorize?client_id=764644897591656449&permissions=8&scope=bot)를 클릭하면 초대하실 수 있어요!")
        embed.setTimestamp()
        message.channel.send(embed)
}

exports.callSign = ['초대링크', 'invitelink', '초대', 'invite']
exports.helps = {
    description: '떡봇 초대링크를 보여줍니다.\n',
    uses: '초대링크'
}