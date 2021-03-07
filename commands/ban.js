const Discord = require('discord.js')
const error = require('../utils/embed.js')


module.exports.run = async (TTEOGBOT, message) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return error.notper(message)
        let args = message.mentions.members.first()

        const embed = new Discord.MessageEmbed()
        .setTitle("성공적으로 사용자가 차단 되었습니다!")
        .setDescription(`차단된 유저 : ${args.user.username}`)
        .setColor("RANDOM")
        .setThumbnail(args.user.displayAvatarURL())
        .setTimestamp()
        .setFooter("차단되었어요!")

        if (!args) {
            return error.wrongcmd(message, "`T_차단 @멘션`")
        }
        let member = message.mentions.members.first()
        member.ban().then(() => {
            return message.channel.send(embed)
        }).catch(() => {
            return error.equalPerms(message)
        })
}

exports.callSign = ['ban', '밴', '차단', '영구차단']
exports.helps = {
    description: '서버에서 해당 유저를 차단시킵니다.\n',
    uses: '차단',
    permission: 'BAN_MEMBERS'
}