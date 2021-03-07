const discord = require('discord.js')
const error = require('../utils/embed')

module.exports.run = async (TTEOGBOT, message) => {
    let embed2 = new (discord.MessageEmbed)
        embed2.setColor("RANDOM")
        embed2.setTitle(`떡봇 초대링크`)
        embed2.setDescription(`[여기](https://discord.com/oauth2/authorize?client_id=764644897591656449&permissions=8&scope=bot)를 클릭하면 초대하실 수 있어요!`)
        embed2.setTimestamp()
    message.channel.send(embed2)
}

exports.callSign = ['초대링크', 'invitelink', '초대', 'invite']
exports.helps = {
    description: '떡봇 초대링크 또는 다른봇의 초대링크를 보여줍니다.\n',
    uses: '초대링크'
}