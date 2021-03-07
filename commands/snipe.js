const Discord = require('discord.js')
const error = require('../utils/embed.js')

exports.run = async (TTEOGBOT, message) => {
    const snipes = TTEOGBOT.snipes.get(message.channel.id) || [];
    const args = message.content.slice("T_").split(' ')
    const msg = snipes[args[1]-1|| 0]
    if(!msg) return error.sendEmbed(message, "삭제된 메세지가 없습니다!")
    if(args[1] > snipes.length) {
        return error.sendEmbed(message, "삭제된 메세지가 없습니다!")
    }
    const embed = new Discord.MessageEmbed()
    .setAuthor(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true, size: 256 }))
    .setDescription(msg.content)
    .setFooter(`삭제된 날짜 : ${msg.date} | ${args[1]||1}/${snipes.length}`)
    .setColor("RANDOM")
    if(msg.attachment) embed.setImage(msg.attachment)
    message.channel.send(embed)
}


exports.callSign = ['스나이프', 'snipe', 's', 'S']
exports.helps = {
    description: '지운 메세지를 보여줍니다.\n',
    uses: '스나이프',
}
