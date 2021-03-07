const error = require('../utils/embed.js')
const Discord = require('discord.js')

module.exports.run = async (TTEOGBOT, message) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return error.notper(message)
        let args = message.content.slice(" ").split(" ")
        let id = args.slice(1).join(" ")
        const embed = new Discord.MessageEmbed()
        .setTitle("성공적으로 사용자가 차단취소 되었습니다!")
        .setDescription(`차단취소된 유저 : ${id}`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("차단취소되었어요!")

        if (!id) {
            return error.wrongcmd(message, "`T_언밴 <id>`")
        }
        message.guild.members.unban(id).then(() => {
            return message.channel.send(embed)
        }).catch(() => {
            return error.equalPerms(message)
        })
}

exports.callSign = ['unban', '언밴', '차단취소', '언차단']
exports.helps = {
    description: '서버에서 차단시킨 유저를 차단취소합니다.\n',
    uses: '언밴 <@유저>',
    permission: 'BAN_MEMBERS'
}